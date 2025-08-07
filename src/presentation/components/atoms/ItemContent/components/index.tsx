import React from 'react';

import { ItemContent } from '@/domain/valueObjects';
import { RenderItemContentConfig } from '@/shared/presentation/helpers';

import BoxContent from './BoxContent';
import HeadingContent from './HeadingContent';
import ListContent from './ListContent';
import SectionContent from './SectionContent';
import TextContent from './TextContent';

const CONTENTS = {
  section: SectionContent,
  list: ListContent,
  heading: HeadingContent,
  box: BoxContent,
};

interface IContentFactoryProps {
  description: ItemContent[];
  config?: RenderItemContentConfig;
}

const ContentFactory: React.FC<IContentFactoryProps> = ({
  description,
  config,
}) => {
  return (
    <>
      {description.map((content, index) => {
        if (typeof content === 'string')
          return (
            <TextContent key={index} description={content} config={config} />
          );

        const Component = CONTENTS[content.type];

        return <Component key={index} config={config} {...(content as any)} />;
      })}
    </>
  );
};

export default ContentFactory;
