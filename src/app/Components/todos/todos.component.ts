import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/Models/Todo';
import { TodosService } from 'src/app/Services/todos.service';

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
  //Dependency Injection
  constructor(private todosService:TodosService) { } // services kommer vi tilbage til DI

  // denne metode kører hver gang - Invoke mm. Initializerer Collections mm
  ngOnInit(): void {
    // //step 1
    // console.log(this.title);
    // this.metodeNavn();
    // this.metodeNavn1();
    // husk det er et array .. det minder om JSON

    //step 1
    // this.todos = [
    //   {id:1,title:'todo one',completed:false},
    //   {id:2,title:'todo two',completed:true},
    //   {id:3,title:'todo four',completed:false},
    //   {id:44,title:'todo four',completed:false}
    // ];
    // console.log(this.todos);
    //step 2
   // this.todos = this.todosService.getTodos(); // giv mig data lige nu !!
    //ERROR øv Type 'Observable<Todo[]>' is missing the following
    // properties from type 'Todo[]': length, pop, push, concat, and 25 more.ts(2740)
    this.todosService.getTodos().subscribe(
      dataFromAPI => {this.todos = dataFromAPI}
    ); // OMG
  }

}
/*
torsdag :
vi vil gerne hente fra API og det kan vi gøre i den enkelte Component
MEN det er ikke godt!! (jeg spørger jer i næste uge om hvorfor det ikke er godt)
Løsning : Services
Services er en container med funktionalitet der hjælper os med et problem , database funktionalitet osv.
HTTPClient
HTTPHeader

*/
