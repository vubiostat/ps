import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  konami = false;

  ngOnInit(): void {
  }

  konamiCode(): void {
    this.konami = true;
  }

  audioEnded(): void {
    this.konami = false;
  }
}
