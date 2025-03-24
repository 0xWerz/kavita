import {
  MangaFormatPipe
} from "./chunk-RMZ6EY72.js";
import {
  MangaFormat
} from "./chunk-RSMGJKYW.js";
import {
  NgbTooltip
} from "./chunk-2R2RCU4Y.js";
import {
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵclassMap,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵdefinePipe,
  ɵɵelement,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵpropertyInterpolate,
  ɵɵtemplate
} from "./chunk-PYHIUVNJ.js";

// src/app/_pipes/manga-format-icon.pipe.ts
var MangaFormatIconPipe = class _MangaFormatIconPipe {
  transform(format) {
    switch (format) {
      case MangaFormat.EPUB:
        return "fa fa-book";
      case MangaFormat.ARCHIVE:
        return "fa-solid fa-file-zipper";
      case MangaFormat.IMAGE:
        return "fa-solid fa-file-image";
      case MangaFormat.PDF:
        return "fa-solid fa-file-pdf";
      case MangaFormat.UNKNOWN:
        return "fa-solid fa-file-circle-question";
    }
  }
  static {
    this.\u0275fac = function MangaFormatIconPipe_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _MangaFormatIconPipe)();
    };
  }
  static {
    this.\u0275pipe = \u0275\u0275definePipe({ name: "mangaFormatIcon", type: _MangaFormatIconPipe, pure: true, standalone: true });
  }
};

// src/app/shared/series-format/series-format.component.ts
var _c0 = ["*"];
function SeriesFormatComponent_Conditional_0_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 2);
    \u0275\u0275pipe(1, "mangaFormatIcon");
    \u0275\u0275pipe(2, "mangaFormat");
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275classMap(\u0275\u0275pipeBind1(1, 4, ctx_r0.format));
    \u0275\u0275propertyInterpolate("title", \u0275\u0275pipeBind1(2, 6, ctx_r0.format));
  }
}
function SeriesFormatComponent_Conditional_0_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 3);
    \u0275\u0275pipe(1, "mangaFormatIcon");
    \u0275\u0275pipe(2, "mangaFormat");
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275classMap(\u0275\u0275pipeBind1(1, 4, ctx_r0.format));
    \u0275\u0275propertyInterpolate("ngbTooltip", \u0275\u0275pipeBind1(2, 6, ctx_r0.format));
  }
}
function SeriesFormatComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, SeriesFormatComponent_Conditional_0_Conditional_0_Template, 3, 8, "i", 0)(1, SeriesFormatComponent_Conditional_0_Conditional_1_Template, 3, 8, "i", 1);
    \u0275\u0275projection(2);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275conditional(ctx_r0.useTitle ? 0 : 1);
  }
}
var SeriesFormatComponent = class _SeriesFormatComponent {
  constructor() {
    this.MangaFormat = MangaFormat;
    this.format = MangaFormat.UNKNOWN;
    this.useTitle = true;
  }
  static {
    this.\u0275fac = function SeriesFormatComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SeriesFormatComponent)();
    };
  }
  static {
    this.\u0275cmp = \u0275\u0275defineComponent({ type: _SeriesFormatComponent, selectors: [["app-series-format"]], inputs: { format: "format", useTitle: "useTitle" }, standalone: true, features: [\u0275\u0275StandaloneFeature], ngContentSelectors: _c0, decls: 1, vars: 1, consts: [["aria-hidden", "true", 3, "class", "title"], ["aria-hidden", "true", 3, "class", "ngbTooltip"], ["aria-hidden", "true", 3, "title"], ["aria-hidden", "true", 3, "ngbTooltip"]], template: function SeriesFormatComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275template(0, SeriesFormatComponent_Conditional_0_Template, 3, 1);
      }
      if (rf & 2) {
        \u0275\u0275conditional(ctx.format !== ctx.MangaFormat.UNKNOWN ? 0 : -1);
      }
    }, dependencies: [
      MangaFormatIconPipe,
      MangaFormatPipe,
      NgbTooltip
    ], styles: ["\n\ni[_ngcontent-%COMP%] {\n  padding: 0 5px;\n}\n/*# sourceMappingURL=series-format.component.css.map */"], changeDetection: 0 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SeriesFormatComponent, { className: "SeriesFormatComponent", filePath: "src/app/shared/series-format/series-format.component.ts", lineNumber: 19 });
})();

export {
  SeriesFormatComponent
};
//# sourceMappingURL=chunk-FAULLNLJ.js.map
