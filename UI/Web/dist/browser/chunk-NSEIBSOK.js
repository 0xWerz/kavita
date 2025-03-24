import {
  TextResonse
} from "./chunk-BPOUBDX2.js";
import {
  HttpClient,
  environment
} from "./chunk-CQADFT7F.js";
import {
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-PYHIUVNJ.js";

// src/app/_services/dashboard.service.ts
var DashboardService = class _DashboardService {
  constructor(httpClient) {
    this.httpClient = httpClient;
    this.baseUrl = environment.apiUrl;
  }
  getDashboardStreams(visibleOnly = true) {
    return this.httpClient.get(this.baseUrl + "stream/dashboard?visibleOnly=" + visibleOnly);
  }
  updateDashboardStreamPosition(streamName, dashboardStreamId, fromPosition, toPosition) {
    return this.httpClient.post(this.baseUrl + "stream/update-dashboard-position", { streamName, id: dashboardStreamId, fromPosition, toPosition }, TextResonse);
  }
  updateDashboardStream(stream) {
    return this.httpClient.post(this.baseUrl + "stream/update-dashboard-stream", stream, TextResonse);
  }
  createDashboardStream(smartFilterId) {
    return this.httpClient.post(this.baseUrl + "stream/add-dashboard-stream?smartFilterId=" + smartFilterId, {});
  }
  static {
    this.\u0275fac = function DashboardService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _DashboardService)(\u0275\u0275inject(HttpClient));
    };
  }
  static {
    this.\u0275prov = \u0275\u0275defineInjectable({ token: _DashboardService, factory: _DashboardService.\u0275fac, providedIn: "root" });
  }
};

export {
  DashboardService
};
//# sourceMappingURL=chunk-NSEIBSOK.js.map
