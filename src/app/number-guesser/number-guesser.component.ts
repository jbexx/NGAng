import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-number-guesser',
  templateUrl: './number-guesser.component.html',
  styleUrls: ['./number-guesser.component.css']
})
export class NumberGuesserComponent implements OnInit {

  minRange: number = 1;
  maxRange: number = 100;
  range: string = `${this.minRange} - ${this.maxRange}`;
  guessOutput: string = null;
  guessNum: number = null;
  ranNum: number = null;
  yourGuess: string = 'Feelin\' lucky punk?';
  feedback: string = 'Make your best guess...';


  constructor() { }

  ngOnInit() {
    this.numCreate(this.minRange, this.maxRange);
  };

  numCreate(min, max) {
    this.ranNum = Math.floor(Math.random() * (max - min + 1)) + min;
    console.log(`Random Number: ${this.ranNum}`);
  };

  setParams() {
    this.range = `${this.minRange} - ${this.maxRange}`;
    this.numCreate(this.minRange, this.maxRange);
  }

  enableBtn() {
    return this.guessNum ? false : true;
  };

  clearField() {
    this.guessNum = null;
  };

  throwError() {
    this.yourGuess = '';
    this.range = '';
    this.guessOutput = 'ERROR!';
    this.feedback = `Please choose a number between ${this.minRange} and ${this.maxRange}`;
  }

  checkGuess() {
    this.range = '';
    if (this.guessNum > this.maxRange || this.guessNum < this.minRange) {
      this.throwError();
    } else if (this.guessNum > this.ranNum) {
      this.yourGuess = 'Your last guess was:';
      this.guessOutput = this.guessNum.toString();
      this.feedback = 'That\'s too high';
    } else if (this.guessNum < this.ranNum) {
      this.yourGuess = 'Your last guess was:';
      this.guessOutput = this.guessNum.toString();
      this.feedback = 'That\'s too low';
    } else if (this.guessNum == this.ranNum) {
      this.yourGuess = '';
      this.guessOutput = 'Sweeet Action!';
      this.feedback = '';
    }
    this.clearField();
  };

  setZeroState() {
    this.minRange = 1;
    this.maxRange = 100;
    this.range = `${this.minRange} - ${this.maxRange}`;
    this.guessOutput = '';
    this.guessNum = null;
    this.yourGuess = 'Feelin\' lucky punk?';
    this.feedback = 'Make your best guess...';
  };

  reset() {
    this.setZeroState();
    this.numCreate(this.minRange, this.maxRange);
  };

}
