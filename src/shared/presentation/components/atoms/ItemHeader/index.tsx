import React from 'react';

interface IItemHeaderProps {
  title: string;
  subtitle?: string;
}

const ItemHeader: React.FC<IItemHeaderProps> = ({ title, subtitle }) => (
  <header className="text-white flex justify-between items-end p-4 bg-primary-500">
    <h1>{title}</h1>

    {subtitle && <h2>{subtitle}</h2>}
  </header>
);

export default ItemHeader;
