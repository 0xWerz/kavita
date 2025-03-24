import {
  EntityTitleComponent
} from "./chunk-OCFISI54.js";
import {
  ReadTimePipe
} from "./chunk-SXNBP4JN.js";
import {
  CompactNumberPipe
} from "./chunk-AFXXYIIH.js";
import {
  SeriesFormatComponent
} from "./chunk-FAULLNLJ.js";
import {
  FilterUtilitiesService
} from "./chunk-SBBWMOEE.js";
import {
  TypeaheadComponent,
  TypeaheadSettings
} from "./chunk-Y273F7VW.js";
import {
  ActionService,
  ChapterService,
  CoverImageChooserComponent,
  UploadService
} from "./chunk-HTPJQXUV.js";
import {
  ReaderService
} from "./chunk-D2FQ65JS.js";
import {
  SettingButtonComponent
} from "./chunk-4AQVNEIP.js";
import {
  DefaultDatePipe
} from "./chunk-DMXJBIB5.js";
import {
  SentenceCasePipe
} from "./chunk-IQIEDCQT.js";
import {
  DownloadService
} from "./chunk-CVI764VQ.js";
import {
  BytesPipe
} from "./chunk-C423WP7Y.js";
import {
  UtcToLocalTimePipe
} from "./chunk-2L2JQBKQ.js";
import {
  ColumnMode,
  NgxDatatableModule
} from "./chunk-AZB3LZ7Q.js";
import {
  ImageComponent
} from "./chunk-2JLAQ3MZ.js";
import {
  ImageService
} from "./chunk-TPURWX2Y.js";
import {
  AgeRatingPipe
} from "./chunk-PC4EXHMG.js";
import {
  AgeRating
} from "./chunk-6KPMHNEU.js";
import {
  FilterComparison,
  FilterField,
  MetadataService,
  PersonRole
} from "./chunk-IBO6ECG5.js";
import {
  SettingItemComponent
} from "./chunk-KJWRNOWO.js";
import {
  Breakpoint,
  LibraryType,
  UtilityService
} from "./chunk-A6JEQ5GB.js";
import {
  MangaFormat
} from "./chunk-RSMGJKYW.js";
import {
  AccountService,
  Action,
  ActionFactoryService,
  Router
} from "./chunk-U2DWQJI2.js";
import {
  NgbActiveModal,
  NgbNav,
  NgbNavContent,
  NgbNavItem,
  NgbNavLink,
  NgbNavOutlet,
  NgbProgressbar,
  NgbTooltip
} from "./chunk-2R2RCU4Y.js";
import {
  SafeHtmlPipe
} from "./chunk-FLGYJHAG.js";
import {
  DefaultValueAccessor,
  FormBuilder,
  FormControl,
  FormControlName,
  FormGroup,
  FormGroupDirective,
  FormsModule,
  MinValidator,
  NgControlStatus,
  NgControlStatusGroup,
  NgSelectOption,
  NumberValueAccessor,
  ReactiveFormsModule,
  SelectControlValueAccessor,
  Validators,
  ɵNgNoValidate,
  ɵNgSelectMultipleOption
} from "./chunk-BPOUBDX2.js";
import {
  AsyncPipe,
  ChangeDetectorRef,
  DecimalPipe,
  DestroyRef,
  EventEmitter,
  NgClass,
  NgTemplateOutlet,
  TitleCasePipe,
  TranslocoDirective,
  TranslocoService,
  __async,
  forkJoin,
  inject,
  map,
  of,
  shareReplay,
  switchMap,
  takeUntilDestroyed,
  tap,
  ɵsetClassDebugInfo,
  ɵɵNgOnChangesFeature,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMapInterpolate1,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵdefinePipe,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainer,
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
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-PYHIUVNJ.js";

// src/app/cards/edit-chapter-progress/edit-chapter-progress.component.ts
function EditChapterProgressComponent_ng_container_0_For_14_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "input", 4);
  }
}
function EditChapterProgressComponent_ng_container_0_For_14_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const \u0275$index_25_r2 = \u0275\u0275nextContext().$index;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275textInterpolate1(" ", ctx_r2.progressEvents[\u0275$index_25_r2].pagesRead, " ");
  }
}
function EditChapterProgressComponent_ng_container_0_For_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 3);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "sentenceCase");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "td");
    \u0275\u0275template(5, EditChapterProgressComponent_ng_container_0_For_14_Conditional_5_Template, 1, 0, "input", 4)(6, EditChapterProgressComponent_ng_container_0_For_14_Conditional_6_Template, 1, 1);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td");
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "utcToLocalTime");
    \u0275\u0275pipe(10, "defaultDate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "td");
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "utcToLocalTime");
    \u0275\u0275pipe(14, "defaultDate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const \u0275$index_25_r2 = ctx.$index;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275propertyInterpolate1("id", "progress-event--", \u0275$index_25_r2, "");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 6, ctx_r2.progressEvents[\u0275$index_25_r2].userName), " ");
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r2.editMode[\u0275$index_25_r2] ? 5 : 6);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(10, 11, \u0275\u0275pipeBind2(9, 8, ctx_r2.progressEvents[\u0275$index_25_r2].createdUtc, "shortDate")), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(14, 16, \u0275\u0275pipeBind2(13, 13, ctx_r2.progressEvents[\u0275$index_25_r2].lastModifiedUtc, "shortDate")), " ");
  }
}
function EditChapterProgressComponent_ng_container_0_ForEmpty_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 5);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const t_r1 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r1("no-data"));
  }
}
function EditChapterProgressComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "table", 1)(2, "thead")(3, "tr")(4, "th", 2);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "th", 2);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th", 2);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th", 2);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(12, "tbody");
    \u0275\u0275repeaterCreate(13, EditChapterProgressComponent_ng_container_0_For_14_Template, 15, 18, "tr", null, \u0275\u0275repeaterTrackByIdentity, false, EditChapterProgressComponent_ng_container_0_ForEmpty_15_Template, 3, 1, "tr");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const t_r1 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("formGroup", ctx_r2.formGroup);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(t_r1("user-header"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r1("page-read-header"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r1("date-created-header"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r1("date-updated-header"));
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r2.items.controls);
  }
}
var EditChapterProgressComponent = class _EditChapterProgressComponent {
  constructor() {
    this.readerService = inject(ReaderService);
    this.cdRef = inject(ChangeDetectorRef);
    this.fb = inject(FormBuilder);
    this.progressEvents = [];
    this.editMode = {};
    this.formGroup = this.fb.group({
      items: this.fb.array([])
    });
    this.ColumnMode = ColumnMode;
  }
  get items() {
    return this.formGroup.get("items");
  }
  ngOnInit() {
    this.readerService.getAllProgressForChapter(this.chapter.id).subscribe((res) => {
      this.progressEvents = res;
      this.progressEvents.forEach((v, i) => {
        this.editMode[i] = false;
        this.items.push(this.createRowForm(v));
      });
      this.cdRef.markForCheck();
    });
  }
  createRowForm(progress) {
    return this.fb.group({
      pagesRead: [progress.pagesRead, [Validators.required, Validators.min(0), Validators.max(this.chapter.pages)]],
      created: [progress.createdUtc, [Validators.required]],
      lastModified: [progress.lastModifiedUtc, [Validators.required]]
    });
  }
  edit(progress, idx) {
    this.editMode[idx] = !this.editMode[idx];
    this.cdRef.markForCheck();
  }
  save(progress, idx) {
    this.editMode[idx] = !this.editMode[idx];
    this.cdRef.markForCheck();
  }
  static {
    this.\u0275fac = function EditChapterProgressComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _EditChapterProgressComponent)();
    };
  }
  static {
    this.\u0275cmp = \u0275\u0275defineComponent({ type: _EditChapterProgressComponent, selectors: [["app-edit-chapter-progress"]], inputs: { chapter: "chapter" }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 1, vars: 1, consts: [[4, "transloco", "translocoRead"], [1, "table", "table-striped", 3, "formGroup"], ["scope", "col"], [3, "id"], ["type", "number", "formControlName", "pagesRead", "inputmode", "numeric", 1, "form-control"], ["colspan", "6", 2, "text-align", "center"]], template: function EditChapterProgressComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, EditChapterProgressComponent_ng_container_0_Template, 16, 6, "ng-container", 0);
      }
      if (rf & 2) {
        \u0275\u0275property("translocoRead", "edit-chapter-progress");
      }
    }, dependencies: [
      UtcToLocalTimePipe,
      TranslocoDirective,
      ReactiveFormsModule,
      DefaultValueAccessor,
      NumberValueAccessor,
      NgControlStatus,
      NgControlStatusGroup,
      FormGroupDirective,
      FormControlName,
      SentenceCasePipe,
      DefaultDatePipe,
      NgxDatatableModule
    ], changeDetection: 0 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(EditChapterProgressComponent, { className: "EditChapterProgressComponent", filePath: "src/app/cards/edit-chapter-progress/edit-chapter-progress.component.ts", lineNumber: 34 });
})();

