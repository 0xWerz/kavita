import {
  NavService
} from "./chunk-CUVDZVWA.js";
import {
  MemberService
} from "./chunk-XZ5MKEYT.js";
import {
  AccountService,
  ActivatedRoute,
  Router,
  RouterLink,
  ThemeService
} from "./chunk-U2DWQJI2.js";
import {
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
  MaxLengthValidator,
  MinLengthValidator,
  NgControlStatus,
  NgControlStatusGroup,
  PatternValidator,
  ReactiveFormsModule,
  RequiredValidator,
  Validators,
  ɵNgNoValidate
} from "./chunk-BPOUBDX2.js";
import "./chunk-CQADFT7F.js";
import {
  AsyncPipe,
  ChangeDetectorRef,
  NgIf,
  NgStyle,
  NgTemplateOutlet,
  TranslocoDirective,
  inject,
  take,
  translate,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
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
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵpureFunction1,
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

// src/app/registration/_components/splash-container/splash-container.component.ts
var _c0 = [[["", "title", ""]], [["", "body", ""]]];
var _c1 = ["[title]", "[body]"];
var _c2 = (a0) => ({ "height": a0 });
var SplashContainerComponent = class _SplashContainerComponent {
  constructor() {
    this.navService = inject(NavService);
  }
  static {
    this.\u0275fac = function SplashContainerComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SplashContainerComponent)();
    };
  }
  static {
    this.\u0275cmp = \u0275\u0275defineComponent({ type: _SplashContainerComponent, selectors: [["app-splash-container"]], standalone: true, features: [\u0275\u0275StandaloneFeature], ngContentSelectors: _c1, decls: 18, vars: 5, consts: [[1, "mx-auto", "container", "login", "text-center", 3, "ngStyle"], [1, "row", "align-items-center", "row-cols-1", "logo-container", "mb-3", "justify-content-center"], [1, "col", "col-md-4", "col-sm-12", "col-xs-12", "align-self-center", "p-0"], [1, "row", "align-items-center", "row-cols-1", "justify-content-center"], [1, "col", "col-lg-8", "col-md-10", "col-sm-10", "col-xs-10", "p-0", "position-relative"], [1, "justify-content-center"], ["aria-hidden", "true", 1, "logo"], [1, "row", "align-items-center", "row-cols-1", "login-container", "justify-content-center"], [1, "col", "col-xl-2", "col-lg-3", "col-md-3", "col-sm-10", "col-xs-10", "align-self-center", "card", "p-3"], [1, "logo-container"], [1, "card-title", "text-center"], [1, "card-text"]], template: function SplashContainerComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef(_c0);
        \u0275\u0275elementStart(0, "div", 0);
        \u0275\u0275pipe(1, "async");
        \u0275\u0275elementStart(2, "div", 1)(3, "div", 2)(4, "div", 3)(5, "div", 4)(6, "div", 5);
        \u0275\u0275element(7, "div", 6);
        \u0275\u0275elementStart(8, "h2");
        \u0275\u0275text(9, "Kavita");
        \u0275\u0275elementEnd()()()()()();
        \u0275\u0275elementStart(10, "div", 7)(11, "div", 8)(12, "span")(13, "div", 9)(14, "div", 10);
        \u0275\u0275projection(15);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(16, "div", 11);
        \u0275\u0275projection(17, 1);
        \u0275\u0275elementEnd()()()();
      }
      if (rf & 2) {
        \u0275\u0275property("ngStyle", \u0275\u0275pureFunction1(3, _c2, \u0275\u0275pipeBind1(1, 1, ctx.navService.navbarVisible$) ? "calc(var(--vh, 1vh) * 100 - var(--nav-offset))" : "calc(var(--vh, 1vh) * 100)"));
      }
    }, dependencies: [
      NgStyle,
      AsyncPipe
    ], styles: ['\n\n  body {\n  scrollbar-gutter: stable;\n}\n.login[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  height: calc(var(--vh, 1vh) * 100 - 57px);\n  min-height: 289px;\n  position: relative;\n  width: 100vw;\n  max-width: 100vw;\n  background: var(--login-background-color);\n}\n.login[_ngcontent-%COMP%]::before {\n  content: "";\n  background-image: var(--login-background-url);\n  background-size: var(--login-background-size);\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  opacity: var(--login-background-opacity);\n  width: 100%;\n}\n.login[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-family: "Spartan", sans-serif;\n  font-size: 1.5rem;\n  margin-bottom: 0;\n  font-weight: bold;\n  display: inline-block;\n  margin-left: 5px;\n  vertical-align: middle;\n}\n.login[_ngcontent-%COMP%]   .logo-container[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.login[_ngcontent-%COMP%]   .logo-container[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%] {\n  width: var(--login-logo-width);\n  height: var(--login-logo-height);\n  background-image: var(--login-logo-image);\n  background-size: var(--login-logo-bg-size);\n  background-repeat: var(--login-logo-bg-repeat);\n  display: inline-block;\n  vertical-align: middle;\n}\n.login[_ngcontent-%COMP%]   .login-container[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.login[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%] {\n  background-color: var(--login-card-bg-color);\n  color: #fff;\n  max-width: 300px;\n  border-width: var(--login-card-border-width);\n  border-style: var(--login-card-border-style);\n  border-color: var(--login-card-border-color);\n}\n.login[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:focus {\n  border: 2px solid white;\n}\n.login[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]     .card-title h2 {\n  font-family: "Poppins", sans-serif;\n  display: inline-block;\n  vertical-align: middle;\n  width: 100%;\n  font-size: 1rem;\n}\n.login[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-text[_ngcontent-%COMP%] {\n  font-family:\n    "EBGaramond",\n    "Helvetica Neue",\n    sans-serif;\n}\n/*# sourceMappingURL=splash-container.component.css.map */'], changeDetection: 0 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SplashContainerComponent, { className: "SplashContainerComponent", filePath: "src/app/registration/_components/splash-container/splash-container.component.ts", lineNumber: 16 });
})();

