// src/app/_models/common/i-has-cast.ts
function hasAnyCast(entity) {
  if (entity === null || entity === void 0)
    return false;
  return entity.writers.length > 0 || entity.coverArtists.length > 0 || entity.publishers.length > 0 || entity.characters.length > 0 || entity.pencillers.length > 0 || entity.inkers.length > 0 || entity.imprints.length > 0 || entity.colorists.length > 0 || entity.letterers.length > 0 || entity.editors.length > 0 || entity.translators.length > 0 || entity.teams.length > 0 || entity.locations.length > 0;
}

export {
  hasAnyCast
};
//# sourceMappingURL=chunk-YCLUCUKF.js.map
