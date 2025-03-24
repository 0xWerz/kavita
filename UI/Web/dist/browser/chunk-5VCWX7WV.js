import {
  HttpClient,
  environment
} from "./chunk-CQADFT7F.js";
import {
  of,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-PYHIUVNJ.js";

// src/app/_models/search/search-result-group.ts
var SearchResultGroup = class {
  constructor() {
    this.libraries = [];
    this.series = [];
    this.collections = [];
    this.readingLists = [];
    this.persons = [];
    this.genres = [];
    this.tags = [];
    this.files = [];
    this.chapters = [];
    this.bookmarks = [];
  }
  reset() {
    this.libraries = [];
    this.series = [];
    this.collections = [];
    this.readingLists = [];
    this.persons = [];
    this.genres = [];
    this.tags = [];
    this.files = [];
    this.chapters = [];
    this.bookmarks = [];
  }
};

// src/app/_services/search.service.ts
var SearchService = class _SearchService {
  constructor(httpClient) {
    this.httpClient = httpClient;
    this.baseUrl = environment.apiUrl;
  }
  search(term, includeChapterAndFiles = false) {
    if (term === "") {
      return of(new SearchResultGroup());
    }
    return this.httpClient.get(this.baseUrl + `search/search?includeChapterAndFiles=${includeChapterAndFiles}&queryString=${encodeURIComponent(term)}`);
  }
  getSeriesForMangaFile(mangaFileId) {
    return this.httpClient.get(this.baseUrl + "search/series-for-mangafile?mangaFileId=" + mangaFileId);
  }
  getSeriesForChapter(chapterId) {
    return this.httpClient.get(this.baseUrl + "search/series-for-chapter?chapterId=" + chapterId);
  }
  static {
    this.\u0275fac = function SearchService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SearchService)(\u0275\u0275inject(HttpClient));
    };
  }
  static {
    this.\u0275prov = \u0275\u0275defineInjectable({ token: _SearchService, factory: _SearchService.\u0275fac, providedIn: "root" });
  }
};

export {
  SearchResultGroup,
  SearchService
};
//# sourceMappingURL=chunk-5VCWX7WV.js.map
