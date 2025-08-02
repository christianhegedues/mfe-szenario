import { defineComponent, onMounted } from 'vue';
import { mountFilters } from 'filters/filters';
import { mountSensors } from 'sensors/sensors';
import './app.css';

export default defineComponent({
  name: 'App',
  template: `
    <div class="app">
      <div id="filters" class="app__filters" />
      <div id="sensors" class="app__sensors" />
    </div>
  `,
  setup() {
    onMounted(() => {
      mountFilters('#filters');
      mountSensors('#sensors');
    });
  },
});

