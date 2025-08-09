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

    onMounted(function() {
      sensors.value = data.map(function(sensor) {
        return new Sensor(sensor);
      });

      window.eventBus.subscribe('filtersChanged', function({ filters }) {
        queries.value = filters;
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

