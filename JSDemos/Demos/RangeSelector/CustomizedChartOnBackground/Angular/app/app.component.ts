import { NgModule, Component, enableProdMode } from '@angular/core';
import { BrowserModule, BrowserTransferStateModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { DxRangeSelectorModule } from 'devextreme-angular';

if (!/localhost/.test(document.location.host)) {
  enableProdMode();
}
declare var __moduleName: string;

@Component({
  selector: 'demo-app',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  moduleId: __moduleName,
})
export class AppComponent {
  dataSource = [
    { x: 0, y: 15 },
    { x: 1, y: -1 },
    { x: 2, y: 10 },
    { x: 3, y: -3 },
    { x: 4, y: 16 },
    { x: 5, y: 0 },
    { x: 6, y: 9 },
    { x: 7, y: 3 },
    { x: 8, y: 15 },
    { x: 9, y: -1 },
    { x: 10, y: 10 },
    { x: 11, y: -3 },
    { x: 12, y: 16 },
    { x: 13, y: 0 },
    { x: 14, y: 9 },
    { x: 15, y: 3 },
    { x: 16, y: 13 },
  ];

  customizeText = ({ valueText }) => `${valueText} s`;
}

@NgModule({
  imports: [
    BrowserModule,
    BrowserTransferStateModule,
    DxRangeSelectorModule,
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule);
