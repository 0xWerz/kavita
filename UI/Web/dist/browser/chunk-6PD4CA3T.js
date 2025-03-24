import {
  PageLayoutMode
} from "./chunk-4C3V74T6.js";
import {
  BookPageLayoutMode,
  ReadingDirection,
  WritingStyle
} from "./chunk-HLXD4ERA.js";
import {
  PdfLayoutMode,
  PdfScrollMode,
  PdfSpreadMode,
  PdfTheme
} from "./chunk-FAV3BSNY.js";

// src/app/manga-reader/_models/layout-mode.ts
var LayoutMode;
(function(LayoutMode2) {
  LayoutMode2[LayoutMode2["Single"] = 1] = "Single";
  LayoutMode2[LayoutMode2["Double"] = 2] = "Double";
  LayoutMode2[LayoutMode2["DoubleReversed"] = 3] = "DoubleReversed";
  LayoutMode2[LayoutMode2["DoubleNoCover"] = 4] = "DoubleNoCover";
})(LayoutMode || (LayoutMode = {}));

// src/app/_models/preferences/page-split-option.ts
var PageSplitOption;
(function(PageSplitOption2) {
  PageSplitOption2[PageSplitOption2["SplitLeftToRight"] = 0] = "SplitLeftToRight";
  PageSplitOption2[PageSplitOption2["SplitRightToLeft"] = 1] = "SplitRightToLeft";
  PageSplitOption2[PageSplitOption2["NoSplit"] = 2] = "NoSplit";
  PageSplitOption2[PageSplitOption2["FitSplit"] = 3] = "FitSplit";
})(PageSplitOption || (PageSplitOption = {}));

// src/app/_models/preferences/reader-mode.ts
var ReaderMode;
(function(ReaderMode2) {
  ReaderMode2[ReaderMode2["LeftRight"] = 0] = "LeftRight";
  ReaderMode2[ReaderMode2["UpDown"] = 1] = "UpDown";
  ReaderMode2[ReaderMode2["Webtoon"] = 2] = "Webtoon";
})(ReaderMode || (ReaderMode = {}));

// src/app/_models/preferences/scaling-option.ts
var ScalingOption;
(function(ScalingOption2) {
  ScalingOption2[ScalingOption2["FitToHeight"] = 0] = "FitToHeight";
  ScalingOption2[ScalingOption2["FitToWidth"] = 1] = "FitToWidth";
  ScalingOption2[ScalingOption2["Original"] = 2] = "Original";
  ScalingOption2[ScalingOption2["Automatic"] = 3] = "Automatic";
})(ScalingOption || (ScalingOption = {}));

// src/app/_models/preferences/preferences.ts
var readingDirections = [{ text: "left-to-right", value: ReadingDirection.LeftToRight }, { text: "right-to-left", value: ReadingDirection.RightToLeft }];
var bookWritingStyles = [{ text: "horizontal", value: WritingStyle.Horizontal }, { text: "vertical", value: WritingStyle.Vertical }];
var scalingOptions = [{ text: "automatic", value: ScalingOption.Automatic }, { text: "fit-to-height", value: ScalingOption.FitToHeight }, { text: "fit-to-width", value: ScalingOption.FitToWidth }, { text: "original", value: ScalingOption.Original }];
var pageSplitOptions = [{ text: "fit-to-screen", value: PageSplitOption.FitSplit }, { text: "right-to-left", value: PageSplitOption.SplitRightToLeft }, { text: "left-to-right", value: PageSplitOption.SplitLeftToRight }, { text: "no-split", value: PageSplitOption.NoSplit }];
var readingModes = [{ text: "left-to-right", value: ReaderMode.LeftRight }, { text: "up-to-down", value: ReaderMode.UpDown }, { text: "webtoon", value: ReaderMode.Webtoon }];
var layoutModes = [{ text: "single", value: LayoutMode.Single }, { text: "double", value: LayoutMode.Double }, { text: "double-manga", value: LayoutMode.DoubleReversed }];
var bookLayoutModes = [{ text: "scroll", value: BookPageLayoutMode.Default }, { text: "1-column", value: BookPageLayoutMode.Column1 }, { text: "2-column", value: BookPageLayoutMode.Column2 }];
var pageLayoutModes = [{ text: "cards", value: PageLayoutMode.Cards }, { text: "list", value: PageLayoutMode.List }];
var pdfLayoutModes = [{ text: "pdf-multiple", value: PdfLayoutMode.Multiple }, { text: "pdf-book", value: PdfLayoutMode.Book }];
var pdfScrollModes = [{ text: "pdf-vertical", value: PdfScrollMode.Vertical }, { text: "pdf-horizontal", value: PdfScrollMode.Horizontal }, { text: "pdf-page", value: PdfScrollMode.Page }];
var pdfSpreadModes = [{ text: "pdf-none", value: PdfSpreadMode.None }, { text: "pdf-odd", value: PdfSpreadMode.Odd }, { text: "pdf-even", value: PdfSpreadMode.Even }];
var pdfThemes = [{ text: "pdf-light", value: PdfTheme.Light }, { text: "pdf-dark", value: PdfTheme.Dark }];

export {
  LayoutMode,
  PageSplitOption,
  ReaderMode,
  ScalingOption,
  readingDirections,
  bookWritingStyles,
  scalingOptions,
  pageSplitOptions,
  readingModes,
  layoutModes,
  bookLayoutModes,
  pageLayoutModes,
  pdfScrollModes,
  pdfSpreadModes,
  pdfThemes
};
//# sourceMappingURL=chunk-6PD4CA3T.js.map
