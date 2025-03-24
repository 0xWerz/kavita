import {
  SettingItemComponent
} from "./chunk-KJWRNOWO.js";
import {
  AccountService
} from "./chunk-U2DWQJI2.js";
import {
  ConfirmService,
  NgbTooltip
} from "./chunk-2R2RCU4Y.js";
import {
  ToastrService
} from "./chunk-5J5IKBMT.js";
import {
  ChangeDetectorRef,
  DOCUMENT,
  DestroyRef,
  Directive,
  EventEmitter,
  Inject,
  Injectable,
  InjectionToken,
  Input,
  NgModule,
  NgZone,
  Optional,
  Output,
  TranslocoDirective,
  __async,
  inject,
  setClassMetadata,
  takeUntilDestroyed,
  translate,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵinject,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpropertyInterpolate1,
  ɵɵqueryRefresh,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵviewQuery
} from "./chunk-PYHIUVNJ.js";

// node_modules/@angular/cdk/fesm2022/clipboard.mjs
var PendingCopy = class {
  constructor(text, _document) {
    this._document = _document;
    const textarea = this._textarea = this._document.createElement("textarea");
    const styles = textarea.style;
    styles.position = "fixed";
    styles.top = styles.opacity = "0";
    styles.left = "-999em";
    textarea.setAttribute("aria-hidden", "true");
    textarea.value = text;
    textarea.readOnly = true;
    (this._document.fullscreenElement || this._document.body).appendChild(textarea);
  }
  /** Finishes copying the text. */
  copy() {
    const textarea = this._textarea;
    let successful = false;
    try {
      if (textarea) {
        const currentFocus = this._document.activeElement;
        textarea.select();
        textarea.setSelectionRange(0, textarea.value.length);
        successful = this._document.execCommand("copy");
        if (currentFocus) {
          currentFocus.focus();
        }
      }
    } catch {
    }
    return successful;
  }
  /** Cleans up DOM changes used to perform the copy operation. */
  destroy() {
    const textarea = this._textarea;
    if (textarea) {
      textarea.remove();
      this._textarea = void 0;
    }
  }
};
var Clipboard = class _Clipboard {
  constructor(document) {
    this._document = document;
  }
  /**
   * Copies the provided text into the user's clipboard.
   *
   * @param text The string to copy.
   * @returns Whether the operation was successful.
   */
  copy(text) {
    const pendingCopy = this.beginCopy(text);
    const successful = pendingCopy.copy();
    pendingCopy.destroy();
    return successful;
  }
  /**
   * Prepares a string to be copied later. This is useful for large strings
   * which take too long to successfully render and be copied in the same tick.
   *
   * The caller must call `destroy` on the returned `PendingCopy`.
   *
   * @param text The string to copy.
   * @returns the pending copy operation.
   */
  beginCopy(text) {
    return new PendingCopy(text, this._document);
  }
  static {
    this.\u0275fac = function Clipboard_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _Clipboard)(\u0275\u0275inject(DOCUMENT));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
      token: _Clipboard,
      factory: _Clipboard.\u0275fac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Clipboard, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: void 0,
    decorators: [{
      type: Inject,
      args: [DOCUMENT]
    }]
  }], null);
})();
var CDK_COPY_TO_CLIPBOARD_CONFIG = new InjectionToken("CDK_COPY_TO_CLIPBOARD_CONFIG");
var CdkCopyToClipboard = class _CdkCopyToClipboard {
  constructor(_clipboard, _ngZone, config) {
    this._clipboard = _clipboard;
    this._ngZone = _ngZone;
    this.text = "";
    this.attempts = 1;
    this.copied = new EventEmitter();
    this._pending = /* @__PURE__ */ new Set();
    if (config && config.attempts != null) {
      this.attempts = config.attempts;
    }
  }
  /** Copies the current text to the clipboard. */
  copy(attempts = this.attempts) {
    if (attempts > 1) {
      let remainingAttempts = attempts;
      const pending = this._clipboard.beginCopy(this.text);
      this._pending.add(pending);
      const attempt = () => {
        const successful = pending.copy();
        if (!successful && --remainingAttempts && !this._destroyed) {
          this._currentTimeout = this._ngZone.runOutsideAngular(() => setTimeout(attempt, 1));
        } else {
          this._currentTimeout = null;
          this._pending.delete(pending);
          pending.destroy();
          this.copied.emit(successful);
        }
      };
      attempt();
    } else {
      this.copied.emit(this._clipboard.copy(this.text));
    }
  }
  ngOnDestroy() {
    if (this._currentTimeout) {
      clearTimeout(this._currentTimeout);
    }
    this._pending.forEach((copy) => copy.destroy());
    this._pending.clear();
    this._destroyed = true;
  }
  static {
    this.\u0275fac = function CdkCopyToClipboard_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CdkCopyToClipboard)(\u0275\u0275directiveInject(Clipboard), \u0275\u0275directiveInject(NgZone), \u0275\u0275directiveInject(CDK_COPY_TO_CLIPBOARD_CONFIG, 8));
    };
  }
  static {
    this.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
      type: _CdkCopyToClipboard,
      selectors: [["", "cdkCopyToClipboard", ""]],
      hostBindings: function CdkCopyToClipboard_HostBindings(rf, ctx) {
        if (rf & 1) {
          \u0275\u0275listener("click", function CdkCopyToClipboard_click_HostBindingHandler() {
            return ctx.copy();
          });
        }
      },
      inputs: {
        text: [0, "cdkCopyToClipboard", "text"],
        attempts: [0, "cdkCopyToClipboardAttempts", "attempts"]
      },
      outputs: {
        copied: "cdkCopyToClipboardCopied"
      },
      standalone: true
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkCopyToClipboard, [{
    type: Directive,
    args: [{
      selector: "[cdkCopyToClipboard]",
      host: {
        "(click)": "copy()"
      },
      standalone: true
    }]
  }], () => [{
    type: Clipboard
  }, {
    type: NgZone
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [CDK_COPY_TO_CLIPBOARD_CONFIG]
    }]
  }], {
    text: [{
      type: Input,
      args: ["cdkCopyToClipboard"]
    }],
    attempts: [{
      type: Input,
      args: ["cdkCopyToClipboardAttempts"]
    }],
    copied: [{
      type: Output,
      args: ["cdkCopyToClipboardCopied"]
    }]
  });
})();
var ClipboardModule = class _ClipboardModule {
  static {
    this.\u0275fac = function ClipboardModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ClipboardModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
      type: _ClipboardModule
    });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({});
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ClipboardModule, [{
    type: NgModule,
    args: [{
      imports: [CdkCopyToClipboard],
      exports: [CdkCopyToClipboard]
    }]
  }], null, null);
})();

