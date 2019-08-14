import { Component, OnInit } from '@angular/core';
import { ExpenseService } from '../expense.service';
import { Observable } from 'rxjs';
import { Expense } from '../model/model.expense';

@Component({
  selector: 'app-expense',
  templateUrl: './expense.component.html',
  styleUrls: ['./expense.component.css']
})
export class ExpenseComponent implements OnInit {
  papi: any;
  // question: String; 

  constructor( private expenseService: ExpenseService) { }

  ngOnInit() {
    this.getExpense();
    
  }

  getExpense(){
    return this.expenseService.getExpenseList().subscribe(data =>{
      this.papi= data; 
    })
  }

  reply(question: String){
    if (question==="Hello")
     return "Hello to you too sir"
    console.log('Hello to you too sir')
  }

}

