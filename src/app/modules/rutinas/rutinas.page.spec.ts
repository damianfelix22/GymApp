import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RutinasPage } from './rutinas.page';

describe('RutinasPage', () => {
  let component: RutinasPage;
  let fixture: ComponentFixture<RutinasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RutinasPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RutinasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
