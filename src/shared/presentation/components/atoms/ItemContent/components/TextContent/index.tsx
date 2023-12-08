import React from 'react';

import { TextItemContent } from '@/shared/domain/valueObjects';
import {
  RenderItemDescriptionConfig,
  renderItemDescription,
} from '@/shared/presentation/helpers';

interface ITextContentProps {
  description: TextItemContent;
  config: RenderItemDescriptionConfig | undefined;
}

const TextContent: React.FC<ITextContentProps> = ({ description, config }) => (
  <p>{renderItemDescription(description, config)}</p>
);

export default TextContent;
