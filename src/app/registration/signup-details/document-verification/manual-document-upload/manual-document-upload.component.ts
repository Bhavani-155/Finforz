import { Component } from '@angular/core';
import { StepperService } from 'src/app/services/stepper.service';

@Component({
  selector: 'app-manual-document-upload',
  templateUrl: './manual-document-upload.component.html',
  styleUrls: ['./manual-document-upload.component.scss']
})
export class ManualDocumentUploadComponent {

constructor(private stepperService : StepperService){}

  docFront:any = 'File Name';
  docBack:any = 'File Name';

  back()
  {
    this.stepperService.next(1);
  }
  next()
  {
    this.stepperService.next(7);
  }
}
