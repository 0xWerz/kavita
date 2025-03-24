import {
  CardItemComponent
} from "./chunk-AVPZRN66.js";
import {
  SideNavCompanionBarComponent
} from "./chunk-UXZKIERU.js";
import {
  DashboardService
} from "./chunk-NSEIBSOK.js";
import {
  SeriesCardComponent
} from "./chunk-ZBG2BUFS.js";
import "./chunk-3AMMXKYH.js";
import "./chunk-YFCV4WCV.js";
import "./chunk-5EJJ6TJW.js";
import "./chunk-3H6WDNS7.js";
import "./chunk-OMYYKEHJ.js";
import "./chunk-AFXXYIIH.js";
import {
  CarouselReelComponent
} from "./chunk-RGQOJ2I6.js";
import "./chunk-LOI3GAWB.js";
import {
  SettingsTabId
} from "./chunk-HRPGFRNB.js";
import "./chunk-D3OMWBOU.js";
import "./chunk-KKWGV4SA.js";
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
import "./chunk-HTPJQXUV.js";
import {
  SeriesService
} from "./chunk-HG4LWHDT.js";
import "./chunk-6M2JHRYX.js";
import {
  ReaderService
} from "./chunk-D2FQ65JS.js";
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
import {
  ImageService
} from "./chunk-TPURWX2Y.js";
import {
  FilterComparison,
  FilterField,
  MetadataService,
  SortField
} from "./chunk-IBO6ECG5.js";
import {
  QueryContext
} from "./chunk-BX5PUGWH.js";
import "./chunk-KJWRNOWO.js";
import {
  LoadingComponent
} from "./chunk-D7CIAEAO.js";
import "./chunk-LGLLZBOI.js";
import "./chunk-EA72DBFY.js";
import "./chunk-HN36WWH3.js";
import {
  ScrobbleProvider,
  ScrobblingService
} from "./chunk-R5PSFMI2.js";
import {
  UtilityService
} from "./chunk-A6JEQ5GB.js";
import "./chunk-RSMGJKYW.js";
import {
  AccountService,
  Router,
  RouterLink
} from "./chunk-U2DWQJI2.js";
import "./chunk-2R2RCU4Y.js";
import {
  ToastrService
} from "./chunk-5J5IKBMT.js";
import {
  EVENTS,
  MessageHubService
} from "./chunk-PUXELTB2.js";
import {
  Title
} from "./chunk-FLGYJHAG.js";
import "./chunk-BPOUBDX2.js";
import {
  HttpClient,
  HttpParams,
  environment
} from "./chunk-CQADFT7F.js";
import {
  AsyncPipe,
  ChangeDetectorRef,
  DestroyRef,
  NgTemplateOutlet,
  ReplaySubject,
  Subject,
  TranslocoDirective,
  __async,
  __spreadValues,
  debounceTime,
  inject,
  map,
  shareReplay,
  switchMap,
  take,
  takeUntilDestroyed,
  tap,
  throttleTime,
  translate,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵelement,
  ɵɵelementContainer,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵinject,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-PYHIUVNJ.js";

// src/app/_services/recommendation.service.ts
var RecommendationService = class _RecommendationService {
  constructor(httpClient, utilityService) {
    this.httpClient = httpClient;
    this.utilityService = utilityService;
    this.baseUrl = environment.apiUrl;
  }
  getQuickReads(libraryId, pageNum, itemsPerPage) {
    let params = new HttpParams();
    params = this.utilityService.addPaginationIfExists(params, pageNum, itemsPerPage);
    return this.httpClient.get(this.baseUrl + "recommended/quick-reads?libraryId=" + libraryId, { observe: "response", params }).pipe(map((response) => this.utilityService.createPaginatedResult(response)));
  }
  getQuickCatchupReads(libraryId, pageNum, itemsPerPage) {
    let params = new HttpParams();
    params = this.utilityService.addPaginationIfExists(params, pageNum, itemsPerPage);
    return this.httpClient.get(this.baseUrl + "recommended/quick-catchup-reads?libraryId=" + libraryId, { observe: "response", params }).pipe(map((response) => this.utilityService.createPaginatedResult(response)));
  }
  getHighlyRated(libraryId, pageNum, itemsPerPage) {
    let params = new HttpParams();
    params = this.utilityService.addPaginationIfExists(params, pageNum, itemsPerPage);
    return this.httpClient.get(this.baseUrl + "recommended/highly-rated?libraryId=" + libraryId, { observe: "response", params }).pipe(map((response) => this.utilityService.createPaginatedResult(response)));
  }
  getRediscover(libraryId, pageNum, itemsPerPage) {
    let params = new HttpParams();
    params = this.utilityService.addPaginationIfExists(params, pageNum, itemsPerPage);
    return this.httpClient.get(this.baseUrl + "recommended/rediscover?libraryId=" + libraryId, { observe: "response", params }).pipe(map((response) => this.utilityService.createPaginatedResult(response)));
  }
  getMoreIn(libraryId, genreId, pageNum, itemsPerPage) {
    let params = new HttpParams();
    params = this.utilityService.addPaginationIfExists(params, pageNum, itemsPerPage);
    return this.httpClient.get(this.baseUrl + "recommended/more-in?libraryId=" + libraryId + "&genreId=" + genreId, { observe: "response", params }).pipe(map((response) => this.utilityService.createPaginatedResult(response)));
  }
  static {
    this.\u0275fac = function RecommendationService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _RecommendationService)(\u0275\u0275inject(HttpClient), \u0275\u0275inject(UtilityService));
    };
  }
  static {
    this.\u0275prov = \u0275\u0275defineInjectable({ token: _RecommendationService, factory: _RecommendationService.\u0275fac, providedIn: "root" });
  }
};

