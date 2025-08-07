import React from 'react';

import { FiChevronDown, FiChevronUp } from 'react-icons/fi';

import { cn } from '@/presentation/helpers/cn';

interface IRowProps {
  items: Array<{
    key: string;
    content: React.ReactNode;
    span?: number;
  }>;
  onClick?: () => void;
  highlighted?: boolean;
}

const Row: React.FC<IRowProps> = ({ items, highlighted = false, onClick }) => (
  <tr
    onClick={onClick}
    className={cn(
      `text-left  bg-neutral-50`,
      'font-normal text-base transition-all',
      onClick ? 'cursor-pointer hover:bg-neutral-100' : '',
    )}
  >
    {items.map(({ span = 1, ...item }) => (
      <td
        key={item.key}
        className={cn(
          'border-1 border-neutral-300 text-center p-1 py-2 h-full nth-[1]:font-bold nth-[1]:text-left',
          highlighted ? 'nth-[1]:text-primary-300' : undefined,
        )}
        colSpan={span}
      >
        {item.content}
      </td>
    ))}
  </tr>
);

interface ISectionProps {
  title: string;
  span: number;
}

const Section: React.FC<ISectionProps> = ({ title, span }) => (
  <tr className="border-1 border-neutral-300 p-1 py-2 text-neutral-600">
    <th className="p-1 py-2" colSpan={span}>
      {title}
    </th>
  </tr>
);

interface ITableProps {
  labels: Array<{
    title: string;
    span?: number;
    sortingKey?: string;
    active?: boolean;
    sorting?: 'asc' | 'desc';
    onClick?: () => void;
  }>;
  className?: string;
  children: React.ReactNode;
}

interface ITable extends React.FC<ITableProps> {
  Row: React.FC<IRowProps>;
  Section: React.FC<ISectionProps>;
}

const Table: ITable = (({ labels, className, children }) => (
  <table className={className}>
    <thead>
      <tr>
        {labels.map(label => {
          const Icon =
            label.active && label.sorting === 'desc'
              ? FiChevronUp
              : FiChevronDown;

          const span = label.span || 1;

          return (
            <th key={label.title} colSpan={span}>
              <button
                type="button"
                onClick={label.onClick}
                className={cn(
                  'flex w-full items-center justify-center p-1 py-2 text-base text-text-light font-normal text-center border-1 border-neutral-300',
                  label.active ? 'bg-neutral-200' : 'bg-neutral-100',
                  label.onClick ? 'cursor-pointer' : '',
                )}
              >
                {label.title}

                {!!label.sortingKey && <Icon aria-hidden />}
              </button>
            </th>
          );
        })}
      </tr>
    </thead>

    <tbody className="overflow-y-auto">{children}</tbody>
  </table>
)) as ITable;

Table.Row = Row;
Table.Row.displayName = 'Table.Row';
Table.Section = Section;
Table.Section.displayName = 'Table.Section';

export default Table;
