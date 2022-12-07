import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentsAlertComponent } from './components.alert.component';

describe('ComponentsAlertComponent', () => {
  let component: ComponentsAlertComponent;
  let fixture: ComponentFixture<ComponentsAlertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponentsAlertComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponentsAlertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
