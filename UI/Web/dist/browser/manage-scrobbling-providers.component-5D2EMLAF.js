import {
  LoadingComponent
} from "./chunk-D7CIAEAO.js";
import {
  Select2Module
} from "./chunk-LGLLZBOI.js";
import "./chunk-EA72DBFY.js";
import "./chunk-HN36WWH3.js";
import {
  ScrobbleProviderNamePipe
} from "./chunk-LA23MDZZ.js";
import {
  ScrobbleProvider,
  ScrobblingService
} from "./chunk-R5PSFMI2.js";
import "./chunk-A6JEQ5GB.js";
import "./chunk-RSMGJKYW.js";
import {
  SettingTitleComponent
} from "./chunk-I5OSWZYW.js";
import {
  AccountService,
  LicenseService
} from "./chunk-U2DWQJI2.js";
import {
  ConfirmService,
  NgbTooltip
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
  ReactiveFormsModule,
  Validators,
  ɵNgNoValidate
} from "./chunk-BPOUBDX2.js";
import "./chunk-CQADFT7F.js";
import {
  ChangeDetectorRef,
  DestroyRef,
  NgOptimizedImage,
  NgTemplateOutlet,
  TranslocoDirective,
  __async,
  inject,
  takeUntilDestroyed,
  translate,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
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
  ɵɵproperty,
  ɵɵpropertyInterpolate,
  ɵɵpropertyInterpolate1,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵqueryRefresh,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-PYHIUVNJ.js";

// src/app/user-settings/scrobble-provider-item/scrobble-provider-item.component.ts
var _c0 = ["edit"];
function ScrobbleProviderItemComponent_ng_container_0_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const t_r1 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275textInterpolate1(" ", t_r1("token-set"), " ");
  }
}
function ScrobbleProviderItemComponent_ng_container_0_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const t_r1 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275textInterpolate1(" ", t_r1("no-token-set"), " ");
  }
}
function ScrobbleProviderItemComponent_ng_container_0_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 5);
    \u0275\u0275elementStart(1, "span", 6);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r1 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("ngbTooltip", t_r1("token-expired"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r1("token-expired"));
  }
}
function ScrobbleProviderItemComponent_ng_container_0_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 7);
    \u0275\u0275elementStart(1, "span", 8);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "scrobbleProviderName");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r1 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("ngbTooltip", t_r1("token-valid"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", \u0275\u0275pipeBind1(3, 3, ctx_r1.provider), ": ", t_r1("token-valid"), "");
  }
}
function ScrobbleProviderItemComponent_ng_container_0_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4);
    \u0275\u0275elementContainer(1, 9);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r1.editRef);
  }
}
function ScrobbleProviderItemComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 1);
    \u0275\u0275element(2, "img", 2);
    \u0275\u0275pipe(3, "scrobbleProviderName");
    \u0275\u0275pipe(4, "scrobbleProviderName");
    \u0275\u0275pipe(5, "scrobbleProviderName");
    \u0275\u0275template(6, ScrobbleProviderItemComponent_ng_container_0_Conditional_6_Template, 1, 1)(7, ScrobbleProviderItemComponent_ng_container_0_Conditional_7_Template, 1, 1);
    \u0275\u0275elementStart(8, "span", 3);
    \u0275\u0275template(9, ScrobbleProviderItemComponent_ng_container_0_Conditional_9_Template, 3, 2)(10, ScrobbleProviderItemComponent_ng_container_0_Conditional_10_Template, 4, 5);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(11, ScrobbleProviderItemComponent_ng_container_0_Conditional_11_Template, 2, 1, "div", 4);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275propertyInterpolate1("ngSrc", "assets/images/ExternalServices/", \u0275\u0275pipeBind1(3, 7, ctx_r1.provider), ".png");
    \u0275\u0275propertyInterpolate("alt", \u0275\u0275pipeBind1(4, 9, ctx_r1.provider));
    \u0275\u0275property("ngbTooltip", \u0275\u0275pipeBind1(5, 11, ctx_r1.provider));
    \u0275\u0275advance(4);
    \u0275\u0275conditional(ctx_r1.token && ctx_r1.token.length > 0 ? 6 : 7);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r1.hasExpired ? 9 : 10);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.isEditMode ? 11 : -1);
  }
}
var ScrobbleProviderItemComponent = class _ScrobbleProviderItemComponent {
  constructor() {
    this.cdRef = inject(ChangeDetectorRef);
    this.scrobblingService = inject(ScrobblingService);
    this.isEditMode = false;
    this.hasExpired = false;
    this.scrobblingService.hasTokenExpired(ScrobbleProvider.AniList).subscribe((hasExpired) => {
      this.hasExpired = hasExpired;
      this.cdRef.markForCheck();
    });
  }
  static {
    this.\u0275fac = function ScrobbleProviderItemComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ScrobbleProviderItemComponent)();
    };
  }
  static {
    this.\u0275cmp = \u0275\u0275defineComponent({ type: _ScrobbleProviderItemComponent, selectors: [["app-scrobble-provider-item"]], contentQueries: function ScrobbleProviderItemComponent_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        \u0275\u0275contentQuery(dirIndex, _c0, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.editRef = _t.first);
      }
    }, inputs: { provider: "provider", token: "token", isEditMode: "isEditMode" }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 1, vars: 1, consts: [[4, "transloco", "translocoRead"], [1, "col-auto"], ["width", "32", "height", "32", 1, "me-2", 3, "ngSrc", "alt", "ngbTooltip"], [1, "ms-4"], [1, "row", "col-auto", "mt-3"], ["aria-hidden", "true", 1, "error", "fa-solid", "fa-exclamation-circle", "error", 3, "ngbTooltip"], [1, "visually-hidden"], ["aria-hidden", "true", 1, "fa-solid", "fa-circle-check", "ms-1", "confirm-icon", "success", 3, "ngbTooltip"], ["aria-describedby", "", 1, "visually-hidden"], [3, "ngTemplateOutlet"]], template: function ScrobbleProviderItemComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, ScrobbleProviderItemComponent_ng_container_0_Template, 12, 13, "ng-container", 0);
      }
      if (rf & 2) {
        \u0275\u0275property("translocoRead", "scrobbling-providers");
      }
    }, dependencies: [
      NgOptimizedImage,
      NgbTooltip,
      TranslocoDirective,
      ScrobbleProviderNamePipe,
      NgTemplateOutlet
    ], styles: ["\n\n.error[_ngcontent-%COMP%] {\n  color: var(--error-color);\n}\n.success[_ngcontent-%COMP%] {\n  color: var(--primary-color);\n}\n/*# sourceMappingURL=scrobble-provider-item.component.css.map */"], changeDetection: 0 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ScrobbleProviderItemComponent, { className: "ScrobbleProviderItemComponent", filePath: "src/app/user-settings/scrobble-provider-item/scrobble-provider-item.component.ts", lineNumber: 30 });
})();

