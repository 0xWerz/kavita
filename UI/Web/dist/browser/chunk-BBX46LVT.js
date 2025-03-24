import {
  ActionService
} from "./chunk-HTPJQXUV.js";
import {
  FilterService
} from "./chunk-6M2JHRYX.js";
import {
  FilterPipe
} from "./chunk-NGXWDHM5.js";
import {
  NgbTooltip
} from "./chunk-2R2RCU4Y.js";
import {
  DefaultValueAccessor,
  FormControl,
  FormControlName,
  FormGroup,
  FormGroupDirective,
  NgControlStatus,
  NgControlStatusGroup,
  ReactiveFormsModule,
  ɵNgNoValidate
} from "./chunk-BPOUBDX2.js";
import {
  APP_BASE_HREF,
  ChangeDetectorRef,
  TranslocoDirective,
  __async,
  inject,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
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
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-PYHIUVNJ.js";

// src/app/sidenav/_components/manage-smart-filters/manage-smart-filters.component.ts
var _forTrack0 = ($index, $item) => $item.name;
function ManageSmartFiltersComponent_ng_container_0_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 2)(1, "label", 4);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 5);
    \u0275\u0275element(4, "input", 6);
    \u0275\u0275elementStart(5, "button", 7);
    \u0275\u0275listener("click", function ManageSmartFiltersComponent_ng_container_0_Conditional_2_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.resetFilter());
    });
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const t_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r3("filter"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(t_r3("clear"));
  }
}
function ManageSmartFiltersComponent_ng_container_0_For_5_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 12);
    \u0275\u0275elementStart(1, "span", 11);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r3 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275property("ngbTooltip", t_r3("errored"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r3("errored"));
  }
}
function ManageSmartFiltersComponent_ng_container_0_For_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li", 3)(1, "span");
    \u0275\u0275template(2, ManageSmartFiltersComponent_ng_container_0_For_5_Conditional_2_Template, 3, 2);
    \u0275\u0275elementStart(3, "a", 8);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "button", 9);
    \u0275\u0275listener("click", function ManageSmartFiltersComponent_ng_container_0_For_5_Template_button_click_5_listener() {
      const f_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.deleteFilter(f_r5));
    });
    \u0275\u0275element(6, "i", 10);
    \u0275\u0275elementStart(7, "span", 11);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const f_r5 = ctx.$implicit;
    const t_r3 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.isErrored(f_r5) ? 2 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("href", ctx_r1.baseUrl + "all-series?" + f_r5.filter, \u0275\u0275sanitizeUrl)("target", ctx_r1.target);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(f_r5.name);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(t_r3("delete"));
  }
}
function ManageSmartFiltersComponent_ng_container_0_ForEmpty_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 3);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", t_r3("no-data"), " ");
  }
}
function ManageSmartFiltersComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "form", 1);
    \u0275\u0275template(2, ManageSmartFiltersComponent_ng_container_0_Conditional_2_Template, 7, 2, "div", 2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "ul");
    \u0275\u0275repeaterCreate(4, ManageSmartFiltersComponent_ng_container_0_For_5_Template, 9, 5, "li", 3, _forTrack0, false, ManageSmartFiltersComponent_ng_container_0_ForEmpty_6_Template, 2, 1, "li", 3);
    \u0275\u0275pipe(7, "filter");
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("formGroup", ctx_r1.listForm);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.filters.length >= 3 ? 2 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(\u0275\u0275pipeBind2(7, 3, ctx_r1.filters, ctx_r1.filterList));
  }
}
var ManageSmartFiltersComponent = class _ManageSmartFiltersComponent {
  constructor() {
    this.filterService = inject(FilterService);
    this.cdRef = inject(ChangeDetectorRef);
    this.actionService = inject(ActionService);
    this.baseUrl = inject(APP_BASE_HREF);
    this.target = "_blank";
    this.filters = [];
    this.listForm = new FormGroup({
      "filterQuery": new FormControl("", [])
    });
    this.filterList = (listItem) => {
      const filterVal = (this.listForm.value.filterQuery || "").toLowerCase();
      return listItem.name.toLowerCase().indexOf(filterVal) >= 0;
    };
    this.loadData();
  }
  loadData() {
    this.filterService.getAllFilters().subscribe((filters) => {
      this.filters = filters;
      this.cdRef.markForCheck();
    });
  }
  resetFilter() {
    this.listForm.get("filterQuery")?.setValue("");
    this.cdRef.markForCheck();
  }
  isErrored(filter) {
    return !decodeURIComponent(filter.filter).includes("\xA6");
  }
  deleteFilter(f) {
    return __async(this, null, function* () {
      yield this.actionService.deleteFilter(f.id, (success) => {
        if (!success)
          return;
        this.resetFilter();
        this.loadData();
      });
    });
  }
  static {
    this.\u0275fac = function ManageSmartFiltersComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ManageSmartFiltersComponent)();
    };
  }
  static {
    this.\u0275cmp = \u0275\u0275defineComponent({ type: _ManageSmartFiltersComponent, selectors: [["app-manage-smart-filters"]], inputs: { target: "target" }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 1, vars: 1, consts: [[4, "transloco", "translocoRead"], [3, "formGroup"], [1, "mb-3"], [1, "list-group-item"], ["for", "filter", 1, "form-label"], [1, "input-group"], ["id", "filter", "autocomplete", "off", "formControlName", "filterQuery", "type", "text", "aria-describedby", "reset-input", 1, "form-control"], ["type", "button", "id", "reset-input", 1, "btn", "btn-outline-secondary", 3, "click"], [3, "href", "target"], [1, "btn", "btn-danger", "float-end", 3, "click"], ["aria-hidden", "true", 1, "fa-solid", "fa-trash"], [1, "visually-hidden"], [1, "fa-solid", "fa-triangle-exclamation", "red", "me-2", 3, "ngbTooltip"]], template: function ManageSmartFiltersComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, ManageSmartFiltersComponent_ng_container_0_Template, 8, 6, "ng-container", 0);
      }
      if (rf & 2) {
        \u0275\u0275property("translocoRead", "manage-smart-filters");
      }
    }, dependencies: [ReactiveFormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, TranslocoDirective, FilterPipe, NgbTooltip], styles: ["\n\nul[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n}\nul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  padding: 0.5rem 1rem;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n  border-radius: 5px;\n  margin: 5px 0;\n  color: var(--list-group-hover-text-color);\n  background-color: var(--card-bg-color);\n}\nul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.red[_ngcontent-%COMP%] {\n  color: var(--error-color);\n}\n/*# sourceMappingURL=manage-smart-filters.component.css.map */"], changeDetection: 0 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ManageSmartFiltersComponent, { className: "ManageSmartFiltersComponent", filePath: "src/app/sidenav/_components/manage-smart-filters/manage-smart-filters.component.ts", lineNumber: 20 });
})();

export {
  ManageSmartFiltersComponent
};
//# sourceMappingURL=chunk-BBX46LVT.js.map
