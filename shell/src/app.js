import { defineComponent, onMounted } from 'vue';
import { mountFilters } from 'filters/filters';
import { mountSensors } from 'sensors/sensors';
import './app.css';

class EventBus {
  constructor() {
    this.eventList = {};
  }

  publish(eventName, data) {
    try {
      data = data || {};
      const eventListeners = this.eventList[eventName] || [];
      eventListeners.forEach((listener) => {
        listener.callback(data);
      });
    } catch (e) {
      console.warn(e);
    }
  }

  subscribe(eventName, callback) {
    let listener = {
      callback: callback,
    };

    this.eventList[eventName] = this.eventList[eventName] || [];
    this.eventList[eventName].push(listener);
  }
}

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

    window.eventBus = new EventBus();
  },
});

