import {
  CardDetailLayoutComponent,
  FilterSettings,
  JumpbarService
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
import "./chunk-CUVDZVWA.js";
import "./chunk-E4IH7S3P.js";
import "./chunk-454HUQZW.js";
import {
  ScrollService
} from "./chunk-7GKAFCLA.js";
import "./chunk-FAULLNLJ.js";
import {
  FilterUtilitiesService
} from "./chunk-SBBWMOEE.js";
import "./chunk-W4DBALQX.js";
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
import "./chunk-PBM62GK4.js";
import "./chunk-MABWAPXH.js";
import "./chunk-KMTIWVED.js";
import "./chunk-HXDVBBHR.js";
import "./chunk-65GP3B4U.js";
import "./chunk-2L2JQBKQ.js";
import "./chunk-2JLAQ3MZ.js";
import {
  ImageService
} from "./chunk-TPURWX2Y.js";
import "./chunk-IBO6ECG5.js";
import "./chunk-BX5PUGWH.js";
import "./chunk-KJWRNOWO.js";
import "./chunk-D7CIAEAO.js";
import "./chunk-LGLLZBOI.js";
import "./chunk-EA72DBFY.js";
import "./chunk-HN36WWH3.js";
import "./chunk-R5PSFMI2.js";
import {
  Pagination,
  UtilityService
} from "./chunk-A6JEQ5GB.js";
import "./chunk-RSMGJKYW.js";
import {
  Action,
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
  DOCUMENT,
  DecimalPipe,
  DestroyRef,
  EventEmitter,
  NgStyle,
  TranslocoDirective,
  debounceTime,
  inject,
  take,
  takeUntilDestroyed,
  translate,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵqueryRefresh,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵviewQuery
} from "./chunk-PYHIUVNJ.js";

// src/app/want-to-read/_components/want-to-read/want-to-read.component.ts
var _c0 = ["scrollingBlock"];
var _c1 = ["companionBar"];
var _c2 = (a0) => ({ num: a0 });
var _c3 = (a0) => ({ "height": a0 });
function WantToReadComponent_ng_container_1_Conditional_13_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-series-card", 13);
    \u0275\u0275listener("reload", function WantToReadComponent_ng_container_1_Conditional_13_ng_template_1_Template_app_series_card_reload_0_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.removeSeries($event));
    })("selection", function WantToReadComponent_ng_container_1_Conditional_13_ng_template_1_Template_app_series_card_selection_0_listener($event) {
      const position_r5 = \u0275\u0275restoreView(_r4).idx;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.bulkSelectionService.handleCardSelection("series", position_r5, ctx_r1.series.length, $event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r6 = ctx.$implicit;
    const position_r5 = ctx.idx;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("series", item_r6)("libraryId", item_r6.libraryId)("selected", ctx_r1.bulkSelectionService.isCardSelected("series", position_r5))("allowSelection", true);
  }
}
function WantToReadComponent_ng_container_1_Conditional_13_Conditional_3_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const t_r7 = \u0275\u0275nextContext(3).$implicit;
    \u0275\u0275textInterpolate1(" ", t_r7("no-items"), " ");
  }
}
function WantToReadComponent_ng_container_1_Conditional_13_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275template(1, WantToReadComponent_ng_container_1_Conditional_13_Conditional_3_ng_template_1_Template, 1, 1, "ng-template", null, 3, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
  }
}
function WantToReadComponent_ng_container_1_Conditional_13_Conditional_4_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const t_r7 = \u0275\u0275nextContext(3).$implicit;
    \u0275\u0275textInterpolate1(" ", t_r7("no-items-filtered"), " ");
  }
}
function WantToReadComponent_ng_container_1_Conditional_13_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275template(1, WantToReadComponent_ng_container_1_Conditional_13_Conditional_4_ng_template_1_Template, 1, 1, "ng-template", null, 3, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
  }
}
function WantToReadComponent_ng_container_1_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-card-detail-layout", 12);
    \u0275\u0275listener("applyFilter", function WantToReadComponent_ng_container_1_Conditional_13_Template_app_card_detail_layout_applyFilter_0_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.updateFilter($event));
    });
    \u0275\u0275template(1, WantToReadComponent_ng_container_1_Conditional_13_ng_template_1_Template, 1, 4, "ng-template", null, 2, \u0275\u0275templateRefExtractor)(3, WantToReadComponent_ng_container_1_Conditional_13_Conditional_3_Template, 3, 0, "div")(4, WantToReadComponent_ng_container_1_Conditional_13_Conditional_4_Template, 3, 0, "div");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("isLoading", ctx_r1.isLoading)("items", ctx_r1.series)("pagination", ctx_r1.pagination)("filterSettings", ctx_r1.filterSettings)("filterOpen", ctx_r1.filterOpen)("jumpBarKeys", ctx_r1.jumpbarKeys)("trackByIdentity", ctx_r1.trackByIdentity)("refresh", ctx_r1.refresh);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(!ctx_r1.filterActive && ctx_r1.series.length === 0 ? 3 : ctx_r1.filterActive && ctx_r1.series.length === 0 ? 4 : -1);
  }
}
function WantToReadComponent_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", null, 0)(3, "app-side-nav-companion-bar", 6);
    \u0275\u0275listener("filterOpen", function WantToReadComponent_ng_container_1_Template_app_side_nav_companion_bar_filterOpen_3_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.filterOpen.emit($event));
    });
    \u0275\u0275elementContainerStart(4, 7);
    \u0275\u0275elementStart(5, "h4");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementStart(7, "h5", 8);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "number");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(10, "div", 9, 1);
    \u0275\u0275element(12, "app-bulk-operations", 10);
    \u0275\u0275template(13, WantToReadComponent_ng_container_1_Conditional_13_Template, 5, 9, "app-card-detail-layout", 11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const t_r7 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275property("hasFilter", true)("filterActive", ctx_r1.filterActive);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", t_r7("title"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r7("series-count", \u0275\u0275pureFunction1(9, _c2, \u0275\u0275pipeBind1(9, 7, ctx_r1.pagination.totalItems))));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngStyle", \u0275\u0275pureFunction1(11, _c3, ctx_r1.ScrollingBlockHeight));
    \u0275\u0275advance(2);
    \u0275\u0275property("actionCallback", ctx_r1.bulkActionCallback);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.filter ? 13 : -1);
  }
}
var WantToReadComponent = class _WantToReadComponent {
  get ScrollingBlockHeight() {
    if (this.scrollingBlock === void 0)
      return "calc(var(--vh)*100)";
    const navbar = this.document.querySelector(".navbar");
    if (navbar === null)
      return "calc(var(--vh)*100)";
    const companionHeight = this.companionBar.nativeElement.offsetHeight;
    const navbarHeight = navbar.offsetHeight;
    const totalHeight = companionHeight + navbarHeight + 21;
    return "calc(var(--vh)*100 - " + totalHeight + "px)";
  }
  constructor(imageService, router, route, seriesService, titleService, bulkSelectionService, actionService, messageHub, filterUtilityService, utilityService, document, cdRef, scrollService, hubService, jumpbarService) {
    this.imageService = imageService;
    this.router = router;
    this.route = route;
    this.seriesService = seriesService;
    this.titleService = titleService;
    this.bulkSelectionService = bulkSelectionService;
    this.actionService = actionService;
    this.messageHub = messageHub;
    this.filterUtilityService = filterUtilityService;
    this.utilityService = utilityService;
    this.document = document;
    this.cdRef = cdRef;
    this.scrollService = scrollService;
    this.hubService = hubService;
    this.jumpbarService = jumpbarService;
    this.destroyRef = inject(DestroyRef);
    this.isLoading = true;
    this.series = [];
    this.pagination = new Pagination();
    this.filter = void 0;
    this.filterSettings = new FilterSettings();
    this.refresh = new EventEmitter();
    this.filterActive = false;
    this.jumpbarKeys = [];
    this.filterOpen = new EventEmitter();
    this.trackByIdentity = (index, item) => `${item.name}_${item.localizedName}_${item.pagesRead}`;
    this.bulkActionCallback = (action, data) => {
      const selectedSeriesIndices = this.bulkSelectionService.getSelectedCardsForSource("series");
      const selectedSeries = this.series.filter((series, index) => selectedSeriesIndices.includes(index + ""));
      switch (action.action) {
        case Action.RemoveFromWantToReadList:
          this.actionService.removeMultipleSeriesFromWantToReadList(selectedSeries.map((s) => s.id), () => {
            this.bulkSelectionService.deselectAll();
            this.loadPage();
          });
          break;
      }
    };
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.titleService.setTitle("Kavita - " + translate("want-to-read.title"));
    this.filterUtilityService.filterPresetsFromUrl(this.route.snapshot).subscribe((filter) => {
      this.filter = filter;
      this.filterActiveCheck = this.filterUtilityService.createSeriesV2Filter();
      this.filterActiveCheck.statements.push(this.filterUtilityService.createSeriesV2DefaultStatement());
      this.filterSettings.presetsV2 = this.filter;
      this.cdRef.markForCheck();
    });
    this.hubService.messages$.pipe(takeUntilDestroyed(this.destroyRef)).subscribe((event) => {
      if (event.event === EVENTS.SeriesRemoved) {
        const seriesRemoved = event.payload;
        if (!this.utilityService.deepEqual(this.filter, this.filterActiveCheck)) {
          this.loadPage();
          return;
        }
        this.series = this.series.filter((s) => s.id != seriesRemoved.seriesId);
        this.pagination.totalItems--;
        this.cdRef.markForCheck();
        this.refresh.emit();
      }
    });
  }
  ngOnInit() {
    this.messageHub.messages$.pipe(takeUntilDestroyed(this.destroyRef), debounceTime(2e3)).subscribe((event) => {
      if (event.event === EVENTS.SeriesRemoved) {
        this.loadPage();
      }
    });
  }
  ngAfterContentChecked() {
    this.scrollService.setScrollContainer(this.scrollingBlock);
  }
  removeSeries(seriesId) {
    this.series = this.series.filter((s) => s.id != seriesId);
    this.pagination.totalItems--;
    this.cdRef.markForCheck();
    this.refresh.emit();
  }
  loadPage() {
    this.filterActive = !this.utilityService.deepEqual(this.filter, this.filterActiveCheck);
    this.isLoading = true;
    this.cdRef.markForCheck();
    this.seriesService.getWantToRead(void 0, void 0, this.filter).pipe(take(1)).subscribe((paginatedList) => {
      this.series = paginatedList.result;
      this.pagination = paginatedList.pagination;
      this.jumpbarKeys = this.jumpbarService.getJumpKeys(this.series, (series) => series.name);
      this.isLoading = false;
      this.cdRef.markForCheck();
    });
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
    this.\u0275fac = function WantToReadComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _WantToReadComponent)(\u0275\u0275directiveInject(ImageService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(SeriesService), \u0275\u0275directiveInject(Title), \u0275\u0275directiveInject(BulkSelectionService), \u0275\u0275directiveInject(ActionService), \u0275\u0275directiveInject(MessageHubService), \u0275\u0275directiveInject(FilterUtilitiesService), \u0275\u0275directiveInject(UtilityService), \u0275\u0275directiveInject(DOCUMENT), \u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(ScrollService), \u0275\u0275directiveInject(MessageHubService), \u0275\u0275directiveInject(JumpbarService));
    };
  }
  static {
    this.\u0275cmp = \u0275\u0275defineComponent({ type: _WantToReadComponent, selectors: [["app-want-to-read"]], viewQuery: function WantToReadComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(_c0, 5);
        \u0275\u0275viewQuery(_c1, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.scrollingBlock = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.companionBar = _t.first);
      }
    }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 2, vars: 1, consts: [["companionBar", ""], ["scrollingBlock", ""], ["cardItem", ""], ["noData", ""], [1, "main-container", "container-fluid"], [4, "transloco", "translocoRead"], [3, "filterOpen", "hasFilter", "filterActive"], ["title", ""], ["subtitle", ""], [1, "main-container", "container-fluid", "ps-0", 3, "ngStyle"], [3, "actionCallback"], [3, "isLoading", "items", "pagination", "filterSettings", "filterOpen", "jumpBarKeys", "trackByIdentity", "refresh"], [3, "applyFilter", "isLoading", "items", "pagination", "filterSettings", "filterOpen", "jumpBarKeys", "trackByIdentity", "refresh"], [3, "reload", "selection", "series", "libraryId", "selected", "allowSelection"]], template: function WantToReadComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 4);
        \u0275\u0275template(1, WantToReadComponent_ng_container_1_Template, 14, 13, "ng-container", 5);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance();
        \u0275\u0275property("translocoRead", "want-to-read");
      }
    }, dependencies: [SideNavCompanionBarComponent, NgStyle, BulkOperationsComponent, CardDetailLayoutComponent, SeriesCardComponent, DecimalPipe, TranslocoDirective], styles: ["\n\n.main-container[_ngcontent-%COMP%] {\n  margin-top: 10px;\n  padding: 0 0 0 10px;\n}\n/*# sourceMappingURL=want-to-read.component.css.map */"], changeDetection: 0 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(WantToReadComponent, { className: "WantToReadComponent", filePath: "src/app/want-to-read/_components/want-to-read/want-to-read.component.ts", lineNumber: 51 });
})();

// src/app/_routes/want-to-read-routing.module.ts
var routes = [
  { path: "", component: WantToReadComponent, pathMatch: "full" }
];
export {
  routes
};
//# sourceMappingURL=want-to-read-routing.module-COTLZBQW.js.map
