import {TestBed} from '@angular/core/testing';
import {of, Subject} from 'rxjs';
import {CheckoutComponent} from './checkout.component';
import {CartService} from '../_services/cart.service';
import {CustomerAccountService} from '../shared/customer-account.service';
import {TokenStorageService} from '../_services/token-storage.service';
import {InvoiceService} from '../_services/invoice.service';
import {PaymentService} from '../_services/payment.service';



describe('CheckoutComponent', () => {
  let component: CheckoutComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [CheckoutComponent],
      providers: [
        {provide: CartService, useValue: {storageSub: new Subject(), getItems: (): any[] => []}},
        {provide: CustomerAccountService, useValue: {authSub: new Subject(), isLoggedIn: () => false, getDetails: () => of({address: '', city: '', state: '', country: ''})}},
        {provide: TokenStorageService, useValue: {}},
        {provide: InvoiceService, useValue: {}},
        {provide: PaymentService, useValue: {}}
      ]
    }).overrideComponent(CheckoutComponent, {set: {template: ''}});

    const fixture = TestBed.createComponent(CheckoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('creates', () => expect(component).toBeTruthy());

  it('requires an email and password before customer login', () => {
    expect(component.cusForm.invalid).toBeTrue();
    expect(component.cusForm.get('email').hasError('required')).toBeTrue();
  });
});
