import {blog} from './blog';
import {blogDirective} from './blog.directive';
import template from './blog.html';
import {BlogController} from './blog.controller';

describe('Blog', () => {
  let $rootScope;
  let makeController;

  beforeEach(window.module(blog.name));
  beforeEach(inject(_$rootScope_ => {
    $rootScope = _$rootScope_;
    makeController = (injectables) => {
      return new BlogController(injectables);
    };
  }))

  describe('module', () => {
    it('should have an appropriate name', () => {
      expect(blog.name).to.equal('blog');
    });
  });

  describe('directive', ()=> {
    // TODO: test the directive to make sure it has the
    // right DDO and template and controller
    let ddo;
    beforeEach(() => {
      ddo = blogDirective();
    });

    it('should do something', function(){
      expect(ddo.controller).to.equal(BlogController);
      expect(ddo.template).to.equal(template);
    });
  });

  describe('controller', ()=> {
    // TODO: test the controller
    it('should have some sweet stuff', function(){
      const controller = makeController();
      expect(controller.message).to.equal('The latest from the blog');
      expect(controller.posts.length).to.equal(9);
      expect(controller.posts[0].author).to.equal('Casidy James')
    });
  });

  describe('template', ()=> {
    // TODO: test the template? yup
    // get creative
  });
});
