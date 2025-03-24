import {
  TranslocoService,
  ɵɵdefinePipe,
  ɵɵdirectiveInject
} from "./chunk-PYHIUVNJ.js";

// src/app/_models/metadata/publication-status.ts
var PublicationStatus;
(function(PublicationStatus2) {
  PublicationStatus2[PublicationStatus2["OnGoing"] = 0] = "OnGoing";
  PublicationStatus2[PublicationStatus2["Hiatus"] = 1] = "Hiatus";
  PublicationStatus2[PublicationStatus2["Completed"] = 2] = "Completed";
  PublicationStatus2[PublicationStatus2["Cancelled"] = 3] = "Cancelled";
  PublicationStatus2[PublicationStatus2["Ended"] = 4] = "Ended";
})(PublicationStatus || (PublicationStatus = {}));

// src/app/_pipes/publication-status.pipe.ts
var PublicationStatusPipe = class _PublicationStatusPipe {
  constructor(translocoService) {
    this.translocoService = translocoService;
  }
  transform(value) {
    switch (value) {
      case PublicationStatus.OnGoing:
        return this.translocoService.translate("publication-status-pipe.ongoing");
      case PublicationStatus.Hiatus:
        return this.translocoService.translate("publication-status-pipe.hiatus");
      case PublicationStatus.Completed:
        return this.translocoService.translate("publication-status-pipe.completed");
      case PublicationStatus.Cancelled:
        return this.translocoService.translate("publication-status-pipe.cancelled");
      case PublicationStatus.Ended:
        return this.translocoService.translate("publication-status-pipe.ended");
      default:
        return "";
    }
  }
  static {
    this.\u0275fac = function PublicationStatusPipe_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _PublicationStatusPipe)(\u0275\u0275directiveInject(TranslocoService, 16));
    };
  }
  static {
    this.\u0275pipe = \u0275\u0275definePipe({ name: "publicationStatus", type: _PublicationStatusPipe, pure: true, standalone: true });
  }
};

export {
  PublicationStatus,
  PublicationStatusPipe
};
//# sourceMappingURL=chunk-XZ2P7HP2.js.map
