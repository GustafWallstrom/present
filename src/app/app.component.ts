import { Component, OnInit } from '@angular/core';
import { element } from 'protractor';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  public day: String;
  public date: String;
  public locked: Boolean = true;
  public mock: Boolean = false;
  public correct: Boolean = false;
  public wrongAnswer: Boolean = false;

  public answer1: String;
  public answer2: String;
  public answer3: String;
  public answer4: String;

  title = 'GrattisCaroline';

  whatDay(){
		var today = new Date();
		var dd = String(today.getDate()).padStart(2, '0');
		var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
		var yyyy = today.getFullYear();
    var todayString = String(yyyy + '-' + mm + '-' + dd);
    todayString = '2021-02-14';

    return todayString;
  }

  open(){
    this.mock = true;
    if(this.day == 'special' && this.date == 'heart'){
      this.locked = false;
    }
  }

  submit(){
    if(this.date == 'tomorrow' ){
      this.correct = false;
      this.wrongAnswer = false;
    } else if(this.date == 'heart' && this.answer4 == 'Bil'){
      this.correct = true;
      this.wrongAnswer = false;
    }else this.wrongAnswer = true;

  }

  ngOnInit(){
    if(this.whatDay() == '2021-02-13'){
      this.day = 'special';
      this.date = 'tomorrow';
    } else if(this.whatDay() == '2021-02-14'){
      this.day = 'special';
      this.date = 'heart';
    } else {
      this.day = 'ordinary';
    }
  }

}

