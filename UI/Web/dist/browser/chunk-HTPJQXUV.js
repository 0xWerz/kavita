import {
  SeriesService
} from "./chunk-HG4LWHDT.js";
import {
  FilterService
} from "./chunk-6M2JHRYX.js";
import {
  ReaderService
} from "./chunk-D2FQ65JS.js";
import {
  TranslocoPercentPipe
} from "./chunk-HSFLUHPU.js";
import {
  SettingButtonComponent
} from "./chunk-4AQVNEIP.js";
import {
  ReadingListService
} from "./chunk-2XUUWUDC.js";
import {
  CollectionTagService
} from "./chunk-AOHQX7B2.js";
import {
  DirectoryPickerComponent
} from "./chunk-ECSSQE2U.js";
import {
  ReadMoreComponent
} from "./chunk-BJ7U7OXN.js";
import {
  DefaultDatePipe
} from "./chunk-DMXJBIB5.js";
import {
  WikiLink
} from "./chunk-GX7EGMKV.js";
import {
  NgxFileDropComponent,
  NgxFileDropContentTemplateDirective,
  NgxFileDropModule
} from "./chunk-M6XH7OA7.js";
import {
  SentenceCasePipe
} from "./chunk-IQIEDCQT.js";
import {
  DefaultModalOptions
} from "./chunk-ZLESQ73K.js";
import {
  FilterPipe
} from "./chunk-NGXWDHM5.js";
import {
  MemberService
} from "./chunk-XZ5MKEYT.js";
import {
  LibraryService
} from "./chunk-PBM62GK4.js";
import {
  SettingSwitchComponent
} from "./chunk-HXDVBBHR.js";
import {
  SettingsService
} from "./chunk-65GP3B4U.js";
import {
  ImageComponent
} from "./chunk-2JLAQ3MZ.js";
import {
  ImageService
} from "./chunk-TPURWX2Y.js";
import {
  SettingItemComponent
} from "./chunk-KJWRNOWO.js";
import {
  LoadingComponent
} from "./chunk-D7CIAEAO.js";
import {
  Select2Module
} from "./chunk-LGLLZBOI.js";
import {
  ScrobbleProvider
} from "./chunk-R5PSFMI2.js";
import {
  Breakpoint,
  KEY_CODES,
  LibraryType,
  UtilityService,
  allLibraryTypes
} from "./chunk-A6JEQ5GB.js";
import {
  AccountService,
  Action,
  ActionFactoryService,
  DeviceService,
  ThemeService
} from "./chunk-U2DWQJI2.js";
import {
  ConfirmService,
  NgbActiveModal,
  NgbModal,
  NgbModalModule,
  NgbNav,
  NgbNavContent,
  NgbNavItem,
  NgbNavItemRole,
  NgbNavLink,
  NgbNavOutlet,
  NgbTooltip
} from "./chunk-2R2RCU4Y.js";
import {
  ToastrService
} from "./chunk-5J5IKBMT.js";
import {
  CheckboxControlValueAccessor,
  DefaultValueAccessor,
  FormBuilder,
  FormControl,
  FormControlName,
  FormGroup,
  FormGroupDirective,
  NgControlStatus,
  NgControlStatusGroup,
  NgSelectOption,
  NumberValueAccessor,
  ReactiveFormsModule,
  SelectControlValueAccessor,
  TextResonse,
  Validators,
  ɵNgNoValidate,
  ɵNgSelectMultipleOption
} from "./chunk-BPOUBDX2.js";
import {
  HttpClient,
  environment
} from "./chunk-CQADFT7F.js";
import {
  AsyncPipe,
  ChangeDetectorRef,
  CommonModule,
  DOCUMENT,
  DatePipe,
  DestroyRef,
  EventEmitter,
  NgClass,
  NgForOf,
  NgIf,
  NgTemplateOutlet,
  TranslocoDirective,
  TranslocoModule,
  TranslocoService,
  __async,
  __spreadProps,
  __spreadValues,
  debounceTime,
  distinctUntilChanged,
  forkJoin,
  fromEvent,
  inject,
  switchMap,
  take,
  takeUntilDestroyed,
  takeWhile,
  tap,
  translate,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMapInterpolate1,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdefinePipe,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainer,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵinject,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpropertyInterpolate,
  ɵɵpropertyInterpolate1,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵqueryRefresh,
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
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty,
  ɵɵviewQuery
} from "./chunk-PYHIUVNJ.js";

// src/app/_pipes/library-type.pipe.ts
var LibraryTypePipe = class _LibraryTypePipe {
  constructor() {
    this.translocoService = inject(TranslocoService);
  }
  transform(libraryType) {
    switch (libraryType) {
      case LibraryType.Book:
        return this.translocoService.translate("library-type-pipe.book");
      case LibraryType.Comic:
        return this.translocoService.translate("library-type-pipe.comic");
      case LibraryType.ComicVine:
        return this.translocoService.translate("library-type-pipe.comicVine");
      case LibraryType.Images:
        return this.translocoService.translate("library-type-pipe.image");
      case LibraryType.Manga:
        return this.translocoService.translate("library-type-pipe.manga");
      case LibraryType.LightNovel:
        return this.translocoService.translate("library-type-pipe.lightNovel");
      default:
        return "";
    }
  }
  static {
    this.\u0275fac = function LibraryTypePipe_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _LibraryTypePipe)();
    };
  }
  static {
    this.\u0275pipe = \u0275\u0275definePipe({ name: "libraryType", type: _LibraryTypePipe, pure: true, standalone: true });
  }
};

// src/app/_services/upload.service.ts
var UploadService = class _UploadService {
  constructor(httpClient) {
    this.httpClient = httpClient;
    this.baseUrl = environment.apiUrl;
    this.toastr = inject(ToastrService);
  }
  uploadByUrl(url) {
    return this.httpClient.post(this.baseUrl + "upload/upload-by-url", { url }, TextResonse);
  }
  updateSeriesCoverImage(seriesId, url, lockCover = true) {
    return this.httpClient.post(this.baseUrl + "upload/series", { id: seriesId, url: this._cleanBase64Url(url), lockCover }).pipe(tap((_) => {
      this.toastr.info(translate("series-detail.cover-change"));
    }));
  }
  updateCollectionCoverImage(tagId, url, lockCover = true) {
    return this.httpClient.post(this.baseUrl + "upload/collection", { id: tagId, url: this._cleanBase64Url(url), lockCover }).pipe(tap((_) => {
      this.toastr.info(translate("series-detail.cover-change"));
    }));
  }
  updateReadingListCoverImage(readingListId, url, lockCover = true) {
    return this.httpClient.post(this.baseUrl + "upload/reading-list", { id: readingListId, url: this._cleanBase64Url(url), lockCover }).pipe(tap((_) => {
      this.toastr.info(translate("series-detail.cover-change"));
    }));
  }
  updateChapterCoverImage(chapterId, url, lockCover = true) {
    return this.httpClient.post(this.baseUrl + "upload/chapter", { id: chapterId, url: this._cleanBase64Url(url), lockCover }).pipe(tap((_) => {
      this.toastr.info(translate("series-detail.cover-change"));
    }));
  }
  updateVolumeCoverImage(volumeId, url, lockCover = true) {
    return this.httpClient.post(this.baseUrl + "upload/volume", { id: volumeId, url: this._cleanBase64Url(url), lockCover }).pipe(tap((_) => {
      this.toastr.info(translate("series-detail.cover-change"));
    }));
  }
  updateLibraryCoverImage(libraryId, url, lockCover = true) {
    return this.httpClient.post(this.baseUrl + "upload/library", { id: libraryId, url: this._cleanBase64Url(url), lockCover }).pipe(tap((_) => {
      this.toastr.info(translate("series-detail.cover-change"));
    }));
  }
  updatePersonCoverImage(personId, url, lockCover = true) {
    return this.httpClient.post(this.baseUrl + "upload/person", { id: personId, url: this._cleanBase64Url(url), lockCover }).pipe(tap((_) => {
      this.toastr.info(translate("series-detail.cover-change"));
    }));
  }
  resetChapterCoverLock(chapterId) {
    return this.httpClient.post(this.baseUrl + "upload/reset-chapter-lock", { id: chapterId, url: "" });
  }
  _cleanBase64Url(url) {
    if (url.startsWith("data")) {
      url = url.split(",")[1];
    }
    return url;
  }
  static {
    this.\u0275fac = function UploadService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _UploadService)(\u0275\u0275inject(HttpClient));
    };
  }
  static {
    this.\u0275prov = \u0275\u0275defineInjectable({ token: _UploadService, factory: _UploadService.\u0275fac, providedIn: "root" });
  }
};

// src/app/cards/cover-image-chooser/cover-image-chooser.component.ts
var _c0 = () => ({ url: "" });
var _c1 = (a0) => ({ "selected": a0 });
var _c2 = (a0) => ({ num: a0 });
function CoverImageChooserComponent_ng_container_0_ng_template_4_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 7)(1, "div", 9)(2, "div", 10);
    \u0275\u0275element(3, "i", 11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 12)(5, "div", 13)(6, "a", 14);
    \u0275\u0275listener("click", function CoverImageChooserComponent_ng_container_0_ng_template_4_Conditional_0_Template_a_click_6_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.changeMode("url"));
    });
    \u0275\u0275elementStart(7, "span", 15);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "span", 16);
    \u0275\u0275text(11, "\u2022");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "span", 17);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "span", 16);
    \u0275\u0275text(15, "\u2022");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "a", 14);
    \u0275\u0275listener("click", function CoverImageChooserComponent_ng_container_0_ng_template_4_Conditional_0_Template_a_click_16_listener() {
      \u0275\u0275restoreView(_r3);
      const openFileSelector_r4 = \u0275\u0275nextContext().openFileSelector;
      return \u0275\u0275resetView(openFileSelector_r4());
    });
    \u0275\u0275text(17);
    \u0275\u0275elementStart(18, "span", 15);
    \u0275\u0275text(19);
    \u0275\u0275elementEnd()()()()()();
  }
  if (rf & 2) {
    const t_r5 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(t_r5("enter-an-url-pre-title", \u0275\u0275pureFunction0(5, _c0)));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("", t_r5("url"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(t_r5("drag-n-drop"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(t_r5("upload"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", t_r5("upload-continued"), "");
  }
}
function CoverImageChooserComponent_ng_container_0_ng_template_4_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 8)(1, "div", 18)(2, "label", 19);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275element(4, "input", 20);
    \u0275\u0275elementStart(5, "button", 21);
    \u0275\u0275listener("click", function CoverImageChooserComponent_ng_container_0_ng_template_4_Conditional_1_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext(3);
      ctx_r1.loadImageFromUrl();
      return \u0275\u0275resetView(ctx_r1.mode = "all");
    });
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "button", 22);
    \u0275\u0275listener("click", function CoverImageChooserComponent_ng_container_0_ng_template_4_Conditional_1_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.mode = "all");
    });
    \u0275\u0275element(8, "i", 23);
    \u0275\u0275text(9, "\xA0 ");
    \u0275\u0275elementStart(10, "span", 15);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    let tmp_6_0;
    const t_r5 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(t_r5("url-label"));
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ((tmp_6_0 = ctx_r1.form.get("coverImageUrl")) == null ? null : tmp_6_0.value.length) === 0);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", t_r5("load"), " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(t_r5("back"));
  }
}
function CoverImageChooserComponent_ng_container_0_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, CoverImageChooserComponent_ng_container_0_ng_template_4_Conditional_0_Template, 20, 6, "div", 7)(1, CoverImageChooserComponent_ng_container_0_ng_template_4_Conditional_1_Template, 12, 4, "div", 8);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275conditional(ctx_r1.mode === "all" ? 0 : ctx_r1.mode === "url" ? 1 : -1);
  }
}
function CoverImageChooserComponent_ng_container_0_ng_template_5_Template(rf, ctx) {
}
function CoverImageChooserComponent_ng_container_0_Conditional_7_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275element(0, "br");
    \u0275\u0275elementStart(1, "button", 26);
    \u0275\u0275listener("click", function CoverImageChooserComponent_ng_container_0_Conditional_7_Conditional_2_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.resetImage());
    });
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r5 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r5("reset"));
  }
}
function CoverImageChooserComponent_ng_container_0_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 24);
    \u0275\u0275listener("click", function CoverImageChooserComponent_ng_container_0_Conditional_7_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.reset());
    });
    \u0275\u0275element(1, "app-image", 25);
    \u0275\u0275template(2, CoverImageChooserComponent_ng_container_0_Conditional_7_Conditional_2_Template, 3, 1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r5 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(4, _c1, !ctx_r1.showApplyButton && ctx_r1.selectedIndex === -1));
    \u0275\u0275advance();
    \u0275\u0275property("title", t_r5("reset-cover-tooltip"))("imageUrl", ctx_r1.imageService.resetCoverImage);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.showApplyButton ? 2 : -1);
  }
}
function CoverImageChooserComponent_ng_container_0_For_9_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275element(0, "br");
    \u0275\u0275elementStart(1, "button", 28);
    \u0275\u0275listener("click", function CoverImageChooserComponent_ng_container_0_For_9_Conditional_2_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r11);
      const \u0275$index_83_r10 = \u0275\u0275nextContext().$index;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.applyImage(\u0275$index_83_r10));
    });
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const \u0275$index_83_r10 = \u0275\u0275nextContext().$index;
    const t_r5 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.appliedIndex === \u0275$index_83_r10 ? t_r5("applied") : t_r5("apply"), " ");
  }
}
function CoverImageChooserComponent_ng_container_0_For_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 24);
    \u0275\u0275listener("click", function CoverImageChooserComponent_ng_container_0_For_9_Template_div_click_0_listener() {
      const \u0275$index_83_r10 = \u0275\u0275restoreView(_r9).$index;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.selectImage(\u0275$index_83_r10));
    });
    \u0275\u0275element(1, "app-image", 27);
    \u0275\u0275template(2, CoverImageChooserComponent_ng_container_0_For_9_Conditional_2_Template, 3, 1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const url_r12 = ctx.$implicit;
    const \u0275$index_83_r10 = ctx.$index;
    const t_r5 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(5, _c1, !ctx_r1.showApplyButton && ctx_r1.selectedIndex === \u0275$index_83_r10));
    \u0275\u0275attribute("aria-label", t_r5("image-num", \u0275\u0275pureFunction1(7, _c2, \u0275$index_83_r10 + 1)));
    \u0275\u0275advance();
    \u0275\u0275property("imageUrl", url_r12)("processEvents", \u0275$index_83_r10 > 0);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.showApplyButton ? 2 : -1);
  }
}
function CoverImageChooserComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 1)(2, "form", 2)(3, "ngx-file-drop", 3);
    \u0275\u0275listener("onFileDrop", function CoverImageChooserComponent_ng_container_0_Template_ngx_file_drop_onFileDrop_3_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.dropped($event));
    })("onFileOver", function CoverImageChooserComponent_ng_container_0_Template_ngx_file_drop_onFileOver_3_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.fileOver($event));
    })("onFileLeave", function CoverImageChooserComponent_ng_container_0_Template_ngx_file_drop_onFileLeave_3_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.fileLeave($event));
    });
    \u0275\u0275template(4, CoverImageChooserComponent_ng_container_0_ng_template_4_Template, 2, 1, "ng-template", 4);
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, CoverImageChooserComponent_ng_container_0_ng_template_5_Template, 0, 0, "ng-template");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 5);
    \u0275\u0275template(7, CoverImageChooserComponent_ng_container_0_Conditional_7_Template, 3, 6, "div", 6);
    \u0275\u0275repeaterCreate(8, CoverImageChooserComponent_ng_container_0_For_9_Template, 3, 9, "div", 6, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("formGroup", ctx_r1.form);
    \u0275\u0275advance();
    \u0275\u0275property("accept", ctx_r1.acceptableExtensions)("directory", false);
    \u0275\u0275advance(4);
    \u0275\u0275conditional(ctx_r1.showReset ? 7 : -1);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.imageUrls);
  }
}
var CoverImageChooserComponent = class _CoverImageChooserComponent {
  constructor(document2) {
    this.document = document2;
    this.cdRef = inject(ChangeDetectorRef);
    this.imageService = inject(ImageService);
    this.fb = inject(FormBuilder);
    this.toastr = inject(ToastrService);
    this.uploadService = inject(UploadService);
    this.showApplyButton = false;
    this.applyCover = new EventEmitter();
    this.resetCover = new EventEmitter();
    this.imageUrls = [];
    this.imageUrlsChange = new EventEmitter();
    this.showReset = false;
    this.resetClicked = new EventEmitter();
    this.imageSelected = new EventEmitter();
    this.selectedBase64Url = new EventEmitter();
    this.selectedIndex = 0;
    this.appliedIndex = 0;
    this.files = [];
    this.acceptableExtensions = [".png", ".jpg", ".jpeg", ".gif", ".webp", ".avif"].join(",");
    this.mode = "all";
  }
  ngOnInit() {
    this.form = this.fb.group({
      coverImageUrl: new FormControl("", [])
    });
    this.cdRef.markForCheck();
  }
  getBase64Image(img) {
    const canvas = document.createElement("canvas");
    canvas.width = img.width;
    canvas.height = img.height;
    const ctx = canvas.getContext("2d", { alpha: false });
    if (!ctx) {
      return "";
    }
    ctx.drawImage(img, 0, 0);
    return canvas.toDataURL("image/png");
  }
  selectImage(index, callback) {
    if (this.selectedIndex === index) {
      return;
    }
    if (!this.imageUrls[index].startsWith("data:image/")) {
      const imgUrl = this.imageUrls[index];
      const img = new Image();
      img.crossOrigin = "Anonymous";
      img.src = imgUrl;
      img.onload = (e) => {
        this.handleUrlImageAdd(img, index);
        this.selectedBase64Url.emit(this.imageUrls[this.selectedIndex]);
        if (callback)
          callback(index);
      };
      img.onerror = (e) => {
        this.toastr.error(translate("errors.rejected-cover-upload"));
        this.form.get("coverImageUrl")?.setValue("");
        this.cdRef.markForCheck();
      };
      this.form.get("coverImageUrl")?.setValue("");
      this.cdRef.markForCheck();
      return;
    }
    this.selectedIndex = index;
    this.cdRef.markForCheck();
    this.imageSelected.emit(this.selectedIndex);
    this.selectedBase64Url.emit(this.imageUrls[this.selectedIndex]);
  }
  applyImage(index) {
    if (!this.showApplyButton)
      return;
    this.selectImage(index, () => {
      this.applyCover.emit(this.imageUrls[index]);
      this.appliedIndex = index;
      this.cdRef.markForCheck();
    });
  }
  resetImage() {
    if (this.showApplyButton) {
      this.resetCover.emit();
    }
  }
  loadImage(url) {
    url = url || this.form.get("coverImageUrl")?.value.trim();
    if (!url || url === "")
      return;
    this.uploadService.uploadByUrl(url).subscribe((filename) => {
      const img = new Image();
      img.crossOrigin = "Anonymous";
      img.src = this.imageService.getCoverUploadImage(filename);
      img.onload = (e) => this.handleUrlImageAdd(img);
      img.onerror = (e) => {
        this.toastr.error(translate("errors.rejected-cover-upload"));
        this.form.get("coverImageUrl")?.setValue("");
        this.cdRef.markForCheck();
      };
      this.form.get("coverImageUrl")?.setValue("");
      this.cdRef.markForCheck();
    });
  }
  loadImageFromUrl(url) {
    url = url || this.form.get("coverImageUrl")?.value.trim();
    if (!url || url === "")
      return;
    this.uploadService.uploadByUrl(url).subscribe((filename) => {
      const img = new Image();
      img.crossOrigin = "Anonymous";
      img.src = this.imageService.getCoverUploadImage(filename);
      img.onload = (e) => this.handleUrlImageAdd(img);
      img.onerror = (e) => {
        this.toastr.error(translate("errors.rejected-cover-upload"));
        this.form.get("coverImageUrl")?.setValue("");
        this.cdRef.markForCheck();
      };
      this.form.get("coverImageUrl")?.setValue("");
      this.cdRef.markForCheck();
    });
  }
  changeMode(mode) {
    this.mode = mode;
    this.setupEnterHandler();
    this.cdRef.markForCheck();
    setTimeout(() => this.document.querySelector("#load-image")?.focus(), 10);
  }
  dropped(files) {
    this.files = files;
    for (const droppedFile of files) {
      if (droppedFile.fileEntry.isFile) {
        const fileEntry = droppedFile.fileEntry;
        fileEntry.file((file) => {
          const reader = new FileReader();
          reader.onload = (e) => this.handleFileImageAdd(e);
          reader.readAsDataURL(file);
        });
      }
    }
  }
  handleFileImageAdd(e) {
    if (e.target == null)
      return;
    this.imageUrls.push(e.target.result);
    this.imageUrlsChange.emit(this.imageUrls);
    this.selectedIndex = this.imageUrls.length - 1;
    this.imageSelected.emit(this.selectedIndex);
    this.selectedBase64Url.emit(e.target.result);
    setTimeout(() => {
      this.document.querySelector('div.image-card[aria-label="Image ' + this.selectedIndex + '"]').focus();
    });
    this.cdRef.markForCheck();
  }
  handleUrlImageAdd(img, index = -1) {
    const url = this.getBase64Image(img);
    if (index >= 0) {
      this.imageUrls[index] = url;
    } else {
      this.imageUrls.push(url);
    }
    this.imageUrlsChange.emit(this.imageUrls);
    this.cdRef.markForCheck();
    setTimeout(() => {
      this.selectImage(index >= 0 ? index : this.imageUrls.length - 1);
    });
  }
  reset() {
    this.resetClicked.emit();
    this.selectedIndex = -1;
  }
  setupEnterHandler() {
    setTimeout(() => {
      const elem = document.querySelector('input[id="load-image"]');
      if (elem == null)
        return;
      fromEvent(elem, "keydown").pipe(takeWhile(() => this.mode === "url")).subscribe((event) => {
        const evt = event;
        switch (evt.key) {
          case KEY_CODES.ENTER: {
            this.loadImage();
            break;
          }
          case KEY_CODES.ESC_KEY:
            this.mode = "all";
            event.stopPropagation();
            break;
          default:
            break;
        }
      });
    });
  }
  fileOver(event) {
  }
  fileLeave(event) {
  }
  static {
    this.\u0275fac = function CoverImageChooserComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CoverImageChooserComponent)(\u0275\u0275directiveInject(DOCUMENT));
    };
  }
  static {
    this.\u0275cmp = \u0275\u0275defineComponent({ type: _CoverImageChooserComponent, selectors: [["app-cover-image-chooser"]], inputs: { showApplyButton: "showApplyButton", imageUrls: "imageUrls", showReset: "showReset" }, outputs: { applyCover: "applyCover", resetCover: "resetCover", imageUrlsChange: "imageUrlsChange", resetClicked: "resetClicked", imageSelected: "imageSelected", selectedBase64Url: "selectedBase64Url" }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 1, vars: 1, consts: [[4, "transloco", "translocoRead"], [1, "container-fluid", 2, "padding-left", "0", "padding-right", "0"], [3, "formGroup"], ["dropZoneClassName", "file-upload", "contentClassName", "file-upload-zone", 3, "onFileDrop", "onFileOver", "onFileLeave", "accept", "directory"], ["ngx-file-drop-content-tmp", ""], [1, "row", "g-0", "chooser", 2, "padding-top", "10px"], ["tabindex", "0", 1, "clickable", "col-auto", 3, "ngClass"], [1, "row", "g-0", "mt-3", "pb-3"], [1, "row", "g-0", "mt-3", "pb-3", "ms-md-2", "me-md-2"], [1, "mx-auto"], [1, "row", "g-0", "mb-3"], ["aria-hidden", "true", 1, "fa", "fa-file-upload", "mx-auto", 2, "font-size", "24px", "width", "20px"], [1, "d-flex", "justify-content-center"], [1, "d-flex", "justify-content-evenly"], ["href", "javascript:void(0)", 1, "pe-0", 3, "click"], [1, "phone-hidden"], [1, "ps-1", "pe-1"], ["href", "javascript:void(0)", 1, "pe-0"], [1, "input-group", "col-auto", "me-md-2", 2, "width", "83%"], ["for", "load-image", 1, "input-group-text"], ["type", "text", "autofocus", "", "autocomplete", "off", "formControlName", "coverImageUrl", "placeholder", "https://", "id", "load-image", 1, "form-control"], ["type", "button", "id", "load-image-addon", 1, "btn", "btn-outline-secondary", 3, "click", "disabled"], ["href", "javascript:void(0)", 1, "btn", "btn-secondary", "col-auto", 3, "click"], ["aria-hidden", "true", 1, "fas", "fa-share", 2, "transform", "rotateY(180deg)"], ["tabindex", "0", 1, "clickable", "col-auto", 3, "click", "ngClass"], ["height", "232.91px", "width", "160px", 1, "card-img-top", 3, "title", "imageUrl"], [1, "btn", "btn-secondary", 2, "width", "100%", 3, "click"], ["height", "232.91px", "width", "160px", 1, "card-img-top", 3, "imageUrl", "processEvents"], [1, "btn", "btn-primary", 2, "width", "100%", 3, "click"]], template: function CoverImageChooserComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, CoverImageChooserComponent_ng_container_0_Template, 10, 4, "ng-container", 0);
      }
      if (rf & 2) {
        \u0275\u0275property("translocoRead", "cover-image-chooser");
      }
    }, dependencies: [
      ReactiveFormsModule,
      \u0275NgNoValidate,
      DefaultValueAccessor,
      NgControlStatus,
      NgControlStatusGroup,
      FormGroupDirective,
      FormControlName,
      NgxFileDropModule,
      NgxFileDropComponent,
      NgxFileDropContentTemplateDirective,
      ImageComponent,
      TranslocoModule,
      TranslocoDirective,
      NgClass
    ], styles: ["\n\n.card-img-top[_ngcontent-%COMP%] {\n  width: 160px;\n  height: 232.91px;\n  max-height: 232.91px;\n}\n.selected[_ngcontent-%COMP%] {\n  outline: 5px solid var(--primary-color);\n  outline-width: medium;\n  outline-offset: -1px;\n}\n.chooser[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, 160px);\n  grid-gap: 0.5rem;\n  justify-content: space-around;\n}\nngx-file-drop[_ngcontent-%COMP%]     > div {\n  width: 100%;\n  border: 2px solid var(--primary-color);\n  border-radius: 5px;\n  height: 100px;\n  margin: auto;\n}\nngx-file-drop[_ngcontent-%COMP%]     > div > div {\n  width: 100%;\n  display: inline-block;\n}\n/*# sourceMappingURL=cover-image-chooser.component.css.map */"], changeDetection: 0 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CoverImageChooserComponent, { className: "CoverImageChooserComponent", filePath: "src/app/cards/cover-image-chooser/cover-image-chooser.component.ts", lineNumber: 38 });
})();

