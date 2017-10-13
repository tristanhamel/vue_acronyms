import Vue from 'vue';

import './tooltip.scss';

function clickHandler() {
  document.removeEventListener('click', clickHandler);
}

const tooltip = Vue.component('tooltip', {
  template: `
    <div class="v-tooltip">
    
      <div class="v-tooltip-container"
           @click.stop=""
           v-html="tooltipContent"
           v-if="show">
      </div>
      <div @click="toggle"
           class="v-acronyms">
        {{tooltipTitle}}
      </div>
    </div>`,
  data: () => ({
    show: false
  }),
  props: {
    tooltipTitle: String,
    tooltipContent: String
  },
  methods: {
    toggle: function () {
      if (!this.show) this.bind();
      this.show = !this.show;
    },
    bind: function () {
      document.addEventListener('click', clickHandler);
    }
  }
});

export default tooltip;