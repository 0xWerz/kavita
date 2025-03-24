import {
  BookService
} from "./chunk-UATES4PD.js";
import {
  BookPageLayoutMode,
  ReadingDirection,
  WritingStyle
} from "./chunk-HLXD4ERA.js";
import {
  AccountService,
  ThemeProvider,
  ThemeService
} from "./chunk-U2DWQJI2.js";
import {
  NgbAccordionBody,
  NgbAccordionButton,
  NgbAccordionCollapse,
  NgbAccordionDirective,
  NgbAccordionHeader,
  NgbAccordionItem,
  NgbTooltip
} from "./chunk-2R2RCU4Y.js";
import {
  CheckboxControlValueAccessor,
  DefaultValueAccessor,
  FormControl,
  FormControlName,
  FormGroup,
  FormGroupDirective,
  NgControlStatus,
  NgControlStatusGroup,
  NgSelectOption,
  RadioControlValueAccessor,
  RangeValueAccessor,
  ReactiveFormsModule,
  SelectControlValueAccessor,
  ɵNgNoValidate,
  ɵNgSelectMultipleOption
} from "./chunk-BPOUBDX2.js";
import {
  ChangeDetectorRef,
  DOCUMENT,
  DestroyRef,
  EventEmitter,
  NgClass,
  NgForOf,
  NgIf,
  NgStyle,
  NgTemplateOutlet,
  TitleCasePipe,
  TranslocoDirective,
  inject,
  take,
  takeUntilDestroyed,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMapInterpolate1,
  ɵɵclassMapInterpolate2,
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
  ɵɵproperty,
  ɵɵpropertyInterpolate,
  ɵɵpureFunction1,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeHtml,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-PYHIUVNJ.js";

// src/app/book-reader/_models/book-black-theme.ts
var BookBlackTheme = `
:root .brtheme-black {
  /* General */
  --color-scheme: dark;
  --bs-body-color: black;
  --hr-color: rgba(239, 239, 239, 0.125);
  --accent-bg-color: rgba(1, 4, 9, 0.5);
  --accent-text-color: lightgrey;
  --body-text-color: #efefef;
  --btn-icon-filter: invert(1) grayscale(100%) brightness(200%);

  /* Drawer */
  --drawer-bg-color: #292929;
  --drawer-text-color: white;
  --drawer-pagination-horizontal-rule: inset 0 -1px 0 rgb(255 255 255 / 20%);
  --drawer-pagination-border: 1px solid rgb(0 0 0 / 13%);
  

  /* Accordion */
  --accordion-header-text-color: rgba(74, 198, 148, 0.9);
  --accordion-header-bg-color: rgba(52, 60, 70, 0.5);
  --accordion-body-bg-color: #292929;
  --accordion-body-border-color: rgba(239, 239, 239, 0.125);
  --accordion-body-text-color: var(--body-text-color);
  --accordion-header-collapsed-text-color: rgba(74, 198, 148, 0.9);
  --accordion-header-collapsed-bg-color: #292929;
  --accordion-button-focus-border-color: unset;
  --accordion-button-focus-box-shadow: unset;
  --accordion-active-body-bg-color: #292929;

  /* Buttons */
    --btn-focus-boxshadow-color: rgb(255 255 255 / 50%);
    --btn-primary-text-color: white;
    --btn-primary-bg-color: var(--primary-color);
    --btn-primary-border-color: var(--primary-color);
    --btn-primary-hover-text-color: white;
    --btn-primary-hover-bg-color: var(--primary-color-darker-shade);
    --btn-primary-hover-border-color: var(--primary-color-darker-shade);
    --btn-alt-bg-color: #424c72;
    --btn-alt-border-color: #444f75;
    --btn-alt-hover-bg-color: #3b4466;
    --btn-alt-focus-bg-color: #343c59;
    --btn-alt-focus-boxshadow-color: rgb(255 255 255 / 50%);
    --btn-fa-icon-color: white;
    --btn-disabled-bg-color: #343a40;
    --btn-disabled-text-color: white;
    --btn-disabled-border-color: #6c757d;

    /* Inputs */
    --input-bg-color: #343a40;
    --input-bg-readonly-color: #434648;
    --input-focused-border-color: #ccc;
    --input-text-color: #fff;
    --input-placeholder-color: #aeaeae;
    --input-border-color: #ccc;
    --input-focus-boxshadow-color: rgb(255 255 255 / 50%);

    /* Nav (Tabs) */
    --nav-tab-border-color: rgba(44, 118, 88, 0.7);
    --nav-tab-text-color: var(--body-text-color);
    --nav-tab-bg-color: var(--primary-color);
    --nav-tab-hover-border-color: var(--primary-color);
    --nav-tab-active-text-color: white;
    --nav-tab-border-hover-color: transparent;
    --nav-tab-hover-text-color: var(--body-text-color);
    --nav-tab-hover-bg-color: transparent;
    --nav-tab-border-top: rgba(44, 118, 88, 0.7);
    --nav-tab-border-left: rgba(44, 118, 88, 0.7);
    --nav-tab-border-bottom: rgba(44, 118, 88, 0.7);
    --nav-tab-border-right: rgba(44, 118, 88, 0.7);
    --nav-tab-hover-border-top: rgba(44, 118, 88, 0.7);
    --nav-tab-hover-border-left: rgba(44, 118, 88, 0.7);
    --nav-tab-hover-border-bottom: var(--bs-body-bg);
    --nav-tab-hover-border-right: rgba(44, 118, 88, 0.7);
    --nav-tab-active-hover-bg-color: var(--primary-color);
    --nav-link-bg-color: var(--primary-color);
    --nav-link-active-text-color: white;
    --nav-link-text-color: white;



  /* Reading Bar */
  --br-actionbar-button-text-color: white;
  --br-actionbar-button-hover-border-color: #6c757d;
  --br-actionbar-bg-color: black;
}



.book-content *:not(input), .book-content *:not(select), .book-content *:not(code), .book-content *:not(:link), .book-content *:not(.ngx-toastr) {
  color: #dcdcdc !important;
}

.book-content code {
  color: #e83e8c !important;
}

.book-content :link, .book-content a {
  color: #8db2e5 !important;
}

.book-content img, .book-content img[src] {
z-index: 1;
filter: brightness(0.85) !important;
background-color: initial !important;
}

.reader-container {
  color: #dcdcdc !important;
  background-image: none !important;
  background-color: black !important;
}

.book-content *:not(code), .book-content *:not(a) {
    background-color: black;
    box-shadow: none;
    text-shadow: none;
    border-radius: unset;
    color: #dcdcdc !important;
}
  
.book-content :visited, .book-content :visited *, .book-content :visited *[class] {color: rgb(211, 138, 138) !important}
.book-content :link:not(cite), :link .book-content *:not(cite) {color: #8db2e5 !important}
`;

// src/app/book-reader/_models/book-dark-theme.ts
var BookDarkTheme = `
:root .brtheme-dark {
  /* General */
  --color-scheme: dark;
  --bs-body-color: #292929;
  --hr-color: rgba(239, 239, 239, 0.125);
  --accent-bg-color: rgba(1, 4, 9, 0.5);
  --accent-text-color: lightgrey;
  --body-text-color: #efefef;
  --btn-icon-filter: invert(1) grayscale(100%) brightness(200%);

  /* Drawer */
  --drawer-bg-color: #292929;
  --drawer-text-color: white;
  --drawer-pagination-horizontal-rule: inset 0 -1px 0 rgb(255 255 255 / 20%);
  --drawer-pagination-border: 1px solid rgb(0 0 0 / 13%);

  /* Accordion */
  --accordion-header-text-color: rgba(74, 198, 148, 0.9);
  --accordion-header-bg-color: rgba(52, 60, 70, 0.5);
  --accordion-body-bg-color: #292929;
  --accordion-body-border-color: rgba(239, 239, 239, 0.125);
  --accordion-body-text-color: var(--body-text-color);
  --accordion-header-collapsed-text-color: rgba(74, 198, 148, 0.9);
  --accordion-header-collapsed-bg-color: #292929;
  --accordion-button-focus-border-color: unset;
  --accordion-button-focus-box-shadow: unset;
  --accordion-active-body-bg-color: #292929;

  /* Buttons */
    --btn-focus-boxshadow-color: rgb(255 255 255 / 50%);
    --btn-primary-text-color: white;
    --btn-primary-bg-color: var(--primary-color);
    --btn-primary-border-color: var(--primary-color);
    --btn-primary-hover-text-color: white;
    --btn-primary-hover-bg-color: var(--primary-color-darker-shade);
    --btn-primary-hover-border-color: var(--primary-color-darker-shade);
    --btn-alt-bg-color: #424c72;
    --btn-alt-border-color: #444f75;
    --btn-alt-hover-bg-color: #3b4466;
    --btn-alt-focus-bg-color: #343c59;
    --btn-alt-focus-boxshadow-color: rgb(255 255 255 / 50%);
    --btn-fa-icon-color: white;
    --btn-disabled-bg-color: #343a40;
    --btn-disabled-text-color: white;
    --btn-disabled-border-color: #6c757d;

    /* Inputs */
    --input-bg-color: #343a40;
    --input-bg-readonly-color: #434648;
    --input-focused-border-color: #ccc;
    --input-text-color: #fff;
    --input-placeholder-color: #aeaeae;
    --input-border-color: #ccc;
    --input-focus-boxshadow-color: rgb(255 255 255 / 50%);

    /* Nav (Tabs) */
    --nav-tab-border-color: rgba(44, 118, 88, 0.7);
    --nav-tab-text-color: var(--body-text-color);
    --nav-tab-bg-color: var(--primary-color);
    --nav-tab-hover-border-color: var(--primary-color);
    --nav-tab-active-text-color: white;
    --nav-tab-border-hover-color: transparent;
    --nav-tab-hover-text-color: var(--body-text-color);
    --nav-tab-hover-bg-color: transparent;
    --nav-tab-border-top: rgba(44, 118, 88, 0.7);
    --nav-tab-border-left: rgba(44, 118, 88, 0.7);
    --nav-tab-border-bottom: rgba(44, 118, 88, 0.7);
    --nav-tab-border-right: rgba(44, 118, 88, 0.7);
    --nav-tab-hover-border-top: rgba(44, 118, 88, 0.7);
    --nav-tab-hover-border-left: rgba(44, 118, 88, 0.7);
    --nav-tab-hover-border-bottom: var(--bs-body-bg);
    --nav-tab-hover-border-right: rgba(44, 118, 88, 0.7);
    --nav-tab-active-hover-bg-color: var(--primary-color);
    --nav-link-bg-color: var(--primary-color);
    --nav-link-active-text-color: white;
    --nav-link-text-color: white;

    /* Checkboxes/Switch */
    --checkbox-checked-bg-color: var(--primary-color);
    --checkbox-border-color: var(--input-focused-border-color);
    --checkbox-focus-border-color: var(--primary-color);
    --checkbox-focus-boxshadow-color: rgb(255 255 255 / 50%);



    /* Reading Bar */
    --br-actionbar-button-text-color: white;
    --br-actionbar-button-hover-border-color: #6c757d;
    --br-actionbar-bg-color: black;
    
}



.book-content *:not(input), .book-content *:not(select), .book-content *:not(code), .book-content *:not(:link), .book-content *:not(.ngx-toastr) {
  color: #dcdcdc !important;
}

.book-content code {
  color: #e83e8c !important;
}

.book-content :link, .book-content a {
  color: #8db2e5 !important;
}

.book-content img, .book-content img[src] {
z-index: 1;
filter: brightness(0.85) !important;
background-color: initial !important;
}

.reader-container {
  color: #dcdcdc !important;
  background-image: none !important;
  background-color: #292929 !important;
}

.book-content *:not(code), .book-content *:not(a) {
    background-color: #292929;
    box-shadow: none;
    text-shadow: none;
    border-radius: unset;
    color: #dcdcdc !important;
}
  
.book-content :visited, .book-content :visited *, .book-content :visited *[class] {color: rgb(211, 138, 138) !important}
.book-content :link:not(cite), :link .book-content *:not(cite) {color: #8db2e5 !important}

`;

// src/app/book-reader/_models/book-white-theme.ts
var BookWhiteTheme = `
  :root .brtheme-white {
    --drawer-text-color: white;
    --br-actionbar-bg-color: white;
    --bs-btn-active-color: black;
    --progress-bg-color: rgb(222, 226, 230);

    /* General */
    --color-scheme: light;
    --bs-body-color: black;
    --hr-color: rgba(239, 239, 239, 0.125);
    --accent-bg-color: rgba(1, 4, 9, 0.5);
    --accent-text-color: lightgrey;
    --body-text-color: black;
    --btn-icon-filter: invert(1) grayscale(100%) brightness(200%);

    /* Drawer */
    --drawer-bg-color: white;
    --drawer-text-color: black;
    --drawer-pagination-horizontal-rule: inset 0 -1px 0 rgb(255 255 255 / 20%);
    --drawer-pagination-border: 1px solid rgb(0 0 0 / 13%);


    /* Accordion */
    --accordion-header-text-color: rgba(74, 198, 148, 0.9);
    --accordion-header-bg-color: rgba(52, 60, 70, 0.5);
    --accordion-body-bg-color: white;
    --accordion-body-border-color: rgba(239, 239, 239, 0.125);
    --accordion-body-text-color: var(--body-text-color);
    --accordion-header-collapsed-text-color: rgba(74, 198, 148, 0.9);
    --accordion-header-collapsed-bg-color: white;
    --accordion-button-focus-border-color: unset;
    --accordion-button-focus-box-shadow: unset;
    --accordion-active-body-bg-color: white;

    /* Buttons */
    --btn-focus-boxshadow-color: rgb(255 255 255 / 50%);
    --btn-primary-text-color: white;
    --btn-primary-bg-color: var(--primary-color);
    --btn-primary-border-color: var(--primary-color);
    --btn-primary-hover-text-color: white;
    --btn-primary-hover-bg-color: var(--primary-color-darker-shade);
    --btn-primary-hover-border-color: var(--primary-color-darker-shade);
    --btn-alt-bg-color: #424c72;
    --btn-alt-border-color: #444f75;
    --btn-alt-hover-bg-color: #3b4466;
    --btn-alt-focus-bg-color: #343c59;
    --btn-alt-focus-boxshadow-color: rgb(255 255 255 / 50%);
    --btn-fa-icon-color: black;
    --btn-disabled-bg-color: #343a40;
    --btn-disabled-text-color: #efefef;
    --btn-disabled-border-color: #6c757d;

    /* Inputs */
    --input-bg-color: white;
    --input-bg-readonly-color: white;
    --input-focused-border-color: #ccc;
    --input-text-color: black;
    --input-placeholder-color: black;
    --input-border-color: #ccc;
    --input-focus-boxshadow-color: rgb(255 255 255 / 50%);

    /* Nav (Tabs) */
    --nav-tab-border-color: rgba(44, 118, 88, 0.7);
    --nav-tab-text-color: var(--body-text-color);
    --nav-tab-bg-color: var(--primary-color);
    --nav-tab-hover-border-color: var(--primary-color);
    --nav-tab-active-text-color: white;
    --nav-tab-border-hover-color: transparent;
    --nav-tab-hover-text-color: var(--body-text-color);
    --nav-tab-hover-bg-color: transparent;
    --nav-tab-border-top: rgba(44, 118, 88, 0.7);
    --nav-tab-border-left: rgba(44, 118, 88, 0.7);
    --nav-tab-border-bottom: rgba(44, 118, 88, 0.7);
    --nav-tab-border-right: rgba(44, 118, 88, 0.7);
    --nav-tab-hover-border-top: rgba(44, 118, 88, 0.7);
    --nav-tab-hover-border-left: rgba(44, 118, 88, 0.7);
    --nav-tab-hover-border-bottom: var(--bs-body-bg);
    --nav-tab-hover-border-right: rgba(44, 118, 88, 0.7);
    --nav-tab-active-hover-bg-color: var(--primary-color);
    --nav-link-bg-color: var(--primary-color);
    --nav-link-active-text-color: white;
    --nav-link-text-color: white;



  /* Reading Bar */
  --br-actionbar-button-text-color: black;
  --br-actionbar-button-hover-border-color: #6c757d;
  --br-actionbar-bg-color: white;

  /* Drawer */
  --drawer-pagination-horizontal-rule: inset 0 -1px 0 rgb(0 0 0 / 13%);
  --drawer-pagination-border: 1px solid rgb(0 0 0 / 13%);
}

.reader-container {
  color: black !important;
  background-image: none !important;
  background-color: white !important;
}


.book-content *:not(input), .book-content *:not(select), .book-content *:not(code), .book-content *:not(:link), .book-content *:not(.ngx-toastr) {
  color: black;
}

.book-content code {
  color: #e83e8c !important;
}

.book-content :link, .book-content a {
  color: #8db2e5 !important;
}

.book-content img, .book-content img[src] {
  z-index: 1;
  background-color: initial !important;
}


.book-content *:not(code), .book-content *:not(a) {
  background-color: white;
  box-shadow: none;
  text-shadow: none;
  border-radius: unset;
  color: #dcdcdc;
}

.book-content :visited, .book-content :visited *, .book-content :visited *[class] {
  color: rgb(240, 50, 50) !important;
}
.book-content :link:not(cite), :link .book-content *:not(cite) {
  color: #00f !important;
}

.btn-check:checked + .btn {
  color: white;
  background-color: var(--primary-color);
}

`;

// src/app/book-reader/_models/book-paper-theme.ts
var BookPaperTheme = `
  :root .brtheme-paper {
    --drawer-text-color: white;
    --br-actionbar-bg-color: white;
    --bs-btn-active-color: black;
    --progress-bg-color: rgb(222, 226, 230);

    /* General */
    --color-scheme: light;
    --bs-body-color: black;
    --hr-color: rgba(239, 239, 239, 0.125);
    --accent-bg-color: rgba(1, 4, 9, 0.5);
    --accent-text-color: lightgrey;
    --body-text-color: black;
    --btn-icon-filter: invert(1) grayscale(100%) brightness(200%);

    /* Drawer */
    --drawer-bg-color: #F1E4D5;
    --drawer-text-color: black;
    --drawer-pagination-horizontal-rule: inset 0 -1px 0 rgb(255 255 255 / 20%);


    /* Accordion */
    --accordion-header-bg-color: rgba(52, 60, 70, 0.5);
    --accordion-body-bg-color: #F1E4D5;
    --accordion-body-border-color: rgba(239, 239, 239, 0.125);
    --accordion-body-text-color: var(--body-text-color);
    --accordion-header-collapsed-bg-color: #F1E4D5;
    --accordion-button-focus-border-color: unset;
    --accordion-button-focus-box-shadow: unset;
    --accordion-active-body-bg-color: #F1E4D5;

    /* Buttons */
    --btn-focus-boxshadow-color: rgb(255 255 255 / 50%);
    --btn-primary-text-color: white;
    --btn-primary-bg-color: var(--primary-color);
    --btn-primary-border-color: var(--primary-color);
    --btn-primary-hover-text-color: white;
    --btn-primary-hover-bg-color: var(--primary-color-darker-shade);
    --btn-primary-hover-border-color: var(--primary-color-darker-shade);
    --btn-alt-bg-color: #424c72;
    --btn-alt-border-color: #444f75;
    --btn-alt-hover-bg-color: #3b4466;
    --btn-alt-focus-bg-color: #343c59;
    --btn-alt-focus-boxshadow-color: rgb(255 255 255 / 50%);
    --btn-fa-icon-color: black;
    --btn-disabled-bg-color: #343a40;
    --btn-disabled-text-color: #efefef;
    --btn-disabled-border-color: #6c757d;

    /* Inputs */
    --input-bg-color: white;
    --input-bg-readonly-color: #F1E4D5;
    --input-focused-border-color: #ccc;
    --input-placeholder-color: black;
    --input-border-color: #ccc;
    --input-text-color: black;
    --input-focus-boxshadow-color: rgb(255 255 255 / 50%);

    /* Nav (Tabs) */
    --nav-tab-border-color: rgba(44, 118, 88, 0.7);
    --nav-tab-text-color: var(--body-text-color);
    --nav-tab-bg-color: var(--primary-color);
    --nav-tab-hover-border-color: var(--primary-color);
    --nav-tab-active-text-color: white;
    --nav-tab-border-hover-color: transparent;
    --nav-tab-hover-text-color: var(--body-text-color);
    --nav-tab-hover-bg-color: transparent;
    --nav-tab-border-top: rgba(44, 118, 88, 0.7);
    --nav-tab-border-left: rgba(44, 118, 88, 0.7);
    --nav-tab-border-bottom: rgba(44, 118, 88, 0.7);
    --nav-tab-border-right: rgba(44, 118, 88, 0.7);
    --nav-tab-hover-border-top: rgba(44, 118, 88, 0.7);
    --nav-tab-hover-border-left: rgba(44, 118, 88, 0.7);
    --nav-tab-hover-border-bottom: var(--bs-body-bg);
    --nav-tab-hover-border-right: rgba(44, 118, 88, 0.7);
    --nav-tab-active-hover-bg-color: var(--primary-color);
    --nav-link-bg-color: var(--primary-color);
    --nav-link-active-text-color: white;
    --nav-link-text-color: white;

  /* Reading Bar */
  --br-actionbar-button-hover-border-color: #6c757d;
  --br-actionbar-bg-color: #F1E4D5;

  /* Drawer */
  --drawer-pagination-horizontal-rule: inset 0 -1px 0 rgb(0 0 0 / 13%);

  /* Custom variables */
  --theme-bg-color: #fff3c9;
}

.reader-container {
  color: black !important;
  background-color: var(--theme-bg-color) !important;
  background: url("assets/images/paper-bg.png");
}

.book-content *:not(input), .book-content *:not(select), .book-content *:not(code), .book-content *:not(:link), .book-content *:not(.ngx-toastr) {
  color: var(--bs-body-color) !important;
}

.book-content code {
  color: #e83e8c !important;
}

// KDB has a reboot style so for lighter themes, this is needed
.book-content kbd {
  background-color: transparent;
}

.book-content :link, .book-content a {
  color: #8db2e5 !important;
}

.book-content img, .book-content img[src] {
  z-index: 1;
  background-color: initial !important;
}


.book-content *:not(code), .book-content *:not(a), .book-content *:not(kbd) {
    //background-color: #F1E4D5;
    box-shadow: none;
    text-shadow: none;
    border-radius: unset;
    color: #dcdcdc !important;
}

.book-content :visited, .book-content :visited *, .book-content :visited *[class] {
  color: rgb(240, 50, 50) !important;
}
.book-content :link:not(cite), :link .book-content *:not(cite) {
  color: #00f !important;
}

.btn-check:checked + .btn {
  color: white;
  background-color: var(--primary-color);
}

.reader-container.column-layout-2::before {
  content: "";
  position: absolute;
  top: 0;
  left: 50%;
  height: 100%;
  box-shadow: 0px 0px 34.38px 5px rgba(0, 0, 0, 0.43), 0px 0px 6.28px 2px rgba(0, 0, 0, 0.43), 0px 0px 15.7px 4px rgba(0, 0, 0, 0.43), 0px 0px 1.57px 0.3px rgba(0, 0, 0, 0.43);
}

`;

// src/app/book-reader/_components/reader-settings/reader-settings.component.ts
var _c0 = (a0) => ({ "active": a0 });
var _c1 = (a0) => ({ "background-color": a0 });
function ReaderSettingsComponent_ng_container_0_ng_template_10_option_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 36);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "titlecase");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const opt_r2 = ctx.$implicit;
    \u0275\u0275property("value", opt_r2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 2, opt_r2));
  }
}
function ReaderSettingsComponent_ng_container_0_ng_template_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 16)(1, "div", 17)(2, "div", 18)(3, "label", 19);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "select", 20);
    \u0275\u0275template(6, ReaderSettingsComponent_ng_container_0_ng_template_10_option_6_Template, 3, 4, "option", 21);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(7, "div", 22)(8, "label", 23);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "span", 24);
    \u0275\u0275element(11, "i", 25)(12, "input", 26)(13, "i", 27);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "div", 22)(15, "label", 28);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "span", 24);
    \u0275\u0275text(18, " 1x ");
    \u0275\u0275element(19, "input", 29);
    \u0275\u0275text(20, " 2.5x ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "div", 22)(22, "label", 30);
    \u0275\u0275text(23);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "span", 24);
    \u0275\u0275element(25, "i", 31)(26, "input", 32)(27, "i", 33);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(28, "div", 34)(29, "button", 35);
    \u0275\u0275listener("click", function ReaderSettingsComponent_ng_container_0_ng_template_10_Template_button_click_29_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.resetSettings());
    });
    \u0275\u0275text(30);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    let tmp_7_0;
    let tmp_9_0;
    let tmp_11_0;
    const t_r4 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(t_r4("font-family-label"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r2.fontOptions);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(t_r4("font-size-label"));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngbTooltip", ((tmp_7_0 = ctx_r2.settingsForm.get("bookReaderFontSize")) == null ? null : tmp_7_0.value) + "%");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(t_r4("line-spacing-label"));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngbTooltip", ((tmp_9_0 = ctx_r2.settingsForm.get("bookReaderLineSpacing")) == null ? null : tmp_9_0.value) + "%");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(t_r4("margin-label"));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngbTooltip", ((tmp_11_0 = ctx_r2.settingsForm.get("bookReaderMargin")) == null ? null : tmp_11_0.value) + "%");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(t_r4("reset-to-defaults"));
  }
}
function ReaderSettingsComponent_ng_container_0_ng_template_17_ng_template_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const t_r4 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275textInterpolate(t_r4("writing-style-tooltip"));
  }
}
function ReaderSettingsComponent_ng_container_0_ng_template_17_ng_template_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const t_r4 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275textInterpolate(t_r4("tap-to-paginate-tooltip"));
  }
}
function ReaderSettingsComponent_ng_container_0_ng_template_17_ng_template_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const t_r4 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275textInterpolate(t_r4("immersive-mode-tooltip"));
  }
}
function ReaderSettingsComponent_ng_container_0_ng_template_17_ng_template_47_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const t_r4 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275textInterpolate(t_r4("fullscreen-tooltip"));
  }
}
function ReaderSettingsComponent_ng_container_0_ng_template_17_span_53_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r4 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("\xA0", ctx_r2.isFullscreen ? t_r4("exit") : t_r4("enter"), "");
  }
}
function ReaderSettingsComponent_ng_container_0_ng_template_17_ng_template_58_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 71);
  }
  if (rf & 2) {
    const t_r4 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275property("innerHTML", t_r4("layout-mode-tooltip"), \u0275\u0275sanitizeHtml);
  }
}
function ReaderSettingsComponent_ng_container_0_ng_template_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 37)(1, "label", 38);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 39);
    \u0275\u0275listener("click", function ReaderSettingsComponent_ng_container_0_ng_template_17_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.toggleReadingDirection());
    });
    \u0275\u0275element(4, "i", 40);
    \u0275\u0275elementStart(5, "span", 41);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(7, "div", 37)(8, "label", 42);
    \u0275\u0275text(9);
    \u0275\u0275element(10, "i", 43);
    \u0275\u0275elementEnd();
    \u0275\u0275template(11, ReaderSettingsComponent_ng_container_0_ng_template_17_ng_template_11_Template, 1, 1, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementStart(13, "span", 44);
    \u0275\u0275elementContainer(14, 45);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "button", 46);
    \u0275\u0275listener("click", function ReaderSettingsComponent_ng_container_0_ng_template_17_Template_button_click_15_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.toggleWritingStyle());
    });
    \u0275\u0275element(16, "i", 40);
    \u0275\u0275elementStart(17, "span", 41);
    \u0275\u0275text(18);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(19, "div", 37)(20, "label", 47);
    \u0275\u0275text(21);
    \u0275\u0275element(22, "i", 48);
    \u0275\u0275elementEnd();
    \u0275\u0275template(23, ReaderSettingsComponent_ng_container_0_ng_template_17_ng_template_23_Template, 1, 1, "ng-template", null, 2, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementStart(25, "span", 49);
    \u0275\u0275elementContainer(26, 45);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "div", 50);
    \u0275\u0275element(28, "input", 51);
    \u0275\u0275elementStart(29, "label");
    \u0275\u0275text(30);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(31, "div", 37)(32, "label", 52);
    \u0275\u0275text(33);
    \u0275\u0275element(34, "i", 53);
    \u0275\u0275elementEnd();
    \u0275\u0275template(35, ReaderSettingsComponent_ng_container_0_ng_template_17_ng_template_35_Template, 1, 1, "ng-template", null, 3, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementStart(37, "span", 54);
    \u0275\u0275elementContainer(38, 45);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "div", 50);
    \u0275\u0275element(40, "input", 55);
    \u0275\u0275elementStart(41, "label");
    \u0275\u0275text(42);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(43, "div", 37)(44, "label", 56);
    \u0275\u0275text(45);
    \u0275\u0275element(46, "i", 57);
    \u0275\u0275elementEnd();
    \u0275\u0275template(47, ReaderSettingsComponent_ng_container_0_ng_template_17_ng_template_47_Template, 1, 1, "ng-template", null, 4, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementStart(49, "span", 58);
    \u0275\u0275elementContainer(50, 45);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(51, "button", 59);
    \u0275\u0275listener("click", function ReaderSettingsComponent_ng_container_0_ng_template_17_Template_button_click_51_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.toggleFullscreen());
    });
    \u0275\u0275element(52, "i", 40);
    \u0275\u0275template(53, ReaderSettingsComponent_ng_container_0_ng_template_17_span_53_Template, 2, 1, "span", 60);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(54, "div", 17)(55, "label", 61);
    \u0275\u0275text(56);
    \u0275\u0275element(57, "i", 62);
    \u0275\u0275elementEnd();
    \u0275\u0275template(58, ReaderSettingsComponent_ng_container_0_ng_template_17_ng_template_58_Template, 1, 1, "ng-template", null, 5, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementStart(60, "span", 63);
    \u0275\u0275elementContainer(61, 45);
    \u0275\u0275elementEnd();
    \u0275\u0275element(62, "br");
    \u0275\u0275elementStart(63, "div", 64);
    \u0275\u0275element(64, "input", 65);
    \u0275\u0275elementStart(65, "label", 66);
    \u0275\u0275text(66);
    \u0275\u0275elementEnd();
    \u0275\u0275element(67, "input", 67);
    \u0275\u0275elementStart(68, "label", 68);
    \u0275\u0275text(69);
    \u0275\u0275elementEnd();
    \u0275\u0275element(70, "input", 69);
    \u0275\u0275elementStart(71, "label", 70);
    \u0275\u0275text(72);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    let tmp_22_0;
    let tmp_26_0;
    const writingStyleTooltip_r6 = \u0275\u0275reference(12);
    const tapPaginationTooltip_r7 = \u0275\u0275reference(24);
    const immersiveModeTooltip_r8 = \u0275\u0275reference(36);
    const fullscreenTooltip_r9 = \u0275\u0275reference(48);
    const layoutTooltip_r10 = \u0275\u0275reference(59);
    const t_r4 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r4("reading-direction-label"));
    \u0275\u0275advance();
    \u0275\u0275propertyInterpolate("title", ctx_r2.readingDirectionModel === ctx_r2.ReadingDirection.LeftToRight ? t_r4("left-to-right") : t_r4("right-to-left"));
    \u0275\u0275advance();
    \u0275\u0275classMapInterpolate1("fa ", ctx_r2.readingDirectionModel === ctx_r2.ReadingDirection.LeftToRight ? "fa-arrow-right" : "fa-arrow-left", " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("\xA0", ctx_r2.readingDirectionModel === ctx_r2.ReadingDirection.LeftToRight ? t_r4("left-to-right") : t_r4("right-to-left"), "");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(t_r4("writing-style-label"));
    \u0275\u0275advance();
    \u0275\u0275property("ngbTooltip", writingStyleTooltip_r6);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngTemplateOutlet", writingStyleTooltip_r6);
    \u0275\u0275advance();
    \u0275\u0275propertyInterpolate("title", ctx_r2.writingStyleModel === ctx_r2.WritingStyle.Horizontal ? t_r4("horizontal") : t_r4("vertical"));
    \u0275\u0275advance();
    \u0275\u0275classMapInterpolate1("fa ", ctx_r2.writingStyleModel === ctx_r2.WritingStyle.Horizontal ? "fa-arrows-left-right" : "fa-arrows-up-down", "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r2.writingStyleModel === ctx_r2.WritingStyle.Horizontal ? t_r4("horizontal") : t_r4("vertical"), "");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(t_r4("tap-to-paginate-label"));
    \u0275\u0275advance();
    \u0275\u0275property("ngbTooltip", tapPaginationTooltip_r7);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngTemplateOutlet", tapPaginationTooltip_r7);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", ((tmp_22_0 = ctx_r2.settingsForm.get("bookReaderTapToPaginate")) == null ? null : tmp_22_0.value) ? t_r4("on") : t_r4("off"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(t_r4("immersive-mode-label"));
    \u0275\u0275advance();
    \u0275\u0275property("ngbTooltip", immersiveModeTooltip_r8);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngTemplateOutlet", immersiveModeTooltip_r8);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", ((tmp_26_0 = ctx_r2.settingsForm.get("bookReaderImmersiveMode")) == null ? null : tmp_26_0.value) ? t_r4("on") : t_r4("off"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(t_r4("fullscreen-label"));
    \u0275\u0275advance();
    \u0275\u0275property("ngbTooltip", fullscreenTooltip_r9);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngTemplateOutlet", fullscreenTooltip_r9);
    \u0275\u0275advance(2);
    \u0275\u0275classMapInterpolate2("fa ", ctx_r2.isFullscreen ? "fa-compress-alt" : "fa-expand-alt", " ", ctx_r2.isFullscreen ? "icon-primary-color" : "", "");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.activeTheme == null ? null : ctx_r2.activeTheme.isDarkTheme);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(t_r4("layout-mode-label"));
    \u0275\u0275advance();
    \u0275\u0275property("ngbTooltip", layoutTooltip_r10);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngTemplateOutlet", layoutTooltip_r10);
    \u0275\u0275advance(2);
    \u0275\u0275attribute("aria-label", t_r4("layout-mode-label"));
    \u0275\u0275advance();
    \u0275\u0275property("value", ctx_r2.BookPageLayoutMode.Default);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r4("layout-mode-option-scroll"));
    \u0275\u0275advance();
    \u0275\u0275property("value", ctx_r2.BookPageLayoutMode.Column1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r4("layout-mode-option-1col"));
    \u0275\u0275advance();
    \u0275\u0275property("value", ctx_r2.BookPageLayoutMode.Column2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r4("layout-mode-option-2col"));
  }
}
function ReaderSettingsComponent_ng_container_0_ng_template_24_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "button", 73);
    \u0275\u0275listener("click", function ReaderSettingsComponent_ng_container_0_ng_template_24_ng_container_1_Template_button_click_1_listener() {
      const theme_r12 = \u0275\u0275restoreView(_r11).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.setTheme(theme_r12.name));
    });
    \u0275\u0275element(2, "div", 74);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const theme_r12 = ctx.$implicit;
    const t_r4 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(3, _c0, (ctx_r2.activeTheme == null ? null : ctx_r2.activeTheme.name) === theme_r12.name));
    \u0275\u0275advance();
    \u0275\u0275property("ngStyle", \u0275\u0275pureFunction1(5, _c1, theme_r12.colorHash));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", t_r4(theme_r12.translationKey), " ");
  }
}
function ReaderSettingsComponent_ng_container_0_ng_template_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 17);
    \u0275\u0275template(1, ReaderSettingsComponent_ng_container_0_ng_template_24_ng_container_1_Template, 4, 7, "ng-container", 72);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r2.themes);
  }
}
function ReaderSettingsComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "form", 7)(2, "div", 8, 0)(4, "div", 9)(5, "h2", 10)(6, "button", 11);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 12)(9, "div", 13);
    \u0275\u0275template(10, ReaderSettingsComponent_ng_container_0_ng_template_10_Template, 31, 9, "ng-template");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(11, "div", 14)(12, "h2", 10)(13, "button", 11);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "div", 12)(16, "div", 13);
    \u0275\u0275template(17, ReaderSettingsComponent_ng_container_0_ng_template_17_Template, 73, 40, "ng-template");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(18, "div", 15)(19, "h2", 10)(20, "button", 11);
    \u0275\u0275text(21);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "div", 12)(23, "div", 13);
    \u0275\u0275template(24, ReaderSettingsComponent_ng_container_0_ng_template_24_Template, 2, 1, "ng-template");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const t_r4 = ctx.$implicit;
    const acc_r13 = \u0275\u0275reference(3);
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("formGroup", ctx_r2.settingsForm);
    \u0275\u0275advance();
    \u0275\u0275property("closeOthers", false);
    \u0275\u0275advance(2);
    \u0275\u0275property("collapsed", false);
    \u0275\u0275advance(2);
    \u0275\u0275attribute("aria-expanded", acc_r13.isExpanded("general-panel"));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", t_r4("general-settings-title"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275property("collapsed", false);
    \u0275\u0275advance(2);
    \u0275\u0275attribute("aria-expanded", acc_r13.isExpanded("reader-panel"));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", t_r4("reader-settings-title"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275property("title", t_r4("color-theme-title"))("collapsed", false);
    \u0275\u0275advance(2);
    \u0275\u0275attribute("aria-expanded", acc_r13.isExpanded("color-panel"));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", t_r4("color-theme-title"), " ");
  }
}
var bookColorThemes = [
  {
    name: "Dark",
    colorHash: "#292929",
    isDarkTheme: true,
    isDefault: true,
    provider: ThemeProvider.System,
    selector: "brtheme-dark",
    content: BookDarkTheme,
    translationKey: "theme-dark"
  },
  {
    name: "Black",
    colorHash: "#000000",
    isDarkTheme: true,
    isDefault: false,
    provider: ThemeProvider.System,
    selector: "brtheme-black",
    content: BookBlackTheme,
    translationKey: "theme-black"
  },
  {
    name: "White",
    colorHash: "#FFFFFF",
    isDarkTheme: false,
    isDefault: false,
    provider: ThemeProvider.System,
    selector: "brtheme-white",
    content: BookWhiteTheme,
    translationKey: "theme-white"
  },
  {
    name: "Paper",
    colorHash: "#F1E4D5",
    isDarkTheme: false,
    isDefault: false,
    provider: ThemeProvider.System,
    selector: "brtheme-paper",
    content: BookPaperTheme,
    translationKey: "theme-paper"
  }
];
var mobileBreakpointMarginOverride = 700;
var ReaderSettingsComponent = class _ReaderSettingsComponent {
  get BookPageLayoutMode() {
    return BookPageLayoutMode;
  }
  get ReadingDirection() {
    return ReadingDirection;
  }
  get WritingStyle() {
    return WritingStyle;
  }
  constructor(bookService, accountService, document, themeService, cdRef) {
    this.bookService = bookService;
    this.accountService = accountService;
    this.document = document;
    this.themeService = themeService;
    this.cdRef = cdRef;
    this.clickToPaginateChanged = new EventEmitter();
    this.styleUpdate = new EventEmitter();
    this.colorThemeUpdate = new EventEmitter();
    this.layoutModeUpdate = new EventEmitter();
    this.fullscreen = new EventEmitter();
    this.readingDirection = new EventEmitter();
    this.bookReaderWritingStyle = new EventEmitter();
    this.immersiveMode = new EventEmitter();
    this.fontOptions = [];
    this.fontFamilies = [];
    this.readingDirectionModel = ReadingDirection.LeftToRight;
    this.writingStyleModel = WritingStyle.Horizontal;
    this.isFullscreen = false;
    this.settingsForm = new FormGroup({});
    this.themes = bookColorThemes;
    this.destroyRef = inject(DestroyRef);
  }
  ngOnInit() {
    this.fontFamilies = this.bookService.getFontFamilies();
    this.fontOptions = this.fontFamilies.map((f) => f.title);
    this.cdRef.markForCheck();
    this.accountService.currentUser$.pipe(take(1)).subscribe((user) => {
      if (user) {
        this.user = user;
        if (this.user.preferences.bookReaderFontFamily === void 0) {
          this.user.preferences.bookReaderFontFamily = "default";
        }
        if (this.user.preferences.bookReaderFontSize === void 0 || this.user.preferences.bookReaderFontSize < 50) {
          this.user.preferences.bookReaderFontSize = 100;
        }
        if (this.user.preferences.bookReaderLineSpacing === void 0 || this.user.preferences.bookReaderLineSpacing < 100) {
          this.user.preferences.bookReaderLineSpacing = 100;
        }
        if (this.user.preferences.bookReaderMargin === void 0) {
          this.user.preferences.bookReaderMargin = 0;
        }
        if (this.user.preferences.bookReaderReadingDirection === void 0) {
          this.user.preferences.bookReaderReadingDirection = ReadingDirection.LeftToRight;
        }
        if (this.user.preferences.bookReaderWritingStyle === void 0) {
          this.user.preferences.bookReaderWritingStyle = WritingStyle.Horizontal;
        }
        this.readingDirectionModel = this.user.preferences.bookReaderReadingDirection;
        this.writingStyleModel = this.user.preferences.bookReaderWritingStyle;
        this.settingsForm.addControl("bookReaderFontFamily", new FormControl(this.user.preferences.bookReaderFontFamily, []));
        this.settingsForm.get("bookReaderFontFamily").valueChanges.pipe(takeUntilDestroyed(this.destroyRef)).subscribe((fontName) => {
          const familyName = this.fontFamilies.filter((f) => f.title === fontName)[0].family;
          if (familyName === "default") {
            this.pageStyles["font-family"] = "inherit";
          } else {
            this.pageStyles["font-family"] = "'" + familyName + "'";
          }
          this.styleUpdate.emit(this.pageStyles);
        });
        this.settingsForm.addControl("bookReaderFontSize", new FormControl(this.user.preferences.bookReaderFontSize, []));
        this.settingsForm.get("bookReaderFontSize")?.valueChanges.pipe(takeUntilDestroyed(this.destroyRef)).subscribe((value) => {
          this.pageStyles["font-size"] = value + "%";
          this.styleUpdate.emit(this.pageStyles);
        });
        this.settingsForm.addControl("bookReaderTapToPaginate", new FormControl(this.user.preferences.bookReaderTapToPaginate, []));
        this.settingsForm.get("bookReaderTapToPaginate")?.valueChanges.pipe(takeUntilDestroyed(this.destroyRef)).subscribe((value) => {
          this.clickToPaginateChanged.emit(value);
        });
        this.settingsForm.addControl("bookReaderLineSpacing", new FormControl(this.user.preferences.bookReaderLineSpacing, []));
        this.settingsForm.get("bookReaderLineSpacing")?.valueChanges.pipe(takeUntilDestroyed(this.destroyRef)).subscribe((value) => {
          this.pageStyles["line-height"] = value + "%";
          this.styleUpdate.emit(this.pageStyles);
        });
        this.settingsForm.addControl("bookReaderMargin", new FormControl(this.user.preferences.bookReaderMargin, []));
        this.settingsForm.get("bookReaderMargin")?.valueChanges.pipe(takeUntilDestroyed(this.destroyRef)).subscribe((value) => {
          this.pageStyles["margin-left"] = value + "vw";
          this.pageStyles["margin-right"] = value + "vw";
          this.styleUpdate.emit(this.pageStyles);
        });
        this.settingsForm.addControl("layoutMode", new FormControl(this.user.preferences.bookReaderLayoutMode || BookPageLayoutMode.Default, []));
        this.settingsForm.get("layoutMode")?.valueChanges.pipe(takeUntilDestroyed(this.destroyRef)).subscribe((layoutMode) => {
          this.layoutModeUpdate.emit(layoutMode);
        });
        this.settingsForm.addControl("bookReaderImmersiveMode", new FormControl(this.user.preferences.bookReaderImmersiveMode, []));
        this.settingsForm.get("bookReaderImmersiveMode")?.valueChanges.pipe(takeUntilDestroyed(this.destroyRef)).subscribe((immersiveMode) => {
          if (immersiveMode) {
            this.settingsForm.get("bookReaderTapToPaginate")?.setValue(true);
          }
          this.immersiveMode.emit(immersiveMode);
        });
        this.setTheme(this.user.preferences.bookReaderThemeName || this.themeService.defaultBookTheme);
        this.cdRef.markForCheck();
        this.readingDirection.emit(this.readingDirectionModel);
        this.bookReaderWritingStyle.emit(this.writingStyleModel);
        this.clickToPaginateChanged.emit(this.user.preferences.bookReaderTapToPaginate);
        this.layoutModeUpdate.emit(this.user.preferences.bookReaderLayoutMode);
        this.immersiveMode.emit(this.user.preferences.bookReaderImmersiveMode);
        this.resetSettings();
      } else {
        this.resetSettings();
      }
    });
  }
  resetSettings() {
    if (this.user) {
      this.setPageStyles(this.user.preferences.bookReaderFontFamily, this.user.preferences.bookReaderFontSize + "%", this.user.preferences.bookReaderMargin + "vw", this.user.preferences.bookReaderLineSpacing + "%");
    } else {
      this.setPageStyles();
    }
    this.settingsForm.get("bookReaderFontFamily")?.setValue(this.user.preferences.bookReaderFontFamily);
    this.settingsForm.get("bookReaderFontSize")?.setValue(this.user.preferences.bookReaderFontSize);
    this.settingsForm.get("bookReaderLineSpacing")?.setValue(this.user.preferences.bookReaderLineSpacing);
    this.settingsForm.get("bookReaderMargin")?.setValue(this.user.preferences.bookReaderMargin);
    this.settingsForm.get("bookReaderReadingDirection")?.setValue(this.user.preferences.bookReaderReadingDirection);
    this.settingsForm.get("bookReaderTapToPaginate")?.setValue(this.user.preferences.bookReaderTapToPaginate);
    this.settingsForm.get("bookReaderLayoutMode")?.setValue(this.user.preferences.bookReaderLayoutMode);
    this.settingsForm.get("bookReaderImmersiveMode")?.setValue(this.user.preferences.bookReaderImmersiveMode);
    this.settingsForm.get("bookReaderWritingStyle")?.setValue(this.user.preferences.bookReaderWritingStyle);
    this.cdRef.detectChanges();
    this.styleUpdate.emit(this.pageStyles);
  }
  setPageStyles(fontFamily, fontSize, margin, lineHeight, colorTheme) {
    const windowWidth = window.innerWidth || this.document.documentElement.clientWidth || this.document.body.clientWidth;
    let defaultMargin = "15vw";
    if (windowWidth <= mobileBreakpointMarginOverride) {
      defaultMargin = "5vw";
    }
    this.pageStyles = {
      "font-family": fontFamily || this.pageStyles["font-family"] || "default",
      "font-size": fontSize || this.pageStyles["font-size"] || "100%",
      "margin-left": margin || this.pageStyles["margin-left"] || defaultMargin,
      "margin-right": margin || this.pageStyles["margin-right"] || defaultMargin,
      "line-height": lineHeight || this.pageStyles["line-height"] || "100%"
    };
  }
  setTheme(themeName) {
    const theme = this.themes.find((t) => t.name === themeName);
    this.activeTheme = theme;
    this.cdRef.markForCheck();
    this.colorThemeUpdate.emit(theme);
  }
  toggleReadingDirection() {
    if (this.readingDirectionModel === ReadingDirection.LeftToRight) {
      this.readingDirectionModel = ReadingDirection.RightToLeft;
    } else {
      this.readingDirectionModel = ReadingDirection.LeftToRight;
    }
    this.cdRef.markForCheck();
    this.readingDirection.emit(this.readingDirectionModel);
  }
  toggleWritingStyle() {
    if (this.writingStyleModel === WritingStyle.Horizontal) {
      this.writingStyleModel = WritingStyle.Vertical;
    } else {
      this.writingStyleModel = WritingStyle.Horizontal;
    }
    this.cdRef.markForCheck();
    this.bookReaderWritingStyle.emit(this.writingStyleModel);
  }
  toggleFullscreen() {
    this.isFullscreen = !this.isFullscreen;
    this.cdRef.markForCheck();
    this.fullscreen.emit();
  }
  static {
    this.\u0275fac = function ReaderSettingsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ReaderSettingsComponent)(\u0275\u0275directiveInject(BookService), \u0275\u0275directiveInject(AccountService), \u0275\u0275directiveInject(DOCUMENT), \u0275\u0275directiveInject(ThemeService), \u0275\u0275directiveInject(ChangeDetectorRef));
    };
  }
  static {
    this.\u0275cmp = \u0275\u0275defineComponent({ type: _ReaderSettingsComponent, selectors: [["app-reader-settings"]], outputs: { clickToPaginateChanged: "clickToPaginateChanged", styleUpdate: "styleUpdate", colorThemeUpdate: "colorThemeUpdate", layoutModeUpdate: "layoutModeUpdate", fullscreen: "fullscreen", readingDirection: "readingDirection", bookReaderWritingStyle: "bookReaderWritingStyle", immersiveMode: "immersiveMode" }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 1, vars: 1, consts: [["acc", "ngbAccordion"], ["writingStyleTooltip", ""], ["tapPaginationTooltip", ""], ["immersiveModeTooltip", ""], ["fullscreenTooltip", ""], ["layoutTooltip", ""], [4, "transloco", "translocoRead"], [3, "formGroup"], ["ngbAccordion", "", 3, "closeOthers"], ["ngbAccordionItem", "", "id", "general-panel", "title", "General Settings", 3, "collapsed"], ["ngbAccordionHeader", "", 1, "accordion-header"], ["ngbAccordionButton", "", "type", "button", "aria-controls", "collapseOne", 1, "accordion-button"], ["ngbAccordionCollapse", ""], ["ngbAccordionBody", ""], ["ngbAccordionItem", "", "id", "reader-panel", "title", "Reader Settings", 3, "collapsed"], ["ngbAccordionItem", "", "id", "color-panel", 3, "title", "collapsed"], [1, "control-container"], [1, "controls"], [1, "mb-3"], ["for", "library-type", 1, "form-label"], ["id", "library-type", "formControlName", "bookReaderFontFamily", 1, "form-select"], [3, "value", 4, "ngFor", "ngForOf"], [1, "row", "g-0", "controls"], ["for", "fontsize", 1, "form-label", "col-6"], [1, "col-6", "float-end", 2, "display", "inline-flex"], [1, "fa-solid", "fa-font", 2, "font-size", "12px"], ["type", "range", "id", "fontsize", "min", "50", "max", "300", "step", "10", "formControlName", "bookReaderFontSize", 1, "form-range", "ms-2", "me-2", 3, "ngbTooltip"], [1, "fa-solid", "fa-font", 2, "font-size", "24px"], ["for", "linespacing", 1, "form-label", "col-6"], ["type", "range", "id", "linespacing", "min", "100", "max", "200", "step", "10", "formControlName", "bookReaderLineSpacing", 1, "form-range", "ms-2", "me-2", 3, "ngbTooltip"], ["for", "margin", 1, "form-label", "col-6"], [1, "fa-solid", "fa-outdent"], ["type", "range", "id", "margin", "min", "0", "max", "30", "step", "5", "formControlName", "bookReaderMargin", 1, "form-range", "ms-2", "me-2", 3, "ngbTooltip"], [1, "fa-solid", "fa-indent"], [1, "row", "g-0", "justify-content-between", "mt-2"], [1, "btn", "btn-primary", "col", 3, "click"], [3, "value"], [1, "controls", 2, "display", "flex", "justify-content", "space-between", "align-items", "center"], ["id", "readingdirection", 1, "form-label"], ["aria-labelledby", "readingdirection", 1, "btn", "btn-icon", 3, "click", "title"], ["aria-hidden", "true"], [1, "phone-hidden"], ["for", "writing-style", 1, "form-label"], ["aria-hidden", "true", "placement", "top", "role", "button", "tabindex", "0", "aria-describedby", "writingStyle-help", 1, "fa", "fa-info-circle", "ms-1", 3, "ngbTooltip"], ["id", "writingStyle-help", 1, "visually-hidden"], [3, "ngTemplateOutlet"], ["id", "writing-style", "aria-labelledby", "writingStyle-help", 1, "btn", "btn-icon", 3, "click", "title"], ["for", "tap-pagination", 1, "form-label"], ["aria-hidden", "true", "placement", "top", "role", "button", "tabindex", "0", "aria-describedby", "tapPagination-help", 1, "fa", "fa-info-circle", "ms-1", 3, "ngbTooltip"], ["id", "tapPagination-help", 1, "visually-hidden"], [1, "form-check", "form-switch"], ["type", "checkbox", "id", "tap-pagination", "formControlName", "bookReaderTapToPaginate", "aria-labelledby", "tapPagination-help", 1, "form-check-input"], ["for", "immersive-mode", 1, "form-label"], ["aria-hidden", "true", "placement", "top", "role", "button", "tabindex", "0", "aria-describedby", "immersiveMode-help", 1, "fa", "fa-info-circle", "ms-1", 3, "ngbTooltip"], ["id", "immersiveMode-help", 1, "visually-hidden"], ["type", "checkbox", "id", "immersive-mode", "formControlName", "bookReaderImmersiveMode", "aria-labelledby", "immersiveMode-help", 1, "form-check-input"], ["id", "fullscreen", 1, "form-label"], ["aria-hidden", "true", "placement", "top", "role", "button", "tabindex", "1", "aria-describedby", "fullscreen-help", 1, "fa", "fa-info-circle", "ms-1", 3, "ngbTooltip"], ["id", "fullscreen-help", 1, "visually-hidden"], ["aria-labelledby", "fullscreen", 1, "btn", "btn-icon", 3, "click"], [4, "ngIf"], ["id", "layout-mode", 1, "form-label", 2, "margin-bottom", "0.5rem"], ["aria-hidden", "true", "placement", "top", "role", "button", "tabindex", "1", "aria-describedby", "layout-help", 1, "fa", "fa-info-circle", "ms-1", 3, "ngbTooltip"], ["id", "layout-help", 1, "visually-hidden"], ["role", "group", 1, "btn-group", "d-flex", "justify-content-center"], ["type", "radio", "formControlName", "layoutMode", "id", "layout-mode-default", "autocomplete", "off", 1, "btn-check", 3, "value"], ["for", "layout-mode-default", 1, "btn", "btn-outline-primary"], ["type", "radio", "formControlName", "layoutMode", "id", "layout-mode-col1", "autocomplete", "off", 1, "btn-check", 3, "value"], ["for", "layout-mode-col1", 1, "btn", "btn-outline-primary"], ["type", "radio", "formControlName", "layoutMode", "id", "layout-mode-col2", "autocomplete", "off", 1, "btn-check", 3, "value"], ["for", "layout-mode-col2", 1, "btn", "btn-outline-primary"], [3, "innerHTML"], [4, "ngFor", "ngForOf"], [1, "btn", "btn-icon", "color", 3, "click", "ngClass"], [1, "dot", 3, "ngStyle"]], template: function ReaderSettingsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, ReaderSettingsComponent_ng_container_0_Template, 25, 12, "ng-container", 6);
      }
      if (rf & 2) {
        \u0275\u0275property("translocoRead", "reader-settings");
      }
    }, dependencies: [ReactiveFormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, RangeValueAccessor, CheckboxControlValueAccessor, SelectControlValueAccessor, RadioControlValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, NgbAccordionDirective, NgbAccordionItem, NgbAccordionHeader, NgbAccordionButton, NgbAccordionCollapse, NgbAccordionBody, NgForOf, NgbTooltip, NgTemplateOutlet, NgIf, NgClass, NgStyle, TitleCasePipe, TranslocoDirective], styles: ["\n\n.controls[_ngcontent-%COMP%] {\n  margin: 0.25rem 0 0.25rem;\n}\n.controls[_ngcontent-%COMP%]   .form-select[_ngcontent-%COMP%]   option[_ngcontent-%COMP%] {\n  background-color: var(--input-bg-color);\n}\n.controls[_ngcontent-%COMP%]   .form-label[_ngcontent-%COMP%] {\n  margin: 0;\n}\n.controls[_ngcontent-%COMP%]   .btn.btn-icon[_ngcontent-%COMP%] {\n  display: flex;\n  width: 50%;\n  justify-content: center;\n  align-items: center;\n}\n.controls[_ngcontent-%COMP%]   .btn.btn-icon.color[_ngcontent-%COMP%] {\n  display: unset;\n  width: auto;\n}\n.controls[_ngcontent-%COMP%]   .btn.btn-icon.color[_ngcontent-%COMP%]   .dot[_ngcontent-%COMP%] {\n  height: 25px;\n  width: 25px;\n  border-radius: 50%;\n  margin: 0 auto;\n}\n.controls[_ngcontent-%COMP%]   .form-check.form-switch[_ngcontent-%COMP%] {\n  width: 50%;\n  display: flex;\n  justify-content: center;\n}\n.controls[_ngcontent-%COMP%]   .form-check.form-switch[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  margin-right: 0.25rem;\n}\n.active[_ngcontent-%COMP%] {\n  border: 1px solid var(--primary-color);\n}\n  .accordion-body {\n  padding: 0.25rem 1rem 1rem !important;\n}\n/*# sourceMappingURL=reader-settings.component.css.map */"], changeDetection: 0 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ReaderSettingsComponent, { className: "ReaderSettingsComponent", filePath: "src/app/book-reader/_components/reader-settings/reader-settings.component.ts", lineNumber: 95 });
})();

export {
  bookColorThemes,
  ReaderSettingsComponent
};
//# sourceMappingURL=chunk-GYRVME4Z.js.map
