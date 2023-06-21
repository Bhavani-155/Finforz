import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { AvailableResult, NativeBiometric } from 'capacitor-native-biometric';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
@Component({
  selector: 'app-modal-content',
  templateUrl: 'modal-content.component.html',
  styleUrls: ['./modal-content.component.scss'],
})
export class ModalContentComponent {
  modalRef!: BsModalRef;
  @Output() onHide = new EventEmitter<void>();
  constructor(private router: Router,private modalService: BsModalService,private bsModalRef: BsModalRef){
    this.checkCredential();
  }
  
  navigate()
  {
    this.doHide();
    this.router.navigateByUrl('/signUp');
  }
  doHide() {
    this.bsModalRef.hide();
  }

  setCredential(username:any, password:any) {
    // Save user's credentials
    NativeBiometric.setCredentials({
      username: username,
      password: password,
      server: 'www.example.com',
    }).then();
  }

  deleteCredential() {
    // Delete user's credentials
    NativeBiometric.deleteCredentials({
      server: 'www.example.com',
    });
  }


 public checkCredential() {
    
    NativeBiometric.isAvailable().then((result: AvailableResult) => {
      const isAvailable = result.isAvailable;
      // alert('RESULT ' + JSON.stringify(result));
      // const isFaceId=result.biometryType==BiometryType.FACE_ID;
      // const isFaceId = result.biometryType == BiometryType.FACE_ID;

      if (isAvailable) {
        // Get user's credentials
        NativeBiometric.getCredentials({
          server: 'www.example.com',
        }).then((credentials) => {
          // alert('CREDENTIAL ' + JSON.stringify(credentials));
          // Authenticate using biometrics before logging the user in
          NativeBiometric.verifyIdentity({
            reason: 'For easy log in',
            title: 'Log in',
            subtitle: 'Verify identity',
            description: 'Unlock your device using fingerprint',
          })
            .then(() => {
              //     // Authentication successful
             console.log('SUCCESS!!');
             this.router.navigate(['/popup']);
             localStorage.setItem('username', 'manoj');
              //     // this.login(credentials.username, credentials.password);
            })
            .catch((err) => {
              //   // Failed to authenticate
              console.log('FAIL!');
            });
        });
      }
    });
  }

}
