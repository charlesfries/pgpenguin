import Route from '@ember/routing/route';

export default class ApplicationRoute extends Route {

	async model() {
		let keys = await this.store.findAll('key');
		return keys.sortBy('id');
	}
	
}
