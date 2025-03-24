import {
  HttpClient,
  environment
} from "./chunk-CQADFT7F.js";
import {
  inject,
  ɵɵdefineInjectable
} from "./chunk-PYHIUVNJ.js";

// src/app/_services/manage.service.ts
var ManageService = class _ManageService {
  constructor() {
    this.baseUrl = environment.apiUrl;
    this.httpClient = inject(HttpClient);
  }
  getAllKavitaPlusSeries(filter) {
    return this.httpClient.post(this.baseUrl + `manage/series-metadata`, filter);
  }
  static {
    this.\u0275fac = function ManageService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ManageService)();
    };
  }
  static {
    this.\u0275prov = \u0275\u0275defineInjectable({ token: _ManageService, factory: _ManageService.\u0275fac, providedIn: "root" });
  }
};

// src/app/_models/kavitaplus/match-state-option.ts
var MatchStateOption;
(function(MatchStateOption2) {
  MatchStateOption2[MatchStateOption2["All"] = 0] = "All";
  MatchStateOption2[MatchStateOption2["Matched"] = 1] = "Matched";
  MatchStateOption2[MatchStateOption2["NotMatched"] = 2] = "NotMatched";
  MatchStateOption2[MatchStateOption2["Error"] = 3] = "Error";
  MatchStateOption2[MatchStateOption2["DontMatch"] = 4] = "DontMatch";
})(MatchStateOption || (MatchStateOption = {}));
var allMatchStates = [
  MatchStateOption.Matched,
  MatchStateOption.NotMatched,
  MatchStateOption.Error,
  MatchStateOption.DontMatch
];

export {
  ManageService,
  MatchStateOption,
  allMatchStates
};
//# sourceMappingURL=chunk-D3OMWBOU.js.map
