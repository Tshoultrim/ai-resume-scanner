// src/utils/imagePath.js
export const getImagePath = (imageName) => {
  // Get the base URL from import.meta.env
  const base = import.meta.env.BASE_URL || '/';
  
  // Remove leading slash if present to avoid double slashes
  const cleanBase = base.endsWith('/') ? base : `${base}/`;
  
  // For production GitHub Pages
  if (import.meta.env.PROD) {
    return `/drukoptix-ai/${imageName}`; // Update this to your new repo name
  }
  
  return `${cleanBase}${imageName}`;
};