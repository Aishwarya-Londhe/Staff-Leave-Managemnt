import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { leave } from 'src/app/shared/model/leave.model';
import { HttpHandlerServices } from 'src/app/shared/services/http-handler.service';

@Component({
  selector: 'app-leave-form',
  templateUrl: './leave-form.component.html',
  styleUrls: ['./leave-form.component.css']
})
export class LeaveFormComponent {
  LeaveForm: any |FormGroup;
  staff : any;
  sname : any ;
  status : any = 'pending' ;

  days: Number | null = null ;

  constructor(private httpServ : HttpHandlerServices, public dialog: MatDialogRef<LeaveFormComponent>){ }

  ngOnInit(): void {

    this.LeaveForm = new FormGroup({
      from : new FormControl( '', Validators.required),
      To : new FormControl('', Validators.required),
      reason : new FormControl('',Validators.required),
    })
  }

  calculateDays() {
    
    const startDateObj = new Date(this.LeaveForm.value.from);
    const endDateObj = new Date(this.LeaveForm.value.To);
    const timeDiff = endDateObj.getTime() - startDateObj.getTime();
    this.days = Math.ceil(timeDiff / (1000 * 3600 * 24));

}

  onSubmit(){
    this.calculateDays()
    this.staff = new leave(this.httpServ.fullname, this.LeaveForm.value.from, this.LeaveForm.value.To, this.LeaveForm.value.reason, this.status, this.httpServ.username, this.days);
    this.httpServ.postLeave(this.staff).subscribe((param : any)=>{
      console.log(param);
      console.log(this.staff);
    });
    this.httpServ.addLeaveCard.next(this.staff);
    this.dialog.close();
  }

}
