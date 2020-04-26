import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | keys/key', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:keys/key');
    assert.ok(route);
  });
});
