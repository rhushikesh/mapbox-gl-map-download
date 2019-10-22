# mapbox-gl-map-download [![npm](https://img.shields.io/npm/v/mapbox-gl-map-extract.svg)](https://www.npmjs.com/package/mapbox-gl-map-extract)
Add a map download control to [Mapbox GL JS](https://github.com/mapbox/mapbox-gl-js).

![demo](https://raw.githubusercontent.com/rhushikesh/mapbox-gl-map-download/master/resources/demo.gif)

## Usage

**mapbox-gl-map-download** is a [Mapbox GL JS plugin] that you can easily add on top of your map. 

**When using NPM**

Check [how to use Mapbox GL JS in a module bundler](https://www.mapbox.com/mapbox-gl-js/api/).

```bash
npm install --save mapbox-gl-map-extract
```

```javascript
const mapboxgl = require('mapbox-gl')
const MapDownload = require('mapbox-gl-map-extract');
const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/traffic-night-v2',
    center: [-77.0259, 38.9010],
    zoom: 9
});
map.on('load', () => {
    map.addControl(new MapDownload());
});
```
## Develop
Run locally
```
    npm install
```    

Create a minified standalone build.
```
    npm install
    npm run build
```   

## Icon credits
Icons made by [Lyolya]("https://www.flaticon.com/authors/lyolya") from [Flaticon]("https://www.flaticon.com/")
