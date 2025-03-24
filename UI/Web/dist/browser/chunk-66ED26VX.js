import {
  ScrobbleProvider
} from "./chunk-R5PSFMI2.js";
import {
  ɵɵdefinePipe
} from "./chunk-PYHIUVNJ.js";

// src/app/_pipes/provider-name.pipe.ts
var ProviderNamePipe = class _ProviderNamePipe {
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
    this.\u0275fac = function ProviderNamePipe_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ProviderNamePipe)();
    };
  }
  static {
    this.\u0275pipe = \u0275\u0275definePipe({ name: "providerName", type: _ProviderNamePipe, pure: true, standalone: true });
  }
};

export {
  ProviderNamePipe
};
//# sourceMappingURL=chunk-66ED26VX.js.map
