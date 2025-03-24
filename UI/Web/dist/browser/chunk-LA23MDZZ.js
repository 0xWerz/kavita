import {
  ScrobbleProvider
} from "./chunk-R5PSFMI2.js";
import {
  ɵɵdefinePipe
} from "./chunk-PYHIUVNJ.js";

// src/app/_pipes/scrobble-provider-name.pipe.ts
var ScrobbleProviderNamePipe = class _ScrobbleProviderNamePipe {
  transform(value) {
    switch (value) {
      case ScrobbleProvider.AniList:
        return "AniList";
      case ScrobbleProvider.Mal:
        return "MAL";
      case ScrobbleProvider.Kavita:
        return "Kavita";
      case ScrobbleProvider.GoogleBooks:
        return "Google Books";
    }
  }
  static {
    this.\u0275fac = function ScrobbleProviderNamePipe_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ScrobbleProviderNamePipe)();
    };
  }
  static {
    this.\u0275pipe = \u0275\u0275definePipe({ name: "scrobbleProviderName", type: _ScrobbleProviderNamePipe, pure: true, standalone: true });
  }
};

export {
  ScrobbleProviderNamePipe
};
//# sourceMappingURL=chunk-LA23MDZZ.js.map
