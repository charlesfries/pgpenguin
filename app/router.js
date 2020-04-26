import EmberRouter from '@ember/routing/router';
import config from './config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function() {
  this.route('generate');
  this.route('encrypt');
  this.route('decrypt');
  this.route('about');
  this.route('new');
  this.route('keys', function() {
    this.route('key');
  });
});
