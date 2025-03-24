import {
  ɵɵdefinePipe
} from "./chunk-PYHIUVNJ.js";

// src/app/_pipes/filter.pipe.ts
var FilterPipe = class _FilterPipe {
  transform(items, callback) {
    if (!items || !callback) {
      return items;
    }
    const ret = items.filter((item) => callback(item));
    if (ret.length === items.length)
      return items;
    return ret;
  }
  static {
    this.\u0275fac = function FilterPipe_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _FilterPipe)();
    };
  }
  static {
    this.\u0275pipe = \u0275\u0275definePipe({ name: "filter", type: _FilterPipe, pure: false, standalone: true });
  }
};

export {
  FilterPipe
};
//# sourceMappingURL=chunk-NGXWDHM5.js.map
