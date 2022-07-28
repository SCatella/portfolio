// Import React
import { createContext } from 'react';


// Banner Title state
const bannerTitle = 'Full Project List';

// Storage Container
export const BannerTitleContext = createContext();

// Storage Accessor
export const BannerTitleProvider = ({ children }) => {
  const value = bannerTitle;
  
  return <BannerTitleContext.Provider value={value}>{children}</BannerTitleContext.Provider>
}