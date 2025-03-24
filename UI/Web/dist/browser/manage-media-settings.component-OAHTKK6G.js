import "./chunk-EK5YMOPZ.js";
import {
  pageLayoutModes
} from "./chunk-6PD4CA3T.js";
import {
  PageLayoutMode
} from "./chunk-4C3V74T6.js";
import "./chunk-HLXD4ERA.js";
import "./chunk-FAV3BSNY.js";
import "./chunk-KKWGV4SA.js";
import "./chunk-EENYA2ZI.js";
import {
  DirectoryPickerComponent
} from "./chunk-ECSSQE2U.js";
import "./chunk-JGJJUNHA.js";
import "./chunk-DMXJBIB5.js";
import "./chunk-GX7EGMKV.js";
import "./chunk-NGXWDHM5.js";
import "./chunk-PBM62GK4.js";
import {
  SettingsService
} from "./chunk-65GP3B4U.js";
import "./chunk-2L2JQBKQ.js";
import "./chunk-AZB3LZ7Q.js";
import {
  SettingItemComponent
} from "./chunk-KJWRNOWO.js";
import {
  ConfirmService,
  NgbModal
} from "./chunk-2R2RCU4Y.js";
import {
  ToastrService
} from "./chunk-5J5IKBMT.js";
import "./chunk-PUXELTB2.js";
import "./chunk-FLGYJHAG.js";
import {
  DefaultValueAccessor,
  FormControl,
  FormControlName,
  FormGroup,
  FormGroupDirective,
  NgControlStatus,
  NgControlStatusGroup,
  NgSelectOption,
  ReactiveFormsModule,
  SelectControlValueAccessor,
  Validators,
  ɵNgNoValidate,
  ɵNgSelectMultipleOption
} from "./chunk-BPOUBDX2.js";
import "./chunk-CQADFT7F.js";
import {
  ChangeDetectorRef,
  DestroyRef,
  TranslocoDirective,
  TranslocoService,
  __async,
  debounceTime,
  distinctUntilChanged,
  filter,
  inject,
  switchMap,
  take,
  takeUntilDestroyed,
  tap,
  translate,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵdefinePipe,
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
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-PYHIUVNJ.js";

// src/app/admin/_models/encode-format.ts
var EncodeFormat;
(function(EncodeFormat2) {
  EncodeFormat2[EncodeFormat2["PNG"] = 0] = "PNG";
  EncodeFormat2[EncodeFormat2["WebP"] = 1] = "WebP";
  EncodeFormat2[EncodeFormat2["AVIF"] = 2] = "AVIF";
})(EncodeFormat || (EncodeFormat = {}));
var allEncodeFormats = Object.keys(EncodeFormat).filter((key) => !isNaN(Number(key)) && parseInt(key, 10) >= 0).map((key) => parseInt(key, 10));

// src/app/admin/_models/cover-image-size.ts
var CoverImageSize;
(function(CoverImageSize2) {
  CoverImageSize2[CoverImageSize2["Default"] = 1] = "Default";
  CoverImageSize2[CoverImageSize2["Medium"] = 2] = "Medium";
  CoverImageSize2[CoverImageSize2["Large"] = 3] = "Large";
  CoverImageSize2[CoverImageSize2["XLarge"] = 4] = "XLarge";
})(CoverImageSize || (CoverImageSize = {}));
var allCoverImageSizes = Object.keys(CoverImageSize).filter((key) => !isNaN(Number(key)) && parseInt(key, 10) >= 0).map((key) => parseInt(key, 10));

// src/app/_pipes/page-layout-mode.pipe.ts
var PageLayoutModePipe = class _PageLayoutModePipe {
  transform(value) {
    switch (value) {
      case PageLayoutMode.Cards:
        return translate("preferences.cards");
      case PageLayoutMode.List:
        return translate("preferences.list");
    }
  }
  static {
    this.\u0275fac = function PageLayoutModePipe_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _PageLayoutModePipe)();
    };
  }
  static {
    this.\u0275pipe = \u0275\u0275definePipe({ name: "pageLayoutMode", type: _PageLayoutModePipe, pure: true, standalone: true });
  }
};

