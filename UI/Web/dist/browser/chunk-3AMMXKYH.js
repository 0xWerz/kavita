import {
  BadgeExpanderComponent
} from "./chunk-5EJJ6TJW.js";
import {
  ProviderImagePipe
} from "./chunk-E4IH7S3P.js";
import {
  FilterUtilitiesService
} from "./chunk-SBBWMOEE.js";
import {
  PublicationStatusPipe
} from "./chunk-XZ2P7HP2.js";
import {
  ActionService
} from "./chunk-HTPJQXUV.js";
import {
  SeriesService
} from "./chunk-HG4LWHDT.js";
import {
  ReadMoreComponent
} from "./chunk-BJ7U7OXN.js";
import {
  TagBadgeComponent,
  TagBadgeCursor
} from "./chunk-MABWAPXH.js";
import {
  ImageComponent
} from "./chunk-2JLAQ3MZ.js";
import {
  ImageService
} from "./chunk-TPURWX2Y.js";
import {
  FilterComparison,
  FilterField
} from "./chunk-IBO6ECG5.js";
import {
  LoadingComponent
} from "./chunk-D7CIAEAO.js";
import {
  Breakpoint,
  UtilityService
} from "./chunk-A6JEQ5GB.js";
import {
  NgbActiveOffcanvas,
  NgbTooltip
} from "./chunk-2R2RCU4Y.js";
import {
  ChangeDetectorRef,
  ElementRef,
  NgOptimizedImage,
  NgTemplateOutlet,
  TranslocoDirective,
  inject,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMapInterpolate1,
  ɵɵconditional,
  ɵɵcontentQuery,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdirectiveInject,
  ɵɵelement,
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
  ɵɵpropertyInterpolate,
  ɵɵpureFunction0,
  ɵɵpureFunction2,
  ɵɵqueryRefresh,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-PYHIUVNJ.js";

// src/app/shared/a11y-click.directive.ts
var A11yClickDirective = class _A11yClickDirective {
  constructor(element) {
    this.element = element;
  }
  ngOnInit() {
    if (this.keyCodes) {
      this.keyCodeArray = this.keyCodes.split(",");
    }
  }
  onEvent(event) {
    var keyCodeCondition = function(that2) {
      var flag = false;
      if (!event.keyCode) {
        if (event.which) {
          event.keyCode = event.which;
        } else if (event.charCode) {
          event.keyCode = event.charCode;
        }
      }
      if (event.keyCode && that2.keyCodeArray.indexOf(event.keyCode.toString()) > -1) {
        flag = true;
      }
      return flag;
    };
    const that = this;
    if (this.keyCodeArray.length > 0 && keyCodeCondition(that)) {
      this.element.nativeElement.click();
      event.preventDefault();
    }
  }
  static {
    this.\u0275fac = function A11yClickDirective_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _A11yClickDirective)(\u0275\u0275directiveInject(ElementRef));
    };
  }
  static {
    this.\u0275dir = \u0275\u0275defineDirective({ type: _A11yClickDirective, selectors: [["", "a11y-click", ""]], hostBindings: function A11yClickDirective_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("keydown", function A11yClickDirective_keydown_HostBindingHandler($event) {
          return ctx.onEvent($event);
        });
      }
    }, inputs: { keyCodes: [0, "a11y-click", "keyCodes"] }, standalone: true });
  }
};

