import { Component, OnInit } from '@angular/core';
import { QuestionService } from 'src/app/services/question.service';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit {
  public name : string = "";
  public questionList : any = [];
  public currentQuestion : number = 0;
  public points : number = 0;
  counter = 60;
  constructor(private quetionService: QuestionService) { }

  ngOnInit(): void {
    this.name = localStorage.getItem("name")!;
    this.getAllQuestions();
  }

  getAllQuestions(){
    this.quetionService.getQuestionJson()
        .subscribe(res => {
          console.log(res);
          this.questionList = res.questions;
        })
  }

  nextQuestion(){
    this.currentQuestion++;
  }

  previousQuestion(){
    this.currentQuestion--;
  }
}
