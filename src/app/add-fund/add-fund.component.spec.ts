/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AddFundComponent } from './add-fund.component';

describe('AddFundComponent', () => {
  let component: AddFundComponent;
  let fixture: ComponentFixture<AddFundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddFundComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddFundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
