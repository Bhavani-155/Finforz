import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-otp-email',
  templateUrl: './otp-email.component.html',
  styleUrls: ['./otp-email.component.scss'],
})
export class OtpEmailComponent {
  tabChange(val: any) {
    let ele: any = document.getElementsByClassName('otp');
    if (ele[val - 1].value != '' && ele[val - 1].value) {
      ele[val].focus();
    } else if (ele[val - 1].value && ele[val - 1].value == '') {
      ele[val - 2].focus();
    }
  }
}
