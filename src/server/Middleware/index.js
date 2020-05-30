import EnsureUserDoesNotExists from './EnsureUserDoesNotExists';
import EnsureCustomerDoesNotExists from './EnsureCustomerDoesNotExists';
import EnsureCustomerExists from './EnsureCustomerExists';
import EnsurePasswordIsValid from './EnsurePasswordIsValid';
import EnsureProductDoesNotExists from './EnsureProductDoesNotExists'
import EnsureProductRemains from './EnsureProductRemains'


export default () => ({
  ensureUserDoesNotExists: new EnsureUserDoesNotExists().handle,
  ensureCustomerDoesNotExists: new EnsureCustomerDoesNotExists().handle,
  ensureCustomerExists: new EnsureCustomerExists().handle,
  ensurePasswordIsValid: new EnsurePasswordIsValid().handle,
  ensureProductDoesNotExists: new EnsureProductDoesNotExists().handle,
  ensureProductRemains: new EnsureProductRemains().handle
});
