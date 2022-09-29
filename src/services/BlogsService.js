class  BlogsService{
  async getBlogs(){
    const res = await ServerApi.get('/api/blogs')
    AppState.blogs = 
  }
}

export const blogsService = new BlogsService()