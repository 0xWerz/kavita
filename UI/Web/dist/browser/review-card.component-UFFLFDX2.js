import {
  ReviewSeriesModalComponent
} from "./chunk-IBPCBIOI.js";
import {
  ProviderImagePipe
} from "./chunk-E4IH7S3P.js";
import "./chunk-HG4LWHDT.js";
import {
  ReadMoreComponent
} from "./chunk-BJ7U7OXN.js";
import {
  DefaultValuePipe
} from "./chunk-KMTIWVED.js";
import "./chunk-2JLAQ3MZ.js";
import "./chunk-TPURWX2Y.js";
import "./chunk-BX5PUGWH.js";
import {
  ScrobbleProvider
} from "./chunk-R5PSFMI2.js";
import "./chunk-A6JEQ5GB.js";
import "./chunk-RSMGJKYW.js";
import {
  AccountService
} from "./chunk-U2DWQJI2.js";
import {
  NgbActiveModal,
  NgbModal
} from "./chunk-2R2RCU4Y.js";
import "./chunk-5J5IKBMT.js";
import "./chunk-PUXELTB2.js";
import {
  SafeHtmlPipe
} from "./chunk-FLGYJHAG.js";
import {
  ReactiveFormsModule
} from "./chunk-BPOUBDX2.js";
import "./chunk-CQADFT7F.js";
import {
  ChangeDetectorRef,
  DOCUMENT,
  EventEmitter,
  NgOptimizedImage,
  TranslocoDirective,
  ViewContainerRef,
  inject,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
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
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵqueryRefresh,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeHtml,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵviewQuery
} from "./chunk-PYHIUVNJ.js";

// src/app/_single-module/spoiler/spoiler.component.ts
function SpoilerComponent_ng_container_0_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(t_r3("click-to-show"));
  }
}
function SpoilerComponent_ng_container_0_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 2);
    \u0275\u0275pipe(1, "safeHtml");
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("innerHTML", \u0275\u0275pipeBind1(1, 1, ctx_r1.html), \u0275\u0275sanitizeHtml);
  }
}
function SpoilerComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 1);
    \u0275\u0275listener("click", function SpoilerComponent_ng_container_0_Template_div_click_1_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggle());
    });
    \u0275\u0275template(2, SpoilerComponent_ng_container_0_Conditional_2_Template, 2, 1, "span")(3, SpoilerComponent_ng_container_0_Conditional_3_Template, 2, 3, "div", 2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275attribute("aria-expanded", !ctx_r1.isCollapsed);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.isCollapsed ? 2 : 3);
  }
}
var SpoilerComponent = class _SpoilerComponent {
  constructor() {
    this.isCollapsed = true;
    this.cdRef = inject(ChangeDetectorRef);
    this.isCollapsed = true;
    this.cdRef.markForCheck();
  }
  ngOnInit() {
    this.isCollapsed = true;
    this.cdRef.markForCheck();
  }
  toggle() {
    this.isCollapsed = !this.isCollapsed;
    this.cdRef.markForCheck();
  }
  static {
    this.\u0275fac = function SpoilerComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SpoilerComponent)();
    };
  }
  static {
    this.\u0275cmp = \u0275\u0275defineComponent({ type: _SpoilerComponent, selectors: [["app-spoiler"]], inputs: { html: "html" }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 1, vars: 1, consts: [[4, "transloco", "translocoRead"], ["tabindex", "0", 1, "btn", "spoiler", 3, "click"], [3, "innerHTML"]], template: function SpoilerComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, SpoilerComponent_ng_container_0_Template, 4, 2, "ng-container", 0);
      }
      if (rf & 2) {
        \u0275\u0275property("translocoRead", "spoiler");
      }
    }, dependencies: [SafeHtmlPipe, TranslocoDirective], styles: ["/* src/app/_single-module/spoiler/spoiler.component.scss */\n.spoiler {\n  background-color: var(--review-spoiler-bg-color);\n  color: var(--review-spoiler-text-color);\n  cursor: pointer;\n}\n/*# sourceMappingURL=spoiler.component.css.map */\n"], encapsulation: 2, changeDetection: 0 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SpoilerComponent, { className: "SpoilerComponent", filePath: "src/app/_single-module/spoiler/spoiler.component.ts", lineNumber: 22 });
})();

