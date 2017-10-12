import Vue from 'vue';

const acronyms = Vue.directive('acronyms', {
  isLiteral: false,
  bind: function(el, bindings) {
    const regex = new RegExp('\\b' + Object.keys(bindings.value).join('|') + '\\b', 'g');

    el.innerHTML = el.innerHTML.replace(regex, key =>
      `<span class="v-acronyms" title="${bindings.value[key]}">${key}</span>`
    );
  }
});

export default acronyms;