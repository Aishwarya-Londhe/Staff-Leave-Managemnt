import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { LeaveFormComponent } from '../leave-form/leave-form.component';
import { HttpHandlerServices } from '../shared/services/http-handler.service';

@Component({
  selector: 'app-staff-dashboard',
  templateUrl: './staff-dashboard.component.html',
  styleUrls: ['./staff-dashboard.component.css']
})
export class StaffDashboardComponent implements OnInit {
  leaves: any[] = [];
  updatelist: any = [];
  detaillist: any = [];
  Totalleave : any = 10;
  Approvedleave : any  = this.httpServ.sum ;
  RejectedLeave : any = this.httpServ.sub;

  constructor(private httpServ: HttpHandlerServices, private router: Router, private matDialog : MatDialog) { }

  ApplyNewLeave() {
    this.matDialog.open(LeaveFormComponent,{
      width : '350px',
  })
  }

  ngOnInit(): void {
    this.httpServ.getLeave().subscribe((param: any) => {
      let arr = [];
      for(let data of param){
        if(data.username == this.httpServ.username){
         arr.push(data);
          this.updatelist = arr;
          console.log(this.updatelist)
        }
      }
    })

    this.httpServ.addLeaveCard.subscribe((param : any)=>{
      this.updatelist.push(param)
      console.log(this.updatelist)
     })

    this.httpServ.getUsers().subscribe((param: any): void => {
      for(let para of param){
        if(para.email === this.httpServ.username){
          this.detaillist.push(para)
        }
      }
    })

    console.log(this.detaillist)
  }
  
  

  

}
