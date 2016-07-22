import {IAnswer} from '../models/answer';
import {AnswerService} from '../services/answer.service';

export class AnswerController {
  static $inject = ['AnswerService'];
  answers: IAnswer[];
  newAnswerText: string;
  constructor(
    private _answerService:AnswerService
  ) {
    this.refresh();
  }

  refresh() {
    this.answers = this._answerService.getAnswers();
  }

  markAsCorrect(id:number) {
    console.log("mark as correct : " + id);
    this.answers.map((answer) => {
      answer.correct = (answer.id === id);
    });
  }

  addAnswer() {
    if(this.newAnswerText) {
      let maxId = null;
      this.answers.map((answer) => {
        if(!maxId || answer.id>maxId) {
          maxId = answer.id;
        }
      });
      this._answerService.addAnswer({
        id:maxId+1,
        body: this.newAnswerText,
        correct: false 
      });
      
      this.newAnswerText = null;
      this.refresh();
    }
  }
}
