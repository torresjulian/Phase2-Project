import { Component, OnInit } from '@angular/core';
import { QuestionsAndAnswers } from '../model.questions';
import { QuestionsService } from '../questions.service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-questions-and-answers',
  templateUrl: './questions-and-answers.component.html',
  styleUrls: ['./questions-and-answers.component.css']
})
export class QuestionsAndAnswersComponent implements OnInit {
  data: QuestionsAndAnswers[];
  answers: string[] = new Array(10);
  flag: boolean = false;
  userOpts = new FormGroup({
    0: new FormControl(),
    1: new FormControl(),
    2: new FormControl(),
    3: new FormControl(),
    4: new FormControl(),
    5: new FormControl(),
    6: new FormControl(),
    7: new FormControl(),
    8: new FormControl(),
    9: new FormControl()
  });

  constructor(private questionsService: QuestionsService) { }

  ngOnInit(): void {
    this.questionsService.loadQAndA().subscribe(data => this.data = data);
  }
  reloadData(): void {
    this.userOpts.reset();
    this.flag = false;
  }
  checkSelected(): void {
    let count = 0;
    for (let i = 0; i < this.answers.length; i++) {
      this.answers[i] = this.data[i].Answer;
    }

    for (let j = 0; j < this.answers.length; j++) {
      if (this.userOpts.value[j] == this.answers[j]){
        count++;
      }
    }

    this.flag = true;
    alert(`You got ${count} out of 10 right!`);
    // console.log(this.userOpts.value[0]);
    // console.log(this.answers[0]);

    // if (this.userOpts.value[0] == this.answers[0]) {
    //   console.log('true');
    // } else {
    //   console.log('false');
    // }
  }
 }