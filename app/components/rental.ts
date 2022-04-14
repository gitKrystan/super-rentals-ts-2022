import Component from '@glimmer/component';
import RentalModel from 'super-rentals/models/rental';

interface RentalSignature {
  Args: {
    rental: RentalModel;
  };
}

export default class RentalComponent extends Component<RentalSignature> {}

declare module '@glint/environment-ember-loose/registry' {
  export default interface Registry {
    Rental: typeof RentalComponent;
  }
}
