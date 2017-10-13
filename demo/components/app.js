import Vue from 'vue';

import acronyms from '../../src/acronyms';
import thAcronymsTooltip from '../../src/acronyms-tooltip';

import './components.scss';

export const app = Vue.component('app', {
  data: () => ({
    acronyms: {
      'TFSA': 'Tax-Free Savings Account',
      'RRSP': 'Registered Retirement Savings Plan'
    },
    acronyms2: {
      'TFSA': '<a href="https://en.wikipedia.org/wiki/Tax-Free_Savings_Account" target="_blank">Tax-Free Savings Account</a>',
      'RRSP': '<a href="https://en.wikipedia.org/wiki/Registered_Retirement_Savings_Plan" target="_blank">Registered Retirement Savings Plan</a>'
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
          <p>
            It is important to remember though that sometimes a TFSA is a better place for you be saving than your RRSP.  Having said that, if you have enough dough to contribute to both a TFSA and your RRSP, you can contribute to your RRSP BUT hold off on using it as a tax deduction until future, more income-generating years (use Schedule 7 for this).
          </p>
        </div>
      </div>

      <div class="panel panel-default">
        <div class="panel-heading">
          Some text full of acronyms with disambiguation in tooltip (shows on hover)
        </div>
        <div class="panel-body">
          <th-acronyms-tooltip :acronyms="acronyms2">
            It is important to remember though that sometimes a TFSA is a better place for you be saving than your RRSP.  Having said that, if you have enough dough to contribute to both a TFSA and your RRSP, you can contribute to your RRSP BUT hold off on using it as a tax deduction until future, more income-generating years (use Schedule 7 for this). <a> Click me buddy! <span>Even more stuff TFSA</span></a>
          </th-acronyms-tooltip>
        </div>
      </div>
       
             <div class="panel panel-default">
        <div class="panel-heading">
          Some text full of acronyms with disambiguation in tooltip (shows on click)
        </div>
        <div class="panel-body">
          <th-acronyms-tooltip :acronyms="acronyms2" :options="{showOnMouseEnter: true}">
            <p>
              It is important to remember though that sometimes a TFSA is a better place for you be saving than your RRSP.  Having said that, if you have enough dough to contribute to both a TFSA and your RRSP, you can contribute to your RRSP BUT hold off on using it as a tax deduction until future, more income-generating years (use Schedule 7 for this). 
            </p>
            <div>
              To be noted:
            </div>
            <b>
              <p>
                It also works on deeply nested html structure as the component recursively compile its 
                <span>children: TFSA</span>
              </p>
            </b>
          </th-acronyms-tooltip>
        </div>
      </div>
    </div>
   `,
  methods: {},
  components: {
    thAcronymsTooltip
  }
});

