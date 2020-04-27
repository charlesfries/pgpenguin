import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class GenerateController extends Controller {

	@tracked nickname;
	@tracked name;
	@tracked email;
	@tracked key;

	@action async submit() {
		let { nickname } = this;
		
		let result = await openpgp.generateKey({ curve: 'brainpoolP512r1', userIds: [{ name: 'Test', email: 'test@test.com' }] });
		try {

			let key = this.store.createRecord('key', {
				nickname,
				privateKey: result.privateKeyArmored,
				publicKey: result.publicKeyArmored
			});

			key.save();
			this.key = key;

		} catch(_) {}
	}
	
}
