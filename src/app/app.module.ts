import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatSidenavModule } from '@angular/material/sidenav';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderModule } from './shared/components/header/header.module';
import { FooterModule } from './shared/components/footer/footer.module';

@NgModule({
	bootstrap: [AppComponent],
	declarations: [AppComponent],
	imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule, MatSidenavModule, HeaderModule, FooterModule],
	providers: [],
})
export class AppModule {}
