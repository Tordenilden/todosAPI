import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/Models/Todo';

@Component({
  selector: 'app-todos', // loade denne Component
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  // variable
  title: string ="my title";
  // vil gerne have en variabel af typen Todo og det skal være en Collection??
  // variabel navn todo eller hans
  todos: Todo[];
  choice:boolean = true;
  //methods
  metodeNavn():void{
    console.log("tester en metode");
  }
  metodeNavn1(){
    console.log("tester metode1");
  }

  constructor() { } // services kommer vi tilbage til DI

  // denne metode kører hver gang - Invoke mm. Initializerer Collections mm
  ngOnInit(): void {
    // //step 1
    // console.log(this.title);
    // this.metodeNavn();
    // this.metodeNavn1();
    // husk det er et array .. det minder om JSON
    this.todos = [
      {id:1,title:'todo one',completed:false},
      {id:2,title:'todo two',completed:true},
      {id:3,title:'todo four',completed:false}
    ];
    console.log(this.todos);

  }

}
