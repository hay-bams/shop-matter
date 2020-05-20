import EnsureUserDoesNotExists from "./EnsureUserDoesNotExists";
import EnsureCustomerDoesNotExists from "./EnsureCustomerDoesNotExists";
import EnsureCustomerExists from "./EnsureCustomerExists";
import EnsurePasswordIsValid from "./EnsurePasswordIsValid";


export default () => ({
  ensureUserDoesNotExists: new EnsureUserDoesNotExists().handle,
  ensureCustomerDoesNotExists: new EnsureCustomerDoesNotExists().handle,
  ensureCustomerExists: new EnsureCustomerExists().handle,
  ensurePasswordIsValid: new EnsurePasswordIsValid().handle
});
