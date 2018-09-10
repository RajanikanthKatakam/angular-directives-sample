import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
// Structural Directives
import { AppIfDirective } from './if-directive';
import { AppLoopDirective } from './loop-directive';

// Attribute Directives
import { CustomColorDirective } from './custom-color-directive';

@NgModule({
  declarations: [
    AppComponent,
    AppIfDirective,
    AppLoopDirective,
    CustomColorDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
