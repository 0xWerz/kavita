import {
  AgeRating
} from "./chunk-6KPMHNEU.js";
import {
  MetadataService
} from "./chunk-IBO6ECG5.js";
import {
  NgbTooltip
} from "./chunk-2R2RCU4Y.js";
import {
  CheckboxControlValueAccessor,
  FormControl,
  FormControlName,
  FormGroup,
  FormGroupDirective,
  NgControlStatus,
  NgControlStatusGroup,
  NgSelectOption,
  ReactiveFormsModule,
  SelectControlValueAccessor,
  ɵNgNoValidate,
  ɵNgSelectMultipleOption
} from "./chunk-BPOUBDX2.js";
import {
  ChangeDetectorRef,
  EventEmitter,
  NgTemplateOutlet,
  TitleCasePipe,
  TranslocoDirective,
  TranslocoModule,
  ɵsetClassDebugInfo,
  ɵɵNgOnChangesFeature,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainer,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-PYHIUVNJ.js";

// src/app/user-settings/restriction-selector/restriction-selector.component.ts
var _forTrack0 = ($index, $item) => $item.value;
function RestrictionSelectorComponent_ng_container_0_Conditional_1_Conditional_0_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const t_r1 = \u0275\u0275nextContext(3).$implicit;
    \u0275\u0275textInterpolate1(" ", t_r1("not-applicable-for-admins"), " ");
  }
}
function RestrictionSelectorComponent_ng_container_0_Conditional_1_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h4");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3);
    \u0275\u0275template(4, RestrictionSelectorComponent_ng_container_0_Conditional_1_Conditional_0_Conditional_4_Template, 1, 1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r1 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(t_r1("title"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", t_r1("description"), " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.isAdmin ? 4 : -1);
  }
}
function RestrictionSelectorComponent_ng_container_0_Conditional_1_For_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 8);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "titlecase");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const opt_r3 = ctx.$implicit;
    \u0275\u0275property("value", opt_r3.value);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 2, opt_r3.title));
  }
}
function RestrictionSelectorComponent_ng_container_0_Conditional_1_ng_template_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const t_r1 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275textInterpolate(t_r1("include-unknowns-tooltip"));
  }
}
function RestrictionSelectorComponent_ng_container_0_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, RestrictionSelectorComponent_ng_container_0_Conditional_1_Conditional_0_Template, 5, 3);
    \u0275\u0275elementStart(1, "form", 2)(2, "div", 3)(3, "label", 4);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 5)(6, "select", 6)(7, "option", 7);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(9, RestrictionSelectorComponent_ng_container_0_Conditional_1_For_10_Template, 3, 4, "option", 8, _forTrack0);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(11, "div", 3)(12, "div", 9);
    \u0275\u0275element(13, "input", 10);
    \u0275\u0275elementStart(14, "label", 11);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd();
    \u0275\u0275element(16, "i", 12);
    \u0275\u0275elementEnd();
    \u0275\u0275template(17, RestrictionSelectorComponent_ng_container_0_Conditional_1_ng_template_17_Template, 1, 1, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementStart(19, "span", 13);
    \u0275\u0275elementContainer(20, 14);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const includeUnknownsTooltip_r4 = \u0275\u0275reference(18);
    const t_r1 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275conditional(ctx_r1.showContext ? 0 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("formGroup", ctx_r1.restrictionForm);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(t_r1("age-rating-label"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(t_r1("no-restriction"));
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.ageRatings);
    \u0275\u0275advance(4);
    \u0275\u0275property("value", true);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r1("include-unknowns-label"));
    \u0275\u0275advance();
    \u0275\u0275property("ngbTooltip", includeUnknownsTooltip_r4);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngTemplateOutlet", includeUnknownsTooltip_r4);
  }
}
function RestrictionSelectorComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, RestrictionSelectorComponent_ng_container_0_Conditional_1_Template, 21, 8, "form", 2);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.restrictionForm ? 1 : -1);
  }
}
var RestrictionSelectorComponent = class _RestrictionSelectorComponent {
  constructor(metadataService, cdRef) {
    this.metadataService = metadataService;
    this.cdRef = cdRef;
    this.isAdmin = false;
    this.showContext = true;
    this.selected = new EventEmitter();
    this.ageRatings = [];
  }
  ngOnInit() {
    this.restrictionForm = new FormGroup({
      "ageRating": new FormControl(this.member?.ageRestriction.ageRating || AgeRating.NotApplicable || AgeRating.NotApplicable, []),
      "ageRestrictionIncludeUnknowns": new FormControl(this.member?.ageRestriction.includeUnknowns || false, [])
    });
    if (this.isAdmin) {
      this.restrictionForm.get("ageRating")?.disable();
      this.restrictionForm.get("ageRestrictionIncludeUnknowns")?.disable();
    }
    if (this.reset) {
      this.reset.subscribe((e) => {
        this.restrictionForm?.get("ageRating")?.setValue(e.ageRating);
        this.restrictionForm?.get("ageRestrictionIncludeUnknowns")?.setValue(e.includeUnknowns);
        this.cdRef.markForCheck();
      });
    }
    this.restrictionForm.get("ageRating")?.valueChanges.subscribe((e) => {
      this.selected.emit({
        ageRating: parseInt(e, 10),
        includeUnknowns: this.restrictionForm?.get("ageRestrictionIncludeUnknowns")?.value
      });
      if (parseInt(e, 10) === AgeRating.NotApplicable) {
        this.restrictionForm.get("ageRestrictionIncludeUnknowns")?.disable();
      } else {
        this.restrictionForm.get("ageRestrictionIncludeUnknowns")?.enable();
      }
    });
    this.restrictionForm.get("ageRestrictionIncludeUnknowns")?.valueChanges.subscribe((e) => {
      this.selected.emit({
        ageRating: parseInt(this.restrictionForm?.get("ageRating")?.value, 10),
        includeUnknowns: e
      });
    });
    this.metadataService.getAllAgeRatings().subscribe((ratings) => {
      this.ageRatings = ratings;
      this.cdRef.markForCheck();
    });
  }
  ngOnChanges() {
    if (!this.member)
      return;
    this.restrictionForm?.get("ageRating")?.setValue(this.member?.ageRestriction.ageRating || AgeRating.NotApplicable);
    this.restrictionForm?.get("ageRestrictionIncludeUnknowns")?.setValue(this.member?.ageRestriction.includeUnknowns);
    this.cdRef.markForCheck();
  }
  static {
    this.\u0275fac = function RestrictionSelectorComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _RestrictionSelectorComponent)(\u0275\u0275directiveInject(MetadataService), \u0275\u0275directiveInject(ChangeDetectorRef));
    };
  }
  static {
    this.\u0275cmp = \u0275\u0275defineComponent({ type: _RestrictionSelectorComponent, selectors: [["app-restriction-selector"]], inputs: { member: "member", isAdmin: "isAdmin", showContext: "showContext", reset: "reset" }, outputs: { selected: "selected" }, standalone: true, features: [\u0275\u0275NgOnChangesFeature, \u0275\u0275StandaloneFeature], decls: 1, vars: 1, consts: [["includeUnknownsTooltip", ""], [4, "transloco", "translocoRead"], [3, "formGroup"], [1, "mb-3"], ["for", "age-rating", 1, "form-label", "visually-hidden"], [1, "input-group"], ["id", "age-rating", "formControlName", "ageRating", 1, "form-select"], ["value", "-1"], [3, "value"], [1, "form-check", "form-switch"], ["type", "checkbox", "id", "auto-close", "role", "switch", "formControlName", "ageRestrictionIncludeUnknowns", "aria-describedby", "include-unknowns-help", "aria-labelledby", "auto-close-label", 1, "form-check-input", 3, "value"], ["for", "auto-close", 1, "form-check-label"], ["aria-hidden", "true", "placement", "top", "role", "button", "tabindex", "0", 1, "fa", "fa-info-circle", "ms-1", 3, "ngbTooltip"], ["id", "include-unknowns-help", 1, "visually-hidden"], [3, "ngTemplateOutlet"]], template: function RestrictionSelectorComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, RestrictionSelectorComponent_ng_container_0_Template, 2, 1, "ng-container", 1);
      }
      if (rf & 2) {
        \u0275\u0275property("translocoRead", "restriction-selector");
      }
    }, dependencies: [ReactiveFormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, CheckboxControlValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, NgbTooltip, TitleCasePipe, TranslocoModule, TranslocoDirective, NgTemplateOutlet], changeDetection: 0 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(RestrictionSelectorComponent, { className: "RestrictionSelectorComponent", filePath: "src/app/user-settings/restriction-selector/restriction-selector.component.ts", lineNumber: 21 });
})();

export {
  RestrictionSelectorComponent
};
//# sourceMappingURL=chunk-FBZMDUHM.js.map