// src/app/series-detail/_components/metadata-detail/metadata-detail.component.ts
var _c0 = ["titleTemplate"];
var _c1 = ["itemTemplate"];
var _c2 = (a0, a1) => ({ $implicit: a0, idx: a1 });
function MetadataDetailComponent_Conditional_0_ng_template_6_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "span", 6);
    \u0275\u0275listener("click", function MetadataDetailComponent_Conditional_0_ng_template_6_Conditional_0_Template_span_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const item_r2 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.goTo(ctx_r2.queryParam, item_r2.id));
    });
    \u0275\u0275elementContainer(1, 7);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    const item_r2 = ctx_r3.$implicit;
    const position_r5 = ctx_r3.idx;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r2.itemTemplate)("ngTemplateOutletContext", \u0275\u0275pureFunction2(2, _c2, item_r2, position_r5));
  }
}
function MetadataDetailComponent_Conditional_0_ng_template_6_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-tag-badge", 8);
    \u0275\u0275listener("click", function MetadataDetailComponent_Conditional_0_ng_template_6_Conditional_1_Template_app_tag_badge_click_0_listener() {
      \u0275\u0275restoreView(_r6);
      const item_r2 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.goTo(ctx_r2.queryParam, item_r2.id));
    });
    \u0275\u0275elementContainer(1, 7);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    const item_r2 = ctx_r3.$implicit;
    const position_r5 = ctx_r3.idx;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275property("selectionMode", ctx_r2.TagBadgeCursor.Clickable);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r2.titleTemplate)("ngTemplateOutletContext", \u0275\u0275pureFunction2(3, _c2, item_r2, position_r5));
  }
}
function MetadataDetailComponent_Conditional_0_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, MetadataDetailComponent_Conditional_0_ng_template_6_Conditional_0_Template, 2, 5, "span")(1, MetadataDetailComponent_Conditional_0_ng_template_6_Conditional_1_Template, 2, 6, "app-tag-badge", 5);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275conditional(ctx_r2.itemTemplate ? 0 : 1);
  }
}
function MetadataDetailComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1)(1, "div", 2)(2, "h5");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 3)(5, "app-badge-expander", 4);
    \u0275\u0275template(6, MetadataDetailComponent_Conditional_0_ng_template_6_Template, 2, 1, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r2.heading);
    \u0275\u0275advance(2);
    \u0275\u0275property("items", ctx_r2.tags)("itemsTillExpander", ctx_r2.utilityService.getActiveBreakpoint() >= ctx_r2.Breakpoint.Desktop ? 30 : 4)("includeComma", ctx_r2.includeComma);
  }
}
var MetadataDetailComponent = class _MetadataDetailComponent {
  constructor() {
    this.filterUtilityService = inject(FilterUtilitiesService);
    this.utilityService = inject(UtilityService);
    this.TagBadgeCursor = TagBadgeCursor;
    this.Breakpoint = Breakpoint;
    this.tags = [];
    this.queryParam = FilterField.None;
    this.includeComma = true;
  }
  goTo(queryParamName, filter) {
    if (queryParamName === FilterField.None)
      return;
    this.filterUtilityService.applyFilter(["library", this.libraryId], queryParamName, FilterComparison.Equal, filter).subscribe();
  }
  static {
    this.\u0275fac = function MetadataDetailComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _MetadataDetailComponent)();
    };
  }
  static {
    this.\u0275cmp = \u0275\u0275defineComponent({ type: _MetadataDetailComponent, selectors: [["app-metadata-detail"]], contentQueries: function MetadataDetailComponent_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        \u0275\u0275contentQuery(dirIndex, _c0, 5);
        \u0275\u0275contentQuery(dirIndex, _c1, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.titleTemplate = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.itemTemplate = _t.first);
      }
    }, inputs: { tags: "tags", libraryId: "libraryId", heading: "heading", queryParam: "queryParam", includeComma: "includeComma" }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 1, vars: 1, consts: [["badgeExpanderItem", ""], [1, "row", "g-0", "mb-1"], [1, "col-lg-3", "col-md-4", "col-sm-12"], [1, "col-lg-9", "col-md-8", "col-sm-12"], [3, "items", "itemsTillExpander", "includeComma"], ["a11y-click", "13,32", 1, "col-auto", 3, "selectionMode"], [3, "click"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], ["a11y-click", "13,32", 1, "col-auto", 3, "click", "selectionMode"]], template: function MetadataDetailComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, MetadataDetailComponent_Conditional_0_Template, 8, 4, "div", 1);
      }
      if (rf & 2) {
        \u0275\u0275conditional(ctx.tags && ctx.tags.length > 0 ? 0 : -1);
      }
    }, dependencies: [A11yClickDirective, BadgeExpanderComponent, TagBadgeComponent, NgTemplateOutlet], changeDetection: 0 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MetadataDetailComponent, { className: "MetadataDetailComponent", filePath: "src/app/series-detail/_components/metadata-detail/metadata-detail.component.ts", lineNumber: 19 });
})();

