import { Component } from '@angular/core';
import { CrudHttpService } from './crud-http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-service-app';

  todoList:any = [];
constructor(private crudHttpService: CrudHttpService){}
ngOnInit(): void {
this.listTodos();
}
listTodos(){
this.crudHttpService.list().subscribe((response)=>{
this.todoList = response;
},(error=>{
}));
}
public n = 0;
createTodo(){
this.n++
let todo = {
id: new Date().getTime(),
title:`Todo ${this.n}`
}
this.crudHttpService.create(todo).subscribe((response)=>{
this.listTodos();
},(error=>{
}));
}
editTodo(todo: any){
let newTitle = prompt('Digite um novo título:');
let n = 0;
while(n < 1){
if(newTitle == ''){
alert('Digite um título!');
newTitle = prompt('Digite um novo título:');
}else{
todo.title = newTitle;
n++
}
}
let data = {
id: new Date().getTime(),
title: newTitle
}
this.crudHttpService.update(todo.id,data).subscribe((response)=>{
this.listTodos();
},(error=>{
}));
}
deleteTodo(id: any){
this.n--
this.crudHttpService.delete(id).subscribe((response)=>{
this.listTodos();
},(error=>{
}));
}
}

