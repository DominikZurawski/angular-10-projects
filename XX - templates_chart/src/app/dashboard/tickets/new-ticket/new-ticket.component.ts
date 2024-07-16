import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  OnInit,
  output,
  Output,
  viewChild,
  ViewChild,
  ViewChildren,
} from '@angular/core';
import { ButtonComponent } from '../../../shared/button/button.component';
import { ControlComponent } from '../../../shared/control/control.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-ticket',
  standalone: true,
  imports: [ButtonComponent, ControlComponent, FormsModule],
  templateUrl: './new-ticket.component.html',
  styleUrl: './new-ticket.component.css',
})
export class NewTicketComponent implements OnInit, AfterViewInit {
  // onSubmit(titleElement: HTMLInputElement){
  //     // console.dir(titleElement)
  //     const enteredTitle = titleElement.value;
  //     console.log(enteredTitle);
  // }

  //Second way to get access on form:
  @ViewChild('form') form?: ElementRef<HTMLFormElement>;
  //or
  //private form = viewChild.required<ElementRef<HTMLFormElement>>('form');

  // to get access multiple elements:
  // @ViewChildren(ButtonComponent) buttons


    enteredTitle = '';
    enteredText = '';
    //   @Output() add = new EventEmitter<{title: string; text: string}>();
    //or modern version:
    add = output<{title: string; text: string}>();

  ngOnInit() {
    console.log('On init!');
    console.log(this.form?.nativeElement);
  }

  ngAfterViewInit() {
    console.log('After view init!');
    console.log(this.form?.nativeElement);
  }

//   onSubmit(title: string, ticketText: string) {
    onSubmit() {
    // console.log(title);
    // console.log(ticketText);

    // this.add.emit({title: title, text: ticketText})
    this.add.emit({title: this.enteredTitle, text: this.enteredText})

    // this.form?.nativeElement.reset();
    // this.form().nativeElement.reset();
    this.enteredTitle = '';
    this.enteredText = '';
  }
}
