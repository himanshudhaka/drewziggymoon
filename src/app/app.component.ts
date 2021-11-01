import { Component, ViewChild } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { gsap } from 'gsap'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'drewziggymoon';
  @ViewChild('sidenav') sidenav!: any

  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {
    this.layerAnimation();
  }

  openDialog() {
    this.dialog.open(loginDialog);
    this.sidenav.close()
  }

  layerAnimation(){
    let tl = gsap.timeline()
    gsap.defaults({
      duration: 0.5
    });
    tl.from('.nav-mid button', {y: -64, stagger: 0.1}, 0.5)
  }

}

@Component({
  selector: 'login-dialog',
  templateUrl: 'login-dialog.html',
})
export class loginDialog {}


