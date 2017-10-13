import Vue from 'vue';

import './tooltip.scss';

const tooltip = Vue.component('th-tooltip', {
  template: `
    <div class="v-tooltip"
         @mouseleave="onMouseLeave">
    
      <div class="v-tooltip-container"
           @click.stop=""
           v-html="tooltipContent"
           v-if="show">
      </div>
      <div @click="onClick"
           @mouseenter="onMouseEnter"
           class="v-acronyms">
        {{tooltipTitle}}
      </div>
    </div>`,
  data: () => ({
    show: false
  }),
  props: {
    tooltipTitle: {
      type: String,
      required: true
    },
    tooltipContent: {
      type: String,
      required: true
    },
    options: {
      type: Object,
      default: () => ({
        showOnMouseEnter: false,
        hideOnMouseLeave: false
      })
    }
  },
  methods: {
    onClick: function () {
      if(this.computedOptions.showOnMouseEnter || this.show) {
        return;
      }
      this.toggle();
    },
    onMouseEnter: function() {
      if(!this.computedOptions.showOnMouseEnter || this.show) {
        return;
      }
      this.toggle();
    },
    onMouseLeave: function() {
      if(!this.computedOptions.hideOnMouseLeave || !this.show) {
        return;
      }
      this.show = false;
    },
    toggle: function () {
      this.show = true;
      if(!this.options.hideOnMouseLeave) this.bind();
    },
    bind: function () {
      setTimeout(() => document.addEventListener('click', this.unbind), 0);
    },
    unbind: function () {
      document.removeEventListener('click', this.unbind);
      this.show = false;
    }
  },
  computed: {
    computedOptions: function() {
      return Object.assign(
        {},
        this.options,
        {hideOnMouseLeave: this.options.hasOwnProperty('hideOnMouseLeave') ?
          this.options.hideOnMouseLeave : this.options.showOnMouseEnter
        }
      );
    }
  }
});

export default tooltip;
