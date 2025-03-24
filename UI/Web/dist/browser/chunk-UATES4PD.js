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

// src/app/book-reader/_services/book.service.ts
var BookService = class _BookService {
  constructor(http) {
    this.http = http;
    this.baseUrl = environment.apiUrl;
  }
  getFontFamilies() {
    return [
      { title: "default", family: "default" },
      { title: "EBGaramond", family: "EBGaramond" },
      { title: "Fira Sans", family: "Fira_Sans" },
      { title: "Lato", family: "Lato" },
      { title: "Libre Baskerville", family: "Libre_Baskerville" },
      { title: "Merriweather", family: "Merriweather" },
      { title: "Nanum Gothic", family: "Nanum_Gothic" },
      { title: "Open Dyslexic", family: "OpenDyslexic2" },
      { title: "RocknRoll One", family: "RocknRoll_One" },
      { title: "Fast Font Serif (Bionic)", family: "FastFontSerif" },
      { title: "Fast Font Sans (Bionic)", family: "FastFontSans" }
    ];
  }
  getBookChapters(chapterId) {
    return this.http.get(this.baseUrl + "book/" + chapterId + "/chapters");
  }
  getBookPage(chapterId, page) {
    return this.http.get(this.baseUrl + "book/" + chapterId + "/book-page?page=" + page, TextResonse);
  }
  getBookInfo(chapterId) {
    return this.http.get(this.baseUrl + "book/" + chapterId + "/book-info");
  }
  getBookPageUrl(chapterId, page) {
    return this.baseUrl + "book/" + chapterId + "/book-page?page=" + page;
  }
  static {
    this.\u0275fac = function BookService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _BookService)(\u0275\u0275inject(HttpClient));
    };
  }
  static {
    this.\u0275prov = \u0275\u0275defineInjectable({ token: _BookService, factory: _BookService.\u0275fac, providedIn: "root" });
  }
};

export {
  BookService
};
//# sourceMappingURL=chunk-UATES4PD.js.map
