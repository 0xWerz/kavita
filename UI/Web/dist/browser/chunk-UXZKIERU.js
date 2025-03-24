import {
  NavService
} from "./chunk-CUVDZVWA.js";
import {
  Breakpoint,
  UtilityService
} from "./chunk-A6JEQ5GB.js";
import {
  NavigationStart,
  Router
} from "./chunk-U2DWQJI2.js";
import {
  NgbOffcanvas,
  NgbTooltip
} from "./chunk-2R2RCU4Y.js";
import {
  ChangeDetectorRef,
  DestroyRef,
  EventEmitter,
  ReplaySubject,
  TranslocoDirective,
  filter,
  inject,
  take,
  takeUntilDestroyed,
  tap,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵinject,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-PYHIUVNJ.js";

// src/app/_services/toggle.service.ts
var ToggleService = class _ToggleService {
  constructor(router) {
    this.toggleState = false;
    this.toggleStateSource = new ReplaySubject(1);
    this.toggleState$ = this.toggleStateSource.asObservable();
    router.events.pipe(filter((event) => event instanceof NavigationStart)).subscribe((event) => {
      this.toggleState = false;
      this.toggleStateSource.next(this.toggleState);
    });
    this.toggleStateSource.next(false);
  }
  toggle() {
    this.toggleState = !this.toggleState;
    this.toggleStateSource.pipe(take(1)).subscribe((state) => {
      this.toggleState = !state;
      this.toggleStateSource.next(this.toggleState);
    });
  }
  set(state) {
    this.toggleState = state;
    this.toggleStateSource.next(state);
  }
  static {
    this.\u0275fac = function ToggleService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ToggleService)(\u0275\u0275inject(Router));
    };
  }
  static {
    this.\u0275prov = \u0275\u0275defineInjectable({ token: _ToggleService, factory: _ToggleService.\u0275fac, providedIn: "root" });
  }
};

