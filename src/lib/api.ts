import axios from 'axios'

export const api = axios.create({
  baseURL: import.meta.env.PUBLIC_NOCODB_API_URL,
  headers: {
    'xc-token': import.meta.env.PUBLIC_NOCODB_API_TOKEN,
  },
})

export const REACTION_URL = '/mulu9s8xlj5ajyo/records'
export const COMMENTS_URL = '/myyq78b1rlh0pma/records'
