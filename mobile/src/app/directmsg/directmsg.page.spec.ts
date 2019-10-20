import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectmsgPage } from './directmsg.page';

describe('DirectmsgPage', () => {
  let component: DirectmsgPage;
  let fixture: ComponentFixture<DirectmsgPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DirectmsgPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DirectmsgPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
