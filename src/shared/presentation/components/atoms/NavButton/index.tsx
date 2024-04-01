import React, { forwardRef } from 'react';

import { Trigger } from './styles';

interface INavButtonProps {
  children: string;
  active?: boolean;
}

const NavButton: React.ForwardRefRenderFunction<
  HTMLButtonElement,
  INavButtonProps
> = ({ active = false, children, ...props }, ref) => (
  <Trigger ref={ref} active={active} {...props}>
    {children}
  </Trigger>
);

export default forwardRef(NavButton);
