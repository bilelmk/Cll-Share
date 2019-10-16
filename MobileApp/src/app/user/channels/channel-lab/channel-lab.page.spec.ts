import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChannelLabPage } from './channel-lab.page';

describe('ChannelLabPage', () => {
  let component: ChannelLabPage;
  let fixture: ComponentFixture<ChannelLabPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChannelLabPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChannelLabPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
