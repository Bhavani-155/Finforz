import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AvailableResult, NativeBiometric } from 'capacitor-native-biometric';

@Component({
  selector: 'app-biometric',
  templateUrl: './biometric.component.html',
  styleUrls: ['./biometric.component.scss']
})
export class BiometricComponent {
  
  constructor(private router: Router) {
    this.setCredential('Manoj', 'password');
    this.checkCredential()
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
             localStorage.setItem('username', 'sathish');
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
