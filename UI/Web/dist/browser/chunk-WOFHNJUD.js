import {
  ChangeDetectorRef,
  NgZone,
  TranslocoService,
  ɵɵdefinePipe,
  ɵɵdirectiveInject
} from "./chunk-PYHIUVNJ.js";

// src/app/_pipes/time-ago.pipe.ts
var TimeAgoPipe = class _TimeAgoPipe {
  constructor(changeDetectorRef, ngZone, translocoService) {
    this.changeDetectorRef = changeDetectorRef;
    this.ngZone = ngZone;
    this.translocoService = translocoService;
    this.timer = null;
  }
  transform(value) {
    if (value === "" || value === null || value === void 0 || value instanceof String && value.split("T")[0] === "0001-01-01") {
      return this.translocoService.translate("time-ago-pipe.never");
    }
    this.removeTimer();
    const d = new Date(value);
    const now = /* @__PURE__ */ new Date();
    const seconds = Math.round(Math.abs((now.getTime() - d.getTime()) / 1e3));
    const timeToUpdate = Number.isNaN(seconds) ? 1e3 : this.getSecondsUntilUpdate(seconds) * 1e3;
    this.timer = this.ngZone.runOutsideAngular(() => {
      if (typeof window !== "undefined") {
        return window.setTimeout(() => {
          this.ngZone.run(() => this.changeDetectorRef.markForCheck());
        }, timeToUpdate);
      }
      return null;
    });
    const minutes = Math.round(Math.abs(seconds / 60));
    const hours = Math.round(Math.abs(minutes / 60));
    const days = Math.round(Math.abs(hours / 24));
    const months = Math.round(Math.abs(days / 30.416));
    const years = Math.round(Math.abs(days / 365));
    if (Number.isNaN(seconds)) {
      return "";
    }
    if (seconds <= 45) {
      return this.translocoService.translate("time-ago-pipe.just-now");
    }
    if (seconds <= 90) {
      return this.translocoService.translate("time-ago-pipe.min-ago");
    }
    if (minutes <= 45) {
      return this.translocoService.translate("time-ago-pipe.mins-ago", { value: minutes });
    }
    if (minutes <= 90) {
      return this.translocoService.translate("time-ago-pipe.hour-ago");
    }
    if (hours <= 22) {
      return this.translocoService.translate("time-ago-pipe.hours-ago", { value: hours });
    }
    if (hours <= 36) {
      return this.translocoService.translate("time-ago-pipe.day-ago");
    }
    if (days <= 25) {
      return this.translocoService.translate("time-ago-pipe.days-ago", { value: days });
    }
    if (days <= 45) {
      return this.translocoService.translate("time-ago-pipe.month-ago");
    }
    if (days <= 345) {
      return this.translocoService.translate("time-ago-pipe.months-ago", { value: months });
    }
    if (days <= 545) {
      return this.translocoService.translate("time-ago-pipe.year-ago");
    }
    return this.translocoService.translate("time-ago-pipe.years-ago", { value: years });
  }
  ngOnDestroy() {
    this.removeTimer();
  }
  removeTimer() {
    if (this.timer) {
      window.clearTimeout(this.timer);
      this.timer = null;
    }
  }
  getSecondsUntilUpdate(seconds) {
    const min = 60;
    const hr = min * 60;
    const day = hr * 24;
    if (seconds < min) {
      return 2;
    } else if (seconds < hr) {
      return 30;
    } else if (seconds < day) {
      return 300;
    } else {
      return 3600;
    }
  }
  static {
    this.\u0275fac = function TimeAgoPipe_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TimeAgoPipe)(\u0275\u0275directiveInject(ChangeDetectorRef, 16), \u0275\u0275directiveInject(NgZone, 16), \u0275\u0275directiveInject(TranslocoService, 16));
    };
  }
  static {
    this.\u0275pipe = \u0275\u0275definePipe({ name: "timeAgo", type: _TimeAgoPipe, pure: false, standalone: true });
  }
};

export {
  TimeAgoPipe
};
//# sourceMappingURL=chunk-WOFHNJUD.js.map
