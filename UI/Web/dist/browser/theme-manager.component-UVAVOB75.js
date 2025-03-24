import {
  SafeUrlPipe
} from "./chunk-R7FGP62P.js";
import {
  CarouselReelComponent
} from "./chunk-RGQOJ2I6.js";
import {
  NgxFileDropComponent,
  NgxFileDropContentTemplateDirective,
  NgxFileDropModule
} from "./chunk-M6XH7OA7.js";
import {
  SentenceCasePipe
} from "./chunk-IQIEDCQT.js";
import {
  DefaultModalOptions
} from "./chunk-ZLESQ73K.js";
import {
  DefaultValuePipe
} from "./chunk-KMTIWVED.js";
import {
  ImageComponent
} from "./chunk-2JLAQ3MZ.js";
import "./chunk-TPURWX2Y.js";
import {
  LoadingComponent
} from "./chunk-D7CIAEAO.js";
import {
  Select2Module
} from "./chunk-LGLLZBOI.js";
import "./chunk-EA72DBFY.js";
import "./chunk-HN36WWH3.js";
import {
  ScrobbleProvider
} from "./chunk-R5PSFMI2.js";
import "./chunk-A6JEQ5GB.js";
import "./chunk-RSMGJKYW.js";
import {
  AccountService,
  ThemeProvider,
  ThemeService
} from "./chunk-U2DWQJI2.js";
import {
  ConfirmService,
  NgbActiveModal,
  NgbModal
} from "./chunk-2R2RCU4Y.js";
import {
  ToastrService
} from "./chunk-5J5IKBMT.js";
import "./chunk-PUXELTB2.js";
import "./chunk-FLGYJHAG.js";
import {
  ReactiveFormsModule
} from "./chunk-BPOUBDX2.js";
import "./chunk-CQADFT7F.js";
import {
  AsyncPipe,
  ChangeDetectorRef,
  DestroyRef,
  NgTemplateOutlet,
  TranslocoDirective,
  __async,
  distinctUntilChanged,
  inject,
  map,
  shareReplay,
  take,
  takeUntilDestroyed,
  tap,
  translate,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMapInterpolate1,
  ɵɵconditional,
  ɵɵdefineComponent,
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
  ɵɵproperty,
  ɵɵpureFunction1,
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

// src/app/shared/_components/carousel-modal/preview-image-modal.component.ts
function PreviewImageModalComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 1)(2, "h4", 2);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 3);
    \u0275\u0275listener("click", function PreviewImageModalComponent_ng_container_0_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.modalService.close());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 4)(6, "a", 5);
    \u0275\u0275pipe(7, "safeUrl");
    \u0275\u0275element(8, "app-image", 6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 7)(10, "button", 8);
    \u0275\u0275listener("click", function PreviewImageModalComponent_ng_container_0_Template_button_click_10_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.modalService.close());
    });
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const t_r3 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.title);
    \u0275\u0275advance();
    \u0275\u0275attribute("aria-label", t_r3("common.close"));
    \u0275\u0275advance(2);
    \u0275\u0275property("href", \u0275\u0275pipeBind1(7, 5, ctx_r1.image), \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(2);
    \u0275\u0275property("imageUrl", ctx_r1.image);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(t_r3("common.cancel"));
  }
}
var PreviewImageModalComponent = class _PreviewImageModalComponent {
  constructor() {
    this.modalService = inject(NgbActiveModal);
    this.title = "";
    this.image = "";
  }
  static {
    this.\u0275fac = function PreviewImageModalComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _PreviewImageModalComponent)();
    };
  }
  static {
    this.\u0275cmp = \u0275\u0275defineComponent({ type: _PreviewImageModalComponent, selectors: [["app-carousel-modal"]], inputs: { title: "title", image: "image" }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 1, vars: 0, consts: [[4, "transloco"], [1, "modal-header"], ["id", "modal-basic-title", 1, "modal-title"], ["type", "button", 1, "btn-close", 3, "click"], [1, "modal-body"], ["target", "_blank", "rel", "noopener noreferrer", 3, "href"], [3, "imageUrl"], [1, "modal-footer"], ["type", "button", 1, "btn", "btn-secondary", 3, "click"]], template: function PreviewImageModalComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, PreviewImageModalComponent_ng_container_0_Template, 12, 7, "ng-container", 0);
      }
    }, dependencies: [
      TranslocoDirective,
      ImageComponent,
      SafeUrlPipe
    ], changeDetection: 0 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PreviewImageModalComponent, { className: "PreviewImageModalComponent", filePath: "src/app/shared/_components/carousel-modal/preview-image-modal.component.ts", lineNumber: 21 });
})();

