/* eslint-disable no-use-before-define */

export type TextItemContent = string;
export type SectionItemContent = {
  type: 'section';
  title: string;
  description: ItemContent[];
};

export type ItemContent = TextItemContent | SectionItemContent;
