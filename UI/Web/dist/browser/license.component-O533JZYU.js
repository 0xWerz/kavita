import {
  SettingButtonComponent
} from "./chunk-4AQVNEIP.js";
import {
  WikiLink
} from "./chunk-GX7EGMKV.js";
import {
  DefaultValuePipe
} from "./chunk-KMTIWVED.js";
import {
  UtcToLocalTimePipe
} from "./chunk-2L2JQBKQ.js";
import {
  SettingItemComponent
} from "./chunk-KJWRNOWO.js";
import {
  LoadingComponent
} from "./chunk-D7CIAEAO.js";
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
import {
  environment
} from "./chunk-CQADFT7F.js";
import {
  ChangeDetectorRef,
  DecimalPipe,
  DestroyRef,
  TranslocoDirective,
  __async,
  filter,
  inject,
  switchMap,
  tap,
  translate,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵclassMapInterpolate1,
  ɵɵclassProp,
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
  ɵɵproperty,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-PYHIUVNJ.js";

// src/app/admin/license/license.component.ts
function LicenseComponent_ng_container_0_ng_template_13_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-loading", 12);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("loading", ctx_r1.isChecking);
  }
}
function LicenseComponent_ng_container_0_ng_template_13_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275element(1, "i", 13);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r4 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("ngbTooltip", t_r4("check"));
  }
}
function LicenseComponent_ng_container_0_ng_template_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 11);
    \u0275\u0275listener("click", function LicenseComponent_ng_container_0_ng_template_13_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.loadLicenseInfo(true));
    });
    \u0275\u0275template(1, LicenseComponent_ng_container_0_ng_template_13_Conditional_1_Template, 1, 1, "app-loading", 12)(2, LicenseComponent_ng_container_0_ng_template_13_Conditional_2_Template, 2, 1, "span");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.isChecking ? 1 : ctx_r1.hasLicense ? 2 : -1);
  }
}
function LicenseComponent_ng_container_0_ng_template_15_Conditional_0_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15)(1, "span", 16);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const t_r4 = \u0275\u0275nextContext(3).$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r4("loading"));
  }
}
function LicenseComponent_ng_container_0_ng_template_15_Conditional_0_Conditional_3_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "i", 17)(1, "span", 16);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const t_r4 = \u0275\u0275nextContext(4).$implicit;
    \u0275\u0275property("ngbTooltip", t_r4("license-valid"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r4("license-valid"));
  }
}
function LicenseComponent_ng_container_0_ng_template_15_Conditional_0_Conditional_3_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "i", 18)(1, "span", 16);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const t_r4 = \u0275\u0275nextContext(4).$implicit;
    \u0275\u0275property("ngbTooltip", t_r4("license-not-valid"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r4("license-not-valid"));
  }
}
function LicenseComponent_ng_container_0_ng_template_15_Conditional_0_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, LicenseComponent_ng_container_0_ng_template_15_Conditional_0_Conditional_3_Conditional_0_Template, 3, 2, "i", 17)(1, LicenseComponent_ng_container_0_ng_template_15_Conditional_0_Conditional_3_Conditional_1_Template, 3, 2, "i", 18);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275conditional((ctx_r1.licenseInfo == null ? null : ctx_r1.licenseInfo.isActive) ? 0 : 1);
  }
}
function LicenseComponent_ng_container_0_ng_template_15_Conditional_0_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "span", 19);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const t_r4 = \u0275\u0275nextContext(3).$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r4("license-mismatch"));
  }
}
function LicenseComponent_ng_container_0_ng_template_15_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 14);
    \u0275\u0275text(1, "*********");
    \u0275\u0275elementEnd();
    \u0275\u0275template(2, LicenseComponent_ng_container_0_ng_template_15_Conditional_0_Conditional_2_Template, 3, 1, "div", 15)(3, LicenseComponent_ng_container_0_ng_template_15_Conditional_0_Conditional_3_Template, 2, 1)(4, LicenseComponent_ng_container_0_ng_template_15_Conditional_0_Conditional_4_Template, 3, 1, "div");
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.isChecking ? 2 : 3);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(!ctx_r1.isChecking && ctx_r1.hasLicense && !ctx_r1.licenseInfo ? 4 : -1);
  }
}
function LicenseComponent_ng_container_0_ng_template_15_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const t_r4 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275textInterpolate1(" ", t_r4("no-license-key"), " ");
  }
}
function LicenseComponent_ng_container_0_ng_template_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, LicenseComponent_ng_container_0_ng_template_15_Conditional_0_Template, 5, 2)(1, LicenseComponent_ng_container_0_ng_template_15_Conditional_1_Template, 1, 1);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275conditional(ctx_r1.hasLicense ? 0 : 1);
  }
}
function LicenseComponent_ng_container_0_ng_template_17_Conditional_15_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r4 = \u0275\u0275nextContext(3).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", t_r4("discord-validation"), " ");
  }
}
function LicenseComponent_ng_container_0_ng_template_17_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 29);
    \u0275\u0275template(1, LicenseComponent_ng_container_0_ng_template_17_Conditional_15_Conditional_1_Template, 2, 1, "div");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_8_0;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275conditional(((tmp_8_0 = ctx_r1.formGroup.get("discordId")) == null ? null : tmp_8_0.errors == null ? null : tmp_8_0.errors.pattern) ? 1 : -1);
  }
}
function LicenseComponent_ng_container_0_ng_template_17_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r4 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(t_r4("activate-save"));
  }
}
function LicenseComponent_ng_container_0_ng_template_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 20)(1, "label", 21);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275element(3, "input", 22);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 20)(5, "label", 23);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275element(7, "input", 24);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 20)(9, "label", 25);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275element(11, "i", 26);
    \u0275\u0275elementStart(12, "a", 27);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275element(14, "input", 28);
    \u0275\u0275template(15, LicenseComponent_ng_container_0_ng_template_17_Conditional_15_Template, 2, 1, "div", 29);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "div", 30)(17, "button", 31);
    \u0275\u0275listener("click", function LicenseComponent_ng_container_0_ng_template_17_Template_button_click_17_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.deleteLicense());
    });
    \u0275\u0275text(18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "button", 32);
    \u0275\u0275listener("click", function LicenseComponent_ng_container_0_ng_template_17_Template_button_click_19_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.resetLicense());
    });
    \u0275\u0275text(20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "button", 33);
    \u0275\u0275listener("click", function LicenseComponent_ng_container_0_ng_template_17_Template_button_click_21_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.saveForm());
    });
    \u0275\u0275template(22, LicenseComponent_ng_container_0_ng_template_17_Conditional_22_Template, 2, 1, "span");
    \u0275\u0275element(23, "app-loading", 12);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_13_0;
    let tmp_17_0;
    let tmp_19_0;
    const t_r4 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r4("activate-license-label"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(t_r4("activate-email-label"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(t_r4("activate-discordId-label"));
    \u0275\u0275advance();
    \u0275\u0275property("ngbTooltip", t_r4("activate-discordId-tooltip"));
    \u0275\u0275advance();
    \u0275\u0275property("href", ctx_r1.WikiLink.KavitaPlusDiscordId, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(t_r4("help-label"));
    \u0275\u0275advance();
    \u0275\u0275classProp("is-invalid", ((tmp_13_0 = ctx_r1.formGroup.get("discordId")) == null ? null : tmp_13_0.invalid) && ((tmp_13_0 = ctx_r1.formGroup.get("discordId")) == null ? null : tmp_13_0.touched));
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.formGroup.dirty || !ctx_r1.formGroup.untouched ? 15 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", t_r4("activate-delete"), " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngbTooltip", t_r4("activate-reset-tooltip"))("disabled", !((tmp_17_0 = ctx_r1.formGroup.get("email")) == null ? null : tmp_17_0.value) || !((tmp_17_0 = ctx_r1.formGroup.get("licenseKey")) == null ? null : tmp_17_0.value));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", t_r4("activate-reset"), " ");
    \u0275\u0275advance();
    \u0275\u0275property("disabled", !((tmp_19_0 = ctx_r1.formGroup.get("email")) == null ? null : tmp_19_0.value) || !((tmp_19_0 = ctx_r1.formGroup.get("licenseKey")) == null ? null : tmp_19_0.value));
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx_r1.isSaving ? 22 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("loading", ctx_r1.isSaving);
  }
}
function LicenseComponent_ng_container_0_ng_template_19_Conditional_0_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 34);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r4 = \u0275\u0275nextContext(3).$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("href", ctx_r1.manageLink, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(t_r4("manage"));
  }
}
function LicenseComponent_ng_container_0_ng_template_19_Conditional_0_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 35);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r4 = \u0275\u0275nextContext(3).$implicit;
    \u0275\u0275property("ngbTooltip", t_r4("invalid-license-tooltip"));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(t_r4("renew"));
  }
}
function LicenseComponent_ng_container_0_ng_template_19_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, LicenseComponent_ng_container_0_ng_template_19_Conditional_0_Conditional_0_Template, 2, 2, "a", 34)(1, LicenseComponent_ng_container_0_ng_template_19_Conditional_0_Conditional_1_Template, 2, 2, "a", 35);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275conditional((ctx_r1.licenseInfo == null ? null : ctx_r1.licenseInfo.isActive) ? 0 : 1);
  }
}
function LicenseComponent_ng_container_0_ng_template_19_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "a", 36);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "button", 37);
    \u0275\u0275listener("click", function LicenseComponent_ng_container_0_ng_template_19_Conditional_1_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.toggleViewMode());
    });
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r4 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("href", ctx_r1.buyLink, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(t_r4("buy"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.isViewMode ? t_r4("activate") : t_r4("cancel"));
  }
}
function LicenseComponent_ng_container_0_ng_template_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, LicenseComponent_ng_container_0_ng_template_19_Conditional_0_Template, 2, 1)(1, LicenseComponent_ng_container_0_ng_template_19_Conditional_1_Template, 4, 3);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275conditional(ctx_r1.hasLicense ? 0 : 1);
  }
}
function LicenseComponent_ng_container_0_Conditional_21_ng_template_6_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "defaultValue");
  }
  if (rf & 2) {
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(1, 1, null), " ");
  }
}
function LicenseComponent_ng_container_0_Conditional_21_ng_template_6_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "i")(1, "span", 16);
    \u0275\u0275text(2, "{{licenseInfo.isActive ? t('valid') : t('invalid')}]");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275classMapInterpolate1("fas ", ctx_r1.licenseInfo.isActive ? "fa-check-circle" : "fa-circle-xmark error", "");
  }
}
function LicenseComponent_ng_container_0_Conditional_21_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, LicenseComponent_ng_container_0_Conditional_21_ng_template_6_Conditional_0_Template, 2, 3)(1, LicenseComponent_ng_container_0_Conditional_21_ng_template_6_Conditional_1_Template, 3, 3, "i", 47);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275conditional(ctx_r1.isChecking ? 0 : 1);
  }
}
function LicenseComponent_ng_container_0_Conditional_21_ng_template_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "i")(1, "span", 16);
    \u0275\u0275text(2, "{{isValidVersion ? t('valid') : t('invalid')}]");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275classMapInterpolate1("fas ", ctx_r1.licenseInfo.isValidVersion ? "fa-check-circle" : "fa-circle-xmark error", "");
  }
}
function LicenseComponent_ng_container_0_Conditional_21_ng_template_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "utcToLocalTime");
    \u0275\u0275pipe(2, "defaultValue");
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 3, \u0275\u0275pipeBind1(1, 1, ctx_r1.licenseInfo.expirationDate)), " ");
  }
}
function LicenseComponent_ng_container_0_Conditional_21_ng_template_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "number");
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(1, 1, ctx_r1.licenseInfo.totalMonthsSubbed), " ");
  }
}
function LicenseComponent_ng_container_0_Conditional_21_ng_template_22_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275textInterpolate1(" ", ctx_r1.licenseInfo.registeredEmail, " ");
  }
}
function LicenseComponent_ng_container_0_Conditional_21_ng_template_22_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " *************** ");
  }
}
function LicenseComponent_ng_container_0_Conditional_21_ng_template_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "span", 48);
    \u0275\u0275listener("click", function LicenseComponent_ng_container_0_Conditional_21_ng_template_22_Template_span_click_0_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.toggleEmailShow());
    });
    \u0275\u0275template(1, LicenseComponent_ng_container_0_Conditional_21_ng_template_22_Conditional_1_Template, 1, 1)(2, LicenseComponent_ng_container_0_Conditional_21_ng_template_22_Conditional_2_Template, 1, 0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.showEmail ? 1 : 2);
  }
}
function LicenseComponent_ng_container_0_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275element(0, "div", 38);
    \u0275\u0275elementStart(1, "div", 39)(2, "h3");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 40)(5, "app-setting-item", 41);
    \u0275\u0275template(6, LicenseComponent_ng_container_0_Conditional_21_ng_template_6_Template, 2, 1, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 40)(9, "app-setting-item", 41);
    \u0275\u0275template(10, LicenseComponent_ng_container_0_Conditional_21_ng_template_10_Template, 3, 3, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div", 40)(13, "app-setting-item", 41);
    \u0275\u0275template(14, LicenseComponent_ng_container_0_Conditional_21_ng_template_14_Template, 3, 5, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "div", 40)(17, "app-setting-item", 41);
    \u0275\u0275template(18, LicenseComponent_ng_container_0_Conditional_21_ng_template_18_Template, 2, 3, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "div", 42)(21, "app-setting-item", 41);
    \u0275\u0275template(22, LicenseComponent_ng_container_0_Conditional_21_ng_template_22_Template, 3, 1, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd()();
    \u0275\u0275element(24, "div", 38);
    \u0275\u0275elementStart(25, "h3");
    \u0275\u0275text(26);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "div", 43)(28, "app-setting-button", 44)(29, "button", 45);
    \u0275\u0275listener("click", function LicenseComponent_ng_container_0_Conditional_21_Template_button_click_29_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.deleteLicense());
    });
    \u0275\u0275text(30);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(31, "div", 43)(32, "app-setting-button", 44)(33, "a", 46);
    \u0275\u0275text(34);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const t_r4 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(t_r4("info-title"));
    \u0275\u0275advance(2);
    \u0275\u0275property("canEdit", false)("showEdit", false)("title", t_r4("license-active-label"));
    \u0275\u0275advance(4);
    \u0275\u0275property("canEdit", false)("showEdit", false)("title", t_r4("supported-version-label"));
    \u0275\u0275advance(4);
    \u0275\u0275property("canEdit", false)("showEdit", false)("title", t_r4("expiration-label"));
    \u0275\u0275advance(4);
    \u0275\u0275property("canEdit", false)("showEdit", false)("title", t_r4("total-subbed-months-label"));
    \u0275\u0275advance(4);
    \u0275\u0275property("canEdit", false)("showEdit", false)("title", t_r4("email-label"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(t_r4("actions-title"));
    \u0275\u0275advance(2);
    \u0275\u0275property("subtitle", t_r4("delete-tooltip"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", t_r4("activate-delete"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("subtitle", t_r4("manage-tooltip"));
    \u0275\u0275advance();
    \u0275\u0275property("href", ctx_r1.manageLink, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(t_r4("manage"));
  }
}
function LicenseComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 5)(2, "a", 6);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div")(5, "p");
    \u0275\u0275text(6);
    \u0275\u0275elementStart(7, "a", 7);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "form", 8)(11, "div", 9)(12, "app-setting-item", 10);
    \u0275\u0275listener("editMode", function LicenseComponent_ng_container_0_Template_app_setting_item_editMode_12_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.updateEditMode($event));
    });
    \u0275\u0275template(13, LicenseComponent_ng_container_0_ng_template_13_Template, 3, 1, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(15, LicenseComponent_ng_container_0_ng_template_15_Template, 2, 1, "ng-template", null, 1, \u0275\u0275templateRefExtractor)(17, LicenseComponent_ng_container_0_ng_template_17_Template, 24, 16, "ng-template", null, 2, \u0275\u0275templateRefExtractor)(19, LicenseComponent_ng_container_0_ng_template_19_Template, 2, 1, "ng-template", null, 3, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(21, LicenseComponent_ng_container_0_Conditional_21_Template, 35, 22);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const t_r4 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("href", ctx_r1.WikiLink.KavitaPlusFAQ, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(t_r4("faq-title"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", t_r4("kavita+-desc-part-1"), " ");
    \u0275\u0275advance();
    \u0275\u0275property("href", ctx_r1.WikiLink.KavitaPlus, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(t_r4("kavita+-desc-part-2"));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", t_r4("kavita+-desc-part-3"), "");
    \u0275\u0275advance();
    \u0275\u0275property("formGroup", ctx_r1.formGroup);
    \u0275\u0275advance(2);
    \u0275\u0275property("title", t_r4("title"))("isEditMode", !ctx_r1.isViewMode)("showEdit", ctx_r1.hasLicense)("fixedExtras", true);
    \u0275\u0275advance(9);
    \u0275\u0275conditional(ctx_r1.hasLicense && ctx_r1.licenseInfo ? 21 : -1);
  }
}
var LicenseComponent = class _LicenseComponent {
  constructor() {
    this.cdRef = inject(ChangeDetectorRef);
    this.destroyRef = inject(DestroyRef);
    this.toastr = inject(ToastrService);
    this.confirmService = inject(ConfirmService);
    this.accountService = inject(AccountService);
    this.licenseService = inject(LicenseService);
    this.WikiLink = WikiLink;
    this.formGroup = new FormGroup({});
    this.isViewMode = true;
    this.isChecking = true;
    this.isSaving = false;
    this.hasLicense = false;
    this.licenseInfo = null;
    this.showEmail = false;
    this.buyLink = environment.buyLink;
    this.manageLink = environment.manageLink;
  }
  ngOnInit() {
    this.formGroup.addControl("licenseKey", new FormControl("", [Validators.required]));
    this.formGroup.addControl("email", new FormControl("", [Validators.required]));
    this.formGroup.addControl("discordId", new FormControl("", [Validators.pattern(/\d+/)]));
    this.loadLicenseInfo().subscribe();
  }
  loadLicenseInfo(forceCheck = false) {
    this.isChecking = true;
    this.cdRef.markForCheck();
    return this.licenseService.hasAnyLicense().pipe(tap((res) => {
      this.hasLicense = res;
      this.isChecking = false;
      this.cdRef.markForCheck();
    }), filter((hasLicense) => hasLicense), tap((_) => {
      this.isChecking = true;
      this.cdRef.markForCheck();
    }), switchMap((_) => this.licenseService.licenseInfo(forceCheck)), tap((licenseInfo) => {
      this.licenseInfo = licenseInfo;
      this.isChecking = false;
      this.cdRef.markForCheck();
    }));
  }
  resetForm() {
    this.formGroup.get("licenseKey")?.setValue("");
    this.formGroup.get("email")?.setValue("");
    this.formGroup.get("discordId")?.setValue("");
    this.cdRef.markForCheck();
  }
  saveForm() {
    this.isSaving = true;
    this.cdRef.markForCheck();
    const hadActiveLicenseBefore = this.licenseInfo?.isActive;
    this.licenseService.updateUserLicense(this.formGroup.get("licenseKey").value.trim(), this.formGroup.get("email").value.trim(), this.formGroup.get("discordId").value.trim()).subscribe(() => {
      this.resetForm();
      this.isViewMode = true;
      this.isSaving = false;
      this.cdRef.markForCheck();
      this.loadLicenseInfo().subscribe((info) => __async(this, null, function* () {
        if (info?.isActive && !hadActiveLicenseBefore) {
          yield this.confirmService.info(translate("license.k+-unlocked-description"), translate("license.k+-unlocked"));
        } else {
          this.toastr.info(translate("toasts.k+-license-saved"));
        }
      }));
    }, (err) => __async(this, null, function* () {
      yield this.handleError(err);
    }));
  }
  handleError(err) {
    return __async(this, null, function* () {
      this.isSaving = false;
      this.cdRef.markForCheck();
      if (err.hasOwnProperty("error")) {
        if (err["error"][0] === "{") {
          this.toastr.error(JSON.parse(err["error"]));
        } else {
          if (err["error"] === "Kavita instance already registered with another license") {
            const answer = yield this.confirmService.confirm(translate("license.k+-license-overwrite"), {
              _type: "confirm",
              content: translate("license.k+-license-overwrite"),
              disableEscape: false,
              header: translate("license.k+-already-registered-header"),
              buttons: [
                {
                  text: translate("license.overwrite"),
                  type: "primary"
                },
                {
                  text: translate("license.cancel"),
                  type: "secondary"
                }
              ]
            });
            if (answer) {
              this.forceSave();
              return;
            }
            return;
          } else {
          }
          this.toastr.error(err["error"]);
        }
      } else {
        this.toastr.error(translate("toasts.k+-error"));
      }
    });
  }
  forceSave() {
    this.isSaving = false;
    this.cdRef.markForCheck();
    this.licenseService.resetLicense(this.formGroup.get("licenseKey").value.trim(), this.formGroup.get("email").value.trim()).subscribe((_) => {
      this.saveForm();
    });
  }
  deleteLicense() {
    return __async(this, null, function* () {
      if (!(yield this.confirmService.confirm(translate("toasts.k+-delete-key")))) {
        return;
      }
      this.licenseService.deleteLicense().subscribe(() => {
        this.resetForm();
        this.isViewMode = true;
        this.licenseInfo = null;
        this.hasLicense = false;
        this.cdRef.markForCheck();
      });
    });
  }
  resetLicense() {
    return __async(this, null, function* () {
      if (!(yield this.confirmService.confirm(translate("toasts.k+-reset-key")))) {
        return;
      }
      this.licenseService.resetLicense(this.formGroup.get("licenseKey").value.trim(), this.formGroup.get("email").value.trim()).subscribe(() => {
        this.toastr.success(translate("toasts.k+-reset-key-success"));
      });
    });
  }
  updateEditMode(mode) {
    this.isViewMode = !mode;
    this.cdRef.markForCheck();
  }
  toggleViewMode() {
    this.isViewMode = !this.isViewMode;
    this.cdRef.markForCheck();
    this.resetForm();
  }
  toggleEmailShow() {
    this.showEmail = !this.showEmail;
    this.cdRef.markForCheck();
  }
  static {
    this.\u0275fac = function LicenseComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _LicenseComponent)();
    };
  }
  static {
    this.\u0275cmp = \u0275\u0275defineComponent({ type: _LicenseComponent, selectors: [["app-license"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 1, vars: 1, consts: [["titleExtra", ""], ["view", ""], ["edit", ""], ["titleActions", ""], [4, "transloco", "translocoRead"], [1, "position-relative"], ["target", "_blank", "rel", "noreferrer nofollow", 1, "position-absolute", "custom-position", "btn", "btn-primary-outline", 3, "href"], ["target", "_blank", "rel", "noreferrer nofollow", 3, "href"], [3, "formGroup"], [1, "mt-2"], [3, "editMode", "title", "isEditMode", "showEdit", "fixedExtras"], [1, "btn", "btn-icon", "btn-sm", 3, "click"], ["size", "spinner-border-sm", 3, "loading"], ["tabindex", "0", 1, "fa-solid", "fa-refresh", 3, "ngbTooltip"], [1, "me-1"], ["role", "status", 1, "spinner-border", "spinner-border-sm", "text-primary"], [1, "visually-hidden"], [1, "fa-solid", "fa-check-circle", "successful-validation", "ms-1", 3, "ngbTooltip"], [1, "error", "fa-solid", "fa-exclamation-circle", "ms-1", 3, "ngbTooltip"], [1, "error"], [1, "form-group", "mb-3"], ["for", "license-key"], ["id", "license-key", "type", "text", "formControlName", "licenseKey", "autocomplete", "off", 1, "form-control"], ["for", "email"], ["id", "email", "type", "email", "formControlName", "email", "autocomplete", "off", 1, "form-control"], ["for", "discordId"], ["aria-hidden", "true", 1, "fa", "fa-circle-info", "ms-1", 3, "ngbTooltip"], ["target", "_blank", "rel", "noopener noreferrer", 1, "ms-1", 3, "href"], ["id", "discordId", "type", "text", "formControlName", "discordId", "autocomplete", "off", 1, "form-control"], ["id", "inviteForm-validations", 1, "invalid-feedback"], [1, "col-auto", "d-flex", "d-md-block", "justify-content-sm-center", "text-md-end", "mb-3"], ["type", "button", "aria-describedby", "license-key-header", 1, "flex-fill", "btn", "btn-danger", "me-1", 3, "click"], ["type", "button", "aria-describedby", "license-key-header", 1, "flex-fill", "btn", "btn-danger", "me-1", 3, "click", "ngbTooltip", "disabled"], ["type", "submit", "aria-describedby", "license-key-header", 1, "flex-fill", "btn", "btn-primary", 3, "click", "disabled"], ["target", "_blank", "rel", "noreferrer nofollow", 1, "btn", "btn-primary-outline", "btn-sm", "me-1", 3, "href"], ["href", "mailto:kavitareader@gmail.com?subject=Kavita+Subscription+Renewal&body=Description%3A%0D%0A%0D%0ALicense%20Key%3A%0D%0A%0D%0AYour%20Email%3A", 1, "btn", "btn-primary-outline", "btn-sm", "me-1", 3, "ngbTooltip"], ["target", "_blank", "rel", "noreferrer nofollow", 1, "btn", "btn-secondary", "btn-sm", "me-1", 3, "href"], [1, "btn", "btn-primary", "btn-sm", 3, "click"], [1, "setting-section-break"], [1, "row", "g-0", "mt-3"], [1, "mb-2", "col-md-6", "col-sm-12"], [3, "canEdit", "showEdit", "title"], [1, "col-md-6", "col-sm-12"], [1, "mt-2", "mb-2"], [3, "subtitle"], ["type", "button", "aria-describedby", "license-key-header", 1, "flex-fill", "btn", "btn-danger", "mt-1", 3, "click"], ["target", "_blank", "rel", "noreferrer nofollow", 1, "btn", "btn-primary", "btn-sm", "mt-1", 3, "href"], [3, "class"], [1, "col-12", "clickable", 3, "click"]], template: function LicenseComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, LicenseComponent_ng_container_0_Template, 22, 12, "ng-container", 4);
      }
      if (rf & 2) {
        \u0275\u0275property("translocoRead", "license");
      }
    }, dependencies: [
      NgbTooltip,
      LoadingComponent,
      ReactiveFormsModule,
      \u0275NgNoValidate,
      DefaultValueAccessor,
      NgControlStatus,
      NgControlStatusGroup,
      FormGroupDirective,
      FormControlName,
      TranslocoDirective,
      SettingItemComponent,
      DefaultValuePipe,
      UtcToLocalTimePipe,
      SettingButtonComponent,
      DecimalPipe
    ], styles: ["\n\n.error[_ngcontent-%COMP%] {\n  color: var(--error-color);\n}\n.successful-validation[_ngcontent-%COMP%] {\n  color: var(--primary-color);\n}\n.custom-position[_ngcontent-%COMP%] {\n  right: 15px;\n  top: -42px;\n}\n.custom-position-2[_ngcontent-%COMP%] {\n  right: 160px;\n  top: -42px;\n}\n/*# sourceMappingURL=license.component.css.map */"], changeDetection: 0 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LicenseComponent, { className: "LicenseComponent", filePath: "src/app/admin/license/license.component.ts", lineNumber: 35 });
})();
export {
  LicenseComponent
};
//# sourceMappingURL=license.component-O533JZYU.js.map
