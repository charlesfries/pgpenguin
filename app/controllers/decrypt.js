import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class DecryptController extends Controller {
	@tracked result = null;

	@action submit() {
		let { privateKey, password, message } = this;

		console.log(privateKey, message);

		this.result = 'what';
	}
}
