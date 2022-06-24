import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatEndDate } from '@angular/material/datepicker';
import { AuthService } from 'src/app/services/auth.service';



@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  public maxDate = new Date();
  public minDate = new Date();
  
  constructor(private authService: AuthService, public datepipe: DatePipe) { }

  ngOnInit(): void {
    // Date can be selected max 3 month
    this.maxDate.setMonth(this.maxDate.getMonth() + 3);
    // Old Date can't be selected
    this.minDate.setDate(this.minDate.getDate());
  }

  onSubmit(form: NgForm){
    console.log(form.value);
    form.value.endDate =this.datepipe.transform(form.value.endDate, 'yyyy-MM-dd');
    form.value.createdDate = this.datepipe.transform(new Date(), 'yyyy-MM-dd');

    this.authService.registerUser(form.value).subscribe((response: any) => {
      console.log(response);
      alert("New user created sucessfully !!");
      
    });

  }

}
