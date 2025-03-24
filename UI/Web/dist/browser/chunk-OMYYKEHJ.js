import {
  Action,
  ActionFactoryService,
  NavigationStart,
  Router
} from "./chunk-U2DWQJI2.js";
import {
  ReplaySubject,
  __spreadValues,
  filter,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-PYHIUVNJ.js";

// src/app/cards/bulk-selection.service.ts
var BulkSelectionService = class _BulkSelectionService {
  constructor(router, actionFactory) {
    this.actionFactory = actionFactory;
    this.debug = false;
    this.prevIndex = 0;
    this.selectedCards = {};
    this.dataSourceMax = {};
    this.isShiftDown = false;
    this.actionsSource = new ReplaySubject(1);
    this.actions$ = this.actionsSource.asObservable();
    this.selectionsSource = new ReplaySubject(1);
    this.selections$ = this.selectionsSource.asObservable();
    router.events.pipe(filter((event) => event instanceof NavigationStart)).subscribe(() => {
      this.deselectAll();
      this.dataSourceMax = {};
      this.prevIndex = 0;
    });
  }
  handleCardSelection(dataSource, index, maxIndex, wasSelected) {
    if (this.isShiftDown) {
      if (dataSource === this.prevDataSource) {
        this.debugLog("Selecting " + dataSource + " cards from " + this.prevIndex + " to " + index + " as " + !wasSelected);
        this.selectCards(dataSource, this.prevIndex, index, !wasSelected);
      } else {
        const isForwardSelection = index > this.prevIndex;
        if (isForwardSelection) {
          this.debugLog("Selecting " + this.prevDataSource + " cards from " + this.prevIndex + " to " + this.dataSourceMax[this.prevDataSource]);
          this.selectCards(this.prevDataSource, this.prevIndex, this.dataSourceMax[this.prevDataSource], !wasSelected);
          this.debugLog("Selecting " + dataSource + " cards from 0 to " + index);
          this.selectCards(dataSource, 0, index, !wasSelected);
        } else {
          this.debugLog("Selecting " + this.prevDataSource + " cards from 0 to " + this.prevIndex);
          this.selectCards(this.prevDataSource, this.prevIndex, 0, !wasSelected);
          this.debugLog("Selecting " + dataSource + " cards from " + index + " to " + maxIndex);
          this.selectCards(dataSource, index, maxIndex, !wasSelected);
        }
      }
    } else {
      this.debugLog("Selecting " + dataSource + " cards at " + index);
      this.selectCards(dataSource, index, index, !wasSelected);
    }
    this.prevIndex = index;
    this.prevDataSource = dataSource;
    this.dataSourceMax[dataSource] = maxIndex;
    this.actionsSource.next(this.getActions(() => {
    }));
  }
  isCardSelected(dataSource, index) {
    if (this.selectedCards.hasOwnProperty(dataSource) && this.selectedCards[dataSource].hasOwnProperty(index)) {
      return this.selectedCards[dataSource][index];
    }
    return false;
  }
  selectCards(dataSource, from, to, value) {
    if (!this.selectedCards.hasOwnProperty(dataSource)) {
      this.selectedCards[dataSource] = {};
    }
    if (from === to) {
      this.selectedCards[dataSource][to] = value;
      this.selectionsSource.next(this.totalSelections());
      return;
    }
    if (from > to) {
      for (let i = to; i <= from; i++) {
        this.selectedCards[dataSource][i] = value;
      }
    }
    for (let i = from; i <= to; i++) {
      this.selectedCards[dataSource][i] = value;
    }
    this.selectionsSource.next(this.totalSelections());
  }
  deselectAll() {
    this.selectedCards = {};
    this.selectionsSource.next(0);
  }
  hasSelections() {
    const keys = Object.keys(this.selectedCards);
    return keys.filter((key) => {
      return Object.values(this.selectedCards[key]).filter((item) => item).length > 0;
    }).length > 0;
  }
  totalSelections() {
    let sum = 0;
    const keys = Object.keys(this.selectedCards);
    keys.forEach((key) => {
      sum += Object.values(this.selectedCards[key]).filter((item) => item).length;
    });
    return sum;
  }
  getSelectedCardsForSource(dataSource) {
    if (!this.selectedCards.hasOwnProperty(dataSource))
      return [];
    const ret = [];
    for (let k in this.selectedCards[dataSource]) {
      if (this.selectedCards[dataSource][k]) {
        ret.push(k);
      }
    }
    return ret;
  }
  getActions(callback) {
    const allowedActions = [
      Action.AddToReadingList,
      Action.MarkAsRead,
      Action.MarkAsUnread,
      Action.AddToCollection,
      Action.Delete,
      Action.AddToWantToReadList,
      Action.RemoveFromWantToReadList
    ];
    if (Object.keys(this.selectedCards).filter((item) => item === "series").length > 0) {
      return this.applyFilterToList(this.actionFactory.getSeriesActions(callback), allowedActions);
    }
    if (Object.keys(this.selectedCards).filter((item) => item === "bookmark").length > 0) {
      return this.actionFactory.getBookmarkActions(callback);
    }
    if (Object.keys(this.selectedCards).filter((item) => item === "sideNavStream").length > 0) {
      return this.applyFilterToList(this.actionFactory.getSideNavStreamActions(callback), [Action.MarkAsInvisible, Action.MarkAsVisible]);
    }
    if (Object.keys(this.selectedCards).filter((item) => item === "collection").length > 0) {
      return this.applyFilterToList(this.actionFactory.getCollectionTagActions(callback), [Action.Promote, Action.UnPromote, Action.Delete]);
    }
    if (Object.keys(this.selectedCards).filter((item) => item === "readingList").length > 0) {
      return this.applyFilterToList(this.actionFactory.getReadingListActions(callback), [Action.Promote, Action.UnPromote, Action.Delete]);
    }
    return this.applyFilterToList(this.actionFactory.getVolumeActions(callback), [...allowedActions, Action.SendTo]);
  }
  debugLog(message, extraData) {
    if (!this.debug)
      return;
    if (extraData !== void 0) {
      console.log(message, extraData);
    } else {
      console.log(message);
    }
  }
  applyFilter(action, allowedActions) {
    let hasValidAction = false;
    if (action.action === Action.Submenu || allowedActions.includes(action.action)) {
      hasValidAction = true;
    }
    if (action.children && action.children.length > 0) {
      action.children = action.children.filter((childAction) => this.applyFilter(childAction, allowedActions));
      if (action.children.length === 0 && action.action === Action.Submenu) {
        hasValidAction = false;
      }
    }
    return hasValidAction;
  }
  applyFilterToList(list, allowedActions) {
    const actions = list.map((a) => {
      return __spreadValues({}, a);
    });
    return actions.filter((action) => this.applyFilter(action, allowedActions));
  }
  static {
    this.\u0275fac = function BulkSelectionService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _BulkSelectionService)(\u0275\u0275inject(Router), \u0275\u0275inject(ActionFactoryService));
    };
  }
  static {
    this.\u0275prov = \u0275\u0275defineInjectable({ token: _BulkSelectionService, factory: _BulkSelectionService.\u0275fac, providedIn: "root" });
  }
};

export {
  BulkSelectionService
};
//# sourceMappingURL=chunk-OMYYKEHJ.js.map
