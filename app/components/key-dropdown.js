import Component from '@glimmer/component';
import { action } from '@ember/object';

export default class KeyDropdownComponent extends Component {

	@action onSelecter(obj) {
		let keyId = obj.target.value;
		let key = this.args.keys.findBy('id', keyId);
		this.args.onSelect(key)
	}

}
