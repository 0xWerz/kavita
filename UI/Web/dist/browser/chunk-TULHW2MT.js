import {
  ProviderNamePipe
} from "./chunk-66ED26VX.js";
import {
  ProviderImagePipe
} from "./chunk-E4IH7S3P.js";
import {
  ImageComponent
} from "./chunk-2JLAQ3MZ.js";
import {
  ScrobbleProvider
} from "./chunk-R5PSFMI2.js";
import {
  AccountService
} from "./chunk-U2DWQJI2.js";
import {
  NgbTooltip
} from "./chunk-2R2RCU4Y.js";
import {
  AsyncPipe,
  TranslocoDirective,
  inject,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵattribute,
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
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate1
} from "./chunk-PYHIUVNJ.js";

// src/app/collections/_components/collection-owner/collection-owner.component.ts
var _c0 = (a0) => ({ owner: a0 });
function CollectionOwnerComponent_ng_container_0_Conditional_1_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275element(1, "app-image", 2);
    \u0275\u0275pipe(2, "providerImage");
    \u0275\u0275pipe(3, "providerName");
    \u0275\u0275pipe(4, "providerName");
  }
  if (rf & 2) {
    const t_r1 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275textInterpolate1(" ", t_r1("collection-via-label"), " ");
    \u0275\u0275advance();
    \u0275\u0275property("imageUrl", \u0275\u0275pipeBind1(2, 4, ctx_r1.collection.source))("ngbTooltip", \u0275\u0275pipeBind1(3, 6, ctx_r1.collection.source));
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(4, 8, ctx_r1.collection.source));
  }
}
function CollectionOwnerComponent_ng_container_0_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1);
    \u0275\u0275text(1);
    \u0275\u0275template(2, CollectionOwnerComponent_ng_container_0_Conditional_1_Conditional_2_Template, 5, 10, "app-image", 2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r1 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", t_r1("collection-created-label", \u0275\u0275pureFunction1(2, _c0, ctx_r1.collection.owner)), " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.collection.source !== ctx_r1.ScrobbleProvider.Kavita ? 2 : -1);
  }
}
function CollectionOwnerComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, CollectionOwnerComponent_ng_container_0_Conditional_1_Template, 3, 4, "div", 1);
    \u0275\u0275pipe(2, "async");
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    let tmp_2_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional((tmp_2_0 = \u0275\u0275pipeBind1(2, 1, ctx_r1.accountService.currentUser$)) ? 1 : -1, tmp_2_0);
  }
}
var CollectionOwnerComponent = class _CollectionOwnerComponent {
  constructor() {
    this.accountService = inject(AccountService);
    this.ScrobbleProvider = ScrobbleProvider;
  }
  static {
    this.\u0275fac = function CollectionOwnerComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CollectionOwnerComponent)();
    };
  }
  static {
    this.\u0275cmp = \u0275\u0275defineComponent({ type: _CollectionOwnerComponent, selectors: [["app-collection-owner"]], inputs: { collection: "collection" }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 1, vars: 1, consts: [[4, "transloco", "translocoRead"], [1, "fw-light", "text-accent"], ["width", "16px", "height", "16px", 3, "imageUrl", "ngbTooltip"]], template: function CollectionOwnerComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, CollectionOwnerComponent_ng_container_0_Template, 3, 3, "ng-container", 0);
      }
      if (rf & 2) {
        \u0275\u0275property("translocoRead", "collection-owner");
      }
    }, dependencies: [
      ProviderImagePipe,
      ProviderNamePipe,
      TranslocoDirective,
      AsyncPipe,
      ImageComponent,
      NgbTooltip
    ], styles: ["\n\n.text-accent[_ngcontent-%COMP%] {\n  font-size: small;\n  color: var(---accent-text-color);\n}\n/*# sourceMappingURL=collection-owner.component.css.map */"], changeDetection: 0 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CollectionOwnerComponent, { className: "CollectionOwnerComponent", filePath: "src/app/collections/_components/collection-owner/collection-owner.component.ts", lineNumber: 28 });
})();

export {
  CollectionOwnerComponent
};
//# sourceMappingURL=chunk-TULHW2MT.js.map
