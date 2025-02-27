import { NgModule, Component, enableProdMode } from '@angular/core';
import { BrowserModule, BrowserTransferStateModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { DxFileUploaderModule, DxProgressBarModule } from 'devextreme-angular';

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
  isDropZoneActive = false;

  imageSource = '';

  textVisible = true;

  progressVisible = false;

  progressValue = 0;

  constructor() {
    this.onDropZoneEnter = this.onDropZoneEnter.bind(this);
    this.onDropZoneLeave = this.onDropZoneLeave.bind(this);
    this.onUploaded = this.onUploaded.bind(this);
    this.onProgress = this.onProgress.bind(this);
    this.onUploadStarted = this.onUploadStarted.bind(this);
  }

  onDropZoneEnter(e) {
    if (e.dropZoneElement.id === 'dropzone-external') { this.isDropZoneActive = true; }
  }

  onDropZoneLeave(e) {
    if (e.dropZoneElement.id === 'dropzone-external') { this.isDropZoneActive = false; }
  }

  onUploaded(e) {
    const file = e.file;
    const fileReader = new FileReader();
    fileReader.onload = () => {
      this.isDropZoneActive = false;
      this.imageSource = fileReader.result as string;
    };
    fileReader.readAsDataURL(file);
    this.textVisible = false;
    this.progressVisible = false;
    this.progressValue = 0;
  }

  onProgress(e) {
    this.progressValue = e.bytesLoaded / e.bytesTotal * 100;
  }

  onUploadStarted() {
    this.imageSource = '';
    this.progressVisible = true;
  }
}

@NgModule({
  imports: [
    BrowserModule,
    BrowserTransferStateModule,
    DxFileUploaderModule,
    DxProgressBarModule,
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule);
