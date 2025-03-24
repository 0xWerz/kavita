import {
  UpdateNotificationModalComponent
} from "./chunk-S5EIZF7M.js";
import "./chunk-ZT67ZH4B.js";
import {
  ServerService
} from "./chunk-KKWGV4SA.js";
import {
  TranslocoLocaleModule
} from "./chunk-HSFLUHPU.js";
import {
  SettingButtonComponent
} from "./chunk-4AQVNEIP.js";
import "./chunk-GX7EGMKV.js";
import {
  DefaultModalOptions
} from "./chunk-ZLESQ73K.js";
import {
  DownloadService
} from "./chunk-CVI764VQ.js";
import "./chunk-C423WP7Y.js";
import {
  DefaultValuePipe
} from "./chunk-KMTIWVED.js";
import {
  SettingsService
} from "./chunk-65GP3B4U.js";
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
  SettingItemComponent
} from "./chunk-KJWRNOWO.js";
import "./chunk-A6JEQ5GB.js";
import "./chunk-RSMGJKYW.js";
import "./chunk-U2DWQJI2.js";
import {
  NgbModal
} from "./chunk-2R2RCU4Y.js";
import {
  ToastrService
} from "./chunk-5J5IKBMT.js";
import "./chunk-PUXELTB2.js";
import "./chunk-FLGYJHAG.js";
import {
  DefaultValueAccessor,
  FormControl,
  FormControlName,
  FormGroup,
  FormGroupDirective,
  NgControlStatus,
  NgControlStatusGroup,
  NgSelectOption,
  ReactiveFormsModule,
  SelectControlValueAccessor,
  Validators,
  ɵNgNoValidate,
  ɵNgSelectMultipleOption
} from "./chunk-BPOUBDX2.js";
import "./chunk-CQADFT7F.js";
import {
  AsyncPipe,
  ChangeDetectorRef,
  DestroyRef,
  TitleCasePipe,
  TranslocoDirective,
  TranslocoModule,
  debounceTime,
  defer,
  distinctUntilChanged,
  filter,
  forkJoin,
  inject,
  of,
  shareReplay,
  switchMap,
  takeUntilDestroyed,
  tap,
  translate,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵclassProp,
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
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-PYHIUVNJ.js";

// src/app/admin/manage-tasks-settings/manage-tasks-settings.component.ts
var _forTrack0 = ($index, $item) => $item.name;
function ManageTasksSettingsComponent_ng_container_0_Conditional_1_Conditional_5_ng_template_1_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    let tmp_9_0;
    const formControl_r1 = \u0275\u0275nextContext(2);
    const t_r2 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275textInterpolate2(" ", t_r2(formControl_r1.value), " (", (tmp_9_0 = ctx_r2.settingsForm.get("taskScanCustom")) == null ? null : tmp_9_0.value, ") ");
  }
}
function ManageTasksSettingsComponent_ng_container_0_Conditional_1_Conditional_5_ng_template_1_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const formControl_r1 = \u0275\u0275nextContext(2);
    const t_r2 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275textInterpolate1(" ", t_r2(formControl_r1.value), " ");
  }
}
function ManageTasksSettingsComponent_ng_container_0_Conditional_1_Conditional_5_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, ManageTasksSettingsComponent_ng_container_0_Conditional_1_Conditional_5_ng_template_1_Conditional_0_Template, 1, 2)(1, ManageTasksSettingsComponent_ng_container_0_Conditional_1_Conditional_5_ng_template_1_Conditional_1_Template, 1, 1);
  }
  if (rf & 2) {
    const formControl_r1 = \u0275\u0275nextContext();
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275conditional(formControl_r1.value === ctx_r2.customOption ? 0 : 1);
  }
}
function ManageTasksSettingsComponent_ng_container_0_Conditional_1_Conditional_5_ng_template_3_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 15);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const freq_r4 = ctx.$implicit;
    const t_r2 = \u0275\u0275nextContext(4).$implicit;
    \u0275\u0275property("value", freq_r4);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(t_r2(freq_r4));
  }
}
function ManageTasksSettingsComponent_ng_container_0_Conditional_1_Conditional_5_ng_template_3_Conditional_3_Conditional_4_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r2 = \u0275\u0275nextContext(6).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(t_r2("required"));
  }
}
function ManageTasksSettingsComponent_ng_container_0_Conditional_1_Conditional_5_ng_template_3_Conditional_3_Conditional_4_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r2 = \u0275\u0275nextContext(6).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(t_r2("cron-notation"));
  }
}
function ManageTasksSettingsComponent_ng_container_0_Conditional_1_Conditional_5_ng_template_3_Conditional_3_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 19);
    \u0275\u0275template(1, ManageTasksSettingsComponent_ng_container_0_Conditional_1_Conditional_5_ng_template_3_Conditional_3_Conditional_4_Conditional_1_Template, 2, 1, "div")(2, ManageTasksSettingsComponent_ng_container_0_Conditional_1_Conditional_5_ng_template_3_Conditional_3_Conditional_4_Conditional_2_Template, 2, 1, "div");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_10_0;
    let tmp_11_0;
    const ctx_r2 = \u0275\u0275nextContext(6);
    \u0275\u0275advance();
    \u0275\u0275conditional(((tmp_10_0 = ctx_r2.settingsForm.get("taskScanCustom")) == null ? null : tmp_10_0.errors == null ? null : tmp_10_0.errors.required) ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(((tmp_11_0 = ctx_r2.settingsForm.get("taskScanCustom")) == null ? null : tmp_11_0.errors == null ? null : tmp_11_0.errors.invalidCron) ? 2 : -1);
  }
}
function ManageTasksSettingsComponent_ng_container_0_Conditional_1_Conditional_5_ng_template_3_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16)(1, "label", 17);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275element(3, "input", 18);
    \u0275\u0275template(4, ManageTasksSettingsComponent_ng_container_0_Conditional_1_Conditional_5_ng_template_3_Conditional_3_Conditional_4_Template, 3, 2, "div", 19);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_10_0;
    const t_r2 = \u0275\u0275nextContext(4).$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r2("custom-label"));
    \u0275\u0275advance();
    \u0275\u0275classProp("is-invalid", ((tmp_10_0 = ctx_r2.settingsForm.get("taskScanCustom")) == null ? null : tmp_10_0.invalid) && ((tmp_10_0 = ctx_r2.settingsForm.get("taskScanCustom")) == null ? null : tmp_10_0.touched));
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.settingsForm.dirty || !ctx_r2.settingsForm.untouched ? 4 : -1);
  }
}
function ManageTasksSettingsComponent_ng_container_0_Conditional_1_Conditional_5_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "select", 14);
    \u0275\u0275repeaterCreate(1, ManageTasksSettingsComponent_ng_container_0_Conditional_1_Conditional_5_ng_template_3_For_2_Template, 2, 2, "option", 15, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, ManageTasksSettingsComponent_ng_container_0_Conditional_1_Conditional_5_ng_template_3_Conditional_3_Template, 5, 4, "div", 16);
  }
  if (rf & 2) {
    const formControl_r1 = \u0275\u0275nextContext();
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r2.taskFrequencies);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(formControl_r1.value === ctx_r2.customOption ? 3 : -1);
  }
}
function ManageTasksSettingsComponent_ng_container_0_Conditional_1_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "app-setting-item", 5);
    \u0275\u0275template(1, ManageTasksSettingsComponent_ng_container_0_Conditional_1_Conditional_5_ng_template_1_Template, 2, 1, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(3, ManageTasksSettingsComponent_ng_container_0_Conditional_1_Conditional_5_ng_template_3_Template, 4, 1, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r2 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275property("title", t_r2("library-scan-label"))("subtitle", t_r2("library-scan-tooltip"));
  }
}
function ManageTasksSettingsComponent_ng_container_0_Conditional_1_Conditional_7_ng_template_1_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    let tmp_9_0;
    const formControl_r5 = \u0275\u0275nextContext(2);
    const t_r2 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275textInterpolate2(" ", t_r2(formControl_r5.value), " (", (tmp_9_0 = ctx_r2.settingsForm.get("taskBackupCustom")) == null ? null : tmp_9_0.value, ") ");
  }
}
function ManageTasksSettingsComponent_ng_container_0_Conditional_1_Conditional_7_ng_template_1_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const formControl_r5 = \u0275\u0275nextContext(2);
    const t_r2 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275textInterpolate1(" ", t_r2(formControl_r5.value), " ");
  }
}
function ManageTasksSettingsComponent_ng_container_0_Conditional_1_Conditional_7_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, ManageTasksSettingsComponent_ng_container_0_Conditional_1_Conditional_7_ng_template_1_Conditional_0_Template, 1, 2)(1, ManageTasksSettingsComponent_ng_container_0_Conditional_1_Conditional_7_ng_template_1_Conditional_1_Template, 1, 1);
  }
  if (rf & 2) {
    const formControl_r5 = \u0275\u0275nextContext();
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275conditional(formControl_r5.value === ctx_r2.customOption ? 0 : 1);
  }
}
function ManageTasksSettingsComponent_ng_container_0_Conditional_1_Conditional_7_ng_template_3_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 15);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const freq_r6 = ctx.$implicit;
    const t_r2 = \u0275\u0275nextContext(4).$implicit;
    \u0275\u0275property("value", freq_r6);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(t_r2(freq_r6));
  }
}
function ManageTasksSettingsComponent_ng_container_0_Conditional_1_Conditional_7_ng_template_3_Conditional_3_Conditional_4_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r2 = \u0275\u0275nextContext(6).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(t_r2("required"));
  }
}
function ManageTasksSettingsComponent_ng_container_0_Conditional_1_Conditional_7_ng_template_3_Conditional_3_Conditional_4_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r2 = \u0275\u0275nextContext(6).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(t_r2("cron-notation"));
  }
}
function ManageTasksSettingsComponent_ng_container_0_Conditional_1_Conditional_7_ng_template_3_Conditional_3_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 22);
    \u0275\u0275template(1, ManageTasksSettingsComponent_ng_container_0_Conditional_1_Conditional_7_ng_template_3_Conditional_3_Conditional_4_Conditional_1_Template, 2, 1, "div")(2, ManageTasksSettingsComponent_ng_container_0_Conditional_1_Conditional_7_ng_template_3_Conditional_3_Conditional_4_Conditional_2_Template, 2, 1, "div");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_10_0;
    let tmp_11_0;
    const ctx_r2 = \u0275\u0275nextContext(6);
    \u0275\u0275advance();
    \u0275\u0275conditional(((tmp_10_0 = ctx_r2.settingsForm.get("taskBackupCustom")) == null ? null : tmp_10_0.errors == null ? null : tmp_10_0.errors.required) ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(((tmp_11_0 = ctx_r2.settingsForm.get("taskBackupCustom")) == null ? null : tmp_11_0.errors == null ? null : tmp_11_0.errors.invalidCron) ? 2 : -1);
  }
}
function ManageTasksSettingsComponent_ng_container_0_Conditional_1_Conditional_7_ng_template_3_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16)(1, "label", 17);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275element(3, "input", 21);
    \u0275\u0275template(4, ManageTasksSettingsComponent_ng_container_0_Conditional_1_Conditional_7_ng_template_3_Conditional_3_Conditional_4_Template, 3, 2, "div", 22);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_10_0;
    const t_r2 = \u0275\u0275nextContext(4).$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r2("custom-label"));
    \u0275\u0275advance();
    \u0275\u0275classProp("is-invalid", ((tmp_10_0 = ctx_r2.settingsForm.get("taskBackupCustom")) == null ? null : tmp_10_0.invalid) && ((tmp_10_0 = ctx_r2.settingsForm.get("taskBackupCustom")) == null ? null : tmp_10_0.touched));
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.settingsForm.dirty || !ctx_r2.settingsForm.untouched ? 4 : -1);
  }
}
function ManageTasksSettingsComponent_ng_container_0_Conditional_1_Conditional_7_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "select", 20);
    \u0275\u0275repeaterCreate(1, ManageTasksSettingsComponent_ng_container_0_Conditional_1_Conditional_7_ng_template_3_For_2_Template, 2, 2, "option", 15, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, ManageTasksSettingsComponent_ng_container_0_Conditional_1_Conditional_7_ng_template_3_Conditional_3_Template, 5, 4, "div", 16);
  }
  if (rf & 2) {
    const formControl_r5 = \u0275\u0275nextContext();
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r2.taskFrequencies);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(formControl_r5.value === ctx_r2.customOption ? 3 : -1);
  }
}
function ManageTasksSettingsComponent_ng_container_0_Conditional_1_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "app-setting-item", 5);
    \u0275\u0275template(1, ManageTasksSettingsComponent_ng_container_0_Conditional_1_Conditional_7_ng_template_1_Template, 2, 1, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(3, ManageTasksSettingsComponent_ng_container_0_Conditional_1_Conditional_7_ng_template_3_Template, 4, 1, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r2 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275property("title", t_r2("library-database-backup-label"))("subtitle", t_r2("library-database-backup-tooltip"));
  }
}
function ManageTasksSettingsComponent_ng_container_0_Conditional_1_Conditional_9_ng_template_1_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    let tmp_9_0;
    const formControl_r7 = \u0275\u0275nextContext(2);
    const t_r2 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275textInterpolate2(" ", t_r2(formControl_r7.value), " (", (tmp_9_0 = ctx_r2.settingsForm.get("taskCleanupCustom")) == null ? null : tmp_9_0.value, ") ");
  }
}
function ManageTasksSettingsComponent_ng_container_0_Conditional_1_Conditional_9_ng_template_1_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const formControl_r7 = \u0275\u0275nextContext(2);
    const t_r2 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275textInterpolate1(" ", t_r2(formControl_r7.value), " ");
  }
}
function ManageTasksSettingsComponent_ng_container_0_Conditional_1_Conditional_9_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, ManageTasksSettingsComponent_ng_container_0_Conditional_1_Conditional_9_ng_template_1_Conditional_0_Template, 1, 2)(1, ManageTasksSettingsComponent_ng_container_0_Conditional_1_Conditional_9_ng_template_1_Conditional_1_Template, 1, 1);
  }
  if (rf & 2) {
    const formControl_r7 = \u0275\u0275nextContext();
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275conditional(formControl_r7.value === ctx_r2.customOption ? 0 : 1);
  }
}
function ManageTasksSettingsComponent_ng_container_0_Conditional_1_Conditional_9_ng_template_3_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 15);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const freq_r8 = ctx.$implicit;
    const t_r2 = \u0275\u0275nextContext(4).$implicit;
    \u0275\u0275property("value", freq_r8);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(t_r2(freq_r8));
  }
}
function ManageTasksSettingsComponent_ng_container_0_Conditional_1_Conditional_9_ng_template_3_Conditional_3_Conditional_4_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r2 = \u0275\u0275nextContext(6).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(t_r2("required"));
  }
}
function ManageTasksSettingsComponent_ng_container_0_Conditional_1_Conditional_9_ng_template_3_Conditional_3_Conditional_4_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r2 = \u0275\u0275nextContext(6).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(t_r2("cron-notation"));
  }
}
function ManageTasksSettingsComponent_ng_container_0_Conditional_1_Conditional_9_ng_template_3_Conditional_3_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 25);
    \u0275\u0275template(1, ManageTasksSettingsComponent_ng_container_0_Conditional_1_Conditional_9_ng_template_3_Conditional_3_Conditional_4_Conditional_1_Template, 2, 1, "div")(2, ManageTasksSettingsComponent_ng_container_0_Conditional_1_Conditional_9_ng_template_3_Conditional_3_Conditional_4_Conditional_2_Template, 2, 1, "div");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_10_0;
    let tmp_11_0;
    const ctx_r2 = \u0275\u0275nextContext(6);
    \u0275\u0275advance();
    \u0275\u0275conditional(((tmp_10_0 = ctx_r2.settingsForm.get("taskCleanupCustom")) == null ? null : tmp_10_0.errors == null ? null : tmp_10_0.errors.required) ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(((tmp_11_0 = ctx_r2.settingsForm.get("taskCleanupCustom")) == null ? null : tmp_11_0.errors == null ? null : tmp_11_0.errors.invalidCron) ? 2 : -1);
  }
}
function ManageTasksSettingsComponent_ng_container_0_Conditional_1_Conditional_9_ng_template_3_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16)(1, "label", 17);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275element(3, "input", 24);
    \u0275\u0275template(4, ManageTasksSettingsComponent_ng_container_0_Conditional_1_Conditional_9_ng_template_3_Conditional_3_Conditional_4_Template, 3, 2, "div", 25);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_10_0;
    let tmp_11_0;
    const t_r2 = \u0275\u0275nextContext(4).$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r2("custom-label"));
    \u0275\u0275advance();
    \u0275\u0275classProp("is-invalid", ((tmp_10_0 = ctx_r2.settingsForm.get("taskCleanupCustom")) == null ? null : tmp_10_0.invalid) && ((tmp_10_0 = ctx_r2.settingsForm.get("taskCleanupCustom")) == null ? null : tmp_10_0.touched));
    \u0275\u0275advance();
    \u0275\u0275conditional(((tmp_11_0 = ctx_r2.settingsForm.get("taskCleanupCustom")) == null ? null : tmp_11_0.invalid) ? 4 : -1);
  }
}
function ManageTasksSettingsComponent_ng_container_0_Conditional_1_Conditional_9_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "select", 23);
    \u0275\u0275repeaterCreate(1, ManageTasksSettingsComponent_ng_container_0_Conditional_1_Conditional_9_ng_template_3_For_2_Template, 2, 2, "option", 15, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, ManageTasksSettingsComponent_ng_container_0_Conditional_1_Conditional_9_ng_template_3_Conditional_3_Template, 5, 4, "div", 16);
  }
  if (rf & 2) {
    const formControl_r7 = \u0275\u0275nextContext();
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r2.taskFrequenciesForCleanup);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(formControl_r7.value === ctx_r2.customOption ? 3 : -1);
  }
}
function ManageTasksSettingsComponent_ng_container_0_Conditional_1_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "app-setting-item", 5);
    \u0275\u0275template(1, ManageTasksSettingsComponent_ng_container_0_Conditional_1_Conditional_9_ng_template_1_Template, 2, 1, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(3, ManageTasksSettingsComponent_ng_container_0_Conditional_1_Conditional_9_ng_template_3_Template, 4, 1, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r2 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275property("title", t_r2("cleanup-label"))("subtitle", t_r2("cleanup-tooltip"));
  }
}
function ManageTasksSettingsComponent_ng_container_0_Conditional_1_For_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 7)(1, "app-setting-button", 26)(2, "button", 27);
    \u0275\u0275listener("click", function ManageTasksSettingsComponent_ng_container_0_Conditional_1_For_14_Template_button_click_2_listener() {
      const task_r10 = \u0275\u0275restoreView(_r9).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.runAdhoc(task_r10));
    });
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const task_r10 = ctx.$implicit;
    const t_r2 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("subtitle", t_r2(task_r10.description));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r2(task_r10.name));
  }
}
function ManageTasksSettingsComponent_ng_container_0_Conditional_1_ng_template_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const t_r2 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275textInterpolate1(" ", t_r2("job-title-header"), " ");
  }
}
function ManageTasksSettingsComponent_ng_container_0_Conditional_1_ng_template_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "titlecase");
  }
  if (rf & 2) {
    const item_r11 = ctx.row;
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(1, 1, item_r11.title), " ");
  }
}
function ManageTasksSettingsComponent_ng_container_0_Conditional_1_ng_template_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const t_r2 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275textInterpolate1(" ", t_r2("last-executed-header"), " ");
  }
}
function ManageTasksSettingsComponent_ng_container_0_Conditional_1_ng_template_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "utcToLocalTime");
    \u0275\u0275pipe(2, "defaultValue");
  }
  if (rf & 2) {
    const item_r12 = ctx.row;
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 3, \u0275\u0275pipeBind1(1, 1, item_r12.lastExecutionUtc)), " ");
  }
}
function ManageTasksSettingsComponent_ng_container_0_Conditional_1_ng_template_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const t_r2 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275textInterpolate1(" ", t_r2("cron-header"), " ");
  }
}
function ManageTasksSettingsComponent_ng_container_0_Conditional_1_ng_template_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const item_r13 = ctx.row;
    \u0275\u0275textInterpolate1(" ", item_r13.cron, " ");
  }
}
function ManageTasksSettingsComponent_ng_container_0_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "form", 3)(1, "h4");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerStart(3);
    \u0275\u0275elementStart(4, "div", 4);
    \u0275\u0275template(5, ManageTasksSettingsComponent_ng_container_0_Conditional_1_Conditional_5_Template, 5, 2, "app-setting-item", 5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 4);
    \u0275\u0275template(7, ManageTasksSettingsComponent_ng_container_0_Conditional_1_Conditional_7_Template, 5, 2, "app-setting-item", 5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 4);
    \u0275\u0275template(9, ManageTasksSettingsComponent_ng_container_0_Conditional_1_Conditional_9_Template, 5, 2, "app-setting-item", 5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
    \u0275\u0275element(10, "div", 6);
    \u0275\u0275elementStart(11, "h4");
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(13, ManageTasksSettingsComponent_ng_container_0_Conditional_1_For_14_Template, 4, 2, "div", 7, _forTrack0);
    \u0275\u0275element(15, "div", 6);
    \u0275\u0275elementStart(16, "h4");
    \u0275\u0275text(17);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "ngx-datatable", 8);
    \u0275\u0275pipe(19, "async");
    \u0275\u0275elementStart(20, "ngx-datatable-column", 9);
    \u0275\u0275template(21, ManageTasksSettingsComponent_ng_container_0_Conditional_1_ng_template_21_Template, 1, 1, "ng-template", 10)(22, ManageTasksSettingsComponent_ng_container_0_Conditional_1_ng_template_22_Template, 2, 3, "ng-template", 11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "ngx-datatable-column", 12);
    \u0275\u0275template(24, ManageTasksSettingsComponent_ng_container_0_Conditional_1_ng_template_24_Template, 1, 1, "ng-template", 10)(25, ManageTasksSettingsComponent_ng_container_0_Conditional_1_ng_template_25_Template, 3, 5, "ng-template", 11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "ngx-datatable-column", 13);
    \u0275\u0275template(27, ManageTasksSettingsComponent_ng_container_0_Conditional_1_ng_template_27_Template, 1, 1, "ng-template", 10)(28, ManageTasksSettingsComponent_ng_container_0_Conditional_1_ng_template_28_Template, 1, 1, "ng-template", 11);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    let tmp_5_0;
    let tmp_6_0;
    let tmp_7_0;
    const t_r2 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("formGroup", ctx_r2.settingsForm);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r2("title"));
    \u0275\u0275advance(3);
    \u0275\u0275conditional((tmp_5_0 = ctx_r2.settingsForm.get("taskScan")) ? 5 : -1, tmp_5_0);
    \u0275\u0275advance(2);
    \u0275\u0275conditional((tmp_6_0 = ctx_r2.settingsForm.get("taskBackup")) ? 7 : -1, tmp_6_0);
    \u0275\u0275advance(2);
    \u0275\u0275conditional((tmp_7_0 = ctx_r2.settingsForm.get("taskCleanup")) ? 9 : -1, tmp_7_0);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(t_r2("adhoc-tasks-title"));
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r2.adhocTasks);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(t_r2("recurring-tasks-title"));
    \u0275\u0275advance();
    \u0275\u0275property("rows", \u0275\u0275pipeBind1(19, 23, ctx_r2.recurringTasks$))("columnMode", ctx_r2.ColumnMode.flex)("footerHeight", 50)("limit", 15);
    \u0275\u0275advance(2);
    \u0275\u0275property("sortable", true)("draggable", false)("resizeable", false)("flexGrow", 3);
    \u0275\u0275advance(3);
    \u0275\u0275property("sortable", true)("draggable", false)("resizeable", false)("flexGrow", 1);
    \u0275\u0275advance(3);
    \u0275\u0275property("sortable", false)("draggable", false)("resizeable", false)("flexGrow", 1);
  }
}
function ManageTasksSettingsComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, ManageTasksSettingsComponent_ng_container_0_Conditional_1_Template, 29, 25, "form", 3);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.serverSettings ? 1 : -1);
  }
}
var ManageTasksSettingsComponent = class _ManageTasksSettingsComponent {
  constructor() {
    this.cdRef = inject(ChangeDetectorRef);
    this.destroyRef = inject(DestroyRef);
    this.settingsService = inject(SettingsService);
    this.toastr = inject(ToastrService);
    this.serverService = inject(ServerService);
    this.modalService = inject(NgbModal);
    this.downloadService = inject(DownloadService);
    this.settingsForm = new FormGroup({});
    this.taskFrequencies = [];
    this.taskFrequenciesForCleanup = [];
    this.logLevels = [];
    this.recurringTasks$ = of([]);
    this.adhocTasks = [
      {
        name: "convert-media-task",
        description: "convert-media-task-desc",
        api: this.serverService.convertMedia(),
        successMessage: "convert-media-task-success"
      },
      {
        name: "bust-locale-task",
        description: "bust-locale-task-desc",
        api: defer(() => {
          localStorage.removeItem("@transloco/translations/timestamp");
          localStorage.removeItem("@transloco/translations");
          location.reload();
          return of();
        }),
        successMessage: "bust-locale-task-success"
      },
      {
        name: "clear-reading-cache-task",
        description: "clear-reading-cache-task-desc",
        api: this.serverService.clearCache(),
        successMessage: "clear-reading-cache-task-success"
      },
      {
        name: "clean-up-want-to-read-task",
        description: "clean-up-want-to-read-task-desc",
        api: this.serverService.cleanupWantToRead(),
        successMessage: "clean-up-want-to-read-task-success"
      },
      {
        name: "clean-up-task",
        description: "clean-up-task-desc",
        api: this.serverService.cleanup(),
        successMessage: "clean-up-task-success"
      },
      {
        name: "backup-database-task",
        description: "backup-database-task-desc",
        api: this.serverService.backupDatabase(),
        successMessage: "backup-database-task-success"
      },
      {
        name: "download-logs-task",
        description: "download-logs-task-desc",
        api: defer(() => of(this.downloadService.download("logs", void 0))),
        successMessage: ""
      },
      {
        name: "sync-themes-task",
        description: "sync-themes-task-desc",
        api: this.serverService.syncThemes(),
        successMessage: "sync-themes-success"
      },
      {
        name: "check-for-updates-task",
        description: "check-for-updates-task-desc",
        api: this.serverService.checkForUpdate(),
        successMessage: "",
        successFunction: (update) => {
          if (update === null) {
            this.toastr.info(translate("toasts.no-updates"));
            return;
          }
          const modalRef = this.modalService.open(UpdateNotificationModalComponent, DefaultModalOptions);
          modalRef.componentInstance.updateData = update;
        }
      }
    ];
    this.customOption = "custom";
    this.ColumnMode = ColumnMode;
  }
  ngOnInit() {
    forkJoin({
      frequencies: this.settingsService.getTaskFrequencies(),
      levels: this.settingsService.getLoggingLevels(),
      settings: this.settingsService.getServerSettings()
    }).subscribe((result) => {
      this.taskFrequencies = result.frequencies;
      this.taskFrequencies.push(this.customOption);
      this.taskFrequenciesForCleanup = this.taskFrequencies.filter((f) => f !== "disabled");
      this.logLevels = result.levels;
      this.serverSettings = result.settings;
      this.settingsForm.addControl("taskScan", new FormControl(this.serverSettings.taskScan, [Validators.required]));
      this.settingsForm.addControl("taskBackup", new FormControl(this.serverSettings.taskBackup, [Validators.required]));
      this.settingsForm.addControl("taskCleanup", new FormControl(this.serverSettings.taskCleanup, [Validators.required]));
      this.updateCustomFields("taskScan", "taskScanCustom", this.taskFrequencies, this.serverSettings.taskScan);
      this.updateCustomFields("taskBackup", "taskBackupCustom", this.taskFrequencies, this.serverSettings.taskBackup);
      this.updateCustomFields("taskCleanup", "taskCleanupCustom", this.taskFrequenciesForCleanup, this.serverSettings.taskCleanup);
      this.validateCronExpression("taskScanCustom");
      this.validateCronExpression("taskBackupCustom");
      this.validateCronExpression("taskCleanupCustom");
      this.settingsForm.valueChanges.pipe(distinctUntilChanged(), debounceTime(500), filter((_) => this.isFormValid()), takeUntilDestroyed(this.destroyRef), switchMap((_) => {
        const data = this.packData();
        return this.settingsService.updateServerSettings(data);
      }), tap((settings) => {
        this.serverSettings = settings;
        this.recurringTasks$ = this.serverService.getRecurringJobs().pipe(shareReplay());
        this.cdRef.markForCheck();
      })).subscribe();
      this.cdRef.markForCheck();
    });
    this.recurringTasks$ = this.serverService.getRecurringJobs().pipe(shareReplay());
    this.cdRef.markForCheck();
  }
  updateCustomFields(controlName, customControlName, frequencyList, currentSetting) {
    if (!frequencyList.includes(currentSetting)) {
      this.settingsForm.get(controlName)?.setValue(this.customOption);
      this.settingsForm.addControl(customControlName, new FormControl(currentSetting, [Validators.required]));
    } else {
      this.settingsForm.addControl(customControlName, new FormControl(""));
    }
  }
  validateCronExpression(controlName) {
    this.settingsForm.get(controlName)?.valueChanges.pipe(debounceTime(100), switchMap((val) => this.settingsService.isValidCronExpression(val)), tap((isValid) => {
      if (isValid) {
        this.settingsForm.get(controlName)?.setErrors(null);
      } else {
        this.settingsForm.get(controlName)?.setErrors({ invalidCron: true });
      }
      this.settingsForm.updateValueAndValidity();
      this.cdRef.markForCheck();
    }), takeUntilDestroyed(this.destroyRef)).subscribe();
  }
  isFormValid() {
    if (!this.settingsForm.valid) {
      return false;
    }
    const customChecks = [
      { mainControl: "taskScan", customControl: "taskScanCustom" },
      { mainControl: "taskBackup", customControl: "taskBackupCustom" },
      { mainControl: "taskCleanup", customControl: "taskCleanupCustom" }
    ];
    for (const check of customChecks) {
      const mainControlValue = this.settingsForm.get(check.mainControl)?.value;
      const customControl = this.settingsForm.get(check.customControl);
      if (mainControlValue === this.customOption) {
        if (customControl?.invalid || !customControl?.value) {
          return false;
        }
      }
    }
    return true;
  }
  resetForm() {
    this.settingsForm.get("taskScan")?.setValue(this.serverSettings.taskScan, { onlySelf: true, emitEvent: false });
    this.settingsForm.get("taskBackup")?.setValue(this.serverSettings.taskBackup, { onlySelf: true, emitEvent: false });
    this.settingsForm.get("taskCleanup")?.setValue(this.serverSettings.taskCleanup, { onlySelf: true, emitEvent: false });
    if (!this.taskFrequencies.includes(this.serverSettings.taskScan)) {
      this.settingsForm.get("taskScanCustom")?.setValue(this.serverSettings.taskScan, { onlySelf: true, emitEvent: false });
    } else {
      this.settingsForm.get("taskScanCustom")?.setValue("", { onlySelf: true, emitEvent: false });
    }
    if (!this.taskFrequencies.includes(this.serverSettings.taskBackup)) {
      this.settingsForm.get("taskBackupCustom")?.setValue(this.serverSettings.taskBackup, { onlySelf: true, emitEvent: false });
    } else {
      this.settingsForm.get("taskBackupCustom")?.setValue("", { onlySelf: true, emitEvent: false });
    }
    if (!this.taskFrequencies.includes(this.serverSettings.taskCleanup)) {
      this.settingsForm.get("taskCleanupCustom")?.setValue(this.serverSettings.taskCleanup, { onlySelf: true, emitEvent: false });
    } else {
      this.settingsForm.get("taskCleanupCustom")?.setValue("", { onlySelf: true, emitEvent: false });
    }
    this.settingsForm.markAsPristine();
    this.cdRef.markForCheck();
  }
  packData() {
    const modelSettings = Object.assign({}, this.serverSettings);
    modelSettings.taskBackup = this.settingsForm.get("taskBackup")?.value;
    modelSettings.taskScan = this.settingsForm.get("taskScan")?.value;
    modelSettings.taskCleanup = this.settingsForm.get("taskCleanup")?.value;
    if (modelSettings.taskBackup === this.customOption) {
      modelSettings.taskBackup = this.settingsForm.get("taskBackupCustom")?.value;
    }
    if (modelSettings.taskScan === this.customOption) {
      modelSettings.taskScan = this.settingsForm.get("taskScanCustom")?.value;
    }
    if (modelSettings.taskCleanup === this.customOption) {
      modelSettings.taskCleanup = this.settingsForm.get("taskCleanupCustom")?.value;
    }
    return modelSettings;
  }
  runAdhoc(task) {
    task.api.subscribe((data) => {
      if (task.successMessage.length > 0) {
        this.toastr.success(translate("manage-tasks-settings." + task.successMessage));
      }
      if (task.successFunction) {
        task.successFunction(data);
      }
    });
  }
  static {
    this.\u0275fac = function ManageTasksSettingsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ManageTasksSettingsComponent)();
    };
  }
  static {
    this.\u0275cmp = \u0275\u0275defineComponent({ type: _ManageTasksSettingsComponent, selectors: [["app-manage-tasks-settings"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 1, vars: 1, consts: [["view", ""], ["edit", ""], [4, "transloco", "translocoRead"], [3, "formGroup"], [1, "row", "g-0", "mt-4", "mb-4"], [3, "title", "subtitle"], [1, "setting-section-break"], [1, "mt-4", "mb-4"], ["rowHeight", "auto", 1, "bootstrap", 3, "rows", "columnMode", "footerHeight", "limit"], ["prop", "title", 3, "sortable", "draggable", "resizeable", "flexGrow"], ["ngx-datatable-header-template", ""], ["ngx-datatable-cell-template", ""], ["prop", "lastExecutionUtc", 3, "sortable", "draggable", "resizeable", "flexGrow"], ["prop", "cron", 3, "sortable", "draggable", "resizeable", "flexGrow"], ["aria-describedby", "settings-tasks-scan-help", "formControlName", "taskScan", "id", "settings-tasks-scan", 1, "form-select"], [3, "value"], [1, "mt-3"], ["for", "custom-task-scan", 1, "form-label"], ["type", "text", "id", "custom-task-scan", "formControlName", "taskScanCustom", "aria-describedby", "task-scan-validations", 1, "form-control"], ["id", "task-scan-validations", 1, "invalid-feedback", 2, "display", "inline-block"], ["aria-describedby", "settings-tasks-backup-help", "formControlName", "taskBackup", "id", "settings-tasks-backup", 1, "form-select"], ["type", "text", "id", "custom-task-backup", "formControlName", "taskBackupCustom", "aria-describedby", "task-scan-validations", 1, "form-control"], ["id", "task-backup-validations", 1, "invalid-feedback", 2, "display", "inline-block"], ["aria-describedby", "settings-tasks-cleanup-help", "formControlName", "taskCleanup", "id", "settings-tasks-cleanup", 1, "form-select"], ["type", "text", "id", "custom-task-cleanup", "formControlName", "taskCleanupCustom", "aria-describedby", "task-scan-validations", 1, "form-control"], ["id", "task-cleanup-validations", 1, "invalid-feedback", 2, "display", "inline-block"], [3, "subtitle"], [1, "btn", "btn-secondary", "btn-sm", "mb-2", 3, "click"]], template: function ManageTasksSettingsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, ManageTasksSettingsComponent_ng_container_0_Template, 2, 1, "ng-container", 2);
      }
      if (rf & 2) {
        \u0275\u0275property("translocoRead", "manage-tasks-settings");
      }
    }, dependencies: [
      ReactiveFormsModule,
      \u0275NgNoValidate,
      NgSelectOption,
      \u0275NgSelectMultipleOption,
      DefaultValueAccessor,
      SelectControlValueAccessor,
      NgControlStatus,
      NgControlStatusGroup,
      FormGroupDirective,
      FormControlName,
      AsyncPipe,
      TitleCasePipe,
      DefaultValuePipe,
      TranslocoModule,
      TranslocoDirective,
      TranslocoLocaleModule,
      UtcToLocalTimePipe,
      SettingItemComponent,
      SettingButtonComponent,
      NgxDatatableModule,
      DatatableComponent,
      DataTableColumnDirective,
      DataTableColumnHeaderDirective,
      DataTableColumnCellDirective
    ], styles: ["\n\ntd[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n}\n/*# sourceMappingURL=manage-tasks-settings.component.css.map */"], changeDetection: 0 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ManageTasksSettingsComponent, { className: "ManageTasksSettingsComponent", filePath: "src/app/admin/manage-tasks-settings/manage-tasks-settings.component.ts", lineNumber: 43 });
})();
export {
  ManageTasksSettingsComponent
};
//# sourceMappingURL=manage-tasks-settings.component-O6UGXZ42.js.map
