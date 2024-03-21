import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-all-users',
  templateUrl: './list-all-users.component.html',
  styleUrl: './list-all-users.component.css'
})
export class ListAllUsersComponent implements OnInit{
  users: any[] = []; // Replace with actual user data
  filteredUsers: any[] = [];
  startDate: string = '';
  endDate: string = '';

  constructor() { }

  ngOnInit(): void {
    // Fetch users from backend or provide sample data
    this.users = [
      { firstName: 'John', lastName: 'Doe', phoneNumber: '1234567890', email: 'john@example.com', dateOfBirth: '2000-01-01' },
      { firstName: 'Jane', lastName: 'Smith', phoneNumber: '9876543210', email: 'jane@example.com', dateOfBirth: '2005-01-01' },
      // Add more users here
    ];
    this.filteredUsers = this.users;
  }

  filterUsers(): void {
    this.filteredUsers = this.users.filter(user => {
      const userDateOfBirth = new Date(user.dateOfBirth);
      const startDate = new Date(this.startDate);
      const endDate = new Date(this.endDate);
      return userDateOfBirth >= startDate && userDateOfBirth <= endDate;
    });
  }

}
