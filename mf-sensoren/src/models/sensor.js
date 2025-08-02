export class Sensor {
  id;
  kind;
  name;
  status = 'unknown';
  favorite = false;
  since;
  value;
  unit;

  constructor(sensor) {
    this.id = sensor.id;
    this.kind = sensor.kind;
    this.name = sensor.name;
    this.status = sensor.status;
    this.favorite = sensor.favorite;
    this.since = sensor.since;
    this.value = sensor.last_measurement.value;
    this.unit = sensor.last_measurement.unit;
  }

  get lastMeasurement() {
    return `${this.value} ${this.unit}`
  }

  get statusSince() {
    return `${this.since} ${this.since === 1 ? 'Tag' : 'Tage'}`
  }
}
