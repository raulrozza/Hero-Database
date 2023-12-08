import React from 'react';

import { renderItemDescription } from '@/shared/presentation/helpers';

interface ITextContentProps {
  description: string;
  config: Parameters<typeof renderItemDescription>[1];
}

const TextContent: React.FC<ITextContentProps> = ({ description, config }) => (
  <p>{renderItemDescription(description, config)}</p>
);

export default TextContent;
