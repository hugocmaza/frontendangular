import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FproductoComponent } from './fproducto.component';

describe('FproductoComponent', () => {
  let component: FproductoComponent;
  let fixture: ComponentFixture<FproductoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FproductoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FproductoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
