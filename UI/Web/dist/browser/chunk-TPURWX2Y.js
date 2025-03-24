import {
  AccountService,
  ThemeService
} from "./chunk-U2DWQJI2.js";
import {
  environment
} from "./chunk-CQADFT7F.js";
import {
  DestroyRef,
  inject,
  takeUntilDestroyed,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-PYHIUVNJ.js";

// src/app/_services/image.service.ts
var ImageService = class _ImageService {
  constructor(accountService, themeService) {
    this.accountService = accountService;
    this.themeService = themeService;
    this.destroyRef = inject(DestroyRef);
    this.baseUrl = environment.apiUrl;
    this.apiKey = "";
    this.encodedKey = "";
    this.placeholderImage = "assets/images/image-placeholder.dark-min.png";
    this.errorImage = "assets/images/error-placeholder2.dark-min.png";
    this.resetCoverImage = "assets/images/image-reset-cover-min.png";
    this.errorWebLinkImage = "assets/images/broken-white-32x32.png";
    this.nextChapterImage = "assets/images/image-placeholder.dark-min.png";
    this.noPersonImage = "assets/images/error-person-missing.dark.min.png";
    this.themeService.currentTheme$.pipe(takeUntilDestroyed(this.destroyRef)).subscribe((theme) => {
      if (this.themeService.isDarkTheme()) {
        this.placeholderImage = "assets/images/image-placeholder.dark-min.png";
        this.errorImage = "assets/images/error-placeholder2.dark-min.png";
        this.errorWebLinkImage = "assets/images/broken-black-32x32.png";
        this.noPersonImage = "assets/images/error-person-missing.dark.min.png";
      } else {
        this.placeholderImage = "assets/images/image-placeholder-min.png";
        this.errorImage = "assets/images/error-placeholder2-min.png";
        this.errorWebLinkImage = "assets/images/broken-white-32x32.png";
        this.noPersonImage = "assets/images/error-person-missing.min.png";
      }
    });
    this.accountService.currentUser$.pipe(takeUntilDestroyed(this.destroyRef)).subscribe((user) => {
      if (user) {
        this.apiKey = user.apiKey;
        this.encodedKey = encodeURIComponent(this.apiKey);
      }
    });
  }
  getRecentlyAddedItem(item) {
    if (item.chapterId === 0) {
      return this.getVolumeCoverImage(item.volumeId);
    }
    return this.getChapterCoverImage(item.chapterId);
  }
  getEntityTypeFromUrl(url) {
    if (url.indexOf("?") < 0)
      return void 0;
    const part = url.split("?")[1];
    const equalIndex = part.indexOf("=");
    return part.substring(0, equalIndex).replace("Id", "");
  }
  getPersonImage(personId) {
    return `${this.baseUrl}image/person-cover?personId=${personId}&apiKey=${this.encodedKey}`;
  }
  getPersonImageByName(name) {
    return `${this.baseUrl}image/person-cover-by-name?name=${name}&apiKey=${this.encodedKey}`;
  }
  getLibraryCoverImage(libraryId) {
    return `${this.baseUrl}image/library-cover?libraryId=${libraryId}&apiKey=${this.encodedKey}`;
  }
  getVolumeCoverImage(volumeId) {
    return `${this.baseUrl}image/volume-cover?volumeId=${volumeId}&apiKey=${this.encodedKey}`;
  }
  getSeriesCoverImage(seriesId) {
    return `${this.baseUrl}image/series-cover?seriesId=${seriesId}&apiKey=${this.encodedKey}`;
  }
  getCollectionCoverImage(collectionTagId) {
    return `${this.baseUrl}image/collection-cover?collectionTagId=${collectionTagId}&apiKey=${this.encodedKey}`;
  }
  getReadingListCoverImage(readingListId) {
    return `${this.baseUrl}image/readinglist-cover?readingListId=${readingListId}&apiKey=${this.encodedKey}`;
  }
  getChapterCoverImage(chapterId) {
    return `${this.baseUrl}image/chapter-cover?chapterId=${chapterId}&apiKey=${this.encodedKey}`;
  }
  getBookmarkedImage(chapterId, pageNum) {
    return `${this.baseUrl}image/bookmark?chapterId=${chapterId}&apiKey=${this.encodedKey}&pageNum=${pageNum}`;
  }
  getWebLinkImage(url) {
    return `${this.baseUrl}image/web-link?url=${encodeURIComponent(url)}&apiKey=${this.encodedKey}`;
  }
  getPublisherImage(name) {
    return `${this.baseUrl}image/publisher?publisherName=${encodeURIComponent(name)}&apiKey=${this.encodedKey}`;
  }
  getCoverUploadImage(filename) {
    return `${this.baseUrl}image/cover-upload?filename=${encodeURIComponent(filename)}&apiKey=${this.encodedKey}`;
  }
  updateErroredWebLinkImage(event) {
    event.target.src = this.errorWebLinkImage;
  }
  randomize(url) {
    const r = Math.round(Math.random() * 100 + 1);
    if (url.indexOf("&random") >= 0) {
      return url + 1;
    }
    return url + "&random=" + r;
  }
  static {
    this.\u0275fac = function ImageService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ImageService)(\u0275\u0275inject(AccountService), \u0275\u0275inject(ThemeService));
    };
  }
  static {
    this.\u0275prov = \u0275\u0275defineInjectable({ token: _ImageService, factory: _ImageService.\u0275fac, providedIn: "root" });
  }
};

export {
  ImageService
};
//# sourceMappingURL=chunk-TPURWX2Y.js.map
