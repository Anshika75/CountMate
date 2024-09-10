import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TallyboxComponent } from './tallybox.component';

describe('TallyboxComponent', () => {
  let component: TallyboxComponent;
  let fixture: ComponentFixture<TallyboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TallyboxComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TallyboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
