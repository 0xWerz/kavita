import {
  FilterCombination,
  FilterComparison,
  FilterField,
  MetadataService,
  SortField
} from "./chunk-IBO6ECG5.js";
import {
  Router
} from "./chunk-U2DWQJI2.js";
import {
  TextResonse
} from "./chunk-BPOUBDX2.js";
import {
  HttpClient,
  environment
} from "./chunk-CQADFT7F.js";
import {
  Location,
  inject,
  map,
  of,
  switchMap,
  tap,
  ɵɵdefineInjectable
} from "./chunk-PYHIUVNJ.js";

// src/app/shared/_services/filter-utilities.service.ts
var FilterUtilitiesService = class _FilterUtilitiesService {
  constructor() {
    this.location = inject(Location);
    this.router = inject(Router);
    this.metadataService = inject(MetadataService);
    this.http = inject(HttpClient);
    this.apiUrl = environment.apiUrl;
  }
  encodeFilter(filter) {
    return this.http.post(this.apiUrl + "filter/encode", filter, TextResonse);
  }
  decodeFilter(encodedFilter) {
    return this.http.post(this.apiUrl + "filter/decode", { encodedFilter }).pipe(map((filter) => {
      if (filter == null) {
        filter = this.metadataService.createDefaultFilterDto();
        filter.statements.push(this.createSeriesV2DefaultStatement());
      }
      return filter;
    }));
  }
  updateUrlFromFilter(filter) {
    return this.encodeFilter(filter).pipe(tap((encodedFilter) => {
      window.history.replaceState(window.location.href, "", window.location.href.split("?")[0] + "?" + encodedFilter);
    }));
  }
  filterPresetsFromUrl(snapshot) {
    const filter = this.metadataService.createDefaultFilterDto();
    filter.statements.push(this.createSeriesV2DefaultStatement());
    if (!window.location.href.includes("?"))
      return of(filter);
    return this.decodeFilter(window.location.href.split("?")[1]);
  }
  applyFilter(page, filter, comparison, value) {
    const dto = this.createSeriesV2Filter();
    dto.statements.push(this.metadataService.createDefaultFilterStatement(filter, comparison, value + ""));
    return this.encodeFilter(dto).pipe(switchMap((encodedFilter) => {
      return this.router.navigateByUrl(page.join("/") + "?" + encodedFilter);
    }));
  }
  applyFilterWithParams(page, filter, extraParams) {
    return this.encodeFilter(filter).pipe(switchMap((encodedFilter) => {
      let url = page.join("/") + "?" + encodedFilter;
      url += Object.keys(extraParams).map((k) => `&${k}=${extraParams[k]}`).join("");
      return this.router.navigateByUrl(url, extraParams);
    }));
  }
  createSeriesV2Filter() {
    return {
      combination: FilterCombination.And,
      statements: [],
      limitTo: 0,
      sortOptions: {
        isAscending: true,
        sortField: SortField.SortName
      }
    };
  }
  createSeriesV2DefaultStatement() {
    return {
      comparison: FilterComparison.Equal,
      value: "",
      field: FilterField.SeriesName
    };
  }
  static {
    this.\u0275fac = function FilterUtilitiesService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _FilterUtilitiesService)();
    };
  }
  static {
    this.\u0275prov = \u0275\u0275defineInjectable({ token: _FilterUtilitiesService, factory: _FilterUtilitiesService.\u0275fac, providedIn: "root" });
  }
};

export {
  FilterUtilitiesService
};
//# sourceMappingURL=chunk-SBBWMOEE.js.map
