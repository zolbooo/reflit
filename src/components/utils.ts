import { createElement } from 'react';
import type { ReactNode } from 'react';

export function reforwardJSX<P>(element: string) {
  return (props: P, ...children: ReactNode[]) =>
    createElement(element, props ?? {}, ...children);
}
