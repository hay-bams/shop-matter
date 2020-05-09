import EnsureUserDoesNotExists from "./ensureUserDoesNotExists";
import EnsureCustomerDoesNotExists from "./ensureCustomerDoesNotExists";

export default () => ({
  ensureUserDoesNotExists: new EnsureUserDoesNotExists().handle,
  ensureCustomerDoesNotExists: new EnsureCustomerDoesNotExists().handle
});