// src/app/_models/library/file-type-group.enum.ts
var FileTypeGroup;
(function(FileTypeGroup2) {
  FileTypeGroup2[FileTypeGroup2["Archive"] = 1] = "Archive";
  FileTypeGroup2[FileTypeGroup2["Epub"] = 2] = "Epub";
  FileTypeGroup2[FileTypeGroup2["Pdf"] = 3] = "Pdf";
  FileTypeGroup2[FileTypeGroup2["Images"] = 4] = "Images";
})(FileTypeGroup || (FileTypeGroup = {}));
var allFileTypeGroup = Object.keys(FileTypeGroup).filter((key) => !isNaN(Number(key)) && parseInt(key, 10) >= 0).map((key) => parseInt(key, 10));

// src/app/_pipes/file-type-group.pipe.ts
var FileTypeGroupPipe = class _FileTypeGroupPipe {
  transform(value) {
    switch (value) {
      case FileTypeGroup.Archive:
        return translate("file-type-group-pipe.archive");
      case FileTypeGroup.Epub:
        return translate("file-type-group-pipe.epub");
      case FileTypeGroup.Pdf:
        return translate("file-type-group-pipe.pdf");
      case FileTypeGroup.Images:
        return translate("file-type-group-pipe.image");
    }
  }
  static {
    this.\u0275fac = function FileTypeGroupPipe_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _FileTypeGroupPipe)();
    };
  }
  static {
    this.\u0275pipe = \u0275\u0275definePipe({ name: "fileTypeGroup", type: _FileTypeGroupPipe, pure: true, standalone: true });
  }
};

// src/app/shared/edit-list/edit-list.component.ts
function EditListComponent_form_0_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 2)(1, "div", 3)(2, "div", 4)(3, "label", 5);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275element(5, "input", 6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 7)(7, "button", 8);
    \u0275\u0275listener("click", function EditListComponent_form_0_For_2_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.add());
    });
    \u0275\u0275element(8, "i", 9);
    \u0275\u0275elementStart(9, "span", 10);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "button", 11);
    \u0275\u0275listener("click", function EditListComponent_form_0_For_2_Template_button_click_11_listener() {
      const \u0275$index_5_r3 = \u0275\u0275restoreView(_r1).$index;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.remove(\u0275$index_5_r3));
    });
    \u0275\u0275element(12, "i", 12);
    \u0275\u0275elementStart(13, "span", 10);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const \u0275$index_5_r3 = ctx.$index;
    const t_r4 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275propertyInterpolate1("for", "item--", \u0275$index_5_r3, "");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.label);
    \u0275\u0275advance();
    \u0275\u0275propertyInterpolate1("formControlName", "link", \u0275$index_5_r3, "");
    \u0275\u0275propertyInterpolate1("id", "item--", \u0275$index_5_r3, "");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(t_r4("common.add"));
    \u0275\u0275advance();
    \u0275\u0275property("disabled", \u0275$index_5_r3 === 0);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(t_r4("common.remove"));
  }
}
function EditListComponent_form_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "form", 1);
    \u0275\u0275repeaterCreate(1, EditListComponent_form_0_For_2_Template, 15, 10, "div", 2, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("formGroup", ctx_r1.form);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.Items);
  }
}
var EditListComponent = class _EditListComponent {
  constructor() {
    this.cdRef = inject(ChangeDetectorRef);
    this.destroyRef = inject(DestroyRef);
    this.items = [];
    this.label = "";
    this.updateItems = new EventEmitter();
    this.form = new FormGroup({});
    this.combinedItems = "";
  }
  get Items() {
    return this.combinedItems.split(",") || [""];
  }
  ngOnInit() {
    this.items.forEach((link, index) => {
      this.form.addControl("link" + index, new FormControl(link, []));
    });
    this.combinedItems = this.items.join(",");
    this.form.valueChanges.pipe(debounceTime(100), distinctUntilChanged(), tap((data) => this.emit()), takeUntilDestroyed(this.destroyRef)).subscribe();
    this.cdRef.markForCheck();
  }
  add() {
    this.combinedItems += ",";
    this.form.addControl("link" + (this.Items.length - 1), new FormControl("", []));
    this.emit();
    this.cdRef.markForCheck();
  }
  remove(index) {
    const initialControls = Object.keys(this.form.controls).filter((key) => key.startsWith("link"));
    if (index == 0 && initialControls.length === 1) {
      this.form.get(initialControls[0])?.setValue("", { emitEvent: true });
      this.emit();
      this.cdRef.markForCheck();
      return;
    }
    this.form.removeControl("link" + index, { emitEvent: true });
    this.combinedItems = Object.keys(this.form.controls).filter((key) => key.startsWith("link")).map((key) => this.form.get(key)?.value).join(",");
    this.form = new FormGroup({});
    this.Items.forEach((item, index2) => {
      this.form.addControl("link" + index2, new FormControl(item, []));
    });
    this.emit();
    this.cdRef.markForCheck();
  }
  emit() {
    this.updateItems.emit(Object.keys(this.form.controls).filter((key) => key.startsWith("link")).map((key) => this.form.get(key)?.value).filter((v) => v !== null && v !== ""));
  }
  static {
    this.\u0275fac = function EditListComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _EditListComponent)();
    };
  }
  static {
    this.\u0275cmp = \u0275\u0275defineComponent({ type: _EditListComponent, selectors: [["app-edit-list"]], inputs: { items: "items", label: "label" }, outputs: { updateItems: "updateItems" }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 1, vars: 0, consts: [[3, "formGroup", 4, "transloco"], [3, "formGroup"], [1, "row", "g-0", "mb-3"], [1, "col-lg-10", "col-md-12", "pe-2"], [1, "mb-3"], [1, "visually-hidden", 3, "for"], ["type", "text", 1, "form-control", 3, "formControlName", "id"], [1, "col-lg-2"], [1, "btn", "btn-secondary", "me-1", 3, "click"], ["aria-hidden", "true", 1, "fa-solid", "fa-plus"], [1, "visually-hidden"], [1, "btn", "btn-secondary", 3, "click", "disabled"], ["aria-hidden", "true", 1, "fa-solid", "fa-xmark"]], template: function EditListComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, EditListComponent_form_0_Template, 3, 1, "form", 0);
      }
    }, dependencies: [CommonModule, ReactiveFormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, Select2Module, TranslocoDirective], changeDetection: 0 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(EditListComponent, { className: "EditListComponent", filePath: "src/app/shared/edit-list/edit-list.component.ts", lineNumber: 26 });
})();

// src/app/cards/_modals/bulk-add-to-collection/bulk-add-to-collection.component.ts
var _c02 = ["title"];
var _forTrack0 = ($index, $item) => $item.title + $item.promoted;
function BulkAddToCollectionComponent_ng_container_0_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 7)(1, "label", 19);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 20);
    \u0275\u0275element(4, "input", 21);
    \u0275\u0275elementStart(5, "button", 22);
    \u0275\u0275listener("click", function BulkAddToCollectionComponent_ng_container_0_Conditional_7_Template_button_click_5_listener() {
      let tmp_5_0;
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView((tmp_5_0 = ctx_r1.listForm.get("filterQuery")) == null ? null : tmp_5_0.setValue(""));
    });
    \u0275\u0275text(6, "Clear");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const t_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r4("filter-label"));
  }
}
function BulkAddToCollectionComponent_ng_container_0_For_10_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 24);
  }
  if (rf & 2) {
    const t_r4 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275property("title", t_r4("promoted"));
  }
}
function BulkAddToCollectionComponent_ng_container_0_For_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li", 23);
    \u0275\u0275listener("click", function BulkAddToCollectionComponent_ng_container_0_For_10_Template_li_click_0_listener() {
      const collectionTag_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.addToCollection(collectionTag_r6));
    });
    \u0275\u0275text(1);
    \u0275\u0275template(2, BulkAddToCollectionComponent_ng_container_0_For_10_Conditional_2_Template, 1, 1, "i", 24);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const collectionTag_r6 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", collectionTag_r6.title, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(collectionTag_r6.promoted ? 2 : -1);
  }
}
function BulkAddToCollectionComponent_ng_container_0_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 10);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(t_r4("no-data"));
  }
}
function BulkAddToCollectionComponent_ng_container_0_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 10)(1, "div", 25)(2, "span", 26);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const t_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(t_r4("loading"));
  }
}
function BulkAddToCollectionComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 2)(2, "h4", 3);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 4);
    \u0275\u0275listener("click", function BulkAddToCollectionComponent_ng_container_0_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.close());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "form", 5)(6, "div", 6);
    \u0275\u0275template(7, BulkAddToCollectionComponent_ng_container_0_Conditional_7_Template, 7, 1, "div", 7);
    \u0275\u0275elementStart(8, "ul", 8);
    \u0275\u0275repeaterCreate(9, BulkAddToCollectionComponent_ng_container_0_For_10_Template, 3, 2, "li", 9, _forTrack0);
    \u0275\u0275pipe(11, "filter");
    \u0275\u0275template(12, BulkAddToCollectionComponent_ng_container_0_Conditional_12_Template, 2, 1, "li", 10)(13, BulkAddToCollectionComponent_ng_container_0_Conditional_13_Template, 4, 1, "li", 10);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "div", 11)(15, "div", 12)(16, "div", 13)(17, "div", 14)(18, "label", 15);
    \u0275\u0275text(19);
    \u0275\u0275elementEnd();
    \u0275\u0275element(20, "input", 16, 0);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "div", 17)(23, "button", 18);
    \u0275\u0275listener("click", function BulkAddToCollectionComponent_ng_container_0_Template_button_click_23_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.create());
    });
    \u0275\u0275text(24);
    \u0275\u0275elementEnd()()()()()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const t_r4 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(t_r4("title"));
    \u0275\u0275advance();
    \u0275\u0275attribute("aria-label", t_r4("close"));
    \u0275\u0275advance();
    \u0275\u0275property("formGroup", ctx_r1.listForm);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.lists.length >= ctx_r1.MaxItems ? 7 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(\u0275\u0275pipeBind2(11, 9, ctx_r1.lists, ctx_r1.filterList));
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r1.lists.length === 0 && !ctx_r1.loading ? 12 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.loading ? 13 : -1);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(t_r4("collection-label"));
    \u0275\u0275advance(4);
    \u0275\u0275property("disabled", ctx_r1.isCreating);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(t_r4("create"));
  }
}
var BulkAddToCollectionComponent = class _BulkAddToCollectionComponent {
  constructor() {
    this.modal = inject(NgbActiveModal);
    this.collectionService = inject(CollectionTagService);
    this.toastr = inject(ToastrService);
    this.cdRef = inject(ChangeDetectorRef);
    this.MaxItems = 8;
    this.seriesIds = [];
    this.lists = [];
    this.loading = false;
    this.isCreating = false;
    this.listForm = new FormGroup({});
    this.filterList = (listItem) => {
      return listItem.title.toLowerCase().indexOf((this.listForm.value.filterQuery || "").toLowerCase()) >= 0;
    };
  }
  ngOnInit() {
    this.listForm.addControl("title", new FormControl(this.title, []));
    this.listForm.addControl("filterQuery", new FormControl("", []));
    this.loading = true;
    this.cdRef.markForCheck();
    this.collectionService.allCollections(true).subscribe((tags) => {
      this.lists = tags.filter((t) => t.source === ScrobbleProvider.Kavita);
      this.loading = false;
      this.cdRef.markForCheck();
    });
  }
  ngAfterViewInit() {
    if (this.inputElem) {
      this.inputElem.nativeElement.select();
      this.cdRef.markForCheck();
    }
  }
  close() {
    this.modal.close();
  }
  create() {
    if (this.isCreating)
      return;
    const tagName = this.listForm.value.title;
    this.isCreating = true;
    this.cdRef.markForCheck();
    this.collectionService.addByMultiple(0, this.seriesIds, tagName).subscribe(() => {
      this.toastr.success(translate("toasts.series-added-to-collection", { collectionName: tagName }));
      this.isCreating = false;
      this.modal.close();
    });
  }
  addToCollection(tag) {
    if (this.seriesIds.length === 0)
      return;
    this.collectionService.addByMultiple(tag.id, this.seriesIds, "").subscribe(() => {
      this.toastr.success(translate("toasts.series-added-to-collection", { collectionName: tag.title }));
      this.modal.close();
    });
  }
  static {
    this.\u0275fac = function BulkAddToCollectionComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _BulkAddToCollectionComponent)();
    };
  }
  static {
    this.\u0275cmp = \u0275\u0275defineComponent({ type: _BulkAddToCollectionComponent, selectors: [["app-bulk-add-to-collection"]], viewQuery: function BulkAddToCollectionComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(_c02, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.inputElem = _t.first);
      }
    }, inputs: { title: "title", seriesIds: "seriesIds" }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 1, vars: 1, consts: [["title", ""], [4, "transloco", "translocoRead"], [1, "modal-header"], ["id", "modal-basic-title", 1, "modal-title"], ["type", "button", 1, "btn-close", 3, "click"], [2, "width", "100%", 3, "formGroup"], [1, "modal-body"], [1, "mb-3"], [1, "list-group"], ["tabindex", "0", "role", "option", 1, "list-group-item", "clickable"], [1, "list-group-item"], [1, "modal-footer", 2, "justify-content", "normal"], [2, "width", "100%"], [1, "d-flex"], [1, "col-9", "col-lg-10"], ["for", "add-rlist", 1, "form-label", "visually-hidden"], ["width", "100%", "ngbAutofocus", "", "type", "text", "id", "add-rlist", "formControlName", "title", 1, "form-control", "mb-2"], [1, "col-2"], ["type", "submit", 1, "btn", "btn-primary", 3, "click", "disabled"], ["for", "filter", 1, "form-label"], [1, "input-group"], ["id", "filter", "autocomplete", "off", "formControlName", "filterQuery", "type", "text", "aria-describedby", "reset-input", 1, "form-control"], ["type", "button", "id", "reset-input", 1, "btn", "btn-outline-secondary", 3, "click"], ["tabindex", "0", "role", "option", 1, "list-group-item", "clickable", 3, "click"], [1, "fa", "fa-angle-double-up", 3, "title"], ["role", "status", 1, "spinner-border", "text-primary"], [1, "visually-hidden"]], template: function BulkAddToCollectionComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, BulkAddToCollectionComponent_ng_container_0_Template, 25, 12, "ng-container", 1);
      }
      if (rf & 2) {
        \u0275\u0275property("translocoRead", "bulk-add-to-collection");
      }
    }, dependencies: [CommonModule, ReactiveFormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, FilterPipe, NgbModalModule, TranslocoDirective], styles: ["/* src/app/cards/_modals/bulk-add-to-collection/bulk-add-to-collection.component.scss */\n.clickable:hover,\n.clickable:focus {\n  background-color: var(--list-group-hover-bg-color, --primary-color);\n}\n.collection {\n  overflow: auto;\n}\n.collection .modal-body {\n  max-height: calc(100vh - 235px);\n  min-height: 150px;\n}\n.collection .modal-body .list-group {\n  overflow: auto;\n  max-height: calc(100vh - 355px);\n  min-height: 32px;\n}\n/*# sourceMappingURL=bulk-add-to-collection.component.css.map */\n"], encapsulation: 2, changeDetection: 0 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(BulkAddToCollectionComponent, { className: "BulkAddToCollectionComponent", filePath: "src/app/cards/_modals/bulk-add-to-collection/bulk-add-to-collection.component.ts", lineNumber: 33 });
})();

