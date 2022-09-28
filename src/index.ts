/**
 * hippy history implement, reference memory history of vue-router
 *
 * https://github.com/vuejs/router/blob/main/packages/router/src/history/memory.ts
 */
import { type Router, createRouter, type RouterHistory, type RouteRecordRaw } from 'vue-router';
import { BackAndroid, Native } from '@hippy/vue-next';
import { type HippyRouterHistory, createHippyHistory } from './history';

/**
 * inject android hardware back press to execute router operate
 *
 * @param router - router instance
 *
 * @public
 */
function injectAndroidHardwareBackPress(router: Router) {
  if (Native.isAndroid()) {
    function hardwareBackPress() {
      const { position } = router.options.history as HippyRouterHistory;
      if (position > 0) {
        // has other history, go back
        router.back();
        return true;
      }
      // if no any other history, exit app
    }

    // Enable hardware back event and listen the hardware back event and redirect to history.
    BackAndroid.addListener(hardwareBackPress);
  }
}

/**
 * create hippy router that inject android hardware back press default
 *
 * @param options - router options
 *
 * @public
 */
export function createHippyRouter(options: {
  history?: RouterHistory;
  routes: Readonly<RouteRecordRaw[]>;
}): Router {
  const router: Router = createRouter({
    history: options.history ?? createHippyHistory(),
    routes: options.routes,
  });

  // inject android hardware back
  injectAndroidHardwareBackPress(router);

  return router;
}
