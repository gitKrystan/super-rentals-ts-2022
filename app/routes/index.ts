import Store from '@ember-data/store';
import Route from '@ember/routing/route';
import { service } from '@ember/service';
import RentalModel from 'super-rentals/models/rental';

export default class IndexRoute extends Route {
  @service declare store: Store;

  async model(): Promise<Array<RentalModel>> {
    return (await this.store.findAll('rental')).toArray();
  }
}
