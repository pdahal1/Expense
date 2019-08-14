import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Expense} from './model/model.expense'; 
import { Observable } from 'rxjs';




@Injectable({
  providedIn: 'root'
  
})
export class ExpenseService {
 expense : any; 
  readonly _url = "http://localhost:3000/expenses"; 
  
  constructor(private http: HttpClient) {
    
   }

   getExpenseList():Observable<Expense[]>{
     return this.http.get<Expense[]>(this._url)
   }
  
  }
