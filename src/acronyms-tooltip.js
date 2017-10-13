import Vue from 'vue';

import tooltip from './tooltip';

// lookup registered acronyms in node's text and replace them with component
function replaceAcronyms(createElement, text, acronymsMap, options) {
  const keys = Object.keys(acronymsMap);
  const regex = new RegExp('\\b(' + keys.join('|') + ')\\b', 'g');

  // we split the text and keep delimiters in the array
  return text
    .split(regex)
    // we replace delimiters by custom tooltip components
    .map(chunk => {
      if(!keys.includes(chunk)) {
        return chunk;
      }
      return createElement('th-tooltip', {attrs: {
        tooltipTitle: chunk,
        tooltipContent: acronymsMap[chunk],
        options
      }});
    });
}

// recursively traverses nodes array
function makeTree(nodes, createElement, acronymsMap, options) {
  return nodes
    .map(node => {
      if(node.children) {
        return createElement(
          node.tag,
          {},
          makeTree(node.children, createElement, acronymsMap, options)
        );
      }

      if(node.text) {
        return replaceAcronyms(createElement, node.text, acronymsMap, options);
      }
    });
}

const acronymsTooltip = Vue.component('acronyms-tooltip', {
  props: {
    acronyms: Object,
    options: Object
  },
  render: function (createElement) {
    const childrenArray = makeTree(this.$slots.default, createElement, this.acronyms, this.options);
    return createElement('div', {}, childrenArray);
  },
  components: {
    tooltip
  }
});

export default acronymsTooltip;