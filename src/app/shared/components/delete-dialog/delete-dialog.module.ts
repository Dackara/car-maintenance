import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeleteDialogComponent } from './delete-dialog.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { TranslateModule } from '@ngx-translate/core';
import { ButtonModule } from '../button/button.module';
import { CmButton } from '../button/button';

@NgModule({
  declarations: [DeleteDialogComponent],
  imports: [
    CommonModule,
    TranslateModule,
    MatIconModule,
    CmButton,
  ],
  exports: [
    DeleteDialogComponent,
  ]
})
export class DeleteDialogModule { }
