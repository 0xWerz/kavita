import {
  PaginatedResult,
  UtilityService
} from "./chunk-A6JEQ5GB.js";
import {
  Action
} from "./chunk-U2DWQJI2.js";
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

// src/app/_services/reading-list.service.ts
var ReadingListService = class _ReadingListService {
  constructor(httpClient, utilityService) {
    this.httpClient = httpClient;
    this.utilityService = utilityService;
    this.baseUrl = environment.apiUrl;
  }
  getReadingList(readingListId) {
    return this.httpClient.get(this.baseUrl + "readinglist?readingListId=" + readingListId);
  }
  getReadingLists(includePromoted = true, sortByLastModified = false, pageNum, itemsPerPage) {
    let params = new HttpParams();
    params = this.utilityService.addPaginationIfExists(params, pageNum, itemsPerPage);
    return this.httpClient.post(this.baseUrl + "readinglist/lists?includePromoted=" + includePromoted + "&sortByLastModified=" + sortByLastModified, {}, { observe: "response", params }).pipe(map((response) => {
      return this.utilityService.createPaginatedResult(response, new PaginatedResult());
    }));
  }
  getReadingListsForSeries(seriesId) {
    return this.httpClient.get(this.baseUrl + "readinglist/lists-for-series?seriesId=" + seriesId);
  }
  getReadingListsForChapter(chapterId) {
    return this.httpClient.get(this.baseUrl + "readinglist/lists-for-chapter?chapterId=" + chapterId);
  }
  getListItems(readingListId) {
    return this.httpClient.get(this.baseUrl + "readinglist/items?readingListId=" + readingListId);
  }
  createList(title) {
    return this.httpClient.post(this.baseUrl + "readinglist/create", { title });
  }
  update(model) {
    return this.httpClient.post(this.baseUrl + "readinglist/update", model, TextResonse);
  }
  updateByMultiple(readingListId, seriesId, volumeIds, chapterIds) {
    return this.httpClient.post(this.baseUrl + "readinglist/update-by-multiple", { readingListId, seriesId, volumeIds, chapterIds }, TextResonse);
  }
  updateByMultipleSeries(readingListId, seriesIds) {
    return this.httpClient.post(this.baseUrl + "readinglist/update-by-multiple-series", { readingListId, seriesIds }, TextResonse);
  }
  updateBySeries(readingListId, seriesId) {
    return this.httpClient.post(this.baseUrl + "readinglist/update-by-series", { readingListId, seriesId }, TextResonse);
  }
  updateByVolume(readingListId, seriesId, volumeId) {
    return this.httpClient.post(this.baseUrl + "readinglist/update-by-volume", { readingListId, seriesId, volumeId }, TextResonse);
  }
  updateByChapter(readingListId, seriesId, chapterId) {
    return this.httpClient.post(this.baseUrl + "readinglist/update-by-chapter", { readingListId, seriesId, chapterId }, TextResonse);
  }
  delete(readingListId) {
    return this.httpClient.delete(this.baseUrl + "readinglist?readingListId=" + readingListId, TextResonse);
  }
  updatePosition(readingListId, readingListItemId, fromPosition, toPosition) {
    return this.httpClient.post(this.baseUrl + "readinglist/update-position", { readingListId, readingListItemId, fromPosition, toPosition }, TextResonse);
  }
  deleteItem(readingListId, readingListItemId) {
    return this.httpClient.post(this.baseUrl + "readinglist/delete-item", { readingListId, readingListItemId }, TextResonse);
  }
  removeRead(readingListId) {
    return this.httpClient.post(this.baseUrl + "readinglist/remove-read?readingListId=" + readingListId, {}, TextResonse);
  }
  actionListFilter(action, readingList, canPromote) {
    const isPromotionAction = action.action == Action.Promote || action.action == Action.UnPromote;
    if (isPromotionAction)
      return canPromote;
    return true;
  }
  nameExists(name) {
    return this.httpClient.get(this.baseUrl + "readinglist/name-exists?name=" + name);
  }
  validateCbl(form, dryRun, useComicVineMatching) {
    return this.httpClient.post(this.baseUrl + `cbl/validate?dryRun=${dryRun}&useComicVineMatching=${useComicVineMatching}`, form);
  }
  importCbl(form, dryRun, useComicVineMatching) {
    return this.httpClient.post(this.baseUrl + `cbl/import?dryRun=${dryRun}&useComicVineMatching=${useComicVineMatching}`, form);
  }
  getCharacters(readingListId) {
    return this.httpClient.get(this.baseUrl + "readinglist/characters?readingListId=" + readingListId);
  }
  promoteMultipleReadingLists(listIds, promoted) {
    return this.httpClient.post(this.baseUrl + "readinglist/promote-multiple", { readingListIds: listIds, promoted }, TextResonse);
  }
  deleteMultipleReadingLists(listIds) {
    return this.httpClient.post(this.baseUrl + "readinglist/delete-multiple", { readingListIds: listIds }, TextResonse);
  }
  static {
    this.\u0275fac = function ReadingListService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ReadingListService)(\u0275\u0275inject(HttpClient), \u0275\u0275inject(UtilityService));
    };
  }
  static {
    this.\u0275prov = \u0275\u0275defineInjectable({ token: _ReadingListService, factory: _ReadingListService.\u0275fac, providedIn: "root" });
  }
};

export {
  ReadingListService
};
//# sourceMappingURL=chunk-2XUUWUDC.js.map
