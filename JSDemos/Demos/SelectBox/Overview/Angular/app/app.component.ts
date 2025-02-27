import { NgModule, Component, enableProdMode } from '@angular/core';
import { BrowserModule, BrowserTransferStateModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import notify from 'devextreme/ui/notify';
import { DxSelectBoxModule, DxTextBoxModule, DxTemplateModule } from 'devextreme-angular';
import ArrayStore from 'devextreme/data/array_store';
import { DxSelectBoxTypes } from 'devextreme-angular/ui/select-box';
import { Product, Service } from './app.service';

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
  simpleProducts: string[];

  products: Product[];

  data: ArrayStore;

  constructor(service: Service) {
    this.products = service.getProducts();
    this.simpleProducts = service.getSimpleProducts();
    this.data = new ArrayStore({
      data: this.products,
      key: 'ID',
    });
  }

  onValueChanged({ value }: DxSelectBoxTypes.ValueChangedEvent) {
    notify(`The value is changed to: "${value}"`);
  }
}

@NgModule({
  imports: [
    BrowserModule,
    BrowserTransferStateModule,
    DxSelectBoxModule,
    DxTextBoxModule,
    DxTemplateModule,
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule);
