import React from 'react';

import { BoxItemContent } from '@/shared/domain/valueObjects';
import { RenderItemContentConfig } from '@/shared/presentation/helpers';

import { Container } from './styles';
import ContentFactory from '..';

interface IBoxContentProps extends BoxItemContent {
  config: RenderItemContentConfig | undefined;
}

const BoxContent: React.FC<IBoxContentProps> = ({ description, config }) => (
  <Container>
    <ContentFactory description={description} config={config} />
  </Container>
);

export default BoxContent;
