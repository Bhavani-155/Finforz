import { Component, ElementRef, ViewChild } from '@angular/core';
import { StepperService } from 'src/app/services/stepper.service';

@Component({
  selector: 'app-manual-document-upload',
  templateUrl: './manual-document-upload.component.html',
  styleUrls: ['./manual-document-upload.component.scss']
})
export class ManualDocumentUploadComponent {
  isCameraOpen: boolean = false;
  isPictureCaptured: boolean = false;

constructor(private stepperService : StepperService){}

  docFront:any = 'File Name';
  docBack:any = 'File Name';
  @ViewChild('videoElement') videoElement!: ElementRef;
  @ViewChild('canvasElement') canvasElement!: ElementRef;

  back()
  {
    this.stepperService.next(1);
  }
  next()
  {
    this.stepperService.next(7);
  }
  
  onFileSelected(event: any,type: any) {
    console.log(event.target.files[0].name)
    if (type == 'docFront') {
     this.docFront = event.target.files[0].name;
    }else if (type == 'docBack') {
     this.docBack = event.target.files[0].name;
    }
  }
  startCamera() {
    this.isCameraOpen = true;
    navigator.mediaDevices.getUserMedia({ video: true })
      .then(stream => {
        const video: HTMLVideoElement = this.videoElement.nativeElement;
        video.srcObject = stream;
        video.play();
      })
      .catch(err => console.error('Error accessing camera:', err));
  }
  
  captureAndSave() {
    this.isPictureCaptured =  true;
    const video: HTMLVideoElement = this.videoElement.nativeElement;
    const canvas: HTMLCanvasElement = this.canvasElement.nativeElement;
    const context: CanvasRenderingContext2D = canvas.getContext('2d')!;
    const { videoWidth, videoHeight } = video;

    canvas.width = videoWidth;
    canvas.height = videoHeight;
    context.drawImage(video, 0, 0, videoWidth, videoHeight);

    const imageBlob = this.dataURItoBlob(canvas.toDataURL('image/png'));

    // Save the image file (you can modify this part to suit your needs)
    const link = document.createElement('a');
    link.href = URL.createObjectURL(imageBlob);
    link.download = 'captured_image.png';
    link.click();
  }
  dataURItoBlob(dataURI: string): Blob {
    const byteString = atob(dataURI.split(',')[1]);
    const mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];
    const ab = new ArrayBuffer(byteString.length);
    const ia = new Uint8Array(ab);

    for (let i = 0; i < byteString.length; i++) {
      ia[i] = byteString.charCodeAt(i);
    }

    return new Blob([ab], { type: mimeString });
  }
}
