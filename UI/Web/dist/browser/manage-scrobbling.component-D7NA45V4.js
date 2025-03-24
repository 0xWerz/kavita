import {
  SortableHeader,
  compare
} from "./chunk-EENYA2ZI.js";
import {
  EditSeriesModalComponent
} from "./chunk-OOCLTPIS.js";
import "./chunk-Y273F7VW.js";
import {
  LooseLeafOrDefaultNumber,
  SpecialVolumeNumber
} from "./chunk-5C4ZM5AT.js";
import "./chunk-WQSUGJVO.js";
import "./chunk-RT3VH5MO.js";
import "./chunk-XZ2P7HP2.js";
import "./chunk-WOFHNJUD.js";
import "./chunk-5VCWX7WV.js";
import "./chunk-HTPJQXUV.js";
import {
  SeriesService
} from "./chunk-HG4LWHDT.js";
import "./chunk-6M2JHRYX.js";
import "./chunk-D2FQ65JS.js";
import {
  TranslocoLocaleModule
} from "./chunk-HSFLUHPU.js";
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
import {
  DefaultModalOptions
} from "./chunk-ZLESQ73K.js";
import "./chunk-RMZ6EY72.js";
import "./chunk-CVI764VQ.js";
import "./chunk-C423WP7Y.js";
import {
  FilterPipe
} from "./chunk-NGXWDHM5.js";
import "./chunk-XZ5MKEYT.js";
import "./chunk-PBM62GK4.js";
import "./chunk-MABWAPXH.js";
import {
  DefaultValuePipe
} from "./chunk-KMTIWVED.js";
import "./chunk-HXDVBBHR.js";
import "./chunk-65GP3B4U.js";
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
import "./chunk-IBO6ECG5.js";
import "./chunk-BX5PUGWH.js";
import "./chunk-KJWRNOWO.js";
import "./chunk-D7CIAEAO.js";
import "./chunk-LGLLZBOI.js";
import "./chunk-EA72DBFY.js";
import "./chunk-HN36WWH3.js";
import {
  ScrobbleProvider,
  ScrobblingService
} from "./chunk-R5PSFMI2.js";
import "./chunk-A6JEQ5GB.js";
import "./chunk-RSMGJKYW.js";
import {
  AccountService
} from "./chunk-U2DWQJI2.js";
import {
  NgbModal,
  NgbTooltip
} from "./chunk-2R2RCU4Y.js";
import "./chunk-5J5IKBMT.js";
import {
  EVENTS,
  MessageHubService
} from "./chunk-PUXELTB2.js";
import "./chunk-FLGYJHAG.js";
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
import "./chunk-CQADFT7F.js";
import {
  AsyncPipe,
  BehaviorSubject,
  ChangeDetectorRef,
  DestroyRef,
  EventEmitter,
  TranslocoDirective,
  TranslocoModule,
  TranslocoService,
  debounceTime,
  filter,
  inject,
  shareReplay,
  take,
  takeUntilDestroyed,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵattributeInterpolate1,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵdefinePipe,
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
  ɵɵpropertyInterpolate2,
  ɵɵpureFunction1,
  ɵɵpureFunction2,
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

// src/app/admin/manage-scrobble-errors/manage-scrobble-errors.component.ts
var _c0 = (a0) => ({ seriesName: a0 });
function ManageScrobbleErrorsComponent_ng_container_0_ng_template_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const t_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275textInterpolate1(" ", t_r3("series-header"), " ");
  }
}
function ManageScrobbleErrorsComponent_ng_container_0_ng_template_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 15);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r4 = ctx.row;
    \u0275\u0275propertyInterpolate2("href", "library/", item_r4.libraryId, "/series/", item_r4.seriesId, "", \u0275\u0275sanitizeUrl);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(item_r4.details);
  }
}
function ManageScrobbleErrorsComponent_ng_container_0_ng_template_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const t_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275textInterpolate1(" ", t_r3("created-header"), " ");
  }
}
function ManageScrobbleErrorsComponent_ng_container_0_ng_template_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "utcToLocalTime");
    \u0275\u0275pipe(2, "defaultValue");
  }
  if (rf & 2) {
    const item_r5 = ctx.row;
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 3, \u0275\u0275pipeBind1(1, 1, item_r5.createdUtc)), " ");
  }
}
function ManageScrobbleErrorsComponent_ng_container_0_ng_template_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const t_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275textInterpolate1(" ", t_r3("comment-header"), " ");
  }
}
function ManageScrobbleErrorsComponent_ng_container_0_ng_template_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const item_r6 = ctx.row;
    \u0275\u0275textInterpolate1(" ", item_r6.comment, " ");
  }
}
function ManageScrobbleErrorsComponent_ng_container_0_ng_template_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const t_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275textInterpolate1(" ", t_r3("edit-header"), " ");
  }
}
function ManageScrobbleErrorsComponent_ng_container_0_ng_template_27_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 16);
    \u0275\u0275listener("click", function ManageScrobbleErrorsComponent_ng_container_0_ng_template_27_Template_button_click_0_listener() {
      const item_r8 = \u0275\u0275restoreView(_r7).row;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.editSeries(item_r8.seriesId));
    });
    \u0275\u0275element(1, "i", 17);
    \u0275\u0275elementStart(2, "span", 18);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r8 = ctx.row;
    const t_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(t_r3("edit-item-alt", \u0275\u0275pureFunction1(1, _c0, item_r8.details)));
  }
}
function ManageScrobbleErrorsComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "h4");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "form", 1)(6, "div", 2)(7, "div", 3)(8, "label", 4);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 5);
    \u0275\u0275element(11, "input", 6);
    \u0275\u0275elementStart(12, "button", 7);
    \u0275\u0275listener("click", function ManageScrobbleErrorsComponent_ng_container_0_Template_button_click_12_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.clear());
    });
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(14, "ngx-datatable", 8);
    \u0275\u0275pipe(15, "filter");
    \u0275\u0275elementStart(16, "ngx-datatable-column", 9);
    \u0275\u0275template(17, ManageScrobbleErrorsComponent_ng_container_0_ng_template_17_Template, 1, 1, "ng-template", 10)(18, ManageScrobbleErrorsComponent_ng_container_0_ng_template_18_Template, 2, 4, "ng-template", 11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "ngx-datatable-column", 12);
    \u0275\u0275template(20, ManageScrobbleErrorsComponent_ng_container_0_ng_template_20_Template, 1, 1, "ng-template", 10)(21, ManageScrobbleErrorsComponent_ng_container_0_ng_template_21_Template, 3, 5, "ng-template", 11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "ngx-datatable-column", 13);
    \u0275\u0275template(23, ManageScrobbleErrorsComponent_ng_container_0_ng_template_23_Template, 1, 1, "ng-template", 10)(24, ManageScrobbleErrorsComponent_ng_container_0_ng_template_24_Template, 1, 1, "ng-template", 11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "ngx-datatable-column", 14);
    \u0275\u0275template(26, ManageScrobbleErrorsComponent_ng_container_0_ng_template_26_Template, 1, 1, "ng-template", 10)(27, ManageScrobbleErrorsComponent_ng_container_0_ng_template_27_Template, 4, 3, "ng-template", 11);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const t_r3 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r3("title"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r3("description"));
    \u0275\u0275advance();
    \u0275\u0275property("formGroup", ctx_r1.formGroup);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(t_r3("filter-label"));
    \u0275\u0275advance(2);
    \u0275\u0275property("placeholder", t_r3("filter-label"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r3("clear-errors"));
    \u0275\u0275advance();
    \u0275\u0275property("rows", \u0275\u0275pipeBind2(15, 26, ctx_r1.data, ctx_r1.filterList))("columnMode", ctx_r1.ColumnMode.flex)("footerHeight", 50)("limit", 15);
    \u0275\u0275advance(2);
    \u0275\u0275property("sortable", true)("draggable", false)("resizeable", false)("flexGrow", 3);
    \u0275\u0275advance(3);
    \u0275\u0275property("sortable", true)("draggable", false)("resizeable", false)("flexGrow", 1);
    \u0275\u0275advance(3);
    \u0275\u0275property("sortable", false)("draggable", false)("resizeable", false)("flexGrow", 1);
    \u0275\u0275advance(3);
    \u0275\u0275property("sortable", false)("draggable", false)("resizeable", false)("flexGrow", 1);
  }
}
var ManageScrobbleErrorsComponent = class _ManageScrobbleErrorsComponent {
  constructor() {
    this.scrobbleCount = new EventEmitter();
    this.scrobbleService = inject(ScrobblingService);
    this.messageHub = inject(MessageHubService);
    this.cdRef = inject(ChangeDetectorRef);
    this.destroyRef = inject(DestroyRef);
    this.seriesService = inject(SeriesService);
    this.modalService = inject(NgbModal);
    this.messageHubUpdate$ = this.messageHub.messages$.pipe(takeUntilDestroyed(this.destroyRef), filter((m) => m.event === EVENTS.ScanSeries), shareReplay());
    this.currentSort = new BehaviorSubject({ column: "created", direction: "asc" });
    this.currentSort$ = this.currentSort.asObservable();
    this.data = [];
    this.isLoading = true;
    this.formGroup = new FormGroup({
      filter: new FormControl("", [])
    });
    this.filterList = (listItem) => {
      const query = (this.formGroup.get("filter")?.value || "").toLowerCase();
      return listItem.comment.toLowerCase().indexOf(query) >= 0 || listItem.details.toLowerCase().indexOf(query) >= 0;
    };
    this.filter = filter;
    this.ColumnMode = ColumnMode;
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
  onSort(evt) {
    this.currentSort.next(evt);
    this.headers.forEach((header) => {
      if (header.sortable !== evt.column) {
        header.direction = "";
      }
    });
  }
  loadData() {
    this.isLoading = true;
    this.cdRef.markForCheck();
    this.scrobbleService.getScrobbleErrors().subscribe((d) => {
      this.data = d;
      this.isLoading = false;
      this.scrobbleCount.emit(d.length);
      this.cdRef.detectChanges();
    });
  }
  clear() {
    this.scrobbleService.clearScrobbleErrors().subscribe((_) => this.loadData());
  }
  editSeries(seriesId) {
    this.seriesService.getSeries(seriesId).subscribe((series) => {
      const modalRef = this.modalService.open(EditSeriesModalComponent, DefaultModalOptions);
      modalRef.componentInstance.series = series;
    });
  }
  static {
    this.\u0275fac = function ManageScrobbleErrorsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ManageScrobbleErrorsComponent)();
    };
  }
  static {
    this.\u0275cmp = \u0275\u0275defineComponent({ type: _ManageScrobbleErrorsComponent, selectors: [["app-manage-scrobble-errors"]], viewQuery: function ManageScrobbleErrorsComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(SortableHeader, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.headers = _t);
      }
    }, outputs: { scrobbleCount: "scrobbleCount" }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 1, vars: 1, consts: [[4, "transloco", "translocoRead"], [3, "formGroup"], [1, "row", "g-0", "mb-3"], [1, "col-md-12"], ["for", "filter", 1, "visually-hidden"], [1, "input-group"], ["id", "filter", "type", "text", "formControlName", "filter", 1, "form-control", 3, "placeholder"], ["type", "button", 1, "btn", "btn-primary", 3, "click"], ["rowHeight", "auto", 1, "bootstrap", 3, "rows", "columnMode", "footerHeight", "limit"], ["prop", "seriesId", 3, "sortable", "draggable", "resizeable", "flexGrow"], ["ngx-datatable-header-template", ""], ["ngx-datatable-cell-template", ""], ["prop", "createdUtc", 3, "sortable", "draggable", "resizeable", "flexGrow"], ["prop", "comment", 3, "sortable", "draggable", "resizeable", "flexGrow"], ["name", "edit", 3, "sortable", "draggable", "resizeable", "flexGrow"], ["target", "_blank", 3, "href"], [1, "btn", "btn-icon", "primary-icon", 3, "click"], ["aria-hidden", "true", 1, "fa", "fa-pen", "me-1"], [1, "visually-hidden"]], template: function ManageScrobbleErrorsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, ManageScrobbleErrorsComponent_ng_container_0_Template, 28, 29, "ng-container", 0);
      }
      if (rf & 2) {
        \u0275\u0275property("translocoRead", "manage-scrobble-errors");
      }
    }, dependencies: [ReactiveFormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, FilterPipe, TranslocoModule, TranslocoDirective, DefaultValuePipe, TranslocoLocaleModule, UtcToLocalTimePipe, NgxDatatableModule, DatatableComponent, DataTableColumnDirective, DataTableColumnHeaderDirective, DataTableColumnCellDirective], styles: ["\n\n.primary-icon[_ngcontent-%COMP%], \nbutton[_ngcontent-%COMP%]   i.fa[_ngcontent-%COMP%] {\n  color: var(--primary-color);\n}\n/*# sourceMappingURL=manage-scrobble-errors.component.css.map */"], changeDetection: 0 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ManageScrobbleErrorsComponent, { className: "ManageScrobbleErrorsComponent", filePath: "src/app/admin/manage-scrobble-errors/manage-scrobble-errors.component.ts", lineNumber: 44 });
})();

