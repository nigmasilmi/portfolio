import { trigger, state, transition, animate, style, query, group, animateChild, keyframes } from '@angular/animations';


export const routeAnimations = trigger('fadeIn', [
  transition(':enter', [
    style({
      opacity: 0,
      backgroundColor: 'red'
    }),
    animate(1000)
  ]),
  transition(':leave', [
    animate(1000, style({
      opacity: 0
    }))
  ])
]);

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



export const slideInAnimation =
  trigger('routeAnimations', [
    transition('* <=> *', [
      style({ position: 'relative' }),
      query(':enter, :leave', [
        style({
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%'
        })
      ], { optional: true }),
      query(':enter', [
        style({ left: '-100%' })
      ], { optional: true }),
      query(':leave', animateChild(), { optional: true }),
      group([
        query(':leave', [
          animate('300ms ease-out', style({ left: '100%' }))
        ], { optional: true }),
        query(':enter', [
          animate('300ms ease-out', style({ left: '0%' }))
        ], { optional: true })
      ]),
      query(':enter', animateChild(), { optional: true }),
    ]),
    // transition('* <=> FilterPage', [
    //   style({ position: 'relative' }),
    //   query(':enter, :leave', [
    //     style({
    //       position: 'absolute',
    //       top: 0,
    //       left: 0,
    //       width: '100%'
    //     })
    //   ], { optional: true }),
    //   query(':enter', [
    //     style({ left: '-100%' })
    //   ], { optional: true }),
    //   query(':leave', animateChild(), { optional: true }),
    //   group([
    //     query(':leave', [
    //       animate('200ms ease-out', style({ left: '100%' }))
    //     ], { optional: true }),
    //     query(':enter', [
    //       animate('300ms ease-out', style({ left: '0%' }))
    //     ], { optional: true })
    //   ]),
    //   query(':enter', animateChild(), { optional: true }),
    // ])
  ]);

export const myOtherAnimation = trigger('myAnimation', [
  transition('* => *', [
    query(
      ':enter',
      [style({ opacity: 0 })],
      { optional: true }
    ),
    query(
      ':leave',
      [style({ opacity: 1 }), animate('2s', style({ opacity: 0 }))],
      { optional: true }
    ),
    query(
      ':enter',
      [style({ opacity: 0 }), animate('2s', style({ opacity: 1 }))],
      { optional: true }
    )
  ])
]);

