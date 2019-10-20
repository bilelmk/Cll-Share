import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChannelslistPage } from './channelslist.page';

describe('ChannelslistPage', () => {
  let component: ChannelslistPage;
  let fixture: ComponentFixture<ChannelslistPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChannelslistPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChannelslistPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
