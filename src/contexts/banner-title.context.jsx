// Import React
import { createContext } from 'react';


const bannerTitle = 'Full Project List';

// Storage Container
export const BannerTitleContext = createContext();

export const BannerTitleProvider = ({ children }) => {
  const value = bannerTitle;
  return <BannerTitleContext.Provider value={value}>{children}</BannerTitleContext.Provider>
}