import { Fragment as ReactFragment } from 'react';
import type { ReactNode } from 'react';

import { reforwardJSX } from './utils';

export const View = reforwardJSX<
  Omit<JSX.IntrinsicElements['div'], 'children'>
>('div');

export const Image = reforwardJSX<
  Omit<JSX.IntrinsicElements['img'], 'children'>
>('img');

export const Fragment = (...children: ReactNode[]) => (
  <ReactFragment>{children}</ReactFragment>
);
