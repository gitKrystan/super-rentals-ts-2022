import Component from '@glimmer/component';
import RentalModel from 'super-rentals/models/rental';
import IndexRoute from 'super-rentals/routes';
import { ModelFrom } from 'super-rentals/types/util';

interface RentalsFilterSignature {
  Args: {
    rentals: ModelFrom<IndexRoute>;
    query: string;
  };
  Blocks: {
    default: [results: Array<RentalModel>];
  };
}

export default class RentalsFilterComponent extends Component<RentalsFilterSignature> {
  get results(): Array<RentalModel> {
    let { rentals, query } = this.args;

    if (query) {
      rentals = rentals.filter((rental) => rental.title.includes(query));
    }

    return rentals;
  }
}

declare module '@glint/environment-ember-loose/registry' {
  export default interface Registry {
    'Rentals::Filter': typeof RentalsFilterComponent;
  }
}