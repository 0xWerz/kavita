import {
  DevicePlatform,
  DevicePlatformPipe,
  devicePlatforms
} from "./chunk-RT3VH5MO.js";
import {
  DefaultModalOptions
} from "./chunk-ZLESQ73K.js";
import {
  SettingsService
} from "./chunk-65GP3B4U.js";
import {
  ColumnMode,
  DataTableColumnCellDirective,
  DataTableColumnDirective,
  DataTableColumnHeaderDirective,
  DatatableComponent,
  NgxDatatableModule
} from "./chunk-AZB3LZ7Q.js";
import {
  Select2Module
} from "./chunk-LGLLZBOI.js";
import "./chunk-EA72DBFY.js";
import "./chunk-HN36WWH3.js";
import {
  AccountService,
  DeviceService
} from "./chunk-U2DWQJI2.js";
import {
  ConfirmService,
  NgbActiveModal,
  NgbModal,
  NgbTooltip
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
  TranslocoDirective,
  __async,
  inject,
  map,
  shareReplay,
  takeUntilDestroyed,
  translate,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassProp,
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
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-PYHIUVNJ.js";

// src/app/user-settings/_modals/edit-device-modal/edit-device-modal.component.ts
function EditDeviceModalComponent_ng_container_0_Conditional_8_Conditional_3_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 17);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r3 = \u0275\u0275nextContext(3).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", t_r3("required-field"), " ");
  }
}
function EditDeviceModalComponent_ng_container_0_Conditional_8_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, EditDeviceModalComponent_ng_container_0_Conditional_8_Conditional_3_Conditional_0_Template, 2, 1, "p", 17);
  }
  if (rf & 2) {
    \u0275\u0275conditional(ctx.required ? 0 : -1);
  }
}
function EditDeviceModalComponent_ng_container_0_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "label", 15);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
    \u0275\u0275element(2, "input", 16);
    \u0275\u0275template(3, EditDeviceModalComponent_ng_container_0_Conditional_8_Conditional_3_Template, 1, 1);
  }
  if (rf & 2) {
    let tmp_7_0;
    const formControl_r4 = ctx;
    const t_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(t_r3("device-name-label"));
    \u0275\u0275advance();
    \u0275\u0275classProp("is-invalid", formControl_r4.invalid && formControl_r4.touched);
    \u0275\u0275advance();
    \u0275\u0275conditional((tmp_7_0 = formControl_r4.errors) ? 3 : -1, tmp_7_0);
  }
}
function EditDeviceModalComponent_ng_container_0_ng_template_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const t_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275textInterpolate(t_r3("email-tooltip"));
  }
}
function EditDeviceModalComponent_ng_container_0_Conditional_17_Conditional_1_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 17);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r3 = \u0275\u0275nextContext(3).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(t_r3("required-field"));
  }
}
function EditDeviceModalComponent_ng_container_0_Conditional_17_Conditional_1_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 17);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r3 = \u0275\u0275nextContext(3).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(t_r3("valid-email"));
  }
}
function EditDeviceModalComponent_ng_container_0_Conditional_17_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, EditDeviceModalComponent_ng_container_0_Conditional_17_Conditional_1_Conditional_0_Template, 2, 1, "p", 17)(1, EditDeviceModalComponent_ng_container_0_Conditional_17_Conditional_1_Conditional_1_Template, 2, 1, "p", 17);
  }
  if (rf & 2) {
    const errors_r5 = ctx;
    \u0275\u0275conditional(errors_r5.required ? 0 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(errors_r5.email ? 1 : -1);
  }
}
function EditDeviceModalComponent_ng_container_0_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "input", 18);
    \u0275\u0275template(1, EditDeviceModalComponent_ng_container_0_Conditional_17_Conditional_1_Template, 2, 2);
  }
  if (rf & 2) {
    let tmp_6_0;
    const formControl_r6 = ctx;
    \u0275\u0275classProp("is-invalid", formControl_r6.invalid && formControl_r6.touched);
    \u0275\u0275advance();
    \u0275\u0275conditional((tmp_6_0 = formControl_r6.errors) ? 1 : -1, tmp_6_0);
  }
}
function EditDeviceModalComponent_ng_container_0_Conditional_21_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 20);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "devicePlatform");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const platform_r7 = ctx.$implicit;
    \u0275\u0275property("value", platform_r7);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 2, platform_r7));
  }
}
function EditDeviceModalComponent_ng_container_0_Conditional_21_Conditional_3_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 17);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r3 = \u0275\u0275nextContext(3).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(t_r3("required-field"));
  }
}
function EditDeviceModalComponent_ng_container_0_Conditional_21_Conditional_3_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 17);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r3 = \u0275\u0275nextContext(3).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(t_r3("valid-email"));
  }
}
function EditDeviceModalComponent_ng_container_0_Conditional_21_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, EditDeviceModalComponent_ng_container_0_Conditional_21_Conditional_3_Conditional_0_Template, 2, 1, "p", 17)(1, EditDeviceModalComponent_ng_container_0_Conditional_21_Conditional_3_Conditional_1_Template, 2, 1, "p", 17);
  }
  if (rf & 2) {
    const errors_r8 = ctx;
    \u0275\u0275conditional(errors_r8.required ? 0 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(errors_r8.email ? 1 : -1);
  }
}
function EditDeviceModalComponent_ng_container_0_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "select", 19);
    \u0275\u0275repeaterCreate(1, EditDeviceModalComponent_ng_container_0_Conditional_21_For_2_Template, 3, 4, "option", 20, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, EditDeviceModalComponent_ng_container_0_Conditional_21_Conditional_3_Template, 2, 2);
  }
  if (rf & 2) {
    let tmp_7_0;
    const formControl_r9 = ctx;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("is-invalid", formControl_r9.invalid && formControl_r9.touched);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.devicePlatforms);
    \u0275\u0275advance(2);
    \u0275\u0275conditional((tmp_7_0 = formControl_r9.errors) ? 3 : -1, tmp_7_0);
  }
}
function EditDeviceModalComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 2)(2, "h4", 3);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 4);
    \u0275\u0275listener("click", function EditDeviceModalComponent_ng_container_0_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.close());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 5)(6, "form", 6)(7, "div", 7);
    \u0275\u0275template(8, EditDeviceModalComponent_ng_container_0_Conditional_8_Template, 4, 4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 7)(10, "label", 8);
    \u0275\u0275text(11);
    \u0275\u0275element(12, "i", 9);
    \u0275\u0275template(13, EditDeviceModalComponent_ng_container_0_ng_template_13_Template, 1, 1, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementStart(15, "span", 10);
    \u0275\u0275elementContainer(16);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(17, EditDeviceModalComponent_ng_container_0_Conditional_17_Template, 2, 3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "div", 7)(19, "label", 11);
    \u0275\u0275text(20);
    \u0275\u0275elementEnd();
    \u0275\u0275template(21, EditDeviceModalComponent_ng_container_0_Conditional_21_Template, 4, 3);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(22, "div", 12)(23, "button", 13);
    \u0275\u0275listener("click", function EditDeviceModalComponent_ng_container_0_Template_button_click_23_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.close());
    });
    \u0275\u0275text(24);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "button", 14);
    \u0275\u0275listener("click", function EditDeviceModalComponent_ng_container_0_Template_button_click_25_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.save());
    });
    \u0275\u0275text(26);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    let tmp_6_0;
    let tmp_9_0;
    let tmp_11_0;
    const t_r3 = ctx.$implicit;
    const emailTooltip_r10 = \u0275\u0275reference(14);
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(t_r3("title"));
    \u0275\u0275advance();
    \u0275\u0275attribute("aria-label", t_r3("close"));
    \u0275\u0275advance(2);
    \u0275\u0275property("formGroup", ctx_r1.settingsForm);
    \u0275\u0275advance(2);
    \u0275\u0275conditional((tmp_6_0 = ctx_r1.settingsForm.get("name")) ? 8 : -1, tmp_6_0);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", t_r3("email-label"), " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngbTooltip", emailTooltip_r10);
    \u0275\u0275advance(5);
    \u0275\u0275conditional((tmp_9_0 = ctx_r1.settingsForm.get("email")) ? 17 : -1, tmp_9_0);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(t_r3("device-platform-label"));
    \u0275\u0275advance();
    \u0275\u0275conditional((tmp_11_0 = ctx_r1.settingsForm.get("platform")) ? 21 : -1, tmp_11_0);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(t_r3("cancel"));
    \u0275\u0275advance();
    \u0275\u0275property("disabled", !ctx_r1.settingsForm.dirty);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(t_r3("save"));
  }
}
var EditDeviceModalComponent = class _EditDeviceModalComponent {
  constructor() {
    this.deviceService = inject(DeviceService);
    this.toastr = inject(ToastrService);
    this.cdRef = inject(ChangeDetectorRef);
    this.destroyRef = inject(DestroyRef);
    this.modalRef = inject(NgbActiveModal);
    this.device = null;
    this.settingsForm = new FormGroup({});
    this.devicePlatforms = devicePlatforms;
  }
  ngOnInit() {
    this.settingsForm.addControl("name", new FormControl(this.device?.name || "", [Validators.required]));
    this.settingsForm.addControl("email", new FormControl(this.device?.emailAddress || "", [Validators.required, Validators.email]));
    this.settingsForm.addControl("platform", new FormControl(this.device?.platform || DevicePlatform.Custom, [Validators.required]));
    this.settingsForm.get("email")?.valueChanges.pipe(takeUntilDestroyed(this.destroyRef)).subscribe((email) => {
      if (this.settingsForm.get("platform")?.dirty)
        return;
      if (email === null || email === void 0 || email === "")
        return;
      if (email.endsWith("@kindle.com"))
        this.settingsForm.get("platform")?.setValue(DevicePlatform.Kindle);
      else if (email.endsWith("@pbsync.com"))
        this.settingsForm.get("platform")?.setValue(DevicePlatform.PocketBook);
      else
        this.settingsForm.get("platform")?.setValue(DevicePlatform.Custom);
      this.cdRef.markForCheck();
    });
  }
  save() {
    if (this.device !== null) {
      this.deviceService.updateDevice(this.device.id, this.settingsForm.value.name, parseInt(this.settingsForm.value.platform, 10), this.settingsForm.value.email).subscribe((device) => {
        this.settingsForm.reset();
        this.toastr.success(translate("toasts.device-updated"));
        this.cdRef.markForCheck();
        this.close(device);
      });
      return;
    }
    this.deviceService.createDevice(this.settingsForm.value.name, parseInt(this.settingsForm.value.platform, 10), this.settingsForm.value.email).subscribe((device) => {
      this.settingsForm.reset();
      this.toastr.success(translate("toasts.device-created"));
      this.cdRef.markForCheck();
      this.close(device);
    });
  }
  close(device = null) {
    this.modalRef.close(device);
  }
  static {
    this.\u0275fac = function EditDeviceModalComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _EditDeviceModalComponent)();
    };
  }
  static {
    this.\u0275cmp = \u0275\u0275defineComponent({ type: _EditDeviceModalComponent, selectors: [["app-edit-device-modal"]], inputs: { device: "device" }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 1, vars: 1, consts: [["emailTooltip", ""], [4, "transloco", "translocoRead"], [1, "modal-header"], ["id", "modal-basic-title", 1, "modal-title"], ["type", "button", 1, "btn-close", 3, "click"], [1, "modal-body", "scrollable-modal"], [3, "formGroup"], [1, "row", "g-0", "mb-2"], ["for", "email", 1, "form-label"], ["placement", "right", "role", "button", "tabindex", "0", 1, "fa", "fa-info-circle", "ms-1", 3, "ngbTooltip"], ["id", "email-help", 1, "visually-hidden"], ["for", "device-platform", 1, "form-label"], [1, "modal-footer"], ["type", "button", 1, "btn", "btn-secondary", 3, "click"], ["type", "button", 1, "btn", "btn-primary", 3, "click", "disabled"], ["for", "settings-name", 1, "form-label"], ["id", "settings-name", "formControlName", "name", "type", "text", 1, "form-control"], [1, "invalid-feedback"], ["id", "email", "aria-describedby", "email-help", "formControlName", "email", "type", "email", "inputmode", "email", "placeholder", "id@kindle.com", 1, "form-control"], ["id", "device-platform", "aria-describedby", "device-platform-help", "formControlName", "platform", 1, "form-select"], [3, "value"]], template: function EditDeviceModalComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, EditDeviceModalComponent_ng_container_0_Template, 27, 12, "ng-container", 1);
      }
      if (rf & 2) {
        \u0275\u0275property("translocoRead", "edit-device-modal");
      }
    }, dependencies: [
      TranslocoDirective,
      DevicePlatformPipe,
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
      Select2Module,
      NgbTooltip
    ], changeDetection: 0 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(EditDeviceModalComponent, { className: "EditDeviceModalComponent", filePath: "src/app/user-settings/_modals/edit-device-modal/edit-device-modal.component.ts", lineNumber: 35 });
})();

