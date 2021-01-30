import { animate, animateChild, group, query, sequence, style, transition, trigger } from '@angular/animations';


export const Container  = [
  trigger('container', [
    transition(':enter, :leave', [
      query('@*', animateChild(), { optional: true }),
    ]),
  ]),
];


export const EnterExitLeft = [
  trigger('enterExitLeft', [
    transition(':enter', [
      style({ opacity: 0, transform: 'translateX(-400px)' }),
      animate(
        '300ms ease-in',
        style({ opacity: 1, transform: 'translateX(0)' })
      ),
    ]),
    transition(':leave', [
      animate(
        '300ms ease-in',
        style({ opacity: 0, transform: 'translateX(-400px)' })
      ),
    ]),
  ]),
];

export const EnterExitRight = [
  trigger('enterExitRight', [
    transition(':enter', [
      style({ opacity: 0, transform: 'translateX(400px)' }),
      sequence([
        animate('200ms', style({ opacity: 1 })),
        animate('200ms ease-in', style({ transform: 'scale(1)' })),
        animate('300ms ease-in', style({ opacity: 1, transform: 'translateX(0)' })),
      ])
    ]),
    transition(':leave', [
      sequence([
        animate('200ms', style({ opacity: 1 })),
        animate('200ms ease-in', style({ transform: 'scale(1)' })),
        animate('300ms ease-in', style({ opacity: 0, transform: 'translateX(400px)' })),
      ])
    ]),
  ]),
];
