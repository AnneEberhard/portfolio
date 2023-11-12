import { trigger, state, style, animate, transition, keyframes } from '@angular/animations';

export const slide = trigger('slide', [
  transition(':enter', [
    style({ transform: 'translateX(100%)' }),
    animate('1s ease-in-out', keyframes([
      style({ transform: 'translateX(100%)', offset: 0 }),
      style({ transform: 'translateX(0)', offset: 0.8 }),
      style({ transform: 'translateX(5px)', offset: 0.9 }),
      style({ transform: 'translateX(0)', offset: 1 }),
    ])),
  ]),
]);