// src/app/_single-module/review-card-modal/review-card-modal.component.ts
var _c0 = ["container"];
var _c1 = (a0) => ({ username: a0 });
function ReviewCardModalComponent_ng_container_0_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 4);
    \u0275\u0275pipe(1, "providerImage");
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngSrc", \u0275\u0275pipeBind1(1, 1, ctx_r1.review.provider));
  }
}
function ReviewCardModalComponent_ng_container_0_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "p", 7);
    \u0275\u0275pipe(1, "safeHtml");
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("innerHTML", \u0275\u0275pipeBind1(1, 1, ctx_r1.review.tagline), \u0275\u0275sanitizeHtml);
  }
}
function ReviewCardModalComponent_ng_container_0_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 10);
    \u0275\u0275pipe(1, "safeHtml");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r3 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("href", \u0275\u0275pipeBind1(1, 3, ctx_r1.review.siteUrl), \u0275\u0275sanitizeUrl)("title", ctx_r1.review.siteUrl);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", t_r3("go-to-review"), " ");
  }
}
function ReviewCardModalComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div")(2, "div", 2)(3, "h4", 3);
    \u0275\u0275text(4);
    \u0275\u0275template(5, ReviewCardModalComponent_ng_container_0_Conditional_5_Template, 2, 3, "img", 4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "button", 5);
    \u0275\u0275listener("click", function ReviewCardModalComponent_ng_container_0_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.close());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 6);
    \u0275\u0275template(8, ReviewCardModalComponent_ng_container_0_Conditional_8_Template, 2, 3, "p", 7);
    \u0275\u0275element(9, "p", 8, 0);
    \u0275\u0275pipe(11, "safeHtml");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 9);
    \u0275\u0275template(13, ReviewCardModalComponent_ng_container_0_Conditional_13_Template, 3, 5, "a", 10);
    \u0275\u0275elementStart(14, "button", 11);
    \u0275\u0275listener("click", function ReviewCardModalComponent_ng_container_0_Template_button_click_14_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.close());
    });
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const t_r3 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", t_r3("user-review", \u0275\u0275pureFunction1(9, _c1, ctx_r1.review.username)), " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.review.isExternal ? 5 : -1);
    \u0275\u0275advance();
    \u0275\u0275attribute("aria-label", t_r3("close"));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.review.tagline ? 8 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("innerHTML", \u0275\u0275pipeBind1(11, 7, ctx_r1.review.body), \u0275\u0275sanitizeHtml);
    \u0275\u0275advance(4);
    \u0275\u0275conditional(ctx_r1.review.siteUrl ? 13 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r3("close"));
  }
}
var ReviewCardModalComponent = class _ReviewCardModalComponent {
  constructor(document) {
    this.document = document;
    this.modal = inject(NgbActiveModal);
  }
  close() {
    this.modal.close();
  }
  ngAfterViewInit() {
    const spoilers = this.document.querySelectorAll("span.spoiler");
    for (let i = 0; i < spoilers.length; i++) {
      const spoiler = spoilers[i];
      const componentRef = this.container.createComponent(SpoilerComponent);
      componentRef.instance.html = spoiler.innerHTML;
      if (spoiler.parentNode != null) {
        spoiler.parentNode.replaceChild(componentRef.location.nativeElement, spoiler);
      }
      componentRef.instance.cdRef.markForCheck();
    }
  }
  static {
    this.\u0275fac = function ReviewCardModalComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ReviewCardModalComponent)(\u0275\u0275directiveInject(DOCUMENT));
    };
  }
  static {
    this.\u0275cmp = \u0275\u0275defineComponent({ type: _ReviewCardModalComponent, selectors: [["app-review-card-modal"]], viewQuery: function ReviewCardModalComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(_c0, 5, ViewContainerRef);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.container = _t.first);
      }
    }, inputs: { review: "review" }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 1, vars: 1, consts: [["container", ""], [4, "transloco", "translocoRead"], [1, "modal-header"], ["id", "modal-basic-title", 1, "modal-title"], ["width", "20", "height", "20", "alt", "", 1, "me-1", 3, "ngSrc"], ["type", "button", 1, "btn-close", 3, "click"], [1, "modal-body", "scrollable-modal"], [3, "innerHTML"], [1, "img-max-width", 3, "innerHTML"], [1, "modal-footer"], ["target", "_blank", "rel", "noopener noreferrer", 1, "btn", "btn-icon", 3, "href", "title"], ["type", "submit", 1, "btn", "btn-primary", 3, "click"]], template: function ReviewCardModalComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, ReviewCardModalComponent_ng_container_0_Template, 16, 11, "ng-container", 1);
      }
      if (rf & 2) {
        \u0275\u0275property("translocoRead", "review-card-modal");
      }
    }, dependencies: [ReactiveFormsModule, SafeHtmlPipe, TranslocoDirective, NgOptimizedImage, ProviderImagePipe], styles: ["/* src/app/_single-module/review-card-modal/review-card-modal.component.scss */\n.img-max-width hr {\n  border: solid 2px rgba(var(--primary-color), 0.5) !important;\n}\n.img-max-width img {\n  max-width: 100%;\n  max-height: 800px;\n}\n.img-max-width h1 {\n  font-size: 1.5rem;\n}\n/*# sourceMappingURL=review-card-modal.component.css.map */\n"], encapsulation: 2, changeDetection: 0 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ReviewCardModalComponent, { className: "ReviewCardModalComponent", filePath: "src/app/_single-module/review-card-modal/review-card-modal.component.ts", lineNumber: 29 });
})();

