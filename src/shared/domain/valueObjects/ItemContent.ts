/* eslint-disable no-use-before-define */

export type TextItemContent = string;
export type SectionItemContent = {
  type: 'section';
  title: string;
  description: ItemContent[];
};
export type ListItemContent = {
  type: 'list';
  items: string[];
};
export type HeadingItemContent = {
  type: 'heading';
  variant: 'h1' | 'h2' | 'h3' | 'h4';
  text: string;
};

export type ItemContent =
  | TextItemContent
  | SectionItemContent
  | ListItemContent
  | HeadingItemContent;
