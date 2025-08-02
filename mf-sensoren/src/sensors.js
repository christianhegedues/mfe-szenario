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

    const filteredSensors = computed(() => {
      const currentQueries = unref(queries);

      return unref(sensors).filter((sensor) => {
        if (currentQueries == null) {
          return true;
        }

        return Object.keys(currentQueries).every((query) => {
          if (Array.isArray(currentQueries[query])) {
            return currentQueries[query].some((elem) => {
              return elem === sensor[query];
            });
          }

          return currentQueries[query] === sensor[query];
        });
      });
    });

    onMounted(() => {
      sensors.value = data.map((sensor) => {
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

