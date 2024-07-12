import { Component, Input, input } from '@angular/core';
import type { Results } from '../investment-input.model';

@Component({
  selector: 'app-investment-results',
  standalone: true,
  imports: [],
  templateUrl: './investment-results.component.html',
  styleUrl: './investment-results.component.css'
})
export class InvestmentResultsComponent {
    // results = input<...>()
    @Input() results?: Results[];
}
