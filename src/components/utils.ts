import { forwardRef, createElement } from 'react';
import type { ReactNode } from 'react';

export function reforwardJSX<Props, P = Omit<Props, 'children'>>(
  element: string,
) {
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

type FunctionalComponentFactory<P> = (
  props: P & JSX.IntrinsicAttributes & { children: ReactNode | ReactNode[] },
) => ReactNode | ReactNode[];
export function FunctionalComponent<P>(factory: FunctionalComponentFactory<P>) {
  return (props?: P & JSX.IntrinsicAttributes, ...children: ReactNode[]) =>
    createElement(factory as any, props, children);
}
export function VoidFunctionalComponent<P>(
  factory: FunctionalComponentFactory<P>,
) {
  return (props?: P & JSX.IntrinsicAttributes) => {
    if (props) {
      delete (props as any).children;
    }
    return createElement(factory as any, props);
  };
}
