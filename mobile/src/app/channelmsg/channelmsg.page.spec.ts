import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChannelmsgPage } from './channelmsg.page';

describe('ChannelmsgPage', () => {
  let component: ChannelmsgPage;
  let fixture: ComponentFixture<ChannelmsgPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChannelmsgPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChannelmsgPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
