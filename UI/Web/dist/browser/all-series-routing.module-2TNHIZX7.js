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
import "./chunk-7GKAFCLA.js";
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
import "./chunk-TPURWX2Y.js";
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
  DecimalPipe,
  DestroyRef,
  EventEmitter,
  NgIf,
  TranslocoDirective,
  debounceTime,
  inject,
  take,
  takeUntilDestroyed,
  translate,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
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
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-PYHIUVNJ.js";

// src/app/all-series/_components/all-series/all-series.component.ts
var _c0 = (a0) => ({ num: a0 });
function AllSeriesComponent_ng_container_1_h5_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h5", 8);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "number");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r3 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(t_r3("series-count", \u0275\u0275pureFunction1(3, _c0, \u0275\u0275pipeBind1(2, 1, ctx_r1.pagination.totalItems))));
  }
}
function AllSeriesComponent_ng_container_1_app_card_detail_layout_6_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-series-card", 10);
    \u0275\u0275listener("reload", function AllSeriesComponent_ng_container_1_app_card_detail_layout_6_ng_template_1_Template_app_series_card_reload_0_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.loadPage());
    })("selection", function AllSeriesComponent_ng_container_1_app_card_detail_layout_6_ng_template_1_Template_app_series_card_selection_0_listener($event) {
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
    \u0275\u0275property("series", item_r7)("libraryId", item_r7.libraryId)("selected", ctx_r1.bulkSelectionService.isCardSelected("series", position_r6))("allowSelection", true);
  }
}
function AllSeriesComponent_ng_container_1_app_card_detail_layout_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-card-detail-layout", 9);
    \u0275\u0275listener("applyFilter", function AllSeriesComponent_ng_container_1_app_card_detail_layout_6_Template_app_card_detail_layout_applyFilter_0_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.updateFilter($event));
    });
    \u0275\u0275template(1, AllSeriesComponent_ng_container_1_app_card_detail_layout_6_ng_template_1_Template, 1, 4, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("isLoading", ctx_r1.loadingSeries)("items", ctx_r1.series)("trackByIdentity", ctx_r1.trackByIdentity)("filterSettings", ctx_r1.filterSettings)("filterOpen", ctx_r1.filterOpen)("jumpBarKeys", ctx_r1.jumpbarKeys);
  }
}
function AllSeriesComponent_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "app-side-nav-companion-bar", 3);
    \u0275\u0275listener("filterOpen", function AllSeriesComponent_ng_container_1_Template_app_side_nav_companion_bar_filterOpen_1_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.filterOpen.emit($event));
    });
    \u0275\u0275elementStart(2, "h4", 4);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, AllSeriesComponent_ng_container_1_h5_4_Template, 3, 5, "h5", 5);
    \u0275\u0275elementEnd();
    \u0275\u0275element(5, "app-bulk-operations", 6);
    \u0275\u0275template(6, AllSeriesComponent_ng_container_1_app_card_detail_layout_6_Template, 3, 6, "app-card-detail-layout", 7);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("hasFilter", true)("filterActive", ctx_r1.filterActive);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.title, " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.pagination);
    \u0275\u0275advance();
    \u0275\u0275property("actionCallback", ctx_r1.bulkActionCallback);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.filter);
  }
}
var AllSeriesComponent = class _AllSeriesComponent {
  constructor(router, seriesService, titleService, actionService, bulkSelectionService, hubService, utilityService, route, filterUtilityService, jumpbarService, cdRef) {
    this.router = router;
    this.seriesService = seriesService;
    this.titleService = titleService;
    this.actionService = actionService;
    this.bulkSelectionService = bulkSelectionService;
    this.hubService = hubService;
    this.utilityService = utilityService;
    this.route = route;
    this.filterUtilityService = filterUtilityService;
    this.jumpbarService = jumpbarService;
    this.cdRef = cdRef;
    this.title = translate("side-nav.all-series");
    this.series = [];
    this.loadingSeries = false;
    this.pagination = new Pagination();
    this.filter = void 0;
    this.filterSettings = new FilterSettings();
    this.filterOpen = new EventEmitter();
    this.filterActive = false;
    this.jumpbarKeys = [];
    this.destroyRef = inject(DestroyRef);
    this.bulkActionCallback = (action, data) => {
      const selectedSeriesIndexies = this.bulkSelectionService.getSelectedCardsForSource("series");
      const selectedSeries = this.series.filter((series, index) => selectedSeriesIndexies.includes(index + ""));
      switch (action.action) {
        case Action.AddToReadingList:
          this.actionService.addMultipleSeriesToReadingList(selectedSeries, (success) => {
            if (success)
              this.bulkSelectionService.deselectAll();
          });
          break;
        case Action.AddToWantToReadList:
          this.actionService.addMultipleSeriesToWantToReadList(selectedSeries.map((s) => s.id), () => {
            this.bulkSelectionService.deselectAll();
          });
          break;
        case Action.RemoveFromWantToReadList:
          this.actionService.removeMultipleSeriesFromWantToReadList(selectedSeries.map((s) => s.id), () => {
            this.bulkSelectionService.deselectAll();
          });
          break;
        case Action.AddToCollection:
          this.actionService.addMultipleSeriesToCollectionTag(selectedSeries, (success) => {
            if (success)
              this.bulkSelectionService.deselectAll();
          });
          break;
        case Action.MarkAsRead:
          this.actionService.markMultipleSeriesAsRead(selectedSeries, () => {
            this.loadPage();
            this.bulkSelectionService.deselectAll();
          });
          break;
        case Action.MarkAsUnread:
          this.actionService.markMultipleSeriesAsUnread(selectedSeries, () => {
            this.loadPage();
            this.bulkSelectionService.deselectAll();
          });
          break;
        case Action.Delete:
          this.actionService.deleteMultipleSeries(selectedSeries, (successful) => {
            if (!successful)
              return;
            this.loadPage();
            this.bulkSelectionService.deselectAll();
          });
          break;
      }
    };
    this.trackByIdentity = (index, item) => `${item.name}_${item.localizedName}_${item.pagesRead}`;
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.filterUtilityService.filterPresetsFromUrl(this.route.snapshot).subscribe((filter) => {
      this.filter = filter;
      this.title = this.route.snapshot.queryParamMap.get("title") || this.filter.name || this.title;
      this.titleService.setTitle("Kavita - " + this.title);
      this.filterActiveCheck = this.filterUtilityService.createSeriesV2Filter();
      this.filterActiveCheck.statements.push(this.filterUtilityService.createSeriesV2DefaultStatement());
      this.filterSettings.presetsV2 = this.filter;
      this.cdRef.markForCheck();
    });
  }
  ngOnInit() {
    this.hubService.messages$.pipe(debounceTime(6e3), takeUntilDestroyed(this.destroyRef)).subscribe((event) => {
      if (event.event !== EVENTS.SeriesAdded)
        return;
      this.loadPage();
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
  loadPage() {
    this.filterActive = !this.utilityService.deepEqual(this.filter, this.filterActiveCheck);
    this.loadingSeries = true;
    let filterName = this.route.snapshot.queryParamMap.get("name");
    filterName = filterName ? filterName.split("\uFFFD")[0] : null;
    this.title = this.route.snapshot.queryParamMap.get("title") || filterName || this.filter?.name || translate("all-series.title");
    this.cdRef.markForCheck();
    this.seriesService.getAllSeriesV2(void 0, void 0, this.filter).pipe(take(1)).subscribe((series) => {
      this.series = series.result;
      this.jumpbarKeys = this.jumpbarService.getJumpKeys(this.series, (s) => s.name);
      this.pagination = series.pagination;
      this.loadingSeries = false;
      this.cdRef.markForCheck();
    });
  }
  static {
    this.\u0275fac = function AllSeriesComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AllSeriesComponent)(\u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(SeriesService), \u0275\u0275directiveInject(Title), \u0275\u0275directiveInject(ActionService), \u0275\u0275directiveInject(BulkSelectionService), \u0275\u0275directiveInject(MessageHubService), \u0275\u0275directiveInject(UtilityService), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(FilterUtilitiesService), \u0275\u0275directiveInject(JumpbarService), \u0275\u0275directiveInject(ChangeDetectorRef));
    };
  }
  static {
    this.\u0275cmp = \u0275\u0275defineComponent({ type: _AllSeriesComponent, selectors: [["app-all-series"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 2, vars: 1, consts: [["cardItem", ""], [1, "main-container", "container-fluid"], [4, "transloco", "translocoRead"], [3, "filterOpen", "hasFilter", "filterActive"], ["title", ""], ["subtitle", "", 4, "ngIf"], [3, "actionCallback"], [3, "isLoading", "items", "trackByIdentity", "filterSettings", "filterOpen", "jumpBarKeys", "applyFilter", 4, "ngIf"], ["subtitle", ""], [3, "applyFilter", "isLoading", "items", "trackByIdentity", "filterSettings", "filterOpen", "jumpBarKeys"], [3, "reload", "selection", "series", "libraryId", "selected", "allowSelection"]], template: function AllSeriesComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 1);
        \u0275\u0275template(1, AllSeriesComponent_ng_container_1_Template, 7, 6, "ng-container", 2);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance();
        \u0275\u0275property("translocoRead", "all-series");
      }
    }, dependencies: [SideNavCompanionBarComponent, NgIf, BulkOperationsComponent, CardDetailLayoutComponent, SeriesCardComponent, DecimalPipe, TranslocoDirective], styles: ["\n\n.main-container[_ngcontent-%COMP%] {\n  margin-top: 10px;\n  padding: 0 0 0 10px;\n}\n/*# sourceMappingURL=all-series.component.css.map */"], changeDetection: 0 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AllSeriesComponent, { className: "AllSeriesComponent", filePath: "src/app/all-series/_components/all-series/all-series.component.ts", lineNumber: 45 });
})();

// src/app/_routes/all-series-routing.module.ts
var routes = [
  { path: "", component: AllSeriesComponent, pathMatch: "full" }
];
export {
  routes
};
//# sourceMappingURL=all-series-routing.module-2TNHIZX7.js.map
