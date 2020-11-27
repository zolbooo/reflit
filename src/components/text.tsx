import { reforwardJSX } from './utils';

export const Text = reforwardJSX<
  Omit<JSX.IntrinsicElements['span'], 'children'>
>('span');

export const Label = reforwardJSX<
  Omit<JSX.IntrinsicElements['label'], 'children'>
>('label');
