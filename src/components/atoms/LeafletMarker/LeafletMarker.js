import { LMarker } from 'vue2-leaflet';

// Marker Icon is missing issue https://vue2-leaflet.netlify.app/quickstart/#marker-icons-are-missing
// Don't know where to put this, but let it be for now.
import { Icon } from 'leaflet';

delete Icon.Default.prototype._getIconUrl;
Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});
// End of Marker Icon is missing issue

export default LMarker