// src/app/user-settings/api-key/api-key.component.ts
var _c0 = ["apiKey"];
function ApiKeyComponent_ng_container_0_ng_template_2_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 9);
    \u0275\u0275listener("click", function ApiKeyComponent_ng_container_0_ng_template_2_Conditional_3_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.toggleVisibility());
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r4 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.isDataHidden ? t_r4("show") : t_r4("hide"), " ");
  }
}
function ApiKeyComponent_ng_container_0_ng_template_2_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 10);
    \u0275\u0275listener("click", function ApiKeyComponent_ng_container_0_ng_template_2_Conditional_6_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.refresh());
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r4 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275property("ngbTooltip", t_r4("regen-warning"));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(t_r4("reset"));
  }
}
function ApiKeyComponent_ng_container_0_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "input", 4, 1);
    \u0275\u0275listener("click", function ApiKeyComponent_ng_container_0_ng_template_2_Template_input_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.selectAll());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "div", 5);
    \u0275\u0275template(3, ApiKeyComponent_ng_container_0_ng_template_2_Conditional_3_Template, 2, 1, "button", 6);
    \u0275\u0275elementStart(4, "button", 7);
    \u0275\u0275listener("click", function ApiKeyComponent_ng_container_0_ng_template_2_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.copy());
    });
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275template(6, ApiKeyComponent_ng_container_0_ng_template_2_Conditional_6_Template, 2, 2, "button", 8);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r4 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275propertyInterpolate1("id", "api-key--", ctx_r1.title, "");
    \u0275\u0275property("type", ctx_r1.InputType)("value", ctx_r1.key);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r1.hideData ? 3 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("title", t_r4("copy"));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", t_r4("copy"), " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.showRefresh ? 6 : -1);
  }
}
function ApiKeyComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "app-setting-item", 3);
    \u0275\u0275template(2, ApiKeyComponent_ng_container_0_ng_template_2_Template, 7, 8, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("title", ctx_r1.title)("showEdit", false)("canEdit", false)("subtitle", ctx_r1.tooltipText)("toggleOnViewClick", false);
  }
}
var ApiKeyComponent = class _ApiKeyComponent {
  constructor() {
    this.destroyRef = inject(DestroyRef);
    this.confirmService = inject(ConfirmService);
    this.accountService = inject(AccountService);
    this.toastr = inject(ToastrService);
    this.clipboard = inject(Clipboard);
    this.cdRef = inject(ChangeDetectorRef);
    this.title = "API Key";
    this.showRefresh = true;
    this.transform = (val) => val;
    this.tooltipText = "";
    this.hideData = true;
    this.key = "";
    this.isDataHidden = this.hideData;
  }
  get InputType() {
    return this.hideData && this.isDataHidden ? "password" : "text";
  }
  ngOnInit() {
    this.accountService.currentUser$.pipe(takeUntilDestroyed(this.destroyRef)).subscribe((user) => {
      let key = "";
      if (user) {
        key = user.apiKey;
      } else {
        key = translate("api-key.no-key");
      }
      if (this.showRefresh) {
        this.showRefresh = !this.accountService.hasReadOnlyRole(user);
      }
      if (this.transform != void 0) {
        this.key = this.transform(key);
        this.cdRef.markForCheck();
      }
    });
  }
  copy() {
    return __async(this, null, function* () {
      this.inputElem.nativeElement.select();
      this.clipboard.copy(this.inputElem.nativeElement.value);
      this.inputElem.nativeElement.setSelectionRange(0, 0);
      this.cdRef.markForCheck();
    });
  }
  refresh() {
    return __async(this, null, function* () {
      if (!(yield this.confirmService.confirm(translate("api-key.confirm-reset")))) {
        return;
      }
      this.accountService.resetApiKey().subscribe((newKey) => {
        this.key = newKey;
        this.cdRef.markForCheck();
        this.toastr.success(translate("api-key.key-reset"));
      });
    });
  }
  selectAll() {
    if (this.inputElem) {
      this.inputElem.nativeElement.setSelectionRange(0, this.key.length);
      this.cdRef.markForCheck();
    }
  }
  toggleVisibility() {
    this.isDataHidden = !this.isDataHidden;
    this.cdRef.markForCheck();
  }
  static {
    this.\u0275fac = function ApiKeyComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ApiKeyComponent)();
    };
  }
  static {
    this.\u0275cmp = \u0275\u0275defineComponent({ type: _ApiKeyComponent, selectors: [["app-api-key"]], viewQuery: function ApiKeyComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(_c0, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.inputElem = _t.first);
      }
    }, inputs: { title: "title", showRefresh: "showRefresh", transform: "transform", tooltipText: "tooltipText", hideData: "hideData" }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 1, vars: 1, consts: [["view", ""], ["apiKey", ""], [4, "transloco", "translocoRead"], [3, "title", "showEdit", "canEdit", "subtitle", "toggleOnViewClick"], ["readonly", "", "aria-describedby", "button-addon4", 1, "d-inline-flex", "form-control", 2, "width", "80%", 3, "click", "type", "id", "value"], [1, "d-inline-flex"], ["type", "button", 1, "btn", "btn-secondary-text"], ["type", "button", 1, "btn", "btn-primary-text", 3, "click", "title"], [1, "btn", "btn-danger-text", 3, "ngbTooltip"], ["type", "button", 1, "btn", "btn-secondary-text", 3, "click"], [1, "btn", "btn-danger-text", 3, "click", "ngbTooltip"]], template: function ApiKeyComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, ApiKeyComponent_ng_container_0_Template, 4, 5, "ng-container", 2);
      }
      if (rf & 2) {
        \u0275\u0275property("translocoRead", "api-key");
      }
    }, dependencies: [NgbTooltip, TranslocoDirective, SettingItemComponent], changeDetection: 0 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ApiKeyComponent, { className: "ApiKeyComponent", filePath: "src/app/user-settings/api-key/api-key.component.ts", lineNumber: 28 });
})();

export {
  ApiKeyComponent
};
//# sourceMappingURL=chunk-5QTHIAHW.js.map
