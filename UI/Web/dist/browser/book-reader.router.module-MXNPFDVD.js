import {
  PAGING_DIRECTION
} from "./chunk-TYLQK2UY.js";
import {
  DrawerComponent
} from "./chunk-3CC6XT7E.js";
import {
  ReaderSettingsComponent
} from "./chunk-GYRVME4Z.js";
import {
  BookService
} from "./chunk-UATES4PD.js";
import {
  BookPageLayoutMode,
  ReadingDirection,
  WritingStyle
} from "./chunk-HLXD4ERA.js";
import {
  NavService
} from "./chunk-CUVDZVWA.js";
import {
  ScrollService
} from "./chunk-7GKAFCLA.js";
import {
  SeriesService
} from "./chunk-HG4LWHDT.js";
import {
  CHAPTER_ID_DOESNT_EXIST,
  CHAPTER_ID_NOT_FETCHED,
  ReaderService
} from "./chunk-D2FQ65JS.js";
import {
  Stack
} from "./chunk-JGJJUNHA.js";
import {
  MemberService
} from "./chunk-XZ5MKEYT.js";
import {
  LibraryService
} from "./chunk-PBM62GK4.js";
import "./chunk-TPURWX2Y.js";
import "./chunk-BX5PUGWH.js";
import {
  KEY_CODES,
  LibraryType,
  UtilityService
} from "./chunk-A6JEQ5GB.js";
import {
  MangaFormat
} from "./chunk-RSMGJKYW.js";
import {
  AccountService,
  ActivatedRoute,
  Router,
  ThemeService
} from "./chunk-U2DWQJI2.js";
import {
  NgbNav,
  NgbNavContent,
  NgbNavItem,
  NgbNavItemRole,
  NgbNavLink,
  NgbNavOutlet,
  NgbProgressbar,
  NgbTooltip
} from "./chunk-2R2RCU4Y.js";
import {
  ToastrService,
  animate,
  state,
  style,
  transition,
  trigger
} from "./chunk-5J5IKBMT.js";
import "./chunk-PUXELTB2.js";
import {
  DomSanitizer
} from "./chunk-FLGYJHAG.js";
import {
  DefaultValueAccessor,
  FormControl,
  FormControlName,
  FormGroup,
  FormGroupDirective,
  NgControlStatus,
  NgControlStatusGroup,
  ReactiveFormsModule,
  Validators,
  ɵNgNoValidate
} from "./chunk-BPOUBDX2.js";
import "./chunk-CQADFT7F.js";
import {
  ChangeDetectorRef,
  CommonModule,
  DOCUMENT,
  DestroyRef,
  ElementRef,
  EventEmitter,
  NgClass,
  NgForOf,
  NgIf,
  NgStyle,
  NgSwitch,
  NgSwitchCase,
  NgTemplateOutlet,
  Renderer2,
  RendererStyleFlags2,
  TranslocoDirective,
  __async,
  catchError,
  debounceTime,
  distinctUntilChanged,
  forkJoin,
  fromEvent,
  inject,
  merge,
  of,
  take,
  takeUntilDestroyed,
  tap,
  translate,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMap,
  ɵɵclassMapInterpolate1,
  ɵɵclassMapInterpolate2,
  ɵɵclassMapInterpolate3,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
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
  ɵɵproperty,
  ɵɵpropertyInterpolate1,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵpureFunction4,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵresolveWindow,
  ɵɵrestoreView,
  ɵɵsanitizeHtml,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty,
  ɵɵviewQuery
} from "./chunk-PYHIUVNJ.js";

// src/app/book-reader/_components/table-of-contents/table-of-contents.component.ts
function TableOfContentsComponent_ng_container_0_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "em");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const t_r1 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r1("no-data"));
  }
}
function TableOfContentsComponent_ng_container_0_div_3_li_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li")(1, "a", 6);
    \u0275\u0275listener("click", function TableOfContentsComponent_ng_container_0_div_3_li_2_Template_a_click_1_listener() {
      const chapter_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r3.loadChapterPage(chapter_r3.page, chapter_r3.part));
    });
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const chapter_r3 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(chapter_r3.title);
  }
}
function TableOfContentsComponent_ng_container_0_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "ul");
    \u0275\u0275template(2, TableOfContentsComponent_ng_container_0_div_3_li_2_Template, 3, 1, "li", 5);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r3.chapters[0].children);
  }
}
function TableOfContentsComponent_ng_container_0_ng_template_4_ul_0_ul_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ul")(1, "li")(2, "a", 6);
    \u0275\u0275listener("click", function TableOfContentsComponent_ng_container_0_ng_template_4_ul_0_ul_3_Template_a_click_2_listener() {
      const chapter_r8 = \u0275\u0275restoreView(_r7).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r3.loadChapterPage(chapter_r8.page, chapter_r8.part));
    });
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const chapter_r8 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275classMap(ctx_r3.cleanIdSelector(chapter_r8.part) === ctx_r3.currentPageAnchor ? "active" : "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(chapter_r8.title);
  }
}
function TableOfContentsComponent_ng_container_0_ng_template_4_ul_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ul", 8)(1, "li", 9);
    \u0275\u0275listener("click", function TableOfContentsComponent_ng_container_0_ng_template_4_ul_0_Template_li_click_1_listener() {
      const chapterGroup_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r3.loadChapterPage(chapterGroup_r6.page, ""));
    });
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, TableOfContentsComponent_ng_container_0_ng_template_4_ul_0_ul_3_Template, 4, 4, "ul", 5);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const chapterGroup_r6 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275classMap(chapterGroup_r6.page === ctx_r3.pageNum ? "active" : "");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", chapterGroup_r6.title, " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", chapterGroup_r6.children);
  }
}
function TableOfContentsComponent_ng_container_0_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, TableOfContentsComponent_ng_container_0_ng_template_4_ul_0_Template, 4, 5, "ul", 7);
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngForOf", ctx_r3.chapters);
  }
}
function TableOfContentsComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 2);
    \u0275\u0275template(2, TableOfContentsComponent_ng_container_0_div_2_Template, 3, 1, "div", 3)(3, TableOfContentsComponent_ng_container_0_div_3_Template, 3, 1, "div", 4)(4, TableOfContentsComponent_ng_container_0_ng_template_4_Template, 1, 1, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const nestedChildren_r9 = \u0275\u0275reference(5);
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r3.chapters.length === 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r3.chapters.length === 1)("ngIfElse", nestedChildren_r9);
  }
}
var TableOfContentsComponent = class _TableOfContentsComponent {
  constructor() {
    this.chapters = [];
    this.loadChapter = new EventEmitter();
  }
  cleanIdSelector(id) {
    const tokens = id.split("/");
    if (tokens.length > 0) {
      return tokens[0];
    }
    return id;
  }
  loadChapterPage(pageNum, part) {
    this.loadChapter.emit({ pageNum, part });
  }
  static {
    this.\u0275fac = function TableOfContentsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TableOfContentsComponent)();
    };
  }
  static {
    this.\u0275cmp = \u0275\u0275defineComponent({ type: _TableOfContentsComponent, selectors: [["app-table-of-contents"]], inputs: { chapterId: "chapterId", pageNum: "pageNum", currentPageAnchor: "currentPageAnchor", chapters: "chapters" }, outputs: { loadChapter: "loadChapter" }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 1, vars: 1, consts: [["nestedChildren", ""], [4, "transloco", "translocoRead"], [1, "table-of-contents"], [4, "ngIf"], [4, "ngIf", "ngIfElse"], [4, "ngFor", "ngForOf"], ["href", "javascript:void(0);", 3, "click"], ["class", "chapter-title", 4, "ngFor", "ngForOf"], [1, "chapter-title"], [3, "click"]], template: function TableOfContentsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, TableOfContentsComponent_ng_container_0_Template, 6, 3, "ng-container", 1);
      }
      if (rf & 2) {
        \u0275\u0275property("translocoRead", "table-of-contents");
      }
    }, dependencies: [NgIf, NgForOf, TranslocoDirective], styles: ["\n\n.table-of-contents[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.table-of-contents[_ngcontent-%COMP%]   li.active[_ngcontent-%COMP%] {\n  font-weight: bold;\n}\n.chapter-title[_ngcontent-%COMP%] {\n  padding-inline-start: 1rem;\n}\n/*# sourceMappingURL=table-of-contents.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TableOfContentsComponent, { className: "TableOfContentsComponent", filePath: "src/app/book-reader/_components/table-of-contents/table-of-contents.component.ts", lineNumber: 14 });
})();

// src/app/book-reader/_components/book-line-overlay/book-line-overlay.component.ts
function BookLineOverlayComponent_ng_container_0_div_1_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 6)(2, "button", 7);
    \u0275\u0275listener("click", function BookLineOverlayComponent_ng_container_0_div_1_ng_container_3_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.copy());
    });
    \u0275\u0275element(3, "i", 8);
    \u0275\u0275elementStart(4, "div");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(6, "div", 6)(7, "button", 7);
    \u0275\u0275listener("click", function BookLineOverlayComponent_ng_container_0_div_1_ng_container_3_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.switchMode(ctx_r1.BookLineOverlayMode.Bookmark));
    });
    \u0275\u0275element(8, "i", 9);
    \u0275\u0275elementStart(9, "div");
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(11, "div", 6)(12, "button", 7);
    \u0275\u0275listener("click", function BookLineOverlayComponent_ng_container_0_div_1_ng_container_3_Template_button_click_12_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.reset());
    });
    \u0275\u0275element(13, "i", 10);
    \u0275\u0275elementStart(14, "div");
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const t_r3 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(t_r3("copy"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(t_r3("bookmark"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(t_r3("close"));
  }
}
function BookLineOverlayComponent_ng_container_0_div_1_ng_container_4_div_6_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 18);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r3 = \u0275\u0275nextContext(4).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", t_r3("required-field"), " ");
  }
}
function BookLineOverlayComponent_ng_container_0_div_1_ng_container_4_div_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16);
    \u0275\u0275template(1, BookLineOverlayComponent_ng_container_0_div_1_ng_container_4_div_6_div_1_Template, 2, 1, "div", 17);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_5_0;
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (tmp_5_0 = ctx_r1.bookmarkForm.get("name")) == null ? null : tmp_5_0.errors == null ? null : tmp_5_0.errors.required);
  }
}
function BookLineOverlayComponent_ng_container_0_div_1_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "form", 11)(2, "div", 12);
    \u0275\u0275element(3, "input", 13);
    \u0275\u0275elementStart(4, "button", 14);
    \u0275\u0275listener("click", function BookLineOverlayComponent_ng_container_0_div_1_ng_container_4_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.createPTOC());
    });
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275template(6, BookLineOverlayComponent_ng_container_0_div_1_ng_container_4_div_6_Template, 2, 1, "div", 15);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    let tmp_5_0;
    const t_r3 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("formGroup", ctx_r1.bookmarkForm);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("is-invalid", ((tmp_5_0 = ctx_r1.bookmarkForm.get("name")) == null ? null : tmp_5_0.invalid) && ((tmp_5_0 = ctx_r1.bookmarkForm.get("name")) == null ? null : tmp_5_0.touched));
    \u0275\u0275property("placeholder", t_r3("book-label"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r3("save"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.bookmarkForm.dirty || ctx_r1.bookmarkForm.touched);
  }
}
function BookLineOverlayComponent_ng_container_0_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2)(1, "div", 3);
    \u0275\u0275elementContainerStart(2, 4);
    \u0275\u0275template(3, BookLineOverlayComponent_ng_container_0_div_1_ng_container_3_Template, 16, 3, "ng-container", 5)(4, BookLineOverlayComponent_ng_container_0_div_1_ng_container_4_Template, 7, 6, "ng-container", 5);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngSwitch", ctx_r1.mode);
    \u0275\u0275advance();
    \u0275\u0275property("ngSwitchCase", ctx_r1.BookLineOverlayMode.None);
    \u0275\u0275advance();
    \u0275\u0275property("ngSwitchCase", ctx_r1.BookLineOverlayMode.Bookmark);
  }
}
function BookLineOverlayComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, BookLineOverlayComponent_ng_container_0_div_1_Template, 5, 3, "div", 1);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.selectedText.length > 0 || ctx_r1.mode !== ctx_r1.BookLineOverlayMode.None);
  }
}
var BookLineOverlayMode;
(function(BookLineOverlayMode2) {
  BookLineOverlayMode2[BookLineOverlayMode2["None"] = 0] = "None";
  BookLineOverlayMode2[BookLineOverlayMode2["Bookmark"] = 1] = "Bookmark";
})(BookLineOverlayMode || (BookLineOverlayMode = {}));
var BookLineOverlayComponent = class _BookLineOverlayComponent {
  get BookLineOverlayMode() {
    return BookLineOverlayMode;
  }
  constructor(elementRef, toastr) {
    this.elementRef = elementRef;
    this.toastr = toastr;
    this.pageNumber = 0;
    this.refreshToC = new EventEmitter();
    this.isOpen = new EventEmitter(false);
    this.xPath = "";
    this.selectedText = "";
    this.mode = BookLineOverlayMode.None;
    this.bookmarkForm = new FormGroup({
      name: new FormControl("", [Validators.required])
    });
    this.destroyRef = inject(DestroyRef);
    this.cdRef = inject(ChangeDetectorRef);
    this.readerService = inject(ReaderService);
  }
  handleKeyPress(event) {
    if (event.key === KEY_CODES.ESC_KEY) {
      this.reset();
      this.cdRef.markForCheck();
      event.stopPropagation();
      event.preventDefault();
      return;
    }
  }
  ngOnInit() {
    if (this.parent) {
      const mouseUp$ = fromEvent(this.parent.nativeElement, "mouseup");
      const touchEnd$ = fromEvent(this.parent.nativeElement, "touchend");
      merge(mouseUp$, touchEnd$).pipe(takeUntilDestroyed(this.destroyRef)).subscribe((event) => {
        this.handleEvent(event);
      });
    }
  }
  handleEvent(event) {
    const selection = window.getSelection();
    if (!event.target)
      return;
    if (selection === null || selection === void 0 || selection.toString().trim() === "" || selection.toString().trim() === this.selectedText) {
      if (this.selectedText !== "") {
        event.preventDefault();
        event.stopPropagation();
      }
      const isRightClick = event instanceof MouseEvent && event.button === 2;
      if (!isRightClick) {
        this.reset();
      }
      return;
    }
    this.selectedText = selection ? selection.toString().trim() : "";
    if (this.selectedText.length > 0 && this.mode === BookLineOverlayMode.None) {
      this.xPath = this.readerService.getXPathTo(event.target);
      if (this.xPath !== "") {
        this.xPath = "//" + this.xPath;
      }
      this.isOpen.emit(true);
      event.preventDefault();
      event.stopPropagation();
    }
    this.cdRef.markForCheck();
  }
  switchMode(mode) {
    this.mode = mode;
    this.cdRef.markForCheck();
    if (this.mode === BookLineOverlayMode.Bookmark) {
      this.bookmarkForm.get("name")?.setValue(this.selectedText);
      this.focusOnBookmarkInput();
    }
  }
  createPTOC() {
    this.readerService.createPersonalToC(this.libraryId, this.seriesId, this.volumeId, this.chapterId, this.pageNumber, this.bookmarkForm.get("name")?.value, this.xPath).pipe(catchError((err) => {
      this.focusOnBookmarkInput();
      return of();
    })).subscribe(() => {
      this.reset();
      this.refreshToC.emit();
      this.cdRef.markForCheck();
    });
  }
  focusOnBookmarkInput() {
    if (this.mode !== BookLineOverlayMode.Bookmark)
      return;
    setTimeout(() => this.elementRef.nativeElement.querySelector("#bookmark-name")?.focus(), 10);
  }
  reset() {
    this.bookmarkForm.reset();
    this.mode = BookLineOverlayMode.None;
    this.xPath = "";
    this.selectedText = "";
    const selection = window.getSelection();
    if (selection) {
      selection.removeAllRanges();
    }
    this.isOpen.emit(false);
    this.cdRef.markForCheck();
  }
  copy() {
    return __async(this, null, function* () {
      const selection = window.getSelection();
      if (selection) {
        yield navigator.clipboard.writeText(selection.toString());
        this.toastr.info(translate("toasts.copied-to-clipboard"));
      }
      this.reset();
    });
  }
  static {
    this.\u0275fac = function BookLineOverlayComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _BookLineOverlayComponent)(\u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(ToastrService));
    };
  }
  static {
    this.\u0275cmp = \u0275\u0275defineComponent({ type: _BookLineOverlayComponent, selectors: [["app-book-line-overlay"]], hostBindings: function BookLineOverlayComponent_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("keydown", function BookLineOverlayComponent_keydown_HostBindingHandler($event) {
          return ctx.handleKeyPress($event);
        }, false, \u0275\u0275resolveWindow);
      }
    }, inputs: { libraryId: "libraryId", seriesId: "seriesId", volumeId: "volumeId", chapterId: "chapterId", pageNumber: "pageNumber", parent: "parent" }, outputs: { refreshToC: "refreshToC", isOpen: "isOpen" }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 1, vars: 1, consts: [[4, "transloco", "translocoRead"], ["class", "overlay", 4, "ngIf"], [1, "overlay"], [1, "row", "g-0", "justify-content-between"], [3, "ngSwitch"], [4, "ngSwitchCase"], [1, "col-auto"], [1, "btn", "btn-icon", "btn-sm", 3, "click"], ["aria-hidden", "true", 1, "fa-solid", "fa-copy"], ["aria-hidden", "true", 1, "fa-solid", "fa-book-bookmark"], ["aria-hidden", "true", 1, "fa-solid", "fa-times-circle"], [3, "formGroup"], [1, "input-group"], ["id", "bookmark-name", "formControlName", "name", "type", "text", "aria-describedby", "bookmark-name-btn", 1, "form-control", 3, "placeholder"], ["id", "bookmark-name-btn", 1, "btn", "btn-outline-primary", 3, "click"], ["id", "bookmark-name-validations", "class", "invalid-feedback", 4, "ngIf"], ["id", "bookmark-name-validations", 1, "invalid-feedback"], ["role", "status", 4, "ngIf"], ["role", "status"]], template: function BookLineOverlayComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, BookLineOverlayComponent_ng_container_0_Template, 2, 1, "ng-container", 0);
      }
      if (rf & 2) {
        \u0275\u0275property("translocoRead", "book-line-overlay");
      }
    }, dependencies: [CommonModule, NgIf, NgSwitch, NgSwitchCase, ReactiveFormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, TranslocoDirective], styles: ["\n\n.overlay[_ngcontent-%COMP%] {\n  background-color: var(--br-actionbar-bg-color);\n  color: var(--bs-body-bg);\n  padding: 5px;\n  border-radius: 4px;\n  z-index: 9999;\n  width: 100vw;\n}\n/*# sourceMappingURL=book-line-overlay.component.css.map */"], changeDetection: 0 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(BookLineOverlayComponent, { className: "BookLineOverlayComponent", filePath: "src/app/book-reader/_components/book-line-overlay/book-line-overlay.component.ts", lineNumber: 33 });
})();

