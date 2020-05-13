// 发送接口的底层api,例如封装axios
import axios from "axios";
import { Message } from "element-ui";

//约定好Content-Type是application/....类型的
axios.defaults.headers.post["Content-Type"] =
  "application/x-www-form-urlencoded";
//baseUrl是接口的路径，后面在调用这个接口就不用去传http这个路径了，只需要去传后面的就行了
axios.defaults.baseURL = "http://blog-server.hunger-valley.com";
//告诉浏览器即使对于异步的请求 跨域
axios.defaults.withCredentials = true;

export default function request(url, type = "GET", data = {}) {
  return new Promise((resolve, reject) => {
    let option = {
      url,
      method: type,
    };
    if (type.toLowerCase() === "get") {
      option.params = data;
    } else {
      option.data = data;
    }
    axios(option)
      .then((res) => {
        //   ok是与后端的约定
        if (res.data.status === "ok") {
          resolve(res.data);
        } else {
          // 失败，必须要把msg原因打出来
          Message.error(res.data.msg);
          reject(res.data);
        }
      })
      .catch(() => {
        Message.error("网络异常");
        reject({ msg: "网络异常" });
      });
  });
}
