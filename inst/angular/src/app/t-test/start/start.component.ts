import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { AbstractStartComponent } from '../../abstract-start.component';
import { TTest, TTestKind } from '../t-test';
import { TTestService } from '../t-test.service';
import { Project } from '../project';

@Component({
  selector: 't-test-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css']
})
export class StartComponent extends AbstractStartComponent implements OnInit {
  model: TTest;
  kind: TTestKind;

  constructor(
    private route: ActivatedRoute,
    private ttestService: TTestService
  ) {
    super();
  }

  ngOnInit(): void {
    this.route.data.subscribe((data: any) => {
      this.kind = data.kind;
      this.model = new TTest({ kind: data.kind });
    });
  }

  onToggleHelp(): void {
    this.toggleHelp.emit();
  }

  needDelta(): boolean {
    return this.model.output !== 'delta' && this.model.output !== 'nByCI';
  }

  needPower(): boolean {
    return this.model.output !== 'power' && this.model.output !== 'nByCI';
  }

  needPowerOrDelta(): boolean {
    return this.model.output === 'nByCI';
  }

  needCI(): boolean {
    return this.model.output === 'nByCI';
  }

  needNOrCI(): boolean {
    return this.model.output !== 'n' && this.model.output !== 'nByCI';
  }

  needM(): boolean {
    return this.model.kind === TTestKind.Independent;
  }

  onSubmit(): void {
    let project = new Project(this.ttestService);
    project.addModel(this.model).subscribe(() => {
      this.calculate.emit(project);
    });
  }

  useExample(name: string): void {
    switch (name) {
      case "power":
        this.model.output = "power";
        this.model.alpha = 0.05;
        this.model.delta = 5;
        this.model.sigma = 10;
        this.model.n = 33;
        if (this.kind == TTestKind.Independent) {
          this.model.m = 2;
        }
        break;
    }
  }

  showCalculateButton(): boolean {
    return this.model.output !== undefined;
  }
}