// src/app/_single-module/edit-chapter-modal/edit-chapter-modal.component.ts
var _forTrack0 = ($index, $item) => $item.value;
var _forTrack1 = ($index, $item) => $item.id;
var _forTrack2 = ($index, $item) => $item.action;
var _c0 = (a0) => ({ "d-flex": a0 });
var _c1 = (a0) => ({ "lock-active": a0 });
var _c2 = (a0) => ({ item: a0, field: "titleNameLocked" });
var _c3 = (a0) => ({ item: a0, field: "sortOrderLocked" });
var _c4 = (a0) => ({ item: a0, field: "isbnLocked" });
var _c5 = (a0) => ({ item: a0, field: "ageRatingLocked" });
var _c6 = (a0) => ({ item: a0, field: "releaseDateLocked" });
var _c7 = (a0) => ({ item: a0, field: "summaryLocked" });
var _c8 = (a0) => ({ num: a0 });
function EditChapterModalComponent_ng_container_0_Conditional_11_ng_template_3_ng_template_3_Conditional_0_Conditional_3_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r3 = \u0275\u0275nextContext(6).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(t_r3("required-field"));
  }
}
function EditChapterModalComponent_ng_container_0_Conditional_11_ng_template_3_ng_template_3_Conditional_0_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 33);
    \u0275\u0275template(1, EditChapterModalComponent_ng_container_0_Conditional_11_ng_template_3_ng_template_3_Conditional_0_Conditional_3_Conditional_1_Template, 2, 1, "div");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.required ? 1 : -1);
  }
}
function EditChapterModalComponent_ng_container_0_Conditional_11_ng_template_3_ng_template_3_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 30);
    \u0275\u0275elementContainer(1, 31);
    \u0275\u0275element(2, "input", 32);
    \u0275\u0275template(3, EditChapterModalComponent_ng_container_0_Conditional_11_ng_template_3_ng_template_3_Conditional_0_Conditional_3_Template, 2, 1, "div", 33);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_20_0;
    const formControl_r4 = ctx;
    \u0275\u0275nextContext(4);
    const lock_r5 = \u0275\u0275reference(34);
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(6, _c1, ctx_r1.chapter.titleNameLocked));
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", lock_r5)("ngTemplateOutletContext", \u0275\u0275pureFunction1(8, _c2, ctx_r1.chapter));
    \u0275\u0275advance();
    \u0275\u0275classProp("is-invalid", formControl_r4.invalid && !formControl_r4.untouched);
    \u0275\u0275advance();
    \u0275\u0275conditional((tmp_20_0 = formControl_r4.errors) ? 3 : -1, tmp_20_0);
  }
}
function EditChapterModalComponent_ng_container_0_Conditional_11_ng_template_3_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, EditChapterModalComponent_ng_container_0_Conditional_11_ng_template_3_ng_template_3_Conditional_0_Template, 4, 10, "div", 30);
  }
  if (rf & 2) {
    let tmp_14_0;
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275conditional((tmp_14_0 = ctx_r1.editForm.get("titleName")) ? 0 : -1, tmp_14_0);
  }
}
function EditChapterModalComponent_ng_container_0_Conditional_11_ng_template_3_ng_template_7_Conditional_0_Conditional_3_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r3 = \u0275\u0275nextContext(6).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(t_r3("required-field"));
  }
}
function EditChapterModalComponent_ng_container_0_Conditional_11_ng_template_3_ng_template_7_Conditional_0_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 33);
    \u0275\u0275template(1, EditChapterModalComponent_ng_container_0_Conditional_11_ng_template_3_ng_template_7_Conditional_0_Conditional_3_Conditional_1_Template, 2, 1, "div");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.required ? 1 : -1);
  }
}
function EditChapterModalComponent_ng_container_0_Conditional_11_ng_template_3_ng_template_7_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 30);
    \u0275\u0275elementContainer(1, 31);
    \u0275\u0275element(2, "input", 34);
    \u0275\u0275template(3, EditChapterModalComponent_ng_container_0_Conditional_11_ng_template_3_ng_template_7_Conditional_0_Conditional_3_Template, 2, 1, "div", 33);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_20_0;
    const formControl_r6 = ctx;
    \u0275\u0275nextContext(4);
    const lock_r5 = \u0275\u0275reference(34);
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(6, _c1, ctx_r1.chapter.sortOrderLocked));
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", lock_r5)("ngTemplateOutletContext", \u0275\u0275pureFunction1(8, _c3, ctx_r1.chapter));
    \u0275\u0275advance();
    \u0275\u0275classProp("is-invalid", formControl_r6.invalid && !formControl_r6.untouched);
    \u0275\u0275advance();
    \u0275\u0275conditional((tmp_20_0 = formControl_r6.errors) ? 3 : -1, tmp_20_0);
  }
}
function EditChapterModalComponent_ng_container_0_Conditional_11_ng_template_3_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, EditChapterModalComponent_ng_container_0_Conditional_11_ng_template_3_ng_template_7_Conditional_0_Template, 4, 10, "div", 30);
  }
  if (rf & 2) {
    let tmp_14_0;
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275conditional((tmp_14_0 = ctx_r1.editForm.get("sortOrder")) ? 0 : -1, tmp_14_0);
  }
}
function EditChapterModalComponent_ng_container_0_Conditional_11_ng_template_3_ng_template_12_Conditional_0_Conditional_3_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r3 = \u0275\u0275nextContext(6).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(t_r3("required-field"));
  }
}
function EditChapterModalComponent_ng_container_0_Conditional_11_ng_template_3_ng_template_12_Conditional_0_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 33);
    \u0275\u0275template(1, EditChapterModalComponent_ng_container_0_Conditional_11_ng_template_3_ng_template_12_Conditional_0_Conditional_3_Conditional_1_Template, 2, 1, "div");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.required ? 1 : -1);
  }
}
function EditChapterModalComponent_ng_container_0_Conditional_11_ng_template_3_ng_template_12_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 30);
    \u0275\u0275elementContainer(1, 31);
    \u0275\u0275element(2, "input", 35);
    \u0275\u0275template(3, EditChapterModalComponent_ng_container_0_Conditional_11_ng_template_3_ng_template_12_Conditional_0_Conditional_3_Template, 2, 1, "div", 33);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_20_0;
    const formControl_r7 = ctx;
    \u0275\u0275nextContext(4);
    const lock_r5 = \u0275\u0275reference(34);
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(6, _c1, ctx_r1.chapter.isbnLocked));
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", lock_r5)("ngTemplateOutletContext", \u0275\u0275pureFunction1(8, _c4, ctx_r1.chapter));
    \u0275\u0275advance();
    \u0275\u0275classProp("is-invalid", formControl_r7.invalid && !formControl_r7.untouched);
    \u0275\u0275advance();
    \u0275\u0275conditional((tmp_20_0 = formControl_r7.errors) ? 3 : -1, tmp_20_0);
  }
}
function EditChapterModalComponent_ng_container_0_Conditional_11_ng_template_3_ng_template_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, EditChapterModalComponent_ng_container_0_Conditional_11_ng_template_3_ng_template_12_Conditional_0_Template, 4, 10, "div", 30);
  }
  if (rf & 2) {
    let tmp_14_0;
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275conditional((tmp_14_0 = ctx_r1.editForm.get("isbn")) ? 0 : -1, tmp_14_0);
  }
}
function EditChapterModalComponent_ng_container_0_Conditional_11_ng_template_3_ng_template_16_Conditional_0_For_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 37);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "titlecase");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const opt_r8 = ctx.$implicit;
    \u0275\u0275property("value", opt_r8.value);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 2, opt_r8.title));
  }
}
function EditChapterModalComponent_ng_container_0_Conditional_11_ng_template_3_ng_template_16_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 30);
    \u0275\u0275elementContainer(1, 31);
    \u0275\u0275elementStart(2, "select", 36);
    \u0275\u0275repeaterCreate(3, EditChapterModalComponent_ng_container_0_Conditional_11_ng_template_3_ng_template_16_Conditional_0_For_4_Template, 3, 4, "option", 37, _forTrack0);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275nextContext(4);
    const lock_r5 = \u0275\u0275reference(34);
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(3, _c1, ctx_r1.chapter.ageRatingLocked));
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", lock_r5)("ngTemplateOutletContext", \u0275\u0275pureFunction1(5, _c5, ctx_r1.chapter));
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r1.ageRatings);
  }
}
function EditChapterModalComponent_ng_container_0_Conditional_11_ng_template_3_ng_template_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, EditChapterModalComponent_ng_container_0_Conditional_11_ng_template_3_ng_template_16_Conditional_0_Template, 5, 7, "div", 30);
  }
  if (rf & 2) {
    let tmp_14_0;
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275conditional((tmp_14_0 = ctx_r1.editForm.get("ageRating")) ? 0 : -1, tmp_14_0);
  }
}
function EditChapterModalComponent_ng_container_0_Conditional_11_ng_template_3_ng_template_22_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const item_r10 = ctx.$implicit;
    \u0275\u0275textInterpolate1(" ", item_r10.title, " ");
  }
}
function EditChapterModalComponent_ng_container_0_Conditional_11_ng_template_3_ng_template_22_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const item_r11 = ctx.$implicit;
    \u0275\u0275textInterpolate2(" ", item_r11.title, " (", item_r11.isoCode, ") ");
  }
}
function EditChapterModalComponent_ng_container_0_Conditional_11_ng_template_3_ng_template_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-typeahead", 38);
    \u0275\u0275listener("selectedData", function EditChapterModalComponent_ng_container_0_Conditional_11_ng_template_3_ng_template_22_Template_app_typeahead_selectedData_0_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.updateLanguage($event));
    });
    \u0275\u0275twoWayListener("lockedChange", function EditChapterModalComponent_ng_container_0_Conditional_11_ng_template_3_ng_template_22_Template_app_typeahead_lockedChange_0_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext(4);
      \u0275\u0275twoWayBindingSet(ctx_r1.chapter.languageLocked, $event) || (ctx_r1.chapter.languageLocked = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("onUnlock", function EditChapterModalComponent_ng_container_0_Conditional_11_ng_template_3_ng_template_22_Template_app_typeahead_onUnlock_0_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.chapter.languageLocked = false);
    })("newItemAdded", function EditChapterModalComponent_ng_container_0_Conditional_11_ng_template_3_ng_template_22_Template_app_typeahead_newItemAdded_0_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.chapter.languageLocked = true);
    });
    \u0275\u0275template(1, EditChapterModalComponent_ng_container_0_Conditional_11_ng_template_3_ng_template_22_ng_template_1_Template, 1, 1, "ng-template", null, 3, \u0275\u0275templateRefExtractor)(3, EditChapterModalComponent_ng_container_0_Conditional_11_ng_template_3_ng_template_22_ng_template_3_Template, 1, 2, "ng-template", null, 4, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275property("settings", ctx_r1.languageSettings);
    \u0275\u0275twoWayProperty("locked", ctx_r1.chapter.languageLocked);
  }
}
function EditChapterModalComponent_ng_container_0_Conditional_11_ng_template_3_ng_template_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 30);
    \u0275\u0275elementContainer(1, 31);
    \u0275\u0275element(2, "input", 39);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275nextContext(3);
    const lock_r5 = \u0275\u0275reference(34);
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(3, _c1, ctx_r1.chapter.releaseDateLocked));
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", lock_r5)("ngTemplateOutletContext", \u0275\u0275pureFunction1(5, _c6, ctx_r1.chapter));
  }
}
function EditChapterModalComponent_ng_container_0_Conditional_11_ng_template_3_ng_template_32_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 30);
    \u0275\u0275elementContainer(1, 31);
    \u0275\u0275element(2, "textarea", 40);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275nextContext(4);
    const lock_r5 = \u0275\u0275reference(34);
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(3, _c1, ctx_r1.chapter.summaryLocked));
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", lock_r5)("ngTemplateOutletContext", \u0275\u0275pureFunction1(5, _c7, ctx_r1.chapter));
  }
}
function EditChapterModalComponent_ng_container_0_Conditional_11_ng_template_3_ng_template_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, EditChapterModalComponent_ng_container_0_Conditional_11_ng_template_3_ng_template_32_Conditional_0_Template, 3, 7, "div", 30);
  }
  if (rf & 2) {
    let tmp_14_0;
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275conditional((tmp_14_0 = ctx_r1.editForm.get("summary")) ? 0 : -1, tmp_14_0);
  }
}
function EditChapterModalComponent_ng_container_0_Conditional_11_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 21)(1, "div", 22)(2, "app-setting-item", 23);
    \u0275\u0275template(3, EditChapterModalComponent_ng_container_0_Conditional_11_ng_template_3_ng_template_3_Template, 1, 1, "ng-template", null, 2, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 24)(6, "app-setting-item", 23);
    \u0275\u0275template(7, EditChapterModalComponent_ng_container_0_Conditional_11_ng_template_3_ng_template_7_Template, 1, 1, "ng-template", null, 2, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(9, "div", 21)(10, "div", 22)(11, "app-setting-item", 23);
    \u0275\u0275template(12, EditChapterModalComponent_ng_container_0_Conditional_11_ng_template_3_ng_template_12_Template, 1, 1, "ng-template", null, 2, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "div", 24)(15, "app-setting-item", 23);
    \u0275\u0275template(16, EditChapterModalComponent_ng_container_0_Conditional_11_ng_template_3_ng_template_16_Template, 1, 1, "ng-template", null, 2, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(18, "div", 21)(19, "div", 25)(20, "div", 26)(21, "app-setting-item", 27);
    \u0275\u0275template(22, EditChapterModalComponent_ng_container_0_Conditional_11_ng_template_3_ng_template_22_Template, 5, 2, "ng-template", null, 2, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(24, "div", 28)(25, "div", 26)(26, "app-setting-item", 27);
    \u0275\u0275template(27, EditChapterModalComponent_ng_container_0_Conditional_11_ng_template_3_ng_template_27_Template, 3, 7, "ng-template", null, 2, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(29, "div", 21)(30, "div", 29)(31, "app-setting-item", 23);
    \u0275\u0275template(32, EditChapterModalComponent_ng_container_0_Conditional_11_ng_template_3_ng_template_32_Template, 1, 1, "ng-template", null, 2, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const t_r3 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275property("title", t_r3("title-label"))("showEdit", false)("toggleOnViewClick", false);
    \u0275\u0275advance(4);
    \u0275\u0275property("title", t_r3("sort-order-label"))("showEdit", false)("toggleOnViewClick", false);
    \u0275\u0275advance(5);
    \u0275\u0275property("title", t_r3("isbn-label"))("showEdit", false)("toggleOnViewClick", false);
    \u0275\u0275advance(4);
    \u0275\u0275property("title", t_r3("age-rating-label"))("showEdit", false)("toggleOnViewClick", false);
    \u0275\u0275advance(6);
    \u0275\u0275property("title", t_r3("language-label"))("toggleOnViewClick", false)("showEdit", false);
    \u0275\u0275advance(5);
    \u0275\u0275property("title", t_r3("release-date-label"))("toggleOnViewClick", false)("showEdit", false);
    \u0275\u0275advance(5);
    \u0275\u0275property("title", t_r3("summary-label"))("showEdit", false)("toggleOnViewClick", false);
  }
}
function EditChapterModalComponent_ng_container_0_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 14)(1, "a", 15);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, EditChapterModalComponent_ng_container_0_Conditional_11_ng_template_3_Template, 34, 21, "ng-template", 16);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r3 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("ngbNavItem", ctx_r1.TabID.General);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r3(ctx_r1.TabID.General));
  }
}
function EditChapterModalComponent_ng_container_0_Conditional_12_ng_template_3_ng_template_4_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const item_r13 = ctx.$implicit;
    \u0275\u0275textInterpolate1(" ", item_r13.title, " ");
  }
}
function EditChapterModalComponent_ng_container_0_Conditional_12_ng_template_3_ng_template_4_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const item_r14 = ctx.$implicit;
    \u0275\u0275textInterpolate1(" ", item_r14.title, " ");
  }
}
function EditChapterModalComponent_ng_container_0_Conditional_12_ng_template_3_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-typeahead", 38);
    \u0275\u0275listener("selectedData", function EditChapterModalComponent_ng_container_0_Conditional_12_ng_template_3_ng_template_4_Template_app_typeahead_selectedData_0_listener($event) {
      \u0275\u0275restoreView(_r12);
      const ctx_r1 = \u0275\u0275nextContext(4);
      ctx_r1.updateGenres($event);
      return \u0275\u0275resetView(ctx_r1.chapter.genresLocked = true);
    });
    \u0275\u0275twoWayListener("lockedChange", function EditChapterModalComponent_ng_container_0_Conditional_12_ng_template_3_ng_template_4_Template_app_typeahead_lockedChange_0_listener($event) {
      \u0275\u0275restoreView(_r12);
      const ctx_r1 = \u0275\u0275nextContext(4);
      \u0275\u0275twoWayBindingSet(ctx_r1.chapter.genresLocked, $event) || (ctx_r1.chapter.genresLocked = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("onUnlock", function EditChapterModalComponent_ng_container_0_Conditional_12_ng_template_3_ng_template_4_Template_app_typeahead_onUnlock_0_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.chapter.genresLocked = false);
    })("newItemAdded", function EditChapterModalComponent_ng_container_0_Conditional_12_ng_template_3_ng_template_4_Template_app_typeahead_newItemAdded_0_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.chapter.genresLocked = true);
    });
    \u0275\u0275template(1, EditChapterModalComponent_ng_container_0_Conditional_12_ng_template_3_ng_template_4_ng_template_1_Template, 1, 1, "ng-template", null, 3, \u0275\u0275templateRefExtractor)(3, EditChapterModalComponent_ng_container_0_Conditional_12_ng_template_3_ng_template_4_ng_template_3_Template, 1, 1, "ng-template", null, 4, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275property("settings", ctx_r1.genreSettings);
    \u0275\u0275twoWayProperty("locked", ctx_r1.chapter.genresLocked);
  }
}
function EditChapterModalComponent_ng_container_0_Conditional_12_ng_template_3_ng_template_9_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const item_r16 = ctx.$implicit;
    \u0275\u0275textInterpolate1(" ", item_r16.name, " ");
  }
}
function EditChapterModalComponent_ng_container_0_Conditional_12_ng_template_3_ng_template_9_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const item_r17 = ctx.$implicit;
    \u0275\u0275textInterpolate1(" ", item_r17.name, " ");
  }
}
function EditChapterModalComponent_ng_container_0_Conditional_12_ng_template_3_ng_template_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-typeahead", 38);
    \u0275\u0275listener("selectedData", function EditChapterModalComponent_ng_container_0_Conditional_12_ng_template_3_ng_template_9_Template_app_typeahead_selectedData_0_listener($event) {
      \u0275\u0275restoreView(_r15);
      const ctx_r1 = \u0275\u0275nextContext(4);
      ctx_r1.updateTags($event);
      return \u0275\u0275resetView(ctx_r1.chapter.tagsLocked = true);
    });
    \u0275\u0275twoWayListener("lockedChange", function EditChapterModalComponent_ng_container_0_Conditional_12_ng_template_3_ng_template_9_Template_app_typeahead_lockedChange_0_listener($event) {
      \u0275\u0275restoreView(_r15);
      const ctx_r1 = \u0275\u0275nextContext(4);
      \u0275\u0275twoWayBindingSet(ctx_r1.chapter.tagsLocked, $event) || (ctx_r1.chapter.tagsLocked = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("onUnlock", function EditChapterModalComponent_ng_container_0_Conditional_12_ng_template_3_ng_template_9_Template_app_typeahead_onUnlock_0_listener() {
      \u0275\u0275restoreView(_r15);
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.chapter.tagsLocked = false);
    })("newItemAdded", function EditChapterModalComponent_ng_container_0_Conditional_12_ng_template_3_ng_template_9_Template_app_typeahead_newItemAdded_0_listener() {
      \u0275\u0275restoreView(_r15);
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.chapter.tagsLocked = true);
    });
    \u0275\u0275template(1, EditChapterModalComponent_ng_container_0_Conditional_12_ng_template_3_ng_template_9_ng_template_1_Template, 1, 1, "ng-template", null, 3, \u0275\u0275templateRefExtractor)(3, EditChapterModalComponent_ng_container_0_Conditional_12_ng_template_3_ng_template_9_ng_template_3_Template, 1, 1, "ng-template", null, 4, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275property("settings", ctx_r1.tagsSettings);
    \u0275\u0275twoWayProperty("locked", ctx_r1.chapter.tagsLocked);
  }
}
function EditChapterModalComponent_ng_container_0_Conditional_12_ng_template_3_ng_template_15_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const item_r19 = ctx.$implicit;
    \u0275\u0275textInterpolate1(" ", item_r19.name, " ");
  }
}
function EditChapterModalComponent_ng_container_0_Conditional_12_ng_template_3_ng_template_15_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const item_r20 = ctx.$implicit;
    \u0275\u0275textInterpolate1(" ", item_r20.name, " ");
  }
}
function EditChapterModalComponent_ng_container_0_Conditional_12_ng_template_3_ng_template_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-typeahead", 38);
    \u0275\u0275listener("selectedData", function EditChapterModalComponent_ng_container_0_Conditional_12_ng_template_3_ng_template_15_Template_app_typeahead_selectedData_0_listener($event) {
      \u0275\u0275restoreView(_r18);
      const ctx_r1 = \u0275\u0275nextContext(4);
      ctx_r1.updatePerson($event, ctx_r1.PersonRole.Imprint);
      return \u0275\u0275resetView(ctx_r1.chapter.imprintLocked = true);
    });
    \u0275\u0275twoWayListener("lockedChange", function EditChapterModalComponent_ng_container_0_Conditional_12_ng_template_3_ng_template_15_Template_app_typeahead_lockedChange_0_listener($event) {
      \u0275\u0275restoreView(_r18);
      const ctx_r1 = \u0275\u0275nextContext(4);
      \u0275\u0275twoWayBindingSet(ctx_r1.chapter.imprintLocked, $event) || (ctx_r1.chapter.imprintLocked = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("onUnlock", function EditChapterModalComponent_ng_container_0_Conditional_12_ng_template_3_ng_template_15_Template_app_typeahead_onUnlock_0_listener() {
      \u0275\u0275restoreView(_r18);
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.chapter.imprintLocked = false);
    })("newItemAdded", function EditChapterModalComponent_ng_container_0_Conditional_12_ng_template_3_ng_template_15_Template_app_typeahead_newItemAdded_0_listener() {
      \u0275\u0275restoreView(_r18);
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.chapter.imprintLocked = true);
    });
    \u0275\u0275template(1, EditChapterModalComponent_ng_container_0_Conditional_12_ng_template_3_ng_template_15_ng_template_1_Template, 1, 1, "ng-template", null, 3, \u0275\u0275templateRefExtractor)(3, EditChapterModalComponent_ng_container_0_Conditional_12_ng_template_3_ng_template_15_ng_template_3_Template, 1, 1, "ng-template", null, 4, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275property("settings", ctx_r1.getPersonsSettings(ctx_r1.PersonRole.Imprint));
    \u0275\u0275twoWayProperty("locked", ctx_r1.chapter.imprintLocked);
  }
}
function EditChapterModalComponent_ng_container_0_Conditional_12_ng_template_3_ng_template_20_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const item_r22 = ctx.$implicit;
    \u0275\u0275textInterpolate1(" ", item_r22.name, " ");
  }
}
function EditChapterModalComponent_ng_container_0_Conditional_12_ng_template_3_ng_template_20_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const item_r23 = ctx.$implicit;
    \u0275\u0275textInterpolate1(" ", item_r23.name, " ");
  }
}
function EditChapterModalComponent_ng_container_0_Conditional_12_ng_template_3_ng_template_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r21 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-typeahead", 38);
    \u0275\u0275listener("selectedData", function EditChapterModalComponent_ng_container_0_Conditional_12_ng_template_3_ng_template_20_Template_app_typeahead_selectedData_0_listener($event) {
      \u0275\u0275restoreView(_r21);
      const ctx_r1 = \u0275\u0275nextContext(4);
      ctx_r1.updatePerson($event, ctx_r1.PersonRole.Publisher);
      return \u0275\u0275resetView(ctx_r1.chapter.publisherLocked = true);
    });
    \u0275\u0275twoWayListener("lockedChange", function EditChapterModalComponent_ng_container_0_Conditional_12_ng_template_3_ng_template_20_Template_app_typeahead_lockedChange_0_listener($event) {
      \u0275\u0275restoreView(_r21);
      const ctx_r1 = \u0275\u0275nextContext(4);
      \u0275\u0275twoWayBindingSet(ctx_r1.chapter.publisherLocked, $event) || (ctx_r1.chapter.publisherLocked = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("onUnlock", function EditChapterModalComponent_ng_container_0_Conditional_12_ng_template_3_ng_template_20_Template_app_typeahead_onUnlock_0_listener() {
      \u0275\u0275restoreView(_r21);
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.chapter.publisherLocked = false);
    })("newItemAdded", function EditChapterModalComponent_ng_container_0_Conditional_12_ng_template_3_ng_template_20_Template_app_typeahead_newItemAdded_0_listener() {
      \u0275\u0275restoreView(_r21);
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.chapter.publisherLocked = true);
    });
    \u0275\u0275template(1, EditChapterModalComponent_ng_container_0_Conditional_12_ng_template_3_ng_template_20_ng_template_1_Template, 1, 1, "ng-template", null, 3, \u0275\u0275templateRefExtractor)(3, EditChapterModalComponent_ng_container_0_Conditional_12_ng_template_3_ng_template_20_ng_template_3_Template, 1, 1, "ng-template", null, 4, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275property("settings", ctx_r1.getPersonsSettings(ctx_r1.PersonRole.Publisher));
    \u0275\u0275twoWayProperty("locked", ctx_r1.chapter.publisherLocked);
  }
}
function EditChapterModalComponent_ng_container_0_Conditional_12_ng_template_3_ng_template_26_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const item_r25 = ctx.$implicit;
    \u0275\u0275textInterpolate1(" ", item_r25.name, " ");
  }
}
function EditChapterModalComponent_ng_container_0_Conditional_12_ng_template_3_ng_template_26_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const item_r26 = ctx.$implicit;
    \u0275\u0275textInterpolate1(" ", item_r26.name, " ");
  }
}
function EditChapterModalComponent_ng_container_0_Conditional_12_ng_template_3_ng_template_26_Template(rf, ctx) {
  if (rf & 1) {
    const _r24 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-typeahead", 38);
    \u0275\u0275listener("selectedData", function EditChapterModalComponent_ng_container_0_Conditional_12_ng_template_3_ng_template_26_Template_app_typeahead_selectedData_0_listener($event) {
      \u0275\u0275restoreView(_r24);
      const ctx_r1 = \u0275\u0275nextContext(4);
      ctx_r1.updatePerson($event, ctx_r1.PersonRole.Team);
      return \u0275\u0275resetView(ctx_r1.chapter.teamLocked = true);
    });
    \u0275\u0275twoWayListener("lockedChange", function EditChapterModalComponent_ng_container_0_Conditional_12_ng_template_3_ng_template_26_Template_app_typeahead_lockedChange_0_listener($event) {
      \u0275\u0275restoreView(_r24);
      const ctx_r1 = \u0275\u0275nextContext(4);
      \u0275\u0275twoWayBindingSet(ctx_r1.chapter.teamLocked, $event) || (ctx_r1.chapter.teamLocked = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("onUnlock", function EditChapterModalComponent_ng_container_0_Conditional_12_ng_template_3_ng_template_26_Template_app_typeahead_onUnlock_0_listener() {
      \u0275\u0275restoreView(_r24);
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.chapter.teamLocked = false);
    })("newItemAdded", function EditChapterModalComponent_ng_container_0_Conditional_12_ng_template_3_ng_template_26_Template_app_typeahead_newItemAdded_0_listener() {
      \u0275\u0275restoreView(_r24);
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.chapter.teamLocked = true);
    });
    \u0275\u0275template(1, EditChapterModalComponent_ng_container_0_Conditional_12_ng_template_3_ng_template_26_ng_template_1_Template, 1, 1, "ng-template", null, 3, \u0275\u0275templateRefExtractor)(3, EditChapterModalComponent_ng_container_0_Conditional_12_ng_template_3_ng_template_26_ng_template_3_Template, 1, 1, "ng-template", null, 4, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275property("settings", ctx_r1.getPersonsSettings(ctx_r1.PersonRole.Team));
    \u0275\u0275twoWayProperty("locked", ctx_r1.chapter.teamLocked);
  }
}
function EditChapterModalComponent_ng_container_0_Conditional_12_ng_template_3_ng_template_31_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const item_r28 = ctx.$implicit;
    \u0275\u0275textInterpolate1(" ", item_r28.name, " ");
  }
}
function EditChapterModalComponent_ng_container_0_Conditional_12_ng_template_3_ng_template_31_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const item_r29 = ctx.$implicit;
    \u0275\u0275textInterpolate1(" ", item_r29.name, " ");
  }
}
function EditChapterModalComponent_ng_container_0_Conditional_12_ng_template_3_ng_template_31_Template(rf, ctx) {
  if (rf & 1) {
    const _r27 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-typeahead", 38);
    \u0275\u0275listener("selectedData", function EditChapterModalComponent_ng_container_0_Conditional_12_ng_template_3_ng_template_31_Template_app_typeahead_selectedData_0_listener($event) {
      \u0275\u0275restoreView(_r27);
      const ctx_r1 = \u0275\u0275nextContext(4);
      ctx_r1.updatePerson($event, ctx_r1.PersonRole.Location);
      return \u0275\u0275resetView(ctx_r1.chapter.locationLocked = true);
    });
    \u0275\u0275twoWayListener("lockedChange", function EditChapterModalComponent_ng_container_0_Conditional_12_ng_template_3_ng_template_31_Template_app_typeahead_lockedChange_0_listener($event) {
      \u0275\u0275restoreView(_r27);
      const ctx_r1 = \u0275\u0275nextContext(4);
      \u0275\u0275twoWayBindingSet(ctx_r1.chapter.locationLocked, $event) || (ctx_r1.chapter.locationLocked = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("onUnlock", function EditChapterModalComponent_ng_container_0_Conditional_12_ng_template_3_ng_template_31_Template_app_typeahead_onUnlock_0_listener() {
      \u0275\u0275restoreView(_r27);
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.chapter.locationLocked = false);
    })("newItemAdded", function EditChapterModalComponent_ng_container_0_Conditional_12_ng_template_3_ng_template_31_Template_app_typeahead_newItemAdded_0_listener() {
      \u0275\u0275restoreView(_r27);
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.chapter.locationLocked = true);
    });
    \u0275\u0275template(1, EditChapterModalComponent_ng_container_0_Conditional_12_ng_template_3_ng_template_31_ng_template_1_Template, 1, 1, "ng-template", null, 3, \u0275\u0275templateRefExtractor)(3, EditChapterModalComponent_ng_container_0_Conditional_12_ng_template_3_ng_template_31_ng_template_3_Template, 1, 1, "ng-template", null, 4, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275property("settings", ctx_r1.getPersonsSettings(ctx_r1.PersonRole.Location));
    \u0275\u0275twoWayProperty("locked", ctx_r1.chapter.locationLocked);
  }
}
function EditChapterModalComponent_ng_container_0_Conditional_12_ng_template_3_ng_template_37_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const item_r31 = ctx.$implicit;
    \u0275\u0275textInterpolate1(" ", item_r31.name, " ");
  }
}
function EditChapterModalComponent_ng_container_0_Conditional_12_ng_template_3_ng_template_37_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const item_r32 = ctx.$implicit;
    \u0275\u0275textInterpolate1(" ", item_r32.name, " ");
  }
}
function EditChapterModalComponent_ng_container_0_Conditional_12_ng_template_3_ng_template_37_Template(rf, ctx) {
  if (rf & 1) {
    const _r30 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-typeahead", 38);
    \u0275\u0275listener("selectedData", function EditChapterModalComponent_ng_container_0_Conditional_12_ng_template_3_ng_template_37_Template_app_typeahead_selectedData_0_listener($event) {
      \u0275\u0275restoreView(_r30);
      const ctx_r1 = \u0275\u0275nextContext(4);
      ctx_r1.updatePerson($event, ctx_r1.PersonRole.Character);
      return \u0275\u0275resetView(ctx_r1.chapter.characterLocked = true);
    });
    \u0275\u0275twoWayListener("lockedChange", function EditChapterModalComponent_ng_container_0_Conditional_12_ng_template_3_ng_template_37_Template_app_typeahead_lockedChange_0_listener($event) {
      \u0275\u0275restoreView(_r30);
      const ctx_r1 = \u0275\u0275nextContext(4);
      \u0275\u0275twoWayBindingSet(ctx_r1.chapter.characterLocked, $event) || (ctx_r1.chapter.characterLocked = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("onUnlock", function EditChapterModalComponent_ng_container_0_Conditional_12_ng_template_3_ng_template_37_Template_app_typeahead_onUnlock_0_listener() {
      \u0275\u0275restoreView(_r30);
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.chapter.characterLocked = false);
    })("newItemAdded", function EditChapterModalComponent_ng_container_0_Conditional_12_ng_template_3_ng_template_37_Template_app_typeahead_newItemAdded_0_listener() {
      \u0275\u0275restoreView(_r30);
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.chapter.characterLocked = true);
    });
    \u0275\u0275template(1, EditChapterModalComponent_ng_container_0_Conditional_12_ng_template_3_ng_template_37_ng_template_1_Template, 1, 1, "ng-template", null, 3, \u0275\u0275templateRefExtractor)(3, EditChapterModalComponent_ng_container_0_Conditional_12_ng_template_3_ng_template_37_ng_template_3_Template, 1, 1, "ng-template", null, 4, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275property("settings", ctx_r1.getPersonsSettings(ctx_r1.PersonRole.Character));
    \u0275\u0275twoWayProperty("locked", ctx_r1.chapter.characterLocked);
  }
}
function EditChapterModalComponent_ng_container_0_Conditional_12_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 21)(1, "div", 41)(2, "div", 26)(3, "app-setting-item", 27);
    \u0275\u0275template(4, EditChapterModalComponent_ng_container_0_Conditional_12_ng_template_3_ng_template_4_Template, 5, 2, "ng-template", null, 2, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(6, "div", 41)(7, "div", 26)(8, "app-setting-item", 27);
    \u0275\u0275template(9, EditChapterModalComponent_ng_container_0_Conditional_12_ng_template_3_ng_template_9_Template, 5, 2, "ng-template", null, 2, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(11, "div", 21)(12, "div", 41)(13, "div", 26)(14, "app-setting-item", 27);
    \u0275\u0275template(15, EditChapterModalComponent_ng_container_0_Conditional_12_ng_template_3_ng_template_15_Template, 5, 2, "ng-template", null, 2, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(17, "div", 41)(18, "div", 26)(19, "app-setting-item", 27);
    \u0275\u0275template(20, EditChapterModalComponent_ng_container_0_Conditional_12_ng_template_3_ng_template_20_Template, 5, 2, "ng-template", null, 2, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(22, "div", 21)(23, "div", 41)(24, "div", 26)(25, "app-setting-item", 27);
    \u0275\u0275template(26, EditChapterModalComponent_ng_container_0_Conditional_12_ng_template_3_ng_template_26_Template, 5, 2, "ng-template", null, 2, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(28, "div", 41)(29, "div", 26)(30, "app-setting-item", 27);
    \u0275\u0275template(31, EditChapterModalComponent_ng_container_0_Conditional_12_ng_template_3_ng_template_31_Template, 5, 2, "ng-template", null, 2, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(33, "div", 21)(34, "div", 42)(35, "div", 26)(36, "app-setting-item", 27);
    \u0275\u0275template(37, EditChapterModalComponent_ng_container_0_Conditional_12_ng_template_3_ng_template_37_Template, 5, 2, "ng-template", null, 2, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const t_r3 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275property("title", t_r3("genres-label"))("toggleOnViewClick", false)("showEdit", false);
    \u0275\u0275advance(5);
    \u0275\u0275property("title", t_r3("tags-label"))("toggleOnViewClick", false)("showEdit", false);
    \u0275\u0275advance(6);
    \u0275\u0275property("title", t_r3("imprint-label"))("toggleOnViewClick", false)("showEdit", false);
    \u0275\u0275advance(5);
    \u0275\u0275property("title", t_r3("publisher-label"))("toggleOnViewClick", false)("showEdit", false);
    \u0275\u0275advance(6);
    \u0275\u0275property("title", t_r3("team-label"))("toggleOnViewClick", false)("showEdit", false);
    \u0275\u0275advance(5);
    \u0275\u0275property("title", t_r3("location-label"))("toggleOnViewClick", false)("showEdit", false);
    \u0275\u0275advance(6);
    \u0275\u0275property("title", t_r3("character-label"))("toggleOnViewClick", false)("showEdit", false);
  }
}
function EditChapterModalComponent_ng_container_0_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 14)(1, "a", 15);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, EditChapterModalComponent_ng_container_0_Conditional_12_ng_template_3_Template, 39, 21, "ng-template", 16);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r3 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("ngbNavItem", ctx_r1.TabID.Tags);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r3(ctx_r1.TabID.Tags));
  }
}
function EditChapterModalComponent_ng_container_0_Conditional_13_ng_template_3_ng_template_4_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const item_r34 = ctx.$implicit;
    \u0275\u0275textInterpolate1(" ", item_r34.name, " ");
  }
}
function EditChapterModalComponent_ng_container_0_Conditional_13_ng_template_3_ng_template_4_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const item_r35 = ctx.$implicit;
    \u0275\u0275textInterpolate1(" ", item_r35.name, " ");
  }
}
function EditChapterModalComponent_ng_container_0_Conditional_13_ng_template_3_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r33 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-typeahead", 38);
    \u0275\u0275listener("selectedData", function EditChapterModalComponent_ng_container_0_Conditional_13_ng_template_3_ng_template_4_Template_app_typeahead_selectedData_0_listener($event) {
      \u0275\u0275restoreView(_r33);
      const ctx_r1 = \u0275\u0275nextContext(4);
      ctx_r1.updatePerson($event, ctx_r1.PersonRole.Writer);
      return \u0275\u0275resetView(ctx_r1.chapter.writerLocked = true);
    });
    \u0275\u0275twoWayListener("lockedChange", function EditChapterModalComponent_ng_container_0_Conditional_13_ng_template_3_ng_template_4_Template_app_typeahead_lockedChange_0_listener($event) {
      \u0275\u0275restoreView(_r33);
      const ctx_r1 = \u0275\u0275nextContext(4);
      \u0275\u0275twoWayBindingSet(ctx_r1.chapter.writerLocked, $event) || (ctx_r1.chapter.writerLocked = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("onUnlock", function EditChapterModalComponent_ng_container_0_Conditional_13_ng_template_3_ng_template_4_Template_app_typeahead_onUnlock_0_listener() {
      \u0275\u0275restoreView(_r33);
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.chapter.writerLocked = false);
    })("newItemAdded", function EditChapterModalComponent_ng_container_0_Conditional_13_ng_template_3_ng_template_4_Template_app_typeahead_newItemAdded_0_listener() {
      \u0275\u0275restoreView(_r33);
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.chapter.writerLocked = true);
    });
    \u0275\u0275template(1, EditChapterModalComponent_ng_container_0_Conditional_13_ng_template_3_ng_template_4_ng_template_1_Template, 1, 1, "ng-template", null, 3, \u0275\u0275templateRefExtractor)(3, EditChapterModalComponent_ng_container_0_Conditional_13_ng_template_3_ng_template_4_ng_template_3_Template, 1, 1, "ng-template", null, 4, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275property("settings", ctx_r1.getPersonsSettings(ctx_r1.PersonRole.Writer));
    \u0275\u0275twoWayProperty("locked", ctx_r1.chapter.writerLocked);
  }
}
function EditChapterModalComponent_ng_container_0_Conditional_13_ng_template_3_ng_template_9_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const item_r37 = ctx.$implicit;
    \u0275\u0275textInterpolate1(" ", item_r37.name, " ");
  }
}
function EditChapterModalComponent_ng_container_0_Conditional_13_ng_template_3_ng_template_9_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const item_r38 = ctx.$implicit;
    \u0275\u0275textInterpolate1(" ", item_r38.name, " ");
  }
}
function EditChapterModalComponent_ng_container_0_Conditional_13_ng_template_3_ng_template_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r36 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-typeahead", 38);
    \u0275\u0275listener("selectedData", function EditChapterModalComponent_ng_container_0_Conditional_13_ng_template_3_ng_template_9_Template_app_typeahead_selectedData_0_listener($event) {
      \u0275\u0275restoreView(_r36);
      const ctx_r1 = \u0275\u0275nextContext(4);
      ctx_r1.updatePerson($event, ctx_r1.PersonRole.CoverArtist);
      return \u0275\u0275resetView(ctx_r1.chapter.coverArtistLocked = true);
    });
    \u0275\u0275twoWayListener("lockedChange", function EditChapterModalComponent_ng_container_0_Conditional_13_ng_template_3_ng_template_9_Template_app_typeahead_lockedChange_0_listener($event) {
      \u0275\u0275restoreView(_r36);
      const ctx_r1 = \u0275\u0275nextContext(4);
      \u0275\u0275twoWayBindingSet(ctx_r1.chapter.coverArtistLocked, $event) || (ctx_r1.chapter.coverArtistLocked = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("onUnlock", function EditChapterModalComponent_ng_container_0_Conditional_13_ng_template_3_ng_template_9_Template_app_typeahead_onUnlock_0_listener() {
      \u0275\u0275restoreView(_r36);
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.chapter.coverArtistLocked = false);
    })("newItemAdded", function EditChapterModalComponent_ng_container_0_Conditional_13_ng_template_3_ng_template_9_Template_app_typeahead_newItemAdded_0_listener() {
      \u0275\u0275restoreView(_r36);
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.chapter.coverArtistLocked = true);
    });
    \u0275\u0275template(1, EditChapterModalComponent_ng_container_0_Conditional_13_ng_template_3_ng_template_9_ng_template_1_Template, 1, 1, "ng-template", null, 3, \u0275\u0275templateRefExtractor)(3, EditChapterModalComponent_ng_container_0_Conditional_13_ng_template_3_ng_template_9_ng_template_3_Template, 1, 1, "ng-template", null, 4, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275property("settings", ctx_r1.getPersonsSettings(ctx_r1.PersonRole.CoverArtist));
    \u0275\u0275twoWayProperty("locked", ctx_r1.chapter.coverArtistLocked);
  }
}
function EditChapterModalComponent_ng_container_0_Conditional_13_ng_template_3_ng_template_15_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const item_r40 = ctx.$implicit;
    \u0275\u0275textInterpolate1(" ", item_r40.name, " ");
  }
}
function EditChapterModalComponent_ng_container_0_Conditional_13_ng_template_3_ng_template_15_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const item_r41 = ctx.$implicit;
    \u0275\u0275textInterpolate1(" ", item_r41.name, " ");
  }
}
function EditChapterModalComponent_ng_container_0_Conditional_13_ng_template_3_ng_template_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r39 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-typeahead", 38);
    \u0275\u0275listener("selectedData", function EditChapterModalComponent_ng_container_0_Conditional_13_ng_template_3_ng_template_15_Template_app_typeahead_selectedData_0_listener($event) {
      \u0275\u0275restoreView(_r39);
      const ctx_r1 = \u0275\u0275nextContext(4);
      ctx_r1.updatePerson($event, ctx_r1.PersonRole.Penciller);
      return \u0275\u0275resetView(ctx_r1.chapter.pencillerLocked = true);
    });
    \u0275\u0275twoWayListener("lockedChange", function EditChapterModalComponent_ng_container_0_Conditional_13_ng_template_3_ng_template_15_Template_app_typeahead_lockedChange_0_listener($event) {
      \u0275\u0275restoreView(_r39);
      const ctx_r1 = \u0275\u0275nextContext(4);
      \u0275\u0275twoWayBindingSet(ctx_r1.chapter.pencillerLocked, $event) || (ctx_r1.chapter.pencillerLocked = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("onUnlock", function EditChapterModalComponent_ng_container_0_Conditional_13_ng_template_3_ng_template_15_Template_app_typeahead_onUnlock_0_listener() {
      \u0275\u0275restoreView(_r39);
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.chapter.pencillerLocked = false);
    })("newItemAdded", function EditChapterModalComponent_ng_container_0_Conditional_13_ng_template_3_ng_template_15_Template_app_typeahead_newItemAdded_0_listener() {
      \u0275\u0275restoreView(_r39);
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.chapter.pencillerLocked = true);
    });
    \u0275\u0275template(1, EditChapterModalComponent_ng_container_0_Conditional_13_ng_template_3_ng_template_15_ng_template_1_Template, 1, 1, "ng-template", null, 3, \u0275\u0275templateRefExtractor)(3, EditChapterModalComponent_ng_container_0_Conditional_13_ng_template_3_ng_template_15_ng_template_3_Template, 1, 1, "ng-template", null, 4, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275property("settings", ctx_r1.getPersonsSettings(ctx_r1.PersonRole.Penciller));
    \u0275\u0275twoWayProperty("locked", ctx_r1.chapter.pencillerLocked);
  }
}
function EditChapterModalComponent_ng_container_0_Conditional_13_ng_template_3_ng_template_20_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const item_r43 = ctx.$implicit;
    \u0275\u0275textInterpolate1(" ", item_r43.name, " ");
  }
}
function EditChapterModalComponent_ng_container_0_Conditional_13_ng_template_3_ng_template_20_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const item_r44 = ctx.$implicit;
    \u0275\u0275textInterpolate1(" ", item_r44.name, " ");
  }
}
function EditChapterModalComponent_ng_container_0_Conditional_13_ng_template_3_ng_template_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r42 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-typeahead", 38);
    \u0275\u0275listener("selectedData", function EditChapterModalComponent_ng_container_0_Conditional_13_ng_template_3_ng_template_20_Template_app_typeahead_selectedData_0_listener($event) {
      \u0275\u0275restoreView(_r42);
      const ctx_r1 = \u0275\u0275nextContext(4);
      ctx_r1.updatePerson($event, ctx_r1.PersonRole.Colorist);
      return \u0275\u0275resetView(ctx_r1.chapter.coloristLocked = true);
    });
    \u0275\u0275twoWayListener("lockedChange", function EditChapterModalComponent_ng_container_0_Conditional_13_ng_template_3_ng_template_20_Template_app_typeahead_lockedChange_0_listener($event) {
      \u0275\u0275restoreView(_r42);
      const ctx_r1 = \u0275\u0275nextContext(4);
      \u0275\u0275twoWayBindingSet(ctx_r1.chapter.coloristLocked, $event) || (ctx_r1.chapter.coloristLocked = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("onUnlock", function EditChapterModalComponent_ng_container_0_Conditional_13_ng_template_3_ng_template_20_Template_app_typeahead_onUnlock_0_listener() {
      \u0275\u0275restoreView(_r42);
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.chapter.coloristLocked = false);
    })("newItemAdded", function EditChapterModalComponent_ng_container_0_Conditional_13_ng_template_3_ng_template_20_Template_app_typeahead_newItemAdded_0_listener() {
      \u0275\u0275restoreView(_r42);
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.chapter.coloristLocked = true);
    });
    \u0275\u0275template(1, EditChapterModalComponent_ng_container_0_Conditional_13_ng_template_3_ng_template_20_ng_template_1_Template, 1, 1, "ng-template", null, 3, \u0275\u0275templateRefExtractor)(3, EditChapterModalComponent_ng_container_0_Conditional_13_ng_template_3_ng_template_20_ng_template_3_Template, 1, 1, "ng-template", null, 4, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275property("settings", ctx_r1.getPersonsSettings(ctx_r1.PersonRole.Colorist));
    \u0275\u0275twoWayProperty("locked", ctx_r1.chapter.coloristLocked);
  }
}
function EditChapterModalComponent_ng_container_0_Conditional_13_ng_template_3_ng_template_26_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const item_r46 = ctx.$implicit;
    \u0275\u0275textInterpolate1(" ", item_r46.name, " ");
  }
}
function EditChapterModalComponent_ng_container_0_Conditional_13_ng_template_3_ng_template_26_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const item_r47 = ctx.$implicit;
    \u0275\u0275textInterpolate1(" ", item_r47.name, " ");
  }
}
function EditChapterModalComponent_ng_container_0_Conditional_13_ng_template_3_ng_template_26_Template(rf, ctx) {
  if (rf & 1) {
    const _r45 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-typeahead", 38);
    \u0275\u0275listener("selectedData", function EditChapterModalComponent_ng_container_0_Conditional_13_ng_template_3_ng_template_26_Template_app_typeahead_selectedData_0_listener($event) {
      \u0275\u0275restoreView(_r45);
      const ctx_r1 = \u0275\u0275nextContext(4);
      ctx_r1.updatePerson($event, ctx_r1.PersonRole.Inker);
      return \u0275\u0275resetView(ctx_r1.chapter.inkerLocked = true);
    });
    \u0275\u0275twoWayListener("lockedChange", function EditChapterModalComponent_ng_container_0_Conditional_13_ng_template_3_ng_template_26_Template_app_typeahead_lockedChange_0_listener($event) {
      \u0275\u0275restoreView(_r45);
      const ctx_r1 = \u0275\u0275nextContext(4);
      \u0275\u0275twoWayBindingSet(ctx_r1.chapter.inkerLocked, $event) || (ctx_r1.chapter.inkerLocked = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("onUnlock", function EditChapterModalComponent_ng_container_0_Conditional_13_ng_template_3_ng_template_26_Template_app_typeahead_onUnlock_0_listener() {
      \u0275\u0275restoreView(_r45);
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.chapter.inkerLocked = false);
    })("newItemAdded", function EditChapterModalComponent_ng_container_0_Conditional_13_ng_template_3_ng_template_26_Template_app_typeahead_newItemAdded_0_listener() {
      \u0275\u0275restoreView(_r45);
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.chapter.inkerLocked = true);
    });
    \u0275\u0275template(1, EditChapterModalComponent_ng_container_0_Conditional_13_ng_template_3_ng_template_26_ng_template_1_Template, 1, 1, "ng-template", null, 3, \u0275\u0275templateRefExtractor)(3, EditChapterModalComponent_ng_container_0_Conditional_13_ng_template_3_ng_template_26_ng_template_3_Template, 1, 1, "ng-template", null, 4, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275property("settings", ctx_r1.getPersonsSettings(ctx_r1.PersonRole.Inker));
    \u0275\u0275twoWayProperty("locked", ctx_r1.chapter.inkerLocked);
  }
}
function EditChapterModalComponent_ng_container_0_Conditional_13_ng_template_3_ng_template_31_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const item_r49 = ctx.$implicit;
    \u0275\u0275textInterpolate1(" ", item_r49.name, " ");
  }
}
function EditChapterModalComponent_ng_container_0_Conditional_13_ng_template_3_ng_template_31_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const item_r50 = ctx.$implicit;
    \u0275\u0275textInterpolate1(" ", item_r50.name, " ");
  }
}
function EditChapterModalComponent_ng_container_0_Conditional_13_ng_template_3_ng_template_31_Template(rf, ctx) {
  if (rf & 1) {
    const _r48 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-typeahead", 38);
    \u0275\u0275listener("selectedData", function EditChapterModalComponent_ng_container_0_Conditional_13_ng_template_3_ng_template_31_Template_app_typeahead_selectedData_0_listener($event) {
      \u0275\u0275restoreView(_r48);
      const ctx_r1 = \u0275\u0275nextContext(4);
      ctx_r1.updatePerson($event, ctx_r1.PersonRole.Letterer);
      return \u0275\u0275resetView(ctx_r1.chapter.lettererLocked = true);
    });
    \u0275\u0275twoWayListener("lockedChange", function EditChapterModalComponent_ng_container_0_Conditional_13_ng_template_3_ng_template_31_Template_app_typeahead_lockedChange_0_listener($event) {
      \u0275\u0275restoreView(_r48);
      const ctx_r1 = \u0275\u0275nextContext(4);
      \u0275\u0275twoWayBindingSet(ctx_r1.chapter.lettererLocked, $event) || (ctx_r1.chapter.lettererLocked = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("onUnlock", function EditChapterModalComponent_ng_container_0_Conditional_13_ng_template_3_ng_template_31_Template_app_typeahead_onUnlock_0_listener() {
      \u0275\u0275restoreView(_r48);
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.chapter.lettererLocked = false);
    })("newItemAdded", function EditChapterModalComponent_ng_container_0_Conditional_13_ng_template_3_ng_template_31_Template_app_typeahead_newItemAdded_0_listener() {
      \u0275\u0275restoreView(_r48);
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.chapter.lettererLocked = true);
    });
    \u0275\u0275template(1, EditChapterModalComponent_ng_container_0_Conditional_13_ng_template_3_ng_template_31_ng_template_1_Template, 1, 1, "ng-template", null, 3, \u0275\u0275templateRefExtractor)(3, EditChapterModalComponent_ng_container_0_Conditional_13_ng_template_3_ng_template_31_ng_template_3_Template, 1, 1, "ng-template", null, 4, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275property("settings", ctx_r1.getPersonsSettings(ctx_r1.PersonRole.Letterer));
    \u0275\u0275twoWayProperty("locked", ctx_r1.chapter.lettererLocked);
  }
}
function EditChapterModalComponent_ng_container_0_Conditional_13_ng_template_3_ng_template_37_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const item_r52 = ctx.$implicit;
    \u0275\u0275textInterpolate1(" ", item_r52.name, " ");
  }
}
function EditChapterModalComponent_ng_container_0_Conditional_13_ng_template_3_ng_template_37_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const item_r53 = ctx.$implicit;
    \u0275\u0275textInterpolate1(" ", item_r53.name, " ");
  }
}
function EditChapterModalComponent_ng_container_0_Conditional_13_ng_template_3_ng_template_37_Template(rf, ctx) {
  if (rf & 1) {
    const _r51 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-typeahead", 38);
    \u0275\u0275listener("selectedData", function EditChapterModalComponent_ng_container_0_Conditional_13_ng_template_3_ng_template_37_Template_app_typeahead_selectedData_0_listener($event) {
      \u0275\u0275restoreView(_r51);
      const ctx_r1 = \u0275\u0275nextContext(4);
      ctx_r1.updatePerson($event, ctx_r1.PersonRole.Translator);
      return \u0275\u0275resetView(ctx_r1.chapter.translatorLocked = true);
    });
    \u0275\u0275twoWayListener("lockedChange", function EditChapterModalComponent_ng_container_0_Conditional_13_ng_template_3_ng_template_37_Template_app_typeahead_lockedChange_0_listener($event) {
      \u0275\u0275restoreView(_r51);
      const ctx_r1 = \u0275\u0275nextContext(4);
      \u0275\u0275twoWayBindingSet(ctx_r1.chapter.translatorLocked, $event) || (ctx_r1.chapter.translatorLocked = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("onUnlock", function EditChapterModalComponent_ng_container_0_Conditional_13_ng_template_3_ng_template_37_Template_app_typeahead_onUnlock_0_listener() {
      \u0275\u0275restoreView(_r51);
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.chapter.translatorLocked = false);
    })("newItemAdded", function EditChapterModalComponent_ng_container_0_Conditional_13_ng_template_3_ng_template_37_Template_app_typeahead_newItemAdded_0_listener() {
      \u0275\u0275restoreView(_r51);
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.chapter.translatorLocked = true);
    });
    \u0275\u0275template(1, EditChapterModalComponent_ng_container_0_Conditional_13_ng_template_3_ng_template_37_ng_template_1_Template, 1, 1, "ng-template", null, 3, \u0275\u0275templateRefExtractor)(3, EditChapterModalComponent_ng_container_0_Conditional_13_ng_template_3_ng_template_37_ng_template_3_Template, 1, 1, "ng-template", null, 4, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275property("settings", ctx_r1.getPersonsSettings(ctx_r1.PersonRole.Translator));
    \u0275\u0275twoWayProperty("locked", ctx_r1.chapter.translatorLocked);
  }
}
function EditChapterModalComponent_ng_container_0_Conditional_13_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 21)(1, "div", 41)(2, "div", 26)(3, "app-setting-item", 27);
    \u0275\u0275template(4, EditChapterModalComponent_ng_container_0_Conditional_13_ng_template_3_ng_template_4_Template, 5, 2, "ng-template", null, 2, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(6, "div", 41)(7, "div", 26)(8, "app-setting-item", 27);
    \u0275\u0275template(9, EditChapterModalComponent_ng_container_0_Conditional_13_ng_template_3_ng_template_9_Template, 5, 2, "ng-template", null, 2, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(11, "div", 21)(12, "div", 41)(13, "div", 26)(14, "app-setting-item", 27);
    \u0275\u0275template(15, EditChapterModalComponent_ng_container_0_Conditional_13_ng_template_3_ng_template_15_Template, 5, 2, "ng-template", null, 2, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(17, "div", 41)(18, "div", 26)(19, "app-setting-item", 27);
    \u0275\u0275template(20, EditChapterModalComponent_ng_container_0_Conditional_13_ng_template_3_ng_template_20_Template, 5, 2, "ng-template", null, 2, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(22, "div", 21)(23, "div", 41)(24, "div", 26)(25, "app-setting-item", 27);
    \u0275\u0275template(26, EditChapterModalComponent_ng_container_0_Conditional_13_ng_template_3_ng_template_26_Template, 5, 2, "ng-template", null, 2, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(28, "div", 41)(29, "div", 26)(30, "app-setting-item", 27);
    \u0275\u0275template(31, EditChapterModalComponent_ng_container_0_Conditional_13_ng_template_3_ng_template_31_Template, 5, 2, "ng-template", null, 2, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(33, "div", 21)(34, "div", 42)(35, "div", 26)(36, "app-setting-item", 27);
    \u0275\u0275template(37, EditChapterModalComponent_ng_container_0_Conditional_13_ng_template_3_ng_template_37_Template, 5, 2, "ng-template", null, 2, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const t_r3 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275property("title", t_r3("writer-label"))("toggleOnViewClick", false)("showEdit", false);
    \u0275\u0275advance(5);
    \u0275\u0275property("title", t_r3("cover-artist-label"))("toggleOnViewClick", false)("showEdit", false);
    \u0275\u0275advance(6);
    \u0275\u0275property("title", t_r3("penciller-label"))("toggleOnViewClick", false)("showEdit", false);
    \u0275\u0275advance(5);
    \u0275\u0275property("title", t_r3("colorist-label"))("toggleOnViewClick", false)("showEdit", false);
    \u0275\u0275advance(6);
    \u0275\u0275property("title", t_r3("inker-label"))("toggleOnViewClick", false)("showEdit", false);
    \u0275\u0275advance(5);
    \u0275\u0275property("title", t_r3("letterer-label"))("toggleOnViewClick", false)("showEdit", false);
    \u0275\u0275advance(6);
    \u0275\u0275property("title", t_r3("translator-label"))("toggleOnViewClick", false)("showEdit", false);
  }
}
function EditChapterModalComponent_ng_container_0_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 14)(1, "a", 15);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, EditChapterModalComponent_ng_container_0_Conditional_13_ng_template_3_Template, 39, 21, "ng-template", 16);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r3 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("ngbNavItem", ctx_r1.TabID.People);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r3(ctx_r1.TabID.People));
  }
}
function EditChapterModalComponent_ng_container_0_Conditional_14_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r54 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p", 43);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "app-cover-image-chooser", 44);
    \u0275\u0275twoWayListener("imageUrlsChange", function EditChapterModalComponent_ng_container_0_Conditional_14_ng_template_3_Template_app_cover_image_chooser_imageUrlsChange_2_listener($event) {
      \u0275\u0275restoreView(_r54);
      const ctx_r1 = \u0275\u0275nextContext(3);
      \u0275\u0275twoWayBindingSet(ctx_r1.imageUrls, $event) || (ctx_r1.imageUrls = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("imageSelected", function EditChapterModalComponent_ng_container_0_Conditional_14_ng_template_3_Template_app_cover_image_chooser_imageSelected_2_listener($event) {
      \u0275\u0275restoreView(_r54);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.updateSelectedIndex($event));
    })("selectedBase64Url", function EditChapterModalComponent_ng_container_0_Conditional_14_ng_template_3_Template_app_cover_image_chooser_selectedBase64Url_2_listener($event) {
      \u0275\u0275restoreView(_r54);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.updateSelectedImage($event));
    })("resetClicked", function EditChapterModalComponent_ng_container_0_Conditional_14_ng_template_3_Template_app_cover_image_chooser_resetClicked_2_listener() {
      \u0275\u0275restoreView(_r54);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.handleReset());
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r3 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", t_r3("cover-image-description"), " ");
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("imageUrls", ctx_r1.imageUrls);
    \u0275\u0275property("showReset", ctx_r1.chapter.coverImageLocked);
  }
}
function EditChapterModalComponent_ng_container_0_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 14)(1, "a", 15);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, EditChapterModalComponent_ng_container_0_Conditional_14_ng_template_3_Template, 3, 3, "ng-template", 16);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r3 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("ngbNavItem", ctx_r1.TabID.CoverImage);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r3(ctx_r1.TabID.CoverImage));
  }
}
function EditChapterModalComponent_ng_container_0_ng_template_18_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "compactNumber");
  }
  if (rf & 2) {
    const t_r3 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275textInterpolate1(" ", t_r3("pages-count", \u0275\u0275pureFunction1(3, _c8, \u0275\u0275pipeBind1(1, 1, ctx_r1.chapter.pages))), " ");
  }
}
function EditChapterModalComponent_ng_container_0_ng_template_18_ng_template_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "compactNumber");
  }
  if (rf & 2) {
    const t_r3 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275textInterpolate1(" ", t_r3("words-count", \u0275\u0275pureFunction1(3, _c8, \u0275\u0275pipeBind1(1, 1, ctx_r1.chapter.wordCount))), " ");
  }
}
function EditChapterModalComponent_ng_container_0_ng_template_18_ng_template_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "readTime");
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(1, 1, ctx_r1.chapter), " ");
  }
}
function EditChapterModalComponent_ng_container_0_ng_template_18_ng_template_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "bytes");
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(1, 1, ctx_r1.size), " ");
  }
}
function EditChapterModalComponent_ng_container_0_ng_template_18_ng_template_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "utcToLocalTime");
    \u0275\u0275pipe(2, "defaultDate");
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 4, \u0275\u0275pipeBind2(1, 1, ctx_r1.chapter.createdUtc, "short")), " ");
  }
}
function EditChapterModalComponent_ng_container_0_ng_template_18_ng_template_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275textInterpolate1(" ", ctx_r1.chapter.id, " ");
  }
}
function EditChapterModalComponent_ng_container_0_ng_template_18_Conditional_33_For_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 49);
    \u0275\u0275pipe(1, "safeHtml");
    \u0275\u0275element(2, "app-image", 50);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const link_r55 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275property("href", \u0275\u0275pipeBind1(1, 4, link_r55), \u0275\u0275sanitizeUrl)("title", link_r55);
    \u0275\u0275advance(2);
    \u0275\u0275property("imageUrl", ctx_r1.imageService.getWebLinkImage(link_r55))("errorImage", ctx_r1.imageService.errorWebLinkImage);
  }
}
function EditChapterModalComponent_ng_container_0_ng_template_18_Conditional_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 45);
    \u0275\u0275elementStart(1, "div", 46)(2, "div", 21)(3, "h6", 47);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 48);
    \u0275\u0275repeaterCreate(6, EditChapterModalComponent_ng_container_0_ng_template_18_Conditional_33_For_7_Template, 3, 6, "a", 49, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const t_r3 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(t_r3("links-label"));
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r1.WebLinks);
  }
}
function EditChapterModalComponent_ng_container_0_ng_template_18_Conditional_34_ng_template_2_For_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "span");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 51);
    \u0275\u0275text(4, "\u2022");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span");
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "bytes");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const file_r56 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(file_r56.filePath);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(7, 2, file_r56.bytes));
  }
}
function EditChapterModalComponent_ng_container_0_ng_template_18_Conditional_34_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, EditChapterModalComponent_ng_container_0_ng_template_18_Conditional_34_ng_template_2_For_1_Template, 8, 4, "div", null, _forTrack1);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275repeater(ctx_r1.chapter.files);
  }
}
function EditChapterModalComponent_ng_container_0_ng_template_18_Conditional_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 21)(1, "app-setting-item", 27);
    \u0275\u0275template(2, EditChapterModalComponent_ng_container_0_ng_template_18_Conditional_34_ng_template_2_Template, 2, 0, "ng-template", null, 2, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const t_r3 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("title", t_r3("files-label"))("toggleOnViewClick", false)("showEdit", false);
  }
}
function EditChapterModalComponent_ng_container_0_ng_template_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 21)(1, "div", 41)(2, "div", 26)(3, "app-setting-item", 27);
    \u0275\u0275template(4, EditChapterModalComponent_ng_container_0_ng_template_18_ng_template_4_Template, 2, 5, "ng-template", null, 2, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(6, "div", 41)(7, "div", 26)(8, "app-setting-item", 27);
    \u0275\u0275template(9, EditChapterModalComponent_ng_container_0_ng_template_18_ng_template_9_Template, 2, 5, "ng-template", null, 2, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(11, "div", 21)(12, "div", 41)(13, "div", 26)(14, "app-setting-item", 27);
    \u0275\u0275template(15, EditChapterModalComponent_ng_container_0_ng_template_18_ng_template_15_Template, 2, 3, "ng-template", null, 2, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(17, "div", 41)(18, "div", 26)(19, "app-setting-item", 27);
    \u0275\u0275template(20, EditChapterModalComponent_ng_container_0_ng_template_18_ng_template_20_Template, 2, 3, "ng-template", null, 2, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(22, "div", 21)(23, "div", 41)(24, "div", 26)(25, "app-setting-item", 27);
    \u0275\u0275template(26, EditChapterModalComponent_ng_container_0_ng_template_18_ng_template_26_Template, 3, 6, "ng-template", null, 2, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(28, "div", 41)(29, "div", 26)(30, "app-setting-item", 27);
    \u0275\u0275template(31, EditChapterModalComponent_ng_container_0_ng_template_18_ng_template_31_Template, 1, 1, "ng-template", null, 2, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275template(33, EditChapterModalComponent_ng_container_0_ng_template_18_Conditional_33_Template, 8, 1)(34, EditChapterModalComponent_ng_container_0_ng_template_18_Conditional_34_Template, 4, 3, "div", 21);
    \u0275\u0275pipe(35, "async");
  }
  if (rf & 2) {
    const t_r3 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275property("title", t_r3("pages-label"))("toggleOnViewClick", false)("showEdit", false);
    \u0275\u0275advance(5);
    \u0275\u0275property("title", t_r3("words-label"))("toggleOnViewClick", false)("showEdit", false);
    \u0275\u0275advance(6);
    \u0275\u0275property("title", t_r3("read-time-label"))("toggleOnViewClick", false)("showEdit", false);
    \u0275\u0275advance(5);
    \u0275\u0275property("title", t_r3("size-label"))("toggleOnViewClick", false)("showEdit", false);
    \u0275\u0275advance(6);
    \u0275\u0275property("title", t_r3("date-added-label"))("toggleOnViewClick", false)("showEdit", false);
    \u0275\u0275advance(5);
    \u0275\u0275property("title", t_r3("id-label"))("toggleOnViewClick", false)("showEdit", false);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r1.WebLinks.length > 0 ? 33 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(\u0275\u0275pipeBind1(35, 20, ctx_r1.accountService.isAdmin$) ? 34 : -1);
  }
}
function EditChapterModalComponent_ng_container_0_ng_template_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-edit-chapter-progress", 52);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("chapter", ctx_r1.chapter);
  }
}
function EditChapterModalComponent_ng_container_0_ng_template_26_For_1_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r57 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 53)(1, "app-setting-button", 54)(2, "button", 55);
    \u0275\u0275listener("click", function EditChapterModalComponent_ng_container_0_ng_template_26_For_1_Conditional_0_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r57);
      const task_r58 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.runTask(task_r58));
    });
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const task_r58 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("subtitle", task_r58.description);
    \u0275\u0275advance();
    \u0275\u0275classMapInterpolate1("btn btn-", task_r58.action === ctx_r1.Action.Delete ? "danger" : "secondary", " btn-sm mb-2");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(task_r58.title);
  }
}
function EditChapterModalComponent_ng_container_0_ng_template_26_For_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, EditChapterModalComponent_ng_container_0_ng_template_26_For_1_Conditional_0_Template, 4, 5, "div", 53);
  }
  if (rf & 2) {
    const task_r58 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275conditional(ctx_r1.accountService.canInvokeAction(ctx_r1.user, task_r58.action) ? 0 : -1);
  }
}
function EditChapterModalComponent_ng_container_0_ng_template_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, EditChapterModalComponent_ng_container_0_ng_template_26_For_1_Template, 1, 1, null, null, _forTrack2);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275repeater(ctx_r1.tasks);
  }
}
function EditChapterModalComponent_ng_container_0_ng_template_33_Template(rf, ctx) {
  if (rf & 1) {
    const _r59 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "span", 56);
    \u0275\u0275listener("click", function EditChapterModalComponent_ng_container_0_ng_template_33_Template_span_click_0_listener() {
      const ctx_r59 = \u0275\u0275restoreView(_r59);
      const item_r61 = ctx_r59.item;
      const field_r62 = ctx_r59.field;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.unlock(item_r61, field_r62));
    });
    \u0275\u0275element(1, "i", 57);
    \u0275\u0275elementStart(2, "span", 58);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const t_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(t_r3("field-locked-alt"));
  }
}
function EditChapterModalComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 6)(2, "div", 7)(3, "h4", 8);
    \u0275\u0275text(4);
    \u0275\u0275element(5, "app-entity-title", 9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "button", 10);
    \u0275\u0275listener("click", function EditChapterModalComponent_ng_container_0_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.close());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 11)(8, "form", 12)(9, "ul", 13, 0);
    \u0275\u0275twoWayListener("activeIdChange", function EditChapterModalComponent_ng_container_0_Template_ul_activeIdChange_9_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.activeId, $event) || (ctx_r1.activeId = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275template(11, EditChapterModalComponent_ng_container_0_Conditional_11_Template, 4, 2, "li", 14)(12, EditChapterModalComponent_ng_container_0_Conditional_12_Template, 4, 2, "li", 14)(13, EditChapterModalComponent_ng_container_0_Conditional_13_Template, 4, 2, "li", 14)(14, EditChapterModalComponent_ng_container_0_Conditional_14_Template, 4, 2, "li", 14);
    \u0275\u0275elementStart(15, "li", 14)(16, "a", 15);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd();
    \u0275\u0275template(18, EditChapterModalComponent_ng_container_0_ng_template_18_Template, 36, 22, "ng-template", 16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "li", 14)(20, "a", 15);
    \u0275\u0275text(21);
    \u0275\u0275elementEnd();
    \u0275\u0275template(22, EditChapterModalComponent_ng_container_0_ng_template_22_Template, 1, 1, "ng-template", 16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "li", 14)(24, "a", 15);
    \u0275\u0275text(25);
    \u0275\u0275elementEnd();
    \u0275\u0275template(26, EditChapterModalComponent_ng_container_0_ng_template_26_Template, 2, 0, "ng-template", 16);
    \u0275\u0275elementEnd()()();
    \u0275\u0275element(27, "div", 17);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "div", 18)(29, "button", 19);
    \u0275\u0275listener("click", function EditChapterModalComponent_ng_container_0_Template_button_click_29_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.close());
    });
    \u0275\u0275text(30);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "button", 20);
    \u0275\u0275listener("click", function EditChapterModalComponent_ng_container_0_Template_button_click_31_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.save());
    });
    \u0275\u0275text(32);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(33, EditChapterModalComponent_ng_container_0_ng_template_33_Template, 4, 1, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const t_r3 = ctx.$implicit;
    const nav_r63 = \u0275\u0275reference(10);
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", t_r3("title"), " ");
    \u0275\u0275advance();
    \u0275\u0275property("libraryType", ctx_r1.libraryType)("entity", ctx_r1.chapter)("prioritizeTitleName", false);
    \u0275\u0275advance();
    \u0275\u0275attribute("aria-label", t_r3("close"));
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(26, _c0, ctx_r1.utilityService.getActiveBreakpoint() !== ctx_r1.Breakpoint.Mobile));
    \u0275\u0275advance();
    \u0275\u0275property("formGroup", ctx_r1.editForm);
    \u0275\u0275advance();
    \u0275\u0275propertyInterpolate("orientation", ctx_r1.utilityService.getActiveBreakpoint() === ctx_r1.Breakpoint.Mobile ? "horizontal" : "vertical");
    \u0275\u0275twoWayProperty("activeId", ctx_r1.activeId);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.user && ctx_r1.accountService.hasAdminRole(ctx_r1.user) ? 11 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.user && ctx_r1.accountService.hasAdminRole(ctx_r1.user) ? 12 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.user && ctx_r1.accountService.hasAdminRole(ctx_r1.user) ? 13 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.user && ctx_r1.accountService.hasAdminRole(ctx_r1.user) ? 14 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("ngbNavItem", ctx_r1.TabID.Info);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r3(ctx_r1.TabID.Info));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngbNavItem", ctx_r1.TabID.Progress);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r3(ctx_r1.TabID.Progress));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngbNavItem", ctx_r1.TabID.Tasks);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r3(ctx_r1.TabID.Tasks));
    \u0275\u0275advance(2);
    \u0275\u0275classMapInterpolate1("tab-content ", ctx_r1.utilityService.getActiveBreakpoint() === ctx_r1.Breakpoint.Mobile ? "mt-3" : "ms-4 flex-fill", "");
    \u0275\u0275property("ngbNavOutlet", nav_r63);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(t_r3("close"));
    \u0275\u0275advance();
    \u0275\u0275property("disabled", !ctx_r1.editForm.valid);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(t_r3("save"));
  }
}
var TabID;
(function(TabID2) {
  TabID2["General"] = "general-tab";
  TabID2["CoverImage"] = "cover-image-tab";
  TabID2["Info"] = "info-tab";
  TabID2["People"] = "people-tab";
  TabID2["Tasks"] = "tasks-tab";
  TabID2["Progress"] = "progress-tab";
  TabID2["Tags"] = "tags-tab";
})(TabID || (TabID = {}));
var blackList = [Action.Edit, Action.IncognitoRead, Action.AddToReadingList];
var EditChapterModalComponent = class _EditChapterModalComponent {
  constructor() {
    this.modal = inject(NgbActiveModal);
    this.utilityService = inject(UtilityService);
    this.imageService = inject(ImageService);
    this.uploadService = inject(UploadService);
    this.metadataService = inject(MetadataService);
    this.cdRef = inject(ChangeDetectorRef);
    this.accountService = inject(AccountService);
    this.destroyRef = inject(DestroyRef);
    this.actionFactoryService = inject(ActionFactoryService);
    this.actionService = inject(ActionService);
    this.downloadService = inject(DownloadService);
    this.chapterService = inject(ChapterService);
    this.Breakpoint = Breakpoint;
    this.TabID = TabID;
    this.Action = Action;
    this.PersonRole = PersonRole;
    this.MangaFormat = MangaFormat;
    this.activeId = TabID.General;
    this.editForm = new FormGroup({});
    this.selectedCover = "";
    this.coverImageReset = false;
    this.tagsSettings = new TypeaheadSettings();
    this.languageSettings = new TypeaheadSettings();
    this.peopleSettings = {};
    this.genreSettings = new TypeaheadSettings();
    this.tags = [];
    this.genres = [];
    this.ageRatings = [];
    this.validLanguages = [];
    this.tasks = this.actionFactoryService.getActionablesForSettingsPage(this.actionFactoryService.getChapterActions(this.runTask.bind(this)), blackList);
    this.imageUrls = [];
    this.size = 0;
  }
  get WebLinks() {
    if (this.chapter.webLinks === "")
      return [];
    return this.chapter.webLinks.split(",");
  }
  ngOnInit() {
    this.initChapter = Object.assign({}, this.chapter);
    this.imageUrls.push(this.imageService.getChapterCoverImage(this.chapter.id));
    this.size = this.utilityService.asChapter(this.chapter).files.reduce((sum, v) => sum + v.bytes, 0);
    this.accountService.currentUser$.pipe(takeUntilDestroyed(this.destroyRef), tap((u) => {
      if (!u)
        return;
      this.user = u;
      if (!this.accountService.hasAdminRole(this.user)) {
        this.activeId = TabID.Info;
      }
      this.cdRef.markForCheck();
    })).subscribe();
    this.editForm.addControl("titleName", new FormControl(this.chapter.titleName, []));
    this.editForm.addControl("sortOrder", new FormControl(Math.max(0, this.chapter.sortOrder), [Validators.required, Validators.min(0)]));
    this.editForm.addControl("summary", new FormControl(this.chapter.summary || "", []));
    this.editForm.addControl("language", new FormControl(this.chapter.language, []));
    this.editForm.addControl("isbn", new FormControl(this.chapter.isbn, []));
    this.editForm.addControl("ageRating", new FormControl(this.chapter.ageRating, []));
    if (this.chapter.releaseDate !== "0001-01-01T00:00:00") {
      this.editForm.addControl("releaseDate", new FormControl(this.chapter.releaseDate.substring(0, 10), []));
    } else {
      this.editForm.addControl("releaseDate", new FormControl("", []));
    }
    this.editForm.addControl("genres", new FormControl(this.chapter.genres, []));
    this.editForm.addControl("tags", new FormControl(this.chapter.tags, []));
    this.editForm.addControl("coverImageIndex", new FormControl(0, []));
    this.editForm.addControl("coverImageLocked", new FormControl(this.chapter.coverImageLocked, []));
    this.metadataService.getAllValidLanguages().pipe(tap((validLanguages) => {
      this.validLanguages = validLanguages;
      this.cdRef.markForCheck();
    }), switchMap((_) => this.setupLanguageTypeahead())).subscribe();
    this.metadataService.getAllAgeRatings().subscribe((ratings) => {
      this.ageRatings = ratings;
      this.cdRef.markForCheck();
    });
    this.editForm.get("titleName")?.valueChanges.pipe(takeUntilDestroyed(this.destroyRef)).subscribe((val) => {
      this.chapter.titleNameLocked = true;
      this.cdRef.markForCheck();
    });
    this.editForm.get("sortOrder")?.valueChanges.pipe(takeUntilDestroyed(this.destroyRef)).subscribe((val) => {
      this.chapter.sortOrderLocked = true;
      this.cdRef.markForCheck();
    });
    this.editForm.get("isbn")?.valueChanges.pipe(takeUntilDestroyed(this.destroyRef)).subscribe((val) => {
      this.chapter.isbnLocked = true;
      this.cdRef.markForCheck();
    });
    this.editForm.get("ageRating")?.valueChanges.pipe(takeUntilDestroyed(this.destroyRef)).subscribe((val) => {
      this.chapter.ageRatingLocked = true;
      this.cdRef.markForCheck();
    });
    this.editForm.get("summary")?.valueChanges.pipe(takeUntilDestroyed(this.destroyRef)).subscribe((val) => {
      this.chapter.summaryLocked = true;
      this.cdRef.markForCheck();
    });
    this.editForm.get("releaseDate")?.valueChanges.pipe(takeUntilDestroyed(this.destroyRef)).subscribe((val) => {
      this.chapter.releaseDateLocked = true;
      this.cdRef.markForCheck();
    });
    this.setupTypeaheads();
  }
  close() {
    this.modal.dismiss();
  }
  save() {
    const model = this.editForm.value;
    const selectedIndex = this.editForm.get("coverImageIndex")?.value || 0;
    if (model.releaseDate === "") {
      this.chapter.releaseDate = "0001-01-01T00:00:00";
    } else {
      this.chapter.releaseDate = model.releaseDate + "T00:00:00";
    }
    this.chapter.ageRating = parseInt(model.ageRating + "", 10);
    this.chapter.genres = model.genres;
    this.chapter.tags = model.tags;
    this.chapter.sortOrder = model.sortOrder;
    this.chapter.language = model.language;
    this.chapter.titleName = model.titleName;
    this.chapter.summary = model.summary;
    this.chapter.isbn = model.isbn;
    const apis = [
      this.chapterService.updateChapter(this.chapter)
    ];
    const needsReload = this.editForm.get("titleName")?.dirty || this.editForm.get("sortOrder")?.dirty;
    if (selectedIndex > 0 || this.coverImageReset) {
      apis.push(this.uploadService.updateChapterCoverImage(this.chapter.id, this.selectedCover, !this.coverImageReset));
    }
    forkJoin(apis).subscribe((results) => {
      this.modal.close({ success: true, chapter: model, coverImageUpdate: selectedIndex > 0 || this.coverImageReset, needsReload, isDeleted: false });
    });
  }
  unlock(b, field) {
    if (b) {
      b[field] = !b[field];
    }
    this.cdRef.markForCheck();
  }
  runTask(action) {
    return __async(this, null, function* () {
      switch (action.action) {
        case Action.MarkAsRead:
          this.actionService.markChapterAsRead(this.libraryId, this.seriesId, this.chapter, (p) => {
            this.chapter.pagesRead = p.pagesRead;
            this.cdRef.markForCheck();
          });
          break;
        case Action.MarkAsUnread:
          this.actionService.markChapterAsUnread(this.libraryId, this.seriesId, this.chapter, (p) => {
            this.chapter.pagesRead = 0;
            this.cdRef.markForCheck();
          });
          break;
        case Action.Delete:
          yield this.actionService.deleteChapter(this.chapter.id, (b) => {
            if (!b)
              return;
            this.modal.close({ success: b, chapter: this.chapter, coverImageUpdate: false, needsReload: true, isDeleted: b });
          });
          break;
        case Action.Download:
          this.downloadService.download("chapter", this.chapter);
          break;
      }
    });
  }
  setupTypeaheads() {
    forkJoin([
      this.setupTagSettings(),
      this.setupGenreTypeahead(),
      this.setupPersonTypeahead(),
      this.setupLanguageTypeahead()
    ]).subscribe((results) => {
      this.cdRef.markForCheck();
    });
  }
  setupTagSettings() {
    this.tagsSettings.minCharacters = 0;
    this.tagsSettings.multiple = true;
    this.tagsSettings.id = "tags";
    this.tagsSettings.unique = true;
    this.tagsSettings.showLocked = true;
    this.tagsSettings.addIfNonExisting = true;
    this.tagsSettings.compareFn = (options, filter) => {
      return options.filter((m) => this.utilityService.filter(m.title, filter));
    };
    this.tagsSettings.fetchFn = (filter) => this.metadataService.getAllTags().pipe(map((items) => this.tagsSettings.compareFn(items, filter)));
    this.tagsSettings.addTransformFn = (title) => {
      return { id: 0, title };
    };
    this.tagsSettings.selectionCompareFn = (a, b) => {
      return a.title.toLowerCase() == b.title.toLowerCase();
    };
    this.tagsSettings.compareFnForAdd = (options, filter) => {
      return options.filter((m) => this.utilityService.filterMatches(m.title, filter));
    };
    if (this.chapter.tags) {
      this.tagsSettings.savedData = this.chapter.tags;
    }
    return of(true);
  }
  setupGenreTypeahead() {
    this.genreSettings.minCharacters = 0;
    this.genreSettings.multiple = true;
    this.genreSettings.id = "genres";
    this.genreSettings.unique = true;
    this.genreSettings.showLocked = true;
    this.genreSettings.addIfNonExisting = true;
    this.genreSettings.fetchFn = (filter) => {
      return this.metadataService.getAllGenres().pipe(map((items) => this.genreSettings.compareFn(items, filter)));
    };
    this.genreSettings.compareFn = (options, filter) => {
      return options.filter((m) => this.utilityService.filter(m.title, filter));
    };
    this.genreSettings.compareFnForAdd = (options, filter) => {
      return options.filter((m) => this.utilityService.filterMatches(m.title, filter));
    };
    this.genreSettings.selectionCompareFn = (a, b) => {
      return a.title.toLowerCase() == b.title.toLowerCase();
    };
    this.genreSettings.addTransformFn = (title) => {
      return { id: 0, title };
    };
    if (this.chapter.genres) {
      this.genreSettings.savedData = this.chapter.genres;
    }
    return of(true);
  }
  setupLanguageTypeahead() {
    this.languageSettings.minCharacters = 0;
    this.languageSettings.multiple = false;
    this.languageSettings.id = "language";
    this.languageSettings.unique = true;
    this.languageSettings.showLocked = true;
    this.languageSettings.addIfNonExisting = false;
    this.languageSettings.compareFn = (options, filter) => {
      return options.filter((m) => this.utilityService.filter(m.title, filter));
    };
    this.languageSettings.compareFnForAdd = (options, filter) => {
      return options.filter((m) => this.utilityService.filterMatches(m.title, filter));
    };
    this.languageSettings.fetchFn = (filter) => of(this.validLanguages).pipe(map((items) => this.languageSettings.compareFn(items, filter)));
    this.languageSettings.selectionCompareFn = (a, b) => {
      return a.isoCode == b.isoCode;
    };
    const l = this.validLanguages.find((l2) => l2.isoCode === this.chapter.language);
    if (l !== void 0) {
      this.languageSettings.savedData = l;
    }
    return of(true);
  }
  updateFromPreset(id, presetField, role) {
    const personSettings = this.createBlankPersonSettings(id, role);
    if (presetField && presetField.length > 0) {
      const fetch = personSettings.fetchFn;
      return fetch("").pipe(map((people) => {
        const presetIds = presetField.map((p) => p.id);
        personSettings.savedData = people.filter((person) => presetIds.includes(person.id));
        this.peopleSettings[role] = personSettings;
        this.metadataService.updatePerson(this.chapter, personSettings.savedData, role);
        this.cdRef.markForCheck();
        return true;
      }));
    } else {
      this.peopleSettings[role] = personSettings;
      return of(true);
    }
  }
  setupPersonTypeahead() {
    this.peopleSettings = {};
    return forkJoin([
      this.updateFromPreset("writer", this.chapter.writers, PersonRole.Writer),
      this.updateFromPreset("character", this.chapter.characters, PersonRole.Character),
      this.updateFromPreset("colorist", this.chapter.colorists, PersonRole.Colorist),
      this.updateFromPreset("cover-artist", this.chapter.coverArtists, PersonRole.CoverArtist),
      this.updateFromPreset("editor", this.chapter.editors, PersonRole.Editor),
      this.updateFromPreset("inker", this.chapter.inkers, PersonRole.Inker),
      this.updateFromPreset("letterer", this.chapter.letterers, PersonRole.Letterer),
      this.updateFromPreset("penciller", this.chapter.pencillers, PersonRole.Penciller),
      this.updateFromPreset("publisher", this.chapter.publishers, PersonRole.Publisher),
      this.updateFromPreset("imprint", this.chapter.imprints, PersonRole.Imprint),
      this.updateFromPreset("translator", this.chapter.translators, PersonRole.Translator),
      this.updateFromPreset("teams", this.chapter.teams, PersonRole.Team),
      this.updateFromPreset("locations", this.chapter.locations, PersonRole.Location)
    ]).pipe(map((results) => {
      return of(true);
    }));
  }
  fetchPeople(role, filter) {
    return this.metadataService.getAllPeople().pipe(map((people) => {
      return people.filter((p) => this.utilityService.filter(p.name, filter));
    }));
  }
  createBlankPersonSettings(id, role) {
    let personSettings = new TypeaheadSettings();
    personSettings.minCharacters = 0;
    personSettings.multiple = true;
    personSettings.showLocked = true;
    personSettings.unique = true;
    personSettings.addIfNonExisting = true;
    personSettings.id = id;
    personSettings.compareFn = (options, filter) => {
      return options.filter((m) => this.utilityService.filter(m.name, filter));
    };
    personSettings.compareFnForAdd = (options, filter) => {
      return options.filter((m) => this.utilityService.filterMatches(m.name, filter));
    };
    personSettings.selectionCompareFn = (a, b) => {
      return a.name == b.name;
    };
    personSettings.fetchFn = (filter) => {
      return this.fetchPeople(role, filter).pipe(map((items) => personSettings.compareFn(items, filter)));
    };
    personSettings.addTransformFn = (title) => {
      return { id: 0, name: title, role, description: "", coverImage: "", coverImageLocked: false, primaryColor: "", secondaryColor: "" };
    };
    return personSettings;
  }
  updateTags(tags) {
    this.tags = tags;
    this.chapter.tags = tags;
    this.cdRef.markForCheck();
  }
  updateGenres(genres) {
    this.genres = genres;
    this.chapter.genres = genres;
    this.cdRef.markForCheck();
  }
  updatePerson(persons, role) {
    this.metadataService.updatePerson(this.chapter, persons, role);
    this.chapter.locationLocked = true;
    this.cdRef.markForCheck();
  }
  updateLanguage(language) {
    if (language.length === 0) {
      this.chapter.language = "";
      return;
    }
    this.chapter.language = language[0].isoCode;
    this.chapter.languageLocked = true;
    this.cdRef.markForCheck();
  }
  updateSelectedIndex(index) {
    this.editForm.patchValue({
      coverImageIndex: index
    });
    this.cdRef.markForCheck();
  }
  updateSelectedImage(url) {
    this.selectedCover = url;
    this.cdRef.markForCheck();
  }
  handleReset() {
    this.coverImageReset = true;
    this.editForm.patchValue({
      coverImageLocked: false
    });
    this.cdRef.markForCheck();
  }
  getPersonsSettings(role) {
    return this.peopleSettings[role];
  }
  static {
    this.\u0275fac = function EditChapterModalComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _EditChapterModalComponent)();
    };
  }
  static {
    this.\u0275cmp = \u0275\u0275defineComponent({ type: _EditChapterModalComponent, selectors: [["app-edit-chapter-modal"]], inputs: { chapter: "chapter", libraryType: "libraryType", libraryId: "libraryId", seriesId: "seriesId" }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 1, vars: 1, consts: [["nav", "ngbNav"], ["lock", ""], ["view", ""], ["badgeItem", ""], ["optionItem", ""], [4, "transloco", "translocoRead"], [1, "modal-container"], [1, "modal-header"], [1, "modal-title"], [3, "libraryType", "entity", "prioritizeTitleName"], ["type", "button", 1, "btn-close", 3, "click"], [1, "modal-body", "scrollable-modal", 3, "ngClass"], [3, "formGroup"], ["ngbNav", "", 1, "nav-pills", 2, "min-width", "135px", 3, "activeIdChange", "activeId", "orientation"], [3, "ngbNavItem"], ["ngbNavLink", ""], ["ngbNavContent", ""], [3, "ngbNavOutlet"], [1, "modal-footer"], ["type", "button", 1, "btn", "btn-secondary", 3, "click"], ["type", "submit", 1, "btn", "btn-primary", 3, "click", "disabled"], [1, "row"], [1, "col-md-9", "col-sm-12", "mb-3"], [3, "title", "showEdit", "toggleOnViewClick"], [1, "col-md-3", "col-sm-12", "mb-3"], [1, "col-lg-9", "col-md-12"], [1, "mb-3"], [3, "title", "toggleOnViewClick", "showEdit"], [1, "col-lg-3", "col-md-12"], [1, "mb-3", 2, "width", "100%"], [1, "input-group", 3, "ngClass"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], ["formControlName", "titleName", "type", "text", 1, "form-control"], [1, "invalid-feedback"], ["formControlName", "sortOrder", "type", "number", "min", "0", "step", "0.1", "inputmode", "numeric", 1, "form-control"], ["formControlName", "isbn", "type", "text", 1, "form-control"], ["id", "age-rating", "formControlName", "ageRating", 1, "form-select"], [3, "value"], [3, "selectedData", "lockedChange", "onUnlock", "newItemAdded", "settings", "locked"], ["formControlName", "releaseDate", "type", "date", 1, "form-control"], ["id", "summary", "formControlName", "summary", "rows", "4", 1, "form-control"], [1, "col-lg-6", "col-md-12", "pe-2"], [1, "col-lg-12", "col-md-12", "pe-2"], ["role", "alert", 1, "alert", "alert-warning"], [3, "imageUrlsChange", "imageSelected", "selectedBase64Url", "resetClicked", "imageUrls", "showReset"], [1, "setting-section-break"], [1, "container-fluid", "mb-3"], [1, "section-title"], [1, "col-auto"], ["target", "_blank", "rel", "noopener noreferrer", 1, "me-1", 3, "href", "title"], ["height", "24px", "width", "24px", "aria-hidden", "true", 3, "imageUrl", "errorImage"], [1, "ms-2", "me-2"], [3, "chapter"], [1, "mt-3", "mb-3"], [3, "subtitle"], [3, "click"], [1, "input-group-text", "clickable", 3, "click"], ["aria-hidden", "true", 1, "fa", "fa-lock"], [1, "visually-hidden"]], template: function EditChapterModalComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, EditChapterModalComponent_ng_container_0_Template, 35, 28, "ng-container", 5);
      }
      if (rf & 2) {
        \u0275\u0275property("translocoRead", "edit-chapter-modal");
      }
    }, dependencies: [
      FormsModule,
      \u0275NgNoValidate,
      NgSelectOption,
      \u0275NgSelectMultipleOption,
      DefaultValueAccessor,
      NumberValueAccessor,
      SelectControlValueAccessor,
      NgControlStatus,
      NgControlStatusGroup,
      MinValidator,
      NgbNav,
      NgbNavContent,
      NgbNavLink,
      TranslocoDirective,
      AsyncPipe,
      NgbNavOutlet,
      ReactiveFormsModule,
      FormGroupDirective,
      FormControlName,
      NgbNavItem,
      SettingItemComponent,
      NgTemplateOutlet,
      NgClass,
      TypeaheadComponent,
      EntityTitleComponent,
      TitleCasePipe,
      SettingButtonComponent,
      CoverImageChooserComponent,
      EditChapterProgressComponent,
      CompactNumberPipe,
      DefaultDatePipe,
      UtcToLocalTimePipe,
      BytesPipe,
      ImageComponent,
      SafeHtmlPipe,
      ReadTimePipe
    ], styles: ["\n\n.lock-active[_ngcontent-%COMP%]    > .input-group-text[_ngcontent-%COMP%] {\n  background-color: var(--primary-color);\n  color: white;\n}\n/*# sourceMappingURL=edit-chapter-modal.component.css.map */"], changeDetection: 0 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(EditChapterModalComponent, { className: "EditChapterModalComponent", filePath: "src/app/_single-module/edit-chapter-modal/edit-chapter-modal.component.ts", lineNumber: 121 });
})();

