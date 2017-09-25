import { Component, ViewChild, HostListener, OnInit } from '@angular/core';
import { NgbTabset } from '@ng-bootstrap/ng-bootstrap';

import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/switch';

import { TTest, TTestRanges, TTestData, TTestSet } from './t-test';
import { TTestService } from './t-test.service';

import { DraggableDialogComponent } from './draggable-dialog/draggable-dialog.component'
import { OutputPaneComponent } from './output-pane/output-pane.component'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'PS: Power and Sample Size Calculation';
  newModel = new TTest();
  modelSets: TTestSet[] = [];

  helpTitles = {
    'overview': 'PS Overview',
    'start': 'PS Start Tab'
  };
  helpTopic = 'overview';
  plotOptionsAvailable = false;
  blockSelection = false;
  hoverBoxEnabled = true;

  @ViewChild('plotOptionsDialog') plotOptionsDialog: DraggableDialogComponent;
  @ViewChild('helpDialog') helpDialog: DraggableDialogComponent;
  @ViewChild('tabsetChild') tabsetChild: NgbTabset;
  @ViewChild('outputPaneChild') outputChild: OutputPaneComponent;

  selectedModelSet = new Subject<TTestSet>();

  constructor(private ttestService: TTestService) {}

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
    this.outputChild.openSaveDialog();
  }

  calculate(): void {
    this.addModel(this.newModel);
  }

  onTabChange(event: any): void {
    let md = event.nextId.match(/\d+/);
    if (md) {
      let index = md[0] - 1;
      this.selectedModelSet.next(this.modelSets[index]);
      this.plotOptionsAvailable = true;
    } else {
      this.selectedModelSet.next(undefined);
      this.plotOptionsAvailable = false;
    }
  }

  addModel(model: TTest, select = true): void {
    this.ttestService.create(model).
      then(result => {
        let model = new TTest(result.model);
        let data = result.data as TTestData;
        let modelSet = new TTestSet();
        modelSet.add(model, data);
        this.modelSets.push(modelSet);

        if (select) {
          setTimeout(() => {
            this.tabsetChild.select(`test-${this.modelSets.length}`);
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
    this.outputChild.resize();
  }
}
