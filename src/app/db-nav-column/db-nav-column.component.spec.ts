import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DBNavColumnComponent } from './db-nav-column.component';

describe('DBNavColumnComponent', () => {
  let component: DBNavColumnComponent;
  let fixture: ComponentFixture<DBNavColumnComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DBNavColumnComponent]
    });
    fixture = TestBed.createComponent(DBNavColumnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
