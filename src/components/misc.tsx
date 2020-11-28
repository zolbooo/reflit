import { createElement, Fragment as ReactFragment } from 'react';
import type { ReactNode } from 'react';

import { reforwardJSX } from './utils';

export const Link = reforwardJSX<JSX.IntrinsicElements['a']>('a');

export const Fragment = (...children: ReactNode[]) =>
  createElement(ReactFragment, {}, ...children);

type FunctionalComponentFactory<P> = (
  props: P & JSX.IntrinsicAttributes & { children: ReactNode | ReactNode[] },
) => ReactNode | ReactNode[];
function FunctionalComponent<P>(factory: FunctionalComponentFactory<P>) {
  return (props?: P & JSX.IntrinsicAttributes, ...children: ReactNode[]) =>
    createElement(factory as any, props, children);
}
function VoidFunctionalComponent<P>(factory: FunctionalComponentFactory<P>) {
  return (props?: P & JSX.IntrinsicAttributes) => {
    if (props) {
      delete (props as any).children;
    }
    return createElement(factory as any, props);
  };
}

export const FC: typeof FunctionalComponent & {
  void: typeof FunctionalComponent;
} = FunctionalComponent as any;
FC.void = VoidFunctionalComponent;
