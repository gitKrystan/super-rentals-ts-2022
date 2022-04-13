import Ember from 'ember';

import '@glint/environment-ember-loose';

// NOTE: This import won't be necessary after Glint 0.8
import '@glint/environment-ember-loose/native-integration';

// FIXME: Remove this catch-all before merge
declare module '@glint/environment-ember-loose/registry' {
  export default interface Registry {
    [key: string]: any;
  }
}

declare global {
  interface Array<T> extends Ember.ArrayPrototypeExtensions<T> {}
  // interface Function extends Ember.FunctionPrototypeExtensions {}
}

export {};
