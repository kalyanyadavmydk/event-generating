import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {HttpClient} from '@angular/common/http'
@Component({
  selector: 'app-checkevents',
  templateUrl: './checkevents.component.html',
  styleUrls: ['./checkevents.component.css']
})
export class CheckeventsComponent implements OnInit {
  updateDate = new Date().toJSON("yyyy/MM/dd HH:mm");
  open=false
  array=[]
  eventname
  success
  constructor(private http:HttpClient) { }
  // eventname: "codng"
  // start: "2020-04-01T03:42:00.000Z"
  // end: "2020-04-02T17:00:00.000Z"
  // close: "2020-03-03T06:30:00.000Z"
  // description: "solve all"
  ngOnInit(): void {
    //console.log(this.day)
    
    this.array=[]
    this.http.get<any>('http://localhost:3002/extract/details').subscribe((data)=>{
    console.log(data)
      for(let i=0;i<data.length;i++)
      {
        this.array.push([
          data[i].eventname,
          data[i].organisedby,
          data[i].start,
          data[i].end,
          data[i].close,
          data[i].description
        ])
      }
      console.log(this.array)
  })
  console.log(this.array)
  }
onsubmit(){
  
}
register(data)
{
  this.eventname=data
  this.open=true
}
formSubmit(form :NgForm){
  if(form.invalid){
    return
  }
  
  var details={
    eventname:this.eventname,
    username:form.value.name,
    email:form.value.email
  };
 
  console.log(details)
  this.open=false
  this.http.post<any>('http://localhost:3002/register/event',details).subscribe((data)=>{
    console.log(data)
    this.success=data.status
  })
  
}
  
}
