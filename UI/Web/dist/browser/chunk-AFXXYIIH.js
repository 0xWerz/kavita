import {
  AccountService
} from "./chunk-U2DWQJI2.js";
import {
  ɵɵdefinePipe
} from "./chunk-PYHIUVNJ.js";

// src/app/_pipes/compact-number.pipe.ts
var specialCases = [4, 7, 10, 13];
var CompactNumberPipe = class _CompactNumberPipe {
  constructor() {
  }
  transform(value) {
    const key = localStorage.getItem(AccountService.localeKey)?.replace("_", "-");
    if (key?.endsWith("Hans")) {
      return this.transformValue(key?.split("-")[0] || "en", value);
    }
    return this.transformValue(key || "en", value);
  }
  transformValue(locale, value) {
    const formatter = new Intl.NumberFormat(locale, {
      notation: "compact",
      maximumSignificantDigits: 3
    });
    const formatterForDoublePrecision = new Intl.NumberFormat(locale, {
      notation: "compact",
      maximumSignificantDigits: 2
    });
    if (value < 1e3)
      return value + "";
    if (specialCases.includes((value + "").length)) {
      return formatterForDoublePrecision.format(value);
    }
    return formatter.format(value);
  }
  static {
    this.\u0275fac = function CompactNumberPipe_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CompactNumberPipe)();
    };
  }
  static {
    this.\u0275pipe = \u0275\u0275definePipe({ name: "compactNumber", type: _CompactNumberPipe, pure: true, standalone: true });
  }
};

export {
  CompactNumberPipe
};
//# sourceMappingURL=chunk-AFXXYIIH.js.map
