import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-appartement',
  templateUrl: './add-appartement.component.html',
  styleUrls: ['./add-appartement.component.css']
})
export class AddAppartementComponent {

  AddApart = new FormGroup({
    apartNum: new FormControl('', [Validators.required, Validators.pattern('^[0-9]+$')]),
    floorNum: new FormControl('', [Validators.required, Validators.min(1)]),
    surface: new FormControl('', Validators.required),
    terrace: new FormControl('no'),
    surfaceTerrace: new FormControl({ value: '', disabled: true }),
    category: new FormControl('', Validators.required),
    residence: new FormControl('', Validators.required)
  });

  constructor() {
    this.AddApart.get('terrace')?.valueChanges.subscribe(value => {
      if (value === 'yes') {
        this.AddApart.get('surfaceTerrace')?.enable();
      } else {
        this.AddApart.get('surfaceTerrace')?.disable();
      }
    });
  }

  onSubmit() {
    if (this.AddApart.valid) {
      console.log('Nouveau Appartement :', this.AddApart.value);
    }
  }
}
