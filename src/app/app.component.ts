import {ChangeDetectionStrategy, Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {StepperComponent} from "./stepper-test/stepper.component";
import {CdkStep} from "@angular/cdk/stepper";
import {StepperTestComponent} from "./stepper-test/stepper-test.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, StepperComponent, CdkStep, StepperTestComponent],
  template: `
    <app-stepper-test/>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
}
