import Component from '@glimmer/component';
import ENV from 'super-rentals/config/environment';

const MAPBOX_API = 'https://api.mapbox.com/styles/v1/mapbox/streets-v11/static';

interface MapSignature {
  Args: {
    lng: unknown;
    lat: unknown;
    width: unknown;
    height: unknown;
    zoom: unknown;
  };
}

export default class MapComponent extends Component<MapSignature> {
  get src(): string {
    let { lng, lat, width, height, zoom } = this.args;

    let coordinates = `${lng},${lat},${zoom}`;
    let dimensions = `${width}x${height}`;
    let accessToken = `access_token=${this.token}`;

    return `${MAPBOX_API}/${coordinates}/${dimensions}@2x?${accessToken}`;
  }

  get token(): string {
    return encodeURIComponent(ENV.MAPBOX_ACCESS_TOKEN);
  }
}
