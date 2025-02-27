const DemoApp = angular.module('DemoApp', ['dx']);

DemoApp.controller('DemoController', ($scope) => {
  const chartDataSource = new DevExpress.data.DataSource({
    store: {
      type: 'odata',
      version: 2,
      url: 'https://js.devexpress.com/Demos/WidgetsGallery/odata/WeatherItems',
    },
    postProcess(results) {
      return results[0].DayItems;
    },
    expand: 'DayItems',
    filter: ['Id', '=', 1],
    paginate: false,
  });

  $scope.chartOptions = {
    dataSource: chartDataSource,
    title: 'Temperature in Seattle , 2017',
    size: {
      height: 420,
    },
    series: {
      argumentField: 'Number',
      valueField: 'Temperature',
      type: 'spline',
    },
    legend: {
      visible: false,
    },
    commonPaneSettings: {
      border: {
        visible: true,
        width: 2,
        top: false,
        right: false,
      },
    },
    export: {
      enabled: true,
    },
    tooltip: {
      enabled: true,
      customizeTooltip(arg) {
        return {
          text: `${arg.valueText}&#176C`,
        };
      },
    },
    valueAxis: {
      valueType: 'numeric',
      grid: {
        opacity: 0.2,
      },
      label: {
        customizeText() {
          return `${this.valueText}&#176C`;
        },
      },
    },
    argumentAxis: {
      type: 'discrete',
      grid: {
        visible: true,
        opacity: 0.5,
      },
    },
    loadingIndicator: {
      enabled: true,
    },
  };

  $scope.selectBoxOptions = {
    width: 150,
    value: 1,
    items: months,
    valueExpr: 'id',
    displayExpr: 'name',
    onValueChanged(e) {
      chartDataSource.filter(['Id', '=', e.value]);
      chartDataSource.load();
    },
  };
});
