import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Todo } from '../Models/Todo';
import { HttpClient, HttpHeaders } from '@angular/common/http';


// betyder at den kan benyttes til DI
@Injectable({
  providedIn: 'root'
})

export class TodosService {
  //url til api
  url:string = "https://jsonplaceholder.typicode.com/todos"; // kaldes et Endpoint
  constructor(private http:HttpClient) { }

  //our getTodos
  // getTodos(){
  //   //return [];    // et array hardcodet
  // return [
  //   {id:1,title:'todo one',completed:false},
  //   {id:2,title:'todo two',completed:true},
  //   {id:3,title:'todo four',completed:false},
  //   {id:44,title:'todo four',completed:false}
  // ];
  // }

  //når vi henter fra et API kan der gå tid!!
  getTodos():Observable<Todo[]>{
    return this.http.get<Todo[]>(this.url);
  }


  // postTodos skal den "gribe" noget data
  postTodos(todoToPostData):Observable<Todo>{
    return this.http.post<Todo>(this.url,todoToPostData,httpOptions);
  }
  // putTodos

  // deleteTodos

}
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}
