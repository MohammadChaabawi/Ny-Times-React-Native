import {
  filterArticlesByLocation,
  filterArticlesByKeyword,
} from'../src/containers/home/helpers';
import { Article } from '../src/components/article/types';
const input:Article[] = require('./articlesSampleData.json');
const outputExpected:Article[] = [
  {
    section: 'opinion',
    subsection: '',
    title: 'Bosnia Is On the Brink of Breaking Up',
    abstract:
      'This is what happened when the West looked away from my country.',
    url: 'https://www.nytimes.com/2021/11/17/opinion/bosnia-dodik-dayton-accords.html',
    uri: 'nyt://article/d4c235ed-f117-577a-83f7-4068db1403b5',
    byline: 'By Srecko Latal',
    item_type: 'Article',
    updated_date: '2021-11-18T00:30:38-05:00',
    created_date: '2021-11-17T01:00:05-05:00',
    published_date: '2021-11-17T01:00:05-05:00',
    material_type_facet: '',
    kicker: 'Guest Essay',
    des_facet: ['Nationalism (Theory and Philosophy)'],
    org_facet: ['European Union'],
    per_facet: ['Dodik, Milorad'],
    geo_facet: [
      'Bosnia and Herzegovina',
      'Yugoslavia',
      'Balkan States',
      'Russia',
      'United States',
    ],
    multimedia: [
      {
        url: 'https://static01.nyt.com/images/2021/11/17/opinion/17latal/17latal-superJumbo.jpg',
        format: 'superJumbo',
        height: 1266,
        width: 2048,
        type: 'image',
        subtype: 'photo',
        caption: 'Milorad Dodik',
        copyright: 'Dado Ruvic/Reuters',
      },
    ],
    short_url: 'https://nyti.ms/30CjEvo',
  },
];


/**
 * The Test suite for testing the filter functions for filtering articles by a location or keyword
 */
describe('Filter functions', () => {
  test('it should filter by a search term (location)', () => {
    expect(filterArticlesByLocation(input, 'Russia')).toEqual(outputExpected);
  });

  test('it should filter by a search term (Keyword)', () => {
    expect(filterArticlesByKeyword(input, 'Nationalism (Theory and Philosophy)')).toEqual(outputExpected);
  });
});
