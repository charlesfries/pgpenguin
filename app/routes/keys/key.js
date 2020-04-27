import Route from '@ember/routing/route';

export default class KeysKeyRoute extends Route {

	resetController(controller, isExiting) {
		if (isExiting) {
			controller.privateOpen = null;
			controller.publicOpen = null;
		}
	}

}