// src/app/reading-list/_modals/add-to-list-modal/add-to-list-modal.component.ts
var _c03 = ["title"];
function AddToListModalComponent_ng_container_0_div_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 19)(1, "label", 20);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 21);
    \u0275\u0275element(4, "input", 22);
    \u0275\u0275elementStart(5, "button", 23);
    \u0275\u0275listener("click", function AddToListModalComponent_ng_container_0_div_7_Template_button_click_5_listener() {
      let tmp_5_0;
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView((tmp_5_0 = ctx_r1.listForm.get("filterQuery")) == null ? null : tmp_5_0.setValue(""));
    });
    \u0275\u0275text(6, "Clear");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const t_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r4("filter-label"));
  }
}
function AddToListModalComponent_ng_container_0_li_9_i_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 26);
  }
  if (rf & 2) {
    const t_r4 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275property("title", t_r4("promoted-alt"));
  }
}
function AddToListModalComponent_ng_container_0_li_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li", 24);
    \u0275\u0275listener("click", function AddToListModalComponent_ng_container_0_li_9_Template_li_click_0_listener() {
      const readingList_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.addToList(readingList_r6));
    });
    \u0275\u0275text(1);
    \u0275\u0275template(2, AddToListModalComponent_ng_container_0_li_9_i_2_Template, 1, 1, "i", 25);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const readingList_r6 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", readingList_r6.title, " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", readingList_r6.promoted);
  }
}
function AddToListModalComponent_ng_container_0_li_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 27);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(t_r4("no-data"));
  }
}
function AddToListModalComponent_ng_container_0_li_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 27)(1, "div", 28)(2, "span", 29);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const t_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(t_r4("loading"));
  }
}
function AddToListModalComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 2)(2, "h4", 3);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 4);
    \u0275\u0275listener("click", function AddToListModalComponent_ng_container_0_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.close());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "form", 5)(6, "div", 6);
    \u0275\u0275template(7, AddToListModalComponent_ng_container_0_div_7_Template, 7, 1, "div", 7);
    \u0275\u0275elementStart(8, "ul", 8);
    \u0275\u0275template(9, AddToListModalComponent_ng_container_0_li_9_Template, 3, 2, "li", 9);
    \u0275\u0275pipe(10, "filter");
    \u0275\u0275template(11, AddToListModalComponent_ng_container_0_li_11_Template, 2, 1, "li", 10)(12, AddToListModalComponent_ng_container_0_li_12_Template, 4, 1, "li", 10);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div", 11)(14, "div", 12)(15, "div", 13)(16, "div", 14)(17, "label", 15);
    \u0275\u0275text(18);
    \u0275\u0275elementEnd();
    \u0275\u0275element(19, "input", 16, 0);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "div", 17)(22, "button", 18);
    \u0275\u0275listener("click", function AddToListModalComponent_ng_container_0_Template_button_click_22_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.create());
    });
    \u0275\u0275text(23);
    \u0275\u0275elementEnd()()()()()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const t_r4 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(t_r4("title"));
    \u0275\u0275advance();
    \u0275\u0275attribute("aria-label", t_r4("close"));
    \u0275\u0275advance();
    \u0275\u0275property("formGroup", ctx_r1.listForm);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.lists.length >= 5);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", \u0275\u0275pipeBind2(10, 9, ctx_r1.lists, ctx_r1.filterList));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.lists.length === 0 && !ctx_r1.loading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.loading);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(t_r4("reading-list-label"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(t_r4("create"));
  }
}
var ADD_FLOW;
(function(ADD_FLOW2) {
  ADD_FLOW2[ADD_FLOW2["Series"] = 0] = "Series";
  ADD_FLOW2[ADD_FLOW2["Volume"] = 1] = "Volume";
  ADD_FLOW2[ADD_FLOW2["Chapter"] = 2] = "Chapter";
  ADD_FLOW2[ADD_FLOW2["Multiple"] = 3] = "Multiple";
  ADD_FLOW2[ADD_FLOW2["Multiple_Series"] = 4] = "Multiple_Series";
})(ADD_FLOW || (ADD_FLOW = {}));
var AddToListModalComponent = class _AddToListModalComponent {
  constructor(modal, readingListService, toastr) {
    this.modal = modal;
    this.readingListService = readingListService;
    this.toastr = toastr;
    this.lists = [];
    this.loading = false;
    this.listForm = new FormGroup({});
    this.filterList = (listItem) => {
      return listItem.title.toLowerCase().indexOf((this.listForm.value.filterQuery || "").toLowerCase()) >= 0;
    };
    this.translocoService = inject(TranslocoService);
  }
  ngOnInit() {
    this.listForm.addControl("title", new FormControl(this.title, []));
    this.listForm.addControl("filterQuery", new FormControl("", []));
    this.loading = true;
    this.readingListService.getReadingLists(false, true).subscribe((lists) => {
      this.lists = lists.result;
      this.loading = false;
    });
  }
  ngAfterViewInit() {
    if (this.inputElem) {
      this.inputElem.nativeElement.select();
    }
  }
  close() {
    this.modal.close();
  }
  create() {
    this.readingListService.createList(this.listForm.value.title).subscribe((list) => {
      this.addToList(list);
    });
  }
  addToList(readingList) {
    if (this.type === ADD_FLOW.Multiple_Series && this.seriesIds !== void 0) {
      this.readingListService.updateByMultipleSeries(readingList.id, this.seriesIds).subscribe(() => {
        this.toastr.success(this.translocoService.translate("toasts.series-added-to-reading-list"));
        this.modal.close();
      });
    }
    if (this.seriesId === void 0)
      return;
    if (this.type === ADD_FLOW.Series && this.seriesId !== void 0) {
      this.readingListService.updateBySeries(readingList.id, this.seriesId).subscribe(() => {
        this.toastr.success(this.translocoService.translate("toasts.series-added-to-reading-list"));
        this.modal.close();
      });
    } else if (this.type === ADD_FLOW.Volume && this.volumeId !== void 0) {
      this.readingListService.updateByVolume(readingList.id, this.seriesId, this.volumeId).subscribe(() => {
        this.toastr.success(this.translocoService.translate("toasts.volumes-added-to-reading-list"));
        this.modal.close();
      });
    } else if (this.type === ADD_FLOW.Chapter && this.chapterId !== void 0) {
      this.readingListService.updateByChapter(readingList.id, this.seriesId, this.chapterId).subscribe(() => {
        this.toastr.success(this.translocoService.translate("toasts.chapter-added-to-reading-list"));
        this.modal.close();
      });
    } else if (this.type === ADD_FLOW.Multiple && this.volumeIds !== void 0 && this.chapterIds !== void 0) {
      this.readingListService.updateByMultiple(readingList.id, this.seriesId, this.volumeIds, this.chapterIds).subscribe(() => {
        this.toastr.success(this.translocoService.translate("toasts.multiple-added-to-reading-list"));
        this.modal.close();
      });
    }
  }
  static {
    this.\u0275fac = function AddToListModalComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AddToListModalComponent)(\u0275\u0275directiveInject(NgbActiveModal), \u0275\u0275directiveInject(ReadingListService), \u0275\u0275directiveInject(ToastrService));
    };
  }
  static {
    this.\u0275cmp = \u0275\u0275defineComponent({ type: _AddToListModalComponent, selectors: [["app-add-to-list-modal"]], viewQuery: function AddToListModalComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(_c03, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.inputElem = _t.first);
      }
    }, inputs: { title: "title", seriesId: "seriesId", volumeId: "volumeId", chapterId: "chapterId", volumeIds: "volumeIds", chapterIds: "chapterIds", seriesIds: "seriesIds", type: "type" }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 1, vars: 1, consts: [["title", ""], [4, "transloco", "translocoRead"], [1, "modal-header"], ["id", "modal-basic-title", 1, "modal-title"], ["type", "button", 1, "btn-close", 3, "click"], [2, "width", "100%", 3, "formGroup"], [1, "modal-body", "scrollable-modal"], ["class", "mb-3", 4, "ngIf"], [1, "list-group"], ["class", "list-group-item clickable", "tabindex", "0", "role", "option", 3, "click", 4, "ngFor", "ngForOf"], ["class", "list-group-item", 4, "ngIf"], [1, "modal-footer", 2, "justify-content", "normal"], [2, "width", "100%"], [1, "d-flex"], [1, "col-9", "col-lg-10"], ["for", "add-rlist", 1, "form-label", "visually-hidden"], ["width", "100%", "ngbAutofocus", "", "type", "text", "id", "add-rlist", "formControlName", "title", 1, "form-control", "mb-2"], [1, "col-2", "ps-2"], ["type", "submit", 1, "btn", "btn-primary", 3, "click"], [1, "mb-3"], ["for", "filter", 1, "form-label"], [1, "input-group"], ["id", "filter", "autocomplete", "off", "formControlName", "filterQuery", "type", "text", "aria-describedby", "reset-input", 1, "form-control"], ["type", "button", "id", "reset-input", 1, "btn", "btn-outline-secondary", 3, "click"], ["tabindex", "0", "role", "option", 1, "list-group-item", "clickable", 3, "click"], ["class", "fa fa-angle-double-up", 3, "title", 4, "ngIf"], [1, "fa", "fa-angle-double-up", 3, "title"], [1, "list-group-item"], ["role", "status", 1, "spinner-border", "text-primary"], [1, "visually-hidden"]], template: function AddToListModalComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, AddToListModalComponent_ng_container_0_Template, 24, 12, "ng-container", 1);
      }
      if (rf & 2) {
        \u0275\u0275property("translocoRead", "add-to-list-modal");
      }
    }, dependencies: [ReactiveFormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, NgIf, NgForOf, FilterPipe, TranslocoDirective], styles: ["\n\n.clickable[_ngcontent-%COMP%]:hover, \n.clickable[_ngcontent-%COMP%]:focus {\n  background-color: var(--primary-color);\n}\n.scrollable-modal[_ngcontent-%COMP%] {\n  max-height: calc(var(--vh) * 100 - 198px);\n  overflow: auto;\n}\n/*# sourceMappingURL=add-to-list-modal.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AddToListModalComponent, { className: "AddToListModalComponent", filePath: "src/app/reading-list/_modals/add-to-list-modal/add-to-list-modal.component.ts", lineNumber: 26 });
})();

