import Route from '@ember/routing/route';

export default class GenerateRoute extends Route {

	resetController(controller, isExiting) {
		if (isExiting) {
			controller.name = null;
			controller.email = null;
			controller.key = null;
		}
	}
	
}
