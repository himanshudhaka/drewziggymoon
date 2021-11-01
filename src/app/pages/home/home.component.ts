import { Component, OnInit } from '@angular/core';
import { gsap } from 'gsap'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.layerAnimation();
  }

  layerAnimation(){
    const tl = gsap.timeline()
    gsap.defaults({ 
      duration: 0.5
    });
    tl.from('.stars', {opacity: 0}, 0)
    .from('.moonImg', {scale: 0, rotation: 540}, 0.5)
    .from('.moonlight-2', {opacity: 0}, 0.5)
    .from('.links button', {scale: 0, stagger: 0.5}, 1)
    .from('.name path', {x: 10, opacity: 0, stagger: 0.1}, 0.5)
    .from('.joined', {x: 100, y: 100, opacity: 0}, 2)
    .from('.social button', {scale: 0, stagger: 0.2})
    .from('.down-arrow', {y: -50, opacity: 0, stagger: 0.2, repeat: -1, repeatDelay: 4}, 4)
    .from('.clouds', {opacity: 0, duration: 1, onComplete: () => {document.querySelector<HTMLElement>(".clouds")!.style.animationPlayState = "running"}}, 3)
  }
}
