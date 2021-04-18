export type NavProps = {
  isActive?: boolean;
  id: string | number;
  value: string;
  url: string;
  onClick?: () => void;
};