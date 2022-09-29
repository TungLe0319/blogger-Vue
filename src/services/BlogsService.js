import { AppState } from "../AppState.js";
import { Blog } from "../models/Blog.js";

class BlogsService {
  async getBlogs() {
    const res = await ServerApi.get("/api/blogs");
    AppState.blogs = res.data.map((b) => new Blog(res.data));
  }
}

export const blogsService = new BlogsService();
