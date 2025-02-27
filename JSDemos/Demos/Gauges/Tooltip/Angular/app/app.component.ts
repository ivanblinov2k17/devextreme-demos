import { NgModule, Component, enableProdMode } from '@angular/core';
import { BrowserModule, BrowserTransferStateModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { DxBarGaugeModule } from 'devextreme-angular';

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
  getText(item, text) {
    return `Racer ${item.index + 1} - ${text} km/h`;
  }

  customizeTooltip = (arg) => ({
    text: this.getText(arg, arg.valueText),
  });

  customizeText = (arg) => this.getText(arg.item, arg.text);
}

@NgModule({
  imports: [
    BrowserModule,
    BrowserTransferStateModule,
    DxBarGaugeModule,
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule);
