import _ from 'lodash';

class BlogController {
  constructor(Post) {

    this.Post = Post;
    this.getPosts();
    this.posts = [];
  }

  getPosts() {
    this.Post.get().then(() => {
      this.posts = this.Post.getState();
    });
  }
}

BlogController.$inject = ['Posts'];

export {
  BlogController
};
