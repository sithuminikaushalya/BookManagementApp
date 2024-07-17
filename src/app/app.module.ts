import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { BookManagementComponent } from './book-management/book-management.component';

@NgModule({
  declarations: [
    AppComponent,
    BookManagementComponent  
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]  
})
export class AppModule {}
