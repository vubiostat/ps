import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Output as DichotOutput } from '../../output';
import { Dichot, DichotMatched, DichotCase, DichotExpressed, DichotMethod } from '../dichot';

@Component({
  selector: 'dichot-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css']
})
export class StartComponent implements OnInit {
  @Input() model: Dichot;
  @Output() onCalculate = new EventEmitter();
  @Output() onToggleHelp = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onSubmit(): void {
    this.onCalculate.emit();
  }

  toggleHelp(): void {
    this.onToggleHelp.emit();
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
        this.model.output = DichotOutput.DetectableAlternative;
        this.model.matched = DichotMatched.Independent;
        this.model.case = DichotCase.Prospective;
        this.model.expressed = DichotExpressed.TwoProportions;
        this.model.method = DichotMethod.ChiSquare;
        this.model.alpha = 0.05;
        this.model.n = 100;
        this.model.p0 = 0.3;
        this.model.power = 0.8;
        this.model.m = 1;
        break;
      case "ind-2":
        this.model.output = DichotOutput.DetectableAlternative;
        this.model.matched = DichotMatched.Independent;
        this.model.case = DichotCase.Prospective;
        this.model.expressed = DichotExpressed.RelativeRisk;
        this.model.method = DichotMethod.ChiSquare;
        this.model.alpha = 0.05;
        this.model.n = 100;
        this.model.p0 = 0.3;
        this.model.power = 0.8;
        this.model.m = 1;
        break;
      case "ind-3":
        this.model.output = DichotOutput.DetectableAlternative;
        this.model.matched = DichotMatched.Independent;
        this.model.case = DichotCase.CaseControl;
        this.model.expressed = DichotExpressed.OddsRatio;
        this.model.method = DichotMethod.ChiSquare;
        this.model.alpha = 0.05;
        this.model.n = 100;
        this.model.p0 = 0.3;
        this.model.m = 1;
        this.model.power = 0.8;
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
