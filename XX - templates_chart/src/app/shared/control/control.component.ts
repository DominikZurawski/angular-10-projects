import {
    afterNextRender,
    afterRender,
    AfterViewInit,
  Component,
  contentChild,
  ContentChild,
  ElementRef,
  HostBinding,
  HostListener,
  inject,
  input,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'app-control',
  standalone: true,
  imports: [],
  templateUrl: './control.component.html',
  styleUrl: './control.component.css',
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'control',
    '(click)': 'onClick()',
  },
})
export class ControlComponent implements AfterViewInit {
  // @HostBinding('class') className = 'control'
  // @HostListener('click') onClick() {
  //     console.log('Clicked!');
  // }
  label = input.required<string>();
  private el = inject(ElementRef);

  //geting access to #input elements
//   @ContentChild('input') private control?: ElementRef<
//     HTMLInputElement | HTMLTextAreaElement
//   >;

// or newer version:
private control =
    contentChild<ElementRef<HTMLInputElement | HTMLTextAreaElement>>('input');

    constructor(){
        afterRender(() => {
            console.log('afterRender');
        });

        afterNextRender(() => {
            console.log('afterNextRender');
        });
    }



ngAfterViewInit(){
    //...
}


  onClick() {
    console.log('Clicked!');
    console.log(this.el);
    // console.log(this.control);
    console.log(this.control());
  }
}
