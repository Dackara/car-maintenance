import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogComponent } from './dialog.component';
import { MatIconModule } from '@angular/material/icon';
import { ButtonModule } from '../button/button.module';
import { CmButton } from '../button/button';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    DialogComponent,
  ],
  imports: [
    CommonModule,
    ButtonModule,
    MatIconModule,
    TranslateModule,
    CmButton,
  ],
  exports: [
    DialogComponent,
  ]
})
export class DialogModule { }
