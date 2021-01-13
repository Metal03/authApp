import { Component, Inject, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: [],
  providers: []
})
export class NavbarComponent implements OnInit {

  public user: any;
  constructor(
    @Inject(DOCUMENT) public document: Document, public auth: AuthService
  ) {}

  async ngOnInit() {
    await this.auth.user$.subscribe(user => {
      // Sava localStorage
      localStorage.setItem('identity', JSON.stringify(user));
    });
    this.getIdentity();
  }

  getIdentity() {
    const identity = JSON.parse(localStorage.getItem('identity'));
    if (identity && identity !== 'undefined') {
       this.user = identity;
    } else {
        this.user = null;
    }
  }

  async logout() {
    await this.auth.logout({ returnTo: document.location.origin })
    localStorage.clear();
  }

}
