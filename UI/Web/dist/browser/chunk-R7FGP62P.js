import {
  DomSanitizer
} from "./chunk-FLGYJHAG.js";
import {
  SecurityContext,
  inject,
  ɵɵdefinePipe
} from "./chunk-PYHIUVNJ.js";

// src/app/_pipes/safe-url.pipe.ts
var SafeUrlPipe = class _SafeUrlPipe {
  constructor() {
    this.dom = inject(DomSanitizer);
  }
  transform(value) {
    if (value === null || value === void 0)
      return null;
    return this.dom.sanitize(SecurityContext.URL, value);
  }
  static {
    this.\u0275fac = function SafeUrlPipe_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SafeUrlPipe)();
    };
  }
  static {
    this.\u0275pipe = \u0275\u0275definePipe({ name: "safeUrl", type: _SafeUrlPipe, pure: true, standalone: true });
  }
};

export {
  SafeUrlPipe
};
//# sourceMappingURL=chunk-R7FGP62P.js.map
