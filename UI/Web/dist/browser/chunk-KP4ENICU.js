import {
  EditChapterProgressComponent
} from "./chunk-ARJ4KDAL.js";
import {
  EntityTitleComponent
} from "./chunk-OCFISI54.js";
import {
  ReadTimePipe
} from "./chunk-SXNBP4JN.js";
import {
  CompactNumberPipe
} from "./chunk-AFXXYIIH.js";
import {
  ActionService,
  CoverImageChooserComponent,
  UploadService,
  VolumeService
} from "./chunk-HTPJQXUV.js";
import {
  SettingButtonComponent
} from "./chunk-4AQVNEIP.js";
import {
  DefaultDatePipe
} from "./chunk-DMXJBIB5.js";
import {
  DownloadService
} from "./chunk-CVI764VQ.js";
import {
  BytesPipe
} from "./chunk-C423WP7Y.js";
import {
  UtcToLocalTimePipe
} from "./chunk-2L2JQBKQ.js";
import {
  ImageService
} from "./chunk-TPURWX2Y.js";
import {
  PersonRole
} from "./chunk-IBO6ECG5.js";
import {
  SettingItemComponent
} from "./chunk-KJWRNOWO.js";
import {
  Breakpoint,
  UtilityService
} from "./chunk-A6JEQ5GB.js";
import {
  MangaFormat
} from "./chunk-RSMGJKYW.js";
import {
  AccountService,
  Action,
  ActionFactoryService
} from "./chunk-U2DWQJI2.js";
import {
  NgbActiveModal,
  NgbNav,
  NgbNavContent,
  NgbNavItem,
  NgbNavLink,
  NgbNavOutlet
} from "./chunk-2R2RCU4Y.js";
import {
  FormControl,
  FormGroup,
  FormGroupDirective,
  FormsModule,
  NgControlStatusGroup,
  ReactiveFormsModule,
  ɵNgNoValidate
} from "./chunk-BPOUBDX2.js";
import {
  ChangeDetectorRef,
  NgClass,
  TranslocoDirective,
  __async,
  forkJoin,
  inject,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMapInterpolate1,
  ɵɵconditional,
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
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpropertyInterpolate,
  ɵɵpureFunction1,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-PYHIUVNJ.js";

// src/app/_single-module/edit-volume-modal/edit-volume-modal.component.ts
var _forTrack0 = ($index, $item) => $item.id;
var _forTrack1 = ($index, $item) => $item.action;
var _c0 = (a0) => ({ "d-flex": a0 });
var _c1 = (a0) => ({ num: a0 });
function EditVolumeModalComponent_ng_container_0_ng_template_14_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "compactNumber");
  }
  if (rf & 2) {
    const t_r3 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275textInterpolate1(" ", t_r3("pages-count", \u0275\u0275pureFunction1(3, _c1, \u0275\u0275pipeBind1(1, 1, ctx_r1.volume.pages))), " ");
  }
}
function EditVolumeModalComponent_ng_container_0_ng_template_14_ng_template_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "compactNumber");
  }
  if (rf & 2) {
    const t_r3 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275textInterpolate1(" ", t_r3("words-count", \u0275\u0275pureFunction1(3, _c1, \u0275\u0275pipeBind1(1, 1, ctx_r1.volume.wordCount))), " ");
  }
}
function EditVolumeModalComponent_ng_container_0_ng_template_14_ng_template_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "readTime");
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(1, 1, ctx_r1.volume), " ");
  }
}
function EditVolumeModalComponent_ng_container_0_ng_template_14_ng_template_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "bytes");
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(1, 1, ctx_r1.size), " ");
  }
}
function EditVolumeModalComponent_ng_container_0_ng_template_14_ng_template_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "utcToLocalTime");
    \u0275\u0275pipe(2, "defaultDate");
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 4, \u0275\u0275pipeBind2(1, 1, ctx_r1.volume.createdUtc, "short")), " ");
  }
}
function EditVolumeModalComponent_ng_container_0_ng_template_14_ng_template_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275textInterpolate1(" ", ctx_r1.volume.id, " ");
  }
}
function EditVolumeModalComponent_ng_container_0_ng_template_14_Conditional_33_ng_template_1_For_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "span");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 22);
    \u0275\u0275text(4, "\u2022");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span");
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "bytes");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const file_r4 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(file_r4.filePath);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(7, 2, file_r4.bytes));
  }
}
function EditVolumeModalComponent_ng_container_0_ng_template_14_Conditional_33_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, EditVolumeModalComponent_ng_container_0_ng_template_14_Conditional_33_ng_template_1_For_1_Template, 8, 4, "div", null, _forTrack0);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275repeater(ctx_r1.files);
  }
}
function EditVolumeModalComponent_ng_container_0_ng_template_14_Conditional_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "app-setting-item", 21);
    \u0275\u0275template(1, EditVolumeModalComponent_ng_container_0_ng_template_14_Conditional_33_ng_template_1_Template, 2, 0, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r3 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275property("title", t_r3("files-label"))("toggleOnViewClick", false)("showEdit", false);
  }
}
function EditVolumeModalComponent_ng_container_0_ng_template_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 18)(1, "div", 19)(2, "div", 20)(3, "app-setting-item", 21);
    \u0275\u0275template(4, EditVolumeModalComponent_ng_container_0_ng_template_14_ng_template_4_Template, 2, 5, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(6, "div", 19)(7, "div", 20)(8, "app-setting-item", 21);
    \u0275\u0275template(9, EditVolumeModalComponent_ng_container_0_ng_template_14_ng_template_9_Template, 2, 5, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(11, "div", 18)(12, "div", 19)(13, "div", 20)(14, "app-setting-item", 21);
    \u0275\u0275template(15, EditVolumeModalComponent_ng_container_0_ng_template_14_ng_template_15_Template, 2, 3, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(17, "div", 19)(18, "div", 20)(19, "app-setting-item", 21);
    \u0275\u0275template(20, EditVolumeModalComponent_ng_container_0_ng_template_14_ng_template_20_Template, 2, 3, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(22, "div", 18)(23, "div", 19)(24, "div", 20)(25, "app-setting-item", 21);
    \u0275\u0275template(26, EditVolumeModalComponent_ng_container_0_ng_template_14_ng_template_26_Template, 3, 6, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(28, "div", 19)(29, "div", 20)(30, "app-setting-item", 21);
    \u0275\u0275template(31, EditVolumeModalComponent_ng_container_0_ng_template_14_ng_template_31_Template, 1, 1, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275template(33, EditVolumeModalComponent_ng_container_0_ng_template_14_Conditional_33_Template, 3, 3, "app-setting-item", 21);
  }
  if (rf & 2) {
    const t_r3 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275property("title", t_r3("pages-label"))("toggleOnViewClick", false)("showEdit", false);
    \u0275\u0275advance(5);
    \u0275\u0275property("title", t_r3("words-label"))("toggleOnViewClick", false)("showEdit", false);
    \u0275\u0275advance(6);
    \u0275\u0275property("title", t_r3("read-time-label"))("toggleOnViewClick", false)("showEdit", false);
    \u0275\u0275advance(5);
    \u0275\u0275property("title", t_r3("size-label"))("toggleOnViewClick", false)("showEdit", false);
    \u0275\u0275advance(6);
    \u0275\u0275property("title", t_r3("date-added-label"))("toggleOnViewClick", false)("showEdit", false);
    \u0275\u0275advance(5);
    \u0275\u0275property("title", t_r3("id-label"))("toggleOnViewClick", false)("showEdit", false);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r1.user && ctx_r1.accountService.hasAdminRole(ctx_r1.user) ? 33 : -1);
  }
}
function EditVolumeModalComponent_ng_container_0_Conditional_15_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p", 23);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "app-cover-image-chooser", 24);
    \u0275\u0275twoWayListener("imageUrlsChange", function EditVolumeModalComponent_ng_container_0_Conditional_15_ng_template_3_Template_app_cover_image_chooser_imageUrlsChange_2_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(3);
      \u0275\u0275twoWayBindingSet(ctx_r1.imageUrls, $event) || (ctx_r1.imageUrls = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("imageSelected", function EditVolumeModalComponent_ng_container_0_Conditional_15_ng_template_3_Template_app_cover_image_chooser_imageSelected_2_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.updateSelectedIndex($event));
    })("selectedBase64Url", function EditVolumeModalComponent_ng_container_0_Conditional_15_ng_template_3_Template_app_cover_image_chooser_selectedBase64Url_2_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.updateSelectedImage($event));
    })("resetClicked", function EditVolumeModalComponent_ng_container_0_Conditional_15_ng_template_3_Template_app_cover_image_chooser_resetClicked_2_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.handleReset());
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r3 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", t_r3("cover-image-description"), " ");
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("imageUrls", ctx_r1.imageUrls);
    \u0275\u0275property("showReset", true);
  }
}
function EditVolumeModalComponent_ng_container_0_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 11)(1, "a", 12);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, EditVolumeModalComponent_ng_container_0_Conditional_15_ng_template_3_Template, 3, 3, "ng-template", 13);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r3 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("ngbNavItem", ctx_r1.TabID.CoverImage);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r3(ctx_r1.TabID.CoverImage));
  }
}
function EditVolumeModalComponent_ng_container_0_ng_template_19_For_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h6");
    \u0275\u0275element(1, "app-entity-title", 25);
    \u0275\u0275elementEnd();
    \u0275\u0275element(2, "app-edit-chapter-progress", 26)(3, "div", 27);
  }
  if (rf & 2) {
    const chapter_r6 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("entity", chapter_r6)("prioritizeTitleName", false);
    \u0275\u0275advance();
    \u0275\u0275property("chapter", chapter_r6);
  }
}
function EditVolumeModalComponent_ng_container_0_ng_template_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, EditVolumeModalComponent_ng_container_0_ng_template_19_For_1_Template, 4, 3, null, null, _forTrack0);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275repeater(ctx_r1.volume.chapters);
  }
}
function EditVolumeModalComponent_ng_container_0_ng_template_23_For_1_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 28)(1, "app-setting-button", 29)(2, "button", 30);
    \u0275\u0275listener("click", function EditVolumeModalComponent_ng_container_0_ng_template_23_For_1_Conditional_0_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r7);
      const task_r8 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.runTask(task_r8));
    });
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const task_r8 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("subtitle", task_r8.description);
    \u0275\u0275advance();
    \u0275\u0275classMapInterpolate1("btn btn-", task_r8.action === ctx_r1.Action.Delete ? "danger" : "secondary", " btn-sm mb-2");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(task_r8.title);
  }
}
function EditVolumeModalComponent_ng_container_0_ng_template_23_For_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, EditVolumeModalComponent_ng_container_0_ng_template_23_For_1_Conditional_0_Template, 4, 5, "div", 28);
  }
  if (rf & 2) {
    const task_r8 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275conditional(ctx_r1.accountService.canInvokeAction(ctx_r1.user, task_r8.action) ? 0 : -1);
  }
}
function EditVolumeModalComponent_ng_container_0_ng_template_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, EditVolumeModalComponent_ng_container_0_ng_template_23_For_1_Template, 1, 1, null, null, _forTrack1);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275repeater(ctx_r1.tasks);
  }
}
function EditVolumeModalComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 3)(2, "div", 4)(3, "h4", 5);
    \u0275\u0275text(4);
    \u0275\u0275element(5, "app-entity-title", 6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "button", 7);
    \u0275\u0275listener("click", function EditVolumeModalComponent_ng_container_0_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.close());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 8)(8, "form", 9)(9, "ul", 10, 0);
    \u0275\u0275twoWayListener("activeIdChange", function EditVolumeModalComponent_ng_container_0_Template_ul_activeIdChange_9_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.activeId, $event) || (ctx_r1.activeId = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(11, "li", 11)(12, "a", 12);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275template(14, EditVolumeModalComponent_ng_container_0_ng_template_14_Template, 34, 19, "ng-template", 13);
    \u0275\u0275elementEnd();
    \u0275\u0275template(15, EditVolumeModalComponent_ng_container_0_Conditional_15_Template, 4, 2, "li", 11);
    \u0275\u0275elementStart(16, "li", 11)(17, "a", 12);
    \u0275\u0275text(18);
    \u0275\u0275elementEnd();
    \u0275\u0275template(19, EditVolumeModalComponent_ng_container_0_ng_template_19_Template, 2, 0, "ng-template", 13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "li", 11)(21, "a", 12);
    \u0275\u0275text(22);
    \u0275\u0275elementEnd();
    \u0275\u0275template(23, EditVolumeModalComponent_ng_container_0_ng_template_23_Template, 2, 0, "ng-template", 13);
    \u0275\u0275elementEnd()()();
    \u0275\u0275element(24, "div", 14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "div", 15)(26, "button", 16);
    \u0275\u0275listener("click", function EditVolumeModalComponent_ng_container_0_Template_button_click_26_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.close());
    });
    \u0275\u0275text(27);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "button", 17);
    \u0275\u0275listener("click", function EditVolumeModalComponent_ng_container_0_Template_button_click_28_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.save());
    });
    \u0275\u0275text(29);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const t_r3 = ctx.$implicit;
    const nav_r9 = \u0275\u0275reference(10);
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", t_r3("title"), " ");
    \u0275\u0275advance();
    \u0275\u0275property("libraryType", ctx_r1.libraryType)("entity", ctx_r1.volume)("prioritizeTitleName", false);
    \u0275\u0275advance();
    \u0275\u0275attribute("aria-label", t_r3("close"));
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(23, _c0, ctx_r1.utilityService.getActiveBreakpoint() !== ctx_r1.Breakpoint.Mobile));
    \u0275\u0275advance();
    \u0275\u0275property("formGroup", ctx_r1.editForm);
    \u0275\u0275advance();
    \u0275\u0275propertyInterpolate("orientation", ctx_r1.utilityService.getActiveBreakpoint() === ctx_r1.Breakpoint.Mobile ? "horizontal" : "vertical");
    \u0275\u0275twoWayProperty("activeId", ctx_r1.activeId);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngbNavItem", ctx_r1.TabID.Info);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r3(ctx_r1.TabID.Info));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.user && ctx_r1.accountService.hasAdminRole(ctx_r1.user) ? 15 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("ngbNavItem", ctx_r1.TabID.Progress);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r3(ctx_r1.TabID.Progress));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngbNavItem", ctx_r1.TabID.Tasks);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r3(ctx_r1.TabID.Tasks));
    \u0275\u0275advance(2);
    \u0275\u0275classMapInterpolate1("tab-content ", ctx_r1.utilityService.getActiveBreakpoint() === ctx_r1.Breakpoint.Mobile ? "mt-3" : "ms-4 flex-fill", "");
    \u0275\u0275property("ngbNavOutlet", nav_r9);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(t_r3("close"));
    \u0275\u0275advance();
    \u0275\u0275property("disabled", !ctx_r1.editForm.valid);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(t_r3("save"));
  }
}
var TabID;
(function(TabID2) {
  TabID2["General"] = "general-tab";
  TabID2["CoverImage"] = "cover-image-tab";
  TabID2["Info"] = "info-tab";
  TabID2["Tasks"] = "tasks-tab";
  TabID2["Progress"] = "progress-tab";
})(TabID || (TabID = {}));
var blackList = [Action.Edit, Action.IncognitoRead, Action.AddToReadingList];
var EditVolumeModalComponent = class _EditVolumeModalComponent {
  constructor() {
    this.modal = inject(NgbActiveModal);
    this.utilityService = inject(UtilityService);
    this.imageService = inject(ImageService);
    this.uploadService = inject(UploadService);
    this.cdRef = inject(ChangeDetectorRef);
    this.accountService = inject(AccountService);
    this.actionFactoryService = inject(ActionFactoryService);
    this.actionService = inject(ActionService);
    this.downloadService = inject(DownloadService);
    this.volumeService = inject(VolumeService);
    this.Breakpoint = Breakpoint;
    this.TabID = TabID;
    this.Action = Action;
    this.PersonRole = PersonRole;
    this.MangaFormat = MangaFormat;
    this.activeId = TabID.Info;
    this.editForm = new FormGroup({});
    this.selectedCover = "";
    this.coverImageReset = false;
    this.tasks = this.actionFactoryService.getActionablesForSettingsPage(this.actionFactoryService.getVolumeActions(this.runTask.bind(this)), blackList);
    this.imageUrls = [];
    this.size = 0;
    this.files = [];
    this.accountService.currentUser$.subscribe((user) => {
      this.user = user;
      if (!this.accountService.hasAdminRole(user)) {
        this.activeId = TabID.Info;
      }
      this.cdRef.markForCheck();
    });
  }
  ngOnInit() {
    this.initVolume = Object.assign({}, this.volume);
    this.imageUrls.push(this.imageService.getVolumeCoverImage(this.volume.id));
    this.files = this.volume.chapters.flatMap((c) => c.files);
    this.size = this.files.reduce((sum, v) => sum + v.bytes, 0);
    this.editForm.addControl("coverImageIndex", new FormControl(0, []));
    this.editForm.addControl("coverImageLocked", new FormControl(this.volume.coverImageLocked, []));
  }
  close() {
    this.modal.dismiss();
  }
  save() {
    const selectedIndex = this.editForm.get("coverImageIndex")?.value || 0;
    const apis = [];
    if (selectedIndex > 0 || this.coverImageReset) {
      apis.push(this.uploadService.updateVolumeCoverImage(this.volume.id, this.selectedCover, !this.coverImageReset));
    }
    forkJoin(apis).subscribe((results) => {
      this.modal.close({ success: true, volume: this.volume, coverImageUpdate: selectedIndex > 0 || this.coverImageReset, needsReload: false, isDeleted: false });
    });
  }
  runTask(action) {
    return __async(this, null, function* () {
      switch (action.action) {
        case Action.MarkAsRead:
          this.actionService.markVolumeAsRead(this.seriesId, this.volume, (p) => {
            this.volume.pagesRead = p.pagesRead;
            this.cdRef.markForCheck();
          });
          break;
        case Action.MarkAsUnread:
          this.actionService.markVolumeAsUnread(this.seriesId, this.volume, (p) => {
            this.volume.pagesRead = 0;
            this.cdRef.markForCheck();
          });
          break;
        case Action.Delete:
          yield this.actionService.deleteVolume(this.volume.id, (b) => {
            if (!b)
              return;
            this.modal.close({ success: b, volume: this.volume, coverImageUpdate: false, needsReload: true, isDeleted: b });
          });
          break;
        case Action.Download:
          this.downloadService.download("volume", this.volume);
          break;
      }
    });
  }
  updateSelectedIndex(index) {
    this.editForm.patchValue({
      coverImageIndex: index
    });
    this.cdRef.markForCheck();
  }
  updateSelectedImage(url) {
    this.selectedCover = url;
    this.cdRef.markForCheck();
  }
  handleReset() {
    this.coverImageReset = true;
    this.editForm.patchValue({
      coverImageLocked: false
    });
    this.cdRef.markForCheck();
  }
  static {
    this.\u0275fac = function EditVolumeModalComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _EditVolumeModalComponent)();
    };
  }
  static {
    this.\u0275cmp = \u0275\u0275defineComponent({ type: _EditVolumeModalComponent, selectors: [["app-edit-volume-modal"]], inputs: { volume: "volume", libraryType: "libraryType", libraryId: "libraryId", seriesId: "seriesId" }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 1, vars: 1, consts: [["nav", "ngbNav"], ["view", ""], [4, "transloco", "translocoRead"], [1, "modal-container"], [1, "modal-header"], [1, "modal-title"], [3, "libraryType", "entity", "prioritizeTitleName"], ["type", "button", 1, "btn-close", 3, "click"], [1, "modal-body", "scrollable-modal", 3, "ngClass"], [3, "formGroup"], ["ngbNav", "", 1, "nav-pills", 2, "min-width", "135px", 3, "activeIdChange", "activeId", "orientation"], [3, "ngbNavItem"], ["ngbNavLink", ""], ["ngbNavContent", ""], [3, "ngbNavOutlet"], [1, "modal-footer"], ["type", "button", 1, "btn", "btn-secondary", 3, "click"], ["type", "submit", 1, "btn", "btn-primary", 3, "click", "disabled"], [1, "row"], [1, "col-lg-6", "col-md-12", "pe-2"], [1, "mb-3"], [3, "title", "toggleOnViewClick", "showEdit"], [1, "ms-2", "me-2"], ["role", "alert", 1, "alert", "alert-warning"], [3, "imageUrlsChange", "imageSelected", "selectedBase64Url", "resetClicked", "imageUrls", "showReset"], [3, "entity", "prioritizeTitleName"], [3, "chapter"], [1, "setting-section-break"], [1, "mt-3", "mb-3"], [3, "subtitle"], [3, "click"]], template: function EditVolumeModalComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, EditVolumeModalComponent_ng_container_0_Template, 30, 25, "ng-container", 2);
      }
      if (rf & 2) {
        \u0275\u0275property("translocoRead", "edit-volume-modal");
      }
    }, dependencies: [
      FormsModule,
      \u0275NgNoValidate,
      NgControlStatusGroup,
      NgbNav,
      NgbNavContent,
      NgbNavLink,
      TranslocoDirective,
      NgbNavOutlet,
      ReactiveFormsModule,
      FormGroupDirective,
      NgbNavItem,
      SettingItemComponent,
      NgClass,
      EntityTitleComponent,
      SettingButtonComponent,
      CoverImageChooserComponent,
      EditChapterProgressComponent,
      CompactNumberPipe,
      DefaultDatePipe,
      UtcToLocalTimePipe,
      BytesPipe,
      ReadTimePipe
    ], changeDetection: 0 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(EditVolumeModalComponent, { className: "EditVolumeModalComponent", filePath: "src/app/_single-module/edit-volume-modal/edit-volume-modal.component.ts", lineNumber: 103 });
})();

export {
  EditVolumeModalComponent
};
//# sourceMappingURL=chunk-KP4ENICU.js.map
