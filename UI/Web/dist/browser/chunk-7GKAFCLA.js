import {
  NavigationEnd,
  Router
} from "./chunk-U2DWQJI2.js";
import {
  ReplaySubject,
  filter,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-PYHIUVNJ.js";

// src/app/_services/scroll.service.ts
var ScrollService = class _ScrollService {
  constructor(router) {
    this.scrollContainerSource = new ReplaySubject(1);
    this.scrollContainer$ = this.scrollContainerSource.asObservable();
    router.events.pipe(filter((event) => event instanceof NavigationEnd)).subscribe(() => {
      this.scrollContainerSource.next("body");
    });
    this.scrollContainerSource.next("body");
  }
  get scrollPosition() {
    return window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
  }
  get scrollPositionX() {
    return window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft || 0;
  }
  scrollTo(top, el = window, behavior = "smooth") {
    el.scroll({
      top,
      behavior
    });
  }
  scrollToX(left, el = window, behavior = "auto") {
    el.scroll({
      left,
      behavior
    });
  }
  setScrollContainer(elem) {
    if (elem !== void 0) {
      this.scrollContainerSource.next(elem);
    }
  }
  static {
    this.\u0275fac = function ScrollService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ScrollService)(\u0275\u0275inject(Router));
    };
  }
  static {
    this.\u0275prov = \u0275\u0275defineInjectable({ token: _ScrollService, factory: _ScrollService.\u0275fac, providedIn: "root" });
  }
};

export {
  ScrollService
};
//# sourceMappingURL=chunk-7GKAFCLA.js.map
