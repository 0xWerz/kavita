import {
  SettingItemComponent
} from "./chunk-KJWRNOWO.js";
import "./chunk-I5OSWZYW.js";
import {
  AccountService
} from "./chunk-U2DWQJI2.js";
import "./chunk-2R2RCU4Y.js";
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
  TranslocoDirective,
  inject,
  map,
  of,
  shareReplay,
  takeUntilDestroyed,
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
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-PYHIUVNJ.js";

// src/app/user-settings/change-password/change-password.component.ts
function ChangePasswordComponent_ng_container_0_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 4);
    \u0275\u0275text(1, "***************");
    \u0275\u0275elementEnd();
  }
}
function ChangePasswordComponent_ng_container_0_ng_template_4_Conditional_0_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const error_r2 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(error_r2);
  }
}
function ChangePasswordComponent_ng_container_0_ng_template_4_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5);
    \u0275\u0275repeaterCreate(1, ChangePasswordComponent_ng_container_0_ng_template_4_Conditional_0_For_2_Template, 2, 1, "div", null, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r2.resetPasswordErrors);
  }
}
function ChangePasswordComponent_ng_container_0_ng_template_4_Conditional_2_Conditional_4_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r4 = \u0275\u0275nextContext(4).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(t_r4("required-field"));
  }
}
function ChangePasswordComponent_ng_container_0_ng_template_4_Conditional_2_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13);
    \u0275\u0275template(1, ChangePasswordComponent_ng_container_0_ng_template_4_Conditional_2_Conditional_4_Conditional_1_Template, 2, 1, "div");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const formControl_r5 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional((formControl_r5.errors == null ? null : formControl_r5.errors.required) ? 1 : -1);
  }
}
function ChangePasswordComponent_ng_container_0_ng_template_4_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7)(1, "label", 11);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275element(3, "input", 12);
    \u0275\u0275template(4, ChangePasswordComponent_ng_container_0_ng_template_4_Conditional_2_Conditional_4_Template, 2, 1, "div", 13);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const formControl_r5 = ctx;
    const t_r4 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r4("current-password-label"));
    \u0275\u0275advance();
    \u0275\u0275classProp("is-invalid", formControl_r5.invalid && formControl_r5.touched);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.passwordChangeForm.dirty || ctx_r2.passwordChangeForm.touched ? 4 : -1);
  }
}
function ChangePasswordComponent_ng_container_0_ng_template_4_Conditional_3_Conditional_4_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r4 = \u0275\u0275nextContext(4).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(t_r4("required-field"));
  }
}
function ChangePasswordComponent_ng_container_0_ng_template_4_Conditional_3_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16);
    \u0275\u0275template(1, ChangePasswordComponent_ng_container_0_ng_template_4_Conditional_3_Conditional_4_Conditional_1_Template, 2, 1, "div");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const formControl_r6 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional((formControl_r6.errors == null ? null : formControl_r6.errors.required) ? 1 : -1);
  }
}
function ChangePasswordComponent_ng_container_0_ng_template_4_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7)(1, "label", 14);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275element(3, "input", 15);
    \u0275\u0275template(4, ChangePasswordComponent_ng_container_0_ng_template_4_Conditional_3_Conditional_4_Template, 2, 1, "div", 16);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const formControl_r6 = ctx;
    const t_r4 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r4("new-password-label"));
    \u0275\u0275advance();
    \u0275\u0275classProp("is-invalid", formControl_r6.invalid && formControl_r6.touched);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.passwordChangeForm.dirty || ctx_r2.passwordChangeForm.touched ? 4 : -1);
  }
}
function ChangePasswordComponent_ng_container_0_ng_template_4_Conditional_4_Conditional_4_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r4 = \u0275\u0275nextContext(4).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(t_r4("required-field"));
  }
}
function ChangePasswordComponent_ng_container_0_ng_template_4_Conditional_4_Conditional_4_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r4 = \u0275\u0275nextContext(4).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(t_r4("passwords-must-match"));
  }
}
function ChangePasswordComponent_ng_container_0_ng_template_4_Conditional_4_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 19);
    \u0275\u0275template(1, ChangePasswordComponent_ng_container_0_ng_template_4_Conditional_4_Conditional_4_Conditional_1_Template, 2, 1, "div")(2, ChangePasswordComponent_ng_container_0_ng_template_4_Conditional_4_Conditional_4_Conditional_2_Template, 2, 1, "div");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const formControl_r7 = \u0275\u0275nextContext();
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275conditional((formControl_r7.errors == null ? null : formControl_r7.errors.required) ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx_r2.passwordsMatch ? 2 : -1);
  }
}
function ChangePasswordComponent_ng_container_0_ng_template_4_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7)(1, "label", 17);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275element(3, "input", 18);
    \u0275\u0275template(4, ChangePasswordComponent_ng_container_0_ng_template_4_Conditional_4_Conditional_4_Template, 3, 2, "div", 19);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_8_0;
    const t_r4 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r4("confirm-password-label"));
    \u0275\u0275advance();
    \u0275\u0275classProp("is-invalid", ((tmp_8_0 = ctx_r2.passwordChangeForm.get("confirmPassword")) == null ? null : tmp_8_0.invalid) && ((tmp_8_0 = ctx_r2.passwordChangeForm.get("confirmPassword")) == null ? null : tmp_8_0.touched));
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.passwordChangeForm.dirty || ctx_r2.passwordChangeForm.touched ? 4 : -1);
  }
}
function ChangePasswordComponent_ng_container_0_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275template(0, ChangePasswordComponent_ng_container_0_ng_template_4_Conditional_0_Template, 3, 0, "div", 5);
    \u0275\u0275elementStart(1, "form", 6);
    \u0275\u0275template(2, ChangePasswordComponent_ng_container_0_ng_template_4_Conditional_2_Template, 5, 4, "div", 7)(3, ChangePasswordComponent_ng_container_0_ng_template_4_Conditional_3_Template, 5, 4, "div", 7)(4, ChangePasswordComponent_ng_container_0_ng_template_4_Conditional_4_Template, 5, 4, "div", 7);
    \u0275\u0275elementStart(5, "div", 8)(6, "button", 9);
    \u0275\u0275listener("click", function ChangePasswordComponent_ng_container_0_ng_template_4_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.resetPasswordForm());
    });
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "button", 10);
    \u0275\u0275listener("click", function ChangePasswordComponent_ng_container_0_ng_template_4_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.savePasswordForm());
    });
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    let tmp_7_0;
    let tmp_8_0;
    let tmp_9_0;
    const t_r4 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275conditional(ctx_r2.resetPasswordErrors.length > 0 ? 0 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("formGroup", ctx_r2.passwordChangeForm);
    \u0275\u0275advance();
    \u0275\u0275conditional((tmp_7_0 = ctx_r2.passwordChangeForm.get("oldPassword")) ? 2 : -1, tmp_7_0);
    \u0275\u0275advance();
    \u0275\u0275conditional((tmp_8_0 = ctx_r2.passwordChangeForm.get("password")) ? 3 : -1, tmp_8_0);
    \u0275\u0275advance();
    \u0275\u0275conditional((tmp_9_0 = ctx_r2.passwordChangeForm.get("confirmPassword")) ? 4 : -1, tmp_9_0);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(t_r4("reset"));
    \u0275\u0275advance();
    \u0275\u0275property("disabled", !ctx_r2.passwordChangeForm.valid || !(ctx_r2.passwordChangeForm.dirty || ctx_r2.passwordChangeForm.touched));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(t_r4("save"));
  }
}
function ChangePasswordComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "app-setting-item", 3);
    \u0275\u0275template(2, ChangePasswordComponent_ng_container_0_ng_template_2_Template, 2, 0, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(4, ChangePasswordComponent_ng_container_0_ng_template_4_Template, 10, 8, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const t_r4 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("title", t_r4("password-label"))("canEdit", ctx_r2.canEdit);
  }
}
var ChangePasswordComponent = class _ChangePasswordComponent {
  constructor() {
    this.destroyRef = inject(DestroyRef);
    this.accountService = inject(AccountService);
    this.toastr = inject(ToastrService);
    this.cdRef = inject(ChangeDetectorRef);
    this.passwordChangeForm = new FormGroup({});
    this.user = void 0;
    this.hasChangePasswordAbility = of(false);
    this.observableHandles = [];
    this.passwordsMatch = false;
    this.resetPasswordErrors = [];
    this.isViewMode = true;
    this.canEdit = false;
  }
  get password() {
    return this.passwordChangeForm.get("password");
  }
  get confirmPassword() {
    return this.passwordChangeForm.get("confirmPassword");
  }
  ngOnInit() {
    this.accountService.currentUser$.pipe(takeUntilDestroyed(this.destroyRef), shareReplay()).subscribe((user) => {
      this.user = user;
      this.canEdit = !this.accountService.hasReadOnlyRole(user);
      this.cdRef.markForCheck();
    });
    this.hasChangePasswordAbility = this.accountService.currentUser$.pipe(takeUntilDestroyed(this.destroyRef), shareReplay(), map((user) => {
      return user !== void 0 && !this.accountService.hasReadOnlyRole(user) && (this.accountService.hasAdminRole(user) || this.accountService.hasChangePasswordRole(user));
    }));
    this.cdRef.markForCheck();
    this.passwordChangeForm.addControl("password", new FormControl("", [Validators.required]));
    this.passwordChangeForm.addControl("confirmPassword", new FormControl("", [Validators.required]));
    this.passwordChangeForm.addControl("oldPassword", new FormControl("", [Validators.required]));
    this.observableHandles.push(this.passwordChangeForm.valueChanges.subscribe(() => {
      const values = this.passwordChangeForm.value;
      this.passwordsMatch = values.password === values.confirmPassword;
      this.cdRef.markForCheck();
    }));
  }
  ngOnDestroy() {
    this.observableHandles.forEach((o) => o.unsubscribe());
  }
  resetPasswordForm() {
    this.passwordChangeForm.get("password")?.setValue("");
    this.passwordChangeForm.get("confirmPassword")?.setValue("");
    this.passwordChangeForm.get("oldPassword")?.setValue("");
    this.resetPasswordErrors = [];
    this.cdRef.markForCheck();
  }
  savePasswordForm() {
    if (this.user === void 0) {
      return;
    }
    const model = this.passwordChangeForm.value;
    this.resetPasswordErrors = [];
    this.observableHandles.push(this.accountService.resetPassword(this.user?.username, model.confirmPassword, model.oldPassword).subscribe(() => {
      this.toastr.success(translate("toasts.password-updated"));
      this.resetPasswordForm();
      this.isViewMode = true;
      this.cdRef.markForCheck();
    }, (err) => {
      this.resetPasswordErrors = err;
      this.cdRef.markForCheck();
    }));
  }
  updateEditMode(mode) {
    this.isViewMode = !mode;
    this.cdRef.markForCheck();
  }
  static {
    this.\u0275fac = function ChangePasswordComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ChangePasswordComponent)();
    };
  }
  static {
    this.\u0275cmp = \u0275\u0275defineComponent({ type: _ChangePasswordComponent, selectors: [["app-change-password"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 1, vars: 1, consts: [["view", ""], ["edit", ""], [4, "transloco", "translocoRead"], [3, "title", "canEdit"], [1, "col-12"], ["role", "alert", 1, "alert", "alert-danger"], [3, "formGroup"], [1, "mb-3"], [1, "col-auto", "d-flex", "d-md-block", "justify-content-sm-center", "text-md-end", "mb-3"], ["type", "button", "aria-describedby", "password-panel", 1, "flex-fill", "btn", "btn-secondary", "me-2", 3, "click"], ["type", "submit", "aria-describedby", "password-panel", 1, "flex-fill", "btn", "btn-primary", 3, "click", "disabled"], ["for", "oldpass", 1, "form-label"], ["type", "password", "id", "oldpass", "formControlName", "oldPassword", "autocomplete", "current-password", "aria-describedby", "oldpass-validations", 1, "form-control", "custom-input"], ["id", "oldpass-validations", 1, "invalid-feedback"], ["for", "new-password"], ["type", "password", "id", "new-password", "formControlName", "password", "aria-describedby", "new-password-validations", "autocomplete", "new-password", 1, "form-control"], ["id", "new-password-validations", 1, "invalid-feedback"], ["for", "confirm-password"], ["type", "password", "id", "confirm-password", "formControlName", "confirmPassword", "aria-describedby", "confirm-password-validations", "autocomplete", "new-password", 1, "form-control"], ["id", "confirm-password-validations", 1, "invalid-feedback"]], template: function ChangePasswordComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, ChangePasswordComponent_ng_container_0_Template, 6, 2, "ng-container", 2);
      }
      if (rf & 2) {
        \u0275\u0275property("translocoRead", "change-password");
      }
    }, dependencies: [ReactiveFormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, TranslocoDirective, SettingItemComponent], changeDetection: 0 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ChangePasswordComponent, { className: "ChangePasswordComponent", filePath: "src/app/user-settings/change-password/change-password.component.ts", lineNumber: 30 });
})();
export {
  ChangePasswordComponent
};
//# sourceMappingURL=change-password.component-BMUD4HH2.js.map
