import { FC, HTMLProps } from 'react';

import { cn } from '@/presentation/helpers/cn';

type PopoverContainerProps = HTMLProps<HTMLDivElement>;

interface IPopoverContainer extends FC<PopoverContainerProps> {
  Span: FC<HTMLProps<HTMLSpanElement>>;
}

const PopoverContainer = (({ className, ...props }: PopoverContainerProps) => (
  <div
    {...props}
    className={cn('w-full max-w-100 bg-neutral-50 overflow-hidden', className)}
  />
)) as IPopoverContainer;

function Span({ className, ...props }: HTMLProps<HTMLSpanElement>) {
  return (
    <span {...props} className={cn('p-8 px-12 text-primary-800', className)} />
  );
}

PopoverContainer.Span = Span;
PopoverContainer.Span.displayName = 'PopoverContainer.Span';

export default PopoverContainer;
