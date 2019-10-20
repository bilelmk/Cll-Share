import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddchannelPage } from './addchannel.page';

describe('AddchannelPage', () => {
  let component: AddchannelPage;
  let fixture: ComponentFixture<AddchannelPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddchannelPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddchannelPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
