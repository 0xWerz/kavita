import {
  SeriesPreviewDrawerComponent
} from "./chunk-3AMMXKYH.js";
import "./chunk-YFCV4WCV.js";
import "./chunk-5EJJ6TJW.js";
import {
  ProviderImagePipe
} from "./chunk-E4IH7S3P.js";
import "./chunk-SBBWMOEE.js";
import "./chunk-XZ2P7HP2.js";
import "./chunk-HTPJQXUV.js";
import "./chunk-HG4LWHDT.js";
import "./chunk-6M2JHRYX.js";
import "./chunk-D2FQ65JS.js";
import "./chunk-HSFLUHPU.js";
import "./chunk-4AQVNEIP.js";
import "./chunk-2XUUWUDC.js";
import "./chunk-AOHQX7B2.js";
import "./chunk-ECSSQE2U.js";
import "./chunk-JGJJUNHA.js";
import "./chunk-BJ7U7OXN.js";
import "./chunk-DMXJBIB5.js";
import "./chunk-GX7EGMKV.js";
import "./chunk-M6XH7OA7.js";
import "./chunk-IQIEDCQT.js";
import "./chunk-ZLESQ73K.js";
import "./chunk-NGXWDHM5.js";
import "./chunk-XZ5MKEYT.js";
import "./chunk-PBM62GK4.js";
import "./chunk-MABWAPXH.js";
import "./chunk-KMTIWVED.js";
import "./chunk-HXDVBBHR.js";
import "./chunk-65GP3B4U.js";
import {
  ImageComponent
} from "./chunk-2JLAQ3MZ.js";
import "./chunk-TPURWX2Y.js";
import "./chunk-IBO6ECG5.js";
import "./chunk-BX5PUGWH.js";
import "./chunk-KJWRNOWO.js";
import "./chunk-D7CIAEAO.js";
import "./chunk-LGLLZBOI.js";
import "./chunk-EA72DBFY.js";
import "./chunk-HN36WWH3.js";
import "./chunk-R5PSFMI2.js";
import "./chunk-A6JEQ5GB.js";
import "./chunk-RSMGJKYW.js";
import "./chunk-U2DWQJI2.js";
import {
  NgbOffcanvas,
  NgbTooltip
} from "./chunk-2R2RCU4Y.js";
import "./chunk-5J5IKBMT.js";
import "./chunk-PUXELTB2.js";
import "./chunk-FLGYJHAG.js";
import {
  ReactiveFormsModule
} from "./chunk-BPOUBDX2.js";
import "./chunk-CQADFT7F.js";
import {
  NgOptimizedImage,
  TranslocoDirective,
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
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵpropertyInterpolate,
  ɵɵpureFunction0,
  ɵɵqueryRefresh,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate1,
  ɵɵviewQuery
} from "./chunk-PYHIUVNJ.js";

