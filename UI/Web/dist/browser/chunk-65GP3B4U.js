import {
  TextResonse
} from "./chunk-BPOUBDX2.js";
import {
  HttpClient,
  environment
} from "./chunk-CQADFT7F.js";
import {
  map,
  of,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-PYHIUVNJ.js";

// src/app/admin/settings.service.ts
var SettingsService = class _SettingsService {
  constructor(http) {
    this.http = http;
    this.baseUrl = environment.apiUrl;
  }
  getServerSettings() {
    return this.http.get(this.baseUrl + "settings");
  }
  getMetadataSettings() {
    return this.http.get(this.baseUrl + "settings/metadata-settings");
  }
  updateMetadataSettings(model) {
    return this.http.post(this.baseUrl + "settings/metadata-settings", model);
  }
  updateServerSettings(model) {
    return this.http.post(this.baseUrl + "settings", model);
  }
  resetServerSettings() {
    return this.http.post(this.baseUrl + "settings/reset", {});
  }
  resetIPAddressesSettings() {
    return this.http.post(this.baseUrl + "settings/reset-ip-addresses", {});
  }
  resetBaseUrl() {
    return this.http.post(this.baseUrl + "settings/reset-base-url", {});
  }
  testEmailServerSettings() {
    return this.http.post(this.baseUrl + "settings/test-email-url", {});
  }
  isEmailSetup() {
    return this.http.get(this.baseUrl + "server/is-email-setup", TextResonse).pipe(map((d) => d == "true"));
  }
  getTaskFrequencies() {
    return this.http.get(this.baseUrl + "settings/task-frequencies");
  }
  getLoggingLevels() {
    return this.http.get(this.baseUrl + "settings/log-levels");
  }
  getLibraryTypes() {
    return this.http.get(this.baseUrl + "settings/library-types");
  }
  getOpdsEnabled() {
    return this.http.get(this.baseUrl + "settings/opds-enabled", TextResonse).pipe(map((d) => d === "true"));
  }
  isValidCronExpression(val) {
    if (val === "" || val === void 0 || val === null)
      return of(false);
    return this.http.get(this.baseUrl + "settings/is-valid-cron?cronExpression=" + val, TextResonse).pipe(map((d) => d === "true"));
  }
  static {
    this.\u0275fac = function SettingsService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SettingsService)(\u0275\u0275inject(HttpClient));
    };
  }
  static {
    this.\u0275prov = \u0275\u0275defineInjectable({ token: _SettingsService, factory: _SettingsService.\u0275fac, providedIn: "root" });
  }
};

export {
  SettingsService
};
//# sourceMappingURL=chunk-65GP3B4U.js.map
