import { Component } from '@angular/core';
import { HttpHandlerServices } from '../shared/services/http-handler.service';
import { leaveService } from '../shared/services/leave.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hod-dashboard',
  templateUrl: './hod-dashboard.component.html',
  styleUrls: ['./hod-dashboard.component.css']
})
export class HodDashboardComponent {
  
  infolist : any;
  constructor(private leaveserve : leaveService,private router : Router){

  }

  ngOnInit(): void {

    this.leaveserve.getLeave().subscribe((info : any)=>{
      console.log(info)
     this.infolist =  info; 
      console.log(this.infolist)
    })
  }

}
