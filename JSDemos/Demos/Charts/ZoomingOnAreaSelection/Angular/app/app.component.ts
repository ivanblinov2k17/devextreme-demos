import {
  NgModule, Component, ViewChild, enableProdMode,
} from '@angular/core';
import { BrowserModule, BrowserTransferStateModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { DxChartModule, DxChartComponent, DxButtonModule } from 'devextreme-angular';

import { Service, BirthLife } from './app.service';

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
  @ViewChild(DxChartComponent, { static: false }) component: DxChartComponent;

  data: BirthLife[];

  constructor(service: Service) {
    this.data = service.getData();
  }

  resetZoom() {
    this.component.instance.resetVisualRange();
  }

  customizeTooltip(arg) {
    const data = arg.point.data;
    return {
      text: `${data.country} ${data.year}`,
    };
  }
}

@NgModule({
  imports: [
    BrowserModule,
    BrowserTransferStateModule,
    DxChartModule,
    DxButtonModule,
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule);
