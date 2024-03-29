// Globally accessible functions for generating URLs for Contentful API

const baseURL = "https://cdn.contentful.com";

// For a single entry based on its Contentful ID
export function SingleEntryURL(entryID) {
  return `${baseURL}/spaces/${process.env.NEXT_PUBLIC_SPACE_ID}/environments/master/entries/${entryID}?access_token=${process.env.NEXT_PUBLIC_DELIVERY_ACCESS_TOKEN}`;
}

// For all entries in the Contentful space
export function AllEntriesURL() {
  return `${baseURL}/spaces/${process.env.NEXT_PUBLIC_SPACE_ID}/environments/master/entries?access_token=${process.env.NEXT_PUBLIC_DELIVERY_ACCESS_TOKEN}`;
}

// For all entries of a specific content type
export function ContentTypeEntriesURL(productType) {
  return `${baseURL}/spaces/${process.env.NEXT_PUBLIC_SPACE_ID}/environments/master/entries?access_token=${process.env.NEXT_PUBLIC_DELIVERY_ACCESS_TOKEN}&content_type=${productType}`;
}

// For assets like images and pdfs
export function AssetURL(assetID) {
  return `${baseURL}/spaces/${process.env.NEXT_PUBLIC_SPACE_ID}/environments/master/assets/${assetID}?access_token=${process.env.NEXT_PUBLIC_DELIVERY_ACCESS_TOKEN}`;
}
