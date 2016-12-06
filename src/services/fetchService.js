require('fetch-polyfill')
import moment from 'moment'

const defPlayingQuery = {
  category: 'now-playing',
  page: 1,
  count: 5
}
// cache the result of some function
/*eslint-disable */
export const cache = (func) => {
  let ret = Object.create(null)
  return (str) => {
    return ret[str] || (ret[str] = func(str))
  }
}

export const fetchUrl = (url) => {
  return new Promise((resolve) => {
    fetch(url, {credentials: 'include'})
      .then(resp => resp.json())
      .then(data => {
        resolve(data.data)
      })
      .catch(e => resolve(null))
  })
}

export const fetchPlayingList = (query) => {
  let timestamp = moment().valueOf()
  query = Object.assign({}, defPlayingQuery, query || {})
  return fetchUrl(`/api/film/${query.category}?__t=${timestamp}&page=${query.page}&count=${query.count}`)
}

export const fetchHome = () => {
  let timestamp = moment().valueOf()
  return fetchUrl(`/api/billboard/home?__t=${timestamp}`)
}

export const fetchDetail = cache((id) => {
  let timestamp = moment().valueOf()
  return fetchUrl(`/api/film/${id}?__t=${timestamp}`)
})

export const fetchCinemas = () => {
  let timestamp = moment().valueOf()
  return fetchUrl(`/api/cinema?__t=${timestamp}`)
}

export const fetchCinema = cache((id) => {
  let timestamp = moment().valueOf()
  return fetchUrl(`/api/cinema/${id}?__t=${timestamp}`)
})

export const loadImage = (url) => {
  return new Promise((resolve, reject) => {
    if (!url) {
      reject(`loadImage(url) do not accept null or undefined`)
    }

    let img = new Image()
    img.src = url
    img.onload = () => {
      document.body.removeChild(img)
      resolve(url)
    }
    img.onerror = (e) => {
      document.body.removeChild(img)
      reject(e)
    }
    document.body.appendChild(img)
  })
}

