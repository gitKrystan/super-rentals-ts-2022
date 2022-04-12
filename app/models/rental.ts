import Model, { attr } from '@ember-data/model';

const COMMUNITY_CATEGORIES = ['Condo', 'Townhouse', 'Apartment'];

interface MapLocation {
  lat: number;
  lng: number;
}

export default class RentalModel extends Model {
  @attr declare title: string;
  @attr declare owner: string;
  @attr declare city: string;
  @attr declare location: MapLocation;
  @attr declare category: string;
  @attr declare image: string;
  @attr declare bedrooms: number;
  @attr declare description: string;

  get type(): 'Community' | 'Standalone' {
    if (COMMUNITY_CATEGORIES.includes(this.category)) {
      return 'Community';
    } else {
      return 'Standalone';
    }
  }
}
