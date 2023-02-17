import { Component } from '@angular/core';
import { generate } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  password = '';
  length = 0;
  includeLetters = false;
  includeNumbers =false;
  includeSymbols = false;

  OnChangeLength(event: Event){
    var target = event.target as HTMLInputElement;
    var result = parseInt(target.value);
     if(!isNaN(result)){
      this.length = result;
     }
  }

  onButtonClick(){
    const numbers = "1234567890";
    const symbols = "!@#$%^&*()_+{}:<>?[];,./";
    const letters = "abcdefghijklmnopqrstuvwxyz";
    let validChars = '';

    if(this.includeLetters){
      validChars += letters;
    }
    if(this.includeNumbers){
      validChars += numbers;
    }
    if(this.includeSymbols){
      validChars += symbols;
    }

    let generatedPassword = '';
    for(let i=0;i<this.length;i++){
      const index =Math.floor(Math.random()*validChars.length);
      generatedPassword += validChars[index];
    }

    this.password = generatedPassword;





  }

  OnChangeUseLetters(){
    this.includeLetters = !this.includeLetters;
  }

  OnChangeUseNumbers(){
    this.includeNumbers = !this.includeNumbers;
  }

  OnChangeUseSymbols(){
    this.includeSymbols = !this.includeSymbols;
  }
}
