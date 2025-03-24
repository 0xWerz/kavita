import {
  AdvancedPieChartComponent,
  DayBreakdownComponent,
  GenericListModalComponent,
  PieChartModule,
  ReadingActivityComponent,
  StatListComponent,
  StatisticsService,
  TimeDurationPipe,
  TopReadersComponent
} from "./chunk-ERF6WUKS.js";
import {
  IconAndTitleComponent
} from "./chunk-D3SGRXLI.js";
import {
  CompactNumberPipe
} from "./chunk-AFXXYIIH.js";
import "./chunk-RGQOJ2I6.js";
import {
  FilterUtilitiesService
} from "./chunk-SBBWMOEE.js";
import {
  SortableHeader,
  compare
} from "./chunk-EENYA2ZI.js";
import "./chunk-XZ2P7HP2.js";
import {
  MangaFormatPipe
} from "./chunk-RMZ6EY72.js";
import "./chunk-CVI764VQ.js";
import {
  BytesPipe
} from "./chunk-C423WP7Y.js";
import "./chunk-NGXWDHM5.js";
import "./chunk-XZ5MKEYT.js";
import "./chunk-2JLAQ3MZ.js";
import {
  ImageService
} from "./chunk-TPURWX2Y.js";
import {
  FilterComparison,
  FilterField,
  MetadataService
} from "./chunk-IBO6ECG5.js";
import "./chunk-BX5PUGWH.js";
import "./chunk-HN36WWH3.js";
import {
  Breakpoint,
  UtilityService
} from "./chunk-A6JEQ5GB.js";
import "./chunk-RSMGJKYW.js";
import {
  AccountService,
  Router
} from "./chunk-U2DWQJI2.js";
import {
  NgbModal,
  NgbTooltip
} from "./chunk-2R2RCU4Y.js";
import "./chunk-5J5IKBMT.js";
import "./chunk-PUXELTB2.js";
import "./chunk-FLGYJHAG.js";
import {
  CheckboxControlValueAccessor,
  FormControl,
  FormControlDirective,
  NgControlStatus,
  NgControlStatusGroup,
  ReactiveFormsModule,
  ɵNgNoValidate
} from "./chunk-BPOUBDX2.js";
import "./chunk-CQADFT7F.js";
import {
  AsyncPipe,
  BehaviorSubject,
  ChangeDetectorRef,
  DecimalPipe,
  DestroyRef,
  NgForOf,
  NgIf,
  ReplaySubject,
  TranslocoDirective,
  TranslocoService,
  combineLatest,
  inject,
  map,
  shareReplay,
  takeUntilDestroyed,
  translate,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
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
  ɵɵpropertyInterpolate1,
  ɵɵpureFunction1,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵresetView,
  ɵɵresolveWindow,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵviewQuery
} from "./chunk-PYHIUVNJ.js";