// src/app/_pipes/encode-format.pipe.ts
var EncodeFormatPipe = class _EncodeFormatPipe {
  transform(value) {
    switch (value) {
      case EncodeFormat.PNG:
        return "PNG";
      case EncodeFormat.WebP:
        return "WebP";
      case EncodeFormat.AVIF:
        return "AVIF";
    }
  }
  static {
    this.\u0275fac = function EncodeFormatPipe_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _EncodeFormatPipe)();
    };
  }
  static {
    this.\u0275pipe = \u0275\u0275definePipe({ name: "encodeFormat", type: _EncodeFormatPipe, pure: true, standalone: true });
  }
};

// src/app/_pipes/cover-image-size.pipe.ts
var CoverImageSizePipe = class _CoverImageSizePipe {
  transform(value) {
    switch (value) {
      case CoverImageSize.Default:
        return translate("cover-image-size.default");
      case CoverImageSize.Medium:
        return translate("cover-image-size.medium");
      case CoverImageSize.Large:
        return translate("cover-image-size.large");
      case CoverImageSize.XLarge:
        return translate("cover-image-size.xlarge");
    }
  }
  static {
    this.\u0275fac = function CoverImageSizePipe_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CoverImageSizePipe)();
    };
  }
  static {
    this.\u0275pipe = \u0275\u0275definePipe({ name: "coverImageSize", type: _CoverImageSizePipe, pure: true, standalone: true });
  }
};

