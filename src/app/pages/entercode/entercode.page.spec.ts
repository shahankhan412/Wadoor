import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EntercodePage } from './entercode.page';

describe('EntercodePage', () => {
  let component: EntercodePage;
  let fixture: ComponentFixture<EntercodePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EntercodePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EntercodePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
