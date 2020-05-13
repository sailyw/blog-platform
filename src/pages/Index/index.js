import request from "../../helpers/request.js";
import auth from "../../api/auth";
import blog from "../../api/blog";

window.request = request;
window.auth = auth;
window.blog = blog;

export default {
  data() {
    return {
      msg: "welcome",
    };
  },
  methods: {
    onClick1() {
      this.$message.error("错了哦，这是一条错误消息");
    },
    onClick2() {
      this.$alert("这是一段内容", "标题名称", {
        confirmButtonText: "确定",
        callback: () => {
          this.$message.success("点了确定");
        },
      });
    },
  },
};
