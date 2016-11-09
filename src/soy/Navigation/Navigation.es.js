'use strict';

import Component from 'metal-component';
import Soy from 'metal-soy';

import templates from './Navigation.soy';

class Navigation extends Component {
	attached() {
		console.log('Navigation attached.');
	}
};

Soy.register(Navigation, templates);

export default Navigation;
