import {
  ImageService
} from "./chunk-TPURWX2Y.js";
import {
  EVENTS,
  MessageHubService
} from "./chunk-PUXELTB2.js";
import {
  ChangeDetectorRef,
  DestroyRef,
  Directive,
  ElementRef,
  EventEmitter,
  Inject,
  InjectionToken,
  Input,
  NgModule,
  NgZone,
  Observable,
  Output,
  PLATFORM_ID,
  Renderer2,
  RendererStyleFlags2,
  ReplaySubject,
  Subject,
  catchError,
  filter,
  inject,
  isPlatformServer,
  map,
  mergeMap,
  never,
  of,
  setClassMetadata,
  switchMap,
  take,
  takeUntilDestroyed,
  tap,
  ɵsetClassDebugInfo,
  ɵɵNgOnChangesFeature,
  ɵɵStandaloneFeature,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵqueryRefresh,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleMap,
  ɵɵviewQuery
} from "./chunk-PYHIUVNJ.js";

// node_modules/ng-lazyload-image/fesm2020/ng-lazyload-image.mjs
function getNavigator() {
  return typeof window !== "undefined" ? window.navigator : void 0;
}
function isChildOfPicture(element) {
  return Boolean(element.parentElement && element.parentElement.nodeName.toLowerCase() === "picture");
}
function isImageElement(element) {
  return element.nodeName.toLowerCase() === "img";
}
function setImage(element, imagePath, useSrcset) {
  if (isImageElement(element)) {
    if (useSrcset && "srcset" in element) {
      element.srcset = imagePath;
    } else {
      element.src = imagePath;
    }
  } else {
    element.style.backgroundImage = `url('${imagePath}')`;
  }
  return element;
}
function setSources(attrName) {
  return (image) => {
    const sources = image.parentElement.getElementsByTagName("source");
    for (let i = 0; i < sources.length; i++) {
      const attrValue = sources[i].getAttribute(attrName);
      if (attrValue) {
        if ("srcset" in sources[i]) {
          sources[i].srcset = attrValue;
        } else {
          sources[i].src = attrValue;
        }
      }
    }
  };
}
var setSourcesToDefault = setSources("defaultImage");
var setSourcesToLazy = setSources("lazyLoad");
var setSourcesToError = setSources("errorImage");
function setImageAndSources(setSourcesFn) {
  return (element, imagePath, useSrcset) => {
    if (isImageElement(element) && isChildOfPicture(element)) {
      setSourcesFn(element);
    }
    if (imagePath) {
      setImage(element, imagePath, useSrcset);
    }
  };
}
var setImageAndSourcesToDefault = setImageAndSources(setSourcesToDefault);
var setImageAndSourcesToLazy = setImageAndSources(setSourcesToLazy);
var setImageAndSourcesToError = setImageAndSources(setSourcesToError);
var Hooks = class {
  constructor() {
    this.navigator = getNavigator();
  }
  setPlatformId(platformId) {
    this.platformId = platformId;
  }
  onDestroy(attributes) {
  }
  onAttributeChange(newAttributes) {
  }
};
var cssClassNames = {
  loaded: "ng-lazyloaded",
  loading: "ng-lazyloading",
  failed: "ng-failed-lazyloaded"
};
function removeCssClassName(element, cssClassName) {
  element.className = element.className.replace(cssClassName, "");
}
function addCssClassName(element, cssClassName) {
  if (!element.className.includes(cssClassName)) {
    element.className += ` ${cssClassName}`;
  }
}
function hasCssClassName(element, cssClassName) {
  return element.className && element.className.includes(cssClassName);
}
var SharedHooks = class extends Hooks {
  setup(attributes) {
    setImageAndSourcesToDefault(attributes.element, attributes.defaultImagePath, attributes.useSrcset);
    if (attributes.imagePath) {
      addCssClassName(attributes.element, cssClassNames.loading);
    }
    if (hasCssClassName(attributes.element, cssClassNames.loaded)) {
      removeCssClassName(attributes.element, cssClassNames.loaded);
    }
  }
  finally(attributes) {
    addCssClassName(attributes.element, cssClassNames.loaded);
    removeCssClassName(attributes.element, cssClassNames.loading);
  }
  loadImage(attributes) {
    if (this.skipLazyLoading(attributes)) {
      return [attributes.imagePath];
    }
    const {
      element,
      useSrcset,
      imagePath,
      decode
    } = attributes;
    let img;
    if (isImageElement(element) && isChildOfPicture(element)) {
      const parentClone = element.parentNode.cloneNode(true);
      img = parentClone.getElementsByTagName("img")[0];
      setSourcesToLazy(img);
      setImage(img, imagePath, useSrcset);
    } else {
      img = new Image();
      if (isImageElement(element) && element.referrerPolicy) {
        img.referrerPolicy = element.referrerPolicy;
      }
      if (isImageElement(element) && element.sizes) {
        img.sizes = element.sizes;
      }
      if (useSrcset && "srcset" in img) {
        img.srcset = imagePath;
      } else {
        img.src = imagePath;
      }
    }
    if (decode && img.decode) {
      return img.decode().then(() => imagePath);
    }
    return new Promise((resolve, reject) => {
      img.onload = () => resolve(imagePath);
      img.onerror = () => reject(null);
    });
  }
  setErrorImage(error, attributes) {
    const {
      element,
      useSrcset,
      errorImagePath
    } = attributes;
    setImageAndSourcesToError(element, errorImagePath, useSrcset);
    addCssClassName(element, cssClassNames.failed);
  }
  setLoadedImage(imagePath, attributes) {
    const {
      element,
      useSrcset
    } = attributes;
    setImageAndSourcesToLazy(element, imagePath, useSrcset);
  }
  isDisabled() {
    return isPlatformServer(this.platformId) && !this.isBot();
  }
  skipLazyLoading(attributes) {
    return this.isBot(attributes);
  }
  isBot(attributes) {
    if (this.navigator?.userAgent) {
      return /googlebot|bingbot|yandex|baiduspider|facebookexternalhit|twitterbot|rogerbot|linkedinbot|embedly|quora\ link\ preview|showyoubot|outbrain|pinterest\/0\.|pinterestbot|slackbot|vkShare|W3C_Validator|whatsapp|duckduckbot|prerender/i.test(this.navigator.userAgent);
    }
    return false;
  }
};
var IntersectionObserverHooks = class extends SharedHooks {
  constructor() {
    super(...arguments);
    this.observers = /* @__PURE__ */ new WeakMap();
    this.intersectionSubject = new Subject();
    this.uniqKey = {};
  }
  getObservable(attributes) {
    if (this.skipLazyLoading(attributes)) {
      return of({
        isIntersecting: true
      });
    }
    if (attributes.customObservable) {
      return attributes.customObservable;
    }
    const scrollContainerKey = attributes.scrollContainer || this.uniqKey;
    const options = {
      root: attributes.scrollContainer || null
    };
    if (attributes.offset) {
      options.rootMargin = `${attributes.offset}px`;
    }
    let observer = this.observers.get(scrollContainerKey);
    if (!observer) {
      observer = new IntersectionObserver((entrys) => this.loadingCallback(entrys), options);
      this.observers.set(scrollContainerKey, observer);
    }
    observer.observe(attributes.element);
    return Observable.create((obs) => {
      const subscription = this.intersectionSubject.pipe(filter((entry) => entry.target === attributes.element)).subscribe(obs);
      return () => {
        subscription.unsubscribe();
        observer.unobserve(attributes.element);
      };
    });
  }
  isVisible(event) {
    return event.isIntersecting;
  }
  loadingCallback(entrys) {
    entrys.forEach((entry) => this.intersectionSubject.next(entry));
  }
};
function lazyLoadImage(hooks, attributes) {
  return (evntObservable) => {
    return evntObservable.pipe(tap((data) => attributes.onStateChange.emit({
      reason: "observer-emit",
      data
    })), filter((event) => hooks.isVisible(event, attributes)), take(1), tap(() => attributes.onStateChange.emit({
      reason: "start-loading"
    })), mergeMap(() => hooks.loadImage(attributes)), tap(() => attributes.onStateChange.emit({
      reason: "mount-image"
    })), tap((imagePath) => hooks.setLoadedImage(imagePath, attributes)), tap(() => attributes.onStateChange.emit({
      reason: "loading-succeeded"
    })), map(() => true), catchError((error) => {
      attributes.onStateChange.emit({
        reason: "loading-failed",
        data: error
      });
      hooks.setErrorImage(error, attributes);
      return of(false);
    }), tap(() => {
      attributes.onStateChange.emit({
        reason: "finally"
      });
      hooks.finally(attributes);
    }));
  };
}
var LAZYLOAD_IMAGE_HOOKS = new InjectionToken("LazyLoadImageHooks");
var LazyLoadImageDirective = class {
  constructor(el, ngZone, platformId, hooks) {
    this.onStateChange = new EventEmitter();
    this.elementRef = el;
    this.ngZone = ngZone;
    this.propertyChanges$ = new ReplaySubject();
    this.hooks = hooks;
    this.hooks.setPlatformId(platformId);
    this.uid = Math.random().toString(36).substr(2, 9);
  }
  ngOnChanges() {
    if (this.debug === true && !this.debugSubscription) {
      this.debugSubscription = this.onStateChange.subscribe((e) => console.log(e));
    }
    this.propertyChanges$.next({
      element: this.elementRef.nativeElement,
      imagePath: this.lazyImage,
      defaultImagePath: this.defaultImage,
      errorImagePath: this.errorImage,
      useSrcset: this.useSrcset,
      offset: this.offset ? this.offset | 0 : 0,
      scrollContainer: this.scrollTarget,
      customObservable: this.customObservable,
      decode: this.decode,
      onStateChange: this.onStateChange,
      id: this.uid
    });
  }
  ngAfterContentInit() {
    if (this.hooks.isDisabled()) {
      return null;
    }
    this.ngZone.runOutsideAngular(() => {
      this.loadSubscription = this.propertyChanges$.pipe(tap((attributes) => this.hooks.onAttributeChange(attributes)), tap((attributes) => attributes.onStateChange.emit({
        reason: "setup"
      })), tap((attributes) => this.hooks.setup(attributes)), switchMap((attributes) => {
        if (!attributes.imagePath) {
          return never();
        }
        return this.hooks.getObservable(attributes).pipe(lazyLoadImage(this.hooks, attributes));
      })).subscribe({
        next: () => null
      });
    });
  }
  ngOnDestroy() {
    this.propertyChanges$.pipe(take(1)).subscribe({
      next: (attributes) => this.hooks.onDestroy(attributes)
    }).unsubscribe();
    this.loadSubscription?.unsubscribe();
    this.debugSubscription?.unsubscribe();
  }
};
LazyLoadImageDirective.\u0275fac = function LazyLoadImageDirective_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || LazyLoadImageDirective)(\u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(NgZone), \u0275\u0275directiveInject(PLATFORM_ID), \u0275\u0275directiveInject(LAZYLOAD_IMAGE_HOOKS));
};
LazyLoadImageDirective.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: LazyLoadImageDirective,
  selectors: [["", "lazyLoad", ""]],
  inputs: {
    lazyImage: [0, "lazyLoad", "lazyImage"],
    defaultImage: "defaultImage",
    errorImage: "errorImage",
    scrollTarget: "scrollTarget",
    customObservable: "customObservable",
    offset: "offset",
    useSrcset: "useSrcset",
    decode: "decode",
    debug: "debug"
  },
  outputs: {
    onStateChange: "onStateChange"
  },
  features: [\u0275\u0275NgOnChangesFeature]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LazyLoadImageDirective, [{
    type: Directive,
    args: [{
      selector: "[lazyLoad]"
    }]
  }], function() {
    return [{
      type: ElementRef
    }, {
      type: NgZone
    }, {
      type: Object,
      decorators: [{
        type: Inject,
        args: [PLATFORM_ID]
      }]
    }, {
      type: Hooks,
      decorators: [{
        type: Inject,
        args: [LAZYLOAD_IMAGE_HOOKS]
      }]
    }];
  }, {
    lazyImage: [{
      type: Input,
      args: ["lazyLoad"]
    }],
    defaultImage: [{
      type: Input
    }],
    errorImage: [{
      type: Input
    }],
    scrollTarget: [{
      type: Input
    }],
    customObservable: [{
      type: Input
    }],
    offset: [{
      type: Input
    }],
    useSrcset: [{
      type: Input
    }],
    decode: [{
      type: Input
    }],
    debug: [{
      type: Input
    }],
    onStateChange: [{
      type: Output
    }]
  });
})();
var LazyLoadImageModule = class {
};
LazyLoadImageModule.\u0275fac = function LazyLoadImageModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || LazyLoadImageModule)();
};
LazyLoadImageModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
  type: LazyLoadImageModule
});
LazyLoadImageModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
  providers: [{
    provide: LAZYLOAD_IMAGE_HOOKS,
    useClass: IntersectionObserverHooks
  }]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LazyLoadImageModule, [{
    type: NgModule,
    args: [{
      declarations: [LazyLoadImageDirective],
      exports: [LazyLoadImageDirective],
      providers: [{
        provide: LAZYLOAD_IMAGE_HOOKS,
        useClass: IntersectionObserverHooks
      }]
    }]
  }], null, null);
})();
var Rect = class _Rect {
  constructor(left, top, right, bottom) {
    this.left = left;
    this.top = top;
    this.right = right;
    this.bottom = bottom;
  }
  static fromElement(element) {
    const {
      left,
      top,
      right,
      bottom
    } = element.getBoundingClientRect();
    if (left === 0 && top === 0 && right === 0 && bottom === 0) {
      return _Rect.empty;
    } else {
      return new _Rect(left, top, right, bottom);
    }
  }
  static fromWindow(_window) {
    return new _Rect(0, 0, _window.innerWidth, _window.innerHeight);
  }
  inflate(inflateBy) {
    this.left -= inflateBy;
    this.top -= inflateBy;
    this.right += inflateBy;
    this.bottom += inflateBy;
  }
  intersectsWith(rect) {
    return rect.left < this.right && this.left < rect.right && rect.top < this.bottom && this.top < rect.bottom;
  }
  getIntersectionWith(rect) {
    const left = Math.max(this.left, rect.left);
    const top = Math.max(this.top, rect.top);
    const right = Math.min(this.right, rect.right);
    const bottom = Math.min(this.bottom, rect.bottom);
    if (right >= left && bottom >= top) {
      return new _Rect(left, top, right, bottom);
    } else {
      return _Rect.empty;
    }
  }
};
Rect.empty = new Rect(0, 0, 0, 0);

