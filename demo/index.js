import Vue from 'vue';
import { app } from './components/app';

import './styles/bootstrap.scss';
import './styles/vars.scss';

const vm = new Vue({
  el: '#app',
  components: {
    app
  }
});
