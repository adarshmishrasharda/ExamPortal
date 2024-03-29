import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  constructor(private _http:HttpClient) { }

  //get question
  public getQuestiionOfQuiz(qid:any)
  {

    return this._http.get(`${baseUrl}/question/quiz/all/${qid}`);
  }

  //get question for quiz and number of question defiened
  public getQuestiionOfQuizForTest(qid:any)
  {

    return this._http.get(`${baseUrl}/question/quiz/${qid}`);
  }

  //add question
  public addQuestion(question:any)
  {
    return this._http.post(`${baseUrl}/question/`,question);
  }
  //delect question
  public deleteQuestion(questionId:any){
    return this._http.delete(`${baseUrl}/question/${questionId}`)

  }

  //eval quiz
  public evalQuiz(question:any)
  {
    return this._http.post(`${baseUrl}/question/eval-quiz`,question);
  }
}
