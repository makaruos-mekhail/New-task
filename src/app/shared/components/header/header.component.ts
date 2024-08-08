import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from '../../services/shared.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit {
  isHomeRoute: boolean = false;
  userIdInput: string = '';
  dataUser: any;

  constructor(private router: Router, private sharedService: SharedService) {}

  ngOnInit(): void {
    this.isHomeRoute = this.router.url === '/home';
    this.router.events.subscribe(() => {
      this.isHomeRoute = this.router.url === '/home';
    });
  }

  searchUser() {
    const userId = this.userIdInput.trim();
  
    if (userId) {
      this.sharedService.geUserByID(userId).pipe().subscribe({
        next: (data) => {
          this.dataUser = data.data;
  
          if (this.dataUser && this.dataUser.id) {
            this.router.navigate(['/details', this.dataUser.id]);
          }
        },
        error: (err) => {
          if (err.status === 404) {
            alert('No user found');
          } else {
            console.error('Error fetching user:', err);
            alert('An error occurred while fetching the user.');
          }
          this.sharedService.setIsLoading(false); 
        }
      });
    }
  
    this.userIdInput = '';
  }
  
}