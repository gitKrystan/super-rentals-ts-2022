import Store from '@ember-data/store';
import Route from '@ember/routing/route';
import { service } from '@ember/service';
import RentalModel from 'super-rentals/models/rental';

interface RentalRouteParams {
  rental_id: string;
}

export default class RentalRoute extends Route {
  @service declare store: Store;

  async model(params: RentalRouteParams): Promise<RentalModel> {
    return await this.store.findRecord('rental', params.rental_id);
  }
}
