import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class KeysKeyController extends Controller {

	@tracked privateOpen;
	@tracked publicOpen;

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
