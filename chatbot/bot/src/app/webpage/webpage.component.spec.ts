import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebPageComponent } from './webpage.component';

describe('WebPageComponent', () => {
  let component: WebPageComponent;
  let fixture: ComponentFixture<WebPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WebPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WebPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
