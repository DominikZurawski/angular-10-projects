import { Component, DestroyRef, effect, inject, OnInit, signal } from '@angular/core';

@Component({
  selector: 'app-server-status',
  standalone: true,
  imports: [],
  templateUrl: './server-status.component.html',
  styleUrl: './server-status.component.css'
})
export class ServerStatusComponent implements OnInit {
//   currentStatus: 'online' | 'offline' | 'unknown' = "online";
  currentStatus = signal<'online' | 'offline' | 'unknown'>("offline") ;
//   private interval?: ReturnType<typeof setInterval>;
private destroyRef = inject(DestroyRef)


  constructor(){
    //read signal status with set subscription:
    //it;s let run code( effect) when value of signal change for example: ClenUp
    effect(() => {
        console.log(this.currentStatus());
    });
    //read signal status without set subscription:
    // console.log(this.currentStatus());
  }

  ngOnInit(){
    const interval = setInterval(()=> {
        console.log('ON INIT');
        const rnd = Math.random();
        // if (rnd < 0.5){
        //     this.currentStatus = 'online';
        // } else if (rnd < 0.9) {
        //     this.currentStatus = 'offline';
        // } else {
        //     this.currentStatus = 'unknown';
        // }
        if (rnd < 0.5){
            this.currentStatus.set('online');
        } else if (rnd < 0.9) {
            this.currentStatus.set('offline');
        } else {
            this.currentStatus.set('unknown');
        }
    }, 5000);

    this.destroyRef.onDestroy(() => {
        clearInterval(interval);
    })

  }

//older destroy version
//   ngOnDestroy()  {
//       clearTimeout(this.interval);
//   }

}