// src/app/user-settings/manage-scrobbling-providers/manage-scrobbling-providers.component.ts
var _c02 = () => ({ product: "Kavita+" });
var _c1 = (a0) => ({ service: a0 });
var _c2 = () => ({ service: "AniList" });
function ManageScrobblingProvidersComponent_ng_container_0_Conditional_2_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const t_r3 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275textInterpolate1(" ", t_r3("requires", \u0275\u0275pureFunction0(1, _c02)), " ");
  }
}
function ManageScrobblingProvidersComponent_ng_container_0_Conditional_2_Conditional_2_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "scrobbleProviderName");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 9);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 10)(6, "label", 11);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275element(8, "textarea", 12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 13)(10, "div", 14)(11, "a", 15);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "button", 16);
    \u0275\u0275listener("click", function ManageScrobblingProvidersComponent_ng_container_0_Conditional_2_Conditional_2_ng_template_3_Template_button_click_13_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.saveAniListForm());
    });
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const t_r3 = \u0275\u0275nextContext(3).$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(t_r3("instructions", \u0275\u0275pureFunction1(7, _c1, \u0275\u0275pipeBind1(2, 5, ctx_r1.ScrobbleProvider.AniList))));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(t_r3("anilist-used-for"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(t_r3("token-input-label", \u0275\u0275pureFunction0(9, _c2)));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(t_r3("generate"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r3("save"));
  }
}
function ManageScrobblingProvidersComponent_ng_container_0_Conditional_2_Conditional_2_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "span", 17)(1, "p");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "scrobbleProviderName");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 9);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 10)(7, "label", 18);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275element(9, "input", 19);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 10)(11, "label", 20);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275element(13, "input", 21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "div", 14)(15, "button", 22);
    \u0275\u0275listener("click", function ManageScrobblingProvidersComponent_ng_container_0_Conditional_2_Conditional_2_ng_template_7_Template_button_click_15_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.saveMalForm());
    });
    \u0275\u0275text(16);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const t_r3 = \u0275\u0275nextContext(3).$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r3("mal-instructions", \u0275\u0275pureFunction1(7, _c1, \u0275\u0275pipeBind1(3, 5, ctx_r1.ScrobbleProvider.Mal))));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(t_r3("mal-used-for"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(t_r3("mal-token-input-label"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(t_r3("mal-username-input-label"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(t_r3("save"));
  }
}
function ManageScrobblingProvidersComponent_ng_container_0_Conditional_2_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "form", 5)(1, "div", 6)(2, "app-scrobble-provider-item", 7);
    \u0275\u0275template(3, ManageScrobblingProvidersComponent_ng_container_0_Conditional_2_Conditional_2_ng_template_3_Template, 15, 10, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 8)(6, "app-scrobble-provider-item", 7);
    \u0275\u0275template(7, ManageScrobblingProvidersComponent_ng_container_0_Conditional_2_Conditional_2_ng_template_7_Template, 17, 9, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("formGroup", ctx_r1.formGroup);
    \u0275\u0275advance(2);
    \u0275\u0275property("token", ctx_r1.aniListToken)("provider", ctx_r1.ScrobbleProvider.AniList)("isEditMode", !ctx_r1.isViewMode);
    \u0275\u0275advance(4);
    \u0275\u0275property("token", ctx_r1.malToken)("provider", ctx_r1.ScrobbleProvider.Mal)("isEditMode", !ctx_r1.isViewMode);
  }
}
function ManageScrobblingProvidersComponent_ng_container_0_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3);
    \u0275\u0275template(1, ManageScrobblingProvidersComponent_ng_container_0_Conditional_2_Conditional_1_Template, 1, 2)(2, ManageScrobblingProvidersComponent_ng_container_0_Conditional_2_Conditional_2_Template, 9, 7, "form", 5);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx_r1.hasValidLicense ? 1 : 2);
  }
}
function ManageScrobblingProvidersComponent_ng_container_0_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-loading", 4);
  }
  if (rf & 2) {
    const t_r3 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("loading", !ctx_r1.loaded)("message", t_r3("loading"));
  }
}
function ManageScrobblingProvidersComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "app-setting-title", 2);
    \u0275\u0275listener("editMode", function ManageScrobblingProvidersComponent_ng_container_0_Template_app_setting_title_editMode_1_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.updateEditMode($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(2, ManageScrobblingProvidersComponent_ng_container_0_Conditional_2_Template, 3, 1, "div", 3)(3, ManageScrobblingProvidersComponent_ng_container_0_Conditional_3_Template, 1, 2, "app-loading", 4);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const t_r3 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("title", t_r3("title"))("canEdit", ctx_r1.hasValidLicense)("isEditMode", !ctx_r1.isViewMode);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.loaded ? 2 : 3);
  }
}
var ManageScrobblingProvidersComponent = class _ManageScrobblingProvidersComponent {
  constructor() {
    this.accountService = inject(AccountService);
    this.scrobblingService = inject(ScrobblingService);
    this.toastr = inject(ToastrService);
    this.cdRef = inject(ChangeDetectorRef);
    this.destroyRef = inject(DestroyRef);
    this.licenseService = inject(LicenseService);
    this.confirmService = inject(ConfirmService);
    this.ScrobbleProvider = ScrobbleProvider;
    this.hasValidLicense = false;
    this.formGroup = new FormGroup({});
    this.aniListToken = "";
    this.malToken = "";
    this.malUsername = "";
    this.isViewMode = true;
    this.loaded = false;
    this.licenseService.hasValidLicense$.pipe(takeUntilDestroyed(this.destroyRef)).subscribe((res) => {
      this.hasValidLicense = res;
      this.cdRef.markForCheck();
      if (this.hasValidLicense) {
        this.scrobblingService.getAniListToken().subscribe((token) => {
          this.aniListToken = token;
          this.formGroup.get("aniListToken")?.setValue(token);
          this.loaded = true;
          this.cdRef.markForCheck();
        });
        this.scrobblingService.getMalToken().subscribe((dto) => {
          this.malToken = dto.accessToken;
          this.malUsername = dto.username;
          this.formGroup.get("malToken")?.setValue(this.malToken);
          this.formGroup.get("malUsername")?.setValue(this.malUsername);
          this.cdRef.markForCheck();
        });
      } else {
        this.loaded = true;
        this.cdRef.markForCheck();
      }
    });
  }
  ngOnInit() {
    this.formGroup.addControl("aniListToken", new FormControl("", [Validators.required]));
    this.formGroup.addControl("malClientId", new FormControl("", [Validators.required]));
    this.formGroup.addControl("malUsername", new FormControl("", [Validators.required]));
  }
  resetForm() {
    this.formGroup.get("aniListToken")?.setValue("");
    this.formGroup.get("malClientId")?.setValue("");
    this.formGroup.get("malUsername")?.setValue("");
    this.cdRef.markForCheck();
  }
  saveAniListForm() {
    this.scrobblingService.updateAniListToken(this.formGroup.get("aniListToken").value).subscribe((isFirstToken) => __async(this, null, function* () {
      if (isFirstToken) {
        const result = yield this.confirmService.confirm("", {
          buttons: [
            { text: translate("scrobbling-providers.anilist-first-later"), type: "secondary" },
            { text: translate("scrobbling-providers.anilist-first-now"), type: "primary" }
          ],
          _type: "confirm",
          content: translate("scrobbling-providers.anilist-first-description"),
          header: translate("scrobbling-providers.anilist-first-header"),
          disableEscape: true
        });
        if (result) {
          this.scrobblingService.triggerScrobbleEventGeneration().subscribe((_) => {
            this.aniListToken = this.formGroup.get("aniListToken").value;
            this.resetForm();
            this.cdRef.markForCheck();
          });
          return;
        }
      }
      this.toastr.success(translate("toasts.anilist-token-updated"));
      this.aniListToken = this.formGroup.get("aniListToken").value;
      this.resetForm();
      this.cdRef.markForCheck();
    }));
  }
  saveMalForm() {
    this.scrobblingService.updateMalToken(this.formGroup.get("malUsername").value, this.formGroup.get("malClientId").value).subscribe(() => {
      this.toastr.success(translate("toasts.mal-clientId-updated"));
      this.malToken = this.formGroup.get("malClientId").value;
      this.malUsername = this.formGroup.get("malUsername").value;
      this.resetForm();
      this.cdRef.markForCheck();
    });
  }
  updateEditMode(mode) {
    this.isViewMode = !mode;
    this.resetForm();
    this.cdRef.markForCheck();
  }
  static {
    this.\u0275fac = function ManageScrobblingProvidersComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ManageScrobblingProvidersComponent)();
    };
  }
  static {
    this.\u0275cmp = \u0275\u0275defineComponent({ type: _ManageScrobblingProvidersComponent, selectors: [["app-manage-scrobbling-providers"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 1, vars: 1, consts: [["edit", ""], [4, "transloco", "translocoRead"], [3, "editMode", "title", "canEdit", "isEditMode"], [1, "container-fluid"], [3, "loading", "message"], [3, "formGroup"], [1, "row"], [3, "token", "provider", "isEditMode"], [1, "row", "mt-2"], [1, "text-muted"], [1, "form-group", "mb-3"], ["for", "anilist-token"], ["id", "anilist-token", "rows", "2", "cols", "3", "formControlName", "aniListToken", 1, "form-control"], [1, "text-end"], [1, "col-auto", "d-flex", "d-md-block", "justify-content-sm-center", "text-md-end", "mb-3"], ["href", "https://anilist.co/api/v2/oauth/authorize?client_id=12809&redirect_url=https://anilist.co/api/v2/oauth/pin&response_type=token", "target", "_blank", "rel", "noopener noreferrer", 1, "flex-fill", "btn", "btn-secondary", "me-2"], ["type", "button", "aria-describedby", "anilist-token-header", 1, "flex-fill", "btn", "btn-primary", 3, "click"], [1, "md-4"], ["for", "mal-token"], ["type", "text", "id", "mal-token", "formControlName", "malClientId", 1, "form-control"], ["for", "mal-username"], ["type", "text", "id", "mal-username", "formControlName", "malUsername", 1, "form-control"], ["type", "button", "aria-describedby", "mal-token-header", 1, "flex-fill", "btn", "btn-primary", 3, "click"]], template: function ManageScrobblingProvidersComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, ManageScrobblingProvidersComponent_ng_container_0_Template, 4, 4, "ng-container", 1);
      }
      if (rf & 2) {
        \u0275\u0275property("translocoRead", "scrobbling-providers");
      }
    }, dependencies: [
      ReactiveFormsModule,
      \u0275NgNoValidate,
      DefaultValueAccessor,
      NgControlStatus,
      NgControlStatusGroup,
      FormGroupDirective,
      FormControlName,
      Select2Module,
      TranslocoDirective,
      LoadingComponent,
      ScrobbleProviderItemComponent,
      ScrobbleProviderNamePipe,
      SettingTitleComponent
    ] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ManageScrobblingProvidersComponent, { className: "ManageScrobblingProvidersComponent", filePath: "src/app/user-settings/manage-scrobbling-providers/manage-scrobbling-providers.component.ts", lineNumber: 31 });
})();
export {
  ManageScrobblingProvidersComponent
};
//# sourceMappingURL=manage-scrobbling-providers.component-5D2EMLAF.js.map
