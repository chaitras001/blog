import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Mainblog1Component } from './mainblog1.component';

describe('Mainblog1Component', () => {
  let component: Mainblog1Component;
  let fixture: ComponentFixture<Mainblog1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Mainblog1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Mainblog1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
