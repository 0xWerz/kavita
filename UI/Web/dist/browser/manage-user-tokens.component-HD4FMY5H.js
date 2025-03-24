import {
  VirtualScrollerModule
} from "./chunk-MBZDR44C.js";
import "./chunk-W4DBALQX.js";
import {
  MemberService
} from "./chunk-XZ5MKEYT.js";
import {
  DefaultValuePipe
} from "./chunk-KMTIWVED.js";
import {
  UtcToLocalTimePipe
} from "./chunk-2L2JQBKQ.js";
import {
  ColumnMode,
  DataTableColumnCellDirective,
  DataTableColumnDirective,
  DataTableColumnHeaderDirective,
  DatatableComponent,
  NgxDatatableModule
} from "./chunk-AZB3LZ7Q.js";
import "./chunk-2JLAQ3MZ.js";
import "./chunk-TPURWX2Y.js";
import "./chunk-D7CIAEAO.js";
import "./chunk-A6JEQ5GB.js";
import "./chunk-RSMGJKYW.js";
import "./chunk-U2DWQJI2.js";
import "./chunk-2R2RCU4Y.js";
import "./chunk-5J5IKBMT.js";
import "./chunk-PUXELTB2.js";
import "./chunk-FLGYJHAG.js";
import "./chunk-BPOUBDX2.js";
import "./chunk-CQADFT7F.js";
import {
  ChangeDetectorRef,
  TranslocoDirective,
  inject,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵdefineComponent,
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

// src/app/admin/manage-user-tokens/manage-user-tokens.component.ts
var _c0 = (a0) => ({ date: a0 });
function ManageUserTokensComponent_ng_container_0_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const t_r1 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275textInterpolate1(" ", t_r1("username-header"), " ");
  }
}
function ManageUserTokensComponent_ng_container_0_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const item_r2 = ctx.row;
    \u0275\u0275textInterpolate1(" ", item_r2.username, " ");
  }
}
function ManageUserTokensComponent_ng_container_0_ng_template_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const t_r1 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275textInterpolate1(" ", t_r1("anilist-header"), " ");
  }
}
function ManageUserTokensComponent_ng_container_0_ng_template_9_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275elementStart(1, "span", 7);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "utcToLocalTime");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r3 = \u0275\u0275nextContext().row;
    const t_r1 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275textInterpolate1(" ", t_r1("token-set-label"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r1("expires-label", \u0275\u0275pureFunction1(4, _c0, \u0275\u0275pipeBind1(3, 2, item_r3.aniListValidUntilUtc))));
  }
}
function ManageUserTokensComponent_ng_container_0_ng_template_9_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "defaultValue");
  }
  if (rf & 2) {
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(1, 1, null), " ");
  }
}
function ManageUserTokensComponent_ng_container_0_ng_template_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, ManageUserTokensComponent_ng_container_0_ng_template_9_Conditional_0_Template, 4, 6, "span", 7)(1, ManageUserTokensComponent_ng_container_0_ng_template_9_Conditional_1_Template, 2, 3);
  }
  if (rf & 2) {
    const item_r3 = ctx.row;
    \u0275\u0275conditional(item_r3.isAniListTokenSet ? 0 : 1);
  }
}
function ManageUserTokensComponent_ng_container_0_ng_template_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const t_r1 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275textInterpolate1(" ", t_r1("mal-header"), " ");
  }
}
function ManageUserTokensComponent_ng_container_0_ng_template_12_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const t_r1 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275textInterpolate1(" ", t_r1("token-set-label"), " ");
  }
}
function ManageUserTokensComponent_ng_container_0_ng_template_12_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "defaultValue");
  }
  if (rf & 2) {
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(1, 1, null), " ");
  }
}
function ManageUserTokensComponent_ng_container_0_ng_template_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, ManageUserTokensComponent_ng_container_0_ng_template_12_Conditional_0_Template, 1, 1)(1, ManageUserTokensComponent_ng_container_0_ng_template_12_Conditional_1_Template, 2, 3);
  }
  if (rf & 2) {
    const item_r4 = ctx.row;
    \u0275\u0275conditional(item_r4.isMalTokenSet ? 0 : 1);
  }
}
function ManageUserTokensComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "p");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "ngx-datatable", 1)(4, "ngx-datatable-column", 2);
    \u0275\u0275template(5, ManageUserTokensComponent_ng_container_0_ng_template_5_Template, 1, 1, "ng-template", 3)(6, ManageUserTokensComponent_ng_container_0_ng_template_6_Template, 1, 1, "ng-template", 4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "ngx-datatable-column", 5);
    \u0275\u0275template(8, ManageUserTokensComponent_ng_container_0_ng_template_8_Template, 1, 1, "ng-template", 3)(9, ManageUserTokensComponent_ng_container_0_ng_template_9_Template, 2, 1, "ng-template", 4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "ngx-datatable-column", 6);
    \u0275\u0275template(11, ManageUserTokensComponent_ng_container_0_ng_template_11_Template, 1, 1, "ng-template", 3)(12, ManageUserTokensComponent_ng_container_0_ng_template_12_Template, 2, 1, "ng-template", 4);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const t_r1 = ctx.$implicit;
    const ctx_r4 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r1("description"));
    \u0275\u0275advance();
    \u0275\u0275property("rows", ctx_r4.users)("columnMode", ctx_r4.ColumnMode.force)("footerHeight", 50);
    \u0275\u0275advance();
    \u0275\u0275property("sortable", true)("draggable", false)("resizeable", false);
    \u0275\u0275advance(3);
    \u0275\u0275property("sortable", false)("draggable", false)("resizeable", false);
    \u0275\u0275advance(3);
    \u0275\u0275property("sortable", false)("draggable", false)("resizeable", false);
  }
}
var ManageUserTokensComponent = class _ManageUserTokensComponent {
  constructor() {
    this.cdRef = inject(ChangeDetectorRef);
    this.memberService = inject(MemberService);
    this.isLoading = true;
    this.users = [];
    this.ColumnMode = ColumnMode;
  }
  ngOnInit() {
    this.loadData();
  }
  loadData() {
    this.isLoading = true;
    this.cdRef.markForCheck();
    this.memberService.getUserTokenInfo().subscribe((users) => {
      this.users = users;
      this.isLoading = false;
      this.cdRef.markForCheck();
    });
  }
  static {
    this.\u0275fac = function ManageUserTokensComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ManageUserTokensComponent)();
    };
  }
  static {
    this.\u0275cmp = \u0275\u0275defineComponent({ type: _ManageUserTokensComponent, selectors: [["app-manage-user-tokens"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 1, vars: 1, consts: [[4, "transloco", "translocoRead"], ["rowHeight", "auto", 1, "bootstrap", 3, "rows", "columnMode", "footerHeight"], ["prop", "username", 3, "sortable", "draggable", "resizeable"], ["ngx-datatable-header-template", ""], ["ngx-datatable-cell-template", ""], ["prop", "aniListValidUntilUtc", 3, "sortable", "draggable", "resizeable"], ["prop", "validUntilUtc", 3, "sortable", "draggable", "resizeable"], [1, "text-muted", "ms-1"]], template: function ManageUserTokensComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, ManageUserTokensComponent_ng_container_0_Template, 13, 13, "ng-container", 0);
      }
      if (rf & 2) {
        \u0275\u0275property("translocoRead", "manage-user-tokens");
      }
    }, dependencies: [
      TranslocoDirective,
      DefaultValuePipe,
      UtcToLocalTimePipe,
      VirtualScrollerModule,
      NgxDatatableModule,
      DatatableComponent,
      DataTableColumnDirective,
      DataTableColumnHeaderDirective,
      DataTableColumnCellDirective
    ], changeDetection: 0 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ManageUserTokensComponent, { className: "ManageUserTokensComponent", filePath: "src/app/admin/manage-user-tokens/manage-user-tokens.component.ts", lineNumber: 34 });
})();
export {
  ManageUserTokensComponent
};
//# sourceMappingURL=manage-user-tokens.component-HD4FMY5H.js.map
