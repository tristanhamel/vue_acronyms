import Vue from 'vue';

// lookup registered acronyms in node's text and replace them with component
function replaceAcronyms(createElement, text, acronymsMap) {
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
      return createElement('tooltip', {attrs: {
        tooltipTitle: chunk,
        tooltipContent: acronymsMap[chunk]
      }});
    });
}

// recursively traverses nodes array
function makeTree(nodes, createElement, acronymsMap) {
  return nodes
    .map(node => {
      if(node.children) {
        return createElement(
          node.tag,
          {},
          makeTree(node.children, createElement, acronymsMap)
        );
      }

      if(node.text) {
        return replaceAcronyms(createElement, node.text, acronymsMap);
      }
    });
}

const acronymsTooltip = Vue.component('acronyms-tooltip', {
  props: {
    acronyms: Object
  },
  render: function (createElement) {
    const childrenArray = makeTree(this.$slots.default, createElement, this.acronyms);
    return createElement('div', {}, childrenArray);
  }
});

export default acronymsTooltip;