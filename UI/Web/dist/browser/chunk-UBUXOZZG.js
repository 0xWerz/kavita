import {
  CardItemComponent
} from "./chunk-AVPZRN66.js";
import {
  SeriesCardComponent
} from "./chunk-ZBG2BUFS.js";
import {
  CarouselReelComponent
} from "./chunk-RGQOJ2I6.js";
import {
  ImageService
} from "./chunk-TPURWX2Y.js";
import {
  Router
} from "./chunk-U2DWQJI2.js";
import {
  TranslocoDirective,
  inject,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor
} from "./chunk-PYHIUVNJ.js";

// src/app/_single-module/related-tab/related-tab.component.ts
function RelatedTabComponent_ng_container_0_Conditional_2_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-series-card", 4);
  }
  if (rf & 2) {
    const item_r1 = ctx.$implicit;
    \u0275\u0275property("series", item_r1.series)("libraryId", item_r1.series.libraryId)("relation", item_r1.relation);
  }
}
function RelatedTabComponent_ng_container_0_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "app-carousel-reel", 3);
    \u0275\u0275template(1, RelatedTabComponent_ng_container_0_Conditional_2_ng_template_1_Template, 1, 3, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r2 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("items", ctx_r2.relations)("title", t_r2("relations-title"));
  }
}
function RelatedTabComponent_ng_container_0_Conditional_3_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-card-item", 5);
    \u0275\u0275listener("clicked", function RelatedTabComponent_ng_container_0_Conditional_3_ng_template_1_Template_app_card_item_clicked_0_listener() {
      const item_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.openCollection(item_r5));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r5 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275property("title", item_r5.title)("entity", item_r5)("count", item_r5.itemCount)("suppressLibraryLink", true)("imageUrl", ctx_r2.imageService.getCollectionCoverImage(item_r5.id))("linkUrl", "/collections/" + item_r5.id)("showFormat", false);
  }
}
function RelatedTabComponent_ng_container_0_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "app-carousel-reel", 3);
    \u0275\u0275template(1, RelatedTabComponent_ng_container_0_Conditional_3_ng_template_1_Template, 1, 7, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r2 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("items", ctx_r2.collections)("title", t_r2("collections-title"));
  }
}
function RelatedTabComponent_ng_container_0_Conditional_4_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-card-item", 5);
    \u0275\u0275listener("clicked", function RelatedTabComponent_ng_container_0_Conditional_4_ng_template_1_Template_app_card_item_clicked_0_listener() {
      const item_r7 = \u0275\u0275restoreView(_r6).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.openReadingList(item_r7));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r7 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275property("title", item_r7.title)("entity", item_r7)("count", item_r7.itemCount)("suppressLibraryLink", true)("imageUrl", ctx_r2.imageService.getReadingListCoverImage(item_r7.id))("linkUrl", "/lists/" + item_r7.id)("showFormat", false);
  }
}
function RelatedTabComponent_ng_container_0_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "app-carousel-reel", 3);
    \u0275\u0275template(1, RelatedTabComponent_ng_container_0_Conditional_4_ng_template_1_Template, 1, 7, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r2 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("items", ctx_r2.readingLists)("title", t_r2("reading-lists-title"));
  }
}
function RelatedTabComponent_ng_container_0_Conditional_5_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-card-item", 6);
    \u0275\u0275listener("clicked", function RelatedTabComponent_ng_container_0_Conditional_5_ng_template_1_Template_app_card_item_clicked_0_listener() {
      const item_r9 = \u0275\u0275restoreView(_r8).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.viewBookmark(item_r9));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r9 = ctx.$implicit;
    const t_r2 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("entity", item_r9)("title", t_r2("bookmarks-title"))("imageUrl", ctx_r2.imageService.getSeriesCoverImage(item_r9.seriesId))("suppressArchiveWarning", true)("linkUrl", "/library/" + ctx_r2.libraryId + "/series/" + item_r9.seriesId + "/manga/0?bookmarkMode=true")("count", ctx_r2.bookmarks.length)("allowSelection", false);
  }
}
function RelatedTabComponent_ng_container_0_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "app-carousel-reel", 3);
    \u0275\u0275template(1, RelatedTabComponent_ng_container_0_Conditional_5_ng_template_1_Template, 1, 7, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r2 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("items", ctx_r2.bookmarks)("title", t_r2("bookmarks-title"));
  }
}
function RelatedTabComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 2);
    \u0275\u0275template(2, RelatedTabComponent_ng_container_0_Conditional_2_Template, 3, 2, "app-carousel-reel", 3)(3, RelatedTabComponent_ng_container_0_Conditional_3_Template, 3, 2, "app-carousel-reel", 3)(4, RelatedTabComponent_ng_container_0_Conditional_4_Template, 3, 2, "app-carousel-reel", 3)(5, RelatedTabComponent_ng_container_0_Conditional_5_Template, 3, 2, "app-carousel-reel", 3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r2.relations.length > 0 ? 2 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.collections.length > 0 ? 3 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.readingLists.length > 0 ? 4 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.bookmarks.length > 0 ? 5 : -1);
  }
}
var RelatedTabComponent = class _RelatedTabComponent {
  constructor() {
    this.imageService = inject(ImageService);
    this.router = inject(Router);
    this.readingLists = [];
    this.collections = [];
    this.relations = [];
    this.bookmarks = [];
  }
  openReadingList(readingList) {
    this.router.navigate(["lists", readingList.id]);
  }
  openCollection(collection) {
    this.router.navigate(["collections", collection.id]);
  }
  viewBookmark(bookmark) {
    this.router.navigate(["library", this.libraryId, "series", bookmark.seriesId, "manga", 0], { queryParams: { incognitoMode: false, bookmarkMode: true } });
  }
  static {
    this.\u0275fac = function RelatedTabComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _RelatedTabComponent)();
    };
  }
  static {
    this.\u0275cmp = \u0275\u0275defineComponent({ type: _RelatedTabComponent, selectors: [["app-related-tab"]], inputs: { readingLists: "readingLists", collections: "collections", relations: "relations", bookmarks: "bookmarks", libraryId: "libraryId" }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 1, vars: 1, consts: [["carouselItem", ""], [4, "transloco", "translocoRead"], [1, "pb-2"], [3, "items", "title"], [1, "col-auto", "mt-2", "mb-2", 3, "series", "libraryId", "relation"], [3, "clicked", "title", "entity", "count", "suppressLibraryLink", "imageUrl", "linkUrl", "showFormat"], [3, "clicked", "entity", "title", "imageUrl", "suppressArchiveWarning", "linkUrl", "count", "allowSelection"]], template: function RelatedTabComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, RelatedTabComponent_ng_container_0_Template, 6, 4, "ng-container", 1);
      }
      if (rf & 2) {
        \u0275\u0275property("translocoRead", "related-tab");
      }
    }, dependencies: [
      CardItemComponent,
      CarouselReelComponent,
      TranslocoDirective,
      SeriesCardComponent
    ], changeDetection: 0 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(RelatedTabComponent, { className: "RelatedTabComponent", filePath: "src/app/_single-module/related-tab/related-tab.component.ts", lineNumber: 32 });
})();

export {
  RelatedTabComponent
};
//# sourceMappingURL=chunk-UBUXOZZG.js.map
