import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class DecryptController extends Controller {
	@tracked result;
	@tracked privateKey;
	password;
	message;

	@action selectKey(key) {
		if (key) {
			this.privateKey = key.privateKey;
		}
	}

	@action async submit() {
		let { privateKey, password, message } = this;

		try {
			const { keys: [privateKey] } = await openpgp.key.readArmored(privateKey);
			let thing = await privateKey.decrypt(passphrase);
			
			console.log(thing)

			this.result = thing;
		} catch(err) {
			console.error(err)
		}
	}
}
