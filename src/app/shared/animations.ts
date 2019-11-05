import { trigger, state, transition, animate, style, query, group, animateChild, keyframes } from '@angular/animations';


export const slidePrjIn = trigger('comeProject', [
  transition('void <=> *', [style({
    opacity: 0,
    transform: 'translateX(-100%)'
  }), animate(3000),
    animate('1000ms ease-in', style({
      backgroundColor: 'pink'
    }))]),
]
);




