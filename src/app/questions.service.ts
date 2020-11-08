import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { QuestionsAndAnswers } from './model.questions';

@Injectable({
  providedIn: 'root'
})
export class QuestionsService {
  constructor(private httpClient: HttpClient) { }
  loadQAndA(): Observable<QuestionsAndAnswers[]> {
    return this.httpClient.get<QuestionsAndAnswers[]>('http://localhost:3000/QuestionsAndAnswers1');
  }
}