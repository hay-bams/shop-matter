import EnsureUserDoesNotExists from "./EnsureUserDoesNotExists";
import EnsureCustomerDoesNotExists from "./EnsureCustomerDoesNotExists";

export default () => ({
  ensureUserDoesNotExists: new EnsureUserDoesNotExists().handle,
  ensureCustomerDoesNotExists: new EnsureCustomerDoesNotExists().handle
});
