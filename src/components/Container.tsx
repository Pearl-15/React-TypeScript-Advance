
import {type ElementType } from 'react';

type ContainerProps = {
    as: ElementType; // the identify of components that use in jsx eg: <button></button> (html without the {} it's the identifier)
}

export default function Container({as}: ContainerProps) {
    const Component = as;
  return (
    <Component />
  )
}