// src/app/statistics/_components/publication-status-stats/publication-status-stats.component.ts
function PublicationStatusStatsComponent_ng_container_0_ng_container_13_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275element(1, "ngx-charts-advanced-pie-chart", 11);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const statuses_r1 = \u0275\u0275nextContext().ngIf;
    \u0275\u0275advance();
    \u0275\u0275property("results", statuses_r1);
  }
}
function PublicationStatusStatsComponent_ng_container_0_ng_container_13_ng_template_2_tr_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 16);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td");
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "number");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r4 = ctx.$implicit;
    const idx_r5 = ctx.index;
    \u0275\u0275advance();
    \u0275\u0275propertyInterpolate1("id", "adhoctask--", idx_r5, "");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", item_r4.name, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(5, 4, item_r4.value, "1.0-0"), " ");
  }
}
function PublicationStatusStatsComponent_ng_container_0_ng_container_13_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "table", 12)(1, "thead")(2, "tr")(3, "th", 13);
    \u0275\u0275listener("sort", function PublicationStatusStatsComponent_ng_container_0_ng_container_13_ng_template_2_Template_th_sort_3_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.onSort($event));
    });
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "th", 14);
    \u0275\u0275listener("sort", function PublicationStatusStatsComponent_ng_container_0_ng_container_13_ng_template_2_Template_th_sort_5_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.onSort($event));
    });
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(7, "tbody");
    \u0275\u0275template(8, PublicationStatusStatsComponent_ng_container_0_ng_container_13_ng_template_2_tr_8_Template, 6, 7, "tr", 15);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const statuses_r1 = \u0275\u0275nextContext().ngIf;
    const t_r6 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", t_r6("year-header"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", t_r6("count-header"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", statuses_r1);
  }
}
function PublicationStatusStatsComponent_ng_container_0_ng_container_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, PublicationStatusStatsComponent_ng_container_0_ng_container_13_ng_container_1_Template, 2, 1, "ng-container", 10)(2, PublicationStatusStatsComponent_ng_container_0_ng_container_13_ng_template_2_Template, 9, 3, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const tableLayout_r7 = \u0275\u0275reference(3);
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.formControl.value)("ngIfElse", tableLayout_r7);
  }
}
function PublicationStatusStatsComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 2)(2, "div", 3)(3, "div", 4)(4, "h4")(5, "span");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(7, "div", 5)(8, "form")(9, "div", 6);
    \u0275\u0275element(10, "input", 7);
    \u0275\u0275elementStart(11, "label", 8);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275template(13, PublicationStatusStatsComponent_ng_container_0_ng_container_13_Template, 4, 2, "ng-container", 9);
    \u0275\u0275pipe(14, "async");
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const t_r6 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(t_r6("title"));
    \u0275\u0275advance(4);
    \u0275\u0275property("formControl", ctx_r2.formControl);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.formControl.value ? t_r6("visualisation-label") : t_r6("data-table-label"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", \u0275\u0275pipeBind1(14, 4, ctx_r2.publicationStatues$));
  }
}
var PublicationStatusStatsComponent = class _PublicationStatusStatsComponent {
  constructor(statService) {
    this.statService = statService;
    this.currentSort = new BehaviorSubject({ column: "value", direction: "asc" });
    this.currentSort$ = this.currentSort.asObservable();
    this.view = [700, 400];
    this.destroyRef = inject(DestroyRef);
    this.formControl = new FormControl(true, []);
    this.publicationStatues$ = combineLatest([this.currentSort$, this.statService.getPublicationStatus()]).pipe(map(([sortConfig, data]) => {
      return sortConfig.column ? data.sort((a, b) => {
        if (sortConfig.column === "")
          return 0;
        const res = compare(a[sortConfig.column], b[sortConfig.column]);
        return sortConfig.direction === "asc" ? res : -res;
      }) : data;
    }), takeUntilDestroyed(this.destroyRef));
  }
  onSort(evt) {
    this.currentSort.next(evt);
    this.headers.forEach((header) => {
      if (header.sortable !== evt.column) {
        header.direction = "";
      }
    });
  }
  static {
    this.\u0275fac = function PublicationStatusStatsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _PublicationStatusStatsComponent)(\u0275\u0275directiveInject(StatisticsService));
    };
  }
  static {
    this.\u0275cmp = \u0275\u0275defineComponent({ type: _PublicationStatusStatsComponent, selectors: [["app-publication-status-stats"]], viewQuery: function PublicationStatusStatsComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(SortableHeader, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.headers = _t);
      }
    }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 1, vars: 1, consts: [["tableLayout", ""], [4, "transloco", "translocoRead"], [1, "dashboard-card-content"], [1, "row", "g-0", "mb-2"], [1, "col-8"], [1, "col-4"], [1, "form-check", "form-switch", "mt-2"], ["id", "pub-status-viz", "type", "checkbox", "role", "switch", 1, "form-check-input", 3, "formControl"], ["for", "pub-status-viz", 1, "form-check-label"], [4, "ngIf"], [4, "ngIf", "ngIfElse"], [3, "results"], [1, "table", "table-striped", "table-striped", "table-sm", "scrollable"], ["scope", "col", "sortable", "name", 3, "sort"], ["scope", "col", "sortable", "value", 3, "sort"], [4, "ngFor", "ngForOf"], [3, "id"]], template: function PublicationStatusStatsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, PublicationStatusStatsComponent_ng_container_0_Template, 15, 6, "ng-container", 1);
      }
      if (rf & 2) {
        \u0275\u0275property("translocoRead", "publication-status-stats");
      }
    }, dependencies: [ReactiveFormsModule, \u0275NgNoValidate, CheckboxControlValueAccessor, NgControlStatus, NgControlStatusGroup, FormControlDirective, NgIf, PieChartModule, AdvancedPieChartComponent, SortableHeader, NgForOf, AsyncPipe, DecimalPipe, TranslocoDirective], styles: ["\n\n  .pie-label {\n  color: var(--body-text-color) !important;\n}\n.dashboard-card-content[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 242px;\n  display: flex;\n  flex-flow: column;\n  box-sizing: border-box;\n}\n/*# sourceMappingURL=publication-status-stats.component.css.map */"], changeDetection: 0 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PublicationStatusStatsComponent, { className: "PublicationStatusStatsComponent", filePath: "src/app/statistics/_components/publication-status-stats/publication-status-stats.component.ts", lineNumber: 28 });
})();

