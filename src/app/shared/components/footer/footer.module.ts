import { NgModule } from '@angular/core';
import { FooterComponent } from './component/footer.component';
import { MatChipsModule } from '@angular/material/chips';
import { SharedModule } from '../../shared.module';

@NgModule({
	declarations: [FooterComponent],
	imports: [SharedModule, MatChipsModule],
	exports: [FooterComponent],
})
export class FooterModule {}
