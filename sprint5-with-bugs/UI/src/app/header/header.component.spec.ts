import {TestBed} from '@angular/core/testing';
import {of, Subject} from 'rxjs';
import {HeaderComponent} from './header.component';
import {CartService} from '../_services/cart.service';
import {CustomerAccountService} from '../shared/customer-account.service';

getItems: (): any[] => []

describe('HeaderComponent (cart)', () => {
  let component: HeaderComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HeaderComponent],
      providers: [
        {provide: CartService, useValue: {storageSub: new Subject(), getItems: (): any[] => []}},
        {provide: CustomerAccountService, useValue: {authSub: new Subject(), getRole: () => '', getDetails: () => of({first_name: '', last_name: ''})}}
      ]
    }).overrideComponent(HeaderComponent, {set: {template: ''}});

    const fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('creates', () => expect(component).toBeTruthy());

  it('counts quantities in the cart', () => {
    (component as any).cartService.getItems = () => [{quantity: 2, is_rental: 0}, {quantity: 3, is_rental: 1}];
    expect(component.getCartItems()).toBe(3);
  });
});
