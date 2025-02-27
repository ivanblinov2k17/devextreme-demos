import {
  NgModule, Component, ViewChild, enableProdMode,
} from '@angular/core';
import { BrowserModule, BrowserTransferStateModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { NgForm } from '@angular/forms';

import { DxTextBoxModule, DxFileUploaderModule, DxButtonModule } from 'devextreme-angular';
import notify from 'devextreme/ui/notify';

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
  @ViewChild('form') form: NgForm;

  updateClick() {
    notify('Uncomment the line to enable sending a form to the server.');
    // form.submit();
  }
}

@NgModule({
  imports: [
    BrowserModule,
    BrowserTransferStateModule,
    DxTextBoxModule,
    DxFileUploaderModule,
    DxButtonModule,
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule);
