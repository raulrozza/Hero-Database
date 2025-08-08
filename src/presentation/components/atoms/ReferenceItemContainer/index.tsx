import React, { HTMLProps } from 'react';

import { cn } from '@/presentation/helpers/cn';

const ReferenceItemContainer: React.FC<HTMLProps<HTMLDivElement>> = ({
  className,
  ...props
}) => (
  <div
    className={cn('w-full md:w-114 max-h-100% no-scrollbar', className)}
    {...props}
  />
);

export default ReferenceItemContainer;
