import {
  ɵɵdefinePipe
} from "./chunk-PYHIUVNJ.js";

// src/app/_pipes/default-value.pipe.ts
var DefaultValuePipe = class _DefaultValuePipe {
  transform(value, replacementString = "\u2014") {
    if (value === null || value === void 0 || value === "" || value === Infinity || Number.isNaN(value))
      return replacementString;
    return value;
  }
  static {
    this.\u0275fac = function DefaultValuePipe_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _DefaultValuePipe)();
    };
  }
  static {
    this.\u0275pipe = \u0275\u0275definePipe({ name: "defaultValue", type: _DefaultValuePipe, pure: true, standalone: true });
  }
};

export {
  DefaultValuePipe
};
//# sourceMappingURL=chunk-KMTIWVED.js.map
