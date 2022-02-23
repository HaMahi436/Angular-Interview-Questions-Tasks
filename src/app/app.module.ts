import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { MyautocompleteComponent } from './myautocomplete/myautocomplete.component';
import { SearchService } from './search.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [BrowserModule, FormsModule, HttpClientModule],
  declarations: [AppComponent, HelloComponent, MyautocompleteComponent],
  bootstrap: [AppComponent],
  providers: [SearchService],
})
export class AppModule {}