// src/app/registration/user-login/user-login.component.ts
function UserLoginComponent_ng_container_0_ng_container_6_form_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "form", 5);
    \u0275\u0275listener("ngSubmit", function UserLoginComponent_ng_container_0_ng_container_6_form_1_Template_form_ngSubmit_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.login());
    });
    \u0275\u0275elementStart(1, "div", 6)(2, "div", 7)(3, "label", 8);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275element(5, "input", 9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 10)(7, "label", 11);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275element(9, "input", 12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 13)(11, "a", 14);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div", 15)(14, "button", 16);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const t_r3 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("formGroup", ctx_r1.loginForm);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(t_r3("username"));
    \u0275\u0275advance();
    \u0275\u0275property("placeholder", t_r3("username"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(t_r3("password"));
    \u0275\u0275advance();
    \u0275\u0275property("placeholder", t_r3("password"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(t_r3("forgot-password"));
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r1.isSubmitting);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(t_r3("submit"));
  }
}
function UserLoginComponent_ng_container_0_ng_container_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, UserLoginComponent_ng_container_0_ng_container_6_form_1_Template, 16, 8, "form", 4);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.firstTimeFlow);
  }
}
function UserLoginComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "app-splash-container");
    \u0275\u0275elementContainerStart(2, 1);
    \u0275\u0275elementStart(3, "h2");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(5, 2);
    \u0275\u0275template(6, UserLoginComponent_ng_container_0_ng_container_6_Template, 2, 1, "ng-container", 3);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const t_r3 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(t_r3("title"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.isLoaded);
  }
}
var UserLoginComponent = class _UserLoginComponent {
  constructor(accountService, router, memberService, toastr, navService, cdRef, route) {
    this.accountService = accountService;
    this.router = router;
    this.memberService = memberService;
    this.toastr = toastr;
    this.navService = navService;
    this.cdRef = cdRef;
    this.route = route;
    this.loginForm = new FormGroup({
      username: new FormControl("", [Validators.required]),
      password: new FormControl("", [Validators.required, Validators.maxLength(256), Validators.minLength(6), Validators.pattern("^.{6,256}$")])
    });
    this.firstTimeFlow = true;
    this.isLoaded = false;
    this.isSubmitting = false;
    this.navService.hideNavBar();
    this.navService.hideSideNav();
  }
  ngOnInit() {
    this.accountService.currentUser$.pipe(take(1)).subscribe((user) => {
      if (user) {
        this.navService.showNavBar();
        this.navService.showSideNav();
        this.router.navigateByUrl("/home");
        this.cdRef.markForCheck();
      }
    });
    this.memberService.adminExists().pipe(take(1)).subscribe((adminExists) => {
      this.firstTimeFlow = !adminExists;
      if (this.firstTimeFlow) {
        this.router.navigateByUrl("registration/register");
        return;
      }
      this.isLoaded = true;
      this.cdRef.markForCheck();
    });
    this.route.queryParamMap.subscribe((params) => {
      const val = params.get("apiKey");
      if (val != null && val.length > 0) {
        this.login(val);
      }
    });
  }
  login(apiKey = "") {
    const model = this.loginForm.getRawValue();
    model.apiKey = apiKey;
    this.isSubmitting = true;
    this.cdRef.markForCheck();
    this.accountService.login(model).subscribe(() => {
      this.loginForm.reset();
      this.navService.showNavBar();
      this.navService.showSideNav();
      const pageResume = localStorage.getItem("kavita--auth-intersection-url");
      if (pageResume && pageResume !== "/login") {
        localStorage.setItem("kavita--auth-intersection-url", "");
        this.router.navigateByUrl(pageResume);
      } else {
        localStorage.setItem("kavita--auth-intersection-url", "");
        this.router.navigateByUrl("/home");
      }
      this.isSubmitting = false;
      this.cdRef.markForCheck();
    }, (err) => {
      this.toastr.error(err.error);
      this.isSubmitting = false;
      this.cdRef.markForCheck();
    });
  }
  static {
    this.\u0275fac = function UserLoginComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _UserLoginComponent)(\u0275\u0275directiveInject(AccountService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(MemberService), \u0275\u0275directiveInject(ToastrService), \u0275\u0275directiveInject(NavService), \u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(ActivatedRoute));
    };
  }
  static {
    this.\u0275cmp = \u0275\u0275defineComponent({ type: _UserLoginComponent, selectors: [["app-user-login"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 1, vars: 1, consts: [[4, "transloco", "translocoRead"], ["title", ""], ["body", ""], [4, "ngIf"], ["novalidate", "", "class", "needs-validation", 3, "formGroup", "ngSubmit", 4, "ngIf"], ["novalidate", "", 1, "needs-validation", 3, "ngSubmit", "formGroup"], [1, "card-text"], [1, "mb-3"], ["for", "username", 1, "form-label", "visually-hidden"], ["formControlName", "username", "id", "username", "autocomplete", "username", "type", "text", "autofocus", "", 1, "form-control", "custom-input", 3, "placeholder"], [1, "mb-2"], ["for", "password", 1, "form-label", "visually-hidden"], ["formControlName", "password", "name", "password", "autocomplete", "current-password", "id", "password", "type", "password", 1, "form-control", "custom-input", 3, "placeholder"], [1, "mb-3", "forgot-password"], ["routerLink", "/registration/reset-password"], [1, "sign-in"], ["type", "submit", 1, "btn", "btn-outline-primary", 3, "disabled"]], template: function UserLoginComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, UserLoginComponent_ng_container_0_Template, 7, 2, "ng-container", 0);
      }
      if (rf & 2) {
        \u0275\u0275property("translocoRead", "login");
      }
    }, dependencies: [SplashContainerComponent, NgIf, ReactiveFormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, RouterLink, TranslocoDirective], styles: ["\n\n.btn[_ngcontent-%COMP%] {\n  width: 100%;\n}\ndiv[_ngcontent-%COMP%] {\n  text-align: center;\n}\na[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n}\n.custom-input[_ngcontent-%COMP%] {\n  background-color: #343A40 !important;\n  color: #fff !important;\n  border-color: var(--login-input-border-color);\n  font-family: var(--login-input-font-family);\n}\n.custom-input[_ngcontent-%COMP%]:focus {\n  border-color: var(--login-input-border-color-focus);\n  box-shadow: var(--login-input-box-shadow-focus);\n}\n.custom-input[_ngcontent-%COMP%]::placeholder {\n  opacity: var(--login-input-placeholder-opacity);\n  color: var(--login-input-placeholder-color);\n  font-family: var(--login-input-font-family);\n}\n.invalid-feedback[_ngcontent-%COMP%] {\n  display: inline-block;\n  color: var(--bs-form-invalid-color);\n  font-family: var(--login-input-font-family);\n}\n.forgot-password[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: var(--login-forgot-password-color);\n  font-family: var(--login-input-font-family);\n}\n.sign-in[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  font-family: var(--login-input-font-family);\n}\n/*# sourceMappingURL=user-login.component.css.map */"], changeDetection: 0 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(UserLoginComponent, { className: "UserLoginComponent", filePath: "src/app/registration/user-login/user-login.component.ts", lineNumber: 23 });
})();