// src/app/_single-module/series-preview-drawer/series-preview-drawer.component.ts
var _c02 = () => ({ "object-fit": "contain", "max-height": "232.91px" });
var _c12 = (a0, a1) => ({ volCount: a0, chpCount: a1 });
var _c22 = () => ({ "object-fit": "contain" });
function SeriesPreviewDrawerComponent_ng_container_0_Conditional_6_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-image", 9);
  }
  if (rf & 2) {
    const coverUrl_r3 = \u0275\u0275nextContext();
    \u0275\u0275property("styles", \u0275\u0275pureFunction0(2, _c02))("imageUrl", coverUrl_r3);
  }
}
function SeriesPreviewDrawerComponent_ng_container_0_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6);
    \u0275\u0275template(1, SeriesPreviewDrawerComponent_ng_container_0_Conditional_6_Conditional_1_Template, 1, 3, "app-image", 9);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx ? 1 : -1);
  }
}
function SeriesPreviewDrawerComponent_ng_container_0_Conditional_7_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r4 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", t_r4("series-preview-drawer.vols-and-chapters", \u0275\u0275pureFunction2(1, _c12, ctx_r1.externalSeries.volumeCount, ctx_r1.externalSeries.chapterCount)), " ");
  }
}
function SeriesPreviewDrawerComponent_ng_container_0_Conditional_7_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10);
    \u0275\u0275text(1);
    \u0275\u0275element(2, "img", 12);
    \u0275\u0275pipe(3, "providerImage");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r4 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", t_r4("series-preview-drawer.provided-by-label"), " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngSrc", \u0275\u0275pipeBind1(3, 2, ctx_r1.externalSeries.provider));
  }
}
function SeriesPreviewDrawerComponent_ng_container_0_Conditional_7_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-read-more", 11);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("maxLength", 300)("text", ctx_r1.externalSeries.summary);
  }
}
function SeriesPreviewDrawerComponent_ng_container_0_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, SeriesPreviewDrawerComponent_ng_container_0_Conditional_7_Conditional_0_Template, 2, 4, "div", 10)(1, SeriesPreviewDrawerComponent_ng_container_0_Conditional_7_Conditional_1_Template, 4, 4, "div", 10)(2, SeriesPreviewDrawerComponent_ng_container_0_Conditional_7_Conditional_2_Template, 1, 2, "app-read-more", 11);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275conditional((ctx_r1.externalSeries.volumeCount || 0) > 0 || (ctx_r1.externalSeries.chapterCount || 0) > 0 ? 0 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.isExternalSeries && ctx_r1.externalSeries ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.externalSeries.summary ? 2 : -1);
  }
}
function SeriesPreviewDrawerComponent_ng_container_0_Conditional_10_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 16);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r5 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(item_r5);
  }
}
function SeriesPreviewDrawerComponent_ng_container_0_Conditional_10_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 16);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r6 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(item_r6.name);
  }
}
function SeriesPreviewDrawerComponent_ng_container_0_Conditional_10_ng_template_10_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-image", 20);
  }
  if (rf & 2) {
    const item_r7 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("styles", \u0275\u0275pureFunction0(2, _c22))("imageUrl", item_r7.imageUrl);
  }
}
function SeriesPreviewDrawerComponent_ng_container_0_Conditional_10_ng_template_10_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 21);
  }
}
function SeriesPreviewDrawerComponent_ng_container_0_Conditional_10_ng_template_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 17)(1, "div", 18)(2, "div", 19);
    \u0275\u0275template(3, SeriesPreviewDrawerComponent_ng_container_0_Conditional_10_ng_template_10_Conditional_3_Template, 1, 3, "app-image", 20)(4, SeriesPreviewDrawerComponent_ng_container_0_Conditional_10_ng_template_10_Conditional_4_Template, 1, 0, "i", 21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 22)(6, "div", 23)(7, "h6", 24);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "p", 25)(10, "small", 26);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()()()()()();
  }
  if (rf & 2) {
    const item_r7 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275conditional(item_r7.imageUrl && !item_r7.imageUrl.endsWith("default.jpg") ? 3 : 4);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(item_r7.name);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(item_r7.role);
  }
}
function SeriesPreviewDrawerComponent_ng_container_0_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13)(1, "app-metadata-detail", 14);
    \u0275\u0275template(2, SeriesPreviewDrawerComponent_ng_container_0_Conditional_10_ng_template_2_Template, 2, 1, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 13)(5, "app-metadata-detail", 14);
    \u0275\u0275template(6, SeriesPreviewDrawerComponent_ng_container_0_Conditional_10_ng_template_6_Template, 2, 1, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 13)(9, "app-metadata-detail", 15);
    \u0275\u0275template(10, SeriesPreviewDrawerComponent_ng_container_0_Conditional_10_ng_template_10_Template, 12, 3, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const t_r4 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("tags", ctx_r1.externalSeries.genres)("libraryId", 0)("heading", t_r4("series-preview-drawer.genres-label"));
    \u0275\u0275advance(4);
    \u0275\u0275property("tags", ctx_r1.externalSeries.tags)("libraryId", 0)("heading", t_r4("series-preview-drawer.tags-label"));
    \u0275\u0275advance(4);
    \u0275\u0275property("tags", ctx_r1.externalSeries.staff)("libraryId", 0)("heading", t_r4("series-preview-drawer.staff-label"))("includeComma", false);
  }
}
function SeriesPreviewDrawerComponent_ng_container_0_Conditional_11_ng_template_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 16);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r9 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(item_r9.title);
  }
}
function SeriesPreviewDrawerComponent_ng_container_0_Conditional_11_ng_template_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 16);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r10 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(item_r10.title);
  }
}
function SeriesPreviewDrawerComponent_ng_container_0_Conditional_11_ng_template_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 17)(1, "div", 18)(2, "div", 31);
    \u0275\u0275element(3, "i", 32);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 33)(5, "div", 23)(6, "h6", 24);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "p", 25)(9, "small", 26);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()()()()()();
  }
  if (rf & 2) {
    const item_r11 = ctx.$implicit;
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(item_r11.name);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(item_r11.role);
  }
}
function SeriesPreviewDrawerComponent_ng_container_0_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 27)(1, "span", 28);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "publicationStatus");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 29);
    \u0275\u0275listener("click", function SeriesPreviewDrawerComponent_ng_container_0_Conditional_11_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.toggleWantToRead());
    });
    \u0275\u0275element(5, "i", 30);
    \u0275\u0275elementEnd()();
    \u0275\u0275element(6, "app-read-more", 11);
    \u0275\u0275elementStart(7, "div", 13)(8, "app-metadata-detail", 14);
    \u0275\u0275template(9, SeriesPreviewDrawerComponent_ng_container_0_Conditional_11_ng_template_9_Template, 2, 1, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div", 13)(12, "app-metadata-detail", 14);
    \u0275\u0275template(13, SeriesPreviewDrawerComponent_ng_container_0_Conditional_11_ng_template_13_Template, 2, 1, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "div", 13)(16, "app-metadata-detail", 15);
    \u0275\u0275template(17, SeriesPreviewDrawerComponent_ng_container_0_Conditional_11_ng_template_17_Template, 11, 2, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const t_r4 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 17, ctx_r1.localSeries.publicationStatus));
    \u0275\u0275advance(2);
    \u0275\u0275propertyInterpolate("ngbTooltip", ctx_r1.wantToRead ? t_r4("series-preview-drawer.remove-from-want-to-read") : t_r4("series-preview-drawer.add-to-want-to-read"));
    \u0275\u0275advance();
    \u0275\u0275classMapInterpolate1("", ctx_r1.wantToRead ? "fa-solid" : "fa-regular", " fa-star");
    \u0275\u0275advance();
    \u0275\u0275property("maxLength", 300)("text", ctx_r1.localSeries.summary);
    \u0275\u0275advance(2);
    \u0275\u0275property("tags", ctx_r1.localSeries.genres)("libraryId", 0)("heading", t_r4("series-preview-drawer.genres-label"));
    \u0275\u0275advance(4);
    \u0275\u0275property("tags", ctx_r1.localSeries.tags)("libraryId", 0)("heading", t_r4("series-preview-drawer.tags-label"));
    \u0275\u0275advance(4);
    \u0275\u0275property("tags", ctx_r1.localStaff)("libraryId", 0)("heading", t_r4("series-preview-drawer.staff-label"))("includeComma", false);
  }
}
function SeriesPreviewDrawerComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 2)(2, "h5", 3);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 4);
    \u0275\u0275listener("click", function SeriesPreviewDrawerComponent_ng_container_0_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.close());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 5);
    \u0275\u0275template(6, SeriesPreviewDrawerComponent_ng_container_0_Conditional_6_Template, 2, 1, "div", 6)(7, SeriesPreviewDrawerComponent_ng_container_0_Conditional_7_Template, 3, 3);
    \u0275\u0275elementStart(8, "a", 7);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275template(10, SeriesPreviewDrawerComponent_ng_container_0_Conditional_10_Template, 12, 10)(11, SeriesPreviewDrawerComponent_ng_container_0_Conditional_11_Template, 19, 19);
    \u0275\u0275element(12, "app-loading", 8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    let tmp_4_0;
    const t_r4 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r1.name, " ");
    \u0275\u0275advance();
    \u0275\u0275attribute("aria-label", t_r4("common.close"));
    \u0275\u0275advance(2);
    \u0275\u0275conditional((tmp_4_0 = ctx_r1.CoverUrl) ? 6 : -1, tmp_4_0);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.externalSeries ? 7 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("href", ctx_r1.url, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", t_r4("series-preview-drawer.view-series"), " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.externalSeries ? 10 : ctx_r1.localSeries ? 11 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275property("loading", ctx_r1.isLoading);
  }
}
var SeriesPreviewDrawerComponent = class _SeriesPreviewDrawerComponent {
  constructor() {
    this.activeOffcanvas = inject(NgbActiveOffcanvas);
    this.seriesService = inject(SeriesService);
    this.imageService = inject(ImageService);
    this.actionService = inject(ActionService);
    this.cdRef = inject(ChangeDetectorRef);
    this.FilterField = FilterField;
    this.libraryId = 0;
    this.isExternalSeries = true;
    this.isLoading = true;
    this.localStaff = [];
    this.url = "";
    this.wantToRead = false;
  }
  get CoverUrl() {
    if (this.isExternalSeries) {
      if (this.externalSeries)
        return this.externalSeries.coverUrl;
      return this.imageService.placeholderImage;
    }
    return this.imageService.getSeriesCoverImage(this.seriesId);
  }
  ngOnInit() {
    if (this.isExternalSeries) {
      this.seriesService.getExternalSeriesDetails(this.aniListId, this.malId).subscribe((externalSeries) => {
        this.externalSeries = externalSeries;
        this.isLoading = false;
        if (this.externalSeries.siteUrl) {
          this.url = this.externalSeries.siteUrl;
        }
        this.cdRef.markForCheck();
      });
    } else {
      this.seriesService.getMetadata(this.seriesId).subscribe((data) => {
        this.localSeries = data;
        if (this.localSeries.summary === "" && this.localSeries.genres.length === 0) {
          this.seriesService.getExternalSeriesDetails(0, 0, this.seriesId).subscribe((externalSeriesData) => {
            this.isExternalSeries = true;
            this.externalSeries = externalSeriesData;
            this.cdRef.markForCheck();
          });
        }
        this.seriesService.isWantToRead(this.seriesId).subscribe((wantToRead) => {
          this.wantToRead = wantToRead;
          this.cdRef.markForCheck();
        });
        this.isLoading = false;
        this.url = "library/" + this.libraryId + "/series/" + this.seriesId;
        this.localStaff = data.writers.map((p) => {
          return { name: p.name, role: "Story & Art" };
        });
        this.cdRef.markForCheck();
      });
    }
  }
  toggleWantToRead() {
    if (this.wantToRead) {
      this.actionService.removeMultipleSeriesFromWantToReadList([this.seriesId]);
    } else {
      this.actionService.addMultipleSeriesToWantToReadList([this.seriesId]);
    }
    this.wantToRead = !this.wantToRead;
    this.cdRef.markForCheck();
  }
  close() {
    this.activeOffcanvas.close();
  }
  static {
    this.\u0275fac = function SeriesPreviewDrawerComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SeriesPreviewDrawerComponent)();
    };
  }
  static {
    this.\u0275cmp = \u0275\u0275defineComponent({ type: _SeriesPreviewDrawerComponent, selectors: [["app-series-preview-drawer"]], inputs: { name: "name", aniListId: "aniListId", malId: "malId", seriesId: "seriesId", libraryId: "libraryId", isExternalSeries: "isExternalSeries" }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 1, vars: 0, consts: [["itemTemplate", ""], [4, "transloco"], [1, "offcanvas-header"], [1, "offcanvas-title"], ["type", "button", 1, "btn-close", "text-reset", 3, "click"], [1, "offcanvas-body"], [1, "mx-auto", "mb-3", 2, "width", "160px"], ["target", "_blank", "rel", "noopener noreferrer", 1, "btn", "btn-primary", "col-12", "mt-2", 3, "href"], [3, "loading"], ["height", "232.91px", "width", "160px", 3, "styles", "imageUrl"], [1, "text-muted", "muted", "mb-2"], [3, "maxLength", "text"], ["width", "20", "height", "20", "alt", "", 1, "ms-1", 3, "ngSrc"], [1, "mt-3"], [3, "tags", "libraryId", "heading"], [3, "tags", "libraryId", "heading", "includeComma"], [1, "dark-exempt", "btn-icon", "not-clickable"], [1, "card", "mb-3"], [1, "row", "g-0"], [1, "col-md-3"], ["height", "24px", "width", "24px", "classes", "person-img", 3, "styles", "imageUrl"], ["aria-hidden", "true", 1, "fa", "fa-user-circle", "align-self-center", "person-img", 2, "font-size", "28px"], [1, "col-md-9"], [1, "card-body"], [1, "card-title"], [1, "card-text", 2, "font-size", "14px"], [1, "text-muted"], [1, "d-inline-block", "mb-2", "mt-2", 2, "width", "100%"], [1, "text-muted", "muted"], [1, "btn", "btn-secondary", "btn-sm", "float-end", "me-3", 3, "click", "ngbTooltip"], ["aria-hidden", "true"], [1, "col-md-4"], ["aria-hidden", "true", 1, "fa", "fa-user-circle", "align-self-center", 2, "font-size", "28px", "margin-top", "24px", "margin-left", "24px"], [1, "col-md-8"]], template: function SeriesPreviewDrawerComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, SeriesPreviewDrawerComponent_ng_container_0_Template, 13, 8, "ng-container", 1);
      }
    }, dependencies: [TranslocoDirective, ImageComponent, LoadingComponent, MetadataDetailComponent, PublicationStatusPipe, ReadMoreComponent, NgbTooltip, NgOptimizedImage, ProviderImagePipe], styles: ["\n\n[_nghost-%COMP%] {\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n}\n  .person-img {\n  margin-top: 24px;\n  margin-left: 24px;\n}\n.muted[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\na.read-more-link[_ngcontent-%COMP%] {\n  white-space: nowrap;\n}\n.not-clickable[_ngcontent-%COMP%] {\n  cursor: text;\n}\n.offcanvas-body[_ngcontent-%COMP%] {\n  mask-image:\n    linear-gradient(\n      to bottom,\n      transparent,\n      black 0%,\n      black 97%,\n      transparent 100%);\n  -webkit-mask-image:\n    linear-gradient(\n      to bottom,\n      transparent,\n      black 0%,\n      black 97%,\n      transparent 100%);\n}\n/*# sourceMappingURL=series-preview-drawer.component.css.map */"], changeDetection: 0 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SeriesPreviewDrawerComponent, { className: "SeriesPreviewDrawerComponent", filePath: "src/app/_single-module/series-preview-drawer/series-preview-drawer.component.ts", lineNumber: 30 });
})();

export {
  SeriesPreviewDrawerComponent
};
//# sourceMappingURL=chunk-3AMMXKYH.js.map
