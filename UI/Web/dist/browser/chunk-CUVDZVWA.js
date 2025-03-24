import {
  AccountService,
  NavigationEnd,
  Router
} from "./chunk-U2DWQJI2.js";
import {
  TextResonse
} from "./chunk-BPOUBDX2.js";
import {
  HttpClient,
  environment
} from "./chunk-CQADFT7F.js";
import {
  DOCUMENT,
  DestroyRef,
  RendererFactory2,
  RendererStyleFlags2,
  ReplaySubject,
  filter,
  inject,
  map,
  take,
  takeUntilDestroyed,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-PYHIUVNJ.js";

// src/app/_services/nav.service.ts
var NavService = class _NavService {
  constructor(document, rendererFactory, httpClient) {
    this.document = document;
    this.httpClient = httpClient;
    this.accountService = inject(AccountService);
    this.router = inject(Router);
    this.destroyRef = inject(DestroyRef);
    this.localStorageSideNavKey = "kavita--sidenav--expanded";
    this.navbarVisibleSource = new ReplaySubject(1);
    this.navbarVisible$ = this.navbarVisibleSource.asObservable();
    this.sideNavCollapseSource = new ReplaySubject(1);
    this.sideNavCollapsed$ = this.sideNavCollapseSource.asObservable();
    this.sideNavVisibilitySource = new ReplaySubject(1);
    this.sideNavVisibility$ = this.sideNavVisibilitySource.asObservable();
    this.usePreferenceSideNav$ = this.router.events.pipe(filter((event) => event instanceof NavigationEnd), map((evt) => {
      const event = evt;
      const url = event.urlAfterRedirects || event.url;
      return /\/admin\/dashboard(#.*)?/.test(url) || /\/preferences(\/[^\/]+|#.*)?/.test(url) || /\/settings(\/[^\/]+|#.*)?/.test(url);
    }), takeUntilDestroyed(this.destroyRef));
    this.baseUrl = environment.apiUrl;
    this.renderer = rendererFactory.createRenderer(null, null);
    this.accountService.currentUser$.pipe(take(1)).subscribe((u) => {
      if (u) {
        this.showNavBar();
      }
    });
    const sideNavState = localStorage.getItem(this.localStorageSideNavKey) === "true" || false;
    this.sideNavCollapseSource.next(sideNavState);
    this.showSideNav();
  }
  getSideNavStreams(visibleOnly = true) {
    return this.httpClient.get(this.baseUrl + "stream/sidenav?visibleOnly=" + visibleOnly);
  }
  updateSideNavStreamPosition(streamName, sideNavStreamId, fromPosition, toPosition) {
    return this.httpClient.post(this.baseUrl + "stream/update-sidenav-position", { streamName, id: sideNavStreamId, fromPosition, toPosition }, TextResonse);
  }
  updateSideNavStream(stream) {
    return this.httpClient.post(this.baseUrl + "stream/update-sidenav-stream", stream, TextResonse);
  }
  createSideNavStream(smartFilterId) {
    return this.httpClient.post(this.baseUrl + "stream/add-sidenav-stream?smartFilterId=" + smartFilterId, {});
  }
  createSideNavStreamFromExternalSource(externalSourceId) {
    return this.httpClient.post(this.baseUrl + "stream/add-sidenav-stream-from-external-source?externalSourceId=" + externalSourceId, {});
  }
  bulkToggleSideNavStreamVisibility(streamIds, targetVisibility) {
    return this.httpClient.post(this.baseUrl + "stream/bulk-sidenav-stream-visibility", { ids: streamIds, visibility: targetVisibility });
  }
  showNavBar() {
    setTimeout(() => {
      const bodyElem = this.document.querySelector("body");
      this.renderer.setStyle(bodyElem, "margin-top", "var(--nav-offset)");
      this.renderer.removeStyle(bodyElem, "scrollbar-gutter");
      this.renderer.setStyle(bodyElem, "height", "calc(var(--vh)*100 - var(--nav-offset))");
      this.renderer.setStyle(bodyElem, "overflow", "hidden");
      this.renderer.setStyle(this.document.querySelector("html"), "height", "calc(var(--vh)*100 - var(--nav-offset))");
      this.navbarVisibleSource.next(true);
    }, 10);
  }
  hideNavBar() {
    setTimeout(() => {
      const bodyElem = this.document.querySelector("body");
      this.renderer.removeStyle(bodyElem, "height");
      this.renderer.setStyle(bodyElem, "margin-top", "0px", RendererStyleFlags2.Important);
      this.renderer.setStyle(bodyElem, "scrollbar-gutter", "initial", RendererStyleFlags2.Important);
      this.renderer.removeStyle(this.document.querySelector("html"), "height");
      this.renderer.setStyle(bodyElem, "overflow", "auto");
      this.navbarVisibleSource.next(false);
    }, 10);
  }
  showSideNav() {
    this.sideNavVisibilitySource.next(true);
  }
  hideSideNav() {
    this.sideNavVisibilitySource.next(false);
  }
  toggleSideNav() {
    this.sideNavCollapseSource.pipe(take(1)).subscribe((val) => {
      if (val === void 0)
        val = false;
      const newVal = !(val || false);
      this.sideNavCollapseSource.next(newVal);
      localStorage.setItem(this.localStorageSideNavKey, newVal + "");
    });
  }
  collapseSideNav(isCollapsed) {
    this.sideNavCollapseSource.next(isCollapsed);
    localStorage.setItem(this.localStorageSideNavKey, isCollapsed + "");
  }
  static {
    this.\u0275fac = function NavService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NavService)(\u0275\u0275inject(DOCUMENT), \u0275\u0275inject(RendererFactory2), \u0275\u0275inject(HttpClient));
    };
  }
  static {
    this.\u0275prov = \u0275\u0275defineInjectable({ token: _NavService, factory: _NavService.\u0275fac, providedIn: "root" });
  }
};

export {
  NavService
};
//# sourceMappingURL=chunk-CUVDZVWA.js.map
