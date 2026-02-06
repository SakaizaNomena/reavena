export type IcomponentLists = {
  title: string;
  icon: string;
  keyItem: string;
  activeKey?: string;
  onClick?: (key: string) => void;
};