// src/app/registration/_components/confirm-email-change/confirm-email-change.component.ts
function ConfirmEmailChangeComponent_ng_container_0_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const t_r1 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275textInterpolate1(" ", t_r1("non-confirm-description"), " ");
  }
}
function ConfirmEmailChangeComponent_ng_container_0_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3)(1, "div", 4)(2, "div", 5)(3, "h3");
    \u0275\u0275element(4, "i", 6);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "p");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const t_r1 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(t_r1("success"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r1("confirm-description"));
  }
}
function ConfirmEmailChangeComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "app-splash-container");
    \u0275\u0275elementContainerStart(2, 1);
    \u0275\u0275elementStart(3, "h2");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(5, 2);
    \u0275\u0275template(6, ConfirmEmailChangeComponent_ng_container_0_Conditional_6_Template, 1, 1)(7, ConfirmEmailChangeComponent_ng_container_0_Conditional_7_Template, 8, 2, "div", 3);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const t_r1 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(t_r1("title"));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(!ctx_r1.confirmed ? 6 : 7);
  }
}
var ConfirmEmailChangeComponent = class _ConfirmEmailChangeComponent {
  constructor(route, router, accountService, toastr, themeService, navService, cdRef) {
    this.route = route;
    this.router = router;
    this.accountService = accountService;
    this.toastr = toastr;
    this.themeService = themeService;
    this.navService = navService;
    this.cdRef = cdRef;
    this.email = "";
    this.token = "";
    this.confirmed = false;
    this.navService.hideSideNav();
    this.themeService.setTheme(this.themeService.defaultTheme);
    const token = this.route.snapshot.queryParamMap.get("token");
    const email = this.route.snapshot.queryParamMap.get("email");
    if (this.isNullOrEmpty(token) || this.isNullOrEmpty(email)) {
      this.toastr.error(translate("errors.invalid-confirmation-url"));
      this.router.navigateByUrl("login");
      return;
    }
    this.token = token;
    this.email = email;
  }
  ngOnInit() {
    this.accountService.confirmEmailUpdate({ email: this.email, token: this.token }).subscribe((errors) => {
      this.confirmed = true;
      this.cdRef.markForCheck();
      this.accountService.refreshAccount().subscribe();
      setTimeout(() => this.router.navigateByUrl("login"), 2e3);
    });
  }
  isNullOrEmpty(v) {
    return v == void 0 || v === "" || v === null;
  }
  static {
    this.\u0275fac = function ConfirmEmailChangeComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ConfirmEmailChangeComponent)(\u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(AccountService), \u0275\u0275directiveInject(ToastrService), \u0275\u0275directiveInject(ThemeService), \u0275\u0275directiveInject(NavService), \u0275\u0275directiveInject(ChangeDetectorRef));
    };
  }
  static {
    this.\u0275cmp = \u0275\u0275defineComponent({ type: _ConfirmEmailChangeComponent, selectors: [["app-confirm-email-change"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 1, vars: 1, consts: [[4, "transloco", "translocoRead"], ["title", ""], ["body", ""], [1, "card"], [1, "card-body"], [1, "card-title"], ["aria-hidden", "true", 1, "fa-regular", "fa-circle-check", "me-2", 2, "font-size", "1.8rem"]], template: function ConfirmEmailChangeComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, ConfirmEmailChangeComponent_ng_container_0_Template, 8, 2, "ng-container", 0);
      }
      if (rf & 2) {
        \u0275\u0275property("translocoRead", "confirm-email-change");
      }
    }, dependencies: [SplashContainerComponent, TranslocoDirective], styles: ["\n\n.card-body[_ngcontent-%COMP%] {\n  padding: 0px 0px;\n}\n.card[_ngcontent-%COMP%] {\n  background-color: var(--login-card-bg-color);\n}\np[_ngcontent-%COMP%] {\n  font-family: var(--login-input-font-family);\n}\n/*# sourceMappingURL=confirm-email-change.component.css.map */"], changeDetection: 0 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ConfirmEmailChangeComponent, { className: "ConfirmEmailChangeComponent", filePath: "src/app/registration/_components/confirm-email-change/confirm-email-change.component.ts", lineNumber: 21 });
})();

