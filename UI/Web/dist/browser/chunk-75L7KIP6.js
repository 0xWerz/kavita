import {
  EntityTitleComponent
} from "./chunk-OCFISI54.js";
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
  CardActionablesComponent
} from "./chunk-W4DBALQX.js";
import {
  ActionService
} from "./chunk-HTPJQXUV.js";
import {
  ReaderService
} from "./chunk-D2FQ65JS.js";
import {
  DownloadService
} from "./chunk-CVI764VQ.js";
import {
  ImageComponent
} from "./chunk-2JLAQ3MZ.js";
import {
  ImageService
} from "./chunk-TPURWX2Y.js";
import {
  LibraryType
} from "./chunk-A6JEQ5GB.js";
import {
  MangaFormat
} from "./chunk-RSMGJKYW.js";
import {
  AccountService,
  Action,
  ActionFactoryService,
  Router,
  RouterLink
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
  TranslocoDirective,
  filter,
  inject,
  map,
  takeUntilDestroyed,
  ɵsetClassDebugInfo,
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
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpropertyInterpolate,
  ɵɵpropertyInterpolate1,
  ɵɵpropertyInterpolate3,
  ɵɵpureFunction0,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-PYHIUVNJ.js";

// src/app/cards/chapter-card/chapter-card.component.ts
var _c0 = () => ({ "border-radius": ".25rem .25rem 0 0" });
var _c1 = () => ({ standalone: true });
function ChapterCardComponent_ng_container_0_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-image", 2);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("styles", \u0275\u0275pureFunction0(2, _c0))("imageUrl", ctx_r1.imageService.getChapterCoverImage(ctx_r1.chapter.id));
  }
}
function ChapterCardComponent_ng_container_0_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-image", 2);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("styles", \u0275\u0275pureFunction0(2, _c0))("imageUrl", ctx_r1.imageService.errorImage);
  }
}
function ChapterCardComponent_ng_container_0_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 4);
    \u0275\u0275pipe(1, "number");
    \u0275\u0275element(2, "ngb-progressbar", 21);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275propertyInterpolate1("ngbTooltip", "", \u0275\u0275pipeBind2(1, 4, ctx_r1.chapter.pagesRead / ctx_r1.chapter.pages * 100, "1.0-1"), "% Read");
    \u0275\u0275advance(2);
    \u0275\u0275property("value", ctx_r1.chapter.pagesRead)("max", ctx_r1.chapter.pages);
  }
}
function ChapterCardComponent_ng_container_0_Conditional_9_Template(rf, ctx) {
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
function ChapterCardComponent_ng_container_0_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8);
    \u0275\u0275element(1, "div", 22);
    \u0275\u0275elementEnd();
  }
}
function ChapterCardComponent_ng_container_0_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 23);
    \u0275\u0275listener("click", function ChapterCardComponent_ng_container_0_Conditional_11_Template_div_click_0_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.handleSelection($event));
    });
    \u0275\u0275element(1, "input", 24);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classMapInterpolate1("bulk-mode ", ctx_r1.bulkSelectionService.hasSelections() ? "always-show" : "", "");
    \u0275\u0275advance();
    \u0275\u0275property("ngModel", ctx_r1.selected)("ngModelOptions", \u0275\u0275pureFunction0(6, _c1));
    \u0275\u0275attribute("aria-labelledby", ctx_r1.chapter.id);
  }
}
function ChapterCardComponent_ng_container_0_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10)(1, "span", 25);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.chapter.files.length);
  }
}
function ChapterCardComponent_ng_container_0_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 12)(1, "div", 26)(2, "span", 27);
    \u0275\u0275listener("click", function ChapterCardComponent_ng_container_0_Conditional_14_Template_span_click_2_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.read($event));
    });
    \u0275\u0275elementStart(3, "div");
    \u0275\u0275element(4, "i", 28);
    \u0275\u0275elementEnd()()()();
  }
}
function ChapterCardComponent_ng_container_0_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13)(1, "div", 29);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngbTooltip", ctx_r1.chapter.title.length > 34 ? ctx_r1.chapter.title : null);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.chapter.title || ctx_r1.chapter.range, " ");
  }
}
function ChapterCardComponent_ng_container_0_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13)(1, "div", 29);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngbTooltip", ctx_r1.chapter.titleName.length > 34 ? ctx_r1.chapter.titleName : null);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.chapter.titleName, " ");
  }
}
function ChapterCardComponent_ng_container_0_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.chapter.title || ctx_r1.chapter.range, " ");
  }
}
function ChapterCardComponent_ng_container_0_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-entity-title", 18);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("entity", ctx_r1.chapter)("prioritizeTitleName", false)("libraryType", ctx_r1.libraryType);
  }
}
function ChapterCardComponent_ng_container_0_Conditional_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-card-actionables", 30);
    \u0275\u0275listener("actionHandler", function ChapterCardComponent_ng_container_0_Conditional_24_Template_app_card_actionables_actionHandler_0_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.performAction($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("actions", ctx_r1.actions)("labelBy", ctx_r1.chapter.titleName);
  }
}
function ChapterCardComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div")(2, "div", 1);
    \u0275\u0275listener("click", function ChapterCardComponent_ng_container_0_Template_div_click_2_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.handleClick($event));
    });
    \u0275\u0275template(3, ChapterCardComponent_ng_container_0_Conditional_3_Template, 1, 3, "app-image", 2)(4, ChapterCardComponent_ng_container_0_Conditional_4_Template, 1, 3, "app-image", 2);
    \u0275\u0275elementStart(5, "div", 3);
    \u0275\u0275template(6, ChapterCardComponent_ng_container_0_Conditional_6_Template, 3, 7, "p", 4);
    \u0275\u0275elementStart(7, "span", 5);
    \u0275\u0275element(8, "app-download-indicator", 6);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(9, ChapterCardComponent_ng_container_0_Conditional_9_Template, 2, 1, "div", 7)(10, ChapterCardComponent_ng_container_0_Conditional_10_Template, 2, 0, "div", 8)(11, ChapterCardComponent_ng_container_0_Conditional_11_Template, 2, 7, "div", 9)(12, ChapterCardComponent_ng_container_0_Conditional_12_Template, 3, 1, "div", 10);
    \u0275\u0275element(13, "div", 11);
    \u0275\u0275template(14, ChapterCardComponent_ng_container_0_Conditional_14_Template, 5, 0, "div", 12);
    \u0275\u0275elementEnd();
    \u0275\u0275template(15, ChapterCardComponent_ng_container_0_Conditional_15_Template, 3, 2, "div", 13)(16, ChapterCardComponent_ng_container_0_Conditional_16_Template, 3, 2, "div", 13);
    \u0275\u0275elementStart(17, "div", 14);
    \u0275\u0275element(18, "span", 15);
    \u0275\u0275elementStart(19, "span", 16)(20, "a", 17);
    \u0275\u0275template(21, ChapterCardComponent_ng_container_0_Conditional_21_Template, 1, 1)(22, ChapterCardComponent_ng_container_0_Conditional_22_Template, 1, 3, "app-entity-title", 18);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "span", 19);
    \u0275\u0275template(24, ChapterCardComponent_ng_container_0_Conditional_24_Template, 1, 2, "app-card-actionables", 20);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275classMapInterpolate1("card-item-container card position-relative ", ctx_r1.selected ? "selected-highlight" : "", "");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.chapter.pages > 0 || ctx_r1.suppressArchiveWarning ? 3 : ctx_r1.chapter.pages === 0 && !ctx_r1.suppressArchiveWarning ? 4 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r1.chapter.pagesRead > 0 && ctx_r1.chapter.pagesRead < ctx_r1.chapter.pages && ctx_r1.chapter.pages > 0 && ctx_r1.chapter.pagesRead !== ctx_r1.chapter.pages ? 6 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275property("download$", ctx_r1.download$);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.chapter.pages === 0 && !ctx_r1.suppressArchiveWarning ? 9 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.chapter.pagesRead === 0 && ctx_r1.chapter.pages > 0 ? 10 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.allowSelection ? 11 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.chapter.files.length > 1 && ctx_r1.chapter.files[0].format !== ctx_r1.MangaFormat.IMAGE ? 12 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(!ctx_r1.bulkSelectionService.hasSelections() ? 14 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.chapter.isSpecial ? 15 : ctx_r1.chapter.titleName ? 16 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275propertyInterpolate("id", ctx_r1.chapter.id);
    \u0275\u0275property("ngbTooltip", ctx_r1.chapter.isSpecial ? ctx_r1.chapter.title || ctx_r1.chapter.range : null);
    \u0275\u0275advance();
    \u0275\u0275propertyInterpolate3("routerLink", "/library/", ctx_r1.libraryId, "/series/", ctx_r1.seriesId, "/chapter/", ctx_r1.chapter.id, "");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.chapter.isSpecial ? 21 : 22);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r1.actions && ctx_r1.actions.length > 0 ? 24 : -1);
  }
}
var ChapterCardComponent = class _ChapterCardComponent {
  constructor() {
    this.destroyRef = inject(DestroyRef);
    this.imageService = inject(ImageService);
    this.bulkSelectionService = inject(BulkSelectionService);
    this.downloadService = inject(DownloadService);
    this.actionService = inject(ActionService);
    this.messageHub = inject(MessageHubService);
    this.accountService = inject(AccountService);
    this.scrollService = inject(ScrollService);
    this.cdRef = inject(ChangeDetectorRef);
    this.actionFactoryService = inject(ActionFactoryService);
    this.router = inject(Router);
    this.readerService = inject(ReaderService);
    this.libraryId = 0;
    this.seriesId = 0;
    this.actions = [];
    this.selected = false;
    this.allowSelection = false;
    this.suppressArchiveWarning = false;
    this.selection = new EventEmitter();
    this.download$ = null;
    this.prevTouchTime = 0;
    this.prevOffset = 0;
    this.selectionInProgress = false;
    this.LibraryType = LibraryType;
    this.MangaFormat = MangaFormat;
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
    this.filterSendTo();
    this.accountService.currentUser$.pipe(takeUntilDestroyed(this.destroyRef)).subscribe((user) => {
      this.user = user;
    });
    this.download$ = this.downloadService.activeDownloads$.pipe(takeUntilDestroyed(this.destroyRef), map((events) => {
      return this.downloadService.mapToEntityType(events, this.chapter);
    }));
    this.messageHub.messages$.pipe(filter((event) => event.event === EVENTS.UserProgressUpdate), map((evt) => evt.payload), takeUntilDestroyed(this.destroyRef)).subscribe((updateEvent) => {
      if (this.user === void 0 || this.user.username !== updateEvent.username)
        return;
      if (updateEvent.chapterId !== this.chapter.id)
        return;
      this.chapter.pagesRead = updateEvent.pagesRead;
      this.cdRef.detectChanges();
    });
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
    this.actions = this.actionFactoryService.filterSendToAction(this.actions, this.chapter);
  }
  performAction(action) {
    if (action.action == Action.Download) {
      this.downloadService.download("chapter", this.chapter);
      return;
    }
    if (action.action == Action.SendTo) {
      const device = action._extra.data;
      this.actionService.sendToDevice([this.chapter.id], device);
      return;
    }
    if (typeof action.callback === "function") {
      action.callback(action, this.chapter);
    }
  }
  handleClick(event) {
    if (this.bulkSelectionService.hasSelections()) {
      this.handleSelection(event);
      return;
    }
    this.router.navigate(["library", this.libraryId, "series", this.seriesId, "chapter", this.chapter.id]);
  }
  read(event) {
    event.stopPropagation();
    this.readerService.readChapter(this.libraryId, this.seriesId, this.chapter, false);
  }
  static {
    this.\u0275fac = function ChapterCardComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ChapterCardComponent)();
    };
  }
  static {
    this.\u0275cmp = \u0275\u0275defineComponent({ type: _ChapterCardComponent, selectors: [["app-chapter-card"]], hostBindings: function ChapterCardComponent_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("touchmove", function ChapterCardComponent_touchmove_HostBindingHandler($event) {
          return ctx.onTouchMove($event);
        })("touchstart", function ChapterCardComponent_touchstart_HostBindingHandler($event) {
          return ctx.onTouchStart($event);
        })("touchend", function ChapterCardComponent_touchend_HostBindingHandler($event) {
          return ctx.onTouchEnd($event);
        });
      }
    }, inputs: { libraryId: "libraryId", seriesId: "seriesId", chapter: "chapter", libraryType: "libraryType", actions: "actions", selected: "selected", allowSelection: "allowSelection", suppressArchiveWarning: "suppressArchiveWarning" }, outputs: { selection: "selection" }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 1, vars: 1, consts: [[4, "transloco", "translocoRead"], [1, "overlay", 3, "click"], ["height", "232.91px", "width", "160px", 3, "styles", "imageUrl"], [1, "progress-banner"], ["container", "body", 3, "ngbTooltip"], [1, "download"], [3, "download$"], [1, "error-banner"], [1, "badge-container"], [3, "class"], [1, "count"], [1, "card-overlay"], [1, "chapter", "overlay-information"], [1, "card-body", "meta-title", 3, "ngbTooltip"], [1, "card-title-container"], [1, "card-format"], ["tabindex", "0", 1, "card-title", 3, "id", "ngbTooltip"], [1, "dark-exempt", "btn-icon", 3, "routerLink"], [3, "entity", "prioritizeTitleName", "libraryType"], [1, "card-actions"], [3, "actions", "labelBy"], ["type", "primary", "height", "5px", 3, "value", "max"], [1, "not-read-badge"], [3, "click"], ["type", "checkbox", 1, "form-check-input", 3, "ngModel", "ngModelOptions"], [1, "badge", "bg-primary"], [1, "overlay-information--centered"], [1, "card-title", "library", "mx-auto", 2, "width", "auto", 3, "click"], ["aria-hidden", "true", 1, "fa-solid", "fa-book"], [1, "card-content", "d-flex", "justify-content-center", "align-items-center", "text-center", 2, "width", "100%", "min-height", "58px"], [3, "actionHandler", "actions", "labelBy"]], template: function ChapterCardComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, ChapterCardComponent_ng_container_0_Template, 25, 20, "ng-container", 0);
      }
      if (rf & 2) {
        \u0275\u0275property("translocoRead", "card-item");
      }
    }, dependencies: [
      NgbTooltip,
      NgbProgressbar,
      DecimalPipe,
      ImageComponent,
      DownloadIndicatorComponent,
      FormsModule,
      CheckboxControlValueAccessor,
      NgControlStatus,
      NgModel,
      EntityTitleComponent,
      CardActionablesComponent,
      RouterLink,
      TranslocoDirective
    ], styles: ["\n\n.error-banner[_ngcontent-%COMP%] {\n  width: 160px;\n  height: 18px;\n  background-color: var(--toast-error-bg-color);\n  font-size: 12px;\n  color: white;\n  text-transform: uppercase;\n  text-align: center;\n  position: absolute;\n  top: 0px;\n  right: 0px;\n}\n.selected-highlight[_ngcontent-%COMP%] {\n  outline: 2px solid var(--primary-color);\n}\n.progress-banner[_ngcontent-%COMP%] {\n  width: 160px;\n  height: 5px;\n}\n.progress-banner[_ngcontent-%COMP%]   .progress[_ngcontent-%COMP%] {\n  color: var(--card-progress-bar-color);\n  background-color: transparent;\n}\n.download[_ngcontent-%COMP%] {\n  width: 80px;\n  height: 80px;\n  position: absolute;\n  top: 25%;\n  right: 30%;\n}\n.badge-container[_ngcontent-%COMP%] {\n  border-radius: 4px;\n  display: block;\n  height: 232.91px;\n  left: 0;\n  overflow: hidden;\n  pointer-events: none;\n  position: absolute;\n  top: 0;\n  width: 160px;\n}\n.not-read-badge[_ngcontent-%COMP%] {\n  position: absolute;\n  top: calc(-1 * var(--card-progress-triangle-size) / 2);\n  right: -14px;\n  z-index: 1000;\n  height: var(--card-progress-triangle-size);\n  width: var(--card-progress-triangle-size);\n  background-color: var(--primary-color);\n  transform: rotate(45deg);\n}\n.bulk-mode[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 5px;\n  left: 5px;\n  visibility: hidden;\n}\n.bulk-mode.always-show[_ngcontent-%COMP%] {\n  visibility: visible !important;\n  width: 160px;\n  height: 232.91px;\n}\n.bulk-mode[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%] {\n  width: 20px;\n  height: 20px;\n  color: var(--checkbox-bg-color);\n}\n.meta-title[_ngcontent-%COMP%] {\n  display: none;\n  visibility: hidden;\n  pointer-events: none;\n  border-width: 0;\n}\n.overlay[_ngcontent-%COMP%]:hover   .bulk-mode[_ngcontent-%COMP%] {\n  visibility: visible;\n  z-index: 110;\n}\n.overlay[_ngcontent-%COMP%]:hover:hover {\n  visibility: visible;\n}\n.overlay[_ngcontent-%COMP%]:hover:hover   .overlay-information[_ngcontent-%COMP%] {\n  visibility: visible;\n  display: block;\n}\n.overlay[_ngcontent-%COMP%]:hover:hover    + .meta-title[_ngcontent-%COMP%] {\n  display: -webkit-box;\n  visibility: visible;\n  pointer-events: none;\n}\n.overlay[_ngcontent-%COMP%]:hover   .overlay-information[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 232.91px;\n  transition: all 0.2s;\n  border-top-left-radius: 4px;\n  border-top-right-radius: 4px;\n}\n.overlay[_ngcontent-%COMP%]:hover   .overlay-information[_ngcontent-%COMP%]:hover {\n  background-color: var(--card-overlay-hover-bg-color);\n  cursor: pointer;\n}\n.overlay[_ngcontent-%COMP%]:hover   .overlay-information[_ngcontent-%COMP%]   .overlay-information--centered[_ngcontent-%COMP%] {\n  position: absolute;\n  background-color: rgba(0, 0, 0, 0.7);\n  border-radius: 50px;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  z-index: 115;\n}\n.overlay[_ngcontent-%COMP%]:hover   .overlay-information[_ngcontent-%COMP%]   .overlay-information--centered[_ngcontent-%COMP%]:hover {\n  background-color: var(--primary-color) !important;\n  cursor: pointer;\n}\n.overlay[_ngcontent-%COMP%]   .count[_ngcontent-%COMP%] {\n  top: 5px;\n  right: 10px;\n  position: absolute;\n}\n.card-actions[_ngcontent-%COMP%] {\n  z-index: 115;\n}\n.library[_ngcontent-%COMP%] {\n  font-size: 13px;\n  text-decoration: none;\n  margin-top: 0px;\n}\n.card-title-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 0 5px;\n}\n.card-title-container[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:first-child {\n  min-width: 22px;\n}\n.card-title-container[_ngcontent-%COMP%]   .card-title[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  margin: 0;\n  text-align: center;\n  max-width: 90px;\n}\n.card-title-container[_ngcontent-%COMP%]   .card-title[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.card-actions[_ngcontent-%COMP%] {\n  min-width: 15.82px;\n}\n.card-format[_ngcontent-%COMP%] {\n  min-width: 22px;\n}\n  app-card-actionables .dropdown .dropdown-toggle {\n  padding: 0 5px;\n}\n.meta-title[_ngcontent-%COMP%]   .card-title[_ngcontent-%COMP%] {\n  max-width: unset;\n}\n.card-title[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  margin: 0;\n  padding: 10px 0;\n  text-align: center;\n  max-width: 120px;\n}\n.card-title[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.card-body[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:nth-child(2) {\n  height: 40px;\n  overflow: hidden;\n  -webkit-line-clamp: 2;\n  display: -webkit-box;\n  overflow: hidden;\n  -webkit-box-orient: vertical;\n  font-size: 0.8rem;\n}\n.overlay-information[_ngcontent-%COMP%] {\n  visibility: hidden;\n  display: none;\n}\n.overlay-information[_ngcontent-%COMP%]   .card-title[_ngcontent-%COMP%] {\n  padding: 10px;\n}\n.chapter[_ngcontent-%COMP%]   .overlay-information--centered[_ngcontent-%COMP%]   div[_ngcontent-%COMP%], \n.volume[_ngcontent-%COMP%]   .overlay-information--centered[_ngcontent-%COMP%]   div[_ngcontent-%COMP%], \n.series[_ngcontent-%COMP%]   .overlay-information--centered[_ngcontent-%COMP%]   div[_ngcontent-%COMP%], \n.expected[_ngcontent-%COMP%]   .overlay-information--centered[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  height: 32px;\n  width: 32px;\n}\n.chapter[_ngcontent-%COMP%]   .overlay-information--centered[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   i[_ngcontent-%COMP%], \n.volume[_ngcontent-%COMP%]   .overlay-information--centered[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   i[_ngcontent-%COMP%], \n.series[_ngcontent-%COMP%]   .overlay-information--centered[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   i[_ngcontent-%COMP%], \n.expected[_ngcontent-%COMP%]   .overlay-information--centered[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 1.4rem;\n  line-height: 32px;\n}\n/*# sourceMappingURL=chapter-card.component.css.map */"], changeDetection: 0 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ChapterCardComponent, { className: "ChapterCardComponent", filePath: "src/app/cards/chapter-card/chapter-card.component.ts", lineNumber: 59 });
})();

export {
  ChapterCardComponent
};
//# sourceMappingURL=chunk-75L7KIP6.js.map
