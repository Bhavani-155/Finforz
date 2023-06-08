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
  isTabChanged: boolean = false;
  isVerified: boolean = false;
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
  this.isVerified = true;
  this.changeTab('mobile');
 }
 changeTab(tab:any)
 {
  this.currentTab = tab;
  this.timer(2);
  this.isTabChanged = true;
 }
timer(minute:any) {
  this.display = '';
  var timer : any;
  let seconds: number = minute * 60;
  console.log(minute,seconds);
  let textSec: any = "0";
  let statSec: number = 60;

  const prefix = minute < 10 ? "0" : "";

   timer = setInterval(() => {
    seconds--;
    if (seconds == 0 || this.isTabChanged) {
      clearInterval(timer);
      this.isTabChanged = false;
    }
    if (statSec != 0) statSec--;
    else statSec = 59;

    if (statSec < 10) {
      textSec = "0" + statSec;
    } else textSec = statSec; 

    this.display = `${prefix}${Math.floor(seconds / 60)}:${textSec}`;
  }, 1000);
}
}
