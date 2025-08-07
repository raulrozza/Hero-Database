import React from 'react';

interface IItemFooterProps {
  source: string;
}

const ItemFooter: React.FC<IItemFooterProps> = ({ source }) => (
  <footer className="p-4 flex justify-end text-xs">
    <strong>{'Source: '}</strong>
    {source}
  </footer>
);

export default ItemFooter;
