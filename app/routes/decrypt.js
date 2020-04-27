import Route from '@ember/routing/route';

export default class DecryptRoute extends Route {

	setupController(controller, model) {
		controller.model = model;
		controller.selectKey(model.firstObject);
	}

	resetController(controller, isExiting) {
		if (isExiting) {
			controller.privateKey = null;
			controller.password = null;
			controller.message = null;
			controller.result = null;
			controller.error = null;
		}
	}
	
}
