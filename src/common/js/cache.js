import storage from 'good-storage'

const SEARCH_KEY = '__search__'
const SEARCH_MAX_LEN = 15

export function saveSearch(query) {
  let searches = storage.get(SEARCH_KEY, [])
  storage.set(SEARCH_KEY, searches)
  return searches
}
