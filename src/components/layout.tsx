import { reforwardJSX } from './utils';

export const View = reforwardJSX<
  Omit<JSX.IntrinsicElements['div'], 'children'>
>('div');

export const Image = reforwardJSX<
  Omit<JSX.IntrinsicElements['img'], 'children'>
>('img');