// src/app/shared/image/image.component.ts
var _c0 = ["img"];
var _c1 = (a0) => ({ "object-fit": a0 });
var ImageComponent = class _ImageComponent {
  constructor() {
    this.destroyRef = inject(DestroyRef);
    this.imageService = inject(ImageService);
    this.renderer = inject(Renderer2);
    this.hubService = inject(MessageHubService);
    this.cdRef = inject(ChangeDetectorRef);
    this.width = "";
    this.height = "";
    this.processEvents = true;
    this.classes = "";
    this.styles = {};
    this.errorImage = this.imageService.errorImage;
    this.hideOnError = false;
    this.objectFit = "fill";
    this.hubService.messages$.pipe(takeUntilDestroyed(this.destroyRef)).subscribe((res) => {
      if (!this.processEvents)
        return;
      if (res.event === EVENTS.CoverUpdate) {
        const updateEvent = res.payload;
        if (this.imageUrl === void 0 || this.imageUrl === null || this.imageUrl === "")
          return;
        const entityType = this.imageService.getEntityTypeFromUrl(this.imageUrl);
        if (entityType === updateEvent.entityType) {
          const tokens = this.imageUrl.split("?")[1].split("&");
          let id = tokens[0].replace(entityType + "Id=", "");
          if (id.includes("&")) {
            id = id.split("&")[0];
          }
          if (id === updateEvent.id + "") {
            this.imageUrl = this.imageService.randomize(this.imageUrl);
            this.cdRef.markForCheck();
          }
        }
      }
    });
  }
  ngOnChanges() {
    if (this.width !== "") {
      this.renderer.setStyle(this.imgElem.nativeElement, "width", this.width);
    }
    if (this.height !== "") {
      this.renderer.setStyle(this.imgElem.nativeElement, "height", this.height);
    }
    const styleKeys = Object.keys(this.styles);
    if (styleKeys.length !== 0) {
      styleKeys.forEach((key) => {
        this.renderer.setStyle(this.imgElem.nativeElement, key, this.styles[key], RendererStyleFlags2.Important);
      });
    }
    if (this.classes != "") {
      const classTokens = this.classes.split(" ");
      classTokens.forEach((cls) => this.renderer.addClass(this.imgElem.nativeElement, cls));
    }
    this.cdRef.markForCheck();
  }
  myCallbackFunction(event) {
    const image = this.imgElem.nativeElement;
    switch (event.reason) {
      case "setup":
        break;
      case "observer-emit":
        break;
      case "start-loading":
        break;
      case "mount-image":
        break;
      case "loading-succeeded":
        this.renderer.addClass(image, "loaded");
        break;
      case "loading-failed":
        this.renderer.removeClass(image, "fade-in");
        if (this.hideOnError) {
          this.renderer.addClass(image, "d-none");
        }
        this.cdRef.markForCheck();
        break;
      case "finally":
        break;
    }
  }
  static {
    this.\u0275fac = function ImageComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ImageComponent)();
    };
  }
  static {
    this.\u0275cmp = \u0275\u0275defineComponent({ type: _ImageComponent, selectors: [["app-image"]], viewQuery: function ImageComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(_c0, 7);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.imgElem = _t.first);
      }
    }, inputs: { imageUrl: "imageUrl", width: "width", height: "height", processEvents: "processEvents", classes: "classes", styles: "styles", errorImage: "errorImage", hideOnError: "hideOnError", objectFit: "objectFit" }, standalone: true, features: [\u0275\u0275NgOnChangesFeature, \u0275\u0275StandaloneFeature], decls: 2, vars: 6, consts: [["img", ""], ["alt", "", "aria-hidden", "true", 1, "img-placeholder", "fade-in", 3, "onStateChange", "lazyLoad", "errorImage"]], template: function ImageComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275elementStart(0, "img", 1, 0);
        \u0275\u0275listener("onStateChange", function ImageComponent_Template_img_onStateChange_0_listener($event) {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.myCallbackFunction($event));
        });
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275styleMap(\u0275\u0275pureFunction1(4, _c1, ctx.objectFit));
        \u0275\u0275property("lazyLoad", ctx.imageUrl)("errorImage", ctx.errorImage);
      }
    }, dependencies: [LazyLoadImageModule, LazyLoadImageDirective], styles: ["\n\nimg[_ngcontent-%COMP%] {\n  width: 100%;\n  transition: opacity 1s;\n}\n.fade-in[_ngcontent-%COMP%] {\n  opacity: 0;\n  transition: opacity 0.3s ease-in-out;\n}\n.fade-in.loaded[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n/*# sourceMappingURL=image.component.css.map */"], changeDetection: 0 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ImageComponent, { className: "ImageComponent", filePath: "src/app/shared/image/image.component.ts", lineNumber: 31 });
})();

export {
  LazyLoadImageModule,
  ImageComponent
};
//# sourceMappingURL=chunk-2JLAQ3MZ.js.map
