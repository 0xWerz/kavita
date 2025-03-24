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
import {
  ScrobblingService
} from "./chunk-R5PSFMI2.js";
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
  ɵɵdefineComponent,
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
  ɵɵpropertyInterpolate2,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-PYHIUVNJ.js";

// src/app/user-settings/user-holds/scrobbling-holds.component.ts
function ScrobblingHoldsComponent_ng_container_0_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const t_r1 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275textInterpolate1(" ", t_r1("series-name-header"), " ");
  }
}
function ScrobblingHoldsComponent_ng_container_0_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-image", 7);
    \u0275\u0275elementStart(1, "a", 8);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r2 = ctx.row;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275property("width", "32px")("height", "32px")("imageUrl", ctx_r2.imageService.getSeriesCoverImage(item_r2.seriesId));
    \u0275\u0275advance();
    \u0275\u0275propertyInterpolate2("href", "/library/", item_r2.libraryId, "/series/", item_r2.seriesId, "", \u0275\u0275sanitizeUrl);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(item_r2.seriesName);
  }
}
function ScrobblingHoldsComponent_ng_container_0_ng_template_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const t_r1 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275textInterpolate1(" ", t_r1("created-header"), " ");
  }
}
function ScrobblingHoldsComponent_ng_container_0_ng_template_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "utcToLocalTime");
  }
  if (rf & 2) {
    const item_r4 = ctx.row;
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(1, 1, item_r4.createdUtc), " ");
  }
}
function ScrobblingHoldsComponent_ng_container_0_ng_template_11_Template(rf, ctx) {
}
function ScrobblingHoldsComponent_ng_container_0_ng_template_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 9);
    \u0275\u0275listener("click", function ScrobblingHoldsComponent_ng_container_0_ng_template_12_Template_button_click_0_listener() {
      const item_r6 = \u0275\u0275restoreView(_r5).row;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.removeHold(item_r6));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r1 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(t_r1("delete-label"));
  }
}
function ScrobblingHoldsComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "p");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "ngx-datatable", 1)(4, "ngx-datatable-column", 2);
    \u0275\u0275template(5, ScrobblingHoldsComponent_ng_container_0_ng_template_5_Template, 1, 1, "ng-template", 3)(6, ScrobblingHoldsComponent_ng_container_0_ng_template_6_Template, 3, 7, "ng-template", 4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "ngx-datatable-column", 5);
    \u0275\u0275template(8, ScrobblingHoldsComponent_ng_container_0_ng_template_8_Template, 1, 1, "ng-template", 3)(9, ScrobblingHoldsComponent_ng_container_0_ng_template_9_Template, 2, 3, "ng-template", 4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "ngx-datatable-column", 6);
    \u0275\u0275template(11, ScrobblingHoldsComponent_ng_container_0_ng_template_11_Template, 0, 0, "ng-template", 3)(12, ScrobblingHoldsComponent_ng_container_0_ng_template_12_Template, 2, 1, "ng-template", 4);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const t_r1 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r1("description"));
    \u0275\u0275advance();
    \u0275\u0275property("rows", ctx_r2.data)("columnMode", ctx_r2.ColumnMode.force)("loadingIndicator", true)("limit", 15)("footerHeight", 50);
    \u0275\u0275advance();
    \u0275\u0275property("sortable", true)("draggable", false)("resizeable", false);
    \u0275\u0275advance(3);
    \u0275\u0275property("sortable", true)("draggable", false)("resizeable", false);
    \u0275\u0275advance(3);
    \u0275\u0275property("sortable", false)("draggable", false)("resizeable", false);
  }
}
var ScrobblingHoldsComponent = class _ScrobblingHoldsComponent {
  constructor() {
    this.ColumnMode = ColumnMode;
    this.cdRef = inject(ChangeDetectorRef);
    this.scrobblingService = inject(ScrobblingService);
    this.imageService = inject(ImageService);
    this.isLoading = true;
    this.data = [];
    this.loadData();
  }
  loadData() {
    this.scrobblingService.getHolds().subscribe((data) => {
      this.data = data;
      this.isLoading = false;
      this.cdRef.markForCheck();
    });
  }
  removeHold(hold) {
    this.scrobblingService.removeHold(hold.seriesId).subscribe((_) => {
      this.loadData();
    });
  }
  static {
    this.\u0275fac = function ScrobblingHoldsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ScrobblingHoldsComponent)();
    };
  }
  static {
    this.\u0275cmp = \u0275\u0275defineComponent({ type: _ScrobblingHoldsComponent, selectors: [["app-user-holds"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 1, vars: 1, consts: [[4, "transloco", "translocoRead"], ["rowHeight", "auto", 1, "bootstrap", 3, "rows", "columnMode", "loadingIndicator", "limit", "footerHeight"], ["prop", "seriesName", 3, "sortable", "draggable", "resizeable"], ["ngx-datatable-header-template", ""], ["ngx-datatable-cell-template", ""], ["prop", "createdUtc", 3, "sortable", "draggable", "resizeable"], ["prop", "validUntilUtc", 3, "sortable", "draggable", "resizeable"], [3, "width", "height", "imageUrl"], ["target", "_blank", 1, "btn-link", "ms-2", 3, "href"], [1, "btn", "btn-primary", 3, "click"]], template: function ScrobblingHoldsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, ScrobblingHoldsComponent_ng_container_0_Template, 13, 15, "ng-container", 0);
      }
      if (rf & 2) {
        \u0275\u0275property("translocoRead", "user-holds");
      }
    }, dependencies: [TranslocoDirective, ImageComponent, UtcToLocalTimePipe, NgxDatatableModule, DatatableComponent, DataTableColumnDirective, DataTableColumnHeaderDirective, DataTableColumnCellDirective], changeDetection: 0 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ScrobblingHoldsComponent, { className: "ScrobblingHoldsComponent", filePath: "src/app/user-settings/user-holds/scrobbling-holds.component.ts", lineNumber: 18 });
})();
export {
  ScrobblingHoldsComponent
};
//# sourceMappingURL=scrobbling-holds.component-A3JXBUGI.js.map
