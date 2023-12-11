import React from 'react';

import { TextItemContent } from '@/shared/domain/valueObjects';
import {
  RenderItemContentConfig,
  renderItemContent,
} from '@/shared/presentation/helpers';

interface ITextContentProps {
  description: TextItemContent;
  config: RenderItemContentConfig | undefined;
}

const TextContent: React.FC<ITextContentProps> = ({ description, config }) => (
  <p>{renderItemContent(description, config)}</p>
);

export default TextContent;
