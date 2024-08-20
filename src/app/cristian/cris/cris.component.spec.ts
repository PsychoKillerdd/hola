import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrisComponent } from './cris.component';

describe('CrisComponent', () => {
  let component: CrisComponent;
  let fixture: ComponentFixture<CrisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CrisComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
