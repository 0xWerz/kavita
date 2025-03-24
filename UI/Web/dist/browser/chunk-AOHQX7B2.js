import {
  AccountService,
  Action
} from "./chunk-U2DWQJI2.js";
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

// src/app/_services/collection-tag.service.ts
var CollectionTagService = class _CollectionTagService {
  constructor(httpClient, accountService) {
    this.httpClient = httpClient;
    this.accountService = accountService;
    this.baseUrl = environment.apiUrl;
  }
  allCollections(ownedOnly = false) {
    return this.httpClient.get(this.baseUrl + "collection?ownedOnly=" + ownedOnly);
  }
  allCollectionsForSeries(seriesId, ownedOnly = false) {
    return this.httpClient.get(this.baseUrl + "collection/all-series?ownedOnly=" + ownedOnly + "&seriesId=" + seriesId);
  }
  updateTag(tag) {
    return this.httpClient.post(this.baseUrl + "collection/update", tag, TextResonse);
  }
  promoteMultipleCollections(tags, promoted) {
    return this.httpClient.post(this.baseUrl + "collection/promote-multiple", { collectionIds: tags, promoted }, TextResonse);
  }
  updateSeriesForTag(tag, seriesIdsToRemove) {
    return this.httpClient.post(this.baseUrl + "collection/update-series", { tag, seriesIdsToRemove }, TextResonse);
  }
  addByMultiple(tagId, seriesIds, tagTitle = "") {
    return this.httpClient.post(this.baseUrl + "collection/update-for-series", { collectionTagId: tagId, collectionTagTitle: tagTitle, seriesIds }, TextResonse);
  }
  tagNameExists(name) {
    return this.httpClient.get(this.baseUrl + "collection/name-exists?name=" + name);
  }
  deleteTag(tagId) {
    return this.httpClient.delete(this.baseUrl + "collection?tagId=" + tagId, TextResonse);
  }
  deleteMultipleCollections(tags) {
    return this.httpClient.post(this.baseUrl + "collection/delete-multiple", { collectionIds: tags }, TextResonse);
  }
  getMalStacks() {
    return this.httpClient.get(this.baseUrl + "collection/mal-stacks");
  }
  actionListFilter(action, user) {
    const canPromote = this.accountService.hasAdminRole(user) || this.accountService.hasPromoteRole(user);
    const isPromotionAction = action.action == Action.Promote || action.action == Action.UnPromote;
    if (isPromotionAction)
      return canPromote;
    return true;
  }
  importStack(stack) {
    return this.httpClient.post(this.baseUrl + "collection/import-stack", stack, TextResonse);
  }
  static {
    this.\u0275fac = function CollectionTagService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CollectionTagService)(\u0275\u0275inject(HttpClient), \u0275\u0275inject(AccountService));
    };
  }
  static {
    this.\u0275prov = \u0275\u0275defineInjectable({ token: _CollectionTagService, factory: _CollectionTagService.\u0275fac, providedIn: "root" });
  }
};

export {
  CollectionTagService
};
//# sourceMappingURL=chunk-AOHQX7B2.js.map
