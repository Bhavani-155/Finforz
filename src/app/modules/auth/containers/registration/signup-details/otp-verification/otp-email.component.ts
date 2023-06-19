import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StepperService } from 'src/app/modules/auth/services/stepper.service';

@Component({
  selector: 'app-otp-email',
  templateUrl: './otp-email.component.html',
  styleUrls: ['./otp-email.component.scss'],
})
export class OtpEmailComponent implements OnInit {
  timeLeft: number = 60;
  currentTab: any = 'email';
  display: any = '00:00';
  isTabChanged: boolean = false;
  isVerified: boolean = false;
  time: any;
  canResend: boolean = false;
  constructor(public stepperService: StepperService,public router: Router) {}
  ngOnInit() {
    this.timer(2);
  }
  tabChange(val: any, listner?: any) {
    let ele: any = document.getElementsByClassName('otp');
    if (listner == 'backspace') {
      if (ele[val - 1].value != '' && ele[val - 1].value) {
        ele[val - 1].value = '';
      } else {
        ele[val - 2].focus();
      }
    } else if (ele[val - 1].value != '' && ele[val - 1].value) {
      ele[val].focus();
    } else if (ele[val - 1].value && ele[val - 1].value == '') {
      ele[val - 2].focus();
    }
  }
  prev() {
    this.stepperService.next(1);
  }
  verifyOTP() {
    this.isVerified = true;
    clearInterval(this.time);
    this.timer(2);
    if(this.currentTab == 'mobile')
    {
      this.next();
    }
    // this.changeTab('mobile');
  }
  changeTab(tab: any) {
    this.currentTab = tab;
    this.isTabChanged = true;
  }
  timer(minute: any) {
    let seconds: number = minute * 60;
    console.log(minute, seconds);
    let textSec: any = '0';
    let statSec: number = 60;

    const prefix = minute < 10 ? '0' : '';

    this.time = setInterval(() => {
      seconds--;
      if (seconds == 0) {
        this.canResend = true;
        clearInterval(this.time);
      }
      if (statSec != 0) statSec--;
      else statSec = 59;

      if (statSec < 10) {
        textSec = '0' + statSec;
      } else textSec = statSec;

      this.display = `${prefix}${Math.floor(seconds / 60)}:${textSec}`;
    }, 1000);
  }
  otpChange(event: any, position: any) {
    let ele: any = document.getElementsByClassName('otp');
    let val = event.data;
    if (ele[position - 1].value && ele[position - 1].value != '') {
      ele[position - 1].value = '';
    }
    ele[position - 1].value = val;
    this.tabChange(position);
  }
  next() {
    this.stepperService.next(3);
  }
}
