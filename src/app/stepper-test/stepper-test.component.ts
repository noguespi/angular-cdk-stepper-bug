import {ChangeDetectionStrategy, ChangeDetectorRef, Component, ViewChild} from '@angular/core';
import {CdkStep, CdkStepper} from "@angular/cdk/stepper";
import {StepperComponent} from "./stepper.component";
import {AsyncPipe} from "@angular/common";

@Component({
  selector: 'app-stepper-test',
  standalone: true,
  imports: [
    CdkStep,
    StepperComponent,
    AsyncPipe
  ],
  template: `
    <app-stepper [linear]="true">
      <cdk-step #step1 label="Step 1" [completed]="completed">
        <div>step 1</div>
        <button (click)="nextViaBinding()">Next via binding</button>
        <button (click)="nextViaViewChild()">Next via view child</button>
      </cdk-step>
      <cdk-step label="Step 2">
        <div>step 2</div>
        <button (click)="stepper.previous()">Prev</button>
      </cdk-step>
    </app-stepper>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StepperTestComponent {
  @ViewChild(CdkStepper)
  stepper!: CdkStepper

  @ViewChild('step1')
  step1!: CdkStep

  completed = false

  constructor(
    private cdr: ChangeDetectorRef
  ) {
  }

  nextViaBinding() {
    this.completed = true
    this.stepper.next()
    this.cdr.markForCheck()
  }

  nextViaViewChild() {
    this.step1.completed = true
    this.stepper.next()
  }
}
