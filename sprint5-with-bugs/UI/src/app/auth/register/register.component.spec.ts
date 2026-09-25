import {TestBed} from '@angular/core/testing';
import {Subject} from 'rxjs';
import {RegisterComponent} from './register.component';
import {CustomerAccountService} from '../../shared/customer-account.service';
import {BrowserDetectorService} from '../../_services/browser-detector.service';

describe('RegisterComponent', () => {
  let component: RegisterComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RegisterComponent],
      providers: [
        {provide: CustomerAccountService, useValue: {authSub: new Subject()}},
        {provide: BrowserDetectorService, useValue: {isFirefox: () => false}}
      ]
    }).overrideComponent(RegisterComponent, {set: {template: ''}});

    const fixture = TestBed.createComponent(RegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('creates', () => expect(component).toBeTruthy());

  it('is invalid when required fields are empty', () => {
    expect(component.register.invalid).toBeTrue();
    expect(component.register.get('email').hasError('required')).toBeTrue();
  });
});
