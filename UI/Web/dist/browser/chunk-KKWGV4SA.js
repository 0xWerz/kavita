import {
  TextResonse
} from "./chunk-BPOUBDX2.js";
import {
  HttpClient,
  environment
} from "./chunk-CQADFT7F.js";
import {
  map,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-PYHIUVNJ.js";

// src/app/_services/server.service.ts
var ServerService = class _ServerService {
  constructor(http) {
    this.http = http;
    this.baseUrl = environment.apiUrl;
  }
  getVersion(apiKey) {
    return this.http.get(this.baseUrl + "plugin/version?apiKey=" + apiKey, TextResonse);
  }
  getServerInfo() {
    return this.http.get(this.baseUrl + "server/server-info-slim");
  }
  clearCache() {
    return this.http.post(this.baseUrl + "server/clear-cache", {});
  }
  cleanupWantToRead() {
    return this.http.post(this.baseUrl + "server/cleanup-want-to-read", {});
  }
  cleanup() {
    return this.http.post(this.baseUrl + "server/cleanup", {});
  }
  backupDatabase() {
    return this.http.post(this.baseUrl + "server/backup-db", {});
  }
  syncThemes() {
    return this.http.post(this.baseUrl + "server/sync-themes", {});
  }
  checkForUpdate() {
    return this.http.get(this.baseUrl + "server/check-update");
  }
  checkHowOutOfDate(stableOnly = true) {
    return this.http.get(this.baseUrl + `server/check-out-of-date?stableOnly=${stableOnly}`, TextResonse).pipe(map((r) => parseInt(r, 10)));
  }
  getChangelog(count = 0) {
    return this.http.get(this.baseUrl + "server/changelog?count=" + count, {});
  }
  getRecurringJobs() {
    return this.http.get(this.baseUrl + "server/jobs");
  }
  convertMedia() {
    return this.http.post(this.baseUrl + "server/convert-media", {});
  }
  bustCache() {
    return this.http.post(this.baseUrl + "server/bust-kavitaplus-cache", {});
  }
  getMediaErrors() {
    return this.http.get(this.baseUrl + "server/media-errors", {});
  }
  clearMediaAlerts() {
    return this.http.post(this.baseUrl + "server/clear-media-alerts", {});
  }
  static {
    this.\u0275fac = function ServerService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ServerService)(\u0275\u0275inject(HttpClient));
    };
  }
  static {
    this.\u0275prov = \u0275\u0275defineInjectable({ token: _ServerService, factory: _ServerService.\u0275fac, providedIn: "root" });
  }
};

export {
  ServerService
};
//# sourceMappingURL=chunk-KKWGV4SA.js.map
