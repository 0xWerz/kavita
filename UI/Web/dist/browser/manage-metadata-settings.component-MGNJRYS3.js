import "./chunk-CGYVF6ML.js";
import {
  PersonRolePipe
} from "./chunk-JP4GUTMJ.js";
import {
  TagBadgeComponent
} from "./chunk-MABWAPXH.js";
import {
  DefaultValuePipe
} from "./chunk-KMTIWVED.js";
import {
  SettingSwitchComponent
} from "./chunk-HXDVBBHR.js";
import {
  SettingsService
} from "./chunk-65GP3B4U.js";
import {
  AgeRatingPipe
} from "./chunk-PC4EXHMG.js";
import {
  AgeRating
} from "./chunk-6KPMHNEU.js";
import {
  MetadataService,
  PersonRole
} from "./chunk-IBO6ECG5.js";
import "./chunk-BX5PUGWH.js";
import {
  SettingItemComponent
} from "./chunk-KJWRNOWO.js";
import "./chunk-RSMGJKYW.js";
import "./chunk-FLGYJHAG.js";
import {
  CheckboxControlValueAccessor,
  DefaultValueAccessor,
  FormArrayName,
  FormBuilder,
  FormControl,
  FormControlName,
  FormGroup,
  FormGroupDirective,
  FormGroupName,
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
  ChangeDetectorRef,
  DestroyRef,
  TranslocoDirective,
  __spreadProps,
  __spreadValues,
  debounceTime,
  filter,
  inject,
  map,
  switchMap,
  takeUntilDestroyed,
  translate,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵdeclareLet,
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
  ɵɵpropertyInterpolate1,
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

// src/app/admin/_models/metadata-settings.ts
var MetadataFieldType;
(function(MetadataFieldType2) {
  MetadataFieldType2[MetadataFieldType2["Genre"] = 0] = "Genre";
  MetadataFieldType2[MetadataFieldType2["Tag"] = 1] = "Tag";
})(MetadataFieldType || (MetadataFieldType = {}));

// src/app/admin/_models/metadata-setting-field.ts
var MetadataSettingField;
(function(MetadataSettingField2) {
  MetadataSettingField2[MetadataSettingField2["Summary"] = 1] = "Summary";
  MetadataSettingField2[MetadataSettingField2["PublicationStatus"] = 2] = "PublicationStatus";
  MetadataSettingField2[MetadataSettingField2["StartDate"] = 3] = "StartDate";
  MetadataSettingField2[MetadataSettingField2["Genres"] = 4] = "Genres";
  MetadataSettingField2[MetadataSettingField2["Tags"] = 5] = "Tags";
  MetadataSettingField2[MetadataSettingField2["LocalizedName"] = 6] = "LocalizedName";
  MetadataSettingField2[MetadataSettingField2["Covers"] = 7] = "Covers";
  MetadataSettingField2[MetadataSettingField2["AgeRating"] = 8] = "AgeRating";
  MetadataSettingField2[MetadataSettingField2["People"] = 9] = "People";
})(MetadataSettingField || (MetadataSettingField = {}));
var allMetadataSettingField = Object.keys(MetadataSettingField).filter((key) => !isNaN(Number(key)) && parseInt(key, 10) >= 0).map((key) => parseInt(key, 10));

// src/app/_pipes/metadata-setting-filed.pipe.ts
var MetadataSettingFiledPipe = class _MetadataSettingFiledPipe {
  transform(value) {
    switch (value) {
      case MetadataSettingField.AgeRating:
        return translate("metadata-setting-field-pipe.age-rating");
      case MetadataSettingField.People:
        return translate("metadata-setting-field-pipe.people");
      case MetadataSettingField.Covers:
        return translate("metadata-setting-field-pipe.covers");
      case MetadataSettingField.Summary:
        return translate("metadata-setting-field-pipe.summary");
      case MetadataSettingField.PublicationStatus:
        return translate("metadata-setting-field-pipe.publication-status");
      case MetadataSettingField.StartDate:
        return translate("metadata-setting-field-pipe.start-date");
      case MetadataSettingField.Genres:
        return translate("metadata-setting-field-pipe.genres");
      case MetadataSettingField.Tags:
        return translate("metadata-setting-field-pipe.tags");
      case MetadataSettingField.LocalizedName:
        return translate("metadata-setting-field-pipe.localized-name");
    }
  }
  static {
    this.\u0275fac = function MetadataSettingFiledPipe_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _MetadataSettingFiledPipe)();
    };
  }
  static {
    this.\u0275pipe = \u0275\u0275definePipe({ name: "metadataSettingFiled", type: _MetadataSettingFiledPipe, pure: true, standalone: true });
  }
};