// src/app/statistics/_components/file-breakdown-stats/file-breakdown-stats.component.ts
var _c0 = ["modalTable"];
var _c1 = (a0) => ({ extension: a0 });
function FileBreakdownStatsComponent_ng_container_0_ng_template_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const t_r1 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275textInterpolate(t_r1("format-tooltip"));
  }
}
function FileBreakdownStatsComponent_ng_container_0_ng_container_16_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275element(1, "ngx-charts-advanced-pie-chart", 13);
    \u0275\u0275pipe(2, "async");
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("results", \u0275\u0275pipeBind1(2, 1, ctx_r1.vizData2$));
  }
}
function FileBreakdownStatsComponent_ng_container_0_ng_container_16_ng_template_2_tr_14_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 23);
  }
}
function FileBreakdownStatsComponent_ng_container_0_ng_container_16_ng_template_2_tr_14_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 24);
  }
}
function FileBreakdownStatsComponent_ng_container_0_ng_container_16_ng_template_2_tr_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td", 21);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td");
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "mangaFormat");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "td");
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "bytes");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td");
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "td")(13, "button", 22);
    \u0275\u0275listener("click", function FileBreakdownStatsComponent_ng_container_0_ng_container_16_ng_template_2_tr_14_Template_button_click_13_listener() {
      const item_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.export(item_r5.extension));
    });
    \u0275\u0275template(14, FileBreakdownStatsComponent_ng_container_0_ng_container_16_ng_template_2_tr_14_Conditional_14_Template, 1, 0, "div", 23)(15, FileBreakdownStatsComponent_ng_container_0_ng_container_16_ng_template_2_tr_14_Conditional_15_Template, 1, 0, "i", 24);
    \u0275\u0275elementStart(16, "span", 25);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const item_r5 = ctx.$implicit;
    const idx_r6 = ctx.index;
    const t_r1 = \u0275\u0275nextContext(3).$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275propertyInterpolate1("id", "adhoctask--", idx_r6, "");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", item_r5.extension || t_r1("not-classified"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(5, 9, item_r5.format), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(8, 11, item_r5.totalSize), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(11, 13, item_r5.totalFiles, "1.0-0"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("disabled", ctx_r1.downloadInProgress[item_r5.extension]);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.downloadInProgress[item_r5.extension] ? 14 : 15);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(t_r1('download-file-for-extension-alt"', \u0275\u0275pureFunction1(16, _c1, item_r5.extension)));
  }
}
function FileBreakdownStatsComponent_ng_container_0_ng_container_16_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "table", 14)(1, "thead")(2, "tr")(3, "th", 15);
    \u0275\u0275listener("sort", function FileBreakdownStatsComponent_ng_container_0_ng_container_16_ng_template_2_Template_th_sort_3_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.onSort($event));
    });
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "th", 16);
    \u0275\u0275listener("sort", function FileBreakdownStatsComponent_ng_container_0_ng_container_16_ng_template_2_Template_th_sort_5_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.onSort($event));
    });
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "th", 17);
    \u0275\u0275listener("sort", function FileBreakdownStatsComponent_ng_container_0_ng_container_16_ng_template_2_Template_th_sort_7_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.onSort($event));
    });
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "th", 18);
    \u0275\u0275listener("sort", function FileBreakdownStatsComponent_ng_container_0_ng_container_16_ng_template_2_Template_th_sort_9_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.onSort($event));
    });
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "th", 19);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(13, "tbody");
    \u0275\u0275template(14, FileBreakdownStatsComponent_ng_container_0_ng_container_16_ng_template_2_tr_14_Template, 18, 18, "tr", 20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "tfoot")(16, "tr")(17, "td");
    \u0275\u0275text(18);
    \u0275\u0275elementEnd();
    \u0275\u0275element(19, "td")(20, "td");
    \u0275\u0275elementStart(21, "td");
    \u0275\u0275text(22);
    \u0275\u0275pipe(23, "async");
    \u0275\u0275pipe(24, "bytes");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    let tmp_14_0;
    const files_r7 = \u0275\u0275nextContext().ngIf;
    const t_r1 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", t_r1("extension-header"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", t_r1("format-header"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", t_r1("total-size-header"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", t_r1("total-files-header"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r1("download-file-for-extension-header"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", files_r7);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(t_r1("total-file-size-title"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(24, 10, ((tmp_14_0 = \u0275\u0275pipeBind1(23, 8, ctx_r1.rawData$)) == null ? null : tmp_14_0.totalFileSize) || 0));
  }
}
function FileBreakdownStatsComponent_ng_container_0_ng_container_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, FileBreakdownStatsComponent_ng_container_0_ng_container_16_ng_container_1_Template, 3, 3, "ng-container", 12)(2, FileBreakdownStatsComponent_ng_container_0_ng_container_16_ng_template_2_Template, 25, 12, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const tableLayout_r8 = \u0275\u0275reference(3);
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.formControl.value)("ngIfElse", tableLayout_r8);
  }
}
function FileBreakdownStatsComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 3)(2, "div", 4)(3, "div", 5)(4, "h4")(5, "span");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275element(7, "i", 6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 7)(9, "form")(10, "div", 8);
    \u0275\u0275element(11, "input", 9);
    \u0275\u0275elementStart(12, "label", 10);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275template(14, FileBreakdownStatsComponent_ng_container_0_ng_template_14_Template, 1, 1, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(16, FileBreakdownStatsComponent_ng_container_0_ng_container_16_Template, 4, 2, "ng-container", 11);
    \u0275\u0275pipe(17, "async");
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const t_r1 = ctx.$implicit;
    const tooltip_r9 = \u0275\u0275reference(15);
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(t_r1("format-title"));
    \u0275\u0275advance();
    \u0275\u0275property("ngbTooltip", tooltip_r9);
    \u0275\u0275advance(4);
    \u0275\u0275property("formControl", ctx_r1.formControl);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.formControl.value ? t_r1("visualisation-label") : t_r1("data-table-label"));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", \u0275\u0275pipeBind1(17, 5, ctx_r1.files$));
  }
}
var FileBreakdownStatsComponent = class _FileBreakdownStatsComponent {
  constructor() {
    this.destroyRef = inject(DestroyRef);
    this.cdRef = inject(ChangeDetectorRef);
    this.currentSort = new BehaviorSubject({ column: "extension", direction: "asc" });
    this.currentSort$ = this.currentSort.asObservable();
    this.view = [700, 400];
    this.formControl = new FormControl(true, []);
    this.downloadInProgress = {};
    this.statService = inject(StatisticsService);
    this.translocoService = inject(TranslocoService);
    this.rawData$ = this.statService.getFileBreakdown().pipe(takeUntilDestroyed(this.destroyRef), shareReplay());
    this.files$ = combineLatest([this.currentSort$, this.rawData$]).pipe(map(([sortConfig, data]) => {
      return { sortConfig, fileBreakdown: data.fileBreakdown };
    }), map(({ sortConfig, fileBreakdown }) => {
      return sortConfig.column ? fileBreakdown.sort((a, b) => {
        if (sortConfig.column === "")
          return 0;
        const res = compare(a[sortConfig.column], b[sortConfig.column]);
        return sortConfig.direction === "asc" ? res : -res;
      }) : fileBreakdown;
    }), takeUntilDestroyed(this.destroyRef));
    this.vizData2$ = this.files$.pipe(takeUntilDestroyed(this.destroyRef), map((data) => data.map((d) => {
      return { name: d.extension || this.translocoService.translate("file-breakdown-stats.not-classified"), value: d.totalFiles, extra: d.totalSize };
    })));
  }
  onSort(evt) {
    this.currentSort.next(evt);
    this.headers.forEach((header) => {
      if (header.sortable !== evt.column) {
        header.direction = "";
      }
    });
  }
  export(format) {
    this.downloadInProgress[format] = true;
    this.cdRef.markForCheck();
    this.statService.downloadFileBreakdown(format).subscribe(() => {
      this.downloadInProgress[format] = false;
      this.cdRef.markForCheck();
    });
  }
  static {
    this.\u0275fac = function FileBreakdownStatsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _FileBreakdownStatsComponent)();
    };
  }
  static {
    this.\u0275cmp = \u0275\u0275defineComponent({ type: _FileBreakdownStatsComponent, selectors: [["app-file-breakdown-stats"]], viewQuery: function FileBreakdownStatsComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(_c0, 5);
        \u0275\u0275viewQuery(SortableHeader, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.modalTable = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.headers = _t);
      }
    }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 1, vars: 1, consts: [["tooltip", ""], ["tableLayout", ""], [4, "transloco", "translocoRead"], [1, "dashboard-card-content"], [1, "row", "g-0", "mb-2"], [1, "col-8"], ["aria-hidden", "true", "placement", "right", "role", "button", "tabindex", "0", 1, "fa", "fa-info-circle", "ms-1", 3, "ngbTooltip"], [1, "col-4"], [1, "form-check", "form-switch", "mt-2"], ["id", "pub-file-breakdown-viz", "type", "checkbox", "role", "switch", 1, "form-check-input", 3, "formControl"], ["for", "pub-file-breakdown-viz", 1, "form-check-label"], [4, "ngIf"], [4, "ngIf", "ngIfElse"], [3, "results"], [1, "table", "table-striped", "table-striped", "table-sm", "scrollable"], ["scope", "col", "sortable", "extension", "direction", "asc", 3, "sort"], ["scope", "col", "sortable", "format", 3, "sort"], ["scope", "col", "sortable", "totalSize", 3, "sort"], ["scope", "col", "sortable", "totalFiles", 3, "sort"], ["scope", "col"], [4, "ngFor", "ngForOf"], [3, "id"], [1, "btn", "btn-icon", 2, "color", "var(--primary-color)", 3, "click", "disabled"], ["aria-hidden", "true", 1, "spinner-border", "spinner-border-sm"], ["aria-hidden", "true", 1, "fa-solid", "fa-file-arrow-down"], [1, "visually-hidden"]], template: function FileBreakdownStatsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, FileBreakdownStatsComponent_ng_container_0_Template, 18, 7, "ng-container", 2);
      }
      if (rf & 2) {
        \u0275\u0275property("translocoRead", "file-breakdown-stats");
      }
    }, dependencies: [NgbTooltip, ReactiveFormsModule, \u0275NgNoValidate, CheckboxControlValueAccessor, NgControlStatus, NgControlStatusGroup, FormControlDirective, NgIf, PieChartModule, AdvancedPieChartComponent, NgForOf, AsyncPipe, DecimalPipe, BytesPipe, MangaFormatPipe, TranslocoDirective, SortableHeader], styles: ["\n\n  .advanced-pie-legend {\n  top: unset !important;\n  transform: unset !important;\n}\n.dashboard-card-content[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 242px;\n  display: flex;\n  flex-flow: column;\n  box-sizing: border-box;\n}\n/*# sourceMappingURL=file-breakdown-stats.component.css.map */"], changeDetection: 0 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FileBreakdownStatsComponent, { className: "FileBreakdownStatsComponent", filePath: "src/app/statistics/_components/file-breakdown-stats/file-breakdown-stats.component.ts", lineNumber: 38 });
})();

