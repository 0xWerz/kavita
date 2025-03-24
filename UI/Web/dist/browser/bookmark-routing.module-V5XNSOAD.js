import {
  CardDetailLayoutComponent,
  FilterSettings,
  JumpbarService
} from "./chunk-5ZZKBPDI.js";
import "./chunk-3CC6XT7E.js";
import {
  CardItemComponent
} from "./chunk-AVPZRN66.js";
import {
  SideNavCompanionBarComponent
} from "./chunk-UXZKIERU.js";
import {
  BulkOperationsComponent
} from "./chunk-NUIJYMCR.js";
import "./chunk-MBZDR44C.js";
import "./chunk-3H6WDNS7.js";
import {
  BulkSelectionService
} from "./chunk-OMYYKEHJ.js";
import "./chunk-AFXXYIIH.js";
import "./chunk-LOI3GAWB.js";
import "./chunk-CUVDZVWA.js";
import "./chunk-454HUQZW.js";
import "./chunk-7GKAFCLA.js";
import "./chunk-FAULLNLJ.js";
import {
  FilterUtilitiesService
} from "./chunk-SBBWMOEE.js";
import "./chunk-W4DBALQX.js";
import "./chunk-6M2JHRYX.js";
import {
  ReaderService
} from "./chunk-D2FQ65JS.js";
import "./chunk-AOHQX7B2.js";
import {
  WikiLink
} from "./chunk-GX7EGMKV.js";
import "./chunk-IQIEDCQT.js";
import "./chunk-RMZ6EY72.js";
import {
  DownloadService
} from "./chunk-CVI764VQ.js";
import "./chunk-C423WP7Y.js";
import "./chunk-PBM62GK4.js";
import "./chunk-2L2JQBKQ.js";
import "./chunk-2JLAQ3MZ.js";
import {
  ImageService
} from "./chunk-TPURWX2Y.js";
import "./chunk-IBO6ECG5.js";
import "./chunk-BX5PUGWH.js";
import "./chunk-D7CIAEAO.js";
import "./chunk-LGLLZBOI.js";
import "./chunk-EA72DBFY.js";
import "./chunk-HN36WWH3.js";
import {
  Pagination
} from "./chunk-A6JEQ5GB.js";
import "./chunk-RSMGJKYW.js";
import {
  Action,
  ActionFactoryService,
  ActivatedRoute,
  Router
} from "./chunk-U2DWQJI2.js";
import {
  ConfirmService
} from "./chunk-2R2RCU4Y.js";
import {
  ToastrService
} from "./chunk-5J5IKBMT.js";
import "./chunk-PUXELTB2.js";
import {
  Title
} from "./chunk-FLGYJHAG.js";
import "./chunk-BPOUBDX2.js";
import "./chunk-CQADFT7F.js";
import {
  ChangeDetectorRef,
  DecimalPipe,
  EventEmitter,
  TranslocoDirective,
  TranslocoService,
  __async,
  inject,
  take,
  translate,
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
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-PYHIUVNJ.js";

// src/app/bookmark/_components/bookmarks/bookmarks.component.ts
var _c0 = (a0) => ({ num: a0 });
function BookmarksComponent_ng_container_1_Conditional_8_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-card-item", 10);
    \u0275\u0275listener("clicked", function BookmarksComponent_ng_container_1_Conditional_8_ng_template_1_Template_app_card_item_clicked_0_listener() {
      const item_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.viewBookmarks(item_r5));
    })("selection", function BookmarksComponent_ng_container_1_Conditional_8_ng_template_1_Template_app_card_item_selection_0_listener($event) {
      const position_r6 = \u0275\u0275restoreView(_r4).idx;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.bulkSelectionService.handleCardSelection("bookmark", position_r6, ctx_r1.series.length, $event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r5 = ctx.$implicit;
    const position_r6 = ctx.idx;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("entity", item_r5)("title", item_r5.name)("imageUrl", ctx_r1.imageService.getSeriesCoverImage(item_r5.id))("suppressArchiveWarning", true)("count", ctx_r1.seriesIds[item_r5.id])("allowSelection", true)("actions", ctx_r1.actions)("selected", ctx_r1.bulkSelectionService.isCardSelected("bookmark", position_r6));
  }
}
function BookmarksComponent_ng_container_1_Conditional_8_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275elementStart(1, "a", 11);
    \u0275\u0275text(2);
    \u0275\u0275element(3, "i", 12);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r7 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275textInterpolate1(" ", t_r7("no-data"), " ");
    \u0275\u0275advance();
    \u0275\u0275property("href", ctx_r1.WikiLink.Bookmarks, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(t_r7("no-data-2"));
  }
}
function BookmarksComponent_ng_container_1_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-card-detail-layout", 9);
    \u0275\u0275listener("applyFilter", function BookmarksComponent_ng_container_1_Conditional_8_Template_app_card_detail_layout_applyFilter_0_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.updateFilter($event));
    });
    \u0275\u0275template(1, BookmarksComponent_ng_container_1_Conditional_8_ng_template_1_Template, 1, 8, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(3, BookmarksComponent_ng_container_1_Conditional_8_ng_template_3_Template, 4, 3, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("isLoading", ctx_r1.loadingBookmarks)("items", ctx_r1.series)("filterSettings", ctx_r1.filterSettings)("trackByIdentity", ctx_r1.trackByIdentity)("refresh", ctx_r1.refresh)("jumpBarKeys", ctx_r1.jumpbarKeys);
  }
}
function BookmarksComponent_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "app-side-nav-companion-bar", 4);
    \u0275\u0275listener("filterOpen", function BookmarksComponent_ng_container_1_Template_app_side_nav_companion_bar_filterOpen_1_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.filterOpen.emit($event));
    });
    \u0275\u0275elementStart(2, "h4", 5);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "h5", 6);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(7, "app-bulk-operations", 7);
    \u0275\u0275template(8, BookmarksComponent_ng_container_1_Conditional_8_Template, 5, 6, "app-card-detail-layout", 8);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const t_r7 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("hasFilter", true)("filterActive", ctx_r1.filterActive);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", t_r7("title"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r7("series-count", \u0275\u0275pureFunction1(8, _c0, \u0275\u0275pipeBind1(6, 6, ctx_r1.series.length))));
    \u0275\u0275advance(2);
    \u0275\u0275property("actionCallback", ctx_r1.bulkActionCallback);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.filter ? 8 : -1);
  }
}
var BookmarksComponent = class _BookmarksComponent {
  constructor() {
    this.translocoService = inject(TranslocoService);
    this.readerService = inject(ReaderService);
    this.downloadService = inject(DownloadService);
    this.toastr = inject(ToastrService);
    this.confirmService = inject(ConfirmService);
    this.actionFactoryService = inject(ActionFactoryService);
    this.router = inject(Router);
    this.cdRef = inject(ChangeDetectorRef);
    this.filterUtilityService = inject(FilterUtilitiesService);
    this.route = inject(ActivatedRoute);
    this.jumpbarService = inject(JumpbarService);
    this.titleService = inject(Title);
    this.bulkSelectionService = inject(BulkSelectionService);
    this.imageService = inject(ImageService);
    this.WikiLink = WikiLink;
    this.bookmarks = [];
    this.series = [];
    this.loadingBookmarks = false;
    this.seriesIds = {};
    this.clearingSeries = {};
    this.actions = [];
    this.jumpbarKeys = [];
    this.pagination = new Pagination();
    this.filter = void 0;
    this.filterSettings = new FilterSettings();
    this.filterOpen = new EventEmitter();
    this.filterActive = false;
    this.trackByIdentity = (index, item) => `${item.name}_${item.localizedName}_${item.pagesRead}`;
    this.refresh = new EventEmitter();
    this.bulkActionCallback = (action, data) => __async(this, null, function* () {
      const selectedSeriesIndexies = this.bulkSelectionService.getSelectedCardsForSource("bookmark");
      const selectedSeries = this.series.filter((series, index) => selectedSeriesIndexies.includes(index + ""));
      const seriesIds = selectedSeries.map((item) => item.id);
      switch (action.action) {
        case Action.DownloadBookmark:
          this.downloadService.download("bookmark", this.bookmarks.filter((bmk) => seriesIds.includes(bmk.seriesId)), (d) => {
            if (!d) {
              this.bulkSelectionService.deselectAll();
            }
          });
          break;
        case Action.Delete:
          if (!(yield this.confirmService.confirm(this.translocoService.translate("bookmarks.confirm-delete")))) {
            break;
          }
          this.readerService.clearMultipleBookmarks(seriesIds).subscribe(() => {
            this.toastr.success(this.translocoService.translate("bookmarks.delete-success"));
            this.bulkSelectionService.deselectAll();
            this.loadPage();
          });
          break;
        default:
          break;
      }
    });
    this.filterUtilityService.filterPresetsFromUrl(this.route.snapshot).subscribe((filter) => {
      this.filter = filter;
      this.filterActiveCheck = this.filterUtilityService.createSeriesV2Filter();
      this.filterActiveCheck.statements.push(this.filterUtilityService.createSeriesV2DefaultStatement());
      this.filterSettings.presetsV2 = this.filter;
      this.filterSettings.statementLimit = 1;
      this.cdRef.markForCheck();
    });
    this.titleService.setTitle("Kavita - " + translate("bookmarks.title"));
  }
  ngOnInit() {
    this.actions = this.actionFactoryService.getBookmarkActions(this.handleAction.bind(this));
  }
  handleAction(action, series) {
    return __async(this, null, function* () {
      switch (action.action) {
        case Action.Delete:
          yield this.clearBookmarks(series);
          break;
        case Action.DownloadBookmark:
          this.downloadBookmarks(series);
          break;
        case Action.ViewSeries:
          yield this.router.navigate(["library", series.libraryId, "series", series.id]);
          break;
        default:
          break;
      }
    });
  }
  loadPage() {
    this.loadingBookmarks = true;
    this.cdRef.markForCheck();
    this.readerService.getAllBookmarks(this.filter).pipe(take(1)).subscribe((bookmarks) => {
      this.bookmarks = bookmarks;
      this.bookmarks.forEach((bmk) => {
        this.clearingSeries[bmk.seriesId] = false;
        if (!this.seriesIds.hasOwnProperty(bmk.seriesId)) {
          this.seriesIds[bmk.seriesId] = 0;
        }
        this.seriesIds[bmk.seriesId] += 1;
      });
      const distinctSeriesMap = /* @__PURE__ */ new Map();
      this.bookmarks.forEach((b) => {
        distinctSeriesMap.set(b.series.id, b.series);
      });
      this.series = Array.from(distinctSeriesMap.values());
      this.jumpbarKeys = this.jumpbarService.getJumpKeys(this.series, (t) => t.name);
      this.loadingBookmarks = false;
      this.cdRef.markForCheck();
    });
  }
  viewBookmarks(series) {
    this.router.navigate(["library", series.libraryId, "series", series.id, "manga", 0], { queryParams: { incognitoMode: false, bookmarkMode: true } });
  }
  clearBookmarks(series) {
    return __async(this, null, function* () {
      if (!(yield this.confirmService.confirm(this.translocoService.translate("bookmarks.confirm-single-delete", { seriesName: series.name })))) {
        return;
      }
      this.clearingSeries[series.id] = true;
      this.cdRef.markForCheck();
      this.readerService.clearBookmarks(series.id).subscribe(() => {
        const index = this.series.indexOf(series);
        if (index > -1) {
          this.series.splice(index, 1);
        }
        this.clearingSeries[series.id] = false;
        this.toastr.success(this.translocoService.translate("delete-single-success", { seriesName: series.name }));
        this.refresh.emit();
        this.cdRef.markForCheck();
      });
    });
  }
  downloadBookmarks(series) {
    this.downloadService.download("bookmark", this.bookmarks.filter((bmk) => bmk.seriesId === series.id));
  }
  updateFilter(data) {
    if (data.filterV2 === void 0)
      return;
    this.filter = data.filterV2;
    if (data.isFirst) {
      this.loadPage();
      return;
    }
    this.filterUtilityService.updateUrlFromFilter(this.filter).subscribe((encodedFilter) => {
      this.loadPage();
    });
  }
  static {
    this.\u0275fac = function BookmarksComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _BookmarksComponent)();
    };
  }
  static {
    this.\u0275cmp = \u0275\u0275defineComponent({ type: _BookmarksComponent, selectors: [["app-bookmarks"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 2, vars: 1, consts: [["cardItem", ""], ["noData", ""], [1, "main-container", "container-fluid"], [4, "transloco", "translocoRead"], [3, "filterOpen", "hasFilter", "filterActive"], ["title", ""], ["subtitle", ""], [3, "actionCallback"], [3, "isLoading", "items", "filterSettings", "trackByIdentity", "refresh", "jumpBarKeys"], [3, "applyFilter", "isLoading", "items", "filterSettings", "trackByIdentity", "refresh", "jumpBarKeys"], [3, "clicked", "selection", "entity", "title", "imageUrl", "suppressArchiveWarning", "count", "allowSelection", "actions", "selected"], ["rel", "noopener noreferrer", "target", "_blank", 3, "href"], ["aria-hidden", "true", 1, "fa", "fa-external-link-alt", "ms-1"]], template: function BookmarksComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 2);
        \u0275\u0275template(1, BookmarksComponent_ng_container_1_Template, 9, 10, "ng-container", 3);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance();
        \u0275\u0275property("translocoRead", "bookmarks");
      }
    }, dependencies: [SideNavCompanionBarComponent, BulkOperationsComponent, CardDetailLayoutComponent, CardItemComponent, DecimalPipe, TranslocoDirective], styles: ["\n\n.main-container[_ngcontent-%COMP%] {\n  margin-top: 10px;\n  padding: 0 0 0 10px;\n}\n/*# sourceMappingURL=bookmarks.component.css.map */"], changeDetection: 0 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(BookmarksComponent, { className: "BookmarksComponent", filePath: "src/app/bookmark/_components/bookmarks/bookmarks.component.ts", lineNumber: 45 });
})();

// src/app/_routes/bookmark-routing.module.ts
var routes = [
  { path: "", component: BookmarksComponent, pathMatch: "full" }
];
export {
  routes
};
//# sourceMappingURL=bookmark-routing.module-V5XNSOAD.js.map
