import { computed, createApp, defineComponent, unref, ref, onMounted } from 'vue';
import { Sensor } from './models/sensor.js';
import { data } from './data.js';
import template from './sensors.html.js';
import './sensors.css';

const Sensors = defineComponent({
  name: 'Sensors',
  template,
  setup() {
    const queries = ref();
    const sensors = ref([]);

    const filteredSensors = computed(function() {
      const currentQueries = unref(queries);

      return unref(sensors).filter(function(sensor) {
        if (currentQueries == null) {
          return true;
        }

        return Object.keys(currentQueries).every(function(query) {
          if (Array.isArray(currentQueries[query])) {
            return currentQueries[query].some(function(elem) {
              return elem === sensor[query];
            });
          }

          return currentQueries[query] === sensor[query];
        });
      });
    });

    const channel = new BroadcastChannel('filters');
    channel.onmessage = function(event) {
      queries.value = event.data;
    };

    onMounted(function() {
      sensors.value = data.map(function(sensor) {
        return new Sensor(sensor);
      });
    });

    return {
      filteredSensors,
    };
  },
});

export function mountSensors(el) {
  createApp(Sensors).mount(el);
}

