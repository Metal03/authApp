import { Component, Inject, OnInit } from '@angular/core';
// import { DOCUMENT } from '@angular/common';
// import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: [],
  providers: []
})
export class NavbarComponent implements OnInit {

  constructor(
    // @Inject(DOCUMENT) public document: Document, public auth: AuthService
  ) {}

  ngOnInit() {
  }


}
