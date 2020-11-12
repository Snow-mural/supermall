import {request} from "./request";

export function getHomeMultidata() {
  console.log(111);
  return request({
    url: '/home/multidata'
  })
}