// src/app/_single-module/age-rating-image/age-rating-image.component.ts
var basePath = "./assets/images/ratings/";
var AgeRatingImageComponent = class _AgeRatingImageComponent {
  constructor() {
    this.cdRef = inject(ChangeDetectorRef);
    this.filterUtilityService = inject(FilterUtilitiesService);
    this.AgeRating = AgeRating;
    this.rating = AgeRating.Unknown;
    this.imageUrl = "unknown-rating.png";
  }
  ngOnInit() {
    this.setImage();
  }
  ngOnChanges() {
    this.setImage();
  }
  setImage() {
    switch (this.rating) {
      case AgeRating.Unknown:
        this.imageUrl = basePath + "unknown-rating.png";
        break;
      case AgeRating.RatingPending:
        this.imageUrl = basePath + "rating-pending-rating.png";
        break;
      case AgeRating.EarlyChildhood:
        this.imageUrl = basePath + "early-childhood-rating.png";
        break;
      case AgeRating.Everyone:
        this.imageUrl = basePath + "everyone-rating.png";
        break;
      case AgeRating.G:
        this.imageUrl = basePath + "g-rating.png";
        break;
      case AgeRating.Everyone10Plus:
        this.imageUrl = basePath + "everyone-10+-rating.png";
        break;
      case AgeRating.PG:
        this.imageUrl = basePath + "pg-rating.png";
        break;
      case AgeRating.KidsToAdults:
        this.imageUrl = basePath + "kids-to-adults-rating.png";
        break;
      case AgeRating.Teen:
        this.imageUrl = basePath + "teen-rating.png";
        break;
      case AgeRating.Mature15Plus:
        this.imageUrl = basePath + "ma15+-rating.png";
        break;
      case AgeRating.Mature17Plus:
        this.imageUrl = basePath + "mature-17+-rating.png";
        break;
      case AgeRating.Mature:
        this.imageUrl = basePath + "m-rating.png";
        break;
      case AgeRating.R18Plus:
        this.imageUrl = basePath + "r18+-rating.png";
        break;
      case AgeRating.AdultsOnly:
        this.imageUrl = basePath + "adults-only-18+-rating.png";
        break;
      case AgeRating.X18Plus:
        this.imageUrl = basePath + "x18+-rating.png";
        break;
    }
    this.cdRef.markForCheck();
  }
  openRating() {
    this.filterUtilityService.applyFilter(["all-series"], FilterField.AgeRating, FilterComparison.Equal, `${this.rating}`).subscribe();
  }
  static {
    this.\u0275fac = function AgeRatingImageComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AgeRatingImageComponent)();
    };
  }
  static {
    this.\u0275cmp = \u0275\u0275defineComponent({ type: _AgeRatingImageComponent, selectors: [["app-age-rating-image"]], inputs: { rating: "rating" }, standalone: true, features: [\u0275\u0275NgOnChangesFeature, \u0275\u0275StandaloneFeature], decls: 2, vars: 4, consts: [["height", "32px", "width", "32px", "classes", "clickable", 3, "click", "imageUrl", "ngbTooltip"]], template: function AgeRatingImageComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "app-image", 0);
        \u0275\u0275pipe(1, "ageRating");
        \u0275\u0275listener("click", function AgeRatingImageComponent_Template_app_image_click_0_listener() {
          return ctx.openRating();
        });
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275propertyInterpolate("ngbTooltip", \u0275\u0275pipeBind1(1, 2, ctx.rating));
        \u0275\u0275property("imageUrl", ctx.imageUrl);
      }
    }, dependencies: [
      ImageComponent,
      NgbTooltip,
      AgeRatingPipe
    ], changeDetection: 0 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AgeRatingImageComponent, { className: "AgeRatingImageComponent", filePath: "src/app/_single-module/age-rating-image/age-rating-image.component.ts", lineNumber: 35 });
})();

