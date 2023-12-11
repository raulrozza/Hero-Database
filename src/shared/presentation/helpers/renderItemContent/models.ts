export type TextElement =
  | {
      type: 'text';
      text: string;
    }
  | {
      type: 'reference';
      reference: string;
    };

export type ExtractStrategy = {
  extract(text: string): TextElement[] | null;
};
