import { Component } from '@angular/core';
import { Clipboard } from '@angular/cdk/clipboard';
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
    strength: string= ''; 

    
    constructor(private clipboard: Clipboard) {}
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
      this.strength = this.getStrength();
      
    }
    getStrength() {
      if (this.includeNumbers && this.includeUppercase && this.includeLowercase && this.includeSymbols && this.passwordLength > 8) {
        return 'strong';
      }
      if (this.includeNumbers && this.includeUppercase && this.includeLowercase && this.includeSymbols) {
        return 'medium';
      }
      if (this.includeNumbers && this.includeUppercase && this.includeLowercase && this.includeSymbols && this.passwordLength < 4) {
        return 'weak';
      }
      else if (this.includeNumbers && this.includeUppercase ) {
        return 'medium';
      }
      else if (this.includeNumbers && this.includeLowercase ) {
        return 'medium';
      }
      else if (this.includeNumbers && this.includeSymbols) {
        return 'medium';
      }
      else if (this.passwordLength > 8 ){
        return 'medium';
      }
      else if (this.passwordLength < 8 ){
        return 'veryweak';
      }
      else if (this.passwordLength < 8 && this.includeNumbers || this.includeUppercase || this.includeLowercase || this.includeSymbols){
        return 'medium';
      }
      else {
        return 'veryweak';
      }
    }
    copyToClipboard() {
      if(this.generatedPassword){
        this.clipboard.copy(this.generatedPassword);
        alert('Copied to clipboard');
      }
      
    }

}