// src/app/_single-module/review-card/review-card.component.ts
var _c02 = (a0) => ({ r: a0 });
function ReviewCardComponent_ng_container_0_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 11)(1, "img", 4);
    \u0275\u0275pipe(2, "providerImage");
  }
  if (rf & 2) {
    const t_r3 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("title", t_r3("your-review"));
    \u0275\u0275advance();
    \u0275\u0275property("ngSrc", \u0275\u0275pipeBind2(2, 2, ctx_r1.ScrobbleProvider.Kavita, true));
  }
}
function ReviewCardComponent_ng_container_0_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 4);
    \u0275\u0275pipe(1, "providerImage");
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngSrc", \u0275\u0275pipeBind2(1, 1, ctx_r1.review.provider, true));
  }
}
function ReviewCardComponent_ng_container_0_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.review.username, " ");
  }
}
function ReviewCardComponent_ng_container_0_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 10);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r3 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(t_r3("rating-percentage", \u0275\u0275pureFunction1(1, _c02, ctx_r1.review.score)));
  }
}
function ReviewCardComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 1);
    \u0275\u0275listener("click", function ReviewCardComponent_ng_container_0_Template_div_click_1_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.showModal());
    });
    \u0275\u0275elementStart(2, "div", 2)(3, "div", 3);
    \u0275\u0275template(4, ReviewCardComponent_ng_container_0_Conditional_4_Template, 3, 5)(5, ReviewCardComponent_ng_container_0_Conditional_5_Template, 2, 4, "img", 4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 5)(7, "div", 6)(8, "p", 7);
    \u0275\u0275element(9, "app-read-more", 8);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(10, "div", 9)(11, "div");
    \u0275\u0275template(12, ReviewCardComponent_ng_container_0_Conditional_12_Template, 1, 1);
    \u0275\u0275text(13);
    \u0275\u0275pipe(14, "defaultValue");
    \u0275\u0275elementEnd();
    \u0275\u0275template(15, ReviewCardComponent_ng_container_0_Conditional_15_Template, 2, 3, "span", 10);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275conditional(ctx_r1.isMyReview ? 4 : 5);
    \u0275\u0275advance(5);
    \u0275\u0275property("text", (ctx_r1.review.isExternal ? ctx_r1.review.bodyJustText : ctx_r1.review.body) || "")("maxLength", 140)("showToggle", false);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r1.isMyReview ? 12 : -1);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.isMyReview ? "" : \u0275\u0275pipeBind2(14, 7, ctx_r1.review.username, ""), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.review.isExternal ? 15 : -1);
  }
}
var ReviewCardComponent = class _ReviewCardComponent {
  constructor(modalService, cdRef) {
    this.modalService = modalService;
    this.cdRef = cdRef;
    this.accountService = inject(AccountService);
    this.ScrobbleProvider = ScrobbleProvider;
    this.refresh = new EventEmitter();
    this.isMyReview = false;
  }
  ngOnInit() {
    this.accountService.currentUser$.subscribe((u) => {
      if (u) {
        this.isMyReview = this.review.username === u.username;
        this.cdRef.markForCheck();
      }
    });
  }
  showModal() {
    let component;
    if (this.isMyReview) {
      component = ReviewSeriesModalComponent;
    } else {
      component = ReviewCardModalComponent;
    }
    const ref = this.modalService.open(component, { size: "lg", fullscreen: "md" });
    ref.componentInstance.review = this.review;
    ref.closed.subscribe((res) => {
      if (res) {
        this.refresh.emit(res);
      }
    });
  }
  static {
    this.\u0275fac = function ReviewCardComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ReviewCardComponent)(\u0275\u0275directiveInject(NgbModal), \u0275\u0275directiveInject(ChangeDetectorRef));
    };
  }
  static {
    this.\u0275cmp = \u0275\u0275defineComponent({ type: _ReviewCardComponent, selectors: [["app-review-card"]], inputs: { review: "review" }, outputs: { refresh: "refresh" }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 1, vars: 1, consts: [[4, "transloco", "translocoRead"], [1, "card", "review-card", "clickable", "mb-3", 3, "click"], [1, "row", "g-0"], [1, "col-md-2", "col-sm-2", "col-2", "d-block", "p-2"], ["width", "40", "height", "40", "alt", "", 1, "me-2", 3, "ngSrc"], [1, "col-md-10", "col-sm-10", "col-10"], [1, "card-body", "p-2"], [1, "card-text", "no-images"], [3, "text", "maxLength", "showToggle"], [1, "card-footer", "bg-transparent", "text-muted", "p-2"], [1, "review-score"], ["aria-hidden", "true", 1, "d-none", "fa-solid", "fa-star", "me-2", 3, "title"]], template: function ReviewCardComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, ReviewCardComponent_ng_container_0_Template, 16, 10, "ng-container", 0);
      }
      if (rf & 2) {
        \u0275\u0275property("translocoRead", "review-card");
      }
    }, dependencies: [ReadMoreComponent, DefaultValuePipe, NgOptimizedImage, ProviderImagePipe, TranslocoDirective], styles: ["\n\n.review-card[_ngcontent-%COMP%] {\n  max-width: 320px;\n  max-height: 130px;\n  height: 130px;\n  width: 320px;\n}\n.profile-image[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n  padding: 20px;\n}\n.my-review[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: 20;\n  top: 38px;\n  left: 38px;\n}\n.fa-star[_ngcontent-%COMP%] {\n  color: var(--review-card-star-color);\n}\n.card-text[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n.card-title[_ngcontent-%COMP%] {\n  overflow: hidden;\n  width: 235px;\n  word-break: break-all;\n  height: 20px;\n}\n.card-text.no-images[_ngcontent-%COMP%] {\n  text-overflow: ellipsis;\n  overflow: hidden;\n}\n.no-images[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  display: none;\n}\n.card-footer[_ngcontent-%COMP%] {\n  font-size: 13px;\n  display: flex;\n  max-width: 319px;\n  justify-content: space-between;\n  margin: 0 auto;\n}\n.card-footer[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  margin: 0 5px;\n  display: inline-flex;\n}\n.card-body[_ngcontent-%COMP%] {\n  display: block;\n  visibility: visible;\n  min-height: 93.5px;\n  max-height: 93.5px;\n}\n/*# sourceMappingURL=review-card.component.css.map */"], changeDetection: 0 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ReviewCardComponent, { className: "ReviewCardComponent", filePath: "src/app/_single-module/review-card/review-card.component.ts", lineNumber: 35 });
})();
export {
  ReviewCardComponent
};
//# sourceMappingURL=review-card.component-UFFLFDX2.js.map
