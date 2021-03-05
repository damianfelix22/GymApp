import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { InstructoresPage } from './instructores.page';

describe('InstructoresPage', () => {
  let component: InstructoresPage;
  let fixture: ComponentFixture<InstructoresPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InstructoresPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(InstructoresPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
