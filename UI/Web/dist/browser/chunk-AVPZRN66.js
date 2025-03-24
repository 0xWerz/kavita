import {
  DownloadIndicatorComponent
} from "./chunk-3H6WDNS7.js";
import {
  BulkSelectionService
} from "./chunk-OMYYKEHJ.js";
import {
  CompactNumberPipe
} from "./chunk-AFXXYIIH.js";
import {
  PromotedIconComponent
} from "./chunk-LOI3GAWB.js";
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
  SentenceCasePipe
} from "./chunk-IQIEDCQT.js";
import {
  DownloadService
} from "./chunk-CVI764VQ.js";
import {
  LibraryService
} from "./chunk-PBM62GK4.js";
import {
  UtcToLocalTimePipe
} from "./chunk-2L2JQBKQ.js";
import {
  ImageComponent
} from "./chunk-2JLAQ3MZ.js";
import {
  ImageService
} from "./chunk-TPURWX2Y.js";
import {
  UtilityService
} from "./chunk-A6JEQ5GB.js";
import {
  MangaFormat
} from "./chunk-RSMGJKYW.js";
import {
  AccountService,
  Action,
  ActionFactoryService,
  RouterLink,
  RouterLinkActive
} from "./chunk-U2DWQJI2.js";
import {
  NgbProgressbar,
  NgbTooltip
} from "./chunk-2R2RCU4Y.js";
import {
  EVENTS,
  MessageHubService
} from "./chunk-PUXELTB2.js";
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
  NgTemplateOutlet,
  TranslocoDirective,
  TranslocoModule,
  filter,
  inject,
  map,
  takeUntilDestroyed,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵattributeInterpolate2,
  ɵɵclassMapInterpolate1,
  ɵɵconditional,
  ɵɵcontentQuery,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementContainer,
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
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpropertyInterpolate1,
  ɵɵpropertyInterpolate2,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵqueryRefresh,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-PYHIUVNJ.js";

