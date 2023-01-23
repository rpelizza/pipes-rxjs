import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderModule } from './shared/header/header.module';
import { FooterModule } from './shared/footer/footer.module';

@NgModule({
	bootstrap: [AppComponent],
	declarations: [AppComponent],
	imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule, HeaderModule, FooterModule],
	providers: [],
})
export class AppModule {}
