import {
  DefaultValuePipe
} from "./chunk-KMTIWVED.js";
import {
  ChangeDetectorRef,
  EventEmitter,
  NgTemplateOutlet,
  TranslocoDirective,
  inject,
  ɵsetClassDebugInfo,
  ɵɵNgOnChangesFeature,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵconditional,
  ɵɵcontentQuery,
  ɵɵdefineComponent,
  ɵɵelementContainer,
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
  ɵɵpureFunction1,
  ɵɵpureFunction3,
  ɵɵqueryRefresh,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate1
} from "./chunk-PYHIUVNJ.js";

// src/app/shared/badge-expander/badge-expander.component.ts
var _c0 = ["badgeExpanderItem"];
var _c1 = (a0, a1, a2) => ({ $implicit: a0, idx: a1, last: a2 });
var _c2 = (a0) => ({ count: a0 });
function BadgeExpanderComponent_ng_container_0_For_4_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, ", ");
    \u0275\u0275elementEnd();
  }
}
function BadgeExpanderComponent_ng_container_0_For_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0, 4);
    \u0275\u0275template(1, BadgeExpanderComponent_ng_container_0_For_4_Conditional_1_Template, 2, 0, "span");
  }
  if (rf & 2) {
    const item_r1 = ctx.$implicit;
    const \u0275$index_9_r2 = ctx.$index;
    const \u0275$count_9_r3 = ctx.$count;
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngTemplateOutlet", ctx_r3.itemTemplate)("ngTemplateOutletContext", \u0275\u0275pureFunction3(3, _c1, item_r1, \u0275$index_9_r2, \u0275$index_9_r2 === \u0275$count_9_r3 - 1));
    \u0275\u0275advance();
    \u0275\u0275conditional(!(\u0275$index_9_r2 === \u0275$count_9_r3 - 1) && ctx_r3.includeComma ? 1 : -1);
  }
}
function BadgeExpanderComponent_ng_container_0_ForEmpty_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "defaultValue");
  }
  if (rf & 2) {
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(1, 1, null), " ");
  }
}
function BadgeExpanderComponent_ng_container_0_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "a", 5);
    \u0275\u0275listener("click", function BadgeExpanderComponent_ng_container_0_Conditional_6_Template_a_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.toggleVisible());
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r6 = \u0275\u0275nextContext().$implicit;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275attribute("aria-expanded", !ctx_r3.isCollapsed);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", t_r6("more-items", \u0275\u0275pureFunction1(2, _c2, ctx_r3.itemsLeft)), " ");
  }
}
function BadgeExpanderComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 1)(2, "div", 2);
    \u0275\u0275repeaterCreate(3, BadgeExpanderComponent_ng_container_0_For_4_Template, 2, 7, null, null, \u0275\u0275repeaterTrackByIdentity, false, BadgeExpanderComponent_ng_container_0_ForEmpty_5_Template, 2, 3);
    \u0275\u0275template(6, BadgeExpanderComponent_ng_container_0_Conditional_6_Template, 2, 4, "a", 3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r3.visibleItems);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(!ctx_r3.isCollapsed && ctx_r3.itemsLeft !== 0 ? 6 : -1);
  }
}
var BadgeExpanderComponent = class _BadgeExpanderComponent {
  constructor() {
    this.cdRef = inject(ChangeDetectorRef);
    this.items = [];
    this.itemsTillExpander = 4;
    this.allowToggle = true;
    this.includeComma = true;
    this.defaultExpanded = false;
    this.toggle = new EventEmitter();
    this.visibleItems = [];
    this.isCollapsed = false;
  }
  get itemsLeft() {
    if (this.defaultExpanded)
      return 0;
    return Math.max(this.items.length - this.itemsTillExpander, 0);
  }
  ngOnInit() {
    if (this.defaultExpanded) {
      this.isCollapsed = false;
      this.visibleItems = this.items;
      this.cdRef.markForCheck();
      return;
    }
    this.visibleItems = this.items.slice(0, this.itemsTillExpander);
    this.cdRef.markForCheck();
  }
  ngOnChanges(changes) {
    this.visibleItems = this.items.slice(0, this.itemsTillExpander);
    this.cdRef.markForCheck();
  }
  toggleVisible() {
    this.toggle.emit();
    if (!this.allowToggle)
      return;
    this.isCollapsed = !this.isCollapsed;
    this.visibleItems = this.items;
    this.cdRef.markForCheck();
  }
  static {
    this.\u0275fac = function BadgeExpanderComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _BadgeExpanderComponent)();
    };
  }
  static {
    this.\u0275cmp = \u0275\u0275defineComponent({ type: _BadgeExpanderComponent, selectors: [["app-badge-expander"]], contentQueries: function BadgeExpanderComponent_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        \u0275\u0275contentQuery(dirIndex, _c0, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.itemTemplate = _t.first);
      }
    }, inputs: { items: "items", itemsTillExpander: "itemsTillExpander", allowToggle: "allowToggle", includeComma: "includeComma", defaultExpanded: "defaultExpanded" }, outputs: { toggle: "toggle" }, standalone: true, features: [\u0275\u0275NgOnChangesFeature, \u0275\u0275StandaloneFeature], decls: 1, vars: 1, consts: [[4, "transloco", "translocoRead"], [1, "badge-expander"], [1, "content"], ["href", "javascript:void(0);", "type", "button", 1, "dark-exempt", "btn-icon", "ms-1"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], ["href", "javascript:void(0);", "type", "button", 1, "dark-exempt", "btn-icon", "ms-1", 3, "click"]], template: function BadgeExpanderComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, BadgeExpanderComponent_ng_container_0_Template, 7, 2, "ng-container", 0);
      }
      if (rf & 2) {
        \u0275\u0275property("translocoRead", "badge-expander");
      }
    }, dependencies: [TranslocoDirective, NgTemplateOutlet, DefaultValuePipe], styles: ["\n\n.content[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.collapsed[_ngcontent-%COMP%] {\n  height: 35px;\n  overflow: hidden;\n}\n/*# sourceMappingURL=badge-expander.component.css.map */"], changeDetection: 0 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(BadgeExpanderComponent, { className: "BadgeExpanderComponent", filePath: "src/app/shared/badge-expander/badge-expander.component.ts", lineNumber: 23 });
})();

export {
  BadgeExpanderComponent
};
//# sourceMappingURL=chunk-5EJJ6TJW.js.map
