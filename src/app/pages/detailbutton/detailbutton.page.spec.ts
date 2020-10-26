import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DetailbuttonPage } from './detailbutton.page';

describe('DetailbuttonPage', () => {
  let component: DetailbuttonPage;
  let fixture: ComponentFixture<DetailbuttonPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailbuttonPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DetailbuttonPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
