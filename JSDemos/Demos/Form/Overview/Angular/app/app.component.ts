import { NgModule, Component, enableProdMode } from '@angular/core';
import { BrowserModule, BrowserTransferStateModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { DxCheckBoxModule, DxNumberBoxModule, DxSelectBoxModule } from 'devextreme-angular';
import { DxFormModule, DxFormTypes } from 'devextreme-angular/ui/form';
import { Company, Service } from './app.service';

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
  companies: Company[];

  width: number;

  labelMode: DxFormTypes.FormLabelMode = 'floating';

  labelLocation: DxFormTypes.LabelLocation = 'left';

  readOnly = false;

  showColon = true;

  minColWidth = 300;

  colCount = 2;

  constructor(service: Service) {
    this.companies = service.getCompanies();
  }

  getCompanySelectorLabelMode() {
    return this.labelMode === 'outside'
      ? 'hidden'
      : this.labelMode;
  }
}

@NgModule({
  imports: [
    BrowserModule,
    BrowserTransferStateModule,
    DxCheckBoxModule,
    DxSelectBoxModule,
    DxNumberBoxModule,
    DxFormModule,
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule);
