import { DEFAULT_ASSERTION_MESSAGE } from './asserts.constants';

export function assert<T>(value: T, message: string = DEFAULT_ASSERTION_MESSAGE): asserts value {
  if (!value) throw new Error(message);
}
