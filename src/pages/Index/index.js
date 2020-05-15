import blog from "../../api/blog";

export default {
  data() {
    return {
      blogs: [],
      total: 0, //一共多少条数据
      page: 1, //当前页
    };
  },
  // 获取数据
  created() {
    this.page = parseInt(this.$route.query.page) || 1;
    blog.getIndexBlogs({ page: this.page }).then((res) => {
      console.log(res);
      this.blogs = res.data;
      this.total = res.total;
      this.page = res.page;
    });
  },
  methods: {
    onPageChange(newPage) {
      console.log(newPage);
      blog.getIndexBlogs({ page: newPage }).then((res) => {
        console.log(res);
        this.blogs = res.data;
        this.total = res.total;
        this.page = res.page;
        // 刷新时还会再之前的那一页
        // this.$router.push({ path: `/?page=${newPage}` });
        // 这样是不行的 我们需要在一开始的时候就进行测试
        this.$router.push({ path: "/", query: { page: newPage } });
      });
    },
  },
};
