import React from 'react';

import { SectionItemContent } from '@/shared/domain/valueObjects';
import { RenderItemContentConfig } from '@/shared/presentation/helpers';

import ContentFactory from '..';

interface ISectionContentProps extends SectionItemContent {
  config: RenderItemContentConfig | undefined;
}

const SectionContent: React.FC<ISectionContentProps> = ({
  title,
  description,
  config,
}) => (
  <>
    <h2>{title}</h2>

    <ContentFactory description={description} config={config} />
  </>
);

export default SectionContent;