// src/app/book-reader/_components/personal-table-of-contents/personal-table-of-contents.component.ts
var _c0 = (a0) => ({ value: a0 });
var _c1 = (a0) => ({ bookmarkName: a0 });
function PersonalTableOfContentsComponent_ng_container_0_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "em");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const t_r1 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r1("no-data"));
  }
}
function PersonalTableOfContentsComponent_ng_container_0_For_5_For_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li", 5);
    \u0275\u0275listener("click", function PersonalTableOfContentsComponent_ng_container_0_For_5_For_5_Template_li_click_0_listener($event) {
      const bookmark_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(3);
      ctx_r3.loadChapterPage(bookmark_r6.pageNumber, bookmark_r6.bookScrollId);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275text(1);
    \u0275\u0275elementStart(2, "button", 6);
    \u0275\u0275listener("click", function PersonalTableOfContentsComponent_ng_container_0_For_5_For_5_Template_button_click_2_listener($event) {
      const bookmark_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(3);
      ctx_r3.removeBookmark(bookmark_r6);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275element(3, "i", 7);
    \u0275\u0275elementStart(4, "span", 8);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const bookmark_r6 = ctx.$implicit;
    const t_r1 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275property("ngbTooltip", bookmark_r6.title);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", bookmark_r6.title, " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(t_r1("delete", \u0275\u0275pureFunction1(3, _c1, bookmark_r6.title)));
  }
}
function PersonalTableOfContentsComponent_ng_container_0_For_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li")(1, "span", 2);
    \u0275\u0275listener("click", function PersonalTableOfContentsComponent_ng_container_0_For_5_Template_span_click_1_listener() {
      const page_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.loadChapterPage(page_r3, ""));
    });
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "ul", 3);
    \u0275\u0275repeaterCreate(4, PersonalTableOfContentsComponent_ng_container_0_For_5_For_5_Template, 6, 5, "li", 4, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const page_r3 = ctx.$implicit;
    const t_r1 = \u0275\u0275nextContext().$implicit;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r1("page", \u0275\u0275pureFunction1(1, _c0, page_r3)));
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r3.bookmarks[page_r3]);
  }
}
function PersonalTableOfContentsComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 1);
    \u0275\u0275template(2, PersonalTableOfContentsComponent_ng_container_0_Conditional_2_Template, 3, 1, "div");
    \u0275\u0275elementStart(3, "ul");
    \u0275\u0275repeaterCreate(4, PersonalTableOfContentsComponent_ng_container_0_For_5_Template, 6, 3, "li", null, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r3.Pages.length === 0 ? 2 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r3.Pages);
  }
}
var PersonalTableOfContentsComponent = class _PersonalTableOfContentsComponent {
  get Pages() {
    return Object.keys(this.bookmarks).map((p) => parseInt(p, 10));
  }
  constructor(document2) {
    this.document = document2;
    this.pageNum = 0;
    this.loadChapter = new EventEmitter();
    this.readerService = inject(ReaderService);
    this.cdRef = inject(ChangeDetectorRef);
    this.destroyRef = inject(DestroyRef);
    this.bookmarks = [];
  }
  ngOnInit() {
    this.tocRefresh.pipe(takeUntilDestroyed(this.destroyRef)).subscribe(() => {
      this.load();
    });
    this.load();
  }
  load() {
    this.readerService.getPersonalToC(this.chapterId).subscribe((res) => {
      res.forEach((t) => {
        if (!this.bookmarks.hasOwnProperty(t.pageNumber)) {
          this.bookmarks[t.pageNumber] = [];
        }
        this.bookmarks[t.pageNumber].push(t);
      });
      this.cdRef.markForCheck();
    });
  }
  loadChapterPage(pageNum, scrollPart) {
    this.loadChapter.emit({ pageNum, scrollPart });
  }
  removeBookmark(bookmark) {
    this.readerService.removePersonalToc(bookmark.chapterId, bookmark.pageNumber, bookmark.title).subscribe(() => {
      this.bookmarks[bookmark.pageNumber] = this.bookmarks[bookmark.pageNumber].filter((t) => t.title != bookmark.title);
      if (this.bookmarks[bookmark.pageNumber].length === 0) {
        delete this.bookmarks[bookmark.pageNumber];
      }
      this.cdRef.markForCheck();
    });
  }
  static {
    this.\u0275fac = function PersonalTableOfContentsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _PersonalTableOfContentsComponent)(\u0275\u0275directiveInject(DOCUMENT));
    };
  }
  static {
    this.\u0275cmp = \u0275\u0275defineComponent({ type: _PersonalTableOfContentsComponent, selectors: [["app-personal-table-of-contents"]], inputs: { chapterId: "chapterId", pageNum: "pageNum", tocRefresh: "tocRefresh" }, outputs: { loadChapter: "loadChapter" }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 1, vars: 1, consts: [[4, "transloco", "translocoRead"], [1, "table-of-contents"], [3, "click"], [1, "chapter-title"], ["placement", "right", 1, "ellipsis", 3, "ngbTooltip"], ["placement", "right", 1, "ellipsis", 3, "click", "ngbTooltip"], [1, "btn", "btn-icon", "ms-1", 3, "click"], ["aria-hidden", "true", 1, "fa-solid", "fa-trash"], [1, "visually-hidden"]], template: function PersonalTableOfContentsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, PersonalTableOfContentsComponent_ng_container_0_Template, 6, 1, "ng-container", 0);
      }
      if (rf & 2) {
        \u0275\u0275property("translocoRead", "personal-table-of-contents");
      }
    }, dependencies: [NgbTooltip, TranslocoDirective], styles: ["\n\n.table-of-contents[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.table-of-contents[_ngcontent-%COMP%]   li.active[_ngcontent-%COMP%] {\n  font-weight: bold;\n}\n.chapter-title[_ngcontent-%COMP%] {\n  padding-inline-start: 1rem;\n}\n.ellipsis[_ngcontent-%COMP%] {\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n/*# sourceMappingURL=personal-table-of-contents.component.css.map */"], changeDetection: 0 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PersonalTableOfContentsComponent, { className: "PersonalTableOfContentsComponent", filePath: "src/app/book-reader/_components/personal-table-of-contents/personal-table-of-contents.component.ts", lineNumber: 31 });
})();

