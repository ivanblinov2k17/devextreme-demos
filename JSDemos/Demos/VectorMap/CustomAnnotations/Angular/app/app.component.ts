import { NgModule, Component, enableProdMode } from '@angular/core';
import { BrowserModule, BrowserTransferStateModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { DxVectorMapModule } from 'devextreme-angular';
import * as mapsData from 'devextreme-dist/js/vectormap-data/usa.js';
import { StatesCollection, Service } from './app.service';

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
  usaMap = mapsData.usa;

  states: StatesCollection[];

  constructor(service: Service) {
    this.states = service.getStatesData();
  }

  getImagePath = (annotation: StatesCollection) => {
    const name = annotation.data.name.replace(/\s/, '');
    return `../../../../images/flags/${name}.svg`;
  };
}

@NgModule({
  imports: [
    BrowserModule,
    BrowserTransferStateModule,
    DxVectorMapModule,
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}

platformBrowserDynamic().bootstrapModule(AppModule);
