import { reforwardJSX } from './utils';

export const Input = reforwardJSX<
  Omit<JSX.IntrinsicElements['input'], 'children'>
>('input');

export const Button = reforwardJSX<
  Omit<JSX.IntrinsicElements['button'], 'children'>
>('button');
