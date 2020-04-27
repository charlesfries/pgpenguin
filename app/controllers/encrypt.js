import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class EncryptController extends Controller {
	@tracked result;
	@tracked publicKey;
	message;

	@action selectKey(key) {
		if (key) {
			this.publicKey = key.publicKey;
		}
	}

	@action async submit() {
		let { publicKey, message } = this;

		try {
			const { data: encrypted } = await openpgp.encrypt({
				message: openpgp.message.fromText(message),
				publicKeys: (await openpgp.key.readArmored(publicKey)).keys
			});
			this.result = encrypted;
		} catch(err) {
			console.error(err)
		}
	}

}
