import { NgModule, Component, enableProdMode } from '@angular/core';
import { BrowserModule, BrowserTransferStateModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { DxBarGaugeModule, DxSelectBoxModule } from 'devextreme-angular';

import { Color, Service } from './app.service';

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
})

export class AppComponent {
  colors: Color[];

  values: number[] = [];

  currentColor: string;

  constructor(service: Service) {
    this.colors = service.getColors();
    this.currentColor = this.colors[0].code;
  }

  getBasicColors(value) {
    const code = Number(`0x${value.slice(1)}`);

    this.values[0] = (code >> 16) & 0xff;
    this.values[1] = (code >> 8) & 0xff;
    this.values[2] = code & 0xff;
    return this.values;
  }
}

@NgModule({
  imports: [
    BrowserModule,
    BrowserTransferStateModule,
    DxBarGaugeModule,
    DxSelectBoxModule,
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule);
