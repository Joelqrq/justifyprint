import React, { forwardRef, useImperativeHandle } from 'react';
import { useToggle } from '../hooks/useToggle';

export const withVisibility = (Component) =>
  forwardRef((props, ref) => {
    const [visibility, toggleVisibility] = useToggle();

    useImperativeHandle(ref, () => ({
      toggle: () => toggleVisibility(),
    }));

    return <Component {...props} visibility={visibility} />;
  });
