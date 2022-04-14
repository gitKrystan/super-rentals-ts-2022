import Component from '@glimmer/component';

export default class NavBarComponent extends Component {}

declare module '@glint/environment-ember-loose/registry' {
  export default interface Registry {
    NavBar: typeof NavBarComponent;
  }
}
