import { reforwardJSX } from './utils';

export const View = reforwardJSX<
  Omit<JSX.IntrinsicElements['div'], 'children'>
>('div');
