import * as mapboxgl from "mapbox-gl";

class MapDownload implements mapboxgl.IControl {
  _map!: mapboxgl.Map;
  _btn!: HTMLElement;
  elem!: HTMLElement;

  container(child: HTMLElement) {
    let container = document.createElement('div');
    container.className = 'mapboxgl-ctrl mapboxgl-ctrl-group';
    container.appendChild(child);

    return container;
  }

  dataURLtoBlob(dataurl: String) {
    const arr = dataurl.split(',');
    let bstr = atob(arr[1]), n = bstr.length, u8arr = new Uint8Array(n);
    while (n--) {
      u8arr[n] = bstr.charCodeAt(n);
    }
    return new Blob([u8arr], { type: 'image/png' });
  }

  downloanButton() {
    const btn = document.createElement('button');
    btn.className = 'mapboxgl-ctrl-icon mapboxgl-ctrl-map-download';
    btn.type = 'button';

    btn.onclick = () => {
      const img = this._map.getCanvas().toDataURL("image/png")
        .replace("image/png", "image/octet-stream")
      const link = document.createElement('a');
      link.download = "map.png";

      const blob = this.dataURLtoBlob(img);
      const objurl = URL.createObjectURL(blob);

      link.href = objurl;
      link.click();
    };

    return btn;
  }

  onAdd(map: mapboxgl.Map): HTMLElement {
    this._map = map;

    this._btn = this.downloanButton();
    this.elem = this.container(this._btn);

    return this.elem;
  }

  onRemove(map: mapboxgl.Map) {
    this.elem.parentNode!.removeChild(this.elem);
  }

  getDefaultPosition?: (() => string) | undefined = () => 'top-right';
}

module.exports = MapDownload;
