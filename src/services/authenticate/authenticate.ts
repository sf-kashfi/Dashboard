import { authenticate } from '../APIs';
import { post } from '../RequestProvider';
import type { LoginBody, RegisterBody } from '../model';

export const onLoginRequest = (body: LoginBody) => post(authenticate.login, body);
export const onLogoutRequest = (body: RegisterBody) => post(authenticate.register, body);