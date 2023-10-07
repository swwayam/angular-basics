import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductStandaloneComponent } from './product-standalone.component';

describe('ProductStandaloneComponent', () => {
  let component: ProductStandaloneComponent;
  let fixture: ComponentFixture<ProductStandaloneComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ProductStandaloneComponent]
    });
    fixture = TestBed.createComponent(ProductStandaloneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
