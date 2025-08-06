import React from 'react';

import { BoxItemContent } from '@/shared/domain/valueObjects';
import { useThemeProvider } from '@/shared/presentation/contexts';
import { RenderItemContentConfig } from '@/shared/presentation/helpers';

import ContentFactory from '..';
import { Container } from './styles';

interface IBoxContentProps extends BoxItemContent {
  config: RenderItemContentConfig | undefined;
}

const BoxContent: React.FC<IBoxContentProps> = ({ description, config }) => {
  const { name } = useThemeProvider();

  return (
    <Container themeName={name}>
      <ContentFactory description={description} config={config} />
    </Container>
  );
};

export default BoxContent;
