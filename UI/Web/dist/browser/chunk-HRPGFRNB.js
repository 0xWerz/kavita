import {
  ManageService,
  MatchStateOption
} from "./chunk-D3OMWBOU.js";
import {
  ServerService
} from "./chunk-KKWGV4SA.js";
import {
  NavService
} from "./chunk-CUVDZVWA.js";
import {
  ImageComponent
} from "./chunk-2JLAQ3MZ.js";
import {
  ScrobblingService
} from "./chunk-R5PSFMI2.js";
import {
  Breakpoint,
  UtilityService
} from "./chunk-A6JEQ5GB.js";
import {
  AccountService,
  ActivatedRoute,
  LicenseService,
  NavigationEnd,
  Role,
  Router,
  RouterLink
} from "./chunk-U2DWQJI2.js";
import {
  AsyncPipe,
  ChangeDetectorRef,
  DOCUMENT,
  DestroyRef,
  NgClass,
  NgTemplateOutlet,
  TranslocoDirective,
  filter,
  inject,
  map,
  of,
  shareReplay,
  switchMap,
  take,
  takeUntilDestroyed,
  tap,
  translate,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵclassMapInterpolate1,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵdefinePipe,
  ɵɵelement,
  ɵɵelementContainer,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵpropertyInterpolate,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵpureFunction2,
  ɵɵpureFunction3,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-PYHIUVNJ.js";

// src/app/sidenav/_components/side-nav-item/side-nav-item.component.ts
var _c0 = [[["", "actions", ""]]];
var _c1 = ["[actions]"];
var _c2 = (a0, a1) => ({ "closed": a0, "active": a1 });
var _c3 = () => ({});
function SideNavItemComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1);
    \u0275\u0275pipe(1, "async");
    \u0275\u0275elementContainer(2, 2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    const inner_r2 = \u0275\u0275reference(3);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction2(4, _c2, \u0275\u0275pipeBind1(1, 2, ctx_r0.navService.sideNavCollapsed$), ctx_r0.highlighted));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngTemplateOutlet", inner_r2);
  }
}
function SideNavItemComponent_Conditional_1_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 3);
    \u0275\u0275pipe(1, "async");
    \u0275\u0275elementContainer(2, 2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    const inner_r2 = \u0275\u0275reference(3);
    \u0275\u0275property("id", ctx_r0.id)("href", ctx_r0.link, \u0275\u0275sanitizeUrl)("ngClass", \u0275\u0275pureFunction2(6, _c2, \u0275\u0275pipeBind1(1, 4, ctx_r0.navService.sideNavCollapsed$), ctx_r0.highlighted));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngTemplateOutlet", inner_r2);
  }
}
function SideNavItemComponent_Conditional_1_Conditional_1_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "a", 7);
    \u0275\u0275pipe(1, "async");
    \u0275\u0275listener("click", function SideNavItemComponent_Conditional_1_Conditional_1_Conditional_0_Template_a_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.openLink());
    });
    \u0275\u0275elementContainer(2, 2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    const inner_r2 = \u0275\u0275reference(3);
    \u0275\u0275property("id", ctx_r0.id)("ngClass", \u0275\u0275pureFunction2(5, _c2, \u0275\u0275pipeBind1(1, 3, ctx_r0.navService.sideNavCollapsed$), ctx_r0.highlighted));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngTemplateOutlet", inner_r2);
  }
}
function SideNavItemComponent_Conditional_1_Conditional_1_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 5);
    \u0275\u0275pipe(1, "async");
    \u0275\u0275elementContainer(2, 2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    const inner_r2 = \u0275\u0275reference(3);
    \u0275\u0275property("id", ctx_r0.id)("ngClass", \u0275\u0275pureFunction2(7, _c2, \u0275\u0275pipeBind1(1, 5, ctx_r0.navService.sideNavCollapsed$), ctx_r0.highlighted))("routerLink", ctx_r0.link)("fragment", ctx_r0.fragment);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngTemplateOutlet", inner_r2);
  }
}
function SideNavItemComponent_Conditional_1_Conditional_1_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 6);
    \u0275\u0275pipe(1, "async");
    \u0275\u0275elementContainer(2, 2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    const inner_r2 = \u0275\u0275reference(3);
    \u0275\u0275property("id", ctx_r0.id)("ngClass", \u0275\u0275pureFunction2(7, _c2, \u0275\u0275pipeBind1(1, 5, ctx_r0.navService.sideNavCollapsed$), ctx_r0.highlighted))("routerLink", ctx_r0.link)("queryParams", ctx_r0.queryParams);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngTemplateOutlet", inner_r2);
  }
}
function SideNavItemComponent_Conditional_1_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, SideNavItemComponent_Conditional_1_Conditional_1_Conditional_0_Template, 3, 8, "a", 4)(1, SideNavItemComponent_Conditional_1_Conditional_1_Conditional_1_Template, 3, 10, "a", 5)(2, SideNavItemComponent_Conditional_1_Conditional_1_Conditional_2_Template, 3, 10, "a", 6);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275conditional(ctx_r0.queryParams && ctx_r0.queryParams !== \u0275\u0275pureFunction0(1, _c3) ? 0 : ctx_r0.fragment ? 1 : 2);
  }
}
function SideNavItemComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, SideNavItemComponent_Conditional_1_Conditional_0_Template, 3, 9, "a", 3)(1, SideNavItemComponent_Conditional_1_Conditional_1_Template, 3, 2);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275conditional(ctx_r0.external ? 0 : 1);
  }
}
function SideNavItemComponent_ng_template_2_Conditional_1_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-image", 13);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275property("imageUrl", ctx_r0.imageUrl);
  }
}
function SideNavItemComponent_ng_template_2_Conditional_1_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 15);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275classMapInterpolate1("fa ", ctx_r0.icon, "");
  }
}
function SideNavItemComponent_ng_template_2_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 9)(1, "div");
    \u0275\u0275template(2, SideNavItemComponent_ng_template_2_Conditional_1_Conditional_2_Template, 1, 1, "app-image", 13)(3, SideNavItemComponent_ng_template_2_Conditional_1_Conditional_3_Template, 1, 3, "i", 14);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275propertyInterpolate("title", ctx_r0.title);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r0.imageUrl !== null && ctx_r0.imageUrl !== "" ? 2 : 3);
  }
}
function SideNavItemComponent_ng_template_2_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 11);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.badgeCount);
  }
}
function SideNavItemComponent_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 8);
    \u0275\u0275template(1, SideNavItemComponent_ng_template_2_Conditional_1_Template, 4, 2, "span", 9);
    \u0275\u0275elementStart(2, "span", 10)(3, "div");
    \u0275\u0275text(4);
    \u0275\u0275template(5, SideNavItemComponent_ng_template_2_Conditional_5_Template, 2, 1, "span", 11);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "span", 12);
    \u0275\u0275projection(7);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx_r0.noIcon ? 1 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r0.title, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.badgeCount && ctx_r0.badgeCount > 0 ? 5 : -1);
  }
}
var SideNavItemComponent = class _SideNavItemComponent {
  constructor() {
    this.destroyRef = inject(DestroyRef);
    this.router = inject(Router);
    this.cdRef = inject(ChangeDetectorRef);
    this.navService = inject(NavService);
    this.utilityService = inject(UtilityService);
    this.id = null;
    this.icon = "";
    this.imageUrl = "";
    this.noIcon = false;
    this.title = "";
    this.external = false;
    this.queryParams = void 0;
    this.fragment = void 0;
    this.badgeCount = -1;
    this.comparisonMethod = "equals";
    this.highlighted = false;
    this.router.events.pipe(filter((event) => event instanceof NavigationEnd), takeUntilDestroyed(this.destroyRef), map((evt) => evt), tap((evt) => this.triggerHighlightCheck(evt.url)), tap((_) => this.collapseNavIfApplicable())).subscribe();
  }
  ngOnInit() {
    setTimeout(() => {
      this.triggerHighlightCheck(this.router.url);
    }, 100);
  }
  triggerHighlightCheck(routeUrl) {
    const [url, queryParams] = routeUrl.split("?");
    const [page, fragment = ""] = url.split("#");
    this.updateHighlight(page, queryParams, url.includes("#") ? fragment : void 0);
  }
  updateHighlight(page, queryParams, fragment) {
    if (this.link === void 0) {
      this.highlighted = false;
      this.cdRef.markForCheck();
      return;
    }
    if (!page.endsWith("/") && !queryParams && this.fragment === void 0 && queryParams === void 0) {
      page = page + "/";
    }
    let fragmentEqual = false;
    if (fragment === this.fragment) {
      fragmentEqual = true;
    }
    if (this.fragment === "" && fragment === void 0) {
      fragmentEqual = true;
    }
    const queryParamsEqual = this.queryParams === queryParams;
    if (this.comparisonMethod === "equals" && page === this.link && fragmentEqual && queryParamsEqual) {
      this.highlighted = true;
      this.cdRef.markForCheck();
      return;
    }
    if (this.comparisonMethod === "startsWith" && page.startsWith(this.link)) {
      if (queryParams && queryParams === this.queryParams && fragmentEqual) {
        this.highlighted = true;
        this.cdRef.markForCheck();
        return;
      }
      this.highlighted = true;
      this.cdRef.markForCheck();
      return;
    }
    this.highlighted = false;
    this.cdRef.markForCheck();
  }
  openLink() {
    this.collapseNavIfApplicable();
    if (Object.keys(this.queryParams).length !== 0) {
      this.router.navigateByUrl(this.link + "?" + this.queryParams);
      return;
    } else if (this.fragment) {
      this.router.navigateByUrl(this.link + "#" + this.fragment);
      return;
    }
    this.router.navigateByUrl(this.link);
  }
  collapseNavIfApplicable() {
    if (this.utilityService.getActiveBreakpoint() < Breakpoint.Tablet) {
      this.navService.collapseSideNav(true);
    }
  }
  static {
    this.\u0275fac = function SideNavItemComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SideNavItemComponent)();
    };
  }
  static {
    this.\u0275cmp = \u0275\u0275defineComponent({ type: _SideNavItemComponent, selectors: [["app-side-nav-item"]], inputs: { id: "id", icon: "icon", imageUrl: "imageUrl", noIcon: "noIcon", title: "title", link: "link", external: "external", queryParams: "queryParams", fragment: "fragment", badgeCount: "badgeCount", comparisonMethod: "comparisonMethod" }, standalone: true, features: [\u0275\u0275StandaloneFeature], ngContentSelectors: _c1, decls: 4, vars: 1, consts: [["inner", ""], [1, "side-nav-item", 3, "ngClass"], [3, "ngTemplateOutlet"], ["rel", "noopener noreferrer", "target", "_blank", 1, "side-nav-item", 3, "id", "href", "ngClass"], ["href", "javascript:void(0);", 1, "side-nav-item", 3, "id", "ngClass"], ["href", "javascript:void(0);", 1, "side-nav-item", 3, "id", "ngClass", "routerLink", "fragment"], ["href", "javascript:void(0);", 1, "side-nav-item", 3, "id", "ngClass", "routerLink", "queryParams"], ["href", "javascript:void(0);", 1, "side-nav-item", 3, "click", "id", "ngClass"], [1, "active-highlight"], [1, "phone-hidden", 3, "title"], [1, "side-nav-text"], [1, "badge", "bg-danger", "rounded-pill", "ms-2"], [1, "card-actions"], ["width", "20px", "height", "20px", 3, "imageUrl"], ["aria-hidden", "true", 3, "class"], ["aria-hidden", "true"]], template: function SideNavItemComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef(_c0);
        \u0275\u0275template(0, SideNavItemComponent_Conditional_0_Template, 3, 7, "div", 1)(1, SideNavItemComponent_Conditional_1_Template, 2, 1)(2, SideNavItemComponent_ng_template_2_Template, 8, 3, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
      }
      if (rf & 2) {
        \u0275\u0275conditional(ctx.link === void 0 || ctx.link.length === 0 ? 0 : 1);
      }
    }, dependencies: [RouterLink, ImageComponent, NgTemplateOutlet, NgClass, AsyncPipe], styles: ["\n\n  .side-nav app-side-nav-item:first-child .active-highlight {\n  border-top-left-radius: 3px;\n}\n  .side-nav app-side-nav-item:first-child .side-nav-item {\n  border-top-left-radius: 3px;\n}\n@media (max-width: 992px) {\n    .side-nav app-side-nav-item:first-child .side-nav-item {\n    border-top-left-radius: 0px;\n  }\n    .side-nav app-side-nav-item:last-child .side-nav-item {\n    border-bottom-left-radius: 0px;\n  }\n}\n@media (max-width: 992px) {\n  .side-nav-item[_ngcontent-%COMP%]   .side-nav-text[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .side-nav-item[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:last-child {\n    flex-grow: 0;\n  }\n}\n/*# sourceMappingURL=side-nav-item.component.css.map */"], changeDetection: 0 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SideNavItemComponent, { className: "SideNavItemComponent", filePath: "src/app/sidenav/_components/side-nav-item/side-nav-item.component.ts", lineNumber: 19 });
})();

