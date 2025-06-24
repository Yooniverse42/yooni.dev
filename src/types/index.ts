// ABOUT
export interface AboutCardData {
  src: string;
  alt: string;
  title: string;
  desc: string[];
  changeIcon: boolean;
}

export type AboutCardKey = 'handshake' | 'bullseye' | 'seedling' | 'face';
export type AboutCardList = Record<AboutCardKey, AboutCardData>;

// RESUME
export interface ExperienceCardProps {
  title: string;
  subTitle: string;
  date: string;
  desc?: string[];
  edu?: boolean;
}
