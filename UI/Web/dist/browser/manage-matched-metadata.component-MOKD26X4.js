import {
  VirtualScrollerModule
} from "./chunk-MBZDR44C.js";
import {
  ManageService,
  MatchStateOption,
  allMatchStates
} from "./chunk-D3OMWBOU.js";
import {
  ActionService
} from "./chunk-HTPJQXUV.js";
import "./chunk-HG4LWHDT.js";
import "./chunk-6M2JHRYX.js";
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
import "./chunk-NGXWDHM5.js";
import "./chunk-XZ5MKEYT.js";
import {
  LibraryService
} from "./chunk-PBM62GK4.js";
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
import {
  ImageComponent
} from "./chunk-2JLAQ3MZ.js";
import {
  ImageService
} from "./chunk-TPURWX2Y.js";
import "./chunk-BX5PUGWH.js";
import "./chunk-KJWRNOWO.js";
import "./chunk-D7CIAEAO.js";
import {
  Select2Module
} from "./chunk-LGLLZBOI.js";
import "./chunk-EA72DBFY.js";
import "./chunk-HN36WWH3.js";
import "./chunk-R5PSFMI2.js";
import "./chunk-A6JEQ5GB.js";
import "./chunk-RSMGJKYW.js";
import {
  LicenseService,
  Router
} from "./chunk-U2DWQJI2.js";
import "./chunk-2R2RCU4Y.js";
import "./chunk-5J5IKBMT.js";
import {
  EVENTS,
  MessageHubService
} from "./chunk-PUXELTB2.js";
import "./chunk-FLGYJHAG.js";
import {
  FormControl,
  FormControlName,
  FormGroup,
  FormGroupDirective,
  NgControlStatus,
  NgControlStatusGroup,
  NgSelectOption,
  ReactiveFormsModule,
  SelectControlValueAccessor,
  ɵNgNoValidate,
  ɵNgSelectMultipleOption
} from "./chunk-BPOUBDX2.js";
import "./chunk-CQADFT7F.js";
import {
  AsyncPipe,
  ChangeDetectorRef,
  TranslocoDirective,
  debounceTime,
  distinctUntilChanged,
  inject,
  switchMap,
  tap,
  translate,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
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
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-PYHIUVNJ.js";

// src/app/_pipes/match-state.pipe.ts
var MatchStateOptionPipe = class _MatchStateOptionPipe {
  transform(value) {
    switch (value) {
      case MatchStateOption.DontMatch:
        return translate("manage-matched-metadata.dont-match-label");
      case MatchStateOption.All:
        return translate("manage-matched-metadata.all-status-label");
      case MatchStateOption.Matched:
        return translate("manage-matched-metadata.matched-status-label");
      case MatchStateOption.NotMatched:
        return translate("manage-matched-metadata.unmatched-status-label");
      case MatchStateOption.Error:
        return translate("manage-matched-metadata.blacklist-status-label");
    }
  }
  static {
    this.\u0275fac = function MatchStateOptionPipe_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _MatchStateOptionPipe)();
    };
  }
  static {
    this.\u0275pipe = \u0275\u0275definePipe({ name: "matchStateOption", type: _MatchStateOptionPipe, pure: true, standalone: true });
  }
};

// src/app/_pipes/library-name.pipe.ts
var LibraryNamePipe = class _LibraryNamePipe {
  constructor() {
    this.libraryService = inject(LibraryService);
  }
  transform(libraryId) {
    return this.libraryService.getLibraryName(libraryId);
  }
  static {
    this.\u0275fac = function LibraryNamePipe_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _LibraryNamePipe)();
    };
  }
  static {
    this.\u0275pipe = \u0275\u0275definePipe({ name: "libraryName", type: _LibraryNamePipe, pure: true, standalone: true });
  }
};

