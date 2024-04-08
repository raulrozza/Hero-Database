import React from 'react';

import { HeadingItemContent } from '@/shared/domain/valueObjects';
import { RenderItemContentConfig } from '@/shared/presentation/helpers';

import { Container } from './styles';

interface IHeadingContentProps extends HeadingItemContent {
  config: RenderItemContentConfig | undefined;
}

const HeadingContent: React.FC<IHeadingContentProps> = ({ variant, text }) => (
  <Container>{React.createElement(variant, undefined, text)}</Container>
);

export default HeadingContent;
