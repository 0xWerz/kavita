import {
  ScrobbleProvider
} from "./chunk-R5PSFMI2.js";
import {
  ɵɵdefinePipe
} from "./chunk-PYHIUVNJ.js";

// src/app/_pipes/provider-image.pipe.ts
var ProviderImagePipe = class _ProviderImagePipe {
  transform(value, large = false) {
    switch (value) {
      case ScrobbleProvider.AniList:
        return `assets/images/ExternalServices/AniList${large ? "-lg" : ""}.png`;
      case ScrobbleProvider.Mal:
        return `assets/images/ExternalServices/MAL${large ? "-lg" : ""}.png`;
      case ScrobbleProvider.GoogleBooks:
        return `assets/images/ExternalServices/GoogleBooks${large ? "-lg" : ""}.png`;
      case ScrobbleProvider.Kavita:
        return `assets/images/logo-${large ? "64" : "32"}.png`;
    }
  }
  static {
    this.\u0275fac = function ProviderImagePipe_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ProviderImagePipe)();
    };
  }
  static {
    this.\u0275pipe = \u0275\u0275definePipe({ name: "providerImage", type: _ProviderImagePipe, pure: true, standalone: true });
  }
};

export {
  ProviderImagePipe
};
//# sourceMappingURL=chunk-E4IH7S3P.js.map
