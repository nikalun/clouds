export type TabProps = {
  id: number;
  value: string;
  url?: string;
  className?: string;
  onClick?: (value: number) => void;
};