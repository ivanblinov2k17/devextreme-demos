import { NgModule, Component, enableProdMode } from '@angular/core';
import { BrowserModule, BrowserTransferStateModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { DxFileManagerModule } from 'devextreme-angular';
import RemoteFileSystemProvider from 'devextreme/file_management/remote_provider';

if (!/localhost/.test(document.location.host)) {
  enableProdMode();
}
declare var __moduleName: string;

@Component({
  selector: 'demo-app',
  templateUrl: 'app.component.html',
  moduleId: __moduleName,
  preserveWhitespaces: true,
})
export class AppComponent {
  allowedFileExtensions: string[];

  remoteProvider: RemoteFileSystemProvider;

  constructor() {
    this.allowedFileExtensions = [];
    this.remoteProvider = new RemoteFileSystemProvider({
      endpointUrl: 'https://js.devexpress.com/Demos/Mvc/api/file-manager-db',
    });
  }
}

@NgModule({
  imports: [
    BrowserModule,
    BrowserTransferStateModule,
    DxFileManagerModule,
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule);
