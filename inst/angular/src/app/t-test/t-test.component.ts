import {
  Component,
  Input,
  Output,
  EventEmitter,
  OnInit
} from '@angular/core';

import { TTest } from '../t-test';

@Component({
  selector: 'app-t-test',
  templateUrl: './t-test.component.html',
  styleUrls: ['./t-test.component.css']
})
export class TTestComponent implements OnInit {
  @Input() model: TTest;
  @Output() onChange = new EventEmitter();
  min: TTest;
  max: TTest;
  prev: TTest;

  constructor() { }

  ngOnInit(): void {
    this.min = Object.assign({}, this.model);
    this.max = Object.assign({}, this.model);
    this.prev = Object.assign({}, this.model);

    this.min.alpha = 0;
    this.max.alpha = 1;

    this.min.power = 0;
    this.max.power = 1;

    this.min.caseMean = this.getMin(this.model.caseMean);
    this.max.caseMean = this.getMax(this.model.caseMean);

    this.min.controlMean = this.getMin(this.model.controlMean);
    this.max.controlMean = this.getMax(this.model.controlMean);

    this.min.sigma = this.getMin(this.model.sigma);
    this.max.sigma = this.getMax(this.model.sigma);
  }

  inputChanged(event: any): void {
    let key = event.target.name;
    if (key != 'alpha' && key != 'power') {
      let value = event.target.value;
      if (value < this.min[key]) {
        this.min[key] = value;
      } else if (value > this.max[key]) {
        this.max[key] = value;
      }
    }
    this.onChange.emit();
  }

  private getMin(n: number): number {
    return Math.round(n - (n * 0.5));
  }

  private getMax(n: number): number {
    return Math.round(n + (n * 0.5));
  }
}
