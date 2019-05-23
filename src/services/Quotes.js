import { get } from './RestClient';

export function getRandomQuote() {
  let url = 'http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1';
  let options = {
    method: 'get'
  };
  return get(url, options);
}