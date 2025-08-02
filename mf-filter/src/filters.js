import { createApp, defineComponent, ref, watch } from 'vue';
import template from './filters.html.js';
import './filters.css';

const Filters = defineComponent({
  name: 'Filters',
  template,
  setup() {
    const status = ref([]);
    const kind = ref([]);
    const favorite = ref();

    watch([status, kind, favorite], ([newStatus, newKind, newFav]) => {
      const filters = {};

      if (newStatus.length) {
        filters.status = newStatus;
      }

      if (newKind.length) {
        filters.kind = newKind;
      }

      if (newFav) {
        filters.favorite = newFav;
      }
    });

    return {
      status,
      kind,
      favorite,
    };
  },
});

export function mountFilters(el) {
  createApp(Filters).mount(el);
}

