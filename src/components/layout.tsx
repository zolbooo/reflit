import { reforwardJSX } from './utils';

export const View = reforwardJSX<
  Omit<JSX.IntrinsicElements['div'], 'children'>
>('div');

export const List = reforwardJSX<Omit<JSX.IntrinsicElements['ul'], 'children'>>(
  'ul',
);
export const OrderedList = reforwardJSX<
  Omit<JSX.IntrinsicElements['ol'], 'children'>
>('ol');

export const Image = reforwardJSX<
  Omit<JSX.IntrinsicElements['img'], 'children'>
>('img');
