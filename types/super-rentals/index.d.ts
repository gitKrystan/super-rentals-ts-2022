import Ember from 'ember';

import '@glint/environment-ember-loose';

// NOTE: This import won't be necessary after Glint 0.8
import '@glint/environment-ember-loose/native-integration';

declare global {
  interface Array<T> extends Ember.ArrayPrototypeExtensions<T> {}
  // interface Function extends Ember.FunctionPrototypeExtensions {}
}

export {};