// src/app/cards/card-item/card-item.component.ts
var _c0 = ["subtitle"];
var _c1 = () => ({ "border-radius": ".25rem .25rem 0 0" });
var _c2 = () => ({ standalone: true });
var _c3 = (a0) => ({ $implicit: a0 });
var _c4 = (a0) => ["/library", a0];
function CardItemComponent_ng_container_0_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-image", 2);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("styles", \u0275\u0275pureFunction0(2, _c1))("imageUrl", ctx_r1.imageUrl);
  }
}
function CardItemComponent_ng_container_0_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-image", 2);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("styles", \u0275\u0275pureFunction0(2, _c1))("imageUrl", ctx_r1.imageService.errorImage);
  }
}
function CardItemComponent_ng_container_0_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 4);
    \u0275\u0275pipe(1, "number");
    \u0275\u0275element(2, "ngb-progressbar", 17);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275propertyInterpolate1("ngbTooltip", "", \u0275\u0275pipeBind2(1, 4, ctx_r1.read / ctx_r1.total * 100, "1.0-1"), "% Read");
    \u0275\u0275advance(2);
    \u0275\u0275property("value", ctx_r1.read)("max", ctx_r1.total);
  }
}
function CardItemComponent_ng_container_0_Conditional_9_Template(rf, ctx) {
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
function CardItemComponent_ng_container_0_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8);
    \u0275\u0275element(1, "div", 18);
    \u0275\u0275elementEnd();
  }
}
function CardItemComponent_ng_container_0_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 19);
    \u0275\u0275listener("click", function CardItemComponent_ng_container_0_Conditional_11_Template_div_click_0_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.handleSelection($event));
    });
    \u0275\u0275element(1, "input", 20);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classMapInterpolate1("bulk-mode ", ctx_r1.bulkSelectionService.hasSelections() ? "always-show" : "", "");
    \u0275\u0275advance();
    \u0275\u0275attributeInterpolate2("aria-labelledby", "", ctx_r1.title, "_", ctx_r1.entity.id, "");
    \u0275\u0275property("ngModel", ctx_r1.selected)("ngModelOptions", \u0275\u0275pureFunction0(8, _c2));
  }
}
function CardItemComponent_ng_container_0_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10)(1, "span", 21);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "compactNumber");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 1, ctx_r1.count));
  }
}
function CardItemComponent_ng_container_0_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 12)(1, "div", 22)(2, "span", 23)(3, "span", 19);
    \u0275\u0275listener("click", function CardItemComponent_ng_container_0_Conditional_14_Template_span_click_3_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.clickRead($event));
    });
    \u0275\u0275elementStart(4, "div");
    \u0275\u0275element(5, "i", 24);
    \u0275\u0275elementEnd()()()()();
  }
}
function CardItemComponent_ng_container_0_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14);
    \u0275\u0275elementContainer(1, 25);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r1.subtitleTemplate)("ngTemplateOutletContext", \u0275\u0275pureFunction1(2, _c3, ctx_r1.entity));
  }
}
function CardItemComponent_ng_container_0_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 15);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "sentenceCase");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(4, _c4, ctx_r1.libraryId));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 2, ctx_r1.libraryName), " ");
  }
}
function CardItemComponent_ng_container_0_Conditional_18_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 26);
    \u0275\u0275element(1, "app-series-format", 32);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("format", ctx_r1.format);
  }
}
function CardItemComponent_ng_container_0_Conditional_18_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 28);
    \u0275\u0275element(1, "app-promoted-icon", 33);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("promoted", ctx);
  }
}
function CardItemComponent_ng_container_0_Conditional_18_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 29);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("routerLink", ctx_r1.linkUrl);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.title);
  }
}
function CardItemComponent_ng_container_0_Conditional_18_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275textInterpolate1(" ", ctx_r1.title, " ");
  }
}
function CardItemComponent_ng_container_0_Conditional_18_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-card-actionables", 34);
    \u0275\u0275listener("actionHandler", function CardItemComponent_ng_container_0_Conditional_18_Conditional_8_Template_app_card_actionables_actionHandler_0_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.performAction($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("actions", ctx_r1.actions)("labelBy", ctx_r1.title);
  }
}
function CardItemComponent_ng_container_0_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 16)(1, "span");
    \u0275\u0275template(2, CardItemComponent_ng_container_0_Conditional_18_Conditional_2_Template, 2, 1, "span", 26);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 27);
    \u0275\u0275listener("click", function CardItemComponent_ng_container_0_Conditional_18_Template_span_click_3_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.handleClick($event));
    });
    \u0275\u0275template(4, CardItemComponent_ng_container_0_Conditional_18_Conditional_4_Template, 2, 1, "span", 28)(5, CardItemComponent_ng_container_0_Conditional_18_Conditional_5_Template, 2, 2, "a", 29)(6, CardItemComponent_ng_container_0_Conditional_18_Conditional_6_Template, 1, 1);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span", 30);
    \u0275\u0275template(8, CardItemComponent_ng_container_0_Conditional_18_Conditional_8_Template, 1, 2, "app-card-actionables", 31);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_6_0;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.showFormat ? 2 : -1);
    \u0275\u0275advance();
    \u0275\u0275propertyInterpolate2("id", "", ctx_r1.title, "_", ctx_r1.entity.id, "");
    \u0275\u0275property("ngbTooltip", ctx_r1.tooltipTitle);
    \u0275\u0275advance();
    \u0275\u0275conditional((tmp_6_0 = ctx_r1.isPromoted()) ? 4 : -1, tmp_6_0);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.linkUrl ? 5 : 6);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r1.actions && ctx_r1.actions.length > 0 ? 8 : -1);
  }
}
function CardItemComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div")(2, "div", 1);
    \u0275\u0275listener("click", function CardItemComponent_ng_container_0_Template_div_click_2_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.handleClick($event));
    });
    \u0275\u0275template(3, CardItemComponent_ng_container_0_Conditional_3_Template, 1, 3, "app-image", 2)(4, CardItemComponent_ng_container_0_Conditional_4_Template, 1, 3, "app-image", 2);
    \u0275\u0275elementStart(5, "div", 3);
    \u0275\u0275template(6, CardItemComponent_ng_container_0_Conditional_6_Template, 3, 7, "p", 4);
    \u0275\u0275elementStart(7, "span", 5);
    \u0275\u0275element(8, "app-download-indicator", 6);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(9, CardItemComponent_ng_container_0_Conditional_9_Template, 2, 1, "div", 7)(10, CardItemComponent_ng_container_0_Conditional_10_Template, 2, 0, "div", 8)(11, CardItemComponent_ng_container_0_Conditional_11_Template, 2, 9, "div", 9)(12, CardItemComponent_ng_container_0_Conditional_12_Template, 4, 3, "div", 10);
    \u0275\u0275element(13, "div", 11);
    \u0275\u0275template(14, CardItemComponent_ng_container_0_Conditional_14_Template, 6, 0, "div", 12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "div", 13);
    \u0275\u0275template(16, CardItemComponent_ng_container_0_Conditional_16_Template, 2, 4, "div", 14)(17, CardItemComponent_ng_container_0_Conditional_17_Template, 3, 6, "a", 15);
    \u0275\u0275elementEnd();
    \u0275\u0275template(18, CardItemComponent_ng_container_0_Conditional_18_Template, 9, 8, "div", 16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275classMapInterpolate1("card-item-container card ", ctx_r1.selected ? "selected-highlight" : "", "");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.total > 0 || ctx_r1.suppressArchiveWarning ? 3 : ctx_r1.total === 0 && !ctx_r1.suppressArchiveWarning ? 4 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r1.read > 0 && ctx_r1.read < ctx_r1.total && ctx_r1.total > 0 && ctx_r1.read !== ctx_r1.total ? 6 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275property("download$", ctx_r1.download$);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.total === 0 && !ctx_r1.suppressArchiveWarning ? 9 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.read === 0 && ctx_r1.total > 0 ? 10 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.allowSelection ? 11 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.count > 1 ? 12 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.showReadButton && !ctx_r1.bulkSelectionService.hasSelections() ? 14 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.subtitleTemplate ? 16 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx_r1.suppressLibraryLink && ctx_r1.libraryName ? 17 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.title.length > 0 || ctx_r1.actions.length > 0 ? 18 : -1);
  }
}
var CardItemComponent = class _CardItemComponent {
  constructor() {
    this.destroyRef = inject(DestroyRef);
    this.imageService = inject(ImageService);
    this.bulkSelectionService = inject(BulkSelectionService);
    this.libraryService = inject(LibraryService);
    this.downloadService = inject(DownloadService);
    this.utilityService = inject(UtilityService);
    this.messageHub = inject(MessageHubService);
    this.accountService = inject(AccountService);
    this.scrollService = inject(ScrollService);
    this.cdRef = inject(ChangeDetectorRef);
    this.actionFactoryService = inject(ActionFactoryService);
    this.MangaFormat = MangaFormat;
    this.imageUrl = "";
    this.title = "";
    this.actions = [];
    this.read = 0;
    this.total = 0;
    this.suppressLibraryLink = false;
    this.selected = false;
    this.allowSelection = false;
    this.suppressArchiveWarning = false;
    this.count = 0;
    this.showReadButton = false;
    this.centerOverlay = false;
    this.hasReadButton = false;
    this.showFormat = true;
    this.clicked = new EventEmitter();
    this.selection = new EventEmitter();
    this.readClicked = new EventEmitter();
    this.libraryName = void 0;
    this.libraryId = void 0;
    this.format = MangaFormat.UNKNOWN;
    this.tooltipTitle = this.title;
    this.download$ = null;
    this.prevTouchTime = 0;
    this.prevOffset = 0;
    this.selectionInProgress = false;
  }
  ngOnInit() {
    if (this.entity.hasOwnProperty("promoted") && this.entity.hasOwnProperty("title")) {
      this.suppressArchiveWarning = true;
      this.cdRef.markForCheck();
    }
    if (!this.suppressLibraryLink) {
      if (this.entity !== void 0 && this.entity.hasOwnProperty("libraryId")) {
        this.libraryId = this.entity.libraryId;
        this.cdRef.markForCheck();
      }
      if (this.libraryId !== void 0 && this.libraryId > 0) {
        this.libraryService.getLibraryName(this.libraryId).pipe(takeUntilDestroyed(this.destroyRef)).subscribe((name) => {
          this.libraryName = name;
          this.cdRef.markForCheck();
        });
      }
    }
    this.format = this.entity.format;
    if (this.utilityService.isChapter(this.entity)) {
      const chapter = this.utilityService.asChapter(this.entity);
      const chapterTitle = chapter.titleName;
      if (chapterTitle === "" || chapterTitle === null || chapterTitle === void 0) {
        const volumeTitle = chapter.volumeTitle;
        if (volumeTitle === "" || volumeTitle === null || volumeTitle === void 0) {
          this.tooltipTitle = this.title.trim();
        } else {
          this.tooltipTitle = (volumeTitle + " " + this.title).trim();
        }
      } else {
        this.tooltipTitle = chapterTitle;
      }
    } else if (this.utilityService.isVolume(this.entity)) {
      const vol = this.utilityService.asVolume(this.entity);
      if (vol.chapters !== void 0 && vol.chapters.length > 0) {
        this.tooltipTitle = vol.chapters[0].titleName;
      }
      if (this.tooltipTitle === "") {
        this.tooltipTitle = vol.name;
      }
    } else if (this.utilityService.isSeries(this.entity)) {
      this.tooltipTitle = this.title || this.utilityService.asSeries(this.entity).name;
    } else if (this.entity.hasOwnProperty("expectedDate")) {
      this.suppressArchiveWarning = true;
      this.imageUrl = "";
      const nextDate = this.entity;
      const tokens = nextDate.title.split(":");
      this.centerOverlay = true;
      if (nextDate.expectedDate) {
        const utcPipe = new UtcToLocalTimePipe();
        this.title = "~ " + utcPipe.transform(nextDate.expectedDate, "shortDate");
      }
      this.cdRef.markForCheck();
    } else {
      this.tooltipTitle = this.title;
    }
    this.filterSendTo();
    this.accountService.currentUser$.pipe(takeUntilDestroyed(this.destroyRef)).subscribe((user) => {
      this.user = user;
    });
    this.messageHub.messages$.pipe(filter((event) => event.event === EVENTS.UserProgressUpdate), map((evt) => evt.payload), takeUntilDestroyed(this.destroyRef)).subscribe((updateEvent) => {
      if (this.user === void 0 || this.user.username !== updateEvent.username)
        return;
      if (this.utilityService.isChapter(this.entity) && updateEvent.chapterId !== this.entity.id)
        return;
      if (this.utilityService.isVolume(this.entity) && updateEvent.volumeId !== this.entity.id)
        return;
      if (this.utilityService.isSeries(this.entity) && updateEvent.seriesId !== this.entity.id)
        return;
      if (this.utilityService.isChapter(this.entity)) {
        const c = this.utilityService.asChapter(this.entity);
        c.pagesRead = updateEvent.pagesRead;
        this.read = updateEvent.pagesRead;
      }
      if (this.utilityService.isVolume(this.entity) || this.utilityService.isSeries(this.entity)) {
        if (this.utilityService.isVolume(this.entity)) {
          const v = this.utilityService.asVolume(this.entity);
          let sum = 0;
          const chapters = v.chapters.filter((c) => c.volumeId === updateEvent.volumeId);
          chapters.forEach((chapter) => {
            chapter.pagesRead = updateEvent.pagesRead;
            sum += chapter.pagesRead;
          });
          v.pagesRead = sum;
          this.read = sum;
        } else {
          return;
        }
      }
      this.cdRef.detectChanges();
    });
    this.download$ = this.downloadService.activeDownloads$.pipe(takeUntilDestroyed(this.destroyRef), map((events) => {
      return this.downloadService.mapToEntityType(events, this.entity);
    }));
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
  handleClick(event) {
    if (this.bulkSelectionService.hasSelections()) {
      this.handleSelection();
      return;
    }
    this.clicked.emit(this.title);
  }
  preventClick(event) {
    event.stopPropagation();
    event.preventDefault();
  }
  performAction(action) {
    if (action.action == Action.Download) {
      if (this.utilityService.isVolume(this.entity)) {
        const volume = this.utilityService.asVolume(this.entity);
        this.downloadService.download("volume", volume);
      } else if (this.utilityService.isChapter(this.entity)) {
        const chapter = this.utilityService.asChapter(this.entity);
        this.downloadService.download("chapter", chapter);
      } else if (this.utilityService.isSeries(this.entity)) {
        const series = this.utilityService.asSeries(this.entity);
        this.downloadService.download("series", series);
      }
      return;
    }
    if (typeof action.callback === "function") {
      action.callback(action, this.entity);
    }
  }
  isPromoted() {
    const tag = this.entity;
    return tag.hasOwnProperty("promoted") && tag.promoted;
  }
  handleSelection(event) {
    if (event) {
      event.stopPropagation();
    }
    this.selection.emit(this.selected);
    this.cdRef.detectChanges();
  }
  filterSendTo() {
    if (!this.actions || this.actions.length === 0)
      return;
    if (this.utilityService.isChapter(this.entity)) {
      this.actions = this.actionFactoryService.filterSendToAction(this.actions, this.entity);
    } else if (this.utilityService.isVolume(this.entity)) {
      const vol = this.utilityService.asVolume(this.entity);
      this.actions = this.actionFactoryService.filterSendToAction(this.actions, vol.chapters[0]);
    } else if (this.utilityService.isSeries(this.entity)) {
      const series = this.entity;
    }
  }
  clickRead(event) {
    event.stopPropagation();
    if (this.bulkSelectionService.hasSelections())
      return;
    this.readClicked.emit(this.entity);
  }
  static {
    this.\u0275fac = function CardItemComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CardItemComponent)();
    };
  }
  static {
    this.\u0275cmp = \u0275\u0275defineComponent({ type: _CardItemComponent, selectors: [["app-card-item"]], contentQueries: function CardItemComponent_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        \u0275\u0275contentQuery(dirIndex, _c0, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.subtitleTemplate = _t.first);
      }
    }, hostBindings: function CardItemComponent_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("touchmove", function CardItemComponent_touchmove_HostBindingHandler($event) {
          return ctx.onTouchMove($event);
        })("touchstart", function CardItemComponent_touchstart_HostBindingHandler($event) {
          return ctx.onTouchStart($event);
        })("touchend", function CardItemComponent_touchend_HostBindingHandler($event) {
          return ctx.onTouchEnd($event);
        });
      }
    }, inputs: { imageUrl: "imageUrl", title: "title", actions: "actions", read: "read", total: "total", suppressLibraryLink: "suppressLibraryLink", entity: "entity", selected: "selected", allowSelection: "allowSelection", suppressArchiveWarning: "suppressArchiveWarning", count: "count", showReadButton: "showReadButton", centerOverlay: "centerOverlay", hasReadButton: "hasReadButton", linkUrl: "linkUrl", showFormat: "showFormat" }, outputs: { clicked: "clicked", selection: "selection", readClicked: "readClicked" }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 1, vars: 1, consts: [[4, "transloco", "translocoRead"], [1, "overlay", 3, "click"], ["height", "232.91px", "width", "160px", 3, "styles", "imageUrl"], [1, "progress-banner"], ["container", "body", 3, "ngbTooltip"], [1, "download"], [3, "download$"], [1, "error-banner"], [1, "badge-container"], [3, "class"], [1, "count"], [1, "card-overlay"], [1, "series", "overlay-information"], [1, "card-body", "meta-title"], [2, "text-align", "center"], ["routerLinkActive", "router-link-active", 1, "card-title", "library", 3, "routerLink"], [1, "card-title-container"], ["type", "primary", "height", "5px", 3, "value", "max"], [1, "not-read-badge"], [3, "click"], ["type", "checkbox", 1, "form-check-input", 3, "ngModel", "ngModelOptions"], [1, "badge", "bg-primary"], [1, "overlay-information--centered"], [1, "card-title", "library", "mx-auto", 2, "width", "auto"], ["aria-hidden", "true", 1, "fa-solid", "fa-book"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "card-format"], ["placement", "top", "tabindex", "0", 1, "card-title", 3, "click", "id", "ngbTooltip"], [1, "me-1"], [1, "dark-exempt", "btn-icon", 3, "routerLink"], [1, "card-actions"], [3, "actions", "labelBy"], [3, "format"], [3, "promoted"], [3, "actionHandler", "actions", "labelBy"]], template: function CardItemComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, CardItemComponent_ng_container_0_Template, 19, 14, "ng-container", 0);
      }
      if (rf & 2) {
        \u0275\u0275property("translocoRead", "card-item");
      }
    }, dependencies: [
      ImageComponent,
      NgbProgressbar,
      DownloadIndicatorComponent,
      FormsModule,
      CheckboxControlValueAccessor,
      NgControlStatus,
      NgModel,
      NgbTooltip,
      CardActionablesComponent,
      SentenceCasePipe,
      RouterLink,
      TranslocoModule,
      TranslocoDirective,
      RouterLinkActive,
      PromotedIconComponent,
      SeriesFormatComponent,
      DecimalPipe,
      NgTemplateOutlet,
      CompactNumberPipe
    ], styles: ["\n\n.error-banner[_ngcontent-%COMP%] {\n  width: 160px;\n  height: 18px;\n  background-color: var(--toast-error-bg-color);\n  font-size: 12px;\n  color: white;\n  text-transform: uppercase;\n  text-align: center;\n  position: absolute;\n  top: 0px;\n  right: 0px;\n}\n.selected-highlight[_ngcontent-%COMP%] {\n  outline: 2px solid var(--primary-color);\n}\n.progress-banner[_ngcontent-%COMP%] {\n  width: 160px;\n  height: 5px;\n}\n.progress-banner[_ngcontent-%COMP%]   .progress[_ngcontent-%COMP%] {\n  color: var(--card-progress-bar-color);\n  background-color: transparent;\n}\n.download[_ngcontent-%COMP%] {\n  width: 80px;\n  height: 80px;\n  position: absolute;\n  top: 25%;\n  right: 30%;\n}\n.badge-container[_ngcontent-%COMP%] {\n  border-radius: 4px;\n  display: block;\n  height: 232.91px;\n  left: 0;\n  overflow: hidden;\n  pointer-events: none;\n  position: absolute;\n  top: 0;\n  width: 160px;\n}\n.not-read-badge[_ngcontent-%COMP%] {\n  position: absolute;\n  top: calc(-1 * var(--card-progress-triangle-size) / 2);\n  right: -14px;\n  z-index: 1000;\n  height: var(--card-progress-triangle-size);\n  width: var(--card-progress-triangle-size);\n  background-color: var(--primary-color);\n  transform: rotate(45deg);\n}\n.bulk-mode[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 5px;\n  left: 5px;\n  visibility: hidden;\n}\n.bulk-mode.always-show[_ngcontent-%COMP%] {\n  visibility: visible !important;\n  width: 160px;\n  height: 232.91px;\n}\n.bulk-mode[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%] {\n  width: 20px;\n  height: 20px;\n  color: var(--checkbox-bg-color);\n}\n.meta-title[_ngcontent-%COMP%] {\n  display: none;\n  visibility: hidden;\n  pointer-events: none;\n  border-width: 0;\n}\n.overlay[_ngcontent-%COMP%]:hover   .bulk-mode[_ngcontent-%COMP%] {\n  visibility: visible;\n  z-index: 110;\n}\n.overlay[_ngcontent-%COMP%]:hover:hover {\n  visibility: visible;\n}\n.overlay[_ngcontent-%COMP%]:hover:hover   .overlay-information[_ngcontent-%COMP%] {\n  visibility: visible;\n  display: block;\n}\n.overlay[_ngcontent-%COMP%]:hover:hover    + .meta-title[_ngcontent-%COMP%] {\n  display: -webkit-box;\n  visibility: visible;\n  pointer-events: none;\n}\n.overlay[_ngcontent-%COMP%]:hover   .overlay-information[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 232.91px;\n  transition: all 0.2s;\n  border-top-left-radius: 4px;\n  border-top-right-radius: 4px;\n}\n.overlay[_ngcontent-%COMP%]:hover   .overlay-information[_ngcontent-%COMP%]:hover {\n  background-color: var(--card-overlay-hover-bg-color);\n  cursor: pointer;\n}\n.overlay[_ngcontent-%COMP%]:hover   .overlay-information[_ngcontent-%COMP%]   .overlay-information--centered[_ngcontent-%COMP%] {\n  position: absolute;\n  background-color: rgba(0, 0, 0, 0.7);\n  border-radius: 50px;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  z-index: 115;\n}\n.overlay[_ngcontent-%COMP%]:hover   .overlay-information[_ngcontent-%COMP%]   .overlay-information--centered[_ngcontent-%COMP%]:hover {\n  background-color: var(--primary-color) !important;\n  cursor: pointer;\n}\n.overlay[_ngcontent-%COMP%]   .count[_ngcontent-%COMP%] {\n  top: 5px;\n  right: 10px;\n  position: absolute;\n}\n.card-actions[_ngcontent-%COMP%] {\n  z-index: 115;\n}\n.library[_ngcontent-%COMP%] {\n  font-size: 13px;\n  text-decoration: none;\n  margin-top: 0px;\n}\n.card-title-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 0 5px;\n}\n.card-title-container[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:first-child {\n  min-width: 22px;\n}\n.card-title-container[_ngcontent-%COMP%]   .card-title[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  margin: 0;\n  text-align: center;\n  max-width: 90px;\n}\n.card-title-container[_ngcontent-%COMP%]   .card-title[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.card-actions[_ngcontent-%COMP%] {\n  min-width: 15.82px;\n}\n.card-format[_ngcontent-%COMP%] {\n  min-width: 22px;\n}\n  app-card-actionables .dropdown .dropdown-toggle {\n  padding: 0 5px;\n}\n.meta-title[_ngcontent-%COMP%]   .card-title[_ngcontent-%COMP%] {\n  max-width: unset;\n}\n.card-title[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  margin: 0;\n  padding: 10px 0;\n  text-align: center;\n  max-width: 120px;\n}\n.card-title[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.card-body[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:nth-child(2) {\n  height: 40px;\n  overflow: hidden;\n  -webkit-line-clamp: 2;\n  display: -webkit-box;\n  overflow: hidden;\n  -webkit-box-orient: vertical;\n  font-size: 0.8rem;\n}\n.overlay-information[_ngcontent-%COMP%] {\n  visibility: hidden;\n  display: none;\n}\n.overlay-information[_ngcontent-%COMP%]   .card-title[_ngcontent-%COMP%] {\n  padding: 10px;\n}\n.chapter[_ngcontent-%COMP%]   .overlay-information--centered[_ngcontent-%COMP%]   div[_ngcontent-%COMP%], \n.volume[_ngcontent-%COMP%]   .overlay-information--centered[_ngcontent-%COMP%]   div[_ngcontent-%COMP%], \n.series[_ngcontent-%COMP%]   .overlay-information--centered[_ngcontent-%COMP%]   div[_ngcontent-%COMP%], \n.expected[_ngcontent-%COMP%]   .overlay-information--centered[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  height: 32px;\n  width: 32px;\n}\n.chapter[_ngcontent-%COMP%]   .overlay-information--centered[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   i[_ngcontent-%COMP%], \n.volume[_ngcontent-%COMP%]   .overlay-information--centered[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   i[_ngcontent-%COMP%], \n.series[_ngcontent-%COMP%]   .overlay-information--centered[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   i[_ngcontent-%COMP%], \n.expected[_ngcontent-%COMP%]   .overlay-information--centered[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 1.4rem;\n  line-height: 32px;\n}\n/*# sourceMappingURL=card-item.component.css.map */"], changeDetection: 0 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CardItemComponent, { className: "CardItemComponent", filePath: "src/app/cards/card-item/card-item.component.ts", lineNumber: 81 });
})();

export {
  CardItemComponent
};
//# sourceMappingURL=chunk-AVPZRN66.js.map
