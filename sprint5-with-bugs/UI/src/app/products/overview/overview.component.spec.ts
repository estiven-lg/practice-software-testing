import {TestBed} from '@angular/core/testing';
import {of} from 'rxjs';
import {OverviewComponent} from './overview.component';
import {ProductService} from '../../_services/product.service';
import {BrandService} from '../../_services/brand.service';
import {CategoryService} from '../../_services/category.service';
import {BrowserDetectorService} from '../../_services/browser-detector.service';

describe('OverviewComponent (product search)', () => {
  let component: OverviewComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [OverviewComponent],
      providers: [
        {provide: ProductService, useValue: {getProductsNew: () => of({data: []})}},
        {provide: BrandService, useValue: {getBrands: () => of([])}},
        {provide: CategoryService, useValue: {getCategoriesTree: () => of([])}},
        {provide: BrowserDetectorService, useValue: {isFirefox: () => false}}
      ]
    }).overrideComponent(OverviewComponent, {set: {template: ''}});

    const fixture = TestBed.createComponent(OverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('creates', () => expect(component).toBeTruthy());

  it('rejects an empty product-search query', () => {
    expect(component.search.invalid).toBeTrue();
    expect(component.search.get('query').hasError('required')).toBeTrue();
  });
});
