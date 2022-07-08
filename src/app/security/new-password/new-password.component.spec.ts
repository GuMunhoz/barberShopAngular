import { NewPasswordComponent } from './new-password.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';


describe('NewPasswordComponent', () => {
  let component: NewPasswordComponent;
  let fixture: ComponentFixture<NewPasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewPasswordComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
