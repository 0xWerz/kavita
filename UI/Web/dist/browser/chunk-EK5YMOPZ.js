import {
  ServerService
} from "./chunk-KKWGV4SA.js";
import {
  SortableHeader,
  compare
} from "./chunk-EENYA2ZI.js";
import {
  DefaultDatePipe
} from "./chunk-DMXJBIB5.js";
import {
  WikiLink
} from "./chunk-GX7EGMKV.js";
import {
  FilterPipe
} from "./chunk-NGXWDHM5.js";
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
import {
  EVENTS,
  MessageHubService
} from "./chunk-PUXELTB2.js";
import {
  DefaultValueAccessor,
  FormControl,
  FormControlName,
  FormGroup,
  FormGroupDirective,
  NgControlStatus,
  NgControlStatusGroup,
  ReactiveFormsModule,
  ɵNgNoValidate
} from "./chunk-BPOUBDX2.js";
import {
  BehaviorSubject,
  ChangeDetectorRef,
  DestroyRef,
  EventEmitter,
  TranslocoDirective,
  filter,
  inject,
  shareReplay,
  takeUntilDestroyed,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
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
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵqueryRefresh,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵviewQuery
} from "./chunk-PYHIUVNJ.js";

// src/app/admin/manage-media-issues/manage-media-issues.component.ts
function ManageMediaIssuesComponent_ng_container_0_ng_template_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const t_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275textInterpolate1(" ", t_r3("file-header"), " ");
  }
}
function ManageMediaIssuesComponent_ng_container_0_ng_template_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const item_r4 = ctx.row;
    \u0275\u0275textInterpolate1(" ", item_r4.filePath, " ");
  }
}
function ManageMediaIssuesComponent_ng_container_0_ng_template_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const t_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275textInterpolate1(" ", t_r3("comment-header"), " ");
  }
}
function ManageMediaIssuesComponent_ng_container_0_ng_template_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const item_r5 = ctx.row;
    \u0275\u0275textInterpolate1(" ", item_r5.comment, " ");
  }
}
function ManageMediaIssuesComponent_ng_container_0_ng_template_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const t_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275textInterpolate1(" ", t_r3("created-header"), " ");
  }
}
function ManageMediaIssuesComponent_ng_container_0_ng_template_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "utcToLocalTime");
    \u0275\u0275pipe(2, "defaultDate");
  }
  if (rf & 2) {
    const item_r6 = ctx.row;
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 3, \u0275\u0275pipeBind1(1, 1, item_r6.createdUtc)), " ");
  }
}
function ManageMediaIssuesComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "p");
    \u0275\u0275text(2);
    \u0275\u0275elementStart(3, "a", 1);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "form", 2)(6, "div", 3)(7, "div", 4)(8, "label", 5);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 6);
    \u0275\u0275element(11, "input", 7);
    \u0275\u0275elementStart(12, "button", 8);
    \u0275\u0275listener("click", function ManageMediaIssuesComponent_ng_container_0_Template_button_click_12_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.clear());
    });
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(14, "ngx-datatable", 9);
    \u0275\u0275pipe(15, "filter");
    \u0275\u0275elementStart(16, "ngx-datatable-column", 10);
    \u0275\u0275template(17, ManageMediaIssuesComponent_ng_container_0_ng_template_17_Template, 1, 1, "ng-template", 11)(18, ManageMediaIssuesComponent_ng_container_0_ng_template_18_Template, 1, 1, "ng-template", 12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "ngx-datatable-column", 13);
    \u0275\u0275template(20, ManageMediaIssuesComponent_ng_container_0_ng_template_20_Template, 1, 1, "ng-template", 11)(21, ManageMediaIssuesComponent_ng_container_0_ng_template_21_Template, 1, 1, "ng-template", 12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "ngx-datatable-column", 14);
    \u0275\u0275template(23, ManageMediaIssuesComponent_ng_container_0_ng_template_23_Template, 1, 1, "ng-template", 11)(24, ManageMediaIssuesComponent_ng_container_0_ng_template_24_Template, 3, 5, "ng-template", 12);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const t_r3 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", t_r3("description-part-1"), " ");
    \u0275\u0275advance();
    \u0275\u0275property("href", ctx_r1.WikiLink.MediaIssues, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(t_r3("description-part-2"));
    \u0275\u0275advance();
    \u0275\u0275property("formGroup", ctx_r1.formGroup);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(t_r3("filter-label"));
    \u0275\u0275advance(2);
    \u0275\u0275property("placeholder", t_r3("filter-label"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r3("clear-alerts"));
    \u0275\u0275advance();
    \u0275\u0275property("rows", \u0275\u0275pipeBind2(15, 23, ctx_r1.data, ctx_r1.filterList))("columnMode", ctx_r1.ColumnMode.flex)("footerHeight", 50)("limit", 15);
    \u0275\u0275advance(2);
    \u0275\u0275property("sortable", true)("draggable", false)("resizeable", false)("flexGrow", 3);
    \u0275\u0275advance(3);
    \u0275\u0275property("sortable", true)("draggable", false)("resizeable", false)("flexGrow", 1);
    \u0275\u0275advance(3);
    \u0275\u0275property("sortable", true)("draggable", false)("resizeable", false)("flexGrow", 1);
  }
}
var ManageMediaIssuesComponent = class _ManageMediaIssuesComponent {
  constructor() {
    this.ColumnMode = ColumnMode;
    this.alertCount = new EventEmitter();
    this.serverService = inject(ServerService);
    this.messageHub = inject(MessageHubService);
    this.cdRef = inject(ChangeDetectorRef);
    this.destroyRef = inject(DestroyRef);
    this.WikiLink = WikiLink;
    this.messageHubUpdate$ = this.messageHub.messages$.pipe(takeUntilDestroyed(this.destroyRef), filter((m) => m.event === EVENTS.ScanSeries), shareReplay());
    this.currentSort = new BehaviorSubject({ column: "extension", direction: "asc" });
    this.currentSort$ = this.currentSort.asObservable();
    this.data = [];
    this.isLoading = true;
    this.formGroup = new FormGroup({
      filter: new FormControl("", [])
    });
    this.filterList = (listItem) => {
      const query = (this.formGroup.get("filter")?.value || "").toLowerCase();
      return listItem.comment.toLowerCase().indexOf(query) >= 0 || listItem.filePath.toLowerCase().indexOf(query) >= 0 || listItem.details.indexOf(query) >= 0;
    };
  }
  ngOnInit() {
    this.loadData();
    this.messageHubUpdate$.subscribe((_) => this.loadData());
    this.currentSort$.subscribe((sortConfig) => {
      this.data = sortConfig.column ? this.data.sort((a, b) => {
        if (sortConfig.column === "")
          return 0;
        const res = compare(a[sortConfig.column], b[sortConfig.column]);
        return sortConfig.direction === "asc" ? res : -res;
      }) : this.data;
      this.cdRef.markForCheck();
    });
  }
  loadData() {
    this.isLoading = true;
    this.cdRef.markForCheck();
    this.serverService.getMediaErrors().subscribe((d) => {
      this.data = d;
      this.isLoading = false;
      this.alertCount.emit(d.length);
      this.cdRef.detectChanges();
    });
  }
  clear() {
    this.serverService.clearMediaAlerts().subscribe((_) => this.loadData());
  }
  static {
    this.\u0275fac = function ManageMediaIssuesComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ManageMediaIssuesComponent)();
    };
  }
  static {
    this.\u0275cmp = \u0275\u0275defineComponent({ type: _ManageMediaIssuesComponent, selectors: [["app-manage-media-issues"]], viewQuery: function ManageMediaIssuesComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(SortableHeader, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.headers = _t);
      }
    }, outputs: { alertCount: "alertCount" }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 1, vars: 1, consts: [[4, "transloco", "translocoRead"], ["rel", "noopener noreferrer", "target", "_blank", 3, "href"], [3, "formGroup"], [1, "row", "g-0", "mb-3"], [1, "col-md-12"], ["for", "filter", 1, "visually-hidden"], [1, "input-group"], ["id", "filter", "type", "text", "formControlName", "filter", 1, "form-control", 3, "placeholder"], ["type", "button", 1, "btn", "btn-primary", 3, "click"], ["rowHeight", "auto", 1, "bootstrap", 3, "rows", "columnMode", "footerHeight", "limit"], ["prop", "filePath", 3, "sortable", "draggable", "resizeable", "flexGrow"], ["ngx-datatable-header-template", ""], ["ngx-datatable-cell-template", ""], ["prop", "comment", 3, "sortable", "draggable", "resizeable", "flexGrow"], ["prop", "createdUtc", 3, "sortable", "draggable", "resizeable", "flexGrow"]], template: function ManageMediaIssuesComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, ManageMediaIssuesComponent_ng_container_0_Template, 25, 26, "ng-container", 0);
      }
      if (rf & 2) {
        \u0275\u0275property("translocoRead", "manage-media-issues");
      }
    }, dependencies: [ReactiveFormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, FilterPipe, TranslocoDirective, UtcToLocalTimePipe, DefaultDatePipe, NgxDatatableModule, DatatableComponent, DataTableColumnDirective, DataTableColumnHeaderDirective, DataTableColumnCellDirective], styles: ["\n\n@media (max-width: 576px) {\n  .table[_ngcontent-%COMP%] {\n    overflow-x: auto;\n    width: 100% !important;\n    display: block;\n  }\n}\n@media (max-width: 992px) {\n  .table[_ngcontent-%COMP%]   .btn-container[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: row;\n    flex-wrap: wrap;\n    align-items: center;\n    justify-content: center;\n  }\n}\n.table[_ngcontent-%COMP%]   .btn-container[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  width: 32px;\n}\n/*# sourceMappingURL=manage-media-issues.component.css.map */"], changeDetection: 0 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ManageMediaIssuesComponent, { className: "ManageMediaIssuesComponent", filePath: "src/app/admin/manage-media-issues/manage-media-issues.component.ts", lineNumber: 35 });
})();

export {
  ManageMediaIssuesComponent
};
//# sourceMappingURL=chunk-EK5YMOPZ.js.map