// src/app/statistics/_components/server-stats/server-stats.component.ts
var _c02 = (a0) => ({ count: a0 });
var _c12 = (a0) => ({ num: a0 });
function ServerStatsComponent_ng_container_0_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 9);
    \u0275\u0275elementContainerStart(1);
    \u0275\u0275elementStart(2, "div", 10)(3, "app-icon-and-title", 11);
    \u0275\u0275pipe(4, "number");
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(7, "div", 12);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(8);
    \u0275\u0275elementStart(9, "div", 10)(10, "app-icon-and-title", 13);
    \u0275\u0275pipe(11, "number");
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(14, "div", 12);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(15);
    \u0275\u0275elementStart(16, "div", 10)(17, "app-icon-and-title", 14);
    \u0275\u0275pipe(18, "number");
    \u0275\u0275text(19);
    \u0275\u0275pipe(20, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(21, "div", 12);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(22);
    \u0275\u0275elementStart(23, "div", 10)(24, "app-icon-and-title", 15);
    \u0275\u0275text(25);
    \u0275\u0275pipe(26, "bytes");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(27, "div", 12);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(28);
    \u0275\u0275elementStart(29, "div", 10)(30, "app-icon-and-title", 16);
    \u0275\u0275pipe(31, "number");
    \u0275\u0275listener("click", function ServerStatsComponent_ng_container_0_div_1_Template_app_icon_and_title_click_30_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext(2);
      ctx_r1.openGenreList();
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275text(32);
    \u0275\u0275pipe(33, "compactNumber");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(34, "div", 12);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(35);
    \u0275\u0275elementStart(36, "div", 10)(37, "app-icon-and-title", 16);
    \u0275\u0275pipe(38, "number");
    \u0275\u0275listener("click", function ServerStatsComponent_ng_container_0_div_1_Template_app_icon_and_title_click_37_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext(2);
      ctx_r1.openTagList();
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275text(39);
    \u0275\u0275pipe(40, "compactNumber");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(41, "div", 12);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(42);
    \u0275\u0275elementStart(43, "div", 10)(44, "app-icon-and-title", 17);
    \u0275\u0275pipe(45, "number");
    \u0275\u0275listener("click", function ServerStatsComponent_ng_container_0_div_1_Template_app_icon_and_title_click_44_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext(2);
      ctx_r1.openPeopleList();
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275text(46);
    \u0275\u0275pipe(47, "compactNumber");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(48, "div", 12);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(49);
    \u0275\u0275elementStart(50, "div", 10)(51, "app-icon-and-title", 18);
    \u0275\u0275pipe(52, "number");
    \u0275\u0275text(53);
    \u0275\u0275pipe(54, "timeDuration");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const stats_r3 = ctx.ngIf;
    const t_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275property("label", t_r4("total-series-label"))("clickable", false)("title", t_r4("total-series-tooltip", \u0275\u0275pureFunction1(62, _c02, \u0275\u0275pipeBind1(4, 32, stats_r3.seriesCount))));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", t_r4("series-count", \u0275\u0275pureFunction1(64, _c12, \u0275\u0275pipeBind1(6, 34, stats_r3.seriesCount))), " ");
    \u0275\u0275advance(5);
    \u0275\u0275property("label", t_r4("total-volumes-label"))("clickable", false)("title", t_r4("total-volumes-tooltip", \u0275\u0275pureFunction1(66, _c02, \u0275\u0275pipeBind1(11, 36, stats_r3.volumeCount))));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", t_r4("volume-count", \u0275\u0275pureFunction1(68, _c12, \u0275\u0275pipeBind1(13, 38, stats_r3.volumeCount))), " ");
    \u0275\u0275advance(5);
    \u0275\u0275property("label", t_r4("total-files-label"))("clickable", false)("title", t_r4("total-files-tooltip", \u0275\u0275pureFunction1(70, _c02, \u0275\u0275pipeBind1(18, 40, stats_r3.totalFiles))));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", t_r4("file-count", \u0275\u0275pureFunction1(72, _c12, \u0275\u0275pipeBind1(20, 42, stats_r3.totalFiles))), " ");
    \u0275\u0275advance(5);
    \u0275\u0275property("label", t_r4("total-size-label"))("clickable", false)("title", t_r4("total-size-label"));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(26, 44, stats_r3.totalSize), " ");
    \u0275\u0275advance(5);
    \u0275\u0275property("label", t_r4("total-genres-label"))("clickable", true)("title", t_r4("total-genres-tooltip", \u0275\u0275pureFunction1(74, _c02, \u0275\u0275pipeBind1(31, 46, stats_r3.totalGenres))));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", t_r4("genre-count", \u0275\u0275pureFunction1(76, _c12, \u0275\u0275pipeBind1(33, 48, stats_r3.totalGenres))), " ");
    \u0275\u0275advance(5);
    \u0275\u0275property("label", t_r4("total-tags-label"))("clickable", true)("title", t_r4("total-tags-tooltip", \u0275\u0275pureFunction1(78, _c02, \u0275\u0275pipeBind1(38, 50, stats_r3.totalTags))));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", t_r4("tag-count", \u0275\u0275pureFunction1(80, _c12, \u0275\u0275pipeBind1(40, 52, stats_r3.totalTags))), " ");
    \u0275\u0275advance(5);
    \u0275\u0275property("label", t_r4("total-people-label"))("clickable", true)("title", t_r4("total-people-tooltip", \u0275\u0275pureFunction1(82, _c02, \u0275\u0275pipeBind1(45, 54, stats_r3.totalPeople))));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", t_r4("people-count", \u0275\u0275pureFunction1(84, _c12, \u0275\u0275pipeBind1(47, 56, stats_r3.totalPeople))), " ");
    \u0275\u0275advance(5);
    \u0275\u0275property("label", t_r4("total-read-time-label"))("clickable", false)("title", t_r4("total-read-time-tooltip", \u0275\u0275pureFunction1(86, _c02, \u0275\u0275pipeBind1(52, 58, stats_r3.totalReadingTime))));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(54, 60, stats_r3.totalReadingTime), " ");
  }
}
function ServerStatsComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, ServerStatsComponent_ng_container_0_div_1_Template, 55, 88, "div", 1);
    \u0275\u0275pipe(2, "async");
    \u0275\u0275elementStart(3, "div", 2)(4, "div", 3);
    \u0275\u0275element(5, "app-stat-list", 4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 3);
    \u0275\u0275element(7, "app-stat-list", 4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 3);
    \u0275\u0275element(9, "app-stat-list", 4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 3);
    \u0275\u0275element(11, "app-stat-list", 5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 3);
    \u0275\u0275element(13, "app-stat-list", 5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "div", 6);
    \u0275\u0275element(15, "app-top-readers");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "div", 7);
    \u0275\u0275element(17, "app-file-breakdown-stats");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "div", 7);
    \u0275\u0275element(19, "app-publication-status-stats");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "div", 7);
    \u0275\u0275element(21, "app-reading-activity", 8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "div", 7);
    \u0275\u0275element(23, "app-day-breakdown");
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const t_r4 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", \u0275\u0275pipeBind1(2, 19, ctx_r1.stats$));
    \u0275\u0275advance(4);
    \u0275\u0275property("data$", ctx_r1.releaseYears$)("title", t_r4("release-years-title"))("label", t_r4("series"));
    \u0275\u0275advance(2);
    \u0275\u0275property("data$", ctx_r1.mostActiveUsers$)("title", t_r4("most-active-users-title"))("label", t_r4("reads"));
    \u0275\u0275advance(2);
    \u0275\u0275property("data$", ctx_r1.mostActiveLibrary$)("title", t_r4("popular-libraries-title"))("label", t_r4("reads"));
    \u0275\u0275advance(2);
    \u0275\u0275property("data$", ctx_r1.mostActiveSeries$)("title", t_r4("popular-series-title"))("image", ctx_r1.seriesImage)("handleClick", ctx_r1.openSeries);
    \u0275\u0275advance(2);
    \u0275\u0275property("data$", ctx_r1.recentlyRead$)("title", t_r4("recently-read-title"))("image", ctx_r1.seriesImage)("handleClick", ctx_r1.openSeries);
    \u0275\u0275advance(8);
    \u0275\u0275property("isAdmin", true);
  }
}
var ServerStatsComponent = class _ServerStatsComponent {
  onResize() {
    this.breakpointSubject.next(this.utilityService.getActiveBreakpoint());
  }
  get Breakpoint() {
    return Breakpoint;
  }
  constructor(statService, router, imageService, metadataService, modalService, utilityService, filterUtilityService) {
    this.statService = statService;
    this.router = router;
    this.imageService = imageService;
    this.metadataService = metadataService;
    this.modalService = modalService;
    this.utilityService = utilityService;
    this.filterUtilityService = filterUtilityService;
    this.destroyRef = inject(DestroyRef);
    this.accountService = inject(AccountService);
    this.openSeries = (data) => {
      const series = data.extra;
      this.router.navigate(["library", series.libraryId, "series", series.id]);
    };
    this.breakpointSubject = new ReplaySubject(1);
    this.breakpoint$ = this.breakpointSubject.asObservable();
    this.seriesImage = (data) => {
      if (data.extra)
        return this.imageService.getSeriesCoverImage(data.extra.id);
      return "";
    };
    this.breakpointSubject.next(this.utilityService.getActiveBreakpoint());
    this.stats$ = this.statService.getServerStatistics().pipe(takeUntilDestroyed(this.destroyRef), shareReplay());
    this.releaseYears$ = this.statService.getTopYears().pipe(takeUntilDestroyed(this.destroyRef));
    this.mostActiveUsers$ = this.stats$.pipe(map((d) => d.mostActiveUsers), map((userCounts) => userCounts.map((count) => {
      return { name: count.value.username, value: count.count };
    })), takeUntilDestroyed(this.destroyRef));
    this.mostActiveLibrary$ = this.stats$.pipe(map((d) => d.mostActiveLibraries), map((counts) => counts.map((count) => {
      return { name: count.value.name, value: count.count };
    })), takeUntilDestroyed(this.destroyRef));
    this.mostActiveSeries$ = this.stats$.pipe(map((d) => d.mostReadSeries), map((counts) => counts.map((count) => {
      return { name: count.value.name, value: count.count, extra: count.value };
    })), takeUntilDestroyed(this.destroyRef));
    this.recentlyRead$ = this.stats$.pipe(map((d) => d.recentlyRead), map((counts) => counts.map((count) => {
      return { name: count.name, value: -1, extra: count };
    })), takeUntilDestroyed(this.destroyRef));
  }
  openGenreList() {
    this.metadataService.getAllGenres().subscribe((genres) => {
      const ref = this.modalService.open(GenericListModalComponent, { scrollable: true });
      ref.componentInstance.items = genres.map((t) => t.title);
      ref.componentInstance.title = translate("server-stats.genres");
      ref.componentInstance.clicked = (item) => {
        this.filterUtilityService.applyFilter(["all-series"], FilterField.Genres, FilterComparison.Contains, genres.filter((g) => g.title === item)[0].id + "").subscribe();
      };
    });
  }
  openTagList() {
    this.metadataService.getAllTags().subscribe((tags) => {
      const ref = this.modalService.open(GenericListModalComponent, { scrollable: true });
      ref.componentInstance.items = tags.map((t) => t.title);
      ref.componentInstance.title = translate("server-stats.tags");
      ref.componentInstance.clicked = (item) => {
        this.filterUtilityService.applyFilter(["all-series"], FilterField.Tags, FilterComparison.Contains, tags.filter((g) => g.title === item)[0].id + "").subscribe();
      };
    });
  }
  openPeopleList() {
    this.metadataService.getAllPeople().subscribe((people) => {
      const ref = this.modalService.open(GenericListModalComponent, { scrollable: true });
      ref.componentInstance.items = [...new Set(people.map((person) => person.name))];
      ref.componentInstance.title = translate("server-stats.people");
    });
  }
  static {
    this.\u0275fac = function ServerStatsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ServerStatsComponent)(\u0275\u0275directiveInject(StatisticsService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(ImageService), \u0275\u0275directiveInject(MetadataService), \u0275\u0275directiveInject(NgbModal), \u0275\u0275directiveInject(UtilityService), \u0275\u0275directiveInject(FilterUtilitiesService));
    };
  }
  static {
    this.\u0275cmp = \u0275\u0275defineComponent({ type: _ServerStatsComponent, selectors: [["app-server-stats"]], hostBindings: function ServerStatsComponent_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("resize", function ServerStatsComponent_resize_HostBindingHandler($event) {
          return ctx.onResize($event);
        }, false, \u0275\u0275resolveWindow)("orientationchange", function ServerStatsComponent_orientationchange_HostBindingHandler($event) {
          return ctx.onResize($event);
        }, false, \u0275\u0275resolveWindow);
      }
    }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 1, vars: 1, consts: [[4, "transloco", "translocoRead"], ["class", "row g-0 mt-4 mb-3 d-flex justify-content-around", 4, "ngIf"], [1, "grid", "row", "g-0", "pt-2", "pb-2", "d-flex", "justify-content-around"], [1, "col-auto"], [3, "data$", "title", "label"], [3, "data$", "title", "image", "handleClick"], [1, "row", "g-0", "pt-2", "pb-2"], [1, "row", "g-0", "pt-4", "pb-2"], [3, "isAdmin"], [1, "row", "g-0", "mt-4", "mb-3", "d-flex", "justify-content-around"], [1, "col-auto", "mb-2"], ["fontClasses", "fa-solid fa-book-open", 3, "label", "clickable", "title"], [1, "vr", "d-none", "d-lg-block", "m-2"], ["fontClasses", "fas fa-book", 3, "label", "clickable", "title"], ["fontClasses", "fa-regular fa-file", 3, "label", "clickable", "title"], ["fontClasses", "fa-solid fa-scale-unbalanced", 3, "label", "clickable", "title"], ["fontClasses", "fa-solid fa-tags", 3, "click", "label", "clickable", "title"], ["fontClasses", "fa-solid fa-user-tag", 3, "click", "label", "clickable", "title"], ["fontClasses", "fas fa-eye", 3, "label", "clickable", "title"]], template: function ServerStatsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, ServerStatsComponent_ng_container_0_Template, 24, 21, "ng-container", 0);
      }
      if (rf & 2) {
        \u0275\u0275property("translocoRead", "server-stats");
      }
    }, dependencies: [
      NgIf,
      IconAndTitleComponent,
      StatListComponent,
      TopReadersComponent,
      FileBreakdownStatsComponent,
      PublicationStatusStatsComponent,
      ReadingActivityComponent,
      DayBreakdownComponent,
      AsyncPipe,
      DecimalPipe,
      CompactNumberPipe,
      TimeDurationPipe,
      BytesPipe,
      TranslocoDirective
    ], styles: ["\n\n.grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, 280px);\n  grid-gap: 0.5rem;\n  justify-content: space-evenly;\n  width: 100%;\n  overflow-y: auto;\n  overflow-x: hidden;\n  align-items: start;\n}\n/*# sourceMappingURL=server-stats.component.css.map */"], changeDetection: 0 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ServerStatsComponent, { className: "ServerStatsComponent", filePath: "src/app/statistics/_components/server-stats/server-stats.component.ts", lineNumber: 41 });
})();
export {
  ServerStatsComponent
};
//# sourceMappingURL=server-stats.component-PEISL3L7.js.map
