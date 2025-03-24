import {
  PaginatedResult,
  UtilityService
} from "./chunk-A6JEQ5GB.js";
import {
  TextResonse
} from "./chunk-BPOUBDX2.js";
import {
  HttpClient,
  HttpParams,
  environment
} from "./chunk-CQADFT7F.js";
import {
  map,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-PYHIUVNJ.js";

// src/app/_services/scrobbling.service.ts
var ScrobbleProvider;
(function(ScrobbleProvider2) {
  ScrobbleProvider2[ScrobbleProvider2["Kavita"] = 0] = "Kavita";
  ScrobbleProvider2[ScrobbleProvider2["AniList"] = 1] = "AniList";
  ScrobbleProvider2[ScrobbleProvider2["Mal"] = 2] = "Mal";
  ScrobbleProvider2[ScrobbleProvider2["GoogleBooks"] = 3] = "GoogleBooks";
})(ScrobbleProvider || (ScrobbleProvider = {}));
var ScrobblingService = class _ScrobblingService {
  constructor(httpClient, utilityService) {
    this.httpClient = httpClient;
    this.utilityService = utilityService;
    this.baseUrl = environment.apiUrl;
  }
  hasTokenExpired(provider) {
    return this.httpClient.get(this.baseUrl + "scrobbling/token-expired?provider=" + provider, TextResonse).pipe(map((r) => r === "true"));
  }
  updateAniListToken(token) {
    return this.httpClient.post(this.baseUrl + "scrobbling/update-anilist-token", { token }, TextResonse).pipe(map((r) => r + "" === "true"));
  }
  updateMalToken(username, accessToken) {
    return this.httpClient.post(this.baseUrl + "scrobbling/update-mal-token", { username, accessToken }, TextResonse).pipe(map((r) => r + "" === "true"));
  }
  getAniListToken() {
    return this.httpClient.get(this.baseUrl + "scrobbling/anilist-token", TextResonse);
  }
  getMalToken() {
    return this.httpClient.get(this.baseUrl + "scrobbling/mal-token");
  }
  getScrobbleErrors() {
    return this.httpClient.get(this.baseUrl + "scrobbling/scrobble-errors");
  }
  getScrobbleEvents(filter, pageNum = void 0, itemsPerPage = void 0) {
    let params = new HttpParams();
    params = this.utilityService.addPaginationIfExists(params, pageNum, itemsPerPage);
    return this.httpClient.post(this.baseUrl + "scrobbling/scrobble-events", filter, { observe: "response", params }).pipe(map((response) => {
      return this.utilityService.createPaginatedResult(response, new PaginatedResult());
    }));
  }
  clearScrobbleErrors() {
    return this.httpClient.post(this.baseUrl + "scrobbling/clear-errors", {});
  }
  getHolds() {
    return this.httpClient.get(this.baseUrl + "scrobbling/holds");
  }
  libraryAllowsScrobbling(seriesId) {
    return this.httpClient.get(this.baseUrl + "scrobbling/library-allows-scrobbling?seriesId=" + seriesId, TextResonse).pipe(map((res) => res === "true"));
  }
  hasHold(seriesId) {
    return this.httpClient.get(this.baseUrl + "scrobbling/has-hold?seriesId=" + seriesId, TextResonse).pipe(map((res) => res === "true"));
  }
  addHold(seriesId) {
    return this.httpClient.post(this.baseUrl + "scrobbling/add-hold?seriesId=" + seriesId, TextResonse);
  }
  removeHold(seriesId) {
    return this.httpClient.delete(this.baseUrl + "scrobbling/remove-hold?seriesId=" + seriesId, TextResonse);
  }
  triggerScrobbleEventGeneration() {
    return this.httpClient.post(this.baseUrl + "scrobbling/generate-scrobble-events", TextResonse);
  }
  static {
    this.\u0275fac = function ScrobblingService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ScrobblingService)(\u0275\u0275inject(HttpClient), \u0275\u0275inject(UtilityService));
    };
  }
  static {
    this.\u0275prov = \u0275\u0275defineInjectable({ token: _ScrobblingService, factory: _ScrobblingService.\u0275fac, providedIn: "root" });
  }
};

export {
  ScrobbleProvider,
  ScrobblingService
};
//# sourceMappingURL=chunk-R5PSFMI2.js.map
