import { reforwardJSX } from './utils';

export const Form = reforwardJSX<JSX.IntrinsicElements['form']>('form');
export const Input = reforwardJSX<JSX.IntrinsicElements['input']>('input');
export const Button = reforwardJSX<JSX.IntrinsicElements['button']>('button');
