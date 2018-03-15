/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { NumberGuesserComponent } from './number-guesser.component';

describe('NumberGuesserComponent', () => {
  let component: NumberGuesserComponent;
  let fixture: ComponentFixture<NumberGuesserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NumberGuesserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NumberGuesserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