// src/app/_pipes/read-time-left.pipe.ts
var ReadTimeLeftPipe = class _ReadTimeLeftPipe {
  constructor(translocoService) {
    this.translocoService = translocoService;
  }
  transform(readingTimeLeft) {
    const hoursLabel = readingTimeLeft.avgHours > 1 ? this.translocoService.translate("read-time-pipe.hours") : this.translocoService.translate("read-time-pipe.hour");
    const formattedHours = this.customRound(readingTimeLeft.avgHours);
    return `~${formattedHours} ${hoursLabel}`;
  }
  customRound(value) {
    const integerPart = Math.floor(value);
    const decimalPart = value - integerPart;
    if (decimalPart < 0.5) {
      return integerPart.toString();
    } else if (decimalPart >= 0.5 && decimalPart < 0.9) {
      return value.toFixed(1);
    } else {
      return Math.ceil(value).toString();
    }
  }
  static {
    this.\u0275fac = function ReadTimeLeftPipe_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ReadTimeLeftPipe)(\u0275\u0275directiveInject(TranslocoService, 16));
    };
  }
  static {
    this.\u0275pipe = \u0275\u0275definePipe({ name: "readTimeLeft", type: _ReadTimeLeftPipe, pure: true, standalone: true });
  }
};

// src/app/_single-module/publisher-flipper/publisher-flipper.component.ts
function PublisherFlipperComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3);
    \u0275\u0275element(4, "app-image", 4);
    \u0275\u0275elementStart(5, "div", 5);
    \u0275\u0275listener("click", function PublisherFlipperComponent_Conditional_0_Template_div_click_5_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openPublisher(ctx_r1.currentPublisher.id));
    });
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(7, "div", 6)(8, "div", 3);
    \u0275\u0275element(9, "app-image", 4);
    \u0275\u0275elementStart(10, "div", 5);
    \u0275\u0275listener("click", function PublisherFlipperComponent_Conditional_0_Template_div_click_10_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openPublisher(ctx_r1.nextPublisher.id));
    });
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275classProp("is-flipped", ctx_r1.isFlipped);
    \u0275\u0275advance(3);
    \u0275\u0275property("imageUrl", ctx_r1.imageService.getPublisherImage(ctx_r1.currentPublisher.name))("classes", "me-2")("hideOnError", true);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.currentPublisher.name, " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("imageUrl", ctx_r1.imageService.getPublisherImage(ctx_r1.nextPublisher.name))("classes", "me-2")("hideOnError", true);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.nextPublisher.name, " ");
  }
}
var ANIMATION_TIME = 3e3;
var PublisherFlipperComponent = class _PublisherFlipperComponent {
  constructor() {
    this.imageService = inject(ImageService);
    this.filterUtilityService = inject(FilterUtilitiesService);
    this.cdRef = inject(ChangeDetectorRef);
    this.router = inject(Router);
    this.publishers = [];
    this.currentPublisher = void 0;
    this.nextPublisher = void 0;
    this.currentIndex = 0;
    this.isFlipped = false;
  }
  ngOnInit() {
    if (this.publishers.length > 0) {
      this.currentPublisher = this.publishers[0];
      this.nextPublisher = this.publishers[1] || this.publishers[0];
    }
  }
  ngAfterViewInit() {
    if (this.publishers.length > 1) {
      this.startFlipping();
    }
  }
  ngAfterViewChecked() {
    if (this.isFlipped) {
      this.currentIndex = (this.currentIndex + 1) % this.publishers.length;
      this.currentPublisher = this.publishers[this.currentIndex];
      this.nextPublisher = this.publishers[(this.currentIndex + 1) % this.publishers.length];
    }
  }
  ngOnDestroy() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }
  startFlipping() {
    this.intervalId = setInterval(() => {
      this.isFlipped = !this.isFlipped;
      this.cdRef.detectChanges();
    }, ANIMATION_TIME);
  }
  openPublisher(filter) {
    this.filterUtilityService.applyFilter(["all-series"], FilterField.Publisher, FilterComparison.Equal, `${filter}`).subscribe();
  }
  static {
    this.\u0275fac = function PublisherFlipperComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _PublisherFlipperComponent)();
    };
  }
  static {
    this.\u0275cmp = \u0275\u0275defineComponent({ type: _PublisherFlipperComponent, selectors: [["app-publisher-flipper"]], inputs: { publishers: "publishers" }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 1, vars: 1, consts: [[1, "publisher-wrapper"], [1, "publisher-flipper"], [1, "publisher-side", "publisher-front"], [1, "publisher-img-container", "d-inline-flex", "align-items-center", "me-2", "position-relative"], ["width", "32px", "height", "32px", "aria-hidden", "true", 3, "imageUrl", "classes", "hideOnError"], [1, "position-relative", "d-inline-block", 3, "click"], [1, "publisher-side", "publisher-back"]], template: function PublisherFlipperComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, PublisherFlipperComponent_Conditional_0_Template, 12, 10, "div", 0);
      }
      if (rf & 2) {
        \u0275\u0275conditional(ctx.publishers.length > 0 ? 0 : -1);
      }
    }, dependencies: [ImageComponent], styles: ["\n\n.publisher-wrapper[_ngcontent-%COMP%] {\n  perspective: 1000px;\n  height: 32px;\n  background-color: var(--card-bg-color);\n  border-radius: 3px;\n  padding: 2px 5px;\n  font-size: 0.8rem;\n  vertical-align: middle;\n}\n.publisher-wrapper[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  min-height: 32px;\n  line-height: 32px;\n}\n.publisher-flipper[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n  height: 100%;\n  text-align: left;\n  transition: transform 0.6s ease;\n  transform-style: preserve-3d;\n}\n.publisher-flipper.is-flipped[_ngcontent-%COMP%] {\n  transform: rotateX(180deg);\n}\n.publisher-side[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  backface-visibility: hidden;\n}\n.publisher-front[_ngcontent-%COMP%] {\n  z-index: 2;\n}\n.publisher-back[_ngcontent-%COMP%] {\n  transform: rotateX(180deg);\n}\n/*# sourceMappingURL=publisher-flipper.component.css.map */"], changeDetection: 0 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PublisherFlipperComponent, { className: "PublisherFlipperComponent", filePath: "src/app/_single-module/publisher-flipper/publisher-flipper.component.ts", lineNumber: 32 });
})();

