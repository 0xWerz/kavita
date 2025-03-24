import {
  TranslocoService,
  ɵɵdefinePipe,
  ɵɵdirectiveInject
} from "./chunk-PYHIUVNJ.js";

// src/app/_pipes/read-time.pipe.ts
var ReadTimePipe = class _ReadTimePipe {
  constructor(translocoService) {
    this.translocoService = translocoService;
  }
  transform(readingTime) {
    if (readingTime.maxHoursToRead === 0 || readingTime.minHoursToRead === 0) {
      return this.translocoService.translate("read-time-pipe.less-than-hour");
    } else {
      return `${readingTime.minHoursToRead}${readingTime.maxHoursToRead !== readingTime.minHoursToRead ? "-" + readingTime.maxHoursToRead : ""} ${readingTime.minHoursToRead > 1 ? this.translocoService.translate("read-time-pipe.hours") : this.translocoService.translate("read-time-pipe.hour")}`;
    }
  }
  static {
    this.\u0275fac = function ReadTimePipe_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ReadTimePipe)(\u0275\u0275directiveInject(TranslocoService, 16));
    };
  }
  static {
    this.\u0275pipe = \u0275\u0275definePipe({ name: "readTime", type: _ReadTimePipe, pure: true, standalone: true });
  }
};

export {
  ReadTimePipe
};
//# sourceMappingURL=chunk-SXNBP4JN.js.map
