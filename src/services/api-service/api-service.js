import HttpService from "./../http-service/http-service";


export default class ApiService {
  http = new HttpService();
  /***************************************************************首页呼叫服务的全部API***********STR********************************************************************/
  /**
   * @name 获取指定id的点标记
   * @param {当前的类别 // 农机 1  飞防 2 农资 3 专家 4 } gysTypeId 
   * @param {可视范围内的经度} lng 
   * @param {可视范围内的维度} lat 
   * @param {范围 //  农机 1 有三个范围 {深松 9  播种  11  收割 10}  农资 3 有四个范围 { 种子12 化肥13 农药14 农膜15 } } busScopeId 
   */
  getDistanceGysInfos(gysTypeId, lng, lat, busScopeId = "") {
    let param = {
      gysTypeId,
      lng,
      lat,
      busScopeId
    }
    return this.http.get('gysInfo/getDistanceGysInfos', param);
  }



  /**
   * @name 根据返回的地址定位进行获取坐标获取城市名字
   * @param {必填高德Key} key 
   * @param {必填经度坐标} lng  经纬度小数点后不要超过 6 位。 如果需要解析多个经纬度的话，请用"|"进行间隔并且将 batch 参数设置为 true，最多支持传入 20 对坐标点。每对点坐标之间用"|"分割。
   * @param {必填纬度坐标} lat  经纬度小数点后不要超过 6 位。 如果需要解析多个经纬度的话，请用"|"进行间隔并且将 batch 参数设置为 true，最多支持传入 20 对坐标点。每对点坐标之间用"|"分割。
   * 传入内容规则：经度在前，纬度在后，经纬度间以“,”分割，经纬度小数点后不要超过 6 位。如果需要解析多个经纬度的话，请用"|"进行间隔，并且将 batch 参数设置为 true，最多支持传入 20 对坐标点。每对点坐标之间用"|"分割。
   */
  getRegeo(lng, lat) {
    //  if(lng.length  - lng.indexOf('.') -1   > 6 ){
    //   lng= lng.substr(lng.indexOf('.'),7)
    //  }
    //  if(lat.length  - lat.indexOf('.') -1  > 6 ){
    //   lat= lat.substr(lat.indexOf('.'),7)
    //  }
    //  debugger;

    let arr = [lng, lat];
    let location = arr.join(",");
    let param = {
      key: 'f62ba94f3cc29b4cf62ba6d8d931115b',
      location
    };

    return this.http.getFullUrl('http://restapi.amap.com/v3/geocode/regeo', param)
  }
  /***************************************************************首页呼叫服务的全部API***********END********************************************************************/



  /***************************************************************用户操作登录注册忘记密码页面的登录业务API***********STR********************************************************************/

  /**
   *@name  全部的登录注册业务的调用的函数必须使用USER后缀的请求函数
   * 
   * 
   */
  /**
   * 
   *@name 登录功能 
   *@param {手机号码} username
   *@param {密码} password
   * 
   * 
   */
  postLogin(username, password) {
    let param = {
      username,
      password
    };
    return this.http.postUser('login', param);
  }
  /**
   *@name 普通用户的发送验证码业务 通过验证码登录
   * 
   *@param {手机号} phone
   * 
   * 
   * 
   */
  postSendLoginSms(phone) {
    let param = {
      phone
    };
    return this.http.postUser('send_login_sms', param);
  }
  /**
   *@name 普通用户的验证码登录业务 通过验证码登录
   * 
   *@param {手机号} phone
   *@param {短信验证码} smsCode
   *@param {校验} tamp
   *@param {校验} hash 
   */
  postSmsLogin(phone, smsCode, tamp, hash) {
    let param = {
      phone,
      smsCode,
      tamp,
      hash
    };
    return this.http.postUser('sms_login', param);
  }



 


/**
 * 
 *@name 注册业务发送验证码 
 *@param {手机号码} 
 * 
 * 
 * 
 * 
 * 
 */
  postRegisterSendSms(phone){
    let param = {
      phone
    }
    return this.http.postUser('register_send_sms',param)
  }

  /**
   *@name 注册业务注册 
   * 
   *@param {手机号码} 
   *@param {短信验证码}
   *@param {hash}
   *@param {tamp}
   * 
   * 
   * 
   * 
   */

postRegister(phone,smsCode,hash,tamp){
  let param  =  {
    phone,smsCode,hash,tamp
  }
  return this.http.postUser('register',param);
}
  
  /***************************************************************用户操作登录注册忘记密码页面的登录业务API***********END********************************************************************/


































































  /**
   * @name 供应商提交
   * @param formData,注意直接传入一个对象既可,
   * 会自动进行混入formData 
   * {a:1,file:document.getElementById("file")}  
   * 警告,表单数据直接传入
   */
  postGysInfo(formData) {

    return this.http.postFormData('gysInfo/postGysInfo', formData)
  }
  /**
   *@name  用户信息修改
   *@param id
   *@param username
   * 
   */
  putUser(id, username) {
    let param = {
      id,
      username
    }
    return this.http.put('admin-api/user/putUser', param)

  }
  delBusScope(id) {
    let param = {
      id
    };
    return this.http.delete('businessScope/delBusScope', param);
  }

}
