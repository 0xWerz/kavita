import {
  RestrictionSelectorComponent
} from "./chunk-FBZMDUHM.js";
import {
  AgeRatingPipe
} from "./chunk-PC4EXHMG.js";
import {
  AgeRating
} from "./chunk-6KPMHNEU.js";
import "./chunk-IBO6ECG5.js";
import "./chunk-BX5PUGWH.js";
import {
  SettingItemComponent
} from "./chunk-KJWRNOWO.js";
import "./chunk-RSMGJKYW.js";
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
  ReactiveFormsModule
} from "./chunk-BPOUBDX2.js";
import "./chunk-CQADFT7F.js";
import {
  ChangeDetectorRef,
  DestroyRef,
  EventEmitter,
  NgClass,
  TranslocoDirective,
  inject,
  map,
  of,
  shareReplay,
  take,
  takeUntilDestroyed,
  translate,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵdefineComponent,
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
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-PYHIUVNJ.js";

// src/app/user-settings/change-age-restriction/change-age-restriction.component.ts
var _c0 = (a0) => ({ "disabled": a0 });
function ChangeAgeRestrictionComponent_ng_container_0_Conditional_1_ng_template_1_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 5);
    \u0275\u0275text(1, "+");
    \u0275\u0275elementEnd();
    \u0275\u0275text(2);
  }
  if (rf & 2) {
    const t_r1 = \u0275\u0275nextContext(3).$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", t_r1("unknowns"), " ");
  }
}
function ChangeAgeRestrictionComponent_ng_container_0_Conditional_1_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 4);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "ageRating");
    \u0275\u0275template(3, ChangeAgeRestrictionComponent_ng_container_0_Conditional_1_ng_template_1_Conditional_3_Template, 3, 1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(5, _c0, !ctx_r1.accountService.hasChangeAgeRestrictionRole(ctx_r1.user) && !ctx_r1.accountService.hasAdminRole(ctx_r1.user)));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(2, 3, ctx_r1.user.ageRestriction.ageRating), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.user.ageRestriction.ageRating !== ctx_r1.AgeRating.NotApplicable && ctx_r1.user.ageRestriction.includeUnknowns ? 3 : -1);
  }
}
function ChangeAgeRestrictionComponent_ng_container_0_Conditional_1_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-restriction-selector", 6);
    \u0275\u0275listener("selected", function ChangeAgeRestrictionComponent_ng_container_0_Conditional_1_ng_template_3_Template_app_restriction_selector_selected_0_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.updateRestrictionSelection($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(1, "div", 7)(2, "button", 8);
    \u0275\u0275listener("click", function ChangeAgeRestrictionComponent_ng_container_0_Conditional_1_ng_template_3_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.resetForm());
    });
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 9);
    \u0275\u0275listener("click", function ChangeAgeRestrictionComponent_ng_container_0_Conditional_1_ng_template_3_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.saveForm());
    });
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const t_r1 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("showContext", false)("member", ctx_r1.user)("reset", ctx_r1.reset);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(t_r1("reset"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r1("save"));
  }
}
function ChangeAgeRestrictionComponent_ng_container_0_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "app-setting-item", 3);
    \u0275\u0275template(1, ChangeAgeRestrictionComponent_ng_container_0_Conditional_1_ng_template_1_Template, 4, 7, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(3, ChangeAgeRestrictionComponent_ng_container_0_Conditional_1_ng_template_3_Template, 6, 5, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r1 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("title", t_r1("age-restriction-label"))("canEdit", ctx_r1.accountService.hasChangeAgeRestrictionRole(ctx_r1.user) || ctx_r1.accountService.hasAdminRole(ctx_r1.user));
  }
}
function ChangeAgeRestrictionComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, ChangeAgeRestrictionComponent_ng_container_0_Conditional_1_Template, 5, 2, "app-setting-item", 3);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.user ? 1 : -1);
  }
}
var ChangeAgeRestrictionComponent = class _ChangeAgeRestrictionComponent {
  constructor() {
    this.accountService = inject(AccountService);
    this.toastr = inject(ToastrService);
    this.cdRef = inject(ChangeDetectorRef);
    this.destroyRef = inject(DestroyRef);
    this.AgeRating = AgeRating;
    this.user = void 0;
    this.hasChangeAgeRestrictionAbility = of(false);
    this.isViewMode = true;
    this.reset = new EventEmitter();
  }
  ngOnInit() {
    this.accountService.currentUser$.pipe(takeUntilDestroyed(this.destroyRef), shareReplay(), take(1)).subscribe((user) => {
      if (!user)
        return;
      this.user = user;
      this.originalRestriction = this.user.ageRestriction;
      this.cdRef.markForCheck();
    });
    this.hasChangeAgeRestrictionAbility = this.accountService.currentUser$.pipe(takeUntilDestroyed(this.destroyRef), shareReplay(), map((user) => {
      return user !== void 0 && !this.accountService.hasReadOnlyRole(user) && (!this.accountService.hasAdminRole(user) && this.accountService.hasChangeAgeRestrictionRole(user));
    }));
    this.cdRef.markForCheck();
  }
  updateRestrictionSelection(restriction) {
    this.selectedRestriction = restriction;
    this.saveForm();
  }
  resetForm() {
    if (!this.user)
      return;
    this.reset.emit(this.originalRestriction);
    this.cdRef.markForCheck();
  }
  saveForm() {
    if (this.user === void 0) {
      return;
    }
    this.accountService.updateAgeRestriction(this.selectedRestriction.ageRating, this.selectedRestriction.includeUnknowns).subscribe(() => {
      this.toastr.success(translate("toasts.age-restriction-updated"));
      this.originalRestriction = this.selectedRestriction;
      if (this.user) {
        this.user.ageRestriction.ageRating = this.selectedRestriction.ageRating;
        this.user.ageRestriction.includeUnknowns = this.selectedRestriction.includeUnknowns;
      }
      this.resetForm();
      this.isViewMode = true;
      this.cdRef.markForCheck();
    }, (err) => {
    });
  }
  updateEditMode(mode) {
    this.isViewMode = !mode;
    this.resetForm();
    this.cdRef.markForCheck();
  }
  static {
    this.\u0275fac = function ChangeAgeRestrictionComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ChangeAgeRestrictionComponent)();
    };
  }
  static {
    this.\u0275cmp = \u0275\u0275defineComponent({ type: _ChangeAgeRestrictionComponent, selectors: [["app-change-age-restriction"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 1, vars: 1, consts: [["view", ""], ["edit", ""], [4, "transloco", "translocoRead"], [3, "title", "canEdit"], [1, "col-12", 3, "ngClass"], [1, "ms-1", "me-1"], [3, "selected", "showContext", "member", "reset"], [1, "col-auto", "d-flex", "d-md-block", "justify-content-sm-center", "text-md-end", "mb-3"], ["type", "button", "aria-describedby", "age-restriction", 1, "flex-fill", "btn", "btn-secondary", "me-2", 3, "click"], ["type", "submit", "aria-describedby", "age-restriction", 1, "flex-fill", "btn", "btn-primary", 3, "click"]], template: function ChangeAgeRestrictionComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, ChangeAgeRestrictionComponent_ng_container_0_Template, 2, 1, "ng-container", 2);
      }
      if (rf & 2) {
        \u0275\u0275property("translocoRead", "change-age-restriction");
      }
    }, dependencies: [
      RestrictionSelectorComponent,
      AgeRatingPipe,
      TranslocoDirective,
      ReactiveFormsModule,
      SettingItemComponent,
      NgClass
    ], styles: ["\n\n.disabled[_ngcontent-%COMP%] {\n  color: var(--btn-disabled-text-color);\n}\n/*# sourceMappingURL=change-age-restriction.component.css.map */"], changeDetection: 0 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ChangeAgeRestrictionComponent, { className: "ChangeAgeRestrictionComponent", filePath: "src/app/user-settings/change-age-restriction/change-age-restriction.component.ts", lineNumber: 35 });
})();
export {
  ChangeAgeRestrictionComponent
};
//# sourceMappingURL=change-age-restriction.component-HJKJVCN2.js.map
