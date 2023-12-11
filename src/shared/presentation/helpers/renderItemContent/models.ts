import { ReactNode } from 'react';

export type TextElement =
  | {
      type: 'text';
      text: string;
    }
  | {
      type: 'reference';
      reference: string;
    }
  | {
      type: 'html';
      element: string;
      children: ReactNode[];
    };

export type ExtractStrategy = {
  extract(text: string): TextElement[];
};
