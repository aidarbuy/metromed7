class AuthStateFactory {
	constructor () {
		'ngInject';

		return {
			getAuthData: function() {
				return this.authData;
			},

			setAuthData: function(data) {
				this.authData = data;
			}
		};
	}
}

export default AuthStateFactory;