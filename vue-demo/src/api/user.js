import { baseUrl } from './baseUrl.js'
export default function getUserInfo () {
    // console.log(baseUrl)
    return fetch(baseUrl + '/api/user')
}
