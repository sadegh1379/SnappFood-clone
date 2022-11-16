import sanityClient from '@sanity/client';
import ImageUrlBuilder from '@sanity/image-url';
const client = sanityClient({
  projectId: 'd6esxtfy',
  dataset: 'production',
  apiVersion: '2021-03-25', // use current UTC date - see "specifying API version"!
  useCdn: true, // `false` if you want to ensure fresh data
})
// sanity cors add https://localhost:3000
const builder = ImageUrlBuilder(client);
export const urlFor = source => builder.image(source);
export default client;