import { NgModule, Component, enableProdMode } from '@angular/core';
import { BrowserModule, BrowserTransferStateModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import 'devextreme/ui/html_editor/converters/markdown';
import prettier from 'prettier/standalone';
import parserHtml from 'prettier/parser-html';
import { DxHtmlEditorModule, DxHtmlEditorTypes } from 'devextreme-angular/ui/html-editor';
import { DxButtonGroupModule, DxButtonGroupTypes } from 'devextreme-angular/ui/button-group';
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
})

export class AppComponent {
  valueContent: string;

  editorValueType: DxHtmlEditorTypes.MarkupType = 'html';

  constructor(service: Service) {
    this.valueContent = service.getMarkup();
  }

  onValueTypeChanged({ addedItems }: DxButtonGroupTypes.SelectionChangedEvent) {
    this.editorValueType = addedItems[0].text.toLowerCase();
  }

  prettierFormat(markup: string) {
    if (this.editorValueType === 'html') {
      return prettier.format(markup, {
        parser: 'html',
        plugins: [parserHtml],
      });
    }
    return markup;
  }
}

@NgModule({
  imports: [
    BrowserModule,
    BrowserTransferStateModule,
    DxHtmlEditorModule,
    DxButtonGroupModule,
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})

export class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule);
