import { NgModule } from '@angular/core';
import { FooterComponent } from './component/footer.component';
import { MatLegacyChipsModule as MatChipsModule } from '@angular/material/legacy-chips';
import { SharedModule } from '../../shared.module';

@NgModule({
	declarations: [FooterComponent],
	imports: [SharedModule, MatChipsModule],
	exports: [FooterComponent],
})
export class FooterModule {}
