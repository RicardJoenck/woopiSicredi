import { DragonListComponent } from './dragon-list/dragon-list.component';
import { DragonDetailsComponent } from './dragon-details/dragon-details.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DragonService } from './service/dragon.service';
import { DragonRoutingModule } from './dragon.routing.module';
import { MatInputModule } from '@angular/material/input';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule, MatDialogModule, MatNativeDateModule, MatPaginatorModule} from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    DragonDetailsComponent,
    DragonListComponent
  ],
  imports: [
    CommonModule,
    DragonRoutingModule,
    MatInputModule,
    MatSortModule,
    MatPaginatorModule,
    MatTableModule,
    MatDialogModule,
    MatDatepickerModule,
    MatButtonModule,
    MatNativeDateModule,
    ReactiveFormsModule
  ],
  providers: [
    DragonService,

  ]
})
export class DragonModule { }
