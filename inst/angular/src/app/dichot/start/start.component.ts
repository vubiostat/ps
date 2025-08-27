import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { AbstractStartComponent } from '../../abstract-start.component';
import { Output as DichotOutput } from '../../output';
import { DichotService } from '../dichot.service';
import { Dichot, DichotMatched, DichotCase, DichotExpressed, DichotMethod } from '../dichot';
import { Project } from '../project';

@Component({
    selector: 'dichot-start',
    templateUrl: './start.component.html',
    styleUrls: ['./start.component.css'],
    standalone: false
})
export class StartComponent extends AbstractStartComponent implements OnInit {
  model: Dichot;

  constructor(
    private route: ActivatedRoute,
    private dichotService: DichotService
  ) {
    super();
  }

  ngOnInit(): void {
    this.model = new Dichot();
  }

  onSubmit(): void {
    let project = new Project(this.dichotService);
    project.addModel(this.model).subscribe(() => {
      this.calculate.emit(project);
    });
  }

  onToggleHelp(): void {
    this.toggleHelp.emit();
  }

  useExample(name: string): void {
    switch (name) {
      case "matched":
        this.model.output = DichotOutput.Power;
        this.model.matched = DichotMatched.Matched;
        this.model.case = DichotCase.CaseControl;
        this.model.expressed = undefined;
        this.model.method = undefined;
        this.model.alpha = 0.05;
        this.model.n = 400;
        this.model.p0 = 0.3;
        this.model.m = 1;
        this.model.phi = 0.7;
        this.model.psi = 2;
        break;
      case "ind-1":
        this.model.output = DichotOutput.Power;
        this.model.matched = DichotMatched.Independent;
        this.model.case = DichotCase.Prospective;
        this.model.expressed = DichotExpressed.TwoProportions;
        this.model.method = DichotMethod.ChiSquare;
        this.model.alpha = 0.05;
        this.model.n = 100;
        this.model.p0 = 0.3;
        this.model.p1 = 0.5;
        this.model.m = 1;
        break;
      case "ind-2":
        this.model.output = DichotOutput.Power;
        this.model.matched = DichotMatched.Independent;
        this.model.case = DichotCase.Prospective;
        this.model.expressed = DichotExpressed.RelativeRisk;
        this.model.method = DichotMethod.ChiSquare;
        this.model.alpha = 0.05;
        this.model.n = 100;
        this.model.p0 = 0.3;
        this.model.r = 0.5;
        this.model.m = 1;
        break;
      case "ind-3":
        this.model.output = DichotOutput.Power;
        this.model.matched = DichotMatched.Independent;
        this.model.case = DichotCase.CaseControl;
        this.model.expressed = DichotExpressed.OddsRatio;
        this.model.method = DichotMethod.ChiSquare;
        this.model.alpha = 0.05;
        this.model.n = 100;
        this.model.p0 = 0.3;
        this.model.psi = 0.5;
        this.model.m = 1;
        break;
    }
  }

  showCalculateButton(): boolean {
    return this.model.output !== undefined && (
      (this.model.matched === DichotMatched.Matched && this.model.case !== undefined) ||
      (
        this.model.matched === DichotMatched.Independent && this.model.case !== undefined &&
        this.model.expressed !== undefined && this.model.method !== undefined
      )
    );
  }
}