// src/app/registration/_components/confirm-email/confirm-email.component.ts
function ConfirmEmailComponent_ng_container_0_Conditional_8_For_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const error_r2 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(error_r2);
  }
}
function ConfirmEmailComponent_ng_container_0_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4)(1, "p");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 22);
    \u0275\u0275repeaterCreate(4, ConfirmEmailComponent_ng_container_0_Conditional_8_For_5_Template, 2, 1, "div", null, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const t_r3 = \u0275\u0275nextContext().$implicit;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r3("error-label"));
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r3.errors);
  }
}
function ConfirmEmailComponent_ng_container_0_Conditional_14_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r3 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(t_r3("required-field"));
  }
}
function ConfirmEmailComponent_ng_container_0_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9);
    \u0275\u0275template(1, ConfirmEmailComponent_ng_container_0_Conditional_14_Conditional_1_Template, 2, 1, "div");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_4_0;
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275conditional(((tmp_4_0 = ctx_r3.registerForm.get("username")) == null ? null : tmp_4_0.errors == null ? null : tmp_4_0.errors.required) ? 1 : -1);
  }
}
function ConfirmEmailComponent_ng_container_0_Conditional_19_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r3 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(t_r3("required-field"));
  }
}
function ConfirmEmailComponent_ng_container_0_Conditional_19_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r3 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(t_r3("valid-email"));
  }
}
function ConfirmEmailComponent_ng_container_0_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13);
    \u0275\u0275template(1, ConfirmEmailComponent_ng_container_0_Conditional_19_Conditional_1_Template, 2, 1, "div")(2, ConfirmEmailComponent_ng_container_0_Conditional_19_Conditional_2_Template, 2, 1, "div");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_4_0;
    let tmp_5_0;
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275conditional(((tmp_4_0 = ctx_r3.registerForm.get("email")) == null ? null : tmp_4_0.errors == null ? null : tmp_4_0.errors.required) ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(((tmp_5_0 = ctx_r3.registerForm.get("email")) == null ? null : tmp_5_0.errors == null ? null : tmp_5_0.errors.email) ? 2 : -1);
  }
}
function ConfirmEmailComponent_ng_container_0_ng_template_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const t_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275textInterpolate1(" ", t_r3("password-validation"), " ");
  }
}
function ConfirmEmailComponent_ng_container_0_Conditional_30_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r3 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(t_r3("required-field"));
  }
}
function ConfirmEmailComponent_ng_container_0_Conditional_30_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r3 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(t_r3("password-validation"));
  }
}
function ConfirmEmailComponent_ng_container_0_Conditional_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 19);
    \u0275\u0275template(1, ConfirmEmailComponent_ng_container_0_Conditional_30_Conditional_1_Template, 2, 1, "div")(2, ConfirmEmailComponent_ng_container_0_Conditional_30_Conditional_2_Template, 2, 1, "div");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_4_0;
    let tmp_5_0;
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275conditional(((tmp_4_0 = ctx_r3.registerForm.get("password")) == null ? null : tmp_4_0.errors == null ? null : tmp_4_0.errors.required) ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(((tmp_5_0 = ctx_r3.registerForm.get("password")) == null ? null : tmp_5_0.errors == null ? null : tmp_5_0.errors.minlength) || ((tmp_5_0 = ctx_r3.registerForm.get("password")) == null ? null : tmp_5_0.errors == null ? null : tmp_5_0.errors.maxLength) || ((tmp_5_0 = ctx_r3.registerForm.get("password")) == null ? null : tmp_5_0.errors == null ? null : tmp_5_0.errors.pattern) ? 2 : -1);
  }
}
function ConfirmEmailComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "app-splash-container");
    \u0275\u0275elementContainerStart(2, 2);
    \u0275\u0275elementStart(3, "h2");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(5, 3);
    \u0275\u0275elementStart(6, "p");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275template(8, ConfirmEmailComponent_ng_container_0_Conditional_8_Template, 6, 1, "div", 4);
    \u0275\u0275elementStart(9, "form", 5);
    \u0275\u0275listener("ngSubmit", function ConfirmEmailComponent_ng_container_0_Template_form_ngSubmit_9_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.submit());
    });
    \u0275\u0275elementStart(10, "div", 6)(11, "label", 7);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275element(13, "input", 8);
    \u0275\u0275template(14, ConfirmEmailComponent_ng_container_0_Conditional_14_Template, 2, 1, "div", 9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "div", 10)(16, "label", 11);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd();
    \u0275\u0275element(18, "input", 12);
    \u0275\u0275template(19, ConfirmEmailComponent_ng_container_0_Conditional_19_Template, 3, 2, "div", 13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "div", 6)(21, "label", 14);
    \u0275\u0275text(22);
    \u0275\u0275elementEnd();
    \u0275\u0275text(23, "\xA0");
    \u0275\u0275element(24, "i", 15);
    \u0275\u0275template(25, ConfirmEmailComponent_ng_container_0_ng_template_25_Template, 1, 1, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementStart(27, "span", 16);
    \u0275\u0275elementContainer(28, 17);
    \u0275\u0275elementEnd();
    \u0275\u0275element(29, "input", 18);
    \u0275\u0275template(30, ConfirmEmailComponent_ng_container_0_Conditional_30_Template, 3, 2, "div", 19);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "div", 20)(32, "button", 21);
    \u0275\u0275text(33);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    let tmp_8_0;
    let tmp_11_0;
    const t_r3 = ctx.$implicit;
    const passwordTooltip_r5 = \u0275\u0275reference(26);
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(t_r3("title"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(t_r3("description"));
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r3.errors.length > 0 ? 8 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("formGroup", ctx_r3.registerForm);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(t_r3("username-label"));
    \u0275\u0275advance();
    \u0275\u0275classProp("is-invalid", ((tmp_8_0 = ctx_r3.registerForm.get("username")) == null ? null : tmp_8_0.invalid) && ((tmp_8_0 = ctx_r3.registerForm.get("username")) == null ? null : tmp_8_0.touched));
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r3.registerForm.dirty || ctx_r3.registerForm.touched ? 14 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(t_r3("email-label"));
    \u0275\u0275advance();
    \u0275\u0275classProp("is-invalid", ((tmp_11_0 = ctx_r3.registerForm.get("email")) == null ? null : tmp_11_0.invalid) && ((tmp_11_0 = ctx_r3.registerForm.get("email")) == null ? null : tmp_11_0.touched));
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r3.registerForm.dirty || ctx_r3.registerForm.touched ? 19 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(t_r3("password-label"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngbTooltip", passwordTooltip_r5);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngTemplateOutlet", passwordTooltip_r5);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r3.registerForm.dirty || ctx_r3.registerForm.touched ? 30 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(t_r3("register"));
  }
}
var ConfirmEmailComponent = class _ConfirmEmailComponent {
  constructor(route, router, accountService, toastr, themeService, navService, cdRef) {
    this.route = route;
    this.router = router;
    this.accountService = accountService;
    this.toastr = toastr;
    this.themeService = themeService;
    this.navService = navService;
    this.cdRef = cdRef;
    this.token = "";
    this.registerForm = new FormGroup({
      email: new FormControl("", [Validators.required]),
      username: new FormControl("", [Validators.required]),
      password: new FormControl("", [Validators.required, Validators.maxLength(256), Validators.minLength(6), Validators.pattern("^.{6,256}$")])
    });
    this.errors = [];
    this.navService.hideSideNav();
    this.themeService.setTheme(this.themeService.defaultTheme);
    const token = this.route.snapshot.queryParamMap.get("token");
    const email = this.route.snapshot.queryParamMap.get("email");
    this.cdRef.markForCheck();
    if (this.isNullOrEmpty(token) || this.isNullOrEmpty(email)) {
      this.toastr.error(translate("errors.invalid-confirmation-url"));
      this.router.navigateByUrl("login");
      return;
    }
    this.token = token;
    this.registerForm.get("email")?.setValue(email || "");
    this.cdRef.markForCheck();
  }
  ngOnDestroy() {
    this.accountService.currentUser$.pipe(take(1)).subscribe((user) => {
      if (user) {
        this.navService.showSideNav();
      }
    });
  }
  isNullOrEmpty(v) {
    return v == void 0 || v === "" || v === null;
  }
  submit() {
    const model = this.registerForm.getRawValue();
    model.token = this.token;
    this.accountService.confirmEmail(model).subscribe((user) => {
      this.toastr.success(translate("toasts.account-registration-complete"));
      this.router.navigateByUrl("login");
    }, (err) => {
      console.error("Error from Confirming Email: ", err);
      this.errors = err;
      this.cdRef.markForCheck();
    });
  }
  static {
    this.\u0275fac = function ConfirmEmailComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ConfirmEmailComponent)(\u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(AccountService), \u0275\u0275directiveInject(ToastrService), \u0275\u0275directiveInject(ThemeService), \u0275\u0275directiveInject(NavService), \u0275\u0275directiveInject(ChangeDetectorRef));
    };
  }
  static {
    this.\u0275cmp = \u0275\u0275defineComponent({ type: _ConfirmEmailComponent, selectors: [["app-confirm-email"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 1, vars: 1, consts: [["passwordTooltip", ""], [4, "transloco", "translocoRead"], ["title", ""], ["body", ""], [1, "text-danger"], [3, "ngSubmit", "formGroup"], [1, "mb-3"], ["for", "username", 1, "form-label"], ["id", "username", "formControlName", "username", "type", "text", "aria-describeby", "inviteForm-username-validations", 1, "form-control"], ["id", "inviteForm-username-validations", 1, "invalid-feedback"], [1, "mb-3", 2, "width", "100%"], ["for", "email", 1, "form-label"], ["type", "email", "inputmode", "email", "id", "email", "formControlName", "email", "required", "", "readonly", "", 1, "form-control"], ["id", "inviteForm-email-validations", 1, "invalid-feedback"], ["for", "password", 1, "form-label"], ["placement", "right", "role", "button", "tabindex", "0", 1, "fa", "fa-info-circle", 3, "ngbTooltip"], ["id", "password-help", 1, "visually-hidden"], [3, "ngTemplateOutlet"], ["id", "password", "maxlength", "256", "minlength", "6", "pattern", "^.{6,256}$", "formControlName", "password", "type", "password", "aria-describedby", "password-help", 1, "form-control"], ["id", "inviteForm-password-validations", 1, "invalid-feedback"], [1, "float-end"], ["type", "submit", 1, "btn", "btn-secondary", "alt"], [1, "mb-2"]], template: function ConfirmEmailComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, ConfirmEmailComponent_ng_container_0_Template, 34, 17, "ng-container", 1);
      }
      if (rf & 2) {
        \u0275\u0275property("translocoRead", "confirm-email");
      }
    }, dependencies: [SplashContainerComponent, ReactiveFormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, RequiredValidator, MinLengthValidator, MaxLengthValidator, PatternValidator, FormGroupDirective, FormControlName, NgbTooltip, NgTemplateOutlet, TranslocoDirective], styles: ["\n\ninput[_ngcontent-%COMP%] {\n  background-color: #fff !important;\n  color: black !important;\n  font-family: var(--login-input-font-family);\n}\n/*# sourceMappingURL=confirm-email.component.css.map */"], changeDetection: 0 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ConfirmEmailComponent, { className: "ConfirmEmailComponent", filePath: "src/app/registration/_components/confirm-email/confirm-email.component.ts", lineNumber: 22 });
})();

