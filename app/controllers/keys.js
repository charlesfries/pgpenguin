import Controller from '@ember/controller';

export default class KeysController extends Controller {

	get keys() {
		return this.model.sortBy('id');
	}

}