// src/app/_models/scrobbling/scrobble-event.ts
var ScrobbleEventType;
(function(ScrobbleEventType2) {
  ScrobbleEventType2[ScrobbleEventType2["ChapterRead"] = 0] = "ChapterRead";
  ScrobbleEventType2[ScrobbleEventType2["AddWantToRead"] = 1] = "AddWantToRead";
  ScrobbleEventType2[ScrobbleEventType2["RemoveWantToRead"] = 2] = "RemoveWantToRead";
  ScrobbleEventType2[ScrobbleEventType2["ScoreUpdated"] = 3] = "ScoreUpdated";
  ScrobbleEventType2[ScrobbleEventType2["Review"] = 4] = "Review";
})(ScrobbleEventType || (ScrobbleEventType = {}));

// src/app/_pipes/scrobble-event-type.pipe.ts
var ScrobbleEventTypePipe = class _ScrobbleEventTypePipe {
  constructor() {
    this.translocoService = inject(TranslocoService);
  }
  transform(value) {
    switch (value) {
      case ScrobbleEventType.ChapterRead:
        return this.translocoService.translate("scrobble-event-type-pipe.chapter-read");
      case ScrobbleEventType.ScoreUpdated:
        return this.translocoService.translate("scrobble-event-type-pipe.score-updated");
      case ScrobbleEventType.AddWantToRead:
        return this.translocoService.translate("scrobble-event-type-pipe.want-to-read-add");
      case ScrobbleEventType.RemoveWantToRead:
        return this.translocoService.translate("scrobble-event-type-pipe.want-to-read-remove");
      case ScrobbleEventType.Review:
        return this.translocoService.translate("scrobble-event-type-pipe.review");
    }
  }
  static {
    this.\u0275fac = function ScrobbleEventTypePipe_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ScrobbleEventTypePipe)();
    };
  }
  static {
    this.\u0275pipe = \u0275\u0275definePipe({ name: "scrobbleEventType", type: _ScrobbleEventTypePipe, pure: true, standalone: true });
  }
};

