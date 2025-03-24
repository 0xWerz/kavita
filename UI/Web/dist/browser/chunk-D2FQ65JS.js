import {
  UtilityService
} from "./chunk-A6JEQ5GB.js";
import {
  MangaFormat
} from "./chunk-RSMGJKYW.js";
import {
  AccountService,
  Router
} from "./chunk-U2DWQJI2.js";
import {
  ToastrService
} from "./chunk-5J5IKBMT.js";
import {
  TextResonse
} from "./chunk-BPOUBDX2.js";
import {
  HttpClient,
  environment
} from "./chunk-CQADFT7F.js";
import {
  DOCUMENT,
  DestroyRef,
  Location,
  __async,
  __commonJS,
  __toESM,
  inject,
  takeUntilDestroyed,
  translate,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-PYHIUVNJ.js";

// node_modules/nosleep.js/src/media.js
var require_media = __commonJS({
  "node_modules/nosleep.js/src/media.js"(exports, module) {
    "use strict";
    module.exports = {
      webm: "data:video/webm;base64,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",
      mp4: "data:video/mp4;base64,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"
    };
  }
});

// node_modules/nosleep.js/src/index.js
var require_src = __commonJS({
  "node_modules/nosleep.js/src/index.js"(exports, module) {
    "use strict";
    var {
      webm,
      mp4
    } = require_media();
    var oldIOS = () => typeof navigator !== "undefined" && parseFloat(("" + (/CPU.*OS ([0-9_]{3,4})[0-9_]{0,1}|(CPU like).*AppleWebKit.*Mobile/i.exec(navigator.userAgent) || [0, ""])[1]).replace("undefined", "3_2").replace("_", ".").replace("_", "")) < 10 && !window.MSStream;
    var nativeWakeLock = () => "wakeLock" in navigator;
    var NoSleep2 = class {
      constructor() {
        this.enabled = false;
        if (nativeWakeLock()) {
          this._wakeLock = null;
          const handleVisibilityChange = () => {
            if (this._wakeLock !== null && document.visibilityState === "visible") {
              this.enable();
            }
          };
          document.addEventListener("visibilitychange", handleVisibilityChange);
          document.addEventListener("fullscreenchange", handleVisibilityChange);
        } else if (oldIOS()) {
          this.noSleepTimer = null;
        } else {
          this.noSleepVideo = document.createElement("video");
          this.noSleepVideo.setAttribute("title", "No Sleep");
          this.noSleepVideo.setAttribute("playsinline", "");
          this._addSourceToVideo(this.noSleepVideo, "webm", webm);
          this._addSourceToVideo(this.noSleepVideo, "mp4", mp4);
          this.noSleepVideo.addEventListener("loadedmetadata", () => {
            if (this.noSleepVideo.duration <= 1) {
              this.noSleepVideo.setAttribute("loop", "");
            } else {
              this.noSleepVideo.addEventListener("timeupdate", () => {
                if (this.noSleepVideo.currentTime > 0.5) {
                  this.noSleepVideo.currentTime = Math.random();
                }
              });
            }
          });
        }
      }
      _addSourceToVideo(element, type, dataURI) {
        var source = document.createElement("source");
        source.src = dataURI;
        source.type = `video/${type}`;
        element.appendChild(source);
      }
      get isEnabled() {
        return this.enabled;
      }
      enable() {
        if (nativeWakeLock()) {
          return navigator.wakeLock.request("screen").then((wakeLock) => {
            this._wakeLock = wakeLock;
            this.enabled = true;
            console.log("Wake Lock active.");
            this._wakeLock.addEventListener("release", () => {
              console.log("Wake Lock released.");
            });
          }).catch((err) => {
            this.enabled = false;
            console.error(`${err.name}, ${err.message}`);
            throw err;
          });
        } else if (oldIOS()) {
          this.disable();
          console.warn(`
        NoSleep enabled for older iOS devices. This can interrupt
        active or long-running network requests from completing successfully.
        See https://github.com/richtr/NoSleep.js/issues/15 for more details.
      `);
          this.noSleepTimer = window.setInterval(() => {
            if (!document.hidden) {
              window.location.href = window.location.href.split("#")[0];
              window.setTimeout(window.stop, 0);
            }
          }, 15e3);
          this.enabled = true;
          return Promise.resolve();
        } else {
          let playPromise = this.noSleepVideo.play();
          return playPromise.then((res) => {
            this.enabled = true;
            return res;
          }).catch((err) => {
            this.enabled = false;
            throw err;
          });
        }
      }
      disable() {
        if (nativeWakeLock()) {
          if (this._wakeLock) {
            this._wakeLock.release();
          }
          this._wakeLock = null;
        } else if (oldIOS()) {
          if (this.noSleepTimer) {
            console.warn(`
          NoSleep now disabled for older iOS devices.
        `);
            window.clearInterval(this.noSleepTimer);
            this.noSleepTimer = null;
          }
        } else {
          this.noSleepVideo.pause();
        }
        this.enabled = false;
      }
    };
    module.exports = NoSleep2;
  }
});

// node_modules/screenfull/index.js
var methodMap = [
  ["requestFullscreen", "exitFullscreen", "fullscreenElement", "fullscreenEnabled", "fullscreenchange", "fullscreenerror"],
  // New WebKit
  ["webkitRequestFullscreen", "webkitExitFullscreen", "webkitFullscreenElement", "webkitFullscreenEnabled", "webkitfullscreenchange", "webkitfullscreenerror"],
  // Old WebKit
  ["webkitRequestFullScreen", "webkitCancelFullScreen", "webkitCurrentFullScreenElement", "webkitCancelFullScreen", "webkitfullscreenchange", "webkitfullscreenerror"],
  ["mozRequestFullScreen", "mozCancelFullScreen", "mozFullScreenElement", "mozFullScreenEnabled", "mozfullscreenchange", "mozfullscreenerror"],
  ["msRequestFullscreen", "msExitFullscreen", "msFullscreenElement", "msFullscreenEnabled", "MSFullscreenChange", "MSFullscreenError"]
];
var nativeAPI = (() => {
  if (typeof document === "undefined") {
    return false;
  }
  const unprefixedMethods = methodMap[0];
  const returnValue = {};
  for (const methodList of methodMap) {
    const exitFullscreenMethod = methodList?.[1];
    if (exitFullscreenMethod in document) {
      for (const [index, method] of methodList.entries()) {
        returnValue[unprefixedMethods[index]] = method;
      }
      return returnValue;
    }
  }
  return false;
})();
var eventNameMap = {
  change: nativeAPI.fullscreenchange,
  error: nativeAPI.fullscreenerror
};
var screenfull = {
  // eslint-disable-next-line default-param-last
  request(element = document.documentElement, options) {
    return new Promise((resolve, reject) => {
      const onFullScreenEntered = () => {
        screenfull.off("change", onFullScreenEntered);
        resolve();
      };
      screenfull.on("change", onFullScreenEntered);
      const returnPromise = element[nativeAPI.requestFullscreen](options);
      if (returnPromise instanceof Promise) {
        returnPromise.then(onFullScreenEntered).catch(reject);
      }
    });
  },
  exit() {
    return new Promise((resolve, reject) => {
      if (!screenfull.isFullscreen) {
        resolve();
        return;
      }
      const onFullScreenExit = () => {
        screenfull.off("change", onFullScreenExit);
        resolve();
      };
      screenfull.on("change", onFullScreenExit);
      const returnPromise = document[nativeAPI.exitFullscreen]();
      if (returnPromise instanceof Promise) {
        returnPromise.then(onFullScreenExit).catch(reject);
      }
    });
  },
  toggle(element, options) {
    return screenfull.isFullscreen ? screenfull.exit() : screenfull.request(element, options);
  },
  onchange(callback) {
    screenfull.on("change", callback);
  },
  onerror(callback) {
    screenfull.on("error", callback);
  },
  on(event, callback) {
    const eventName = eventNameMap[event];
    if (eventName) {
      document.addEventListener(eventName, callback, false);
    }
  },
  off(event, callback) {
    const eventName = eventNameMap[event];
    if (eventName) {
      document.removeEventListener(eventName, callback, false);
    }
  },
  raw: nativeAPI
};
Object.defineProperties(screenfull, {
  isFullscreen: {
    get: () => Boolean(document[nativeAPI.fullscreenElement])
  },
  element: {
    enumerable: true,
    get: () => document[nativeAPI.fullscreenElement] ?? void 0
  },
  isEnabled: {
    enumerable: true,
    // Coerce to boolean in case of old WebKit.
    get: () => Boolean(document[nativeAPI.fullscreenEnabled])
  }
});
if (!nativeAPI) {
  screenfull = {
    isEnabled: false
  };
}
var screenfull_default = screenfull;

// src/app/_services/reader.service.ts
var import_nosleep = __toESM(require_src());
var CHAPTER_ID_DOESNT_EXIST = -1;
var CHAPTER_ID_NOT_FETCHED = -2;
var ReaderService = class _ReaderService {
  constructor(httpClient, document2) {
    this.httpClient = httpClient;
    this.document = document2;
    this.destroyRef = inject(DestroyRef);
    this.utilityService = inject(UtilityService);
    this.router = inject(Router);
    this.location = inject(Location);
    this.accountService = inject(AccountService);
    this.toastr = inject(ToastrService);
    this.baseUrl = environment.apiUrl;
    this.encodedKey = "";
    this.noSleep = new import_nosleep.default();
    this.accountService.currentUser$.pipe(takeUntilDestroyed(this.destroyRef)).subscribe((user) => {
      if (user) {
        this.encodedKey = encodeURIComponent(user.apiKey);
      }
    });
  }
  enableWakeLock(element) {
    if (!element)
      element = this.document;
    const enableNoSleepHandler = () => __async(this, null, function* () {
      element.removeEventListener("click", enableNoSleepHandler, false);
      element.removeEventListener("touchmove", enableNoSleepHandler, false);
      element.removeEventListener("mousemove", enableNoSleepHandler, false);
      yield this.noSleep.enable();
    });
    element.addEventListener("click", enableNoSleepHandler, false);
    element.addEventListener("touchmove", enableNoSleepHandler, false);
    element.addEventListener("mousemove", enableNoSleepHandler, false);
  }
  disableWakeLock() {
    this.noSleep.disable();
  }
  getNavigationArray(libraryId, seriesId, chapterId, format) {
    if (format === void 0)
      format = MangaFormat.ARCHIVE;
    if (format === MangaFormat.EPUB) {
      return ["library", libraryId, "series", seriesId, "book", chapterId];
    } else if (format === MangaFormat.PDF) {
      return ["library", libraryId, "series", seriesId, "pdf", chapterId];
    } else {
      return ["library", libraryId, "series", seriesId, "manga", chapterId];
    }
  }
  downloadPdf(chapterId) {
    return `${this.baseUrl}reader/pdf?chapterId=${chapterId}&apiKey=${this.encodedKey}`;
  }
  bookmark(seriesId, volumeId, chapterId, page) {
    return this.httpClient.post(this.baseUrl + "reader/bookmark", { seriesId, volumeId, chapterId, page });
  }
  unbookmark(seriesId, volumeId, chapterId, page) {
    return this.httpClient.post(this.baseUrl + "reader/unbookmark", { seriesId, volumeId, chapterId, page });
  }
  getAllBookmarks(filter) {
    return this.httpClient.post(this.baseUrl + "reader/all-bookmarks", filter);
  }
  getBookmarks(chapterId) {
    return this.httpClient.get(this.baseUrl + "reader/chapter-bookmarks?chapterId=" + chapterId);
  }
  getBookmarksForVolume(volumeId) {
    return this.httpClient.get(this.baseUrl + "reader/volume-bookmarks?volumeId=" + volumeId);
  }
  getBookmarksForSeries(seriesId) {
    return this.httpClient.get(this.baseUrl + "reader/series-bookmarks?seriesId=" + seriesId);
  }
  clearBookmarks(seriesId) {
    return this.httpClient.post(this.baseUrl + "reader/remove-bookmarks", { seriesId }, TextResonse);
  }
  clearMultipleBookmarks(seriesIds) {
    return this.httpClient.post(this.baseUrl + "reader/bulk-remove-bookmarks", { seriesIds }, TextResonse);
  }
  getBookmarkInfo(seriesId) {
    return this.httpClient.get(this.baseUrl + "reader/bookmark-info?seriesId=" + seriesId);
  }
  getProgress(chapterId) {
    return this.httpClient.get(this.baseUrl + "reader/get-progress?chapterId=" + chapterId);
  }
  getPageUrl(chapterId, page) {
    return `${this.baseUrl}reader/image?chapterId=${chapterId}&apiKey=${this.encodedKey}&page=${page}`;
  }
  getThumbnailUrl(chapterId, page) {
    return `${this.baseUrl}reader/thumbnail?chapterId=${chapterId}&apiKey=${this.encodedKey}&page=${page}`;
  }
  getBookmarkPageUrl(seriesId, apiKey, page) {
    return this.baseUrl + "reader/bookmark-image?seriesId=" + seriesId + "&page=" + page + "&apiKey=" + encodeURIComponent(apiKey);
  }
  getChapterInfo(chapterId, includeDimensions = false) {
    return this.httpClient.get(this.baseUrl + "reader/chapter-info?chapterId=" + chapterId + "&includeDimensions=" + includeDimensions);
  }
  getFileDimensions(chapterId) {
    return this.httpClient.get(this.baseUrl + "reader/file-dimensions?chapterId=" + chapterId);
  }
  saveProgress(libraryId, seriesId, volumeId, chapterId, page, bookScrollId = null) {
    return this.httpClient.post(this.baseUrl + "reader/progress", { libraryId, seriesId, volumeId, chapterId, pageNum: page, bookScrollId });
  }
  getAllProgressForChapter(chapterId) {
    return this.httpClient.get(this.baseUrl + "reader/all-chapter-progress?chapterId=" + chapterId);
  }
  markVolumeRead(seriesId, volumeId) {
    return this.httpClient.post(this.baseUrl + "reader/mark-volume-read", { seriesId, volumeId });
  }
  markMultipleRead(seriesId, volumeIds, chapterIds) {
    return this.httpClient.post(this.baseUrl + "reader/mark-multiple-read", { seriesId, volumeIds, chapterIds });
  }
  markMultipleUnread(seriesId, volumeIds, chapterIds) {
    return this.httpClient.post(this.baseUrl + "reader/mark-multiple-unread", { seriesId, volumeIds, chapterIds });
  }
  markMultipleSeriesRead(seriesIds) {
    return this.httpClient.post(this.baseUrl + "reader/mark-multiple-series-read", { seriesIds });
  }
  markMultipleSeriesUnread(seriesIds) {
    return this.httpClient.post(this.baseUrl + "reader/mark-multiple-series-unread", { seriesIds });
  }
  markVolumeUnread(seriesId, volumeId) {
    return this.httpClient.post(this.baseUrl + "reader/mark-volume-unread", { seriesId, volumeId });
  }
  getNextChapter(seriesId, volumeId, currentChapterId, readingListId = -1) {
    if (readingListId > 0) {
      return this.httpClient.get(this.baseUrl + "readinglist/next-chapter?seriesId=" + seriesId + "&currentChapterId=" + currentChapterId + "&readingListId=" + readingListId);
    }
    return this.httpClient.get(this.baseUrl + "reader/next-chapter?seriesId=" + seriesId + "&volumeId=" + volumeId + "&currentChapterId=" + currentChapterId);
  }
  getPrevChapter(seriesId, volumeId, currentChapterId, readingListId = -1) {
    if (readingListId > 0) {
      return this.httpClient.get(this.baseUrl + "readinglist/prev-chapter?seriesId=" + seriesId + "&currentChapterId=" + currentChapterId + "&readingListId=" + readingListId);
    }
    return this.httpClient.get(this.baseUrl + "reader/prev-chapter?seriesId=" + seriesId + "&volumeId=" + volumeId + "&currentChapterId=" + currentChapterId);
  }
  hasSeriesProgress(seriesId) {
    return this.httpClient.get(this.baseUrl + "reader/has-progress?seriesId=" + seriesId);
  }
  getCurrentChapter(seriesId) {
    return this.httpClient.get(this.baseUrl + "reader/continue-point?seriesId=" + seriesId);
  }
  getTimeLeft(seriesId) {
    return this.httpClient.get(this.baseUrl + "reader/time-left?seriesId=" + seriesId);
  }
  setOverrideStyles(backgroundColor = "black") {
    const bodyNode = document.querySelector("body");
    if (bodyNode !== void 0 && bodyNode !== null) {
      this.originalBodyColor = bodyNode.style.background;
      bodyNode.setAttribute("style", "background-color: " + backgroundColor + " !important");
    }
  }
  resetOverrideStyles() {
    const bodyNode = document.querySelector("body");
    if (bodyNode !== void 0 && bodyNode !== null && this.originalBodyColor !== void 0) {
      bodyNode.style.background = this.originalBodyColor;
    }
  }
  imageUrlToPageNum(imageSrc) {
    if (imageSrc === void 0 || imageSrc === "") {
      return -1;
    }
    const params = new URLSearchParams(new URL(imageSrc).search);
    return parseInt(params.get("page") || "-1", 10);
  }
  imageUrlToChapterId(imageSrc) {
    if (imageSrc === void 0 || imageSrc === "") {
      return -1;
    }
    const params = new URLSearchParams(new URL(imageSrc).search);
    return parseInt(params.get("chapterId") || "-1", 10);
  }
  getNextChapterUrl(url, nextChapterId, incognitoMode = false, readingListMode = false, readingListId = -1) {
    const lastSlashIndex = url.lastIndexOf("/");
    let newRoute = url.substring(0, lastSlashIndex + 1) + nextChapterId + "";
    newRoute += this.getQueryParams(incognitoMode, readingListMode, readingListId);
    return newRoute;
  }
  getQueryParamsObject(incognitoMode = false, readingListMode = false, readingListId = -1) {
    let params = {};
    if (incognitoMode) {
      params["incognitoMode"] = true;
    }
    if (readingListMode) {
      params["readingListId"] = readingListId;
    }
    return params;
  }
  getQueryParams(incognitoMode = false, readingListMode = false, readingListId = -1) {
    let params = "";
    if (incognitoMode) {
      params += "?incognitoMode=true";
    }
    if (readingListMode) {
      if (params.indexOf("?") > 0) {
        params += "&readingListId=" + readingListId;
      } else {
        params += "?readingListId=" + readingListId;
      }
    }
    return params;
  }
  toggleFullscreen(el, callback) {
    if (screenfull_default.isEnabled) {
      screenfull_default.toggle();
    }
  }
  checkFullscreenMode() {
    return document.fullscreenElement != null;
  }
  closeReader(readingListMode = false, readingListId = 0) {
    if (readingListMode) {
      this.router.navigateByUrl("lists/" + readingListId);
    } else {
      this.location.back();
    }
  }
  removePersonalToc(chapterId, pageNumber, title) {
    return this.httpClient.delete(this.baseUrl + `reader/ptoc?chapterId=${chapterId}&pageNum=${pageNumber}&title=${encodeURIComponent(title)}`);
  }
  getPersonalToC(chapterId) {
    return this.httpClient.get(this.baseUrl + "reader/ptoc?chapterId=" + chapterId);
  }
  createPersonalToC(libraryId, seriesId, volumeId, chapterId, pageNumber, title, bookScrollId) {
    return this.httpClient.post(this.baseUrl + "reader/create-ptoc", { libraryId, seriesId, volumeId, chapterId, pageNumber, title, bookScrollId });
  }
  getElementFromXPath(path) {
    const node = document.evaluate(path, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
    if (node?.nodeType === Node.ELEMENT_NODE) {
      return node;
    }
    return null;
  }
  getXPathTo(element, pureXPath = false) {
    if (element === null)
      return "";
    if (!pureXPath) {
      if (element.id !== "") {
        return 'id("' + element.id + '")';
      }
      if (element === document.body) {
        return element.tagName;
      }
    }
    let ix = 0;
    const siblings = element.parentNode?.childNodes || [];
    for (let sibling of siblings) {
      if (sibling === element) {
        return this.getXPathTo(element.parentNode) + "/" + element.tagName + "[" + (ix + 1) + "]";
      }
      if (sibling.nodeType === 1 && sibling.tagName === element.tagName) {
        ix++;
      }
    }
    return "";
  }
  readVolume(libraryId, seriesId, volume, incognitoMode = false) {
    if (volume.pagesRead < volume.pages && volume.pagesRead > 0) {
      const unreadChapters = volume.chapters.filter((item) => item.pagesRead < item.pages);
      if (unreadChapters.length > 0) {
        this.readChapter(libraryId, seriesId, unreadChapters[0], incognitoMode);
        return;
      }
      this.readChapter(libraryId, seriesId, volume.chapters[0], incognitoMode);
      return;
    }
    this.readChapter(libraryId, seriesId, [...volume.chapters].sort(this.utilityService.sortChapters)[0], incognitoMode);
  }
  readChapter(libraryId, seriesId, chapter, incognitoMode = false) {
    if (chapter.pages === 0) {
      this.toastr.error(translate("series-detail.no-pages"));
      return;
    }
    this.router.navigate(this.getNavigationArray(libraryId, seriesId, chapter.id, chapter.files[0].format), { queryParams: { incognitoMode } });
  }
  static {
    this.\u0275fac = function ReaderService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ReaderService)(\u0275\u0275inject(HttpClient), \u0275\u0275inject(DOCUMENT));
    };
  }
  static {
    this.\u0275prov = \u0275\u0275defineInjectable({ token: _ReaderService, factory: _ReaderService.\u0275fac, providedIn: "root" });
  }
};

export {
  CHAPTER_ID_DOESNT_EXIST,
  CHAPTER_ID_NOT_FETCHED,
  ReaderService
};
//# sourceMappingURL=chunk-D2FQ65JS.js.map
