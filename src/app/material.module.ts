import { NgModule } from '@angular/core';
import {MatCardModule, MatProgressBarModule, MatDividerModule, MatButtonModule, MatRadioModule} from '@angular/material';


@NgModule({
  imports: [MatCardModule, MatDividerModule, MatProgressBarModule, MatButtonModule, MatRadioModule],
  exports: [MatCardModule, MatDividerModule, MatProgressBarModule, MatButtonModule, MatRadioModule]
})
export class MaterialModule { }
