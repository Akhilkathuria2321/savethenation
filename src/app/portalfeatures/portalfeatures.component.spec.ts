import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PortalfeaturesComponent } from './portalfeatures.component';

describe('PortalfeaturesComponent', () => {
  let component: PortalfeaturesComponent;
  let fixture: ComponentFixture<PortalfeaturesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PortalfeaturesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PortalfeaturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