// src/app/reading-list/_modals/edit-reading-list-modal/edit-reading-list-modal.component.ts
var _c04 = (a0) => ({ name: a0 });
function EditReadingListModalComponent_ng_container_0_ng_template_11_div_6_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r3 = \u0275\u0275nextContext(3).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", t_r3("required-field"), " ");
  }
}
function EditReadingListModalComponent_ng_container_0_ng_template_11_div_6_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r3 = \u0275\u0275nextContext(3).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", t_r3("name-unique-validation"), " ");
  }
}
function EditReadingListModalComponent_ng_container_0_ng_template_11_div_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 27);
    \u0275\u0275template(1, EditReadingListModalComponent_ng_container_0_ng_template_11_div_6_div_1_Template, 2, 1, "div", 20)(2, EditReadingListModalComponent_ng_container_0_ng_template_11_div_6_div_2_Template, 2, 1, "div", 20);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_5_0;
    let tmp_6_0;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (tmp_5_0 = ctx_r1.reviewGroup.get("title")) == null ? null : tmp_5_0.errors == null ? null : tmp_5_0.errors.required);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (tmp_6_0 = ctx_r1.reviewGroup.get("title")) == null ? null : tmp_6_0.errors == null ? null : tmp_6_0.errors.duplicateName);
  }
}
function EditReadingListModalComponent_ng_container_0_ng_template_11_ng_container_7_div_1_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const t_r3 = \u0275\u0275nextContext(4).$implicit;
    \u0275\u0275textInterpolate(t_r3("promote-tooltip"));
  }
}
function EditReadingListModalComponent_ng_container_0_ng_template_11_ng_container_7_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 29)(1, "div", 30);
    \u0275\u0275element(2, "input", 31);
    \u0275\u0275elementStart(3, "label", 32);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275element(5, "i", 33);
    \u0275\u0275template(6, EditReadingListModalComponent_ng_container_0_ng_template_11_ng_container_7_div_1_ng_template_6_Template, 1, 1, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementStart(8, "span", 34);
    \u0275\u0275elementContainer(9, 35);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const promotedTooltip_r4 = \u0275\u0275reference(7);
    const t_r3 = \u0275\u0275nextContext(3).$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(t_r3("promote-label"));
    \u0275\u0275advance();
    \u0275\u0275property("ngbTooltip", promotedTooltip_r4);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngTemplateOutlet", promotedTooltip_r4);
  }
}
function EditReadingListModalComponent_ng_container_0_ng_template_11_ng_container_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, EditReadingListModalComponent_ng_container_0_ng_template_11_ng_container_7_div_1_Template, 10, 3, "div", 28);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const user_r5 = ctx.ngIf;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.accountService.hasAdminRole(user_r5));
  }
}
function EditReadingListModalComponent_ng_container_0_ng_template_11_div_13_div_4_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r3 = \u0275\u0275nextContext(4).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", t_r3("month-validation"), " ");
  }
}
function EditReadingListModalComponent_ng_container_0_ng_template_11_div_13_div_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 40);
    \u0275\u0275template(1, EditReadingListModalComponent_ng_container_0_ng_template_11_div_13_div_4_div_1_Template, 2, 1, "div", 20);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const formControl_r6 = \u0275\u0275nextContext().ngIf;
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (formControl_r6.errors == null ? null : formControl_r6.errors.min) || (formControl_r6.errors == null ? null : formControl_r6.errors.max));
  }
}
function EditReadingListModalComponent_ng_container_0_ng_template_11_div_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 36)(1, "label", 37);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275element(3, "input", 38);
    \u0275\u0275template(4, EditReadingListModalComponent_ng_container_0_ng_template_11_div_13_div_4_Template, 2, 1, "div", 39);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const formControl_r6 = ctx.ngIf;
    const t_r3 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r3("month-label"));
    \u0275\u0275advance();
    \u0275\u0275classProp("is-invalid", (formControl_r6 == null ? null : formControl_r6.invalid) && (formControl_r6 == null ? null : formControl_r6.touched));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.reviewGroup.dirty || ctx_r1.reviewGroup.touched);
  }
}
function EditReadingListModalComponent_ng_container_0_ng_template_11_div_14_div_4_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r3 = \u0275\u0275nextContext(4).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", t_r3("year-validation"), " ");
  }
}
function EditReadingListModalComponent_ng_container_0_ng_template_11_div_14_div_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 40);
    \u0275\u0275template(1, EditReadingListModalComponent_ng_container_0_ng_template_11_div_14_div_4_div_1_Template, 2, 1, "div", 20);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const formControl_r7 = \u0275\u0275nextContext().ngIf;
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (formControl_r7.errors == null ? null : formControl_r7.errors.min) || (formControl_r7.errors == null ? null : formControl_r7.errors.max));
  }
}
function EditReadingListModalComponent_ng_container_0_ng_template_11_div_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 36)(1, "label", 41);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275element(3, "input", 42);
    \u0275\u0275template(4, EditReadingListModalComponent_ng_container_0_ng_template_11_div_14_div_4_Template, 2, 1, "div", 39);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const formControl_r7 = ctx.ngIf;
    const t_r3 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r3("year-label"));
    \u0275\u0275advance();
    \u0275\u0275classProp("is-invalid", formControl_r7.invalid && formControl_r7.touched);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.reviewGroup.dirty || ctx_r1.reviewGroup.touched);
  }
}
function EditReadingListModalComponent_ng_container_0_ng_template_11_div_18_div_4_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r3 = \u0275\u0275nextContext(4).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", t_r3("month-validation"), " ");
  }
}
function EditReadingListModalComponent_ng_container_0_ng_template_11_div_18_div_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 40);
    \u0275\u0275template(1, EditReadingListModalComponent_ng_container_0_ng_template_11_div_18_div_4_div_1_Template, 2, 1, "div", 20);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const formControl_r8 = \u0275\u0275nextContext().ngIf;
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (formControl_r8.errors == null ? null : formControl_r8.errors.min) || (formControl_r8.errors == null ? null : formControl_r8.errors.max));
  }
}
function EditReadingListModalComponent_ng_container_0_ng_template_11_div_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 36)(1, "label", 43);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275element(3, "input", 44);
    \u0275\u0275template(4, EditReadingListModalComponent_ng_container_0_ng_template_11_div_18_div_4_Template, 2, 1, "div", 39);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const formControl_r8 = ctx.ngIf;
    const t_r3 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r3("month-label"));
    \u0275\u0275advance();
    \u0275\u0275classProp("is-invalid", (formControl_r8 == null ? null : formControl_r8.invalid) && (formControl_r8 == null ? null : formControl_r8.touched));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.reviewGroup.dirty || ctx_r1.reviewGroup.touched);
  }
}
function EditReadingListModalComponent_ng_container_0_ng_template_11_div_19_div_4_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r3 = \u0275\u0275nextContext(4).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", t_r3("year-validation"), " ");
  }
}
function EditReadingListModalComponent_ng_container_0_ng_template_11_div_19_div_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 40);
    \u0275\u0275template(1, EditReadingListModalComponent_ng_container_0_ng_template_11_div_19_div_4_div_1_Template, 2, 1, "div", 20);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const formControl_r9 = \u0275\u0275nextContext().ngIf;
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (formControl_r9.errors == null ? null : formControl_r9.errors.min) || (formControl_r9.errors == null ? null : formControl_r9.errors.max));
  }
}
function EditReadingListModalComponent_ng_container_0_ng_template_11_div_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 36)(1, "label", 45);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275element(3, "input", 46);
    \u0275\u0275template(4, EditReadingListModalComponent_ng_container_0_ng_template_11_div_19_div_4_Template, 2, 1, "div", 39);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const formControl_r9 = ctx.ngIf;
    const t_r3 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r3("year-label"));
    \u0275\u0275advance();
    \u0275\u0275classProp("is-invalid", (formControl_r9 == null ? null : formControl_r9.invalid) && (formControl_r9 == null ? null : formControl_r9.touched));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.reviewGroup.dirty || ctx_r1.reviewGroup.touched);
  }
}
function EditReadingListModalComponent_ng_container_0_ng_template_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "form", 14)(1, "div", 15)(2, "div", 16)(3, "label", 17);
    \u0275\u0275text(4, "Name");
    \u0275\u0275elementEnd();
    \u0275\u0275element(5, "input", 18);
    \u0275\u0275template(6, EditReadingListModalComponent_ng_container_0_ng_template_11_div_6_Template, 3, 2, "div", 19);
    \u0275\u0275elementEnd();
    \u0275\u0275template(7, EditReadingListModalComponent_ng_container_0_ng_template_11_ng_container_7_Template, 2, 1, "ng-container", 20);
    \u0275\u0275pipe(8, "async");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 15)(10, "div", 21)(11, "h6", 22);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275template(13, EditReadingListModalComponent_ng_container_0_ng_template_11_div_13_Template, 5, 4, "div", 23)(14, EditReadingListModalComponent_ng_container_0_ng_template_11_div_14_Template, 5, 4, "div", 23);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "div", 21)(16, "h6", 24);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd();
    \u0275\u0275template(18, EditReadingListModalComponent_ng_container_0_ng_template_11_div_18_Template, 5, 4, "div", 23)(19, EditReadingListModalComponent_ng_container_0_ng_template_11_div_19_Template, 5, 4, "div", 23);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "div", 15)(21, "label", 25);
    \u0275\u0275text(22);
    \u0275\u0275elementEnd();
    \u0275\u0275element(23, "textarea", 26);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_5_0;
    const t_r3 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("formGroup", ctx_r1.reviewGroup);
    \u0275\u0275advance(5);
    \u0275\u0275classProp("is-invalid", ((tmp_5_0 = ctx_r1.reviewGroup.get("title")) == null ? null : tmp_5_0.invalid) && ((tmp_5_0 = ctx_r1.reviewGroup.get("title")) == null ? null : tmp_5_0.touched));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.reviewGroup.dirty || ctx_r1.reviewGroup.touched);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", \u0275\u0275pipeBind1(8, 12, ctx_r1.accountService.currentUser$));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(t_r3("starting-title"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.reviewGroup.get("startingMonth"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.reviewGroup.get("startingYear"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(t_r3("ending-title"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.reviewGroup.get("endingMonth"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.reviewGroup.get("endingYear"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(t_r3("summary-label"));
  }
}
function EditReadingListModalComponent_ng_container_0_ng_template_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-cover-image-chooser", 47);
    \u0275\u0275twoWayListener("imageUrlsChange", function EditReadingListModalComponent_ng_container_0_ng_template_15_Template_app_cover_image_chooser_imageUrlsChange_0_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.imageUrls, $event) || (ctx_r1.imageUrls = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("imageSelected", function EditReadingListModalComponent_ng_container_0_ng_template_15_Template_app_cover_image_chooser_imageSelected_0_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.updateSelectedIndex($event));
    })("selectedBase64Url", function EditReadingListModalComponent_ng_container_0_ng_template_15_Template_app_cover_image_chooser_selectedBase64Url_0_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.updateSelectedImage($event));
    })("resetClicked", function EditReadingListModalComponent_ng_container_0_ng_template_15_Template_app_cover_image_chooser_resetClicked_0_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.handleReset());
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275twoWayProperty("imageUrls", ctx_r1.imageUrls);
    \u0275\u0275property("showReset", ctx_r1.readingList.coverImageLocked);
  }
}
function EditReadingListModalComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 3)(2, "h4", 4);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 5);
    \u0275\u0275listener("click", function EditReadingListModalComponent_ng_container_0_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.close());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div")(6, "ul", 6, 0);
    \u0275\u0275twoWayListener("activeIdChange", function EditReadingListModalComponent_ng_container_0_Template_ul_activeIdChange_6_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.active, $event) || (ctx_r1.active = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(8, "li", 7)(9, "a", 8);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275template(11, EditReadingListModalComponent_ng_container_0_ng_template_11_Template, 24, 14, "ng-template", 9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "li", 7)(13, "a", 8);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275template(15, EditReadingListModalComponent_ng_container_0_ng_template_15_Template, 1, 2, "ng-template", 9);
    \u0275\u0275elementEnd()();
    \u0275\u0275element(16, "div", 10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "div", 11)(18, "button", 12);
    \u0275\u0275listener("click", function EditReadingListModalComponent_ng_container_0_Template_button_click_18_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.close());
    });
    \u0275\u0275text(19);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "button", 13);
    \u0275\u0275listener("click", function EditReadingListModalComponent_ng_container_0_Template_button_click_20_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.save());
    });
    \u0275\u0275text(21);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const t_r3 = ctx.$implicit;
    const nav_r11 = \u0275\u0275reference(7);
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(t_r3("title", \u0275\u0275pureFunction1(17, _c04, ctx_r1.readingList.title)));
    \u0275\u0275advance();
    \u0275\u0275attribute("aria-label", t_r3("close"));
    \u0275\u0275advance();
    \u0275\u0275classMapInterpolate1("modal-body scrollable-modal ", ctx_r1.utilityService.getActiveBreakpoint() === ctx_r1.Breakpoint.Mobile ? "" : "d-flex", "");
    \u0275\u0275advance();
    \u0275\u0275propertyInterpolate("orientation", ctx_r1.utilityService.getActiveBreakpoint() === ctx_r1.Breakpoint.Mobile ? "horizontal" : "vertical");
    \u0275\u0275twoWayProperty("activeId", ctx_r1.active);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngbNavItem", ctx_r1.TabID.General);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r3(ctx_r1.TabID.General));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngbNavItem", ctx_r1.TabID.CoverImage);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r3(ctx_r1.TabID.CoverImage));
    \u0275\u0275advance(2);
    \u0275\u0275classMapInterpolate1("tab-content ", ctx_r1.utilityService.getActiveBreakpoint() === ctx_r1.Breakpoint.Mobile ? "mt-3" : "ms-4 flex-fill", "");
    \u0275\u0275property("ngbNavOutlet", nav_r11);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(t_r3("close"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r3("save"));
  }
}
var TabID;
(function(TabID3) {
  TabID3["General"] = "general-tab";
  TabID3["CoverImage"] = "cover-image-tab";
})(TabID || (TabID = {}));
var EditReadingListModalComponent = class _EditReadingListModalComponent {
  get Breakpoint() {
    return Breakpoint;
  }
  get TabID() {
    return TabID;
  }
  constructor(ngModal, readingListService, utilityService, uploadService, toastr, imageService, cdRef, accountService) {
    this.ngModal = ngModal;
    this.readingListService = readingListService;
    this.utilityService = utilityService;
    this.uploadService = uploadService;
    this.toastr = toastr;
    this.imageService = imageService;
    this.cdRef = cdRef;
    this.accountService = accountService;
    this.destroyRef = inject(DestroyRef);
    this.coverImageIndex = 0;
    this.selectedCover = "";
    this.coverImageLocked = false;
    this.imageUrls = [];
    this.active = TabID.General;
  }
  ngOnInit() {
    this.reviewGroup = new FormGroup({
      title: new FormControl(this.readingList.title, { nonNullable: true, validators: [Validators.required] }),
      summary: new FormControl(this.readingList.summary, { nonNullable: true, validators: [] }),
      promoted: new FormControl(this.readingList.promoted, { nonNullable: true, validators: [] }),
      startingMonth: new FormControl(this.readingList.startingMonth, { nonNullable: true, validators: [Validators.min(1), Validators.max(12)] }),
      startingYear: new FormControl(this.readingList.startingYear, { nonNullable: true, validators: [Validators.min(1e3)] }),
      endingMonth: new FormControl(this.readingList.endingMonth, { nonNullable: true, validators: [Validators.min(1), Validators.max(12)] }),
      endingYear: new FormControl(this.readingList.endingYear, { nonNullable: true, validators: [Validators.min(1e3)] })
    });
    this.coverImageLocked = this.readingList.coverImageLocked;
    this.reviewGroup.get("title")?.valueChanges.pipe(debounceTime(100), distinctUntilChanged(), switchMap((name) => this.readingListService.nameExists(name)), tap((exists) => {
      const isExistingName = this.reviewGroup.get("title")?.value === this.readingList.title;
      if (!exists || isExistingName) {
        this.reviewGroup.get("title")?.setErrors(null);
      } else {
        this.reviewGroup.get("title")?.setErrors({ duplicateName: true });
      }
      this.cdRef.markForCheck();
    }), takeUntilDestroyed(this.destroyRef)).subscribe();
    this.imageUrls.push(this.imageService.randomize(this.imageService.getReadingListCoverImage(this.readingList.id)));
    if (!this.readingList.items || this.readingList.items.length === 0) {
      this.readingListService.getListItems(this.readingList.id).subscribe((items) => {
        this.imageUrls.push(...items.map((rli) => this.imageService.getChapterCoverImage(rli.chapterId)));
      });
    } else {
      this.imageUrls.push(...this.readingList.items.map((rli) => this.imageService.getChapterCoverImage(rli.chapterId)));
    }
  }
  close() {
    this.ngModal.dismiss(void 0);
  }
  save() {
    if (this.reviewGroup.value.title.trim() === "")
      return;
    const model = __spreadProps(__spreadValues({}, this.reviewGroup.value), { readingListId: this.readingList.id, coverImageLocked: this.coverImageLocked });
    model.startingMonth = model.startingMonth || 0;
    model.startingYear = model.startingYear || 0;
    model.endingMonth = model.endingMonth || 0;
    model.endingYear = model.endingYear || 0;
    const apis = [this.readingListService.update(model)];
    if (this.selectedCover !== "") {
      apis.push(this.uploadService.updateReadingListCoverImage(this.readingList.id, this.selectedCover));
    }
    forkJoin(apis).subscribe((results) => {
      this.readingList.title = model.title;
      this.readingList.summary = model.summary;
      this.readingList.coverImageLocked = this.coverImageLocked;
      this.readingList.promoted = model.promoted;
      this.ngModal.close(this.readingList);
      this.toastr.success(translate("toasts.reading-list-updated"));
    });
  }
  updateSelectedIndex(index) {
    this.coverImageIndex = index;
    this.cdRef.detectChanges();
  }
  updateSelectedImage(url) {
    this.selectedCover = url;
  }
  handleReset() {
    this.coverImageLocked = false;
  }
  static {
    this.\u0275fac = function EditReadingListModalComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _EditReadingListModalComponent)(\u0275\u0275directiveInject(NgbActiveModal), \u0275\u0275directiveInject(ReadingListService), \u0275\u0275directiveInject(UtilityService), \u0275\u0275directiveInject(UploadService), \u0275\u0275directiveInject(ToastrService), \u0275\u0275directiveInject(ImageService), \u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(AccountService));
    };
  }
  static {
    this.\u0275cmp = \u0275\u0275defineComponent({ type: _EditReadingListModalComponent, selectors: [["app-edit-reading-list-modal"]], inputs: { readingList: "readingList" }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 1, vars: 1, consts: [["nav", "ngbNav"], ["promotedTooltip", ""], [4, "transloco", "translocoRead"], [1, "modal-header"], ["id", "modal-basic-title", 1, "modal-title"], ["type", "button", 1, "btn-close", 3, "click"], ["ngbNav", "", 1, "nav-pills", 2, "min-width", "135px", 3, "activeIdChange", "activeId", "orientation"], [3, "ngbNavItem"], ["ngbNavLink", ""], ["ngbNavContent", ""], [3, "ngbNavOutlet"], [1, "modal-footer"], ["type", "button", 1, "btn", "btn-secondary", 3, "click"], ["type", "submit", 1, "btn", "btn-primary", 3, "click"], [3, "formGroup"], [1, "row", "g-0", "mb-3"], [1, "col-md-8", "col-sm-12"], ["for", "library-name", 1, "form-label"], ["id", "library-name", "formControlName", "title", "type", "text", 1, "form-control"], ["id", "inviteForm-validations", "class", "invalid-feedback", 4, "ngIf"], [4, "ngIf"], [1, "col-md-6", "col-sm-12"], ["id", "starting-year-header"], ["class", "col-md-6 col-sm-12", "style", "width: 90%", 4, "ngIf"], ["id", "ending-year-heading"], ["for", "summary", 1, "form-label"], ["id", "summary", "formControlName", "summary", "rows", "3", 1, "form-control"], ["id", "inviteForm-validations", 1, "invalid-feedback"], ["class", "col-md-3 col-sm-12 ms-2", 4, "ngIf"], [1, "col-md-3", "col-sm-12", "ms-2"], [1, "form-check", "form-switch"], ["type", "checkbox", "id", "tag-promoted", "role", "switch", "formControlName", "promoted", "aria-labelledby", "auto-close-label", "aria-describedby", "tag-promoted-help", 1, "form-check-input"], ["for", "tag-promoted", 1, "form-check-label", "me-1"], ["aria-hidden", "true", "placement", "left", "role", "button", "tabindex", "0", 1, "fa", "fa-info-circle", 3, "ngbTooltip"], ["id", "tag-promoted-help", 1, "visually-hidden"], [3, "ngTemplateOutlet"], [1, "col-md-6", "col-sm-12", 2, "width", "90%"], ["for", "start-month", 1, "form-label"], ["id", "start-month", "formControlName", "startingMonth", "type", "number", "inputmode", "numeric", "aria-describedby", "starting-year-header", 1, "form-control"], ["class", "invalid-feedback", 4, "ngIf"], [1, "invalid-feedback"], ["for", "start-year", 1, "form-label"], ["id", "start-year", "formControlName", "startingYear", "type", "number", "inputmode", "numeric", "aria-describedby", "starting-year-header", 1, "form-control"], ["for", "ending-month", 1, "form-label"], ["id", "ending-month", "formControlName", "endingMonth", "type", "number", "inputmode", "numeric", "aria-describedby", "ending-year-header", 1, "form-control"], ["for", "ending-year", 1, "form-label"], ["id", "ending-year", "formControlName", "endingYear", "type", "number", "inputmode", "numeric", "aria-describedby", "ending-year-header", 1, "form-control"], [3, "imageUrlsChange", "imageSelected", "selectedBase64Url", "resetClicked", "imageUrls", "showReset"]], template: function EditReadingListModalComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, EditReadingListModalComponent_ng_container_0_Template, 22, 19, "ng-container", 2);
      }
      if (rf & 2) {
        \u0275\u0275property("translocoRead", "edit-reading-list-modal");
      }
    }, dependencies: [NgbNav, NgbNavItem, NgbNavItemRole, NgbNavLink, NgbNavContent, ReactiveFormsModule, \u0275NgNoValidate, DefaultValueAccessor, NumberValueAccessor, CheckboxControlValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, NgIf, NgbTooltip, NgTemplateOutlet, CoverImageChooserComponent, NgbNavOutlet, AsyncPipe, TranslocoDirective], styles: ["\n\n.form-switch[_ngcontent-%COMP%] {\n  margin-top: 2.4rem;\n}\n/*# sourceMappingURL=edit-reading-list-modal.component.css.map */"], changeDetection: 0 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(EditReadingListModalComponent, { className: "EditReadingListModalComponent", filePath: "src/app/reading-list/_modals/edit-reading-list-modal/edit-reading-list-modal.component.ts", lineNumber: 38 });
})();

// src/app/_services/chapter.service.ts
var ChapterService = class _ChapterService {
  constructor(httpClient) {
    this.httpClient = httpClient;
    this.baseUrl = environment.apiUrl;
  }
  getChapterMetadata(chapterId) {
    return this.httpClient.get(this.baseUrl + "chapter?chapterId=" + chapterId);
  }
  deleteChapter(chapterId) {
    return this.httpClient.delete(this.baseUrl + "chapter?chapterId=" + chapterId);
  }
  deleteMultipleChapters(seriesId, chapterIds) {
    return this.httpClient.post(this.baseUrl + `chapter/delete-multiple?seriesId=${seriesId}`, { chapterIds });
  }
  updateChapter(chapter) {
    return this.httpClient.post(this.baseUrl + "chapter/update", chapter, TextResonse);
  }
  static {
    this.\u0275fac = function ChapterService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ChapterService)(\u0275\u0275inject(HttpClient));
    };
  }
  static {
    this.\u0275prov = \u0275\u0275defineInjectable({ token: _ChapterService, factory: _ChapterService.\u0275fac, providedIn: "root" });
  }
};

// src/app/_services/volume.service.ts
var VolumeService = class _VolumeService {
  constructor(httpClient) {
    this.httpClient = httpClient;
    this.baseUrl = environment.apiUrl;
  }
  getVolumeMetadata(volumeId) {
    return this.httpClient.get(this.baseUrl + "volume?volumeId=" + volumeId);
  }
  deleteVolume(volumeId) {
    return this.httpClient.delete(this.baseUrl + "volume?volumeId=" + volumeId);
  }
  updateVolume(volume) {
    return this.httpClient.post(this.baseUrl + "volume/update", volume, TextResonse);
  }
  static {
    this.\u0275fac = function VolumeService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _VolumeService)(\u0275\u0275inject(HttpClient));
    };
  }
  static {
    this.\u0275prov = \u0275\u0275defineInjectable({ token: _VolumeService, factory: _VolumeService.\u0275fac, providedIn: "root" });
  }
};

// src/app/_models/series-detail/external-series-detail.ts
var PlusMediaFormat;
(function(PlusMediaFormat2) {
  PlusMediaFormat2[PlusMediaFormat2["Manga"] = 1] = "Manga";
  PlusMediaFormat2[PlusMediaFormat2["Comic"] = 2] = "Comic";
  PlusMediaFormat2[PlusMediaFormat2["LightNovel"] = 3] = "LightNovel";
  PlusMediaFormat2[PlusMediaFormat2["Book"] = 4] = "Book";
})(PlusMediaFormat || (PlusMediaFormat = {}));

// src/app/_pipes/plus-media-format.pipe.ts
var PlusMediaFormatPipe = class _PlusMediaFormatPipe {
  transform(value) {
    switch (value) {
      case PlusMediaFormat.Manga:
        return translate("library-type-pipe.manga");
      case PlusMediaFormat.Comic:
        return translate("library-type-pipe.comic");
      case PlusMediaFormat.LightNovel:
        return translate("library-type-pipe.lightNovel");
      case PlusMediaFormat.Book:
        return translate("library-type-pipe.book");
    }
  }
  static {
    this.\u0275fac = function PlusMediaFormatPipe_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _PlusMediaFormatPipe)();
    };
  }
  static {
    this.\u0275pipe = \u0275\u0275definePipe({ name: "plusMediaFormat", type: _PlusMediaFormatPipe, pure: true, standalone: true });
  }
};

