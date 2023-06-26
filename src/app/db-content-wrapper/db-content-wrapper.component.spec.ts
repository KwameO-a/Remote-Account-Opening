import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DbContentWrapperComponent } from './db-content-wrapper.component';

describe('DbContentWrapperComponent', () => {
  let component: DbContentWrapperComponent;
  let fixture: ComponentFixture<DbContentWrapperComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DbContentWrapperComponent]
    });
    fixture = TestBed.createComponent(DbContentWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