// src/app/_models/scrobbling/scrobble-event-filter.ts
var ScrobbleEventSortField;
(function(ScrobbleEventSortField2) {
  ScrobbleEventSortField2[ScrobbleEventSortField2["None"] = 0] = "None";
  ScrobbleEventSortField2[ScrobbleEventSortField2["Created"] = 1] = "Created";
  ScrobbleEventSortField2[ScrobbleEventSortField2["LastModified"] = 2] = "LastModified";
  ScrobbleEventSortField2[ScrobbleEventSortField2["Type"] = 3] = "Type";
  ScrobbleEventSortField2[ScrobbleEventSortField2["Series"] = 4] = "Series";
  ScrobbleEventSortField2[ScrobbleEventSortField2["IsProcessed"] = 5] = "IsProcessed";
})(ScrobbleEventSortField || (ScrobbleEventSortField = {}));

// src/app/_single-module/user-scrobble-history/user-scrobble-history.component.ts
var _c02 = (a0) => ({ num: a0 });
var _c1 = (a0, a1) => ({ v: a0, n: a1 });
var _c2 = (a0) => ({ r: a0 });
function UserScrobbleHistoryComponent_ng_container_0_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 5);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(t_r3("token-expired"));
  }
}
function UserScrobbleHistoryComponent_ng_container_0_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 5);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(t_r3("scrobbling-disabled"));
  }
}
function UserScrobbleHistoryComponent_ng_container_0_ng_template_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const t_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275textInterpolate1(" ", t_r3("last-modified-header"), " ");
  }
}
function UserScrobbleHistoryComponent_ng_container_0_ng_template_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "utcToLocalTime");
    \u0275\u0275pipe(2, "defaultValue");
  }
  if (rf & 2) {
    const value_r4 = ctx.value;
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 3, \u0275\u0275pipeBind1(1, 1, value_r4)), " ");
  }
}
function UserScrobbleHistoryComponent_ng_container_0_ng_template_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const t_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275textInterpolate1(" ", t_r3("type-header"), " ");
  }
}
function UserScrobbleHistoryComponent_ng_container_0_ng_template_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "scrobbleEventType");
  }
  if (rf & 2) {
    const value_r5 = ctx.value;
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(1, 1, value_r5), " ");
  }
}
function UserScrobbleHistoryComponent_ng_container_0_ng_template_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const t_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275textInterpolate1(" ", t_r3("series-header"), " ");
  }
}
function UserScrobbleHistoryComponent_ng_container_0_ng_template_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 20);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r6 = ctx.row;
    const idx_r7 = ctx.index;
    \u0275\u0275propertyInterpolate2("href", "/library/", item_r6.libraryId, "/series/", item_r6.seriesId, "", \u0275\u0275sanitizeUrl);
    \u0275\u0275propertyInterpolate1("id", "scrobble-history--", idx_r7, "");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(item_r6.seriesName);
  }
}
function UserScrobbleHistoryComponent_ng_container_0_ng_template_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const t_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275textInterpolate1(" ", t_r3("data-header"), " ");
  }
}
function UserScrobbleHistoryComponent_ng_container_0_ng_template_31_Case_0_Conditional_0_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const t_r3 = \u0275\u0275nextContext(4).$implicit;
    \u0275\u0275textInterpolate1(" ", t_r3("special"), " ");
  }
}
function UserScrobbleHistoryComponent_ng_container_0_ng_template_31_Case_0_Conditional_0_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const item_r8 = \u0275\u0275nextContext(3).row;
    const t_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275textInterpolate1(" ", t_r3("chapter-num", \u0275\u0275pureFunction1(1, _c02, item_r8.chapterNumber)), " ");
  }
}
function UserScrobbleHistoryComponent_ng_container_0_ng_template_31_Case_0_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, UserScrobbleHistoryComponent_ng_container_0_ng_template_31_Case_0_Conditional_0_Conditional_0_Template, 1, 1)(1, UserScrobbleHistoryComponent_ng_container_0_ng_template_31_Case_0_Conditional_0_Conditional_1_Template, 1, 3);
  }
  if (rf & 2) {
    const item_r8 = \u0275\u0275nextContext(2).row;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275conditional(item_r8.chapterNumber === ctx_r1.LooseLeafOrDefaultNumber ? 0 : 1);
  }
}
function UserScrobbleHistoryComponent_ng_container_0_ng_template_31_Case_0_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const item_r8 = \u0275\u0275nextContext(2).row;
    const t_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275textInterpolate1(" ", t_r3("volume-num", \u0275\u0275pureFunction1(1, _c02, item_r8.volumeNumber)), " ");
  }
}
function UserScrobbleHistoryComponent_ng_container_0_ng_template_31_Case_0_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Special ");
  }
}
function UserScrobbleHistoryComponent_ng_container_0_ng_template_31_Case_0_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const item_r8 = \u0275\u0275nextContext(2).row;
    const t_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275textInterpolate1(" ", t_r3("volume-and-chapter-num", \u0275\u0275pureFunction2(1, _c1, item_r8.volumeNumber, item_r8.chapterNumber)), " ");
  }
}
function UserScrobbleHistoryComponent_ng_container_0_ng_template_31_Case_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, UserScrobbleHistoryComponent_ng_container_0_ng_template_31_Case_0_Conditional_0_Template, 2, 1)(1, UserScrobbleHistoryComponent_ng_container_0_ng_template_31_Case_0_Conditional_1_Template, 1, 3)(2, UserScrobbleHistoryComponent_ng_container_0_ng_template_31_Case_0_Conditional_2_Template, 1, 0)(3, UserScrobbleHistoryComponent_ng_container_0_ng_template_31_Case_0_Conditional_3_Template, 1, 4);
  }
  if (rf & 2) {
    const item_r8 = \u0275\u0275nextContext().row;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275conditional(item_r8.volumeNumber === ctx_r1.LooseLeafOrDefaultNumber ? 0 : item_r8.chapterNumber === ctx_r1.LooseLeafOrDefaultNumber ? 1 : item_r8.chapterNumber === ctx_r1.LooseLeafOrDefaultNumber && item_r8.volumeNumber === ctx_r1.SpecialVolumeNumber ? 2 : 3);
  }
}
function UserScrobbleHistoryComponent_ng_container_0_ng_template_31_Case_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const item_r8 = \u0275\u0275nextContext().row;
    const t_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275textInterpolate1(" ", t_r3("rating", \u0275\u0275pureFunction1(1, _c2, item_r8.rating)), " ");
  }
}
function UserScrobbleHistoryComponent_ng_container_0_ng_template_31_Case_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const t_r3 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275textInterpolate1(" ", t_r3("not-applicable"), " ");
  }
}
function UserScrobbleHistoryComponent_ng_container_0_ng_template_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, UserScrobbleHistoryComponent_ng_container_0_ng_template_31_Case_0_Template, 4, 1)(1, UserScrobbleHistoryComponent_ng_container_0_ng_template_31_Case_1_Template, 1, 3)(2, UserScrobbleHistoryComponent_ng_container_0_ng_template_31_Case_2_Template, 1, 1);
  }
  if (rf & 2) {
    let tmp_4_0;
    const item_r8 = ctx.row;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275conditional((tmp_4_0 = item_r8.scrobbleEventType) === ctx_r1.ScrobbleEventType.ChapterRead ? 0 : tmp_4_0 === ctx_r1.ScrobbleEventType.ScoreUpdated ? 1 : 2);
  }
}
function UserScrobbleHistoryComponent_ng_container_0_ng_template_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const t_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275textInterpolate1(" ", t_r3("is-processed-header"), " ");
  }
}
function UserScrobbleHistoryComponent_ng_container_0_ng_template_34_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 21);
  }
}
function UserScrobbleHistoryComponent_ng_container_0_ng_template_34_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 22);
  }
  if (rf & 2) {
    const item_r9 = \u0275\u0275nextContext().row;
    \u0275\u0275property("ngbTooltip", item_r9.errorDetails);
  }
}
function UserScrobbleHistoryComponent_ng_container_0_ng_template_34_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 23);
  }
}
function UserScrobbleHistoryComponent_ng_container_0_ng_template_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, UserScrobbleHistoryComponent_ng_container_0_ng_template_34_Conditional_0_Template, 1, 0, "i", 21)(1, UserScrobbleHistoryComponent_ng_container_0_ng_template_34_Conditional_1_Template, 1, 1, "i", 22)(2, UserScrobbleHistoryComponent_ng_container_0_ng_template_34_Conditional_2_Template, 1, 0, "i", 23);
    \u0275\u0275elementStart(3, "span", 24);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r9 = ctx.row;
    const idx_r10 = ctx.index;
    const t_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275conditional(item_r9.isProcessed ? 0 : item_r9.isErrored ? 1 : 2);
    \u0275\u0275advance(3);
    \u0275\u0275attributeInterpolate1("aria-labelledby", "scrobble-history--", idx_r10, "");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", item_r9.isProcessed ? t_r3("processed") : t_r3("not-processed"), " ");
  }
}
function UserScrobbleHistoryComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 1)(2, "button", 2);
    \u0275\u0275listener("click", function UserScrobbleHistoryComponent_ng_container_0_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.generateScrobbleEvents());
    });
    \u0275\u0275element(3, "i", 3);
    \u0275\u0275elementStart(4, "span", 4);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(6, UserScrobbleHistoryComponent_ng_container_0_Conditional_6_Template, 2, 1, "p", 5);
    \u0275\u0275pipe(7, "async");
    \u0275\u0275template(8, UserScrobbleHistoryComponent_ng_container_0_Conditional_8_Template, 2, 1, "p", 5);
    \u0275\u0275elementStart(9, "p");
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "p", 6);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div", 7)(14, "form", 8)(15, "div", 9)(16, "label", 10);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd();
    \u0275\u0275element(18, "input", 11);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(19, "ngx-datatable", 12);
    \u0275\u0275listener("sort", function UserScrobbleHistoryComponent_ng_container_0_Template_ngx_datatable_sort_19_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.updateSort($event));
    })("page", function UserScrobbleHistoryComponent_ng_container_0_Template_ngx_datatable_page_19_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onPageChange($event));
    });
    \u0275\u0275elementStart(20, "ngx-datatable-column", 13);
    \u0275\u0275template(21, UserScrobbleHistoryComponent_ng_container_0_ng_template_21_Template, 1, 1, "ng-template", 14)(22, UserScrobbleHistoryComponent_ng_container_0_ng_template_22_Template, 3, 5, "ng-template", 15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "ngx-datatable-column", 16);
    \u0275\u0275template(24, UserScrobbleHistoryComponent_ng_container_0_ng_template_24_Template, 1, 1, "ng-template", 14)(25, UserScrobbleHistoryComponent_ng_container_0_ng_template_25_Template, 2, 3, "ng-template", 15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "ngx-datatable-column", 17);
    \u0275\u0275template(27, UserScrobbleHistoryComponent_ng_container_0_ng_template_27_Template, 1, 1, "ng-template", 14)(28, UserScrobbleHistoryComponent_ng_container_0_ng_template_28_Template, 2, 6, "ng-template", 15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "ngx-datatable-column", 18);
    \u0275\u0275template(30, UserScrobbleHistoryComponent_ng_container_0_ng_template_30_Template, 1, 1, "ng-template", 14)(31, UserScrobbleHistoryComponent_ng_container_0_ng_template_31_Template, 3, 1, "ng-template", 15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "ngx-datatable-column", 19);
    \u0275\u0275template(33, UserScrobbleHistoryComponent_ng_container_0_ng_template_33_Template, 1, 1, "ng-template", 14)(34, UserScrobbleHistoryComponent_ng_container_0_ng_template_34_Template, 5, 4, "ng-template", 15);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const t_r3 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r1.events.length > 0)("title", t_r3("generate-scrobble-events"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(t_r3("generate-scrobble-events"));
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.tokenExpired ? 6 : !\u0275\u0275pipeBind1(7, 30, ctx_r1.accountService.currentUser$).preferences.aniListScrobblingEnabled ? 8 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(t_r3("description"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r3("not-read-warning"));
    \u0275\u0275advance(2);
    \u0275\u0275property("formGroup", ctx_r1.formGroup);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(t_r3("filter-label"));
    \u0275\u0275advance(2);
    \u0275\u0275property("rows", ctx_r1.events)("columnMode", ctx_r1.ColumnMode.force)("footerHeight", 50)("externalPaging", true)("count", ctx_r1.pageInfo.totalElements)("offset", ctx_r1.pageInfo.pageNumber)("limit", ctx_r1.pageInfo.size);
    \u0275\u0275advance();
    \u0275\u0275property("sortable", true)("draggable", false)("resizeable", false);
    \u0275\u0275advance(3);
    \u0275\u0275property("sortable", true)("draggable", false)("resizeable", false);
    \u0275\u0275advance(3);
    \u0275\u0275property("sortable", true)("draggable", false)("resizeable", false);
    \u0275\u0275advance(3);
    \u0275\u0275property("sortable", false)("draggable", false)("resizeable", false);
    \u0275\u0275advance(3);
    \u0275\u0275property("sortable", true)("draggable", false)("resizeable", false);
  }
}
var UserScrobbleHistoryComponent = class _UserScrobbleHistoryComponent {
  constructor() {
    this.SpecialVolumeNumber = SpecialVolumeNumber;
    this.LooseLeafOrDefaultNumber = LooseLeafOrDefaultNumber;
    this.ColumnMode = ColumnMode;
    this.ScrobbleEventType = ScrobbleEventType;
    this.scrobblingService = inject(ScrobblingService);
    this.cdRef = inject(ChangeDetectorRef);
    this.destroyRef = inject(DestroyRef);
    this.accountService = inject(AccountService);
    this.tokenExpired = false;
    this.formGroup = new FormGroup({
      "filter": new FormControl("", [])
    });
    this.events = [];
    this.isLoading = true;
    this.pageInfo = {
      pageNumber: 0,
      size: 10,
      totalElements: 0,
      totalPages: 0
    };
  }
  ngOnInit() {
    this.pageInfo.pageNumber = 0;
    this.cdRef.markForCheck();
    this.scrobblingService.hasTokenExpired(ScrobbleProvider.AniList).subscribe((hasExpired) => {
      this.tokenExpired = hasExpired;
      this.cdRef.markForCheck();
    });
    this.formGroup.get("filter")?.valueChanges.pipe(debounceTime(200), takeUntilDestroyed(this.destroyRef)).subscribe((query) => {
      this.loadPage();
    });
  }
  onPageChange(pageInfo) {
    this.pageInfo.pageNumber = pageInfo.offset;
    this.cdRef.markForCheck();
    this.loadPage();
  }
  updateSort(data) {
    this.loadPage({ column: data.column.prop, direction: data.newValue });
  }
  loadPage(sortEvent) {
    if (sortEvent && this.pageInfo) {
      this.pageInfo.pageNumber = 1;
      this.cdRef.markForCheck();
    }
    const page = (this.pageInfo?.pageNumber || 0) + 1;
    const pageSize = this.pageInfo?.size || 0;
    const isDescending = sortEvent?.direction === "desc";
    const field = this.mapSortColumnField(sortEvent?.column);
    const query = this.formGroup.get("filter")?.value;
    this.isLoading = true;
    this.cdRef.markForCheck();
    this.scrobblingService.getScrobbleEvents({ query, field, isDescending }, page, pageSize).pipe(take(1)).subscribe((result) => {
      this.events = result.result;
      this.pageInfo.totalPages = result.pagination.totalPages - 1;
      this.pageInfo.size = result.pagination.itemsPerPage;
      this.pageInfo.totalElements = result.pagination.totalItems;
      this.isLoading = false;
      this.cdRef.markForCheck();
    });
  }
  mapSortColumnField(column) {
    switch (column) {
      case "createdUtc":
        return ScrobbleEventSortField.Created;
      case "isProcessed":
        return ScrobbleEventSortField.IsProcessed;
      case "lastModifiedUtc":
        return ScrobbleEventSortField.LastModified;
      case "seriesName":
        return ScrobbleEventSortField.Series;
    }
    return ScrobbleEventSortField.None;
  }
  generateScrobbleEvents() {
    this.scrobblingService.triggerScrobbleEventGeneration().subscribe((_) => {
    });
  }
  static {
    this.\u0275fac = function UserScrobbleHistoryComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _UserScrobbleHistoryComponent)();
    };
  }
  static {
    this.\u0275cmp = \u0275\u0275defineComponent({ type: _UserScrobbleHistoryComponent, selectors: [["app-user-scrobble-history"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 1, vars: 1, consts: [[4, "transloco", "translocoRead"], [1, "position-relative"], [1, "btn", "btn-primary-outline", "position-absolute", "custom-position", 3, "click", "disabled", "title"], ["aria-hidden", "true", 1, "fa", "fa-plus"], [1, "phone-hidden", "ms-1"], [1, "alert", "alert-warning"], [1, "fw-bold"], [1, "row", "g-0", "mb-2"], [3, "formGroup"], [1, "form-group", "pe-1"], ["for", "filter"], ["id", "filter", "type", "text", "formControlName", "filter", "autocomplete", "off", 1, "form-control"], ["rowHeight", "auto", 1, "bootstrap", 3, "sort", "page", "rows", "columnMode", "footerHeight", "externalPaging", "count", "offset", "limit"], ["prop", "lastModifiedUtc", 3, "sortable", "draggable", "resizeable"], ["ngx-datatable-header-template", ""], ["ngx-datatable-cell-template", ""], ["prop", "scrobbleEventType", 3, "sortable", "draggable", "resizeable"], ["prop", "seriesName", 3, "sortable", "draggable", "resizeable"], ["prop", "data", 3, "sortable", "draggable", "resizeable"], ["prop", "isPorcessed", 3, "sortable", "draggable", "resizeable"], ["target", "_blank", 3, "href", "id"], ["aria-hidden", "true", 1, "fa-solid", "fa-check-circle", "icon"], ["aria-hidden", "true", 1, "fa-solid", "fa-circle-exclamation", "icon", "error", 3, "ngbTooltip"], ["aria-hidden", "true", 1, "fa-regular", "fa-circle", "icon"], [1, "visually-hidden"]], template: function UserScrobbleHistoryComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, UserScrobbleHistoryComponent_ng_container_0_Template, 35, 32, "ng-container", 0);
      }
      if (rf & 2) {
        \u0275\u0275property("translocoRead", "user-scrobble-history");
      }
    }, dependencies: [ScrobbleEventTypePipe, ReactiveFormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, TranslocoModule, TranslocoDirective, DefaultValuePipe, TranslocoLocaleModule, UtcToLocalTimePipe, NgbTooltip, NgxDatatableModule, DatatableComponent, DataTableColumnDirective, DataTableColumnHeaderDirective, DataTableColumnCellDirective, AsyncPipe], styles: ["\n\n.icon[_ngcontent-%COMP%] {\n  color: var(--primary-color);\n}\n.error[_ngcontent-%COMP%] {\n  color: var(--error-color);\n}\n.custom-position[_ngcontent-%COMP%] {\n  right: 15px;\n  top: -42px;\n}\n/*# sourceMappingURL=user-scrobble-history.component.css.map */"], changeDetection: 0 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(UserScrobbleHistoryComponent, { className: "UserScrobbleHistoryComponent", filePath: "src/app/_single-module/user-scrobble-history/user-scrobble-history.component.ts", lineNumber: 38 });
})();

