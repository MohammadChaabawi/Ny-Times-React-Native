import axios from "axios"
import { API_URL } from "../config"
import { Article } from "../components/article/types"

/**
 * The api method for that returns a set articles as a promise based on the article section type
 */
export const getPosts = async (chosenCategory:string):Promise<Article[]> => {
  const response = await axios.get(API_URL + chosenCategory + ".json", {
    params: {
      "api-key": "OJ7tDJlZa8KfeTOynjvuB3Cul5EIzWZV"
    },
  })

  if(response.status >= 200 && response.status < 300) {
    return response.data.results
  }
}
