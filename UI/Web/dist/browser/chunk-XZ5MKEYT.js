import {
  HttpClient,
  environment
} from "./chunk-CQADFT7F.js";
import {
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-PYHIUVNJ.js";

// src/app/_services/member.service.ts
var MemberService = class _MemberService {
  constructor(httpClient) {
    this.httpClient = httpClient;
    this.baseUrl = environment.apiUrl;
  }
  getMembers(includePending = false) {
    return this.httpClient.get(this.baseUrl + "users?includePending=" + includePending);
  }
  getMemberNames() {
    return this.httpClient.get(this.baseUrl + "users/names");
  }
  getUserTokenInfo() {
    return this.httpClient.get(this.baseUrl + "users/tokens");
  }
  adminExists() {
    return this.httpClient.get(this.baseUrl + "admin/exists");
  }
  deleteMember(username) {
    return this.httpClient.delete(this.baseUrl + "users/delete-user?username=" + encodeURIComponent(username));
  }
  hasLibraryAccess(libraryId) {
    return this.httpClient.get(this.baseUrl + "users/has-library-access?libraryId=" + libraryId);
  }
  hasReadingProgress(libraryId) {
    return this.httpClient.get(this.baseUrl + "users/has-reading-progress?libraryId=" + libraryId);
  }
  addSeriesToWantToRead(seriesIds) {
    return this.httpClient.post(this.baseUrl + "want-to-read/add-series", { seriesIds });
  }
  removeSeriesToWantToRead(seriesIds) {
    return this.httpClient.post(this.baseUrl + "want-to-read/remove-series", { seriesIds });
  }
  getMember() {
    return this.httpClient.get(this.baseUrl + "users/myself");
  }
  static {
    this.\u0275fac = function MemberService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _MemberService)(\u0275\u0275inject(HttpClient));
    };
  }
  static {
    this.\u0275prov = \u0275\u0275defineInjectable({ token: _MemberService, factory: _MemberService.\u0275fac, providedIn: "root" });
  }
};

export {
  MemberService
};
//# sourceMappingURL=chunk-XZ5MKEYT.js.map
