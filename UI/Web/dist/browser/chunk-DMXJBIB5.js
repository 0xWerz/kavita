import {
  TranslocoService,
  ɵɵdefinePipe,
  ɵɵdirectiveInject
} from "./chunk-PYHIUVNJ.js";

// src/app/_pipes/default-date.pipe.ts
var DefaultDatePipe = class _DefaultDatePipe {
  constructor(translocoService) {
    this.translocoService = translocoService;
  }
  transform(value, replacementString = "default-date-pipe.never") {
    if (value === null || value === void 0 || value === "" || value === Infinity || Number.isNaN(value) || value === "1/1/01") {
      return this.translocoService.translate(replacementString);
    }
    ;
    return value;
  }
  static {
    this.\u0275fac = function DefaultDatePipe_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _DefaultDatePipe)(\u0275\u0275directiveInject(TranslocoService, 16));
    };
  }
  static {
    this.\u0275pipe = \u0275\u0275definePipe({ name: "defaultDate", type: _DefaultDatePipe, pure: true, standalone: true });
  }
};

export {
  DefaultDatePipe
};
//# sourceMappingURL=chunk-DMXJBIB5.js.map
