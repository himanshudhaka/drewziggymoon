import { Component } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';

import { gsap } from 'gsap'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'drewziggymoon';

  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {
    this.layerAnimation();
  }

  openDialog() {
    this.dialog.open(loginDialog);
  }

  layerAnimation(){
    let tl = gsap.timeline()
    gsap.defaults({
      // ease: "power2.in", 
      duration: 0.5
    });
    tl.from('.header', {y: -64}, 0)
      .from('.navvlink', {y: -64, stagger: 0.1}, 0.5)
  }

}

@Component({
  selector: 'login-dialog',
  templateUrl: 'login-dialog.html',
})
export class loginDialog {}


