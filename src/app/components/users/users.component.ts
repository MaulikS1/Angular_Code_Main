import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  displayedColumns: string[] = ['email', 'name', 'weight', 'symbol'];
  public usersDetails: any;


  constructor(private userService: UsersService) { }

  ngOnInit(): void {
    this.usersDetails = [];
    this.getAllUsers();
  }

  getAllUsers(){
    this.userService.getAllUsers().subscribe((response) => {
      console.log("API Call ==>", response.data[0]);
      this.usersDetails = response.data;
    },
       (error) => {
         console.log('Error state from API:,',error)}
    
    ); 
  }

}
