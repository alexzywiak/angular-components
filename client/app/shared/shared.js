
import {api} from './api';
import angular from 'angular';
import {posts} from './posts';

export const shared = angular.module('shared', [])
	.factory('Posts', posts)
  .constant('API', api);

