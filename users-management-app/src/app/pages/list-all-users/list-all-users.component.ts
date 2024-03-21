import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-list-all-users',
  templateUrl: './list-all-users.component.html',
  styleUrls: ['./list-all-users.component.css'] // Corrected property name to styleUrls
})
export class ListAllUsersComponent implements OnInit {
  users: any[] = [];
  filteredUsers: any[] = [];
  startDate: string = '';
  endDate: string = '';

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getUsers().subscribe(
      (response: any) => { 
        console.log('Users retrieved successfully:', response.users);
        this.users = response.users; 
        this.filteredUsers = this.users;
      },
      error => {
        console.error('Error retrieving users:', error);
      }
    );
  }

  filterUsers(): void {
    this.filteredUsers = this.users.filter(user => {
      console.log(user.date_of_birth)
      const userDateOfBirth = new Date(user.date_of_birth);
      const startDate = new Date(this.startDate);
      const endDate = new Date(this.endDate);
      return userDateOfBirth >= startDate && userDateOfBirth <= endDate;
    });
  }
}