// src/app/sidenav/_components/side-nav-companion-bar/side-nav-companion-bar.component.ts
var _c0 = [[["", "title", ""]], [["", "subtitle", ""]], [["", "main", ""]]];
var _c1 = ["[title]", "[subtitle]", "[main]"];
function SideNavCompanionBarComponent_ng_container_0_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 4);
    \u0275\u0275listener("click", function SideNavCompanionBarComponent_ng_container_0_Conditional_8_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.openExtrasDrawer());
    });
    \u0275\u0275element(1, "i", 5);
    \u0275\u0275elementStart(2, "span", 6);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const t_r3 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("ngbTooltip", t_r3("page-settings-title"));
    \u0275\u0275attribute("aria-expanded", ctx_r1.isExtrasOpen);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(t_r3("page-settings-title"));
  }
}
function SideNavCompanionBarComponent_ng_container_0_Conditional_9_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 10);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("active", ctx_r1.isFilterOpen);
  }
}
function SideNavCompanionBarComponent_ng_container_0_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 7);
    \u0275\u0275listener("click", function SideNavCompanionBarComponent_ng_container_0_Conditional_9_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.toggleService.toggle());
    });
    \u0275\u0275elementStart(1, "div");
    \u0275\u0275element(2, "i", 8);
    \u0275\u0275template(3, SideNavCompanionBarComponent_ng_container_0_Conditional_9_Conditional_3_Template, 1, 2, "i", 9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 6);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const t_r3 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275attribute("aria-label", ctx_r1.isFilterOpen ? t_r3("open-filter-and-sort") : t_r3("close-filter-and-sort"));
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r1.isFilterOpen ? 3 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r3("filter-and-sort-alt"));
  }
}
function SideNavCompanionBarComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 1)(2, "div");
    \u0275\u0275projection(3);
    \u0275\u0275projection(4, 1);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div");
    \u0275\u0275projection(6, 2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div");
    \u0275\u0275template(8, SideNavCompanionBarComponent_ng_container_0_Conditional_8_Template, 4, 3, "button", 2)(9, SideNavCompanionBarComponent_ng_container_0_Conditional_9_Template, 6, 3, "button", 3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(8);
    \u0275\u0275conditional(ctx_r1.hasExtras ? 8 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.hasFilter ? 9 : -1);
  }
}
var SideNavCompanionBarComponent = class _SideNavCompanionBarComponent {
  constructor(navService, utilityService, toggleService, offcanvasService) {
    this.navService = navService;
    this.utilityService = utilityService;
    this.toggleService = toggleService;
    this.offcanvasService = offcanvasService;
    this.cdRef = inject(ChangeDetectorRef);
    this.hasFilter = false;
    this.hasExtras = false;
    this.filterActive = false;
    this.filterOpen = new EventEmitter();
    this.isFilterOpen = false;
    this.isExtrasOpen = false;
    this.destroyRef = inject(DestroyRef);
  }
  ngOnInit() {
    this.navService.sideNavCollapsed$.pipe(takeUntilDestroyed(this.destroyRef)).subscribe((sideNavCollapsed) => {
      if (this.isFilterOpen && sideNavCollapsed && this.utilityService.getActiveBreakpoint() < Breakpoint.Tablet) {
        this.isFilterOpen = false;
        this.filterOpen.emit(this.isFilterOpen);
      }
    });
    this.toggleService.toggleState$.pipe(takeUntilDestroyed(this.destroyRef), tap((isOpen) => {
      this.isFilterOpen = isOpen;
      this.cdRef.markForCheck();
    })).subscribe();
  }
  openExtrasDrawer() {
    if (this.extraDrawer === void 0)
      return;
    this.isExtrasOpen = true;
    const drawerRef = this.offcanvasService.open(this.extraDrawer, { position: "end", scroll: true });
    drawerRef.closed.subscribe(() => this.isExtrasOpen = false);
    drawerRef.dismissed.subscribe(() => this.isExtrasOpen = false);
  }
  static {
    this.\u0275fac = function SideNavCompanionBarComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SideNavCompanionBarComponent)(\u0275\u0275directiveInject(NavService), \u0275\u0275directiveInject(UtilityService), \u0275\u0275directiveInject(ToggleService), \u0275\u0275directiveInject(NgbOffcanvas));
    };
  }
  static {
    this.\u0275cmp = \u0275\u0275defineComponent({ type: _SideNavCompanionBarComponent, selectors: [["app-side-nav-companion-bar"]], inputs: { hasFilter: "hasFilter", hasExtras: "hasExtras", filterActive: "filterActive", extraDrawer: "extraDrawer" }, outputs: { filterOpen: "filterOpen" }, standalone: true, features: [\u0275\u0275StandaloneFeature], ngContentSelectors: _c1, decls: 1, vars: 1, consts: [[4, "transloco", "translocoRead"], [1, "mt-0", "d-flex", "justify-content-between", "align-items-center"], ["placement", "left", 1, "btn", "btn-secondary", "btn-small", 3, "ngbTooltip"], ["id", "filter-btn--komf", 1, "btn", "btn-icon", "btn-small"], ["placement", "left", 1, "btn", "btn-secondary", "btn-small", 3, "click", "ngbTooltip"], ["aria-hidden", "true", 1, "fa-solid", "fa-sliders"], [1, "visually-hidden"], ["id", "filter-btn--komf", 1, "btn", "btn-icon", "btn-small", 3, "click"], ["aria-hidden", "true", 1, "fa", "fa-filter"], ["aria-hidden", "true", 1, "fa-solid", "fa-gear", "icon-position", 3, "active"], ["aria-hidden", "true", 1, "fa-solid", "fa-gear", "icon-position"]], template: function SideNavCompanionBarComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef(_c0);
        \u0275\u0275template(0, SideNavCompanionBarComponent_ng_container_0_Template, 10, 2, "ng-container", 0);
      }
      if (rf & 2) {
        \u0275\u0275property("translocoRead", "side-nav-companion-bar");
      }
    }, dependencies: [NgbTooltip, TranslocoDirective], styles: ['\n\n.hide-if-empty[_ngcontent-%COMP%]:empty {\n  display: none !important;\n}\n.btn-icon[_ngcontent-%COMP%] {\n  position: relative;\n}\n.icon-position[_ngcontent-%COMP%] {\n  position: absolute;\n  top: -2px;\n  right: -2px;\n  font-size: 0.8em;\n  color: var(--primary-color);\n}\n@keyframes _ngcontent-%COMP%_spin {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n.icon-position.active[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_spin 3.3s linear infinite;\n}\n.icon-container[_ngcontent-%COMP%]::after {\n  content: "";\n  position: absolute;\n  left: 10px;\n  bottom: -4px;\n  width: 23px;\n  height: 2px;\n  background-color: var(--primary-color);\n  transition: width 0.3s ease, left 0.3s ease;\n}\n/*# sourceMappingURL=side-nav-companion-bar.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SideNavCompanionBarComponent, { className: "SideNavCompanionBarComponent", filePath: "src/app/sidenav/_components/side-nav-companion-bar/side-nav-companion-bar.component.ts", lineNumber: 31 });
})();

export {
  ToggleService,
  SideNavCompanionBarComponent
};
//# sourceMappingURL=chunk-UXZKIERU.js.map
