import {
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

// src/app/_services/person.service.ts
var PersonService = class _PersonService {
  constructor(httpClient, utilityService) {
    this.httpClient = httpClient;
    this.utilityService = utilityService;
    this.baseUrl = environment.apiUrl;
  }
  updatePerson(person) {
    return this.httpClient.post(this.baseUrl + "person/update", person);
  }
  get(name) {
    return this.httpClient.get(this.baseUrl + `person?name=${name}`);
  }
  getRolesForPerson(personId) {
    return this.httpClient.get(this.baseUrl + `person/roles?personId=${personId}`);
  }
  getSeriesMostKnownFor(personId) {
    return this.httpClient.get(this.baseUrl + `person/series-known-for?personId=${personId}`);
  }
  getChaptersByRole(personId, role) {
    return this.httpClient.get(this.baseUrl + `person/chapters-by-role?personId=${personId}&role=${role}`);
  }
  getAuthorsToBrowse(pageNum, itemsPerPage) {
    let params = new HttpParams();
    params = this.utilityService.addPaginationIfExists(params, pageNum, itemsPerPage);
    return this.httpClient.post(this.baseUrl + "person/all", {}, { observe: "response", params }).pipe(map((response) => {
      return this.utilityService.createPaginatedResult(response);
    }));
  }
  downloadCover(personId) {
    return this.httpClient.post(this.baseUrl + "person/fetch-cover?personId=" + personId, {}, TextResonse);
  }
  static {
    this.\u0275fac = function PersonService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _PersonService)(\u0275\u0275inject(HttpClient), \u0275\u0275inject(UtilityService));
    };
  }
  static {
    this.\u0275prov = \u0275\u0275defineInjectable({ token: _PersonService, factory: _PersonService.\u0275fac, providedIn: "root" });
  }
};

export {
  PersonService
};
//# sourceMappingURL=chunk-JDXHSOKB.js.map
