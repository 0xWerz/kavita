import {
  ServerService
} from "./chunk-KKWGV4SA.js";
import {
  WikiLink
} from "./chunk-GX7EGMKV.js";
import {
  EnterBlurDirective
} from "./chunk-CGYVF6ML.js";
import {
  DefaultValuePipe
} from "./chunk-KMTIWVED.js";
import {
  SettingSwitchComponent
} from "./chunk-HXDVBBHR.js";
import {
  SettingsService
} from "./chunk-65GP3B4U.js";
import {
  SettingItemComponent
} from "./chunk-KJWRNOWO.js";
import {
  ConfirmService
} from "./chunk-2R2RCU4Y.js";
import {
  ToastrService
} from "./chunk-5J5IKBMT.js";
import "./chunk-FLGYJHAG.js";
import {
  CheckboxControlValueAccessor,
  DefaultValueAccessor,
  FormControl,
  FormControlName,
  FormGroup,
  FormGroupDirective,
  MaxValidator,
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
import "./chunk-CQADFT7F.js";
import {
  ChangeDetectorRef,
  DestroyRef,
  TitleCasePipe,
  TranslocoDirective,
  TranslocoModule,
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
  ɵɵattribute,
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
  ɵɵpureFunction1,
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

// src/app/admin/manage-settings/manage-settings.component.ts
var _c0 = (a0) => ({ num: a0 });
function ManageSettingsComponent_ng_container_0_Conditional_13_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "defaultValue");
  }
  if (rf & 2) {
    const formControl_r3 = \u0275\u0275nextContext();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(1, 1, formControl_r3.value), " ");
  }
}
function ManageSettingsComponent_ng_container_0_Conditional_13_ng_template_3_Conditional_1_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r4 = \u0275\u0275nextContext(4).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(t_r4("host-name-validation"));
  }
}
function ManageSettingsComponent_ng_container_0_Conditional_13_ng_template_3_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12);
    \u0275\u0275template(1, ManageSettingsComponent_ng_container_0_Conditional_13_ng_template_3_Conditional_1_Conditional_1_Template, 2, 1, "div");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const formControl_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275conditional((formControl_r3.errors == null ? null : formControl_r3.errors.pattern) ? 1 : -1);
  }
}
function ManageSettingsComponent_ng_container_0_Conditional_13_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "input", 11);
    \u0275\u0275template(1, ManageSettingsComponent_ng_container_0_Conditional_13_ng_template_3_Conditional_1_Template, 2, 1, "div", 12);
  }
  if (rf & 2) {
    const formControl_r3 = \u0275\u0275nextContext();
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("is-invalid", formControl_r3.invalid && !formControl_r3.untouched);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.settingsForm.dirty || !ctx_r1.settingsForm.untouched ? 1 : -1);
  }
}
function ManageSettingsComponent_ng_container_0_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "app-setting-item", 9);
    \u0275\u0275template(1, ManageSettingsComponent_ng_container_0_Conditional_13_ng_template_1_Template, 2, 3, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(3, ManageSettingsComponent_ng_container_0_Conditional_13_ng_template_3_Template, 2, 3, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("title", t_r4("host-name-label"))("subtitle", t_r4("host-name-tooltip"));
  }
}
function ManageSettingsComponent_ng_container_0_Conditional_15_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const formControl_r5 = \u0275\u0275nextContext();
    \u0275\u0275textInterpolate1(" ", formControl_r5.value, " ");
  }
}
function ManageSettingsComponent_ng_container_0_Conditional_15_ng_template_3_Conditional_4_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r4 = \u0275\u0275nextContext(4).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(t_r4("base-url-validation"));
  }
}
function ManageSettingsComponent_ng_container_0_Conditional_15_ng_template_3_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16);
    \u0275\u0275template(1, ManageSettingsComponent_ng_container_0_Conditional_15_ng_template_3_Conditional_4_Conditional_1_Template, 2, 1, "div");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const formControl_r5 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275conditional((formControl_r5.errors == null ? null : formControl_r5.errors.pattern) ? 1 : -1);
  }
}
function ManageSettingsComponent_ng_container_0_Conditional_15_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 13);
    \u0275\u0275element(1, "input", 14);
    \u0275\u0275elementStart(2, "button", 15);
    \u0275\u0275listener("click", function ManageSettingsComponent_ng_container_0_Conditional_15_ng_template_3_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.resetBaseUrl());
    });
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(4, ManageSettingsComponent_ng_container_0_Conditional_15_ng_template_3_Conditional_4_Template, 2, 1, "div", 16);
  }
  if (rf & 2) {
    const formControl_r5 = \u0275\u0275nextContext();
    const t_r4 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275classProp("is-invalid", formControl_r5.invalid && !formControl_r5.untouched);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r4("reset"));
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.settingsForm.dirty || !ctx_r1.settingsForm.untouched ? 4 : -1);
  }
}
function ManageSettingsComponent_ng_container_0_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "app-setting-item", 9);
    \u0275\u0275template(1, ManageSettingsComponent_ng_container_0_Conditional_15_ng_template_1_Template, 1, 1, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(3, ManageSettingsComponent_ng_container_0_Conditional_15_ng_template_3_Template, 5, 4, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("title", t_r4("base-url-label"))("subtitle", t_r4("base-url-tooltip"));
  }
}
function ManageSettingsComponent_ng_container_0_Conditional_17_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const formControl_r7 = \u0275\u0275nextContext();
    \u0275\u0275textInterpolate1(" ", formControl_r7.value, " ");
  }
}
function ManageSettingsComponent_ng_container_0_Conditional_17_ng_template_3_Conditional_4_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r4 = \u0275\u0275nextContext(4).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(t_r4("ip-address-validation"));
  }
}
function ManageSettingsComponent_ng_container_0_Conditional_17_ng_template_3_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 18);
    \u0275\u0275template(1, ManageSettingsComponent_ng_container_0_Conditional_17_ng_template_3_Conditional_4_Conditional_1_Template, 2, 1, "div");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const formControl_r7 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275conditional((formControl_r7.errors == null ? null : formControl_r7.errors.pattern) ? 1 : -1);
  }
}
function ManageSettingsComponent_ng_container_0_Conditional_17_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 13);
    \u0275\u0275element(1, "input", 17);
    \u0275\u0275elementStart(2, "button", 15);
    \u0275\u0275listener("click", function ManageSettingsComponent_ng_container_0_Conditional_17_ng_template_3_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.resetIPAddresses());
    });
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(4, ManageSettingsComponent_ng_container_0_Conditional_17_ng_template_3_Conditional_4_Template, 2, 1, "div", 18);
  }
  if (rf & 2) {
    const formControl_r7 = \u0275\u0275nextContext();
    const t_r4 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275classProp("is-invalid", formControl_r7.invalid && !formControl_r7.untouched);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r4("reset"));
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.settingsForm.dirty || !ctx_r1.settingsForm.untouched ? 4 : -1);
  }
}
function ManageSettingsComponent_ng_container_0_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "app-setting-item", 9);
    \u0275\u0275template(1, ManageSettingsComponent_ng_container_0_Conditional_17_ng_template_1_Template, 1, 1, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(3, ManageSettingsComponent_ng_container_0_Conditional_17_ng_template_3_Template, 5, 4, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("title", t_r4("ip-address-label"))("subtitle", t_r4("ip-address-tooltip"));
  }
}
function ManageSettingsComponent_ng_container_0_Conditional_19_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const formControl_r9 = \u0275\u0275nextContext();
    \u0275\u0275textInterpolate1(" ", formControl_r9.value, " ");
  }
}
function ManageSettingsComponent_ng_container_0_Conditional_19_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "input", 19);
  }
}
function ManageSettingsComponent_ng_container_0_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "app-setting-item", 9);
    \u0275\u0275template(1, ManageSettingsComponent_ng_container_0_Conditional_19_ng_template_1_Template, 1, 1, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(3, ManageSettingsComponent_ng_container_0_Conditional_19_ng_template_3_Template, 1, 0, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("title", t_r4("port-label"))("subtitle", t_r4("port-tooltip"));
  }
}
function ManageSettingsComponent_ng_container_0_Conditional_25_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const formControl_r10 = \u0275\u0275nextContext();
    \u0275\u0275textInterpolate1(" ", formControl_r10.value, " ");
  }
}
function ManageSettingsComponent_ng_container_0_Conditional_25_ng_template_3_Conditional_1_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r4 = \u0275\u0275nextContext(4).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(t_r4("field-required"));
  }
}
function ManageSettingsComponent_ng_container_0_Conditional_25_ng_template_3_Conditional_1_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const formControl_r10 = \u0275\u0275nextContext(3);
    const t_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(t_r4("max-backup-validation", \u0275\u0275pureFunction1(1, _c0, formControl_r10.errors == null ? null : formControl_r10.errors.max == null ? null : formControl_r10.errors.max.max)));
  }
}
function ManageSettingsComponent_ng_container_0_Conditional_25_ng_template_3_Conditional_1_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r4 = \u0275\u0275nextContext(4).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(t_r4("min-backup-validation"));
  }
}
function ManageSettingsComponent_ng_container_0_Conditional_25_ng_template_3_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 21);
    \u0275\u0275template(1, ManageSettingsComponent_ng_container_0_Conditional_25_ng_template_3_Conditional_1_Conditional_1_Template, 2, 1, "div")(2, ManageSettingsComponent_ng_container_0_Conditional_25_ng_template_3_Conditional_1_Conditional_2_Template, 2, 3, "div")(3, ManageSettingsComponent_ng_container_0_Conditional_25_ng_template_3_Conditional_1_Conditional_3_Template, 2, 1, "div");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const formControl_r10 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275conditional((formControl_r10.errors == null ? null : formControl_r10.errors.required) ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional((formControl_r10.errors == null ? null : formControl_r10.errors.max) ? 2 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional((formControl_r10.errors == null ? null : formControl_r10.errors.min) ? 3 : -1);
  }
}
function ManageSettingsComponent_ng_container_0_Conditional_25_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "input", 20);
    \u0275\u0275template(1, ManageSettingsComponent_ng_container_0_Conditional_25_ng_template_3_Conditional_1_Template, 4, 3, "div", 21);
  }
  if (rf & 2) {
    const formControl_r10 = \u0275\u0275nextContext();
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("is-invalid", formControl_r10.invalid && !formControl_r10.untouched);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.settingsForm.dirty || !ctx_r1.settingsForm.untouched ? 1 : -1);
  }
}
function ManageSettingsComponent_ng_container_0_Conditional_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "app-setting-item", 9);
    \u0275\u0275template(1, ManageSettingsComponent_ng_container_0_Conditional_25_ng_template_1_Template, 1, 1, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(3, ManageSettingsComponent_ng_container_0_Conditional_25_ng_template_3_Template, 2, 3, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("title", t_r4("backup-label"))("subtitle", t_r4("backup-tooltip"));
  }
}
function ManageSettingsComponent_ng_container_0_Conditional_27_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const formControl_r11 = \u0275\u0275nextContext();
    \u0275\u0275textInterpolate1(" ", formControl_r11.value, " ");
  }
}
function ManageSettingsComponent_ng_container_0_Conditional_27_ng_template_3_Conditional_1_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r4 = \u0275\u0275nextContext(4).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(t_r4("field-required"));
  }
}
function ManageSettingsComponent_ng_container_0_Conditional_27_ng_template_3_Conditional_1_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const formControl_r11 = \u0275\u0275nextContext(3);
    const t_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(t_r4("max-logs-validation", \u0275\u0275pureFunction1(1, _c0, formControl_r11.errors == null ? null : formControl_r11.errors.max == null ? null : formControl_r11.errors.max.max)));
  }
}
function ManageSettingsComponent_ng_container_0_Conditional_27_ng_template_3_Conditional_1_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r4 = \u0275\u0275nextContext(4).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(t_r4("min-log-validation"));
  }
}
function ManageSettingsComponent_ng_container_0_Conditional_27_ng_template_3_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 23);
    \u0275\u0275template(1, ManageSettingsComponent_ng_container_0_Conditional_27_ng_template_3_Conditional_1_Conditional_1_Template, 2, 1, "div")(2, ManageSettingsComponent_ng_container_0_Conditional_27_ng_template_3_Conditional_1_Conditional_2_Template, 2, 3, "div")(3, ManageSettingsComponent_ng_container_0_Conditional_27_ng_template_3_Conditional_1_Conditional_3_Template, 2, 1, "div");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const formControl_r11 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275conditional((formControl_r11.errors == null ? null : formControl_r11.errors.required) ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional((formControl_r11.errors == null ? null : formControl_r11.errors.max) ? 2 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional((formControl_r11.errors == null ? null : formControl_r11.errors.min) ? 3 : -1);
  }
}
function ManageSettingsComponent_ng_container_0_Conditional_27_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "input", 22);
    \u0275\u0275template(1, ManageSettingsComponent_ng_container_0_Conditional_27_ng_template_3_Conditional_1_Template, 4, 3, "div", 23);
  }
  if (rf & 2) {
    const formControl_r11 = \u0275\u0275nextContext();
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("is-invalid", formControl_r11.invalid && !formControl_r11.untouched);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.settingsForm.dirty || !ctx_r1.settingsForm.untouched ? 1 : -1);
  }
}
function ManageSettingsComponent_ng_container_0_Conditional_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "app-setting-item", 9);
    \u0275\u0275template(1, ManageSettingsComponent_ng_container_0_Conditional_27_ng_template_1_Template, 1, 1, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(3, ManageSettingsComponent_ng_container_0_Conditional_27_ng_template_3_Template, 2, 3, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("title", t_r4("log-label"))("subtitle", t_r4("log-tooltip"));
  }
}
function ManageSettingsComponent_ng_container_0_Conditional_29_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "titlecase");
  }
  if (rf & 2) {
    const formControl_r12 = \u0275\u0275nextContext();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(1, 1, formControl_r12.value), " ");
  }
}
function ManageSettingsComponent_ng_container_0_Conditional_29_ng_template_3_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 25);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "titlecase");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const level_r13 = ctx.$implicit;
    \u0275\u0275property("value", level_r13);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 2, level_r13));
  }
}
function ManageSettingsComponent_ng_container_0_Conditional_29_ng_template_3_Conditional_3_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r4 = \u0275\u0275nextContext(4).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(t_r4("host-name-validation"));
  }
}
function ManageSettingsComponent_ng_container_0_Conditional_29_ng_template_3_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 26);
    \u0275\u0275template(1, ManageSettingsComponent_ng_container_0_Conditional_29_ng_template_3_Conditional_3_Conditional_1_Template, 2, 1, "div");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const formControl_r12 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275conditional((formControl_r12.errors == null ? null : formControl_r12.errors.pattern) ? 1 : -1);
  }
}
function ManageSettingsComponent_ng_container_0_Conditional_29_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "select", 24);
    \u0275\u0275repeaterCreate(1, ManageSettingsComponent_ng_container_0_Conditional_29_ng_template_3_For_2_Template, 3, 4, "option", 25, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, ManageSettingsComponent_ng_container_0_Conditional_29_ng_template_3_Conditional_3_Template, 2, 1, "div", 26);
  }
  if (rf & 2) {
    const formControl_r12 = \u0275\u0275nextContext();
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("is-invalid", formControl_r12.invalid && !formControl_r12.untouched);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.logLevels);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.settingsForm.dirty || !ctx_r1.settingsForm.untouched ? 3 : -1);
  }
}
function ManageSettingsComponent_ng_container_0_Conditional_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "app-setting-item", 9);
    \u0275\u0275template(1, ManageSettingsComponent_ng_container_0_Conditional_29_ng_template_1_Template, 2, 3, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(3, ManageSettingsComponent_ng_container_0_Conditional_29_ng_template_3_Template, 4, 3, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("title", t_r4("logging-level-label"))("subtitle", t_r4("logging-level-tooltip"));
  }
}
function ManageSettingsComponent_ng_container_0_Conditional_31_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const formControl_r14 = \u0275\u0275nextContext();
    \u0275\u0275textInterpolate1(" ", formControl_r14.value, " ");
  }
}
function ManageSettingsComponent_ng_container_0_Conditional_31_ng_template_3_Conditional_1_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r4 = \u0275\u0275nextContext(4).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(t_r4("field-required"));
  }
}
function ManageSettingsComponent_ng_container_0_Conditional_31_ng_template_3_Conditional_1_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r4 = \u0275\u0275nextContext(4).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(t_r4("min-cache-validation"));
  }
}
function ManageSettingsComponent_ng_container_0_Conditional_31_ng_template_3_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 28);
    \u0275\u0275template(1, ManageSettingsComponent_ng_container_0_Conditional_31_ng_template_3_Conditional_1_Conditional_1_Template, 2, 1, "div")(2, ManageSettingsComponent_ng_container_0_Conditional_31_ng_template_3_Conditional_1_Conditional_2_Template, 2, 1, "div");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const formControl_r14 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275conditional((formControl_r14.errors == null ? null : formControl_r14.errors.required) ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional((formControl_r14.errors == null ? null : formControl_r14.errors.min) ? 2 : -1);
  }
}
function ManageSettingsComponent_ng_container_0_Conditional_31_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "input", 27);
    \u0275\u0275template(1, ManageSettingsComponent_ng_container_0_Conditional_31_ng_template_3_Conditional_1_Template, 3, 2, "div", 28);
  }
  if (rf & 2) {
    const formControl_r14 = \u0275\u0275nextContext();
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("is-invalid", formControl_r14.invalid && !formControl_r14.untouched);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.settingsForm.dirty || !ctx_r1.settingsForm.untouched ? 1 : -1);
  }
}
function ManageSettingsComponent_ng_container_0_Conditional_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "app-setting-item", 9);
    \u0275\u0275template(1, ManageSettingsComponent_ng_container_0_Conditional_31_ng_template_1_Template, 1, 1, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(3, ManageSettingsComponent_ng_container_0_Conditional_31_ng_template_3_Template, 2, 3, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("title", t_r4("cache-size-label"))("subtitle", t_r4("cache-size-tooltip"));
  }
}
function ManageSettingsComponent_ng_container_0_Conditional_33_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 29);
    \u0275\u0275element(1, "input", 30);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r4 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance();
    \u0275\u0275attribute("aria-label", t_r4("opds-label"));
  }
}
function ManageSettingsComponent_ng_container_0_Conditional_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "app-setting-switch", 9);
    \u0275\u0275template(1, ManageSettingsComponent_ng_container_0_Conditional_33_ng_template_1_Template, 2, 1, "ng-template", null, 2, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("title", t_r4("opds-label"))("subtitle", t_r4("opds-tooltip"));
  }
}
function ManageSettingsComponent_ng_container_0_Conditional_35_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 29);
    \u0275\u0275element(1, "input", 31);
    \u0275\u0275elementEnd();
  }
}
function ManageSettingsComponent_ng_container_0_Conditional_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "app-setting-switch", 9);
    \u0275\u0275template(1, ManageSettingsComponent_ng_container_0_Conditional_35_ng_template_1_Template, 2, 0, "ng-template", null, 2, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("title", t_r4("folder-watching-label"))("subtitle", t_r4("folder-watching-tooltip"));
  }
}
function ManageSettingsComponent_ng_container_0_Conditional_37_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 29);
    \u0275\u0275element(1, "input", 32);
    \u0275\u0275elementEnd();
  }
}
function ManageSettingsComponent_ng_container_0_Conditional_37_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "app-setting-switch", 9);
    \u0275\u0275template(1, ManageSettingsComponent_ng_container_0_Conditional_37_ng_template_1_Template, 2, 0, "ng-template", null, 2, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r4 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("title", t_r4("allow-stats-label"))("subtitle", ctx_r1.allowStatsTooltip);
  }
}
function ManageSettingsComponent_ng_container_0_Conditional_43_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const formControl_r15 = \u0275\u0275nextContext();
    \u0275\u0275textInterpolate1(" ", formControl_r15.value, " ");
  }
}
function ManageSettingsComponent_ng_container_0_Conditional_43_ng_template_3_Conditional_1_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r4 = \u0275\u0275nextContext(4).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(t_r4("field-required"));
  }
}
function ManageSettingsComponent_ng_container_0_Conditional_43_ng_template_3_Conditional_1_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r4 = \u0275\u0275nextContext(4).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(t_r4("min-days-validation"));
  }
}
function ManageSettingsComponent_ng_container_0_Conditional_43_ng_template_3_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 34);
    \u0275\u0275template(1, ManageSettingsComponent_ng_container_0_Conditional_43_ng_template_3_Conditional_1_Conditional_1_Template, 2, 1, "div")(2, ManageSettingsComponent_ng_container_0_Conditional_43_ng_template_3_Conditional_1_Conditional_2_Template, 2, 1, "div");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const formControl_r15 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275conditional((formControl_r15.errors == null ? null : formControl_r15.errors.required) ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional((formControl_r15.errors == null ? null : formControl_r15.errors.min) ? 2 : -1);
  }
}
function ManageSettingsComponent_ng_container_0_Conditional_43_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "input", 33);
    \u0275\u0275template(1, ManageSettingsComponent_ng_container_0_Conditional_43_ng_template_3_Conditional_1_Template, 3, 2, "div", 34);
  }
  if (rf & 2) {
    const formControl_r15 = \u0275\u0275nextContext();
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("is-invalid", formControl_r15.invalid && !formControl_r15.untouched);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.settingsForm.dirty || !ctx_r1.settingsForm.untouched ? 1 : -1);
  }
}
function ManageSettingsComponent_ng_container_0_Conditional_43_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "app-setting-item", 9);
    \u0275\u0275template(1, ManageSettingsComponent_ng_container_0_Conditional_43_ng_template_1_Template, 1, 1, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(3, ManageSettingsComponent_ng_container_0_Conditional_43_ng_template_3_Template, 2, 3, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("title", t_r4("on-deck-last-progress-label"))("subtitle", t_r4("on-deck-last-progress-tooltip"));
  }
}
function ManageSettingsComponent_ng_container_0_Conditional_45_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const formControl_r16 = \u0275\u0275nextContext();
    \u0275\u0275textInterpolate1(" ", formControl_r16.value, " ");
  }
}
function ManageSettingsComponent_ng_container_0_Conditional_45_ng_template_3_Conditional_1_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r4 = \u0275\u0275nextContext(4).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(t_r4("field-required"));
  }
}
function ManageSettingsComponent_ng_container_0_Conditional_45_ng_template_3_Conditional_1_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r4 = \u0275\u0275nextContext(4).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(t_r4("min-days-validation"));
  }
}
function ManageSettingsComponent_ng_container_0_Conditional_45_ng_template_3_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 36);
    \u0275\u0275template(1, ManageSettingsComponent_ng_container_0_Conditional_45_ng_template_3_Conditional_1_Conditional_1_Template, 2, 1, "div")(2, ManageSettingsComponent_ng_container_0_Conditional_45_ng_template_3_Conditional_1_Conditional_2_Template, 2, 1, "div");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const formControl_r16 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275conditional((formControl_r16.errors == null ? null : formControl_r16.errors.required) ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional((formControl_r16.errors == null ? null : formControl_r16.errors.min) ? 2 : -1);
  }
}
function ManageSettingsComponent_ng_container_0_Conditional_45_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "input", 35);
    \u0275\u0275template(1, ManageSettingsComponent_ng_container_0_Conditional_45_ng_template_3_Conditional_1_Template, 3, 2, "div", 36);
  }
  if (rf & 2) {
    const formControl_r16 = \u0275\u0275nextContext();
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("is-invalid", formControl_r16.invalid && !formControl_r16.untouched);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.settingsForm.dirty || !ctx_r1.settingsForm.untouched ? 1 : -1);
  }
}
function ManageSettingsComponent_ng_container_0_Conditional_45_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "app-setting-item", 9);
    \u0275\u0275template(1, ManageSettingsComponent_ng_container_0_Conditional_45_ng_template_1_Template, 1, 1, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(3, ManageSettingsComponent_ng_container_0_Conditional_45_ng_template_3_Template, 2, 3, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("title", t_r4("on-deck-last-chapter-add-label"))("subtitle", t_r4("on-deck-last-chapter-add-tooltip"));
  }
}
function ManageSettingsComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 4)(2, "button", 5);
    \u0275\u0275listener("click", function ManageSettingsComponent_ng_container_0_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.resetToDefaults());
    });
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "form", 6)(5, "div", 7)(6, "strong");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "h4");
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerStart(11);
    \u0275\u0275elementStart(12, "div", 8);
    \u0275\u0275template(13, ManageSettingsComponent_ng_container_0_Conditional_13_Template, 5, 2, "app-setting-item", 9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "div", 8);
    \u0275\u0275template(15, ManageSettingsComponent_ng_container_0_Conditional_15_Template, 5, 2, "app-setting-item", 9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "div", 8);
    \u0275\u0275template(17, ManageSettingsComponent_ng_container_0_Conditional_17_Template, 5, 2, "app-setting-item", 9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "div", 8);
    \u0275\u0275template(19, ManageSettingsComponent_ng_container_0_Conditional_19_Template, 5, 2, "app-setting-item", 9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
    \u0275\u0275element(20, "div", 10);
    \u0275\u0275elementStart(21, "h4");
    \u0275\u0275text(22);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerStart(23);
    \u0275\u0275elementStart(24, "div", 8);
    \u0275\u0275template(25, ManageSettingsComponent_ng_container_0_Conditional_25_Template, 5, 2, "app-setting-item", 9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "div", 8);
    \u0275\u0275template(27, ManageSettingsComponent_ng_container_0_Conditional_27_Template, 5, 2, "app-setting-item", 9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "div", 8);
    \u0275\u0275template(29, ManageSettingsComponent_ng_container_0_Conditional_29_Template, 5, 2, "app-setting-item", 9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "div", 8);
    \u0275\u0275template(31, ManageSettingsComponent_ng_container_0_Conditional_31_Template, 5, 2, "app-setting-item", 9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "div", 8);
    \u0275\u0275template(33, ManageSettingsComponent_ng_container_0_Conditional_33_Template, 3, 2, "app-setting-switch", 9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "div", 8);
    \u0275\u0275template(35, ManageSettingsComponent_ng_container_0_Conditional_35_Template, 3, 2, "app-setting-switch", 9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "div", 8);
    \u0275\u0275template(37, ManageSettingsComponent_ng_container_0_Conditional_37_Template, 3, 2, "app-setting-switch", 9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
    \u0275\u0275element(38, "div", 10);
    \u0275\u0275elementStart(39, "h4");
    \u0275\u0275text(40);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerStart(41);
    \u0275\u0275elementStart(42, "div", 8);
    \u0275\u0275template(43, ManageSettingsComponent_ng_container_0_Conditional_43_Template, 5, 2, "app-setting-item", 9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(44, "div", 8);
    \u0275\u0275template(45, ManageSettingsComponent_ng_container_0_Conditional_45_Template, 5, 2, "app-setting-item", 9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    let tmp_7_0;
    let tmp_8_0;
    let tmp_9_0;
    let tmp_10_0;
    let tmp_12_0;
    let tmp_13_0;
    let tmp_14_0;
    let tmp_15_0;
    let tmp_16_0;
    let tmp_17_0;
    let tmp_18_0;
    let tmp_20_0;
    let tmp_21_0;
    const t_r4 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(t_r4("reset-to-default"));
    \u0275\u0275advance();
    \u0275\u0275property("formGroup", ctx_r1.settingsForm);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(t_r4("notice"));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", t_r4("restart-required"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r4("networking-settings-title"));
    \u0275\u0275advance(3);
    \u0275\u0275conditional((tmp_7_0 = ctx_r1.settingsForm.get("hostName")) ? 13 : -1, tmp_7_0);
    \u0275\u0275advance(2);
    \u0275\u0275conditional((tmp_8_0 = ctx_r1.settingsForm.get("baseUrl")) ? 15 : -1, tmp_8_0);
    \u0275\u0275advance(2);
    \u0275\u0275conditional((tmp_9_0 = ctx_r1.settingsForm.get("ipAddresses")) ? 17 : -1, tmp_9_0);
    \u0275\u0275advance(2);
    \u0275\u0275conditional((tmp_10_0 = ctx_r1.settingsForm.get("port")) ? 19 : -1, tmp_10_0);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(t_r4("system-settings-title"));
    \u0275\u0275advance(3);
    \u0275\u0275conditional((tmp_12_0 = ctx_r1.settingsForm.get("totalBackups")) ? 25 : -1, tmp_12_0);
    \u0275\u0275advance(2);
    \u0275\u0275conditional((tmp_13_0 = ctx_r1.settingsForm.get("totalLogs")) ? 27 : -1, tmp_13_0);
    \u0275\u0275advance(2);
    \u0275\u0275conditional((tmp_14_0 = ctx_r1.settingsForm.get("loggingLevel")) ? 29 : -1, tmp_14_0);
    \u0275\u0275advance(2);
    \u0275\u0275conditional((tmp_15_0 = ctx_r1.settingsForm.get("cacheSize")) ? 31 : -1, tmp_15_0);
    \u0275\u0275advance(2);
    \u0275\u0275conditional((tmp_16_0 = ctx_r1.settingsForm.get("enableOpds")) ? 33 : -1, tmp_16_0);
    \u0275\u0275advance(2);
    \u0275\u0275conditional((tmp_17_0 = ctx_r1.settingsForm.get("enableFolderWatching")) ? 35 : -1, tmp_17_0);
    \u0275\u0275advance(2);
    \u0275\u0275conditional((tmp_18_0 = ctx_r1.settingsForm.get("allowStatCollection")) ? 37 : -1, tmp_18_0);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(t_r4("customization-settings-title"));
    \u0275\u0275advance(3);
    \u0275\u0275conditional((tmp_20_0 = ctx_r1.settingsForm.get("onDeckProgressDays")) ? 43 : -1, tmp_20_0);
    \u0275\u0275advance(2);
    \u0275\u0275conditional((tmp_21_0 = ctx_r1.settingsForm.get("onDeckUpdateDays")) ? 45 : -1, tmp_21_0);
  }
}
var ValidIpAddress = /^(\s*((([12]?\d{1,2}\.){3}[12]?\d{1,2})|(([\da-f]{0,4}\:){0,7}([\da-f]{0,4})))\s*\,)*\s*((([12]?\d{1,2}\.){3}[12]?\d{1,2})|(([\da-f]{0,4}\:){0,7}([\da-f]{0,4})))\s*$/i;
var ManageSettingsComponent = class _ManageSettingsComponent {
  constructor() {
    this.translocoService = inject(TranslocoService);
    this.cdRef = inject(ChangeDetectorRef);
    this.settingsService = inject(SettingsService);
    this.toastr = inject(ToastrService);
    this.serverService = inject(ServerService);
    this.confirmService = inject(ConfirmService);
    this.destroyRef = inject(DestroyRef);
    this.WikiLink = WikiLink;
    this.settingsForm = new FormGroup({});
    this.taskFrequencies = [];
    this.logLevels = [];
    this.allowStatsTooltip = translate("manage-settings.allow-stats-tooltip-part-1") + ' <a href="' + WikiLink.DataCollection + '" rel="noopener noreferrer" target="_blank">wiki</a> ' + translate("manage-settings.allow-stats-tooltip-part-2");
  }
  ngOnInit() {
    this.settingsService.getTaskFrequencies().pipe(take(1)).subscribe((frequencies) => {
      this.taskFrequencies = frequencies;
      this.cdRef.markForCheck();
    });
    this.settingsService.getLoggingLevels().pipe(take(1)).subscribe((levels) => {
      this.logLevels = levels;
      this.cdRef.markForCheck();
    });
    this.settingsService.getServerSettings().pipe(take(1)).subscribe((settings) => {
      this.serverSettings = settings;
      this.settingsForm.addControl("cacheDirectory", new FormControl(this.serverSettings.cacheDirectory, [Validators.required]));
      this.settingsForm.addControl("taskScan", new FormControl(this.serverSettings.taskScan, [Validators.required]));
      this.settingsForm.addControl("taskBackup", new FormControl(this.serverSettings.taskBackup, [Validators.required]));
      this.settingsForm.addControl("taskCleanup", new FormControl(this.serverSettings.taskCleanup, [Validators.required]));
      this.settingsForm.addControl("ipAddresses", new FormControl(this.serverSettings.ipAddresses, [Validators.required, Validators.pattern(ValidIpAddress)]));
      this.settingsForm.addControl("port", new FormControl(this.serverSettings.port, [Validators.required]));
      this.settingsForm.addControl("loggingLevel", new FormControl(this.serverSettings.loggingLevel, [Validators.required]));
      this.settingsForm.addControl("allowStatCollection", new FormControl(this.serverSettings.allowStatCollection, [Validators.required]));
      this.settingsForm.addControl("enableOpds", new FormControl(this.serverSettings.enableOpds, [Validators.required]));
      this.settingsForm.addControl("baseUrl", new FormControl(this.serverSettings.baseUrl, [Validators.pattern(/^(\/[\w-]+)*\/$/)]));
      this.settingsForm.addControl("totalBackups", new FormControl(this.serverSettings.totalBackups, [Validators.required, Validators.min(1), Validators.max(30)]));
      this.settingsForm.addControl("cacheSize", new FormControl(this.serverSettings.cacheSize, [Validators.required, Validators.min(50)]));
      this.settingsForm.addControl("totalLogs", new FormControl(this.serverSettings.totalLogs, [Validators.required, Validators.min(1), Validators.max(30)]));
      this.settingsForm.addControl("enableFolderWatching", new FormControl(this.serverSettings.enableFolderWatching, [Validators.required]));
      this.settingsForm.addControl("encodeMediaAs", new FormControl(this.serverSettings.encodeMediaAs, []));
      this.settingsForm.addControl("hostName", new FormControl(this.serverSettings.hostName, [Validators.pattern(/^(http:|https:)+[^\s]+[\w]$/)]));
      this.settingsForm.addControl("onDeckProgressDays", new FormControl(this.serverSettings.onDeckProgressDays, [Validators.required]));
      this.settingsForm.addControl("onDeckUpdateDays", new FormControl(this.serverSettings.onDeckUpdateDays, [Validators.required]));
      this.settingsForm.valueChanges.pipe(distinctUntilChanged(), debounceTime(300), filter((_) => this.settingsForm.valid), takeUntilDestroyed(this.destroyRef), switchMap((_) => {
        const data = this.packData();
        return this.settingsService.updateServerSettings(data);
      }), tap((settings2) => {
        this.serverSettings = settings2;
        this.resetForm();
        this.cdRef.markForCheck();
      })).subscribe();
      this.serverService.getServerInfo().subscribe((info) => {
        if (info.isDocker) {
          this.settingsForm.get("ipAddresses")?.disable();
          this.settingsForm.get("port")?.disable();
          this.cdRef.markForCheck();
        }
      });
      this.cdRef.markForCheck();
    });
    this.cdRef.markForCheck();
  }
  resetForm() {
    this.settingsForm.get("cacheDirectory")?.setValue(this.serverSettings.cacheDirectory, { onlySelf: true, emitEvent: false });
    this.settingsForm.get("scanTask")?.setValue(this.serverSettings.taskScan, { onlySelf: true, emitEvent: false });
    this.settingsForm.get("taskBackup")?.setValue(this.serverSettings.taskBackup, { onlySelf: true, emitEvent: false });
    this.settingsForm.get("taskCleanup")?.setValue(this.serverSettings.taskCleanup, { onlySelf: true, emitEvent: false });
    this.settingsForm.get("ipAddresses")?.setValue(this.serverSettings.ipAddresses, { onlySelf: true, emitEvent: false });
    this.settingsForm.get("port")?.setValue(this.serverSettings.port, { onlySelf: true, emitEvent: false });
    this.settingsForm.get("loggingLevel")?.setValue(this.serverSettings.loggingLevel, { onlySelf: true, emitEvent: false });
    this.settingsForm.get("allowStatCollection")?.setValue(this.serverSettings.allowStatCollection, { onlySelf: true, emitEvent: false });
    this.settingsForm.get("enableOpds")?.setValue(this.serverSettings.enableOpds, { onlySelf: true, emitEvent: false });
    this.settingsForm.get("baseUrl")?.setValue(this.serverSettings.baseUrl, { onlySelf: true, emitEvent: false });
    this.settingsForm.get("emailServiceUrl")?.setValue(this.serverSettings.emailServiceUrl, { onlySelf: true, emitEvent: false });
    this.settingsForm.get("totalBackups")?.setValue(this.serverSettings.totalBackups, { onlySelf: true, emitEvent: false });
    this.settingsForm.get("totalLogs")?.setValue(this.serverSettings.totalLogs, { onlySelf: true, emitEvent: false });
    this.settingsForm.get("enableFolderWatching")?.setValue(this.serverSettings.enableFolderWatching, { onlySelf: true, emitEvent: false });
    this.settingsForm.get("encodeMediaAs")?.setValue(this.serverSettings.encodeMediaAs, { onlySelf: true, emitEvent: false });
    this.settingsForm.get("hostName")?.setValue(this.serverSettings.hostName, { onlySelf: true, emitEvent: false });
    this.settingsForm.get("cacheSize")?.setValue(this.serverSettings.cacheSize, { onlySelf: true, emitEvent: false });
    this.settingsForm.get("onDeckProgressDays")?.setValue(this.serverSettings.onDeckProgressDays, { onlySelf: true, emitEvent: false });
    this.settingsForm.get("onDeckUpdateDays")?.setValue(this.serverSettings.onDeckUpdateDays, { onlySelf: true, emitEvent: false });
    this.settingsForm.markAsPristine();
    this.cdRef.markForCheck();
  }
  packData() {
    const modelSettings = this.settingsForm.value;
    modelSettings.bookmarksDirectory = this.serverSettings.bookmarksDirectory;
    modelSettings.smtpConfig = this.serverSettings.smtpConfig;
    return modelSettings;
  }
  resetToDefaults() {
    return __async(this, null, function* () {
      if (!(yield this.confirmService.confirm(translate("toasts.confirm-reset-server-settings"))))
        return;
      this.settingsService.resetServerSettings().subscribe((settings) => {
        this.serverSettings = settings;
        this.resetForm();
        this.toastr.success(this.translocoService.translate("toasts.server-settings-updated"));
      }, (err) => {
        console.error("error: ", err);
      });
    });
  }
  resetIPAddresses() {
    this.settingsService.resetIPAddressesSettings().pipe(take(1)).subscribe((settings) => {
      this.serverSettings.ipAddresses = settings.ipAddresses;
      this.settingsForm.get("ipAddresses")?.setValue(this.serverSettings.ipAddresses);
      this.toastr.success(this.translocoService.translate("toasts.reset-ip-address"));
    }, (err) => {
      console.error("error: ", err);
    });
  }
  resetBaseUrl() {
    this.settingsService.resetBaseUrl().pipe(take(1)).subscribe((settings) => {
      this.serverSettings.baseUrl = settings.baseUrl;
      this.settingsForm.get("baseUrl")?.setValue(this.serverSettings.baseUrl);
      this.toastr.success(this.translocoService.translate("toasts.reset-base-url"));
      this.cdRef.markForCheck();
    }, (err) => {
      console.error("error: ", err);
    });
  }
  static {
    this.\u0275fac = function ManageSettingsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ManageSettingsComponent)();
    };
  }
  static {
    this.\u0275cmp = \u0275\u0275defineComponent({ type: _ManageSettingsComponent, selectors: [["app-manage-settings"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 1, vars: 1, consts: [["view", ""], ["edit", ""], ["switch", ""], [4, "transloco", "translocoRead"], [1, "position-relative"], ["type", "button", 1, "btn", "btn-primary-outline", "position-absolute", "custom-position", 3, "click"], [3, "formGroup"], ["role", "alert", 1, "alert", "alert-warning"], [1, "row", "g-0", "mt-4", "mb-4"], [3, "title", "subtitle"], [1, "setting-section-break"], ["id", "settings-hostname", "aria-describedby", "settings-hostname-help", "formControlName", "hostName", "type", "text", "appEnterBlur", "", 1, "form-control"], ["id", "hostname-validations", 1, "invalid-feedback"], [1, "input-group"], ["id", "settings-baseurl", "aria-describedby", "settings-baseurl-help", "formControlName", "baseUrl", "type", "text", "appEnterBlur", "", 1, "form-control"], ["type", "button", 1, "btn", "btn-outline-secondary", 3, "click"], ["id", "baseurl-validations", 1, "invalid-feedback"], ["id", "settings-ipaddresses", "aria-describedby", "settings-ipaddresses-help", "formControlName", "ipAddresses", "type", "text", "appEnterBlur", "", 1, "form-control"], ["id", "ipaddresses-validations", 1, "invalid-feedback"], ["id", "settings-port", "aria-describedby", "settings-port-help", "formControlName", "port", "type", "number", "step", "1", "min", "1", "onkeypress", "return event.charCode >= 48 && event.charCode <= 57", "appEnterBlur", "", 1, "form-control"], ["id", "settings-backup", "aria-describedby", "total-backups-validations", "formControlName", "totalBackups", "type", "number", "inputmode", "numeric", "step", "1", "min", "1", "max", "30", "onkeypress", "return event.charCode >= 48 && event.charCode <= 57", "appEnterBlur", "", 1, "form-control"], ["id", "total-backups-validations", 1, "invalid-feedback"], ["id", "settings-logs", "aria-describedby", "total-logs-validations", "formControlName", "totalLogs", "type", "number", "inputmode", "numeric", "step", "1", "min", "1", "max", "30", "onkeypress", "return event.charCode >= 48 && event.charCode <= 57", "appEnterBlur", "", 1, "form-control"], ["id", "total-logs-validations", 1, "invalid-feedback"], ["id", "logging-level", "aria-describedby", "logging-level-help", "formControlName", "loggingLevel", 1, "form-select"], [3, "value"], ["id", "logging-level-validations", 1, "invalid-feedback"], ["id", "setting-cache-size", "aria-describedby", "cache-size-help", "formControlName", "cacheSize", "type", "number", "inputmode", "numeric", "step", "5", "min", "50", "onkeypress", "return event.charCode >= 48 && event.charCode <= 57", "appEnterBlur", "", 1, "form-control"], ["id", "cache-size-validations", 1, "invalid-feedback"], [1, "form-check", "form-switch", "float-end"], ["id", "opds", "type", "checkbox", "formControlName", "enableOpds", 1, "form-check-input"], ["id", "folder-watching", "type", "checkbox", "formControlName", "enableFolderWatching", "role", "switch", 1, "form-check-input"], ["id", "stat-collection", "type", "checkbox", "formControlName", "allowStatCollection", "role", "switch", 1, "form-check-input"], ["id", "setting-on-deck-progress-days", "aria-describedby", "on-deck-progress-days-validations", "formControlName", "onDeckProgressDays", "type", "number", "inputmode", "numeric", "step", "1", "min", "1", "onkeypress", "return event.charCode >= 48 && event.charCode <= 57", "appEnterBlur", "", 1, "form-control"], ["id", "on-deck-last-progress-validations", 1, "invalid-feedback"], ["id", "on-deck-last-chapter-add", "aria-describedby", "on-deck-last-chapter-add-validations", "formControlName", "onDeckUpdateDays", "type", "number", "inputmode", "numeric", "step", "1", "min", "1", "onkeypress", "return event.charCode >= 48 && event.charCode <= 57", "appEnterBlur", "", 1, "form-control"], ["id", "on-deck-last-chapter-add-validations", 1, "invalid-feedback"]], template: function ManageSettingsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, ManageSettingsComponent_ng_container_0_Template, 46, 20, "ng-container", 3);
      }
      if (rf & 2) {
        \u0275\u0275property("translocoRead", "manage-settings");
      }
    }, dependencies: [ReactiveFormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor, CheckboxControlValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, MinValidator, MaxValidator, FormGroupDirective, FormControlName, TitleCasePipe, TranslocoModule, TranslocoDirective, SettingItemComponent, SettingSwitchComponent, DefaultValuePipe, EnterBlurDirective], styles: ["\n\n.invalid-feedback[_ngcontent-%COMP%] {\n  display: inherit;\n}\n.custom-position[_ngcontent-%COMP%] {\n  right: 5px;\n  top: -42px;\n}\n/*# sourceMappingURL=manage-settings.component.css.map */"], changeDetection: 0 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ManageSettingsComponent, { className: "ManageSettingsComponent", filePath: "src/app/admin/manage-settings/manage-settings.component.ts", lineNumber: 29 });
})();
export {
  ManageSettingsComponent
};
//# sourceMappingURL=manage-settings.component-HLXVMX7F.js.map
