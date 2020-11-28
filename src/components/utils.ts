import { forwardRef, createElement } from 'react';
import type { ReactNode } from 'react';

export function reforwardJSX<P>(element: string) {
  if (process.env.NODE_ENV === 'development') {
    // Create element factor callback for React DevTools
    const fn = (
      { children = [], ...props }: P & { children: ReactNode[] },
      ref: any,
    ) => createElement(element, { ...(props ?? {}), ref }, ...children);
    // Set function name for DevTools
    Object.defineProperty(fn, 'name', {
      value: element,
      writable: false,
    });

    return (props?: P, ...children: ReactNode[]) =>
      createElement(forwardRef(fn) as any, { ...props, children });
  }
  return (props?: P, ...children: ReactNode[]) =>
    createElement(element, props ?? {}, ...children);
}
