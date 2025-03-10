import { Component, AfterViewInit, ElementRef, ViewChild, OnInit } from '@angular/core';
import { SwiperContainer } from 'swiper/element';
import { SwiperOptions } from 'swiper/types';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {  
  constructor() {}

  @ViewChild('swiperContainer', { static: false }) swiperContainer!: ElementRef<SwiperContainer>;
  isLastSlide:boolean = false;
  isFirstSlide:boolean = false;
  
  swiperParams: SwiperOptions = {
    navigation: true,
    grabCursor: true,
    effect: 'cube',
    cubeEffect: {
      shadow: false,
      slideShadows: false,
      shadowOffset: 50,
      shadowScale: 0.4,
    },
    pagination: {
      clickable: true,
      dynamicBullets: true,
    },
    on: {
      init: (swiper: any) => {
        const prevButton = swiper.navigation.prevEl as HTMLElement;
        if (prevButton) {
          prevButton.style.display = 'none';
        }
        setTimeout(() => {
          swiper.params.cubeEffect.shadow = true;
          swiper.params.cubeEffect.slideShadows = true;
          swiper.update();
        }, 500);
      },
      slideChange: (swiper: any) => {
        const totalSlides = swiper.slides.length;
        this.isLastSlide! = swiper.activeIndex === totalSlides - 1;
        this.isFirstSlide! = swiper.activeIndex === 0;
        swiper.update();
        const nextButton = swiper.navigation.nextEl as HTMLElement;
        if (nextButton) {
          if (this.isLastSlide) {
            nextButton.style.display = 'none';
          } else {
            nextButton.style.display = 'block';
          }
        }
        const prevButton = swiper.navigation.prevEl as HTMLElement;
        if (prevButton) {
          if (this.isFirstSlide) {
            prevButton.style.display = 'none';
          } else {
            prevButton.style.display = 'block';
          }
        }
      },
    }
  };
  ngOnInit() {
    const script = document.createElement('script');
    script.src = 'https://unpkg.com/@dotlottie/player-component@2.7.12/dist/dotlottie-player.mjs';
    script.type = 'module';
    document.body.appendChild(script);
  }
  ngAfterViewInit(): void {
    const swiperEl = this.swiperContainer.nativeElement;
    Object.assign(swiperEl, this.swiperParams);
    swiperEl.initialize();
  }
}
