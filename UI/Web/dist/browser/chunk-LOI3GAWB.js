import {
  TranslocoDirective,
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
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-PYHIUVNJ.js";

// src/app/shared/_components/promoted-icon/promoted-icon.component.ts
function PromotedIconComponent_ng_container_0_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275element(1, "i", 1);
    \u0275\u0275elementStart(2, "span", 2);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const t_r1 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(t_r1("promoted"));
  }
}
function PromotedIconComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, PromotedIconComponent_ng_container_0_Conditional_1_Template, 4, 1, "span");
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.promoted ? 1 : -1);
  }
}
var PromotedIconComponent = class _PromotedIconComponent {
  constructor() {
    this.promoted = false;
  }
  static {
    this.\u0275fac = function PromotedIconComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _PromotedIconComponent)();
    };
  }
  static {
    this.\u0275cmp = \u0275\u0275defineComponent({ type: _PromotedIconComponent, selectors: [["app-promoted-icon"]], inputs: { promoted: "promoted" }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 1, vars: 1, consts: [[4, "transloco", "translocoRead"], ["aria-hidden", "true", "title", "Promoted", 1, "fa", "fa-angle-double-up", "ms-1"], [1, "visually-hidden"]], template: function PromotedIconComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, PromotedIconComponent_ng_container_0_Template, 2, 1, "ng-container", 0);
      }
      if (rf & 2) {
        \u0275\u0275property("translocoRead", "promoted-icon");
      }
    }, dependencies: [TranslocoDirective], changeDetection: 0 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PromotedIconComponent, { className: "PromotedIconComponent", filePath: "src/app/shared/_components/promoted-icon/promoted-icon.component.ts", lineNumber: 14 });
})();

export {
  PromotedIconComponent
};
//# sourceMappingURL=chunk-LOI3GAWB.js.map
