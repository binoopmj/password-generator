import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
    includeNumbers: boolean = true;
    includeUppercase: boolean = true;
    includeLowercase: boolean = false;
    includeSymbols: boolean = false;
    passwordLength: number = 12;
    generatedPassword: string = '';
  
    generatePassword() {
      const numbers = '0123456789';
      const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
      const lowercase = 'abcdefghijklmnopqrstuvwxyz';
      const symbols = '!@#$%^&*()_+-=[]{}|;:,.<>?';
  
      let validChars = '';
      validChars += this.includeNumbers ? numbers : '';
      validChars += this.includeUppercase ? uppercase : '';
      validChars += this.includeLowercase ? lowercase : '';
      validChars += this.includeSymbols ? symbols : '';
  
      if (validChars.length === 0) {
        alert('Please select at least one option.');
        return;
      }
  
      let password = '';
      for (let i = 0; i < this.passwordLength; i++) {
        const randomIndex = Math.floor(Math.random() * validChars.length);
        
        password += validChars.charAt(randomIndex);
      }
  
      this.generatedPassword = password;
    }
}
