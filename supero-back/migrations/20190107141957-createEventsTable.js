"use strict";

var dbm;
var type;
var seed;

/**
 * We receive the dbmigrate dependency from dbmigrate initially.
 * This enables us to not have to rely on NODE_PATH.
 */
exports.setup = function(options, seedLink) {
  dbm = options.dbmigrate;
  type = dbm.dataType;
  seed = seedLink;
};

exports.up = function(db, callback) {
  db.createTable(
    "user_has_activities",
    {
      id: { type: "int", primaryKey: true, autoIncrement: true },
      activity_id: { type: "int" },
      user_id: { type: "int" }
    },
    callback
  );
};

exports.down = function(db) {
  return db.dropTable(events, callback);
};

exports._meta = {
  version: 1
};