import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {
  userForm!: FormGroup;
  successMessage = false;
  errorMessage = false;
  messagingError!: string
  message!: string;

  constructor(private fb: FormBuilder, private userService: UserService) { }

  ngOnInit(): void {
    this.initializeForm();
  }

  private initializeForm(): void {
    this.userForm = this.fb.group({
      first_name: ['', Validators.required],
      last_name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/)]],
      phone_number: ['', Validators.required],
      date_of_birth: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.userForm.valid) {
      console.log(this.userForm.value);
      this.userService.createUser(this.userForm.value).subscribe(
        response => {
          console.log('User created successfully:', response);
          this.successMessage = true;
          this.message = 'User created successfully';
          setTimeout(() => {
            this.successMessage = false;
          }, 5000); // 5 seconds timeout
        },
        error => {
          console.error('Error creating user:', error);
          this.errorMessage = true;
          this.messagingError = (error.error && error.error.message ? error.error.message : 'Unknown error');
          setTimeout(() => {
            this.errorMessage = false;
          }, 5000); // 5 seconds timeout
        }
      );
    } else {
      // Handle form validation errors
    }
  }
  
}
