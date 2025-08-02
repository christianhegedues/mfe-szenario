export default `
  <div class="filters">
    <div class="filters__section">
      <h3>Status</h3>
      <ul class="filters__list">
        <li>
          <label>
            <input type="checkbox" value="up" v-model="status" />
            <span>Up</span>
          </label>
        </li>
        <li>
          <label>
            <input type="checkbox" value="warning" v-model="status" />
            <span>Warning</span>
          </label>
        </li>
        <li>
          <label>
            <input type="checkbox" value="down" v-model="status" />
            <span>Down</span>
          </label>
        </li>
        <li>
          <label>
            <input type="checkbox" value="paused" v-model="status" />
            <span>Paused</span>
          </label>
        </li>
      </ul>
    </div>

    <div class="filters__section">
      <h3>Typ</h3>
      <ul class="filters__list">
        <li>
          <label>
            <input type="checkbox" value="Ping" v-model="kind" />
            <span>Ping</span>
          </label>
        </li>
        <li>
          <label>
            <input type="checkbox" value="SNMP Traffic" v-model="kind" />
            <span>SNMP Traffic</span>
          </label>
        </li>
        <li>
          <label>
            <input type="checkbox" value="SNMP Load" v-model="kind" />
            <span>SNMP Load</span>
          </label>
        </li>
      </ul>
    </div>

    <div class="filters__section">
      <h3>Favoriten</h3>
      <ul class="filters__list">
        <li>
          <label>
            <input type="checkbox" v-model="favorite" />
            <span>Nur Favoriten anzeigen</span>
          </label>
        </li>
      </ul>
    </div>
  </div>
`;

