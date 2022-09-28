# vue-router-next-history

This is a hippy history mode for @hippy/vue-next. We copy source code from
[memory mode](https://github.com/vuejs/router/blob/main/packages/router/src/history/memory.ts) for vue-router and make a
small change. Current history position was exported to be access outside for other purpose.

And we will inject android hardware back press to execute router back by default. only exit app when there is no
 history back.


### How To Use
1. Install

```shell
# you should install @hippy/vue-next and vue-router first
npm install @hippy/vue-router-next-history --save-dev
```

2. Use

```javascript
// we used typescript
import type { Router } from 'vue-router';
import { createHippyRouter } from '@hippy/vue-router-next-history';
import App from './app.vue';

const routes = [
  {
    path: '/',
    component: App,
  },
  {
    path: '/path',
    component: App,
  }
];

const router: Router = createHippyRouter({
  routes,
});


router.push('/');
router.push('/path');

// now if you press android hardware back, it should back to path '/' first. then exit
// app at the second press


```