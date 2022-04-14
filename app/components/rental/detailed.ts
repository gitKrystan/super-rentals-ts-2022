import Component from '@glimmer/component';
import RentalModel from 'super-rentals/models/rental';

interface RentalDetailedSignature {
  Args: { rental: RentalModel };
}

export default class RentalDetailedComponent extends Component<RentalDetailedSignature> {}

declare module '@glint/environment-ember-loose/registry' {
  export default interface Registry {
    'Rental::Detailed': typeof RentalDetailedComponent;
  }
}
