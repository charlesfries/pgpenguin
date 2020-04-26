import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class GenerateController extends Controller {

	@tracked privateKey;
	@tracked publicKey;

	@action async submit() {
		let result = await openpgp.generateKey({ curve: 'brainpoolP512r1', userIds: [{ name: 'Test', email: 'test@test.com' }] });
		try {

			let key = this.store.createRecord('key', {
				privateKey: result.privateKeyArmored,
				publicKey: result.publicKeyArmored
			});

			key.save();

			this.privateKey = key.privateKey;
			this.publicKey = key.publicKey;
		} catch(_) {}
	}
	
}