// src/app/_single-module/match-series-result-item/match-series-result-item.component.ts
var _c05 = (a0) => ({ num: a0 });
function MatchSeriesResultItemComponent_ng_container_0_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-image", 3);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("imageUrl", ctx_r1.item.series.coverUrl);
  }
}
function MatchSeriesResultItemComponent_ng_container_0_For_14_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, ", ");
    \u0275\u0275elementEnd();
  }
}
function MatchSeriesResultItemComponent_ng_container_0_For_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275template(1, MatchSeriesResultItemComponent_ng_container_0_For_14_Conditional_1_Template, 2, 0, "span");
  }
  if (rf & 2) {
    const synm_r3 = ctx.$implicit;
    const \u0275$index_27_r4 = ctx.$index;
    const \u0275$count_27_r5 = ctx.$count;
    \u0275\u0275textInterpolate1(" ", synm_r3, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(!(\u0275$index_27_r4 === \u0275$count_27_r5 - 1) ? 1 : -1);
  }
}
function MatchSeriesResultItemComponent_ng_container_0_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275element(1, "app-read-more", 10);
    \u0275\u0275elementStart(2, "span", 2)(3, "a", 11);
    \u0275\u0275listener("click", function MatchSeriesResultItemComponent_ng_container_0_Conditional_15_Template_a_click_3_listener($event) {
      \u0275\u0275restoreView(_r6);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const t_r7 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("text", ctx_r1.item.series.summary)("showToggle", false);
    \u0275\u0275advance(2);
    \u0275\u0275property("href", ctx_r1.item.series.siteUrl, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(t_r7("details"));
  }
}
function MatchSeriesResultItemComponent_ng_container_0_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8);
    \u0275\u0275element(1, "app-loading", 12);
    \u0275\u0275elementStart(2, "span", 13);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const t_r7 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("absolute", false)("loading", true);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r7("updating-metadata-status"));
  }
}
function MatchSeriesResultItemComponent_ng_container_0_Conditional_17_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 2);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "span", 2);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r7 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(t_r7("volume-count", \u0275\u0275pureFunction1(2, _c05, ctx_r1.item.series.volumes)));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r7("chapter-count", \u0275\u0275pureFunction1(4, _c05, ctx_r1.item.series.chapters)));
  }
}
function MatchSeriesResultItemComponent_ng_container_0_Conditional_17_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 2);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r7 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(t_r7("releasing"));
  }
}
function MatchSeriesResultItemComponent_ng_container_0_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9);
    \u0275\u0275template(1, MatchSeriesResultItemComponent_ng_container_0_Conditional_17_Conditional_1_Template, 4, 6)(2, MatchSeriesResultItemComponent_ng_container_0_Conditional_17_Conditional_2_Template, 2, 1, "span", 2);
    \u0275\u0275elementStart(3, "span", 2);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "plusMediaFormat");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275conditional((ctx_r1.item.series.volumes || 0) > 0 || (ctx_r1.item.series.chapters || 0) > 0 ? 1 : 2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 2, ctx_r1.item.series.plusMediaFormat));
  }
}
function MatchSeriesResultItemComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div")(2, "div", 1);
    \u0275\u0275listener("click", function MatchSeriesResultItemComponent_ng_container_0_Template_div_click_2_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.selectItem());
    });
    \u0275\u0275elementStart(3, "div", 2);
    \u0275\u0275template(4, MatchSeriesResultItemComponent_ng_container_0_Conditional_4_Template, 1, 1, "app-image", 3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 4)(6, "div")(7, "span", 5);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "span", 6);
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "translocoPercent");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div", 7);
    \u0275\u0275repeaterCreate(13, MatchSeriesResultItemComponent_ng_container_0_For_14_Template, 2, 2, null, null, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
    \u0275\u0275template(15, MatchSeriesResultItemComponent_ng_container_0_Conditional_15_Template, 5, 4, "div");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(16, MatchSeriesResultItemComponent_ng_container_0_Conditional_16_Template, 4, 3, "div", 8)(17, MatchSeriesResultItemComponent_ng_container_0_Conditional_17_Template, 6, 4, "div", 9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275classMapInterpolate1("match-item-container p-3 mt-3 ", ctx_r1.isDarkMode ? "dark" : "light", "");
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r1.item.series.coverUrl ? 4 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.item.series.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("(", \u0275\u0275pipeBind1(11, 8, ctx_r1.item.matchRating), ")");
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r1.item.series.synonyms);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.item.series.summary ? 15 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.isSelected ? 16 : 17);
  }
}
var MatchSeriesResultItemComponent = class _MatchSeriesResultItemComponent {
  constructor() {
    this.cdRef = inject(ChangeDetectorRef);
    this.isDarkMode = true;
    this.selected = new EventEmitter();
    this.isSelected = false;
  }
  selectItem() {
    if (this.isSelected)
      return;
    this.isSelected = true;
    this.cdRef.markForCheck();
    this.selected.emit(this.item);
  }
  static {
    this.\u0275fac = function MatchSeriesResultItemComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _MatchSeriesResultItemComponent)();
    };
  }
  static {
    this.\u0275cmp = \u0275\u0275defineComponent({ type: _MatchSeriesResultItemComponent, selectors: [["app-match-series-result-item"]], inputs: { item: "item", isDarkMode: "isDarkMode" }, outputs: { selected: "selected" }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 1, vars: 1, consts: [[4, "transloco", "translocoRead"], [1, "d-flex", "clickable", "match-item", 3, "click"], [1, "me-1"], ["width", "100px", 1, "me-3", "search-result", 3, "imageUrl"], [1, "ms-1"], [1, "title"], [1, "me-1", "float-end"], [1, "text-muted"], [1, "d-flex", "p-1", "justify-content-center"], [1, "d-flex", "pt-3", "justify-content-between"], [3, "text", "showToggle"], ["rel", "noreferrer noopener", "target", "_blank", 3, "click", "href"], [3, "absolute", "loading"], [1, "ms-2"]], template: function MatchSeriesResultItemComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, MatchSeriesResultItemComponent_ng_container_0_Template, 18, 10, "ng-container", 0);
      }
      if (rf & 2) {
        \u0275\u0275property("translocoRead", "match-series-result-item");
      }
    }, dependencies: [
      ImageComponent,
      TranslocoPercentPipe,
      ReadMoreComponent,
      TranslocoDirective,
      PlusMediaFormatPipe,
      LoadingComponent
    ], styles: ["\n\n.search-result[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  max-width: 100px;\n  min-width: 100px;\n}\n.title[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n  font-weight: bold;\n  margin: 0;\n  padding: 0;\n}\n.match-item-container[_ngcontent-%COMP%] {\n  border-radius: 15px;\n}\n.match-item-container.dark[_ngcontent-%COMP%] {\n  background-color: var(--elevation-layer6-dark);\n}\n.match-item-container.light[_ngcontent-%COMP%] {\n  background-color: var(--elevation-layer6);\n}\n.match-item-container[_ngcontent-%COMP%]:hover.dark {\n  background-color: var(--elevation-layer11-dark);\n}\n.match-item-container[_ngcontent-%COMP%]:hover.light {\n  background-color: var(--elevation-layer11);\n}\n/*# sourceMappingURL=match-series-result-item.component.css.map */"], changeDetection: 0 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MatchSeriesResultItemComponent, { className: "MatchSeriesResultItemComponent", filePath: "src/app/_single-module/match-series-result-item/match-series-result-item.component.ts", lineNumber: 35 });
})();

// src/app/_single-module/match-series-modal/match-series-modal.component.ts
var _forTrack02 = ($index, $item) => $item.series.name;
var _c06 = (a0) => ({ seriesName: a0 });
function MatchSeriesModalComponent_ng_container_0_ng_template_13_Conditional_1_Conditional_1_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 19);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r3 = \u0275\u0275nextContext(4).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(t_r3("required-field"));
  }
}
function MatchSeriesModalComponent_ng_container_0_ng_template_13_Conditional_1_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, MatchSeriesModalComponent_ng_container_0_ng_template_13_Conditional_1_Conditional_1_Conditional_0_Template, 2, 1, "div", 19);
  }
  if (rf & 2) {
    const formControl_r4 = \u0275\u0275nextContext();
    \u0275\u0275conditional(formControl_r4.errors.required ? 0 : -1);
  }
}
function MatchSeriesModalComponent_ng_container_0_ng_template_13_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "input", 18);
    \u0275\u0275template(1, MatchSeriesModalComponent_ng_container_0_ng_template_13_Conditional_1_Conditional_1_Template, 1, 1);
  }
  if (rf & 2) {
    const formControl_r4 = ctx;
    \u0275\u0275classProp("is-invalid", formControl_r4.invalid && !formControl_r4.untouched);
    \u0275\u0275advance();
    \u0275\u0275conditional(formControl_r4.errors ? 1 : -1);
  }
}
function MatchSeriesModalComponent_ng_container_0_ng_template_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 17);
    \u0275\u0275template(1, MatchSeriesModalComponent_ng_container_0_ng_template_13_Conditional_1_Template, 2, 3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_5_0;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275conditional((tmp_5_0 = ctx_r1.formGroup.get("query")) ? 1 : -1, tmp_5_0);
  }
}
function MatchSeriesModalComponent_ng_container_0_ng_template_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 20);
    \u0275\u0275element(1, "input", 21);
    \u0275\u0275elementEnd();
  }
}
function MatchSeriesModalComponent_ng_container_0_Conditional_24_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-match-series-result-item", 24);
    \u0275\u0275pipe(1, "async");
    \u0275\u0275listener("selected", function MatchSeriesModalComponent_ng_container_0_Conditional_24_For_2_Template_app_match_series_result_item_selected_0_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.selectMatch($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r6 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("item", item_r6)("isDarkMode", \u0275\u0275pipeBind1(1, 2, ctx_r1.themeService.isDarkMode$));
  }
}
function MatchSeriesModalComponent_ng_container_0_Conditional_24_ForEmpty_3_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const t_r3 = \u0275\u0275nextContext(3).$implicit;
    \u0275\u0275textInterpolate1(" ", t_r3("no-results"), " ");
  }
}
function MatchSeriesModalComponent_ng_container_0_Conditional_24_ForEmpty_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, MatchSeriesModalComponent_ng_container_0_Conditional_24_ForEmpty_3_Conditional_0_Template, 1, 1);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275conditional(!ctx_r1.isLoading ? 0 : -1);
  }
}
function MatchSeriesModalComponent_ng_container_0_Conditional_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-loading", 22);
    \u0275\u0275repeaterCreate(1, MatchSeriesModalComponent_ng_container_0_Conditional_24_For_2_Template, 2, 4, "app-match-series-result-item", 23, _forTrack02, false, MatchSeriesModalComponent_ng_container_0_Conditional_24_ForEmpty_3_Template, 1, 1);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("loading", ctx_r1.isLoading);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.matches);
  }
}
function MatchSeriesModalComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div")(2, "div", 3)(3, "h4", 4);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 5);
    \u0275\u0275listener("click", function MatchSeriesModalComponent_ng_container_0_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.close());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 6)(7, "form", 7)(8, "p");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 8)(11, "div", 9)(12, "app-setting-item", 10);
    \u0275\u0275template(13, MatchSeriesModalComponent_ng_container_0_ng_template_13_Template, 2, 1, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "div", 8)(16, "div", 9)(17, "app-setting-switch", 11);
    \u0275\u0275template(18, MatchSeriesModalComponent_ng_container_0_ng_template_18_Template, 2, 0, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(20, "div", 8)(21, "button", 12);
    \u0275\u0275listener("click", function MatchSeriesModalComponent_ng_container_0_Template_button_click_21_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.search());
    });
    \u0275\u0275text(22);
    \u0275\u0275elementEnd()()();
    \u0275\u0275element(23, "div", 13);
    \u0275\u0275template(24, MatchSeriesModalComponent_ng_container_0_Conditional_24_Template, 4, 2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "div", 14)(26, "button", 15);
    \u0275\u0275listener("click", function MatchSeriesModalComponent_ng_container_0_Template_button_click_26_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.close());
    });
    \u0275\u0275text(27);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "button", 16);
    \u0275\u0275listener("click", function MatchSeriesModalComponent_ng_container_0_Template_button_click_28_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.save());
    });
    \u0275\u0275text(29);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    let tmp_14_0;
    let tmp_16_0;
    const t_r3 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", t_r3("title", \u0275\u0275pureFunction1(15, _c06, ctx_r1.series.name)), " ");
    \u0275\u0275advance();
    \u0275\u0275attribute("aria-label", t_r3("close"));
    \u0275\u0275advance(2);
    \u0275\u0275property("formGroup", ctx_r1.formGroup);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r3("description"));
    \u0275\u0275advance(3);
    \u0275\u0275property("title", t_r3("query-label"))("subtitle", t_r3("query-tooltip"))("toggleOnViewClick", false)("showEdit", false);
    \u0275\u0275advance(5);
    \u0275\u0275property("title", t_r3("dont-match-label"))("subtitle", t_r3("dont-match-tooltip"));
    \u0275\u0275advance(4);
    \u0275\u0275property("disabled", (tmp_14_0 = ctx_r1.formGroup.get("dontMatch")) == null ? null : tmp_14_0.value);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(t_r3("search"));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(!((tmp_16_0 = ctx_r1.formGroup.get("dontMatch")) == null ? null : tmp_16_0.value) ? 24 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(t_r3("close"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r3("save"));
  }
}
var MatchSeriesModalComponent = class _MatchSeriesModalComponent {
  constructor() {
    this.cdRef = inject(ChangeDetectorRef);
    this.seriesService = inject(SeriesService);
    this.modalService = inject(NgbActiveModal);
    this.toastr = inject(ToastrService);
    this.themeService = inject(ThemeService);
    this.formGroup = new FormGroup({});
    this.matches = [];
    this.isLoading = true;
  }
  ngOnInit() {
    this.formGroup.addControl("query", new FormControl("", []));
    this.formGroup.addControl("dontMatch", new FormControl(this.series?.dontMatch || false, []));
    this.search();
  }
  search() {
    this.isLoading = true;
    this.cdRef.markForCheck();
    const model = this.formGroup.value;
    model.seriesId = this.series.id;
    if (model.dontMatch)
      return;
    this.seriesService.matchSeries(model).subscribe((results) => {
      this.isLoading = false;
      this.matches = results;
      this.cdRef.markForCheck();
    });
  }
  close() {
    this.modalService.close(false);
  }
  save() {
    const model = this.formGroup.value;
    model.seriesId = this.series.id;
    const dontMatchChanged = this.series.dontMatch !== model.dontMatch;
    if (dontMatchChanged) {
      this.seriesService.updateDontMatch(this.series.id, model.dontMatch).subscribe((_) => {
        this.modalService.close(true);
      });
    } else {
      this.toastr.success(translate("toasts.match-success"));
      this.modalService.close(true);
    }
  }
  selectMatch(item) {
    const data = item.series;
    data.tags = data.tags || [];
    data.genres = data.genres || [];
    this.seriesService.updateMatch(this.series.id, data).subscribe((_) => {
      this.save();
    });
  }
  static {
    this.\u0275fac = function MatchSeriesModalComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _MatchSeriesModalComponent)();
    };
  }
  static {
    this.\u0275cmp = \u0275\u0275defineComponent({ type: _MatchSeriesModalComponent, selectors: [["app-match-series-modal"]], inputs: { series: "series" }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 1, vars: 1, consts: [["view", ""], ["switch", ""], [4, "transloco", "translocoRead"], [1, "modal-header"], ["id", "modal-basic-title", 1, "modal-title"], ["type", "button", 1, "btn-close", 3, "click"], [1, "modal-body", "scrollable-modal"], [3, "formGroup"], [1, "row", "g-0"], [1, "mb-3", 2, "width", "100%"], [3, "title", "subtitle", "toggleOnViewClick", "showEdit"], [3, "title", "subtitle"], [1, "btn", "btn-primary", 3, "click", "disabled"], [1, "setting-section-break"], [1, "modal-footer"], ["type", "button", 1, "btn", "btn-secondary", 3, "click"], ["type", "button", 1, "btn", "btn-primary", 3, "click"], [1, "input-group"], ["id", "query", "formControlName", "query", "type", "text", 1, "form-control"], [1, "invalid-feedback"], [1, "form-check", "form-switch"], ["id", "dont-match", "type", "checkbox", "formControlName", "dontMatch", "role", "switch", 1, "form-check-input"], [3, "loading"], [3, "item", "isDarkMode"], [3, "selected", "item", "isDarkMode"]], template: function MatchSeriesModalComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, MatchSeriesModalComponent_ng_container_0_Template, 30, 17, "ng-container", 2);
      }
      if (rf & 2) {
        \u0275\u0275property("translocoRead", "match-series-modal");
      }
    }, dependencies: [
      AsyncPipe,
      TranslocoDirective,
      MatchSeriesResultItemComponent,
      LoadingComponent,
      ReactiveFormsModule,
      \u0275NgNoValidate,
      DefaultValueAccessor,
      CheckboxControlValueAccessor,
      NgControlStatus,
      NgControlStatusGroup,
      FormGroupDirective,
      FormControlName,
      SettingItemComponent,
      SettingSwitchComponent
    ], styles: ["\n\n.setting-section-break[_ngcontent-%COMP%] {\n  margin: 0 !important;\n}\n/*# sourceMappingURL=match-series-modal.component.css.map */"], changeDetection: 0 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MatchSeriesModalComponent, { className: "MatchSeriesModalComponent", filePath: "src/app/_single-module/match-series-modal/match-series-modal.component.ts", lineNumber: 32 });
})();

