import { Component, OnInit } from '@angular/core';
import { gsap } from 'gsap'
// import { TimelineMax } from  'gsap'



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  
  // protected timeline: TimelineMax;
  constructor() { }


  ngOnInit(): void {
    this.layerAnimation();
  }

  layerAnimation(){
    

    // console.log(document.querySelector(".clouds"));
    // const cloud = document.querySelector<HTMLElement>(".clouds");
    // console.log(cloud);

    
    const tl = gsap.timeline()
    gsap.defaults({
      // ease: "power2.in", 
      duration: 0.5
    });
    tl.from('.stars', {opacity: 0}, 0)
      // .from('.navlink', {y: -64, stagger: 0.1}, 0.5)
      .from('.moonImg', {scale: 0, rotation: 540}, 0.5)
      .from('.moonlight-2', {opacity: 0}, 0.5)
      .from('.links button', {scale: 0, stagger: 0.5}, 1)
      .from('.name path', {x: 10, opacity: 0, stagger: 0.1}, 0.5)
      .from('.joined', {x: 100, y: 100, opacity: 0}, 2)
      .from('.social button', {scale: 0, stagger: 0.2})
      .from('.scroll-down path', {y: -50, opacity: 0, stagger: 0.2, repeat: -1, repeatDelay: 4}, 4)
      .from('.clouds', {opacity: 0, duration: 1, onComplete: () => {document.querySelector<HTMLElement>(".clouds")!.style.animationPlayState = "running"}}, 3)

    // console.log("hi");
    
  }
  

}
