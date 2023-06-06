import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent {
  barwidth: number = 10;
  show: boolean = false;
  step1: boolean = true;
  step2: boolean = false;
  subTitle: any = 'Basic Info';
  next() {
    this.step2 = true;
    if (this.step2) {
      this.subTitle = ' Verification';
    }
    this.step1 = false;
    this.barwidth = 20;

    // this.buttonshow = false;
  }

  OnInit() {
    this.test();
  }

  // previous() {
  // this.show = false;
  // this.barwidth = 10;
  // }

  test() {
    const inputs = document.querySelectorAll('input');

    inputs.forEach((input) => {
      input.addEventListener('blur', (event: any) => {
        if (event.target.value) {
          input.classList.add('is-valid');
        } else {
          input.classList.remove('is-valid');
        }
      });
    });
  }
}
