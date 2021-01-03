import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Mainblog2Component } from './mainblog2.component';

describe('Mainblog2Component', () => {
  let component: Mainblog2Component;
  let fixture: ComponentFixture<Mainblog2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Mainblog2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Mainblog2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
