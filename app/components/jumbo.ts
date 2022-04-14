import Component from '@glimmer/component';

interface JumboSignature {
  Blocks: { default: [] };
}

export default class JumboComponent extends Component<JumboSignature> {}

declare module '@glint/environment-ember-loose/registry' {
  export default interface Registry {
    Jumbo: typeof JumboComponent;
  }
}
