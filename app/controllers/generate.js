import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class GenerateController extends Controller {

	@tracked privateKey;
	@tracked publicKey;

	@action async submit() {
		let result = await openpgp.generateKey({ curve: 'brainpoolP512r1',  userIds: [{ name: 'Test', email: 'test@test.com' }] });
		try {
			this.privateKey = result.privateKeyArmored;
			this.publicKey = result.publicKeyArmored;
		} catch(_) {}
	}
	
}
