import { createElement, Fragment as ReactFragment } from 'react';
import type { ReactNode } from 'react';

import { reforwardJSX } from './utils';

export const Link = reforwardJSX<Omit<JSX.IntrinsicElements['a'], 'children'>>(
  'a',
);

export const Fragment = (...children: ReactNode[]) =>
  createElement(ReactFragment, {}, ...children);

export function FC<P>(factory: any) {
  return (props?: P, ...children: ReactNode[]) =>
    createElement(factory, props, children);
}
