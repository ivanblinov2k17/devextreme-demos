import { NgModule, Component, enableProdMode } from '@angular/core';
import { BrowserModule, BrowserTransferStateModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { DxMultiViewModule, DxCheckBoxModule, DxTemplateModule } from 'devextreme-angular';

import { Company, Service } from './app.service';

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
  companies: Company[];

  itemCount: number;

  constructor(service: Service) {
    this.companies = service.getCompanies();
    this.itemCount = this.companies.length;
  }
}

@NgModule({
  imports: [
    BrowserModule,
    BrowserTransferStateModule,
    DxMultiViewModule,
    DxCheckBoxModule,
    DxTemplateModule,
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule);
