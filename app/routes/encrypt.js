import Route from '@ember/routing/route';

export default class EncryptRoute extends Route {

	setupController(controller, model) {
		controller.model = model;
		controller.selectKey(model.firstObject);
	}

	resetController(controller, isExiting) {
		if (isExiting) {
			controller.publicKey = null;
			controller.message = null;
			controller.result = null;
			controller.error = null;
		}
	}
	
}
