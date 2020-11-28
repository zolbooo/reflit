import { reforwardJSX } from './utils';

export const Paragraph = reforwardJSX<JSX.IntrinsicElements['p']>('p');
export const Text = reforwardJSX<JSX.IntrinsicElements['span']>('span');
export const Label = reforwardJSX<JSX.IntrinsicElements['label']>('label');
export const LineBreak = reforwardJSX<JSX.IntrinsicElements['br']>('br');
