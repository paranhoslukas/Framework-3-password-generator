import { Component } from '@angular/core';

@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.css']
})
export class PasswordComponent {
  password: string = '';
  length: number = 12;
  includeNumbers = true;
  includeSymbols = true;

  generatePassword() {
    const letters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numbers = '0123456789';
    const symbols = '!@#$%^&*()_+';
    let chars = letters;

    if (this.includeNumbers) chars += numbers;
    if (this.includeSymbols) chars += symbols;

    this.password = Array.from({ length: this.length }, () =>
      chars[Math.floor(Math.random() * chars.length)]
    ).join('');import { Component } from '@angular/core';

    @Component({
      selector: 'app-password',
      templateUrl: './password.component.html',
      styleUrls: ['./password.component.css']
    })
    export class PasswordComponent {
      password: string = '';
      length: number = 12;
      includeNumbers = true;
      includeSymbols = true;
    
      generatePassword() {
        const letters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
        const numbers = '0123456789';
        const symbols = '!@#$%^&*()_+';
        let chars = letters;
    
        if (this.includeNumbers) chars += numbers;
        if (this.includeSymbols) chars += symbols;
    
        this.password = Array.from({ length: this.length }, () =>
          chars[Math.floor(Math.random() * chars.length)]
        ).join('');
      }
    
      copyToClipboard() {
        navigator.clipboard.writeText(this.password).then(() => {
          alert('Senha copiada!');
        }).catch(err => {
          console.error('Erro ao copiar a senha: ', err);
        });
      }
    }
  }

  copyToClipboard() {
    navigator.clipboard.writeText(this.password).then(() => {
      alert('Senha copiada!');
    }).catch(err => {
      console.error('Erro ao copiar a senha: ', err);
    });
  }
}