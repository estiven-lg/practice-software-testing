import {TestBed} from '@angular/core/testing';
import {Subject} from 'rxjs';
import {LoginComponent} from './login.component';
import {CustomerAccountService} from '../../shared/customer-account.service';
import {TokenStorageService} from '../../_services/token-storage.service';
import {BrowserDetectorService} from '../../_services/browser-detector.service';



describe('LoginComponent', () => {
  let component: LoginComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [LoginComponent],
      providers: [
        {provide: CustomerAccountService, useValue: {authSub: new Subject(), getRole: () => ''}},
        {provide: TokenStorageService, useValue: {getToken: (): string | null => null}},
        {provide: BrowserDetectorService, useValue: {isFirefox: () => false}}
      ]
    }).overrideComponent(LoginComponent, {set: {template: ''}});

    const fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('creates', () => expect(component).toBeTruthy());

  it('initializes an empty login form', () => {
    expect(component.form.valid).toBeTrue();
    expect(component.form.value).toEqual({email: '', password: ''});
  });
});