// src/app/admin/manage-metadata-settings/manage-metadata-settings.component.ts
var _forTrack0 = ($index, $item) => $item.value;
function ManageMetadataSettingsComponent_ng_container_0_Conditional_3_Conditional_2_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13);
    \u0275\u0275element(1, "input", 14);
    \u0275\u0275elementEnd();
  }
}
function ManageMetadataSettingsComponent_ng_container_0_Conditional_3_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "app-setting-switch", 6);
    \u0275\u0275template(1, ManageMetadataSettingsComponent_ng_container_0_Conditional_3_Conditional_2_ng_template_1_Template, 2, 0, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r1 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275property("title", t_r1("enabled-label"))("subtitle", t_r1("enabled-tooltip"));
  }
}
function ManageMetadataSettingsComponent_ng_container_0_Conditional_3_Conditional_4_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13);
    \u0275\u0275element(1, "input", 15);
    \u0275\u0275elementEnd();
  }
}
function ManageMetadataSettingsComponent_ng_container_0_Conditional_3_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "app-setting-switch", 6);
    \u0275\u0275template(1, ManageMetadataSettingsComponent_ng_container_0_Conditional_3_Conditional_4_ng_template_1_Template, 2, 0, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r1 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275property("title", t_r1("summary-label"))("subtitle", t_r1("summary-tooltip"));
  }
}
function ManageMetadataSettingsComponent_ng_container_0_Conditional_3_Conditional_6_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13);
    \u0275\u0275element(1, "input", 16);
    \u0275\u0275elementEnd();
  }
}
function ManageMetadataSettingsComponent_ng_container_0_Conditional_3_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "app-setting-switch", 6);
    \u0275\u0275template(1, ManageMetadataSettingsComponent_ng_container_0_Conditional_3_Conditional_6_ng_template_1_Template, 2, 0, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r1 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275property("title", t_r1("localized-name-label"))("subtitle", t_r1("localized-name-tooltip"));
  }
}
function ManageMetadataSettingsComponent_ng_container_0_Conditional_3_Conditional_8_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13);
    \u0275\u0275element(1, "input", 17);
    \u0275\u0275elementEnd();
  }
}
function ManageMetadataSettingsComponent_ng_container_0_Conditional_3_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "app-setting-switch", 6);
    \u0275\u0275template(1, ManageMetadataSettingsComponent_ng_container_0_Conditional_3_Conditional_8_ng_template_1_Template, 2, 0, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r1 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275property("title", t_r1("derive-publication-status-label"))("subtitle", t_r1("derive-publication-status-tooltip"));
  }
}
function ManageMetadataSettingsComponent_ng_container_0_Conditional_3_Conditional_10_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13);
    \u0275\u0275element(1, "input", 18);
    \u0275\u0275elementEnd();
  }
}
function ManageMetadataSettingsComponent_ng_container_0_Conditional_3_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "app-setting-switch", 6);
    \u0275\u0275template(1, ManageMetadataSettingsComponent_ng_container_0_Conditional_3_Conditional_10_ng_template_1_Template, 2, 0, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r1 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275property("title", t_r1("enable-relations-label"))("subtitle", t_r1("enable-relations-tooltip"));
  }
}
function ManageMetadataSettingsComponent_ng_container_0_Conditional_3_Conditional_12_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13);
    \u0275\u0275element(1, "input", 19);
    \u0275\u0275elementEnd();
  }
}
function ManageMetadataSettingsComponent_ng_container_0_Conditional_3_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "app-setting-switch", 6);
    \u0275\u0275template(1, ManageMetadataSettingsComponent_ng_container_0_Conditional_3_Conditional_12_ng_template_1_Template, 2, 0, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r1 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275property("title", t_r1("enable-start-date-label"))("subtitle", t_r1("enable-start-date-tooltip"));
  }
}
function ManageMetadataSettingsComponent_ng_container_0_Conditional_3_Conditional_14_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13);
    \u0275\u0275element(1, "input", 20);
    \u0275\u0275elementEnd();
  }
}
function ManageMetadataSettingsComponent_ng_container_0_Conditional_3_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "app-setting-switch", 6);
    \u0275\u0275template(1, ManageMetadataSettingsComponent_ng_container_0_Conditional_3_Conditional_14_ng_template_1_Template, 2, 0, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r1 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275property("title", t_r1("enable-cover-image-label"))("subtitle", t_r1("enable-cover-image-tooltip"));
  }
}
function ManageMetadataSettingsComponent_ng_container_0_Conditional_3_Conditional_15_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13);
    \u0275\u0275element(1, "input", 22);
    \u0275\u0275elementEnd();
  }
}
function ManageMetadataSettingsComponent_ng_container_0_Conditional_3_Conditional_15_ng_template_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13);
    \u0275\u0275element(1, "input", 23);
    \u0275\u0275elementEnd();
  }
}
function ManageMetadataSettingsComponent_ng_container_0_Conditional_3_Conditional_15_Conditional_10_For_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 25)(1, "div", 26);
    \u0275\u0275element(2, "input", 27);
    \u0275\u0275elementStart(3, "label", 28);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "personRole");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const role_r2 = ctx.$implicit;
    const \u0275$index_119_r3 = ctx.$index;
    \u0275\u0275advance(2);
    \u0275\u0275property("formControlName", "personRole_" + \u0275$index_119_r3)("id", "role-" + role_r2);
    \u0275\u0275advance();
    \u0275\u0275property("for", "role-" + role_r2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 4, role_r2));
  }
}
function ManageMetadataSettingsComponent_ng_container_0_Conditional_3_Conditional_15_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h5");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "div", 24);
    \u0275\u0275repeaterCreate(3, ManageMetadataSettingsComponent_ng_container_0_Conditional_3_Conditional_15_Conditional_10_For_4_Template, 6, 6, "div", 25, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r1 = \u0275\u0275nextContext(3).$implicit;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(t_r1("person-roles-label"));
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r3.personRoles);
  }
}
function ManageMetadataSettingsComponent_ng_container_0_Conditional_3_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 7);
    \u0275\u0275elementStart(1, "div", 5)(2, "div", 21)(3, "app-setting-switch", 6);
    \u0275\u0275template(4, ManageMetadataSettingsComponent_ng_container_0_Conditional_3_Conditional_15_ng_template_4_Template, 2, 0, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 21)(7, "app-setting-switch", 6);
    \u0275\u0275template(8, ManageMetadataSettingsComponent_ng_container_0_Conditional_3_Conditional_15_ng_template_8_Template, 2, 0, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(10, ManageMetadataSettingsComponent_ng_container_0_Conditional_3_Conditional_15_Conditional_10_Template, 5, 1);
  }
  if (rf & 2) {
    const t_r1 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275property("title", t_r1("enable-people-label"))("subtitle", t_r1("enable-people-tooltip"));
    \u0275\u0275advance(4);
    \u0275\u0275property("title", t_r1("first-last-name-label"))("subtitle", t_r1("first-last-name-tooltip"));
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r3.settingsForm.get("personRoles") ? 10 : -1);
  }
}
function ManageMetadataSettingsComponent_ng_container_0_Conditional_3_Conditional_19_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13);
    \u0275\u0275element(1, "input", 29);
    \u0275\u0275elementEnd();
  }
}
function ManageMetadataSettingsComponent_ng_container_0_Conditional_3_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "app-setting-switch", 6);
    \u0275\u0275template(1, ManageMetadataSettingsComponent_ng_container_0_Conditional_3_Conditional_19_ng_template_1_Template, 2, 0, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r1 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275property("title", t_r1("enable-genres-label"))("subtitle", t_r1("enable-genres-tooltip"));
  }
}
function ManageMetadataSettingsComponent_ng_container_0_Conditional_3_Conditional_21_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13);
    \u0275\u0275element(1, "input", 30);
    \u0275\u0275elementEnd();
  }
}
function ManageMetadataSettingsComponent_ng_container_0_Conditional_3_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "app-setting-switch", 6);
    \u0275\u0275template(1, ManageMetadataSettingsComponent_ng_container_0_Conditional_3_Conditional_21_ng_template_1_Template, 2, 0, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r1 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275property("title", t_r1("enable-tags-label"))("subtitle", t_r1("enable-tags-tooltip"));
  }
}
function ManageMetadataSettingsComponent_ng_container_0_Conditional_3_Conditional_23_ng_template_1_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "app-tag-badge");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const opt_r5 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(opt_r5.trim());
  }
}
function ManageMetadataSettingsComponent_ng_container_0_Conditional_3_Conditional_23_ng_template_1_ForEmpty_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "defaultValue");
  }
  if (rf & 2) {
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(1, 1, null), " ");
  }
}
function ManageMetadataSettingsComponent_ng_container_0_Conditional_3_Conditional_23_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275declareLet(0);
    \u0275\u0275repeaterCreate(1, ManageMetadataSettingsComponent_ng_container_0_Conditional_3_Conditional_23_ng_template_1_For_2_Template, 2, 1, "app-tag-badge", null, \u0275\u0275repeaterTrackByIdentity, false, ManageMetadataSettingsComponent_ng_container_0_Conditional_3_Conditional_23_ng_template_1_ForEmpty_3_Template, 2, 3);
  }
  if (rf & 2) {
    const formControl_r6 = \u0275\u0275nextContext();
    const val_r7 = \u0275\u0275nextContext(3).breakTags(formControl_r6.value);
    \u0275\u0275advance();
    \u0275\u0275repeater(val_r7);
  }
}
function ManageMetadataSettingsComponent_ng_container_0_Conditional_3_Conditional_23_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "textarea", 31);
  }
}
function ManageMetadataSettingsComponent_ng_container_0_Conditional_3_Conditional_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "app-setting-item", 6);
    \u0275\u0275template(1, ManageMetadataSettingsComponent_ng_container_0_Conditional_3_Conditional_23_ng_template_1_Template, 4, 1, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
    \u0275\u0275text(3, "s ");
    \u0275\u0275template(4, ManageMetadataSettingsComponent_ng_container_0_Conditional_3_Conditional_23_ng_template_4_Template, 1, 0, "ng-template", null, 2, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r1 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275property("title", t_r1("blacklist-label"))("subtitle", t_r1("blacklist-tooltip"));
  }
}
function ManageMetadataSettingsComponent_ng_container_0_Conditional_3_Conditional_25_ng_template_1_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "app-tag-badge");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const opt_r8 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(opt_r8.trim());
  }
}
function ManageMetadataSettingsComponent_ng_container_0_Conditional_3_Conditional_25_ng_template_1_ForEmpty_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "defaultValue");
  }
  if (rf & 2) {
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(1, 1, null), " ");
  }
}
function ManageMetadataSettingsComponent_ng_container_0_Conditional_3_Conditional_25_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275declareLet(0);
    \u0275\u0275repeaterCreate(1, ManageMetadataSettingsComponent_ng_container_0_Conditional_3_Conditional_25_ng_template_1_For_2_Template, 2, 1, "app-tag-badge", null, \u0275\u0275repeaterTrackByIdentity, false, ManageMetadataSettingsComponent_ng_container_0_Conditional_3_Conditional_25_ng_template_1_ForEmpty_3_Template, 2, 3);
  }
  if (rf & 2) {
    const formControl_r9 = \u0275\u0275nextContext();
    const val_r10 = \u0275\u0275nextContext(3).breakTags(formControl_r9.value);
    \u0275\u0275advance();
    \u0275\u0275repeater(val_r10);
  }
}
function ManageMetadataSettingsComponent_ng_container_0_Conditional_3_Conditional_25_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "textarea", 32);
  }
}
function ManageMetadataSettingsComponent_ng_container_0_Conditional_3_Conditional_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "app-setting-item", 6);
    \u0275\u0275template(1, ManageMetadataSettingsComponent_ng_container_0_Conditional_3_Conditional_25_ng_template_1_Template, 4, 1, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
    \u0275\u0275text(3, "s ");
    \u0275\u0275template(4, ManageMetadataSettingsComponent_ng_container_0_Conditional_3_Conditional_25_ng_template_4_Template, 1, 0, "ng-template", null, 2, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r1 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275property("title", t_r1("whitelist-label"))("subtitle", t_r1("whitelist-tooltip"));
  }
}
function ManageMetadataSettingsComponent_ng_container_0_Conditional_3_For_33_For_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 38);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "ageRating");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ageRating_r13 = ctx.$implicit;
    \u0275\u0275property("value", ageRating_r13.value);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 2, ageRating_r13.value), " ");
  }
}
function ManageMetadataSettingsComponent_ng_container_0_Conditional_3_For_33_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 40);
    \u0275\u0275listener("click", function ManageMetadataSettingsComponent_ng_container_0_Conditional_3_For_33_Conditional_12_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r15);
      const ctx_r3 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r3.addAgeRatingMapping());
    });
    \u0275\u0275element(1, "i", 43);
    \u0275\u0275elementEnd();
  }
}
function ManageMetadataSettingsComponent_ng_container_0_Conditional_3_For_33_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 10)(1, "div", 33);
    \u0275\u0275element(2, "input", 34);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 35);
    \u0275\u0275element(4, "i", 36);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 33)(6, "select", 37);
    \u0275\u0275repeaterCreate(7, ManageMetadataSettingsComponent_ng_container_0_Conditional_3_For_33_For_8_Template, 3, 4, "option", 38, _forTrack0);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 39)(10, "button", 40);
    \u0275\u0275listener("click", function ManageMetadataSettingsComponent_ng_container_0_Conditional_3_For_33_Template_button_click_10_listener() {
      const \u0275$index_206_r14 = \u0275\u0275restoreView(_r12).$index;
      const ctx_r3 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r3.removeAgeRatingMappingRow(\u0275$index_206_r14));
    });
    \u0275\u0275element(11, "i", 41);
    \u0275\u0275elementEnd();
    \u0275\u0275template(12, ManageMetadataSettingsComponent_ng_container_0_Conditional_3_For_33_Conditional_12_Template, 2, 0, "button", 42);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const \u0275$index_206_r14 = ctx.$index;
    const \u0275$count_206_r16 = ctx.$count;
    const ctx_r3 = \u0275\u0275nextContext(3);
    \u0275\u0275property("formGroupName", \u0275$index_206_r14);
    \u0275\u0275advance(7);
    \u0275\u0275repeater(ctx_r3.ageRatings);
    \u0275\u0275advance(5);
    \u0275\u0275conditional(\u0275$index_206_r14 === \u0275$count_206_r16 - 1 ? 12 : -1);
  }
}
function ManageMetadataSettingsComponent_ng_container_0_Conditional_3_ForEmpty_34_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 44);
    \u0275\u0275listener("click", function ManageMetadataSettingsComponent_ng_container_0_Conditional_3_ForEmpty_34_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r3 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r3.addAgeRatingMapping());
    });
    \u0275\u0275element(1, "i", 43);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r1 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", t_r1("add-age-rating-mapping-label"), " ");
  }
}
function ManageMetadataSettingsComponent_ng_container_0_Conditional_3_For_42_Conditional_25_Template(rf, ctx) {
  if (rf & 1) {
    const _r20 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 40);
    \u0275\u0275listener("click", function ManageMetadataSettingsComponent_ng_container_0_Conditional_3_For_42_Conditional_25_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r20);
      const ctx_r3 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r3.addFieldMapping());
    });
    \u0275\u0275element(1, "i", 43);
    \u0275\u0275elementEnd();
  }
}
function ManageMetadataSettingsComponent_ng_container_0_Conditional_3_For_42_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 10)(1, "div", 39)(2, "select", 45)(3, "option", 38);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "option", 38);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(7, "div", 39);
    \u0275\u0275element(8, "input", 46);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 39)(10, "select", 47)(11, "option", 38);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "option", 38);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(15, "div", 39);
    \u0275\u0275element(16, "input", 48);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "div", 39)(18, "div", 26);
    \u0275\u0275element(19, "input", 49);
    \u0275\u0275elementStart(20, "label", 28);
    \u0275\u0275text(21);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(22, "div", 39)(23, "button", 40);
    \u0275\u0275listener("click", function ManageMetadataSettingsComponent_ng_container_0_Conditional_3_For_42_Template_button_click_23_listener() {
      const \u0275$index_253_r19 = \u0275\u0275restoreView(_r18).$index;
      const ctx_r3 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r3.removeFieldMappingRow(\u0275$index_253_r19));
    });
    \u0275\u0275element(24, "i", 41);
    \u0275\u0275elementEnd();
    \u0275\u0275template(25, ManageMetadataSettingsComponent_ng_container_0_Conditional_3_For_42_Conditional_25_Template, 2, 0, "button", 42);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const \u0275$index_253_r19 = ctx.$index;
    const \u0275$count_253_r21 = ctx.$count;
    const t_r1 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275property("formGroupName", \u0275$index_253_r19);
    \u0275\u0275advance(3);
    \u0275\u0275property("value", ctx_r3.MetadataFieldType.Genre);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(t_r1("genre"));
    \u0275\u0275advance();
    \u0275\u0275property("value", ctx_r3.MetadataFieldType.Tag);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(t_r1("tag"));
    \u0275\u0275advance(5);
    \u0275\u0275property("value", ctx_r3.MetadataFieldType.Genre);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(t_r1("genre"));
    \u0275\u0275advance();
    \u0275\u0275property("value", ctx_r3.MetadataFieldType.Tag);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(t_r1("tag"));
    \u0275\u0275advance(5);
    \u0275\u0275propertyInterpolate1("id", "remove-source-tag-", \u0275$index_253_r19, "");
    \u0275\u0275advance();
    \u0275\u0275property("for", "remove-source-tag-" + \u0275$index_253_r19);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", t_r1("remove-source-tag-label"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275conditional(\u0275$index_253_r19 === \u0275$count_253_r21 - 1 ? 25 : -1);
  }
}
function ManageMetadataSettingsComponent_ng_container_0_Conditional_3_ForEmpty_43_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 44);
    \u0275\u0275listener("click", function ManageMetadataSettingsComponent_ng_container_0_Conditional_3_ForEmpty_43_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r17);
      const ctx_r3 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r3.addFieldMapping());
    });
    \u0275\u0275element(1, "i", 43);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r1 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", t_r1("add-field-mapping-label"), " ");
  }
}
function ManageMetadataSettingsComponent_ng_container_0_Conditional_3_Conditional_45_For_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 25)(1, "div", 26);
    \u0275\u0275element(2, "input", 27);
    \u0275\u0275elementStart(3, "label", 28);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "metadataSettingFiled");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const field_r22 = ctx.$implicit;
    const \u0275$index_321_r23 = ctx.$index;
    \u0275\u0275advance(2);
    \u0275\u0275property("formControlName", "override_" + \u0275$index_321_r23)("id", "override-" + field_r22);
    \u0275\u0275advance();
    \u0275\u0275property("for", "override-" + field_r22);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 4, field_r22));
  }
}
function ManageMetadataSettingsComponent_ng_container_0_Conditional_3_Conditional_45_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h5");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 50);
    \u0275\u0275repeaterCreate(5, ManageMetadataSettingsComponent_ng_container_0_Conditional_3_Conditional_45_For_6_Template, 6, 6, "div", 25, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r1 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(t_r1("overrides-label"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r1("overrides-description"));
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r3.allMetadataSettingFields);
  }
}
function ManageMetadataSettingsComponent_ng_container_0_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "form", 4)(1, "div", 5);
    \u0275\u0275template(2, ManageMetadataSettingsComponent_ng_container_0_Conditional_3_Conditional_2_Template, 3, 2, "app-setting-switch", 6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 5);
    \u0275\u0275template(4, ManageMetadataSettingsComponent_ng_container_0_Conditional_3_Conditional_4_Template, 3, 2, "app-setting-switch", 6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 5);
    \u0275\u0275template(6, ManageMetadataSettingsComponent_ng_container_0_Conditional_3_Conditional_6_Template, 3, 2, "app-setting-switch", 6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 5);
    \u0275\u0275template(8, ManageMetadataSettingsComponent_ng_container_0_Conditional_3_Conditional_8_Template, 3, 2, "app-setting-switch", 6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 5);
    \u0275\u0275template(10, ManageMetadataSettingsComponent_ng_container_0_Conditional_3_Conditional_10_Template, 3, 2, "app-setting-switch", 6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 5);
    \u0275\u0275template(12, ManageMetadataSettingsComponent_ng_container_0_Conditional_3_Conditional_12_Template, 3, 2, "app-setting-switch", 6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div", 5);
    \u0275\u0275template(14, ManageMetadataSettingsComponent_ng_container_0_Conditional_3_Conditional_14_Template, 3, 2, "app-setting-switch", 6);
    \u0275\u0275elementEnd();
    \u0275\u0275template(15, ManageMetadataSettingsComponent_ng_container_0_Conditional_3_Conditional_15_Template, 11, 5);
    \u0275\u0275element(16, "div", 7);
    \u0275\u0275elementStart(17, "div", 5)(18, "div", 8);
    \u0275\u0275template(19, ManageMetadataSettingsComponent_ng_container_0_Conditional_3_Conditional_19_Template, 3, 2, "app-setting-switch", 6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "div", 8);
    \u0275\u0275template(21, ManageMetadataSettingsComponent_ng_container_0_Conditional_3_Conditional_21_Template, 3, 2, "app-setting-switch", 6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "div", 5);
    \u0275\u0275template(23, ManageMetadataSettingsComponent_ng_container_0_Conditional_3_Conditional_23_Template, 6, 2, "app-setting-item", 6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "div", 5);
    \u0275\u0275template(25, ManageMetadataSettingsComponent_ng_container_0_Conditional_3_Conditional_25_Template, 6, 2, "app-setting-item", 6);
    \u0275\u0275elementEnd();
    \u0275\u0275element(26, "div", 7);
    \u0275\u0275elementStart(27, "h4");
    \u0275\u0275text(28);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "p");
    \u0275\u0275text(30);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "div", 9);
    \u0275\u0275repeaterCreate(32, ManageMetadataSettingsComponent_ng_container_0_Conditional_3_For_33_Template, 13, 2, "div", 10, \u0275\u0275repeaterTrackByIdentity, false, ManageMetadataSettingsComponent_ng_container_0_Conditional_3_ForEmpty_34_Template, 3, 1, "button", 11);
    \u0275\u0275elementEnd();
    \u0275\u0275element(35, "div", 7);
    \u0275\u0275elementStart(36, "h4");
    \u0275\u0275text(37);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "p");
    \u0275\u0275text(39);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "div", 12);
    \u0275\u0275repeaterCreate(41, ManageMetadataSettingsComponent_ng_container_0_Conditional_3_For_42_Template, 26, 14, "div", 10, \u0275\u0275repeaterTrackByIdentity, false, ManageMetadataSettingsComponent_ng_container_0_Conditional_3_ForEmpty_43_Template, 3, 1, "button", 11);
    \u0275\u0275elementEnd();
    \u0275\u0275element(44, "div", 7);
    \u0275\u0275template(45, ManageMetadataSettingsComponent_ng_container_0_Conditional_3_Conditional_45_Template, 7, 2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_4_0;
    let tmp_5_0;
    let tmp_6_0;
    let tmp_7_0;
    let tmp_8_0;
    let tmp_9_0;
    let tmp_10_0;
    let tmp_11_0;
    let tmp_12_0;
    let tmp_13_0;
    let tmp_14_0;
    let tmp_15_0;
    const t_r1 = \u0275\u0275nextContext().$implicit;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275property("formGroup", ctx_r3.settingsForm);
    \u0275\u0275advance(2);
    \u0275\u0275conditional((tmp_4_0 = ctx_r3.settingsForm.get("enabled")) ? 2 : -1, tmp_4_0);
    \u0275\u0275advance(2);
    \u0275\u0275conditional((tmp_5_0 = ctx_r3.settingsForm.get("enableSummary")) ? 4 : -1, tmp_5_0);
    \u0275\u0275advance(2);
    \u0275\u0275conditional((tmp_6_0 = ctx_r3.settingsForm.get("enableLocalizedName")) ? 6 : -1, tmp_6_0);
    \u0275\u0275advance(2);
    \u0275\u0275conditional((tmp_7_0 = ctx_r3.settingsForm.get("enablePublicationStatus")) ? 8 : -1, tmp_7_0);
    \u0275\u0275advance(2);
    \u0275\u0275conditional((tmp_8_0 = ctx_r3.settingsForm.get("enableRelationships")) ? 10 : -1, tmp_8_0);
    \u0275\u0275advance(2);
    \u0275\u0275conditional((tmp_9_0 = ctx_r3.settingsForm.get("enableStartDate")) ? 12 : -1, tmp_9_0);
    \u0275\u0275advance(2);
    \u0275\u0275conditional((tmp_10_0 = ctx_r3.settingsForm.get("enableCoverImage")) ? 14 : -1, tmp_10_0);
    \u0275\u0275advance();
    \u0275\u0275conditional((tmp_11_0 = ctx_r3.settingsForm.get("enablePeople")) ? 15 : -1, tmp_11_0);
    \u0275\u0275advance(4);
    \u0275\u0275conditional((tmp_12_0 = ctx_r3.settingsForm.get("enableGenres")) ? 19 : -1, tmp_12_0);
    \u0275\u0275advance(2);
    \u0275\u0275conditional((tmp_13_0 = ctx_r3.settingsForm.get("enableTags")) ? 21 : -1, tmp_13_0);
    \u0275\u0275advance(2);
    \u0275\u0275conditional((tmp_14_0 = ctx_r3.settingsForm.get("blacklist")) ? 23 : -1, tmp_14_0);
    \u0275\u0275advance(2);
    \u0275\u0275conditional((tmp_15_0 = ctx_r3.settingsForm.get("whitelist")) ? 25 : -1, tmp_15_0);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(t_r1("age-rating-mapping-title"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r1("age-rating-mapping-description"));
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r3.ageRatingMappings.controls);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(t_r1("field-mapping-title"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r1("field-mapping-description"));
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r3.fieldMappings.controls);
    \u0275\u0275advance(4);
    \u0275\u0275conditional(ctx_r3.settingsForm.get("overrides") ? 45 : -1);
  }
}
function ManageMetadataSettingsComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "p");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, ManageMetadataSettingsComponent_ng_container_0_Conditional_3_Template, 46, 20, "form", 4);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const t_r1 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r1("description"));
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r3.isLoaded ? 3 : -1);
  }
}
var ManageMetadataSettingsComponent = class _ManageMetadataSettingsComponent {
  constructor() {
    this.MetadataFieldType = MetadataFieldType;
    this.settingService = inject(SettingsService);
    this.metadataService = inject(MetadataService);
    this.cdRef = inject(ChangeDetectorRef);
    this.destroyRef = inject(DestroyRef);
    this.fb = inject(FormBuilder);
    this.settingsForm = new FormGroup({});
    this.ageRatings = [];
    this.ageRatingMappings = this.fb.array([]);
    this.fieldMappings = this.fb.array([]);
    this.personRoles = [PersonRole.Writer, PersonRole.CoverArtist, PersonRole.Character];
    this.isLoaded = false;
    this.allMetadataSettingFields = allMetadataSettingField;
  }
  ngOnInit() {
    this.metadataService.getAllAgeRatings().subscribe((ratings) => {
      this.ageRatings = ratings;
      this.cdRef.markForCheck();
    });
    this.settingsForm.addControl("ageRatingMappings", this.ageRatingMappings);
    this.settingsForm.addControl("fieldMappings", this.fieldMappings);
    this.settingService.getMetadataSettings().subscribe((settings) => {
      this.settingsForm.addControl("enabled", new FormControl(settings.enabled, []));
      this.settingsForm.addControl("enableSummary", new FormControl(settings.enableSummary, []));
      this.settingsForm.addControl("enableLocalizedName", new FormControl(settings.enableLocalizedName, []));
      this.settingsForm.addControl("enablePublicationStatus", new FormControl(settings.enablePublicationStatus, []));
      this.settingsForm.addControl("enableRelations", new FormControl(settings.enableRelationships, []));
      this.settingsForm.addControl("enableGenres", new FormControl(settings.enableGenres, []));
      this.settingsForm.addControl("enableTags", new FormControl(settings.enableTags, []));
      this.settingsForm.addControl("enableRelationships", new FormControl(settings.enableRelationships, []));
      this.settingsForm.addControl("enablePeople", new FormControl(settings.enablePeople, []));
      this.settingsForm.addControl("enableStartDate", new FormControl(settings.enableStartDate, []));
      this.settingsForm.addControl("enableCoverImage", new FormControl(settings.enableCoverImage, []));
      this.settingsForm.addControl("blacklist", new FormControl((settings.blacklist || "").join(","), []));
      this.settingsForm.addControl("whitelist", new FormControl((settings.whitelist || "").join(","), []));
      this.settingsForm.addControl("firstLastPeopleNaming", new FormControl(settings.firstLastPeopleNaming, []));
      this.settingsForm.addControl("personRoles", this.fb.group(Object.fromEntries(this.personRoles.map((role, index) => [
        `personRole_${index}`,
        this.fb.control((settings.personRoles || this.personRoles).includes(role))
      ]))));
      this.settingsForm.addControl("overrides", this.fb.group(Object.fromEntries(this.allMetadataSettingFields.map((role, index) => [
        `override_${index}`,
        this.fb.control((settings.overrides || []).includes(role))
      ]))));
      if (settings.ageRatingMappings) {
        Object.entries(settings.ageRatingMappings).forEach(([str, rating]) => {
          this.addAgeRatingMapping(str, rating);
        });
      }
      if (settings.fieldMappings) {
        settings.fieldMappings.forEach((mapping) => {
          this.addFieldMapping(mapping);
        });
      }
      this.settingsForm.get("enablePeople")?.valueChanges.subscribe((enabled) => {
        const firstLastControl = this.settingsForm.get("firstLastPeopleNaming");
        if (enabled) {
          firstLastControl?.enable();
        } else {
          firstLastControl?.disable();
        }
      });
      this.settingsForm.get("enablePeople")?.updateValueAndValidity();
      this.settingsForm.get("enablePeople")?.valueChanges.subscribe((enabled) => {
        const personRolesArray = this.settingsForm.get("personRoles");
        if (enabled) {
          personRolesArray.enable();
        } else {
          personRolesArray.disable();
        }
      });
      this.isLoaded = true;
      this.cdRef.markForCheck();
      this.settingsForm.valueChanges.pipe(debounceTime(300), takeUntilDestroyed(this.destroyRef), map((_) => this.packData()), switchMap((data) => this.settingService.updateMetadataSettings(data))).subscribe();
    });
  }
  breakTags(csString) {
    if (csString) {
      return csString.split(",");
    }
    return [];
  }
  packData(withFieldMappings = true) {
    const model = this.settingsForm.value;
    const ageRatingMappings = this.ageRatingMappings.controls.reduce((acc, control) => {
      const { str, rating } = control.value;
      if (str && rating) {
        acc[str] = parseInt(rating + "", 10);
      }
      return acc;
    }, {});
    const fieldMappings = this.fieldMappings.controls.map((control) => {
      const value = control.value;
      return {
        id: value.id,
        sourceType: parseInt(value.sourceType + "", 10),
        destinationType: parseInt(value.destinationType + "", 10),
        sourceValue: value.sourceValue,
        destinationValue: value.destinationValue,
        excludeFromSource: value.excludeFromSource
      };
    }).filter((m) => m.sourceValue.length > 0);
    return __spreadProps(__spreadValues({}, model), {
      ageRatingMappings,
      fieldMappings: withFieldMappings ? fieldMappings : [],
      blacklist: (model.blacklist || "").split(",").map((item) => item.trim()).filter((tag) => tag.length > 0),
      whitelist: (model.whitelist || "").split(",").map((item) => item.trim()).filter((tag) => tag.length > 0),
      personRoles: Object.entries(this.settingsForm.get("personRoles").value).filter(([_, value]) => value).map(([key, _]) => this.personRoles[parseInt(key.split("_")[1], 10)]),
      overrides: Object.entries(this.settingsForm.get("overrides").value).filter(([_, value]) => value).map(([key, _]) => this.allMetadataSettingFields[parseInt(key.split("_")[1], 10)])
    });
  }
  addAgeRatingMapping(str = "", rating = AgeRating.Unknown) {
    const mappingGroup = this.fb.group({
      str: [str, Validators.required],
      rating: [rating, Validators.required]
    });
    this.ageRatingMappings.push(mappingGroup);
  }
  removeAgeRatingMappingRow(index) {
    this.ageRatingMappings.removeAt(index);
  }
  addFieldMapping(mapping = null) {
    const mappingGroup = this.fb.group({
      id: [mapping?.id || 0],
      sourceType: [mapping?.sourceType || MetadataFieldType.Genre, Validators.required],
      destinationType: [mapping?.destinationType || MetadataFieldType.Genre, Validators.required],
      sourceValue: [mapping?.sourceValue || "", Validators.required],
      destinationValue: [mapping?.destinationValue || ""],
      excludeFromSource: [mapping?.excludeFromSource || false]
    });
    mappingGroup.get("sourceValue")?.valueChanges.pipe(filter(() => !mappingGroup.get("destinationValue")?.value)).subscribe((sourceValue) => {
      mappingGroup.get("destinationValue")?.setValue(sourceValue);
    });
    this.fieldMappings.push(mappingGroup);
  }
  removeFieldMappingRow(index) {
    this.fieldMappings.removeAt(index);
  }
  static {
    this.\u0275fac = function ManageMetadataSettingsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ManageMetadataSettingsComponent)();
    };
  }
  static {
    this.\u0275cmp = \u0275\u0275defineComponent({ type: _ManageMetadataSettingsComponent, selectors: [["app-manage-metadata-settings"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 1, vars: 1, consts: [["switch", ""], ["view", ""], ["edit", ""], [4, "transloco", "translocoRead"], [3, "formGroup"], [1, "row", "g-0", "mt-4", "mb-4"], [3, "title", "subtitle"], [1, "setting-section-break"], [1, "col-md-6"], ["formArrayName", "ageRatingMappings"], [1, "row", "mb-2", 3, "formGroupName"], [1, "btn", "btn-secondary"], ["formArrayName", "fieldMappings"], [1, "form-check", "form-switch", "float-end"], ["id", "enabled", "type", "checkbox", "formControlName", "enabled", 1, "form-check-input"], ["id", "summary", "type", "checkbox", "formControlName", "enableSummary", 1, "form-check-input"], ["id", "localized-name", "type", "checkbox", "formControlName", "enableLocalizedName", 1, "form-check-input"], ["id", "derive-publication-status", "type", "checkbox", "formControlName", "enablePublicationStatus", 1, "form-check-input"], ["id", "enable-relations-status", "type", "checkbox", "formControlName", "enableRelationships", 1, "form-check-input"], ["id", "enable-start-date-status", "type", "checkbox", "formControlName", "enableStartDate", 1, "form-check-input"], ["id", "enable-cover-image", "type", "checkbox", "formControlName", "enableCoverImage", 1, "form-check-input"], [1, "col-6"], ["id", "enable-people-status", "type", "checkbox", "formControlName", "enablePeople", 1, "form-check-input"], ["id", "enable-first-last-name", "type", "checkbox", "formControlName", "firstLastPeopleNaming", 1, "form-check-input"], ["formArrayName", "personRoles", 1, "row", "g-0", "mt-4", "mb-4"], [1, "col-md-3"], [1, "form-check"], ["type", "checkbox", 1, "form-check-input", 3, "formControlName", "id"], [1, "form-check-label", 3, "for"], ["id", "enable-genres-status", "type", "checkbox", "formControlName", "enableGenres", 1, "form-check-input"], ["id", "enable-tags-status", "type", "checkbox", "formControlName", "enableTags", 1, "form-check-input"], ["rows", "3", "id", "blacklist", "formControlName", "blacklist", 1, "form-control"], ["rows", "3", "id", "whitelist", "formControlName", "whitelist", 1, "form-control"], [1, "col-md-4", "d-flex", "align-items-center", "justify-content-center"], ["type", "text", "formControlName", "str", "autocomplete", "off", 1, "form-control"], [1, "col-md-2", "d-flex", "align-items-center", "justify-content-center"], ["aria-hidden", "true", 1, "fa", "fa-arrow-right"], ["formControlName", "rating", 1, "form-select"], [3, "value"], [1, "col-md-2"], [1, "btn", "btn-icon", 3, "click"], ["aria-hidden", "true", 1, "fa", "fa-trash-alt"], [1, "btn", "btn-icon"], ["aria-hidden", "true", 1, "fa", "fa-plus"], [1, "btn", "btn-secondary", 3, "click"], ["formControlName", "sourceType", 1, "form-select"], ["type", "text", "formControlName", "sourceValue", "placeholder", "Source genre/tag", 1, "form-control"], ["formControlName", "destinationType", 1, "form-select"], ["type", "text", "formControlName", "destinationValue", "placeholder", "Destination genre/tag", 1, "form-control"], ["type", "checkbox", "formControlName", "excludeFromSource", 1, "form-check-input", 3, "id"], ["formArrayName", "overrides", 1, "row", "g-0", "mt-4", "mb-4"]], template: function ManageMetadataSettingsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, ManageMetadataSettingsComponent_ng_container_0_Template, 4, 2, "ng-container", 3);
      }
      if (rf & 2) {
        \u0275\u0275property("translocoRead", "manage-metadata-settings");
      }
    }, dependencies: [
      TranslocoDirective,
      ReactiveFormsModule,
      \u0275NgNoValidate,
      NgSelectOption,
      \u0275NgSelectMultipleOption,
      DefaultValueAccessor,
      CheckboxControlValueAccessor,
      SelectControlValueAccessor,
      NgControlStatus,
      NgControlStatusGroup,
      FormGroupDirective,
      FormControlName,
      FormGroupName,
      FormArrayName,
      SettingSwitchComponent,
      SettingItemComponent,
      DefaultValuePipe,
      TagBadgeComponent,
      AgeRatingPipe,
      PersonRolePipe,
      MetadataSettingFiledPipe
    ], changeDetection: 0 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ManageMetadataSettingsComponent, { className: "ManageMetadataSettingsComponent", filePath: "src/app/admin/manage-metadata-settings/manage-metadata-settings.component.ts", lineNumber: 43 });
})();
export {
  ManageMetadataSettingsComponent
};
//# sourceMappingURL=manage-metadata-settings.component-MGNJRYS3.js.map
