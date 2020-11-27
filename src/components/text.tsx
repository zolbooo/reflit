import { reforwardJSX } from './utils';

export const Paragraph = reforwardJSX<
  Omit<JSX.IntrinsicElements['p'], 'children'>
>('p');

export const Text = reforwardJSX<
  Omit<JSX.IntrinsicElements['span'], 'children'>
>('span');

export const Label = reforwardJSX<
  Omit<JSX.IntrinsicElements['label'], 'children'>
>('label');

export const LineBreak = reforwardJSX<
  Omit<JSX.IntrinsicElements['br'], 'children'>
>('br');
