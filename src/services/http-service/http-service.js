// import {
//   Observable
// } from "rxjs";
// import {
//   UtilsProvider
// } from "../utils/utils";
// import {
//   SERVER_URL,
//   SERVER_URL_SHOP
// } from "../constants/constants";
// import axios from "axios";

// export class HttpService {
//   post(url, paramMap = null) {
//     let headers = new Headers({
//       "token": localStorage.getItem("token") ? localStorage.getItem("token") : ""
//     })
//     return axios.post(SERVER_URL + url, HttpService.buildURLSearchParams(paramMap).toString()).map(data => {
//       return data
//     });
//   }

//   buildURLSearchParams(paramMap) {
//     let params = new URLSearchParams();
//     for (let key in paramMap) {
//       let val = paramMap[key];
//       if (val instanceof Date) {
//         val = UtilsProvider.dateFormat(val, 'yyyy-MM-dd hh:mm:ss')
//       }
//       params.set(key, val);
//     }
//     return params;
//   }


// }
