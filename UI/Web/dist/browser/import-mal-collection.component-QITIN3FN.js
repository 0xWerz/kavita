import {
  CollectionTagService
} from "./chunk-AOHQX7B2.js";
import "./chunk-KMTIWVED.js";
import {
  LoadingComponent
} from "./chunk-D7CIAEAO.js";
import {
  ScrobbleProvider,
  ScrobblingService
} from "./chunk-R5PSFMI2.js";
import "./chunk-A6JEQ5GB.js";
import "./chunk-RSMGJKYW.js";
import "./chunk-U2DWQJI2.js";
import {
  ConfirmService
} from "./chunk-2R2RCU4Y.js";
import {
  ToastrService
} from "./chunk-5J5IKBMT.js";
import "./chunk-PUXELTB2.js";
import "./chunk-FLGYJHAG.js";
import "./chunk-BPOUBDX2.js";
import "./chunk-CQADFT7F.js";
import {
  ChangeDetectorRef,
  DecimalPipe,
  TranslocoDirective,
  __async,
  forkJoin,
  inject,
  translate,
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
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵpureFunction1,
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

// src/app/collections/_components/import-mal-collection/import-mal-collection.component.ts
var _forTrack0 = ($index, $item) => $item.url;
var _c0 = (a0) => ({ num: a0 });
function ImportMalCollectionComponent_ng_container_0_For_5_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const stack_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275textInterpolate1(" by ", stack_r4.author, " \u2022 ");
  }
}
function ImportMalCollectionComponent_ng_container_0_For_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li", 1)(1, "div")(2, "a", 2);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 3);
    \u0275\u0275listener("click", function ImportMalCollectionComponent_ng_container_0_For_5_Template_button_click_4_listener() {
      const stack_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.importStack(stack_r4));
    });
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div");
    \u0275\u0275template(7, ImportMalCollectionComponent_ng_container_0_For_5_Conditional_7_Template, 1, 1);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "number");
    \u0275\u0275elementStart(10, "span");
    \u0275\u0275element(11, "i", 4);
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "number");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const stack_r4 = ctx.$implicit;
    const t_r2 = \u0275\u0275nextContext().$implicit;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("href", stack_r4.url, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(stack_r4.title);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r0.collectionMap && ctx_r0.collectionMap.hasOwnProperty(stack_r4.url));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(t_r2("track"));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(stack_r4.author ? 7 : -1);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", t_r2("series-count", \u0275\u0275pureFunction1(11, _c0, \u0275\u0275pipeBind1(9, 7, stack_r4.seriesCount))), " \u2022 ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(t_r2("restack-count", \u0275\u0275pureFunction1(13, _c0, \u0275\u0275pipeBind1(13, 9, stack_r4.restackCount))));
  }
}
function ImportMalCollectionComponent_ng_container_0_ForEmpty_6_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-loading", 5);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275property("loading", ctx_r0.isLoading);
  }
}
function ImportMalCollectionComponent_ng_container_0_ForEmpty_6_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r2 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(t_r2("nothing-found"));
  }
}
function ImportMalCollectionComponent_ng_container_0_ForEmpty_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, ImportMalCollectionComponent_ng_container_0_ForEmpty_6_Conditional_0_Template, 1, 1, "app-loading", 5)(1, ImportMalCollectionComponent_ng_container_0_ForEmpty_6_Conditional_1_Template, 2, 1, "p");
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275conditional(ctx_r0.isLoading ? 0 : 1);
  }
}
function ImportMalCollectionComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "p");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "ul");
    \u0275\u0275repeaterCreate(4, ImportMalCollectionComponent_ng_container_0_For_5_Template, 14, 15, "li", 1, _forTrack0, false, ImportMalCollectionComponent_ng_container_0_ForEmpty_6_Template, 2, 1);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const t_r2 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r2("description"));
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r0.stacks);
  }
}
var ImportMalCollectionComponent = class _ImportMalCollectionComponent {
  constructor() {
    this.collectionService = inject(CollectionTagService);
    this.cdRef = inject(ChangeDetectorRef);
    this.toastr = inject(ToastrService);
    this.scrobblingService = inject(ScrobblingService);
    this.confirmService = inject(ConfirmService);
    this.stacks = [];
    this.isLoading = true;
    this.collectionMap = {};
    this.scrobblingService.getMalToken().subscribe((token) => __async(this, null, function* () {
      if (token.accessToken === "") {
        yield this.confirmService.alert(translate("toasts.mal-token-required"));
        return;
      }
      this.setup();
    }));
  }
  setup() {
    forkJoin({
      allCollections: this.collectionService.allCollections(true),
      malStacks: this.collectionService.getMalStacks()
    }).subscribe((res) => {
      const collects = res.allCollections.filter((c) => c.source === ScrobbleProvider.Mal && c.sourceUrl);
      for (let col of collects) {
        if (col.sourceUrl === null)
          continue;
        this.collectionMap[col.sourceUrl] = col;
      }
      this.stacks = res.malStacks;
      this.isLoading = false;
      this.cdRef.markForCheck();
    });
  }
  importStack(stack) {
    this.collectionService.importStack(stack).subscribe(() => {
      this.collectionMap[stack.url] = stack;
      this.cdRef.markForCheck();
      this.toastr.success(translate("toasts.stack-imported"));
    });
  }
  static {
    this.\u0275fac = function ImportMalCollectionComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ImportMalCollectionComponent)();
    };
  }
  static {
    this.\u0275cmp = \u0275\u0275defineComponent({ type: _ImportMalCollectionComponent, selectors: [["app-import-mal-collection"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 1, vars: 1, consts: [[4, "transloco", "translocoRead"], [1, "mb-2"], ["rel", "noreferrer noopener", "target", "_blank", 3, "href"], [1, "btn", "btn-primary", "float-end", 3, "click", "disabled"], ["aria-hidden", "true", 1, "fa-solid", "fa-layer-group", "me-1"], [3, "loading"]], template: function ImportMalCollectionComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, ImportMalCollectionComponent_ng_container_0_Template, 7, 2, "ng-container", 0);
      }
      if (rf & 2) {
        \u0275\u0275property("translocoRead", "import-mal-collection-modal");
      }
    }, dependencies: [
      TranslocoDirective,
      LoadingComponent,
      DecimalPipe
    ], changeDetection: 0 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ImportMalCollectionComponent, { className: "ImportMalCollectionComponent", filePath: "src/app/collections/_components/import-mal-collection/import-mal-collection.component.ts", lineNumber: 27 });
})();
export {
  ImportMalCollectionComponent
};
//# sourceMappingURL=import-mal-collection.component-QITIN3FN.js.map
