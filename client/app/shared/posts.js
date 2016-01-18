
export const posts = ($http, API) => {
	
	let posts = [];

	let get = () => {
		return $http.get(`${API.url}/posts`).then(resp => posts = resp.data);
	}

	let getState = () => {
		return posts;
	}
  
  return {get, getState};
};

posts.$inject = ['$http', 'API'];
