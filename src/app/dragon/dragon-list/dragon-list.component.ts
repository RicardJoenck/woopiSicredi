import { MatTableDataSource } from '@angular/material/table';
import {Dragon, DragonService} from './../service/dragon.service';
import {Component, OnInit, ViewChild} from '@angular/core';
import {MatSort} from '@angular/material/sort';
import {MatDialog} from '@angular/material';
import {DragonDetailsComponent} from '../dragon-details/dragon-details.component';

@Component({
  selector: 'app-dragon-list',
  templateUrl: './dragon-list.component.html',
  styleUrls: ['./dragon-list.component.scss']
})
export class DragonListComponent implements OnInit {

  displayedColumns: string[] = ['name', 'type', 'createdAt', 'details' ];

  @ViewChild(MatSort, {static: true}) sort: MatSort;
  dataSource: any;

  constructor(private dragonService: DragonService,
              public dialog: MatDialog) {
    this.dataSource = new MatTableDataSource<Dragon>();
  }

  ngOnInit() {
    this.refresh();
  }

  detailsModal(id?: number) {
    const dialogRef = this.dialog.open(DragonDetailsComponent, {
      width: '400px',
      data: {
        id
      },
      disableClose: true,
      autoFocus: true,
    });
    dialogRef.afterClosed().subscribe(() => this.refresh());
  }

  delete(id: number) {
    this.dragonService.deleteDragon(id).subscribe(() => this.refresh());
  }

  refresh() {
    this.dragonService.getDragonList().subscribe(data => this.dataSource.data = data);
    this.dataSource.sort = this.sort;
  }
}
