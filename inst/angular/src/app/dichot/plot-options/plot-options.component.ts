import { Component, Input, OnInit } from '@angular/core';

import { Project } from '../project';

@Component({
  selector: 'dichot-plot-options',
  templateUrl: './plot-options.component.html',
  styleUrls: ['./plot-options.component.css']
})
export class PlotOptionsComponent implements OnInit {
  @Input() project: Project;

  constructor() { }

  ngOnInit() {
  }

}
