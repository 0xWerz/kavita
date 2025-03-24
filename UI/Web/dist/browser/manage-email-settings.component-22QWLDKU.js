import {
  BytesPipe
} from "./chunk-C423WP7Y.js";
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
  MinValidator,
  NgControlStatus,
  NgControlStatusGroup,
  NumberValueAccessor,
  ReactiveFormsModule,
  Validators,
  ɵNgNoValidate
} from "./chunk-BPOUBDX2.js";
import "./chunk-CQADFT7F.js";
import {
  ChangeDetectorRef,
  DestroyRef,
  TranslocoDirective,
  TranslocoModule,
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
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-PYHIUVNJ.js";

// src/app/admin/manage-email-settings/manage-email-settings.component.ts
function ManageEmailSettingsComponent_ng_container_0_Conditional_10_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "defaultValue");
  }
  if (rf & 2) {
    const formControl_r3 = \u0275\u0275nextContext();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(1, 1, formControl_r3.value), " ");
  }
}
function ManageEmailSettingsComponent_ng_container_0_Conditional_10_ng_template_3_Conditional_6_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r5 = \u0275\u0275nextContext(4).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(t_r5("host-name-validation"));
  }
}
function ManageEmailSettingsComponent_ng_container_0_Conditional_10_ng_template_3_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16);
    \u0275\u0275template(1, ManageEmailSettingsComponent_ng_container_0_Conditional_10_ng_template_3_Conditional_6_Conditional_1_Template, 2, 1, "div");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.pattern ? 1 : -1);
  }
}
function ManageEmailSettingsComponent_ng_container_0_Conditional_10_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 13);
    \u0275\u0275element(1, "input", 14);
    \u0275\u0275elementStart(2, "button", 15);
    \u0275\u0275listener("click", function ManageEmailSettingsComponent_ng_container_0_Conditional_10_ng_template_3_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.autofillGmail());
    });
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 15);
    \u0275\u0275listener("click", function ManageEmailSettingsComponent_ng_container_0_Conditional_10_ng_template_3_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.autofillOutlook());
    });
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(6, ManageEmailSettingsComponent_ng_container_0_Conditional_10_ng_template_3_Conditional_6_Template, 2, 1, "div", 16);
  }
  if (rf & 2) {
    let tmp_10_0;
    const formControl_r3 = \u0275\u0275nextContext();
    const t_r5 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275classProp("is-invalid", formControl_r3.invalid && !formControl_r3.untouched);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r5("gmail-label"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r5("outlook-label"));
    \u0275\u0275advance();
    \u0275\u0275conditional((tmp_10_0 = formControl_r3.errors) ? 6 : -1, tmp_10_0);
  }
}
function ManageEmailSettingsComponent_ng_container_0_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "app-setting-item", 9);
    \u0275\u0275template(1, ManageEmailSettingsComponent_ng_container_0_Conditional_10_ng_template_1_Template, 2, 3, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(3, ManageEmailSettingsComponent_ng_container_0_Conditional_10_ng_template_3_Template, 7, 5, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r5 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("title", t_r5("host-name-label"))("subtitle", t_r5("host-name-tooltip"))("control", ctx);
  }
}
function ManageEmailSettingsComponent_ng_container_0_Conditional_12_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "defaultValue");
  }
  if (rf & 2) {
    const formControl_r6 = \u0275\u0275nextContext();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(1, 1, formControl_r6.value), " ");
  }
}
function ManageEmailSettingsComponent_ng_container_0_Conditional_12_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "input", 17);
  }
}
function ManageEmailSettingsComponent_ng_container_0_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "app-setting-item", 10);
    \u0275\u0275template(1, ManageEmailSettingsComponent_ng_container_0_Conditional_12_ng_template_1_Template, 2, 3, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(3, ManageEmailSettingsComponent_ng_container_0_Conditional_12_ng_template_3_Template, 1, 0, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r5 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("title", t_r5("sender-address-label"))("subtitle", t_r5("sender-address-tooltip"));
  }
}
function ManageEmailSettingsComponent_ng_container_0_Conditional_14_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "defaultValue");
  }
  if (rf & 2) {
    const formControl_r7 = \u0275\u0275nextContext();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(1, 1, formControl_r7.value), " ");
  }
}
function ManageEmailSettingsComponent_ng_container_0_Conditional_14_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "input", 18);
  }
}
function ManageEmailSettingsComponent_ng_container_0_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "app-setting-item", 10);
    \u0275\u0275template(1, ManageEmailSettingsComponent_ng_container_0_Conditional_14_ng_template_1_Template, 2, 3, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(3, ManageEmailSettingsComponent_ng_container_0_Conditional_14_ng_template_3_Template, 1, 0, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r5 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("title", t_r5("sender-displayname-label"))("subtitle", t_r5("sender-displayname-tooltip"));
  }
}
function ManageEmailSettingsComponent_ng_container_0_Conditional_16_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "defaultValue");
  }
  if (rf & 2) {
    const formControl_r8 = \u0275\u0275nextContext();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(1, 1, formControl_r8.value), " ");
  }
}
function ManageEmailSettingsComponent_ng_container_0_Conditional_16_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "input", 19);
  }
}
function ManageEmailSettingsComponent_ng_container_0_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "app-setting-item", 10);
    \u0275\u0275template(1, ManageEmailSettingsComponent_ng_container_0_Conditional_16_ng_template_1_Template, 2, 3, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(3, ManageEmailSettingsComponent_ng_container_0_Conditional_16_ng_template_3_Template, 1, 0, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r5 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("title", t_r5("host-label"))("subtitle", t_r5("host-tooltip"));
  }
}
function ManageEmailSettingsComponent_ng_container_0_Conditional_18_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "defaultValue");
  }
  if (rf & 2) {
    const formControl_r9 = \u0275\u0275nextContext();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(1, 1, formControl_r9.value), " ");
  }
}
function ManageEmailSettingsComponent_ng_container_0_Conditional_18_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "input", 20);
  }
}
function ManageEmailSettingsComponent_ng_container_0_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "app-setting-item", 11);
    \u0275\u0275template(1, ManageEmailSettingsComponent_ng_container_0_Conditional_18_ng_template_1_Template, 2, 3, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(3, ManageEmailSettingsComponent_ng_container_0_Conditional_18_ng_template_3_Template, 1, 0, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r5 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("title", t_r5("port-label"));
  }
}
function ManageEmailSettingsComponent_ng_container_0_Conditional_20_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 21);
    \u0275\u0275element(1, "input", 22);
    \u0275\u0275elementEnd();
  }
}
function ManageEmailSettingsComponent_ng_container_0_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "app-setting-switch", 12);
    \u0275\u0275template(1, ManageEmailSettingsComponent_ng_container_0_Conditional_20_ng_template_1_Template, 2, 0, "ng-template", null, 2, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r5 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("title", t_r5("enable-ssl-label"));
  }
}
function ManageEmailSettingsComponent_ng_container_0_Conditional_22_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "defaultValue");
  }
  if (rf & 2) {
    const formControl_r10 = \u0275\u0275nextContext();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(1, 1, formControl_r10.value), " ");
  }
}
function ManageEmailSettingsComponent_ng_container_0_Conditional_22_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "input", 23);
  }
}
function ManageEmailSettingsComponent_ng_container_0_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "app-setting-item", 10);
    \u0275\u0275template(1, ManageEmailSettingsComponent_ng_container_0_Conditional_22_ng_template_1_Template, 2, 3, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(3, ManageEmailSettingsComponent_ng_container_0_Conditional_22_ng_template_3_Template, 1, 0, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r5 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("title", t_r5("username-label"))("subtitle", t_r5("username-tooltip"));
  }
}
function ManageEmailSettingsComponent_ng_container_0_Conditional_24_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "defaultValue");
  }
  if (rf & 2) {
    const formControl_r11 = \u0275\u0275nextContext();
    \u0275\u0275textInterpolate1(" ", formControl_r11.value ? "********" : \u0275\u0275pipeBind1(1, 1, null), " ");
  }
}
function ManageEmailSettingsComponent_ng_container_0_Conditional_24_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "input", 24);
  }
}
function ManageEmailSettingsComponent_ng_container_0_Conditional_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "app-setting-item", 11);
    \u0275\u0275template(1, ManageEmailSettingsComponent_ng_container_0_Conditional_24_ng_template_1_Template, 2, 3, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(3, ManageEmailSettingsComponent_ng_container_0_Conditional_24_ng_template_3_Template, 1, 0, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r5 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("title", t_r5("password-label"));
  }
}
function ManageEmailSettingsComponent_ng_container_0_Conditional_26_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "bytes");
  }
  if (rf & 2) {
    const formControl_r12 = \u0275\u0275nextContext();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(1, 1, formControl_r12.value), " ");
  }
}
function ManageEmailSettingsComponent_ng_container_0_Conditional_26_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "input", 25);
  }
}
function ManageEmailSettingsComponent_ng_container_0_Conditional_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "app-setting-item", 10);
    \u0275\u0275template(1, ManageEmailSettingsComponent_ng_container_0_Conditional_26_ng_template_1_Template, 2, 3, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(3, ManageEmailSettingsComponent_ng_container_0_Conditional_26_ng_template_3_Template, 1, 0, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r5 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("title", t_r5("size-limit-label"))("subtitle", t_r5("size-limit-tooltip"));
  }
}
function ManageEmailSettingsComponent_ng_container_0_Conditional_28_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 21);
    \u0275\u0275element(1, "input", 26);
    \u0275\u0275elementEnd();
  }
}
function ManageEmailSettingsComponent_ng_container_0_Conditional_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "app-setting-switch", 10);
    \u0275\u0275template(1, ManageEmailSettingsComponent_ng_container_0_Conditional_28_ng_template_1_Template, 2, 0, "ng-template", null, 2, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r5 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("title", t_r5("customized-templates-label"))("subtitle", t_r5("customized-templates-tooltip"));
  }
}
function ManageEmailSettingsComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 4)(2, "button", 5);
    \u0275\u0275listener("click", function ManageEmailSettingsComponent_ng_container_0_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.test());
    });
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "p");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "form", 6)(7, "p", 7);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 8);
    \u0275\u0275template(10, ManageEmailSettingsComponent_ng_container_0_Conditional_10_Template, 5, 3, "app-setting-item", 9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 8);
    \u0275\u0275template(12, ManageEmailSettingsComponent_ng_container_0_Conditional_12_Template, 5, 2, "app-setting-item", 10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div", 8);
    \u0275\u0275template(14, ManageEmailSettingsComponent_ng_container_0_Conditional_14_Template, 5, 2, "app-setting-item", 10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "div", 8);
    \u0275\u0275template(16, ManageEmailSettingsComponent_ng_container_0_Conditional_16_Template, 5, 2, "app-setting-item", 10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "div", 8);
    \u0275\u0275template(18, ManageEmailSettingsComponent_ng_container_0_Conditional_18_Template, 5, 1, "app-setting-item", 11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "div", 8);
    \u0275\u0275template(20, ManageEmailSettingsComponent_ng_container_0_Conditional_20_Template, 3, 1, "app-setting-switch", 12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "div", 8);
    \u0275\u0275template(22, ManageEmailSettingsComponent_ng_container_0_Conditional_22_Template, 5, 2, "app-setting-item", 10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "div", 8);
    \u0275\u0275template(24, ManageEmailSettingsComponent_ng_container_0_Conditional_24_Template, 5, 1, "app-setting-item", 11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "div", 8);
    \u0275\u0275template(26, ManageEmailSettingsComponent_ng_container_0_Conditional_26_Template, 5, 2, "app-setting-item", 10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "div", 8);
    \u0275\u0275template(28, ManageEmailSettingsComponent_ng_container_0_Conditional_28_Template, 3, 2, "app-setting-switch", 10);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    let tmp_6_0;
    let tmp_7_0;
    let tmp_8_0;
    let tmp_9_0;
    let tmp_10_0;
    let tmp_11_0;
    let tmp_12_0;
    let tmp_13_0;
    let tmp_14_0;
    let tmp_15_0;
    const t_r5 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(t_r5("test"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r5("description"));
    \u0275\u0275advance();
    \u0275\u0275property("formGroup", ctx_r1.settingsForm);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", t_r5("setting-description"), " ", t_r5("test-warning"), "");
    \u0275\u0275advance(2);
    \u0275\u0275conditional((tmp_6_0 = ctx_r1.settingsForm.get("hostName")) ? 10 : -1, tmp_6_0);
    \u0275\u0275advance(2);
    \u0275\u0275conditional((tmp_7_0 = ctx_r1.settingsForm.get("senderAddress")) ? 12 : -1, tmp_7_0);
    \u0275\u0275advance(2);
    \u0275\u0275conditional((tmp_8_0 = ctx_r1.settingsForm.get("senderDisplayName")) ? 14 : -1, tmp_8_0);
    \u0275\u0275advance(2);
    \u0275\u0275conditional((tmp_9_0 = ctx_r1.settingsForm.get("host")) ? 16 : -1, tmp_9_0);
    \u0275\u0275advance(2);
    \u0275\u0275conditional((tmp_10_0 = ctx_r1.settingsForm.get("port")) ? 18 : -1, tmp_10_0);
    \u0275\u0275advance(2);
    \u0275\u0275conditional((tmp_11_0 = ctx_r1.settingsForm.get("enableSsl")) ? 20 : -1, tmp_11_0);
    \u0275\u0275advance(2);
    \u0275\u0275conditional((tmp_12_0 = ctx_r1.settingsForm.get("userName")) ? 22 : -1, tmp_12_0);
    \u0275\u0275advance(2);
    \u0275\u0275conditional((tmp_13_0 = ctx_r1.settingsForm.get("password")) ? 24 : -1, tmp_13_0);
    \u0275\u0275advance(2);
    \u0275\u0275conditional((tmp_14_0 = ctx_r1.settingsForm.get("sizeLimit")) ? 26 : -1, tmp_14_0);
    \u0275\u0275advance(2);
    \u0275\u0275conditional((tmp_15_0 = ctx_r1.settingsForm.get("customizedTemplates")) ? 28 : -1, tmp_15_0);
  }
}
var ManageEmailSettingsComponent = class _ManageEmailSettingsComponent {
  constructor() {
    this.cdRef = inject(ChangeDetectorRef);
    this.settingsService = inject(SettingsService);
    this.toastr = inject(ToastrService);
    this.destroyRef = inject(DestroyRef);
    this.settingsForm = new FormGroup({});
  }
  ngOnInit() {
    this.settingsService.getServerSettings().pipe(take(1)).subscribe((settings) => {
      this.serverSettings = settings;
      this.settingsForm.addControl("hostName", new FormControl(this.serverSettings.hostName, [Validators.pattern(/^(http:|https:)+[^\s]+[\w]$/)]));
      this.settingsForm.addControl("host", new FormControl(this.serverSettings.smtpConfig.host, []));
      this.settingsForm.addControl("port", new FormControl(this.serverSettings.smtpConfig.port, []));
      this.settingsForm.addControl("userName", new FormControl(this.serverSettings.smtpConfig.userName, []));
      this.settingsForm.addControl("enableSsl", new FormControl(this.serverSettings.smtpConfig.enableSsl, []));
      this.settingsForm.addControl("password", new FormControl(this.serverSettings.smtpConfig.password, []));
      this.settingsForm.addControl("senderAddress", new FormControl(this.serverSettings.smtpConfig.senderAddress, []));
      this.settingsForm.addControl("senderDisplayName", new FormControl(this.serverSettings.smtpConfig.senderDisplayName, []));
      this.settingsForm.addControl("sizeLimit", new FormControl(this.serverSettings.smtpConfig.sizeLimit, [Validators.min(1)]));
      this.settingsForm.addControl("customizedTemplates", new FormControl(this.serverSettings.smtpConfig.customizedTemplates, [Validators.min(1)]));
      this.settingsForm.valueChanges.pipe(debounceTime(300), distinctUntilChanged(), filter((_) => this.settingsForm.valid), takeUntilDestroyed(this.destroyRef), switchMap((_) => {
        const data = this.packData();
        return this.settingsService.updateServerSettings(data);
      }), tap((settings2) => {
        this.serverSettings = settings2;
        this.cdRef.markForCheck();
      })).subscribe();
      this.cdRef.markForCheck();
    });
  }
  resetForm() {
    this.settingsForm.get("hostName")?.setValue(this.serverSettings.hostName);
    this.settingsForm.get("host")?.setValue(this.serverSettings.smtpConfig.host, { onlySelf: true, emitEvent: false });
    this.settingsForm.get("port")?.setValue(this.serverSettings.smtpConfig.port, { onlySelf: true, emitEvent: false });
    this.settingsForm.get("userName")?.setValue(this.serverSettings.smtpConfig.userName, { onlySelf: true, emitEvent: false });
    this.settingsForm.get("enableSsl")?.setValue(this.serverSettings.smtpConfig.enableSsl, { onlySelf: true, emitEvent: false });
    this.settingsForm.get("password")?.setValue(this.serverSettings.smtpConfig.password, { onlySelf: true, emitEvent: false });
    this.settingsForm.get("senderAddress")?.setValue(this.serverSettings.smtpConfig.senderAddress, { onlySelf: true, emitEvent: false });
    this.settingsForm.get("senderDisplayName")?.setValue(this.serverSettings.smtpConfig.senderDisplayName, { onlySelf: true, emitEvent: false });
    this.settingsForm.get("sizeLimit")?.setValue(this.serverSettings.smtpConfig.sizeLimit, { onlySelf: true, emitEvent: false });
    this.settingsForm.get("customizedTemplates")?.setValue(this.serverSettings.smtpConfig.customizedTemplates, { onlySelf: true, emitEvent: false });
    this.settingsForm.markAsPristine();
    this.cdRef.markForCheck();
  }
  autofillGmail() {
    this.settingsForm.get("host")?.setValue("smtp.gmail.com");
    this.settingsForm.get("port")?.setValue(587);
    this.settingsForm.get("sizeLimit")?.setValue(26214400);
    this.settingsForm.get("enableSsl")?.setValue(true);
    this.settingsForm.markAsDirty();
    this.cdRef.markForCheck();
  }
  autofillOutlook() {
    this.settingsForm.get("host")?.setValue("smtp-mail.outlook.com");
    this.settingsForm.get("port")?.setValue(587);
    this.settingsForm.get("sizeLimit")?.setValue(1048576);
    this.settingsForm.get("enableSsl")?.setValue(true);
    this.settingsForm.markAsDirty();
    this.cdRef.markForCheck();
  }
  packData() {
    const modelSettings = Object.assign({}, this.serverSettings);
    modelSettings.emailServiceUrl = this.settingsForm.get("emailServiceUrl")?.value;
    modelSettings.hostName = this.settingsForm.get("hostName")?.value;
    modelSettings.smtpConfig.host = this.settingsForm.get("host")?.value;
    modelSettings.smtpConfig.port = this.settingsForm.get("port")?.value;
    modelSettings.smtpConfig.userName = this.settingsForm.get("userName")?.value;
    modelSettings.smtpConfig.enableSsl = this.settingsForm.get("enableSsl")?.value;
    modelSettings.smtpConfig.password = this.settingsForm.get("password")?.value;
    modelSettings.smtpConfig.senderAddress = this.settingsForm.get("senderAddress")?.value;
    modelSettings.smtpConfig.senderDisplayName = this.settingsForm.get("senderDisplayName")?.value;
    modelSettings.smtpConfig.sizeLimit = this.settingsForm.get("sizeLimit")?.value;
    modelSettings.smtpConfig.customizedTemplates = this.settingsForm.get("customizedTemplates")?.value;
    return modelSettings;
  }
  test() {
    this.settingsService.testEmailServerSettings().subscribe((res) => {
      if (res.successful) {
        this.toastr.success(translate("toasts.email-sent", { email: res.emailAddress }));
      } else {
        this.toastr.error(res.errorMessage);
      }
    });
  }
  static {
    this.\u0275fac = function ManageEmailSettingsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ManageEmailSettingsComponent)();
    };
  }
  static {
    this.\u0275cmp = \u0275\u0275defineComponent({ type: _ManageEmailSettingsComponent, selectors: [["app-manage-email-settings"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 1, vars: 1, consts: [["view", ""], ["edit", ""], ["switch", ""], [4, "transloco", "translocoRead"], [1, "position-relative"], ["type", "button", 1, "btn", "btn-primary-outline", "position-absolute", "custom-position", 3, "click"], [3, "formGroup"], [1, "alert", "alert-warning"], [1, "row", "g-0", "mt-2"], [3, "title", "subtitle", "control"], [3, "title", "subtitle"], [3, "title"], ["labelId", "setting-enable-ssl", 3, "title"], [1, "input-group"], ["id", "settings-hostname", "aria-describedby", "hostname-validations", "formControlName", "hostName", "type", "text", "appEnterBlur", "", 1, "form-control"], ["type", "button", 1, "btn", "btn-outline-secondary", 3, "click"], ["id", "hostname-validations", 1, "invalid-feedback", 2, "display", "inline-block"], ["type", "text", "formControlName", "senderAddress", "id", "settings-sender-address", "appEnterBlur", "", 1, "form-control"], ["type", "text", "formControlName", "senderDisplayName", "id", "settings-sender-displayname", "appEnterBlur", "", 1, "form-control"], ["type", "text", "formControlName", "host", "id", "settings-host", "appEnterBlur", "", 1, "form-control"], ["type", "number", "inputmode", "numeric", "min", "1", "formControlName", "port", "id", "settings-port", "appEnterBlur", "", 1, "form-control"], [1, "form-check", "form-switch", "float-end"], ["id", "setting-enable-ssl", "type", "checkbox", "formControlName", "enableSsl", 1, "form-check-input"], ["type", "text", "formControlName", "userName", "id", "settings-username", "appEnterBlur", "", 1, "form-control"], ["type", "text", "formControlName", "password", "id", "settings-password", "appEnterBlur", "", 1, "form-control"], ["type", "number", "inputmode", "numeric", "min", "1", "formControlName", "sizeLimit", "id", "settings-size-limit", "appEnterBlur", "", 1, "form-control"], ["id", "settings-customized-templates", "type", "checkbox", "formControlName", "customizedTemplates", 1, "form-check-input"]], template: function ManageEmailSettingsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, ManageEmailSettingsComponent_ng_container_0_Template, 29, 15, "ng-container", 3);
      }
      if (rf & 2) {
        \u0275\u0275property("translocoRead", "manage-email-settings");
      }
    }, dependencies: [ReactiveFormsModule, \u0275NgNoValidate, DefaultValueAccessor, NumberValueAccessor, CheckboxControlValueAccessor, NgControlStatus, NgControlStatusGroup, MinValidator, FormGroupDirective, FormControlName, TranslocoModule, TranslocoDirective, SettingItemComponent, SettingSwitchComponent, DefaultValuePipe, BytesPipe, EnterBlurDirective], styles: ["\n\n.custom-position[_ngcontent-%COMP%] {\n  right: 15px;\n  top: -42px;\n}\n/*# sourceMappingURL=manage-email-settings.component.css.map */"], changeDetection: 0 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ManageEmailSettingsComponent, { className: "ManageEmailSettingsComponent", filePath: "src/app/admin/manage-email-settings/manage-email-settings.component.ts", lineNumber: 23 });
})();
export {
  ManageEmailSettingsComponent
};
//# sourceMappingURL=manage-email-settings.component-22QWLDKU.js.map
