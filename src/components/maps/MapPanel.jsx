import React, { useEffect, useRef, useState } from 'react';
import { CircleMarker, MapContainer, Popup, TileLayer, useMap } from 'react-leaflet';
import { Crosshair, Layers, Maximize2, Minus, Plus, RotateCcw } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useApp } from '../../app/providers';
import 'leaflet/dist/leaflet.css';

const center = [26.8467, 80.9462];
const mapSources = {
  light: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  dark: 'https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png',
};
const markers = [
  { position: [26.824, 80.962], type: 'Evidence', title: 'Evidence #EV-1042', status: 'Verified', color: '#2f6f5e', route: '/evidence/EV-1042' },
  { position: [26.871, 80.918], type: 'Land record', title: 'Parcel UP-LKO-004276', status: 'Agricultural', color: '#3f8f7a', route: '/land-records/UP-LKO-004276' },
  { position: [26.852, 80.986], type: 'Dispute', title: 'Boundary conflict', status: 'Needs review', color: '#b85f55', route: '/disputes' },
  { position: [26.891, 80.951], type: 'Field survey', title: 'Survey FS-204', status: 'Scheduled', color: '#c58d43', route: '/field-surveys' },
];

function MapResizer({ containerRef }) {
  const map = useMap();
  useEffect(() => {
    const observer = new ResizeObserver(() => map.invalidateSize());
    if (containerRef.current) observer.observe(containerRef.current);
    map.invalidateSize();
    return () => observer.disconnect();
  }, [containerRef, map]);
  return null;
}

export default function MapPanel({ onParcel }) {
  const { theme } = useApp();
  const [layers, setLayers] = useState(true);
  const containerRef = useRef(null);
  const mapRef = useRef(null);
  const tileUrl = mapSources[theme === 'light' ? 'light' : 'dark'];

  return <div className="card map-card map-card-real" ref={containerRef}>
    <div className="real-map-shell">
      <MapContainer center={center} zoom={11} scrollWheelZoom doubleClickZoom touchZoom dragging zoomControl={false} whenCreated={map => { mapRef.current = map; }}>
        <TileLayer key={tileUrl} url={tileUrl} attribution="&copy; OpenStreetMap contributors &copy; CARTO" maxZoom={19} />
        <MapResizer containerRef={containerRef} />
        {layers && markers.map(marker => <CircleMarker key={marker.title} center={marker.position} radius={8} pathOptions={{ color: '#fff', weight: 2, fillColor: marker.color, fillOpacity: .95 }}>
          <Popup><div className="map-popup"><span className="map-popup-kicker">{marker.type}</span><b>{marker.title}</b><span>Status: {marker.status}</span><small>Lucknow, Uttar Pradesh • Demo data</small><Link className="map-popup-link" to={marker.route}>Open record <span>→</span></Link></div></Popup>
        </CircleMarker>)}
        <CircleMarker center={[26.8467, 80.9462]} radius={7} pathOptions={{ color: '#fff', weight: 2, fillColor: '#6f8c82', fillOpacity: .9 }} />
      </MapContainer>
      <div className="map-overlay map-overlay-top"><span className="map-live-status"><i /> Live map canvas</span><span>Lucknow district</span></div>
      <div className="map-layer-panel real-map-layer"><b><Layers size={14} /> Map layers</b><label><input type="checkbox" checked={layers} onChange={event => setLayers(event.target.checked)} /> Evidence and parcel markers</label><small>OpenStreetMap basemap • demo overlays</small></div>
      <div className="map-controls real-map-controls"><button onClick={() => mapRef.current?.zoomIn()} aria-label="Zoom in"><Plus size={18} /></button><button onClick={() => mapRef.current?.zoomOut()} aria-label="Zoom out"><Minus size={18} /></button><button onClick={() => mapRef.current?.setView(center, 11)} aria-label="Reset map view"><RotateCcw size={17} /></button><button onClick={() => mapRef.current?.locate({ setView: true, maxZoom: 13 })} aria-label="Locate me"><Crosshair size={17} /></button><button onClick={() => { const element = containerRef.current; if (!document.fullscreenElement) element?.requestFullscreen?.(); else document.exitFullscreen?.(); }} aria-label="Fullscreen map"><Maximize2 size={16} /></button></div>
      <div className="map-legend real-map-legend"><span><i style={{ background: '#2f6f5e' }} /> Evidence</span><span><i style={{ background: '#3f8f7a' }} /> Land record</span><span><i style={{ background: '#b85f55' }} /> Dispute</span><span><i style={{ background: '#c58d43' }} /> Field survey</span></div>
      <button className="real-parcel-trigger" onClick={() => onParcel?.({ id: 'UP-LKO-004276', survey: '132/3', area: '2.45', landUse: 'Agricultural', ownership: 'Private', village: 'Sarojini Nagar', district: 'Lucknow' })} aria-label="Open selected parcel"> </button>
    </div>
  </div>;
}