// src/app/registration/_components/confirm-migration-email/confirm-migration-email.component.ts
var ConfirmMigrationEmailComponent = class _ConfirmMigrationEmailComponent {
  constructor(route, router, accountService, toastr, themeService) {
    this.route = route;
    this.router = router;
    this.accountService = accountService;
    this.toastr = toastr;
    this.themeService = themeService;
    this.themeService.setTheme(this.themeService.defaultTheme);
    const token = this.route.snapshot.queryParamMap.get("token");
    const email = this.route.snapshot.queryParamMap.get("email");
    if (token === void 0 || token === "" || token === null || email === void 0 || email === "" || email === null) {
      this.toastr.error(translate("errors.invalid-confirmation-email"));
      this.router.navigateByUrl("login");
      return;
    }
    this.accountService.confirmMigrationEmail({ token, email }).subscribe((user) => {
      this.toastr.success(translate("toasts.account-migration-complete"));
      this.router.navigateByUrl("login");
    });
  }
  static {
    this.\u0275fac = function ConfirmMigrationEmailComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ConfirmMigrationEmailComponent)(\u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(AccountService), \u0275\u0275directiveInject(ToastrService), \u0275\u0275directiveInject(ThemeService));
    };
  }
  static {
    this.\u0275cmp = \u0275\u0275defineComponent({ type: _ConfirmMigrationEmailComponent, selectors: [["app-confirm-migration-email"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 0, vars: 0, template: function ConfirmMigrationEmailComponent_Template(rf, ctx) {
    }, changeDetection: 0 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ConfirmMigrationEmailComponent, { className: "ConfirmMigrationEmailComponent", filePath: "src/app/registration/_components/confirm-migration-email/confirm-migration-email.component.ts", lineNumber: 15 });
})();

// src/app/registration/_components/confirm-reset-password/confirm-reset-password.component.ts
function ConfirmResetPasswordComponent_ng_container_0_ng_template_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const t_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275textInterpolate1(" ", t_r3("password-validation"), " ");
  }
}
function ConfirmResetPasswordComponent_ng_container_0_div_19_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r3 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", t_r3("required-field"), " ");
  }
}
function ConfirmResetPasswordComponent_ng_container_0_div_19_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r3 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", t_r3("password-validation"), " ");
  }
}
function ConfirmResetPasswordComponent_ng_container_0_div_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14);
    \u0275\u0275template(1, ConfirmResetPasswordComponent_ng_container_0_div_19_div_1_Template, 2, 1, "div", 15)(2, ConfirmResetPasswordComponent_ng_container_0_div_19_div_2_Template, 2, 1, "div", 15);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_4_0;
    let tmp_5_0;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (tmp_4_0 = ctx_r1.registerForm.get("password")) == null ? null : tmp_4_0.errors == null ? null : tmp_4_0.errors.required);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ((tmp_5_0 = ctx_r1.registerForm.get("password")) == null ? null : tmp_5_0.errors == null ? null : tmp_5_0.errors.minlength) || ((tmp_5_0 = ctx_r1.registerForm.get("password")) == null ? null : tmp_5_0.errors == null ? null : tmp_5_0.errors.maxLength));
  }
}
function ConfirmResetPasswordComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "app-splash-container");
    \u0275\u0275elementContainerStart(2, 2);
    \u0275\u0275elementStart(3, "h2");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(5, 3);
    \u0275\u0275elementStart(6, "p");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "form", 4);
    \u0275\u0275listener("ngSubmit", function ConfirmResetPasswordComponent_ng_container_0_Template_form_ngSubmit_8_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.submit());
    });
    \u0275\u0275elementStart(9, "div", 5)(10, "label", 6);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275text(12, "\xA0");
    \u0275\u0275element(13, "i", 7);
    \u0275\u0275template(14, ConfirmResetPasswordComponent_ng_container_0_ng_template_14_Template, 1, 1, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementStart(16, "span", 8);
    \u0275\u0275elementContainer(17, 9);
    \u0275\u0275elementEnd();
    \u0275\u0275element(18, "input", 10);
    \u0275\u0275template(19, ConfirmResetPasswordComponent_ng_container_0_div_19_Template, 3, 2, "div", 11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "div", 12)(21, "button", 13);
    \u0275\u0275text(22);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const t_r3 = ctx.$implicit;
    const passwordTooltip_r4 = \u0275\u0275reference(15);
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(t_r3("title"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(t_r3("description"));
    \u0275\u0275advance();
    \u0275\u0275property("formGroup", ctx_r1.registerForm);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(t_r3("password-label"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngbTooltip", passwordTooltip_r4);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngTemplateOutlet", passwordTooltip_r4);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.registerForm.dirty || ctx_r1.registerForm.touched);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(t_r3("submit"));
  }
}
var ConfirmResetPasswordComponent = class _ConfirmResetPasswordComponent {
  constructor(route, router, accountService, toastr, cdRef, navService) {
    this.route = route;
    this.router = router;
    this.accountService = accountService;
    this.toastr = toastr;
    this.cdRef = cdRef;
    this.navService = navService;
    this.token = "";
    this.registerForm = new FormGroup({
      email: new FormControl("", [Validators.required, Validators.email]),
      password: new FormControl("", [Validators.required, Validators.maxLength(256), Validators.minLength(6)])
    });
    this.navService.showNavBar();
    this.navService.hideSideNav();
    const token = this.route.snapshot.queryParamMap.get("token");
    const email = this.route.snapshot.queryParamMap.get("email");
    if (token == void 0 || token === "" || token === null) {
      this.toastr.error(translate("errors.invalid-password-reset-url"));
      this.router.navigateByUrl("login");
      return;
    }
    this.token = token;
    this.registerForm.get("email")?.setValue(email);
    this.cdRef.markForCheck();
  }
  submit() {
    const model = this.registerForm.getRawValue();
    model.token = this.token;
    this.accountService.confirmResetPasswordEmail(model).subscribe((response) => {
      this.toastr.success(translate("toasts.password-reset"));
      this.router.navigateByUrl("login");
    }, (err) => {
      console.error(err, "There was an error trying to confirm reset password");
    });
  }
  static {
    this.\u0275fac = function ConfirmResetPasswordComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ConfirmResetPasswordComponent)(\u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(AccountService), \u0275\u0275directiveInject(ToastrService), \u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(NavService));
    };
  }
  static {
    this.\u0275cmp = \u0275\u0275defineComponent({ type: _ConfirmResetPasswordComponent, selectors: [["app-confirm-reset-password"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 1, vars: 1, consts: [["passwordTooltip", ""], [4, "transloco", "translocoRead"], ["title", ""], ["body", ""], [3, "ngSubmit", "formGroup"], [1, "mb-3"], ["for", "password", 1, "form-label"], ["placement", "right", "role", "button", "tabindex", "0", 1, "fa", "fa-info-circle", 3, "ngbTooltip"], ["id", "password-help", 1, "visually-hidden"], [3, "ngTemplateOutlet"], ["id", "password", "maxlength", "256", "minlength", "6", "formControlName", "password", "type", "password", "aria-describedby", "password-help", 1, "form-control"], ["id", "inviteForm-validations", "class", "invalid-feedback", 4, "ngIf"], [1, "float-end"], ["type", "submit", 1, "btn", "btn-secondary", "alt"], ["id", "inviteForm-validations", 1, "invalid-feedback"], [4, "ngIf"]], template: function ConfirmResetPasswordComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, ConfirmResetPasswordComponent_ng_container_0_Template, 23, 8, "ng-container", 1);
      }
      if (rf & 2) {
        \u0275\u0275property("translocoRead", "confirm-reset-password");
      }
    }, dependencies: [SplashContainerComponent, ReactiveFormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, MinLengthValidator, MaxLengthValidator, FormGroupDirective, FormControlName, NgbTooltip, NgTemplateOutlet, NgIf, TranslocoDirective], styles: ["\n\ninput[_ngcontent-%COMP%] {\n  background-color: #fff !important;\n  color: black !important;\n}\n/*# sourceMappingURL=confirm-reset-password.component.css.map */"], changeDetection: 0 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ConfirmResetPasswordComponent, { className: "ConfirmResetPasswordComponent", filePath: "src/app/registration/_components/confirm-reset-password/confirm-reset-password.component.ts", lineNumber: 20 });
})();

