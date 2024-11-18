
import {ComponentPropsWithoutRef, type ElementType,type ReactNode } from 'react';

// make it generic, as this point of time don't know the exact "type" yet and it must extends "ElementType" 
type ContainerProps<T extends ElementType> = {
    as?: T;
    children: ReactNode;
} & ComponentPropsWithoutRef<T>;
// also make generic to use with default html tag props;

// make it as generic function also
export default function Container<C extends ElementType>({as, children, ...props}: ContainerProps<C>) {
    const Component = as || 'div'; // put 'div' if component name is error then wrap with div
  return (
    <Component {...props}>{children}</Component>
  )
}
