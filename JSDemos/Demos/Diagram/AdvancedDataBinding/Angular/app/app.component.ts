import {
  NgModule, Component, ViewChild, enableProdMode,
} from '@angular/core';
import { BrowserModule, BrowserTransferStateModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { DxDiagramModule, DxDiagramComponent } from 'devextreme-angular';
import ArrayStore from 'devextreme/data/array_store';
import { Service } from './app.service';

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
  orgItemsDataSource: ArrayStore;

  orgLinksDataSource: ArrayStore;

  constructor(service: Service) {
    this.orgItemsDataSource = new ArrayStore({
      key: 'ID',
      data: service.getOrgItems(),
    });
    this.orgLinksDataSource = new ArrayStore({
      key: 'ID',
      data: service.getOrgLinks(),
    });
  }

  itemTypeExpr(obj, value) {
    if (value) { obj.Type = (value === 'rectangle') ? undefined : 'group'; } else { return obj.Type === 'group' ? 'ellipse' : 'rectangle'; }
  }

  itemWidthExpr(obj, value) {
    if (value) { obj.Width = value; } else { return obj.Width || (obj.Type === 'group' && 1.5) || 1; }
  }

  itemHeightExpr(obj, value) {
    if (value) { obj.Height = value; } else { return obj.Height || (obj.Type === 'group' && 1) || 0.75; }
  }

  itemTextStyleExpr(obj) {
    if (obj.Level === 'senior') { return { 'font-weight': 'bold', 'text-decoration': 'underline' }; }
    return {};
  }

  itemStyleExpr(obj) {
    const style: Record<string, string> = { stroke: '#444444' };
    if (obj.Type === 'group') { style.fill = '#f3f3f3'; }
    return style;
  }

  linkStyleExpr(obj) {
    return { stroke: '#444444' };
  }

  linkFromLineEndExpr(obj) {
    return 'none';
  }

  linkToLineEndExpr(obj) {
    return 'none';
  }
}

@NgModule({
  imports: [
    BrowserModule,
    BrowserTransferStateModule,
    HttpClientModule,
    DxDiagramModule,
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule);
