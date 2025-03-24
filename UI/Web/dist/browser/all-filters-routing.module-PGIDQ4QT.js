import {
  JumpbarService
} from "./chunk-5ZZKBPDI.js";
import "./chunk-3CC6XT7E.js";
import "./chunk-AVPZRN66.js";
import {
  SideNavCompanionBarComponent
} from "./chunk-UXZKIERU.js";
import {
  ManageSmartFiltersComponent
} from "./chunk-BBX46LVT.js";
import "./chunk-MBZDR44C.js";
import "./chunk-3H6WDNS7.js";
import "./chunk-OMYYKEHJ.js";
import "./chunk-AFXXYIIH.js";
import "./chunk-LOI3GAWB.js";
import "./chunk-CUVDZVWA.js";
import "./chunk-454HUQZW.js";
import "./chunk-7GKAFCLA.js";
import "./chunk-FAULLNLJ.js";
import "./chunk-SBBWMOEE.js";
import "./chunk-W4DBALQX.js";
import {
  ActionService
} from "./chunk-HTPJQXUV.js";
import "./chunk-HG4LWHDT.js";
import {
  FilterService
} from "./chunk-6M2JHRYX.js";
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
import "./chunk-RMZ6EY72.js";
import "./chunk-CVI764VQ.js";
import "./chunk-C423WP7Y.js";
import "./chunk-NGXWDHM5.js";
import "./chunk-XZ5MKEYT.js";
import "./chunk-PBM62GK4.js";
import "./chunk-HXDVBBHR.js";
import "./chunk-65GP3B4U.js";
import "./chunk-2L2JQBKQ.js";
import "./chunk-2JLAQ3MZ.js";
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
import {
  Action,
  ActionFactoryService,
  Router
} from "./chunk-U2DWQJI2.js";
import "./chunk-2R2RCU4Y.js";
import "./chunk-5J5IKBMT.js";
import "./chunk-PUXELTB2.js";
import "./chunk-FLGYJHAG.js";
import "./chunk-BPOUBDX2.js";
import "./chunk-CQADFT7F.js";
import {
  ChangeDetectorRef,
  DecimalPipe,
  TranslocoDirective,
  __async,
  inject,
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
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-PYHIUVNJ.js";

// src/app/all-filters/all-filters.component.ts
var _c0 = (a0) => ({ count: a0 });
function AllFiltersComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 1)(2, "app-side-nav-companion-bar", 2)(3, "h4", 3);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 4)(6, "h6")(7, "span");
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "a", 5);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275element(12, "app-manage-smart-filters", 6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const t_r1 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("hasFilter", false);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", t_r1("title"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(t_r1("count", \u0275\u0275pureFunction1(7, _c0, \u0275\u0275pipeBind1(9, 5, ctx_r1.filters.length))));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(t_r1("create"));
    \u0275\u0275advance();
    \u0275\u0275property("target", "_self");
  }
}
var AllFiltersComponent = class _AllFiltersComponent {
  constructor() {
    this.cdRef = inject(ChangeDetectorRef);
    this.jumpbarService = inject(JumpbarService);
    this.router = inject(Router);
    this.filterService = inject(FilterService);
    this.actionFactory = inject(ActionFactoryService);
    this.actionService = inject(ActionService);
    this.filterActions = this.actionFactory.getSmartFilterActions(this.handleAction.bind(this));
    this.jumpbarKeys = [];
    this.filters = [];
    this.isLoading = true;
  }
  ngOnInit() {
    this.loadData();
  }
  loadData() {
    this.filterService.getAllFilters().subscribe((filters) => {
      this.filters = filters;
      this.jumpbarKeys = this.jumpbarService.getJumpKeys(this.filters, (s) => s.name);
      this.isLoading = false;
      this.cdRef.markForCheck();
    });
  }
  deleteFilter(filter) {
    return __async(this, null, function* () {
      yield this.actionService.deleteFilter(filter.id, (success) => {
        this.filters = this.filters.filter((f) => f.id != filter.id);
        this.jumpbarKeys = this.jumpbarService.getJumpKeys(this.filters, (s) => s.name);
        this.cdRef.markForCheck();
      });
    });
  }
  handleAction(action, filter) {
    return __async(this, null, function* () {
      switch (action.action) {
        case Action.Delete:
          yield this.deleteFilter(filter);
          break;
        default:
          break;
      }
    });
  }
  static {
    this.\u0275fac = function AllFiltersComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AllFiltersComponent)();
    };
  }
  static {
    this.\u0275cmp = \u0275\u0275defineComponent({ type: _AllFiltersComponent, selectors: [["app-all-filters"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 1, vars: 1, consts: [[4, "transloco", "translocoRead"], [1, "main-container"], [3, "hasFilter"], ["title", ""], ["subtitle", ""], ["href", "/all-series?name=New%20Filter", 1, "ms-2"], [3, "target"]], template: function AllFiltersComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, AllFiltersComponent_ng_container_0_Template, 13, 9, "ng-container", 0);
      }
      if (rf & 2) {
        \u0275\u0275property("translocoRead", "all-filters");
      }
    }, dependencies: [TranslocoDirective, SideNavCompanionBarComponent, ManageSmartFiltersComponent, DecimalPipe], styles: ["\n\n.main-container[_ngcontent-%COMP%] {\n  margin-top: 10px;\n  padding: 0 0 0 10px;\n}\n/*# sourceMappingURL=all-filters.component.css.map */"], changeDetection: 0 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AllFiltersComponent, { className: "AllFiltersComponent", filePath: "src/app/all-filters/all-filters.component.ts", lineNumber: 31 });
})();

// src/app/_routes/all-filters-routing.module.ts
var routes = [
  { path: "", component: AllFiltersComponent, pathMatch: "full" }
];
export {
  routes
};
//# sourceMappingURL=all-filters-routing.module-PGIDQ4QT.js.map
