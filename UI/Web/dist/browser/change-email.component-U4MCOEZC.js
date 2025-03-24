import {
  ApiKeyComponent
} from "./chunk-5QTHIAHW.js";
import {
  SettingItemComponent
} from "./chunk-KJWRNOWO.js";
import "./chunk-LA23MDZZ.js";
import "./chunk-R5PSFMI2.js";
import "./chunk-A6JEQ5GB.js";
import "./chunk-RSMGJKYW.js";
import "./chunk-I5OSWZYW.js";
import {
  AccountService
} from "./chunk-U2DWQJI2.js";
import {
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
  TranslocoDirective,
  inject,
  shareReplay,
  takeUntilDestroyed,
  translate,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpropertyInterpolate,
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
  ɵɵtextInterpolate1
} from "./chunk-PYHIUVNJ.js";

// src/app/user-settings/change-email/change-email.component.ts
function ChangeEmailComponent_ng_container_0_ng_template_2_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 5);
    \u0275\u0275elementStart(1, "span", 6);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r1 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275property("ngbTooltip", t_r1("email-confirmed"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r1("email-confirmed"));
  }
}
function ChangeEmailComponent_ng_container_0_ng_template_2_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 7);
    \u0275\u0275elementStart(1, "span", 6);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r1 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275property("ngbTooltip", t_r1("email-not-confirmed"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r1("email-not-confirmed"));
  }
}
function ChangeEmailComponent_ng_container_0_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, ChangeEmailComponent_ng_container_0_ng_template_2_Conditional_0_Template, 3, 2)(1, ChangeEmailComponent_ng_container_0_ng_template_2_Conditional_1_Template, 3, 2);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275conditional(ctx_r1.emailConfirmed ? 0 : 1);
  }
}
function ChangeEmailComponent_ng_container_0_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.user == null ? null : ctx_r1.user.email);
  }
}
function ChangeEmailComponent_ng_container_0_ng_template_6_Conditional_0_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const error_r4 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(error_r4);
  }
}
function ChangeEmailComponent_ng_container_0_ng_template_6_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8);
    \u0275\u0275repeaterCreate(1, ChangeEmailComponent_ng_container_0_ng_template_6_Conditional_0_For_2_Template, 2, 1, "div", null, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275text(3, ") ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.errors);
  }
}
function ChangeEmailComponent_ng_container_0_ng_template_6_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r1 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", t_r1("has-invalid-email"), " ");
  }
}
function ChangeEmailComponent_ng_container_0_ng_template_6_Conditional_6_Conditional_1_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r1 = \u0275\u0275nextContext(4).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(t_r1("required-field"));
  }
}
function ChangeEmailComponent_ng_container_0_ng_template_6_Conditional_6_Conditional_1_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r1 = \u0275\u0275nextContext(4).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(t_r1("valid-email"));
  }
}
function ChangeEmailComponent_ng_container_0_ng_template_6_Conditional_6_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 18);
    \u0275\u0275template(1, ChangeEmailComponent_ng_container_0_ng_template_6_Conditional_6_Conditional_1_Conditional_1_Template, 2, 1, "div")(2, ChangeEmailComponent_ng_container_0_ng_template_6_Conditional_6_Conditional_1_Conditional_2_Template, 2, 1, "div");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const formControl_r5 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional(formControl_r5.errors.required ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(formControl_r5.errors.email ? 2 : -1);
  }
}
function ChangeEmailComponent_ng_container_0_ng_template_6_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "input", 17);
    \u0275\u0275template(1, ChangeEmailComponent_ng_container_0_ng_template_6_Conditional_6_Conditional_1_Template, 3, 2, "div", 18);
  }
  if (rf & 2) {
    const formControl_r5 = ctx;
    \u0275\u0275classProp("is-invalid", formControl_r5.invalid && formControl_r5.touched);
    \u0275\u0275advance();
    \u0275\u0275conditional(formControl_r5.errors ? 1 : -1);
  }
}
function ChangeEmailComponent_ng_container_0_ng_template_6_Conditional_10_Conditional_1_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r1 = \u0275\u0275nextContext(4).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(t_r1("required-field"));
  }
}
function ChangeEmailComponent_ng_container_0_ng_template_6_Conditional_10_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 20);
    \u0275\u0275template(1, ChangeEmailComponent_ng_container_0_ng_template_6_Conditional_10_Conditional_1_Conditional_1_Template, 2, 1, "div");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const formControl_r6 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional(formControl_r6.errors.required ? 1 : -1);
  }
}
function ChangeEmailComponent_ng_container_0_ng_template_6_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "input", 19);
    \u0275\u0275template(1, ChangeEmailComponent_ng_container_0_ng_template_6_Conditional_10_Conditional_1_Template, 2, 1, "div", 20);
  }
  if (rf & 2) {
    const formControl_r6 = ctx;
    \u0275\u0275classProp("is-invalid", formControl_r6.invalid && formControl_r6.touched);
    \u0275\u0275advance();
    \u0275\u0275conditional(formControl_r6.errors ? 1 : -1);
  }
}
function ChangeEmailComponent_ng_container_0_ng_template_6_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h4");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "a", 21);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275element(6, "app-api-key", 22);
  }
  if (rf & 2) {
    const t_r1 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(t_r1("email-updated-title"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r1("email-updated-description"));
    \u0275\u0275advance();
    \u0275\u0275propertyInterpolate("href", ctx_r1.emailLink, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(t_r1("setup-user-account"));
    \u0275\u0275advance();
    \u0275\u0275property("title", t_r1("invite-url-label"))("tooltipText", t_r1("invite-url-tooltip"))("hideData", false)("showRefresh", false)("transform", ctx_r1.makeLink);
  }
}
function ChangeEmailComponent_ng_container_0_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275template(0, ChangeEmailComponent_ng_container_0_ng_template_6_Conditional_0_Template, 4, 0, "div", 8);
    \u0275\u0275elementStart(1, "form", 9);
    \u0275\u0275template(2, ChangeEmailComponent_ng_container_0_ng_template_6_Conditional_2_Template, 2, 1, "div", 10);
    \u0275\u0275elementStart(3, "div", 11)(4, "label", 12);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275template(6, ChangeEmailComponent_ng_container_0_ng_template_6_Conditional_6_Template, 2, 3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 11)(8, "label", 13);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275template(10, ChangeEmailComponent_ng_container_0_ng_template_6_Conditional_10_Template, 2, 3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 14)(12, "button", 15);
    \u0275\u0275listener("click", function ChangeEmailComponent_ng_container_0_ng_template_6_Template_button_click_12_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.resetForm());
    });
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "button", 16);
    \u0275\u0275listener("click", function ChangeEmailComponent_ng_container_0_ng_template_6_Template_button_click_14_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.saveForm());
    });
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(16, ChangeEmailComponent_ng_container_0_ng_template_6_Conditional_16_Template, 7, 9);
  }
  if (rf & 2) {
    let tmp_10_0;
    let tmp_12_0;
    const t_r1 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275conditional(ctx_r1.errors.length > 0 ? 0 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("formGroup", ctx_r1.form);
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx_r1.hasValidEmail ? 2 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(t_r1("email-label"));
    \u0275\u0275advance();
    \u0275\u0275conditional((tmp_10_0 = ctx_r1.form.get("email")) ? 6 : -1, tmp_10_0);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(t_r1("current-password-label"));
    \u0275\u0275advance();
    \u0275\u0275conditional((tmp_12_0 = ctx_r1.form.get("password")) ? 10 : -1, tmp_12_0);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(t_r1("reset"));
    \u0275\u0275advance();
    \u0275\u0275property("disabled", !ctx_r1.form.valid || !(ctx_r1.form.dirty || ctx_r1.form.touched));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(t_r1("save"));
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.emailLink !== "" ? 16 : -1);
  }
}
function ChangeEmailComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "app-setting-item", 4);
    \u0275\u0275template(2, ChangeEmailComponent_ng_container_0_ng_template_2_Template, 2, 1, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(4, ChangeEmailComponent_ng_container_0_ng_template_4_Template, 2, 1, "ng-template", null, 1, \u0275\u0275templateRefExtractor)(6, ChangeEmailComponent_ng_container_0_ng_template_6_Template, 17, 11, "ng-template", null, 2, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const t_r1 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("title", t_r1("email-title"))("canEdit", ctx_r1.canEdit);
  }
}
var ChangeEmailComponent = class _ChangeEmailComponent {
  get email() {
    return this.form.get("email");
  }
  constructor(accountService, toastr, cdRef) {
    this.accountService = accountService;
    this.toastr = toastr;
    this.cdRef = cdRef;
    this.destroyRef = inject(DestroyRef);
    this.form = new FormGroup({});
    this.user = void 0;
    this.errors = [];
    this.isViewMode = true;
    this.emailLink = "";
    this.emailConfirmed = true;
    this.hasValidEmail = true;
    this.canEdit = false;
    this.makeLink = (val) => {
      return this.emailLink;
    };
  }
  ngOnInit() {
    this.accountService.currentUser$.pipe(takeUntilDestroyed(this.destroyRef), shareReplay()).subscribe((user) => {
      this.user = user;
      this.canEdit = !this.accountService.hasReadOnlyRole(user);
      this.form.addControl("email", new FormControl(user?.email, [Validators.required, Validators.email]));
      this.form.addControl("password", new FormControl("", [Validators.required]));
      this.cdRef.markForCheck();
      this.accountService.isEmailConfirmed().subscribe((confirmed) => {
        this.emailConfirmed = confirmed;
        this.cdRef.markForCheck();
      });
      this.accountService.isEmailValid().subscribe((isValid) => {
        this.hasValidEmail = isValid;
        this.cdRef.markForCheck();
      });
    });
  }
  resetForm() {
    this.form.get("email")?.setValue(this.user?.email);
    this.errors = [];
    this.cdRef.markForCheck();
  }
  saveForm() {
    if (this.user === void 0) {
      return;
    }
    const model = this.form.value;
    this.errors = [];
    this.accountService.updateEmail(model.email, model.password).subscribe((updateEmailResponse) => {
      if (updateEmailResponse.invalidEmail) {
        this.toastr.success(translate("toasts.email-sent-to-no-existing", { email: model.email }));
      }
      if (updateEmailResponse.emailSent) {
        this.toastr.success(translate("toasts.email-sent-to"));
      } else {
        this.toastr.success(translate("toasts.change-email-no-email"));
        this.accountService.refreshAccount().subscribe((user) => {
          this.user = user;
          this.form.get("email")?.setValue(this.user?.email);
          this.cdRef.markForCheck();
        });
      }
      this.isViewMode = true;
      this.resetForm();
    }, (err) => {
      this.errors = err;
    });
  }
  toggleViewMode() {
    this.isViewMode = !this.isViewMode;
    this.resetForm();
  }
  updateEditMode(mode) {
    this.isViewMode = !mode;
    this.cdRef.markForCheck();
    this.resetForm();
  }
  static {
    this.\u0275fac = function ChangeEmailComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ChangeEmailComponent)(\u0275\u0275directiveInject(AccountService), \u0275\u0275directiveInject(ToastrService), \u0275\u0275directiveInject(ChangeDetectorRef));
    };
  }
  static {
    this.\u0275cmp = \u0275\u0275defineComponent({ type: _ChangeEmailComponent, selectors: [["app-change-email"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 1, vars: 1, consts: [["extra", ""], ["view", ""], ["edit", ""], [4, "transloco", "translocoRead"], [3, "title", "canEdit"], ["aria-hidden", "true", 1, "fa-solid", "fa-circle-check", "ms-1", "confirm-icon", 3, "ngbTooltip"], [1, "visually-hidden"], ["aria-hidden", "true", 1, "fa-solid", "fa-exclamation-circle", "ms-1", "confirm-icon", "error", 3, "ngbTooltip"], ["role", "alert", 1, "alert", "alert-danger"], [3, "formGroup"], ["role", "alert", 1, "alert", "alert-warning"], [1, "mb-3"], ["for", "email", 1, "form-label"], ["for", "password", 1, "form-label"], [1, "col-auto", "d-flex", "d-md-block", "justify-content-sm-center", "text-md-end", "mb-3"], ["type", "button", "aria-describedby", "email-card", 1, "flex-fill", "btn", "btn-secondary", "me-2", 3, "click"], ["type", "submit", "aria-describedby", "email-card", 1, "flex-fill", "btn", "btn-primary", 3, "click", "disabled"], ["type", "email", "id", "email", "formControlName", "email", 1, "form-control", "custom-input"], ["id", "email-validations", 1, "invalid-feedback"], ["type", "password", "id", "password", "formControlName", "password", 1, "form-control", "custom-input"], ["id", "password-validations", 1, "invalid-feedback"], ["target", "_blank", "rel", "noopener noreferrer", 1, "email-link", 3, "href"], [3, "title", "tooltipText", "hideData", "showRefresh", "transform"]], template: function ChangeEmailComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, ChangeEmailComponent_ng_container_0_Template, 8, 2, "ng-container", 3);
      }
      if (rf & 2) {
        \u0275\u0275property("translocoRead", "change-email");
      }
    }, dependencies: [NgbTooltip, ReactiveFormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, ApiKeyComponent, TranslocoDirective, SettingItemComponent], styles: ["\n\n.confirm-icon[_ngcontent-%COMP%] {\n  color: var(--primary-color);\n  font-size: 16px;\n}\n.error[_ngcontent-%COMP%] {\n  color: var(--error-color);\n}\n/*# sourceMappingURL=change-email.component.css.map */"], changeDetection: 0 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ChangeEmailComponent, { className: "ChangeEmailComponent", filePath: "src/app/user-settings/change-email/change-email.component.ts", lineNumber: 23 });
})();
export {
  ChangeEmailComponent
};
//# sourceMappingURL=change-email.component-U4MCOEZC.js.map
