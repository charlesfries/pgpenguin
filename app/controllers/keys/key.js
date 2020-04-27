import Controller from '@ember/controller';
import { action } from '@ember/object';

export default class KeysKeyController extends Controller {

	privateOpen;
	publicOpen;

	@action copyPrivate() {
	}

	@action copyPublic() {
	}

	@action delete() {
		if (confirm('Are you sure you want to delete this key? This action is permanent.')) {
			this.model.destroyRecord();
			this.transitionToRoute('keys');
		}
	}

}
