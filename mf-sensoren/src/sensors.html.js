export default `
  <div class="sensoren">
    <h3>Sensoren</h3>
      <div v-for="sensor in filteredSensors"
        :class="['sensor', sensor.favorite && 'sensor__marked']"
        :key="sensor.id"
      >
        <svg height="30" width="30" xmlns="http://www.w3.org/2000/svg">
          <circle r="15" cx="15" cy="15" :class="['sensor__status', sensor.status]" />
        </svg>
        <div class="sensor__inner">
          <h3 class="sensor__title">{{ sensor.name }}</h3>
          <ul class="sensor__information">
            <li>Typ: <strong>{{ sensor.kind }}</strong></li>
            <li>Status: <strong>{{ sensor.status }}</strong></li>
            <li>Letzter Wert: <strong>{{ sensor.lastMeasurement }}</strong></li>
            <li>Letzter Scan: <strong>{{ sensor.statusSince }}</strong></li>
          </ul>
        </div>
      </div>
  </div>
`;

