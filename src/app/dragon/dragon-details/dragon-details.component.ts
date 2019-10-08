import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MatDialogRef} from '@angular/material';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import {DragonService} from '../service/dragon.service';

@Component({
  selector: 'app-dragon-details',
  templateUrl: './dragon-details.component.html',
  styleUrls: ['./dragon-details.component.scss']
})
export class DragonDetailsComponent implements OnInit {
  dragonForm: FormGroup;
  constructor( private fb: FormBuilder,
               private dragonService: DragonService,
               private dialogRef: MatDialogRef<DragonDetailsComponent>,
               @Inject(MAT_DIALOG_DATA) public data: any) {
    this.dragonForm = fb.group({
      id: [''],
      name: ['', Validators.required],
      type: ['', Validators.required],
      createdAt: ['', Validators.required]
    });
  }

  ngOnInit() {
    if (this.data.id) {
      this.dragonService.getDragonDetail(this.data.id).subscribe(data => {
        this.form.id.setValue(data.id);
        this.form.name.setValue(data.name);
        this.form.type.setValue(data.type);
        this.form.createdAt.setValue(data.createdAt);
      });
    }
  }

  save() {
    if (this.dragonForm.valid) {
      this.handleSave();
    }
  }

  close() {
    this.dialogRef.close();
  }

  handleSave() {
    if (this.dragonForm.controls.id.value) {
      this.dragonService.editDragon(this.dragonForm.value).subscribe(() => {
        this.dialogRef.close();
      }, error => alert(error) );
    } else {
      this.dragonService.createDragon(this.dragonForm.value).subscribe(() => {
        this.dialogRef.close();
      }, error => alert(error) );
    }
  }

  get form() {
    return this.dragonForm.controls;
  }
}
