import {
  NgModule, Component, ElementRef, enableProdMode,
} from '@angular/core';
import { BrowserModule, BrowserTransferStateModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { DxChartModule, DxButtonModule } from 'devextreme-angular';

import { Service, DataItem } from './app.service';

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
  dataSource: DataItem[];

  colors: string[];

  service: Service;

  isFirstLevel: boolean;

  constructor(service: Service, element: ElementRef) {
    this.dataSource = service.filterData('');
    this.colors = service.getColors();
    this.service = service;
    this.isFirstLevel = true;
  }

  onButtonClick() {
    if (!this.isFirstLevel) {
      this.isFirstLevel = true;
      this.dataSource = this.service.filterData('');
    }
  }

  onPointClick(e) {
    if (this.isFirstLevel) {
      this.isFirstLevel = false;
      this.dataSource = this.service.filterData(e.target.originalArgument);
    }
  }

  customizePoint = () => ({
    color: this.colors[Number(this.isFirstLevel)],
    ...this.isFirstLevel ? {} : {
      hoverStyle: {
        hatching: 'none',
      },
    },
  });
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
