import { Component } from '@angular/core';
import {NgForm} from '@angular/forms';
import { ThrowStmt } from '@angular/compiler';
import {HttpClient} from '@angular/common/http'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'event';
  count=1
  constructor(private http:HttpClient){}
  onsubmit(){
    this.count+=1
  }
  formSubmit(form :NgForm){
    if(form.invalid){
      return
    }
    if(form.value.start< form.value.end && form.value.end<=form.value.start){
    return }
    var eventdata={title:form.value.name,
                   organizer:form.value.organizer,
                   start:form.value.start,
                   end:form.value.end,
                   close:form.value.close,
                   description:form.value.description}
  
  this.http.post<any>('http://localhost:3002/create/event',eventdata).subscribe((data)=>{
    console.log(data[0])
    console.log('hiii')
    console.log(data)
    console.log("bii")
    for(let i of data){
      console.log(i)
    }
    console.log("next")
    for(let i of data[0]){
      console.log(i)
    }
  })
  }
 
}