// src/app/cards/external-series-card/external-series-card.component.ts
var _c0 = ["link"];
var _c1 = () => ({ "border-radius": ".25rem .25rem 0 0" });
function ExternalSeriesCardComponent_ng_container_0_Conditional_1_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275element(0, "img", 10);
    \u0275\u0275pipe(1, "providerImage");
    \u0275\u0275elementStart(2, "a", 11, 0)(4, "span", 12);
    \u0275\u0275listener("click", function ExternalSeriesCardComponent_ng_container_0_Conditional_1_Conditional_9_Template_span_click_4_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.handleClick());
    });
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("ngSrc", \u0275\u0275pipeBind1(1, 5, ctx_r1.data.provider));
    \u0275\u0275advance(2);
    \u0275\u0275property("href", ctx_r1.data.url, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(2);
    \u0275\u0275propertyInterpolate("id", ctx_r1.data.name);
    \u0275\u0275property("ngbTooltip", ctx_r1.data.name);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.data.name, " ");
  }
}
function ExternalSeriesCardComponent_ng_container_0_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 2)(1, "div", 3);
    \u0275\u0275listener("click", function ExternalSeriesCardComponent_ng_container_0_Conditional_1_Template_div_click_1_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.handleClick());
    });
    \u0275\u0275elementContainerStart(2);
    \u0275\u0275element(3, "app-image", 4);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(4);
    \u0275\u0275elementStart(5, "div", 5);
    \u0275\u0275element(6, "div", 6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
    \u0275\u0275element(7, "div", 7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 8);
    \u0275\u0275template(9, ExternalSeriesCardComponent_ng_container_0_Conditional_1_Conditional_9_Template, 6, 7);
    \u0275\u0275element(10, "span", 9);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275property("styles", \u0275\u0275pureFunction0(3, _c1))("imageUrl", ctx_r1.data.coverUrl);
    \u0275\u0275advance(6);
    \u0275\u0275conditional(ctx_r1.data.name.length > 0 ? 9 : -1);
  }
}
function ExternalSeriesCardComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, ExternalSeriesCardComponent_ng_container_0_Conditional_1_Template, 11, 4, "div", 2);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.data !== void 0 ? 1 : -1);
  }
}
var ExternalSeriesCardComponent = class _ExternalSeriesCardComponent {
  constructor() {
    this.offcanvasService = inject(NgbOffcanvas);
    this.previewOnClick = false;
  }
  handleClick() {
    if (this.previewOnClick) {
      const ref = this.offcanvasService.open(SeriesPreviewDrawerComponent, { position: "end", panelClass: "" });
      ref.componentInstance.isExternalSeries = true;
      ref.componentInstance.aniListId = this.data.aniListId;
      ref.componentInstance.malId = this.data.malId;
      ref.componentInstance.name = this.data.name;
      return;
    }
    if (this.link) {
      this.link.nativeElement.click();
    }
  }
  static {
    this.\u0275fac = function ExternalSeriesCardComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ExternalSeriesCardComponent)();
    };
  }
  static {
    this.\u0275cmp = \u0275\u0275defineComponent({ type: _ExternalSeriesCardComponent, selectors: [["app-external-series-card"]], viewQuery: function ExternalSeriesCardComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(_c0, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.link = _t.first);
      }
    }, inputs: { data: "data", previewOnClick: "previewOnClick" }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 1, vars: 1, consts: [["link", ""], [4, "transloco", "translocoRead"], [1, "card-item-container", "card", "clickable", "position-relative"], [1, "overlay", 3, "click"], ["height", "232.91px", "width", "160px", 3, "styles", "imageUrl"], [1, "badge-container"], [1, "not-read-badge"], [1, "card-overlay"], [1, "card-title-container"], [1, "card-actions"], ["width", "20", "height", "20", "alt", "", 1, "me-1", 3, "ngSrc"], ["target", "_blank", "rel", "noreferrer nofollow", 1, "card-title", 3, "href"], ["placement", "top", "tabindex", "0", 1, "card-title", 3, "click", "id", "ngbTooltip"]], template: function ExternalSeriesCardComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, ExternalSeriesCardComponent_ng_container_0_Template, 2, 1, "ng-container", 1);
      }
      if (rf & 2) {
        \u0275\u0275property("translocoRead", "external-series-card");
      }
    }, dependencies: [ImageComponent, NgbTooltip, ReactiveFormsModule, TranslocoDirective, NgOptimizedImage, ProviderImagePipe], styles: ["\n\n.error-banner[_ngcontent-%COMP%] {\n  width: 160px;\n  height: 18px;\n  background-color: var(--toast-error-bg-color);\n  font-size: 12px;\n  color: white;\n  text-transform: uppercase;\n  text-align: center;\n  position: absolute;\n  top: 0px;\n  right: 0px;\n}\n.selected-highlight[_ngcontent-%COMP%] {\n  outline: 2px solid var(--primary-color);\n}\n.progress-banner[_ngcontent-%COMP%] {\n  width: 160px;\n  height: 5px;\n}\n.progress-banner[_ngcontent-%COMP%]   .progress[_ngcontent-%COMP%] {\n  color: var(--card-progress-bar-color);\n  background-color: transparent;\n}\n.download[_ngcontent-%COMP%] {\n  width: 80px;\n  height: 80px;\n  position: absolute;\n  top: 25%;\n  right: 30%;\n}\n.badge-container[_ngcontent-%COMP%] {\n  border-radius: 4px;\n  display: block;\n  height: 232.91px;\n  left: 0;\n  overflow: hidden;\n  pointer-events: none;\n  position: absolute;\n  top: 0;\n  width: 160px;\n}\n.not-read-badge[_ngcontent-%COMP%] {\n  position: absolute;\n  top: calc(-1 * var(--card-progress-triangle-size) / 2);\n  right: -14px;\n  z-index: 1000;\n  height: var(--card-progress-triangle-size);\n  width: var(--card-progress-triangle-size);\n  background-color: var(--primary-color);\n  transform: rotate(45deg);\n}\n.bulk-mode[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 5px;\n  left: 5px;\n  visibility: hidden;\n}\n.bulk-mode.always-show[_ngcontent-%COMP%] {\n  visibility: visible !important;\n  width: 160px;\n  height: 232.91px;\n}\n.bulk-mode[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%] {\n  width: 20px;\n  height: 20px;\n  color: var(--checkbox-bg-color);\n}\n.meta-title[_ngcontent-%COMP%] {\n  display: none;\n  visibility: hidden;\n  pointer-events: none;\n  border-width: 0;\n}\n.overlay[_ngcontent-%COMP%]:hover   .bulk-mode[_ngcontent-%COMP%] {\n  visibility: visible;\n  z-index: 110;\n}\n.overlay[_ngcontent-%COMP%]:hover:hover {\n  visibility: visible;\n}\n.overlay[_ngcontent-%COMP%]:hover:hover   .overlay-information[_ngcontent-%COMP%] {\n  visibility: visible;\n  display: block;\n}\n.overlay[_ngcontent-%COMP%]:hover:hover    + .meta-title[_ngcontent-%COMP%] {\n  display: -webkit-box;\n  visibility: visible;\n  pointer-events: none;\n}\n.overlay[_ngcontent-%COMP%]:hover   .overlay-information[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 232.91px;\n  transition: all 0.2s;\n  border-top-left-radius: 4px;\n  border-top-right-radius: 4px;\n}\n.overlay[_ngcontent-%COMP%]:hover   .overlay-information[_ngcontent-%COMP%]:hover {\n  background-color: var(--card-overlay-hover-bg-color);\n  cursor: pointer;\n}\n.overlay[_ngcontent-%COMP%]:hover   .overlay-information[_ngcontent-%COMP%]   .overlay-information--centered[_ngcontent-%COMP%] {\n  position: absolute;\n  background-color: rgba(0, 0, 0, 0.7);\n  border-radius: 50px;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  z-index: 115;\n}\n.overlay[_ngcontent-%COMP%]:hover   .overlay-information[_ngcontent-%COMP%]   .overlay-information--centered[_ngcontent-%COMP%]:hover {\n  background-color: var(--primary-color) !important;\n  cursor: pointer;\n}\n.overlay[_ngcontent-%COMP%]   .count[_ngcontent-%COMP%] {\n  top: 5px;\n  right: 10px;\n  position: absolute;\n}\n.card-actions[_ngcontent-%COMP%] {\n  z-index: 115;\n}\n.library[_ngcontent-%COMP%] {\n  font-size: 13px;\n  text-decoration: none;\n  margin-top: 0px;\n}\n.card-title-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 0 5px;\n}\n.card-title-container[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:first-child {\n  min-width: 22px;\n}\n.card-title-container[_ngcontent-%COMP%]   .card-title[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  margin: 0;\n  text-align: center;\n  max-width: 90px;\n}\n.card-title-container[_ngcontent-%COMP%]   .card-title[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.card-actions[_ngcontent-%COMP%] {\n  min-width: 15.82px;\n}\n.card-format[_ngcontent-%COMP%] {\n  min-width: 22px;\n}\n  app-card-actionables .dropdown .dropdown-toggle {\n  padding: 0 5px;\n}\n.meta-title[_ngcontent-%COMP%]   .card-title[_ngcontent-%COMP%] {\n  max-width: unset;\n}\n.card-title[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  margin: 0;\n  padding: 10px 0;\n  text-align: center;\n  max-width: 120px;\n}\n.card-title[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.card-body[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:nth-child(2) {\n  height: 40px;\n  overflow: hidden;\n  -webkit-line-clamp: 2;\n  display: -webkit-box;\n  overflow: hidden;\n  -webkit-box-orient: vertical;\n  font-size: 0.8rem;\n}\n.overlay-information[_ngcontent-%COMP%] {\n  visibility: hidden;\n  display: none;\n}\n.overlay-information[_ngcontent-%COMP%]   .card-title[_ngcontent-%COMP%] {\n  padding: 10px;\n}\n.chapter[_ngcontent-%COMP%]   .overlay-information--centered[_ngcontent-%COMP%]   div[_ngcontent-%COMP%], \n.volume[_ngcontent-%COMP%]   .overlay-information--centered[_ngcontent-%COMP%]   div[_ngcontent-%COMP%], \n.series[_ngcontent-%COMP%]   .overlay-information--centered[_ngcontent-%COMP%]   div[_ngcontent-%COMP%], \n.expected[_ngcontent-%COMP%]   .overlay-information--centered[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  height: 32px;\n  width: 32px;\n}\n.chapter[_ngcontent-%COMP%]   .overlay-information--centered[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   i[_ngcontent-%COMP%], \n.volume[_ngcontent-%COMP%]   .overlay-information--centered[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   i[_ngcontent-%COMP%], \n.series[_ngcontent-%COMP%]   .overlay-information--centered[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   i[_ngcontent-%COMP%], \n.expected[_ngcontent-%COMP%]   .overlay-information--centered[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 1.4rem;\n  line-height: 32px;\n}\na[_ngcontent-%COMP%] {\n  color: var(--card-text-color);\n}\na[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n.card-title[_ngcontent-%COMP%] {\n  padding: 5px 0;\n  max-width: unset;\n}\n/*# sourceMappingURL=external-series-card.component.css.map */"], changeDetection: 0 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ExternalSeriesCardComponent, { className: "ExternalSeriesCardComponent", filePath: "src/app/cards/external-series-card/external-series-card.component.ts", lineNumber: 27 });
})();
export {
  ExternalSeriesCardComponent
};
//# sourceMappingURL=external-series-card.component-2MG2R4BC.js.map
