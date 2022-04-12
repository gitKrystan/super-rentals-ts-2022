import Route from '@ember/routing/route';
import { service } from '@ember/service';
import Store from '@ember-data/store';

// eslint-disable-next-line ember/use-ember-data-rfc-395-imports
import DS from 'ember-data';
import RentalModel from 'super-rentals/models/rental';

interface RentalRouteParams {
  rental_id: string;
}

export default class RentalRoute extends Route {
  @service declare store: Store;

  model(params: RentalRouteParams): DS.PromiseObject<RentalModel> {
    return this.store.findRecord('rental', params.rental_id);
  }
}
