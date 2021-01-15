import { Component, OnInit, NgZone } from '@angular/core';

@Component({
  selector: 'app-cronometro',
  templateUrl: './cronometro.component.html',
  styleUrls: ['./cronometro.component.scss'],
})
export class CronometroComponent implements OnInit {

  
  public timeBegan = null
  public timeStopped:any = null
  public stoppedDuration:any = 0
  public started = null
  public running = false
  public running2 = false
  public running3 = false
  public blankTime = "00:00.000"
  public time = "00:00.000"
  public text = "INICIAR"
  public text_timer = "INICIAR"
  public func = false
  public min = 1
  public seg = 30
  public timer
  public maxTime = 30

  constructor(private ngZone: NgZone) { }

  ngOnInit() { }


  start() {
    if(this.running) return;
    if (this.timeBegan === null) {
        this.reset();
        this.timeBegan = new Date();
    }
    if (this.timeStopped !== null) {
      let newStoppedDuration:any = (+new Date() - this.timeStopped)
      this.stoppedDuration = this.stoppedDuration + newStoppedDuration;
    }
    this.started = setInterval(this.clockRunning.bind(this), 10);
      this.running = true;
  }
  
  stop() {
    this.running = false;
    this.timeStopped = new Date();
    clearInterval(this.started);
    this.text = "CONTINUAR";
  }
  
  reset() {
    this.running = false;
    clearInterval(this.started);
    this.stoppedDuration = 0;
    this.timeBegan = null;
    this.timeStopped = null;
    this.time = this.blankTime;
    this.text = "INICIAR";
  }
  
  zeroPrefix(num, digit) {
    let zero = '';
    for(let i = 0; i < digit; i++) {
      zero += '0';
    }
    return (zero + num).slice(-digit);
  }
  
  clockRunning() {
    let currentTime:any = new Date()
    let timeElapsed:any = new Date(currentTime - this.timeBegan - this.stoppedDuration)
    let hour = timeElapsed.getUTCHours()
    let min = timeElapsed.getUTCMinutes()
    let sec = timeElapsed.getUTCSeconds()
    let ms = timeElapsed.getUTCMilliseconds();
    this.time =
    this.zeroPrefix(hour, 2) + ":" +
    this.zeroPrefix(min, 2) + ":" +
    this.zeroPrefix(sec, 2) + "." +
    this.zeroPrefix(ms, 3);
  }

  toggleChange() {

    this.reset();

    if (this.func == true) {
      this.ngZone.run(() => {
        this.func = false;
      });
    } else {
      this.ngZone.run(() => {
        this.func = true;
      });
    }
  }

  tempChange(ev: any) {
    let time = "July 21, 2020 " + ev.detail.value;
    let times = new Date(time);
    this.min = times.getUTCMinutes();
    this.seg = times.getUTCSeconds();
  }

  StartTimer() {
    this.ngZone.run(() => { this.running3 = true });
    this.ngZone.run(() => {this.running2 = true});
    this.text_timer = "PAUSA";
    this.TimerRuning();
  }

  TimerRuning() {
    if (this.running2 == true) {
      this.timer = setTimeout(x => {
        this.seg -= 1;
        if(this.seg > 0){
          this.TimerRuning();
        } else {
          if (this.min == 0) {
            clearTimeout();
            this.running2 = false;
          } else {
            this.min -= 1;
            this.seg = 60;
            this.TimerRuning();
          }
        }
        
      }, 1000);
    }
  }

  PauseTimer() {

    if (this.running2 == false) {
      this.ngZone.run(() => {
        this.running2 = true;
      });
    } else {
      this.ngZone.run(() => {
        this.running2 = false;
      });
    }
    this.text_timer = "CONTINUAR";
  }

  resetTimer() {
    this.seg = 30;
    this.min = 1;
    this.text_timer = "INICIAR";
    this.ngZone.run(() => { this.running3 = false });
    this.ngZone.run(() => {this.running2 = false});
  }


}
