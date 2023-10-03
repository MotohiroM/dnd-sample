import { FC } from 'react';

export type DndContextType = {
  items: any;
  Element: FC<any>;
};

export type DndType = {
  id: number;
  children: React.ReactNode;
};
