import {
  ɵɵdefinePipe
} from "./chunk-PYHIUVNJ.js";

// src/app/_pipes/sentence-case.pipe.ts
var SentenceCasePipe = class _SentenceCasePipe {
  transform(value) {
    if (value === null || value === void 0)
      return "";
    return value.charAt(0).toUpperCase() + value.substring(1);
  }
  static {
    this.\u0275fac = function SentenceCasePipe_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SentenceCasePipe)();
    };
  }
  static {
    this.\u0275pipe = \u0275\u0275definePipe({ name: "sentenceCase", type: _SentenceCasePipe, pure: true, standalone: true });
  }
};

export {
  SentenceCasePipe
};
//# sourceMappingURL=chunk-IQIEDCQT.js.map