// src/app/admin/manage-scrobling/manage-scrobbling.component.ts
function ManageScrobblingComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275element(0, "div", 0);
    \u0275\u0275elementStart(1, "div", 1)(2, "app-manage-scrobble-errors", 2);
    \u0275\u0275listener("scrobbleCount", function ManageScrobblingComponent_Conditional_1_Template_app_manage_scrobble_errors_scrobbleCount_2_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.updateScrobbleErrorCount($event));
    });
    \u0275\u0275elementEnd()();
  }
}
var ManageScrobblingComponent = class _ManageScrobblingComponent {
  constructor() {
    this.cdRef = inject(ChangeDetectorRef);
    this.accountService = inject(AccountService);
    this.scrobbleCount = 0;
  }
  updateScrobbleErrorCount(count) {
    this.scrobbleCount = count;
    this.cdRef.markForCheck();
  }
  static {
    this.\u0275fac = function ManageScrobblingComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ManageScrobblingComponent)();
    };
  }
  static {
    this.\u0275cmp = \u0275\u0275defineComponent({ type: _ManageScrobblingComponent, selectors: [["app-manage-scrobling"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 3, vars: 3, consts: [[1, "setting-section-break"], [1, "mt-4"], [3, "scrobbleCount"]], template: function ManageScrobblingComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275element(0, "app-user-scrobble-history");
        \u0275\u0275template(1, ManageScrobblingComponent_Conditional_1_Template, 3, 0);
        \u0275\u0275pipe(2, "async");
      }
      if (rf & 2) {
        \u0275\u0275advance();
        \u0275\u0275conditional(\u0275\u0275pipeBind1(2, 1, ctx.accountService.isAdmin$) ? 1 : -1);
      }
    }, dependencies: [
      ManageScrobbleErrorsComponent,
      AsyncPipe,
      UserScrobbleHistoryComponent
    ], changeDetection: 0 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ManageScrobblingComponent, { className: "ManageScrobblingComponent", filePath: "src/app/admin/manage-scrobling/manage-scrobbling.component.ts", lineNumber: 22 });
})();
export {
  ManageScrobblingComponent
};
//# sourceMappingURL=manage-scrobbling.component-D7NA45V4.js.map
