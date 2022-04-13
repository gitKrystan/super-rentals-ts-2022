import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import IndexRoute from 'super-rentals/routes/index';
import { ModelFrom } from 'super-rentals/types/util';

interface RentalsSignature {
  Args: {
    rentals: ModelFrom<IndexRoute>;
  };
}

export default class RentalsComponent extends Component<RentalsSignature> {
  @tracked query = '';
}
