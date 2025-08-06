import React, { forwardRef } from 'react';

interface INavButtonProps {
  children: string;
  active?: boolean;
}

const NavButton: React.ForwardRefRenderFunction<
  HTMLButtonElement,
  INavButtonProps
> = ({ active = false, children, ...props }, ref) => (
  <button ref={ref} data-active={active} {...props}>
    {children}
  </button>
);

export default forwardRef(NavButton);
