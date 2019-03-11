import { mockAuthenticationService } from './__mocks__/authenticatorInteractor';
import {
  AuthenticationInteractor,
  INVALID_EMAIL_ERROR,
  invalidEmailError,
} from './authenticatorInteractor';

const password = 'password';
const email = 'some@email.me';
const invalidEmail = 'invalid';

describe('Authenticator Interactor', async function() {
  const interactor = new AuthenticationInteractor(mockAuthenticationService);

  it('validates the email before calling the service', async function() {
    await expect(interactor.forgotPassword(invalidEmail)).rejects.toThrow(
      INVALID_EMAIL_ERROR,
    );

    await expect(interactor.signIn(invalidEmail, password)).rejects.toThrow(
      INVALID_EMAIL_ERROR,
    );

    await expect(interactor.signUp(invalidEmail, password)).rejects.toThrow(
      INVALID_EMAIL_ERROR,
    );
  });

  it('proxies method call to the service', async function() {
    await interactor.signIn(email, password);
    expect(interactor.service.signIn).toHaveBeenCalledWith(email, password);

    await interactor.signUp(email, password);
    expect(interactor.service.signUp).toHaveBeenCalledWith(email, password);

    await interactor.forgotPassword(email);
    expect(interactor.service.resetPassword).toHaveBeenCalledWith(email);

    await interactor.signOut();
    expect(interactor.service.signOut).toHaveBeenCalled();
  });
});
