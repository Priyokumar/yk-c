import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MyBagComponent } from './my-bag.component';

describe('MyBagComponent', () => {
  let component: MyBagComponent;
  let fixture: ComponentFixture<MyBagComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyBagComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MyBagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
