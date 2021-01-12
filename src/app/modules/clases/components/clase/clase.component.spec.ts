import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ClaseComponent } from './clase.component';

describe('ClaseComponent', () => {
  let component: ClaseComponent;
  let fixture: ComponentFixture<ClaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClaseComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ClaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
