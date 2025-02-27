import {
  NgModule, Component, ViewChild, enableProdMode,
} from '@angular/core';
import { BrowserModule, BrowserTransferStateModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import {
  DxListModule,
  DxButtonModule,
  DxTagBoxModule,
  DxFilterBuilderComponent,
  DxFilterBuilderModule,
} from 'devextreme-angular';
import DataSource from 'devextreme/data/data_source';
import { Fields, Filter, Service } from './app.service';

if (!/localhost/.test(document.location.host)) {
  enableProdMode();
}
declare var __moduleName: string;

@Component({
  selector: 'demo-app',
  providers: [Service],
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  moduleId: __moduleName,
})

export class AppComponent {
  @ViewChild(DxFilterBuilderComponent, { static: false }) filterBuilder: DxFilterBuilderComponent;

  dataSource: DataSource;

  fields: Fields;

  filter: Filter;

  constructor(service: Service) {
    this.fields = service.getFields();
    this.filter = service.getFilter();
    this.dataSource = new DataSource({
      store: service.getProducts(),
    });
  }

  refreshDataSource() {
    this.dataSource.filter(this.filterBuilder.instance.getFilterExpression());
    this.dataSource.load();
  }
}

@NgModule({
  imports: [
    BrowserModule,
    BrowserTransferStateModule,
    DxListModule,
    DxButtonModule,
    DxTagBoxModule,
    DxFilterBuilderModule,
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})

export class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule);