// src/app/_services/action.service.ts
var ActionService = class _ActionService {
  constructor() {
    this.chapterService = inject(ChapterService);
    this.volumeService = inject(VolumeService);
    this.libraryService = inject(LibraryService);
    this.seriesService = inject(SeriesService);
    this.readerService = inject(ReaderService);
    this.toastr = inject(ToastrService);
    this.modalService = inject(NgbModal);
    this.confirmService = inject(ConfirmService);
    this.memberService = inject(MemberService);
    this.deviceService = inject(DeviceService);
    this.collectionTagService = inject(CollectionTagService);
    this.filterService = inject(FilterService);
    this.readingListService = inject(ReadingListService);
    this.readingListModalRef = null;
    this.collectionModalRef = null;
  }
  scanLibrary(library, callback) {
    return __async(this, null, function* () {
      if (!library.hasOwnProperty("id") || library.id === void 0) {
        return;
      }
      const force = false;
      this.libraryService.scan(library.id, force).pipe(take(1)).subscribe((res) => {
        this.toastr.info(translate("toasts.scan-queued", { name: library.name }));
        if (callback) {
          callback(library);
        }
      });
    });
  }
  refreshLibraryMetadata(library, callback, forceUpdate = true, forceColorscape = false) {
    return __async(this, null, function* () {
      if (!library.hasOwnProperty("id") || library.id === void 0) {
        return;
      }
      if (forceUpdate) {
        if (!(yield this.confirmService.confirm(translate("toasts.confirm-regen-covers")))) {
          if (callback) {
            callback(library);
          }
          return;
        }
      }
      const message = forceUpdate ? "toasts.refresh-covers-queued" : "toasts.generate-colorscape-queued";
      this.libraryService.refreshMetadata(library?.id, forceUpdate, forceColorscape).subscribe((res) => {
        this.toastr.info(translate(message, { name: library.name }));
        if (callback) {
          callback(library);
        }
      });
    });
  }
  editLibrary(library, callback) {
    const modalRef = this.modalService.open(LibrarySettingsModalComponent, DefaultModalOptions);
    modalRef.componentInstance.library = library;
    modalRef.closed.subscribe((closeResult) => {
      if (callback)
        callback(library);
    });
  }
  analyzeFiles(library, callback) {
    return __async(this, null, function* () {
      if (!library.hasOwnProperty("id") || library.id === void 0) {
        return;
      }
      if (!(yield this.confirmService.alert(translate("toasts.alert-long-running")))) {
        if (callback) {
          callback(library);
        }
        return;
      }
      this.libraryService.analyze(library?.id).pipe(take(1)).subscribe((res) => {
        this.toastr.info(translate("toasts.library-file-analysis-queued", { name: library.name }));
        if (callback) {
          callback(library);
        }
      });
    });
  }
  deleteLibrary(library, callback) {
    return __async(this, null, function* () {
      if (!library.hasOwnProperty("id") || library.id === void 0) {
        return;
      }
      if (!(yield this.confirmService.alert(translate("toasts.confirm-library-delete")))) {
        if (callback) {
          callback(library);
        }
        return;
      }
      this.libraryService.delete(library?.id).pipe(take(1)).subscribe((res) => {
        this.toastr.info(translate("toasts.library-deleted", { name: library.name }));
        if (callback) {
          callback(library);
        }
      });
    });
  }
  markSeriesAsRead(series, callback) {
    this.seriesService.markRead(series.id).pipe(take(1)).subscribe((res) => {
      series.pagesRead = series.pages;
      this.toastr.success(translate("toasts.entity-read", { name: series.name }));
      if (callback) {
        callback(series);
      }
    });
  }
  markSeriesAsUnread(series, callback) {
    this.seriesService.markUnread(series.id).pipe(take(1)).subscribe((res) => {
      series.pagesRead = 0;
      this.toastr.success(translate("toasts.entity-unread", { name: series.name }));
      if (callback) {
        callback(series);
      }
    });
  }
  scanSeries(series, callback) {
    return __async(this, null, function* () {
      this.seriesService.scan(series.libraryId, series.id).pipe(take(1)).subscribe((res) => {
        this.toastr.info(translate("toasts.scan-queued", { name: series.name }));
        if (callback) {
          callback(series);
        }
      });
    });
  }
  analyzeFilesForSeries(series, callback) {
    this.seriesService.analyzeFiles(series.libraryId, series.id).pipe(take(1)).subscribe((res) => {
      this.toastr.info(translate("toasts.scan-queued", { name: series.name }));
      if (callback) {
        callback(series);
      }
    });
  }
  refreshSeriesMetadata(series, callback, forceUpdate = true, forceColorscape = false) {
    return __async(this, null, function* () {
      if (forceUpdate) {
        if (!(yield this.confirmService.confirm(translate("toasts.confirm-regen-covers")))) {
          if (callback) {
            callback(series);
          }
          return;
        }
      }
      const message = forceUpdate ? "toasts.refresh-covers-queued" : "toasts.generate-colorscape-queued";
      this.seriesService.refreshMetadata(series, forceUpdate, forceColorscape).pipe(take(1)).subscribe((res) => {
        this.toastr.info(translate(message, { name: series.name }));
        if (callback) {
          callback(series);
        }
      });
    });
  }
  markVolumeAsRead(seriesId, volume, callback) {
    this.readerService.markVolumeRead(seriesId, volume.id).pipe(take(1)).subscribe(() => {
      volume.pagesRead = volume.pages;
      volume.chapters?.forEach((c) => c.pagesRead = c.pages);
      this.toastr.success(translate("toasts.mark-read"));
      if (callback) {
        callback(volume);
      }
    });
  }
  markVolumeAsUnread(seriesId, volume, callback) {
    this.readerService.markVolumeUnread(seriesId, volume.id).subscribe(() => {
      volume.pagesRead = 0;
      volume.chapters?.forEach((c) => c.pagesRead = 0);
      this.toastr.success(translate("toasts.mark-unread"));
      if (callback) {
        callback(volume);
      }
    });
  }
  markChapterAsRead(libraryId, seriesId, chapter, callback) {
    this.readerService.saveProgress(libraryId, seriesId, chapter.volumeId, chapter.id, chapter.pages).pipe(take(1)).subscribe((results) => {
      chapter.pagesRead = chapter.pages;
      this.toastr.success(translate("toasts.mark-read"));
      if (callback) {
        callback(chapter);
      }
    });
  }
  markChapterAsUnread(libraryId, seriesId, chapter, callback) {
    this.readerService.saveProgress(libraryId, seriesId, chapter.volumeId, chapter.id, 0).pipe(take(1)).subscribe((results) => {
      chapter.pagesRead = 0;
      this.toastr.success(translate("toasts.mark-unread"));
      if (callback) {
        callback(chapter);
      }
    });
  }
  markMultipleAsRead(seriesId, volumes, chapters, callback) {
    this.readerService.markMultipleRead(seriesId, volumes.map((v) => v.id), chapters?.map((c) => c.id)).pipe(take(1)).subscribe(() => {
      volumes.forEach((volume) => {
        volume.pagesRead = volume.pages;
        volume.chapters?.forEach((c) => c.pagesRead = c.pages);
      });
      chapters?.forEach((c) => c.pagesRead = c.pages);
      this.toastr.success(translate("toasts.mark-read"));
      if (callback) {
        callback();
      }
    });
  }
  markMultipleAsUnread(seriesId, volumes, chapters, callback) {
    this.readerService.markMultipleUnread(seriesId, volumes.map((v) => v.id), chapters?.map((c) => c.id)).pipe(take(1)).subscribe(() => {
      volumes.forEach((volume) => {
        volume.pagesRead = 0;
        volume.chapters?.forEach((c) => c.pagesRead = 0);
      });
      chapters?.forEach((c) => c.pagesRead = 0);
      this.toastr.success(translate("toasts.mark-unread"));
      if (callback) {
        callback();
      }
    });
  }
  markMultipleSeriesAsRead(series, callback) {
    this.readerService.markMultipleSeriesRead(series.map((v) => v.id)).pipe(take(1)).subscribe(() => {
      series.forEach((s) => {
        s.pagesRead = s.pages;
      });
      this.toastr.success(translate("toasts.mark-read"));
      if (callback) {
        callback();
      }
    });
  }
  markMultipleSeriesAsUnread(series, callback) {
    this.readerService.markMultipleSeriesUnread(series.map((v) => v.id)).pipe(take(1)).subscribe(() => {
      series.forEach((s) => {
        s.pagesRead = s.pages;
      });
      this.toastr.success(translate("toasts.mark-unread"));
      if (callback) {
        callback();
      }
    });
  }
  promoteMultipleCollections(collections, promoted, callback) {
    this.collectionTagService.promoteMultipleCollections(collections.map((v) => v.id), promoted).pipe(take(1)).subscribe(() => {
      if (promoted) {
        this.toastr.success(translate("toasts.collections-promoted"));
      } else {
        this.toastr.success(translate("toasts.collections-unpromoted"));
      }
      if (callback) {
        callback(true);
      }
    });
  }
  deleteMultipleCollections(collections, callback) {
    return __async(this, null, function* () {
      if (!(yield this.confirmService.confirm(translate("toasts.confirm-delete-collections"))))
        return;
      this.collectionTagService.deleteMultipleCollections(collections.map((v) => v.id)).pipe(take(1)).subscribe(() => {
        this.toastr.success(translate("toasts.collections-deleted"));
        if (callback) {
          callback(true);
        }
      });
    });
  }
  promoteMultipleReadingLists(readingLists, promoted, callback) {
    this.readingListService.promoteMultipleReadingLists(readingLists.map((v) => v.id), promoted).pipe(take(1)).subscribe(() => {
      if (promoted) {
        this.toastr.success(translate("toasts.reading-list-promoted"));
      } else {
        this.toastr.success(translate("toasts.reading-list-unpromoted"));
      }
      if (callback) {
        callback(true);
      }
    });
  }
  deleteMultipleChapters(seriesId, chapterIds, callback) {
    return __async(this, null, function* () {
      if (!(yield this.confirmService.confirm(translate("toasts.confirm-delete-multiple-chapters"))))
        return;
      this.chapterService.deleteMultipleChapters(seriesId, chapterIds.map((c) => c.id)).subscribe(() => {
        if (callback) {
          callback(true);
        }
      });
    });
  }
  deleteMultipleReadingLists(readingLists, callback) {
    return __async(this, null, function* () {
      if (!(yield this.confirmService.confirm(translate("toasts.confirm-delete-reading-list"))))
        return;
      this.readingListService.deleteMultipleReadingLists(readingLists.map((v) => v.id)).pipe(take(1)).subscribe(() => {
        this.toastr.success(translate("toasts.reading-lists-deleted"));
        if (callback) {
          callback(true);
        }
      });
    });
  }
  addMultipleToReadingList(seriesId, volumes, chapters, callback) {
    if (this.readingListModalRef != null) {
      return;
    }
    this.readingListModalRef = this.modalService.open(AddToListModalComponent, { scrollable: true, size: "md", fullscreen: "md" });
    this.readingListModalRef.componentInstance.seriesId = seriesId;
    this.readingListModalRef.componentInstance.volumeIds = volumes.map((v) => v.id);
    this.readingListModalRef.componentInstance.chapterIds = chapters?.map((c) => c.id);
    this.readingListModalRef.componentInstance.title = translate("actionable.multiple-selections");
    this.readingListModalRef.componentInstance.type = ADD_FLOW.Multiple;
    this.readingListModalRef.closed.pipe(take(1)).subscribe(() => {
      this.readingListModalRef = null;
      if (callback) {
        callback(true);
      }
    });
    this.readingListModalRef.dismissed.pipe(take(1)).subscribe(() => {
      this.readingListModalRef = null;
      if (callback) {
        callback(false);
      }
    });
  }
  addMultipleSeriesToWantToReadList(seriesIds, callback) {
    this.memberService.addSeriesToWantToRead(seriesIds).subscribe(() => {
      this.toastr.success("Series added to Want to Read list");
      if (callback) {
        callback();
      }
    });
  }
  removeMultipleSeriesFromWantToReadList(seriesIds, callback) {
    this.memberService.removeSeriesToWantToRead(seriesIds).subscribe(() => {
      this.toastr.success(translate("toasts.series-removed-want-to-read"));
      if (callback) {
        callback();
      }
    });
  }
  addMultipleSeriesToReadingList(series, callback) {
    if (this.readingListModalRef != null) {
      return;
    }
    this.readingListModalRef = this.modalService.open(AddToListModalComponent, { scrollable: true, size: "md", fullscreen: "md" });
    this.readingListModalRef.componentInstance.seriesIds = series.map((v) => v.id);
    this.readingListModalRef.componentInstance.title = translate("actionable.multiple-selections");
    this.readingListModalRef.componentInstance.type = ADD_FLOW.Multiple_Series;
    this.readingListModalRef.closed.pipe(take(1)).subscribe(() => {
      this.readingListModalRef = null;
      if (callback) {
        callback(true);
      }
    });
    this.readingListModalRef.dismissed.pipe(take(1)).subscribe(() => {
      this.readingListModalRef = null;
      if (callback) {
        callback(false);
      }
    });
  }
  addMultipleSeriesToCollectionTag(series, callback) {
    if (this.collectionModalRef != null) {
      return;
    }
    this.collectionModalRef = this.modalService.open(BulkAddToCollectionComponent, { scrollable: true, size: "md", windowClass: "collection", fullscreen: "md" });
    this.collectionModalRef.componentInstance.seriesIds = series.map((v) => v.id);
    this.collectionModalRef.componentInstance.title = translate("actionable.new-collection");
    this.collectionModalRef.closed.pipe(take(1)).subscribe(() => {
      this.collectionModalRef = null;
      if (callback) {
        callback(true);
      }
    });
    this.collectionModalRef.dismissed.pipe(take(1)).subscribe(() => {
      this.collectionModalRef = null;
      if (callback) {
        callback(false);
      }
    });
  }
  addSeriesToReadingList(series, callback) {
    if (this.readingListModalRef != null) {
      return;
    }
    this.readingListModalRef = this.modalService.open(AddToListModalComponent, { scrollable: true, size: "md", fullscreen: "md" });
    this.readingListModalRef.componentInstance.seriesId = series.id;
    this.readingListModalRef.componentInstance.title = series.name;
    this.readingListModalRef.componentInstance.type = ADD_FLOW.Series;
    this.readingListModalRef.closed.pipe(take(1)).subscribe(() => {
      this.readingListModalRef = null;
      if (callback) {
        callback(series);
      }
    });
    this.readingListModalRef.dismissed.pipe(take(1)).subscribe(() => {
      this.readingListModalRef = null;
      if (callback) {
        callback(series);
      }
    });
  }
  addVolumeToReadingList(volume, seriesId, callback) {
    if (this.readingListModalRef != null) {
      return;
    }
    this.readingListModalRef = this.modalService.open(AddToListModalComponent, { scrollable: true, size: "md", fullscreen: "md" });
    this.readingListModalRef.componentInstance.seriesId = seriesId;
    this.readingListModalRef.componentInstance.volumeId = volume.id;
    this.readingListModalRef.componentInstance.type = ADD_FLOW.Volume;
    this.readingListModalRef.closed.pipe(take(1)).subscribe(() => {
      this.readingListModalRef = null;
      if (callback) {
        callback(volume);
      }
    });
    this.readingListModalRef.dismissed.pipe(take(1)).subscribe(() => {
      this.readingListModalRef = null;
      if (callback) {
        callback(volume);
      }
    });
  }
  addChapterToReadingList(chapter, seriesId, callback) {
    if (this.readingListModalRef != null) {
      return;
    }
    this.readingListModalRef = this.modalService.open(AddToListModalComponent, { scrollable: true, size: "md", fullscreen: "md" });
    this.readingListModalRef.componentInstance.seriesId = seriesId;
    this.readingListModalRef.componentInstance.chapterId = chapter.id;
    this.readingListModalRef.componentInstance.type = ADD_FLOW.Chapter;
    this.readingListModalRef.closed.pipe(take(1)).subscribe(() => {
      this.readingListModalRef = null;
      if (callback) {
        callback(chapter);
      }
    });
    this.readingListModalRef.dismissed.pipe(take(1)).subscribe(() => {
      this.readingListModalRef = null;
      if (callback) {
        callback(chapter);
      }
    });
  }
  editReadingList(readingList, callback) {
    const readingListModalRef = this.modalService.open(EditReadingListModalComponent, { scrollable: true, size: "lg", fullscreen: "md" });
    readingListModalRef.componentInstance.readingList = readingList;
    readingListModalRef.closed.pipe(take(1)).subscribe((list) => {
      if (callback && list !== void 0) {
        callback(readingList);
      }
    });
    readingListModalRef.dismissed.pipe(take(1)).subscribe((list) => {
      if (callback && list !== void 0) {
        callback(readingList);
      }
    });
  }
  deleteMultipleSeries(seriesIds, callback) {
    return __async(this, null, function* () {
      if (!(yield this.confirmService.confirm(translate("toasts.confirm-delete-multiple-series", { count: seriesIds.length })))) {
        if (callback) {
          callback(false);
        }
        return;
      }
      this.seriesService.deleteMultipleSeries(seriesIds.map((s) => s.id)).pipe(take(1)).subscribe((res) => {
        if (res) {
          this.toastr.success(translate("toasts.series-deleted"));
        } else {
          this.toastr.error(translate("errors.generic"));
        }
        if (callback) {
          callback(res);
        }
      });
    });
  }
  deleteSeries(series, callback) {
    return __async(this, null, function* () {
      if (!(yield this.confirmService.confirm(translate("toasts.confirm-delete-series")))) {
        if (callback) {
          callback(false);
        }
        return;
      }
      this.seriesService.delete(series.id).subscribe((res) => {
        if (callback) {
          if (res) {
            this.toastr.success(translate("toasts.series-deleted"));
          } else {
            this.toastr.error(translate("errors.generic"));
          }
          callback(res);
        }
      });
    });
  }
  deleteChapter(chapterId, callback) {
    return __async(this, null, function* () {
      if (!(yield this.confirmService.confirm(translate("toasts.confirm-delete-chapter")))) {
        if (callback) {
          callback(false);
        }
        return;
      }
      this.chapterService.deleteChapter(chapterId).subscribe((res) => {
        if (callback) {
          if (res) {
            this.toastr.success(translate("toasts.chapter-deleted"));
          } else {
            this.toastr.error(translate("errors.generic"));
          }
          callback(res);
        }
      });
    });
  }
  deleteVolume(volumeId, callback) {
    return __async(this, null, function* () {
      if (!(yield this.confirmService.confirm(translate("toasts.confirm-delete-volume")))) {
        if (callback) {
          callback(false);
        }
        return;
      }
      this.volumeService.deleteVolume(volumeId).subscribe((res) => {
        if (callback) {
          if (res) {
            this.toastr.success(translate("toasts.volume-deleted"));
          } else {
            this.toastr.error(translate("errors.generic"));
          }
          callback(res);
        }
      });
    });
  }
  sendToDevice(chapterIds, device, callback) {
    this.deviceService.sendTo(chapterIds, device.id).subscribe(() => {
      this.toastr.success(translate("toasts.file-send-to", { name: device.name }));
      if (callback) {
        callback();
      }
    });
  }
  sendSeriesToDevice(seriesId, device, callback) {
    this.deviceService.sendSeriesTo(seriesId, device.id).subscribe(() => {
      this.toastr.success(translate("toasts.file-send-to", { name: device.name }));
      if (callback) {
        callback();
      }
    });
  }
  matchSeries(series, callback) {
    const ref = this.modalService.open(MatchSeriesModalComponent, { size: "lg" });
    ref.componentInstance.series = series;
    ref.closed.subscribe((saved) => {
      if (callback) {
        callback(saved);
      }
    });
  }
  deleteFilter(filterId, callback) {
    return __async(this, null, function* () {
      if (!(yield this.confirmService.confirm(translate("toasts.confirm-delete-smart-filter")))) {
        if (callback) {
          callback(false);
        }
        return;
      }
      this.filterService.deleteFilter(filterId).subscribe((_) => {
        this.toastr.success(translate("toasts.smart-filter-deleted"));
        if (callback) {
          callback(true);
        }
      });
    });
  }
  static {
    this.\u0275fac = function ActionService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ActionService)();
    };
  }
  static {
    this.\u0275prov = \u0275\u0275defineInjectable({ token: _ActionService, factory: _ActionService.\u0275fac, providedIn: "root" });
  }
};

