import {
  SeriesPreviewDrawerComponent
} from "./chunk-3AMMXKYH.js";
import {
  DownloadIndicatorComponent
} from "./chunk-3H6WDNS7.js";
import {
  BulkSelectionService
} from "./chunk-OMYYKEHJ.js";
import {
  ScrollService
} from "./chunk-7GKAFCLA.js";
import {
  SeriesFormatComponent
} from "./chunk-FAULLNLJ.js";
import {
  CardActionablesComponent
} from "./chunk-W4DBALQX.js";
import {
  EditSeriesModalComponent,
  RelationshipPipe
} from "./chunk-OOCLTPIS.js";
import {
  ActionService
} from "./chunk-HTPJQXUV.js";
import {
  SeriesService
} from "./chunk-HG4LWHDT.js";
import {
  ReaderService
} from "./chunk-D2FQ65JS.js";
import {
  DefaultModalOptions
} from "./chunk-ZLESQ73K.js";
import {
  DownloadService
} from "./chunk-CVI764VQ.js";
import {
  DefaultValuePipe
} from "./chunk-KMTIWVED.js";
import {
  ImageComponent
} from "./chunk-2JLAQ3MZ.js";
import {
  ImageService
} from "./chunk-TPURWX2Y.js";
import {
  AccountService,
  Action,
  ActionFactoryService,
  Router,
  RouterLink
} from "./chunk-U2DWQJI2.js";
import {
  NgbModal,
  NgbOffcanvas,
  NgbProgressbar,
  NgbTooltip
} from "./chunk-2R2RCU4Y.js";
import {
  ToastrService
} from "./chunk-5J5IKBMT.js";
import {
  CheckboxControlValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel
} from "./chunk-BPOUBDX2.js";
import {
  ChangeDetectorRef,
  DecimalPipe,
  DestroyRef,
  EventEmitter,
  TranslocoDirective,
  __async,
  inject,
  map,
  takeUntilDestroyed,
  translate,
  ɵsetClassDebugInfo,
  ɵɵNgOnChangesFeature,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMapInterpolate1,
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
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpropertyInterpolate,
  ɵɵpropertyInterpolate1,
  ɵɵpropertyInterpolate2,
  ɵɵpureFunction0,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-PYHIUVNJ.js";

// src/app/cards/series-card/series-card.component.ts
var _c0 = () => ({ "border-radius": ".25rem .25rem 0 0" });
var _c1 = () => ({ standalone: true });
function SeriesCardComponent_ng_container_0_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-image", 2);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("styles", \u0275\u0275pureFunction0(2, _c0))("imageUrl", ctx_r1.imageService.getSeriesCoverImage(ctx_r1.series.id));
  }
}
function SeriesCardComponent_ng_container_0_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-image", 2);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("styles", \u0275\u0275pureFunction0(2, _c0))("imageUrl", ctx_r1.imageService.errorImage);
  }
}
function SeriesCardComponent_ng_container_0_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 4);
    \u0275\u0275pipe(1, "number");
    \u0275\u0275element(2, "ngb-progressbar", 20);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275propertyInterpolate1("ngbTooltip", "", \u0275\u0275pipeBind2(1, 4, ctx_r1.series.pagesRead / ctx_r1.series.pages * 100, "1.0-1"), "%");
    \u0275\u0275advance(2);
    \u0275\u0275property("value", ctx_r1.series.pagesRead)("max", ctx_r1.series.pages);
  }
}
function SeriesCardComponent_ng_container_0_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", t_r3("cannot-read"), " ");
  }
}
function SeriesCardComponent_ng_container_0_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8);
    \u0275\u0275element(1, "div", 21);
    \u0275\u0275elementEnd();
  }
}
function SeriesCardComponent_ng_container_0_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 22);
    \u0275\u0275listener("click", function SeriesCardComponent_ng_container_0_Conditional_11_Template_div_click_0_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.handleSelection($event));
    });
    \u0275\u0275element(1, "input", 23);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classMapInterpolate1("bulk-mode ", ctx_r1.bulkSelectionService.hasSelections() ? "always-show" : "", "");
    \u0275\u0275advance();
    \u0275\u0275property("ngModel", ctx_r1.selected)("ngModelOptions", \u0275\u0275pureFunction0(6, _c1));
    \u0275\u0275attribute("aria-labelledby", ctx_r1.series.id);
  }
}
function SeriesCardComponent_ng_container_0_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10)(1, "span", 24);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.count);
  }
}
function SeriesCardComponent_ng_container_0_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 12)(1, "div", 25)(2, "span", 26);
    \u0275\u0275listener("click", function SeriesCardComponent_ng_container_0_Conditional_14_Template_span_click_2_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.read($event));
    });
    \u0275\u0275elementStart(3, "div");
    \u0275\u0275element(4, "i", 27);
    \u0275\u0275elementEnd()()()();
  }
}
function SeriesCardComponent_ng_container_0_Conditional_25_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "span", 19)(1, "app-card-actionables", 28);
    \u0275\u0275listener("actionHandler", function SeriesCardComponent_ng_container_0_Conditional_25_Template_app_card_actionables_actionHandler_1_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.handleSeriesActionCallback($event, ctx_r1.series));
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("actions", ctx_r1.actions)("labelBy", ctx_r1.series.name);
  }
}
function SeriesCardComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div")(2, "div", 1);
    \u0275\u0275listener("click", function SeriesCardComponent_ng_container_0_Template_div_click_2_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.handleClick());
    });
    \u0275\u0275template(3, SeriesCardComponent_ng_container_0_Conditional_3_Template, 1, 3, "app-image", 2)(4, SeriesCardComponent_ng_container_0_Conditional_4_Template, 1, 3, "app-image", 2);
    \u0275\u0275elementStart(5, "div", 3);
    \u0275\u0275template(6, SeriesCardComponent_ng_container_0_Conditional_6_Template, 3, 7, "p", 4);
    \u0275\u0275elementStart(7, "span", 5);
    \u0275\u0275element(8, "app-download-indicator", 6);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(9, SeriesCardComponent_ng_container_0_Conditional_9_Template, 2, 1, "div", 7)(10, SeriesCardComponent_ng_container_0_Conditional_10_Template, 2, 0, "div", 8)(11, SeriesCardComponent_ng_container_0_Conditional_11_Template, 2, 7, "div", 9)(12, SeriesCardComponent_ng_container_0_Conditional_12_Template, 3, 1, "div", 10);
    \u0275\u0275element(13, "div", 11);
    \u0275\u0275template(14, SeriesCardComponent_ng_container_0_Conditional_14_Template, 5, 0, "div", 12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "div", 13)(16, "div", 14);
    \u0275\u0275text(17);
    \u0275\u0275pipe(18, "relationship");
    \u0275\u0275pipe(19, "defaultValue");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "div", 15);
    \u0275\u0275element(21, "app-series-format", 16);
    \u0275\u0275elementStart(22, "span", 17)(23, "a", 18);
    \u0275\u0275text(24);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(25, SeriesCardComponent_ng_container_0_Conditional_25_Template, 2, 2, "span", 19);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275classMapInterpolate1("card-item-container card position-relative ", ctx_r1.selected ? "selected-highlight" : "", "");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.series.pages > 0 ? 3 : ctx_r1.series.pages === 0 ? 4 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r1.series.pagesRead > 0 && ctx_r1.series.pagesRead < ctx_r1.series.pages && ctx_r1.series.pages > 0 && ctx_r1.series.pagesRead !== ctx_r1.series.pages ? 6 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275property("download$", ctx_r1.download$);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.series.pages === 0 ? 9 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.series.pagesRead === 0 && ctx_r1.series.pages > 0 ? 10 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.allowSelection ? 11 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.count > 1 ? 12 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(!ctx_r1.bulkSelectionService.hasSelections() ? 14 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("ngbTooltip", ctx_r1.series.localizedName.length > 34 ? ctx_r1.series.localizedName : null);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.relation ? \u0275\u0275pipeBind1(18, 21, ctx_r1.relation) : \u0275\u0275pipeBind1(19, 23, ctx_r1.series.localizedName), " ");
    \u0275\u0275advance(4);
    \u0275\u0275property("format", ctx_r1.series.format);
    \u0275\u0275advance();
    \u0275\u0275propertyInterpolate("id", ctx_r1.series.id);
    \u0275\u0275property("ngbTooltip", ctx_r1.series.name);
    \u0275\u0275advance();
    \u0275\u0275propertyInterpolate2("routerLink", "/library/", ctx_r1.libraryId, "/series/", ctx_r1.series.id, "");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.series.name, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.actions && ctx_r1.actions.length > 0 ? 25 : -1);
  }
}
function deepClone(obj) {
  if (obj === null || typeof obj !== "object") {
    return obj;
  }
  if (obj instanceof Array) {
    return obj.map((item) => deepClone(item));
  }
  const clonedObj = {};
  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      if (typeof obj[key] === "object" && obj[key] !== null) {
        clonedObj[key] = deepClone(obj[key]);
      } else {
        clonedObj[key] = obj[key];
      }
    }
  }
  return clonedObj;
}
var SeriesCardComponent = class _SeriesCardComponent {
  constructor() {
    this.offcanvasService = inject(NgbOffcanvas);
    this.router = inject(Router);
    this.cdRef = inject(ChangeDetectorRef);
    this.seriesService = inject(SeriesService);
    this.toastr = inject(ToastrService);
    this.modalService = inject(NgbModal);
    this.imageService = inject(ImageService);
    this.actionFactoryService = inject(ActionFactoryService);
    this.actionService = inject(ActionService);
    this.accountService = inject(AccountService);
    this.destroyRef = inject(DestroyRef);
    this.bulkSelectionService = inject(BulkSelectionService);
    this.downloadService = inject(DownloadService);
    this.scrollService = inject(ScrollService);
    this.readerService = inject(ReaderService);
    this.libraryId = 0;
    this.suppressLibraryLink = false;
    this.selected = false;
    this.allowSelection = false;
    this.relation = void 0;
    this.isOnDeck = false;
    this.previewOnClick = false;
    this.clicked = new EventEmitter();
    this.reload = new EventEmitter();
    this.dataChanged = new EventEmitter();
    this.selection = new EventEmitter();
    this.count = 0;
    this.actions = [];
    this.imageUrl = "";
    this.download$ = null;
    this.prevTouchTime = 0;
    this.prevOffset = 0;
    this.selectionInProgress = false;
  }
  onTouchMove(event) {
    if (!this.allowSelection)
      return;
    this.selectionInProgress = false;
    this.cdRef.markForCheck();
  }
  onTouchStart(event) {
    if (!this.allowSelection)
      return;
    this.prevTouchTime = event.timeStamp;
    this.prevOffset = this.scrollService.scrollPosition;
    this.selectionInProgress = true;
  }
  onTouchEnd(event) {
    if (!this.allowSelection)
      return;
    const delta = event.timeStamp - this.prevTouchTime;
    const verticalOffset = this.scrollService.scrollPosition;
    if (delta >= 300 && delta <= 1e3 && verticalOffset === this.prevOffset && this.selectionInProgress) {
      this.handleSelection();
      event.stopPropagation();
      event.preventDefault();
    }
    this.prevTouchTime = 0;
    this.selectionInProgress = false;
  }
  ngOnInit() {
    if (this.series) {
      this.imageUrl = this.imageService.getSeriesCoverImage(this.series.id);
      this.cdRef.markForCheck();
    }
  }
  ngOnChanges(changes) {
    if (this.series) {
      this.accountService.currentUser$.pipe(takeUntilDestroyed(this.destroyRef)).subscribe((user) => {
        this.user = user;
      });
      this.download$ = this.downloadService.activeDownloads$.pipe(takeUntilDestroyed(this.destroyRef), map((events) => {
        return this.downloadService.mapToEntityType(events, this.series);
      }));
      this.actions = [...this.actionFactoryService.getSeriesActions((action, series) => this.handleSeriesActionCallback(action, series))];
      if (this.isOnDeck) {
        const othersIndex = this.actions.findIndex((obj) => obj.title === "others");
        const othersAction = deepClone(this.actions[othersIndex]);
        if (othersAction.children.findIndex((o) => o.action === Action.RemoveFromOnDeck) < 0) {
          othersAction.children.push({
            action: Action.RemoveFromOnDeck,
            title: "remove-from-on-deck",
            description: "",
            callback: (action, series) => this.handleSeriesActionCallback(action, series),
            class: "danger",
            requiresAdmin: false,
            children: []
          });
          this.actions[othersIndex] = othersAction;
        }
      }
      this.cdRef.markForCheck();
    }
  }
  handleSeriesActionCallback(action, series) {
    switch (action.action) {
      case Action.MarkAsRead:
        this.markAsRead(series);
        break;
      case Action.MarkAsUnread:
        this.markAsUnread(series);
        break;
      case Action.Scan:
        this.scanLibrary(series);
        break;
      case Action.RefreshMetadata:
        this.refreshMetadata(series, true);
        break;
      case Action.GenerateColorScape:
        this.refreshMetadata(series, false);
        break;
      case Action.Delete:
        this.deleteSeries(series);
        break;
      case Action.Edit:
        this.openEditModal(series);
        break;
      case Action.Match:
        this.actionService.matchSeries(this.series, (refreshNeeded) => {
          if (refreshNeeded) {
            this.reload.emit(series.id);
          }
        });
        break;
      case Action.AddToReadingList:
        this.actionService.addSeriesToReadingList(series);
        break;
      case Action.AddToWantToReadList:
        this.actionService.addMultipleSeriesToWantToReadList([series.id]);
        break;
      case Action.RemoveFromWantToReadList:
        this.actionService.removeMultipleSeriesFromWantToReadList([series.id]);
        if (this.router.url.startsWith("/want-to-read")) {
          this.reload.emit(series.id);
        }
        break;
      case Action.AddToCollection:
        this.actionService.addMultipleSeriesToCollectionTag([series]);
        break;
      case Action.AnalyzeFiles:
        this.actionService.analyzeFilesForSeries(series);
        break;
      case Action.SendTo:
        const device = action._extra.data;
        this.actionService.sendSeriesToDevice(series.id, device);
        break;
      case Action.RemoveFromOnDeck:
        this.seriesService.removeFromOnDeck(series.id).subscribe(() => this.reload.emit(series.id));
        break;
      case Action.Download:
        this.downloadService.download("series", this.series);
        break;
      default:
        break;
    }
  }
  openEditModal(data) {
    const modalRef = this.modalService.open(EditSeriesModalComponent, DefaultModalOptions);
    modalRef.componentInstance.series = data;
    modalRef.closed.subscribe((closeResult) => {
      if (closeResult.success) {
        this.seriesService.getSeries(data.id).subscribe((series) => {
          this.series = series;
          this.cdRef.markForCheck();
          this.reload.emit(series.id);
          this.dataChanged.emit(series);
        });
      }
    });
  }
  refreshMetadata(series, forceUpdate = false) {
    return __async(this, null, function* () {
      yield this.actionService.refreshSeriesMetadata(series, void 0, forceUpdate, forceUpdate);
    });
  }
  scanLibrary(series) {
    return __async(this, null, function* () {
      this.seriesService.scan(series.libraryId, series.id).subscribe((res) => {
        this.toastr.success(translate("toasts.scan-queued", { name: series.name }));
      });
    });
  }
  deleteSeries(series) {
    return __async(this, null, function* () {
      yield this.actionService.deleteSeries(series, (result) => {
        if (result) {
          this.reload.emit(series.id);
        }
      });
    });
  }
  markAsUnread(series) {
    this.actionService.markSeriesAsUnread(series, () => {
      if (this.series) {
        this.series.pagesRead = 0;
        this.cdRef.markForCheck();
      }
      this.dataChanged.emit(series);
    });
  }
  markAsRead(series) {
    this.actionService.markSeriesAsRead(series, () => {
      if (this.series) {
        this.series.pagesRead = series.pages;
        this.cdRef.markForCheck();
      }
      this.dataChanged.emit(series);
    });
  }
  handleClick() {
    if (this.previewOnClick) {
      const ref = this.offcanvasService.open(SeriesPreviewDrawerComponent, { position: "end", panelClass: "" });
      ref.componentInstance.isExternalSeries = false;
      ref.componentInstance.seriesId = this.series.id;
      ref.componentInstance.libraryId = this.series.libraryId;
      ref.componentInstance.name = this.series.name;
      return;
    }
    this.clicked.emit(this.series);
    this.router.navigate(["library", this.libraryId, "series", this.series?.id]);
  }
  handleSelection(event) {
    if (event) {
      event.stopPropagation();
    }
    this.selection.emit(this.selected);
    this.cdRef.detectChanges();
  }
  read(event) {
    event.stopPropagation();
    if (this.bulkSelectionService.hasSelections())
      return;
    this.readerService.getCurrentChapter(this.series.id).subscribe((chapter) => {
      this.readerService.readChapter(this.libraryId, this.series.id, chapter, false);
    });
  }
  static {
    this.\u0275fac = function SeriesCardComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SeriesCardComponent)();
    };
  }
  static {
    this.\u0275cmp = \u0275\u0275defineComponent({ type: _SeriesCardComponent, selectors: [["app-series-card"]], hostBindings: function SeriesCardComponent_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("touchmove", function SeriesCardComponent_touchmove_HostBindingHandler($event) {
          return ctx.onTouchMove($event);
        })("touchstart", function SeriesCardComponent_touchstart_HostBindingHandler($event) {
          return ctx.onTouchStart($event);
        })("touchend", function SeriesCardComponent_touchend_HostBindingHandler($event) {
          return ctx.onTouchEnd($event);
        });
      }
    }, inputs: { series: "series", libraryId: "libraryId", suppressLibraryLink: "suppressLibraryLink", selected: "selected", allowSelection: "allowSelection", relation: "relation", isOnDeck: "isOnDeck", previewOnClick: "previewOnClick" }, outputs: { clicked: "clicked", reload: "reload", dataChanged: "dataChanged", selection: "selection" }, standalone: true, features: [\u0275\u0275NgOnChangesFeature, \u0275\u0275StandaloneFeature], decls: 1, vars: 1, consts: [[4, "transloco", "translocoRead"], [1, "overlay", 3, "click"], ["height", "232.91px", "width", "160px", 3, "styles", "imageUrl"], [1, "progress-banner"], ["container", "body", 3, "ngbTooltip"], [1, "download"], [3, "download$"], [1, "error-banner"], [1, "badge-container"], [3, "class"], [1, "count"], [1, "card-overlay"], [1, "series", "overlay-information"], [1, "card-body", "meta-title", 3, "ngbTooltip"], [1, "card-content", "d-flex", "justify-content-center", "align-items-center", "text-center", 2, "width", "100%", "min-height", "58px"], [1, "card-title-container"], [3, "format"], [1, "card-title", 3, "ngbTooltip", "id"], [1, "dark-exempt", "btn-icon", 3, "routerLink"], [1, "card-actions"], ["type", "primary", "height", "5px", 3, "value", "max"], [1, "not-read-badge"], [3, "click"], ["type", "checkbox", 1, "form-check-input", 3, "ngModel", "ngModelOptions"], [1, "badge", "bg-primary"], [1, "overlay-information--centered"], [1, "card-title", "library", "mx-auto", 2, "width", "auto", 3, "click"], ["aria-hidden", "true", 1, "fa-solid", "fa-book"], [3, "actionHandler", "actions", "labelBy"]], template: function SeriesCardComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, SeriesCardComponent_ng_container_0_Template, 26, 25, "ng-container", 0);
      }
      if (rf & 2) {
        \u0275\u0275property("translocoRead", "card-item");
      }
    }, dependencies: [
      RelationshipPipe,
      CardActionablesComponent,
      DefaultValuePipe,
      DownloadIndicatorComponent,
      FormsModule,
      CheckboxControlValueAccessor,
      NgControlStatus,
      NgModel,
      ImageComponent,
      NgbProgressbar,
      NgbTooltip,
      RouterLink,
      TranslocoDirective,
      SeriesFormatComponent,
      DecimalPipe
    ], styles: ["\n\n.error-banner[_ngcontent-%COMP%] {\n  width: 160px;\n  height: 18px;\n  background-color: var(--toast-error-bg-color);\n  font-size: 12px;\n  color: white;\n  text-transform: uppercase;\n  text-align: center;\n  position: absolute;\n  top: 0px;\n  right: 0px;\n}\n.selected-highlight[_ngcontent-%COMP%] {\n  outline: 2px solid var(--primary-color);\n}\n.progress-banner[_ngcontent-%COMP%] {\n  width: 160px;\n  height: 5px;\n}\n.progress-banner[_ngcontent-%COMP%]   .progress[_ngcontent-%COMP%] {\n  color: var(--card-progress-bar-color);\n  background-color: transparent;\n}\n.download[_ngcontent-%COMP%] {\n  width: 80px;\n  height: 80px;\n  position: absolute;\n  top: 25%;\n  right: 30%;\n}\n.badge-container[_ngcontent-%COMP%] {\n  border-radius: 4px;\n  display: block;\n  height: 232.91px;\n  left: 0;\n  overflow: hidden;\n  pointer-events: none;\n  position: absolute;\n  top: 0;\n  width: 160px;\n}\n.not-read-badge[_ngcontent-%COMP%] {\n  position: absolute;\n  top: calc(-1 * var(--card-progress-triangle-size) / 2);\n  right: -14px;\n  z-index: 1000;\n  height: var(--card-progress-triangle-size);\n  width: var(--card-progress-triangle-size);\n  background-color: var(--primary-color);\n  transform: rotate(45deg);\n}\n.bulk-mode[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 5px;\n  left: 5px;\n  visibility: hidden;\n}\n.bulk-mode.always-show[_ngcontent-%COMP%] {\n  visibility: visible !important;\n  width: 160px;\n  height: 232.91px;\n}\n.bulk-mode[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%] {\n  width: 20px;\n  height: 20px;\n  color: var(--checkbox-bg-color);\n}\n.meta-title[_ngcontent-%COMP%] {\n  display: none;\n  visibility: hidden;\n  pointer-events: none;\n  border-width: 0;\n}\n.overlay[_ngcontent-%COMP%]:hover   .bulk-mode[_ngcontent-%COMP%] {\n  visibility: visible;\n  z-index: 110;\n}\n.overlay[_ngcontent-%COMP%]:hover:hover {\n  visibility: visible;\n}\n.overlay[_ngcontent-%COMP%]:hover:hover   .overlay-information[_ngcontent-%COMP%] {\n  visibility: visible;\n  display: block;\n}\n.overlay[_ngcontent-%COMP%]:hover:hover    + .meta-title[_ngcontent-%COMP%] {\n  display: -webkit-box;\n  visibility: visible;\n  pointer-events: none;\n}\n.overlay[_ngcontent-%COMP%]:hover   .overlay-information[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 232.91px;\n  transition: all 0.2s;\n  border-top-left-radius: 4px;\n  border-top-right-radius: 4px;\n}\n.overlay[_ngcontent-%COMP%]:hover   .overlay-information[_ngcontent-%COMP%]:hover {\n  background-color: var(--card-overlay-hover-bg-color);\n  cursor: pointer;\n}\n.overlay[_ngcontent-%COMP%]:hover   .overlay-information[_ngcontent-%COMP%]   .overlay-information--centered[_ngcontent-%COMP%] {\n  position: absolute;\n  background-color: rgba(0, 0, 0, 0.7);\n  border-radius: 50px;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  z-index: 115;\n}\n.overlay[_ngcontent-%COMP%]:hover   .overlay-information[_ngcontent-%COMP%]   .overlay-information--centered[_ngcontent-%COMP%]:hover {\n  background-color: var(--primary-color) !important;\n  cursor: pointer;\n}\n.overlay[_ngcontent-%COMP%]   .count[_ngcontent-%COMP%] {\n  top: 5px;\n  right: 10px;\n  position: absolute;\n}\n.card-actions[_ngcontent-%COMP%] {\n  z-index: 115;\n}\n.library[_ngcontent-%COMP%] {\n  font-size: 13px;\n  text-decoration: none;\n  margin-top: 0px;\n}\n.card-title-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 0 5px;\n}\n.card-title-container[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:first-child {\n  min-width: 22px;\n}\n.card-title-container[_ngcontent-%COMP%]   .card-title[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  margin: 0;\n  text-align: center;\n  max-width: 90px;\n}\n.card-title-container[_ngcontent-%COMP%]   .card-title[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.card-actions[_ngcontent-%COMP%] {\n  min-width: 15.82px;\n}\n.card-format[_ngcontent-%COMP%] {\n  min-width: 22px;\n}\n  app-card-actionables .dropdown .dropdown-toggle {\n  padding: 0 5px;\n}\n.meta-title[_ngcontent-%COMP%]   .card-title[_ngcontent-%COMP%] {\n  max-width: unset;\n}\n.card-title[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  margin: 0;\n  padding: 10px 0;\n  text-align: center;\n  max-width: 120px;\n}\n.card-title[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.card-body[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:nth-child(2) {\n  height: 40px;\n  overflow: hidden;\n  -webkit-line-clamp: 2;\n  display: -webkit-box;\n  overflow: hidden;\n  -webkit-box-orient: vertical;\n  font-size: 0.8rem;\n}\n.overlay-information[_ngcontent-%COMP%] {\n  visibility: hidden;\n  display: none;\n}\n.overlay-information[_ngcontent-%COMP%]   .card-title[_ngcontent-%COMP%] {\n  padding: 10px;\n}\n.chapter[_ngcontent-%COMP%]   .overlay-information--centered[_ngcontent-%COMP%]   div[_ngcontent-%COMP%], \n.volume[_ngcontent-%COMP%]   .overlay-information--centered[_ngcontent-%COMP%]   div[_ngcontent-%COMP%], \n.series[_ngcontent-%COMP%]   .overlay-information--centered[_ngcontent-%COMP%]   div[_ngcontent-%COMP%], \n.expected[_ngcontent-%COMP%]   .overlay-information--centered[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  height: 32px;\n  width: 32px;\n}\n.chapter[_ngcontent-%COMP%]   .overlay-information--centered[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   i[_ngcontent-%COMP%], \n.volume[_ngcontent-%COMP%]   .overlay-information--centered[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   i[_ngcontent-%COMP%], \n.series[_ngcontent-%COMP%]   .overlay-information--centered[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   i[_ngcontent-%COMP%], \n.expected[_ngcontent-%COMP%]   .overlay-information--centered[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 1.4rem;\n  line-height: 32px;\n}\n/*# sourceMappingURL=series-card.component.css.map */"], changeDetection: 0 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SeriesCardComponent, { className: "SeriesCardComponent", filePath: "src/app/cards/series-card/series-card.component.ts", lineNumber: 82 });
})();

export {
  SeriesCardComponent
};
//# sourceMappingURL=chunk-ZBG2BUFS.js.map
