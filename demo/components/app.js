import Vue from 'vue';

import acronyms from '../../src/acronyms';
import acronymsTooltip from '../../src/acronyms-tooltip';
import tooltip from '../../src/tooltip';

import './components.scss';

export const app = Vue.component('app', {
  data: () => ({
    acronyms: {
      'TFSA': 'Tax-Free Savings Account',
      'RRSP': 'Registered Retirement Savings Plan'
    },
    acronyms2: {
      'TFSA': '<a>Tax-Free Savings Account</a>',
      'RRSP': '<a>Registered Retirement Savings Plan</a>'
    }
  }),
  template: `
    <div class="container">
      <div class="page-header">
        <h1>
          Vue Acronyms
        </h1>
      </div>
      <div class="panel panel-default">
        <div class="panel-heading">
          Some text full of acronyms with disambiguation in info field
        </div>
        <div class="panel-body" v-acronyms="acronyms">
          It is important to remember though that sometimes a TFSA is a better place for you be saving than your RRSP.  Having said that, if you have enough dough to contribute to both a TFSA and your RRSP, you can contribute to your RRSP BUT hold off on using it as a tax deduction until future, more income-generating years (use Schedule 7 for this).
        </div>
      </div>
            <div class="panel panel-default">
        <div class="panel-heading">
          Some text full of acronyms with disambiguation in tooltip
        </div>
        <div class="panel-body">
          <acronyms-tooltip :acronyms="acronyms2">
            It is important to remember though that sometimes a TFSA is a better place for you be saving than your RRSP.  Having said that, if you have enough dough to contribute to both a TFSA and your RRSP, you can contribute to your RRSP BUT hold off on using it as a tax deduction until future, more income-generating years (use Schedule 7 for this). <a> Click me buddy! <span>Even more stuff TFSA</span></a>
          </acronyms-tooltip>
        </div>
      </div>
      <tooltip tooltipTitle="test" tooltipContent="'<a>click me!</a>'"></tooltip> 
    </div>
   `,
  methods: {},
  components: {
    tooltip,
    acronymsTooltip
  }
});

