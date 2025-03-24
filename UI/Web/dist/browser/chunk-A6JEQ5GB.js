import {
  MangaFormat
} from "./chunk-RSMGJKYW.js";
import {
  ReplaySubject,
  debounceTime,
  shareReplay,
  translate,
  ɵɵdefineInjectable
} from "./chunk-PYHIUVNJ.js";

// src/app/_models/library/library.ts
var LibraryType;
(function(LibraryType2) {
  LibraryType2[LibraryType2["Manga"] = 0] = "Manga";
  LibraryType2[LibraryType2["Comic"] = 1] = "Comic";
  LibraryType2[LibraryType2["Book"] = 2] = "Book";
  LibraryType2[LibraryType2["Images"] = 3] = "Images";
  LibraryType2[LibraryType2["LightNovel"] = 4] = "LightNovel";
  LibraryType2[LibraryType2["ComicVine"] = 5] = "ComicVine";
})(LibraryType || (LibraryType = {}));
var allLibraryTypes = [LibraryType.Manga, LibraryType.ComicVine, LibraryType.Comic, LibraryType.Book, LibraryType.LightNovel, LibraryType.Images];

// src/app/_models/pagination.ts
var Pagination = class {
  constructor() {
    this.currentPage = 0;
    this.itemsPerPage = 0;
    this.totalItems = 0;
    this.totalPages = 0;
  }
};
var PaginatedResult = class {
};

