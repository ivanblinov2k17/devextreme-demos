import {
  NgModule, Component, ViewChild, enableProdMode,
} from '@angular/core';
import { BrowserModule, BrowserTransferStateModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { DxDiagramModule } from 'devextreme-angular';
import * as AspNetData from 'devextreme-aspnet-data-nojquery';

if (!/localhost/.test(document.location.host)) {
  enableProdMode();
}
declare var __moduleName: string;

@Component({
  selector: 'demo-app',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  moduleId: __moduleName,
  preserveWhitespaces: true,
})
export class AppComponent {
  url: string;

  dataSource: AspNetData.CustomStore;

  constructor() {
    this.url = 'https://js.devexpress.com/Demos/Mvc/api/DiagramEmployees';

    this.dataSource = AspNetData.createStore({
      key: 'ID',
      loadUrl: `${this.url}/Employees`,
      insertUrl: `${this.url}/InsertEmployee`,
      updateUrl: `${this.url}/UpdateEmployee`,
      deleteUrl: `${this.url}/DeleteEmployee`,
      onBeforeSend(method, ajaxOptions) {
        ajaxOptions.xhrFields = { withCredentials: true };
      },
      onInserting(values) {
        values.ID = 0;
        values.Title = values.Title || 'New Position';
        values.Prefix = 'Mr';
        values.FullName = 'New Employee';
        values.City = 'LA';
        values.State = 'CA';
        values.HireDate = new Date();
      },
    });
  }
}

@NgModule({
  imports: [
    BrowserModule,
    BrowserTransferStateModule,
    DxDiagramModule,
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule);
