import React from 'react';

import { FiChevronDown, FiChevronUp } from 'react-icons/fi';

import * as S from './styles';

interface IRowProps {
  items: Array<{
    key: string;
    content: React.ReactNode;
  }>;
  onClick?: () => void;
  highlighted?: boolean;
}

const Row: React.FC<IRowProps> = ({ items, highlighted = false, onClick }) => (
  <S.Row onClick={onClick} highlighted={highlighted}>
    {items.map(item => (
      <S.TableContent key={item.key}>{item.content}</S.TableContent>
    ))}
  </S.Row>
);

interface ISectionProps {
  title: string;
}

const Section: React.FC<ISectionProps> = ({ title }) => (
  <S.SectionContent>
    <th>{title}</th>
  </S.SectionContent>
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
  children: React.ReactNode;
}

interface ITable extends React.FC<ITableProps> {
  Row: React.FC<IRowProps>;
  Section: React.FC<ISectionProps>;
}

const Table: ITable = (({ labels, children }) => {
  const spans = labels.map(({ span = 1 }) => span);

  return (
    <S.Table spans={spans}>
      <thead>
        <tr>
          {labels.map(label => {
            const Icon =
              label.active && label.sorting === 'desc'
                ? FiChevronUp
                : FiChevronDown;

            return (
              <th key={label.title}>
                <S.TableHeadButton
                  type="button"
                  onClick={label.onClick}
                  active={label.active}
                >
                  {label.title}

                  {!!label.sortingKey && <Icon aria-hidden />}
                </S.TableHeadButton>
              </th>
            );
          })}
        </tr>
      </thead>

      <tbody>{children}</tbody>
    </S.Table>
  );
}) as ITable;

Table.Row = Row;
Table.Row.displayName = 'Table.Row';
Table.Section = Section;
Table.Section.displayName = 'Table.Section';

export default Table;
