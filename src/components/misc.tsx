import { reforwardJSX } from './utils';

export const Link = reforwardJSX<Omit<JSX.IntrinsicElements['a'], 'children'>>(
  'a',
);
