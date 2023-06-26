import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DbSectionComponent } from './db-section.component';

describe('DbSectionComponent', () => {
  let component: DbSectionComponent;
  let fixture: ComponentFixture<DbSectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DbSectionComponent]
    });
    fixture = TestBed.createComponent(DbSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
