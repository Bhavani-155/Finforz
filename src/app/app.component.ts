import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'form-with-bar-scss';

  barwidth: number = 10;
  show: boolean = false;
  buttonshow: boolean = true;
  // firstFormGroup: FormGroup;
  // secondFormGroup: FormGroup;
  firstFormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
  });
  secondFormGroup = new FormGroup({
    password: new FormControl('', Validators.required),
  });
  ngOnInit() {}

  get email() {
    return this.firstFormGroup.get('email');
  }
  get password() {
    return this.secondFormGroup.get('password');
  }

  next() {
    this.show = true;
    this.barwidth = 40;
    this.buttonshow = false;
  }

  previous() {
    this.show = false;
    this.barwidth = 10;
  }

  onSubmit() {
    // do something here
  }
}
