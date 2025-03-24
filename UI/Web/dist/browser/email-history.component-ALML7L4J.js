import {
  VirtualScrollerModule
} from "./chunk-MBZDR44C.js";
import "./chunk-KMTIWVED.js";
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
import "./chunk-D7CIAEAO.js";
import {
  HttpClient,
  environment
} from "./chunk-CQADFT7F.js";
import {
  ChangeDetectorRef,
  TranslocoDirective,
  inject,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵinject,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-PYHIUVNJ.js";

// src/app/_services/email.service.ts
var EmailService = class _EmailService {
  constructor(httpClient) {
    this.httpClient = httpClient;
    this.baseUrl = environment.apiUrl;
  }
  getEmailHistory() {
    return this.httpClient.get(`${this.baseUrl}email/all`);
  }
  static {
    this.\u0275fac = function EmailService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _EmailService)(\u0275\u0275inject(HttpClient));
    };
  }
  static {
    this.\u0275prov = \u0275\u0275defineInjectable({ token: _EmailService, factory: _EmailService.\u0275fac, providedIn: "root" });
  }
};

// src/app/admin/email-history/email-history.component.ts
function EmailHistoryComponent_ng_container_0_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const t_r1 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275textInterpolate1(" ", t_r1("template-header"), " ");
  }
}
function EmailHistoryComponent_ng_container_0_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const item_r2 = ctx.row;
    \u0275\u0275textInterpolate1(" ", item_r2.emailTemplate, " ");
  }
}
function EmailHistoryComponent_ng_container_0_ng_template_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const t_r1 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275textInterpolate1(" ", t_r1("date-header"), " ");
  }
}
function EmailHistoryComponent_ng_container_0_ng_template_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "utcToLocalTime");
  }
  if (rf & 2) {
    const item_r3 = ctx.row;
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(1, 1, item_r3.sendDate), " ");
  }
}
function EmailHistoryComponent_ng_container_0_ng_template_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const t_r1 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275textInterpolate1(" ", t_r1("user-header"), " ");
  }
}
function EmailHistoryComponent_ng_container_0_ng_template_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const item_r4 = ctx.row;
    \u0275\u0275textInterpolate1(" ", item_r4.toUserName, " ");
  }
}
function EmailHistoryComponent_ng_container_0_ng_template_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const t_r1 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275textInterpolate1(" ", t_r1("sent-header"), " ");
  }
}
function EmailHistoryComponent_ng_container_0_ng_template_15_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "i", 8)(1, "span", 10);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const t_r1 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r1("sent-tooltip"));
  }
}
function EmailHistoryComponent_ng_container_0_ng_template_15_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "i", 9)(1, "span", 10);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const t_r1 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r1("not-sent-tooltip"));
  }
}
function EmailHistoryComponent_ng_container_0_ng_template_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, EmailHistoryComponent_ng_container_0_ng_template_15_Conditional_0_Template, 3, 1, "i", 8)(1, EmailHistoryComponent_ng_container_0_ng_template_15_Conditional_1_Template, 3, 1, "i", 9);
  }
  if (rf & 2) {
    const item_r5 = ctx.row;
    \u0275\u0275conditional(item_r5.sent ? 0 : 1);
  }
}
function EmailHistoryComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "p");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "ngx-datatable", 1)(4, "ngx-datatable-column", 2);
    \u0275\u0275template(5, EmailHistoryComponent_ng_container_0_ng_template_5_Template, 1, 1, "ng-template", 3)(6, EmailHistoryComponent_ng_container_0_ng_template_6_Template, 1, 1, "ng-template", 4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "ngx-datatable-column", 5);
    \u0275\u0275template(8, EmailHistoryComponent_ng_container_0_ng_template_8_Template, 1, 1, "ng-template", 3)(9, EmailHistoryComponent_ng_container_0_ng_template_9_Template, 2, 3, "ng-template", 4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "ngx-datatable-column", 6);
    \u0275\u0275template(11, EmailHistoryComponent_ng_container_0_ng_template_11_Template, 1, 1, "ng-template", 3)(12, EmailHistoryComponent_ng_container_0_ng_template_12_Template, 1, 1, "ng-template", 4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "ngx-datatable-column", 7);
    \u0275\u0275template(14, EmailHistoryComponent_ng_container_0_ng_template_14_Template, 1, 1, "ng-template", 3)(15, EmailHistoryComponent_ng_container_0_ng_template_15_Template, 2, 1, "ng-template", 4);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const t_r1 = ctx.$implicit;
    const ctx_r5 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r1("description"));
    \u0275\u0275advance();
    \u0275\u0275property("rows", ctx_r5.data)("columnMode", ctx_r5.ColumnMode.force)("footerHeight", 50);
    \u0275\u0275advance();
    \u0275\u0275property("sortable", true)("draggable", false)("resizeable", false);
    \u0275\u0275advance(3);
    \u0275\u0275property("sortable", true)("draggable", false)("resizeable", false);
    \u0275\u0275advance(3);
    \u0275\u0275property("sortable", true)("draggable", false)("resizeable", false);
    \u0275\u0275advance(3);
    \u0275\u0275property("sortable", true)("draggable", false)("resizeable", false);
  }
}
var EmailHistoryComponent = class _EmailHistoryComponent {
  constructor() {
    this.cdRef = inject(ChangeDetectorRef);
    this.emailService = inject(EmailService);
    this.isLoading = true;
    this.data = [];
    this.ColumnMode = ColumnMode;
  }
  ngOnInit() {
    this.emailService.getEmailHistory().subscribe((data) => {
      this.data = data;
      this.isLoading = false;
      this.cdRef.markForCheck();
    });
  }
  static {
    this.\u0275fac = function EmailHistoryComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _EmailHistoryComponent)();
    };
  }
  static {
    this.\u0275cmp = \u0275\u0275defineComponent({ type: _EmailHistoryComponent, selectors: [["app-email-history"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 1, vars: 1, consts: [[4, "transloco", "translocoRead"], ["rowHeight", "auto", 1, "bootstrap", 3, "rows", "columnMode", "footerHeight"], ["prop", "emailTemplate", 3, "sortable", "draggable", "resizeable"], ["ngx-datatable-header-template", ""], ["ngx-datatable-cell-template", ""], ["prop", "sendDate", 3, "sortable", "draggable", "resizeable"], ["prop", "toUserName", 3, "sortable", "draggable", "resizeable"], ["prop", "sent", 3, "sortable", "draggable", "resizeable"], [1, "fa-solid", "fa-check-circle", "successful-validation", "ms-1"], [1, "error", "fa-solid", "fa-exclamation-circle", "ms-1"], [1, "visually-hidden"]], template: function EmailHistoryComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, EmailHistoryComponent_ng_container_0_Template, 16, 16, "ng-container", 0);
      }
      if (rf & 2) {
        \u0275\u0275property("translocoRead", "email-history");
      }
    }, dependencies: [
      TranslocoDirective,
      VirtualScrollerModule,
      UtcToLocalTimePipe,
      NgxDatatableModule,
      DatatableComponent,
      DataTableColumnDirective,
      DataTableColumnHeaderDirective,
      DataTableColumnCellDirective
    ], changeDetection: 0 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(EmailHistoryComponent, { className: "EmailHistoryComponent", filePath: "src/app/admin/email-history/email-history.component.ts", lineNumber: 26 });
})();
export {
  EmailHistoryComponent
};
//# sourceMappingURL=email-history.component-ALML7L4J.js.map
