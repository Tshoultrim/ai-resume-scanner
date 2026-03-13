// src/utils/imagePath.js
export const getImagePath = (imageName) => {
  // For GitHub Pages with HashRouter
  if (import.meta.env.PROD) {
    return `/drukoptix-ai/${imageName}`;
  }
  
  // For local development
  const base = import.meta.env.BASE_URL || '/';
  const cleanBase = base.endsWith('/') ? base : `${base}/`;
  return `${cleanBase}${imageName}`;
};