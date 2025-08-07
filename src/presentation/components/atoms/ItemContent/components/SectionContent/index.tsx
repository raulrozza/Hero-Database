import React from 'react';

import { SectionItemContent } from '@/domain/valueObjects';
import type { RenderItemContentConfig } from '@/presentation/helpers/renderItemContent';

import ContentFactory from '..';
import { h2Classes } from '../../constants/classes';

interface ISectionContentProps extends SectionItemContent {
  config: RenderItemContentConfig | undefined;
}

const SectionContent: React.FC<ISectionContentProps> = ({
  title,
  description,
  config,
}) => (
  <>
    <h2 className={h2Classes}>{title}</h2>

    <ContentFactory description={description} config={config} />
  </>
);

export default SectionContent;
