import blog from "../../api/blog";
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      blogs: [],
      page: 1,
      total: 0,
    };
  },
  computed: {
    ...mapGetters(["user"]),
  },
  // 填充数据,在组件创建的时候,调用api
  /*created() {
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
  },*/

  //由于用vuex获取到了user信息,就不需要获取id了
  created() {
    // page 如果不存在则为1
    this.page = parseInt(this.$route.query.page) || 1;
    // 要获取所有的,不止首页的,所以就不用Atindex
    blog.getBlogsByUserId(this.user.id, { page: this.page }).then((res) => {
      console.log(res);
      this.page = res.page;
      this.total = res.total;
      this.blogs = res.data;
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
    //同样也不需要获取id,直接user.id,不需要userId
    onPageChange(newPage) {
      console.log(newPage);
      blog.getBlogsByUserId(this.user.id, { page: newPage }).then((res) => {
        console.log(res);
        this.blogs = res.data;
        this.total = res.total;
        this.page = res.page;
        // 刷新时还会再之前的那一页
        // this.$router.push({ path: `/?page=${newPage}` });
        // 这样是不行的 我们需要在一开始的时候就进行测试
        // this.$router.push({
        //   path: `/user/${this.userId}`,
        //   query: { page: newPage },
        // });
        this.$router.push({ path: "/my", query: { page: newPage } });
      });
    },
    // 删除
    /*onDelete(blogId) {
      console.log(blogId);
      this.$confirm("此操作将永久删除该文件,是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
          return blog.deleteBlog({ blogId });
        })
        .then(() => {
          this.$message.success("删除成功");
        });
    },*/
    //用await改写上面
    async onDelete(blogId) {
      await this.$confirm("此操作将永久删除该文件,是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      });
      await blog.deleteBlog({ blogId });
      this.$message.success("删除成功");
      this.blogs = this.blogs.filter((blog) => blog.id != blogId);
    },
  },
};
