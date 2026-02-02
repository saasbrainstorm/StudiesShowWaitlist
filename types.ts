export interface ResearchCardData {
  id: string;
  category: string;
  headline: string;
  summary: string;
  imageUrl?: string;
  rotation: number;
}

export interface Position {
  top?: string;
  left?: string;
  right?: string;
  bottom?: string;
}