// src/app/sidenav/_modals/library-settings-modal/library-settings-modal.component.ts
var _forTrack03 = ($index, $item) => $item.value;
var _forTrack1 = ($index, $item) => $item.action;
var _c07 = (a0) => ({ name: a0 });
function LibrarySettingsModalComponent_ng_container_0_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "sentenceCase");
  }
  if (rf & 2) {
    const t_r2 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275textInterpolate1(" ", t_r2("edit-title", \u0275\u0275pureFunction1(3, _c07, \u0275\u0275pipeBind1(1, 1, ctx_r2.library.name))), " ");
  }
}
function LibrarySettingsModalComponent_ng_container_0_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const t_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275textInterpolate1(" ", t_r2("add-title"), " ");
  }
}
function LibrarySettingsModalComponent_ng_container_0_ng_template_13_Conditional_3_Conditional_1_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r2 = \u0275\u0275nextContext(4).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(t_r2("required-field"));
  }
}
function LibrarySettingsModalComponent_ng_container_0_ng_template_13_Conditional_3_Conditional_1_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r2 = \u0275\u0275nextContext(4).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(t_r2("library-name-unique"));
  }
}
function LibrarySettingsModalComponent_ng_container_0_ng_template_13_Conditional_3_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 32);
    \u0275\u0275template(1, LibrarySettingsModalComponent_ng_container_0_ng_template_13_Conditional_3_Conditional_1_Conditional_1_Template, 2, 1, "div")(2, LibrarySettingsModalComponent_ng_container_0_ng_template_13_Conditional_3_Conditional_1_Conditional_2_Template, 2, 1, "div");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const formControl_r4 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional((formControl_r4.errors == null ? null : formControl_r4.errors.required) ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional((formControl_r4.errors == null ? null : formControl_r4.errors.duplicateName) ? 2 : -1);
  }
}
function LibrarySettingsModalComponent_ng_container_0_ng_template_13_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "input", 31);
    \u0275\u0275template(1, LibrarySettingsModalComponent_ng_container_0_ng_template_13_Conditional_3_Conditional_1_Template, 3, 2, "div", 32);
  }
  if (rf & 2) {
    const formControl_r4 = ctx;
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("is-invalid", formControl_r4.invalid && !formControl_r4.untouched);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.libraryForm.dirty || !ctx_r2.libraryForm.untouched ? 1 : -1);
  }
}
function LibrarySettingsModalComponent_ng_container_0_ng_template_13_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 25);
    \u0275\u0275text(1);
    \u0275\u0275element(2, "i", 33);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275nextContext();
    const kavitaplusEligibleTooltip_r5 = \u0275\u0275reference(12);
    const t_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", t_r2("kavitaplus-eligible-label"), " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngbTooltip", kavitaplusEligibleTooltip_r5);
  }
}
function LibrarySettingsModalComponent_ng_container_0_ng_template_13_ng_template_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const t_r2 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275textInterpolate(t_r2("type-tooltip"));
  }
}
function LibrarySettingsModalComponent_ng_container_0_ng_template_13_ng_template_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const t_r2 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275textInterpolate(t_r2("kavitaplus-eligible-tooltip"));
  }
}
function LibrarySettingsModalComponent_ng_container_0_ng_template_13_For_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 29);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const opt_r6 = ctx.$implicit;
    \u0275\u0275property("value", opt_r6.value);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(opt_r6.title);
  }
}
function LibrarySettingsModalComponent_ng_container_0_ng_template_13_div_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275text(1);
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "date");
    \u0275\u0275pipe(5, "defaultDate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const t_r2 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", t_r2("last-scanned-label"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 5, \u0275\u0275pipeBind2(4, 2, ctx_r2.library == null ? null : ctx_r2.library.lastScanned, "short")));
  }
}
function LibrarySettingsModalComponent_ng_container_0_ng_template_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 21)(1, "label", 22);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, LibrarySettingsModalComponent_ng_container_0_ng_template_13_Conditional_3_Template, 2, 3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 21)(5, "label", 23);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275element(7, "i", 24);
    \u0275\u0275template(8, LibrarySettingsModalComponent_ng_container_0_ng_template_13_Conditional_8_Template, 3, 2, "span", 25)(9, LibrarySettingsModalComponent_ng_container_0_ng_template_13_ng_template_9_Template, 1, 1, "ng-template", null, 1, \u0275\u0275templateRefExtractor)(11, LibrarySettingsModalComponent_ng_container_0_ng_template_13_ng_template_11_Template, 1, 1, "ng-template", null, 2, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementStart(13, "span", 26);
    \u0275\u0275elementContainer(14, 27);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "select", 28);
    \u0275\u0275repeaterCreate(16, LibrarySettingsModalComponent_ng_container_0_ng_template_13_For_17_Template, 2, 2, "option", 29, _forTrack03);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(18, LibrarySettingsModalComponent_ng_container_0_ng_template_13_div_18_Template, 6, 7, "div", 30);
  }
  if (rf & 2) {
    let tmp_7_0;
    const typeTooltip_r7 = \u0275\u0275reference(10);
    const t_r2 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r2("name-label"));
    \u0275\u0275advance();
    \u0275\u0275conditional((tmp_7_0 = ctx_r2.libraryForm.get("name")) ? 3 : -1, tmp_7_0);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(t_r2("type-label"));
    \u0275\u0275advance();
    \u0275\u0275property("ngbTooltip", typeTooltip_r7);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.IsKavitaPlusEligible ? 8 : -1);
    \u0275\u0275advance(6);
    \u0275\u0275property("ngTemplateOutlet", typeTooltip_r7);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r2.libraryTypes);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", !ctx_r2.isAddLibrary);
  }
}
function LibrarySettingsModalComponent_ng_container_0_ng_template_17_For_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li", 35);
    \u0275\u0275text(1);
    \u0275\u0275elementStart(2, "button", 40);
    \u0275\u0275listener("click", function LibrarySettingsModalComponent_ng_container_0_ng_template_17_For_4_Template_button_click_2_listener() {
      const folder_r10 = \u0275\u0275restoreView(_r9).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.removeFolder(folder_r10));
    });
    \u0275\u0275element(3, "i", 41);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const folder_r10 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", folder_r10, " ");
  }
}
function LibrarySettingsModalComponent_ng_container_0_ng_template_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "ul", 34);
    \u0275\u0275repeaterCreate(3, LibrarySettingsModalComponent_ng_container_0_ng_template_17_For_4_Template, 4, 1, "li", 35, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 36)(6, "button", 37);
    \u0275\u0275listener("click", function LibrarySettingsModalComponent_ng_container_0_ng_template_17_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.openDirectoryPicker());
    });
    \u0275\u0275element(7, "i", 38);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 36)(10, "p");
    \u0275\u0275text(11);
    \u0275\u0275elementStart(12, "a", 39);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "div", 36)(16, "p");
    \u0275\u0275text(17);
    \u0275\u0275elementStart(18, "a", 39);
    \u0275\u0275text(19);
    \u0275\u0275elementEnd();
    \u0275\u0275text(20);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const t_r2 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(t_r2("folder-description"));
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r2.selectedFolders);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", t_r2("browse"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(t_r2("help-us-part-1"));
    \u0275\u0275advance();
    \u0275\u0275property("href", ctx_r2.WikiLink.ManagingFiles, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(t_r2("help-us-part-2"));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", t_r2("help-us-part-3"), "");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(t_r2("naming-conventions-part-1"));
    \u0275\u0275advance();
    \u0275\u0275property("href", ctx_r2.WikiLink.Scanner, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(t_r2("naming-conventions-part-2"));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", t_r2("naming-conventions-part-3"), "");
  }
}
function LibrarySettingsModalComponent_ng_container_0_ng_template_21_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 42);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r2 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(t_r2("cover-description"));
  }
}
function LibrarySettingsModalComponent_ng_container_0_ng_template_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275template(0, LibrarySettingsModalComponent_ng_container_0_ng_template_21_Conditional_0_Template, 2, 1, "p", 42);
    \u0275\u0275elementStart(1, "p");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "app-cover-image-chooser", 43);
    \u0275\u0275twoWayListener("imageUrlsChange", function LibrarySettingsModalComponent_ng_container_0_ng_template_21_Template_app_cover_image_chooser_imageUrlsChange_3_listener($event) {
      \u0275\u0275restoreView(_r11);
      const ctx_r2 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r2.imageUrls, $event) || (ctx_r2.imageUrls = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("imageSelected", function LibrarySettingsModalComponent_ng_container_0_ng_template_21_Template_app_cover_image_chooser_imageSelected_3_listener($event) {
      \u0275\u0275restoreView(_r11);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.updateCoverImageIndex($event));
    })("selectedBase64Url", function LibrarySettingsModalComponent_ng_container_0_ng_template_21_Template_app_cover_image_chooser_selectedBase64Url_3_listener($event) {
      \u0275\u0275restoreView(_r11);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.applyCoverImage($event));
    })("resetClicked", function LibrarySettingsModalComponent_ng_container_0_ng_template_21_Template_app_cover_image_chooser_resetClicked_3_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.resetCoverImage());
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r2 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275conditional(ctx_r2.isAddLibrary ? 0 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r2("cover-description-extra"));
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("imageUrls", ctx_r2.imageUrls);
    \u0275\u0275property("showReset", (ctx_r2.library == null ? null : ctx_r2.library.coverImage) !== null);
  }
}
function LibrarySettingsModalComponent_ng_container_0_ng_template_25_ng_template_2_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 50);
    \u0275\u0275element(1, "input", 51);
    \u0275\u0275elementStart(2, "label", 52);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "fileTypeGroup");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const group_r12 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("formControlName", group_r12)("id", group_r12);
    \u0275\u0275advance();
    \u0275\u0275property("for", group_r12);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 4, group_r12));
  }
}
function LibrarySettingsModalComponent_ng_container_0_ng_template_25_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 49);
    \u0275\u0275repeaterCreate(1, LibrarySettingsModalComponent_ng_container_0_ng_template_25_ng_template_2_For_2_Template, 5, 6, "div", 50, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r2.fileTypeGroups);
  }
}
function LibrarySettingsModalComponent_ng_container_0_ng_template_25_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 53);
    \u0275\u0275element(1, "input", 54);
    \u0275\u0275elementEnd();
  }
}
function LibrarySettingsModalComponent_ng_container_0_ng_template_25_ng_template_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 53);
    \u0275\u0275element(1, "input", 55);
    \u0275\u0275elementEnd();
  }
}
function LibrarySettingsModalComponent_ng_container_0_ng_template_25_ng_template_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 53);
    \u0275\u0275element(1, "input", 56);
    \u0275\u0275elementEnd();
  }
}
function LibrarySettingsModalComponent_ng_container_0_ng_template_25_ng_template_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 53);
    \u0275\u0275element(1, "input", 57);
    \u0275\u0275elementEnd();
  }
}
function LibrarySettingsModalComponent_ng_container_0_ng_template_25_ng_template_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 53);
    \u0275\u0275element(1, "input", 58);
    \u0275\u0275elementEnd();
  }
}
function LibrarySettingsModalComponent_ng_container_0_ng_template_25_ng_template_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 53);
    \u0275\u0275element(1, "input", 59);
    \u0275\u0275elementEnd();
  }
}
function LibrarySettingsModalComponent_ng_container_0_ng_template_25_ng_template_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 53);
    \u0275\u0275element(1, "input", 60);
    \u0275\u0275elementEnd();
  }
}
function LibrarySettingsModalComponent_ng_container_0_ng_template_25_ng_template_35_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-edit-list", 61);
    \u0275\u0275listener("updateItems", function LibrarySettingsModalComponent_ng_container_0_ng_template_25_ng_template_35_Template_app_edit_list_updateItems_0_listener($event) {
      \u0275\u0275restoreView(_r13);
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.updateGlobs($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r2 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("items", ctx_r2.excludePatterns)("label", t_r2("exclude-patterns-label"));
  }
}
function LibrarySettingsModalComponent_ng_container_0_ng_template_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 44)(1, "app-setting-item", 45);
    \u0275\u0275template(2, LibrarySettingsModalComponent_ng_container_0_ng_template_25_ng_template_2_Template, 3, 0, "ng-template", null, 3, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 44)(5, "app-setting-switch", 46);
    \u0275\u0275template(6, LibrarySettingsModalComponent_ng_container_0_ng_template_25_ng_template_6_Template, 2, 0, "ng-template", null, 4, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 44)(9, "app-setting-switch", 46);
    \u0275\u0275template(10, LibrarySettingsModalComponent_ng_container_0_ng_template_25_ng_template_10_Template, 2, 0, "ng-template", null, 4, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div", 44)(13, "app-setting-switch", 46);
    \u0275\u0275template(14, LibrarySettingsModalComponent_ng_container_0_ng_template_25_ng_template_14_Template, 2, 0, "ng-template", null, 4, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "div", 44)(17, "app-setting-switch", 46);
    \u0275\u0275template(18, LibrarySettingsModalComponent_ng_container_0_ng_template_25_ng_template_18_Template, 2, 0, "ng-template", null, 4, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "div", 44)(21, "app-setting-switch", 46);
    \u0275\u0275template(22, LibrarySettingsModalComponent_ng_container_0_ng_template_25_ng_template_22_Template, 2, 0, "ng-template", null, 4, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(24, "div", 44)(25, "app-setting-switch", 46);
    \u0275\u0275template(26, LibrarySettingsModalComponent_ng_container_0_ng_template_25_ng_template_26_Template, 2, 0, "ng-template", null, 4, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(28, "div", 44)(29, "app-setting-switch", 46);
    \u0275\u0275template(30, LibrarySettingsModalComponent_ng_container_0_ng_template_25_ng_template_30_Template, 2, 0, "ng-template", null, 4, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd()();
    \u0275\u0275element(32, "div", 47);
    \u0275\u0275elementStart(33, "div", 48)(34, "app-setting-item", 45);
    \u0275\u0275template(35, LibrarySettingsModalComponent_ng_container_0_ng_template_25_ng_template_35_Template, 1, 2, "ng-template", null, 3, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const t_r2 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("title", t_r2("file-type-group-label"))("showEdit", false)("canEdit", false)("subtitle", t_r2("file-type-group-tooltip"))("toggleOnViewClick", false);
    \u0275\u0275advance(4);
    \u0275\u0275property("title", t_r2("manage-collection-label"))("subtitle", t_r2("manage-collection-tooltip"));
    \u0275\u0275advance(4);
    \u0275\u0275property("title", t_r2("manage-reading-list-label"))("subtitle", t_r2("manage-reading-list-tooltip"));
    \u0275\u0275advance(4);
    \u0275\u0275property("title", t_r2("allow-scrobbling-label"))("subtitle", t_r2("allow-scrobbling-tooltip"));
    \u0275\u0275advance(4);
    \u0275\u0275property("title", t_r2("allow-metadata-matching-label"))("subtitle", t_r2("allow-metadata-matching-tooltip"));
    \u0275\u0275advance(4);
    \u0275\u0275property("title", t_r2("folder-watching-label"))("subtitle", t_r2("folder-watching-tooltip"));
    \u0275\u0275advance(4);
    \u0275\u0275property("title", t_r2("include-in-dashboard-label"))("subtitle", t_r2("include-in-dashboard-tooltip"));
    \u0275\u0275advance(4);
    \u0275\u0275property("title", t_r2("include-in-search-label"))("subtitle", t_r2("include-in-search-tooltip"));
    \u0275\u0275advance(5);
    \u0275\u0275property("title", t_r2("exclude-patterns-label"))("showEdit", false)("canEdit", false)("subtitle", ctx_r2.excludePatternTooltip)("toggleOnViewClick", false);
  }
}
function LibrarySettingsModalComponent_ng_container_0_Conditional_26_ng_template_3_For_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 62)(1, "app-setting-button", 63)(2, "button", 64);
    \u0275\u0275listener("click", function LibrarySettingsModalComponent_ng_container_0_Conditional_26_ng_template_3_For_1_Template_button_click_2_listener() {
      const task_r15 = \u0275\u0275restoreView(_r14).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r2.runTask(task_r15));
    });
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const task_r15 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275property("subtitle", task_r15.description);
    \u0275\u0275advance();
    \u0275\u0275classMapInterpolate1("btn btn-", task_r15.action === ctx_r2.Action.Delete ? "danger" : "secondary", " btn-sm mb-2");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(task_r15.title);
  }
}
function LibrarySettingsModalComponent_ng_container_0_Conditional_26_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, LibrarySettingsModalComponent_ng_container_0_Conditional_26_ng_template_3_For_1_Template, 4, 5, "div", 62, _forTrack1);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275repeater(ctx_r2.tasks);
  }
}
function LibrarySettingsModalComponent_ng_container_0_Conditional_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 11)(1, "a", 12);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, LibrarySettingsModalComponent_ng_container_0_Conditional_26_ng_template_3_Template, 2, 0, "ng-template", 13);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r2 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("ngbNavItem", ctx_r2.TabID.Tasks);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r2(ctx_r2.TabID.Tasks));
  }
}
function LibrarySettingsModalComponent_ng_container_0_Conditional_35_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 65);
    \u0275\u0275listener("click", function LibrarySettingsModalComponent_ng_container_0_Conditional_35_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r16);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.nextStep());
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r2 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("disabled", ctx_r2.isNextDisabled() || ctx_r2.libraryForm.invalid);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(t_r2("next"));
  }
}
function LibrarySettingsModalComponent_ng_container_0_Conditional_36_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 65);
    \u0275\u0275listener("click", function LibrarySettingsModalComponent_ng_container_0_Conditional_36_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r17);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.save());
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r2 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("disabled", ctx_r2.isDisabled());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(t_r2("save"));
  }
}
function LibrarySettingsModalComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 6)(2, "h4", 7);
    \u0275\u0275template(3, LibrarySettingsModalComponent_ng_container_0_Conditional_3_Template, 2, 5)(4, LibrarySettingsModalComponent_ng_container_0_Conditional_4_Template, 1, 1);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 8);
    \u0275\u0275listener("click", function LibrarySettingsModalComponent_ng_container_0_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.close());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "form", 9)(7, "div")(8, "ul", 10, 0);
    \u0275\u0275twoWayListener("activeIdChange", function LibrarySettingsModalComponent_ng_container_0_Template_ul_activeIdChange_8_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.active, $event) || (ctx_r2.active = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(10, "li", 11)(11, "a", 12);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275template(13, LibrarySettingsModalComponent_ng_container_0_ng_template_13_Template, 19, 7, "ng-template", 13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "li", 14)(15, "a", 12);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd();
    \u0275\u0275template(17, LibrarySettingsModalComponent_ng_container_0_ng_template_17_Template, 21, 10, "ng-template", 13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "li", 14)(19, "a", 12);
    \u0275\u0275text(20);
    \u0275\u0275elementEnd();
    \u0275\u0275template(21, LibrarySettingsModalComponent_ng_container_0_ng_template_21_Template, 4, 4, "ng-template", 13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "li", 14)(23, "a", 12);
    \u0275\u0275text(24);
    \u0275\u0275elementEnd();
    \u0275\u0275template(25, LibrarySettingsModalComponent_ng_container_0_ng_template_25_Template, 37, 24, "ng-template", 13);
    \u0275\u0275elementEnd();
    \u0275\u0275template(26, LibrarySettingsModalComponent_ng_container_0_Conditional_26_Template, 4, 2, "li", 11);
    \u0275\u0275elementEnd();
    \u0275\u0275element(27, "div", 15);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(28, "div", 16)(29, "button", 17);
    \u0275\u0275listener("click", function LibrarySettingsModalComponent_ng_container_0_Template_button_click_29_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.forceScan());
    });
    \u0275\u0275text(30);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "button", 18);
    \u0275\u0275listener("click", function LibrarySettingsModalComponent_ng_container_0_Template_button_click_31_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.reset());
    });
    \u0275\u0275text(32);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "button", 19);
    \u0275\u0275listener("click", function LibrarySettingsModalComponent_ng_container_0_Template_button_click_33_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.close());
    });
    \u0275\u0275text(34);
    \u0275\u0275elementEnd();
    \u0275\u0275template(35, LibrarySettingsModalComponent_ng_container_0_Conditional_35_Template, 2, 2, "button", 20)(36, LibrarySettingsModalComponent_ng_container_0_Conditional_36_Template, 2, 2, "button", 20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const t_r2 = ctx.$implicit;
    const nav_r18 = \u0275\u0275reference(9);
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275conditional(!ctx_r2.isAddLibrary ? 3 : 4);
    \u0275\u0275advance(2);
    \u0275\u0275attribute("aria-label", t_r2("close"));
    \u0275\u0275advance();
    \u0275\u0275property("formGroup", ctx_r2.libraryForm);
    \u0275\u0275advance();
    \u0275\u0275classMapInterpolate1("modal-body scrollable-modal ", ctx_r2.utilityService.getActiveBreakpoint() === ctx_r2.Breakpoint.Mobile ? "" : "d-flex", "");
    \u0275\u0275advance();
    \u0275\u0275propertyInterpolate("orientation", ctx_r2.utilityService.getActiveBreakpoint() === ctx_r2.Breakpoint.Mobile ? "horizontal" : "vertical");
    \u0275\u0275twoWayProperty("activeId", ctx_r2.active);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngbNavItem", ctx_r2.TabID.General);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r2(ctx_r2.TabID.General));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngbNavItem", ctx_r2.TabID.Folder)("disabled", ctx_r2.isAddLibrary && ctx_r2.setupStep < 1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r2(ctx_r2.TabID.Folder));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngbNavItem", ctx_r2.TabID.Cover)("disabled", ctx_r2.isAddLibrary && ctx_r2.setupStep < 2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r2(ctx_r2.TabID.Cover));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngbNavItem", ctx_r2.TabID.Advanced)("disabled", ctx_r2.isAddLibrary && ctx_r2.setupStep < 3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r2(ctx_r2.TabID.Advanced));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(!ctx_r2.isAddLibrary ? 26 : -1);
    \u0275\u0275advance();
    \u0275\u0275classMapInterpolate1("tab-content ", ctx_r2.utilityService.getActiveBreakpoint() === ctx_r2.Breakpoint.Mobile ? "mt-3" : "ms-4 flex-fill", "");
    \u0275\u0275property("ngbNavOutlet", nav_r18);
    \u0275\u0275advance(2);
    \u0275\u0275property("placement", "above")("ngbTooltip", t_r2("force-scan-tooltip"));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(t_r2("force-scan"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r2("reset"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r2("cancel"));
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.isAddLibrary && ctx_r2.setupStep !== 3 ? 35 : 36);
  }
}
var TabID2;
(function(TabID3) {
  TabID3["General"] = "general-tab";
  TabID3["Folder"] = "folder-tab";
  TabID3["Cover"] = "cover-tab";
  TabID3["Advanced"] = "advanced-tab";
  TabID3["Tasks"] = "tasks-tab";
})(TabID2 || (TabID2 = {}));
var StepID;
(function(StepID2) {
  StepID2[StepID2["General"] = 0] = "General";
  StepID2[StepID2["Folder"] = 1] = "Folder";
  StepID2[StepID2["Cover"] = 2] = "Cover";
  StepID2[StepID2["Advanced"] = 3] = "Advanced";
})(StepID || (StepID = {}));
var LibrarySettingsModalComponent = class _LibrarySettingsModalComponent {
  constructor() {
    this.utilityService = inject(UtilityService);
    this.modal = inject(NgbActiveModal);
    this.destroyRef = inject(DestroyRef);
    this.uploadService = inject(UploadService);
    this.modalService = inject(NgbModal);
    this.settingService = inject(SettingsService);
    this.confirmService = inject(ConfirmService);
    this.libraryService = inject(LibraryService);
    this.toastr = inject(ToastrService);
    this.cdRef = inject(ChangeDetectorRef);
    this.imageService = inject(ImageService);
    this.actionFactoryService = inject(ActionFactoryService);
    this.actionService = inject(ActionService);
    this.LibraryType = LibraryType;
    this.Breakpoint = Breakpoint;
    this.TabID = TabID2;
    this.WikiLink = WikiLink;
    this.Action = Action;
    this.libraryTypePipe = new LibraryTypePipe();
    this.active = TabID2.General;
    this.imageUrls = [];
    this.excludePatternTooltip = `<span>` + translate("library-settings-modal.exclude-patterns-tooltip") + `<a class="ms-1" href="${WikiLink.ScannerExclude}" rel="noopener noreferrer" target="_blank">${translate("library-settings-modal.help")}<i class="fa fa-external-link-alt ms-1" aria-hidden="true"></i></a>`;
    this.libraryForm = new FormGroup({
      name: new FormControl("", { nonNullable: true, validators: [Validators.required] }),
      type: new FormControl(LibraryType.Manga, { nonNullable: true, validators: [Validators.required] }),
      folderWatching: new FormControl(true, { nonNullable: true, validators: [Validators.required] }),
      includeInDashboard: new FormControl(true, { nonNullable: true, validators: [Validators.required] }),
      includeInRecommended: new FormControl(true, { nonNullable: true, validators: [Validators.required] }),
      includeInSearch: new FormControl(true, { nonNullable: true, validators: [Validators.required] }),
      manageCollections: new FormControl(true, { nonNullable: true, validators: [Validators.required] }),
      manageReadingLists: new FormControl(true, { nonNullable: true, validators: [Validators.required] }),
      allowScrobbling: new FormControl(true, { nonNullable: true, validators: [Validators.required] }),
      allowMetadataMatching: new FormControl(true, { nonNullable: true, validators: [Validators.required] }),
      collapseSeriesRelationships: new FormControl(false, { nonNullable: true, validators: [Validators.required] })
    });
    this.selectedFolders = [];
    this.madeChanges = false;
    this.libraryTypes = allLibraryTypes.map((f) => {
      return { title: this.libraryTypePipe.transform(f), value: f };
    }).sort((a, b) => a.title.localeCompare(b.title));
    this.isAddLibrary = false;
    this.setupStep = StepID.General;
    this.fileTypeGroups = allFileTypeGroup;
    this.excludePatterns = [""];
    this.tasks = this.getTasks();
  }
  get IsKavitaPlusEligible() {
    const libType = parseInt(this.libraryForm.get("type")?.value + "", 10);
    return libType === LibraryType.Manga || libType === LibraryType.LightNovel;
  }
  ngOnInit() {
    if (this.library === void 0) {
      this.isAddLibrary = true;
      this.cdRef.markForCheck();
    }
    if (this.library?.coverImage != null && this.library?.coverImage !== "") {
      this.imageUrls.push(this.imageService.getLibraryCoverImage(this.library.id));
      this.cdRef.markForCheck();
    }
    if (this.library && !(this.library.type === LibraryType.Manga || this.library.type === LibraryType.LightNovel)) {
      this.libraryForm.get("allowScrobbling")?.setValue(false);
      this.libraryForm.get("allowMetadataMatching")?.setValue(false);
      this.libraryForm.get("allowScrobbling")?.disable();
      this.libraryForm.get("allowMetadataMatching")?.disable();
    }
    this.libraryForm.get("name")?.valueChanges.pipe(debounceTime(100), distinctUntilChanged(), switchMap((name) => this.libraryService.libraryNameExists(name)), tap((exists) => {
      const isExistingName = this.libraryForm.get("name")?.value === this.library?.name;
      if (!exists || isExistingName) {
        this.libraryForm.get("name")?.setErrors(null);
      } else {
        this.libraryForm.get("name")?.setErrors({ duplicateName: true });
      }
      this.cdRef.markForCheck();
    }), takeUntilDestroyed(this.destroyRef)).subscribe();
    this.setValues();
    this.libraryForm.get("type")?.valueChanges.pipe(tap((type) => {
      const libType = parseInt(type + "", 10);
      switch (libType) {
        case LibraryType.Manga:
          this.libraryForm.get(FileTypeGroup.Archive + "")?.setValue(true);
          this.libraryForm.get(FileTypeGroup.Images + "")?.setValue(true);
          this.libraryForm.get(FileTypeGroup.Pdf + "")?.setValue(false);
          this.libraryForm.get(FileTypeGroup.Epub + "")?.setValue(false);
          break;
        case LibraryType.Comic:
        case LibraryType.ComicVine:
          this.libraryForm.get(FileTypeGroup.Archive + "")?.setValue(true);
          this.libraryForm.get(FileTypeGroup.Images + "")?.setValue(false);
          this.libraryForm.get(FileTypeGroup.Pdf + "")?.setValue(false);
          this.libraryForm.get(FileTypeGroup.Epub + "")?.setValue(false);
          break;
        case LibraryType.Book:
          this.libraryForm.get(FileTypeGroup.Archive + "")?.setValue(false);
          this.libraryForm.get(FileTypeGroup.Images + "")?.setValue(false);
          this.libraryForm.get(FileTypeGroup.Pdf + "")?.setValue(true);
          this.libraryForm.get(FileTypeGroup.Epub + "")?.setValue(true);
          break;
        case LibraryType.LightNovel:
          this.libraryForm.get(FileTypeGroup.Archive + "")?.setValue(false);
          this.libraryForm.get(FileTypeGroup.Images + "")?.setValue(false);
          this.libraryForm.get(FileTypeGroup.Pdf + "")?.setValue(false);
          this.libraryForm.get(FileTypeGroup.Epub + "")?.setValue(true);
          break;
        case LibraryType.Images:
          this.libraryForm.get(FileTypeGroup.Archive + "")?.setValue(false);
          this.libraryForm.get(FileTypeGroup.Images + "")?.setValue(true);
          this.libraryForm.get(FileTypeGroup.Pdf + "")?.setValue(false);
          this.libraryForm.get(FileTypeGroup.Epub + "")?.setValue(false);
          break;
      }
      this.libraryForm.get("allowScrobbling")?.setValue(this.IsKavitaPlusEligible);
      this.libraryForm.get("allowMetadataMatching")?.setValue(this.IsKavitaPlusEligible);
      if (!this.IsKavitaPlusEligible) {
        this.libraryForm.get("allowScrobbling")?.disable();
        this.libraryForm.get("allowMetadataMatching")?.disable();
      } else {
        this.libraryForm.get("allowScrobbling")?.enable();
        this.libraryForm.get("allowMetadataMatching")?.enable();
      }
      this.cdRef.markForCheck();
    }), takeUntilDestroyed(this.destroyRef)).subscribe();
  }
  setValues() {
    if (this.library !== void 0) {
      this.libraryForm.get("name")?.setValue(this.library.name);
      this.libraryForm.get("type")?.setValue(this.library.type);
      this.libraryForm.get("folderWatching")?.setValue(this.library.folderWatching);
      this.libraryForm.get("includeInDashboard")?.setValue(this.library.includeInDashboard);
      this.libraryForm.get("includeInRecommended")?.setValue(this.library.includeInRecommended);
      this.libraryForm.get("includeInSearch")?.setValue(this.library.includeInSearch);
      this.libraryForm.get("manageCollections")?.setValue(this.library.manageCollections);
      this.libraryForm.get("manageReadingLists")?.setValue(this.library.manageReadingLists);
      this.libraryForm.get("collapseSeriesRelationships")?.setValue(this.library.collapseSeriesRelationships);
      this.libraryForm.get("allowScrobbling")?.setValue(this.IsKavitaPlusEligible ? this.library.allowScrobbling : false);
      this.libraryForm.get("allowMetadataMatching")?.setValue(this.IsKavitaPlusEligible ? this.library.allowMetadataMatching : false);
      this.selectedFolders = this.library.folders;
      this.madeChanges = false;
      for (let fileTypeGroup of allFileTypeGroup) {
        this.libraryForm.addControl(fileTypeGroup + "", new FormControl(this.library.libraryFileTypes.includes(fileTypeGroup), []));
      }
      for (let glob of this.library.excludePatterns) {
        this.libraryForm.addControl("excludeGlob-", new FormControl(glob, []));
      }
      this.excludePatterns = this.library.excludePatterns;
    } else {
      for (let fileTypeGroup of allFileTypeGroup) {
        this.libraryForm.addControl(fileTypeGroup + "", new FormControl(true, []));
      }
    }
    if (this.excludePatterns.length === 0) {
      this.excludePatterns = [""];
    }
    this.cdRef.markForCheck();
  }
  updateGlobs(items) {
    this.excludePatterns = items;
    this.cdRef.markForCheck();
  }
  isDisabled() {
    return !(this.libraryForm.valid && this.selectedFolders.length > 0);
  }
  reset() {
    this.setValues();
  }
  close(returnVal = false) {
    this.modal.close(returnVal);
  }
  forceScan() {
    this.libraryService.scan(this.library.id, true).subscribe(() => {
      this.toastr.info(translate("toasts.forced-scan-queued", { name: this.library.name }));
      this.close();
    });
  }
  save() {
    return __async(this, null, function* () {
      const model = this.libraryForm.value;
      model.folders = this.selectedFolders;
      model.fileGroupTypes = [];
      for (let fileTypeGroup of allFileTypeGroup) {
        if (model[fileTypeGroup]) {
          model.fileGroupTypes.push(fileTypeGroup);
        }
      }
      model.excludePatterns = this.excludePatterns;
      if (this.libraryForm.errors) {
        return;
      }
      if (this.library !== void 0) {
        model.id = this.library.id;
        model.folders = model.folders.map((item) => item.startsWith("\\") ? item.substr(1, item.length) : item);
        model.type = parseInt(model.type, 10);
        if (model.type !== this.library.type) {
          if (!(yield this.confirmService.confirm(translate("toasts.confirm-library-type-change"))))
            return;
        }
        this.libraryService.update(model).subscribe(() => {
          this.close(true);
        });
      } else {
        model.folders = model.folders.map((item) => item.startsWith("\\") ? item.substr(1, item.length) : item);
        model.type = parseInt(model.type, 10);
        this.libraryService.create(model).subscribe(() => {
          this.toastr.success(translate("toasts.library-created"));
          this.close(true);
        });
      }
    });
  }
  nextStep() {
    this.setupStep++;
    switch (this.setupStep) {
      case StepID.Folder:
        this.active = TabID2.Folder;
        break;
      case StepID.Cover:
        this.active = TabID2.Cover;
        break;
      case StepID.Advanced:
        this.active = TabID2.Advanced;
        break;
    }
    this.cdRef.markForCheck();
  }
  applyCoverImage(coverUrl) {
    this.uploadService.updateLibraryCoverImage(this.library.id, coverUrl).subscribe(() => {
    });
  }
  updateCoverImageIndex(selectedIndex) {
    if (selectedIndex <= 0)
      return;
    this.applyCoverImage(this.imageUrls[selectedIndex]);
  }
  resetCoverImage() {
    this.uploadService.updateLibraryCoverImage(this.library.id, "", false).subscribe(() => {
    });
  }
  openDirectoryPicker() {
    const modalRef = this.modalService.open(DirectoryPickerComponent, { scrollable: true, size: "lg" });
    modalRef.closed.subscribe((closeResult) => {
      if (closeResult.success) {
        if (!this.selectedFolders.includes(closeResult.folderPath)) {
          this.selectedFolders.push(closeResult.folderPath);
          this.madeChanges = true;
          this.cdRef.markForCheck();
        }
      }
    });
  }
  removeFolder(folder) {
    this.selectedFolders = this.selectedFolders.filter((item) => item !== folder);
    this.madeChanges = true;
    this.cdRef.markForCheck();
  }
  isNextDisabled() {
    switch (this.setupStep) {
      case StepID.General:
        return this.libraryForm.get("name")?.invalid || this.libraryForm.get("type")?.invalid;
      case StepID.Folder:
        return this.selectedFolders.length === 0;
      case StepID.Cover:
        return false;
      case StepID.Advanced:
        return false;
    }
  }
  getTasks() {
    const blackList = [Action.Edit];
    return this.actionFactoryService.getActionablesForSettingsPage(this.actionFactoryService.getLibraryActions(this.runTask.bind(this)), blackList);
  }
  runTask(action) {
    return __async(this, null, function* () {
      switch (action.action) {
        case Action.Scan:
          yield this.actionService.scanLibrary(this.library);
          break;
        case Action.RefreshMetadata:
          yield this.actionService.refreshLibraryMetadata(this.library);
          break;
        case Action.GenerateColorScape:
          yield this.actionService.refreshLibraryMetadata(this.library, void 0, false);
          break;
        case Action.AnalyzeFiles:
          yield this.actionService.analyzeFiles(this.library);
          break;
        case Action.Delete:
          yield this.actionService.deleteLibrary(this.library, () => {
            this.modal.dismiss();
          });
          break;
      }
    });
  }
  static {
    this.\u0275fac = function LibrarySettingsModalComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _LibrarySettingsModalComponent)();
    };
  }
  static {
    this.\u0275cmp = \u0275\u0275defineComponent({ type: _LibrarySettingsModalComponent, selectors: [["app-library-settings-modal"]], inputs: { library: "library" }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 1, vars: 1, consts: [["nav", "ngbNav"], ["typeTooltip", ""], ["kavitaplusEligibleTooltip", ""], ["view", ""], ["switch", ""], [4, "transloco", "translocoRead"], [1, "modal-header"], ["id", "modal-basic-title", 1, "modal-title"], ["type", "button", 1, "btn-close", 3, "click"], [3, "formGroup"], ["ngbNav", "", 1, "nav-pills", 2, "min-width", "135px", 3, "activeIdChange", "activeId", "orientation"], [3, "ngbNavItem"], ["ngbNavLink", ""], ["ngbNavContent", ""], [3, "ngbNavItem", "disabled"], [3, "ngbNavOutlet"], [1, "modal-footer"], ["type", "button", 1, "btn", "btn-light", 3, "click", "placement", "ngbTooltip"], ["type", "button", 1, "btn", "btn-light", 3, "click"], ["type", "button", 1, "btn", "btn-secondary", 3, "click"], ["type", "button", 1, "btn", "btn-primary", 3, "disabled"], [1, "mb-3"], ["for", "library-name", 1, "form-label"], ["for", "library-type", 1, "form-label"], ["placement", "end", "role", "button", "tabindex", "0", 1, "fa", "fa-info-circle", "ms-1", 3, "ngbTooltip"], [1, "float-end"], ["id", "library-type-help", 1, "visually-hidden"], [3, "ngTemplateOutlet"], ["id", "library-type", "formControlName", "type", "aria-describedby", "library-type-help", 1, "form-select"], [3, "value"], [4, "ngIf"], ["id", "library-name", "formControlName", "name", "type", "text", 1, "form-control"], ["id", "inviteForm-validations", 1, "invalid-feedback"], ["placement", "start", "role", "button", "tabindex", "0", 1, "fa", "fa-info-circle", "ms-1", 3, "ngbTooltip"], [1, "list-group", "list-group-flush", 2, "width", "100%"], [1, "list-group-item"], [1, "row", "mt-2"], [1, "btn", "btn-secondary", "float-end", "btn-sm", 3, "click"], ["aria-hidden", "true", 1, "fa", "fa-plus"], ["rel", "noopener noreferrer", "target", "_blank", "referrerpolicy", "no-referrer", 3, "href"], [1, "btn", "float-end", "btn-sm", 3, "click"], ["aria-hidden", "true", 1, "fa", "fa-times-circle"], ["role", "alert", 1, "alert", "alert-warning"], [3, "imageUrlsChange", "imageSelected", "selectedBase64Url", "resetClicked", "imageUrls", "showReset"], [1, "row", "g-0", "mt-4", "mb-4"], [3, "title", "showEdit", "canEdit", "subtitle", "toggleOnViewClick"], [3, "title", "subtitle"], [1, "setting-section-break"], [1, "row", "g-0", "mt-4", "pb-4"], [1, "hstack", "gap-2"], [1, "form-check", "form-switch"], ["type", "checkbox", 1, "form-check-input", 3, "formControlName", "id"], [1, "form-check-label", 3, "for"], [1, "form-check", "form-switch", "float-end"], ["type", "checkbox", "id", "manage-collections", "role", "switch", "formControlName", "manageCollections", 1, "form-check-input"], ["type", "checkbox", "id", "manage-readinglists", "role", "switch", "formControlName", "manageReadingLists", 1, "form-check-input"], ["type", "checkbox", "id", "scrobbling", "role", "switch", "formControlName", "allowScrobbling", 1, "form-check-input"], ["type", "checkbox", "id", "metadata-matching", "role", "switch", "formControlName", "allowMetadataMatching", 1, "form-check-input"], ["type", "checkbox", "id", "lib-folder-watching", "role", "switch", "formControlName", "folderWatching", 1, "form-check-input"], ["type", "checkbox", "id", "include-dashboard", "role", "switch", "formControlName", "includeInDashboard", 1, "form-check-input"], ["type", "checkbox", "id", "include-search", "role", "switch", "formControlName", "includeInSearch", 1, "form-check-input"], [3, "updateItems", "items", "label"], [1, "mt-3", "mb-3"], [3, "subtitle"], [3, "click"], ["type", "button", 1, "btn", "btn-primary", 3, "click", "disabled"]], template: function LibrarySettingsModalComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, LibrarySettingsModalComponent_ng_container_0_Template, 37, 30, "ng-container", 5);
      }
      if (rf & 2) {
        \u0275\u0275property("translocoRead", "library-settings-modal");
      }
    }, dependencies: [
      CommonModule,
      NgIf,
      NgTemplateOutlet,
      DatePipe,
      NgbModalModule,
      NgbNavLink,
      NgbNavItem,
      NgbNavContent,
      ReactiveFormsModule,
      \u0275NgNoValidate,
      NgSelectOption,
      \u0275NgSelectMultipleOption,
      DefaultValueAccessor,
      CheckboxControlValueAccessor,
      SelectControlValueAccessor,
      NgControlStatus,
      NgControlStatusGroup,
      FormGroupDirective,
      FormControlName,
      NgbTooltip,
      SentenceCasePipe,
      NgbNav,
      NgbNavOutlet,
      CoverImageChooserComponent,
      TranslocoModule,
      TranslocoDirective,
      DefaultDatePipe,
      FileTypeGroupPipe,
      EditListComponent,
      SettingItemComponent,
      SettingSwitchComponent,
      SettingButtonComponent
    ], changeDetection: 0 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LibrarySettingsModalComponent, { className: "LibrarySettingsModalComponent", filePath: "src/app/sidenav/_modals/library-settings-modal/library-settings-modal.component.ts", lineNumber: 77 });
})();

export {
  UploadService,
  CoverImageChooserComponent,
  EditListComponent,
  LibraryTypePipe,
  LibrarySettingsModalComponent,
  ChapterService,
  VolumeService,
  ActionService
};
//# sourceMappingURL=chunk-HTPJQXUV.js.map
