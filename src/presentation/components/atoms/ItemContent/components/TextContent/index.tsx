import React from 'react';

import { TextItemContent } from '@/domain/valueObjects';
import type { RenderItemContentConfig } from '@/presentation/helpers/renderItemContent';
import renderItemContent from '@/presentation/helpers/renderItemContent';

interface ITextContentProps {
  description: TextItemContent;
  config: RenderItemContentConfig | undefined;
}

const TextContent: React.FC<ITextContentProps> = ({ description, config }) => (
  <p>{renderItemContent(description, config)}</p>
);

export default TextContent;
