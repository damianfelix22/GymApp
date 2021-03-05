import { Component, OnInit, NgZone } from '@angular/core';

@Component({
  selector: 'app-tabata',
  templateUrl: './tabata.component.html',
  styleUrls: ['./tabata.component.scss'],
})
export class TabataComponent implements OnInit {

  running: boolean = false;
  running2: boolean = false;
  public time = "00"
  public timer
  seg: number = 20;
  rest: number = 10;
  work: number = 20;
  text:string = "ROUND 1"

  constructor(private ngZone: NgZone) { }

  ngOnInit() {}
  
  StartTimer() {
    this.seg = this.work;
    this.text = "ROUND 1"
    this.ngZone.run(() => { this.running = true });
    this.TimerRuning();
  }

  TimerRuning() {
    if (this.running == true) {
      this.timer = setTimeout(x => {
        this.seg -= 1;
        if(this.seg > 0){
          this.TimerRuning();
        } else {
          if (this.text == "ROUND 1") {
            this.text = "DESCANSO 1";
            this.seg = this.rest;
            this.TimerRuning();
          } else if (this.text == "DESCANSO 1") {
            this.text = "ROUND 2";
            this.seg = this.work;
            this.TimerRuning();
          } else if (this.text == "ROUND 2") {
            this.text = "DESCANSO 2";
            this.seg = this.rest;
            this.TimerRuning();
          } else if (this.text == "DESCANSO 2") {
            this.text = "ROUND 3";
            this.seg = this.work;
            this.TimerRuning();
          } else if (this.text == "ROUND 3") {
            this.text = "DESCANSO 3";
            this.seg = this.rest;
            this.TimerRuning();
          } else if (this.text == "DESCANSO 3") {
            this.text = "ROUND 4";
            this.seg = this.work;
            this.TimerRuning();
          } else if (this.text == "ROUND 4") {
            this.text = "DESCANSO 4";
            this.seg = this.rest;
            this.TimerRuning();
          } else if (this.text == "DESCANSO 4") {
            this.text = "ROUND 5";
            this.seg = this.work;
            this.TimerRuning();
          } else if (this.text == "ROUND 5") {
            this.text = "DESCANSO 5";
            this.seg = this.rest;
            this.TimerRuning();
          } else if (this.text == "DESCANSO 5") {
            this.text = "ROUND 6";
            this.seg = this.work;
            this.TimerRuning();
          } else if (this.text == "ROUND 6") {
            this.text = "DESCANSO 6";
            this.seg = this.rest;
            this.TimerRuning();
          } else if (this.text == "DESCANSO 6") {
            this.text = "ROUND 7";
            this.seg = this.work;
            this.TimerRuning();
          } else if (this.text == "ROUND 7") {
            this.text = "DESCANSO 7";
            this.seg = this.rest;
            this.TimerRuning();
          } else if (this.text == "DESCANSO 7") {
            this.text = "ROUND 8";
            this.seg = this.work;
            this.TimerRuning();
          } else {
            this.seg = this.work
            this.text = "INICIAR"
            clearTimeout();
            this.running = false;
          }

        }
      }, 1000);
    }else{this.seg=20}
  }

  resetTimer() {
    this.text = "INICIAR"
    this.seg = 20;
    this.work = 20;
    this.rest = 10;
    this.ngZone.run(() => { this.running = false });
  }

  workTime(ev: any){
    if(ev.detail.value.upper==NaN){
      this.work = 0;
    }
    this.work = ev.detail.value.upper;
  }

  restTime(ev: any){
    this.rest = ev.detail.value.upper;
  }

}
