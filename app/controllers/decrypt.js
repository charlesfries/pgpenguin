import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class DecryptController extends Controller {

	@tracked privateKey;
	@tracked password;
	@tracked message;
	@tracked result;
	@tracked error;

	@action selectKey(key) {
		if (key) {
			this.privateKey = key.privateKey;
		}
	}

	@action async submit() {
		let { privateKey: privateKeyArmored, password, message } = this;

		this.error = null;

		let pk;
		try {
			const { keys: [privateKey] } = await openpgp.key.readArmored(privateKeyArmored);
			await privateKey.decrypt(password);
			pk = privateKey;
		} catch(err) {
			this.error = err.message;
		}

		if (pk) {
			try {
				const { data: decrypted } = await openpgp.decrypt({
					message: await openpgp.message.readArmored(message),
					privateKeys: [pk]
				});
				this.result = decrypted;
			} catch(err) {
				this.error = err.message;
			}
		}
	}

}
