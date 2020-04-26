import Model, { attr } from '@ember-data/model';

export default class PairModel extends Model {
	@attr('date', { defaultValue() { return new Date(); } }) createdAt;
	@attr('string') privateKey;
	@attr('string') publicKey;
}
