import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestWidgetsComponent } from './test-widgets.component';

describe('TestWidgetsComponent', () => {
  let component: TestWidgetsComponent;
  let fixture: ComponentFixture<TestWidgetsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestWidgetsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestWidgetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
