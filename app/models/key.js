import Model, { attr } from '@ember-data/model';

export default class KeyModel extends Model {
	@attr('date', { defaultValue() { return new Date(); } }) createdAt;
	@attr('string') nickname;
	@attr('string') privateKey;
	@attr('string') publicKey;

	// async get name() {
	// 	let thing = await openpgp.key.readArmored(this.publicKey);
	// 	return thing;
	// }

	// get email() {
	// 	let thing = await openpgp.key.readArmored(this.publicKey);
	// 	return thing;
	// }
}
