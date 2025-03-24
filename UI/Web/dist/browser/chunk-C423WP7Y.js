import {
  ɵɵdefinePipe
} from "./chunk-PYHIUVNJ.js";

// src/app/_pipes/bytes.pipe.ts
var BytesPipe = class _BytesPipe {
  transform(bytes, si = true, dp = 1) {
    const thresh = si ? 1e3 : 1024;
    if (Math.abs(bytes) < thresh) {
      return bytes + " B";
    }
    const units = si ? ["kB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"] : ["KiB", "MiB", "GiB", "TiB", "PiB", "EiB", "ZiB", "YiB"];
    let u = -1;
    const r = 10 ** dp;
    do {
      bytes /= thresh;
      ++u;
    } while (Math.round(Math.abs(bytes) * r) / r >= thresh && u < units.length - 1);
    const fixed = bytes.toFixed(dp);
    if ((fixed + "").endsWith(".0")) {
      return bytes.toFixed(0) + " " + units[u];
    }
    return fixed + " " + units[u];
  }
  static {
    this.\u0275fac = function BytesPipe_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _BytesPipe)();
    };
  }
  static {
    this.\u0275pipe = \u0275\u0275definePipe({ name: "bytes", type: _BytesPipe, pure: true, standalone: true });
  }
};

export {
  BytesPipe
};
//# sourceMappingURL=chunk-C423WP7Y.js.map
