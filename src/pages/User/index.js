import blog from "../../api/blog";
export default {
  data() {
    return {
      blogs: [],
      user: {},
      page: 1,
      total: 0,
    };
  },
  // 填充数据,在组件创建的时候,调用api
  created() {
    // 获取id
    this.userId = this.$route.params.userId;
    // page 如果不存在则为1
    this.page = this.$route.query.page || 1;
    // 要获取所有的,不止首页的,所以就不用Atindex
    blog.getBlogsByUserId(this.userId, { page: this.page }).then((res) => {
      console.log(res);
      this.page = res.page;
      this.total = res.total;
      this.blogs = res.data;
      if (res.data.length > 0) {
        this.user = res.data[0].user;
      }
    });
  },
  methods: {
    // 把日期变成对象来得到年月日
    splitDate(dataStr) {
      let dateObj = typeof dataStr === "object" ? dataStr : new Date(dataStr);
      return {
        date: dateObj.getDate(),
        month: dateObj.getMonth() + 1,
        year: dateObj.getFullYear(),
      };
    },
    onPageChange(newPage) {
      console.log(newPage);
      blog.getBlogsByUserId(this.userId, { page: newPage }).then((res) => {
        console.log(res);
        this.blogs = res.data;
        this.total = res.total;
        this.page = res.page;
        // 刷新时还会再之前的那一页
        // this.$router.push({ path: `/?page=${newPage}` });
        // 这样是不行的 我们需要在一开始的时候就进行测试
        this.$router.push({
          path: `/user/${this.userId}`,
          query: { page: newPage },
        });
      });
    },
  },
};
