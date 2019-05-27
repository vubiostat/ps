import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { NgbPopover } from '@ng-bootstrap/ng-bootstrap';
import { filter } from 'rxjs/operators';
import { trigger, state, style, animate, transition, keyframes } from '@angular/animations';

enum MenuState {
  Main = "main",
  MainTTest = "mainttest",
  TTestInit = "ttestinit",
  TTest = "ttest",
  TTestMain = "ttestmain"
}

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
  animations: [
    trigger('mainState', [
      state('main, maininit', style({ opacity: 1, transform: 'translateX(0)' })),
      transition('main => mainttest', [
        animate('200ms', style({
          opacity: 0,
          transform: 'translateX(-100%)'
        }))
      ]),
      transition('void => main', [
        style({
          opacity: 0,
          transform: 'translateX(-100%)'
        }),
        animate('200ms')
      ])
    ]),
    trigger('ttestState', [
      state('ttest', style({
        opacity: 1,
        transform: 'translateX(0)',
        flexGrow: 0
      })),
      state('ttestinit', style({
        opacity: 1,
        transform: 'translateX(0)',
        flexGrow: 1
      })),
      transition('ttest => ttestmain', [
        animate('200ms', style({
          opacity: 0,
          transform: 'translateX(-100%)'
        }))
      ]),
      transition('ttestinit => ttest', animate('200ms')),
      transition('void => ttest', [
        style({
          opacity: 0,
          transform: 'translateX(-100%)'
        }),
        animate('200ms')
      ])
    ])
  ]
})
export class MenuComponent implements OnInit {
  urlInitialized = false;
  state: MenuState = MenuState.Main;

  @ViewChild('menu') menuElement: ElementRef;
  @ViewChild(NgbPopover) popoverElement: NgbPopover;

  constructor(private router: Router) { }

  ngOnInit() {
    this.router.events.pipe(filter(e => e instanceof NavigationEnd)).
      subscribe((e: NavigationEnd) => {
        this.urlChanged(e.url);
      });
  }

  showTTest(): void {
    if (this.state === MenuState.Main) {
      this.state = MenuState.MainTTest;
      if (this.popoverElement) {
        this.popoverElement.close();
      }
    }
  }

  showMain(): void {
    if (this.state === MenuState.TTest) {
      this.state = MenuState.TTestMain;
    }
  }

  mainAnimationStart(): void {
    if (this.state === MenuState.MainTTest) {
      let elt = this.menuElement.nativeElement;
      let dim = elt.getBoundingClientRect();
      elt.style.width = `${dim.width}px`;
    }
  }

  animationDone(): void {
    if (this.state === MenuState.MainTTest) {
      this.state = MenuState.TTestInit;
    } else if (this.state === MenuState.TTestMain) {
      this.state = MenuState.Main;
    }
  }

  isMainVisible(): boolean {
    return this.state === MenuState.Main || this.state == MenuState.MainTTest;
  }

  isTTestVisible(): boolean {
    return this.state === MenuState.TTest || this.state === MenuState.TTestMain || this.state === MenuState.TTestInit;
  }

  private urlChanged(url: string): void {
    if (/^\/t-test\//.test(url)) {
      this.state = MenuState.TTest;
      setTimeout(() => {
        this.menuElement.nativeElement.style.width = 'auto';
      }, 1000);
    } else if (/^\/(z-test|dichot)/.test(url)) {
      this.state = MenuState.Main;
      if (this.popoverElement) {
        this.popoverElement.close();
      }
    } else {
      this.state = MenuState.Main;
      if (!this.urlInitialized && this.popoverElement) {
        setTimeout(() => {
          // this excessive checking is apparently necessary
          if (this.popoverElement) {
            this.popoverElement.open();
          }
        }, 200);
      }
    }

    this.urlInitialized = true;
  }
}
