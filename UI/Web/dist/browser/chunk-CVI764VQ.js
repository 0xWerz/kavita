import {
  BytesPipe
} from "./chunk-C423WP7Y.js";
import {
  UtilityService
} from "./chunk-A6JEQ5GB.js";
import {
  AccountService
} from "./chunk-U2DWQJI2.js";
import {
  ConfirmService
} from "./chunk-2R2RCU4Y.js";
import {
  HttpClient,
  HttpEventType,
  environment
} from "./chunk-CQADFT7F.js";
import {
  BehaviorSubject,
  DestroyRef,
  InjectionToken,
  __async,
  __commonJS,
  __toESM,
  asyncScheduler,
  filter,
  finalize,
  inject,
  of,
  scan,
  switchMap,
  take,
  takeUntilDestroyed,
  takeWhile,
  tap,
  throttleTime,
  translate,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-PYHIUVNJ.js";

// node_modules/file-saver/dist/FileSaver.min.js
var require_FileSaver_min = __commonJS({
  "node_modules/file-saver/dist/FileSaver.min.js"(exports, module) {
    "use strict";
    (function(a, b) {
      if ("function" == typeof define && define.amd) define([], b);
      else if ("undefined" != typeof exports) b();
      else {
        b(), a.FileSaver = {
          exports: {}
        }.exports;
      }
    })(exports, function() {
      "use strict";
      function b(a2, b2) {
        return "undefined" == typeof b2 ? b2 = {
          autoBom: false
        } : "object" != typeof b2 && (console.warn("Deprecated: Expected third argument to be a object"), b2 = {
          autoBom: !b2
        }), b2.autoBom && /^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(a2.type) ? new Blob(["\uFEFF", a2], {
          type: a2.type
        }) : a2;
      }
      function c(a2, b2, c2) {
        var d2 = new XMLHttpRequest();
        d2.open("GET", a2), d2.responseType = "blob", d2.onload = function() {
          g(d2.response, b2, c2);
        }, d2.onerror = function() {
          console.error("could not download file");
        }, d2.send();
      }
      function d(a2) {
        var b2 = new XMLHttpRequest();
        b2.open("HEAD", a2, false);
        try {
          b2.send();
        } catch (a3) {
        }
        return 200 <= b2.status && 299 >= b2.status;
      }
      function e(a2) {
        try {
          a2.dispatchEvent(new MouseEvent("click"));
        } catch (c2) {
          var b2 = document.createEvent("MouseEvents");
          b2.initMouseEvent("click", true, true, window, 0, 0, 0, 80, 20, false, false, false, false, 0, null), a2.dispatchEvent(b2);
        }
      }
      var f = "object" == typeof window && window.window === window ? window : "object" == typeof self && self.self === self ? self : "object" == typeof global && global.global === global ? global : void 0, a = f.navigator && /Macintosh/.test(navigator.userAgent) && /AppleWebKit/.test(navigator.userAgent) && !/Safari/.test(navigator.userAgent), g = f.saveAs || ("object" != typeof window || window !== f ? function() {
      } : "download" in HTMLAnchorElement.prototype && !a ? function(b2, g2, h) {
        var i = f.URL || f.webkitURL, j = document.createElement("a");
        g2 = g2 || b2.name || "download", j.download = g2, j.rel = "noopener", "string" == typeof b2 ? (j.href = b2, j.origin === location.origin ? e(j) : d(j.href) ? c(b2, g2, h) : e(j, j.target = "_blank")) : (j.href = i.createObjectURL(b2), setTimeout(function() {
          i.revokeObjectURL(j.href);
        }, 4e4), setTimeout(function() {
          e(j);
        }, 0));
      } : "msSaveOrOpenBlob" in navigator ? function(f2, g2, h) {
        if (g2 = g2 || f2.name || "download", "string" != typeof f2) navigator.msSaveOrOpenBlob(b(f2, h), g2);
        else if (d(f2)) c(f2, g2, h);
        else {
          var i = document.createElement("a");
          i.href = f2, i.target = "_blank", setTimeout(function() {
            e(i);
          });
        }
      } : function(b2, d2, e2, g2) {
        if (g2 = g2 || open("", "_blank"), g2 && (g2.document.title = g2.document.body.innerText = "downloading..."), "string" == typeof b2) return c(b2, d2, e2);
        var h = "application/octet-stream" === b2.type, i = /constructor/i.test(f.HTMLElement) || f.safari, j = /CriOS\/[\d]+/.test(navigator.userAgent);
        if ((j || h && i || a) && "undefined" != typeof FileReader) {
          var k = new FileReader();
          k.onloadend = function() {
            var a2 = k.result;
            a2 = j ? a2 : a2.replace(/^data:[^;]*;/, "data:attachment/file;"), g2 ? g2.location.href = a2 : location = a2, g2 = null;
          }, k.readAsDataURL(b2);
        } else {
          var l = f.URL || f.webkitURL, m = l.createObjectURL(b2);
          g2 ? g2.location = m : location.href = m, g2 = null, setTimeout(function() {
            l.revokeObjectURL(m);
          }, 4e4);
        }
      });
      f.saveAs = g.saveAs = g, "undefined" != typeof module && (module.exports = g);
    });
  }
});

// src/app/_providers/saver.provider.ts
var import_file_saver = __toESM(require_FileSaver_min());
var SAVER = new InjectionToken("saver");
function getSaver() {
  return import_file_saver.saveAs;
}

// src/app/shared/_models/download.ts
function isHttpResponse(event) {
  return event.type === HttpEventType.Response;
}
function isHttpProgressEvent(event) {
  return event.type === HttpEventType.DownloadProgress || event.type === HttpEventType.UploadProgress;
}
function download(saver) {
  return (source) => source.pipe(scan((previous, event) => {
    if (isHttpProgressEvent(event)) {
      return {
        progress: event.total ? Math.round(100 * event.loaded / event.total) : previous.progress,
        state: "IN_PROGRESS",
        content: null,
        loaded: event.loaded,
        total: event.total
      };
    }
    if (isHttpResponse(event)) {
      if (saver && event.body) {
        saver(event.body, getFilename(event.headers, ""));
      }
      return {
        progress: 100,
        state: "DONE",
        content: event.body,
        filename: getFilename(event.headers, "")
      };
    }
    return previous;
  }, { state: "PENDING", progress: 0, content: null }));
}
function getFilename(headers, defaultName) {
  const tokens = (headers.get("content-disposition") || "").split(";");
  let filename = tokens[1].replace("filename=", "").replace(/"/ig, "").trim();
  if (filename.startsWith("download_") || filename.startsWith("kavita_download_")) {
    const ext = filename.substring(filename.lastIndexOf("."), filename.length);
    if (defaultName !== "") {
      return defaultName + ext;
    }
    return filename.replace("kavita_", "").replace("download_", "");
  }
  return filename;
}

// src/app/shared/_services/download.service.ts
var DEBOUNCE_TIME = 100;
var bytesPipe = new BytesPipe();
var DownloadService = class _DownloadService {
  constructor(save) {
    this.save = save;
    this.baseUrl = environment.apiUrl;
    this.SIZE_WARNING = 104857600;
    this.IOS_SIZE_WARNING = 209715200;
    this.downloadsSource = new BehaviorSubject([]);
    this.activeDownloads$ = this.downloadsSource.asObservable();
    this.downloadQueue = new BehaviorSubject([]);
    this.queuedDownloads$ = this.downloadQueue.asObservable();
    this.destroyRef = inject(DestroyRef);
    this.confirmService = inject(ConfirmService);
    this.accountService = inject(AccountService);
    this.httpClient = inject(HttpClient);
    this.utilityService = inject(UtilityService);
    this.downloadQueue.subscribe((queue) => {
      if (queue.length > 0) {
        const entity = queue.shift();
        console.log("Download Queue shifting entity: ", entity);
        if (entity === void 0)
          return;
        this.processDownload(entity);
      }
    });
  }
  downloadSubtitle(downloadEntityType, downloadEntity) {
    switch (downloadEntityType) {
      case "series":
        return downloadEntity.name;
      case "volume":
        return downloadEntity.minNumber + "";
      case "chapter":
        return downloadEntity.minNumber + "";
      case "bookmark":
        return "";
      case "logs":
        return "";
    }
    return "";
  }
  download(entityType, entity, callback) {
    let sizeCheckCall;
    let downloadCall;
    switch (entityType) {
      case "series":
        sizeCheckCall = this.downloadSeriesSize(entity.id);
        downloadCall = this.downloadSeries(entity);
        break;
      case "volume":
        sizeCheckCall = this.downloadVolumeSize(entity.id);
        downloadCall = this.downloadVolume(entity);
        break;
      case "chapter":
        sizeCheckCall = this.downloadChapterSize(entity.id);
        downloadCall = this.downloadChapter(entity);
        break;
      case "bookmark":
        sizeCheckCall = of(0);
        downloadCall = this.downloadBookmarks(entity);
        break;
      case "logs":
        sizeCheckCall = of(0);
        downloadCall = this.downloadLogs();
        break;
      default:
        return;
    }
    this.accountService.currentUser$.pipe(take(1), switchMap((user) => {
      if (user && user.preferences.promptForDownloadSize) {
        return sizeCheckCall;
      }
      return of(0);
    }), switchMap((size) => __async(this, null, function* () {
      return yield this.confirmSize(size, entityType);
    }))).pipe(filter((wantsToDownload) => {
      return wantsToDownload;
    }), filter((_) => downloadCall !== void 0), switchMap(() => {
      return (downloadCall || of(void 0)).pipe(tap((d) => {
        if (callback)
          callback(d);
      }), takeWhile((val) => {
        return val.state != "DONE";
      }), finalize(() => {
        if (callback)
          callback(void 0);
      }));
    }), takeUntilDestroyed(this.destroyRef)).subscribe(() => {
    });
  }
  downloadSeriesSize(seriesId) {
    return this.httpClient.get(this.baseUrl + "download/series-size?seriesId=" + seriesId);
  }
  downloadVolumeSize(volumeId) {
    return this.httpClient.get(this.baseUrl + "download/volume-size?volumeId=" + volumeId);
  }
  downloadChapterSize(chapterId) {
    return this.httpClient.get(this.baseUrl + "download/chapter-size?chapterId=" + chapterId);
  }
  downloadLogs() {
    const downloadType = "logs";
    const subtitle = this.downloadSubtitle(downloadType, void 0);
    return this.httpClient.get(this.baseUrl + "server/logs", { observe: "events", responseType: "blob", reportProgress: true }).pipe(throttleTime(DEBOUNCE_TIME, asyncScheduler, { leading: true, trailing: true }), download((blob, filename) => {
      this.save(blob, decodeURIComponent(filename));
    }), tap((d) => this.updateDownloadState(d, downloadType, subtitle, 0)), finalize(() => this.finalizeDownloadState(downloadType, subtitle)));
  }
  getIdKey(entity) {
    if (this.utilityService.isVolume(entity))
      return "volumeId";
    if (this.utilityService.isChapter(entity))
      return "chapterId";
    if (this.utilityService.isSeries(entity))
      return "seriesId";
    return "id";
  }
  getDownloadEntityType(entity) {
    if (this.utilityService.isVolume(entity))
      return "volume";
    if (this.utilityService.isChapter(entity))
      return "chapter";
    if (this.utilityService.isSeries(entity))
      return "series";
    return "logs";
  }
  downloadEntity(entity) {
    const downloadEntityType = this.getDownloadEntityType(entity);
    const subtitle = this.downloadSubtitle(downloadEntityType, entity);
    const idKey = this.getIdKey(entity);
    const url = `${this.baseUrl}download/${downloadEntityType}?${idKey}=${entity.id}`;
    return this.httpClient.get(url, { observe: "events", responseType: "blob", reportProgress: true }).pipe(throttleTime(DEBOUNCE_TIME, asyncScheduler, { leading: true, trailing: true }), download((blob, filename) => {
      this.save(blob, decodeURIComponent(filename));
    }), tap((d) => this.updateDownloadState(d, downloadEntityType, subtitle, entity.id)), finalize(() => this.finalizeDownloadState(downloadEntityType, subtitle)));
  }
  downloadSeries(series) {
    const downloadType = "series";
    const subtitle = this.downloadSubtitle(downloadType, series);
    return this.httpClient.get(this.baseUrl + "download/series?seriesId=" + series.id, { observe: "events", responseType: "blob", reportProgress: true }).pipe(throttleTime(DEBOUNCE_TIME, asyncScheduler, { leading: true, trailing: true }), download((blob, filename) => {
      this.save(blob, decodeURIComponent(filename));
    }), tap((d) => this.updateDownloadState(d, downloadType, subtitle, series.id)), finalize(() => this.finalizeDownloadState(downloadType, subtitle)));
  }
  finalizeDownloadState(entityType, entitySubtitle) {
    let values = this.downloadsSource.getValue();
    values = values.filter((v) => !(v.entityType === entityType && v.subTitle === entitySubtitle));
    this.downloadsSource.next(values);
  }
  updateDownloadState(d, entityType, entitySubtitle, id) {
    let values = this.downloadsSource.getValue();
    if (d.state === "PENDING") {
      const index = values.findIndex((v) => v.entityType === entityType && v.subTitle === entitySubtitle);
      if (index >= 0)
        return;
      values.push({ entityType, subTitle: entitySubtitle, progress: 0, id });
    } else if (d.state === "IN_PROGRESS") {
      const index = values.findIndex((v) => v.entityType === entityType && v.subTitle === entitySubtitle);
      if (index >= 0) {
        values[index].progress = d.progress;
      }
    } else if (d.state === "DONE") {
      values = values.filter((v) => !(v.entityType === entityType && v.subTitle === entitySubtitle));
    }
    this.downloadsSource.next(values);
  }
  downloadChapter(chapter) {
    return this.downloadEntity(chapter);
  }
  downloadVolume(volume) {
    return this.downloadEntity(volume);
  }
  confirmSize(size, entityType) {
    return __async(this, null, function* () {
      const showIosWarning = size > this.IOS_SIZE_WARNING && /iPad|iPhone|iPod/.test(navigator.userAgent);
      return size < this.SIZE_WARNING || (yield this.confirmService.confirm(translate("toasts.confirm-download-size", { entityType: translate("entity-type." + entityType), size: bytesPipe.transform(size) }) + (!showIosWarning ? "" : "<br/><br/>" + translate("toasts.confirm-download-size-ios"))));
    });
  }
  downloadBookmarks(bookmarks) {
    const downloadType = "bookmark";
    const subtitle = this.downloadSubtitle(downloadType, bookmarks);
    return this.httpClient.post(this.baseUrl + "download/bookmarks", { bookmarks }, { observe: "events", responseType: "blob", reportProgress: true }).pipe(throttleTime(DEBOUNCE_TIME, asyncScheduler, { leading: true, trailing: true }), download((blob, filename) => {
      this.save(blob, decodeURIComponent(filename));
    }), tap((d) => this.updateDownloadState(d, downloadType, subtitle, 0)), finalize(() => this.finalizeDownloadState(downloadType, subtitle)));
  }
  processDownload(entity) {
    const downloadObservable = this.downloadEntity(entity);
    console.log("Process Download called for entity: ", entity);
    downloadObservable.subscribe((downloadEvent) => {
      if (downloadEvent.state === "DONE") {
        this.processNextDownload();
      }
    });
  }
  processNextDownload() {
    const currentQueue = this.downloadQueue.value;
    if (currentQueue.length > 0) {
      const nextEntity = currentQueue[0];
      this.processDownload(nextEntity);
    }
  }
  enqueueDownload(entity) {
    const currentQueue = this.downloadQueue.value;
    const newQueue = [...currentQueue, entity];
    this.downloadQueue.next(newQueue);
    if (currentQueue.length === 0) {
      this.processNextDownload();
    }
  }
  mapToEntityType(events, entity) {
    if (this.utilityService.isSeries(entity)) {
      return events.find((e) => e.entityType === "series" && e.id == entity.id && e.subTitle === this.downloadSubtitle("series", entity)) || null;
    }
    if (this.utilityService.isVolume(entity)) {
      return events.find((e) => e.entityType === "volume" && e.id == entity.id && e.subTitle === this.downloadSubtitle("volume", entity)) || null;
    }
    if (this.utilityService.isChapter(entity)) {
      return events.find((e) => e.entityType === "chapter" && e.id == entity.id && e.subTitle === this.downloadSubtitle("chapter", entity)) || null;
    }
    if (entity.hasOwnProperty("length")) {
      return events.find((e) => e.entityType === "bookmark" && e.subTitle === this.downloadSubtitle("bookmark", [entity])) || null;
    }
    return null;
  }
  static {
    this.\u0275fac = function DownloadService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _DownloadService)(\u0275\u0275inject(SAVER));
    };
  }
  static {
    this.\u0275prov = \u0275\u0275defineInjectable({ token: _DownloadService, factory: _DownloadService.\u0275fac, providedIn: "root" });
  }
};

export {
  download,
  SAVER,
  getSaver,
  DEBOUNCE_TIME,
  DownloadService
};
//# sourceMappingURL=chunk-CVI764VQ.js.map
