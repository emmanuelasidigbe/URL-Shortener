type UrlMapping = {
  shortCode: string;
  longUrl: string;
};

const urlMappings: Record<string, string> = {}; // { shortCode: longUrl }
const recentUrls: UrlMapping[] = []; // Last 5 shortened URLs

// Save a new URL mapping
export const saveUrl = (shortCode: string, longUrl: string): void => {
  urlMappings[shortCode] = longUrl;

  // Update recent URLs list
  recentUrls.unshift({ shortCode, longUrl });
  if (recentUrls.length > 5) recentUrls.pop();
};

// Find the original URL by short code
export const findUrl = (shortCode: string): string | undefined => {
  return urlMappings[shortCode];
};

// Get the recent shortened URLs
export const getRecentUrls = (): UrlMapping[] => {
  return recentUrls;
};
