import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GymRegisterPage } from './gym-register.page';

describe('GymRegisterPage', () => {
  let component: GymRegisterPage;
  let fixture: ComponentFixture<GymRegisterPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GymRegisterPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GymRegisterPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
