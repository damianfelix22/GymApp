import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CronometroComponent } from './cronometro.component';

describe('CronometroComponent', () => {
  let component: CronometroComponent;
  let fixture: ComponentFixture<CronometroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CronometroComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CronometroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
