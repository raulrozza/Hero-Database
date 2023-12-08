import React from 'react';

import { ItemContent } from '@/shared/domain/valueObjects';
import { RenderItemDescriptionConfig } from '@/shared/presentation/helpers';

import ContentFactory from '..';

interface ISectionContentProps {
  title: string;
  description: ItemContent[];
  config: RenderItemDescriptionConfig | undefined;
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
