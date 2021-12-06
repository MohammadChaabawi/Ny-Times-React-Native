import { getPosts } from "../../services/API"
import { Article } from "../../components/article/types"
/**
 * The function filters articles by a location, it takes an array of articles and returns an array of articles that match a location
 */
export const filterArticlesByLocation =(articles:Article[], location:string):Article[]=> {
    let filteredArticles = articles.filter(article=>{
        return article.geo_facet.includes(location)
    })
    return filteredArticles
}

/**
 * The function filters articles by a keyword, it takes an array of articles and returns an array of articles that match a keyword
 */
export const filterArticlesByKeyword =(articles:Article[], keyword:string):Article[]=> {
    let filteredArticles = articles.filter(article=>{
        return article.des_facet.includes(keyword)
    })
    return filteredArticles
}

/**
 * The function gets the locations of the articles for a specific section
 */
export const getLocations = async (category:string):Promise<string[]> => {
    let articles = []
    let locations = []
    articles = await getPosts(category)
    locations = articles.map(article => {return article.geo_facet})
    locations = [].concat.apply([], locations);
    locations = locations.filter((value, index, self) => {
        return self.indexOf(value) === index;
    })
    console.log(locations)
    return locations
}

/**
 * The function gets the keywords of the articles for a specific section
 */
export const getKeywords = async (category:string):Promise<string[]>=> {
    let articles = []
    let keywords = []
    articles = await getPosts(category)
    keywords = articles.map(article => {return article.des_facet})
    keywords = [].concat.apply([], keywords);
    keywords = keywords.filter((value, index, self) => {
        return self.indexOf(value) === index;
    })
    return keywords
}