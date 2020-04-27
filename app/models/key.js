import Model, { attr } from '@ember-data/model';

export default class KeyModel extends Model {
	@attr('date', { defaultValue() { return new Date(); } }) createdAt;
	@attr('string') nickname;
	@attr('string') privateKey;
	@attr('string') publicKey;

	get name() {
		return openpgp.key.readArmored(this.publicKey);
	}

	get email() {
		return openpgp.key.readArmored(this.publicKey);
	}

	get fingerprint() {
		return 'Unknown';
	}

}
