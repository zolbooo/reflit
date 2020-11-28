import { reforwardJSX } from './utils';

export const Form = reforwardJSX<
  Omit<JSX.IntrinsicElements['form'], 'children'>
>('form');

export const Input = reforwardJSX<
  Omit<JSX.IntrinsicElements['input'], 'children'>
>('input');

export const Button = reforwardJSX<
  Omit<JSX.IntrinsicElements['button'], 'children'>
>('button');
