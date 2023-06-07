import { Component, OnInit } from '@angular/core';
import { StepperService } from 'src/app/service/stepper.service';

@Component({
  selector: 'app-otp-email',
  templateUrl: './otp-email.component.html',
  styleUrls: ['./otp-email.component.scss'],
})
export class OtpEmailComponent implements OnInit {

  timeLeft: number = 60;
  currentTab:any ='email';
  display: any;
  constructor(public stepperService: StepperService){}
  ngOnInit() {
    this.timer(2);
  }
  tabChange(val: any) {
    let ele: any = document.getElementsByClassName('otp');
    if (ele[val - 1].value != '' && ele[val - 1].value) {
      ele[val].focus();
    } else if (ele[val - 1].value && ele[val - 1].value == '') {
      ele[val - 2].focus();
    }
  }
  prev()
  {
    this.stepperService.next(1);
  }
  verifyOTP()
 {
  this.changeTab('mobile');
 }
 changeTab(tab:any)
 {
  this.currentTab = tab;
  this.timer(2);
 }
timer(minute:any) {
  let seconds: number = minute * 60;
  console.log(minute,seconds);
  let textSec: any = "0";
  let statSec: number = 60;

  const prefix = minute < 10 ? "0" : "";

  const timer = setInterval(() => {
    seconds--;
    if (statSec != 0) statSec--;
    else statSec = 59;

    if (statSec < 10) {
      textSec = "0" + statSec;
    } else textSec = statSec; 

    this.display = `${prefix}${Math.floor(seconds / 60)}:${textSec}`;

    if (seconds == 0) {
      clearInterval(timer);
    }
  }, 1000);
}
}