// src/app/admin/manage-media-settings/manage-media-settings.component.ts
function ManageMediaSettingsComponent_ng_container_0_Conditional_14_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "encodeFormat");
  }
  if (rf & 2) {
    const formControl_r1 = \u0275\u0275nextContext();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(1, 1, formControl_r1.value), " ");
  }
}
function ManageMediaSettingsComponent_ng_container_0_Conditional_14_ng_template_3_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 11);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "encodeFormat");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const opt_r2 = ctx.$implicit;
    \u0275\u0275property("value", opt_r2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 2, opt_r2));
  }
}
function ManageMediaSettingsComponent_ng_container_0_Conditional_14_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "select", 10);
    \u0275\u0275repeaterCreate(1, ManageMediaSettingsComponent_ng_container_0_Conditional_14_ng_template_3_For_2_Template, 3, 4, "option", 11, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r2.allEncodeFormats);
  }
}
function ManageMediaSettingsComponent_ng_container_0_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "app-setting-item", 9);
    \u0275\u0275template(1, ManageMediaSettingsComponent_ng_container_0_Conditional_14_ng_template_1_Template, 2, 3, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(3, ManageMediaSettingsComponent_ng_container_0_Conditional_14_ng_template_3_Template, 3, 0, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("title", t_r4("encode-as-label"))("subtitle", t_r4("encode-as-tooltip"));
  }
}
function ManageMediaSettingsComponent_ng_container_0_Conditional_16_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "coverImageSize");
  }
  if (rf & 2) {
    const formControl_r5 = \u0275\u0275nextContext();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(1, 1, formControl_r5.value), " ");
  }
}
function ManageMediaSettingsComponent_ng_container_0_Conditional_16_ng_template_3_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 11);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "coverImageSize");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const opt_r6 = ctx.$implicit;
    \u0275\u0275property("value", opt_r6);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 2, opt_r6));
  }
}
function ManageMediaSettingsComponent_ng_container_0_Conditional_16_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "select", 12);
    \u0275\u0275repeaterCreate(1, ManageMediaSettingsComponent_ng_container_0_Conditional_16_ng_template_3_For_2_Template, 3, 4, "option", 11, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r2.allCoverImageSizes);
  }
}
function ManageMediaSettingsComponent_ng_container_0_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "app-setting-item", 9);
    \u0275\u0275template(1, ManageMediaSettingsComponent_ng_container_0_Conditional_16_ng_template_1_Template, 2, 3, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(3, ManageMediaSettingsComponent_ng_container_0_Conditional_16_ng_template_3_Template, 3, 0, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("title", t_r4("cover-image-size-label"))("subtitle", t_r4("cover-image-size-tooltip"));
  }
}
function ManageMediaSettingsComponent_ng_container_0_Conditional_18_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const formControl_r7 = \u0275\u0275nextContext();
    \u0275\u0275textInterpolate1(" ", formControl_r7.value, " ");
  }
}
function ManageMediaSettingsComponent_ng_container_0_Conditional_18_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 13);
    \u0275\u0275element(1, "input", 14);
    \u0275\u0275elementStart(2, "button", 15);
    \u0275\u0275listener("click", function ManageMediaSettingsComponent_ng_container_0_Conditional_18_ng_template_3_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r8);
      const formControl_r7 = \u0275\u0275nextContext();
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.openDirectoryChooser(formControl_r7.value, "bookmarksDirectory"));
    });
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const t_r4 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", t_r4("change"), " ");
  }
}
function ManageMediaSettingsComponent_ng_container_0_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "app-setting-item", 9);
    \u0275\u0275template(1, ManageMediaSettingsComponent_ng_container_0_Conditional_18_ng_template_1_Template, 1, 1, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(3, ManageMediaSettingsComponent_ng_container_0_Conditional_18_ng_template_3_Template, 4, 1, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("title", t_r4("bookmark-dir-label"))("subtitle", t_r4("bookmark-dir-tooltip"));
  }
}
function ManageMediaSettingsComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "form", 3)(2, "div", 4)(3, "p");
    \u0275\u0275text(4);
    \u0275\u0275elementStart(5, "a", 5);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275text(7, "/");
    \u0275\u0275elementStart(8, "a", 6);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 7);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerStart(12);
    \u0275\u0275elementStart(13, "div", 8);
    \u0275\u0275template(14, ManageMediaSettingsComponent_ng_container_0_Conditional_14_Template, 5, 2, "app-setting-item", 9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "div", 8);
    \u0275\u0275template(16, ManageMediaSettingsComponent_ng_container_0_Conditional_16_Template, 5, 2, "app-setting-item", 9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "div", 8);
    \u0275\u0275template(18, ManageMediaSettingsComponent_ng_container_0_Conditional_18_Template, 5, 2, "app-setting-item", 9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    let tmp_7_0;
    let tmp_8_0;
    let tmp_9_0;
    const t_r4 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("formGroup", ctx_r2.settingsForm);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", t_r4("encode-as-description-part-1"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r4("encode-as-description-part-2"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(t_r4("encode-as-description-part-3"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", t_r4("encode-as-warning"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275conditional((tmp_7_0 = ctx_r2.settingsForm.get("encodeMediaAs")) ? 14 : -1, tmp_7_0);
    \u0275\u0275advance(2);
    \u0275\u0275conditional((tmp_8_0 = ctx_r2.settingsForm.get("coverImageSize")) ? 16 : -1, tmp_8_0);
    \u0275\u0275advance(2);
    \u0275\u0275conditional((tmp_9_0 = ctx_r2.settingsForm.get("bookmarksDirectory")) ? 18 : -1, tmp_9_0);
  }
}
var ManageMediaSettingsComponent = class _ManageMediaSettingsComponent {
  constructor() {
    this.translocoService = inject(TranslocoService);
    this.cdRef = inject(ChangeDetectorRef);
    this.confirmService = inject(ConfirmService);
    this.settingsService = inject(SettingsService);
    this.toastr = inject(ToastrService);
    this.modalService = inject(NgbModal);
    this.destroyRef = inject(DestroyRef);
    this.allEncodeFormats = allEncodeFormats;
    this.allCoverImageSizes = allCoverImageSizes;
    this.settingsForm = new FormGroup({});
    this.pageLayoutModes = pageLayoutModes;
  }
  ngOnInit() {
    this.settingsService.getServerSettings().pipe(take(1)).subscribe((settings) => {
      this.serverSettings = settings;
      this.settingsForm.addControl("encodeMediaAs", new FormControl(this.serverSettings.encodeMediaAs, [Validators.required]));
      this.settingsForm.addControl("bookmarksDirectory", new FormControl(this.serverSettings.bookmarksDirectory, [Validators.required]));
      this.settingsForm.addControl("coverImageSize", new FormControl(this.serverSettings.coverImageSize || CoverImageSize.Default, [Validators.required]));
      this.settingsForm.valueChanges.pipe(distinctUntilChanged(), debounceTime(100), filter((_) => this.settingsForm.valid), takeUntilDestroyed(this.destroyRef), switchMap((_) => {
        const data = this.packData();
        return this.settingsService.updateServerSettings(data);
      }), tap((settings2) => {
        const encodingChanged = this.serverSettings.encodeMediaAs !== settings2.encodeMediaAs;
        if (encodingChanged) {
          this.toastr.info(translate("manage-media-settings.media-warning"));
        }
        this.serverSettings = settings2;
        this.resetForm();
        this.cdRef.markForCheck();
      })).subscribe();
      this.cdRef.markForCheck();
    });
  }
  resetForm() {
    this.settingsForm.get("encodeMediaAs")?.setValue(this.serverSettings.encodeMediaAs, { onlySelf: true, emitEvent: false });
    this.settingsForm.get("bookmarksDirectory")?.setValue(this.serverSettings.bookmarksDirectory, { onlySelf: true, emitEvent: false });
    this.settingsForm.get("coverImageSize")?.setValue(this.serverSettings.coverImageSize, { onlySelf: true, emitEvent: false });
    this.settingsForm.markAsPristine();
    this.cdRef.markForCheck();
  }
  packData() {
    const modelSettings = Object.assign({}, this.serverSettings);
    modelSettings.encodeMediaAs = parseInt(this.settingsForm.get("encodeMediaAs")?.value, 10);
    modelSettings.bookmarksDirectory = this.settingsForm.get("bookmarksDirectory")?.value;
    modelSettings.coverImageSize = parseInt(this.settingsForm.get("coverImageSize")?.value, 10);
    return modelSettings;
  }
  resetToDefaults() {
    return __async(this, null, function* () {
      if (!(yield this.confirmService.confirm(translate("toasts.confirm-reset-server-settings"))))
        return;
      this.settingsService.resetServerSettings().pipe(take(1)).subscribe((settings) => {
        this.serverSettings = settings;
        this.resetForm();
        this.toastr.success(this.translocoService.translate("toasts.server-settings-updated"));
      }, (err) => {
        console.error("error: ", err);
      });
    });
  }
  openDirectoryChooser(existingDirectory, formControl) {
    const modalRef = this.modalService.open(DirectoryPickerComponent, { scrollable: true, size: "lg", fullscreen: "md" });
    modalRef.componentInstance.startingFolder = existingDirectory || "";
    modalRef.componentInstance.helpUrl = "";
    modalRef.closed.subscribe((closeResult) => {
      if (closeResult.success && closeResult.folderPath !== "") {
        this.settingsForm.get(formControl)?.setValue(closeResult.folderPath);
        this.settingsForm.markAsDirty();
        this.cdRef.markForCheck();
      }
    });
  }
  static {
    this.\u0275fac = function ManageMediaSettingsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ManageMediaSettingsComponent)();
    };
  }
  static {
    this.\u0275cmp = \u0275\u0275defineComponent({ type: _ManageMediaSettingsComponent, selectors: [["app-manage-media-settings"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 1, vars: 1, consts: [["view", ""], ["edit", ""], [4, "transloco", "translocoRead"], [3, "formGroup"], [1, "mb-4"], ["href", "https://caniuse.com/?search=webp", "target", "_blank", "rel", "noopener noreferrer"], ["href", "https://caniuse.com/?search=avif", "target", "_blank", "rel", "noopener noreferrer"], [1, "alert", "alert-warning"], [1, "row", "g-0", "mt-2"], [3, "title", "subtitle"], ["formControlName", "encodeMediaAs", 1, "form-select"], [3, "value"], ["formControlName", "coverImageSize", 1, "form-select"], [1, "input-group"], ["readonly", "", "id", "settings-bookmarksdir", "formControlName", "bookmarksDirectory", "type", "text", "aria-describedby", "change-bookmarks-dir", 1, "form-control"], ["id", "change-bookmarks-dir", 1, "btn", "btn-primary", 3, "click"]], template: function ManageMediaSettingsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, ManageMediaSettingsComponent_ng_container_0_Template, 19, 8, "ng-container", 2);
      }
      if (rf & 2) {
        \u0275\u0275property("translocoRead", "manage-media-settings");
      }
    }, dependencies: [ReactiveFormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, TranslocoDirective, SettingItemComponent, EncodeFormatPipe, CoverImageSizePipe], changeDetection: 0 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ManageMediaSettingsComponent, { className: "ManageMediaSettingsComponent", filePath: "src/app/admin/manage-media-settings/manage-media-settings.component.ts", lineNumber: 43 });
})();
export {
  ManageMediaSettingsComponent
};
//# sourceMappingURL=manage-media-settings.component-OAHTKK6G.js.map
