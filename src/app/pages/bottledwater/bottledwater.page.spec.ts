import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BottledwaterPage } from './bottledwater.page';

describe('BottledwaterPage', () => {
  let component: BottledwaterPage;
  let fixture: ComponentFixture<BottledwaterPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BottledwaterPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BottledwaterPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
