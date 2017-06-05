import {
  Component,
  Input,
  Output,
  EventEmitter,
  OnInit
} from '@angular/core';

import 'rxjs/add/operator/debounceTime';

import { TTest, TTestRanges, TTestSet } from '../t-test';
import { TTestService } from '../t-test.service';

@Component({
  selector: 'app-t-test',
  templateUrl: './t-test.component.html',
  styleUrls: ['./t-test.component.css']
})
export class TTestComponent implements OnInit {
  @Input() modelSet: TTestSet;
  model: TTest;
  min: TTest;
  max: TTest;
  @Output() onToggleHelp = new EventEmitter();

  constructor(private ttestService: TTestService) { }

  ngOnInit(): void {
    this.model = this.modelSet.model;
    this.model.onChange.
      debounceTime(100).
      subscribe(changes => {
        this.updateModelSet();
      });

    this.min = new TTest(this.model);
    this.max = new TTest(this.model);

    this.min.alpha = 0;
    this.max.alpha = 1;

    this.min.power = 0;
    this.max.power = 1;

    this.min.n = this.getMin(this.model.n);
    this.max.n = this.getMax(this.model.n);

    this.min.delta = this.getMin(this.model.delta);
    this.max.delta = this.getMax(this.model.delta);

    this.min.sigma = this.getMin(this.model.sigma);
    this.max.sigma = this.getMax(this.model.sigma);
  }

  inputChanged(event: any): void {
    let key = event.target.name;
    if (key != 'alpha' && key != 'power' && key != 'output') {
      let value = event.target.value;
      if (value < this.min[key]) {
        this.min[key] = value;
      } else if (value > this.max[key]) {
        this.max[key] = value;
      }
      setTimeout(() => {
        event.target.value = value;
      }, 1);
    }
  }

  toggleAlternates(): void {
    this.model.showAlternates = !this.model.showAlternates;
  }

  toggleHelp(): void {
    this.onToggleHelp.emit();
  }

  private getMin(n: number): number {
    return Math.round(n - (n * 0.5));
  }

  private getMax(n: number): number {
    return Math.round(n + (n * 0.5));
  }

  private updateModelSet(): void {
    this.ttestService.update(this.modelSet.model).
      then(result => {
        this.modelSet.update(result.model, result.ranges, result.data);
      });
  }
}
