// create our controller using the
// highly controversial class
import _ from 'lodash';

class BlogController {
  // bind to this and not $scope
  // because of controllerAs.
  constructor() {
    this.posts = [{
      author: 'Balzac',
      title: 'Being named Balzac'
    }, {
    	author: 'John Steinbeck',
    	title: 'Drinking Wine'
    }]
  }
}
// could also just export the class up top as well
export { BlogController };
// check blog.html for hints on what the controller
// should have/do