// src/app/user-settings/manage-devices/manage-devices.component.ts
function ManageDevicesComponent_ng_container_0_ng_template_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const t_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275textInterpolate1(" ", t_r3("name-label"), " ");
  }
}
function ManageDevicesComponent_ng_container_0_ng_template_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const item_r4 = ctx.row;
    \u0275\u0275textInterpolate1(" ", item_r4.name, " ");
  }
}
function ManageDevicesComponent_ng_container_0_ng_template_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const t_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275textInterpolate1(" ", t_r3("email-label"), " ");
  }
}
function ManageDevicesComponent_ng_container_0_ng_template_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const item_r5 = ctx.row;
    \u0275\u0275textInterpolate1(" ", item_r5.emailAddress, " ");
  }
}
function ManageDevicesComponent_ng_container_0_ng_template_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const t_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275textInterpolate1(" ", t_r3("platform-label"), " ");
  }
}
function ManageDevicesComponent_ng_container_0_ng_template_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "devicePlatform");
  }
  if (rf & 2) {
    const item_r6 = ctx.row;
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(1, 1, item_r6.platform), " ");
  }
}
function ManageDevicesComponent_ng_container_0_ng_template_20_Template(rf, ctx) {
}
function ManageDevicesComponent_ng_container_0_ng_template_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 12);
    \u0275\u0275listener("click", function ManageDevicesComponent_ng_container_0_ng_template_21_Template_button_click_0_listener() {
      const item_r8 = \u0275\u0275restoreView(_r7).row;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.deleteDevice(item_r8));
    });
    \u0275\u0275element(1, "i", 13);
    \u0275\u0275elementStart(2, "span", 14);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "button", 15);
    \u0275\u0275listener("click", function ManageDevicesComponent_ng_container_0_ng_template_21_Template_button_click_4_listener() {
      const item_r8 = \u0275\u0275restoreView(_r7).row;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.editDevice(item_r8));
    });
    \u0275\u0275element(5, "i", 16);
    \u0275\u0275elementStart(6, "span", 14);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const t_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(t_r3("delete"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(t_r3("edit"));
  }
}
function ManageDevicesComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 1)(2, "button", 2);
    \u0275\u0275pipe(3, "async");
    \u0275\u0275listener("click", function ManageDevicesComponent_ng_container_0_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.addDevice());
    });
    \u0275\u0275element(4, "i", 3);
    \u0275\u0275elementStart(5, "span", 4);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(7, "p");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "ngx-datatable", 5)(10, "ngx-datatable-column", 6);
    \u0275\u0275template(11, ManageDevicesComponent_ng_container_0_ng_template_11_Template, 1, 1, "ng-template", 7)(12, ManageDevicesComponent_ng_container_0_ng_template_12_Template, 1, 1, "ng-template", 8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "ngx-datatable-column", 9);
    \u0275\u0275template(14, ManageDevicesComponent_ng_container_0_ng_template_14_Template, 1, 1, "ng-template", 7)(15, ManageDevicesComponent_ng_container_0_ng_template_15_Template, 1, 1, "ng-template", 8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "ngx-datatable-column", 10);
    \u0275\u0275template(17, ManageDevicesComponent_ng_container_0_ng_template_17_Template, 1, 1, "ng-template", 7)(18, ManageDevicesComponent_ng_container_0_ng_template_18_Template, 2, 3, "ng-template", 8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "ngx-datatable-column", 11);
    \u0275\u0275template(20, ManageDevicesComponent_ng_container_0_ng_template_20_Template, 0, 0, "ng-template", 7)(21, ManageDevicesComponent_ng_container_0_ng_template_21_Template, 8, 2, "ng-template", 8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const t_r3 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", \u0275\u0275pipeBind1(3, 23, ctx_r1.isReadOnly$));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(t_r3("add"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r3("description"));
    \u0275\u0275advance();
    \u0275\u0275property("rows", ctx_r1.devices)("columnMode", ctx_r1.ColumnMode.flex)("footerHeight", 50)("limit", 15);
    \u0275\u0275advance();
    \u0275\u0275property("sortable", true)("draggable", false)("resizeable", false)("flexGrow", 3);
    \u0275\u0275advance(3);
    \u0275\u0275property("sortable", true)("draggable", false)("resizeable", false)("flexGrow", 1);
    \u0275\u0275advance(3);
    \u0275\u0275property("sortable", false)("draggable", false)("resizeable", false)("flexGrow", 1);
    \u0275\u0275advance(3);
    \u0275\u0275property("sortable", false)("draggable", false)("resizeable", false)("flexGrow", 1);
  }
}
var ManageDevicesComponent = class _ManageDevicesComponent {
  constructor() {
    this.cdRef = inject(ChangeDetectorRef);
    this.destroyRef = inject(DestroyRef);
    this.deviceService = inject(DeviceService);
    this.settingsService = inject(SettingsService);
    this.confirmService = inject(ConfirmService);
    this.modalService = inject(NgbModal);
    this.accountService = inject(AccountService);
    this.devices = [];
    this.isEditingDevice = false;
    this.hasEmailSetup = false;
    this.isReadOnly$ = this.accountService.currentUser$.pipe(takeUntilDestroyed(this.destroyRef), map((c) => c && this.accountService.hasReadOnlyRole(c)), shareReplay({ refCount: true, bufferSize: 1 }));
    this.ColumnMode = ColumnMode;
  }
  ngOnInit() {
    this.settingsService.isEmailSetup().subscribe((res) => {
      this.hasEmailSetup = res;
      this.cdRef.markForCheck();
    });
    this.loadDevices();
  }
  loadDevices() {
    this.isEditingDevice = false;
    this.device = void 0;
    this.cdRef.markForCheck();
    this.deviceService.getDevices().subscribe((devices) => {
      this.devices = devices;
      this.cdRef.markForCheck();
    });
  }
  deleteDevice(device) {
    return __async(this, null, function* () {
      if (!(yield this.confirmService.confirm(translate("toasts.delete-device"))))
        return;
      this.deviceService.deleteDevice(device.id).subscribe(() => {
        const index = this.devices.indexOf(device);
        this.devices.splice(index, 1);
        this.cdRef.markForCheck();
      });
    });
  }
  addDevice() {
    const ref = this.modalService.open(EditDeviceModalComponent, DefaultModalOptions);
    ref.componentInstance.device = null;
    ref.closed.subscribe((result) => {
      if (result === null)
        return;
      this.loadDevices();
    });
  }
  editDevice(device) {
    const ref = this.modalService.open(EditDeviceModalComponent, DefaultModalOptions);
    ref.componentInstance.device = device;
    ref.closed.subscribe((result) => {
      if (result === null)
        return;
      device = result;
      this.cdRef.markForCheck();
    });
  }
  static {
    this.\u0275fac = function ManageDevicesComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ManageDevicesComponent)();
    };
  }
  static {
    this.\u0275cmp = \u0275\u0275defineComponent({ type: _ManageDevicesComponent, selectors: [["app-manage-devices"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 1, vars: 1, consts: [[4, "transloco", "translocoRead"], [1, "position-relative"], [1, "btn", "btn-primary-outline", "position-absolute", "custom-position", 3, "click", "disabled"], ["aria-hidden", "true", 1, "fa", "fa-plus"], [1, "phone-hidden", "ms-1"], ["rowHeight", "auto", 1, "bootstrap", 3, "rows", "columnMode", "footerHeight", "limit"], ["prop", "name", 3, "sortable", "draggable", "resizeable", "flexGrow"], ["ngx-datatable-header-template", ""], ["ngx-datatable-cell-template", ""], ["prop", "emailAddress", 3, "sortable", "draggable", "resizeable", "flexGrow"], ["prop", "platform", 3, "sortable", "draggable", "resizeable", "flexGrow"], ["name", "actions", 3, "sortable", "draggable", "resizeable", "flexGrow"], [1, "btn", "btn-danger", "me-2", 3, "click"], ["aria-hidden", "true", 1, "fa", "fa-trash"], [1, "visually-hidden"], [1, "btn", "btn-primary", 3, "click"], ["aria-hidden", "true", 1, "fa", "fa-pen"]], template: function ManageDevicesComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, ManageDevicesComponent_ng_container_0_Template, 22, 25, "ng-container", 0);
      }
      if (rf & 2) {
        \u0275\u0275property("translocoRead", "manage-devices");
      }
    }, dependencies: [DevicePlatformPipe, TranslocoDirective, AsyncPipe, NgxDatatableModule, DatatableComponent, DataTableColumnDirective, DataTableColumnHeaderDirective, DataTableColumnCellDirective], styles: ["\n\n.custom-position[_ngcontent-%COMP%] {\n  right: 15px;\n  top: -42px;\n}\n@media (max-width: 576px) {\n  .table[_ngcontent-%COMP%] {\n    overflow-x: auto;\n    width: 100% !important;\n    display: block;\n  }\n}\n@media (max-width: 992px) {\n  .table[_ngcontent-%COMP%]   .btn-container[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: row;\n    flex-wrap: wrap;\n    align-items: center;\n    justify-content: center;\n  }\n}\n.table[_ngcontent-%COMP%]   .btn-container[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  width: 32px;\n}\n/*# sourceMappingURL=manage-devices.component.css.map */"], changeDetection: 0 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ManageDevicesComponent, { className: "ManageDevicesComponent", filePath: "src/app/user-settings/manage-devices/manage-devices.component.ts", lineNumber: 32 });
})();
export {
  ManageDevicesComponent
};
//# sourceMappingURL=manage-devices.component-PMVH3VGX.js.map