// src/app/series-detail/_components/metadata-detail-row/metadata-detail-row.component.ts
var _c02 = (a0) => ({ num: a0 });
function MetadataDetailRowComponent_ng_container_0_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 2);
    \u0275\u0275element(1, "app-image", 8);
    \u0275\u0275elementStart(2, "div", 9);
    \u0275\u0275listener("click", function MetadataDetailRowComponent_ng_container_0_Conditional_2_Template_div_click_2_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.openGeneric(ctx_r1.FilterField.Publisher, ctx_r1.entity.publishers[0].id));
    });
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("imageUrl", ctx_r1.imageService.getPublisherImage(ctx_r1.entity.publishers[0].name))("classes", "me-2")("hideOnError", true);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.entity.publishers[0].name);
  }
}
function MetadataDetailRowComponent_ng_container_0_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 6);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "compactNumber");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r3 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(t_r3("words-count", \u0275\u0275pureFunction1(3, _c02, \u0275\u0275pipeBind1(2, 1, ctx_r1.readingTimeEntity.wordCount))));
  }
}
function MetadataDetailRowComponent_ng_container_0_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 6);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "compactNumber");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r3 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(t_r3("pages-count", \u0275\u0275pureFunction1(3, _c02, \u0275\u0275pipeBind1(2, 1, ctx_r1.readingTimeEntity.pages))));
  }
}
function MetadataDetailRowComponent_ng_container_0_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 7);
    \u0275\u0275element(1, "i", 10);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "readTimeLeft");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r3 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("ngbTooltip", t_r3("time-left-alt"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 2, ctx_r1.readingTimeLeft), " ");
  }
}
function MetadataDetailRowComponent_ng_container_0_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 7);
    \u0275\u0275element(1, "i", 11);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "readTime");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r3 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("ngbTooltip", t_r3("time-to-read-alt"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 2, ctx_r1.readingTimeEntity), " ");
  }
}
function MetadataDetailRowComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 1);
    \u0275\u0275template(2, MetadataDetailRowComponent_ng_container_0_Conditional_2_Template, 4, 4, "div", 2);
    \u0275\u0275elementStart(3, "span", 3);
    \u0275\u0275element(4, "app-age-rating-image", 4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 3);
    \u0275\u0275element(6, "app-series-format", 5);
    \u0275\u0275elementEnd();
    \u0275\u0275template(7, MetadataDetailRowComponent_ng_container_0_Conditional_7_Template, 3, 5, "span", 6)(8, MetadataDetailRowComponent_ng_container_0_Conditional_8_Template, 3, 5, "span", 6)(9, MetadataDetailRowComponent_ng_container_0_Conditional_9_Template, 4, 4, "span", 7)(10, MetadataDetailRowComponent_ng_container_0_Conditional_10_Template, 4, 4, "span", 7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.entity.publishers.length > 0 ? 2 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275property("rating", ctx_r1.ageRating);
    \u0275\u0275advance(2);
    \u0275\u0275property("format", ctx_r1.mangaFormat)("useTitle", false);
    \u0275\u0275advance();
    \u0275\u0275conditional((ctx_r1.libraryType === ctx_r1.LibraryType.Book || ctx_r1.libraryType === ctx_r1.LibraryType.LightNovel) && ctx_r1.mangaFormat !== ctx_r1.MangaFormat.PDF ? 7 : 8);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.hasReadingProgress && ctx_r1.readingTimeLeft && ctx_r1.readingTimeLeft.avgHours !== 0 ? 9 : 10);
  }
}
var MetadataDetailRowComponent = class _MetadataDetailRowComponent {
  constructor() {
    this.imageService = inject(ImageService);
    this.filterUtilityService = inject(FilterUtilitiesService);
    this.LibraryType = LibraryType;
    this.FilterField = FilterField;
    this.MangaFormat = MangaFormat;
    this.hasReadingProgress = false;
    this.readingTimeLeft = null;
    this.ageRating = AgeRating.Unknown;
  }
  openGeneric(queryParamName, filter) {
    if (queryParamName === FilterField.None)
      return;
    this.filterUtilityService.applyFilter(["all-series"], queryParamName, FilterComparison.Equal, `${filter}`).subscribe();
  }
  static {
    this.\u0275fac = function MetadataDetailRowComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _MetadataDetailRowComponent)();
    };
  }
  static {
    this.\u0275cmp = \u0275\u0275defineComponent({ type: _MetadataDetailRowComponent, selectors: [["app-metadata-detail-row"]], inputs: { entity: "entity", readingTimeEntity: "readingTimeEntity", hasReadingProgress: "hasReadingProgress", readingTimeLeft: "readingTimeLeft", ageRating: "ageRating", libraryType: "libraryType", mangaFormat: "mangaFormat" }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 1, vars: 1, consts: [[4, "transloco", "translocoRead"], [1, "mt-2", "mb-2"], [1, "publisher-img-container", "d-inline-flex", "align-items-center", "me-2", "position-relative"], [1, "me-2"], [3, "rating"], [3, "format", "useTitle"], [1, "word-count", "me-3"], [1, "time-left", 3, "ngbTooltip"], ["width", "32px", "height", "32px", "aria-hidden", "true", 3, "imageUrl", "classes", "hideOnError"], [1, "position-relative", "d-inline-block", 3, "click"], ["aria-hidden", "true", 1, "fa-solid", "fa-clock"], ["aria-hidden", "true", 1, "fa-regular", "fa-clock"]], template: function MetadataDetailRowComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, MetadataDetailRowComponent_ng_container_0_Template, 11, 6, "ng-container", 0);
      }
      if (rf & 2) {
        \u0275\u0275property("translocoRead", "series-detail");
      }
    }, dependencies: [
      AgeRatingImageComponent,
      CompactNumberPipe,
      ReadTimeLeftPipe,
      ReadTimePipe,
      NgbTooltip,
      TranslocoDirective,
      ImageComponent,
      SeriesFormatComponent
    ], styles: ["\n\n.publisher-img-container[_ngcontent-%COMP%] {\n  background-color: var(--card-bg-color);\n  border-radius: 3px;\n  padding: 2px 5px;\n  font-size: 0.8rem;\n  vertical-align: middle;\n}\n.publisher-img-container[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  min-height: 32px;\n  line-height: 32px;\n}\n.time-left[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n}\n.word-count[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n}\n/*# sourceMappingURL=metadata-detail-row.component.css.map */"], changeDetection: 0 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MetadataDetailRowComponent, { className: "MetadataDetailRowComponent", filePath: "src/app/series-detail/_components/metadata-detail-row/metadata-detail-row.component.ts", lineNumber: 40 });
})();

