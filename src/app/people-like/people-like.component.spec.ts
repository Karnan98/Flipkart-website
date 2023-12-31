import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeopleLikeComponent } from './people-like.component';

describe('PeopleLikeComponent', () => {
  let component: PeopleLikeComponent;
  let fixture: ComponentFixture<PeopleLikeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PeopleLikeComponent]
    });
    fixture = TestBed.createComponent(PeopleLikeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
