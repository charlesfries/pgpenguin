import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class DecryptController extends Controller {
	@tracked result = null;

	@action async submit() {
		let { privateKey, password, message } = this;

		console.log(privateKey, message);

		this.result = 'what';

		let res = await openpgp.generateKey({ curve: 'brainpoolP512r1',  userIds: [{ name: 'Test', email: 'test@test.com' }] });

		console.log(res)
	}
}
