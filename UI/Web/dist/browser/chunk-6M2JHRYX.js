import {
  HttpClient,
  environment
} from "./chunk-CQADFT7F.js";
import {
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-PYHIUVNJ.js";

// src/app/_services/filter.service.ts
var FilterService = class _FilterService {
  constructor(httpClient) {
    this.httpClient = httpClient;
    this.baseUrl = environment.apiUrl;
  }
  saveFilter(filter) {
    return this.httpClient.post(this.baseUrl + "filter/update", filter);
  }
  getAllFilters() {
    return this.httpClient.get(this.baseUrl + "filter");
  }
  deleteFilter(filterId) {
    return this.httpClient.delete(this.baseUrl + "filter?filterId=" + filterId);
  }
  static {
    this.\u0275fac = function FilterService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _FilterService)(\u0275\u0275inject(HttpClient));
    };
  }
  static {
    this.\u0275prov = \u0275\u0275defineInjectable({ token: _FilterService, factory: _FilterService.\u0275fac, providedIn: "root" });
  }
};

export {
  FilterService
};
//# sourceMappingURL=chunk-6M2JHRYX.js.map
