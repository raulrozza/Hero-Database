import React from 'react';

import * as S from './styles';

interface IRowProps {
  items: Array<{
    key: string;
    content: React.ReactChild;
  }>;
}

const Row: React.FC<IRowProps> = ({ items }) => (
  <S.Row>
    {items.map(item => (
      <td key={item.key}>{item.content}</td>
    ))}
  </S.Row>
);

interface ITableProps {
  labels: Array<{
    title: string;
    span?: number;
  }>;
}

interface ITable extends React.FC<ITableProps> {
  Row: React.FC<IRowProps>;
}

const Table: ITable = (({ labels, children }) => {
  const spans = labels.map(({ span = 1 }) => span);

  return (
    <S.Table spans={spans}>
      <thead>
        <tr>
          {labels.map(label => (
            <S.TableHead key={label.title}>{label.title}</S.TableHead>
          ))}
        </tr>
      </thead>

      <tbody>{children}</tbody>
    </S.Table>
  );
}) as ITable;

Table.Row = Row;
Table.Row.displayName = 'Table.Row';

export default Table;