// src/app/registration/_components/register/register.component.ts
function RegisterComponent_ng_container_0_div_13_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r3 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", t_r3("required-field"), " ");
  }
}
function RegisterComponent_ng_container_0_div_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 21);
    \u0275\u0275template(1, RegisterComponent_ng_container_0_div_13_div_1_Template, 2, 1, "div", 22);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_5_0;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (tmp_5_0 = ctx_r1.registerForm.get("username")) == null ? null : tmp_5_0.errors == null ? null : tmp_5_0.errors.required);
  }
}
function RegisterComponent_ng_container_0_ng_template_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const t_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275textInterpolate(t_r3("email-tooltip"));
  }
}
function RegisterComponent_ng_container_0_div_23_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r3 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", t_r3("required-field"), " ");
  }
}
function RegisterComponent_ng_container_0_div_23_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r3 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", t_r3("valid-email"), " ");
  }
}
function RegisterComponent_ng_container_0_div_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 23);
    \u0275\u0275template(1, RegisterComponent_ng_container_0_div_23_div_1_Template, 2, 1, "div", 22)(2, RegisterComponent_ng_container_0_div_23_div_2_Template, 2, 1, "div", 22);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_5_0;
    let tmp_6_0;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (tmp_5_0 = ctx_r1.registerForm.get("email")) == null ? null : tmp_5_0.errors == null ? null : tmp_5_0.errors.required);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (tmp_6_0 = ctx_r1.registerForm.get("email")) == null ? null : tmp_6_0.errors == null ? null : tmp_6_0.errors.email);
  }
}
function RegisterComponent_ng_container_0_ng_template_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const t_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275textInterpolate1(" ", t_r3("password-validation"), " ");
  }
}
function RegisterComponent_ng_container_0_Conditional_33_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r3 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(t_r3("required-field"));
  }
}
function RegisterComponent_ng_container_0_Conditional_33_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r3 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(t_r3("password-validation"));
  }
}
function RegisterComponent_ng_container_0_Conditional_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 19);
    \u0275\u0275template(1, RegisterComponent_ng_container_0_Conditional_33_Conditional_1_Template, 2, 1, "div")(2, RegisterComponent_ng_container_0_Conditional_33_Conditional_2_Template, 2, 1, "div");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_5_0;
    let tmp_6_0;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275conditional(((tmp_5_0 = ctx_r1.registerForm.get("password")) == null ? null : tmp_5_0.errors == null ? null : tmp_5_0.errors.required) ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(((tmp_6_0 = ctx_r1.registerForm.get("password")) == null ? null : tmp_6_0.errors == null ? null : tmp_6_0.errors.minlength) || ((tmp_6_0 = ctx_r1.registerForm.get("password")) == null ? null : tmp_6_0.errors == null ? null : tmp_6_0.errors.maxLength) || ((tmp_6_0 = ctx_r1.registerForm.get("password")) == null ? null : tmp_6_0.errors == null ? null : tmp_6_0.errors.pattern) ? 2 : -1);
  }
}
function RegisterComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "app-splash-container");
    \u0275\u0275elementContainerStart(2, 3);
    \u0275\u0275elementStart(3, "h2");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(5, 4);
    \u0275\u0275elementStart(6, "p");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "form", 5);
    \u0275\u0275listener("ngSubmit", function RegisterComponent_ng_container_0_Template_form_ngSubmit_8_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.submit());
    });
    \u0275\u0275elementStart(9, "div", 6)(10, "label", 7);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275element(12, "input", 8);
    \u0275\u0275template(13, RegisterComponent_ng_container_0_div_13_Template, 2, 1, "div", 9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "div", 6)(15, "label", 10);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd();
    \u0275\u0275element(17, "i", 11);
    \u0275\u0275template(18, RegisterComponent_ng_container_0_ng_template_18_Template, 1, 1, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementStart(20, "span", 12);
    \u0275\u0275elementContainer(21, 13);
    \u0275\u0275elementEnd();
    \u0275\u0275element(22, "input", 14);
    \u0275\u0275template(23, RegisterComponent_ng_container_0_div_23_Template, 3, 2, "div", 15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "div", 6)(25, "label", 16);
    \u0275\u0275text(26, "Password");
    \u0275\u0275elementEnd();
    \u0275\u0275element(27, "i", 11);
    \u0275\u0275template(28, RegisterComponent_ng_container_0_ng_template_28_Template, 1, 1, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementStart(30, "span", 17);
    \u0275\u0275elementContainer(31, 13);
    \u0275\u0275elementEnd();
    \u0275\u0275element(32, "input", 18);
    \u0275\u0275template(33, RegisterComponent_ng_container_0_Conditional_33_Template, 3, 2, "div", 19);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "div")(35, "button", 20);
    \u0275\u0275text(36);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    let tmp_8_0;
    let tmp_13_0;
    let tmp_17_0;
    const t_r3 = ctx.$implicit;
    const emailTooltip_r4 = \u0275\u0275reference(19);
    const passwordTooltip_r5 = \u0275\u0275reference(29);
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(t_r3("title"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(t_r3("description"));
    \u0275\u0275advance();
    \u0275\u0275property("formGroup", ctx_r1.registerForm);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(t_r3("username-label"));
    \u0275\u0275advance();
    \u0275\u0275classProp("is-invalid", ((tmp_8_0 = ctx_r1.registerForm.get("username")) == null ? null : tmp_8_0.invalid) && ((tmp_8_0 = ctx_r1.registerForm.get("username")) == null ? null : tmp_8_0.touched));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.registerForm.dirty || ctx_r1.registerForm.touched);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(t_r3("email-label"));
    \u0275\u0275advance();
    \u0275\u0275property("ngbTooltip", emailTooltip_r4);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngTemplateOutlet", emailTooltip_r4);
    \u0275\u0275advance();
    \u0275\u0275classProp("is-invalid", ((tmp_13_0 = ctx_r1.registerForm.get("email")) == null ? null : tmp_13_0.invalid) && ((tmp_13_0 = ctx_r1.registerForm.get("email")) == null ? null : tmp_13_0.touched));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.registerForm.dirty || ctx_r1.registerForm.touched);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngbTooltip", passwordTooltip_r5);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngTemplateOutlet", passwordTooltip_r5);
    \u0275\u0275advance();
    \u0275\u0275classProp("is-invalid", ((tmp_17_0 = ctx_r1.registerForm.get("password")) == null ? null : tmp_17_0.invalid) && ((tmp_17_0 = ctx_r1.registerForm.get("password")) == null ? null : tmp_17_0.touched));
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.registerForm.dirty || ctx_r1.registerForm.touched ? 33 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", !ctx_r1.registerForm.valid);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(t_r3("register"));
  }
}
var RegisterComponent = class _RegisterComponent {
  constructor(router, accountService, toastr, memberService) {
    this.router = router;
    this.accountService = accountService;
    this.toastr = toastr;
    this.memberService = memberService;
    this.registerForm = new FormGroup({
      email: new FormControl("", [Validators.required]),
      username: new FormControl("", [Validators.required]),
      password: new FormControl("", [
        Validators.required,
        Validators.maxLength(256),
        Validators.minLength(6),
        Validators.pattern("^.{6,256}$")
      ])
    });
    this.navService = inject(NavService);
    this.navService.hideNavBar();
    this.navService.hideSideNav();
    this.memberService.adminExists().pipe(take(1)).subscribe((adminExists) => {
      if (adminExists) {
        this.router.navigateByUrl("login");
        return;
      }
    });
  }
  submit() {
    const model = this.registerForm.getRawValue();
    this.accountService.register(model).subscribe((user) => {
      this.toastr.success(translate("toasts.account-registration-complete"));
      this.router.navigateByUrl("login");
    });
  }
  static {
    this.\u0275fac = function RegisterComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _RegisterComponent)(\u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(AccountService), \u0275\u0275directiveInject(ToastrService), \u0275\u0275directiveInject(MemberService));
    };
  }
  static {
    this.\u0275cmp = \u0275\u0275defineComponent({ type: _RegisterComponent, selectors: [["app-register"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 1, vars: 1, consts: [["emailTooltip", ""], ["passwordTooltip", ""], [4, "transloco", "translocoRead"], ["title", ""], ["body", ""], [3, "ngSubmit", "formGroup"], [1, "mb-3", "text-start"], ["for", "username", 1, "form-label"], ["id", "username", "formControlName", "username", "type", "text", "autocomplete", "username", "aria-describedby", "username-validations", 1, "form-control", "custom-input"], ["id", "username-validations", "class", "invalid-feedback", 4, "ngIf"], ["for", "email", 1, "form-label", "float-start"], ["placement", "right", "role", "button", "tabindex", "0", 1, "fa", "fa-info-circle", "ms-1", 3, "ngbTooltip"], ["id", "email-help", 1, "visually-hidden"], [3, "ngTemplateOutlet"], ["type", "email", "inputmode", "email", "id", "email", "autocomplete", "email", "formControlName", "email", "required", "", "aria-describedby", "email-help", 1, "form-control", "custom-input"], ["id", "email-validations", "class", "invalid-feedback", 4, "ngIf"], ["for", "password", 1, "form-label"], ["id", "password-help", 1, "visually-hidden"], ["id", "password", "maxlength", "256", "minlength", "6", "pattern", "^.{6,256}$", "formControlName", "password", "autocomplete", "new-password", "type", "password", "aria-describedby", "password-help", 1, "form-control", "custom-input"], ["id", "password-validations", 1, "invalid-feedback"], ["type", "submit", 1, "btn", "btn-primary", 3, "disabled"], ["id", "username-validations", 1, "invalid-feedback"], [4, "ngIf"], ["id", "email-validations", 1, "invalid-feedback"]], template: function RegisterComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, RegisterComponent_ng_container_0_Template, 37, 20, "ng-container", 2);
      }
      if (rf & 2) {
        \u0275\u0275property("translocoRead", "register");
      }
    }, dependencies: [SplashContainerComponent, ReactiveFormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, RequiredValidator, MinLengthValidator, MaxLengthValidator, PatternValidator, FormGroupDirective, FormControlName, NgIf, NgbTooltip, NgTemplateOutlet, TranslocoDirective], styles: ["\n\n.custom-input[_ngcontent-%COMP%] {\n  background-color: var(--login-input-background-color);\n  color: var(--login-input-color);\n  border-color: var(--login-input-border-color);\n  font-family: var(--login-input-font-family);\n}\n.custom-input.is-invalid[_ngcontent-%COMP%] {\n  border-color: var(--bs-form-invalid-border-color);\n}\n.custom-input[_ngcontent-%COMP%]:focus {\n  border-color: var(--login-input-border-color-focus);\n  box-shadow: var(--login-input-box-shadow-focus);\n}\n.custom-input[_ngcontent-%COMP%]::placeholder {\n  opacity: var(--login-input-placeholder-opacity);\n  color: var(--login-input-placeholder-color);\n  font-family: var(--login-input-font-family);\n}\nlabel[_ngcontent-%COMP%] {\n  font-family: var(--login-input-font-family);\n  margin-bottom: 0;\n}\np[_ngcontent-%COMP%] {\n  font-family: var(--login-input-font-family);\n}\n.btn[_ngcontent-%COMP%] {\n  width: 100%;\n  font-family: var(--login-input-font-family);\n}\n/*# sourceMappingURL=register.component.css.map */"], changeDetection: 0 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(RegisterComponent, { className: "RegisterComponent", filePath: "src/app/registration/_components/register/register.component.ts", lineNumber: 25 });
})();

