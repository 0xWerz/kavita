import {
  CommonModule,
  NgIf,
  TranslocoDirective,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵclassMapInterpolate1,
  ɵɵdefineComponent,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵreference,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-PYHIUVNJ.js";

// src/app/shared/loading/loading.component.ts
function LoadingComponent_ng_container_0_ng_container_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 4)(2, "div", 5)(3, "span", 6);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const t_r1 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275classMapInterpolate1("spinner-border ", ctx_r1.size, " text-primary");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r1("loading"));
  }
}
function LoadingComponent_ng_container_0_ng_container_1_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7)(1, "div", 5)(2, "span", 6);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const t_r1 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275classMapInterpolate1("spinner-border ", ctx_r1.size, " text-primary");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r1("loading"));
  }
}
function LoadingComponent_ng_container_0_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, LoadingComponent_ng_container_0_ng_container_1_ng_container_1_Template, 5, 4, "ng-container", 3)(2, LoadingComponent_ng_container_0_ng_container_1_ng_template_2_Template, 4, 4, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const relative_r3 = \u0275\u0275reference(3);
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.absolute)("ngIfElse", relative_r3);
  }
}
function LoadingComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, LoadingComponent_ng_container_0_ng_container_1_Template, 4, 2, "ng-container", 2);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.loading);
  }
}
var LoadingComponent = class _LoadingComponent {
  constructor() {
    this.loading = false;
    this.message = "";
    this.size = "";
    this.absolute = false;
  }
  static {
    this.\u0275fac = function LoadingComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _LoadingComponent)();
    };
  }
  static {
    this.\u0275cmp = \u0275\u0275defineComponent({ type: _LoadingComponent, selectors: [["app-loading"]], inputs: { loading: "loading", message: "message", size: "size", absolute: "absolute" }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 1, vars: 1, consts: [["relative", ""], [4, "transloco", "translocoRead"], [4, "ngIf"], [4, "ngIf", "ngIfElse"], [1, "position-absolute", "top-50", "start-50", "translate-middle", 2, "z-index", "999"], ["role", "status"], [1, "visually-hidden"], [1, "d-flex", "justify-content-center"]], template: function LoadingComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, LoadingComponent_ng_container_0_Template, 2, 1, "ng-container", 1);
      }
      if (rf & 2) {
        \u0275\u0275property("translocoRead", "common");
      }
    }, dependencies: [CommonModule, NgIf, TranslocoDirective], changeDetection: 0 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LoadingComponent, { className: "LoadingComponent", filePath: "src/app/shared/loading/loading.component.ts", lineNumber: 13 });
})();

export {
  LoadingComponent
};
//# sourceMappingURL=chunk-D7CIAEAO.js.map
