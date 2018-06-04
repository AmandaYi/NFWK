import {
  SERVICE_URL,
  SERVICE_USER_URL
} from "../contants/contants";
import axios from "axios";
export default class HttpService {
  /**
   * @name get请求方法 类型 普通
   * @Content-type 是json
   * @param {url} url 
   * @param {body} 一个对象 
   */
  get(url, body = null) {
    //   执行参数混入
    body = this.formatBody(body)
    return axios.get(SERVICE_URL + url, {
      // 参数
      params: body
    })
  }
  /**
   * @name get请求完整的路径 类型 普通
   * @Content-type 是json
   * @param {url} url 
   * @param {body} 一个对象 
   */
  getFullUrl(url, body = null) {
    //   执行参数混入
    body = this.formatBody(body)
    return axios.get(url, {
      // 参数
      params: body
    })
  }
  /**
   *@name post请求方法  类型 普通 
   *@Content-type json
   *@param {url} url
   *@param {body} 一个对象
   */
  post(url, body) {
    //   执行参数混入
    body = this.formatBody(body);
    // 添加请求头
    let config = {
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      }
    };
    return axios.post(SERVICE_URL + url, body, config)
  };

  /**
   *@name post表单请求 类型 表单
   *@Content-Type multipart/form-data
   *@param {url} 地址
   *@param {body} 一个表单对象,会自动进行混入formData
   */
  postFormData(url, body) {
    body = this.formatBody(body);
    let formData = new FormData();

    // 混入表单对象对象
    for (let key in body) {
      formData.append(key, body[key]);
    }
    // 添加请求头
    let config = {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    };
    return axios.post(SERVICE_URL + url, formData, config)
  };


  /**
   *@name post字符编码模式请求 类型 x-www-form-urlencoded 
   *@Content-Type x-www-form-urlencoded
   *@param {url} 地址
   *@param {body} 一个参数对象
   */
  postXWwwFormUrlEncoded(url, body) {
    // 格式化参数,防止缓存
    body = this.formatBody(body);
    //   实例化一个search对象，必须babel-polyfill支持
    let urlSearchParams = new URLSearchParams();
    // 混入search对象
    for (let key in body) {
      urlSearchParams.append(key, body[key]);
    }
    // 添加请求头
    let config = {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8',
        'Accept': 'application/json;charset=utf-8',
      }
    };
    return axios.post(SERVICE_URL + url, urlSearchParams, config)
  }


  /**
   *@name put请求, 类型 普通 
   *@param url 地址
   *@param body 参数
   * 
   * 
   */
  put(url, body) {
    body = this.formatBody(body);
    //   实例化一个search对象，必须babel-polyfill支持
    let urlSearchParams = new URLSearchParams();
    // 混入search对象
    for (let key in body) {
      urlSearchParams.append(key, body[key]);
    }
    // 添加请求头
    let config = {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8',
        'Accept': 'application/json;charset=utf-8',
      }
    };

    return axios.put(SERVICE_URL + url, urlSearchParams, config)
  }



  put(url, body) {
    body = this.formatBody(body);
    //   实例化一个search对象，必须babel-polyfill支持
    let urlSearchParams = new URLSearchParams();
    // 混入search对象
    for (let key in body) {
      urlSearchParams.append(key, body[key]);
    }
    // 添加请求头
    let config = {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8',
        'Accept': 'application/json;charset=utf-8',
      }
    };

    return axios.put(SERVICE_URL + url, urlSearchParams, config)
  }


  delete(url, body) {
    body = this.formatBody(body);
    // 添加请求头
    let config = {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json;charset=utf-8',
      }
    };

    return axios.delete(SERVICE_URL + url, body, config)
  }


  /*******************************************************************登录注册的SERVICE_USER_URL****************************************************************************/


  /**
   *@name post字符编码模式请求 类型 x-www-form-urlencoded 
   *@Content-Type x-www-form-urlencoded
   *@param {url} 地址
   *@param {body} 一个参数对象
   */
  postXWwwFormUrlEncodedUser(url, body) {
    // 格式化参数,防止缓存
    body = this.formatBody(body);
    //   实例化一个search对象，必须babel-polyfill支持
    let urlSearchParams = new URLSearchParams();
    // 混入search对象
    for (let key in body) {
      urlSearchParams.append(key, body[key]);
    }
    // 添加请求头
    let config = {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8',
        'Accept': 'application/json;charset=utf-8',
      }
    };
    return axios.post(SERVICE_USER_URL + url, urlSearchParams, config)
  }



  /**
   *@name postUser请求方法  类型 普通 
   *@Content-type json
   *@param {url} url
   *@param {body} 一个对象
   */
  postUser(url, body) {
    //   执行参数混入
    body = this.formatBody(body);
    // 添加请求头
    let config = {
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      }
    };
    return axios.post(SERVICE_USER_URL + url, body, config)
  };


  //   参数混入
  formatBody(body = null) {
    if (body == null) {
      return body;
    }
    let newBody = {};
    // 如果有参数执行随机串混入
    for (let key in body) {
      newBody[key] = body[key];
    }
    newBody["time"] = Math.floor(Math.random() * 1000000);
    return newBody;
  }
}
