import { NgModule, Component, enableProdMode } from '@angular/core';
import { BrowserModule, BrowserTransferStateModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { DxDataGridModule, DxSelectBoxModule } from 'devextreme-angular';
import themes from 'devextreme/ui/themes';
import { Service, Sale } from './app.service';

if (!/localhost/.test(document.location.host)) {
  enableProdMode();
}
declare var __moduleName: string;

@Component({
  selector: 'demo-app',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  moduleId: __moduleName,
  providers: [Service],
  preserveWhitespaces: true,
})
export class AppComponent {
  sales: Sale[];

  allMode: string;

  checkBoxesMode: string;

  constructor(service: Service) {
    this.sales = service.getSales();
    this.allMode = 'allPages';
    this.checkBoxesMode = themes.current().startsWith('material') ? 'always' : 'onClick';
  }
}

@NgModule({
  imports: [
    BrowserModule,
    BrowserTransferStateModule,
    DxDataGridModule,
    DxSelectBoxModule,
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule);