// src/app/_pipes/setting-fragment.pipe.ts
var SettingFragmentPipe = class _SettingFragmentPipe {
  transform(tabID) {
    return translate("settings." + tabID);
  }
  static {
    this.\u0275fac = function SettingFragmentPipe_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SettingFragmentPipe)();
    };
  }
  static {
    this.\u0275pipe = \u0275\u0275definePipe({ name: "settingFragment", type: _SettingFragmentPipe, pure: true, standalone: true });
  }
};

// src/app/sidenav/preference-nav/preference-nav.component.ts
var _forTrack0 = ($index, $item) => $item.title + $item.children.length;
var _forTrack1 = ($index, $item) => $item.fragment;
var _c02 = (a0, a1, a2) => ({ "closed": a0, "hidden": a1, "no-donate": a2 });
var _c12 = (a0) => ({ "mt-4": a0 });
var _c22 = (a0) => ({ "closed": a0 });
function PreferenceNavComponent_ng_container_0_Conditional_1_Conditional_0_For_6_Conditional_0_For_3_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-side-nav-item", 4);
    \u0275\u0275pipe(1, "settingFragment");
    \u0275\u0275pipe(2, "async");
  }
  if (rf & 2) {
    const item_r1 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("id", "nav-item-" + item_r1.fragment)("noIcon", true)("fragment", item_r1.fragment)("title", \u0275\u0275pipeBind1(1, 5, item_r1.fragment))("badgeCount", \u0275\u0275pipeBind1(2, 7, item_r1.badgeCount$));
  }
}
function PreferenceNavComponent_ng_container_0_Conditional_1_Conditional_0_For_6_Conditional_0_For_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, PreferenceNavComponent_ng_container_0_Conditional_1_Conditional_0_For_6_Conditional_0_For_3_Conditional_0_Template, 3, 9, "app-side-nav-item", 4);
  }
  if (rf & 2) {
    const item_r1 = ctx.$implicit;
    const user_r2 = \u0275\u0275nextContext(4);
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275conditional(ctx_r2.accountService.hasAnyRole(user_r2, item_r1.roles, item_r1.restrictRoles) ? 0 : -1);
  }
}
function PreferenceNavComponent_ng_container_0_Conditional_1_Conditional_0_For_6_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h5", 3);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(2, PreferenceNavComponent_ng_container_0_Conditional_1_Conditional_0_For_6_Conditional_0_For_3_Template, 1, 1, null, null, _forTrack1);
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    const section_r5 = ctx_r3.$implicit;
    const \u0275$index_16_r6 = ctx_r3.$index;
    const t_r7 = \u0275\u0275nextContext(3).$implicit;
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(2, _c12, \u0275$index_16_r6 > 0));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(t_r7(section_r5.title));
    \u0275\u0275advance();
    \u0275\u0275repeater(section_r5.children);
  }
}
function PreferenceNavComponent_ng_container_0_Conditional_1_Conditional_0_For_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, PreferenceNavComponent_ng_container_0_Conditional_1_Conditional_0_For_6_Conditional_0_Template, 4, 4);
  }
  if (rf & 2) {
    const section_r5 = ctx.$implicit;
    const user_r2 = \u0275\u0275nextContext(2);
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275conditional(ctx_r2.hasAnyChildren(user_r2, section_r5) ? 0 : -1);
  }
}
function PreferenceNavComponent_ng_container_0_Conditional_1_Conditional_0_Conditional_7_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 6);
    \u0275\u0275pipe(1, "async");
    \u0275\u0275listener("click", function PreferenceNavComponent_ng_container_0_Conditional_1_Conditional_0_Conditional_7_Conditional_0_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r2 = \u0275\u0275nextContext(5);
      return \u0275\u0275resetView(ctx_r2.collapse());
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(5);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(3, _c22, \u0275\u0275pipeBind1(1, 1, ctx_r2.navService.sideNavCollapsed$)));
  }
}
function PreferenceNavComponent_ng_container_0_Conditional_1_Conditional_0_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, PreferenceNavComponent_ng_container_0_Conditional_1_Conditional_0_Conditional_7_Conditional_0_Template, 2, 5, "div", 5);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(4);
    \u0275\u0275conditional(ctx < ctx_r2.Breakpoint.Desktop ? 0 : -1);
  }
}
function PreferenceNavComponent_ng_container_0_Conditional_1_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1);
    \u0275\u0275pipe(1, "async");
    \u0275\u0275pipe(2, "async");
    \u0275\u0275pipe(3, "async");
    \u0275\u0275elementStart(4, "div", 2);
    \u0275\u0275repeaterCreate(5, PreferenceNavComponent_ng_container_0_Conditional_1_Conditional_0_For_6_Template, 1, 1, null, null, _forTrack0);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(7, PreferenceNavComponent_ng_container_0_Conditional_1_Conditional_0_Conditional_7_Template, 1, 1);
    \u0275\u0275pipe(8, "async");
  }
  if (rf & 2) {
    let tmp_7_0;
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction3(10, _c02, \u0275\u0275pipeBind1(1, 2, ctx_r2.navService.sideNavCollapsed$), \u0275\u0275pipeBind1(2, 4, ctx_r2.navService.sideNavVisibility$) === false, \u0275\u0275pipeBind1(3, 6, ctx_r2.licenseService.hasValidLicense$) === true));
    \u0275\u0275advance(5);
    \u0275\u0275repeater(ctx_r2.sections);
    \u0275\u0275advance(2);
    \u0275\u0275conditional((tmp_7_0 = \u0275\u0275pipeBind1(8, 8, ctx_r2.utilityService.activeBreakpoint$)) ? 7 : -1, tmp_7_0);
  }
}
function PreferenceNavComponent_ng_container_0_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, PreferenceNavComponent_ng_container_0_Conditional_1_Conditional_0_Template, 9, 14);
    \u0275\u0275pipe(1, "async");
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275conditional(\u0275\u0275pipeBind1(1, 1, ctx_r2.navService.sideNavCollapsed$) === false ? 0 : -1);
  }
}
function PreferenceNavComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, PreferenceNavComponent_ng_container_0_Conditional_1_Template, 2, 3);
    \u0275\u0275pipe(2, "async");
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    let tmp_2_0;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional((tmp_2_0 = \u0275\u0275pipeBind1(2, 1, ctx_r2.accountService.currentUser$)) ? 1 : -1, tmp_2_0);
  }
}
var SettingsTabId;
(function(SettingsTabId2) {
  SettingsTabId2["General"] = "admin-general";
  SettingsTabId2["Email"] = "admin-email";
  SettingsTabId2["Media"] = "admin-media";
  SettingsTabId2["Users"] = "admin-users";
  SettingsTabId2["Libraries"] = "admin-libraries";
  SettingsTabId2["System"] = "admin-system";
  SettingsTabId2["Tasks"] = "admin-tasks";
  SettingsTabId2["Statistics"] = "admin-statistics";
  SettingsTabId2["MediaIssues"] = "admin-media-issues";
  SettingsTabId2["EmailHistory"] = "admin-email-history";
  SettingsTabId2["KavitaPlusLicense"] = "admin-kavitaplus";
  SettingsTabId2["MALStackImport"] = "mal-stack-import";
  SettingsTabId2["MatchedMetadata"] = "admin-matched-metadata";
  SettingsTabId2["ManageUserTokens"] = "admin-manage-tokens";
  SettingsTabId2["Metadata"] = "admin-metadata";
  SettingsTabId2["Account"] = "account";
  SettingsTabId2["Preferences"] = "preferences";
  SettingsTabId2["Clients"] = "clients";
  SettingsTabId2["Theme"] = "theme";
  SettingsTabId2["Devices"] = "devices";
  SettingsTabId2["UserStats"] = "user-stats";
  SettingsTabId2["Scrobbling"] = "scrobbling";
  SettingsTabId2["ScrobblingHolds"] = "scrobble-holds";
  SettingsTabId2["Customize"] = "customize";
  SettingsTabId2["CBLImport"] = "cbl-import";
})(SettingsTabId || (SettingsTabId = {}));
var SideNavItem = class {
  constructor(fragment, roles = [], badgeCount$ = void 0, restrictRoles = []) {
    this.roles = [];
    this.restrictRoles = [];
    this.fragment = fragment;
    this.roles = roles;
    this.restrictRoles = restrictRoles;
    this.badgeCount$ = badgeCount$;
  }
};
var PreferenceNavComponent = class _PreferenceNavComponent {
  constructor() {
    this.destroyRef = inject(DestroyRef);
    this.navService = inject(NavService);
    this.accountService = inject(AccountService);
    this.licenseService = inject(LicenseService);
    this.cdRef = inject(ChangeDetectorRef);
    this.route = inject(ActivatedRoute);
    this.serverService = inject(ServerService);
    this.scrobbleService = inject(ScrobblingService);
    this.router = inject(Router);
    this.utilityService = inject(UtilityService);
    this.manageService = inject(ManageService);
    this.document = inject(DOCUMENT);
    this.hasActiveLicense = false;
    this.sections = [
      {
        title: "account-section-title",
        children: [
          new SideNavItem(SettingsTabId.Account, []),
          new SideNavItem(SettingsTabId.Preferences),
          new SideNavItem(SettingsTabId.Customize, [], void 0, [Role.ReadOnly]),
          new SideNavItem(SettingsTabId.Clients),
          new SideNavItem(SettingsTabId.Theme),
          new SideNavItem(SettingsTabId.Devices),
          new SideNavItem(SettingsTabId.UserStats)
        ]
      },
      {
        title: "server-section-title",
        children: [
          new SideNavItem(SettingsTabId.General, [Role.Admin]),
          new SideNavItem(SettingsTabId.Media, [Role.Admin]),
          new SideNavItem(SettingsTabId.Email, [Role.Admin]),
          new SideNavItem(SettingsTabId.Users, [Role.Admin]),
          new SideNavItem(SettingsTabId.Libraries, [Role.Admin]),
          new SideNavItem(SettingsTabId.Tasks, [Role.Admin])
        ]
      },
      {
        title: "import-section-title",
        children: [
          new SideNavItem(SettingsTabId.CBLImport, [], void 0, [Role.ReadOnly])
        ]
      },
      {
        title: "info-section-title",
        children: [
          new SideNavItem(SettingsTabId.System, [Role.Admin]),
          new SideNavItem(SettingsTabId.Statistics, [Role.Admin]),
          new SideNavItem(SettingsTabId.MediaIssues, [Role.Admin], this.accountService.currentUser$.pipe(take(1), switchMap((user) => {
            if (!user || !this.accountService.hasAdminRole(user)) {
              return of(-1);
            } else {
              return this.serverService.getMediaErrors().pipe(takeUntilDestroyed(this.destroyRef), map((d) => d.length), shareReplay({ bufferSize: 1, refCount: true }));
            }
          }))),
          new SideNavItem(SettingsTabId.EmailHistory, [Role.Admin])
        ]
      },
      {
        title: "kavitaplus-section-title",
        children: [
          new SideNavItem(SettingsTabId.KavitaPlusLicense, [Role.Admin])
        ]
      }
    ];
    this.collapseSideNavOnMobileNav$ = this.router.events.pipe(filter((event) => event instanceof NavigationEnd), takeUntilDestroyed(this.destroyRef), map((evt) => evt), switchMap((_) => this.utilityService.activeBreakpoint$), filter((b) => b < Breakpoint.Tablet), switchMap(() => this.navService.sideNavCollapsed$), take(1), filter((collapsed) => !collapsed), tap((c) => {
      this.navService.collapseSideNav(true);
    }));
    this.matchedMetadataBadgeCount$ = this.accountService.currentUser$.pipe(take(1), switchMap((user) => {
      if (!user || !this.accountService.hasAdminRole(user)) {
        return of(-1);
      } else {
        return this.manageService.getAllKavitaPlusSeries({
          matchStateOption: MatchStateOption.Error,
          searchTerm: ""
        }).pipe(takeUntilDestroyed(this.destroyRef), map((d) => d.length), shareReplay({ bufferSize: 1, refCount: true }));
      }
    }));
    this.scrobblingErrorBadgeCount$ = this.accountService.currentUser$.pipe(take(1), switchMap((user) => {
      if (!user || !this.accountService.hasAdminRole(user)) {
        return of(-1);
      } else {
        return this.scrobbleService.getScrobbleErrors().pipe(takeUntilDestroyed(this.destroyRef), map((d) => d.length), shareReplay({ bufferSize: 1, refCount: true }));
      }
    }));
    this.Breakpoint = Breakpoint;
    this.collapseSideNavOnMobileNav$.subscribe();
    if (this.utilityService.getActiveBreakpoint() < Breakpoint.Tablet) {
      this.navService.collapseSideNav(true);
    }
    this.licenseService.hasValidLicense$.pipe(takeUntilDestroyed(this.destroyRef)).subscribe((res) => {
      this.hasActiveLicense = res;
      if (res) {
        const kavitaPlusSection = this.sections[4];
        if (kavitaPlusSection.children.length === 1) {
          kavitaPlusSection.children.push(new SideNavItem(SettingsTabId.ManageUserTokens, [Role.Admin]));
          kavitaPlusSection.children.push(new SideNavItem(SettingsTabId.Metadata, [Role.Admin]));
          kavitaPlusSection.children.push(new SideNavItem(SettingsTabId.MatchedMetadata, [Role.Admin], this.matchedMetadataBadgeCount$));
          kavitaPlusSection.children.push(new SideNavItem(SettingsTabId.ScrobblingHolds, []));
          kavitaPlusSection.children.push(new SideNavItem(SettingsTabId.Scrobbling, [], this.scrobblingErrorBadgeCount$));
        }
        if (this.sections[2].children.length === 1) {
          this.sections[2].children.push(new SideNavItem(SettingsTabId.MALStackImport, []));
        }
        this.scrollToActiveItem();
        this.cdRef.markForCheck();
      }
    });
  }
  ngAfterViewInit() {
    this.scrollToActiveItem();
  }
  scrollToActiveItem() {
    const activeFragment = this.route.snapshot.fragment;
    if (activeFragment) {
      const element = this.document.getElementById("nav-item-" + activeFragment);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "center" });
      }
    }
  }
  hasAnyChildren(user, section) {
    const visibleItems = section.children.filter((item) => item.restrictRoles.length === 0 || !this.accountService.hasAnyRole(user, item.restrictRoles));
    return visibleItems.some((item) => this.accountService.hasAnyRole(user, item.roles));
  }
  collapse() {
    this.navService.toggleSideNav();
  }
  static {
    this.\u0275fac = function PreferenceNavComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _PreferenceNavComponent)();
    };
  }
  static {
    this.\u0275cmp = \u0275\u0275defineComponent({ type: _PreferenceNavComponent, selectors: [["app-preference-nav"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 1, vars: 1, consts: [[4, "transloco", "translocoRead"], [1, "preference", "side-nav-container", 3, "ngClass"], [1, "side-nav"], [1, "side-nav-header", "mb-2", "ms-3", 3, "ngClass"], ["link", "/settings", 3, "id", "noIcon", "fragment", "title", "badgeCount"], [1, "side-nav-overlay", 3, "ngClass"], [1, "side-nav-overlay", 3, "click", "ngClass"]], template: function PreferenceNavComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, PreferenceNavComponent_ng_container_0_Template, 3, 3, "ng-container", 0);
      }
      if (rf & 2) {
        \u0275\u0275property("translocoRead", "settings");
      }
    }, dependencies: [
      TranslocoDirective,
      NgClass,
      AsyncPipe,
      SideNavItemComponent,
      SettingFragmentPipe
    ], styles: ["\n\n@supports (-moz-appearance: none) {\n  .side-nav[_ngcontent-%COMP%] {\n    scrollbar-color: transparent transparent;\n    scrollbar-width: thin;\n  }\n}\n.side-nav[_ngcontent-%COMP%]::-webkit-scrollbar {\n  background-color: transparent;\n  width: inherit;\n  display: none;\n  visibility: hidden;\n  background: transparent;\n}\n.side-nav[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: transparent;\n}\n.side-nav[_ngcontent-%COMP%]:hover {\n  scrollbar-width: thin;\n  overflow-y: auto;\n}\n@supports (-moz-appearance: none) {\n  .side-nav[_ngcontent-%COMP%]:hover {\n    scrollbar-color: rgba(255, 255, 255, 0.3) rgba(0, 0, 0, 0);\n  }\n}\n.side-nav[_ngcontent-%COMP%]:hover::-webkit-scrollbar-thumb {\n  visibility: visible;\n  background-color: rgba(255, 255, 255, 0.3);\n}\n@media (max-width: 992px) {\n  .side-nav[_ngcontent-%COMP%] {\n    padding: 10px 0;\n    width: 55vw;\n    background-color: var(--side-nav-mobile-bg-color);\n    height: 100dvh;\n    position: fixed;\n    margin: 0;\n    left: 0;\n    top: 0;\n    transition: width var(--side-nav-openclose-transition);\n    z-index: 999;\n    overflow: auto;\n    border: var(--side-nav-mobile-border);\n  }\n  .side-nav.closed[_ngcontent-%COMP%] {\n    width: 0;\n    overflow: hidden;\n    box-shadow: none;\n  }\n  .side-nav[_ngcontent-%COMP%]   .side-nav-item[_ngcontent-%COMP%]:first {\n    border-top-left-radius: var(--side-nav-border-radius);\n    border-top-right-radius: var(--side-nav-border-radius);\n  }\n  .side-nav.no-donate[_ngcontent-%COMP%] {\n    height: calc(var(--vh) * 100 - var(--nav-mobile-offset));\n  }\n}\n.side-nav-header[_ngcontent-%COMP%] {\n  color: #d5d5d5;\n  font-weight: bold;\n  margin-left: 5px;\n}\n/*# sourceMappingURL=preference-nav.component.css.map */"], changeDetection: 0 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PreferenceNavComponent, { className: "PreferenceNavComponent", filePath: "src/app/sidenav/preference-nav/preference-nav.component.ts", lineNumber: 90 });
})();

export {
  SideNavItemComponent,
  SettingFragmentPipe,
  SettingsTabId,
  PreferenceNavComponent
};
//# sourceMappingURL=chunk-HRPGFRNB.js.map