// src/app/series-detail/_components/download-button/download-button.component.ts
function DownloadButtonComponent_ng_container_0_Conditional_1_Conditional_0_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 5);
    \u0275\u0275elementStart(1, "span", 6);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r3 = \u0275\u0275nextContext(3).$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r3("downloading-status"));
  }
}
function DownloadButtonComponent_ng_container_0_Conditional_1_Conditional_0_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 4);
  }
}
function DownloadButtonComponent_ng_container_0_Conditional_1_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 3);
    \u0275\u0275listener("click", function DownloadButtonComponent_ng_container_0_Conditional_1_Conditional_0_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.downloadClicked());
    });
    \u0275\u0275template(1, DownloadButtonComponent_ng_container_0_Conditional_1_Conditional_0_Conditional_1_Template, 3, 1)(2, DownloadButtonComponent_ng_container_0_Conditional_1_Conditional_0_Conditional_2_Template, 1, 0, "i", 4);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const download_r4 = ctx;
    const t_r3 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275property("ngbTooltip", t_r3("download-tooltip"))("disabled", download_r4 !== null);
    \u0275\u0275advance();
    \u0275\u0275conditional(download_r4 ? 1 : 2);
  }
}
function DownloadButtonComponent_ng_container_0_Conditional_1_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 7);
    \u0275\u0275listener("click", function DownloadButtonComponent_ng_container_0_Conditional_1_Conditional_2_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.downloadClicked());
    });
    \u0275\u0275element(1, "i", 4);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r3 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275property("ngbTooltip", t_r3("download-tooltip"));
  }
}
function DownloadButtonComponent_ng_container_0_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, DownloadButtonComponent_ng_container_0_Conditional_1_Conditional_0_Template, 3, 3, "button", 1);
    \u0275\u0275pipe(1, "async");
    \u0275\u0275template(2, DownloadButtonComponent_ng_container_0_Conditional_1_Conditional_2_Template, 2, 1, "button", 2);
  }
  if (rf & 2) {
    let tmp_3_0;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275conditional((tmp_3_0 = \u0275\u0275pipeBind1(1, 1, ctx_r1.download$)) ? 0 : 2, tmp_3_0);
  }
}
function DownloadButtonComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, DownloadButtonComponent_ng_container_0_Conditional_1_Template, 3, 3);
    \u0275\u0275pipe(2, "async");
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional(\u0275\u0275pipeBind1(2, 1, ctx_r1.canDownload$) ? 1 : -1);
  }
}
var DownloadButtonComponent = class _DownloadButtonComponent {
  constructor() {
    this.destroyRef = inject(DestroyRef);
    this.accountService = inject(AccountService);
    this.cdRef = inject(ChangeDetectorRef);
    this.downloadService = inject(DownloadService);
    this.download$ = null;
    this.entityType = "series";
    this.isDownloading = false;
    this.canDownload$ = this.accountService.currentUser$.pipe(takeUntilDestroyed(this.destroyRef), map((u) => !!u && (this.accountService.hasAdminRole(u) || this.accountService.hasDownloadRole(u)), shareReplay({ bufferSize: 1, refCount: true })));
  }
  ngOnInit() {
    if (this.download$ != null) {
      this.download$.pipe(takeUntilDestroyed(this.destroyRef), tap((d) => {
        if (d && d.progress >= 100) {
          this.isDownloading = false;
          this.cdRef.markForCheck();
        }
      })).subscribe();
    }
  }
  downloadClicked() {
    if (this.isDownloading)
      return;
    this.downloadService.download(this.entityType, this.entity, (d) => {
      this.isDownloading = !!d;
      this.cdRef.markForCheck();
    });
  }
  static {
    this.\u0275fac = function DownloadButtonComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _DownloadButtonComponent)();
    };
  }
  static {
    this.\u0275cmp = \u0275\u0275defineComponent({ type: _DownloadButtonComponent, selectors: [["app-download-button"]], inputs: { download$: "download$", entity: "entity", entityType: "entityType" }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 1, vars: 1, consts: [[4, "transloco", "translocoRead"], [1, "btn", "btn-actions", 3, "ngbTooltip", "disabled"], [1, "btn", "btn-actions", 3, "ngbTooltip"], [1, "btn", "btn-actions", 3, "click", "ngbTooltip", "disabled"], ["aria-hidden", "true", 1, "fa", "fa-arrow-alt-circle-down"], ["role", "status", "aria-hidden", "true", 1, "spinner-border", "spinner-border-sm"], [1, "visually-hidden"], [1, "btn", "btn-actions", 3, "click", "ngbTooltip"]], template: function DownloadButtonComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, DownloadButtonComponent_ng_container_0_Template, 3, 3, "ng-container", 0);
      }
      if (rf & 2) {
        \u0275\u0275property("translocoRead", "download-button");
      }
    }, dependencies: [
      AsyncPipe,
      NgbTooltip,
      TranslocoDirective
    ], changeDetection: 0 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DownloadButtonComponent, { className: "DownloadButtonComponent", filePath: "src/app/series-detail/_components/download-button/download-button.component.ts", lineNumber: 33 });
})();

