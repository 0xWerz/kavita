import {
  EVENTS,
  MessageHubService
} from "./chunk-PUXELTB2.js";
import {
  HttpClient,
  environment
} from "./chunk-CQADFT7F.js";
import {
  DestroyRef,
  filter,
  map,
  of,
  takeUntilDestroyed,
  tap,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-PYHIUVNJ.js";

// src/app/_services/library.service.ts
var LibraryService = class _LibraryService {
  constructor(httpClient, messageHub, destroyRef) {
    this.httpClient = httpClient;
    this.messageHub = messageHub;
    this.destroyRef = destroyRef;
    this.baseUrl = environment.apiUrl;
    this.libraryNames = void 0;
    this.libraryTypes = void 0;
    this.messageHub.messages$.pipe(takeUntilDestroyed(this.destroyRef), filter((e) => e.event === EVENTS.LibraryModified), tap((e) => {
      console.log("LibraryModified event came in, clearing library name cache");
      this.libraryNames = void 0;
      this.libraryTypes = void 0;
    })).subscribe();
  }
  getLibraryNames() {
    if (this.libraryNames != void 0) {
      return of(this.libraryNames);
    }
    return this.httpClient.get(this.baseUrl + "library/libraries").pipe(map((libraries) => {
      this.libraryNames = {};
      libraries.forEach((lib) => {
        if (this.libraryNames !== void 0) {
          this.libraryNames[lib.id] = lib.name;
        }
      });
      return this.libraryNames;
    }));
  }
  getLibraryName(libraryId) {
    if (this.libraryNames != void 0 && this.libraryNames.hasOwnProperty(libraryId)) {
      return of(this.libraryNames[libraryId]);
    }
    return this.httpClient.get(this.baseUrl + "library/libraries").pipe(map((l) => {
      this.libraryNames = {};
      l.forEach((lib) => {
        if (this.libraryNames !== void 0) {
          this.libraryNames[lib.id] = lib.name;
        }
      });
      return this.libraryNames[libraryId];
    }));
  }
  libraryNameExists(name) {
    return this.httpClient.get(this.baseUrl + "library/name-exists?name=" + name);
  }
  listDirectories(rootPath) {
    let query = "";
    if (rootPath !== void 0 && rootPath.length > 0) {
      query = "?path=" + encodeURIComponent(rootPath);
    }
    return this.httpClient.get(this.baseUrl + "library/list" + query);
  }
  getJumpBar(libraryId) {
    return this.httpClient.get(this.baseUrl + "library/jump-bar?libraryId=" + libraryId);
  }
  getLibrary(libraryId) {
    return this.httpClient.get(this.baseUrl + "library?libraryId=" + libraryId);
  }
  getLibraries() {
    return this.httpClient.get(this.baseUrl + "library/libraries");
  }
  updateLibrariesForMember(username, selectedLibraries) {
    return this.httpClient.post(this.baseUrl + "library/grant-access", { username, selectedLibraries });
  }
  scan(libraryId, force = false) {
    return this.httpClient.post(this.baseUrl + "library/scan?libraryId=" + libraryId + "&force=" + force, {});
  }
  scanMultipleLibraries(libraryIds, force = false) {
    return this.httpClient.post(this.baseUrl + "library/scan-multiple", { ids: libraryIds, force });
  }
  analyze(libraryId) {
    return this.httpClient.post(this.baseUrl + "library/analyze?libraryId=" + libraryId, {});
  }
  refreshMetadata(libraryId, forceUpdate = false, forceColorscape = false) {
    return this.httpClient.post(this.baseUrl + `library/refresh-metadata?libraryId=${libraryId}&force=${forceUpdate}&forceColorscape=${forceColorscape}`, {});
  }
  refreshMetadataMultipleLibraries(libraryIds, force = false, forceColorscape = false) {
    return this.httpClient.post(this.baseUrl + "library/refresh-metadata-multiple?forceColorscape=" + forceColorscape, { ids: libraryIds, force });
  }
  analyzeFilesMultipleLibraries(libraryIds) {
    return this.httpClient.post(this.baseUrl + "library/analyze-multiple", { ids: libraryIds, force: false });
  }
  copySettingsFromLibrary(sourceLibraryId, targetLibraryIds, includeType) {
    return this.httpClient.post(this.baseUrl + "library/copy-settings-from", { sourceLibraryId, targetLibraryIds, includeType });
  }
  create(model) {
    return this.httpClient.post(this.baseUrl + "library/create", model);
  }
  delete(libraryId) {
    return this.httpClient.delete(this.baseUrl + "library/delete?libraryId=" + libraryId, {});
  }
  deleteMultiple(libraryIds) {
    if (libraryIds.length === 0) {
      return of();
    }
    return this.httpClient.delete(this.baseUrl + "library/delete-multiple?libraryIds=" + libraryIds.join(","), {});
  }
  update(model) {
    return this.httpClient.post(this.baseUrl + "library/update", model);
  }
  getLibraryType(libraryId) {
    if (this.libraryTypes != void 0 && this.libraryTypes.hasOwnProperty(libraryId)) {
      return of(this.libraryTypes[libraryId]);
    }
    return this.httpClient.get(this.baseUrl + "library/type?libraryId=" + libraryId).pipe(map((l) => {
      if (this.libraryTypes === void 0) {
        this.libraryTypes = {};
      }
      this.libraryTypes[libraryId] = l;
      return this.libraryTypes[libraryId];
    }));
  }
  static {
    this.\u0275fac = function LibraryService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _LibraryService)(\u0275\u0275inject(HttpClient), \u0275\u0275inject(MessageHubService), \u0275\u0275inject(DestroyRef));
    };
  }
  static {
    this.\u0275prov = \u0275\u0275defineInjectable({ token: _LibraryService, factory: _LibraryService.\u0275fac, providedIn: "root" });
  }
};

export {
  LibraryService
};
//# sourceMappingURL=chunk-PBM62GK4.js.map
