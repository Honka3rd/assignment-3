import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { NormalizerComponent } from './normalizer/normalizer.component';
import { ConverterPipe } from './normalizer/converter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NormalizerComponent,
    ConverterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
