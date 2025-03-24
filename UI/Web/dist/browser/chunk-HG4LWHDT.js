import {
  ImageService
} from "./chunk-TPURWX2Y.js";
import {
  QueryContext
} from "./chunk-BX5PUGWH.js";
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

// src/app/_services/series.service.ts
var SeriesService = class _SeriesService {
  constructor(httpClient, imageService, utilityService) {
    this.httpClient = httpClient;
    this.imageService = imageService;
    this.utilityService = utilityService;
    this.baseUrl = environment.apiUrl;
    this.paginatedResults = new PaginatedResult();
    this.paginatedSeriesForTagsResults = new PaginatedResult();
  }
  getAllSeriesV2(pageNum, itemsPerPage, filter, context = QueryContext.None) {
    let params = new HttpParams();
    params = this.utilityService.addPaginationIfExists(params, pageNum, itemsPerPage);
    const data = filter || {};
    return this.httpClient.post(this.baseUrl + "series/all-v2?context=" + context, data, { observe: "response", params }).pipe(map((response) => {
      return this.utilityService.createPaginatedResult(response, this.paginatedResults);
    }));
  }
  getSeriesForLibraryV2(pageNum, itemsPerPage, filter) {
    let params = new HttpParams();
    params = this.utilityService.addPaginationIfExists(params, pageNum, itemsPerPage);
    const data = filter || {};
    return this.httpClient.post(this.baseUrl + "series/v2", data, { observe: "response", params }).pipe(map((response) => {
      return this.utilityService.createPaginatedResult(response, this.paginatedResults);
    }));
  }
  getAllSeriesByIds(seriesIds) {
    return this.httpClient.post(this.baseUrl + "series/series-by-ids", { seriesIds });
  }
  getSeries(seriesId) {
    return this.httpClient.get(this.baseUrl + "series/" + seriesId);
  }
  getVolumes(seriesId) {
    return this.httpClient.get(this.baseUrl + "series/volumes?seriesId=" + seriesId);
  }
  getChapter(chapterId) {
    return this.httpClient.get(this.baseUrl + "series/chapter?chapterId=" + chapterId);
  }
  delete(seriesId) {
    return this.httpClient.delete(this.baseUrl + "series/" + seriesId, TextResonse).pipe(map((s) => s === "true"));
  }
  deleteMultipleSeries(seriesIds) {
    return this.httpClient.post(this.baseUrl + "series/delete-multiple", { seriesIds }, TextResonse).pipe(map((s) => s === "true"));
  }
  updateRating(seriesId, userRating) {
    return this.httpClient.post(this.baseUrl + "series/update-rating", { seriesId, userRating });
  }
  updateSeries(model) {
    return this.httpClient.post(this.baseUrl + "series/update", model);
  }
  markRead(seriesId) {
    return this.httpClient.post(this.baseUrl + "reader/mark-read", { seriesId });
  }
  markUnread(seriesId) {
    return this.httpClient.post(this.baseUrl + "reader/mark-unread", { seriesId });
  }
  getRecentlyAdded(pageNum, itemsPerPage, filter) {
    let params = new HttpParams();
    params = this.utilityService.addPaginationIfExists(params, pageNum, itemsPerPage);
    const data = filter || {};
    return this.httpClient.post(this.baseUrl + "series/recently-added-v2", data, { observe: "response", params }).pipe(map((response) => {
      return this.utilityService.createPaginatedResult(response, new PaginatedResult());
    }));
  }
  getRecentlyUpdatedSeries() {
    return this.httpClient.post(this.baseUrl + "series/recently-updated-series", {});
  }
  getWantToRead(pageNum, itemsPerPage, filter) {
    let params = new HttpParams();
    params = this.utilityService.addPaginationIfExists(params, pageNum, itemsPerPage);
    const data = filter || {};
    return this.httpClient.post(this.baseUrl + "want-to-read/v2", data, { observe: "response", params }).pipe(map((response) => {
      return this.utilityService.createPaginatedResult(response, new PaginatedResult());
    }));
  }
  isWantToRead(seriesId) {
    return this.httpClient.get(this.baseUrl + "want-to-read?seriesId=" + seriesId, TextResonse).pipe(map((val) => {
      return val === "true";
    }));
  }
  getOnDeck(libraryId = 0, pageNum, itemsPerPage, filter) {
    let params = new HttpParams();
    params = this.utilityService.addPaginationIfExists(params, pageNum, itemsPerPage);
    const data = filter || {};
    return this.httpClient.post(this.baseUrl + "series/on-deck?libraryId=" + libraryId, data, { observe: "response", params }).pipe(map((response) => {
      return this.utilityService.createPaginatedResult(response, new PaginatedResult());
    }));
  }
  refreshMetadata(series, force = true, forceColorscape = true) {
    return this.httpClient.post(this.baseUrl + "series/refresh-metadata", { libraryId: series.libraryId, seriesId: series.id, forceUpdate: force, forceColorscape });
  }
  scan(libraryId, seriesId, force = false) {
    return this.httpClient.post(this.baseUrl + "series/scan", { libraryId, seriesId, forceUpdate: force });
  }
  analyzeFiles(libraryId, seriesId) {
    return this.httpClient.post(this.baseUrl + "series/analyze", { libraryId, seriesId });
  }
  getMetadata(seriesId) {
    return this.httpClient.get(this.baseUrl + "series/metadata?seriesId=" + seriesId);
  }
  updateMetadata(seriesMetadata) {
    const data = {
      seriesMetadata
    };
    return this.httpClient.post(this.baseUrl + "series/metadata", data, TextResonse);
  }
  getSeriesForTag(collectionTagId, pageNum, itemsPerPage) {
    let params = new HttpParams();
    params = this.utilityService.addPaginationIfExists(params, pageNum, itemsPerPage);
    return this.httpClient.get(this.baseUrl + "series/series-by-collection?collectionId=" + collectionTagId, { observe: "response", params }).pipe(map((response) => {
      return this.utilityService.createPaginatedResult(response, this.paginatedSeriesForTagsResults);
    }));
  }
  getRelatedForSeries(seriesId) {
    return this.httpClient.get(this.baseUrl + "series/all-related?seriesId=" + seriesId);
  }
  getRecommendationsForSeries(seriesId) {
    return this.httpClient.get(this.baseUrl + "recommended/recommendations?seriesId=" + seriesId);
  }
  updateRelationships(seriesId, adaptations, characters, contains, others, prequels, sequels, sideStories, spinOffs, alternativeSettings, alternativeVersions, doujinshis, editions, annuals) {
    return this.httpClient.post(this.baseUrl + "series/update-related?seriesId=" + seriesId, {
      seriesId,
      adaptations,
      characters,
      sequels,
      prequels,
      contains,
      others,
      sideStories,
      spinOffs,
      alternativeSettings,
      alternativeVersions,
      doujinshis,
      editions,
      annuals
    });
  }
  getSeriesDetail(seriesId) {
    return this.httpClient.get(this.baseUrl + "series/series-detail?seriesId=" + seriesId);
  }
  deleteReview(seriesId) {
    return this.httpClient.delete(this.baseUrl + "review?seriesId=" + seriesId);
  }
  updateReview(seriesId, body) {
    return this.httpClient.post(this.baseUrl + "review", {
      seriesId,
      body
    });
  }
  getReviews(seriesId) {
    return this.httpClient.get(this.baseUrl + "review?seriesId=" + seriesId);
  }
  getRatings(seriesId) {
    return this.httpClient.get(this.baseUrl + "rating?seriesId=" + seriesId);
  }
  getOverallRating(seriesId) {
    return this.httpClient.get(this.baseUrl + "rating/overall?seriesId=" + seriesId);
  }
  removeFromOnDeck(seriesId) {
    return this.httpClient.post(this.baseUrl + "series/remove-from-on-deck?seriesId=" + seriesId, {});
  }
  getExternalSeriesDetails(aniListId, malId, seriesId) {
    return this.httpClient.get(this.baseUrl + "series/external-series-detail?aniListId=" + (aniListId || 0) + "&malId=" + (malId || 0) + "&seriesId=" + (seriesId || 0));
  }
  getNextExpectedChapterDate(seriesId) {
    return this.httpClient.get(this.baseUrl + "series/next-expected?seriesId=" + seriesId);
  }
  matchSeries(model) {
    return this.httpClient.post(this.baseUrl + "series/match", model);
  }
  updateMatch(seriesId, series) {
    return this.httpClient.post(this.baseUrl + `series/update-match?seriesId=${seriesId}&aniListId=${series.aniListId}${series.malId ? "&malId=" + series.malId : ""}`, {}, TextResonse);
  }
  updateDontMatch(seriesId, dontMatch) {
    return this.httpClient.post(this.baseUrl + `series/dont-match?seriesId=${seriesId}&dontMatch=${dontMatch}`, {}, TextResonse);
  }
  static {
    this.\u0275fac = function SeriesService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SeriesService)(\u0275\u0275inject(HttpClient), \u0275\u0275inject(ImageService), \u0275\u0275inject(UtilityService));
    };
  }
  static {
    this.\u0275prov = \u0275\u0275defineInjectable({ token: _SeriesService, factory: _SeriesService.\u0275fac, providedIn: "root" });
  }
};

export {
  SeriesService
};
//# sourceMappingURL=chunk-HG4LWHDT.js.map