// src/app/_single-module/cover-image/cover-image.component.ts
var _c03 = () => ({ "background": "none" });
var _c12 = () => ({ "object-fit": "contain", "background": "none", "max-height": "400px" });
var _c22 = (a0) => ({ title: a0 });
function CoverImageComponent_ng_container_0_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-image", 1);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("styles", \u0275\u0275pureFunction0(2, _c03))("imageUrl", ctx_r1.coverImage);
  }
}
function CoverImageComponent_ng_container_0_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-image", 1);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("styles", \u0275\u0275pureFunction0(2, _c12))("imageUrl", ctx_r1.coverImage);
  }
}
function CoverImageComponent_ng_container_0_Conditional_9_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9)(1, "div", 10);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const t_r3 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", t_r3("continue-from", \u0275\u0275pureFunction1(1, _c22, ctx_r1.continueTitle)), " ");
  }
}
function CoverImageComponent_ng_container_0_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7);
    \u0275\u0275pipe(1, "number");
    \u0275\u0275element(2, "ngb-progressbar", 8);
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, CoverImageComponent_ng_container_0_Conditional_9_Conditional_3_Template, 3, 3, "div", 9);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275propertyInterpolate1("ngbTooltip", "", \u0275\u0275pipeBind2(1, 6, ctx_r1.entity.pagesRead / ctx_r1.entity.pages * 100, "1.0-1"), "%");
    \u0275\u0275advance(2);
    \u0275\u0275property("value", ctx_r1.entity.pagesRead)("max", ctx_r1.entity.pages)("showValue", true);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.continueTitle !== "" ? 3 : -1);
  }
}
function CoverImageComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, CoverImageComponent_ng_container_0_Conditional_1_Template, 1, 3, "app-image", 1)(2, CoverImageComponent_ng_container_0_Conditional_2_Template, 1, 3, "app-image", 1);
    \u0275\u0275element(3, "div", 2);
    \u0275\u0275elementStart(4, "div", 3)(5, "div", 4)(6, "span", 5);
    \u0275\u0275listener("click", function CoverImageComponent_ng_container_0_Template_span_click_6_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.read.emit());
    });
    \u0275\u0275elementStart(7, "div");
    \u0275\u0275element(8, "i", 6);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275template(9, CoverImageComponent_ng_container_0_Conditional_9_Template, 4, 9);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.mobileSeriesImgBackground === "true" ? 1 : 2);
    \u0275\u0275advance(8);
    \u0275\u0275conditional(ctx_r1.entity.pagesRead < ctx_r1.entity.pages && ctx_r1.entity.pagesRead > 0 ? 9 : -1);
  }
}
var CoverImageComponent = class _CoverImageComponent {
  constructor() {
    this.continueTitle = "";
    this.read = new EventEmitter();
    this.mobileSeriesImgBackground = getComputedStyle(document.documentElement).getPropertyValue("--mobile-series-img-background").trim();
  }
  static {
    this.\u0275fac = function CoverImageComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CoverImageComponent)();
    };
  }
  static {
    this.\u0275cmp = \u0275\u0275defineComponent({ type: _CoverImageComponent, selectors: [["app-cover-image"]], inputs: { coverImage: "coverImage", entity: "entity", continueTitle: "continueTitle" }, outputs: { read: "read" }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 1, vars: 1, consts: [[4, "transloco", "translocoRead"], [3, "styles", "imageUrl"], [1, "card-overlay"], [1, "overlay-information"], [1, "overlay-information--centered"], [1, "card-title", "library", "mx-auto", 2, "width", "auto", 3, "click"], ["aria-hidden", "true", 1, "fa-solid", "fa-book", "text-center"], [1, "progress-banner", "series", 3, "ngbTooltip"], ["type", "primary", 3, "value", "max", "showValue"], [1, "under-image"], [1, "continue-from"]], template: function CoverImageComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, CoverImageComponent_ng_container_0_Template, 10, 2, "ng-container", 0);
      }
      if (rf & 2) {
        \u0275\u0275property("translocoRead", "series-detail");
      }
    }, dependencies: [
      TranslocoDirective,
      ImageComponent,
      NgbProgressbar,
      DecimalPipe,
      NgbTooltip
    ], styles: ["\n\n.overlay-information[_ngcontent-%COMP%] {\n  position: relative;\n  top: -364px;\n  height: 364px;\n  transition: all 0.2s;\n  border-top-left-radius: 4px;\n  border-top-right-radius: 4px;\n}\n.overlay-information[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n  background-color: var(--card-overlay-hover-bg-color) !important;\n}\n.overlay-information[_ngcontent-%COMP%]:hover   .overlay-information--centered[_ngcontent-%COMP%] {\n  visibility: visible;\n}\n.overlay-information[_ngcontent-%COMP%]   .overlay-information--centered[_ngcontent-%COMP%] {\n  position: absolute;\n  border-radius: 15px;\n  background-color: rgba(0, 0, 0, 0.7);\n  border-radius: 50px;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  z-index: 115;\n  visibility: hidden;\n}\n.overlay-information[_ngcontent-%COMP%]   .overlay-information--centered[_ngcontent-%COMP%]:hover {\n  background-color: var(--primary-color) !important;\n  cursor: pointer;\n}\n.overlay-information[_ngcontent-%COMP%]   .overlay-information--centered[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  width: 60px;\n  height: 60px;\n}\n.overlay-information[_ngcontent-%COMP%]   .overlay-information--centered[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 1.6rem;\n  line-height: 60px;\n  width: 100%;\n}\n.overlay-information[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 12px;\n  width: calc(100% - 24px);\n  height: 100%;\n  transition: all 0.2s;\n  border-top-left-radius: 4px;\n  border-top-right-radius: 4px;\n}\n.overlay-information[_ngcontent-%COMP%]:hover {\n  background-color: var(--card-overlay-hover-bg-color);\n  cursor: pointer;\n}\n.overlay-information[_ngcontent-%COMP%]   .overlay-information--centered[_ngcontent-%COMP%] {\n  position: absolute;\n  border-radius: 15px;\n  background-color: rgba(0, 0, 0, 0.7);\n  border-radius: 50px;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  z-index: 115;\n}\n.overlay-information[_ngcontent-%COMP%]   .overlay-information--centered[_ngcontent-%COMP%]:hover {\n  background-color: var(--primary-color) !important;\n  cursor: pointer;\n}\n.series[_ngcontent-%COMP%]   .overlay-information--centered[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  height: 32px;\n  width: 32px;\n}\n.series[_ngcontent-%COMP%]   .overlay-information--centered[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 1.4rem;\n  line-height: 32px;\n}\n  .image-container app-image img {\n  border-radius: 4px 4px 0 0;\n}\n.progress[_ngcontent-%COMP%] {\n  border-radius: 0;\n}\n.progress-banner.series[_ngcontent-%COMP%] {\n  position: relative;\n}\n  .progress-banner.series span {\n  position: absolute;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  color: white;\n  top: 50%;\n}\n.under-image[_ngcontent-%COMP%] {\n  position: relative;\n}\n.under-image[_ngcontent-%COMP%]   .continue-from[_ngcontent-%COMP%] {\n  background-color: var(--breadcrumb-bg-color);\n  color: white;\n  border-bottom-left-radius: 5px;\n  border-bottom-right-radius: 5px;\n  text-align: center;\n  position: absolute;\n  width: 100%;\n  font-size: 0.8rem;\n  -webkit-line-clamp: 1;\n  font-size: 0.8rem;\n  overflow: hidden;\n  display: -webkit-box;\n  -webkit-box-orient: vertical;\n  padding: 0 10px 0 0;\n}\n@media screen and (max-width: 991px) {\n  .overlay-information[_ngcontent-%COMP%] {\n    visibility: hidden;\n  }\n  .overlay-information[_ngcontent-%COMP%]   .overlay-information--centered[_ngcontent-%COMP%] {\n    visibility: hidden !important;\n  }\n  .progress-banner[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .under-image[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n/*# sourceMappingURL=cover-image.component.css.map */"], changeDetection: 0 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CoverImageComponent, { className: "CoverImageComponent", filePath: "src/app/_single-module/cover-image/cover-image.component.ts", lineNumber: 26 });
})();

export {
  EditChapterProgressComponent,
  EditChapterModalComponent,
  MetadataDetailRowComponent,
  DownloadButtonComponent,
  CoverImageComponent
};
//# sourceMappingURL=chunk-ARJ4KDAL.js.map
