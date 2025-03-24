import {
  CircularLoaderComponent
} from "./chunk-454HUQZW.js";
import {
  AsyncPipe,
  CommonModule,
  NgIf,
  TranslocoDirective,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate1
} from "./chunk-PYHIUVNJ.js";

// src/app/cards/download-indicator/download-indicator.component.ts
var _c0 = (a0) => ({ percentage: a0 });
function DownloadIndicatorComponent_ng_container_0_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 2);
    \u0275\u0275element(1, "app-circular-loader", 3);
    \u0275\u0275elementStart(2, "span", 4);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const download_r1 = ctx.ngIf;
    const t_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("currentValue", download_r1.progress);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", t_r2("progress", \u0275\u0275pureFunction1(2, _c0, download_r1.progress)), " ");
  }
}
function DownloadIndicatorComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, DownloadIndicatorComponent_ng_container_0_span_1_Template, 4, 4, "span", 1);
    \u0275\u0275pipe(2, "async");
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", \u0275\u0275pipeBind1(2, 1, ctx_r2.download$));
  }
}
var DownloadIndicatorComponent = class _DownloadIndicatorComponent {
  static {
    this.\u0275fac = function DownloadIndicatorComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _DownloadIndicatorComponent)();
    };
  }
  static {
    this.\u0275cmp = \u0275\u0275defineComponent({ type: _DownloadIndicatorComponent, selectors: [["app-download-indicator"]], inputs: { download$: "download$" }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 1, vars: 1, consts: [[4, "transloco", "translocoRead"], ["class", "download", 4, "ngIf"], [1, "download"], [3, "currentValue"], ["role", "status", 1, "visually-hidden"]], template: function DownloadIndicatorComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, DownloadIndicatorComponent_ng_container_0_Template, 3, 3, "ng-container", 0);
      }
      if (rf & 2) {
        \u0275\u0275property("translocoRead", "download-indicator");
      }
    }, dependencies: [CommonModule, NgIf, AsyncPipe, CircularLoaderComponent, TranslocoDirective], styles: ["\n\n.download[_ngcontent-%COMP%] {\n  width: 80px;\n  height: 80px;\n}\n/*# sourceMappingURL=download-indicator.component.css.map */"], changeDetection: 0 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DownloadIndicatorComponent, { className: "DownloadIndicatorComponent", filePath: "src/app/cards/download-indicator/download-indicator.component.ts", lineNumber: 17 });
})();

export {
  DownloadIndicatorComponent
};
//# sourceMappingURL=chunk-3H6WDNS7.js.map
