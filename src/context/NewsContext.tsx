/* eslint-disable @typescript-eslint/no-empty-function */
import { createContext, useState } from 'react';
import { IBundleRoots } from 'utils/data/bundle-interface';

export interface NewsProviderProps {
  children: React.ReactNode;
}

type NewsContextType = {
  newsFull: IBundleRoots;
  setNewsFull: (newsState: IBundleRoots) => void;
};

const initialValue: NewsContextType = {
  newsFull: {} as IBundleRoots,
  setNewsFull: () => {}
};

export const NewsContext = createContext<NewsContextType>(initialValue);

export const NewsContentProvider = ({ children }: NewsProviderProps) => {
  const [newsFull, setNewsFull] = useState({} as IBundleRoots);

  return (
    <>
      <NewsContext.Provider value={{ newsFull, setNewsFull }}>{children}</NewsContext.Provider>;
    </>
  );
};