// src/app/admin/manage-matched-metadata/manage-matched-metadata.component.ts
var _c0 = (a0) => ({ seriesName: a0 });
function ManageMatchedMetadataComponent_ng_container_0_For_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 6);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "matchStateOption");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const state_r1 = ctx.$implicit;
    \u0275\u0275property("value", state_r1);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 2, state_r1));
  }
}
function ManageMatchedMetadataComponent_ng_container_0_ng_template_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const t_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275textInterpolate1(" ", t_r2("series-name-header"), " ");
  }
}
function ManageMatchedMetadataComponent_ng_container_0_ng_template_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-image", 15);
    \u0275\u0275elementStart(1, "a", 16);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r3 = ctx.row;
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275property("width", "32px")("height", "32px")("imageUrl", ctx_r3.imageService.getSeriesCoverImage(item_r3.series.id));
    \u0275\u0275advance();
    \u0275\u0275property("href", "/library/" + item_r3.series.libraryId + "/series/" + item_r3.series.id, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(item_r3.series.name);
  }
}
function ManageMatchedMetadataComponent_ng_container_0_ng_template_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const t_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275textInterpolate1(" ", t_r2("library-name-header"), " ");
  }
}
function ManageMatchedMetadataComponent_ng_container_0_ng_template_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "libraryName");
    \u0275\u0275pipe(2, "async");
  }
  if (rf & 2) {
    const item_r5 = ctx.row;
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 3, \u0275\u0275pipeBind1(1, 1, item_r5.series.libraryId)), " ");
  }
}
function ManageMatchedMetadataComponent_ng_container_0_ng_template_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const t_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275textInterpolate1(" ", t_r2("status-header"), " ");
  }
}
function ManageMatchedMetadataComponent_ng_container_0_ng_template_20_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const t_r2 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275textInterpolate1(" ", t_r2("blacklist-status-label"), " ");
  }
}
function ManageMatchedMetadataComponent_ng_container_0_ng_template_20_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const t_r2 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275textInterpolate1(" ", t_r2("dont-match-status-label"), " ");
  }
}
function ManageMatchedMetadataComponent_ng_container_0_ng_template_20_Conditional_2_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const t_r2 = \u0275\u0275nextContext(3).$implicit;
    \u0275\u0275textInterpolate1(" ", t_r2("matched-status-label"), " ");
  }
}
function ManageMatchedMetadataComponent_ng_container_0_ng_template_20_Conditional_2_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const t_r2 = \u0275\u0275nextContext(3).$implicit;
    \u0275\u0275textInterpolate1(" ", t_r2("unmatched-status-label"), " ");
  }
}
function ManageMatchedMetadataComponent_ng_container_0_ng_template_20_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, ManageMatchedMetadataComponent_ng_container_0_ng_template_20_Conditional_2_Conditional_0_Template, 1, 1)(1, ManageMatchedMetadataComponent_ng_container_0_ng_template_20_Conditional_2_Conditional_1_Template, 1, 1);
  }
  if (rf & 2) {
    const item_r6 = \u0275\u0275nextContext().row;
    \u0275\u0275conditional(item_r6.isMatched ? 0 : 1);
  }
}
function ManageMatchedMetadataComponent_ng_container_0_ng_template_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, ManageMatchedMetadataComponent_ng_container_0_ng_template_20_Conditional_0_Template, 1, 1)(1, ManageMatchedMetadataComponent_ng_container_0_ng_template_20_Conditional_1_Template, 1, 1)(2, ManageMatchedMetadataComponent_ng_container_0_ng_template_20_Conditional_2_Template, 2, 1);
  }
  if (rf & 2) {
    const item_r6 = ctx.row;
    \u0275\u0275conditional(item_r6.series.isBlacklisted ? 0 : item_r6.series.dontMatch ? 1 : 2);
  }
}
function ManageMatchedMetadataComponent_ng_container_0_Conditional_21_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const t_r2 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275textInterpolate1(" ", t_r2("valid-until-header"), " ");
  }
}
function ManageMatchedMetadataComponent_ng_container_0_Conditional_21_ng_template_2_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "defaultValue");
  }
  if (rf & 2) {
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(1, 1, null), " ");
  }
}
function ManageMatchedMetadataComponent_ng_container_0_Conditional_21_ng_template_2_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "utcToLocalTime");
  }
  if (rf & 2) {
    const item_r7 = \u0275\u0275nextContext().row;
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(1, 1, item_r7.validUntilUtc), " ");
  }
}
function ManageMatchedMetadataComponent_ng_container_0_Conditional_21_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, ManageMatchedMetadataComponent_ng_container_0_Conditional_21_ng_template_2_Conditional_0_Template, 2, 3)(1, ManageMatchedMetadataComponent_ng_container_0_Conditional_21_ng_template_2_Conditional_1_Template, 2, 3);
  }
  if (rf & 2) {
    const item_r7 = ctx.row;
    \u0275\u0275conditional(item_r7.series.isBlacklisted || item_r7.series.dontMatch || !item_r7.isMatched ? 0 : 1);
  }
}
function ManageMatchedMetadataComponent_ng_container_0_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ngx-datatable-column", 13);
    \u0275\u0275template(1, ManageMatchedMetadataComponent_ng_container_0_Conditional_21_ng_template_1_Template, 1, 1, "ng-template", 9)(2, ManageMatchedMetadataComponent_ng_container_0_Conditional_21_ng_template_2_Template, 2, 1, "ng-template", 10);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275property("sortable", false)("draggable", false)("resizeable", false)("flexGrow", 1);
  }
}
function ManageMatchedMetadataComponent_ng_container_0_ng_template_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const t_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275textInterpolate1(" ", t_r2("actions-header"), " ");
  }
}
function ManageMatchedMetadataComponent_ng_container_0_ng_template_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 17);
    \u0275\u0275listener("click", function ManageMatchedMetadataComponent_ng_container_0_ng_template_24_Template_button_click_0_listener() {
      const item_r9 = \u0275\u0275restoreView(_r8).row;
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.fixMatch(item_r9.series));
    });
    \u0275\u0275element(1, "i", 18);
    \u0275\u0275elementStart(2, "span", 19);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r9 = ctx.row;
    const t_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(t_r2("match-alt", \u0275\u0275pureFunction1(1, _c0, item_r9.series.name)));
  }
}
function ManageMatchedMetadataComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "p");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "form", 1)(4, "div", 2)(5, "div", 3)(6, "label", 4);
    \u0275\u0275text(7, "Match State");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "select", 5);
    \u0275\u0275repeaterCreate(9, ManageMatchedMetadataComponent_ng_container_0_For_10_Template, 3, 4, "option", 6, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(11, "ngx-datatable", 7)(12, "ngx-datatable-column", 8);
    \u0275\u0275template(13, ManageMatchedMetadataComponent_ng_container_0_ng_template_13_Template, 1, 1, "ng-template", 9)(14, ManageMatchedMetadataComponent_ng_container_0_ng_template_14_Template, 3, 5, "ng-template", 10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "ngx-datatable-column", 11);
    \u0275\u0275template(16, ManageMatchedMetadataComponent_ng_container_0_ng_template_16_Template, 1, 1, "ng-template", 9)(17, ManageMatchedMetadataComponent_ng_container_0_ng_template_17_Template, 3, 5, "ng-template", 10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "ngx-datatable-column", 12);
    \u0275\u0275template(19, ManageMatchedMetadataComponent_ng_container_0_ng_template_19_Template, 1, 1, "ng-template", 9)(20, ManageMatchedMetadataComponent_ng_container_0_ng_template_20_Template, 3, 1, "ng-template", 10);
    \u0275\u0275elementEnd();
    \u0275\u0275template(21, ManageMatchedMetadataComponent_ng_container_0_Conditional_21_Template, 3, 4, "ngx-datatable-column", 13);
    \u0275\u0275elementStart(22, "ngx-datatable-column", 14);
    \u0275\u0275template(23, ManageMatchedMetadataComponent_ng_container_0_ng_template_23_Template, 1, 1, "ng-template", 9)(24, ManageMatchedMetadataComponent_ng_container_0_ng_template_24_Template, 4, 3, "ng-template", 10);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    let tmp_22_0;
    const t_r2 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r2("description"));
    \u0275\u0275advance();
    \u0275\u0275property("formGroup", ctx_r3.filterGroup);
    \u0275\u0275advance(6);
    \u0275\u0275repeater(ctx_r3.allMatchStates);
    \u0275\u0275advance(2);
    \u0275\u0275property("rows", ctx_r3.data)("loadingIndicator", ctx_r3.isLoading)("columnMode", ctx_r3.ColumnMode.flex)("limit", 15)("footerHeight", 50);
    \u0275\u0275advance();
    \u0275\u0275property("sortable", true)("draggable", false)("resizeable", false)("flexGrow", 3);
    \u0275\u0275advance(3);
    \u0275\u0275property("sortable", true)("draggable", false)("resizeable", false)("flexGrow", 2);
    \u0275\u0275advance(3);
    \u0275\u0275property("sortable", false)("draggable", false)("resizeable", false)("flexGrow", 1);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(((tmp_22_0 = ctx_r3.filterGroup.get("matchState")) == null ? null : tmp_22_0.value) === ctx_r3.MatchStateOption.Matched ? 21 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("width", 20)("sortable", false)("draggable", false)("resizeable", false)("flexGrow", 1);
  }
}
var ManageMatchedMetadataComponent = class _ManageMatchedMetadataComponent {
  constructor() {
    this.ColumnMode = ColumnMode;
    this.MatchStateOption = MatchStateOption;
    this.allMatchStates = allMatchStates.filter((m) => m !== MatchStateOption.Matched);
    this.licenseService = inject(LicenseService);
    this.actionService = inject(ActionService);
    this.router = inject(Router);
    this.manageService = inject(ManageService);
    this.messageHub = inject(MessageHubService);
    this.cdRef = inject(ChangeDetectorRef);
    this.imageService = inject(ImageService);
    this.isLoading = true;
    this.data = [];
    this.filterGroup = new FormGroup({
      "matchState": new FormControl(MatchStateOption.Error, [])
    });
  }
  ngOnInit() {
    this.licenseService.hasValidLicense$.subscribe((license) => {
      if (!license) {
        this.router.navigate(["/"]);
        return;
      }
      this.messageHub.messages$.subscribe((message) => {
        if (message.event !== EVENTS.ScanSeries)
          return;
        const evt = message.payload;
        if (this.data.filter((d) => d.series.id === evt.seriesId).length > 0) {
          this.loadData();
        }
      });
      this.filterGroup.valueChanges.pipe(debounceTime(300), distinctUntilChanged(), tap((_) => {
        this.isLoading = true;
        this.cdRef.markForCheck();
      }), switchMap((_) => this.loadData()), tap((_) => {
        this.isLoading = false;
        this.cdRef.markForCheck();
      })).subscribe();
      this.loadData().subscribe();
    });
  }
  loadData() {
    const filter = {
      matchStateOption: parseInt(this.filterGroup.get("matchState").value + "", 10),
      searchTerm: ""
    };
    this.isLoading = true;
    this.data = [];
    this.cdRef.markForCheck();
    return this.manageService.getAllKavitaPlusSeries(filter).pipe(tap((data) => {
      this.data = [...data];
      this.isLoading = false;
      this.cdRef.markForCheck();
    }));
  }
  fixMatch(series) {
    this.actionService.matchSeries(series, (result) => {
      if (!result)
        return;
      this.data = [...this.data.filter((s) => s.series.id !== series.id)];
      this.cdRef.markForCheck();
    });
  }
  static {
    this.\u0275fac = function ManageMatchedMetadataComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ManageMatchedMetadataComponent)();
    };
  }
  static {
    this.\u0275cmp = \u0275\u0275defineComponent({ type: _ManageMatchedMetadataComponent, selectors: [["app-manage-matched-metadata"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 1, vars: 1, consts: [[4, "transloco", "translocoRead"], [3, "formGroup"], [1, "row", "g-0"], [1, "col-auto", "ms-auto"], ["for", "match-filter"], ["formControlName", "matchState", "id", "match-filter", 1, "form-select"], [3, "value"], ["rowHeight", "auto", 1, "bootstrap", 3, "rows", "loadingIndicator", "columnMode", "limit", "footerHeight"], ["prop", "series.name", 3, "sortable", "draggable", "resizeable", "flexGrow"], ["ngx-datatable-header-template", ""], ["ngx-datatable-cell-template", ""], ["prop", "series.libraryId", 3, "sortable", "draggable", "resizeable", "flexGrow"], ["prop", "status", 3, "sortable", "draggable", "resizeable", "flexGrow"], ["prop", "validUntilUtc", 3, "sortable", "draggable", "resizeable", "flexGrow"], ["prop", "", 3, "width", "sortable", "draggable", "resizeable", "flexGrow"], [3, "width", "height", "imageUrl"], ["target", "_blank", 1, "ms-2", 3, "href"], [1, "btn", "btn-icon", 3, "click"], ["aria-hidden", "true", 1, "fa-solid", "fa-magnifying-glass"], [1, "visually-hidden"]], template: function ManageMatchedMetadataComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, ManageMatchedMetadataComponent_ng_container_0_Template, 25, 25, "ng-container", 0);
      }
      if (rf & 2) {
        \u0275\u0275property("translocoRead", "manage-matched-metadata");
      }
    }, dependencies: [
      TranslocoDirective,
      ImageComponent,
      VirtualScrollerModule,
      ReactiveFormsModule,
      \u0275NgNoValidate,
      NgSelectOption,
      \u0275NgSelectMultipleOption,
      SelectControlValueAccessor,
      NgControlStatus,
      NgControlStatusGroup,
      FormGroupDirective,
      FormControlName,
      Select2Module,
      MatchStateOptionPipe,
      UtcToLocalTimePipe,
      DefaultValuePipe,
      NgxDatatableModule,
      DatatableComponent,
      DataTableColumnDirective,
      DataTableColumnHeaderDirective,
      DataTableColumnCellDirective,
      LibraryNamePipe,
      AsyncPipe
    ], styles: ["\n\n.table[_ngcontent-%COMP%] {\n  min-height: 60px;\n  width: 100%;\n}\n.tr[_ngcontent-%COMP%] {\n  height: 60px;\n}\n/*# sourceMappingURL=manage-matched-metadata.component.css.map */"], changeDetection: 0 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ManageMatchedMetadataComponent, { className: "ManageMatchedMetadataComponent", filePath: "src/app/admin/manage-matched-metadata/manage-matched-metadata.component.ts", lineNumber: 46 });
})();
export {
  ManageMatchedMetadataComponent
};
//# sourceMappingURL=manage-matched-metadata.component-MOKD26X4.js.map
