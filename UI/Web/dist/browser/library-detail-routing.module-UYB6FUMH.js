import {
  CardDetailLayoutComponent,
  FilterSettings
} from "./chunk-5ZZKBPDI.js";
import "./chunk-3CC6XT7E.js";
import {
  SideNavCompanionBarComponent
} from "./chunk-UXZKIERU.js";
import {
  BulkOperationsComponent
} from "./chunk-NUIJYMCR.js";
import "./chunk-MBZDR44C.js";
import {
  SeriesCardComponent
} from "./chunk-ZBG2BUFS.js";
import "./chunk-3AMMXKYH.js";
import "./chunk-YFCV4WCV.js";
import "./chunk-5EJJ6TJW.js";
import "./chunk-3H6WDNS7.js";
import {
  BulkSelectionService
} from "./chunk-OMYYKEHJ.js";
import {
  LibraryAccessGuard
} from "./chunk-HY4ACD33.js";
import {
  AuthGuard
} from "./chunk-3KO4NMBD.js";
import {
  NavService
} from "./chunk-CUVDZVWA.js";
import "./chunk-E4IH7S3P.js";
import "./chunk-454HUQZW.js";
import "./chunk-7GKAFCLA.js";
import "./chunk-FAULLNLJ.js";
import {
  FilterUtilitiesService
} from "./chunk-SBBWMOEE.js";
import {
  CardActionablesComponent
} from "./chunk-W4DBALQX.js";
import "./chunk-OOCLTPIS.js";
import "./chunk-Y273F7VW.js";
import "./chunk-5C4ZM5AT.js";
import "./chunk-WQSUGJVO.js";
import "./chunk-XZ2P7HP2.js";
import "./chunk-WOFHNJUD.js";
import "./chunk-5VCWX7WV.js";
import {
  ActionService
} from "./chunk-HTPJQXUV.js";
import {
  SeriesService
} from "./chunk-HG4LWHDT.js";
import "./chunk-6M2JHRYX.js";
import "./chunk-D2FQ65JS.js";
import "./chunk-HSFLUHPU.js";
import "./chunk-4AQVNEIP.js";
import "./chunk-2XUUWUDC.js";
import "./chunk-AOHQX7B2.js";
import "./chunk-ECSSQE2U.js";
import "./chunk-JGJJUNHA.js";
import "./chunk-BJ7U7OXN.js";
import "./chunk-DMXJBIB5.js";
import "./chunk-GX7EGMKV.js";
import "./chunk-M6XH7OA7.js";
import "./chunk-IQIEDCQT.js";
import "./chunk-ZLESQ73K.js";
import "./chunk-RMZ6EY72.js";
import "./chunk-CVI764VQ.js";
import "./chunk-C423WP7Y.js";
import "./chunk-NGXWDHM5.js";
import "./chunk-XZ5MKEYT.js";
import {
  LibraryService
} from "./chunk-PBM62GK4.js";
import "./chunk-MABWAPXH.js";
import "./chunk-KMTIWVED.js";
import "./chunk-HXDVBBHR.js";
import "./chunk-65GP3B4U.js";
import "./chunk-2L2JQBKQ.js";
import "./chunk-2JLAQ3MZ.js";
import "./chunk-TPURWX2Y.js";
import {
  FilterComparison,
  FilterField
} from "./chunk-IBO6ECG5.js";
import "./chunk-BX5PUGWH.js";
import "./chunk-KJWRNOWO.js";
import {
  LoadingComponent
} from "./chunk-D7CIAEAO.js";
import "./chunk-LGLLZBOI.js";
import "./chunk-EA72DBFY.js";
import "./chunk-HN36WWH3.js";
import "./chunk-R5PSFMI2.js";
import {
  KEY_CODES,
  UtilityService
} from "./chunk-A6JEQ5GB.js";
import "./chunk-RSMGJKYW.js";
import {
  Action,
  ActionFactoryService,
  ActivatedRoute,
  Router
} from "./chunk-U2DWQJI2.js";
import "./chunk-2R2RCU4Y.js";
import "./chunk-5J5IKBMT.js";
import {
  EVENTS,
  MessageHubService
} from "./chunk-PUXELTB2.js";
import {
  Title
} from "./chunk-FLGYJHAG.js";
import "./chunk-BPOUBDX2.js";
import "./chunk-CQADFT7F.js";
import {
  ChangeDetectorRef,
  DecimalPipe,
  DestroyRef,
  EventEmitter,
  ReplaySubject,
  TranslocoDirective,
  __async,
  debounceTime,
  inject,
  take,
  takeUntilDestroyed,
  tap,
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
  ɵɵresolveDocument,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-PYHIUVNJ.js";

// src/app/library-detail/library-detail.component.ts
var _c0 = (a0) => ({ num: a0 });
function LibraryDetailComponent_ng_container_1_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h5", 6);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "number");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r3 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("", t_r3("common.series-count", \u0275\u0275pureFunction1(3, _c0, \u0275\u0275pipeBind1(2, 1, ctx_r1.pagination.totalItems))), " ");
  }
}
function LibraryDetailComponent_ng_container_1_Conditional_9_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-series-card", 11);
    \u0275\u0275listener("reload", function LibraryDetailComponent_ng_container_1_Conditional_9_ng_template_1_Template_app_series_card_reload_0_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.loadPage());
    })("selection", function LibraryDetailComponent_ng_container_1_Conditional_9_ng_template_1_Template_app_series_card_selection_0_listener($event) {
      const position_r6 = \u0275\u0275restoreView(_r5).idx;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.bulkSelectionService.handleCardSelection("series", position_r6, ctx_r1.series.length, $event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r7 = ctx.$implicit;
    const position_r6 = ctx.idx;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("series", item_r7)("libraryId", ctx_r1.libraryId)("suppressLibraryLink", true)("selected", ctx_r1.bulkSelectionService.isCardSelected("series", position_r6))("allowSelection", true);
  }
}
function LibraryDetailComponent_ng_container_1_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-card-detail-layout", 10);
    \u0275\u0275listener("applyFilter", function LibraryDetailComponent_ng_container_1_Conditional_9_Template_app_card_detail_layout_applyFilter_0_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.updateFilter($event));
    });
    \u0275\u0275template(1, LibraryDetailComponent_ng_container_1_Conditional_9_ng_template_1_Template, 1, 5, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("isLoading", ctx_r1.loadingSeries)("items", ctx_r1.series)("pagination", ctx_r1.pagination)("filterSettings", ctx_r1.filterSettings)("trackByIdentity", ctx_r1.trackByIdentity)("filterOpen", ctx_r1.filterOpen)("jumpBarKeys", ctx_r1.jumpKeys)("refresh", ctx_r1.refresh);
  }
}
function LibraryDetailComponent_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "app-side-nav-companion-bar", 3);
    \u0275\u0275listener("filterOpen", function LibraryDetailComponent_ng_container_1_Template_app_side_nav_companion_bar_filterOpen_1_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.filterOpen.emit($event));
    });
    \u0275\u0275elementStart(2, "h4", 4)(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "app-card-actionables", 5);
    \u0275\u0275listener("actionHandler", function LibraryDetailComponent_ng_container_1_Template_app_card_actionables_actionHandler_5_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.performAction($event));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275template(6, LibraryDetailComponent_ng_container_1_Conditional_6_Template, 3, 5, "h5", 6);
    \u0275\u0275elementEnd();
    \u0275\u0275element(7, "app-bulk-operations", 7)(8, "app-loading", 8);
    \u0275\u0275template(9, LibraryDetailComponent_ng_container_1_Conditional_9_Template, 3, 8, "app-card-detail-layout", 9);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("hasFilter", true)("filterActive", ctx_r1.filterActive);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.libraryName);
    \u0275\u0275advance();
    \u0275\u0275property("actions", ctx_r1.actions);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.active.fragment === "" ? 6 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("actionCallback", ctx_r1.bulkActionCallback);
    \u0275\u0275advance();
    \u0275\u0275property("absolute", true)("loading", ctx_r1.bulkLoader);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.filter ? 9 : -1);
  }
}
var LibraryDetailComponent = class _LibraryDetailComponent {
  constructor() {
    this.destroyRef = inject(DestroyRef);
    this.cdRef = inject(ChangeDetectorRef);
    this.route = inject(ActivatedRoute);
    this.router = inject(Router);
    this.seriesService = inject(SeriesService);
    this.libraryService = inject(LibraryService);
    this.titleService = inject(Title);
    this.actionFactoryService = inject(ActionFactoryService);
    this.actionService = inject(ActionService);
    this.hubService = inject(MessageHubService);
    this.utilityService = inject(UtilityService);
    this.filterUtilityService = inject(FilterUtilitiesService);
    this.navService = inject(NavService);
    this.bulkSelectionService = inject(BulkSelectionService);
    this.libraryName = "";
    this.series = [];
    this.loadingSeries = false;
    this.pagination = { currentPage: 0, totalPages: 0, totalItems: 0, itemsPerPage: 0 };
    this.actions = [];
    this.filter = void 0;
    this.filterSettings = new FilterSettings();
    this.filterOpen = new EventEmitter();
    this.filterActive = false;
    this.refresh = new EventEmitter();
    this.jumpKeys = [];
    this.bulkLoader = false;
    this.tabs = [
      { title: "library-tab", fragment: "", icon: "fa-landmark" },
      { title: "recommended-tab", fragment: "recommended", icon: "fa-award" }
    ];
    this.active = this.tabs[0];
    this.loadPageSource = new ReplaySubject(1);
    this.loadPage$ = this.loadPageSource.asObservable();
    this.bulkActionCallback = (action, data) => __async(this, null, function* () {
      const selectedSeriesIndices = this.bulkSelectionService.getSelectedCardsForSource("series");
      const selectedSeries = this.series.filter((series, index) => selectedSeriesIndices.includes(index + ""));
      switch (action.action) {
        case Action.AddToReadingList:
          this.actionService.addMultipleSeriesToReadingList(selectedSeries, (success) => {
            if (success)
              this.bulkSelectionService.deselectAll();
            this.cdRef.markForCheck();
          });
          break;
        case Action.AddToWantToReadList:
          this.actionService.addMultipleSeriesToWantToReadList(selectedSeries.map((s) => s.id), () => {
            this.bulkSelectionService.deselectAll();
            this.cdRef.markForCheck();
          });
          break;
        case Action.RemoveFromWantToReadList:
          this.actionService.removeMultipleSeriesFromWantToReadList(selectedSeries.map((s) => s.id), () => {
            this.bulkSelectionService.deselectAll();
            this.cdRef.markForCheck();
          });
          break;
        case Action.AddToCollection:
          this.actionService.addMultipleSeriesToCollectionTag(selectedSeries, (success) => {
            if (success)
              this.bulkSelectionService.deselectAll();
            this.cdRef.markForCheck();
          });
          break;
        case Action.MarkAsRead:
          this.actionService.markMultipleSeriesAsRead(selectedSeries, () => {
            this.bulkSelectionService.deselectAll();
            this.loadPage();
          });
          break;
        case Action.MarkAsUnread:
          this.actionService.markMultipleSeriesAsUnread(selectedSeries, () => {
            this.bulkSelectionService.deselectAll();
            this.loadPage();
          });
          break;
        case Action.Delete:
          if (selectedSeries.length > 25) {
            this.bulkLoader = true;
            this.cdRef.markForCheck();
          }
          yield this.actionService.deleteMultipleSeries(selectedSeries, (successful) => {
            this.bulkLoader = false;
            this.cdRef.markForCheck();
            if (!successful)
              return;
            this.bulkSelectionService.deselectAll();
            this.loadPage();
          });
          break;
      }
    });
    this.trackByIdentity = (index, item) => `${item.id}_${item.name}_${item.localizedName}_${item.pagesRead}`;
    const routeId = this.route.snapshot.paramMap.get("libraryId");
    if (routeId === null) {
      this.router.navigateByUrl("/home");
      return;
    }
    this.actions = this.actionFactoryService.getLibraryActions(this.handleAction.bind(this));
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.libraryId = parseInt(routeId, 10);
    this.libraryService.getLibraryNames().pipe(take(1)).subscribe((names) => {
      this.libraryName = names[this.libraryId];
      this.titleService.setTitle("Kavita - " + this.libraryName);
      this.cdRef.markForCheck();
    });
    this.libraryService.getJumpBar(this.libraryId).subscribe((barDetails) => {
      this.jumpKeys = barDetails;
      this.cdRef.markForCheck();
    });
    this.actions = this.actionFactoryService.getLibraryActions(this.handleAction.bind(this));
    this.filterUtilityService.filterPresetsFromUrl(this.route.snapshot).subscribe((filter) => {
      this.filter = filter;
      if (this.filter.statements.filter((stmt) => stmt.field === FilterField.Libraries).length === 0) {
        this.filter.statements.push({ field: FilterField.Libraries, value: this.libraryId + "", comparison: FilterComparison.Equal });
      }
      this.filterActiveCheck = this.filterUtilityService.createSeriesV2Filter();
      this.filterActiveCheck.statements.push({ field: FilterField.Libraries, value: this.libraryId + "", comparison: FilterComparison.Equal });
      this.filterSettings.presetsV2 = this.filter;
      this.loadPage$.pipe(takeUntilDestroyed(this.destroyRef), debounceTime(100), tap((_) => this.loadPage())).subscribe();
      this.cdRef.markForCheck();
    });
  }
  ngOnInit() {
    this.hubService.messages$.pipe(takeUntilDestroyed(this.destroyRef)).subscribe((event) => {
      if (event.event === EVENTS.SeriesAdded) {
        const seriesAdded = event.payload;
        if (seriesAdded.libraryId !== this.libraryId)
          return;
        if (!this.utilityService.deepEqual(this.filter, this.filterActiveCheck)) {
          this.loadPageSource.next(true);
          return;
        }
        this.seriesService.getSeries(seriesAdded.seriesId).subscribe((s) => {
          if (this.series.filter((sObj) => s.id === sObj.id).length > 0)
            return;
          this.series = [...this.series, s].sort((s1, s2) => {
            if (s1.sortName < s2.sortName)
              return -1;
            if (s1.sortName > s2.sortName)
              return 1;
            return 0;
          });
          this.pagination.totalItems++;
          this.cdRef.markForCheck();
          this.refresh.emit();
        });
      } else if (event.event === EVENTS.SeriesRemoved) {
        const seriesRemoved = event.payload;
        if (seriesRemoved.libraryId !== this.libraryId)
          return;
        if (!this.utilityService.deepEqual(this.filter, this.filterActiveCheck)) {
          this.loadPageSource.next(true);
          return;
        }
        this.series = this.series.filter((s) => s.id != seriesRemoved.seriesId);
        this.pagination.totalItems--;
        this.cdRef.markForCheck();
        this.refresh.emit();
      }
    });
  }
  handleKeypress(event) {
    if (event.key === KEY_CODES.SHIFT) {
      this.bulkSelectionService.isShiftDown = true;
    }
  }
  handleKeyUp(event) {
    if (event.key === KEY_CODES.SHIFT) {
      this.bulkSelectionService.isShiftDown = false;
    }
  }
  handleAction(action, library) {
    return __async(this, null, function* () {
      let lib = library;
      if (library === void 0) {
        this.libraryService.getLibrary(this.libraryId).subscribe((library2) => __async(this, null, function* () {
          switch (action.action) {
            case Action.Scan:
              yield this.actionService.scanLibrary(library2);
              break;
            case Action.RefreshMetadata:
              yield this.actionService.refreshLibraryMetadata(library2);
              break;
            case Action.GenerateColorScape:
              yield this.actionService.refreshLibraryMetadata(library2, void 0, false);
              break;
            case Action.Delete:
              yield this.actionService.deleteLibrary(library2, () => {
                this.loadPageSource.next(true);
              });
              break;
            case Action.AnalyzeFiles:
              yield this.actionService.analyzeFiles(library2);
              break;
            case Action.Edit:
              this.actionService.editLibrary(library2);
              break;
            default:
              break;
          }
        }));
        return;
      }
      switch (action.action) {
        case Action.Scan:
          yield this.actionService.scanLibrary(lib);
          break;
        case Action.RefreshMetadata:
          yield this.actionService.refreshLibraryMetadata(lib);
          break;
        case Action.GenerateColorScape:
          yield this.actionService.refreshLibraryMetadata(lib, void 0, false);
          break;
        case Action.Edit:
          this.actionService.editLibrary(lib);
          break;
        default:
          break;
      }
    });
  }
  performAction(action) {
    if (typeof action.callback === "function") {
      action.callback(action, void 0);
    }
  }
  updateFilter(data) {
    if (data.filterV2 === void 0)
      return;
    this.filter = data.filterV2;
    if (data.isFirst) {
      this.loadPageSource.next(true);
      return;
    }
    this.filterUtilityService.updateUrlFromFilter(this.filter).subscribe((encodedFilter) => {
      this.loadPageSource.next(true);
    });
  }
  loadPage() {
    this.loadingSeries = true;
    this.filterActive = !this.utilityService.deepEqual(this.filter, this.filterActiveCheck);
    this.cdRef.markForCheck();
    this.seriesService.getSeriesForLibraryV2(void 0, void 0, this.filter).subscribe((series) => {
      this.series = series.result;
      this.pagination = series.pagination;
      this.loadingSeries = false;
      this.cdRef.markForCheck();
    });
  }
  static {
    this.\u0275fac = function LibraryDetailComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _LibraryDetailComponent)();
    };
  }
  static {
    this.\u0275cmp = \u0275\u0275defineComponent({ type: _LibraryDetailComponent, selectors: [["app-library-detail"]], hostBindings: function LibraryDetailComponent_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("keydown.shift", function LibraryDetailComponent_keydown_shift_HostBindingHandler($event) {
          return ctx.handleKeypress($event);
        }, false, \u0275\u0275resolveDocument)("keyup.shift", function LibraryDetailComponent_keyup_shift_HostBindingHandler($event) {
          return ctx.handleKeyUp($event);
        }, false, \u0275\u0275resolveDocument);
      }
    }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 2, vars: 0, consts: [["cardItem", ""], [1, "main-container", "container-fluid"], [4, "transloco"], [3, "filterOpen", "hasFilter", "filterActive"], ["title", ""], [3, "actionHandler", "actions"], ["subtitle", "", 1, "subtitle-with-actionables"], [3, "actionCallback"], [3, "absolute", "loading"], [3, "isLoading", "items", "pagination", "filterSettings", "trackByIdentity", "filterOpen", "jumpBarKeys", "refresh"], [3, "applyFilter", "isLoading", "items", "pagination", "filterSettings", "trackByIdentity", "filterOpen", "jumpBarKeys", "refresh"], [3, "reload", "selection", "series", "libraryId", "suppressLibraryLink", "selected", "allowSelection"]], template: function LibraryDetailComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 1);
        \u0275\u0275template(1, LibraryDetailComponent_ng_container_1_Template, 10, 9, "ng-container", 2);
        \u0275\u0275elementEnd();
      }
    }, dependencies: [
      SideNavCompanionBarComponent,
      CardActionablesComponent,
      CardDetailLayoutComponent,
      SeriesCardComponent,
      BulkOperationsComponent,
      DecimalPipe,
      TranslocoDirective,
      LoadingComponent
    ], styles: ["\n\n.card[_ngcontent-%COMP%] {\n  height: 400;\n  width: 200;\n}\n.viewport[_ngcontent-%COMP%] {\n  width: 600px;\n  height: 100%;\n  overflow-y: auto;\n}\n.main-container[_ngcontent-%COMP%] {\n  margin-top: 10px;\n}\n/*# sourceMappingURL=library-detail.component.css.map */"], changeDetection: 0 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LibraryDetailComponent, { className: "LibraryDetailComponent", filePath: "src/app/library-detail/library-detail.component.ts", lineNumber: 56 });
})();

// src/app/_routes/library-detail-routing.module.ts
var routes = [
  {
    path: ":libraryId",
    runGuardsAndResolvers: "always",
    canActivate: [AuthGuard, LibraryAccessGuard],
    component: LibraryDetailComponent
  },
  {
    path: "",
    runGuardsAndResolvers: "always",
    canActivate: [AuthGuard, LibraryAccessGuard],
    component: LibraryDetailComponent
  }
];
export {
  routes
};
//# sourceMappingURL=library-detail-routing.module-UYB6FUMH.js.map
