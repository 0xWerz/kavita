import {
  SeriesService
} from "./chunk-HG4LWHDT.js";
import {
  ConfirmService,
  NgbActiveModal
} from "./chunk-2R2RCU4Y.js";
import {
  ToastrService
} from "./chunk-5J5IKBMT.js";
import {
  DefaultValueAccessor,
  FormControl,
  FormControlName,
  FormGroup,
  FormGroupDirective,
  MinLengthValidator,
  NgControlStatus,
  NgControlStatusGroup,
  ReactiveFormsModule,
  Validators,
  ɵNgNoValidate
} from "./chunk-BPOUBDX2.js";
import {
  ChangeDetectorRef,
  TranslocoDirective,
  __async,
  inject,
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
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-PYHIUVNJ.js";

// src/app/_single-module/review-series-modal/review-series-modal.component.ts
var _c0 = (a0) => ({ count: a0 });
function ReviewSeriesModalComponent_ng_container_0_Conditional_12_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r3 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(t_r3("required"));
  }
}
function ReviewSeriesModalComponent_ng_container_0_Conditional_12_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r3 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(t_r3("min-length", \u0275\u0275pureFunction1(1, _c0, ctx_r1.minLength)));
  }
}
function ReviewSeriesModalComponent_ng_container_0_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9);
    \u0275\u0275template(1, ReviewSeriesModalComponent_ng_container_0_Conditional_12_Conditional_1_Template, 2, 1, "div")(2, ReviewSeriesModalComponent_ng_container_0_Conditional_12_Conditional_2_Template, 2, 3, "div");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_3_0;
    let tmp_4_0;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275conditional(((tmp_3_0 = ctx_r1.reviewGroup.get("reviewBody")) == null ? null : tmp_3_0.errors == null ? null : tmp_3_0.errors.required) ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(((tmp_4_0 = ctx_r1.reviewGroup.get("reviewBody")) == null ? null : tmp_4_0.errors == null ? null : tmp_4_0.errors.minlength) ? 2 : -1);
  }
}
function ReviewSeriesModalComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div")(2, "div", 1)(3, "h4", 2);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 3);
    \u0275\u0275listener("click", function ReviewSeriesModalComponent_ng_container_0_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.close());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 4)(7, "form", 5)(8, "div", 6)(9, "label", 7);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275element(11, "textarea", 8);
    \u0275\u0275template(12, ReviewSeriesModalComponent_ng_container_0_Conditional_12_Template, 3, 2, "div", 9);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(13, "div", 10)(14, "button", 11);
    \u0275\u0275listener("click", function ReviewSeriesModalComponent_ng_container_0_Template_button_click_14_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.delete());
    });
    \u0275\u0275text(15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "button", 12);
    \u0275\u0275listener("click", function ReviewSeriesModalComponent_ng_container_0_Template_button_click_16_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.close());
    });
    \u0275\u0275text(17);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "button", 13);
    \u0275\u0275listener("click", function ReviewSeriesModalComponent_ng_container_0_Template_button_click_18_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.save());
    });
    \u0275\u0275text(19);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    let tmp_6_0;
    const t_r3 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(t_r3("title"));
    \u0275\u0275advance();
    \u0275\u0275attribute("aria-label", t_r3("close"));
    \u0275\u0275advance(2);
    \u0275\u0275property("formGroup", ctx_r1.reviewGroup);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(t_r3("review-label"));
    \u0275\u0275advance();
    \u0275\u0275classProp("is-invalid", ((tmp_6_0 = ctx_r1.reviewGroup.get("reviewBody")) == null ? null : tmp_6_0.invalid) && ((tmp_6_0 = ctx_r1.reviewGroup.get("reviewBody")) == null ? null : tmp_6_0.touched));
    \u0275\u0275property("minlength", ctx_r1.minLength);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.reviewGroup.dirty || ctx_r1.reviewGroup.touched ? 12 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(t_r3("delete"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r3("close"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r3("save"));
  }
}
var ReviewSeriesModalCloseAction;
(function(ReviewSeriesModalCloseAction2) {
  ReviewSeriesModalCloseAction2[ReviewSeriesModalCloseAction2["Create"] = 0] = "Create";
  ReviewSeriesModalCloseAction2[ReviewSeriesModalCloseAction2["Edit"] = 1] = "Edit";
  ReviewSeriesModalCloseAction2[ReviewSeriesModalCloseAction2["Delete"] = 2] = "Delete";
  ReviewSeriesModalCloseAction2[ReviewSeriesModalCloseAction2["Close"] = 3] = "Close";
})(ReviewSeriesModalCloseAction || (ReviewSeriesModalCloseAction = {}));
var ReviewSeriesModalComponent = class _ReviewSeriesModalComponent {
  constructor() {
    this.modal = inject(NgbActiveModal);
    this.seriesService = inject(SeriesService);
    this.cdRef = inject(ChangeDetectorRef);
    this.confirmService = inject(ConfirmService);
    this.toastr = inject(ToastrService);
    this.minLength = 5;
  }
  ngOnInit() {
    this.reviewGroup = new FormGroup({
      reviewBody: new FormControl(this.review.body, [Validators.required, Validators.minLength(this.minLength)])
    });
    this.cdRef.markForCheck();
  }
  close() {
    this.modal.close({ success: false, review: this.review, action: ReviewSeriesModalCloseAction.Close });
  }
  delete() {
    return __async(this, null, function* () {
      if (!(yield this.confirmService.confirm(translate("toasts.delete-review"))))
        return;
      this.seriesService.deleteReview(this.review.seriesId).subscribe(() => {
        this.toastr.success(translate("toasts.review-deleted"));
        this.modal.close({ success: true, review: this.review, action: ReviewSeriesModalCloseAction.Delete });
      });
    });
  }
  save() {
    const model = this.reviewGroup.value;
    if (model.reviewBody.length < this.minLength) {
      return;
    }
    this.seriesService.updateReview(this.review.seriesId, model.reviewBody).subscribe((review) => {
      this.modal.close({ success: true, review, action: ReviewSeriesModalCloseAction.Edit });
    });
  }
  static {
    this.\u0275fac = function ReviewSeriesModalComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ReviewSeriesModalComponent)();
    };
  }
  static {
    this.\u0275cmp = \u0275\u0275defineComponent({ type: _ReviewSeriesModalComponent, selectors: [["app-review-series-modal"]], inputs: { review: "review" }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 1, vars: 1, consts: [[4, "transloco", "translocoRead"], [1, "modal-header"], ["id", "modal-basic-title", 1, "modal-title"], ["type", "button", 1, "btn-close", 3, "click"], [1, "modal-body"], [3, "formGroup"], [1, "row", "g-0", "mt-2"], ["for", "review", 1, "form-label"], ["id", "review", "formControlName", "reviewBody", "rows", "3", "aria-describedby", "body-validations", 1, "form-control", 3, "minlength"], ["id", "body-validations", 1, "invalid-feedback"], [1, "modal-footer"], [1, "btn", "btn-danger", 3, "click"], [1, "btn", "btn-secondary", 3, "click"], ["type", "submit", 1, "btn", "btn-primary", 3, "click"]], template: function ReviewSeriesModalComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, ReviewSeriesModalComponent_ng_container_0_Template, 20, 11, "ng-container", 0);
      }
      if (rf & 2) {
        \u0275\u0275property("translocoRead", "review-series-modal");
      }
    }, dependencies: [ReactiveFormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, MinLengthValidator, FormGroupDirective, FormControlName, TranslocoDirective], changeDetection: 0 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ReviewSeriesModalComponent, { className: "ReviewSeriesModalComponent", filePath: "src/app/_single-module/review-series-modal/review-series-modal.component.ts", lineNumber: 37 });
})();

export {
  ReviewSeriesModalCloseAction,
  ReviewSeriesModalComponent
};
//# sourceMappingURL=chunk-IBPCBIOI.js.map
