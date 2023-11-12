import { trigger, state, style, animate, transition, keyframes } from '@angular/animations';

export const wiggle = trigger('wiggle', [
  state('void', style({ transform: 'translateX(-100%) rotate(0deg)' })),
  transition(':enter', [
    animate('500ms', keyframes([
      style({ transform: 'rotate(10deg)', offset: 0.4 }),
      style({ transform: 'rotate(-10deg)', offset: 0.5 }),
      style({ transform: 'rotate(10deg)', offset: 0.6 }),
      style({ transform: 'rotate(-10deg)', offset: 0.7 }),
      style({ transform: 'rotate(10deg)', offset: 0.8 }),
      style({ transform: 'rotate(-10deg)', offset: 0.9 }),
      style({ transform: 'rotate(0deg)', offset: 1 }),
    ])),
  ]),
]);