// src/app/registration/_components/reset-password/reset-password.component.ts
function ResetPasswordComponent_ng_container_0_div_13_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r3 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", t_r3("required-field"), " ");
  }
}
function ResetPasswordComponent_ng_container_0_div_13_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r3 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", t_r3("valid-email"), " ");
  }
}
function ResetPasswordComponent_ng_container_0_div_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9);
    \u0275\u0275template(1, ResetPasswordComponent_ng_container_0_div_13_div_1_Template, 2, 1, "div", 10)(2, ResetPasswordComponent_ng_container_0_div_13_div_2_Template, 2, 1, "div", 10);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_3_0;
    let tmp_4_0;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (tmp_3_0 = ctx_r1.registerForm.get("email")) == null ? null : tmp_3_0.errors == null ? null : tmp_3_0.errors.required);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (tmp_4_0 = ctx_r1.registerForm.get("email")) == null ? null : tmp_4_0.errors == null ? null : tmp_4_0.errors.email);
  }
}
function ResetPasswordComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "app-splash-container");
    \u0275\u0275elementContainerStart(2, 1);
    \u0275\u0275elementStart(3, "h2");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(5, 2);
    \u0275\u0275elementStart(6, "p");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "form", 3);
    \u0275\u0275listener("ngSubmit", function ResetPasswordComponent_ng_container_0_Template_form_ngSubmit_8_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.submit());
    });
    \u0275\u0275elementStart(9, "div", 4)(10, "label", 5);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275element(12, "input", 6);
    \u0275\u0275template(13, ResetPasswordComponent_ng_container_0_div_13_Template, 3, 2, "div", 7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "div")(15, "button", 8);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    let tmp_6_0;
    const t_r3 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(t_r3("title"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(t_r3("description"));
    \u0275\u0275advance();
    \u0275\u0275property("formGroup", ctx_r1.registerForm);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(t_r3("email-label"));
    \u0275\u0275advance();
    \u0275\u0275classProp("is-invalid", ((tmp_6_0 = ctx_r1.registerForm.get("email")) == null ? null : tmp_6_0.invalid) && ((tmp_6_0 = ctx_r1.registerForm.get("email")) == null ? null : tmp_6_0.touched));
    \u0275\u0275property("placeholder", t_r3("email-label"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.registerForm.dirty || ctx_r1.registerForm.touched);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(t_r3("submit"));
  }
}
var ResetPasswordComponent = class _ResetPasswordComponent {
  constructor() {
    this.router = inject(Router);
    this.accountService = inject(AccountService);
    this.toastr = inject(ToastrService);
    this.navService = inject(NavService);
    this.registerForm = new FormGroup({
      email: new FormControl("", [Validators.required, Validators.email])
    });
    this.navService.hideNavBar();
    this.navService.hideSideNav();
  }
  submit() {
    const model = this.registerForm.get("email")?.value;
    this.accountService.requestResetPasswordEmail(model).subscribe((resp) => {
      this.toastr.info(resp);
      this.router.navigateByUrl("login");
    }, (err) => {
      this.toastr.error(err.error);
    });
  }
  static {
    this.\u0275fac = function ResetPasswordComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ResetPasswordComponent)();
    };
  }
  static {
    this.\u0275cmp = \u0275\u0275defineComponent({ type: _ResetPasswordComponent, selectors: [["app-reset-password"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 1, vars: 1, consts: [[4, "transloco", "translocoRead"], ["title", ""], ["body", ""], [3, "ngSubmit", "formGroup"], [1, "mb-3", 2, "width", "100%"], ["for", "email", 1, "form-label", "visually-hidden"], ["type", "email", "inputmode", "email", "id", "email", "formControlName", "email", 1, "form-control", "custom-input", 3, "placeholder"], ["id", "inviteForm-validations", "class", "invalid-feedback", 4, "ngIf"], ["type", "submit", 1, "btn", "btn-primary"], ["id", "inviteForm-validations", 1, "invalid-feedback"], [4, "ngIf"]], template: function ResetPasswordComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, ResetPasswordComponent_ng_container_0_Template, 17, 9, "ng-container", 0);
      }
      if (rf & 2) {
        \u0275\u0275property("translocoRead", "reset-password");
      }
    }, dependencies: [SplashContainerComponent, ReactiveFormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, NgIf, TranslocoDirective], styles: ["\n\n.btn[_ngcontent-%COMP%] {\n  width: 100%;\n  font-family: var(--login-input-font-family);\n}\n.custom-input[_ngcontent-%COMP%] {\n  background-color: var(--login-input-background-color);\n  color: var(--login-input-color);\n  border-color: var(--login-input-border-color);\n  font-family: var(--login-input-font-family);\n}\n.custom-input[_ngcontent-%COMP%]:focus {\n  border-color: var(--login-input-border-color-focus);\n  box-shadow: var(--login-input-box-shadow-focus);\n}\n.custom-input[_ngcontent-%COMP%]::placeholder {\n  opacity: 0.5;\n  color: var(--login-input-placeholder-color);\n  font-family: var(--login-input-font-family);\n}\np[_ngcontent-%COMP%] {\n  font-family: var(--login-input-font-family);\n}\n/*# sourceMappingURL=reset-password.component.css.map */"], changeDetection: 0 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ResetPasswordComponent, { className: "ResetPasswordComponent", filePath: "src/app/registration/_components/reset-password/reset-password.component.ts", lineNumber: 19 });
})();

// src/app/_routes/registration.router.module.ts
var routes = [
  {
    path: "",
    component: UserLoginComponent
  },
  {
    path: "login",
    component: UserLoginComponent
  },
  {
    path: "confirm-email",
    component: ConfirmEmailComponent
  },
  {
    path: "confirm-migration-email",
    component: ConfirmMigrationEmailComponent
  },
  {
    path: "confirm-email-update",
    component: ConfirmEmailChangeComponent
  },
  {
    path: "register",
    component: RegisterComponent
  },
  {
    path: "reset-password",
    component: ResetPasswordComponent
  },
  {
    path: "confirm-reset-password",
    component: ConfirmResetPasswordComponent
  }
];
export {
  routes
};
//# sourceMappingURL=registration.router.module-CWBG5KC5.js.map
