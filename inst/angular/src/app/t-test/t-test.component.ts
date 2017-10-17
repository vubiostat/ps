import { Component, ViewChild, HostListener, OnInit, AfterViewInit } from '@angular/core';
import { NgbTabset, NgbTabChangeEvent } from '@ng-bootstrap/ng-bootstrap';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/switch';

import { TTest, TTestRanges, TTestData, TTestSet } from './t-test';
import { TTestService } from './t-test.service';

import { DraggableDialogComponent } from './draggable-dialog/draggable-dialog.component'
import { OutputPaneComponent } from './output-pane/output-pane.component'

@Component({
  selector: 't-test-root',
  templateUrl: './t-test.component.html',
  styleUrls: ['./t-test.component.css']
})
export class TTestComponent implements OnInit {
  newModel = new TTest();
  modelSets: TTestSet[] = [];
  selectedModelSet: TTestSet;

  helpTitles = {
    'overview': 'PS Overview',
    'start': 'PS Start Tab'
  };
  helpTopic = 'overview';
  blockSelection = false;
  hoverBoxEnabled = true;

  @ViewChild('plotOptionsDialog') plotOptionsDialog: DraggableDialogComponent;
  @ViewChild('helpDialog') helpDialog: DraggableDialogComponent;
  @ViewChild('tabset') tabset: NgbTabset;
  @ViewChild('outputPane') outputPane: OutputPaneComponent;

  constructor(private service: TTestService) {}

  ngOnInit(): void {
    let model = new TTest({
      output: 'n', alpha: 0.05, power: 0.8, delta: 5, sigma: 10, n: 32
    });
    this.addModel(model, false);
  }

  toggleHelp(topic: string): void {
    if (this.helpDialog.isOpen() && this.helpTopic == topic) {
      this.helpDialog.close();
    } else {
      this.helpTopic = topic;
      this.helpDialog.open();
    }
  }

  togglePlotOptions(): void {
    this.plotOptionsDialog.toggle();
  }

  toggleHoverBox(): void {
    this.hoverBoxEnabled = !this.hoverBoxEnabled;
  }

  save(): void {
    this.outputPane.openSaveDialog();
  }

  calculate(): void {
    this.addModel(this.newModel);
  }

  onTabChange(event: NgbTabChangeEvent): void {
    let md = event.nextId.match(/\d+/);
    if (md) {
      let index = parseInt(md[0]) - 1;
      this.selectedModelSet = this.modelSets[index];
    } else {
      this.selectedModelSet = undefined;
    }
  }

  addModel(model: TTest, select = true): void {
    this.service.create(model).
      then(result => {
        let model = new TTest(result.model);
        let data = result.data as TTestData;
        let modelSet = new TTestSet();
        modelSet.add(model, data);
        this.modelSets.push(modelSet);

        if (select) {
          setTimeout(() => {
            this.tabset.select(`t-test-${this.modelSets.length}`);
          }, 1);
        }
      }).
      catch(err => console.error(err));
  }

  mouseup(): void {
    this.plotOptionsDialog.stopDragging();
  }

  childDragStarted(): void {
    this.blockSelection = true;
  }

  childDragEnded(): void {
    this.blockSelection = false;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event): void {
    this.outputPane.resize();
  }
}
