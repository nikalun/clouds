export type TabProps = {
  isActive?: boolean;
  id: string | number;
  value: string;
  url?: string;
  className?: string;
  onClick?: (value: string | number) => void;
};