// src/app/_models/dashboard/stream-type.enum.ts
var StreamType;
(function(StreamType2) {
  StreamType2[StreamType2["OnDeck"] = 1] = "OnDeck";
  StreamType2[StreamType2["RecentlyUpdated"] = 2] = "RecentlyUpdated";
  StreamType2[StreamType2["NewlyAdded"] = 3] = "NewlyAdded";
  StreamType2[StreamType2["SmartFilter"] = 4] = "SmartFilter";
  StreamType2[StreamType2["MoreInGenre"] = 5] = "MoreInGenre";
})(StreamType || (StreamType = {}));

// src/app/dashboard/_components/dashboard.component.ts
var _forTrack0 = ($index, $item) => $item.id;
var _c0 = (a0) => ({ stream: a0 });
var _c1 = (a0) => ({ genre: a0 });
function DashboardComponent_ng_container_2_Conditional_1_Conditional_0_Conditional_0_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10)(1, "p");
    \u0275\u0275text(2);
    \u0275\u0275elementStart(3, "a", 11);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275text(5, ".");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const t_r1 = \u0275\u0275nextContext(4).$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", t_r1("no-libraries"), " ");
    \u0275\u0275advance();
    \u0275\u0275property("fragment", ctx_r1.SettingsTabId.Libraries);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(t_r1("server-settings-link"));
  }
}
function DashboardComponent_ng_container_2_Conditional_1_Conditional_0_Conditional_0_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10)(1, "p");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const t_r1 = \u0275\u0275nextContext(4).$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r1("not-granted"));
  }
}
function DashboardComponent_ng_container_2_Conditional_1_Conditional_0_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9);
    \u0275\u0275template(1, DashboardComponent_ng_container_2_Conditional_1_Conditional_0_Conditional_0_Conditional_1_Template, 6, 3, "div", 10)(2, DashboardComponent_ng_container_2_Conditional_1_Conditional_0_Conditional_0_Conditional_2_Template, 3, 1, "div", 10);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx ? 1 : 2);
  }
}
function DashboardComponent_ng_container_2_Conditional_1_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, DashboardComponent_ng_container_2_Conditional_1_Conditional_0_Conditional_0_Template, 3, 1, "div", 9);
    \u0275\u0275pipe(1, "async");
  }
  if (rf & 2) {
    let tmp_5_0;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275conditional((tmp_5_0 = \u0275\u0275pipeBind1(1, 1, ctx_r1.accountService.isAdmin$)) ? 0 : -1, tmp_5_0);
  }
}
function DashboardComponent_ng_container_2_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, DashboardComponent_ng_container_2_Conditional_1_Conditional_0_Template, 2, 3);
  }
  if (rf & 2) {
    \u0275\u0275conditional(ctx.length === 0 ? 0 : -1);
  }
}
function DashboardComponent_ng_container_2_For_4_Case_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0, 12);
  }
  if (rf & 2) {
    const stream_r3 = \u0275\u0275nextContext().$implicit;
    const onDeck_r4 = \u0275\u0275reference(8);
    \u0275\u0275property("ngTemplateOutlet", onDeck_r4)("ngTemplateOutletContext", \u0275\u0275pureFunction1(2, _c0, stream_r3));
  }
}
function DashboardComponent_ng_container_2_For_4_Case_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0, 12);
  }
  if (rf & 2) {
    const stream_r3 = \u0275\u0275nextContext().$implicit;
    const recentlyUpdated_r5 = \u0275\u0275reference(10);
    \u0275\u0275property("ngTemplateOutlet", recentlyUpdated_r5)("ngTemplateOutletContext", \u0275\u0275pureFunction1(2, _c0, stream_r3));
  }
}
function DashboardComponent_ng_container_2_For_4_Case_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0, 12);
  }
  if (rf & 2) {
    const stream_r3 = \u0275\u0275nextContext().$implicit;
    const newlyUpdated_r6 = \u0275\u0275reference(12);
    \u0275\u0275property("ngTemplateOutlet", newlyUpdated_r6)("ngTemplateOutletContext", \u0275\u0275pureFunction1(2, _c0, stream_r3));
  }
}
function DashboardComponent_ng_container_2_For_4_Case_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0, 12);
  }
  if (rf & 2) {
    const stream_r3 = \u0275\u0275nextContext().$implicit;
    const smartFilter_r7 = \u0275\u0275reference(6);
    \u0275\u0275property("ngTemplateOutlet", smartFilter_r7)("ngTemplateOutletContext", \u0275\u0275pureFunction1(2, _c0, stream_r3));
  }
}
function DashboardComponent_ng_container_2_For_4_Case_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0, 12);
  }
  if (rf & 2) {
    const stream_r3 = \u0275\u0275nextContext().$implicit;
    const moreInGenre_r8 = \u0275\u0275reference(14);
    \u0275\u0275property("ngTemplateOutlet", moreInGenre_r8)("ngTemplateOutletContext", \u0275\u0275pureFunction1(2, _c0, stream_r3));
  }
}
function DashboardComponent_ng_container_2_For_4_ng_template_5_Conditional_0_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-series-card", 16);
    \u0275\u0275listener("reload", function DashboardComponent_ng_container_2_For_4_ng_template_5_Conditional_0_ng_template_1_Template_app_series_card_reload_0_listener() {
      const item_r11 = \u0275\u0275restoreView(_r10).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(5);
      return \u0275\u0275resetView(ctx_r1.reloadStream(item_r11.id));
    })("dataChanged", function DashboardComponent_ng_container_2_For_4_ng_template_5_Conditional_0_ng_template_1_Template_app_series_card_dataChanged_0_listener() {
      const item_r11 = \u0275\u0275restoreView(_r10).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(5);
      return \u0275\u0275resetView(ctx_r1.reloadStream(item_r11.id));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r11 = ctx.$implicit;
    \u0275\u0275property("series", item_r11)("libraryId", item_r11.libraryId);
  }
}
function DashboardComponent_ng_container_2_For_4_ng_template_5_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-carousel-reel", 15);
    \u0275\u0275listener("sectionClick", function DashboardComponent_ng_container_2_For_4_ng_template_5_Conditional_0_Template_app_carousel_reel_sectionClick_0_listener() {
      \u0275\u0275restoreView(_r9);
      const stream_r3 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.handleFilterSectionClick(stream_r3));
    });
    \u0275\u0275template(1, DashboardComponent_ng_container_2_For_4_ng_template_5_Conditional_0_ng_template_1_Template, 1, 2, "ng-template", null, 5, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const stream_r3 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275property("items", ctx)("title", stream_r3.name);
  }
}
function DashboardComponent_ng_container_2_For_4_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, DashboardComponent_ng_container_2_For_4_ng_template_5_Conditional_0_Template, 3, 2, "app-carousel-reel", 14);
    \u0275\u0275pipe(1, "async");
  }
  if (rf & 2) {
    let tmp_19_0;
    const stream_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275conditional((tmp_19_0 = \u0275\u0275pipeBind1(1, 1, stream_r3.api)) ? 0 : -1, tmp_19_0);
  }
}
function DashboardComponent_ng_container_2_For_4_ng_template_7_Conditional_0_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-series-card", 17);
    \u0275\u0275listener("reload", function DashboardComponent_ng_container_2_For_4_ng_template_7_Conditional_0_ng_template_1_Template_app_series_card_reload_0_listener() {
      \u0275\u0275restoreView(_r13);
      const stream_r3 = \u0275\u0275nextContext(3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.reloadStream(stream_r3.id, true));
    })("dataChanged", function DashboardComponent_ng_container_2_For_4_ng_template_7_Conditional_0_ng_template_1_Template_app_series_card_dataChanged_0_listener() {
      \u0275\u0275restoreView(_r13);
      const stream_r3 = \u0275\u0275nextContext(3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.reloadStream(stream_r3.id));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r14 = ctx.$implicit;
    \u0275\u0275property("series", item_r14)("libraryId", item_r14.libraryId)("isOnDeck", true);
  }
}
function DashboardComponent_ng_container_2_For_4_ng_template_7_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-carousel-reel", 15);
    \u0275\u0275listener("sectionClick", function DashboardComponent_ng_container_2_For_4_ng_template_7_Conditional_0_Template_app_carousel_reel_sectionClick_0_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.handleSectionClick(ctx_r1.StreamId.OnDeck));
    });
    \u0275\u0275template(1, DashboardComponent_ng_container_2_For_4_ng_template_7_Conditional_0_ng_template_1_Template, 1, 3, "ng-template", null, 5, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r1 = \u0275\u0275nextContext(3).$implicit;
    \u0275\u0275property("items", ctx)("title", t_r1("on-deck-title"));
  }
}
function DashboardComponent_ng_container_2_For_4_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, DashboardComponent_ng_container_2_For_4_ng_template_7_Conditional_0_Template, 3, 2, "app-carousel-reel", 14);
    \u0275\u0275pipe(1, "async");
  }
  if (rf & 2) {
    let tmp_19_0;
    const stream_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275conditional((tmp_19_0 = \u0275\u0275pipeBind1(1, 1, stream_r3.api)) ? 0 : -1, tmp_19_0);
  }
}
function DashboardComponent_ng_container_2_For_4_ng_template_9_Conditional_0_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-card-item", 18);
    \u0275\u0275listener("clicked", function DashboardComponent_ng_container_2_For_4_ng_template_9_Conditional_0_ng_template_1_Template_app_card_item_clicked_0_listener() {
      const item_r17 = \u0275\u0275restoreView(_r16).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(5);
      return \u0275\u0275resetView(ctx_r1.handleRecentlyAddedChapterClick(item_r17));
    })("readClicked", function DashboardComponent_ng_container_2_For_4_ng_template_9_Conditional_0_ng_template_1_Template_app_card_item_readClicked_0_listener() {
      const item_r17 = \u0275\u0275restoreView(_r16).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(5);
      return \u0275\u0275resetView(ctx_r1.handleRecentlyAddedChapterRead(item_r17));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r17 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(5);
    \u0275\u0275property("entity", item_r17)("title", item_r17.seriesName)("imageUrl", ctx_r1.imageService.getSeriesCoverImage(item_r17.seriesId))("suppressArchiveWarning", true)("count", item_r17.count)("showReadButton", true)("linkUrl", "/library/" + item_r17.libraryId + "/series/" + item_r17.seriesId);
  }
}
function DashboardComponent_ng_container_2_For_4_ng_template_9_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-carousel-reel", 15);
    \u0275\u0275listener("sectionClick", function DashboardComponent_ng_container_2_For_4_ng_template_9_Conditional_0_Template_app_carousel_reel_sectionClick_0_listener() {
      \u0275\u0275restoreView(_r15);
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.handleSectionClick(ctx_r1.StreamId.RecentlyUpdatedSeries));
    });
    \u0275\u0275template(1, DashboardComponent_ng_container_2_For_4_ng_template_9_Conditional_0_ng_template_1_Template, 1, 7, "ng-template", null, 5, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r1 = \u0275\u0275nextContext(3).$implicit;
    \u0275\u0275property("items", ctx)("title", t_r1("recently-updated-title"));
  }
}
function DashboardComponent_ng_container_2_For_4_ng_template_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, DashboardComponent_ng_container_2_For_4_ng_template_9_Conditional_0_Template, 3, 2, "app-carousel-reel", 14);
    \u0275\u0275pipe(1, "async");
  }
  if (rf & 2) {
    let tmp_19_0;
    const stream_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275conditional((tmp_19_0 = \u0275\u0275pipeBind1(1, 1, stream_r3.api)) ? 0 : -1, tmp_19_0);
  }
}
function DashboardComponent_ng_container_2_For_4_ng_template_11_Conditional_0_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-series-card", 19);
    \u0275\u0275listener("dataChanged", function DashboardComponent_ng_container_2_For_4_ng_template_11_Conditional_0_ng_template_1_Template_app_series_card_dataChanged_0_listener() {
      \u0275\u0275restoreView(_r19);
      const stream_r3 = \u0275\u0275nextContext(3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.reloadStream(stream_r3.id));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r20 = ctx.$implicit;
    \u0275\u0275property("series", item_r20)("libraryId", item_r20.libraryId);
  }
}
function DashboardComponent_ng_container_2_For_4_ng_template_11_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-carousel-reel", 15);
    \u0275\u0275listener("sectionClick", function DashboardComponent_ng_container_2_For_4_ng_template_11_Conditional_0_Template_app_carousel_reel_sectionClick_0_listener() {
      \u0275\u0275restoreView(_r18);
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.handleSectionClick(ctx_r1.StreamId.NewlyAddedSeries));
    });
    \u0275\u0275template(1, DashboardComponent_ng_container_2_For_4_ng_template_11_Conditional_0_ng_template_1_Template, 1, 2, "ng-template", null, 5, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r1 = \u0275\u0275nextContext(3).$implicit;
    \u0275\u0275property("items", ctx)("title", t_r1("recently-added-title"));
  }
}
function DashboardComponent_ng_container_2_For_4_ng_template_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, DashboardComponent_ng_container_2_For_4_ng_template_11_Conditional_0_Template, 3, 2, "app-carousel-reel", 14);
    \u0275\u0275pipe(1, "async");
  }
  if (rf & 2) {
    let tmp_19_0;
    const stream_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275conditional((tmp_19_0 = \u0275\u0275pipeBind1(1, 1, stream_r3.api)) ? 0 : -1, tmp_19_0);
  }
}
function DashboardComponent_ng_container_2_For_4_ng_template_13_Conditional_0_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r22 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-series-card", 19);
    \u0275\u0275listener("dataChanged", function DashboardComponent_ng_container_2_For_4_ng_template_13_Conditional_0_ng_template_1_Template_app_series_card_dataChanged_0_listener() {
      \u0275\u0275restoreView(_r22);
      const stream_r3 = \u0275\u0275nextContext(3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.reloadStream(stream_r3.id));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r23 = ctx.$implicit;
    \u0275\u0275property("series", item_r23)("libraryId", item_r23.libraryId);
  }
}
function DashboardComponent_ng_container_2_For_4_ng_template_13_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r21 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-carousel-reel", 15);
    \u0275\u0275listener("sectionClick", function DashboardComponent_ng_container_2_For_4_ng_template_13_Conditional_0_Template_app_carousel_reel_sectionClick_0_listener() {
      \u0275\u0275restoreView(_r21);
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.handleSectionClick(ctx_r1.StreamId.MoreInGenre));
    });
    \u0275\u0275template(1, DashboardComponent_ng_container_2_For_4_ng_template_13_Conditional_0_ng_template_1_Template, 1, 2, "ng-template", null, 5, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r1 = \u0275\u0275nextContext(3).$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("items", ctx)("title", t_r1("more-in-genre-title", \u0275\u0275pureFunction1(2, _c1, ctx_r1.genre == null ? null : ctx_r1.genre.title)));
  }
}
function DashboardComponent_ng_container_2_For_4_ng_template_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, DashboardComponent_ng_container_2_For_4_ng_template_13_Conditional_0_Template, 3, 4, "app-carousel-reel", 14);
    \u0275\u0275pipe(1, "async");
  }
  if (rf & 2) {
    let tmp_19_0;
    const stream_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275conditional((tmp_19_0 = \u0275\u0275pipeBind1(1, 1, stream_r3.api)) ? 0 : -1, tmp_19_0);
  }
}
function DashboardComponent_ng_container_2_For_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, DashboardComponent_ng_container_2_For_4_Case_0_Template, 1, 4, "ng-container", 12)(1, DashboardComponent_ng_container_2_For_4_Case_1_Template, 1, 4, "ng-container", 12)(2, DashboardComponent_ng_container_2_For_4_Case_2_Template, 1, 4, "ng-container", 12)(3, DashboardComponent_ng_container_2_For_4_Case_3_Template, 1, 4, "ng-container", 12)(4, DashboardComponent_ng_container_2_For_4_Case_4_Template, 1, 4, "ng-container", 12)(5, DashboardComponent_ng_container_2_For_4_ng_template_5_Template, 2, 3, "ng-template", 13, 0, \u0275\u0275templateRefExtractor)(7, DashboardComponent_ng_container_2_For_4_ng_template_7_Template, 2, 3, "ng-template", 13, 1, \u0275\u0275templateRefExtractor)(9, DashboardComponent_ng_container_2_For_4_ng_template_9_Template, 2, 3, "ng-template", 13, 2, \u0275\u0275templateRefExtractor)(11, DashboardComponent_ng_container_2_For_4_ng_template_11_Template, 2, 3, "ng-template", 13, 3, \u0275\u0275templateRefExtractor)(13, DashboardComponent_ng_container_2_For_4_ng_template_13_Template, 2, 3, "ng-template", 13, 4, \u0275\u0275templateRefExtractor);
  }
  if (rf & 2) {
    let tmp_17_0;
    const stream_r3 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275conditional((tmp_17_0 = stream_r3.streamType) === ctx_r1.StreamType.OnDeck ? 0 : tmp_17_0 === ctx_r1.StreamType.RecentlyUpdated ? 1 : tmp_17_0 === ctx_r1.StreamType.NewlyAdded ? 2 : tmp_17_0 === ctx_r1.StreamType.SmartFilter ? 3 : tmp_17_0 === ctx_r1.StreamType.MoreInGenre ? 4 : -1);
  }
}
function DashboardComponent_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, DashboardComponent_ng_container_2_Conditional_1_Template, 1, 1);
    \u0275\u0275pipe(2, "async");
    \u0275\u0275repeaterCreate(3, DashboardComponent_ng_container_2_For_4_Template, 15, 1, null, null, _forTrack0);
    \u0275\u0275element(5, "app-loading", 8);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    let tmp_2_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional((tmp_2_0 = \u0275\u0275pipeBind1(2, 2, ctx_r1.libraries$)) ? 1 : -1, tmp_2_0);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r1.streams);
    \u0275\u0275advance(2);
    \u0275\u0275property("loading", ctx_r1.isLoadingDashboard || ctx_r1.streamCount !== ctx_r1.streamsLoaded);
  }
}
var StreamId;
(function(StreamId2) {
  StreamId2[StreamId2["OnDeck"] = 0] = "OnDeck";
  StreamId2[StreamId2["RecentlyUpdatedSeries"] = 1] = "RecentlyUpdatedSeries";
  StreamId2[StreamId2["NewlyAddedSeries"] = 2] = "NewlyAddedSeries";
  StreamId2[StreamId2["MoreInGenre"] = 3] = "MoreInGenre";
})(StreamId || (StreamId = {}));
var DashboardComponent = class _DashboardComponent {
  constructor() {
    this.destroyRef = inject(DestroyRef);
    this.filterUtilityService = inject(FilterUtilitiesService);
    this.metadataService = inject(MetadataService);
    this.recommendationService = inject(RecommendationService);
    this.accountService = inject(AccountService);
    this.libraryService = inject(LibraryService);
    this.seriesService = inject(SeriesService);
    this.router = inject(Router);
    this.titleService = inject(Title);
    this.imageService = inject(ImageService);
    this.messageHub = inject(MessageHubService);
    this.cdRef = inject(ChangeDetectorRef);
    this.dashboardService = inject(DashboardService);
    this.scrobblingService = inject(ScrobblingService);
    this.toastr = inject(ToastrService);
    this.readerService = inject(ReaderService);
    this.libraries$ = this.libraryService.getLibraries().pipe(take(1), takeUntilDestroyed(this.destroyRef));
    this.isLoadingDashboard = true;
    this.streams = [];
    this.refreshStreams$ = new Subject();
    this.refreshStreamsFromDashboardUpdate$ = new Subject();
    this.streamCount = 0;
    this.streamsLoaded = 0;
    this.loadRecentlyAdded$ = new ReplaySubject();
    this.StreamType = StreamType;
    this.StreamId = StreamId;
    this.SettingsTabId = SettingsTabId;
    this.loadDashboard();
    this.refreshStreamsFromDashboardUpdate$.pipe(takeUntilDestroyed(this.destroyRef), debounceTime(1e3), tap(() => {
      this.loadDashboard();
    })).subscribe();
    this.refreshStreams$.pipe(takeUntilDestroyed(this.destroyRef), throttleTime(1e4), tap(() => {
      this.loadDashboard();
    })).subscribe();
    this.messageHub.messages$.pipe(takeUntilDestroyed(this.destroyRef)).subscribe((res) => {
      if (res.event === EVENTS.DashboardUpdate) {
        this.refreshStreamsFromDashboardUpdate$.next();
      } else if (res.event === EVENTS.SeriesAdded) {
        this.refreshStreams$.next();
      } else if (res.event === EVENTS.SeriesRemoved) {
        this.refreshStreams$.next();
      } else if (res.event === EVENTS.ScanSeries) {
        this.loadRecentlyAdded$.next();
        this.refreshStreams$.next();
      }
    });
    this.scrobblingService.hasTokenExpired(ScrobbleProvider.AniList).subscribe((hasExpired) => {
      if (hasExpired) {
        this.toastr.error(translate("toasts.anilist-token-expired"));
      }
      this.cdRef.markForCheck();
    });
  }
  ngOnInit() {
    this.titleService.setTitle("Kavita");
  }
  loadDashboard() {
    this.isLoadingDashboard = true;
    this.streamsLoaded = 0;
    this.streamCount = 0;
    this.cdRef.markForCheck();
    this.dashboardService.getDashboardStreams().subscribe((streams) => {
      this.streams = streams;
      this.streamCount = streams.length;
      this.streams.forEach((s) => {
        switch (s.streamType) {
          case StreamType.OnDeck:
            s.api = this.seriesService.getOnDeck(0, 1, 20).pipe(map((d) => d.result), tap(() => this.increment()), takeUntilDestroyed(this.destroyRef), shareReplay({ bufferSize: 1, refCount: true }));
            break;
          case StreamType.NewlyAdded:
            s.api = this.seriesService.getRecentlyAdded(1, 20).pipe(map((d) => d.result), tap(() => this.increment()), takeUntilDestroyed(this.destroyRef), shareReplay({ bufferSize: 1, refCount: true }));
            break;
          case StreamType.RecentlyUpdated:
            s.api = this.seriesService.getRecentlyUpdatedSeries().pipe(tap(() => this.increment()), takeUntilDestroyed(this.destroyRef), shareReplay({ bufferSize: 1, refCount: true }));
            break;
          case StreamType.SmartFilter:
            s.api = this.filterUtilityService.decodeFilter(s.smartFilterEncoded).pipe(switchMap((filter) => {
              return this.seriesService.getAllSeriesV2(0, 20, filter, QueryContext.Dashboard);
            })).pipe(map((d) => d.result), tap(() => this.increment()), takeUntilDestroyed(this.destroyRef), shareReplay({ bufferSize: 1, refCount: true }));
            break;
          case StreamType.MoreInGenre:
            s.api = this.metadataService.getAllGenres([], QueryContext.Dashboard).pipe(map((genres) => {
              this.genre = genres[Math.floor(Math.random() * genres.length)];
              return this.genre;
            }), switchMap((genre) => this.recommendationService.getMoreIn(0, genre.id, 0, 30)), map((p) => p.result), tap(() => this.increment()), takeUntilDestroyed(this.destroyRef), shareReplay({ bufferSize: 1, refCount: true }));
            break;
        }
      });
      this.isLoadingDashboard = false;
      this.cdRef.markForCheck();
    });
  }
  increment() {
    this.streamsLoaded++;
    this.cdRef.markForCheck();
  }
  reloadStream(streamId, onDeck = false) {
    const index = this.streams.findIndex((s) => s.id === streamId);
    if (index < 0)
      return;
    if (onDeck) {
      this.refreshStreams$.next();
      this.cdRef.markForCheck();
    } else {
      this.streams[index] = __spreadValues({}, this.streams[index]);
      this.cdRef.markForCheck();
    }
  }
  handleRecentlyAddedChapterClick(item) {
    return __async(this, null, function* () {
      yield this.router.navigate(["library", item.libraryId, "series", item.seriesId]);
    });
  }
  handleRecentlyAddedChapterRead(item) {
    return __async(this, null, function* () {
      this.readerService.getCurrentChapter(item.seriesId).subscribe((chapter) => {
        this.readerService.readChapter(item.libraryId, item.seriesId, chapter, false);
      });
    });
  }
  handleFilterSectionClick(stream) {
    return __async(this, null, function* () {
      yield this.router.navigateByUrl("all-series?" + stream.smartFilterEncoded);
    });
  }
  handleSectionClick(streamId) {
    if (streamId === StreamId.RecentlyUpdatedSeries) {
      const params = {};
      params["page"] = 1;
      params["title"] = translate("dashboard.recently-updated-title");
      const filter = this.filterUtilityService.createSeriesV2Filter();
      if (filter.sortOptions) {
        filter.sortOptions.sortField = SortField.LastChapterAdded;
        filter.sortOptions.isAscending = false;
      }
      this.filterUtilityService.applyFilterWithParams(["all-series"], filter, params).subscribe();
    } else if (streamId === StreamId.OnDeck) {
      const params = {};
      params["page"] = 1;
      params["title"] = translate("dashboard.on-deck-title");
      const filter = this.filterUtilityService.createSeriesV2Filter();
      filter.statements.push({ field: FilterField.ReadProgress, comparison: FilterComparison.GreaterThan, value: "0" });
      filter.statements.push({ field: FilterField.ReadProgress, comparison: FilterComparison.NotEqual, value: "100" });
      if (filter.sortOptions) {
        filter.sortOptions.sortField = SortField.LastChapterAdded;
        filter.sortOptions.isAscending = false;
      }
      this.filterUtilityService.applyFilterWithParams(["all-series"], filter, params).subscribe();
    } else if (streamId === StreamId.NewlyAddedSeries) {
      const params = {};
      params["page"] = 1;
      params["title"] = translate("dashboard.recently-added-title");
      const filter = this.filterUtilityService.createSeriesV2Filter();
      if (filter.sortOptions) {
        filter.sortOptions.sortField = SortField.Created;
        filter.sortOptions.isAscending = false;
      }
      this.filterUtilityService.applyFilterWithParams(["all-series"], filter, params).subscribe();
    } else if (streamId === StreamId.MoreInGenre) {
      const params = {};
      params["page"] = 1;
      params["title"] = translate("dashboard.more-in-genre-title", { genre: this.genre?.title });
      const filter = this.filterUtilityService.createSeriesV2Filter();
      filter.statements.push({ field: FilterField.Genres, value: this.genre?.id + "", comparison: FilterComparison.MustContains });
      this.filterUtilityService.applyFilterWithParams(["all-series"], filter, params).subscribe();
    }
  }
  static {
    this.\u0275fac = function DashboardComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _DashboardComponent)();
    };
  }
  static {
    this.\u0275cmp = \u0275\u0275defineComponent({ type: _DashboardComponent, selectors: [["app-dashboard"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 3, vars: 1, consts: [["smartFilter", ""], ["onDeck", ""], ["recentlyUpdated", ""], ["newlyUpdated", ""], ["moreInGenre", ""], ["carouselItem", ""], [1, "main-container"], [4, "transloco", "translocoRead"], [3, "loading"], [1, "mt-3"], [1, "d-flex", "justify-content-center"], ["routerLink", "/settings", 3, "fragment"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], ["DashboardStream", ""], [3, "items", "title"], [3, "sectionClick", "items", "title"], [3, "reload", "dataChanged", "series", "libraryId"], [3, "reload", "dataChanged", "series", "libraryId", "isOnDeck"], [3, "clicked", "readClicked", "entity", "title", "imageUrl", "suppressArchiveWarning", "count", "showReadButton", "linkUrl"], [3, "dataChanged", "series", "libraryId"]], template: function DashboardComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 6);
        \u0275\u0275element(1, "app-side-nav-companion-bar");
        \u0275\u0275template(2, DashboardComponent_ng_container_2_Template, 6, 4, "ng-container", 7);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(2);
        \u0275\u0275property("translocoRead", "dashboard");
      }
    }, dependencies: [
      SideNavCompanionBarComponent,
      RouterLink,
      CarouselReelComponent,
      SeriesCardComponent,
      CardItemComponent,
      AsyncPipe,
      TranslocoDirective,
      NgTemplateOutlet,
      LoadingComponent
    ], styles: ["\n\n.main-container[_ngcontent-%COMP%] {\n  margin-top: 10px;\n  padding: 0 0 0 10px;\n}\n/*# sourceMappingURL=dashboard.component.css.map */"], changeDetection: 0 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DashboardComponent, { className: "DashboardComponent", filePath: "src/app/dashboard/_components/dashboard.component.ts", lineNumber: 56 });
})();

// src/app/_routes/dashboard-routing.module.ts
var routes = [
  {
    path: "",
    component: DashboardComponent
  }
];
export {
  routes
};
//# sourceMappingURL=dashboard-routing.module-6IM4QLXC.js.map
