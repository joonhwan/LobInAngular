import {IAnswer} from '../models/answer';

export class AnswerService {
  answers:IAnswer[] = [
      {
        id: 1,
        body: "Isn't that about time travel?",
        correct: false
      },
      {
        id: 2,
        body: "React and Flux are a tool and methodologies for building the front end of web applications.",
        correct: false
      },
      {
        id: 3,
        body: "React is a synonym for 'respond'",
        correct: false
      }
    ]; 
  getAnswers() : IAnswer[] {
    return this.answers; 
  }

  addAnswer(answer:IAnswer) {
    this.answers.push(answer);
  }
}
