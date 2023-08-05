import { BehaviorSubject, map } from "rxjs";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { leave } from "../model/leave.model";

@Injectable()

export class leaveService{

   leaveUrl = 'https://staff-project-8ab78-default-rtdb.asia-southeast1.firebasedatabase.app/leave.json';

   constructor( private httpServe : HttpClient ){}


    private detailList : leave[] = []


     leavelistobs = new BehaviorSubject(this.detailList.slice());

     updatelist( int : any){
        this.detailList.push(int);
        this.leavelistobs.next(this.detailList.slice());
        console.log(this.detailList)
     }

     postLeave(objdtf : any){
      return this.httpServe.post(this.leaveUrl,objdtf)
     
     }

     getLeave(){
      return this.httpServe.get(this.leaveUrl).pipe(map((rawdata : any)=>{
         console.log(rawdata)
         let arr = [];
         for(let user in rawdata){
             arr.push({...rawdata[user],user})
         }
         return arr;
          
      }))

      
  }

  
} 
