import { Component, OnInit } from '@angular/core';
import { ErrorStateMatcher } from '@angular/material/core';
import { FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-user',
  templateUrl: './input-user.component.html',
  styleUrls: ['./input-user.component.css']
})
export class InputUserComponent implements OnInit {

  public  emailFormControl = new FormControl('', [
    Validators.maxLength(10),
  ]);

  matcher = new MyErrorStateMatcher();

  constructor() { }

  ngOnInit(): void {
  }

}
