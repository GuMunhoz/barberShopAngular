import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccessDaniedComponent } from './access-danied.component';

describe('AccessDaniedComponent', () => {
  let component: AccessDaniedComponent;
  let fixture: ComponentFixture<AccessDaniedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccessDaniedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccessDaniedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
