import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class KeyDropdownComponent extends Component {

	@tracked selectedKey;
	@tracked publicOpen;
	@tracked privateOpen;

	@action showPublic(key) {
		this.selectedKey = key;
		this.publicOpen = true;
	}

	@action hidePublic() {
		this.selectedKey = null;
		this.publicOpen = false;
	}

	@action showPrivate(key) {
		this.selectedKey = key;
		this.privateOpen = true;
	}

	@action hidePrivate() {
		this.selectedKey = null;
		this.privateOpen = false;
	}

}