// src/app/shared/_services/utility.service.ts
var KEY_CODES;
(function(KEY_CODES2) {
  KEY_CODES2["RIGHT_ARROW"] = "ArrowRight";
  KEY_CODES2["LEFT_ARROW"] = "ArrowLeft";
  KEY_CODES2["DOWN_ARROW"] = "ArrowDown";
  KEY_CODES2["UP_ARROW"] = "ArrowUp";
  KEY_CODES2["ESC_KEY"] = "Escape";
  KEY_CODES2["SPACE"] = " ";
  KEY_CODES2["ENTER"] = "Enter";
  KEY_CODES2["G"] = "g";
  KEY_CODES2["B"] = "b";
  KEY_CODES2["F"] = "f";
  KEY_CODES2["H"] = "h";
  KEY_CODES2["BACKSPACE"] = "Backspace";
  KEY_CODES2["DELETE"] = "Delete";
  KEY_CODES2["SHIFT"] = "Shift";
})(KEY_CODES || (KEY_CODES = {}));
var Breakpoint;
(function(Breakpoint2) {
  Breakpoint2[Breakpoint2["Mobile"] = 768] = "Mobile";
  Breakpoint2[Breakpoint2["Tablet"] = 1280] = "Tablet";
  Breakpoint2[Breakpoint2["Desktop"] = 1440] = "Desktop";
})(Breakpoint || (Breakpoint = {}));
var UtilityService = class _UtilityService {
  constructor() {
    this.activeBreakpointSource = new ReplaySubject(1);
    this.activeBreakpoint$ = this.activeBreakpointSource.asObservable().pipe(debounceTime(60), shareReplay({ bufferSize: 1, refCount: true }));
    this.mangaFormatKeys = [];
    this.sortChapters = (a, b) => {
      return a.minNumber - b.minNumber;
    };
  }
  mangaFormatToText(format) {
    if (this.mangaFormatKeys === void 0 || this.mangaFormatKeys.length === 0) {
      this.mangaFormatKeys = Object.keys(MangaFormat);
    }
    return this.mangaFormatKeys.filter((item) => MangaFormat[format] === item)[0];
  }
  formatChapterName(libraryType, includeHash = false, includeSpace = false, plural = false) {
    const extra = plural ? "s" : "";
    switch (libraryType) {
      case LibraryType.Book:
      case LibraryType.LightNovel:
        return translate("common.book-num" + extra) + (includeSpace ? " " : "");
      case LibraryType.Comic:
      case LibraryType.ComicVine:
        if (includeHash) {
          return translate("common.issue-hash-num");
        }
        return translate("common.issue-num" + extra) + (includeSpace ? " " : "");
      case LibraryType.Images:
      case LibraryType.Manga:
        return translate("common.chapter-num" + extra) + (includeSpace ? " " : "");
    }
  }
  filter(input, filter) {
    if (input === null || filter === null || input === void 0 || filter === void 0)
      return false;
    const reg = /[_\.\-]/gi;
    return input.toUpperCase().replace(reg, "").includes(filter.toUpperCase().replace(reg, ""));
  }
  filterMatches(input, filter) {
    if (input === null || filter === null || input === void 0 || filter === void 0)
      return false;
    const reg = /[_\.\-]/gi;
    return input.toUpperCase().replace(reg, "") === filter.toUpperCase().replace(reg, "");
  }
  isVolume(d) {
    return d != null && d.hasOwnProperty("chapters");
  }
  isChapter(d) {
    return d != null && d.hasOwnProperty("volumeId");
  }
  isSeries(d) {
    return d != null && d.hasOwnProperty("originalName");
  }
  asVolume(d) {
    return d;
  }
  asChapter(d) {
    return d;
  }
  asSeries(d) {
    return d;
  }
  getActiveBreakpoint() {
    if (window.innerWidth <= Breakpoint.Mobile)
      return Breakpoint.Mobile;
    else if (window.innerWidth > Breakpoint.Mobile && window.innerWidth <= Breakpoint.Tablet)
      return Breakpoint.Tablet;
    else if (window.innerWidth > Breakpoint.Tablet)
      return Breakpoint.Desktop;
    return Breakpoint.Desktop;
  }
  isInViewport(element, additionalTopOffset = 0) {
    const rect = element.getBoundingClientRect();
    return rect.top >= additionalTopOffset && rect.left >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && rect.right <= (window.innerWidth || document.documentElement.clientWidth);
  }
  deepEqual(object1, object2) {
    if ((object1 === null || object1 === void 0) && (object2 !== null || object2 !== void 0))
      return false;
    if ((object2 === null || object2 === void 0) && (object1 !== null || object1 !== void 0))
      return false;
    if (object1 === null && object2 === null)
      return true;
    if (object1 === void 0 && object2 === void 0)
      return true;
    const keys1 = Object.keys(object1);
    const keys2 = Object.keys(object2);
    if (keys1.length !== keys2.length) {
      return false;
    }
    for (const key of keys1) {
      const val1 = object1[key];
      const val2 = object2[key];
      const areObjects = this.isObject(val1) && this.isObject(val2);
      if (areObjects && !this.deepEqual(val1, val2) || !areObjects && val1 !== val2) {
        return false;
      }
    }
    return true;
  }
  isObject(object) {
    return object != null && typeof object === "object";
  }
  addPaginationIfExists(params, pageNum, itemsPerPage) {
    if (pageNum !== null && pageNum !== void 0 && itemsPerPage !== null && itemsPerPage !== void 0) {
      params = params.append("pageNumber", pageNum + "");
      params = params.append("pageSize", itemsPerPage + "");
    }
    return params;
  }
  createPaginatedResult(response, paginatedVariable = void 0) {
    if (paginatedVariable === void 0) {
      paginatedVariable = new PaginatedResult();
    }
    if (response.body === null) {
      paginatedVariable.result = [];
    } else {
      paginatedVariable.result = response.body;
    }
    const pageHeader = response.headers?.get("Pagination");
    if (pageHeader !== null) {
      paginatedVariable.pagination = JSON.parse(pageHeader);
    }
    return paginatedVariable;
  }
  getWindowDimensions() {
    const windowWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    const windowHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
    return [windowWidth, windowHeight];
  }
  static {
    this.\u0275fac = function UtilityService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _UtilityService)();
    };
  }
  static {
    this.\u0275prov = \u0275\u0275defineInjectable({ token: _UtilityService, factory: _UtilityService.\u0275fac, providedIn: "root" });
  }
};

export {
  LibraryType,
  allLibraryTypes,
  Pagination,
  PaginatedResult,
  KEY_CODES,
  Breakpoint,
  UtilityService
};
//# sourceMappingURL=chunk-A6JEQ5GB.js.map
