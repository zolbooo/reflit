import { reforwardJSX } from './utils';

export const View = reforwardJSX<JSX.IntrinsicElements['div']>('div');
export const List = reforwardJSX<Omit<JSX.IntrinsicElements['ul'], 'children'>>(
  'ul',
);
export const OrderedList = reforwardJSX<JSX.IntrinsicElements['ol']>('ol');
export const ListItem = reforwardJSX<JSX.IntrinsicElements['li']>('li');
export const Image = reforwardJSX<JSX.IntrinsicElements['img']>('img');