// src/app/book-reader/_components/book-reader/book-reader.component.ts
var _c02 = ["bookContainer"];
var _c12 = ["readingHtml"];
var _c2 = ["readingSection"];
var _c3 = ["stickyTop"];
var _c4 = ["reader"];
var _c5 = () => ({ isTop: true });
var _c6 = (a0) => ({ topOffset: a0 });
var _c7 = (a0) => ({ "width": a0 });
var _c8 = (a0) => ({ "immersive": a0 });
var _c9 = (a0) => ({ height: a0 });
var _c10 = (a0, a1, a2, a3) => ({ "max-height": a0, "max-width": a1, "width": a2, "column-width": a3 });
var _c11 = (a0) => ({ "bottom-bar": a0 });
var _c122 = () => ({ isTop: false });
function BookReaderComponent_ng_container_2_app_book_line_overlay_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-book-line-overlay", 42);
    \u0275\u0275listener("isOpen", function BookReaderComponent_ng_container_2_app_book_line_overlay_6_Template_app_book_line_overlay_isOpen_0_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.updateLineOverlayOpen($event));
    })("refreshToC", function BookReaderComponent_ng_container_2_app_book_line_overlay_6_Template_app_book_line_overlay_refreshToC_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.refreshPersonalToC());
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("parent", ctx_r1.bookContainerElemRef)("libraryId", ctx_r1.libraryId)("volumeId", ctx_r1.volumeId)("chapterId", ctx_r1.chapterId)("seriesId", ctx_r1.seriesId)("pageNumber", ctx_r1.pageNum);
  }
}
function BookReaderComponent_ng_container_2_ng_container_16_div_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 23)(1, "button", 45);
    \u0275\u0275listener("click", function BookReaderComponent_ng_container_2_ng_container_16_div_4_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.prevPage());
    });
    \u0275\u0275element(2, "i", 46);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 47);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 27)(6, "ngb-progressbar", 48);
    \u0275\u0275listener("click", function BookReaderComponent_ng_container_2_ng_container_16_div_4_Template_ngb_progressbar_click_6_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.loadPage());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 29);
    \u0275\u0275listener("click", function BookReaderComponent_ng_container_2_ng_container_16_div_4_Template_div_click_7_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.loadPage());
    });
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "button", 45);
    \u0275\u0275listener("click", function BookReaderComponent_ng_container_2_ng_container_16_div_4_Template_button_click_9_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.nextPage());
    });
    \u0275\u0275element(10, "i", 49);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const vp_r5 = ctx.ngIf;
    const t_r6 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("title", t_r6("prev-page"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(vp_r5[0]);
    \u0275\u0275advance(2);
    \u0275\u0275property("title", t_r6("virtual-pages"))("value", vp_r5[0])("max", vp_r5[1]);
    \u0275\u0275advance();
    \u0275\u0275property("title", t_r6("go-to-last-page"));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(vp_r5[1]);
    \u0275\u0275advance();
    \u0275\u0275property("title", t_r6("next-page"));
  }
}
function BookReaderComponent_ng_container_2_ng_container_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 43)(2, "div", 22);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, BookReaderComponent_ng_container_2_ng_container_16_div_4_Template, 11, 8, "div", 44);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const t_r6 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", t_r6("page-label"), " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.getVirtualPage());
  }
}
function BookReaderComponent_ng_container_2_ng_template_37_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-reader-settings", 50);
    \u0275\u0275listener("colorThemeUpdate", function BookReaderComponent_ng_container_2_ng_template_37_Template_app_reader_settings_colorThemeUpdate_0_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.updateColorTheme($event));
    })("styleUpdate", function BookReaderComponent_ng_container_2_ng_template_37_Template_app_reader_settings_styleUpdate_0_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.updateReaderStyles($event));
    })("clickToPaginateChanged", function BookReaderComponent_ng_container_2_ng_template_37_Template_app_reader_settings_clickToPaginateChanged_0_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.showPaginationOverlay($event));
    })("fullscreen", function BookReaderComponent_ng_container_2_ng_template_37_Template_app_reader_settings_fullscreen_0_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.toggleFullscreen());
    })("bookReaderWritingStyle", function BookReaderComponent_ng_container_2_ng_template_37_Template_app_reader_settings_bookReaderWritingStyle_0_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.updateWritingStyle($event));
    })("layoutModeUpdate", function BookReaderComponent_ng_container_2_ng_template_37_Template_app_reader_settings_layoutModeUpdate_0_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.updateLayoutMode($event));
    })("readingDirection", function BookReaderComponent_ng_container_2_ng_template_37_Template_app_reader_settings_readingDirection_0_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.updateReadingDirection($event));
    })("immersiveMode", function BookReaderComponent_ng_container_2_ng_template_37_Template_app_reader_settings_immersiveMode_0_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.updateImmersiveMode($event));
    });
    \u0275\u0275elementEnd();
  }
}
function BookReaderComponent_ng_container_2_ng_template_41_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-table-of-contents", 51);
    \u0275\u0275listener("loadChapter", function BookReaderComponent_ng_container_2_ng_template_41_ng_template_5_Template_app_table_of_contents_loadChapter_0_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.loadChapterPage($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("chapters", ctx_r1.chapters)("chapterId", ctx_r1.chapterId)("pageNum", ctx_r1.pageNum)("currentPageAnchor", ctx_r1.currentPageAnchor);
  }
}
function BookReaderComponent_ng_container_2_ng_template_41_ng_template_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-personal-table-of-contents", 52);
    \u0275\u0275listener("loadChapter", function BookReaderComponent_ng_container_2_ng_template_41_ng_template_9_Template_app_personal_table_of_contents_loadChapter_0_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.loadChapterPart($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("chapterId", ctx_r1.chapterId)("pageNum", ctx_r1.pageNum)("tocRefresh", ctx_r1.refreshPToC);
  }
}
function BookReaderComponent_ng_container_2_ng_template_41_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ul", 33, 7);
    \u0275\u0275twoWayListener("activeIdChange", function BookReaderComponent_ng_container_2_ng_template_41_Template_ul_activeIdChange_0_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.tocId, $event) || (ctx_r1.tocId = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(2, "li", 34)(3, "a", 35);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, BookReaderComponent_ng_container_2_ng_template_41_ng_template_5_Template, 1, 4, "ng-template", 36);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "li", 34)(7, "a", 35);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275template(9, BookReaderComponent_ng_container_2_ng_template_41_ng_template_9_Template, 1, 3, "ng-template", 36);
    \u0275\u0275elementEnd()();
    \u0275\u0275element(10, "div", 37);
  }
  if (rf & 2) {
    const subnav_r11 = \u0275\u0275reference(1);
    const t_r6 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275twoWayProperty("activeId", ctx_r1.tocId);
    \u0275\u0275property("destroyOnHide", false);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngbNavItem", ctx_r1.TabID.TableOfContents);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r6("toc-header"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngbNavItem", ctx_r1.TabID.PersonalTableOfContents);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r6("bookmarks-header"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngbNavOutlet", subnav_r11);
  }
}
function BookReaderComponent_ng_container_2_ng_container_45_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 53);
    \u0275\u0275listener("click", function BookReaderComponent_ng_container_2_ng_container_45_Template_div_click_1_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.movePage(ctx_r1.readingDirection === ctx_r1.ReadingDirection.LeftToRight ? ctx_r1.PAGING_DIRECTION.BACKWARDS : ctx_r1.PAGING_DIRECTION.FORWARD));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "div", 53);
    \u0275\u0275listener("click", function BookReaderComponent_ng_container_2_ng_container_45_Template_div_click_2_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.movePage(ctx_r1.readingDirection === ctx_r1.ReadingDirection.LeftToRight ? ctx_r1.PAGING_DIRECTION.FORWARD : ctx_r1.PAGING_DIRECTION.BACKWARDS));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275classMapInterpolate1("left ", ctx_r1.clickOverlayClass("left"), " no-observe");
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(11, _c8, ctx_r1.immersiveMode))("ngStyle", \u0275\u0275pureFunction1(13, _c9, ctx_r1.PageHeightForPagination));
    \u0275\u0275advance();
    \u0275\u0275classMapInterpolate2("", ctx_r1.scrollbarNeeded ? "right-with-scrollbar" : "right", " ", ctx_r1.clickOverlayClass("right"), " no-observe");
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(15, _c8, ctx_r1.immersiveMode))("ngStyle", \u0275\u0275pureFunction1(17, _c9, ctx_r1.PageHeightForPagination));
  }
}
function BookReaderComponent_ng_container_2_div_48_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 54, 8);
    \u0275\u0275listener("click", function BookReaderComponent_ng_container_2_div_48_Template_div_click_0_listener($event) {
      \u0275\u0275restoreView(_r13);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.toggleMenu($event));
    })("mousedown", function BookReaderComponent_ng_container_2_div_48_Template_div_mousedown_0_listener($event) {
      \u0275\u0275restoreView(_r13);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.mouseDown($event));
    })("wheel", function BookReaderComponent_ng_container_2_div_48_Template_div_wheel_0_listener($event) {
      \u0275\u0275restoreView(_r13);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onWheel($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classMapInterpolate2("book-content ", ctx_r1.ColumnLayout, " ", ctx_r1.WritingStyleClass, "");
    \u0275\u0275property("ngStyle", \u0275\u0275pureFunction4(7, _c10, ctx_r1.ColumnHeight, ctx_r1.VerticalBookContentWidth, ctx_r1.VerticalBookContentWidth, ctx_r1.ColumnWidth))("ngClass", \u0275\u0275pureFunction1(12, _c8, ctx_r1.immersiveMode && ctx_r1.actionBarVisible))("innerHtml", ctx_r1.page, \u0275\u0275sanitizeHtml);
  }
}
function BookReaderComponent_ng_container_2_div_49_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 55);
    \u0275\u0275listener("click", function BookReaderComponent_ng_container_2_div_49_Template_div_click_0_listener($event) {
      \u0275\u0275restoreView(_r14);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementContainer(1, 13);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275nextContext();
    const actionBar_r15 = \u0275\u0275reference(51);
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(3, _c11, ctx_r1.layoutMode !== ctx_r1.BookPageLayoutMode.Default));
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", actionBar_r15)("ngTemplateOutletContext", \u0275\u0275pureFunction0(5, _c122));
  }
}
function BookReaderComponent_ng_container_2_ng_template_50_div_0_button_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 66);
    \u0275\u0275listener("click", function BookReaderComponent_ng_container_2_ng_template_50_div_0_button_3_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r18);
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.goBack());
    });
    \u0275\u0275element(1, "i", 67);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r6 = \u0275\u0275nextContext(3).$implicit;
    \u0275\u0275property("title", t_r6("go-back"));
  }
}
function BookReaderComponent_ng_container_2_ng_template_50_div_0_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 64)(1, "span", 68);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const t_r6 = \u0275\u0275nextContext(3).$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r6("loading-book"));
  }
}
function BookReaderComponent_ng_container_2_ng_template_50_div_0_Conditional_8_span_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "span", 71);
    \u0275\u0275listener("click", function BookReaderComponent_ng_container_2_ng_template_50_div_0_Conditional_8_span_0_Template_span_click_0_listener() {
      \u0275\u0275restoreView(_r19);
      const ctx_r1 = \u0275\u0275nextContext(5);
      return \u0275\u0275resetView(ctx_r1.turnOffIncognito());
    });
    \u0275\u0275text(1, " (");
    \u0275\u0275element(2, "i", 72);
    \u0275\u0275elementStart(3, "span", 68);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275text(5, ")");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r6 = \u0275\u0275nextContext(4).$implicit;
    \u0275\u0275attribute("aria-label", t_r6("incognito-mode-alt"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(t_r6("incognito-mode-label"));
  }
}
function BookReaderComponent_ng_container_2_ng_template_50_div_0_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, BookReaderComponent_ng_container_2_ng_template_50_div_0_Conditional_8_span_0_Template, 6, 2, "span", 69);
    \u0275\u0275elementStart(1, "span", 70);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275property("ngIf", ctx_r1.incognitoMode);
    \u0275\u0275advance();
    \u0275\u0275property("ngbTooltip", ctx_r1.bookTitle);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.bookTitle);
  }
}
function BookReaderComponent_ng_container_2_ng_template_50_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 57)(1, "button", 58);
    \u0275\u0275listener("click", function BookReaderComponent_ng_container_2_ng_template_50_div_0_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r16);
      const isTop_r17 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(!isTop_r17 && ctx_r1.movePage(ctx_r1.readingDirection === ctx_r1.ReadingDirection.LeftToRight ? ctx_r1.PAGING_DIRECTION.BACKWARDS : ctx_r1.PAGING_DIRECTION.FORWARD));
    });
    \u0275\u0275element(2, "i", 59);
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, BookReaderComponent_ng_container_2_ng_template_50_div_0_button_3_Template, 2, 1, "button", 60);
    \u0275\u0275elementStart(4, "button", 61);
    \u0275\u0275listener("click", function BookReaderComponent_ng_container_2_ng_template_50_div_0_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r16);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.toggleDrawer());
    });
    \u0275\u0275element(5, "i", 62);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 63);
    \u0275\u0275template(7, BookReaderComponent_ng_container_2_ng_template_50_div_0_Conditional_7_Template, 3, 1, "div", 64)(8, BookReaderComponent_ng_container_2_ng_template_50_div_0_Conditional_8_Template, 3, 3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "button", 61);
    \u0275\u0275listener("click", function BookReaderComponent_ng_container_2_ng_template_50_div_0_Template_button_click_9_listener() {
      \u0275\u0275restoreView(_r16);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.closeReader());
    });
    \u0275\u0275element(10, "i", 65);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "button", 58);
    \u0275\u0275listener("click", function BookReaderComponent_ng_container_2_ng_template_50_div_0_Template_button_click_11_listener() {
      \u0275\u0275restoreView(_r16);
      const isTop_r17 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(!isTop_r17 && ctx_r1.movePage(ctx_r1.readingDirection === ctx_r1.ReadingDirection.LeftToRight ? ctx_r1.PAGING_DIRECTION.FORWARD : ctx_r1.PAGING_DIRECTION.BACKWARDS));
    });
    \u0275\u0275element(12, "i", 59);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const t_r6 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275propertyInterpolate1("title", "", ctx_r1.readingDirection === ctx_r1.ReadingDirection.LeftToRight ? t_r6("previous") : t_r6("next"), " Page");
    \u0275\u0275property("disabled", ctx_r1.readingDirection === ctx_r1.ReadingDirection.LeftToRight ? ctx_r1.IsPrevDisabled : ctx_r1.IsNextDisabled);
    \u0275\u0275advance();
    \u0275\u0275classMapInterpolate2("fa ", (ctx_r1.readingDirection === ctx_r1.ReadingDirection.LeftToRight ? ctx_r1.IsPrevChapter : ctx_r1.IsNextChapter) ? "fa-angle-double-left" : "fa-angle-left", " ", ctx_r1.readingDirection === ctx_r1.ReadingDirection.RightToLeft ? "next-page-highlight" : "", "");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.adhocPageHistory.isEmpty());
    \u0275\u0275advance(4);
    \u0275\u0275conditional(ctx_r1.isLoading ? 7 : 8);
    \u0275\u0275advance(4);
    \u0275\u0275propertyInterpolate1("title", "", ctx_r1.readingDirection === ctx_r1.ReadingDirection.LeftToRight ? t_r6("next") : t_r6("previous"), " Page");
    \u0275\u0275property("disabled", ctx_r1.readingDirection === ctx_r1.ReadingDirection.LeftToRight ? ctx_r1.IsNextDisabled : ctx_r1.IsPrevDisabled);
    \u0275\u0275advance();
    \u0275\u0275classMapInterpolate2("fa ", (ctx_r1.readingDirection === ctx_r1.ReadingDirection.LeftToRight ? ctx_r1.IsNextChapter : ctx_r1.IsPrevChapter) ? "fa-angle-double-right" : "fa-angle-right", " ", ctx_r1.readingDirection === ctx_r1.ReadingDirection.LeftToRight ? "next-page-highlight" : "", "");
  }
}
function BookReaderComponent_ng_container_2_ng_template_50_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, BookReaderComponent_ng_container_2_ng_template_50_div_0_Template, 13, 16, "div", 56);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngIf", !ctx_r1.immersiveMode || ctx_r1.drawerOpen || ctx_r1.actionBarVisible);
  }
}
function BookReaderComponent_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 11, 1)(3, "a", 12);
    \u0275\u0275listener("click", function BookReaderComponent_ng_container_2_Template_a_click_3_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.moveFocus());
    });
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainer(5, 13);
    \u0275\u0275template(6, BookReaderComponent_ng_container_2_app_book_line_overlay_6_Template, 1, 6, "app-book-line-overlay", 14);
    \u0275\u0275elementStart(7, "app-drawer", 15, 2);
    \u0275\u0275twoWayListener("isOpenChange", function BookReaderComponent_ng_container_2_Template_app_drawer_isOpenChange_7_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.drawerOpen, $event) || (ctx_r1.drawerOpen = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(9, "div", 16)(10, "h5", 17);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "span", 18);
    \u0275\u0275listener("click", function BookReaderComponent_ng_container_2_Template_span_click_12_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeReader());
    });
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "div", 19)(15, "div", 20);
    \u0275\u0275template(16, BookReaderComponent_ng_container_2_ng_container_16_Template, 5, 2, "ng-container", 21);
    \u0275\u0275elementStart(17, "div", 22);
    \u0275\u0275text(18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "div", 23)(20, "button", 24);
    \u0275\u0275listener("click", function BookReaderComponent_ng_container_2_Template_button_click_20_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.loadPrevChapter());
    });
    \u0275\u0275element(21, "i", 25);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "div", 26);
    \u0275\u0275listener("click", function BookReaderComponent_ng_container_2_Template_div_click_22_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.goToPage(0));
    });
    \u0275\u0275text(23);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "div", 27)(25, "ngb-progressbar", 28);
    \u0275\u0275listener("click", function BookReaderComponent_ng_container_2_Template_ngb_progressbar_click_25_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.goToPage());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(26, "div", 29);
    \u0275\u0275listener("click", function BookReaderComponent_ng_container_2_Template_div_click_26_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.goToPage(ctx_r1.maxPages - 1));
    });
    \u0275\u0275text(27);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "button", 24);
    \u0275\u0275listener("click", function BookReaderComponent_ng_container_2_Template_button_click_28_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.loadNextChapter());
    });
    \u0275\u0275element(29, "i", 30);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(30, "div", 31)(31, "nav", 32)(32, "ul", 33, 3);
    \u0275\u0275twoWayListener("activeIdChange", function BookReaderComponent_ng_container_2_Template_ul_activeIdChange_32_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.activeTabId, $event) || (ctx_r1.activeTabId = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(34, "li", 34)(35, "a", 35);
    \u0275\u0275text(36);
    \u0275\u0275elementEnd();
    \u0275\u0275template(37, BookReaderComponent_ng_container_2_ng_template_37_Template, 1, 0, "ng-template", 36);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "li", 34)(39, "a", 35);
    \u0275\u0275text(40);
    \u0275\u0275elementEnd();
    \u0275\u0275template(41, BookReaderComponent_ng_container_2_ng_template_41_Template, 11, 7, "ng-template", 36);
    \u0275\u0275elementEnd()()();
    \u0275\u0275element(42, "div", 37);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(43, "div", 38, 4);
    \u0275\u0275listener("click", function BookReaderComponent_ng_container_2_Template_div_click_43_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.handleReaderClick($event));
    });
    \u0275\u0275template(45, BookReaderComponent_ng_container_2_ng_container_45_Template, 3, 19, "ng-container", 21);
    \u0275\u0275elementStart(46, "div", 39, 5);
    \u0275\u0275listener("mousedown", function BookReaderComponent_ng_container_2_Template_div_mousedown_46_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.mouseDown($event));
    });
    \u0275\u0275template(48, BookReaderComponent_ng_container_2_div_48_Template, 2, 14, "div", 40)(49, BookReaderComponent_ng_container_2_div_49_Template, 2, 6, "div", 41);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(50, BookReaderComponent_ng_container_2_ng_template_50_Template, 1, 1, "ng-template", null, 6, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const t_r6 = ctx.$implicit;
    const nav_r20 = \u0275\u0275reference(33);
    const actionBar_r15 = \u0275\u0275reference(51);
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(t_r6("skip-header"));
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", actionBar_r15)("ngTemplateOutletContext", \u0275\u0275pureFunction0(41, _c5));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.page !== void 0);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("isOpen", ctx_r1.drawerOpen);
    \u0275\u0275property("options", \u0275\u0275pureFunction1(42, _c6, ctx_r1.topOffset));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(t_r6("title"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r6("close-reader"));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r1.layoutMode !== ctx_r1.BookPageLayoutMode.Default);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", t_r6("pagination-header"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r1.prevChapterDisabled)("title", t_r6("prev-chapter"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.pageNum);
    \u0275\u0275advance(2);
    \u0275\u0275property("title", t_r6("go-to-page"))("value", ctx_r1.pageNum)("max", ctx_r1.maxPages - 1);
    \u0275\u0275advance();
    \u0275\u0275property("title", t_r6("go-to-last-page"));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.maxPages - 1);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.nextChapterDisabled)("title", t_r6("next-chapter"));
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("activeId", ctx_r1.activeTabId);
    \u0275\u0275property("destroyOnHide", false);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngbNavItem", ctx_r1.TabID.Settings);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r6("settings-header"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngbNavItem", ctx_r1.TabID.TableOfContents);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r6("table-of-contents-header"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngbNavOutlet", nav_r20);
    \u0275\u0275advance();
    \u0275\u0275classMapInterpolate2("reading-section ", ctx_r1.ColumnLayout, " ", ctx_r1.WritingStyleClass, "");
    \u0275\u0275property("ngStyle", \u0275\u0275pureFunction1(44, _c7, ctx_r1.PageWidthForPagination))("ngClass", \u0275\u0275pureFunction1(46, _c8, ctx_r1.immersiveMode || !ctx_r1.actionBarVisible))("@isLoading", ctx_r1.isLoading);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.clickToPaginate && !ctx_r1.hidePagination);
    \u0275\u0275advance();
    \u0275\u0275classMapInterpolate1("book-container ", ctx_r1.WritingStyleClass, "");
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(48, _c8, ctx_r1.immersiveMode));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.page !== void 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.page !== void 0 && (ctx_r1.scrollbarNeeded || ctx_r1.layoutMode !== ctx_r1.BookPageLayoutMode.Default) && !(ctx_r1.writingStyle === ctx_r1.WritingStyle.Vertical && ctx_r1.layoutMode === ctx_r1.BookPageLayoutMode.Default));
  }
}
var TabID;
(function(TabID2) {
  TabID2[TabID2["Settings"] = 1] = "Settings";
  TabID2[TabID2["TableOfContents"] = 2] = "TableOfContents";
  TabID2[TabID2["PersonalTableOfContents"] = 3] = "PersonalTableOfContents";
})(TabID || (TabID = {}));
var TOP_OFFSET = -50 * 1.5;
var COLUMN_GAP = 20;
var pageLevelStyles = ["margin-left", "margin-right", "font-size"];
var elementLevelStyles = ["line-height", "font-family"];
var BookReaderComponent = class _BookReaderComponent {
  get IsPrevDisabled() {
    if (this.readingDirection === ReadingDirection.LeftToRight) {
      return this.isPrevPageDisabled();
    }
    return this.isNextPageDisabled();
  }
  get IsNextDisabled() {
    if (this.readingDirection === ReadingDirection.LeftToRight) {
      return this.isNextPageDisabled();
    }
    return this.isPrevPageDisabled();
  }
  isNextPageDisabled() {
    const [currentVirtualPage, totalVirtualPages, _] = this.getVirtualPage();
    const condition = (this.nextPageDisabled || this.nextChapterId === CHAPTER_ID_DOESNT_EXIST) && this.pageNum + 1 > this.maxPages - 1;
    if (this.layoutMode !== BookPageLayoutMode.Default) {
      return condition && currentVirtualPage === totalVirtualPages;
    }
    return condition;
  }
  isPrevPageDisabled() {
    const [currentVirtualPage, ,] = this.getVirtualPage();
    const condition = (this.prevPageDisabled || this.prevChapterId === CHAPTER_ID_DOESNT_EXIST) && this.pageNum === 0;
    if (this.layoutMode !== BookPageLayoutMode.Default) {
      return condition && currentVirtualPage === 0;
    }
    return condition;
  }
  get IsNextChapter() {
    if (this.layoutMode === BookPageLayoutMode.Default) {
      return this.pageNum + 1 >= this.maxPages;
    }
    const [currentVirtualPage, totalVirtualPages, _] = this.getVirtualPage();
    if (this.bookContentElemRef == null)
      return this.pageNum + 1 >= this.maxPages;
    return this.pageNum + 1 >= this.maxPages && currentVirtualPage === totalVirtualPages;
  }
  get IsPrevChapter() {
    if (this.layoutMode === BookPageLayoutMode.Default) {
      return this.pageNum === 0;
    }
    const [currentVirtualPage, ,] = this.getVirtualPage();
    if (this.bookContentElemRef == null)
      return this.pageNum + 1 >= this.maxPages;
    return this.pageNum === 0 && currentVirtualPage === 0;
  }
  get ColumnWidth() {
    const base = this.writingStyle === WritingStyle.Vertical ? this.windowHeight : this.windowWidth;
    switch (this.layoutMode) {
      case BookPageLayoutMode.Default:
        return "unset";
      case BookPageLayoutMode.Column1:
        return base / 2 - 4 + "px";
      case BookPageLayoutMode.Column2:
        return base / 4 + "px";
      default:
        return "unset";
    }
  }
  get ColumnHeight() {
    if (this.layoutMode !== BookPageLayoutMode.Default || this.writingStyle === WritingStyle.Vertical) {
      const height = this.windowHeight - this.topOffset * 2;
      return height + "px";
    }
    return "unset";
  }
  get VerticalBookContentWidth() {
    if (this.layoutMode !== BookPageLayoutMode.Default && this.writingStyle !== WritingStyle.Horizontal) {
      const width = this.getVerticalPageWidth();
      return width + "px";
    }
    return "";
  }
  get ColumnLayout() {
    switch (this.layoutMode) {
      case BookPageLayoutMode.Default:
        return "";
      case BookPageLayoutMode.Column1:
        return "column-layout-1";
      case BookPageLayoutMode.Column2:
        return "column-layout-2";
    }
  }
  get WritingStyleClass() {
    switch (this.writingStyle) {
      case WritingStyle.Horizontal:
        return "";
      case WritingStyle.Vertical:
        return "writing-style-vertical";
    }
  }
  get PageWidthForPagination() {
    if (this.layoutMode === BookPageLayoutMode.Default && this.writingStyle === WritingStyle.Vertical && this.horizontalScrollbarNeeded) {
      return "unset";
    }
    return "100%";
  }
  get PageHeightForPagination() {
    if (this.layoutMode === BookPageLayoutMode.Default) {
      if (this.bookContainerElemRef?.nativeElement?.clientHeight > this.bookContentElemRef?.nativeElement?.clientHeight) {
        return (this.bookContainerElemRef?.nativeElement?.clientHeight || 0) + "px";
      }
      return (this.bookContentElemRef?.nativeElement?.scrollHeight || 0) - this.topOffset * (this.immersiveMode ? 0 : 1) * 2 + "px";
    }
    if (this.immersiveMode)
      return this.windowHeight + "px";
    return this.windowHeight - this.topOffset * 2 + "px";
  }
  constructor(document2) {
    this.document = document2;
    this.route = inject(ActivatedRoute);
    this.router = inject(Router);
    this.accountService = inject(AccountService);
    this.seriesService = inject(SeriesService);
    this.readerService = inject(ReaderService);
    this.renderer = inject(Renderer2);
    this.navService = inject(NavService);
    this.toastr = inject(ToastrService);
    this.domSanitizer = inject(DomSanitizer);
    this.bookService = inject(BookService);
    this.memberService = inject(MemberService);
    this.scrollService = inject(ScrollService);
    this.utilityService = inject(UtilityService);
    this.libraryService = inject(LibraryService);
    this.themeService = inject(ThemeService);
    this.cdRef = inject(ChangeDetectorRef);
    this.BookPageLayoutMode = BookPageLayoutMode;
    this.WritingStyle = WritingStyle;
    this.TabID = TabID;
    this.ReadingDirection = ReadingDirection;
    this.PAGING_DIRECTION = PAGING_DIRECTION;
    this.readingListId = CHAPTER_ID_DOESNT_EXIST;
    this.incognitoMode = false;
    this.readingListMode = false;
    this.chapters = [];
    this.pageNum = 0;
    this.maxPages = 1;
    this.adhocPageHistory = new Stack();
    this.continuousChaptersStack = new Stack();
    this.isSingleImagePage = false;
    this.activeTabId = TabID.Settings;
    this.tocId = TabID.TableOfContents;
    this.drawerOpen = false;
    this.isLineOverlayOpen = false;
    this.actionBarVisible = true;
    this.immersiveMode = false;
    this.isLoading = true;
    this.bookTitle = "";
    this.clickToPaginateVisualOverlay = false;
    this.clickToPaginateVisualOverlayTimeout = void 0;
    this.clickToPaginateVisualOverlayTimeout2 = void 0;
    this.updateImageSizeTimeout = void 0;
    this.page = void 0;
    this.nextChapterId = CHAPTER_ID_NOT_FETCHED;
    this.prevChapterId = CHAPTER_ID_NOT_FETCHED;
    this.nextChapterDisabled = false;
    this.prevChapterDisabled = false;
    this.nextChapterPrefetched = false;
    this.prevChapterPrefetched = false;
    this.prevPageDisabled = false;
    this.nextPageDisabled = false;
    this.topOffset = 38;
    this.horizontalScrollbarNeeded = false;
    this.scrollbarNeeded = false;
    this.readingDirection = ReadingDirection.LeftToRight;
    this.clickToPaginate = false;
    this.darkMode = true;
    this.pageAnchors = {};
    this.currentPageAnchor = "";
    this.lastSeenScrollPartPath = "";
    this.libraryType = LibraryType.Book;
    this.isFullscreen = false;
    this.layoutMode = BookPageLayoutMode.Default;
    this.windowWidth = 0;
    this.windowHeight = 0;
    this.mousePosition = {
      x: 0,
      y: 0
    };
    this.pagingDirection = PAGING_DIRECTION.FORWARD;
    this.writingStyle = WritingStyle.Horizontal;
    this.hidePagination = false;
    this.refreshPToC = new EventEmitter();
    this.destroyRef = inject(DestroyRef);
    this.navService.hideNavBar();
    this.navService.hideSideNav();
    this.themeService.clearThemes();
    this.cdRef.markForCheck();
  }
  ngAfterViewInit() {
    fromEvent(this.reader.nativeElement, "scroll").pipe(debounceTime(200), takeUntilDestroyed(this.destroyRef)).subscribe((event) => {
      if (this.isLoading)
        return;
      this.handleScrollEvent();
    });
    fromEvent(this.bookContainerElemRef.nativeElement, "mousemove").pipe(takeUntilDestroyed(this.destroyRef), distinctUntilChanged(), tap((e) => {
      const selection = window.getSelection();
      this.hidePagination = selection !== null && selection.toString().trim() !== "";
      this.cdRef.markForCheck();
    })).subscribe();
    fromEvent(this.bookContainerElemRef.nativeElement, "mouseup").pipe(takeUntilDestroyed(this.destroyRef), distinctUntilChanged(), tap((e) => {
      this.hidePagination = false;
      this.cdRef.markForCheck();
    })).subscribe();
  }
  handleScrollEvent() {
    if (Object.keys(this.pageAnchors).length !== 0) {
      const verticalOffset = this.reader.nativeElement?.scrollTop || this.scrollService.scrollPosition + this.document.body.offsetHeight / 2;
      const alreadyReached = Object.values(this.pageAnchors).filter((i) => i <= verticalOffset);
      if (alreadyReached.length > 0) {
        this.currentPageAnchor = Object.keys(this.pageAnchors)[alreadyReached.length - 1];
      } else {
        this.currentPageAnchor = "";
      }
      this.cdRef.markForCheck();
    }
    const xpath = this.getFirstVisibleElementXPath();
    if (xpath !== null && xpath !== void 0)
      this.lastSeenScrollPartPath = xpath;
    if (this.lastSeenScrollPartPath !== "") {
      this.saveProgress();
    }
  }
  saveProgress() {
    let tempPageNum = this.pageNum;
    if (this.pageNum == this.maxPages - 1) {
      tempPageNum = this.pageNum + 1;
    }
    if (!this.incognitoMode) {
      this.readerService.saveProgress(this.libraryId, this.seriesId, this.volumeId, this.chapterId, tempPageNum, this.lastSeenScrollPartPath).pipe(take(1)).subscribe(() => {
      });
    }
  }
  ngOnDestroy() {
    this.clearTimeout(this.clickToPaginateVisualOverlayTimeout);
    this.clearTimeout(this.clickToPaginateVisualOverlayTimeout2);
    this.readerService.disableWakeLock();
    this.themeService.clearBookTheme();
    this.themeService.currentTheme$.pipe(take(1)).subscribe((theme) => {
      this.themeService.setTheme(theme.name);
    });
    this.navService.showNavBar();
    this.navService.showSideNav();
  }
  ngOnInit() {
    const libraryId = this.route.snapshot.paramMap.get("libraryId");
    const seriesId = this.route.snapshot.paramMap.get("seriesId");
    const chapterId = this.route.snapshot.paramMap.get("chapterId");
    if (libraryId === null || seriesId === null || chapterId === null) {
      this.router.navigateByUrl("/home");
      return;
    }
    this.libraryId = parseInt(libraryId, 10);
    this.seriesId = parseInt(seriesId, 10);
    this.chapterId = parseInt(chapterId, 10);
    this.incognitoMode = this.route.snapshot.queryParamMap.get("incognitoMode") === "true";
    const readingListId = this.route.snapshot.queryParamMap.get("readingListId");
    if (readingListId != null) {
      this.readingListMode = true;
      this.readingListId = parseInt(readingListId, 10);
    }
    this.cdRef.markForCheck();
    this.memberService.hasReadingProgress(this.libraryId).pipe(take(1)).subscribe((hasProgress) => {
      if (!hasProgress) {
        this.toggleDrawer();
        this.toastr.info(translate("toasts.book-settings-info"));
      }
    });
    this.accountService.currentUser$.pipe(take(1)).subscribe((user) => {
      if (user) {
        this.user = user;
        this.init();
      }
    });
  }
  init() {
    this.nextChapterId = CHAPTER_ID_NOT_FETCHED;
    this.prevChapterId = CHAPTER_ID_NOT_FETCHED;
    this.nextChapterDisabled = false;
    this.prevChapterDisabled = false;
    this.nextChapterPrefetched = false;
    this.cdRef.markForCheck();
    this.bookService.getBookInfo(this.chapterId).subscribe((info) => {
      if (this.readingListMode && info.seriesFormat !== MangaFormat.EPUB) {
        const params = this.readerService.getQueryParamsObject(this.incognitoMode, this.readingListMode, this.readingListId);
        this.router.navigate(this.readerService.getNavigationArray(info.libraryId, info.seriesId, this.chapterId, info.seriesFormat), { queryParams: params });
        return;
      }
      this.bookTitle = info.bookTitle;
      this.cdRef.markForCheck();
      forkJoin({
        chapter: this.seriesService.getChapter(this.chapterId),
        progress: this.readerService.getProgress(this.chapterId),
        chapters: this.bookService.getBookChapters(this.chapterId)
      }).subscribe((results) => {
        this.chapter = results.chapter;
        this.volumeId = results.chapter.volumeId;
        this.maxPages = results.chapter.pages;
        this.chapters = results.chapters;
        this.pageNum = results.progress.pageNum;
        this.cdRef.markForCheck();
        if (results.progress.bookScrollId)
          this.lastSeenScrollPartPath = results.progress.bookScrollId;
        this.continuousChaptersStack.push(this.chapterId);
        this.libraryService.getLibraryType(this.libraryId).pipe(take(1)).subscribe((type) => {
          this.libraryType = type;
        });
        this.updateImageSizes();
        if (this.pageNum >= this.maxPages) {
          this.pageNum = this.maxPages - 1;
          this.cdRef.markForCheck();
          this.saveProgress();
        }
        this.readerService.getNextChapter(this.seriesId, this.volumeId, this.chapterId, this.readingListId).pipe(take(1)).subscribe((chapterId) => {
          this.nextChapterId = chapterId;
          if (chapterId === CHAPTER_ID_DOESNT_EXIST || chapterId === this.chapterId) {
            this.nextChapterDisabled = true;
            this.nextChapterPrefetched = true;
            this.cdRef.markForCheck();
            return;
          }
          this.setPageNum(this.pageNum);
        });
        this.readerService.getPrevChapter(this.seriesId, this.volumeId, this.chapterId, this.readingListId).pipe(take(1)).subscribe((chapterId) => {
          this.prevChapterId = chapterId;
          if (chapterId === CHAPTER_ID_DOESNT_EXIST || chapterId === this.chapterId) {
            this.prevChapterDisabled = true;
            this.prevChapterPrefetched = true;
            this.cdRef.markForCheck();
            return;
          }
          this.setPageNum(this.pageNum);
        });
        this.loadPage(results.progress.bookScrollId || void 0);
        this.readerService.enableWakeLock(this.reader.nativeElement);
      }, () => {
        setTimeout(() => {
          this.closeReader();
        }, 200);
      });
    });
  }
  onResize() {
    this.updateWidthAndHeightCalcs();
    this.updateImageSizes();
    const resumeElement = this.getFirstVisibleElementXPath();
    if (this.layoutMode !== BookPageLayoutMode.Default && resumeElement !== null && resumeElement !== void 0) {
      this.scrollTo(resumeElement);
    }
  }
  handleKeyPress(event) {
    const activeElement = document.activeElement;
    const isInputFocused = activeElement.tagName === "INPUT" || activeElement.tagName === "TEXTAREA";
    if (isInputFocused)
      return;
    if (event.key === KEY_CODES.RIGHT_ARROW) {
      this.movePage(this.readingDirection === ReadingDirection.LeftToRight ? PAGING_DIRECTION.FORWARD : PAGING_DIRECTION.BACKWARDS);
    } else if (event.key === KEY_CODES.LEFT_ARROW) {
      this.movePage(this.readingDirection === ReadingDirection.LeftToRight ? PAGING_DIRECTION.BACKWARDS : PAGING_DIRECTION.FORWARD);
    } else if (event.key === KEY_CODES.ESC_KEY) {
      const isHighlighting = window.getSelection()?.toString() != "";
      if (isHighlighting)
        return;
      this.closeReader();
    } else if (event.key === KEY_CODES.SPACE) {
      this.toggleDrawer();
      event.stopPropagation();
      event.preventDefault();
    } else if (event.key === KEY_CODES.G) {
      this.goToPage();
    } else if (event.key === KEY_CODES.F) {
      this.toggleFullscreen();
    }
  }
  onWheel(event) {
    if (this.layoutMode !== BookPageLayoutMode.Default || this.writingStyle !== WritingStyle.Vertical) {
      return;
    }
    if (event.deltaY !== 0) {
      event.preventDefault();
      this.scrollService.scrollToX(event.deltaY + this.reader.nativeElement.scrollLeft, this.reader.nativeElement);
    }
  }
  closeReader() {
    this.readerService.closeReader(this.readingListMode, this.readingListId);
  }
  sortElements(a, b) {
    const aTop = a.getBoundingClientRect().top;
    const bTop = b.getBoundingClientRect().top;
    if (aTop < bTop) {
      return -1;
    }
    if (aTop > bTop) {
      return 1;
    }
    return 0;
  }
  loadNextChapter() {
    if (this.nextPageDisabled) {
      return;
    }
    this.isLoading = true;
    if (this.nextChapterId === CHAPTER_ID_NOT_FETCHED || this.nextChapterId === this.chapterId) {
      this.readerService.getNextChapter(this.seriesId, this.volumeId, this.chapterId, this.readingListId).pipe(take(1)).subscribe((chapterId) => {
        this.nextChapterId = chapterId;
        this.loadChapter(chapterId, "Next");
      });
    } else {
      this.loadChapter(this.nextChapterId, "Next");
    }
  }
  loadPrevChapter() {
    if (this.prevPageDisabled) {
      return;
    }
    this.isLoading = true;
    this.cdRef.markForCheck();
    this.continuousChaptersStack.pop();
    const prevChapter = this.continuousChaptersStack.peek();
    if (prevChapter != this.chapterId) {
      if (prevChapter !== void 0) {
        this.chapterId = prevChapter;
        this.init();
        return;
      }
    }
    if (this.prevChapterPrefetched && this.prevChapterId === CHAPTER_ID_DOESNT_EXIST) {
      this.isLoading = false;
      this.cdRef.markForCheck();
      return;
    }
    if (this.prevChapterId === CHAPTER_ID_NOT_FETCHED || this.prevChapterId === this.chapterId && !this.prevChapterPrefetched) {
      this.readerService.getPrevChapter(this.seriesId, this.volumeId, this.chapterId, this.readingListId).pipe(take(1)).subscribe((chapterId) => {
        this.prevChapterId = chapterId;
        this.loadChapter(chapterId, "Prev");
      });
    } else {
      this.loadChapter(this.prevChapterId, "Prev");
    }
  }
  loadChapter(chapterId, direction) {
    if (chapterId >= 0) {
      this.chapterId = chapterId;
      this.continuousChaptersStack.push(chapterId);
      const newRoute = this.readerService.getNextChapterUrl(this.router.url, this.chapterId, this.incognitoMode, this.readingListMode, this.readingListId);
      window.history.replaceState({}, "", newRoute);
      const msg = translate(direction === "Next" ? "toasts.load-next-chapter" : "toasts.load-prev-chapter", { entity: this.utilityService.formatChapterName(this.libraryType).toLowerCase() });
      this.toastr.info(msg, "", { timeOut: 3e3 });
      this.cdRef.markForCheck();
      this.init();
    } else {
      const msg = translate(direction === "Next" ? "toasts.no-next-chapter" : "toasts.no-prev-chapter", { entity: this.utilityService.formatChapterName(this.libraryType).toLowerCase() });
      this.toastr.warning(msg);
      this.isLoading = false;
      if (direction === "Prev") {
        this.prevPageDisabled = true;
      } else {
        this.nextPageDisabled = true;
      }
      this.cdRef.markForCheck();
    }
  }
  loadChapterPage(event) {
    this.setPageNum(event.pageNum);
    this.loadPage('id("' + event.part + '")');
  }
  loadChapterPart(event) {
    this.setPageNum(event.pageNum);
    this.loadPage(event.scrollPart);
  }
  addLinkClickHandlers() {
    const links = this.readingSectionElemRef.nativeElement.querySelectorAll("a");
    links.forEach((link) => {
      link.addEventListener("click", (e) => {
        e.stopPropagation();
        let targetElem = e.target;
        if (e.target.nodeName !== "A" && e.target.parentNode.nodeName === "A") {
          targetElem = e.target.parentNode;
        }
        if (!targetElem.attributes.hasOwnProperty("kavita-page")) {
          return;
        }
        const page = parseInt(targetElem.attributes["kavita-page"].value, 10);
        if (this.adhocPageHistory.peek()?.page !== this.pageNum) {
          this.adhocPageHistory.push({ page: this.pageNum, scrollPart: this.lastSeenScrollPartPath });
        }
        const partValue = targetElem.attributes.hasOwnProperty("kavita-part") ? targetElem.attributes["kavita-part"].value : void 0;
        if (partValue && page === this.pageNum) {
          this.scrollTo(targetElem.attributes["kavita-part"].value);
          return;
        }
        this.setPageNum(page);
        this.loadPage(partValue);
      });
    });
  }
  moveFocus() {
    const elems = this.document.getElementsByClassName("reading-section");
    if (elems.length > 0) {
      elems[0].focus();
    }
  }
  promptForPage() {
    const question = translate("book-reader.go-to-page-prompt", { totalPages: this.maxPages - 1 });
    const goToPageNum = window.prompt(question, "");
    if (goToPageNum === null || goToPageNum.trim().length === 0) {
      return null;
    }
    return goToPageNum;
  }
  goToPage(pageNum) {
    let page = pageNum;
    if (pageNum === null || pageNum === void 0) {
      const goToPageNum = this.promptForPage();
      if (goToPageNum === null) {
        return;
      }
      page = parseInt(goToPageNum.trim(), 10);
    }
    if (page === void 0 || this.pageNum === page) {
      return;
    }
    if (page > this.maxPages) {
      page = this.maxPages;
    } else if (page < 0) {
      page = 0;
    }
    if (!(page === 0 || page === this.maxPages - 1)) {
      page -= 1;
    }
    this.pageNum = page;
    this.loadPage();
  }
  loadPage(part, scrollTop) {
    this.isLoading = true;
    this.cdRef.markForCheck();
    this.bookService.getBookPage(this.chapterId, this.pageNum).pipe(take(1)).subscribe((content) => {
      this.isSingleImagePage = this.checkSingleImagePage(content);
      this.updateSingleImagePageStyles();
      this.page = this.domSanitizer.bypassSecurityTrustHtml(content);
      this.cdRef.markForCheck();
      setTimeout(() => {
        this.addLinkClickHandlers();
        this.updateReaderStyles(this.pageStyles);
        const imgs = this.readingSectionElemRef.nativeElement.querySelectorAll("img");
        if (imgs === null || imgs.length === 0) {
          this.setupPage(part, scrollTop);
          return;
        }
        Promise.all(Array.from(imgs).filter((img) => !img.complete).map((img) => new Promise((resolve) => {
          img.onload = img.onerror = resolve;
        }))).then(() => {
          this.setupPage(part, scrollTop);
          this.updateImageSizes();
        });
      }, 10);
    });
  }
  updateImageSizes() {
    const isVerticalWritingStyle = this.writingStyle === WritingStyle.Vertical;
    const height = this.windowHeight - this.topOffset * 2;
    let maxHeight = "unset";
    let maxWidth = "";
    switch (this.layoutMode) {
      case BookPageLayoutMode.Default:
        if (isVerticalWritingStyle) {
          maxHeight = `${height}px`;
        } else {
          maxWidth = `${this.getVerticalPageWidth()}px`;
        }
        break;
      case BookPageLayoutMode.Column1:
        maxHeight = `${height}px`;
        maxWidth = `${this.getVerticalPageWidth()}px`;
        break;
      case BookPageLayoutMode.Column2:
        maxWidth = `${this.getVerticalPageWidth()}px`;
        if (isVerticalWritingStyle && !this.isSingleImagePage) {
          maxHeight = `${height / 2}px`;
        } else {
          maxHeight = `${height}px`;
        }
        break;
    }
    this.document.documentElement.style.setProperty("--book-reader-content-max-height", maxHeight);
    this.document.documentElement.style.setProperty("--book-reader-content-max-width", maxWidth);
  }
  updateSingleImagePageStyles() {
    if (this.isSingleImagePage && this.layoutMode !== BookPageLayoutMode.Default) {
      this.document.documentElement.style.setProperty("--book-reader-content-position", "absolute");
      this.document.documentElement.style.setProperty("--book-reader-content-top", "50%");
      this.document.documentElement.style.setProperty("--book-reader-content-left", "50%");
      this.document.documentElement.style.setProperty("--book-reader-content-transform", "translate(-50%, -50%)");
    } else {
      this.document.documentElement.style.setProperty("--book-reader-content-position", "");
      this.document.documentElement.style.setProperty("--book-reader-content-top", "");
      this.document.documentElement.style.setProperty("--book-reader-content-left", "");
      this.document.documentElement.style.setProperty("--book-reader-content-transform", "");
    }
  }
  checkSingleImagePage(content) {
    const htmlContent = content.replace(/<style>.*<\/style>/s, "");
    const parser = new DOMParser();
    const doc = parser.parseFromString(htmlContent, "text/html");
    const html = doc.querySelector("html");
    if (html?.innerText.trim() !== "") {
      return false;
    }
    const images = doc.querySelectorAll("img, svg");
    return images.length === 1;
  }
  setupPage(part, scrollTop) {
    this.isLoading = false;
    this.cdRef.markForCheck();
    this.updateWidthAndHeightCalcs();
    this.updateLayoutMode(this.layoutMode || BookPageLayoutMode.Default);
    this.addEmptyPageIfRequired();
    this.setupPageAnchors();
    if (part !== void 0 && part !== "") {
      this.scrollTo(part);
    } else if (scrollTop !== void 0 && scrollTop !== 0) {
      setTimeout(() => this.scrollService.scrollTo(scrollTop, this.reader.nativeElement));
    } else if (this.writingStyle === WritingStyle.Vertical && this.layoutMode === BookPageLayoutMode.Default) {
      setTimeout(() => this.scrollService.scrollToX(this.bookContentElemRef.nativeElement.clientWidth, this.reader.nativeElement));
    } else {
      if (this.layoutMode === BookPageLayoutMode.Default) {
        setTimeout(() => this.scrollService.scrollTo(0, this.reader.nativeElement));
      } else if (this.writingStyle === WritingStyle.Vertical) {
        if (this.pagingDirection === PAGING_DIRECTION.BACKWARDS) {
          setTimeout(() => this.scrollService.scrollTo(this.bookContentElemRef.nativeElement.scrollHeight, this.bookContentElemRef.nativeElement, "auto"));
        } else {
          setTimeout(() => this.scrollService.scrollTo(0, this.bookContentElemRef.nativeElement, "auto"));
        }
      } else {
        if (this.pagingDirection === PAGING_DIRECTION.BACKWARDS) {
          setTimeout(() => this.scrollService.scrollToX(this.bookContentElemRef.nativeElement.scrollWidth, this.bookContentElemRef.nativeElement));
        } else {
          setTimeout(() => this.scrollService.scrollToX(0, this.bookContentElemRef.nativeElement));
        }
      }
    }
    this.reader.nativeElement.focus();
    this.saveProgress();
    this.isLoading = false;
    this.cdRef.markForCheck();
  }
  addEmptyPageIfRequired() {
    if (this.layoutMode !== BookPageLayoutMode.Column2 || this.isSingleImagePage) {
      return;
    }
    const [, , pageWidth] = this.getVirtualPage();
    const actualWidth = this.bookContentElemRef.nativeElement.scrollWidth;
    const lastPageWidth = actualWidth % pageWidth;
    if (lastPageWidth >= pageWidth / 2 || lastPageWidth === 0) {
      return;
    }
    const columnHeight = this.getPageHeight() - COLUMN_GAP;
    const emptyPage = this.renderer.createElement("div");
    this.renderer.setStyle(emptyPage, "height", columnHeight + "px");
    this.renderer.setStyle(emptyPage, "width", this.ColumnWidth);
    this.renderer.appendChild(this.bookContentElemRef.nativeElement, emptyPage);
  }
  goBack() {
    if (!this.adhocPageHistory.isEmpty()) {
      const page = this.adhocPageHistory.pop();
      if (page !== void 0) {
        this.setPageNum(page.page);
        this.loadPage(page.scrollPart);
      }
    }
  }
  setPageNum(pageNum) {
    this.pageNum = Math.max(Math.min(pageNum, this.maxPages), 0);
    this.cdRef.markForCheck();
    if (this.pageNum >= this.maxPages - 10) {
      if (!this.nextChapterPrefetched && this.nextChapterId !== CHAPTER_ID_DOESNT_EXIST) {
        this.readerService.getChapterInfo(this.nextChapterId).pipe(take(1), catchError((err) => {
          this.nextChapterDisabled = true;
          this.cdRef.markForCheck();
          return of(null);
        })).subscribe((res) => {
          this.nextChapterPrefetched = true;
        });
      }
    } else if (this.pageNum <= 10) {
      if (!this.prevChapterPrefetched && this.prevChapterId !== CHAPTER_ID_DOESNT_EXIST) {
        this.readerService.getChapterInfo(this.prevChapterId).pipe(take(1), catchError((err) => {
          this.prevChapterDisabled = true;
          this.cdRef.markForCheck();
          return of(null);
        })).subscribe((res) => {
          this.prevChapterPrefetched = true;
        });
      }
    }
  }
  movePage(direction) {
    if (direction === PAGING_DIRECTION.BACKWARDS) {
      this.prevPage();
      return;
    }
    this.nextPage();
  }
  prevPage() {
    const oldPageNum = this.pageNum;
    this.pagingDirection = PAGING_DIRECTION.BACKWARDS;
    if (this.layoutMode !== BookPageLayoutMode.Default) {
      const [currentVirtualPage, _, pageWidth] = this.getVirtualPage();
      if (currentVirtualPage > 1) {
        if (this.writingStyle === WritingStyle.Vertical) {
          this.scrollService.scrollTo((currentVirtualPage - 2) * pageWidth, this.bookContentElemRef.nativeElement, "auto");
        } else {
          this.scrollService.scrollToX((currentVirtualPage - 2) * pageWidth, this.bookContentElemRef.nativeElement);
        }
        this.handleScrollEvent();
        return;
      }
    }
    this.setPageNum(this.pageNum - 1);
    if (oldPageNum === 0) {
      this.loadPrevChapter();
      return;
    }
    if (oldPageNum === this.pageNum) {
      return;
    }
    this.loadPage();
  }
  nextPage(event) {
    if (event) {
      event.stopPropagation();
      event.preventDefault();
    }
    this.pagingDirection = PAGING_DIRECTION.FORWARD;
    if (this.layoutMode !== BookPageLayoutMode.Default) {
      const [currentVirtualPage, totalVirtualPages, pageWidth] = this.getVirtualPage();
      if (currentVirtualPage < totalVirtualPages) {
        if (this.writingStyle === WritingStyle.Vertical) {
          this.scrollService.scrollTo(currentVirtualPage * pageWidth, this.bookContentElemRef.nativeElement, "auto");
        } else {
          this.scrollService.scrollToX(currentVirtualPage * pageWidth, this.bookContentElemRef.nativeElement);
        }
        this.handleScrollEvent();
        return;
      }
    }
    const oldPageNum = this.pageNum;
    if (oldPageNum + 1 === this.maxPages) {
      this.loadNextChapter();
      return;
    }
    this.setPageNum(this.pageNum + 1);
    if (oldPageNum === this.pageNum) {
      return;
    }
    this.loadPage();
  }
  getPageWidth() {
    if (this.readingSectionElemRef == null)
      return 0;
    const margin = this.convertVwToPx(parseInt(this.pageStyles["margin-left"], 10)) * 2;
    return this.readingSectionElemRef.nativeElement.clientWidth - margin + COLUMN_GAP;
  }
  getPageHeight() {
    if (this.readingSectionElemRef == null)
      return 0;
    const height = parseInt(this.ColumnHeight.replace("px", ""), 10);
    return height - COLUMN_GAP;
  }
  getVerticalPageWidth() {
    const margin = window.innerWidth * (parseInt(this.pageStyles["margin-left"], 10) / 100) * 2;
    const windowWidth = window.innerWidth || document.documentElement.clientWidth;
    return windowWidth - margin;
  }
  convertVwToPx(vwValue) {
    const viewportWidth = Math.max(this.readingSectionElemRef.nativeElement.clientWidth || 0, window.innerWidth || 0);
    return vwValue * viewportWidth / 100;
  }
  getVirtualPage() {
    if (!this.bookContentElemRef || !this.readingSectionElemRef)
      return [1, 1, 0];
    const [scrollOffset, totalScroll] = this.getScrollOffsetAndTotalScroll();
    const pageSize = this.getPageSize();
    const totalVirtualPages = Math.max(1, Math.ceil(totalScroll / pageSize));
    const delta = scrollOffset - totalScroll;
    let currentVirtualPage = 1;
    if (totalScroll === delta) {
      currentVirtualPage = 1;
    } else if (totalScroll - delta === pageSize) {
      currentVirtualPage = 2;
    } else {
      currentVirtualPage = Math.min(Math.max(1, Math.round((scrollOffset + pageSize) / pageSize)), totalVirtualPages);
    }
    return [currentVirtualPage, totalVirtualPages, pageSize];
  }
  getScrollOffsetAndTotalScroll() {
    const { nativeElement: bookContent } = this.bookContentElemRef;
    const scrollOffset = this.writingStyle === WritingStyle.Vertical ? bookContent.scrollTop : bookContent.scrollLeft;
    const totalScroll = this.writingStyle === WritingStyle.Vertical ? bookContent.scrollHeight : bookContent.scrollWidth;
    return [scrollOffset, totalScroll];
  }
  getPageSize() {
    return this.writingStyle === WritingStyle.Vertical ? this.getPageHeight() : this.getPageWidth();
  }
  getFirstVisibleElementXPath() {
    let resumeElement = null;
    if (this.bookContentElemRef === null)
      return null;
    const intersectingEntries = Array.from(this.bookContentElemRef.nativeElement.querySelectorAll("div,o,p,ul,li,a,img,h1,h2,h3,h4,h5,h6,span")).filter((element) => !element.classList.contains("no-observe")).filter((entry) => {
      return this.utilityService.isInViewport(entry, this.topOffset);
    });
    intersectingEntries.sort(this.sortElements);
    if (intersectingEntries.length > 0) {
      let path = this.readerService.getXPathTo(intersectingEntries[0]);
      if (path === "") {
        return;
      }
      if (!path.startsWith("id")) {
        path = "//html[1]/" + path;
      }
      resumeElement = path;
    }
    return resumeElement;
  }
  updateReaderStyles(pageStyles) {
    this.pageStyles = pageStyles;
    if (this.bookContentElemRef === void 0 || !this.bookContentElemRef.nativeElement)
      return;
    const resumeElement = this.getFirstVisibleElementXPath();
    this.updateImageSizes();
    Object.entries(this.pageStyles).forEach((item) => {
      if (item[1] == "100%" || item[1] == "0px" || item[1] == "inherit") {
        this.renderer.removeStyle(this.bookContentElemRef.nativeElement, item[0]);
        return;
      }
      if (pageLevelStyles.includes(item[0])) {
        this.renderer.setStyle(this.bookContentElemRef.nativeElement, item[0], item[1], RendererStyleFlags2.Important);
      }
    });
    const individualElementStyles = Object.entries(this.pageStyles).filter((item) => elementLevelStyles.includes(item[0]));
    for (let i = 0; i < this.bookContentElemRef.nativeElement.children.length; i++) {
      const elem = this.bookContentElemRef.nativeElement.children.item(i);
      if (elem?.tagName === "STYLE")
        continue;
      individualElementStyles.forEach((item) => {
        if (item[1] == "100%" || item[1] == "0px" || item[1] == "inherit") {
          this.renderer.removeStyle(elem, item[0]);
          return;
        }
        this.renderer.setStyle(elem, item[0], item[1], RendererStyleFlags2.Important);
      });
    }
    if (this.layoutMode !== BookPageLayoutMode.Default && resumeElement !== null && resumeElement !== void 0) {
      this.updateWidthAndHeightCalcs();
      this.scrollTo(resumeElement);
    }
  }
  updateColorTheme(theme) {
    Array.from(this.document.querySelectorAll('style[id^="brtheme-"]')).forEach((elem) => elem.remove());
    this.darkMode = theme.isDarkTheme;
    const styleElem = this.renderer.createElement("style");
    styleElem.id = theme.selector;
    styleElem.innerHTML = theme.content;
    this.renderer.appendChild(this.document.querySelector(".reading-section"), styleElem);
    this.themeService.setBookTheme(theme.selector);
  }
  updateWidthAndHeightCalcs() {
    this.windowHeight = Math.max(this.readingSectionElemRef.nativeElement.clientHeight, window.innerHeight);
    this.windowWidth = Math.max(this.readingSectionElemRef.nativeElement.clientWidth, window.innerWidth);
    this.scrollbarNeeded = this.bookContentElemRef?.nativeElement?.clientHeight > this.reader?.nativeElement?.clientHeight;
    this.horizontalScrollbarNeeded = this.bookContentElemRef?.nativeElement?.clientWidth > this.reader?.nativeElement?.clientWidth;
    this.cdRef.markForCheck();
  }
  toggleDrawer() {
    this.drawerOpen = !this.drawerOpen;
    if (this.immersiveMode) {
      this.actionBarVisible = false;
    }
    this.cdRef.markForCheck();
  }
  scrollTo(partSelector) {
    if (partSelector.startsWith("#")) {
      partSelector = partSelector.substr(1, partSelector.length);
    }
    let element = null;
    if (partSelector.startsWith("//") || partSelector.startsWith("id(")) {
      element = this.getElementFromXPath(partSelector);
    } else {
      element = this.document.querySelector('*[id="' + partSelector + '"]');
    }
    if (element === null)
      return;
    if (this.layoutMode === BookPageLayoutMode.Default && this.writingStyle === WritingStyle.Vertical) {
      const windowWidth = window.innerWidth || document.documentElement.clientWidth;
      const scrollLeft = element.getBoundingClientRect().left + window.pageXOffset - (windowWidth - element.getBoundingClientRect().width);
      setTimeout(() => this.scrollService.scrollToX(scrollLeft, this.reader.nativeElement, "smooth"), 10);
    } else if (this.layoutMode === BookPageLayoutMode.Default && this.writingStyle === WritingStyle.Horizontal) {
      const fromTopOffset = element.getBoundingClientRect().top + window.pageYOffset + TOP_OFFSET;
      setTimeout(() => this.scrollService.scrollTo(fromTopOffset, this.reader.nativeElement), 10);
    } else {
      setTimeout(() => element.scrollIntoView({ "block": "start", "inline": "start" }));
    }
  }
  getElementFromXPath(path) {
    const node = this.document.evaluate(path, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
    if (node?.nodeType === Node.ELEMENT_NODE) {
      return node;
    }
    return null;
  }
  turnOffIncognito() {
    this.incognitoMode = false;
    const newRoute = this.readerService.getNextChapterUrl(this.router.url, this.chapterId, this.incognitoMode, this.readingListMode, this.readingListId);
    window.history.replaceState({}, "", newRoute);
    this.toastr.info("Incognito mode is off. Progress will now start being tracked.");
    this.saveProgress();
  }
  toggleFullscreen() {
    this.isFullscreen = this.readerService.checkFullscreenMode();
    if (this.isFullscreen) {
      this.readerService.toggleFullscreen(this.reader.nativeElement, () => {
        this.isFullscreen = false;
        this.cdRef.markForCheck();
        this.renderer.removeStyle(this.reader.nativeElement, "background");
      });
    } else {
      this.readerService.toggleFullscreen(this.reader.nativeElement, () => {
        this.isFullscreen = true;
        this.cdRef.markForCheck();
        this.renderer.setStyle(this.reader.nativeElement, "background", this.themeService.getCssVariable("--bs-body-color"));
        if (!this.darkMode) {
          this.renderer.setStyle(this.reader.nativeElement, "background", "white");
        }
      });
    }
  }
  updateWritingStyle(writingStyle) {
    this.writingStyle = writingStyle;
    setTimeout(() => this.updateImageSizes());
    if (this.layoutMode !== BookPageLayoutMode.Default) {
      const lastSelector = this.lastSeenScrollPartPath;
      setTimeout(() => {
        this.scrollTo(lastSelector);
      });
    } else if (this.bookContentElemRef !== void 0) {
      const resumeElement = this.getFirstVisibleElementXPath();
      if (resumeElement) {
        setTimeout(() => {
          this.scrollTo(resumeElement);
        });
      }
    }
    this.cdRef.markForCheck();
  }
  updateLayoutMode(mode) {
    const layoutModeChanged = mode !== this.layoutMode;
    this.layoutMode = mode;
    this.cdRef.markForCheck();
    this.clearTimeout(this.updateImageSizeTimeout);
    this.updateImageSizeTimeout = setTimeout(() => {
      this.updateImageSizes();
    }, 200);
    this.updateSingleImagePageStyles();
    if (this.bookContentElemRef == null) {
      setTimeout(() => this.updateLayoutMode(this.layoutMode), 10);
      return;
    }
    setTimeout(() => {
      this.scrollbarNeeded = this.bookContentElemRef?.nativeElement?.clientHeight > this.reader?.nativeElement?.clientHeight;
      this.horizontalScrollbarNeeded = this.bookContentElemRef?.nativeElement?.clientWidth > this.reader?.nativeElement?.clientWidth;
      this.cdRef.markForCheck();
    });
    if (mode === BookPageLayoutMode.Default && layoutModeChanged) {
      const lastSelector = this.lastSeenScrollPartPath;
      setTimeout(() => this.scrollTo(lastSelector));
    }
  }
  updateReadingDirection(readingDirection) {
    this.readingDirection = readingDirection;
    this.cdRef.markForCheck();
  }
  updateImmersiveMode(immersiveMode) {
    this.immersiveMode = immersiveMode;
    if (this.immersiveMode && !this.drawerOpen) {
      this.actionBarVisible = false;
    }
    this.updateReadingSectionHeight();
    this.cdRef.markForCheck();
  }
  updateReadingSectionHeight() {
    const renderer = this.renderer;
    const elem = this.readingSectionElemRef;
    setTimeout(() => {
      if (renderer === void 0 || elem === void 0)
        return;
      if (this.immersiveMode) {
      } else {
        renderer.setStyle(elem, "height", "calc(var(--vh, 1vh) * 100 - " + this.topOffset + "px)", RendererStyleFlags2.Important);
      }
    });
  }
  cleanIdSelector(id) {
    const tokens = id.split("/");
    if (tokens.length > 0) {
      return tokens[0];
    }
    return id;
  }
  getPageMarkers(ids) {
    try {
      return this.document.querySelectorAll(ids.map((id) => "#" + this.cleanIdSelector(id)).join(", "));
    } catch (Exception) {
      return this.document.querySelectorAll(ids.map((id) => '[href="#' + id + '"]').join(", "));
    }
  }
  setupPageAnchors() {
    this.pageAnchors = {};
    this.currentPageAnchor = "";
    this.cdRef.markForCheck();
    const ids = this.chapters.map((item) => item.children).flat().filter((item) => item.page === this.pageNum).map((item) => item.part).filter((item) => item.length > 0);
    if (ids.length > 0) {
      const elems = this.getPageMarkers(ids);
      elems.forEach((elem) => {
        this.pageAnchors[elem.id] = elem.getBoundingClientRect().top;
      });
    }
  }
  showPaginationOverlay(clickToPaginate) {
    this.clickToPaginate = clickToPaginate;
    this.cdRef.markForCheck();
    this.clearTimeout(this.clickToPaginateVisualOverlayTimeout2);
    if (!clickToPaginate) {
      return;
    }
    this.clickToPaginateVisualOverlayTimeout2 = setTimeout(() => {
      this.showClickToPaginateVisualOverlay();
    }, 200);
  }
  clearTimeout(timeoutId) {
    if (timeoutId !== void 0) {
      clearTimeout(timeoutId);
      timeoutId = void 0;
    }
  }
  showClickToPaginateVisualOverlay() {
    this.clickToPaginateVisualOverlay = true;
    this.cdRef.markForCheck();
    if (this.clickToPaginateVisualOverlay && this.clickToPaginateVisualOverlayTimeout !== void 0) {
      clearTimeout(this.clickToPaginateVisualOverlayTimeout);
      this.clickToPaginateVisualOverlayTimeout = void 0;
    }
    this.clickToPaginateVisualOverlayTimeout = setTimeout(() => {
      this.clickToPaginateVisualOverlay = false;
      this.cdRef.markForCheck();
    }, 1e3);
  }
  clickOverlayClass(side) {
    if (!this.clickToPaginateVisualOverlay) {
      return "";
    }
    if (this.readingDirection === ReadingDirection.LeftToRight) {
      return side === "right" ? "highlight" : "highlight-2";
    }
    return side === "right" ? "highlight-2" : "highlight";
  }
  handleReaderClick(event) {
    if (!this.clickToPaginate) {
      event.preventDefault();
      event.stopPropagation();
      this.toggleMenu(event);
      return;
    }
    const isHighlighting = window.getSelection()?.toString() != "";
    if (isHighlighting) {
      event.preventDefault();
      event.stopPropagation();
      return;
    }
  }
  toggleMenu(event) {
    const targetElement = event.target;
    const mouseOffset = 5;
    if (!this.immersiveMode)
      return;
    if (targetElement.getAttribute("onclick") !== null || targetElement.getAttribute("href") !== null || targetElement.getAttribute("role") !== null || targetElement.getAttribute("kavita-part") != null) {
      return;
    }
    if (Math.abs(this.mousePosition.x - event.clientX) <= mouseOffset && Math.abs(this.mousePosition.y - event.clientY) <= mouseOffset) {
      this.actionBarVisible = !this.actionBarVisible;
      this.cdRef.markForCheck();
    }
  }
  mouseDown($event) {
    this.mousePosition.x = $event.clientX;
    this.mousePosition.y = $event.clientY;
  }
  refreshPersonalToC() {
    this.refreshPToC.emit();
  }
  updateLineOverlayOpen(isOpen) {
    this.isLineOverlayOpen = isOpen;
    this.cdRef.markForCheck();
  }
  static {
    this.\u0275fac = function BookReaderComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _BookReaderComponent)(\u0275\u0275directiveInject(DOCUMENT));
    };
  }
  static {
    this.\u0275cmp = \u0275\u0275defineComponent({ type: _BookReaderComponent, selectors: [["app-book-reader"]], viewQuery: function BookReaderComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(_c02, 5);
        \u0275\u0275viewQuery(_c12, 5);
        \u0275\u0275viewQuery(_c2, 5);
        \u0275\u0275viewQuery(_c3, 5);
        \u0275\u0275viewQuery(_c4, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.bookContainerElemRef = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.bookContentElemRef = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.readingSectionElemRef = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.stickyTopElemRef = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.reader = _t.first);
      }
    }, hostBindings: function BookReaderComponent_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("resize", function BookReaderComponent_resize_HostBindingHandler($event) {
          return ctx.onResize($event);
        }, false, \u0275\u0275resolveWindow)("orientationchange", function BookReaderComponent_orientationchange_HostBindingHandler($event) {
          return ctx.onResize($event);
        }, false, \u0275\u0275resolveWindow)("keydown", function BookReaderComponent_keydown_HostBindingHandler($event) {
          return ctx.handleKeyPress($event);
        }, false, \u0275\u0275resolveWindow);
      }
    }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 3, vars: 6, consts: [["reader", ""], ["stickyTop", ""], ["commentDrawer", "drawer"], ["nav", "ngbNav"], ["readingSection", ""], ["bookContainer", ""], ["actionBar", ""], ["subnav", "ngbNav"], ["readingHtml", ""], ["tabindex", "0"], [4, "transloco", "translocoRead"], [1, "fixed-top"], ["href", "javascript:void(0);", 1, "visually-hidden-focusable", "focus-visible", 3, "click"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], [3, "parent", "libraryId", "volumeId", "chapterId", "seriesId", "pageNumber", "isOpen", "refreshToC", 4, "ngIf"], [3, "isOpenChange", "isOpen", "options"], ["header", ""], [1, "mb-0"], ["tabindex", "0", "role", "button", 2, "font-size", "14px", "color", "var(--primary-color)", 3, "click"], ["subheader", ""], [1, "pagination-cont"], [4, "ngIf"], [1, "g-0", "text-center"], [1, "d-flex", "align-items-center", "justify-content-between", "text-center", "row", "g-0"], [1, "btn", "btn-small", "btn-icon", "col-1", 3, "click", "disabled", "title"], ["aria-hidden", "true", 1, "fa", "fa-fast-backward"], [1, "col-1", 3, "click"], [1, "col-8"], ["type", "primary", "height", "5px", 1, "clickable", 3, "click", "title", "value", "max"], [1, "col-1", "btn-icon", 3, "click", "title"], ["aria-hidden", "true", 1, "fa", "fa-fast-forward"], ["body", "", 1, "drawer-body"], ["role", "navigation"], ["ngbNav", "", 1, "reader-pills", "nav", "nav-pills", "mb-2", 3, "activeIdChange", "activeId", "destroyOnHide"], [3, "ngbNavItem"], ["ngbNavLink", ""], ["ngbNavContent", ""], [1, "mt-3", 3, "ngbNavOutlet"], [3, "click", "ngStyle", "ngClass"], [3, "mousedown", "ngClass"], [3, "class", "ngStyle", "ngClass", "innerHtml", "click", "mousedown", "wheel", 4, "ngIf"], [3, "ngClass", "click", 4, "ngIf"], [3, "isOpen", "refreshToC", "parent", "libraryId", "volumeId", "chapterId", "seriesId", "pageNumber"], [1, "virt-pagination-cont"], ["class", "d-flex align-items-center justify-content-between text-center row g-0", 4, "ngIf"], [1, "btn", "btn-small", "btn-icon", "col-1", 3, "click", "title"], ["aria-hidden", "true", 1, "fa-solid", "fa-caret-left"], [1, "col-1"], ["type", "primary", "height", "5px", 3, "click", "title", "value", "max"], ["aria-hidden", "true", 1, "fa-solid", "fa-caret-right"], [3, "colorThemeUpdate", "styleUpdate", "clickToPaginateChanged", "fullscreen", "bookReaderWritingStyle", "layoutModeUpdate", "readingDirection", "immersiveMode"], [3, "loadChapter", "chapters", "chapterId", "pageNum", "currentPageAnchor"], [3, "loadChapter", "chapterId", "pageNum", "tocRefresh"], ["tabindex", "-1", 3, "click", "ngClass", "ngStyle"], [3, "click", "mousedown", "wheel", "ngStyle", "ngClass", "innerHtml"], [3, "click", "ngClass"], ["class", "action-bar row g-0 justify-content-between", 4, "ngIf"], [1, "action-bar", "row", "g-0", "justify-content-between"], [1, "btn", "btn-outline-secondary", "btn-icon", "col-2", "col-xs-1", 3, "click", "disabled", "title"], ["aria-hidden", "true"], ["class", "btn btn-outline-secondary btn-icon col-2 col-xs-1", 3, "title", "click", 4, "ngIf"], [1, "btn", "btn-secondary", "col-2", "col-xs-1", 3, "click"], ["aria-hidden", "true", 1, "fa", "fa-bars"], [1, "book-title", "col-2", "d-none", "d-sm-block"], ["role", "status", 1, "spinner-border", "spinner-border-sm", "text-primary", 2, "border-radius", "50%"], ["aria-hidden", "true", 1, "fa", "fa-times-circle"], [1, "btn", "btn-outline-secondary", "btn-icon", "col-2", "col-xs-1", 3, "click", "title"], ["aria-hidden", "true", 1, "fa", "fa-reply"], [1, "visually-hidden"], ["role", "button", 3, "click", 4, "ngIf"], [1, "book-title-text", "ms-1", 3, "ngbTooltip"], ["role", "button", 3, "click"], ["aria-hidden", "true", 1, "fa", "fa-glasses"]], template: function BookReaderComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 9, 0);
        \u0275\u0275template(2, BookReaderComponent_ng_container_2_Template, 52, 50, "ng-container", 10);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275classMapInterpolate3("container-flex ", ctx.darkMode ? "dark-mode" : "", " reader-container ", ctx.ColumnLayout, " ", ctx.WritingStyleClass, "");
        \u0275\u0275advance(2);
        \u0275\u0275property("translocoRead", "book-reader");
      }
    }, dependencies: [
      NgTemplateOutlet,
      DrawerComponent,
      NgIf,
      NgbProgressbar,
      NgbNav,
      NgbNavItem,
      NgbNavItemRole,
      NgbNavLink,
      NgbNavContent,
      ReaderSettingsComponent,
      TableOfContentsComponent,
      NgbNavOutlet,
      NgStyle,
      NgClass,
      NgbTooltip,
      BookLineOverlayComponent,
      PersonalTableOfContentsComponent,
      TranslocoDirective
    ], styles: ['\n\n@font-face {\n  font-family: "Fira_Sans";\n  src: url("./media/FiraSans-Regular.woff2") format("woff2");\n  font-display: swap;\n}\n@font-face {\n  font-family: "Lato";\n  src: url("./media/Lato-Regular.woff2") format("woff2");\n  font-display: swap;\n}\n@font-face {\n  font-family: "Libre_Baskerville";\n  src: url("./media/LibreBaskerville-Regular.woff2") format("woff2");\n  font-display: swap;\n}\n@font-face {\n  font-family: "Merriweather";\n  src: url("./media/Merriweather-Regular.woff2") format("woff2");\n  font-display: swap;\n}\n@font-face {\n  font-family: "Nanum_Gothic";\n  src: url("./media/NanumGothic-Regular.woff2") format("woff2");\n  font-display: swap;\n}\n@font-face {\n  font-family: "RocknRoll_One";\n  src: url("./media/RocknRollOne-Regular.woff2") format("woff2");\n  font-display: swap;\n}\n@font-face {\n  font-family: "OpenDyslexic2";\n  src: url("./media/OpenDyslexic-Regular.woff2") format("woff2");\n  font-display: swap;\n}\n@font-face {\n  font-family: "FastFontSerif";\n  src: url("./media/Fast_Serif.woff2") format("woff2");\n  font-display: swap;\n}\n@font-face {\n  font-family: "FastFontSans";\n  src: url("./media/Fast_Sans.woff2") format("woff2");\n  font-display: swap;\n}\n[_ngcontent-%COMP%]:root {\n  --br-actionbar-button-text-color: #6c757d;\n  --accordion-body-bg-color: black;\n  --accordion-header-bg-color: grey;\n  --br-actionbar-button-hover-border-color: #6c757d;\n  --br-actionbar-bg-color: white;\n  --default-state-scrollbar: var(--primary-color-scrollbar);\n}\n.reader-container[_ngcontent-%COMP%]::-webkit-scrollbar {\n  background-color: transparent;\n  width: inherit;\n}\n.reader-container[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background-color: var(--default-state-scrollbar);\n}\n.reader-container[_ngcontent-%COMP%]:hover::-webkit-scrollbar-thumb {\n  background-color: var(--primary-color-scrollbar);\n}\n.control-container[_ngcontent-%COMP%] {\n  padding-bottom: 5px;\n}\n.page-stub[_ngcontent-%COMP%] {\n  margin-top: 6px;\n  padding-left: 2px;\n  padding-right: 2px;\n}\n.drawer-body[_ngcontent-%COMP%] {\n  overflow: auto;\n}\n.drawer-body[_ngcontent-%COMP%]   .reader-pills[_ngcontent-%COMP%] {\n  justify-content: center;\n  margin: 0 0.25rem;\n}\n.drawer-body[_ngcontent-%COMP%]   .reader-pills[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  border: 1px solid var(--primary-color);\n  margin: 0 0.25rem;\n}\n.drawer-body[_ngcontent-%COMP%]   .reader-pills[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%] {\n  border: unset;\n}\n.fixed-top[_ngcontent-%COMP%] {\n  z-index: 1022;\n  direction: ltr;\n}\n.dark-mode[_ngcontent-%COMP%]   .overlay[_ngcontent-%COMP%] {\n  opacity: 0;\n}\n.action-bar[_ngcontent-%COMP%] {\n  background-color: var(--br-actionbar-bg-color);\n  overflow: hidden;\n  box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.7);\n  max-height: 38px;\n  height: 38px;\n}\n.action-bar[_ngcontent-%COMP%]   .book-title-text[_ngcontent-%COMP%] {\n  text-align: center;\n  text-overflow: ellipsis;\n  display: -webkit-box;\n  -webkit-line-clamp: 1;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n}\n@media (max-width: 875px) {\n  .action-bar[_ngcontent-%COMP%]   .book-title[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n.action-bar[_ngcontent-%COMP%]   .book-title[_ngcontent-%COMP%] {\n  margin-top: 10px;\n  text-align: center;\n  text-transform: capitalize;\n  max-height: inherit;\n}\n.action-bar[_ngcontent-%COMP%]   .next-page-highlight[_ngcontent-%COMP%] {\n  color: var(--primary-color);\n}\n.reader-container[_ngcontent-%COMP%] {\n  outline: none;\n  overflow: auto;\n  height: calc(var(--vh, 1vh) * 100);\n  position: relative;\n}\n.reader-container.column-layout-1[_ngcontent-%COMP%] {\n  height: calc(var(--vh) * 100);\n}\n.reader-container.column-layout-2[_ngcontent-%COMP%] {\n  height: calc(var(--vh) * 100);\n}\n.reader-container.writing-style-vertical[_ngcontent-%COMP%] {\n  direction: rtl;\n}\n.reading-section[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100vh;\n  padding-top: 38px;\n  padding-bottom: 38px;\n  position: relative;\n  direction: ltr;\n}\n.reading-section.column-layout-1[_ngcontent-%COMP%] {\n  height: calc(var(--vh, 1vh) * 100 - 38px);\n}\n.reading-section.column-layout-2[_ngcontent-%COMP%] {\n  height: calc(var(--vh, 1vh) * 100 - 38px);\n}\n.reading-section.immersive[_ngcontent-%COMP%] {\n  height: calc(var(--vh, 1vh) * 100);\n}\n.reading-section.writing-style-vertical[_ngcontent-%COMP%] {\n  writing-mode: vertical-rl;\n  height: 100%;\n}\n.book-container[_ngcontent-%COMP%] {\n  position: relative;\n  height: 100%;\n}\n.book-container.column-layout-1[_ngcontent-%COMP%] {\n  height: calc(var(--vh, 1vh) * 100 - 38px);\n}\n.book-container.column-layout-2[_ngcontent-%COMP%] {\n  height: calc(var(--vh, 1vh) * 100 - 38px);\n}\n.book-container.writing-style-vertical[_ngcontent-%COMP%] {\n  overflow: auto;\n}\n.book-content[_ngcontent-%COMP%] {\n  position: relative;\n  margin: 0 0;\n  padding: 20px 0px;\n  background-color: var(--brtheme-bg-color);\n}\n.book-content.column-layout-1[_ngcontent-%COMP%] {\n  height: calc(var(--vh) * 100 - 38px);\n}\n.book-content.column-layout-1.writing-style-vertical[_ngcontent-%COMP%] {\n  padding: 0 10px 0 0;\n  margin: 20px 0;\n}\n.book-content.column-layout-2[_ngcontent-%COMP%] {\n  height: calc(var(--vh) * 100 - 38px);\n}\n.book-content.column-layout-2.writing-style-vertical[_ngcontent-%COMP%] {\n  padding: 0 10px 0 0;\n  margin: 20px 0;\n}\n.book-content.writing-style-vertical[_ngcontent-%COMP%] {\n  height: auto;\n}\n.book-content[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], \n.book-content[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:link {\n  color: var(--brtheme-link-text-color);\n}\n.pagination-cont[_ngcontent-%COMP%] {\n  background: var(--br-actionbar-bg-color);\n  border-radius: 5px;\n  padding: 5px 15px;\n  margin: 0 0 5px;\n  border: var(--drawer-pagination-border);\n}\n.virt-pagination-cont[_ngcontent-%COMP%] {\n  padding-bottom: 5px;\n  margin-bottom: 5px;\n  box-shadow: var(--drawer-pagination-horizontal-rule);\n}\n.bottom-bar[_ngcontent-%COMP%] {\n  position: fixed;\n  width: 100%;\n  bottom: 0px;\n  left: 0px;\n  writing-mode: horizontal-tb;\n}\n.column-layout-1[_ngcontent-%COMP%]   .book-content[_ngcontent-%COMP%] {\n  column-count: 1;\n  column-gap: 20px;\n  overflow: hidden;\n  word-break: break-word;\n  overflow-wrap: break-word;\n}\n.column-layout-2[_ngcontent-%COMP%]   .book-content[_ngcontent-%COMP%] {\n  column-count: 2;\n  column-gap: 20px;\n  overflow: hidden;\n  word-break: break-word;\n  overflow-wrap: break-word;\n}\n  .book-content a, \n  .book-content :link {\n  color: blue;\n}\n  .kavita-scale-width-container {\n  width: auto;\n  max-height: calc(var(--book-reader-content-max-height) - 38px) !important;\n  max-width: calc(var(--book-reader-content-max-width)) !important;\n  position: var(--book-reader-content-position) !important;\n  top: var(--book-reader-content-top) !important;\n  left: var(--book-reader-content-left) !important;\n  transform: var(--book-reader-content-transform) !important;\n}\n  .kavita-scale-width {\n  max-height: calc(var(--book-reader-content-max-height) - 38px) !important;\n  max-width: calc(var(--book-reader-content-max-width)) !important;\n  object-fit: contain;\n  object-position: top center;\n  break-inside: avoid;\n  break-before: column;\n  max-height: 100vh;\n}\n.icon-primary-color[_ngcontent-%COMP%] {\n  color: #0062cc;\n}\n.right[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 0px;\n  top: 38px;\n  width: 20vw;\n  z-index: 3;\n  background: transparent;\n  border-color: transparent;\n  border: none !important;\n  opacity: 0;\n  outline: none;\n}\n.right.immersive[_ngcontent-%COMP%] {\n  top: 0px;\n}\n.right.no-pointer-events[_ngcontent-%COMP%] {\n  pointer-events: none;\n}\n.right-with-scrollbar[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 17px;\n  top: 38px;\n  width: 18%;\n  z-index: 3;\n  background: transparent;\n  opacity: 0;\n  border-color: transparent;\n  border: none !important;\n  outline: none;\n  cursor: pointer;\n}\n.right-with-scrollbar.immersive[_ngcontent-%COMP%] {\n  top: 0px;\n}\n.left[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 0px;\n  top: 38px;\n  width: 20vw;\n  background: transparent;\n  opacity: 0;\n  border-color: transparent;\n  border: none !important;\n  z-index: 3;\n  outline: none;\n  height: 100vw;\n  cursor: pointer;\n}\n.left.immersive[_ngcontent-%COMP%] {\n  top: 0px;\n}\n.highlight[_ngcontent-%COMP%] {\n  background-color: rgba(65, 225, 100, 0.5) !important;\n  animation: fadein 0.5s both;\n}\n.highlight-2[_ngcontent-%COMP%] {\n  background-color: rgba(65, 105, 225, 0.5) !important;\n  animation: fadein 0.5s both;\n}\n.btn.btn-secondary[_ngcontent-%COMP%] {\n  color: var(--br-actionbar-button-text-color);\n  border-color: transparent;\n  background-color: unset;\n}\n.btn.btn-secondary[_ngcontent-%COMP%]:hover, \n.btn.btn-secondary[_ngcontent-%COMP%]:focus {\n  border-color: var(--br-actionbar-button-hover-border-color);\n}\n.btn.btn-outline-secondary[_ngcontent-%COMP%] {\n  border-color: transparent;\n  background-color: unset;\n}\n.btn.btn-outline-secondary[_ngcontent-%COMP%]:hover, \n.btn.btn-outline-secondary[_ngcontent-%COMP%]:focus {\n  border-color: var(--br-actionbar-button-hover-border-color);\n}\n.btn[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  background-color: unset;\n  color: var(--br-actionbar-button-text-color);\n}\n.btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  background-color: unset;\n  color: var(--br-actionbar-button-text-color);\n}\n.btn[_ngcontent-%COMP%]:active   *[_ngcontent-%COMP%] {\n  color: white;\n}\n/*# sourceMappingURL=book-reader.component.css.map */'], data: { animation: [
      trigger("isLoading", [
        state("false", style({ opacity: 1 })),
        state("true", style({ opacity: 0 })),
        transition("false <=> true", animate("200ms"))
      ]),
      trigger("fade", [
        state("true", style({ opacity: 0 })),
        state("false", style({ opacity: 0.5 })),
        transition("false <=> true", animate("4000ms"))
      ])
    ] }, changeDetection: 0 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(BookReaderComponent, { className: "BookReaderComponent", filePath: "src/app/book-reader/_components/book-reader/book-reader.component.ts", lineNumber: 120 });
})();

// src/app/_routes/book-reader.router.module.ts
var routes = [
  {
    path: ":chapterId",
    component: BookReaderComponent
  }
];
export {
  routes
};
//# sourceMappingURL=book-reader.router.module-MXNPFDVD.js.map
