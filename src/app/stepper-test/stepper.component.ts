import {ChangeDetectionStrategy, Component} from '@angular/core';
import {CdkStepper} from "@angular/cdk/stepper";
import {NgTemplateOutlet} from "@angular/common";

@Component({
  selector: 'app-stepper',
  standalone: true,
  imports: [
    NgTemplateOutlet
  ],
  template: '<div [ngTemplateOutlet]="selected ? selected.content : null"></div>',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [{provide: CdkStepper, useExisting: StepperComponent}]
})
export class StepperComponent extends CdkStepper {
}
