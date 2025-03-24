import {
  SafeHtmlPipe
} from "./chunk-FLGYJHAG.js";
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
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵsanitizeHtml,
  ɵɵtemplate
} from "./chunk-PYHIUVNJ.js";

// src/app/settings/_components/setting-button/setting-button.component.ts
var _c0 = ["*"];
function SettingButtonComponent_ng_container_0_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 1);
    \u0275\u0275pipe(1, "safeHtml");
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("innerHTML", \u0275\u0275pipeBind1(1, 1, ctx_r0.subtitle), \u0275\u0275sanitizeHtml);
  }
}
function SettingButtonComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div");
    \u0275\u0275projection(2);
    \u0275\u0275template(3, SettingButtonComponent_ng_container_0_Conditional_3_Template, 2, 3, "div", 1);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r0.subtitle ? 3 : -1);
  }
}
var SettingButtonComponent = class _SettingButtonComponent {
  constructor() {
    this.subtitle = "";
  }
  static {
    this.\u0275fac = function SettingButtonComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SettingButtonComponent)();
    };
  }
  static {
    this.\u0275cmp = \u0275\u0275defineComponent({ type: _SettingButtonComponent, selectors: [["app-setting-button"]], inputs: { subtitle: "subtitle" }, standalone: true, features: [\u0275\u0275StandaloneFeature], ngContentSelectors: _c0, decls: 1, vars: 0, consts: [[4, "transloco"], [1, "description", "text-muted", "mt-1", 3, "innerHTML"]], template: function SettingButtonComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275template(0, SettingButtonComponent_ng_container_0_Template, 4, 1, "ng-container", 0);
      }
    }, dependencies: [
      SafeHtmlPipe,
      TranslocoDirective
    ], styles: ["\n\n.description[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n}\n/*# sourceMappingURL=setting-button.component.css.map */"], changeDetection: 0 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SettingButtonComponent, { className: "SettingButtonComponent", filePath: "src/app/settings/_components/setting-button/setting-button.component.ts", lineNumber: 19 });
})();

export {
  SettingButtonComponent
};
//# sourceMappingURL=chunk-4AQVNEIP.js.map