// src/app/user-settings/theme-manager/theme-manager.component.ts
var _forTrack0 = ($index, $item) => $item.name;
var _c0 = (a0) => ({ $implicit: a0, downloaded: true });
var _c1 = (a0) => ({ $implicit: a0, downloaded: false });
function ThemeManagerComponent_ng_container_0_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 15);
    \u0275\u0275listener("click", function ThemeManagerComponent_ng_container_0_Conditional_2_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.selectTheme(void 0));
    });
    \u0275\u0275element(1, "i", 16);
    \u0275\u0275elementStart(2, "span", 17);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const t_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("title", t_r3("add"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(t_r3("add"));
  }
}
function ThemeManagerComponent_ng_container_0_For_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0, 12);
  }
  if (rf & 2) {
    const theme_r4 = ctx.$implicit;
    \u0275\u0275nextContext();
    const themeOption_r5 = \u0275\u0275reference(25);
    \u0275\u0275property("ngTemplateOutlet", themeOption_r5)("ngTemplateOutletContext", \u0275\u0275pureFunction1(2, _c0, theme_r4));
  }
}
function ThemeManagerComponent_ng_container_0_For_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0, 12);
  }
  if (rf & 2) {
    const theme_r6 = ctx.$implicit;
    \u0275\u0275nextContext();
    const themeOption_r5 = \u0275\u0275reference(25);
    \u0275\u0275property("ngTemplateOutlet", themeOption_r5)("ngTemplateOutletContext", \u0275\u0275pureFunction1(2, _c1, theme_r6));
  }
}
function ThemeManagerComponent_ng_container_0_Conditional_22_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const t_r3 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275textInterpolate1(" ", t_r3("preview-default-admin"), " ");
  }
}
function ThemeManagerComponent_ng_container_0_Conditional_22_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const t_r3 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275textInterpolate1(" ", t_r3("preview-default"), " ");
  }
}
function ThemeManagerComponent_ng_container_0_Conditional_22_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-loading", 22);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("loading", ctx_r1.isUploadingTheme);
  }
}
function ThemeManagerComponent_ng_container_0_Conditional_22_Conditional_9_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 26)(1, "div", 19)(2, "div", 27);
    \u0275\u0275element(3, "i", 28);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 20)(5, "div", 21)(6, "span", 29);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "span", 30);
    \u0275\u0275text(9, "\u2022");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "a", 31);
    \u0275\u0275listener("click", function ThemeManagerComponent_ng_container_0_Conditional_22_Conditional_9_ng_template_1_Template_a_click_10_listener() {
      const openFileSelector_r9 = \u0275\u0275restoreView(_r8).openFileSelector;
      return \u0275\u0275resetView(openFileSelector_r9());
    });
    \u0275\u0275text(11);
    \u0275\u0275elementStart(12, "span", 32);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()()()()()();
  }
  if (rf & 2) {
    const t_r3 = \u0275\u0275nextContext(3).$implicit;
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(t_r3("drag-n-drop"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(t_r3("upload"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", t_r3("upload-continued"), "");
  }
}
function ThemeManagerComponent_ng_container_0_Conditional_22_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ngx-file-drop", 24);
    \u0275\u0275listener("onFileDrop", function ThemeManagerComponent_ng_container_0_Conditional_22_Conditional_9_Template_ngx_file_drop_onFileDrop_0_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.dropped($event));
    });
    \u0275\u0275template(1, ThemeManagerComponent_ng_container_0_Conditional_22_Conditional_9_ng_template_1_Template, 14, 3, "ng-template", 25);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("accept", ctx_r1.acceptableExtensions)("directory", false);
  }
}
function ThemeManagerComponent_ng_container_0_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 18)(1, "div", 19)(2, "div", 20)(3, "div", 21);
    \u0275\u0275template(4, ThemeManagerComponent_ng_container_0_Conditional_22_Conditional_4_Template, 1, 1);
    \u0275\u0275pipe(5, "async");
    \u0275\u0275template(6, ThemeManagerComponent_ng_container_0_Conditional_22_Conditional_6_Template, 1, 1);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275template(7, ThemeManagerComponent_ng_container_0_Conditional_22_Conditional_7_Template, 1, 1, "app-loading", 22);
    \u0275\u0275pipe(8, "async");
    \u0275\u0275template(9, ThemeManagerComponent_ng_container_0_Conditional_22_Conditional_9_Template, 2, 2, "ngx-file-drop", 23);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275conditional(\u0275\u0275pipeBind1(5, 2, ctx_r1.hasAdmin$) ? 4 : 6);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r1.files && ctx_r1.files.length > 0 ? 7 : \u0275\u0275pipeBind1(8, 4, ctx_r1.hasAdmin$) ? 9 : -1);
  }
}
function ThemeManagerComponent_ng_container_0_Conditional_23_Conditional_4_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 39);
    \u0275\u0275listener("click", function ThemeManagerComponent_ng_container_0_Conditional_23_Conditional_4_Conditional_0_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.deleteTheme(ctx_r1.selectedTheme.site));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r3 = \u0275\u0275nextContext(3).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(t_r3("delete"));
  }
}
function ThemeManagerComponent_ng_container_0_Conditional_23_Conditional_4_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 40);
    \u0275\u0275listener("click", function ThemeManagerComponent_ng_container_0_Conditional_23_Conditional_4_Conditional_2_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.updateDefault(ctx_r1.selectedTheme.site));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r3 = \u0275\u0275nextContext(3).$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("disabled", ctx_r1.selectedTheme.site == null ? null : ctx_r1.selectedTheme.site.isDefault);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(t_r3("set-default"));
  }
}
function ThemeManagerComponent_ng_container_0_Conditional_23_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275template(0, ThemeManagerComponent_ng_container_0_Conditional_23_Conditional_4_Conditional_0_Template, 2, 1, "button", 36);
    \u0275\u0275pipe(1, "async");
    \u0275\u0275template(2, ThemeManagerComponent_ng_container_0_Conditional_23_Conditional_4_Conditional_2_Template, 2, 2, "button", 37);
    \u0275\u0275pipe(3, "async");
    \u0275\u0275elementStart(4, "button", 38);
    \u0275\u0275listener("click", function ThemeManagerComponent_ng_container_0_Conditional_23_Conditional_4_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.applyTheme(ctx_r1.selectedTheme.site));
    });
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r3 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275conditional(ctx_r1.selectedTheme.name !== "Dark" && \u0275\u0275pipeBind1(1, 4, ctx_r1.canUseThemes$) ? 0 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(\u0275\u0275pipeBind1(3, 6, ctx_r1.hasAdmin$) ? 2 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r1.currentTheme && ctx_r1.selectedTheme.name === ctx_r1.currentTheme.name);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(t_r3("apply"));
  }
}
function ThemeManagerComponent_ng_container_0_Conditional_23_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 41);
    \u0275\u0275listener("click", function ThemeManagerComponent_ng_container_0_Conditional_23_Conditional_6_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.downloadTheme(ctx_r1.selectedTheme.downloadable));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r3 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("disabled", ctx_r1.selectedTheme.downloadable == null ? null : ctx_r1.selectedTheme.downloadable.alreadyDownloaded);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(t_r3("download"));
  }
}
function ThemeManagerComponent_ng_container_0_Conditional_23_Conditional_7_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-image", 43);
    \u0275\u0275listener("click", function ThemeManagerComponent_ng_container_0_Conditional_23_Conditional_7_ng_template_4_Template_app_image_click_0_listener() {
      const item_r15 = \u0275\u0275restoreView(_r14).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.previewImage(item_r15));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r15 = ctx.$implicit;
    \u0275\u0275property("imageUrl", item_r15);
  }
}
function ThemeManagerComponent_ng_container_0_Conditional_23_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "defaultValue");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "app-carousel-reel", 42);
    \u0275\u0275template(4, ThemeManagerComponent_ng_container_0_Conditional_23_Conditional_7_ng_template_4_Template, 1, 1, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r3 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 3, ctx_r1.selectedTheme.downloadable.description));
    \u0275\u0275advance(2);
    \u0275\u0275property("items", ctx_r1.selectedTheme.downloadable.previewUrls)("title", t_r3("preview-title"));
  }
}
function ThemeManagerComponent_ng_container_0_Conditional_23_Conditional_8_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-image", 43);
    \u0275\u0275listener("click", function ThemeManagerComponent_ng_container_0_Conditional_23_Conditional_8_ng_template_4_Template_app_image_click_0_listener() {
      const item_r17 = \u0275\u0275restoreView(_r16).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.previewImage(item_r17));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r17 = ctx.$implicit;
    \u0275\u0275property("imageUrl", item_r17);
  }
}
function ThemeManagerComponent_ng_container_0_Conditional_23_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "defaultValue");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "app-carousel-reel", 42);
    \u0275\u0275template(4, ThemeManagerComponent_ng_container_0_Conditional_23_Conditional_8_ng_template_4_Template, 1, 1, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r3 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 3, ctx_r1.selectedTheme.site.description));
    \u0275\u0275advance(2);
    \u0275\u0275property("items", ctx_r1.selectedTheme.site.previewUrls)("title", t_r3("preview-title"));
  }
}
function ThemeManagerComponent_ng_container_0_Conditional_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h4");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "sentenceCase");
    \u0275\u0275elementStart(3, "div", 33);
    \u0275\u0275template(4, ThemeManagerComponent_ng_container_0_Conditional_23_Conditional_4_Template, 6, 8, "button", 34);
    \u0275\u0275pipe(5, "async");
    \u0275\u0275template(6, ThemeManagerComponent_ng_container_0_Conditional_23_Conditional_6_Template, 2, 2, "button", 35);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(7, ThemeManagerComponent_ng_container_0_Conditional_23_Conditional_7_Template, 6, 5)(8, ThemeManagerComponent_ng_container_0_Conditional_23_Conditional_8_Template, 6, 5);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 3, ctx_r1.selectedTheme.name), " ");
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r1.selectedTheme.isSiteTheme ? 4 : \u0275\u0275pipeBind1(5, 5, ctx_r1.canUseThemes$) ? 6 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(!ctx_r1.selectedTheme.isSiteTheme ? 7 : 8);
  }
}
function ThemeManagerComponent_ng_container_0_ng_template_24_Conditional_0_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 48);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r19 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("v", item_r19.compatibleVersion, "");
  }
}
function ThemeManagerComponent_ng_container_0_ng_template_24_Conditional_0_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 48);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r19 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("v", item_r19.lastCompatibleVersion, "");
  }
}
function ThemeManagerComponent_ng_container_0_ng_template_24_Conditional_0_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 49);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r3 = \u0275\u0275nextContext(3).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(t_r3("active-theme"));
  }
}
function ThemeManagerComponent_ng_container_0_ng_template_24_Conditional_0_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 50);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r3 = \u0275\u0275nextContext(3).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(t_r3("default-theme"));
  }
}
function ThemeManagerComponent_ng_container_0_ng_template_24_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li", 45);
    \u0275\u0275listener("click", function ThemeManagerComponent_ng_container_0_ng_template_24_Conditional_0_Template_li_click_0_listener() {
      \u0275\u0275restoreView(_r18);
      const item_r19 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.selectTheme(item_r19));
    });
    \u0275\u0275elementStart(1, "div", 46)(2, "div", 47);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "sentenceCase");
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, ThemeManagerComponent_ng_container_0_ng_template_24_Conditional_0_Conditional_5_Template, 2, 1, "span", 48)(6, ThemeManagerComponent_ng_container_0_ng_template_24_Conditional_0_Conditional_6_Template, 2, 1, "span", 48)(7, ThemeManagerComponent_ng_container_0_ng_template_24_Conditional_0_Conditional_7_Template, 2, 1, "span", 49)(8, ThemeManagerComponent_ng_container_0_ng_template_24_Conditional_0_Conditional_8_Template, 2, 1, "span", 50);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r19 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classMapInterpolate1("list-group-item d-flex justify-content-between align-items-start ", ctx_r1.selectedTheme && ctx_r1.selectedTheme.name === item_r19.name ? "active" : "", "");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 7, item_r19.name));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(item_r19.provider !== ctx_r1.ThemeProvider.System && item_r19.compatibleVersion ? 5 : item_r19.hasOwnProperty("lastCompatibleVersion") ? 6 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.currentTheme && item_r19.name === ctx_r1.currentTheme.name ? 7 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(item_r19.hasOwnProperty("isDefault") && item_r19.isDefault ? 8 : -1);
  }
}
function ThemeManagerComponent_ng_container_0_ng_template_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, ThemeManagerComponent_ng_container_0_ng_template_24_Conditional_0_Template, 9, 9, "li", 44);
  }
  if (rf & 2) {
    const item_r19 = ctx.$implicit;
    \u0275\u0275conditional(item_r19 !== void 0 ? 0 : -1);
  }
}
function ThemeManagerComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 3);
    \u0275\u0275template(2, ThemeManagerComponent_ng_container_0_Conditional_2_Template, 4, 2, "button", 4);
    \u0275\u0275pipe(3, "async");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 5);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 6)(7, "div", 7)(8, "div", 8)(9, "ul", 9)(10, "li", 10)(11, "div", 11);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
    \u0275\u0275repeaterCreate(13, ThemeManagerComponent_ng_container_0_For_14_Template, 1, 4, "ng-container", 12, _forTrack0);
    \u0275\u0275elementStart(15, "li", 10)(16, "div", 11);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd()();
    \u0275\u0275repeaterCreate(18, ThemeManagerComponent_ng_container_0_For_19_Template, 1, 4, "ng-container", 12, _forTrack0);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(20, "div", 13)(21, "div", 14);
    \u0275\u0275template(22, ThemeManagerComponent_ng_container_0_Conditional_22_Template, 10, 6)(23, ThemeManagerComponent_ng_container_0_Conditional_23_Template, 9, 7);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(24, ThemeManagerComponent_ng_container_0_ng_template_24_Template, 1, 1, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const t_r3 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275conditional(\u0275\u0275pipeBind1(3, 5, ctx_r1.hasAdmin$) ? 2 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(t_r3("description"));
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(t_r3("downloaded"));
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.downloadedThemes);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(t_r3("downloadable"));
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.downloadableThemes);
    \u0275\u0275advance(4);
    \u0275\u0275conditional(ctx_r1.selectedTheme === void 0 ? 22 : 23);
  }
}
var ThemeManagerComponent = class _ThemeManagerComponent {
  constructor() {
    this.destroyRef = inject(DestroyRef);
    this.themeService = inject(ThemeService);
    this.accountService = inject(AccountService);
    this.toastr = inject(ToastrService);
    this.cdRef = inject(ChangeDetectorRef);
    this.confirmService = inject(ConfirmService);
    this.modalService = inject(NgbModal);
    this.ThemeProvider = ThemeProvider;
    this.ScrobbleProvider = ScrobbleProvider;
    this.downloadableThemes = [];
    this.downloadedThemes = [];
    this.hasAdmin$ = this.accountService.currentUser$.pipe(takeUntilDestroyed(this.destroyRef), map((c) => c && this.accountService.hasAdminRole(c)), shareReplay({ refCount: true, bufferSize: 1 }));
    this.canUseThemes$ = this.accountService.currentUser$.pipe(takeUntilDestroyed(this.destroyRef), map((c) => c && !this.accountService.hasReadOnlyRole(c)), shareReplay({ refCount: true, bufferSize: 1 }));
    this.files = [];
    this.acceptableExtensions = [".css"].join(",");
    this.isUploadingTheme = false;
    this.themeService.themes$.pipe(tap((themes) => {
      this.downloadedThemes = themes;
      this.cdRef.markForCheck();
    })).subscribe();
    this.loadDownloadableThemes();
    this.themeService.currentTheme$.pipe(takeUntilDestroyed(this.destroyRef), distinctUntilChanged()).subscribe((theme) => {
      this.currentTheme = theme;
      this.cdRef.markForCheck();
    });
  }
  loadDownloadableThemes() {
    this.themeService.getDownloadableThemes().subscribe((d) => {
      this.downloadableThemes = d;
      this.cdRef.markForCheck();
    });
  }
  deleteTheme(theme) {
    return __async(this, null, function* () {
      if (!(yield this.confirmService.confirm(translate("toasts.confirm-delete-theme")))) {
        return;
      }
      this.themeService.deleteTheme(theme.id).subscribe((_) => {
        this.removeDownloadedTheme(theme);
        this.loadDownloadableThemes();
      });
    });
  }
  removeDownloadedTheme(theme) {
    this.selectedTheme = void 0;
    this.downloadableThemes = this.downloadableThemes.filter((d) => d.name !== theme.name);
    this.cdRef.markForCheck();
  }
  applyTheme(theme) {
    this.accountService.currentUser$.pipe(take(1)).subscribe((user) => {
      if (!user)
        return;
      const pref = Object.assign({}, user.preferences);
      pref.theme = theme;
      this.accountService.updatePreferences(pref).subscribe();
    });
  }
  updateDefault(theme) {
    this.themeService.setDefault(theme.id).subscribe(() => {
      this.toastr.success(translate("theme-manager.updated-toastr", { name: theme.name }));
    });
  }
  selectTheme(theme) {
    if (theme === void 0) {
      this.selectedTheme = void 0;
      return;
    }
    if (theme.hasOwnProperty("provider")) {
      this.selectedTheme = {
        isSiteTheme: true,
        site: theme,
        name: theme.name
      };
    } else {
      this.selectedTheme = {
        isSiteTheme: false,
        downloadable: theme,
        name: theme.name
      };
    }
    this.cdRef.markForCheck();
  }
  downloadTheme(theme) {
    this.themeService.downloadTheme(theme).subscribe((downloadedTheme) => {
      this.removeDownloadedTheme(downloadedTheme);
      this.themeService.getThemes().subscribe((themes) => {
        this.downloadedThemes = themes;
        const oldTheme = this.downloadedThemes.filter((d) => d.name === theme.name)[0];
        this.selectTheme(oldTheme);
        this.cdRef.markForCheck();
      });
    });
  }
  dropped(files) {
    this.files = files;
    for (const droppedFile of files) {
      if (droppedFile.fileEntry.isFile) {
        const fileEntry = droppedFile.fileEntry;
        fileEntry.file((file) => {
          this.themeService.uploadTheme(file, droppedFile).subscribe((t) => {
            this.isUploadingTheme = false;
            this.cdRef.markForCheck();
          });
        });
      }
    }
    this.isUploadingTheme = true;
    this.cdRef.markForCheck();
  }
  previewImage(imgUrl) {
    if (imgUrl === "")
      return;
    const ref = this.modalService.open(PreviewImageModalComponent, DefaultModalOptions);
    ref.componentInstance.title = this.selectedTheme.name;
    ref.componentInstance.image = imgUrl;
  }
  static {
    this.\u0275fac = function ThemeManagerComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ThemeManagerComponent)();
    };
  }
  static {
    this.\u0275cmp = \u0275\u0275defineComponent({ type: _ThemeManagerComponent, selectors: [["app-theme-manager"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 1, vars: 1, consts: [["themeOption", ""], ["carouselItem", ""], [4, "transloco", "translocoRead"], [1, "position-relative"], [1, "btn", "btn-primary-outline", "position-absolute", "custom-position", 3, "title"], [1, "ps-2"], [1, "row", "g-0", "theme-container"], [1, "col-lg-3", "col-md-5", "col-sm-7", "col-xs-7", "scroller"], [1, "pe-2"], [1, "list-group", "list-group-flush", 2, "height", "100%"], ["aria-hidden", "true", 1, "list-group-item", "d-flex", "justify-content-between", "align-items-start", 2, "height", "40px"], [1, "fw-bold", "section-header"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "col-lg-9", "col-md-7", "col-sm-4", "col-xs-4", "ps-3"], [1, "card", "p-3"], [1, "btn", "btn-primary-outline", "position-absolute", "custom-position", 3, "click", "title"], ["aria-hidden", "true", 1, "fa", "fa-plus"], [1, "phone-hidden", "ms-1"], [1, "row", "pb-4"], [1, "mx-auto"], [1, "d-flex", "justify-content-center"], [1, "d-flex", "justify-content-evenly"], [3, "loading"], ["dropZoneClassName", "file-upload", "contentClassName", "file-upload-zone", 3, "accept", "directory"], ["dropZoneClassName", "file-upload", "contentClassName", "file-upload-zone", 3, "onFileDrop", "accept", "directory"], ["ngx-file-drop-content-tmp", ""], [1, "row", "g-0", "mt-3", "pb-3"], [1, "row", "g-0", "mb-3"], ["aria-hidden", "true", 1, "fa", "fa-file-upload", "mx-auto", 2, "font-size", "24px", "width", "20px"], ["href", "javascript:void(0)", 1, "pe-0"], [1, "ps-1", "pe-1"], ["href", "javascript:void(0)", 1, "pe-0", 3, "click"], [1, "phone-hidden"], [1, "float-end"], [1, "btn", "btn-primary", "me-1", 3, "disabled"], [1, "btn", "btn-primary", 3, "disabled"], [1, "btn", "btn-danger", "me-1"], [1, "btn", "btn-secondary", "me-1", 3, "disabled"], [1, "btn", "btn-primary", "me-1", 3, "click", "disabled"], [1, "btn", "btn-danger", "me-1", 3, "click"], [1, "btn", "btn-secondary", "me-1", 3, "click", "disabled"], [1, "btn", "btn-primary", 3, "click", "disabled"], [3, "items", "title"], ["height", "108px", "width", "260px", 3, "click", "imageUrl"], [3, "class"], [3, "click"], [1, "ms-2", "me-auto"], [1, "fw-bold"], [1, "pill", "p-1", "me-1", "version"], [1, "pill", "p-1", "active"], [1, "pill", "p-1", "ms-1"]], template: function ThemeManagerComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, ThemeManagerComponent_ng_container_0_Template, 26, 7, "ng-container", 2);
      }
      if (rf & 2) {
        \u0275\u0275property("translocoRead", "theme-manager");
      }
    }, dependencies: [
      AsyncPipe,
      SentenceCasePipe,
      TranslocoDirective,
      CarouselReelComponent,
      ImageComponent,
      DefaultValuePipe,
      NgTemplateOutlet,
      NgxFileDropModule,
      NgxFileDropComponent,
      NgxFileDropContentTemplateDirective,
      ReactiveFormsModule,
      Select2Module,
      LoadingComponent
    ], styles: ["\n\n.chooser[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, 160px);\n  grid-gap: 0.5rem;\n  justify-content: space-around;\n}\n.scroller[_ngcontent-%COMP%] {\n  max-height: calc(100dvh - 180px);\n  overflow-y: auto;\n}\n@media (max-width: 576px) {\n  .scroller[_ngcontent-%COMP%] {\n    max-height: calc(100dvh - 480px);\n  }\n}\n.pill[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  background-color: var(--card-bg-color);\n  border-radius: 0.375rem;\n  color: var(--badge-text-color);\n}\n.pill.active[_ngcontent-%COMP%] {\n  background-color: var(--primary-color);\n}\n.list-group-item[_ngcontent-%COMP%] {\n  background-color: transparent;\n}\n.list-group-item[_ngcontent-%COMP%]:hover {\n  background-color: var(--card-bg-color);\n  border-radius: 5px;\n}\n.list-group-item[_ngcontent-%COMP%]:active, \n.list-group-item.active[_ngcontent-%COMP%] {\n  background-color: var(--card-bg-color);\n  border-radius: 5px;\n}\n.list-group-item[_ngcontent-%COMP%], \n.list-group-item.active[_ngcontent-%COMP%] {\n  border-top-width: 0;\n  border-bottom-width: 0;\n}\n.card[_ngcontent-%COMP%] {\n  min-height: 100%;\n}\nngx-file-drop[_ngcontent-%COMP%]     > div {\n  width: 100%;\n  border: 2px solid var(--primary-color);\n  border-radius: 5px;\n  height: 100px;\n  margin: auto;\n}\nngx-file-drop[_ngcontent-%COMP%]     > div > div {\n  width: 100%;\n  display: inline-block;\n}\n.custom-position[_ngcontent-%COMP%] {\n  right: 15px;\n  top: -42px;\n}\n.section-header[_ngcontent-%COMP%] {\n  color: var(--primary-color);\n}\n/*# sourceMappingURL=theme-manager.component.css.map */"], changeDetection: 0 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ThemeManagerComponent, { className: "ThemeManagerComponent", filePath: "src/app/user-settings/theme-manager/theme-manager.component.ts", lineNumber: 50 });
})();
export {
  ThemeManagerComponent
};
//# sourceMappingURL=theme-manager.component-UVAVOB75.js.map
