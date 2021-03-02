import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GymPagePage } from './gym-page.page';

describe('GymPagePage', () => {
  let component: GymPagePage;
  let fixture: ComponentFixture<GymPagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GymPagePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GymPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
