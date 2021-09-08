import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubpostsComponent } from './subposts.component';

describe('SubpostsComponent', () => {
  let component: SubpostsComponent;
  let fixture: ComponentFixture<SubpostsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubpostsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubpostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
