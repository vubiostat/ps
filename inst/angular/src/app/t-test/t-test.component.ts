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
  @Output() onToggleHelp = new EventEmitter();

  model: TTest;
  min: TTest;
  max: TTest;
  round: TTest;

  constructor(private ttestService: TTestService) { }

  ngOnInit(): void {
    this.model = this.modelSet.model;
    this.round = this.model.round();
    this.model.onChange.
      debounceTime(100).
      subscribe(changes => {
        this.modelChanged(changes);
      });
    this.round.onChange.subscribe(changes => {
      this.model.update(changes);
    });

    this.min = new TTest(this.model);
    this.max = new TTest(this.model);

    this.min.alpha = 0.01;
    this.max.alpha = 0.99;

    this.min.power = 0.01;
    this.max.power = 0.99;

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

  floor(n: number): number {
    return Math.floor(n);
  }

  ceil(n: number): number {
    return Math.ceil(n);
  }

  private getMin(n: number): number {
    return Math.round(n - (n * 0.5));
  }

  private getMax(n: number): number {
    return Math.round(n + (n * 0.5));
  }

  private modelChanged(changes: any): void {
    let keys = Object.keys(changes);
    if (keys.length > 1 || (keys[0] != "showAlternates" && keys[0] != this.model.output)) {
      this.updateModelSet();
    }
  }

  private updateModelSet(): void {
    this.ttestService.update(this.modelSet.model).
      then(result => {
        this.modelSet.update(result.model, result.data);
        this.round.roundUpdate(result.model, false);

        // adjust min/max
        if (this.model.sigma < this.min.sigma) {
          this.min.sigma = Math.floor(this.model.sigma);
        } else if (this.model.sigma > this.max.sigma) {
          this.max.sigma = Math.ceil(this.model.sigma);
        }

        if (this.model.delta < this.min.delta) {
          this.min.delta = Math.floor(this.model.delta);
        } else if (this.model.delta > this.max.delta) {
          this.max.delta = Math.ceil(this.model.delta);
        }

        if (this.model.n < this.min.n) {
          this.min.n = Math.floor(this.model.n);
        } else if (this.model.n > this.max.n) {
          this.max.n = Math.ceil(this.model.n);
        }
      }, error => { });
  }
}
