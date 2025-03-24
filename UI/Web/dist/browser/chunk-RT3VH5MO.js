import {
  TranslocoService,
  inject,
  ɵɵdefinePipe
} from "./chunk-PYHIUVNJ.js";

// src/app/_models/device/device-platform.ts
var DevicePlatform;
(function(DevicePlatform2) {
  DevicePlatform2[DevicePlatform2["Custom"] = 0] = "Custom";
  DevicePlatform2[DevicePlatform2["PocketBook"] = 1] = "PocketBook";
  DevicePlatform2[DevicePlatform2["Kindle"] = 2] = "Kindle";
  DevicePlatform2[DevicePlatform2["Kobo"] = 3] = "Kobo";
})(DevicePlatform || (DevicePlatform = {}));
var devicePlatforms = [DevicePlatform.Custom, DevicePlatform.Kindle, DevicePlatform.Kobo, DevicePlatform.PocketBook];

// src/app/_pipes/device-platform.pipe.ts
var DevicePlatformPipe = class _DevicePlatformPipe {
  constructor() {
    this.translocoService = inject(TranslocoService);
  }
  transform(value) {
    switch (value) {
      case DevicePlatform.Kindle:
        return "Kindle";
      case DevicePlatform.Kobo:
        return "Kobo";
      case DevicePlatform.PocketBook:
        return "PocketBook";
      case DevicePlatform.Custom:
        return this.translocoService.translate("device-platform-pipe.custom");
      default:
        return value + "";
    }
  }
  static {
    this.\u0275fac = function DevicePlatformPipe_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _DevicePlatformPipe)();
    };
  }
  static {
    this.\u0275pipe = \u0275\u0275definePipe({ name: "devicePlatform", type: _DevicePlatformPipe, pure: true, standalone: true });
  }
};

export {
  DevicePlatform,
  devicePlatforms,
  DevicePlatformPipe
};
//# sourceMappingURL=chunk-RT3VH5MO.js.map
