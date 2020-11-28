import { createElement, Fragment as ReactFragment } from 'react';
import type { ReactNode } from 'react';

import { reforwardJSX } from './utils';

export const Link = reforwardJSX<Omit<JSX.IntrinsicElements['a'], 'children'>>(
  'a',
);

export const Fragment = (...children: ReactNode[]) =>
  createElement(ReactFragment, {}, ...children);

export function FC<P>(
  factory: (
    props: P & JSX.IntrinsicAttributes & { children: ReactNode | ReactNode[] },
  ) => ReactNode | ReactNode[],
) {
  return (props?: P & JSX.IntrinsicAttributes, ...children: ReactNode[]) =>
    createElement(factory as any, props, children);
}
