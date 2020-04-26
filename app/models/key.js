import Model, { attr } from '@ember-data/model';

export default class KeyModel extends Model {
	@attr('date', { defaultValue() { return new Date(); } }) createdAt;
	@attr('string') privateKey;
	@attr('string') publicKey;
}
