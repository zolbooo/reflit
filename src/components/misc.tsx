import { createElement, Fragment as ReactFragment } from 'react';
import type { ReactNode } from 'react';

import {
  reforwardJSX,
  FunctionalComponent,
  VoidFunctionalComponent,
} from './utils';

export const Link = reforwardJSX<JSX.IntrinsicElements['a']>('a');

export const Fragment = (...children: ReactNode[]) =>
  createElement(ReactFragment, {}, ...children);

export const FC: typeof FunctionalComponent & {
  void: typeof FunctionalComponent;
} = FunctionalComponent as any;
FC.void = VoidFunctionalComponent;
