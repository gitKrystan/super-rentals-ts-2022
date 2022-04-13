import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

interface RentalImageSignature {
  Element: HTMLImageElement;
}

export default class RentalImageComponent extends Component<RentalImageSignature> {
  @tracked isLarge = false;

  @action toggleSize(): void {
    this.isLarge = !this.isLarge;
  }
}
