import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { NgbPopover } from '@ng-bootstrap/ng-bootstrap';

enum MenuState {
  Main = "main",
  TTest = "ttest",
  TTestPaired = "ttestPaired",
  ZTest = "ztest"
}

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  urlInitialized = false;
  state: MenuState = MenuState.Main;

  @ViewChild(NgbPopover) popoverElement: NgbPopover;

  constructor(private router: Router) { }

  ngOnInit() {
    this.router.events.filter(e => e instanceof NavigationEnd).
      subscribe((e: NavigationEnd) => {
        this.urlChanged(e.url);
      });
  }

  setState(state: MenuState): void {
    this.state = state;
  }

  private urlChanged(url: string): void {
    switch (url) {
      case "/t-test":
        this.state = MenuState.TTestPaired;
        break;

      case "/z-test":
        this.state = MenuState.ZTest;
        break;

      default:
        this.state = MenuState.Main;
        if (!this.urlInitialized) {
          setTimeout(() => this.popoverElement.open(), 1);
        }
    }

    this.urlInitialized = true;
  }
}
