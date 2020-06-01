/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 8);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("body-parser");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("os");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("fs");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("jsonfile");

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return init; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return handleMysqlDataRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return insertOne; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return insertMany; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return find; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "S", function() { return updateOne; });
/* unused harmony export updateMany */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "T", function() { return updateandtake; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "q", function() { return insertandtake; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return deleteandtake; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "R", function() { return updateJoinTemplate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "w", function() { return multiTableUpdate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "O", function() { return take; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "P", function() { return takeSql; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "E", function() { return removeJoin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "D", function() { return remove; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "B", function() { return queryOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "C", function() { return queryTemplate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Q", function() { return transaction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "A", function() { return procedure; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "r", function() { return join; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "G", function() { return search; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return TRANSACTION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return PROCEDURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return insert; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JOIN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return SEARCH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return combineFields; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "F", function() { return rollback; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "t", function() { return joinExek; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s", function() { return joinConditionsFormat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "u", function() { return joinStatement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "I", function() { return searchExek; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "H", function() { return searchConditionsFormat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "L", function() { return searchStatement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "K", function() { return searchOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "J", function() { return searchFieldsFormat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return fieldFormat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "x", function() { return options; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "N", function() { return sort; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "v", function() { return limit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "z", function() { return parseGroup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "y", function() { return parseFormatCondition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return getOperand; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return conditionsConnector; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "M", function() { return set; });
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var init = function init() {
  console.log('Mysql has been initialised');
  this.listens({
    'mysql-data-request': this.handleMysqlDataRequest.bind(this)
  });
};
var handleMysqlDataRequest = function handleMysqlDataRequest(data) {
  var self = this;
  var pao = self.pao; // self.log("Handling Mysql Data Request") 
  // self.log(data.table)
  // self.log(data.outComehandler)
  // self.log(data.opi)
  // self.log(data)

  if (!pao.pa_contains(data, ['conn', 'table', 'opi', 'query', 'outComehandler'])) {
    self.log('Data request operations failed');
    data.outComehandler({
      message: 'Database operation failed'
    });
  } else {
    if (!pao.pa_isObject(data.conn)) {
      self.log('THE connection is not object');
    } else {
      if (!pao.pa_isString(data.table)) {
        self.log('THE TABLE NAME IS NOT A STRING');
      } else {
        if (data.opi.trim() !== 'deletemultiple' && !self[data.opi]) {
          self.log('DATA.OPI IS NOT CONTAINED AS FUNCTION');
          self.log(data.opi.trim() !== 'deletemultiple');
          self.log(data.opi);
          data.outComehandler({
            message: 'The specified operation is not supported'
          });
        } else {
          console.log('THE CODE GOES THIS FAR');

          if (data.opi === 'insert') {
            data.opi = 'insertOne';
            self[data.opi](data);
            console.log('this runs after opi finishes');
          } else if (data.opi === 'find') {
            // data.opi = 'findOne' 
            self[data.opi](data);
          } else if (data.opi === 'updateOne') {
            data.opi = 'updateOne';
            self[data.opi](data);
          } else if (data.opi === 'transaction') {
            data.opi = 'transaction';
            self[data.opi](data);
          } else if (data.opi === 'procedure') {
            data.opi = 'procedure';
            self[data.opi](data);
          } else if (data.opi === 'join') {
            data.opi = 'join';
            self[data.opi](data);
          } else if (data.opi === 'search') {
            data.opi = 'search';
            self[data.opi](data);
          } else if (data.opi === 'remove') {
            data.opi = 'remove';
            self[data.opi](data);
          } else if (data.opi === 'updateandtake') {
            self[data.opi](data);
          } else if (data.opi === 'insertandtake') {
            self[data.opi](data);
          } else if (data.opi === 'deleteandtake') {
            self[data.opi](data);
          } else if (data.opi === 'deletemultiple') {
            self.deleteandtake(data);
          } else {
            self[data.opi](data);
          }
        }
      }
    }
  }
};
var insertOne = function insertOne(insert) {
  var self = this;
  var pao = self.pao;

  if (!pao.pa_isObject(insert)) {} else {
    try {
      var _handler = insert.outComehandler;
      var _conn = insert.conn;
      var query = insert.query;
      self.log('THE INSERT OBJECT');
      self.log(insert);
      var sql = "INSERT INTO ?? (??) VALUES(?)";
      var queryAttributes = [insert.table, ['id'].concat(_toConsumableArray(query.fields)), [null].concat(_toConsumableArray(query.values))];
      sql = _conn.format(sql, queryAttributes);
      console.log('THE SQL STATEMENT');
      console.log(sql); //  let sql = `INSERT INTO ${data.table} SET ?`

      _conn.query(sql, function (e, r, f) {
        console.log('INSERT RESULT');
        console.log(r);
        console.log(e);
        if (e) return _handler(e, null);
        r.user = insert.values;
        console.log(r.user);

        _handler(null, r);
      });
    } catch (e) {
      console.log('CAUTH ERROR');
      console.log(e);
      handler(e, null);
    }
  }
};
var insertMany = function insertMany(insert) {
  if (!pao.pa_isObject(data)) {} else {
    try {
      var sql = "INSERT INTO ?? (?) VALUES(?)";
      var result = [];
      var fullImplement = true;
      insert.bulk.forEach(function (insertItem, i) {
        var queryAttributes = [insertItem.table, _toConsumableArray(insertItem.fields), _toConsumableArray(insertItem.values)];
        sql = conn.format(sql, queryAttributes);
        conn.query(sql, insertItem, function (e, r, f) {
          if (e) {
            fullImplement = false;
          } else {
            result.push(r);
          }
        });
      });
      console.log('bulk insert completed');
      handler(null, result);
    } catch (e) {
      handler(e, null);
    }
  }
};
var find = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(findiks) {
    var self, pao, _ret;

    return regeneratorRuntime.wrap(function _callee2$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            self = this;
            pao = self.pao; // console.log('fIND.FINDIKS')
            // console.log(findiks.query.length)
            // if(findiks.query.length > 0){ return findiks.outComehandler({message: 'ERROR IN MYSQL.FIND.METHOD'})}
            // console.log('THE DATA IN FINDONE')
            // console.log(findiks)

            if (pao.pa_isObject(findiks)) {
              _context3.next = 6;
              break;
            }

            return _context3.abrupt("return");

          case 6:
            return _context3.delegateYield( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var conn, handler, query, result, multiple, _loop, q, _ret2;

              return regeneratorRuntime.wrap(function _callee$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      conn = findiks.conn;
                      handler = findiks.outComehandler;
                      query = [];
                      result = [];
                      multiple = false;

                      if (findiks.table.toUpperCase().trim() === 'MULTIPLE') {
                        multiple = true;
                        query = findiks.query;
                      } else {
                        query.push(findiks.query);
                      }

                      _loop = /*#__PURE__*/regeneratorRuntime.mark(function _loop(q) {
                        var find, sql, attribs, sqliks, queryAttributes;
                        return regeneratorRuntime.wrap(function _loop$(_context) {
                          while (1) {
                            switch (_context.prev = _context.next) {
                              case 0:
                                find = null;

                                if (multiple) {
                                  find = _objectSpread({
                                    table: query[q].table
                                  }, query[q]);
                                } else {
                                  find = _objectSpread({
                                    table: findiks.table
                                  }, query[q]); // find.opiks && Object.keys(find).length === 2 ? '' : !find.conditions ? find.conditions = [`${Object.keys(query)[0]} ISEQUALS ${query[Object.keys(query)[0]]}`]: ''
                                }

                                _context.prev = 2;
                                sql = '';
                                attribs = null;
                                sqliks = self.queryTemplate(self.queryOptions(find), 'select');
                                console.log('THE SQLKIKS OBJECT FIND');
                                console.log(sqliks);
                                attribs = [sqliks.attribs.from.table];
                                sql = sqliks.statement;
                                queryAttributes = attribs;
                                console.log('THE SQL BEFORE FORMAT');
                                console.log(sql);
                                sql = conn.format(sql, queryAttributes);
                                console.log(sql);
                                _context.next = 17;
                                return conn.query(sql, function (e, r, f) {
                                  console.log('THE QUERY IS COMPLETED WITH RESULTS');
                                  console.log(e);
                                  console.log(r); // console.log(typeof r)
                                  // console.log(f)
                                  // console.log(r instanceof Array)
                                  // console.log(pao.pa_isArray(r))
                                  // console.log(r.length)
                                  // console.log('After R evaluation')

                                  if (e) result.push(e);

                                  if (pao.pa_isArray(r) && r.length > 0 && query.length !== 1) {
                                    r = r[0];
                                    result.push(r);
                                  } else {
                                    result = r;
                                  }

                                  if (q === query.length - 1) {
                                    console.log('THE LOOP IS COMPLETE WITH DATA:');
                                    console.log(result);
                                    handler(null, result);
                                  }
                                });

                              case 17:
                                _context.next = 22;
                                break;

                              case 19:
                                _context.prev = 19;
                                _context.t0 = _context["catch"](2);
                                return _context.abrupt("return", {
                                  v: {
                                    v: handler(_context.t0, null)
                                  }
                                });

                              case 22:
                              case "end":
                                return _context.stop();
                            }
                          }
                        }, _loop, null, [[2, 19]]);
                      });
                      q = 0;

                    case 8:
                      if (!(q < query.length)) {
                        _context2.next = 16;
                        break;
                      }

                      return _context2.delegateYield(_loop(q), "t0", 10);

                    case 10:
                      _ret2 = _context2.t0;

                      if (!(_typeof(_ret2) === "object")) {
                        _context2.next = 13;
                        break;
                      }

                      return _context2.abrupt("return", _ret2.v);

                    case 13:
                      q++;
                      _context2.next = 8;
                      break;

                    case 16:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee);
            })(), "t0", 7);

          case 7:
            _ret = _context3.t0;

            if (!(_typeof(_ret) === "object")) {
              _context3.next = 10;
              break;
            }

            return _context3.abrupt("return", _ret.v);

          case 10:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee2, this);
  }));

  return function find(_x) {
    return _ref.apply(this, arguments);
  };
}();
var updateOne = function updateOne(updatiks) {
  console.log('THE UPDATIKS');
  console.log(updatiks);
  var self = this;
  var pao = self.pao;
  var conn = updatiks.conn;
  var handler = updatiks.outComehandler;

  var update = _objectSpread({
    table: updatiks.table
  }, updatiks.query); //console.log(update)


  if (!pao.pa_isObject(updatiks)) {} else {
    try {
      var sql = '';
      var attribs = null;
      var sqliks = self.queryTemplate(self.queryOptions(update), 'update');
      console.log('THE SQLKIKS OBJECT UPDATE');
      console.log(sqliks);
      attribs = [sqliks.attribs.from.table];
      sql = sqliks.statement;
      var queryAttributes = attribs;
      console.log('THE SQL BEFORE FORMAT');
      console.log(sql);
      sql = conn.format(sql, queryAttributes);
      console.log(sql);
      conn.query(sql, function (e, r, f) {
        if (e) handler(e, null);
        handler(null, r);
      });
    } catch (e) {
      handler(e, null);
    }
  }
};
var updateMany = function updateMany(update) {
  if (!pao.pa_isObject(data)) {} else {
    try {
      var sql = "UPDATE TABLE ?? SET\xA0??\xA0WHERE\xA0??";
      var result = [];
      var fullImplement = true;
      update.bulk.forEach(function (updateItem, i) {
        var queryAttributes = [update.table, _toConsumableArray(update.fields), update.condition];
        sql = conn.format(sql, queryAttributes);
        conn.query(sql, updateItem, function (e, r, f) {
          if (e) {
            fullImplement = false;
          } else {
            result.push(r);
          }
        });
      });
      console.log('bulk update completed');
      handler(null, result);
    } catch (e) {
      handler(e, null);
    }
  }
};
var updateandtake = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(updateAndTake) {
    var self, pao, conn, handler, updateTake, _options;

    return regeneratorRuntime.wrap(function _callee3$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            console.log('THE UPDATIKANDTAKE');
            console.log(updateAndTake);
            self = this;
            pao = self.pao;
            conn = updateAndTake.conn;
            handler = updateAndTake.outComehandler;
            updateTake = updateAndTake.query; //console.log(update)

            if (pao.pa_isObject(updateAndTake)) {
              _context4.next = 10;
              break;
            }

            _context4.next = 20;
            break;

          case 10:
            _context4.prev = 10;
            _context4.next = 13;
            return self.searchOptions(updateTake, true);

          case 13:
            _options = _context4.sent;
            self.multiTableUpdate(_options, conn).then(function (updated) {
              if (updated.changedRows > 0) {
                self.take(_options, conn, updateTake.conditions).then(function (taken) {
                  // updated.changedRows > 0 ? handler(null,{updated: true,taken: taken}) : ''
                  handler(null, {
                    updated: true,
                    taken: taken
                  });
                })["catch"](function (e) {
                  handler(e, null);
                });
              } else {
                // handler({updated: false,taken: taken})
                console.log('NO CHANGED ROWS IN A MULTIPLE UPDATE');
                console.log(_options);
                self.take(_options, conn, updateTake.conditions).then(function (taken) {
                  handler(null, {
                    updated: false,
                    taken: taken
                  });
                })["catch"](function (e) {
                  handler(e, null);
                }); //
                // {
                //   tables:['jo_user','jo_login'],
                //   joins: 2,
                //   joinPoints: ['jo_user.id EQUALS jo_login.id'],
                //   conditions: [`jo_user.id EQUALS 1`,`AND jo_login.u_id EQUALS 1`],
                //   opiks: ['field.first_name.as[firstName]','field.last_name.as[lastName]',
                //   set: [{first_name: 'Surprise',last_name: 'Mashele'},{password: '1234567'}],
                //   takeFrom: 'jo_user'
                //  }
              }
            })["catch"](function (e) {
              handler(e, null);
            });
            _context4.next = 20;
            break;

          case 17:
            _context4.prev = 17;
            _context4.t0 = _context4["catch"](10);
            handler(_context4.t0, null);

          case 20:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee3, this, [[10, 17]]);
  }));

  return function updateandtake(_x2) {
    return _ref2.apply(this, arguments);
  };
}();
var insertandtake = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(insertAndTake) {
    var self, pao, conn, handler, insert, takeQuery, insertTakeHandle;
    return regeneratorRuntime.wrap(function _callee5$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            console.log('THE INSERTANDTAKE');
            console.log(insertAndTake);
            self = this;
            pao = self.pao;
            conn = insertAndTake.conn;
            handler = insertAndTake.outComehandler;
            insert = insertAndTake.query.insert;
            takeQuery = insertAndTake.query.take; //console.log(update)

            if (!pao.pa_isObject(insertAndTake)) {} else {
              try {
                insertTakeHandle = /*#__PURE__*/function () {
                  var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
                    var error,
                        inserted,
                        take,
                        _args5 = arguments;
                    return regeneratorRuntime.wrap(function _callee4$(_context5) {
                      while (1) {
                        switch (_context5.prev = _context5.next) {
                          case 0:
                            error = _args5.length > 0 && _args5[0] !== undefined ? _args5[0] : null;
                            inserted = _args5.length > 1 && _args5[1] !== undefined ? _args5[1] : null;
                            _context5.next = 4;
                            return self.log('THE INSERTED RECORD UPDATE');

                          case 4:
                            _context5.next = 6;
                            return self.log(error);

                          case 6:
                            _context5.next = 8;
                            return self.log(inserted);

                          case 8:
                            _context5.next = 10;
                            return self.log(self.SEARCH);

                          case 10:
                            !takeQuery.conditions ? takeQuery.conditions = ["id ISEQUAL ".concat(inserted.insertId)] : '';
                            _context5.next = 13;
                            return self.log(takeQuery);

                          case 13:
                            take = {};
                            take.conn = conn;
                            take.query = takeQuery;

                            take.outComehandler = function () {
                              var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
                              var taken = arguments.length > 1 ? arguments[1] : undefined;
                              handler(null, {
                                inserted: inserted,
                                taken: taken
                              });
                            };

                            self.search(take); // throw new Error('MADE UP ERROR')
                            //  self.SEARCH(take)

                          case 18:
                          case "end":
                            return _context5.stop();
                        }
                      }
                    }, _callee4);
                  }));

                  return function insertTakeHandle() {
                    return _ref4.apply(this, arguments);
                  };
                }();

                insert.outComehandler = insertTakeHandle.bind(self);
                insert.conn = conn;
                self.insertOne(insert);
              } catch (e) {
                handler(e, null);
              }
            }

          case 9:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee5, this);
  }));

  return function insertandtake(_x3) {
    return _ref3.apply(this, arguments);
  };
}();
var deleteandtake = /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7(deleteAndTake) {
    var self, pao, conn, handler, remove, takeQuery, deleteTakeHandle;
    return regeneratorRuntime.wrap(function _callee7$(_context8) {
      while (1) {
        switch (_context8.prev = _context8.next) {
          case 0:
            console.log('THE DELETEANDTAKE');
            console.log(deleteAndTake);
            self = this;
            pao = self.pao;
            conn = deleteAndTake.conn;
            handler = deleteAndTake.outComehandler;
            remove = null;
            takeQuery = null;

            if (deleteAndTake.query.remove) {
              remove = deleteAndTake.query.remove;
              takeQuery = deleteAndTake.query.take;
            } //console.log(update)


            if (!pao.pa_isObject(deleteAndTake)) {} else {
              try {
                deleteTakeHandle = /*#__PURE__*/function () {
                  var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
                    var error,
                        deleted,
                        _take,
                        _args7 = arguments;

                    return regeneratorRuntime.wrap(function _callee6$(_context7) {
                      while (1) {
                        switch (_context7.prev = _context7.next) {
                          case 0:
                            error = _args7.length > 0 && _args7[0] !== undefined ? _args7[0] : null;
                            deleted = _args7.length > 1 && _args7[1] !== undefined ? _args7[1] : null;
                            _context7.next = 4;
                            return self.log('THE deleted RECORD UPDATE');

                          case 4:
                            _context7.next = 6;
                            return self.log(error);

                          case 6:
                            _context7.next = 8;
                            return self.log(deleted);

                          case 8:
                            if (takeQuery) {
                              _context7.next = 12;
                              break;
                            }

                            handler(null, {
                              deleted: deleted
                            });
                            _context7.next = 20;
                            break;

                          case 12:
                            !takeQuery.conditions ? takeQuery.conditions = remove.conditions : '';
                            _context7.next = 15;
                            return self.log(takeQuery);

                          case 15:
                            _take = {};
                            _take.conn = conn;
                            _take.query = takeQuery;

                            _take.outComehandler = function () {
                              var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
                              var taken = arguments.length > 1 ? arguments[1] : undefined;
                              console.log('DELETED AND TAKEN OPERATION');
                              console.log(deleted);
                              console.log(taken);
                              handler(null, {
                                deleted: deleted,
                                taken: taken
                              });
                            };

                            self.search(_take);

                          case 20:
                          case "end":
                            return _context7.stop();
                        }
                      }
                    }, _callee6);
                  }));

                  return function deleteTakeHandle() {
                    return _ref6.apply(this, arguments);
                  };
                }();

                if (!remove) remove = deleteAndTake.query;
                remove.outComehandler = deleteTakeHandle.bind(self);
                remove.conn = conn;
                self.removeJoin(remove);
              } catch (e) {
                handler(e, null);
              }
            }

          case 10:
          case "end":
            return _context8.stop();
        }
      }
    }, _callee7, this);
  }));

  return function deleteandtake(_x4) {
    return _ref5.apply(this, arguments);
  };
}();
var updateJoinTemplate = function updateJoinTemplate(options) {
  // `UPDATE ??
  // SET ${options.set}
  // WHERE ${options.from.condition}
  // `
  var self = this;
  self.log('UPDATE OPTIONS');
  self.log(options);
  var sqlAttribs = {};
  sqlAttribs.attribs = {
    from: options.from,
    tables: options.tables
  };

  switch (options.length) {
    case 2:
      sqlAttribs.statement = "UPDATE ??\n                            JOIN ".concat(options.tables[0], "\n                              ON ").concat(options.joinPoints[0], "\n                            SET ").concat(options.set, "\n                            WHERE ").concat(options.from.condition, "\n                            ");
      break;

    case 3:
      sqlAttribs.statement = "UPDATE ??,??,??\n                              JOIN ".concat(options.tables[0], "\n                                ON ").concat(options.conditions[0], "\n                              JOIN ").concat(options.tables[1], "\n                                ON ").concat(options.conditions[1], "\n                              SET ").concat(options.set, "\n                              WHERE ").concat(options.from.condition, "\n                              \n                              ");
      break;

    case 4:
      sqlAttribs.statement = "UPDATE ??,??,??,??\n                            JOIN ".concat(options.tables[0], "\n                              ON ").concat(options.conditions[0], "\n                            JOIN ").concat(options.tables[1], "\n                              ON ").concat(options.conditions[1], "\n                            JOIN ").concat(options.tables[2], "\n                            ON ").concat(options.conditions[2], "\n                            SET ").concat(options.set, "\n                            WHERE ").concat(options.from.condition, "\n                            \n                            ");
      break;

    default:
      sqlAttribs.statement = "UPDATE ??\n                            SET ".concat(options.set, "\n                            WHERE ").concat(options.from.condition, "\n                            \n                            ");
  }

  return sqlAttribs;
};
var multiTableUpdate = /*#__PURE__*/function () {
  var _ref7 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee8(options, conn) {
    var self, pao, contains;
    return regeneratorRuntime.wrap(function _callee8$(_context9) {
      while (1) {
        switch (_context9.prev = _context9.next) {
          case 0:
            self = this;
            pao = self.pao;
            contains = pao.pa_contains;
            return _context9.abrupt("return", new Promise(function (resolve, reject) {
              try {
                // console.log('THE SQLKIKS OBJECT UPDATE')
                // console.log(sqliks)
                // attribs = [sqliks.attribs.from.table]
                var sql = '';
                var attribs = null;
                var sqliks = self.updateJoinTemplate(options);
                console.log('THE SQLKIKS OBJECT');
                console.log(sqliks);
                contains(sqliks.attribs, 'tables') && sqliks.attribs.tables ? attribs = [sqliks.attribs.from.table].concat(_toConsumableArray(sqliks.attribs.tables)) : attribs = [sqliks.attribs.from.table];
                sql = sqliks.statement;
                var queryAttributes = attribs;
                console.log('THE SQL BEFORE FORMAT::MULTIUPDATE');
                console.log(sql);
                sql = conn.format(sql, queryAttributes);
                console.log(sql);
                conn.query(sql, function (e, r, f) {
                  if (e) return reject(e);
                  resolve(r);
                });
              } catch (e) {
                reject(e);
              }
            }));

          case 4:
          case "end":
            return _context9.stop();
        }
      }
    }, _callee8, this);
  }));

  return function multiTableUpdate(_x5, _x6) {
    return _ref7.apply(this, arguments);
  };
}();
var take = /*#__PURE__*/function () {
  var _ref8 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee9(options, conn, conditions) {
    var self, pao;
    return regeneratorRuntime.wrap(function _callee9$(_context10) {
      while (1) {
        switch (_context10.prev = _context10.next) {
          case 0:
            self = this;
            pao = self.pao;
            console.log('TAKE:::');
            console.log(options);
            return _context10.abrupt("return", new Promise(function (resolve, reject) {
              if (options.takeFrom) {
                var takeFrom = options.takeFrom;
                console.log('THE TAKEFROM BY TAKEFROM');
                console.log(takeFrom);

                if (takeFrom.condition) {
                  self.log('THE TAKEFROM CONDITIION IS SET');
                  options.from.condition = takeFrom.condition;
                  takeFrom.tables.length > 1 ? options.length = takeFrom.tables.length : '';
                  options.length ? takeFrom.joinPoints ? options.joinPoints = takeFrom.joinPoints : '' : '';
                  self.takeSql(options, conn).then(function (resultset) {
                    resolve(resultset);
                  })["catch"](function (e) {
                    reject(e);
                  });
                } else {
                  self.log('THE TAKEFROM HAS NO SET CONDITIONS');
                  self.log(options);
                  delete options.length;
                  options.from.condition = self.searchConditionsFormat([conditions[0]]); // options.tables = options.tables[0]

                  self.takeSql(options, conn).then(function (resultset) {
                    resolve(resultset);
                  })["catch"](function (e) {
                    reject(e);
                  });
                }
              } else {
                self.log('THE TAKEFROM IS NOT DEFINED');
                self.takeSql(options, conn).then(function (resultset) {
                  resolve(resultset);
                })["catch"](function (e) {
                  reject(e);
                });
              }
            }));

          case 5:
          case "end":
            return _context10.stop();
        }
      }
    }, _callee9, this);
  }));

  return function take(_x7, _x8, _x9) {
    return _ref8.apply(this, arguments);
  };
}();
var takeSql = function takeSql(takeOptions, conn) {
  var self = this;
  var pao = self.pao;
  var contains = pao.pa_contains;
  console.log('THE SEARCH');
  console.log(search);
  return new Promise(function (resolve, reject) {
    // do a thing, possibly async, then… 
    console.log('Executing the search promise');
    var sql = '';
    var attribs = null;
    var sqliks = self.searchStatement(takeOptions);
    console.log('THE SQLKIKS OBJECT');
    console.log(sqliks);
    contains(sqliks.attribs, 'tables') ? attribs = [sqliks.attribs.from.table].concat(_toConsumableArray(sqliks.attribs.tables)) : attribs = [sqliks.attribs.from.table];
    sql = sqliks.statement;
    var queryAttributes = attribs;
    console.log('THE SQL BEFORE FORMAT::');
    console.log(sql); // console.log(conn)

    sql = conn.format(sql, queryAttributes);
    console.log(sql);
    conn.query(sql, function (e, r, f) {
      if (e) {
        console.log('Promise is rejecting search');
        console.log(e);
        reject(e);
      } else {
        console.log('Promise is Resolving search');
        console.log(r);
        console.log(r[0]);
        resolve(r);
      }
    });
  });
};
var removeJoin = function removeJoin(removiks) {
  var self = this;
  var pao = self.pao;
  var contains = pao.pa_contains;
  var conn = removiks.conn;
  var handler = removiks.outComehandler; // let remove = {table: removiks.table,...removiks.query}

  if (!pao.pa_isObject(removiks)) {} else {
    try {
      var sql = '';
      var attribs = null;
      var sqliks = self.queryTemplate(self.searchOptions(removiks), 'delete');
      console.log('THE SQLKIKS OBJECT DELETEDANDTAKE[REMOVE]');
      console.log(sqliks);
      contains(sqliks.attribs, 'tables') ? attribs = [].concat(_toConsumableArray(sqliks.attribs.tables), [sqliks.attribs.from.table]) : attribs = [sqliks.attribs.from.table];
      sql = sqliks.statement;
      var queryAttributes = attribs;
      console.log('THE SQL BEFORE FORMAT');
      console.log(sql);
      sql = conn.format(sql, queryAttributes);
      console.log(sql);
      conn.query(sql, function (e, r, f) {
        if (e) return handler(e, null);
        handler(null, r);
      });
    } catch (e) {
      handler(e, null);
    }
  }
};
var remove = function remove(removiks) {
  var self = this;
  var pao = self.pao;
  var conn = removiks.conn;
  var handler = removiks.outComehandler;

  var remove = _objectSpread({
    table: removiks.table
  }, removiks.query);

  if (!pao.pa_isObject(removiks)) {} else {
    try {
      var sql = '';
      var attribs = null;
      var sqliks = self.queryTemplate(self.queryOptions(remove), 'delete');
      console.log('THE SQLKIKS OBJECT DELETED[REMOVE]');
      console.log(sqliks);
      attribs = [sqliks.attribs.from.table];
      sql = sqliks.statement;
      var queryAttributes = attribs;
      console.log('THE SQL BEFORE FORMAT');
      console.log(sql);
      sql = conn.format(sql, queryAttributes);
      console.log(sql);
      conn.query(sql, function (e, r, f) {
        if (e) handler(e, null);
        handler(null, r);
      });
    } catch (e) {
      handler(e, null);
    }
  }
};
var queryOptions = function queryOptions(i) {
  console.log('THE search BATCH ITEM');
  console.log(i);
  var self = this;
  var pao = self.pao;
  var contains = pao.pa_contains; // let rest = {
  // 	conditions: [`country_id EQUALS 202`],
  // 	opiks: ['field.id.as[stateId]','field.state_name.as[state]','field.country_id.as[countryId]'],
  // 	sort: 'order[state_name].asc',
  // 	range: '2,5',
  // 	take: 5
  //   }

  var options = {};
  i.conditions ? options.from = {
    table: i.table,
    condition: self.searchConditionsFormat(i.conditions)
  } : options.from = {
    table: i.table
  };
  console.log('THE CODE GETS HERE');
  console.log(options);
  contains(i, ['returnFields', 'opiks']) ? options.fields = self.searchFieldsFormat(i.opiks, i.returnFields) : contains(i, 'opiks') ? options.fields = self.searchFieldsFormat(i.opiks) : contains(i, 'returnFields') ? i.returnFields.length === 1 && i.returnFields[0].trim() === 'all' ? options.fields = '*' : options.fields = i.returnFields : options.fields = '*';
  contains(i, 'take') ? options.take = i.take : '';
  contains(i, 'range') ? options.range = i.range : '';
  contains(i, 'sort') ? options.sort = i.sort : '';
  contains(i, 'set') ? options.set = self.set(i.set) : '';
  contains(i, 'takeFrom') ? i.takeFrom.conditions ? (options.takeFrom = i.takeFrom, options.takeFrom.condition = self.searchConditionsFormat(i.takeFrom.conditions)) : options.takeFrom = i.takeFrom : '';
  console.log('THE OPTIONS');
  console.log(options);
  return options;
};
var queryTemplate = function queryTemplate(options, type) {
  var self = this;
  var pao = self.pao;
  var contains = pao.pa_contains;
  console.log('THE QUERY TEMPLATE');
  console.log(options);

  if (type === 'select') {
    var sqlAttribs = {};
    sqlAttribs.attribs = {
      from: options.from
    };
    var _limit = ' ';

    var _sort = options.sort ? self.sort(options.sort) : ' ';

    options.take ? _limit = self.limit(options.take, 'take') : options.range ? _limit = self.limit(options.range, 'range') : ' ';

    if (contains(options.from, 'condition')) {
      sqlAttribs.statement = "SELECT ".concat(options.fields, "\n                              FROM  ??\n                              WHERE ").concat(options.from.condition, "\n                              ").concat(_sort, "\n                              ").concat(_limit, "\n\n                              ");
    } else {
      sqlAttribs.statement = "SELECT ".concat(options.fields, "\n                              FROM  ??\n                              ").concat(_sort, "\n                              ").concat(_limit, "\n                              ");
    }

    return sqlAttribs;
  } else if (type === 'update') {
    var _sqlAttribs = {};
    _sqlAttribs.attribs = {
      from: options.from
    };
    _sqlAttribs.statement = "UPDATE ??\n                            SET ".concat(options.set, "\n                            WHERE ").concat(options.from.condition, "\n                            ");
    return _sqlAttribs;
  } else if (type === 'delete') {
    if (options.length) {
      var _sqlAttribs2 = {};
      _sqlAttribs2.attribs = {
        from: options.from,
        tables: options.tables
      };
      options.tables.unshift(options.from.table);
      console.log('DELETE OPTIONS OBJECT');
      console.log(options);
      console.log(options.tables);
      console.log(options.length);

      switch (options.length) {
        case 3:
          _sqlAttribs2.statement = "DELETE ??,??,??\n                                  FROM ??\n                                  JOIN ".concat(options.tables[1], "\n                                    ON ").concat(options.joinPoints[0], "\n                                  JOIN ").concat(options.tables[2], "\n                                    ON ").concat(options.joinPoints[1], "\n                                  WHERE ").concat(options.from.condition, "\n                                  \n                                  ");
          break;

        case 4:
          _sqlAttribs2.statement = "DELETE ??,??,??,??\n                                FROM ??\n                                JOIN ".concat(options.tables[1], "\n                                  ON ").concat(options.joinPoints[0], "\n                                JOIN ").concat(options.tables[2], "\n                                  ON ").concat(options.joinPoints[1], "\n                                JOIN ").concat(options.tables[3], "\n                                ON ").concat(options.joinPoints[3], "\n                                WHERE ").concat(options.from.condition, "\n                                \n                                ");
          break;

        default:
          _sqlAttribs2.statement = "DELETE ??,??\n                                  FROM ??\n                                  JOIN ".concat(options.tables[1], "\n                                    ON ").concat(options.joinPoints[0], "\n                                  WHERE ").concat(options.from.condition, "\n                                  \n                                  ");
      }

      console.log('SQL ATTRRIBS');
      console.log(_sqlAttribs2);
      return _sqlAttribs2;
    } else {
      var _sqlAttribs3 = {};
      _sqlAttribs3.attribs = {
        from: options.from
      };
      _sqlAttribs3.statement = "DELETE\n                                FROM ??\n                                ";
      options.from.condition ? _sqlAttribs3.statement += " WHERE ".concat(options.from.condition) : '';
      return _sqlAttribs3;
    }
  }
};
var transaction = function transaction(data) {
  var self = this;

  if (typeof data.query === 'function') {
    data.query();
  } else {
    self.TRANSACTION(data.query, data.conn, data.outComehandler);
  }
};
var procedure = function procedure(data) {
  console.log('THE procedure got a call');
  var self = this;

  if (typeof data.query === 'function') {
    data.query();
  } else {
    console.log('INSIDE PROCEDURE'); //  console.log(data.outComehandler)
    //  console.log(data)

    self.PROCEDURE(data.query, data.conn, data.outComehandler);
  }
};
var join = function join(data) {
  console.log('THE procedure got a call');
  var self = this;

  if (typeof data.query === 'function') {
    data.query();
  } else {
    console.log('INSIDE JOIN'); //  console.log(data.outComehandler)
    //  console.log(data)

    self.JOIN(data.query, data.conn, data.outComehandler);
  }
};
var search = function search(data) {
  console.log('THE search got a call');
  var self = this;

  if (typeof data.query === 'function') {
    data.query();
  } else {
    console.log('INSIDE SEARCH'); //  console.log(data.outComehandler)
    //  console.log(data)

    self.SEARCH(data.query, data.conn, data.outComehandler);
  }
};
var TRANSACTION = function TRANSACTION(collections, conn) {
  var handler = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
  var self = this;
  var pao = self.pao;
  var collectionsIds = [];
  var breakOut = false;

  for (var c = 0; c < collections.length; c++) {
    var i = collections[c];
    var fields = null;
    var sources = null;
    var own = null;

    if (!pao.pa_contains(i, 'fields')) {
      handler('Required collection/table field missing');
      break;
    } else {
      if (pao.pa_contains(i.fields, 'tables')) {
        sources = i.fields.tables;
        own = i.fields.own;
      }
    }

    sources ? fields = self.combineFields(sources, own, collectionsIds) : '';
    fields ? i.fields = fields : '';
    self.insert(i, conn).then(function (insert) {
      collectionsIds.push(insert);
    })["catch"](function (failedInsert) {
      self.rollback(collectionsIds);
      handler(failedInsert, null);
      breakOut = true;
    });
    if (breakOut) break;

    if (c === collections.length - 1) {
      console.log('Operation completed successfully');
      handler('Transaction Operation sucessful');
    }
  }
};
var PROCEDURE = /*#__PURE__*/function () {
  var _ref9 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee10(collections, conn) {
    var handler,
        self,
        pao,
        collectionsIds,
        breakOut,
        c,
        i,
        fields,
        sources,
        own,
        _args11 = arguments;
    return regeneratorRuntime.wrap(function _callee10$(_context11) {
      while (1) {
        switch (_context11.prev = _context11.next) {
          case 0:
            handler = _args11.length > 2 && _args11[2] !== undefined ? _args11[2] : null;
            self = this;
            pao = self.pao;
            self.log('THE PROCEDURE METHOD');
            self.log(collections);
            self.log(handler);
            self.log(conn);
            collectionsIds = [];
            breakOut = false;
            c = 0;

          case 10:
            if (!(c < collections.length)) {
              _context11.next = 31;
              break;
            }

            i = collections[c];
            fields = null;
            sources = null;
            own = null;

            if (pao.pa_contains(i, 'fields')) {
              _context11.next = 20;
              break;
            }

            handler('Required collection/table field missing');
            return _context11.abrupt("break", 31);

          case 20:
            if (pao.pa_contains(i.fields, 'tables')) {
              console.log('sources will be assigned A VALUE');
              sources = i.fields.tables;
              own = i.fields.own;
            }

          case 21:
            sources ? fields = self.combineFields(sources, own, collectionsIds) : '';
            fields ? i.fields = fields : '';
            _context11.next = 25;
            return self.insert(i, conn).then(function (insert) {
              collectionsIds.push(insert);
            })["catch"](function (failedInsert) {
              handler(failedInsert, null);
              breakOut = true;
            });

          case 25:
            if (!breakOut) {
              _context11.next = 27;
              break;
            }

            return _context11.abrupt("break", 31);

          case 27:
            if (c === collections.length - 1) {
              console.log('Operation completed successfully');
              console.log(collectionsIds);

              if (collectionsIds.length > 0) {
                console.log('PROCEDURE IS COMPLETED');
                console.log(collectionsIds);
                handler(null, {
                  user: {
                    username: collectionsIds[0].fields.email
                  }
                });
              } else {
                handler('An insert has went wrong');
              }
            }

          case 28:
            c++;
            _context11.next = 10;
            break;

          case 31:
          case "end":
            return _context11.stop();
        }
      }
    }, _callee10, this);
  }));

  return function PROCEDURE(_x10, _x11) {
    return _ref9.apply(this, arguments);
  };
}();
var insert = function insert(inset, conn) {
  var self = this;
  var pao = pao;
  return new Promise(function (resolve, reject) {
    // do a thing, possibly async, then… 
    console.log('Executing the insert promise');
    var sql = "INSERT INTO ?? SET ?";
    var queryAttributes = [inset.name, inset.fields];
    sql = conn.format(sql, queryAttributes); //  let sql = `INSERT INTO ${data.table} SET ?`

    conn.query(sql, function (e, r, f) {
      if (e) {
        console.log('Promise is rejecting');
        reject(e);
      } else {
        self.findOne({
          conn: conn,
          table: inset.name,
          query: {
            user: {
              id: r.insertId
            }
          },
          outComehandler: function outComehandler() {
            var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
            var r = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
            var data = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
            var insert = {};

            if (e) {
              console.log('the errorINSERT');
              console.log(e);
              console.log(data);
              insert.error = e;
              insert.lastInsert = data.query.user.id;
              insert.fields = null;
              insert.collection = data.table;
              console.log('Promise is Resolving with findOne error');
              console.log(insert);
              resolve(insert);
            } else {
              insert.lastInsert = data.query.user.id;
              insert.fields = r;
              insert.collection = data.table;
              console.log('Promise is Resolving with FindOne SUCCESS');
              console.log(insert);
              resolve(insert);
            }
          }
        });
      }
    });
  });
};
var JOIN = /*#__PURE__*/function () {
  var _ref10 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee11(join, conn) {
    var handler,
        self,
        pao,
        _args12 = arguments;
    return regeneratorRuntime.wrap(function _callee11$(_context12) {
      while (1) {
        switch (_context12.prev = _context12.next) {
          case 0:
            handler = _args12.length > 2 && _args12[2] !== undefined ? _args12[2] : null;
            self = this;
            pao = self.pao;
            self.joinExek(join, conn).then(function (result) {
              console.log('jOIN is successful, sending results to the requester');
              console.log(result);
              handler(null, result);
            })["catch"](function (failedRequest) {
              console.log('JOIN FAILED');
              console.log(failedRequest);
              handler(failedRequest, null);
            });

          case 4:
          case "end":
            return _context12.stop();
        }
      }
    }, _callee11, this);
  }));

  return function JOIN(_x12, _x13) {
    return _ref10.apply(this, arguments);
  };
}();
var SEARCH = /*#__PURE__*/function () {
  var _ref11 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee13(search, conn) {
    var handler,
        self,
        pao,
        _args15 = arguments;
    return regeneratorRuntime.wrap(function _callee13$(_context15) {
      while (1) {
        switch (_context15.prev = _context15.next) {
          case 0:
            handler = _args15.length > 2 && _args15[2] !== undefined ? _args15[2] : null;
            self = this;
            pao = self.pao;
            console.log('THE SEARCH search object contents');
            console.log(search);

            if (pao.pa_contains(search, 'batch')) {
              _context15.next = 9;
              break;
            }

            self.searchExek(search, conn).then(function (result) {
              console.log('search is successful, sending results to the requester'); // console.log(result)

              handler(null, result);
            })["catch"](function (failedRequest) {
              console.log('search FAILED');
              console.log(failedRequest);
              handler(failedRequest, null);
            });
            _context15.next = 10;
            break;

          case 9:
            return _context15.delegateYield( /*#__PURE__*/regeneratorRuntime.mark(function _callee12() {
              var resultSet, batch, _loop2, s;

              return regeneratorRuntime.wrap(function _callee12$(_context14) {
                while (1) {
                  switch (_context14.prev = _context14.next) {
                    case 0:
                      resultSet = [];
                      batch = search.search;
                      _loop2 = /*#__PURE__*/regeneratorRuntime.mark(function _loop2(s) {
                        return regeneratorRuntime.wrap(function _loop2$(_context13) {
                          while (1) {
                            switch (_context13.prev = _context13.next) {
                              case 0:
                                _context13.next = 2;
                                return self.searchExek(batch[s], conn).then(function (result) {
                                  console.log('search is successful, pushing results to the resultSet'); // console.log(result)

                                  resultSet.push(result);

                                  if (s === batch.length - 1) {
                                    console.log('Operation completed successfully'); // console.log(resultSet)

                                    handler(null, resultSet);
                                  } // handler(null,result)

                                })["catch"](function (failedRequest) {
                                  console.log('search FAILED');
                                  console.log(failedRequest);
                                  resultSet.push({
                                    item: s,
                                    errorMessage: "Item of ".concat(s, " position has failed"),
                                    error: failedRequest
                                  }); // handler(failedRequest,null) 
                                });

                              case 2:
                              case "end":
                                return _context13.stop();
                            }
                          }
                        }, _loop2);
                      });
                      s = 0;

                    case 4:
                      if (!(s < batch.length)) {
                        _context14.next = 9;
                        break;
                      }

                      return _context14.delegateYield(_loop2(s), "t0", 6);

                    case 6:
                      s++;
                      _context14.next = 4;
                      break;

                    case 9:
                    case "end":
                      return _context14.stop();
                  }
                }
              }, _callee12);
            })(), "t0", 10);

          case 10:
          case "end":
            return _context15.stop();
        }
      }
    }, _callee13, this);
  }));

  return function SEARCH(_x14, _x15) {
    return _ref11.apply(this, arguments);
  };
}();
var combineFields = function combineFields(tables, own, ids) {
  var fields = {};
  console.log('COMBINE FIELDS GETS A CALL');
  tables.forEach(function (v, i) {
    var _loop3 = function _loop3(co) {
      if (ids[co].collection === v.name) {
        v.values.forEach(function (vv, ii) {
          console.log('THE VV');
          console.log(vv);
          var fieldValuePair = vv.split('.');
          console.log('FIELD VALUE PAIR');
          console.log(fieldValuePair);
          fields[fieldValuePair[1]] = ids[co].fields[fieldValuePair[0]];
        });
        return "break";
      }
    };

    for (var co = 0; co < ids.length; co++) {
      var _ret3 = _loop3(co);

      if (_ret3 === "break") break;
    }
  });
  var keys = Object.keys(own);
  console.log('THE KEYS OF OWN');
  console.log(keys);
  keys.forEach(function (k, i) {
    fields[k] = own[k];
  });
  console.log('THE FIELDS');
  console.log(fields);
  return fields;
};
var rollback = function rollback(rolbacks) {
  var self = this;
  rolbacks.forEach(function (roll, i) {
    self.deleteOne({
      id: roll.lastInsert
    }, conn);
  });
};
var joinExek = function joinExek(join, conn) {
  var self = this;
  return new Promise(function (resolve, reject) {
    // do a thing, possibly async, then… 
    console.log('Executing the JOIN promise');
    var options = {
      fields: join.returnFields,
      from: {
        table: join.tables[0],
        condition: self.joinConditionsFormat(join.conditions)
      },
      joinPoints: self.joinConditionsFormat(join.joinPoints, 'ON'),
      tables: join.tables.splice(1, join.tables.length),
      type: join.type.toUpperCase(),
      length: join.joins
    };
    var sql = self.joinStatement(options);
    var queryAttributes = [options.from.table, options.tables[0]];
    console.log('THE SQL BEFORE FORMAT');
    console.log(sql);
    sql = conn.format(sql, queryAttributes);
    console.log(sql);
    conn.query(sql, function (e, r, f) {
      if (e) {
        console.log('Promise is rejecting JOIN');
        console.log(e);
        reject(e);
      } else {
        console.log('Promise is Resolving JOIN');
        console.log(r);
        console.log(r[0]);
        resolve(r[0]);
      }
    });
  });
};
var joinConditionsFormat = function joinConditionsFormat(conditions) {
  var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  console.log('CONDITIONS');
  console.log(conditions);

  if (type) {
    var cons = conditions;
    var condition = [];
    cons.forEach(function (con, i) {
      var conList = con.trim().split(' ');
      var operand = '=';
      condition.push("".concat(conList[0], " ").concat(operand, " ").concat(conList[2]));
    });
    console.log('THE JOIN ON CONDITION');
    console.log(condition);
    return condition;
  } else {
    var _cons = conditions;
    var _condition = '';

    _cons.forEach(function (con, i) {
      console.log('THE con ITEM');
      console.log(con);
      var conList = con.trim().split(' ');
      console.log('THE CONLIST');
      console.log(conList);
      var operand = '';

      switch (conList[1]) {
        case 'EQUALS':
          operand = '=';
          break;

        case 'ISGREATEROREQUALS':
          operand = '>=';
          break;

        case 'ISLESSOREQUALS':
          operand = '<=';
          break;

        default:
          operand = '=';
      }

      _condition += "".concat(conList[0], " ").concat(operand, " '").concat(conList[2], "'");
    });

    console.log('THE JOIN FROM CONDITION');
    console.log(_condition);
    return _condition.trim();
  }
};
var joinStatement = function joinStatement(options) {
  console.log('THE JOIN OPTIONS');
  console.log(options);

  switch (options.length) {
    case 3:
      return "SELECT ".concat(options.fields, "\n               FROM ").concat(options.from.table, "\n               JOIN ").concat(options.tables[0], "\n                  ON ").concat(options.conditions[0], "\n               JOIN options.tables[1]\n                  ON ").concat(options.conditions[1], "\n               WHERE ").concat(options.from.condition, "\n               \n               ");
      break;

    case 4:
      return "SELECT ".concat(options.fields, "\n               FROM ").concat(options.from.table, "\n               JOIN ").concat(options.tables[0], "\n                  ON ").concat(options.conditions[0], "\n               JOIN options.tables[1]\n                  ON ").concat(options.conditions[1], "\n               JOIN options.tables[2]\n                  ON ").concat(options.conditions[2], "\n               WHERE ").concat(options.from.condition, "\n               \n               ");
      break;

    case 5:
      return "SELECT ".concat(options.fields, "\n               FROM ").concat(options.from.table, "\n               JOIN ").concat(options.tables[0], "\n                  ON ").concat(options.conditions[0], "\n               JOIN options.tables[1]\n                  ON ").concat(options.conditions[1], "\n               JOIN options.tables[2]\n                  ON ").concat(options.conditions[2], " \n               JOIN options.tables[3]\n                  ON ").concat(options.conditions[3], "\n               WHERE ").concat(options.from.condition, "\n               \n               ");
      break;

    default:
      return "SELECT ".concat(options.fields, "\n               FROM  ??\n               JOIN  ").concat(options.tables[0], "\n                  ON ").concat(options.joinPoints[0], "\n               WHERE ").concat(options.from.condition, "\n               ");
  }
};
var searchExek = function searchExek(search, conn) {
  var self = this;
  var contains = self.pao.pa_contains;
  console.log('THE SEARCH');
  console.log(search);
  return new Promise(function (resolve, reject) {
    // do a thing, possibly async, then… 
    console.log('Executing the search promise');
    var sql = '';
    var attribs = null;
    var sqliks = self.searchStatement(self.searchOptions(search));
    console.log('THE SQLKIKS OBJECT');
    console.log(sqliks);
    contains(sqliks.attribs, 'tables') ? attribs = [sqliks.attribs.from.table].concat(_toConsumableArray(sqliks.attribs.tables)) : attribs = [sqliks.attribs.from.table];
    sql = sqliks.statement;
    var queryAttributes = attribs;
    console.log('THE SQL BEFORE FORMAT');
    console.log(sql);
    sql = conn.format(sql, queryAttributes);
    console.log(sql);
    conn.query(sql, function (e, r, f) {
      if (e) {
        console.log('Promise is rejecting search');
        console.log(e);
        reject(e);
      } else {
        console.log('Promise is Resolving search'); //  console.log(r)
        //  console.log(r[0])

        resolve(r);
      }
    });
  });
};
var searchConditionsFormat = function searchConditionsFormat(conditions) {
  var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  console.log('CONDITIONS');
  console.log(conditions);
  var self = this;
  var pao = self.pao;

  if (type) {
    var condition = self.parseFormatCondition(conditions, type);
    console.log('THE search ON CONDITION');
    console.log(condition);
    return condition;
  } else {
    var cons = conditions;
    var _condition2 = '';
    cons.forEach(function (con, i) {
      if (con.indexOf('GROUP::') >= 0) {
        console.log('CONDITION FROM SEARCHCONDITIONFORMAT');
        console.log(con);
        _condition2 += self.parseGroup(con);
      } else {
        _condition2 += self.parseFormatCondition(con);
      }
      /*console.log('THE con ITEM')
      console.log(con)
      let conList = con.trim().split(' ')
      console.log('THE CONLIST')
      console.log(conList)
      let operand = ''
      let leftoperand = ''
      let multiCon = false
      let match = false
        if(conList[0].trim() === 'MATCH' || conList[1].trim() === 'MATCH'){
          
        if(conList.indexOf('AGAINST') > 0 && conList.length >= 5){
              let oCon = conList.slice(0)
            console.log('THE O CON')
          console.log(oCon) 
           multiCon = oCon[0].trim().toUpperCase() !== 'MATCH' ? true : false
            let matchFields = ''
          let matchKeys = ''
            if(multiCon){
            
              matchFields = oCon[2].trim()
            matchKeys = oCon[4].trim()
            
          }else{
              
                matchFields = oCon[1].trim()
              matchKeys = oCon[3].trim()
          }
          
            matchFields[0] === '[' ? matchFields = matchFields.slice(1,matchFields.length -1) : ''
          matchKeys[0] === '[' ? matchKeys = matchKeys.slice(1,matchKeys.length - 1) : ''
          console.log('THE MATCH FIELDS')
          console.log(matchFields)
          let op = ''
          operand = multiCon ? oCon[3].trim() : oCon[2].trim() 
          let mode = multiCon ? oCon[5] : oCon[4]
        
          
          switch(mode){
            case 'BOOLEAN' : 
            op = `AGAINST ("${matchKeys}"" IN BOOLEAN MODE) `
          break;
          case 'QUERY' : 
            op = `AGAINST ("${matchKeys}" IN QUERY EXPRESSION MODE) `
          break;
          
          default: 
            op = `AGAINST ("${matchKeys}" IN NATURAL LANGUAGE MODE) `
            }
            conList[0] = multiCon ? `${oCon[0]} MATCH (${matchFields}) ${op}` :`MATCH (${matchFields}) ${op}`
        //  leftoperand = ` ${op}`
          match = true
              
          }else{
            }
        }else{
            
          let oCon = conList.slice(0)
            console.log('THE O CON')
          console.log(oCon) 
          multiCon = oCon[0].trim().toUpperCase() === ('AND' || 'OR' || 'NOT') ? true : false     
          let operator = multiCon ? conList[2] : conList[1]
          switch(operator){
            case 'EQUALS' : 
            operand = '='
            break;
          case 'ISGREATEROREQUALS' : 
            operand = '>='
            break;
          case 'ISLESSOREQUALS' : 
            operand = '<='
            break;
          case 'ISLIKE' : 
            operand = 'LIKE'
            break;
          case 'ISIN' : 
          operand = 'IN'
          break;
          case 'ISREGEX' : 
            operand = 'REGEXP'
            break;
          case 'ISNOT' : 
          operand = 'NOT'
          break;
          case 'ISNOTNULL' : 
          operand = 'IS NOT NULL'
          break;
          case 'ISNULL' : 
          operand = 'IS NULL'
          break;
          default: 
            operand = '='
        }
        leftoperand = multiCon ? conList[3] : conList[2]
        }
        match ? condition += `${conList[0]}` : multiCon ? condition += ` ${conList[0]} ${conList[1]} ${operand} '${leftoperand}' `
      : condition += `${conList[0]} ${operand} '${leftoperand}' `*/

    });
    console.log('THE search FROM CONDITION');
    console.log(_condition2);
    return _condition2.trim();
  }
};
var searchStatement = function searchStatement(options) {
  console.log('THE search OPTIONSSTATEMENT');
  console.log(options);
  var self = this;
  var contains = self.pao.pa_contains;
  if (!options) return null;

  if (contains(options, 'length')) {
    var sqlAttribs = {};
    sqlAttribs.attribs = {
      from: options.from,
      tables: options.tables
    };
    console.log('THE OPTIONS LENGTH');
    console.log(options.length);
    var _limit2 = ' ';

    var _sort2 = options.sort ? self.sort(options.sort) : ' ';

    options.take ? _limit2 = self.limit(options.take, 'take') : options.range ? _limit2 = self.limit(options.range, 'range') : ' ';

    switch (options.length) {
      case 3:
        sqlAttribs.statement = "SELECT ".concat(options.fields, "\n                FROM ??\n                JOIN ??\n                  ON ").concat(options.joinPoints[0], "\n                JOIN ??\n                  ON ").concat(options.joinPoints[1], "\n                WHERE ").concat(options.from.condition, "\n                ").concat(_sort2, "\n                ").concat(_limit2, "\n                \n                ");
        break;

      case 4:
        sqlAttribs.statement = "SELECT ".concat(options.fields, "\n                FROM ").concat(options.from.table, "\n                JOIN ").concat(options.tables[0], "\n                  ON ").concat(options.joinPoints[0], "\n                JOIN ").concat(options.tables[1], "\n                  ON ").concat(options.joinPoints[1], "\n                JOIN ").concat(options.tables[2], "\n                  ON ").concat(options.joinPoints[2], "\n                WHERE ").concat(options.from.condition, "\n                ").concat(_sort2, "\n                ").concat(_limit2, "\n                ");
        break;

      case 5:
        sqlAttribs.statement = "SELECT ".concat(options.fields, "\n                FROM ").concat(options.from.table, "\n                JOIN ").concat(options.tables[0], "\n                  ON ").concat(options.joinPoints[0], "\n                JOIN ").concat(options.tables[1], "\n                  ON ").concat(options.joinPoints[1], "\n                JOIN ").concat(options.tables[2], "\n                  ON ").concat(options.joinPoints[2], " \n                JOIN ").concat(options.tables[3], "\n                  ON ").concat(options.joinPoints[3], "\n                WHERE ").concat(options.from.condition, "\n                ").concat(_sort2, "\n                ").concat(_limit2, "\n                ");
        break;

      default:
        sqlAttribs.statement = "SELECT ".concat(options.fields, "\n                FROM  ??\n                JOIN  ").concat(options.tables[0], "\n                  ON ").concat(options.joinPoints[0], "\n                WHERE ").concat(options.from.condition, "\n                ").concat(_sort2, "\n                ").concat(_limit2, "\n              ");
    }

    return sqlAttribs;
  } else {
    var _sqlAttribs4 = {};
    _sqlAttribs4.attribs = {
      from: options.from
    };
    var _limit3 = ' ';

    var _sort3 = options.sort ? self.sort(options.sort) : ' ';

    options.take ? _limit3 = self.limit(options.take, 'take') : options.range ? _limit3 = self.limit(options.range, 'range') : ' ';

    if (contains(options.from, 'condition')) {
      _sqlAttribs4.statement = "SELECT ".concat(options.fields, "\n              FROM  ??\n              WHERE ").concat(options.from.condition, "\n              ").concat(_sort3, "\n              ").concat(_limit3, "\n              ");
    } else {
      _sqlAttribs4.statement = "SELECT ".concat(options.fields, "\n                              FROM  ??\n                              ").concat(_sort3, "\n                              ").concat(_limit3, "\n                              ");
    }

    return _sqlAttribs4;
  }
};
var searchOptions = function searchOptions(i) {
  var multiSet = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  var self = this;
  var pao = self.pao;
  var contains = pao.pa_contains;
  var setTables = '';
  setTables = multiSet ? _toConsumableArray(i.tables) : '';
  self.log('THE search BATCH ITEM');
  self.log(i);
  console.log(i);

  if (contains(i, ['joins', 'conditions', 'joinPoints'])) {
    console.log('THE SEARCH ITEM CONTAINS BOTH JOINS,CONDITIONS, AND JOINPOINTS');
    var _options2 = {};
    _options2.from = {
      table: i.tables[0],
      condition: self.searchConditionsFormat(i.conditions)
    };
    _options2.joinPoints = i.joinPoints ? self.searchConditionsFormat(i.joinPoints, 'ON') : null;
    _options2.length = i.tables.length;
    _options2.tables = i.tables.splice(1, i.tables.length); //  contains(i,['returnFields','opiks']) ? options.fields = self.searchFieldsFormat(i.opiks,i.returnFields) : ''
    //  contains(i,'returnFields') ? i.returnFields.length === 1 && i.returnFields[0].trim() === 'all' ? options.fields='*' : options.fields= i.returnFields : ''
    //  contains(i,'opiks') ?  options.fields = self.searchFieldsFormat(i.opiks) : ''

    contains(i, ['returnFields', 'opiks']) ? _options2.fields = self.searchFieldsFormat(i.opiks, i.returnFields) : contains(i, 'opiks') ? _options2.fields = self.searchFieldsFormat(i.opiks) : contains(i, 'returnFields') ? i.returnFields.length === 1 && i.returnFields[0].trim() === 'all' ? _options2.fields = '*' : _options2.fields = i.returnFields : '';
    contains(i, 'type') ? _options2.type = i.type : '';
    contains(i, 'take') ? _options2.take = i.take : '';
    contains(i, 'range') ? _options2.range = i.range : '';
    contains(i, 'soundex') ? _options2.soundex = i.soundex : '';
    contains(i, 'sort') ? _options2.sort = i.sort : '';
    contains(i, 'set') ? _options2.set = multiSet ? self.set(i.set, setTables) : self.set(i.set) : ''; //  contains(i,'takeFrom') ? options.takeFrom = i.takeFrom : '' 

    contains(i, 'takeFrom') ? i.takeFrom.conditions ? (_options2.takeFrom = i.takeFrom, _options2.takeFrom.condition = self.searchConditionsFormat(i.takeFrom.conditions)) : _options2.takeFrom = i.takeFrom : '';
    return _options2;
  } else if (contains(i, ['conditions'])) {
    var _options3 = {};
    _options3.from = {
      table: i.tables[0],
      condition: self.searchConditionsFormat(i.conditions)
    }; // contains(i,['returnFields','opiks']) ? options.fields = self.searchFieldsFormat(i.opiks,i.returnFields) : ''
    // contains(i,'returnFields') ? i.returnFields.length === 1 && i.returnFields[0].trim() === 'all' ? options.fields='*' : options.fields= i.returnFields : ''
    // contains(i,'opiks') ?  options.fields = self.searchFieldsFormat(i.opiks) : ''

    contains(i, ['returnFields', 'opiks']) ? _options3.fields = self.searchFieldsFormat(i.opiks, i.returnFields) : contains(i, 'opiks') ? _options3.fields = self.searchFieldsFormat(i.opiks) : contains(i, 'returnFields') ? i.returnFields.length === 1 && i.returnFields[0].trim() === 'all' ? _options3.fields = '*' : _options3.fields = i.returnFields : '';
    contains(i, 'type') ? _options3.type = i.type : '';
    contains(i, 'take') ? _options3.take = i.take : '';
    contains(i, 'range') ? _options3.range = i.range : '';
    contains(i, 'soundex') ? _options3.soundex = i.soundex : '';
    contains(i, 'sort') ? _options3.sort = i.sort : '';
    contains(i, 'set') ? _options3.set = multiSet ? self.set(i.set, setTables) : self.set(i.set) : '';
    contains(i, 'takeFrom') ? i.takeFrom.conditions ? (_options3.takeFrom = i.takeFrom, _options3.takeFrom.condition = self.searchConditionsFormat(i.takeFrom.conditions)) : _options3.takeFrom = i.takeFrom : '';
    return _options3;
  } else if (contains(i, 'tables') && i.tables instanceof Array) {
    var _options4 = {};
    _options4.from = {
      table: i.tables[0]
    };
    contains(i, ['returnFields', 'opiks']) ? _options4.fields = self.searchFieldsFormat(i.opiks, i.returnFields) : contains(i, 'opiks') ? _options4.fields = self.searchFieldsFormat(i.opiks) : contains(i, 'returnFields') ? i.returnFields.length === 1 && i.returnFields[0].trim() === 'all' ? _options4.fields = '*' : _options4.fields = i.returnFields : ''; // contains(i,'opiks') ?  options.fields = self.searchFieldsFormat(i.opiks) : ''

    contains(i, 'type') ? _options4.type = i.type : '';
    contains(i, 'take') ? _options4.take = i.take : '';
    contains(i, 'range') ? _options4.range = i.range : '';
    contains(i, 'soundex') ? _options4.soundex = i.soundex : '';
    contains(i, 'sort') ? _options4.sort = i.sort : '';
    contains(i, 'set') ? _options4.set = multiSet ? self.set(i.set, setTables) : self.set(i.set) : '';
    contains(i, 'takeFrom') ? i.takeFrom.conditions ? (_options4.takeFrom = i.takeFrom, _options4.takeFrom.condition = self.searchConditionsFormat(i.takeFrom.conditions)) : _options4.takeFrom = i.takeFrom : '';
    return _options4;
  } else {
    return null;
  }
};
var searchFieldsFormat = function searchFieldsFormat(fields) {
  var rFields = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  console.log('THE SELECT STATEMENT OPIKS OBJECT');
  console.log(fields);
  console.log(rFields);
  var self = this;
  var contains = self.pao.pa_contains;
  var fis = fields;
  var keyword = '';
  var otherFields = rFields ? rFields.join(',') : '';
  var all = '';
  var fieldstatement = '';
  var multiFields = [];
  var allFields = otherFields.indexOf('all') >= 0;
  var lastCondition = false;
  console.log('THE OTHER FIELDS');
  console.log(otherFields);
  console.log(otherFields.indexOf('all') >= 0);

  for (var fi = 0; fi < fis.length; fi++) {
    if (fis[fi].indexOf('fuxin') >= 0 || fis[fi].indexOf('field') >= 0) {
      multiFields.push(true);
    }

    if (multiFields.length > 1) {
      break;
    }
  }

  fis.forEach(function (f, i) {
    var formated = self.fieldFormat(f);

    if (formated instanceof Object) {
      keyword = formated.value.toUpperCase();
    } else {
      console.log('THE FORMATED');
      console.log(formated);
      console.log(allFields);
      console.log(otherFields);

      if (i === fis.length - 1) {
        lastCondition = true;
      }

      fieldstatement += allFields ? multiFields && i !== fis.length - 1 ? "".concat(formated, ",") : formated : lastCondition && rFields === null ? "".concat(formated) : "".concat(formated, ",");
    }
  });
  allFields === true ? all = '*,' : '';
  return allFields ? "".concat(all, " ").concat(keyword, " ").concat(fieldstatement) : "".concat(all, " ").concat(keyword, " ").concat(fieldstatement, " ").concat(otherFields);
};
var fieldFormat = function fieldFormat(field) {
  var from = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  console.log('THE SELECT STATEMENT OPIKS OBJECT FIELD FORMAT');
  console.log(field);
  var self = this;
  var contains = self.pao.pa_contains; //  let splitFieldRegx = /\.(?![^\[]]*\]])/ 

  var nestedIntFuxin = '';
  var last = field.lastIndexOf('.as') >= 0 ? field.lastIndexOf('.as') : field.length;
  field.indexOf('.options[fuxin') >= 0 ? nestedIntFuxin = field.slice(field.indexOf('.options[fuxin'), last) : '';
  console.log('THE NESTEDINTFUXIN');
  console.log(nestedIntFuxin);
  console.log(field);
  nestedIntFuxin.trim() !== '' ? field = field.substr(0, field.indexOf(nestedIntFuxin)) : ''; // nestedIntFuxin.trim() !== '' ? field =  : '' 
  // let splicedArray = conList.splice(2)
  // console.log('THE SPLICED ARRAY')
  // console.log(splicedArray)
  // console.log(splicedArray.join(' '))
  // conList[2] = splicedArray.join(' ');
  // console.log(conList)
  // console.log(conList[2].indexOf('['))
  //  let fieldList = field.trim().split('.')
  //  fieldList.length > 3 ? fieldList[3].indexOf('as[') < 0 ? fieldList[2] = fieldList.splice(2).join(' ') : '' : ''

  var fieldList = field.trim().split('.');
  nestedIntFuxin.trim() !== '' ? fieldList.push(nestedIntFuxin) : '';
  console.log('THE FIELD LIST');
  console.log(fieldList);
  var fieldstatement = null; //fuxin.date_sub.options[fuxin.now,INTERVAL ${intExp} ${intUnit}]

  var as = fieldList[0] === 'fuxin' ? fieldList.length > 3 ? "AS ".concat(self.options("".concat(fieldList[3]), 'as')) : ' ' : ' ';
  console.log('THE as');
  console.log(as);

  switch (fieldList[0]) {
    case 'keyword':
      fieldstatement = from ? fieldList[1].toUpperCase() : {
        statement: 'keyword',
        value: fieldList[1].toUpperCase()
      };
      break;

    case 'fuxin':
      fieldstatement = " ".concat(fieldList[1].toUpperCase(), "(").concat(self.options("".concat(fieldList[2]), 'option'), ") ").concat(as, " ");
      break;

    case 'field':
      if (fieldList.length === 3) fieldstatement = "".concat(fieldList[1], " AS ").concat(self.options(fieldList[2], 'as'));
      break;

    default:
      fieldstatement = '';
  }

  return fieldstatement.trim();
};
var options = function options(option) {
  var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  var self = this;
  var contains = self.pao.pa_contains;
  console.log('THE CURRENT OPTION');
  console.log(option);

  if (option !== 'undefined') {
    var stripedOption = option.slice(option.indexOf('[') + 1, option.lastIndexOf(']'));
    console.log('OPTIONS: STRIPEDOPTION');
    console.log(stripedOption);

    if (type === 'as') {
      return "".concat(stripedOption);
    } else if (type === 'option') {
      var args = stripedOption.split(',');

      if (args instanceof Array && args.length > 1) {
        if (args[0].indexOf('keyword') >= 0) {
          return self.fieldFormat(args[0], true);
        } else if (args[0].indexOf('fuxin') >= 0) {
          if (args[1]) {
            return "".concat(self.fieldFormat(args[0]), ",").concat(args[1].trim());
          } else {
            return self.fieldFormat(args[0]);
          }
        } else {
          return "".concat(stripedOption);
        }
      } else {
        return args.join(',');
      }
    }
  } else {
    console.log('THE OPTION IS UNDEFINED');
    console.log(option);
    return '';
  }
};
var sort = function sort(_sort4) {
  console.log('THE SORT GOT A RESPONSE');
  console.log(_sort4);

  var sortArgs = _sort4.split('.');

  var sortFields = _sort4.slice(_sort4.indexOf('[') + 1, _sort4.lastIndexOf(']'));

  var sortStatement = '';

  if (sortArgs[0].indexOf('order') >= 0) {
    if (sortArgs.length > 1) {
      if (sortArgs[1].toUpperCase() === 'DESC') {
        sortStatement = "ORDER BY ".concat(sortFields, " DESC");
      } else {
        sortStatement = "ORDER BY ".concat(sortFields);
      }
    } else {
      sortStatement = "ORDER BY ".concat(sortFields);
    }
  } else if (sortArgs[0].indexOf('group') >= 0) {
    if (sortArgs.length > 1) {
      if (sortArgs[1].toUpperCase() === 'DESC') {
        sortStatement = "GROUP BY ".concat(sortFields, " DESC");
      } else {
        sortStatement = "GROUP BY ".concat(sortFields, " ASC");
      }
    } else {
      sortStatement = "GROUP BY ".concat(sortFields, " ASC");
    }
  }

  return sortStatement;
};
var limit = function limit(_limit4) {
  var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  var limitStatement = '';

  if (type === 'take') {
    limitStatement = "LIMIT ".concat(_limit4);
  } else if (type === 'range') {
    var ranges = _limit4.split(',');

    var offset = ranges[0];
    var count = ranges[1];
    limitStatement = "LIMIT ".concat(count, " OFFSET ").concat(offset);
  }

  return limitStatement;
};
var parseGroup = function parseGroup(con) {
  var level = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  var self = this;
  var pao = self.pao;
  var isObject = pao.pa_isObject; //AND GROUP::2 START created_at FUXIN [ISGREATEROREQUALS fuxin.date_sub.options[fuxin.now,INTERVAL ${intExp} ${intUnit}]]

  var fullCon = '';
  var connector = '';
  var res = self.conditionsConnector(con);
  console.log('THE RES VALUE');
  console.log(res);

  if (isObject(res)) {
    console.log('THE RES IS AN OBJECT');
    console.log(res);
    con = res.condixion;
    connector = res.connector;
  }

  if (con.trim().indexOf('GROUP::') === 0) {
    console.log('THE GROUP:: string is the first'); //let groupRegx = /GROUP::/

    var exStr = con.replace('GROUP::', '').trim();
    var groupLen = 0;
    var startStr = '';
    var conStr = '';
    console.log('THE extracted string');
    console.log(exStr);

    if (typeof parseInt(exStr[0]) === 'number') {
      console.log('extStr type is a number');
      groupLen = parseInt(exStr[0]);
      startStr = exStr.slice(1).trim();

      if (startStr.indexOf('START') === 0 || startStr.indexOf('$') === 0) {
        conStr = startStr.replace('START', '').trim();
        console.log(startStr);
        var groupCons = ''; //  let groupL1Cons = ''
        //  let groupL2Cons = ''
        //  let groupL3Cons = ''

        var grouped = [];
        console.log('PARSEGROUP EXECUTES THIS FAR');
        console.log(conStr);

        if (level === 1) {
          groupCons = conStr.split(';');
          console.log('LEVEL 1 GROUPCONS');
          console.log(groupCons);
          grouped = groupCons.map(function (c, i) {
            var connector = '';
            console.log('THE C CONDITION');
            console.log(c);
            console.log(c.indexOf('GROUP::')); //  self.conditionsConnector()

            if (c.indexOf('GROUP::') >= 0) {
              return self.parseGroup(c, 2);
            } else {
              return self.parseFormatCondition(c);
            }
          });
        } else if (level === 2) {
          groupCons = conStr.split(',');
          console.log('LEVEL 2 GROUPCONS');
          console.log(groupCons);
          grouped = groupCons.map(function (c, i) {
            // c = self.conditionsConnector(c)
            if (c.indexOf('GROUP::') >= 0) {
              return self.parseGroup(c, 3);
            } else {
              return self.parseFormatCondition(c);
            }
          });
        } else if (level === 3) {
          groupCons = conStr.split('|');
          grouped = groupCons.map(function (c, i) {
            return self.parseFormatCondition(c);
          });
        }

        console.log('GROUPED');
        console.log(grouped);
        console.log(groupCons);
        fullCon = "".concat(connector, " (").concat(grouped.join(' '), ")");
      } else {}
    }
  }

  console.log('THE FULL GROUPED CONDITION TO BE RETURNED:');
  console.log(fullCon);
  return fullCon;
};
var parseFormatCondition = function parseFormatCondition(con) {
  var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  var self = this;
  var pao = self.pao;

  if (type) {
    var cons = con;
    var condition = [];
    cons.forEach(function (kon, i) {
      // let conList = kon.trim().split(' ')
      var conList = kon.trim().match(/(\[[^\]]+\]|\S+)/g);
      var operand = '=';
      condition.push("".concat(conList[0], " ").concat(operand, " ").concat(conList[2]));
    });
    console.log('THE search ON CONDITION');
    console.log(condition);
    return condition;
  } else {
    var _condition3 = '';
    console.log('THE con ITEM');
    console.log(con); // let conList = con.trim().split(' ')
    // let conList = con.trim().match(/(?:"^\s\[]+|"[^"]*")+/g) 

    var conList = con.trim().match(/(\[[^\]]+\]|\S+)/g);
    console.log('THE CONLIST');
    console.log(conList);
    var operand = '';
    var leftoperand = '';
    var multiCon = false;
    var match = false;
    var conFuxin = false;
    var whiteSpace = ' ';

    if (conList[0].trim() === 'MATCH' || conList[1].trim() === 'MATCH' || conList[1].trim() === 'FUXIN' || conList[2].trim() === 'FUXIN') {
      if (conList.indexOf('AGAINST') > 0 && conList.length >= 5) {
        var oCon = conList.slice(0);
        console.log('THE O CON');
        console.log(oCon);
        multiCon = oCon[0].trim().toUpperCase() !== 'MATCH' ? true : false;
        var matchFields = '';
        var matchKeys = '';

        if (multiCon) {
          matchFields = oCon[2].trim();
          matchKeys = oCon[4].trim();
        } else {
          matchFields = oCon[1].trim();
          matchKeys = oCon[3].trim();
        }

        matchFields[0] === '[' ? matchFields = matchFields.slice(1, matchFields.length - 1) : '';
        matchKeys[0] === '[' ? matchKeys = matchKeys.slice(1, matchKeys.length - 1) : '';
        console.log('THE MATCH FIELDS');
        console.log(matchFields);
        var op = '';
        operand = multiCon ? oCon[3].trim() : oCon[2].trim();
        var mode = multiCon ? oCon[5] : oCon[4];

        switch (mode) {
          case 'BOOLEAN':
            op = "AGAINST (\"".concat(matchKeys, "\"\" IN BOOLEAN MODE) ");
            break;

          case 'QUERY':
            op = "AGAINST (\"".concat(matchKeys, "\" IN QUERY EXPRESSION MODE) ");
            break;

          default:
            op = "AGAINST (\"".concat(matchKeys, "\" IN NATURAL LANGUAGE MODE) ");
        }

        conList[0] = multiCon ? "".concat(oCon[0], " MATCH (").concat(matchFields, ") ").concat(op) : "MATCH (".concat(matchFields, ") ").concat(op); //  leftoperand = ` ${op}`

        match = true;
      } else {
        //[ISGREATEROREQUALS fuxin.date_sub.options[fuxin.now,INTERVAL ${intExp} ${intUnit}]] 
        //created_at FUXIN [ISGREATEROREQUALS fuxin.date_sub.options[fuxin.now,INTERVAL ${intExp} ${intUnit}]]
        var _oCon = conList.slice(0);

        conFuxin = true;
        console.log('THE O CON::FUXIN');
        console.log(_oCon);
        multiCon = _oCon[1].trim().toUpperCase() !== 'FUXIN' ? true : false;
        var fuxinIndex = multiCon ? 3 : 2;

        var splicedFuxinArr = _oCon.splice(fuxinIndex);

        _oCon.push(splicedFuxinArr.join(' '));

        console.log(fuxinIndex);
        console.log(_oCon); //  console.log(splicedFuxinArr)
        // if(oCon.indexOf('FUXIN') > 0){
        //   console.log('THE FUXIN OP IN SEARCHCONDITIONS')
        //   console.log(oCon) 
        //   let splicedArray = multiCon ? oCon.splice(3) : oCon.splice(2)
        //   console.log('THE SPLICED ARRAY')
        //   console.log(splicedArray)
        //   console.log(splicedArray.join(' '))
        //   multiCon ? oCon[3] = splicedArray.join(' ') : oCon[2] = splicedArray.join(' ');
        //   console.log(oCon)
        //   console.log(oCon[2].indexOf('['))
        //   // throw new Error()

        if (_oCon[fuxinIndex].indexOf('[') >= 0) {
          console.log('OTHER CONTENT IS IN THE SQUARE BRACKETS');

          var stripedSqBkts = _oCon[fuxinIndex].slice(1, _oCon[fuxinIndex].length - 1);

          stripedSqBkts = stripedSqBkts.trim(); // let splitRegex = /([.*?])/g

          console.log('AFTER THE STRIPED HAS BEEN TRIMMED');
          console.log(stripedSqBkts);
          var operator = stripedSqBkts.substr(0, stripedSqBkts.indexOf(' '));
          var functionalStr = stripedSqBkts.substr(stripedSqBkts.indexOf(' ') + 1);
          console.log('THE SPLITFUXINCONS');
          console.log(operator);
          console.log(functionalStr);
          var gotOperand = self.getOperand(operator);
          var bakedFuxin = self.fieldFormat(functionalStr);
          console.log(gotOperand);
          console.log(bakedFuxin); // throw new Error()

          _condition3 = multiCon ? "".concat(_oCon[0], " ").concat(_oCon[1], " ").concat(gotOperand, " ").concat(bakedFuxin) : "".concat(_oCon[0], " ").concat(gotOperand, " ").concat(bakedFuxin);
          console.log('THE CONDITION IN FUXIN TEST');
          console.log(_condition3);
        } // }

      }
    } else {
      var _oCon2 = conList.slice(0);

      console.log('THE O CON');
      console.log(_oCon2);

      var firstStrItem = _oCon2[0].trim().toUpperCase();

      multiCon = firstStrItem === 'AND' || firstStrItem === 'OR' || firstStrItem === 'NOT' ? true : false;

      var _operator = multiCon ? conList[2] : conList[1];

      console.log('THE MULTICON STATUS:::');
      console.log(multiCon);
      console.log(_oCon2);
      operand = self.getOperand(_operator); // switch(operator){
      //   case 'EQUALS' : 
      //     operand = '='
      //     break;
      //   case 'ISGREATEROREQUALS' : 
      //     operand = '>='
      //     break;
      //   case 'ISLESSOREQUALS' : 
      //     operand = '<='
      //     break;
      //   case 'ISLIKE' : 
      //     operand = 'LIKE'
      //     break;
      //   case 'ISIN' : 
      //   operand = 'IN'
      //   break;
      //   case 'ISREGEX' : 
      //     operand = 'REGEXP'
      //     break;
      //   case 'ISNOT' : 
      //   operand = 'NOT'
      //   break;
      //   case 'ISNOTNULL' : 
      //   operand = 'IS NOT NULL'
      //   break;
      //   case 'ISNULL' : 
      //   operand = 'IS NULL'
      //   break;
      //   default: 
      //     operand = '='
      // }

      leftoperand = multiCon ? conList[3] : conList[2];
      leftoperand[0] === '[' ? leftoperand = "'".concat(leftoperand.slice(1, leftoperand.length - 1), "'") : leftoperand.indexOf('KEY::') >= 0 ? leftoperand = "".concat(leftoperand.replace('KEY::', '').trim()) : leftoperand = "'".concat(leftoperand, "'");
      console.log('THE VALUE OF THE LEFFFFFT OPERAND');
      console.log(leftoperand);
      console.log(leftoperand.indexOf('KEY::'));
    }

    if (!conFuxin) {
      match ? _condition3 += "".concat(conList[0]) : multiCon ? _condition3 += "".concat(whiteSpace, " ").concat(conList[0], " ").concat(conList[1], " ").concat(operand, " ").concat(leftoperand) : _condition3 += "".concat(conList[0], " ").concat(operand, " ").concat(leftoperand);
    }

    console.log('THE search FROM CONDITION');
    console.log(_condition3);
    return _condition3;
  }
};
var getOperand = function getOperand(operator) {
  var operand = '';

  switch (operator) {
    case 'EQUALS':
      operand = '=';
      break;

    case 'ISGREATEROREQUALS':
      operand = '>=';
      break;

    case 'ISLESSOREQUALS':
      operand = '<=';
      break;

    case 'ISLIKE':
      operand = 'LIKE';
      break;

    case 'ISIN':
      operand = 'IN';
      break;

    case 'ISREGEX':
      operand = 'REGEXP';
      break;

    case 'ISNOT':
      operand = 'NOT';
      break;

    case 'ISNOTNULL':
      operand = 'IS NOT NULL';
      break;

    case 'ISNULL':
      operand = 'IS NULL';
      break;

    default:
      operand = '=';
  }

  return operand;
};
var conditionsConnector = function conditionsConnector(c) {
  var connector = {};
  console.log('THE INDEX OF GROUP:: IN CONDITIONS CONNECTOR');
  console.log(c.trim().indexOf('GROUP::'));
  console.log(c);

  if (c.trim().indexOf('GROUP::') > 0) {
    console.log('THE INDEX OF GROUP IS AT ONE');

    if (c.trim().indexOf('AND') === 0) {
      connector.connector = " AND";
      connector.condixion = c.replace('AND', '').trim();
    } else if (c.trim().indexOf('OR') === 0) {
      connector.connector = " OR";
      connector.condixion = c.replace('OR', '').trim();
    } else if (c.trim().indexOf('NOT') === 0) {
      connector.connector = " NOT";
      connector.condixion = c.replace('NOT', '').trim();
    }

    return connector;
  } else {
    return c;
  }
};
var set = function set(_set) {
  var multiSets = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  var self = this;
  var pao = self.pao;
  var objectToArray = pao.pa_objectToArray;
  self.log('THE SET');
  self.log(_set);
  self.log(multiSets);
  var setStrings = '';

  _set.forEach(function (s, i) {
    var setString = '';
    var modSet = objectToArray(s, true);
    console.log('THE CONVERTED SET OBJECT');
    console.log(modSet);
    modSet.forEach(function (col, pos) {
      multiSets ? setString += pos === modSet.length - 1 ? "".concat(multiSets[i], ".").concat(col.key, " = \"").concat(col.value, "\"") : "".concat(multiSets[i], ".").concat(col.key, " = \"").concat(col.value, "\", ") : setString += pos === modSet.length - 1 ? "".concat(col.key, " = \"").concat(col.value, "\"") : "".concat(col.key, " = \"").concat(col.value, "\", ");
    });
    setStrings += i === _set.length - 1 ? "".concat(setString) : "".concat(setString, ", "); // let key = ''
    // let value = ''
    // key = Object.keys(s)[0]
    // value = s[Object.keys(s)[0]]
    // console.log('THE LENGTH OF S')
    // console.log(set.length)
    // console.log(i)
    // setString += i === set.length - 1 ? `${key} = "${value}"` : `${key} = "${value}", `
  });

  console.log('THE SETSTRINGS');
  console.log(setStrings);
  return setStrings;
};

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("crypto");

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(9);
module.exports = __webpack_require__(10);


/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("@babel/polyfill");

/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__server_serverdev__ = __webpack_require__(11);

Object(__WEBPACK_IMPORTED_MODULE_0__server_serverdev__["a" /* default */])();

/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__lib_anzii__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__init_modules__ = __webpack_require__(73);

 // import Server from '../shared/modules/server/index'

/* harmony default export */ __webpack_exports__["a"] = (function () {
  console.log('THE SERVER IS RUNNNING'); // console.log(Components)
  // console.log('The typeof Components')
  // console.log(Components instanceof Array)
  // console.log('The server Module')
  // console.log(Server)
  // Components.unshift({Server})
  // let html = true

  __WEBPACK_IMPORTED_MODULE_0__lib_anzii__["a" /* default */].Activate([__WEBPACK_IMPORTED_MODULE_1__init_modules__["a" /* default */]]);
}); // export default server

/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__base__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__esm_esm__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__base_activate__ = __webpack_require__(72);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }





var Anzii = function Anzii() {
  _classCallCheck(this, Anzii);

  // console.log(Activator.Activate)
  // console.log(Base.SUKU)
  var self = self;
  this.ANZII = __WEBPACK_IMPORTED_MODULE_0__base__["a" /* default */];
  this.ESM = __WEBPACK_IMPORTED_MODULE_1__esm_esm__["a" /* default */];
  this.Activate = __WEBPACK_IMPORTED_MODULE_2__base_activate__["a" /* Activate */]; // this.DomLoaded = Base.SUKU.domLoaded.bind(this.SANA.SUKU)
  // this.Html = Base.SUKUS.html.bind(this.SANA.SUKUS)
};

/* harmony default export */ __webpack_exports__["a"] = (new Anzii());

/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pillar_pillar__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pillar_pillar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__pillar_pillar__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__base_core__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__base_pao__ = __webpack_require__(20);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }





var Base = function Base() {
  _classCallCheck(this, Base);

  this.CORE = __WEBPACK_IMPORTED_MODULE_1__base_core__["a" /* default */], this.PAO = __WEBPACK_IMPORTED_MODULE_2__base_pao__["a" /* default */], this.PILLAR = __WEBPACK_IMPORTED_MODULE_0__pillar_pillar___default.a;
};

/* harmony default export */ __webpack_exports__["a"] = (new Base());

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

function _createForOfIteratorHelper(o) { if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) { var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var it, normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

// DEPENDECIES 
var os = __webpack_require__(2);

var util = __webpack_require__(15);

var async = __webpack_require__(16);

var extend = __webpack_require__(17);

var fs = __webpack_require__(3);

var path = __webpack_require__(0);

var uuid = __webpack_require__(18);
/*@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@



		Library 	 : Pillar
		Version 	 : 1.0.0
		Author		 : Anzii organisation
		Website		 : www.anzii.com
		Date Created : 23/08/2019


@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@*/


module.exports = {
  EMAIL: '',
  PASSWORD: '',
  p_o_freeze: function p_o_freeze(o) {
    if (!(o instanceof Object)) return null;
    return Object.freeze(o);
  },
  p_clone: function p_clone(o) {
    if (!(o instanceof Object)) return null;
    return JSON.parse(JSON.stringify(o));
  },

  /**
   * Performs a deep merge and returns the result.  <b>NOTE:</b> DO NOT ATTEMPT
   * TO MERGE PROPERTIES THAT REFERENCE OTHER PROPERTIES.  This could have
   * unintended side-effects as well as cause errors due to circular dependencies.
   * @static
   * @method deepMerge
   * @param {Object} from
   * @param {Object} to
   * @return {Object}
   */
  p_deepMerge: function p_deepMerge(from, to) {
    return extend(true, to, from);
  },

  /**
   * Checks if the supplied object is an errof. If the object is an error the
   * function will throw the error.
   * @static
   * @method ane
   * @param {Object} obj The object to check
   */
  p_ane: function p_ane(obj) {
    if (util.isError(obj)) {
      throw obj;
    }
  },

  /**
   * Initializes an array with the specified number of values.  The value at each
   * index can be static or a function may be provided.  In the event that a
   * function is provided the function will be called for each item to be placed
   * into the array.  The return value of the function will be placed into the
   * array.
   * @static
   * @method initArray
   * @param {Integer} cnt The length of the array to create
   * @param {Function|String|Number} val The value to initialize each index of
   * the array
   * @return {Array} The initialized array
   */
  p_initArray: function p_initArray(cnt, val) {
    var v = [];
    var isFunc = this.p_isFunction(val);

    for (var i = 0; i < cnt; i++) {
      v.push(isFunc ? val(i) : val);
    }

    return v;
  },

  /**
   * Escapes a regular expression.
   * @deprecated since 0.7.1 Will be removed in 1.0.  Use RegExpUtils
   * @static
   * @method escapeRegExp
   * @param {String} The expression to escape
   * @return {String} Escaped regular expression.
   */
  p_escapeRegExp: function p_escapeRegExp(str) {
    return RegExpUtils.escape(str);
  },

  /**
   * Merges the properties from the first parameter into the second. This modifies
   * the second parameter instead of creating a new object.
   *
   * @method merge
   * @param {Object} from
   * @param {Object} to
   * @return {Object} The 'to' variable
   */
  p_merge: function p_merge(from, to) {
    p_forEach(from, function (val, propName) {
      to[propName] = val;
    });
    return to;
  },

  /**
   * Creates an object that has both the properties of "a" and "b".  When both
   * objects have a property with the same name, "b"'s value will be preserved.
   * @static
   * @method union
   * @return {Object} The union of properties from both a and b.
   */
  p_union: function p_union(a, b) {
    var union = {};
    p_merge(a, union);
    p_merge(b, union);
    return union;
  },

  /**
   * Creates a set of tasks that can be executed by the "async" module.
   * @static
   * @method getTasks
   * @param {Array} iterable The array of items to build tasks for
   * @param {Function} getTaskFunction The function that creates and returns the
   * task to be executed.
   * @example
   * <code>
   * var items = ['apple', 'orange'];
   * var tasks = util.getTasks(items, function(items, i) {
   *     return function(callback) {
   *         console.log(items[i]);
   *         callback(null, null);
   *     },
   * });
   * async.series(tasks, util.cb);
   * <code>
   */
  p_getTasks: function p_getTasks(iterable, getTaskFunction) {
    var tasks = [];

    for (var i = 0; i < iterable.length; i++) {
      tasks.push(getTaskFunction(iterable, i));
    }

    return tasks;
  },

  /**
   * Wraps a function in an anonymous function.  The wrapper function will call
   * the wrapped function with the provided context.  This comes in handy when
   * creating your own task arrays in conjunction with the async function when a
   * prototype function needs to be called with a specific context.
   * @static
   * @method wrapTask
   * @param {*} context The value of "this" for the function to be called
   * @param {Function} func The function to be executed
   * @param {Array} [argArray] The arguments to be supplied to the func parameter
   * when executed.
   * @return {Function}
   */
  p_wrapTask: function p_wrapTask(context, func, argArray) {
    if (!util.isArray(argArray)) {
      argArray = [];
    }

    return function (callback) {
      argArray.push(callback);
      func.apply(context, argArray);
    };
  },

  /**
   * Wraps a task in a context as well as a function to mark the start and end time.  The result of the task will be
   * provided in the callback as the "result" property of the result object.  The time of execution can be found as the
   * "time" property.
   * @static
   * @method wrapTimedTask
   * @param {*} context The value of "this" for the function to be called
   * @param {Function} func The function to be executed
   * @param {string} [name] The task's name
   * @param {Array} [argArray] The arguments to be supplied to the func parameter
   * when executed.
   * @return {Function}
   */
  p_wrapTimedTask: function p_wrapTimedTask(context, func, name, argArray) {
    if (p_isString(argArray)) {
      name = argArray;
      argArray = [];
    }

    var task = p_wrapTask(context, func, argArray);
    return function (callback) {
      var start = Date.now();
      task(function (err, result) {
        callback(err, {
          result: result,
          time: Date.now() - start,
          start: start,
          name: name
        });
      });
    };
  },

  /**
   * Provides an implementation of for each that accepts an array or object.
   * @static
   * @method forEach
   * @param {Object|Array} iterable
   * @param {Function} handler A function that accepts 4 parameters.  The value
   * of the current property or index.  The current index (property name if object).  The iterable.
   * Finally, the numerical index if the iterable is an object.
   */
  p_forEach: function p_forEach(iterable, handler) {
    var internalHandler;
    var internalIterable;

    if (util.isArray(iterable)) {
      internalHandler = handler;
      internalIterable = iterable;
    } else if (p_isObject(iterable)) {
      internalIterable = Object.getOwnPropertyNames(iterable);

      internalHandler = function internalHandler(propName, i) {
        handler(iterable[propName], propName, iterable, i);
      };
    } else {
      return false;
    } //execute native foreach on interable


    internalIterable.forEach(internalHandler);
  },

  /**
   * Hashes an array
   * @static
   * @method arrayToHash
   * @param {Array} array      The array to hash
   * @param {*} [defaultVal:true] Default value if the hashing fails
   * @return {Object} Hash
   */
  p_arrayToHash: function p_arrayToHash(array, defaultVal) {
    if (!util.isArray(array)) {
      return null;
    } //set the default value


    if (p_isNullOrUndefined(defaultVal)) {
      defaultVal = true;
    }

    var hash = {};

    for (var i = 0; i < array.length; i++) {
      if (this.p_isFunction(defaultVal)) {
        hash[defaultVal(array, i)] = array[i];
      } else {
        hash[array[i]] = defaultVal;
      }
    }

    return hash;
  },
  p_unikify: function p_unikify(array) {
    var a = array.concat();

    for (var i = 0; i < a.length; ++i) {
      for (var j = i + 1; j < a.length; ++j) {
        if (a[i] === a[j]) a.splice(j--, 1);
      }
    }

    return a;
  },

  /**
   * Converts an array to an object.
   * @static
   * @method arrayToObj
   * @param {Array} array The array of items to transform from an array to an
   * object
   * @param {String|Function} keyFieldOrTransform When this field is a string it
   * is expected that the array contains objects and that the objects contain a
   * property that the string represents.  The value of that field will be used
   * as the property name in the new object.  When this parameter is a function
   * it is passed two parameters: the array being operated on and the index of
   * the current item.  It is expected that the function will return a value
   * representing the key in the new object.
   * @param {String|Function} [valFieldOrTransform] When this value is a string
   * it is expected that the array contains objects and that the objects contain
   * a property that the string represents.  The value of that field will be used
   * as the property value in the new object.  When this parameter is a function
   * it is passed two parameters: the array being operated on and the index of
   * the current item.  It is expected that the function return a value
   * representing the value of the derived property for that item.
   * @return {Object} The converted array.
   */
  p_arrayToObj: function p_arrayToObj(array, keyFieldOrTransform, valFieldOrTransform) {
    if (!util.isArray(array)) {
      return null;
    }

    var keyIsString = p_isString(keyFieldOrTransform);
    var keyIsFunc = this.p_isFunction(keyFieldOrTransform);

    if (!keyIsString && !keyIsFunc) {
      return null;
    }

    var valIsString = p_isString(valFieldOrTransform);
    var valIsFunc = this.p_isFunction(valFieldOrTransform);

    if (!valIsString && !valIsFunc) {
      valFieldOrTransform = null;
    }

    var obj = {};

    for (var i = 0; i < array.length; i++) {
      var item = array[i];
      var key = keyIsString ? item[keyFieldOrTransform] : keyFieldOrTransform(array, i);

      if (valIsString) {
        obj[key] = item[valFieldOrTransform];
      } else if (valIsFunc) {
        obj[key] = valFieldOrTransform(array, i);
      } else {
        obj[key] = item;
      }
    }

    return obj;
  },

  /**
   * Converts an array of objects into a hash where the key the value of the
   * specified property. If multiple objects in the array have the same value for
   * the specified value then the last one found will be kept.
   * @static
   * @method objArrayToHash
   * @param {Array} array The array to convert
   * @param {String} hashProp The property who's value will be used as the key
   * for each object in the array.
   * @return {Object} A hash of the values in the array
   */
  p_objArrayToHash: function p_objArrayToHash(array, hashProp) {
    if (!util.isArray(array)) {
      return null;
    }

    var hash = {};

    for (var i = 0; i < array.length; i++) {
      hash[array[i][hashProp]] = array[i];
    }

    return hash;
  },

  /**
   * Converts a hash to an array. When provided, the hashKeyProp will be the
   * property name of each object in the array that holds the hash key.
   * @static
   * @method hashToArray
   * @param {Object} obj The object to convert
   * @param {String} [hashKeyProp] The property name that will hold the hash key.
   * @return {Array} An array of each property value in the hash.
   */
  p_hashToArray: function p_hashToArray(obj, hashKeyProp) {
    if (!p_isObject(obj)) {
      return null;
    }

    var doHashKeyTransform = p_isString(hashKeyProp);
    return Object.keys(obj).reduce(function (prev, prop) {
      prev.push(obj[prop]);

      if (doHashKeyTransform) {
        obj[prop][hashKeyProp] = prop;
      }

      return prev;
    }, []);
  },

  /**
   * Inverts a hash
   * @static
   * @method invertHash
   * @param {Object} obj Hash object
   * @return {Object} Inverted hash
   */
  p_invertHash: function p_invertHash(obj) {
    if (!p_isObject(obj)) {
      return null;
    }

    var new_obj = {};

    for (var prop in obj) {
      if (obj.hasOwnProperty(prop)) {
        new_obj[obj[prop]] = prop;
      }
    }

    return new_obj;
  },

  /**
   * Clones an array
   * @static
   * @method copyArray
   * @param {Array} array
   * @return {Array} Cloned array
   */
  p_copyArray: function p_copyArray(array) {
    if (!util.isArray(array)) {
      return null;
    }

    var clone = [];

    for (var i = 0; i < array.length; i++) {
      clone.push(array[i]);
    }

    return clone;
  },
  p_dedupeArray: function p_dedupeArray(array) {
    var hash = p_arrayToHash(array);
    return Object.keys(hash);
  },

  /**
   * Pushes all of one array's values into another
   * @static
   * @method arrayPushAll
   * @param {Array} from
   * @param {Array} to
   * @return {Boolean} FALSE when the parameters are not Arrays
   */
  p_arrayPushAll: function p_arrayPushAll(from, to) {
    if (!util.isArray(from) || !util.isArray(to)) {
      return false;
    }

    for (var i = 0; i < from.length; i++) {
      to.push(from[i]);
    }
  },

  /**
   * Empty callback function just used as a place holder if a callback is required
   * and the result is not needed.
   * @static
   * @method cb
   */
  p_cb: function p_cb()
  /*err, result*/
  {//do nothing
  },

  /**
   * Creates a unique Id
   * @static
   * @method uniqueId
   * @return {String} Unique Id Object
   */
  p_generateUniqueID: function p_generateUniqueID() {
    return uuid.v4();
  },

  /**
   * Tests if a value is an object
   * @static
   * @method isObject
   * @param {*} value
   * @return {Boolean}
   */
  p_isObject: function p_isObject(value) {
    var that = this;
    return !that.p_isNullOrUndefined(value) && _typeof(value) === 'object';
  },

  /**
   * Tests if a value is an string
   * @static
   * @method isString
   * @param {*} value
   * @return {Boolean}
   */
  p_isString: function p_isString(value) {
    var that = this;
    return !that.p_isNullOrUndefined(value) && typeof value === 'string';
  },

  /**
   * Tests if a value is a function
   * @static
   * @method isFunction
   * @param {*} value
   * @return {Boolean}
   */
  p_isFunction: function p_isFunction(value) {
    return !this.p_isNullOrUndefined(value) && typeof value === 'function';
  },

  /**
   * Tests if a value is NULL or undefined
   * @static
   * @method isNullOrUndefined
   * @param {*} value
   * @return {Boolean}
   */
  p_isNullOrUndefined: function p_isNullOrUndefined(value) {
    return value === null || typeof value === 'undefined';
  },

  /**
   * Tests if a value is a boolean
   * @static
   * @method isBoolean
   * @param {*} value
   * @return {Boolean}
   */
  p_isBoolean: function p_isBoolean(value) {
    return value === true || value === false;
  },

  /**
   * Retrieves the subdirectories of a path
   * @static
   * @method getDirectories
   * @param {String}   dirPath The starting path
   * @param {Function} cb      Callback function
   */
  p_getDirectories: function p_getDirectories(dirPath) {
    var that = this;
    return new Promise(function (resolve, reject) {
      var dirs = [];
      fs.readdir(dirPath, function (err, files) {
        if (util.isError(err)) {
          return reject(err);
        }

        var tasks = that.p_getTasks(files, function (files, index) {
          return function (callback) {
            var fullPath = path.join(dirPath, files[index]);
            fs.stat(fullPath, function (err, stat) {
              if (util.isError(err)) {
                return reject(err);
              }

              if (that.p_isNullOrUndefined(stat)) {
                console.log('WARN: Util: unstatable file encountered: %s', fullPath);
              } else if (stat.isDirectory()) {
                dirs.push(fullPath);
              }

              callback(err);
            });
          };
        });
        async.parallel(tasks, function (err
        /*, results*/
        ) {
          resolve(dirs);
        });
      });
    });
  },

  /**
   * Retrieves file and/or directorie absolute paths under a given directory path.
   * @static
   * @method getFiles
   * @param {String} dirPath The path to the directory to be examined
   * @param {Object} [options] Options that customize the results
   * @param {Boolean} [options.recursive=false] A flag that indicates if
   * directories should be recursively searched.
   * @param {Function} [options.filter] A function that returns a boolean
   * indicating if the file should be included in the result set.  The function
   * should take two parameters.  The first is a string value representing the
   * absolute path of the file.  The second is the stat object for the file.
   * @param {Function} cb A callback that takes two parameters. The first is an
   * Error, if occurred. The second is an array of strings representing the
   * absolute paths for files that met the criteria specified by the filter
   * function.
   */
  p_getFiles: function p_getFiles(dirPath, options, fileName) {
    var that = this;
    return new Promise(function (resolve, reject) {
      // if (this.p_isFunction(options)) {
      //     cb      = options;
      //     options = {
      //         recursive: false,
      //         filter: function(/*fullPath, stat*/) { return true; }
      //     }
      // }
      if (!options) {
        options = {
          recursive: false,
          filter: function filter()
          /*fullPath, stat*/
          {
            return true;
          }
        };
      }

      console.log('The directory path');
      console.log(dirPath);
      console.log(fileName); //read files from dir

      fs.readdir(dirPath, function (err, q) {
        if (util.isError(err)) {
          return reject(err);
        }

        console.log('The readdir results q');
        console.log(q); //seed the queue with the absolute paths not just the file names

        for (var i = 0; i < q.length; i++) {
          console.log();
          q[i] = path.join(dirPath, q[i]);
        } //process the q


        var filePaths = [];
        async.whilst(function () {
          return q.length > 0;
        }, function (callback) {
          var fullPath = q.shift();
          fs.stat(fullPath, function (err, stat) {
            if (util.isError(err)) {
              return callback(err);
            } //apply filter


            var meetsCriteria = true;

            if (that.p_isFunction(options.filter)) {
              meetsCriteria = options.filter(fullPath, stat);
            } //examine result and add it when criteria is met


            if (meetsCriteria) {
              filePaths.push(fullPath);
            } //when recursive queue up directory's for processing


            if (!options.recursive || !stat.isDirectory()) {
              return callback(null);
            } //read the directory contents and append it to the queue


            fs.readdir(fullPath, function (err, childFiles) {
              if (util.isError(err)) {
                return callback(err);
              }

              childFiles.forEach(function (item) {
                q.push(path.join(fullPath, item));
              });
              callback(null);
            });
          });
        }, function (err) {
          console.log('THE FILES ARRay');
          var filePath = dirPath + path.sep + fileName;
          console.log(filePath);

          if (filePaths.indexOf(filePath) !== -1) {
            console.log('THE IS A NEED FOR A SPECIFIC FILE');
            var filePathCont = filePaths[filePaths.indexOf(filePath)];
            var file = filePathCont.substr(filePath.indexOf(fileName), filePathCont.length - 1);
            console.log(filePathCont);
            console.log(file);
            resolve(file);
          } else {
            resolve(filePaths);
          }
        });
      });
    });
  },
  p_getFile: function p_getFile(filePath) {
    var that = this;
    return new Promise(function (resolve, reject) {
      console.log('The directory path');
      console.log(filePath); //read files from dir

      var s = fs.createReadStream(filePath);

      if (s) {
        resolve(s);
      }
    });
  },
  p_isDirectory: function p_isDirectory(item) {},

  /* Asynchronously makes the specified directory structure.
   * @static
   * @method mkdirsSync
   * @param {String} absoluteDirPath The absolute path of the directory structure
   * to be created
   * @param {Boolean} isFileName When true the value after the last file
   * separator is treated as a file.  This means that a directory with that value
   * will not be created.
   * @param {Function} cb A callback that provides an error, if occurred
   */
  p_mkdirs: function p_mkdirs(absoluteDirPath, isFileName, cb) {
    var that = this;
    return new Promise(function (resolve, reject) {
      if (that.p_isFunction(isFileName)) {
        cb = isFileName;
        isFileName = false;
      }

      if (!that.p_isString(absoluteDirPath)) {
        return reject(new Error('absoluteDirPath must be a valid file path'));
      }

      var pieces = absoluteDirPath.split(path.sep);
      var curr = '';
      var isWindows = os.type().toLowerCase().indexOf('windows') !== -1;
      var tasks = that.p_getTasks(pieces, function (pieces, i) {
        return function (callback) {
          //we need to skip the first one bc it will probably be empty and we
          //want to skip the last one because it will probably be the file
          //name not a directory.
          var p = pieces[i];

          if (p.length === 0 || isFileName && i >= pieces.length - 1) {
            return callback();
          }

          curr += (isWindows && i === 0 ? '' : path.sep) + p;
          fs.exists(curr, function (exists) {
            if (exists) {
              return callback();
            }

            fs.mkdir(curr, callback);
          });
        };
      });
      async.series(tasks, function (err
      /*, results*/
      ) {
        if (err) return reject(err);
        resolve(true);
      });
    }); // const that = this 
    // if (that.p_isFunction(isFileName)) {
    //     cb = isFileName;
    //     isFileName = false;
    // }
    // if (!that.p_isString(absoluteDirPath)) {
    //     return cb(new Error('absoluteDirPath must be a valid file path'));
    // }
    // var pieces = absoluteDirPath.split(path.sep);
    // var curr      = '';
    // var isWindows = os.type().toLowerCase().indexOf('windows') !== -1;
    // var tasks     = that.p_getTasks(pieces, function(pieces, i) {
    //     return function(callback) {
    //         //we need to skip the first one bc it will probably be empty and we
    //         //want to skip the last one because it will probably be the file
    //         //name not a directory.
    //         var p = pieces[i];
    //         if (p.length === 0 || (isFileName && i >= pieces.length - 1)) {
    //             return callback();
    //         }
    //         curr += (isWindows && i === 0 ? '' : path.sep) + p;
    //         fs.exists(curr, function(exists) {
    //             if (exists) {
    //                 return callback();
    //             }
    //             fs.mkdir(curr, callback);
    //         });
    //     }
    // });
    // async.series(tasks, function(err/*, results*/){
    //     cb(err);
    // });
  },

  /**
   * Synchronously makes the specified directory structure.
   * @static
   * @method mkdirsSync
   * @param {String} absoluteDirPath The absolute path of the directory structure
   * to be created
   * @param {Boolean} isFileName When true the value after the last file
   * separator is treated as a file.  This means that a directory with that value
   * will not be created.
   */
  p_mkdirsSync: function p_mkdirsSync(absoluteDirPath, isFileName) {
    var that = this;

    if (!that.p_isString(absoluteDirPath)) {
      throw new Error('absoluteDirPath must be a valid file path');
    }

    var pieces = absoluteDirPath.split(path.sep);
    var curr = '';
    var isWindows = os.type().toLowerCase().indexOf('windows') !== -1;
    pieces.forEach(function (p, i) {
      //we need to skip the first one bc it will probably be empty and we
      //want to skip the last one because it will probably be the file
      //name not a directory.
      if (p.length === 0 || isFileName && i >= pieces.length - 1) {
        return;
      }

      curr += (isWindows && i === 0 ? '' : path.sep) + p;

      if (!fs.existsSync(curr)) {
        fs.mkdirSync(curr);
      }
    });
  },

  /**
   * Retrieves the extension off of the end of a string that represents a URI to
   * a resource
   * @static
   * @method getExtension
   * @param {String} filePath URI to the resource
   * @param {Object} [options]
   * @param {Boolean} [options.lower=false] When TRUE the extension will be returned as lower case
   * @param {String} [options.sep] The file path separator used in the path.  Defaults to the OS default.
   * @return {String} The value after the last '.' character
   */
  p_getExtension: function p_getExtension(filePath, options) {
    var that = this;

    if (!that.p_isString(filePath) || filePath.length <= 0) {
      return null;
    }

    if (!that.p_isObject(options)) {
      options = {};
    } //do to the end of the path


    var pathPartIndex = filePath.lastIndexOf(options.sep || path.sep) || 0;

    if (pathPartIndex > -1) {
      filePath = filePath.substr(pathPartIndex);
    }

    var ext = null;
    var index = filePath.lastIndexOf('.');

    if (index >= 0) {
      ext = filePath.substring(index + 1); //apply options

      if (options.lower) {
        ext = ext.toLowerCase();
      }
    }

    return ext;
  },

  /**
   * Creates a filter function to be used with the getFiles function to skip files that are not of the specified type
   * @static
   * @method getFileExtensionFilter
   * @param extension
   * @return {Function}
   */
  p_getFileExtensionFilter: function p_getFileExtensionFilter(extension) {
    var ext = '.' + extension;
    return function (fullPath) {
      return fullPath.lastIndexOf(ext) === fullPath.length - ext.length;
    };
  },
  //inherit from node's version of 'util'.  We can't use node's "util.inherits"
  //function because util is an object and not a prototype.

  /**
   * Overrides the basic inherit functionality to include static functions and
   * properties of prototypes
   * @static
   * @method inherits
   * @param {Function} Type1
   * @param {Function} Type2
   */
  p_inherits: function p_inherits(Type1, Type2) {
    if (p_isNullOrUndefined(Type1) || p_isNullOrUndefined(Type2)) {
      throw new Error('The type parameters must be objects or prototypes');
    }

    util.inherits(Type1, Type2);
    p_merge(Type2, Type1);
  },
  js_to_json: function js_to_json(jsObject, filter, indent) {
    var jsonString = JSON.stringify(jsObject);
    return jsonString;
  },
  json_to_js: function json_to_js(jsonString, options) {
    var jsObject = JSON.parse(jsonString);
    return jsObject;
  },
  clone: function clone(o) {
    var _this = this;

    if (o instanceof Array) {
      var newA = [];
      o.forEach(function (e) {
        if (e instanceof Array) {
          newA.push(_this.clone(e));
        } else if (e instanceof Object) {
          newA.push(_this.clone(e));
        } else {
          newA.push(e);
        }
      });
      return newA;
    } else if (o instanceof Object && typeof o !== 'function') {
      var n = {};

      for (var p in o) {
        if (o[p] instanceof Array) {
          n[p] = this.clone(o[p]);
        } else if (o[p] instanceof Object && typeof o[p] !== 'function') {
          n[p] = this.clone(o[p]);
        } else {
          if (p === 'callback') {
            console.log('The current property is callback');
          }

          n[p] = o[p];
        }
      }

      return n;
    }
  },

  /*********************************** OBJECT AND ARRAY CASTING ************************************************************/
  object_to_array: function object_to_array(castObj) {
    var keys = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    console.log('THE CAST OBJECT');
    console.log(castObj);

    if (castObj instanceof Object) {
      if (!(castObj instanceof Array)) {
        var arr = [];
        var count = 0;

        if (keys) {
          for (var key in castObj) {
            arr[count] = {
              key: key,
              value: castObj[key]
            };
            ++count;
          }
        } else {
          for (var _key in castObj) {
            arr[count] = castObj[_key];
            ++count;
          }
        }

        console.log('THE RETURN OF CONVERTED OBJECT');
        console.log(arr);
        return arr;
      } else {
        return castObj;
      }
    } else {
      this.throwErrors('Argument 1 of object_to_array() must be an object');
    }
  },
  array_to_object: function array_to_object(castArr) {
    if (castArr instanceof Array) {
      var obj = {};

      for (var i = 0; i < castArr.length; i++) {
        var property = 'property_' + (i + 1);
        obj[property] = castArr[i];
      }

      return obj;
    } else {
      this.throwErrors('Argument 1 of array_to_object() must be an array');
    }
  },
  string_to_array: function string_to_array(string, sep) {
    console.log('STRING TO ARRAY');
    console.log(string);
    console.log(sep);

    if (this.is_string(string)) {
      console.log('THE STRING IS AN INSTANCE OF STRING');
      return string.split(sep);
    }
  },
  set_deeply: function set_deeply(path, deep) {
    var value = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
    var type = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;

    //  console.log('TYPEOF AC')
    //  console.log(ac)
    // if(!(ac)){
    // 	console.log('AC IS NULL')
    // 	var a = deep 
    // }
    // console.log('THE VALUE OF A')
    // console.log(a)
    if (path.length === 1) {
      console.log('ABOUT TO SET DEEPLY NESTED PROP');
      console.log('THE DEEP');
      console.log(deep);

      if (!value) {
        console.log('THIS DEEP ARRAY');
        console.log(this.js_to_json(deep));
        console.log('THE DEEP I,i');
        deep.splice(path[0], 1);
        console.log(deep);
      } else {
        deep[path[0]] = value;
      }

      console.log(path);
      console.log(path[0]);
      console.log(deep[path]);
      return true;
    }

    if (!deep[path[0]]) {
      console.log('THE PROPERTY BELOW DOES NOT EXIST');
      console.log(path);
      console.log(path[0]); //  console.log(deep[path[0]])

      return false;
    }

    return this.set_deeply(path.slice(1), deep[path[0]], value, type);
  },
  get_deeply: function get_deeply(path) {},
  is_function: function is_function(x) {
    return Object.prototype.toString.call(x) === '[object Function]';
  },
  is_array: function is_array(x) {
    return Object.prototype.toString.call(x) === '[object Array]';
  },
  is_date: function is_date(x) {
    return Object.prototype.toString.call(x) === '[object Date]';
  },
  is_object: function is_object(x) {
    return Object.prototype.toString.call(x) === '[object Object]';
  },
  is_string: function is_string(x) {
    return Object.prototype.toString.call(x) === '[object String]';
  },
  is_value: function is_value(x) {
    return !this.isObject(x) && !this.isArray(x);
  },
  is_not_falsey: function is_not_falsey(x) {
    if (this.trim_spaces(x)) {
      return true;
    } else {
      return false;
    }
  },
  trim_spaces: function trim_spaces(x) {
    if (x instanceof String) {
      return x.trim();
    } else {
      return x;
    }
  },
  compare_values: function compare_values(value1, value2) {
    if (value1 === value2) {
      return;
    }

    if (this.is_date(value1) && this.is_date(value2) && value1.getTime() === value2.getTime()) {
      return;
    }

    if (value1 !== value2) {
      value1 = value2;
      return;
    }
  },
  is_equal_ab: function is_equal_ab(a, b) {
    var flag = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'values';

    if (!(this.is_object(a) && this.is_object(b))) {
      return false;
    }

    if (Object.keys(a).length !== Object.keys(b).length) {
      return false;
    }

    if (flag.trim() === 'keys') {
      var akeys = Object.keys(a).sort();
      var bKeys = Object.keys(b).sort();
      return JSON.stringify(aKeys) === JSON.stringify(bKeys); // var akeys = Object.keys(a)
      // for (let k of akeys) {
      // 	if (a[k] !== b[k]) {
      // 	return false;
      // 	}
      // }
      // return true
    } else {
      if (!(this.js_to_json(a) === this.js_to_json(b))) {
        return false;
      } else {
        return true;
      }
    }
  },
  is_valid_email: function is_valid_email(email) {
    return true;
  },
  is_valid_password: function is_valid_password(password) {
    return true;
  },
  is_same_value: function is_same_value(x, y) {
    if (this.isBrowserSupported('Object', 'is')) {
      return Object.is(x, y);
    } else {
      return this.polyFills().objectIs(x, y);
    }
  },
  unlike_props: function unlike_props(a, b) {
    var akeys = Object.keys(a);
    var bkeys = Object.keys(b);

    if (a.length > b.length) {
      var _unlike = null;

      var _iterator = _createForOfIteratorHelper(akeys),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var k = _step.value;

          if (a[k] !== b[k]) {
            if (_unlike) {
              _unlike.a.push(k);
            } else {
              _unlike = {
                a: [k]
              };
            }
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      return _unlike;
    } else {
      var _iterator2 = _createForOfIteratorHelper(bkeys),
          _step2;

      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var _k = _step2.value;

          if (b[_k] !== a[_k]) {
            if (unlike) {
              unlike.b.push(_k);
            } else {
              unlike = {
                b: [_k]
              };
            }
          }
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }

      return unlike;
    }
  },
  throwErrors: function throwErrors(errorMessage) {
    // Define throwErrors method				
    throw new Error(errorMessage);
  },
  contains: function contains(o, v) {
    if (this.is_array(o)) {
      return o.indexOf(v) > -1 ? true : false;
    } else if (this.is_object(o)) {
      if (this.is_array(v)) {
        console.log('THE SPECIFED VALUE TO CHECK IS AN ARRAY');
        console.log(v);
        var outcome = '';

        for (var i = 0; i < v.length; i++) {
          if (!o.hasOwnProperty(v[i])) {
            outcome = false;
            break;
          } else if (i === v.length - 1) {
            outcome = true;
          }
        }

        console.log('THE OUTCOME');
        console.log(outcome);
        return outcome;
      } else {
        return o.hasOwnProperty(v) ? true : false;
      }
    } else {
      this.throwErrors('Contains() requires either an array pure js object');
    }
  },
  for_of: function for_of(x, action) {
    var y = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
    x = this.clone(x);

    if (this.is_array(x)) {
      x.forEach(action);
    } else if (this.is_object(x)) {
      if (!y) {
        // console.log('THE FOROF Y IS NULL')
        // console.log(x)
        console.log('THE Y IS DEFINED');
        var newX = {};

        for (var p in x) {
          var prop = action(p, x[p]);
          newX[prop.p] = prop.v;
        } // console.log('THE NEWX')
        // console.log(newX)


        return newX;
      } else {
        for (var _p in x) {
          action(_p, x[_p]);
        }
      }
    } else {
      this.throwErrors('Object of for_of() must be an Array or pure object');
    }
  },
  add_values_to: function add_values_to(x, keys, values) {
    if (this.is_array(x)) {
      x.forEach(action);
    } else if (this.is_object(x)) {
      keys.forEach(function (k, i) {
        var vItemKeys = Object.keys(values[k]);

        if (x[k]) {
          vItemKeys.forEach(function (v) {
            x[k][v] = values[v];
          });
        } else {
          x[k] = {};
          vItemKeys.forEach(function (v) {
            x[k][v] = values[v];
          });
        }
      });
      return x;
    } else {
      this.throwErrors('Object of for_of() must be an Array or pure object');
    }
  },
  find_in: function find_in(x, id, f) {
    if (this.is_array(x)) {
      if (this.is_value(x[0])) {
        return x.indexOf(f) > -1 ? x[f] : false;
      } else if (this.is_object(x[0])) {
        for (var i = 0; i < x.length; i++) {
          if (sb.sb_contains(x[i], id) && x[i][id] === f) {
            return x[i];
          }
        }
      }
    }
  }
};

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = require("util");

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = require("async");

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = require("node.extend");

/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = require("uuid");

/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function CORE(lib) {
  this.PILLAR = lib;
  this.modules = {};
  this.globalModules = []; // this.parent = this
} // End of the CORE class


CORE.prototype.createModule = function (module, moduleId, modInstId) {
  var modules = this.modules;
  this.sanna().runForModules(module); // console.log('THe modules Object')
  // console.log(modules)

  if (Object.keys(modules).length > 0) {
    for (var _mod in modules) {
      //console.log(modules[mod]);
      if (_mod === moduleId) {
        this.modules[moduleId][modInstId] = module;
      } else {
        this.modules[moduleId] = {};
        this.modules[moduleId][modInstId] = module;
      }
    } // End of for loop

  } else {
    this.modules[moduleId] = {};
    this.modules[moduleId][modInstId] = module;
  } // End of ifesleif test

}; // End of store modules method


CORE.prototype.events = function () {
  var PILLAR = this.PILLAR; //  const parent = this.parent

  return {
    addEventHandler: function addEventHandler(el, ev, handler) {
      if (typeof window === "undefined") {
        return PILLAR.ev_addHandler(el, ev, handler);
      } else {
        PILLAR.ev_addHandler(el, ev, handler);
      }
    },
    // End of addEventHandler() method
    removeEventHandler: function removeEventHandler(el, ev, handler) {
      PILLAR.ev_removeHandler(el, ev, handler);
    },
    // End of addEventHandler() method
    getEvent: function getEvent(ev) {
      return PILLAR.getEvent(ev);
    },
    // End of addEventHandler() method
    getTarget: function getTarget(ev) {
      return PILLAR.getTarget(ev);
    },
    // End of addEventHandler() method
    preventNormal: function preventNormal(ev) {
      PILLAR.preventDefault(ev);
    },
    // End of addEventHandler() method
    stopEventBubble: function stopEventBubble(ev) {
      PILLAR.stopPropagation(ev);
    } // End of addEventHandler() method

  };
}; // End of CORE EVENTS manipulation object


CORE.prototype.ajax = function () {
  var PILLAR = this.PILLAR;
  return {
    get: function get(url, data, success, failure, type) {
      PILLAR.ajax_get(url, data, success, failure, type);
    },
    // End of ajax get() method
    post: function post(url, data, success, failure, type) {
      PILLAR.ajax_post(url, data, success, failure, type);
    } // End of ajax post() method

  };
}; // End of CORE AJAX manipulation object


CORE.prototype.validators = function () {
  var PILLAR = this.PILLAR;
  return {
    isFunction: function isFunction(x) {
      return PILLAR.is_function(x);
    },
    isArray: function isArray(x) {
      return PILLAR.is_array(x);
    },
    isDate: function isDate(x) {
      return PILLAR.is_date(x);
    },
    isObject: function isObject(x) {
      return PILLAR.is_object(x);
    },
    isString: function isString(x) {
      return PILLAR.is_string(x);
    },
    isValue: function isValue(x) {
      return PILLAR.is_value(x);
    },
    isNotFalsey: function isNotFalsey(x) {
      return PILLAR.is_not_falsey(x);
    },
    trimSpaces: function trimSpaces(x) {
      return PILLAR.trim_spaces(x);
    },
    isEqualab: function isEqualab(a, b) {
      var f = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
      return PILLAR.is_equal_ab(a, b, f);
    },
    isSameValue: function isSameValue(x, y) {
      return PILLAR.is_same_value(x, y);
    },
    isValidEmail: function isValidEmail(e) {
      return PILLAR.is_valid_email(e);
    },
    isValidPassword: function isValidPassword(p) {
      return PILLAR.is_valid_password(p);
    },
    unlikeProps: function unlikeProps(a, b) {
      return PILLAR.unlike_props(a, b);
    },
    contains: function contains(o, v) {
      return PILLAR.contains(o, v);
    },
    forOf: function forOf(o, action, no) {
      return PILLAR.for_of(o, action, no);
    },
    addValuesTo: function addValuesTo(o, k, v) {
      return PILLAR.add_values_to(o, k, v);
    },
    findIn: function findIn(x, i, f) {
      return PILLAR.find_in(x, i, f);
    }
  };
};

CORE.prototype.util = function () {
  var PILLAR = this.PILLAR;
  return {
    makeDirs: function makeDirs(p, isFileName, callback) {
      return PILLAR.p_mkdirs(p, isFileName, callback);
    },
    mkdirsSync: function mkdirsSync(abs, isFileName, callback) {
      return PILLAR.p_mkdirs(abs, isFileName, callback);
    },
    getFiles: function getFiles(p, opts, callback) {
      return PILLAR.p_getFiles(p, opts, callback);
    },
    getFile: function getFile(f) {
      return PILLAR.p_getFile(f);
    },
    getDirectories: function getDirectories(p) {
      return PILLAR.p_getDirectories(p);
    },
    getExtension: function getExtension(f, callback) {
      return PILLAR.p_getExtension(f, callback);
    },
    generateUniqueID: function generateUniqueID() {
      return PILLAR.p_generateUniqueID();
    },
    unikify: function unikify(a) {
      return PILLAR.p_unikify(a);
    }
  };
};
/*

	The methods immediately after this method will be used for module inter communication, which is
	a way that modules communicate with each other indirectly.
	

*/


CORE.prototype.registerEvents = function (evts, module_id, mod_inst_id) {
  if (evts && module_id && mod_inst_id) {
    if (this.modules[module_id][mod_inst_id]) {
      this.modules[module_id][mod_inst_id].events = evts;
    }
  }
}; // End of registerEvents method


CORE.prototype.triggerEvent = function (evt) {
  var moduId = null;

  if (evt) {
    // console.log('Event contains data')
    for (var _moduId in this.modules) {
      // console.log('Modules contains modules')
      if (this.modules.hasOwnProperty(_moduId)) {
        // console.log('given module belongs to modules object')
        _moduId = this.modules[_moduId];

        for (var modInst in _moduId) {
          // console.log('Instances of a given moduleS')
          // console.log(moduId[modInst].events.type)
          // console.log(evt.type)
          if (_moduId[modInst].events && _moduId[modInst].events[evt.type]) {
            _moduId[modInst].events[evt.type](evt.data);
          } // End of inner if statement

        }
      }
    } // End of for in statement

  } // End of outer evt object check

}; // End of triggerEvent method


CORE.prototype.startModule = function (moduleId, modInstId) {
  var moduleID = moduleId;

  if (this.modules[moduleID][modInstId]) {
    if (moduleID !== 'anziiloger') {
      this.modules['anziiloger']['anziiloger'].setDebugger(this.modules[moduleID][modInstId].constructor.name);
    }

    this.modules[moduleID][modInstId].init();

    if (moduleID === 'global') {
      console.log('THE GLOBAL MODULES IS ABOUT TO RECEIVE MODULES'); // console.log(Object.keys(this.modules))

      this.modules[moduleID][modInstId].globals = Object.keys(this.modules);
    }
  }
}; // End of startModule() core method


CORE.prototype.startAllModules = function () {
  for (var modu in this.modules) {
    var modSuper = this.modules[mod];

    for (var modInstId in modSuper) {
      try {
        this.modules[modSuper][modInstId].init();
      } catch (e) {
        console.log(e);
      } // End of try catch

    }
  }
}; // End of startAllModules() core method


CORE.prototype.stopModule = function (moduleId, modInstId) {
  var moduleID = moduleId;

  if (this.modules[moduleID][modInstId]) {
    this.modules[moduleID][modInstId].destroy();
  }
}; // End of stopModule() core method


CORE.prototype.stopAllModules = function () {
  for (var modu in this.modules) {
    var modSuper = this.modules[mod];

    for (var modInstId in modSuper) {
      try {
        this.modules[modSuper][modInstId].destroy();
      } catch (e) {
        console.log(e);
      } // End of try catch

    }
  }
}; // End of stopAllModules() core method


CORE.prototype.converts = function () {
  var PILLAR = this.PILLAR;
  return {
    jsToJson: function jsToJson(jsObject) {
      return PILLAR.js_to_json(jsObject);
    },
    jsonToJs: function jsonToJs(json) {
      return PILLAR.json_to_js(json);
    },
    clone: function clone(c) {
      return PILLAR.clone(c);
    },
    objectToArray: function objectToArray() {
      var o = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var key = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      return PILLAR.object_to_array(o, key);
    },
    stringToArray: function stringToArray(str, sep) {
      return PILLAR.string_to_array(str, sep);
    }
  };
};

CORE.prototype.sanna = function () {
  var self = this;
  return {
    modules: {
      validators: {
        emit: function emit(comp) {
          if (!comp.hasOwnProperty('emit')) {
            // console.log(self.sanna().modules)
            comp.emit = self.sanna().modules.addiks.emit.bind(comp);
          } else if (typeof comp.emit !== 'function') {
            throw new Error('Emit is a reserved Akii method');
          }
        },
        listens: function listens(comp) {
          // console.log('THE COMPONENT RUNS')
          if (!comp.hasOwnProperty('listens')) {
            // console.log('THE LISTENS COMP PROP')
            comp.listens = self.sanna().modules.addiks.listens.bind(comp); // console.log(comp)
          } else if (typeof comp.listens !== 'function') {
            throw new Error('Listens is a reserved ANZii method');
          }
        },
        log: function log(comp) {
          comp.log = self.sanna().modules.addiks.log.bind(comp);
        },
        logSync: function logSync(comp) {
          comp.logSync = self.sanna().modules.addiks.log.bind(comp);
        },
        query: function query(comp) {
          comp.query = self.sanna().modules.addiks.query.bind(comp);
        }
      },
      addiks: {
        emit: function emit(data) {
          var self = this;
          var pao = this.pao; // self.log(self.constructor.name,'is emitting event:',data.type,'with data: ')

          pao.pa_notifyEvent({
            type: data.type,
            data: data.data
          });
        },
        listens: function listens(evehandles) {
          var self = this;
          var pao = this.pao;
          self.log('MODULE', self.constructor.name, 'listens to event(s):', evehandles);
          var mId = self.constructor.name.toLowerCase();
          var mInsId = self.constructor.name.toLowerCase();
          pao.pa_notifyListen(evehandles, mId, mInsId);
        },
        log: function log() {
          var message = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'No message provided';
          var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'console';
          var self = this;
          var pao = this.pao;
          var data = {
            message: message,
            type: type
          };
          data.source = self.constructor.name;
          self.emit({
            type: 'anziiloger-log',
            data: data
          });
        },
        logSync: function logSync() {
          var message = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'No message provided';
          var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'console';
          var self = this;
          var pao = this.pao;
          var data = {
            message: message,
            type: type
          };
          data.source = self.constructor.name;
          data.sync = true;
          self.emit({
            type: 'anziiloger-log',
            data: data
          });
        },
        query: function query() {
          var model = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
          var document = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
          var handler = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
          var self = this;
          var pao = self.pao;

          if (!model || !document) {
            throw new Error('Query method missing required parameters');
          } else {
            var modelFrags = pao.pa_isString(model) ? pao.pa_stringToArray(model, '.') : model;
            console.log(pao.pa_stringToArray);
            console.log(modelFrags);

            if (modelFrags.length === 3) {
              var mo = {
                vendor: modelFrags[0],
                table: modelFrags[1],
                operation: modelFrags[2]
              };
              self.emit({
                type: 'data-hive-request',
                data: {
                  model: mo,
                  document: document,
                  handler: handler
                }
              });
            } else if (model[1].trim() === 'PROCEDURE' || 'JOIN' || 'SEARCH' || 'TRANSACTION' || 'UPDATEANDTAKE' || 'INSERTANDTAKE' || 'DELETEANDTAKE' || 'DELETEMULTIPLE') {
              var _mo = {
                vendor: modelFrags[0],
                table: modelFrags[1].toLowerCase(),
                operation: modelFrags[1].toLowerCase()
              };
              self.emit({
                type: 'data-hive-request',
                data: {
                  model: _mo,
                  document: document,
                  handler: handler
                }
              });
            } else {
              console.log('THE ARRAY');
              console.log(modelFrags);
              throw new Error('Query method requires database vendor,table and operation');
            }
          }
        }
      }
    },
    runForModules: function runForModules(comp) {
      var validators = this.modules.validators;

      for (var v in validators) {
        validators[v](comp);
      }
    }
  };
};

/* harmony default export */ __webpack_exports__["a"] = (CORE);

/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function PAO(appPillar) {
  this.core = appPillar;
} // End of PAO


PAO.prototype.create = function (moduleID, modInstId) {
  var pa_core = this.core; // const util = pa_core.util
  // var events = pa_core.events()
  // var ajax = pa_core.ajax()
  // const validators = pa_core.validators()

  var util = pa_core.validators().forOf(pa_core.util(), function (p, a) {
    return {
      p: ["pa_".concat(p)],
      v: a
    };
  });
  var converts = pa_core.validators().forOf(pa_core.converts(), function (p, a) {
    return {
      p: ["pa_".concat(p)],
      v: a
    };
  });
  var validators = pa_core.validators().forOf(pa_core.validators(), function (p, a) {
    return {
      p: ["pa_".concat(p)],
      v: a
    };
  }); // console.log('THE VALIDATORS')
  // console.log(validators)
  // console.log('The value of Instance Id')
  // console.log(modInstId)

  if (modInstId) {
    // console.log('The module has a view')
    // var CONTAINER = dom.queryCont('data-'+moduleID, modInstId);
    var meta = {
      moduleId: moduleID,
      modInstId: modInstId
    };
  } else {
    // console.log('The module has no view')
    var meta = {
      moduleId: moduleID,
      modInstId: moduleID
    };
  }

  return _objectSpread({
    // DOM manipulations
    // view: CONTAINER,
    moduleMeta: meta
  }, util, {}, validators, {}, converts, {
    // 	pa_getChildByClass: function(selector){
    // 		if(CONTAINER){
    // 			return CONTAINER.queryChildByClass(selector);
    // 		}
    // 	},
    // 	pa_getAllChildByClass: function(selector){
    // 			if(CONTAINER){
    // 				return CONTAINER.queryAllChildByClass(selector);
    // 			}
    // 	},
    // 	pa_getById: function(selector){
    // 			return dom.queryById(selector);
    // 	},
    // 	pa_getByTag: function(parent,selector){
    // 		return dom.queryByTag(parent,selector);
    // },
    // 	pa_getByAttribute: function(attrib){
    // 		return dom.queryByAttribute(attrib);
    // 	},
    // 	pa_getAllChildByAttribute: function(attrib){
    // 			return CONTAINER.queryAllChildByAttribute(attrib);
    // 	},
    // 	pa_getChildByAttribute: function(attrib){
    // 			return CONTAINER.queryChildByAttribute(attrib);
    // 	},
    // 	pa_getNodeType: function(node){
    // 		return dom.queryNodeType(node);
    // 	},
    // 	pa_createElement: function(selector){
    // 		var el = dom.createElement(selector);
    // 		return el;
    // 	},
    // 	pa_isEqualNode: function(node1,node2){
    // 		return dom.isEqualNode(node1,node2);
    // 		// return el;
    // 	},
    // 	pa_copyDeep: function(el){
    // 		var el = dom.copyDeep(el);
    // 		return el;
    // 	},
    // 	pa_copyShallow: function(el){
    // 		var el = dom.copyShallow(el);
    // 		return el;
    // 	},
    // 	pa_addProperty: function(el,attrib,attribValue){
    // 		if(typeof window === "undefined"){
    // 			return dom.addProperty(el,attrib,attribValue);
    // 		}else{
    // 			 dom.addProperty(el,attrib,attribValue);
    // 		}
    // 	},
    // 	pa_removeProperty: function(el,attrib){
    // 		dom.removeProperty(el,attrib);
    // 	},
    // 	pa_insertInner: function(el,content){
    // 		if(typeof window === "undefined"){
    // 			return dom.insertInner(el,content);
    // 		}else{
    // 			dom.insertInner(el,content);
    // 		}
    // 	},
    // 	pa_addChild: function(parent,child){
    // 		if(typeof window === "undefined"){
    // 			return dom.addChild(parent,child);
    // 		}else{
    // 			 dom.addChild(parent,child);
    // 		}
    // 	},
    // 	pa_getClasses: function(element){
    // 		return dom.getClasses(element);
    // 	},
    // 	pa_addClass: function(classlist,classname){
    //  		dom.addClass(classlist,classname);
    // 	},
    // 	pa_removeClass: function(classlist,classname){
    // 		 dom.removeClass(classlist,classname);
    // 	},
    // 	pa_toggleClass: function(classlist,classname){
    // 		 dom.toggleClass(classlist,classname);
    // 	},
    // 	pa_hasClass: function(classlist,classname){
    // 		 return dom.hasClass(classlist,classname);
    // 	},
    // 	pa_getStyles: function(element){
    // 		 return dom.getStyles(element);
    // 	},
    // 	pa_getAttributes: function(element){
    // 		 return dom.getAttributes(element);
    // 	},
    // 	pa_getParent: function(child){
    // 		return dom.getParent(child);
    //    },
    // 	// EVENTS manipulations
    // 	pa_addEvent: function(el,ev,handler){
    // 	    if(typeof window === "undefined"){
    // 			return	events.addEventHandler(el,ev,handler);
    // 		}else{
    // 			events.addEventHandler(el,ev,handler);
    // 		}
    // 	},
    // 	pa_removeEvent: function(el,ev,handler){
    // 			events.addEventHandler(el,ev,handler);
    // 	},
    // 	pa_getEvent: function(ev){
    // 		return events.getEvent(ev);
    // 	},// End of addEventHandler() method
    // 	pa_getTarget: function(ev){
    // 		return events.getTarget(ev);
    // 	},// End of addEventHandler() method
    // 	pa_preventNormal: function(ev){
    // 			events.preventNormal(ev);
    // 	},
    // 	pa_stopEventBubble: function(ev){
    // 		events.stopEventBubble(ev);
    // },
    // 	// AJAX communications
    // 	pa_ajaxGet: function(url,data,success,failure,type){
    // 		ajax.get(url,data,success,failure,type);
    // 	},
    // 	pa_ajaxPost: function(url,data,success,failure,type){
    // 		ajax.post(url,data,success,failure,type);
    // 	},
    // 	// MODULE communications
    pa_notifyListen: function pa_notifyListen(evts, moduleID, modInstId) {
      // console.log('The notifyListen event has been successfuly invoked')
      pa_core.registerEvents(evts, moduleID, modInstId);
    },
    // End of notifyListen() for events to listen to
    pa_notifyEvent: function pa_notifyEvent(evt) {
      // console.log('The notify event has been successfuly invoked')
      pa_core.triggerEvent(evt);
    } // end of notifyEvent() occurence
    // 	pa_validate: function(data){
    // 		var validateResult = pa_core.validator.validate(data);
    // 		return validateResult;
    // 	},
    // 	pa_jsToJson: function(jsObject){
    // 		return converts.jsToJson(jsObject);
    // 	},
    // 	pa_jsonToJs: function(json){
    // 		return converts.jsonToJs(json);
    // 	},
    // 	pa_clone: function(c){
    // 		return converts.clone(c);
    // 	},
    // 	pa_objectToArray: function(o){
    // 		return converts.objectToArray(o)
    // 	}

  }); // End OF return
}; // End of PAO create() method


/* harmony default export */ __webpack_exports__["a"] = (PAO);

/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__middleware_index__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__parsers_index__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__router_index__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__request_index__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__server_index__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__config_index__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__anziiloger_index__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__system_index__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__mysql_index__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__dao_index__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__dman_index__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__global_index__ = __webpack_require__(69);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }














var Esm = function Esm() {
  _classCallCheck(this, Esm);

  this.Esm = {
    Anziiloger: __WEBPACK_IMPORTED_MODULE_6__anziiloger_index__["a" /* default */],
    Mysql: __WEBPACK_IMPORTED_MODULE_8__mysql_index__["a" /* default */],
    System: __WEBPACK_IMPORTED_MODULE_7__system_index__["a" /* default */],
    Middleware: __WEBPACK_IMPORTED_MODULE_0__middleware_index__["a" /* default */],
    Parsers: __WEBPACK_IMPORTED_MODULE_1__parsers_index__["a" /* default */],
    Router: __WEBPACK_IMPORTED_MODULE_2__router_index__["a" /* default */],
    Request: __WEBPACK_IMPORTED_MODULE_3__request_index__["a" /* default */],
    Dao: __WEBPACK_IMPORTED_MODULE_9__dao_index__["a" /* default */],
    Dman: __WEBPACK_IMPORTED_MODULE_10__dman_index__["a" /* default */],
    Server: __WEBPACK_IMPORTED_MODULE_4__server_index__["a" /* default */],
    Config: __WEBPACK_IMPORTED_MODULE_5__config_index__["a" /* default */],
    Global: __WEBPACK_IMPORTED_MODULE_11__global_index__["a" /* default */]
  };
};

/* harmony default export */ __webpack_exports__["a"] = (new Esm());

/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__middleware__ = __webpack_require__(23);

/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0__middleware__["a" /* default */]);

/***/ }),
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__methods__ = __webpack_require__(24);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



var bodyParser = __webpack_require__(1);

var Middleware = function Middleware(pao) {
  _classCallCheck(this, Middleware);

  this.pao = pao;
  this.all = [{
    call: 'static',
    use: 'public'
  }, 'json'];
  this.middlewares = {
    all: [// {type: 'function',value: (req,res,next)=>{
      //    console.log('I am the zeenith ware'),
      //    res.header("Access-Control-Allow-Origin", "*");
      //    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
      //    next()
      //   }
      //   },
      // {type: 'module',value: 'test'}
    ]
  }; // console.log('THE STORE')
  // console.log(this.supubu

  this.init = __WEBPACK_IMPORTED_MODULE_0__methods__["f" /* init */];
  this.handleAttachMiddleware = __WEBPACK_IMPORTED_MODULE_0__methods__["d" /* handleAttachMiddleware */];
  this.attachMiddleware = __WEBPACK_IMPORTED_MODULE_0__methods__["b" /* attachMiddleware */];
  this.handleConfigMiddleware = __WEBPACK_IMPORTED_MODULE_0__methods__["e" /* handleConfigMiddleware */];
  this.handleAddExternalMiddleware = __WEBPACK_IMPORTED_MODULE_0__methods__["c" /* handleAddExternalMiddleware */];
  this.allWares = __WEBPACK_IMPORTED_MODULE_0__methods__["a" /* allWares */];
};

/* harmony default export */ __webpack_exports__["a"] = (Middleware);

/***/ }),
/* 24 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return init; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return handleAttachMiddleware; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return handleConfigMiddleware; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return handleAddExternalMiddleware; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return attachMiddleware; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return allWares; });
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var init = function init() {
  this.log('Middleware has been initialised');
  this.listens({
    'config-middleware': this.handleConfigMiddleware.bind(this),
    'add-ext-middleware': this.handleAddExternalMiddleware.bind(this),
    'attach-middleware': this.handleAttachMiddleware.bind(this)
  });
};
var handleAttachMiddleware = function handleAttachMiddleware(data) {
  this.attachMiddleware(data);
};
var handleConfigMiddleware = function handleConfigMiddleware(data) {
  var self = this; //  console.log('THE HANDLE CONFIG MIDDLEWARE')
  //  console.log(data)
  //  console.log(data)

  var middlewares = data; //  console.log(middlewares)

  var _loop = function _loop(p) {
    // self.log('THE P')
    // self.log(p)
    if (self.middlewares[p]) {
      if (middlewares[p].addMiddleware) {
        // self.log('INSIDE EXISTENT MIDDLEWARE ITEM')
        // self.log(middlewares[p])
        middlewares[p].addMiddleware.forEach(function (m, i) {
          self.middlewares[p].push(m);
        });
      } else if (p === 'removeMiddleware') {}
    } else {
      if (middlewares[p].addMiddleware) {
        self.middlewares[p] = _objectSpread({}, middlewares[p].addMiddleware);
      }
    }
  };

  for (var p in middlewares) {
    _loop(p);
  }
};
var handleAddExternalMiddleware = function handleAddExternalMiddleware(data) {
  var self = this;
  var pao = self.pao;
  self.log('ADD EXTERNAL MIDDLEWARE EVENT HAS OCCURED');

  if (data.type) {
    if (data.type === 'private') {
      if (data.level === 'top') {
        if (pao.pa_isArray(data.middleware.funk)) {
          data.middleware.forEach(function (m, i) {
            self.middleware.unshift({
              type: 'function',
              value: m.funk,
              ext: true
            });
          });
        } else {
          self.log('THE MIDDLEWARES BEFORE');
          self.log(self.middlewares);

          if (self.middlewares.pprivate) {
            var len = Object.keys(self.middlewares.pprivate).length;
            self.middlewares.pprivate[len] = {
              type: 'function',
              value: data.middleware.funk,
              ext: true
            };
            self.log('Middlewares');
            self.log(self.middlewares);
          }
        }
      } else {}
    } else if (data.type === 'public') {} else if (data.type === 'all') {
      if (data.level === 'top') {}
    }
  }
};
var attachMiddleware = function attachMiddleware(data) {
  var self = this;

  if (data.app) {
    // console.log('SELF.MIDDLEWARES')
    // console.log(self.middlewares)
    if (self.all.length > 0) {
      console.log('THE Allwares is greater than zero');

      if (data.xpress) {
        self.allWares(data.app, data.xpress);
      }
    }

    if (self.middlewares.pprivate && self.middlewares.ppublic) {
      self.emit({
        type: 'router-middleware',
        data: {
          middleware: {
            "public": self.middlewares.ppublic,
            "private": self.middlewares.pprivate
          }
        }
      });
    } else if (self.middlewares["private"]) {
      self.emit({
        type: 'router-middleware',
        data: {
          middleware: {
            "private": self.middlewares.pprivate
          }
        }
      });
    } else if (self.middlewares["public"]) {
      self.emit({
        type: 'router-middleware',
        data: {
          middleware: {
            "public": self.middlewares.ppublic
          }
        }
      });
    }

    if (self.middlewares.all) {
      // console.log('FOR EVERY REQUEST MIDDLEWARES')
      // console.log(self.middlewares.all)
      self.middlewares.all.forEach(function (m, i) {
        if (m.type === 'function') {
          data.app.use(m.value);
        } else if (m.type === 'module') {// self.emit({type: `add-${m.value}-middleware`,data: data.app})
        }
      });
    }
  }
};
var allWares = function allWares(app, xpress) {
  var self = this;
  var pao = self.pao;
  self.all.forEach(function (w, i) {
    if (pao.pa_isObject(w)) {
      console.log('Executing allwares');

      if (w.use) {
        console.log('The public:', w.call);
        app.use(xpress[w.call]('public'));
      } else {
        console.log('The none-public:', w.call);
        app.use(xpress[w.call]());
      }
    } else {
      self.log('middleware is string');
      app.use(xpress[w]());
    }
  });
};

/***/ }),
/* 25 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__parsers__ = __webpack_require__(26);

/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0__parsers__["a" /* default */]);

/***/ }),
/* 26 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__methods__ = __webpack_require__(27);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



var jsonfile = __webpack_require__(4),
    path = __webpack_require__(0),
    bodyParser = __webpack_require__(1);

var Parsers = function Parsers(pao) {
  _classCallCheck(this, Parsers);

  this.pao = pao;
  this.path = path;
  this.dependiks = {
    jsonfile: jsonfile,
    bodyParser: bodyParser
  };
  this.init = __WEBPACK_IMPORTED_MODULE_0__methods__["b" /* init */];
  this.handleShareMiddleware = __WEBPACK_IMPORTED_MODULE_0__methods__["a" /* handleShareMiddleware */];
};

/* harmony default export */ __webpack_exports__["a"] = (Parsers);

/***/ }),
/* 27 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return init; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return handleShareMiddleware; });
var init = function init() {
  this.log('Parsers has been initialised');
  this.listens({
    'share-middleware': this.handleShareMiddleware.bind(this)
  });
};
var handleShareMiddleware = function handleShareMiddleware() {
  var self = this;
  console.log('HANLDE SHARE MIDDLEWARE EVENT HAS OCCURED');
  self.emit({
    type: "add-ext-middleware",
    data: {
      type: 'all',
      level: 'top',
      middleware: {
        funk: [{
          body: self.dependiks.bodyParser,
          call: 'json'
        }]
      }
    }
  });
};

/***/ }),
/* 28 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__router__ = __webpack_require__(29);

/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0__router__["a" /* default */]);

/***/ }),
/* 29 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__methods__ = __webpack_require__(30);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



var Router = function Router(pao) {
  _classCallCheck(this, Router);

  this.pao = pao;
  this.routes = null;
  this.routerMiddleware = null;
  this.filteredpublicMiddlewares = [];
  this.filteredprivateMiddlewares = [];
  this.init = __WEBPACK_IMPORTED_MODULE_0__methods__["h" /* init */];
  this.handleConfigRouter = __WEBPACK_IMPORTED_MODULE_0__methods__["f" /* handleConfigRouter */];
  this.handleAttachRoutes = __WEBPACK_IMPORTED_MODULE_0__methods__["e" /* handleAttachRoutes */];
  this.handleRouterMiddleware = __WEBPACK_IMPORTED_MODULE_0__methods__["g" /* handleRouterMiddleware */];
  this.attachRoutes = __WEBPACK_IMPORTED_MODULE_0__methods__["b" /* attachRoutes */];
  this.renderRoute = __WEBPACK_IMPORTED_MODULE_0__methods__["k" /* renderRoute */];
  this.appendRouter = __WEBPACK_IMPORTED_MODULE_0__methods__["a" /* appendRouter */];
  this.middlewareType = __WEBPACK_IMPORTED_MODULE_0__methods__["i" /* middlewareType */];
  this.outOfRouterContext = __WEBPACK_IMPORTED_MODULE_0__methods__["j" /* outOfRouterContext */];
  this.handOver = __WEBPACK_IMPORTED_MODULE_0__methods__["d" /* handOver */];
  this.filterCallback = __WEBPACK_IMPORTED_MODULE_0__methods__["c" /* filterCallback */];
};

/* harmony default export */ __webpack_exports__["a"] = (Router);

/***/ }),
/* 30 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return init; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return handleConfigRouter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return handleRouterMiddleware; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return handleAttachRoutes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return attachRoutes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return renderRoute; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return appendRouter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return middlewareType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return outOfRouterContext; });
/* harmony export (immutable) */ __webpack_exports__["d"] = handOver;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return filterCallback; });
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var init = function init() {
  console.log('Router has been initialised');
  this.listens({
    'config-router': this.handleConfigRouter.bind(this),
    'router-middleware': this.handleRouterMiddleware.bind(this),
    'attach-routes': this.handleAttachRoutes.bind(this)
  });
};
var handleConfigRouter = function handleConfigRouter(data) {
  console.log('THE HANDLE CONFIG ROUTER MODULE');
  var self = this;
  self.routes = data;
};
var handleRouterMiddleware = function handleRouterMiddleware(data) {
  var self = this;
  console.log('THE ROUTER MIDDLEWARE');
  console.log(data);
  self.routerMiddleware = data.middleware;
};
var handleAttachRoutes = function handleAttachRoutes(data) {
  this.attachRoutes(data);
};
var attachRoutes = function attachRoutes(data) {
  var self = this;

  if (data.app) {
    var aliasList = [];
    var aliatikHandlers = [];
    data.app.use('/', data.router);
    self.routes.forEach(function (r, i) {
      if (r.alias) aliasList.push(r.path.split('/')[1]), aliatikHandlers.push(r.alias);
      r['router'] = data.router;
      self.renderRoute(r);
    }); // data.router.use(self.outOfRouterContext.bind(this))

    aliasList.length > 0 ? self.emit({
      type: 'router-alias-list',
      data: {
        aliasList: aliasList,
        handlers: aliatikHandlers
      }
    }) : '';
  }
};
var renderRoute = function renderRoute(r) {
  var self = this;
  var pao = this.pao;
  var routy = {
    router: r.router,
    method: r.method,
    path: r.path,
    handOver: self.handOver
  }; // console.log('THE ROUTE MIDDLEWARE')
  // console.log(self.routerMiddleware.public)

  if (r.middlewares) {
    if (self.routerMiddleware && self.routerMiddleware[r.type]) {
      self.middlewareType(r.type, r.middlewares);
      self.middlewareType(r.type, pao.pa_objectToArray(self.routerMiddleware[r.type]));
      self.appendRouter(_objectSpread({
        middleware: self["filtered".concat(r.type, "Middlewares")]
      }, routy));
    } else {
      self.middlewareType(r.type, r.middlewares);
      self.appendRouter(_objectSpread({
        middleware: self["filtered".concat(r.type, "Middlewares")]
      }, routy));
    }
  } else if (self.routerMiddleware && self.routerMiddleware[r.type]) {
    self.middlewareType(r.type, pao.pa_objectToArray(self.routerMiddleware[r.type]));
    self.appendRouter(_objectSpread({
      middleware: self["filtered".concat(r.type, "Middlewares")]
    }, routy));
  } else {
    self.appendRouter(routy);
  }
};
var appendRouter = function appendRouter(r) {
  // console.log('THE APPENDROUTER')
  if (r.middleware) {
    r.router[r.method.toLowerCase()](r.path, r.middleware, r.handOver.bind(this));
  } else {
    r.router[r.method.toLowerCase()](r.path, r.handOver.bind(this));
  }
};
var middlewareType = function middlewareType(type, middlewares) {
  var self = this; // console.log('THE MIDDLEWARETYP MIDDLEWARES')
  // console.log(middlewares)

  middlewares.forEach(function (m, i) {
    if (m.type === 'function') {
      self["filtered".concat(type, "Middlewares")].push(m.value);
    } else if (m.type === 'module') {
      self.emit({
        type: "add-".concat(m.value, "-middleware"),
        data: {
          type: type,
          filterCallback: self.filterCallback.bind(self)
        }
      });
    }
  });
};
var outOfRouterContext = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
    var self, data;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            self = this;
            _context.next = 3;
            return self.log('THE OUTOFROUTERCONTEXT REQUESTS');

          case 3:
            _context.next = 5;
            return self.log(req.originalUrl);

          case 5:
            data = {
              error: true,
              type: "NotFound",
              code: 404,
              message: 'Resource was not found: OutOfContext'
            };
            return _context.abrupt("return", self.emit({
              type: 'write-server-request-response',
              data: {
                data: data,
                res: res
              }
            }));

          case 7:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function outOfRouterContext(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();
function handOver(_x3, _x4) {
  return _handOver.apply(this, arguments);
}

function _handOver() {
  _handOver = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
    var self;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            self = this;
            _context2.next = 3;
            return self.log('THE CAUGHT REQUEST INSIDE ROUTER::END POINT HIT');

          case 3:
            _context2.next = 5;
            return self.log(req.originalUrl);

          case 5:
            _context2.next = 7;
            return self.log(req.params);

          case 7:
            _context2.next = 9;
            return self.log(req.body);

          case 9:
            return _context2.abrupt("return", self.emit({
              type: 'request-handover',
              data: {
                req: req,
                res: res
              }
            }));

          case 10:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, this);
  }));
  return _handOver.apply(this, arguments);
}

var filterCallback = function filterCallback(filterType, moduleMiddleware) {
  var self = this;

  if (filterType === 'public') {
    self.filteredpublicMiddlewares.push(moduleMiddleware);
  } else {
    self.filteredprivateMiddlewares.push(moduleMiddleware);
  }
};

/***/ }),
/* 31 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__request__ = __webpack_require__(32);

/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0__request__["a" /* default */]);

/***/ }),
/* 32 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__methods__ = __webpack_require__(33);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



var Request = function Request(pao) {
  _classCallCheck(this, Request);

  this.pao = pao;
  this.request = {};
  this.routesAliasList = [];
  this.aliatikHandlers = [];
  this.requestData = null;
  this.init = __WEBPACK_IMPORTED_MODULE_0__methods__["k" /* init */];
  this.handleRequestHandOver = __WEBPACK_IMPORTED_MODULE_0__methods__["i" /* handleRequestHandOver */];
  this.parseRequest = __WEBPACK_IMPORTED_MODULE_0__methods__["l" /* parseRequest */];
  this.handleRequestGlobalError = __WEBPACK_IMPORTED_MODULE_0__methods__["g" /* handleRequestGlobalError */];
  this.handleRequestGlobalResponse = __WEBPACK_IMPORTED_MODULE_0__methods__["h" /* handleRequestGlobalResponse */];
  this.handleBadRequestError = __WEBPACK_IMPORTED_MODULE_0__methods__["b" /* handleBadRequestError */];
  this.handleHandlerNotFound = __WEBPACK_IMPORTED_MODULE_0__methods__["e" /* handleHandlerNotFound */];
  this.handleByHandlerError = __WEBPACK_IMPORTED_MODULE_0__methods__["c" /* handleByHandlerError */];
  this.handleHandlerError = __WEBPACK_IMPORTED_MODULE_0__methods__["d" /* handleHandlerError */];
  this.handlePathError = __WEBPACK_IMPORTED_MODULE_0__methods__["f" /* handlePathError */];
  this.handleRouterAliasList = __WEBPACK_IMPORTED_MODULE_0__methods__["j" /* handleRouterAliasList */];
  this.writeResponse = __WEBPACK_IMPORTED_MODULE_0__methods__["o" /* writeResponse */];
  this.taskerHandler = __WEBPACK_IMPORTED_MODULE_0__methods__["n" /* taskerHandler */];
  this.successfullHandle = __WEBPACK_IMPORTED_MODULE_0__methods__["m" /* successfullHandle */];
  this.failureHandle = __WEBPACK_IMPORTED_MODULE_0__methods__["a" /* failureHandle */];
};

/* harmony default export */ __webpack_exports__["a"] = (Request);

/***/ }),
/* 33 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return init; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return handleRequestHandOver; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return parseRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return handleRequestGlobalError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return handlePathError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return handleRouterAliasList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return handleRequestGlobalResponse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return handleBadRequestError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return handleHandlerNotFound; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return handleByHandlerError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return handleHandlerError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return writeResponse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return taskerHandler; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return successfullHandle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return failureHandle; });
var init = function init() {
  console.log('Request has been initialised');
  this.listens({
    'request-handover': this.handleRequestHandOver.bind(this),
    'request-global-request-response': this.handleRequestGlobalResponse.bind(this),
    'request-global-request-error': this.handleRequestGlobalError.bind(this),
    'request-handler-error': this.handleHandlerError.bind(this),
    'router-alias-list': this.handleRouterAliasList.bind(this)
  });
};
var handleRequestHandOver = function handleRequestHandOver(data) {
  var self = this;
  self.request.res = data.res;
  var aliasList = self.routesAliasList;
  var aliatikHandlers = self.aliatikHandlers;
  var parsed = self.parseRequest(data.req);
  console.log('THE ALIATIKS');
  console.log(parsed);
  console.log(aliasList);
  console.log(aliatikHandlers);
  data.req.uploads ? parsed.user ? parsed.user.uploads = data.req.uploads : parsed.user = {
    uploads: data.req.uploads
  } : ''; // console.log('parsed')
  // console.log(parsed.url.trim().split('/'))

  var handler = parsed.handler;
  aliasList.indexOf(handler) >= 0 ? handler = aliatikHandlers[aliasList.indexOf(handler)] : '';

  if (handler) {
    self.requestData = {
      parsed: parsed,
      user: parsed.user,
      handler: handler,
      request: {
        req: data.req,
        res: data.res
      }
    };
    self.emit({
      type: 'request-global-request',
      data: handler
    });
  } else {
    self.handlePathError();
  }
};
var parseRequest = function parseRequest(req) {
  console.log('The req');
  console.log(req.body);
  console.log(req.query);
  console.log(req.params); // console.log('THE REQUEST BODY')
  // console.log(req.body)

  var requiredData = {
    url: req.originalUrl
  };
  var url = requiredData.url.indexOf('/') === 0 ? requiredData.url.slice(1, requiredData.url.length) : requiredData.url;
  var isPath = url.indexOf('/') > 0 ? true : false;

  if (req.query && Object.keys(req.query).length > 0) {
    console.log('THE QUERY');
    console.log(req.query);
    requiredData.user = req.query;
    var urlFragments = url.split('?');

    if (isPath) {
      var pathFrags = urlFragments[0].split('/');
      console.log('THE PATH FRAGS');
      console.log(pathFrags);
      requiredData.handler = pathFrags[0];
    } else {
      console.log('THE REMAINING CONTENT AFTER SPLIT OF ?');
      console.log(urlFragments);
      requiredData.handler = urlFragments[0];
    }
  } else if (req.params && Object.keys(req.params).length > 0) {
    console.log('THE PARAMS');
    console.log(req.params);
    requiredData.user = req.params;

    if (isPath) {
      var _pathFrags = url.split('/');

      console.log('THE PATH FRAGS');
      console.log(_pathFrags);
      requiredData.handler = _pathFrags[0];
    } else {
      requiredData.handler = url;
    }
  } else if (req.body && Object.keys(req.body).length > 0) {
    console.log('THE REQUEST BODY');
    console.log(req.body);
    requiredData.user = req.body;

    if (isPath) {
      var _pathFrags2 = url.split('/');

      console.log('THE PATH FRAGS');
      console.log(_pathFrags2);
      requiredData.handler = _pathFrags2[0];
    } else {
      requiredData.handler = url;
    }
  } else {
    requiredData.user = {};

    if (isPath) {
      var _pathFrags3 = url.split('/');

      console.log('THE PATH FRAGS');
      console.log(_pathFrags3);
      requiredData.handler = _pathFrags3[0];
    } else {
      requiredData.handler = url;
    }
  }

  return requiredData;
};
var handleRequestGlobalError = function handleRequestGlobalError(data) {
  var self = this;
  self.writeResponse({
    error: true,
    type: 'serverError',
    code: 502,
    message: 'The server error'
  });
};
var handlePathError = function handlePathError(data) {
  var self = this;
  self.writeResponse({
    error: true,
    type: 'ServerError',
    code: 502,
    message: 'The requested task[handler] could not be completed'
  });
};
var handleRouterAliasList = function handleRouterAliasList(data) {
  var self = this;
  self.log('Router ALIATIKHANDLERS WITH DATA:');
  self.log(data); // self.writeResponse({error: true,type: 'ServerError',code: 502,message: 'The requested task[handler] could not be completed'})

  self.routesAliasList = data.aliasList;
  self.aliatikHandlers = data.handlers;
};
var handleRequestGlobalResponse = function handleRequestGlobalResponse(data) {
  var self = this;

  if (!data) {
    self.handleByHandlerError();
  } else {
    self.emit({
      type: "handle-".concat(self.requestData.handler, "-task"),
      data: {
        payload: self.requestData,
        callback: self.taskerHandler.bind(self)
      }
    });
  }
};
var handleBadRequestError = function handleBadRequestError() {
  var self = this;
  self.writeResponse({
    error: true,
    type: 'BadRequest',
    code: 400,
    message: 'Bad Request'
  });
};
var handleHandlerNotFound = function handleHandlerNotFound() {
  var self = this;
  self.writeResponse({
    error: true,
    type: 'NotFound',
    code: 404,
    message: 'The requested task could not be completed'
  });
};
var handleByHandlerError = function handleByHandlerError() {
  var self = this;
  self.writeResponse({
    error: true,
    type: 'notFound',
    code: 404,
    message: 'The requested task could not be completed'
  });
};
var handleHandlerError = function handleHandlerError() {
  var self = this;
  self.handleHandlerError();
};
var writeResponse = function writeResponse(data) {
  var method = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'regular';
  var self = this;
  var pao = self.pao; // console.log('THE DATA IN WRITERESPONSE')
  // console.log(data)

  if (method !== 'stream') {
    pao.pa_isString() ? data = pao.pa_jsToJson({
      text: data
    }) : data = pao.pa_jsToJson(data);
  }

  self.emit({
    type: 'write-server-request-response',
    data: {
      data: data,
      res: self.request.res,
      method: method
    }
  });
};
var taskerHandler = function taskerHandler() {
  var fail = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
  var success = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  var method = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
  var self = this;
  var pao = self.pao;
  console.log('THE TASKER HANDLER');
  console.log(fail);
  console.log(method);

  if (fail) {
    self.failureHandle({
      error: true,
      message: fail
    });
  } else if (success) {
    method ? self.successfullHandle(success, method) : self.successfullHandle(success);
  }
};
var successfullHandle = function successfullHandle(data, method) {
  var self = this;
  self.writeResponse(data, method);
};
var failureHandle = function failureHandle(data) {
  var self = this;
  self.writeResponse(data);
};

/***/ }),
/* 34 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__server__ = __webpack_require__(35);

/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0__server__["a" /* default */]);

/***/ }),
/* 35 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__methods__ = __webpack_require__(36);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



var express = __webpack_require__(37),
    // fs = require('fs'),
// randomstring = require("randomstring"),
jsonfile = __webpack_require__(4),
    path = __webpack_require__(0),
    bodyParser = __webpack_require__(1); // const app = express()
// import notifier from './notifier'


var Server = function Server(pao) {
  _classCallCheck(this, Server);

  this.pao = pao;
  this.xpress = express;
  this.http = this.xpress();
  this.router = this.xpress.Router();
  this.path = path;
  this.html = [];
  this.request = null;
  this.componentCount = 0;
  this.componentId = [];
  this.ssrComponentLen = 0;
  this.componentRefLen = 0;
  this.workers = [];
  this.fixedCompS = {
    before: [],
    after: []
  };
  this.compData = [];
  this.dependiks = {
    jsonfile: jsonfile,
    bodyParser: bodyParser
  };
  this.mimeTypes = {
    html: 'text/html',
    txt: 'text/plain',
    css: 'text/css',
    gif: 'image/gif',
    jpg: 'image/jpeg',
    png: 'image/png',
    svg: 'image/svg+xml',
    js: 'application/javascript'
  }; // // methods

  this.init = __WEBPACK_IMPORTED_MODULE_0__methods__["c" /* init */];
  this.handleConfigServer = __WEBPACK_IMPORTED_MODULE_0__methods__["a" /* handleConfigServer */];
  this.handleWriteServerRequestResponse = __WEBPACK_IMPORTED_MODULE_0__methods__["b" /* handleWriteServerRequestResponse */];
  this.startServer = __WEBPACK_IMPORTED_MODULE_0__methods__["h" /* startServer */];
  this.startPreRoutes = __WEBPACK_IMPORTED_MODULE_0__methods__["f" /* startPreRoutes */];
  this.startRouting = __WEBPACK_IMPORTED_MODULE_0__methods__["g" /* startRouting */];
  this.streamResponse = __WEBPACK_IMPORTED_MODULE_0__methods__["i" /* streamResponse */];
  this.runServer = __WEBPACK_IMPORTED_MODULE_0__methods__["e" /* runServer */];
  this.renderHtml = __WEBPACK_IMPORTED_MODULE_0__methods__["d" /* renderHtml */];
  this.streamResponse = __WEBPACK_IMPORTED_MODULE_0__methods__["i" /* streamResponse */];
};

/* harmony default export */ __webpack_exports__["a"] = (Server);

/***/ }),
/* 36 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return init; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return handleConfigServer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return startServer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return startPreRoutes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return startRouting; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return runServer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return renderHtml; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return handleWriteServerRequestResponse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return streamResponse; });
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var init = function init() {
  console.log('Server has been initialised'); //   console.log(this.pao)
  //   console.log(this)

  this.listens({
    'config-server': this.handleConfigServer.bind(this),
    'write-server-request-response': this.handleWriteServerRequestResponse.bind(this)
  });
};
var handleConfigServer = function handleConfigServer(data) {
  var self = this; // self.emit({type:'share-middleware',data:''})

  self.emit({
    type: 'attach-middleware',
    data: {
      app: self.http,
      xpress: self.xpress
    }
  });
  self.emit({
    type: 'attach-routes',
    data: {
      app: self.http,
      router: self.router
    }
  });
  self.emit({
    type: 'distribute-system-resources',
    data: ''
  });
  self.startServer();
};
var startServer = function startServer(data) {
  var self = this; // this.startPreRoutes()
  // this.startRouting()

  this.runServer();
};
var startPreRoutes = function startPreRoutes() {
  var self = this;
  self.http.use(self.dependiks.bodyParser.json()); // self.http.use(function(req, res, next) {
  // 	// console.log(req.body)
  // 	// console.log('Your mobile has reached this code Surprise')
  // 	res.header("Access-Control-Allow-Origin", "*");
  // 	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  // 	return next();
  // });

  self.http.use('*.js', function (req, res, next) {
    // console.log(req.body)
    // console.log('Your mobile has reached this code Surprise')
    res.set("content-type", "text/javascript");
    return next();
  });
  self.http.use(self.xpress["static"]("public"));
};
var startRouting = function startRouting() {
  var self = this; //   self.http.get('/smarfo/menu',function(req,res){
  // 	console.log('Request for menu has just been received')
  // 	let categories = require('./jsondb/foodcategories.json');
  // 	return res.send(categories.menu);
  // })

  self.http.get('/todo', self.renderHtml.bind(self));
  self.http.get('/ibr', self.renderHtml.bind(self));
  self.http.get('/home', self.renderHtml.bind(self));
  self.http.use('/', self.renderHtml.bind(self));
};
var runServer = function runServer() {
  var self = this;
  self.emit({
    type: 'attach-workers-to-server',
    data: {
      app: self.http
    }
  }); // self.http.listen(process.env.PORT || 3000,()=>{
  //   self.log("The Server is listening",'info')
  // })
};
var renderHtml = function renderHtml(req, res) {
  var self = this;
  console.log('A request has been made to one of the routes');
  console.log('The html');
  console.log('The request URL');
  console.log(req.url);
  self.request = {
    req: req,
    res: res
  };
  self.emit({
    type: "address-changed",
    data: {
      url: req.url
    }
  }); //    console.log(this)
};
var handleWriteServerRequestResponse = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(data) {
    var self;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            self = this;

            if (!(data.method !== 'stream')) {
              _context.next = 14;
              break;
            }

            _context.next = 4;
            return self.log('SERVER IS ABOUT TO SEND RESPONSE BACK TO CLIENT::REGULAR');

          case 4:
            _context.next = 6;
            return self.log(data.data);

          case 6:
            _context.next = 8;
            return data.res.set('Connection', 'close');

          case 8:
            data.res.status(200).send(data.data); // await data.res.end()
            // // console.log(data.data)

            _context.next = 11;
            return self.log('SERVER HAS SENT A RESPONSE BACK TO THE CLIENT::REGULAR');

          case 11:
            return _context.abrupt("return", _context.sent);

          case 14:
            self.streamResponse(data);

          case 15:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function handleWriteServerRequestResponse(_x) {
    return _ref.apply(this, arguments);
  };
}();
var streamResponse = function streamResponse(data) {
  var self = this;
  var pao = self.pao; // const jsonToJs = pao.pa_jsonToJs
  // let data = jsonToJs(dt)
  // console.log('THE STREAM IS RUNNING')
  // console.log(data)

  var type = self.mimeTypes[data.data.ext];
  var rStream = data.data.rStream;
  rStream.on('open', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            // console.log('INSIDE ON AND PIPING')
            // console.log(type)
            data.res.set('Content-Type', type);
            data.res.set('Connection', 'close');
            return _context2.abrupt("return", rStream.pipe(data.res));

          case 3:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  })));
  rStream.on('end', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            data.res.end();
            _context3.next = 3;
            return self.log('Stream request has been successfully served WITH END');

          case 3:
            return _context3.abrupt("return", _context3.sent);

          case 4:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  })));
  rStream.on('error', /*#__PURE__*/function () {
    var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(e) {
      return regeneratorRuntime.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              console.log('THE ERROR READSTREAM');
              console.log(e);
              data.res.set('Content-Type', 'application/json');
              data.res.set('Connection', 'close');
              return _context4.abrupt("return", data.res.status(404).send({
                error: true,
                message: 'Not found'
              }));

            case 5:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4);
    }));

    return function (_x2) {
      return _ref4.apply(this, arguments);
    };
  }());
};

/***/ }),
/* 37 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 38 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__config__ = __webpack_require__(39);

/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0__config__["a" /* default */]);

/***/ }),
/* 39 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__methods__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__confy__ = __webpack_require__(41);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }


 // Dependecies 

var envObserver = __webpack_require__(47);

var supportsColor = __webpack_require__(48);

var Config = function Config(pao) {
  _classCallCheck(this, Config);

  this.pao = pao;
  this.config = __WEBPACK_IMPORTED_MODULE_1__confy__["a" /* default */];
  this.envObserver = envObserver;
  this.supportsColor = supportsColor;
  this.env = 'development';
  this.aliases = {
    development: 'dev',
    production: 'prod',
    staging: 'stage'
  };
  this.init = __WEBPACK_IMPORTED_MODULE_0__methods__["c" /* init */];
  this.configure = __WEBPACK_IMPORTED_MODULE_0__methods__["a" /* configure */];
  this.enviroment = __WEBPACK_IMPORTED_MODULE_0__methods__["b" /* enviroment */];
};

/* harmony default export */ __webpack_exports__["a"] = (Config);

/***/ }),
/* 40 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return init; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return configure; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return enviroment; });
var init = function init() {
  this.log('Config has been initialised');
  this.configure();
};
var configure = function configure() {
  var self = this;
  var config = self.config; // console.log('THE VALUE OF CONFIG SELF.CONFIG')
  // console.log(self.config)

  if (self.config) {
    if (self.config.hasOwnProperty('logger')) {
      console.log('THE LOGGER IS THE FIRST MODULE TO GET CONFIG');
      self.emit({
        type: "config-anziiloger",
        data: self.config.logger
      });
    }

    self.enviroment();
    self.config.hasOwnProperty('cluster') ? self.emit({
      type: 'config-system',
      data: self.config.cluster
    }) : '';

    for (var c in config) {
      console.log(c);

      if (c !== 'logger') {
        self.emit({
          type: "config-".concat(c),
          data: config[c]
        });
      }
    }
  }
};
var enviroment = function enviroment() {
  var self = this;
  var envObserver = self.envObserver;
  var supportsColor = self.supportsColor;
  console.log('THE CURRENT ENVIROMENT'); // console.log(envObserver)

  if (supportsColor.stdout) {
    console.log('Terminal stdout supports color');
  }

  if (supportsColor.stdout.has256) {
    console.log('Terminal stdout supports 256 colors');
  }

  if (supportsColor.stderr.has16m) {
    console.log('Terminal stderr supports 16 million colors (truecolor)');
  }

  if (self.envObserver.has('enviroment')) {
    if (self.aliases.hasOwnProperty(envObserver.enviroment)) {
      self.env = self.aliases[envObserver.enviroment];
      var envCofig = envObserver.get(self.env);

      if (envCofig.hasOwnProperty('database')) {
        var clients = [];
        var db = envCofig.database;
        console.log('THE DB');
        console.log(db);

        for (var c in db) {
          console.log('THE VALUE Of C');
          console.log(c);
          console.log(db[c]);
          clients.push({
            name: c,
            connect: db[c].connect
          });
        }

        console.log('THE DATABASE CLIENTS');
        console.log(clients);
        self.emit({
          type: "config-dman",
          data: {
            clients: clients
          }
        });
      }

      if (envObserver.has('appOrphic')) {
        console.log('THE JWT appOrphic');
        console.log(envObserver);
        console.log(envObserver.appOrphic);
        console.log(envObserver.appOrphic.flaDev);
        self.emit({
          type: 'save-jwt-key',
          data: {
            key: envObserver.appOrphic['flaDev']
          }
        });
      } else {
        self.emit({
          type: 'save-jwt-key',
          data: {
            key: 'f124sfet48tq3dfmlvoszx1'
          }
        });
      }
    } else {
      self.log('Enviroment config invalid, resorting to default', 'warn');
    }
  } // let db = self.envObserver.get('dev')
  // console.log(db)
  // console.log(db.database.mysql.connect.user)

};

/***/ }),
/* 41 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__includes_routes__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__includes_tasks__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__includes_globals__ = __webpack_require__(46);



/* harmony default export */ __webpack_exports__["a"] = ({
  middleware: {
    ppublic: {
      addMiddleware: __WEBPACK_IMPORTED_MODULE_2__includes_globals__["c" /* ppublic */]
    },
    pprivate: {
      addMiddleware: __WEBPACK_IMPORTED_MODULE_2__includes_globals__["b" /* pprivate */]
    },
    all: {
      addMiddleware: __WEBPACK_IMPORTED_MODULE_2__includes_globals__["a" /* all */]
    }
  },
  router: __WEBPACK_IMPORTED_MODULE_0__includes_routes__["a" /* default */],
  kronjo: __WEBPACK_IMPORTED_MODULE_1__includes_tasks__["a" /* default */],
  mailer: '',
  logger: {
    level: 'info',
    trans: ['file', {
      path: 'http://www.iiprodakts/logger'
    }]
  },
  cluster: {
    workers: 3,
    spawn: true
  },
  server: 'server'
});

/***/ }),
/* 42 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__middlewares__ = __webpack_require__(43);

/* harmony default export */ __webpack_exports__["a"] = ([{
  path: '/register',
  method: 'POST',
  type: 'public'
}, {
  path: '/test',
  method: 'POST',
  type: 'public'
}, {
  path: '/login',
  method: 'POST',
  type: 'public'
}, {
  path: '/job',
  method: 'POST',
  type: 'public'
}, {
  path: '/login/:username/:pass',
  method: 'post',
  type: 'public'
}, {
  path: '/user',
  method: 'GET',
  type: 'private'
}, {
  path: '/adash',
  method: 'POST',
  type: 'private'
}, {
  path: '/inalerts',
  method: 'POST',
  type: 'private'
}, {
  path: '/bookmark',
  method: 'POST',
  type: 'private'
}, {
  path: '/history',
  method: 'POST',
  type: 'private'
}, {
  path: 'view/:profile',
  method: 'GET',
  type: 'public'
}, {
  path: '/list/:name',
  method: 'GET',
  middlewares: __WEBPACK_IMPORTED_MODULE_0__middlewares__["a" /* list */],
  type: 'private'
}, {
  path: '/upload',
  method: 'POST',
  middlewares: [{
    type: 'module',
    value: 'upload'
  }],
  type: 'private'
}, {
  path: '/pirlo/:name/:pass',
  method: 'GET',
  type: 'public'
}, {
  path: '/download/:fileName',
  alias: 'downloadr',
  method: 'GET',
  type: 'public'
}, {
  path: '/profile',
  alias: 'asettings',
  middlewares: [{
    type: 'module',
    value: 'upload'
  }],
  method: 'POST',
  type: 'public'
}, {
  path: '/avatar',
  alias: 'asettings',
  middlewares: [{
    type: 'module',
    value: 'upload'
  }],
  method: 'POST',
  type: 'public'
}, {
  path: '/fetch',
  method: 'GET',
  type: 'public'
}]);

/***/ }),
/* 43 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return list; });
var list = [{
  type: 'function',
  value: function value(req, res, next) {
    console.log("This is the list middleware");
    next();
  }
}, {
  type: 'function',
  value: function value(req, res, next) {
    console.log('THE originalUrl:');
    console.log(req.originalUrl);
    next();
  }
}, {
  type: 'module',
  value: 'test'
}];

/***/ }),
/* 44 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__tasksHandlers__ = __webpack_require__(45);

/* harmony default export */ __webpack_exports__["a"] = ([{
  taskRule: {
    dayOfWeek: 0,
    hour: 17,
    minute: 19
  },
  taskHandler: __WEBPACK_IMPORTED_MODULE_0__tasksHandlers__["a" /* sendJobAlerts */]
} // {
//     taskSchedule: 'once every-monday of every-week @5:00:am ',
//     taskHandler: taskHandlers.sendWeeklyJobAlerts,
//     type: 'public'
// },
// {
//     taskSchedule: 'once every-first-day of every-month @6:00:am',
//     method: 'post',
//     type: 'public'
// },
// {
//     taskSchedule: 'twice every-month @6:30:am',
//     method: 'GET',
//     type: 'private'
// }
]);

/***/ }),
/* 45 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return sendJobAlerts; });
/* unused harmony export sendDailyReports */
var sendJobAlerts = function sendJobAlerts(frequency) {
  var self = this;
  self.emit({
    type: "get-new-jobs",
    data: ''
  });
};
var sendDailyReports = function sendDailyReports() {
  self.emit({
    type: "get-reports",
    data: frequency
  });
};

/***/ }),
/* 46 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return ppublic; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return pprivate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return all; });
var ppublic = [{
  type: 'function',
  value: function value(req, res, next) {
    console.log("This is the public middleware");
    next();
  }
}, {
  type: 'function',
  value: function value(req, res, next) {
    console.log('THE originalUrl: public 2');
    console.log(req.originalUrl);
    next();
  }
}];
var pprivate = [{
  type: 'function',
  value: function value(req, res, next) {
    console.log("This is the PRIVATE middleware");
    next();
  }
}, {
  type: 'function',
  value: function value(req, res, next) {
    console.log('THE originalUrl: ANOTHER PRIVATE');
    console.log(req.originalUrl);
    next();
  }
}];
var all = [{
  type: 'function',
  value: function value(req, res, next) {
    console.log('I AM THE MIDDLEWARE THAT RUNS ON EVERY REQUEST');
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept"); // console.log(req)

    next();
  }
}];

/***/ }),
/* 47 */
/***/ (function(module, exports) {

module.exports = require("config");

/***/ }),
/* 48 */
/***/ (function(module, exports) {

module.exports = require("supports-color");

/***/ }),
/* 49 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__anziiloger__ = __webpack_require__(50);

/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0__anziiloger__["a" /* default */]);

/***/ }),
/* 50 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__methods__ = __webpack_require__(51);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

 // Dependecies 

var winston = __webpack_require__(52);

var debugr = __webpack_require__(53);

var Anziiloger = function Anziiloger(pao) {
  _classCallCheck(this, Anziiloger);

  this.pao = pao;
  this.winlo = winston;
  this.debugr = debugr;
  this.logger = null;
  this.debugas = {};
  this.defaultTransports = [{
    trans: 'File',
    level: 'info',
    handleExceptions: true,
    json: true,
    label: 'Anzilloger',
    maxsize: 5242880,
    maxFiles: 5,
    timestamp: true,
    colorize: false
  }, {
    trans: 'Console',
    level: 'debug',
    handleExceptions: true,
    json: false,
    timestamp: true,
    colorize: true
  }];
  this.init = __WEBPACK_IMPORTED_MODULE_0__methods__["f" /* init */];
  this.handleLogRequest = __WEBPACK_IMPORTED_MODULE_0__methods__["d" /* handleLogRequest */];
  this.handleAnziilogerConfig = __WEBPACK_IMPORTED_MODULE_0__methods__["c" /* handleAnziilogerConfig */];
  this.info = __WEBPACK_IMPORTED_MODULE_0__methods__["e" /* info */];
  this.warn = __WEBPACK_IMPORTED_MODULE_0__methods__["h" /* warn */];
  this.error = __WEBPACK_IMPORTED_MODULE_0__methods__["b" /* error */];
  this.debug = __WEBPACK_IMPORTED_MODULE_0__methods__["a" /* debug */];
  this.setDebugger = __WEBPACK_IMPORTED_MODULE_0__methods__["g" /* setDebugger */];
};

/* harmony default export */ __webpack_exports__["a"] = (Anziiloger);

/***/ }),
/* 51 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return init; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return handleLogRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return handleAnziilogerConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return info; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return debug; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return warn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return error; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return setDebugger; });
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var init = function init() {
  this.setDebugger(this.constructor.name); //   this.handleAnziilogerConfig()

  console.log('Anziiloger has been initialised');
  this.listens({
    'config-anziiloger': this.handleAnziilogerConfig.bind(this),
    'anziiloger-log': this.handleLogRequest.bind(this)
  });
};
var handleLogRequest = function handleLogRequest(data) {
  var self = this;

  if (self.logger) {
    switch (data.type) {
      case 'info':
        self.info(data);
        break;

      case 'warn':
        self.warn(data);
        break;

      case 'error':
        self.error(data);

      default:
        self.debug(data);
    }
  } else {
    console.log(data.source, 'logged message: ', data.message, ' of type ', data.type);
  }
};
var handleAnziilogerConfig = function handleAnziilogerConfig(data) {
  var self = this; // console.log('THE DEUGAS')
  // console.log(self.debugas)

  var pao = self.pao; // console.log('ANZII LOGGER IS CATCHING AN EVENT FROM CONFIG')
  // console.log(data)
  // data.hasOwnProperty('transports')
  //   ? pao.pa_isArray(data.transports) 
  // 	 ? self.defaultTransports.concat(data.transports)
  // 	 : console.log('Config: invalid def..  ')
  //   :''

  var now = new Date();
  self.logger = new self.winlo.createLogger({
    transports: [new self.winlo.transports.File({
      name: 'production',
      level: 'info',
      filename: './logs/production.log',
      handleExceptions: true,
      json: true,
      label: 'Anzilloger',
      maxsize: 5242880,
      maxFiles: 5,
      timestamp: now,
      colorize: false
    }), new self.winlo.transports.File({
      name: 'errors',
      level: 'error',
      filename: './logs/errors.log',
      handleExceptions: true,
      json: true,
      label: 'Anzilloger',
      maxsize: 5242880,
      maxFiles: 5,
      timestamp: true,
      colorize: false
    }), new self.winlo.transports.Console({
      level: 'debug',
      label: 'Anzilloger',
      timestamp: true,
      colorize: true
    })]
  });
};
var info = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(log) {
    var self, pao, contains;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            self = this;
            pao = self.pao;
            contains = pao.pa_contains;

            if (!contains(log, 'sync')) {
              _context.next = 8;
              break;
            }

            _context.next = 6;
            return self.logger.info("".concat(log.source, ": ").concat(log.message));

          case 6:
            _context.next = 9;
            break;

          case 8:
            self.logger.info("".concat(log.source, ": ").concat(log.message));

          case 9:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function info(_x) {
    return _ref.apply(this, arguments);
  };
}();
var debug = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(log) {
    var self, pao, contains;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            self = this;
            pao = self.pao;
            contains = pao.pa_contains;

            if (!contains(log, 'sync')) {
              _context2.next = 13;
              break;
            }

            if (!self.debugas.hasOwnProperty(log.source.toLowerCase())) {
              _context2.next = 9;
              break;
            }

            _context2.next = 7;
            return self.debugas[log.source.toLowerCase()](log.message);

          case 7:
            _context2.next = 11;
            break;

          case 9:
            _context2.next = 11;
            return self.logger.debug("".concat(log.source, ": ").concat(log.message));

          case 11:
            _context2.next = 14;
            break;

          case 13:
            if (self.debugas.hasOwnProperty(log.source.toLowerCase())) {
              // console.log('THE DEBUG MODULE IS USED')
              // console.log(self.debugas)
              self.debugas[log.source.toLowerCase()](log.message);
            } else {
              self.logger.debug("".concat(log.source, ": ").concat(log.message));
            }

          case 14:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, this);
  }));

  return function debug(_x2) {
    return _ref2.apply(this, arguments);
  };
}();
var warn = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(log) {
    var self, pao, contains;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            //const self = this 
            //self.logger.warn(`${log.source}: ${log.message}`)
            self = this;
            pao = self.pao;
            contains = pao.pa_contains;

            if (!contains(log, 'sync')) {
              _context3.next = 8;
              break;
            }

            _context3.next = 6;
            return self.logger.warn("".concat(log.source, ": ").concat(log.message));

          case 6:
            _context3.next = 9;
            break;

          case 8:
            self.logger.warn("".concat(log.source, ": ").concat(log.message));

          case 9:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, this);
  }));

  return function warn(_x3) {
    return _ref3.apply(this, arguments);
  };
}();
var error = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(log) {
    var self, pao, contains;
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            //const self = this 
            //self.logger.error(`${log.source}: ${log.message}`)  
            self = this;
            pao = self.pao;
            contains = pao.pa_contains;

            if (!contains(log, 'sync')) {
              _context4.next = 8;
              break;
            }

            _context4.next = 6;
            return self.logger.error("".concat(log.source, ": ").concat(log.message));

          case 6:
            _context4.next = 9;
            break;

          case 8:
            self.logger.error("".concat(log.source, ": ").concat(log.message));

          case 9:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, this);
  }));

  return function error(_x4) {
    return _ref4.apply(this, arguments);
  };
}();
var setDebugger = /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(mod) {
    var self, name;
    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            self = this;
            name = mod.toLowerCase();
            self.debugas[name] = self.debugr("anzii:".concat(name));

          case 3:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5, this);
  }));

  return function setDebugger(_x5) {
    return _ref5.apply(this, arguments);
  };
}();

/***/ }),
/* 52 */
/***/ (function(module, exports) {

module.exports = require("winston");

/***/ }),
/* 53 */
/***/ (function(module, exports) {

module.exports = require("debug");

/***/ }),
/* 54 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__system__ = __webpack_require__(55);

/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0__system__["a" /* default */]);

/***/ }),
/* 55 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__methods__ = __webpack_require__(56);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

 // Dependecies

var cluster = __webpack_require__(57);

var http = __webpack_require__(58);

var os = __webpack_require__(2);

var path = __webpack_require__(0);

var System = function System(pao) {
  _classCallCheck(this, System);

  this.pao = pao;
  this.context = process;
  this.env = this.context.env;
  this.cluster = cluster;
  this.os = os;
  this.path = path;
  this.shutDownServices = [];
  this.numOfDBSD = 3;
  this.allowedDBSTR = 10000;
  this.systemIsShuttingDown = false;
  this.shutDownOrder = [];
  this.systemBase = {
    DOCUMENT_ROOT: process.cwd()
  };
  this.init = __WEBPACK_IMPORTED_MODULE_0__methods__["g" /* init */];
  this.handleConfigureSystem = __WEBPACK_IMPORTED_MODULE_0__methods__["b" /* handleConfigureSystem */];
  this.handleRegisterShutDownCandidate = __WEBPACK_IMPORTED_MODULE_0__methods__["d" /* handleRegisterShutDownCandidate */];
  this.handleServerAttachWorkers = __WEBPACK_IMPORTED_MODULE_0__methods__["e" /* handleServerAttachWorkers */];
  this.handleDistributeSystemResources = __WEBPACK_IMPORTED_MODULE_0__methods__["c" /* handleDistributeSystemResources */];
  this.masterWorker = __WEBPACK_IMPORTED_MODULE_0__methods__["h" /* masterWorker */];
  this.folkSlaveWorkers = __WEBPACK_IMPORTED_MODULE_0__methods__["a" /* folkSlaveWorkers */];
  this.handleShutDowns = __WEBPACK_IMPORTED_MODULE_0__methods__["f" /* handleShutDowns */];
  this.shutDown = __WEBPACK_IMPORTED_MODULE_0__methods__["i" /* shutDown */];
};

/* harmony default export */ __webpack_exports__["a"] = (System);

/***/ }),
/* 56 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return init; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return handleConfigureSystem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return handleDistributeSystemResources; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return shutDown; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return masterWorker; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return folkSlaveWorkers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return handleShutDowns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return handleServerAttachWorkers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return handleRegisterShutDownCandidate; });
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var init = function init() {
  this.log('System has been initialised');
  this.listens({
    'config-system': this.handleConfigureSystem.bind(this),
    'register-shutdown-candidate': this.handleRegisterShutDownCandidate.bind(this),
    'distribute-system-resources': this.handleDistributeSystemResources.bind(this),
    'attach-workers-to-server': this.handleServerAttachWorkers.bind(this)
  }); // console.log(this.env)
};
var handleConfigureSystem = function handleConfigureSystem(data) {
  var self = this;
  self.log("System ENVIROMENT IS: ".concat(self.env)); // self.log(cwd)
  // self.log(path.sep)
  // self.log(path.sep+'includes')
  // self.log(cwd.substr(0, cwd.indexOf(path.sep+'includes')) >= 0)

  self.log(self.systemBase.DOCUMENT_ROOT);
  self.handleShutDowns();
  self.clusterCustomConfig = data; // self.masterWorker(data)
};
var handleDistributeSystemResources = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(data) {
    var self, pao, getFiles, getDirs, getFile, makeDirs, getExtension, path, dirPath, filePath, createPath, status, ext;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            self = this;
            pao = self.pao;
            getFiles = pao.pa_getFiles;
            getDirs = pao.pa_getDirectories;
            getFile = pao.pa_getFile;
            makeDirs = pao.pa_makeDirs;
            getExtension = pao.pa_getExtension;
            path = self.path;
            dirPath = "".concat(self.systemBase.DOCUMENT_ROOT);
            filePath = "".concat(self.systemBase.DOCUMENT_ROOT).concat(path.sep, "sev.js");
            createPath = "".concat(self.systemBase.DOCUMENT_ROOT).concat(path.sep); // const path = self.path
            // const cwd = process.cwd()
            // self.log(cwd)
            // self.log(path.sep)
            // self.log(path.sep+'includes')
            // self.log(cwd.substr(0, cwd.indexOf(path.sep+'includes')) >= 0)

            self.log('HandleDistributeSystemResources '); // let files = await getFiles(dirPath,{recursive: false},'sev.js') 
            // let dirs = await getDirs(dirPath) 
            // let file = await getFile(filePath)

            _context.next = 14;
            return makeDirs(createPath);

          case 14:
            status = _context.sent;
            ext = getExtension('sev.js');
            console.log('GET FILES CALLBACK GETS A CALL'); // console.log(files)
            // console.log(dirs)
            // console.log(file)

            console.log(ext);
            console.log(status);
            self.emit({
              type: 'take-system-base',
              data: {
                systemBase: self.systemBase
              }
            }); // self.masterWorker(data)

          case 20:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function handleDistributeSystemResources(_x) {
    return _ref.apply(this, arguments);
  };
}();
var shutDown = function shutDown(type, code) {
  var self = this;
  self.log("SHUTDOWN TYPE: ".concat(type, ",code: ").concat(code));
  self.systemIsShuttingDown = true;

  if (self.shutDownServices.length > 0) {
    self.shutDownServices.forEach(function (sd, i) {
      if (typeof sd !== 'function') {
        self.log("Service: ".concat(self.shutDownOrder[i], " must be a function,shutdown attempt failed"), 'warn');
      } else {
        self.log("Service: ".concat(self.shutDownOrder[i], " is shutting down"), 'info');
      }
    });
  }

  self.log("System is shutting down through: ".concat(type, ",with code: ").concat(code.stack));
  type === 'uncaughtException' ? self.context.kill(1) : self.context[type]();
};
var masterWorker = function masterWorker(app) {
  var self = this;
  self.log("THE STATUS OF isMaster: ".concat(self.cluster.isMaster));

  if (self.cluster.isMaster) {
    self.log("Master ".concat(self.context.pid, " is running"));

    if (self.clusterCustomConfig.spawn) {
      var slaves = self.clusterCustomConfig.workers ? self.clusterCustomConfig.workers : 'auto';

      if (slaves === 'auto') {
        slaves = self.os.cpus().length;

        for (var s = 0; slaves < slaves; s++) {
          self.cluster.fork();
        }
      } else {
        if (typeof slaves === 'number') {
          for (var _s = 0; _s < slaves; _s++) {
            self.log("Forking slave number: ".concat(_s));
            self.cluster.fork();
          }
        }
      }

      self.cluster.on('fork', function (worker) {
        self.log("cluster forking new worker", worker.id);
      });
      var mainWorkerId = null;
      self.cluster.on('listening', function (worker, address) {
        self.log("cluster listening new worker", worker.id);

        if (null === mainWorkerId) {
          self.log("Making worker " + worker.id + " to main worker");
          mainWorkerId = worker.id;
          worker.send({
            singleProcessTasks: "startSingleProcessTasks"
          });
        }
      });
      self.cluster.on('exit', function (worker, code, signal) {
        self.log("worker ".concat(worker.process.pid, " died"));
        console.log('FORKING ANOTHER WORK');
        console.log('Worker %d died :(', worker.id);

        if (worker.id === mainWorkerId) {
          console.log("Main Worker is dead...");
          mainWorkerId = null;
        }

        console.trace("I am here");
        self.log(worker);
        self.log(code);
        self.log(signal);
        self.cluster.fork(); // self.cluster.fork()
      });
    } else {
      self.log('System is running on a single thread/core');
    } // app.listen(self.context.env.PORT || 3000,()=>{
    // 	self.log("The Server is listening via workers",'info')
    //   })

  } else {
    // console.log('IT IS NOT THE MASTER PROCESS')
    console.log("Worker ".concat(process.pid, " started"));
    app.listen(self.context.env.PORT || 3000, function () {
      self.log("The Server is listening via workers", 'info');
      self.log("THIS WORKER RUNNING IP:");
    });
    process.on('message', function (message) {
      self.log('Worker ' + process.pid + ' received message from master.', message);

      if (message.singleProcessTasks == "startSingleProcessTasks") {
        self.emit({
          type: 'start-single-process-tasks',
          data: ''
        });
      }
    });
  }
};
var folkSlaveWorkers = function folkSlaveWorkers(mainWorker) {};
var handleShutDowns = function handleShutDowns() {
  console.log('Shutdowns are being handled');
  var self = this;
  self.context.on('INT', function (code) {
    if (!self.systemIsShuttingDown) {
      self.shutDown('kill', code);
    } else {
      self.log('System is already ShuttingDown');
    }
  });
  self.context.on('SIGTEM', function (code) {
    if (!self.systemIsShuttingDown) {
      self.shutDown('exit', code);
    } else {
      self.log('System is already ShuttingDown');
    }
  });
  self.context.on('uncaughtException', function (code) {
    if (!self.systemIsShuttingDown) {
      self.shutDown('uncaughtException', code);
    } else {
      self.log('System is already ShuttingDown');
    }
  });
  self.context.on('unhandledRejection', function (code) {
    console.log('uncaughtException occured from unhandleredjected', code.stack);

    if (!self.systemIsShuttingDown) {
      self.shutDown('uncaughtException', code);
    } else {
      self.log('System is already ShuttingDown');
    }
  });
};
var handleServerAttachWorkers = function handleServerAttachWorkers(data) {
  var self = this;
  self.masterWorker(data.app);
};
var handleRegisterShutDownCandidate = function handleRegisterShutDownCandidate(data) {
  var self = this;

  if (data.hasOwnProperty('candidate') && pao.pa_isFunction(data.candidate) && data.hasOwnProperty('name') && pao.pa_isString(name)) {
    if (!(self.shutDownServices.indexOf(data.name) > -1)) {
      self.shutDownServices.push(data.candidate);
      self.shutDownOrder.push(data.name);
    }
  } else {
    self.log('Candidate could not be registered for shutdown', 'warn');
  }
};

/***/ }),
/* 57 */
/***/ (function(module, exports) {

module.exports = require("cluster");

/***/ }),
/* 58 */
/***/ (function(module, exports) {

module.exports = require("http");

/***/ }),
/* 59 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mysql__ = __webpack_require__(60);

/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0__mysql__["a" /* default */]);

/***/ }),
/* 60 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__methods__ = __webpack_require__(5);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



var Mysql = function Mysql(pao) {
  _classCallCheck(this, Mysql);

  this.pao = pao; // // methods

  this.init = __WEBPACK_IMPORTED_MODULE_0__methods__["m" /* init */];
  this.handleMysqlDataRequest = __WEBPACK_IMPORTED_MODULE_0__methods__["l" /* handleMysqlDataRequest */];
  this.insertOne = __WEBPACK_IMPORTED_MODULE_0__methods__["p" /* insertOne */];
  this.insertMany = __WEBPACK_IMPORTED_MODULE_0__methods__["o" /* insertMany */];
  this.find = __WEBPACK_IMPORTED_MODULE_0__methods__["j" /* find */];
  this.remove = __WEBPACK_IMPORTED_MODULE_0__methods__["D" /* remove */];
  this.updateOne = __WEBPACK_IMPORTED_MODULE_0__methods__["S" /* updateOne */];
  this.set = __WEBPACK_IMPORTED_MODULE_0__methods__["M" /* set */];
  this.queryOptions = __WEBPACK_IMPORTED_MODULE_0__methods__["B" /* queryOptions */];
  this.queryTemplate = __WEBPACK_IMPORTED_MODULE_0__methods__["C" /* queryTemplate */];
  this.TRANSACTION = __WEBPACK_IMPORTED_MODULE_0__methods__["d" /* TRANSACTION */];
  this.PROCEDURE = __WEBPACK_IMPORTED_MODULE_0__methods__["b" /* PROCEDURE */];
  this.JOIN = __WEBPACK_IMPORTED_MODULE_0__methods__["a" /* JOIN */];
  this.SEARCH = __WEBPACK_IMPORTED_MODULE_0__methods__["c" /* SEARCH */];
  this.procedure = __WEBPACK_IMPORTED_MODULE_0__methods__["A" /* procedure */];
  this.transaction = __WEBPACK_IMPORTED_MODULE_0__methods__["Q" /* transaction */];
  this.join = __WEBPACK_IMPORTED_MODULE_0__methods__["r" /* join */];
  this.joinExek = __WEBPACK_IMPORTED_MODULE_0__methods__["t" /* joinExek */];
  this.joinStatement = __WEBPACK_IMPORTED_MODULE_0__methods__["u" /* joinStatement */];
  this.joinConditionsFormat = __WEBPACK_IMPORTED_MODULE_0__methods__["s" /* joinConditionsFormat */];
  this.search = __WEBPACK_IMPORTED_MODULE_0__methods__["G" /* search */];
  this.searchExek = __WEBPACK_IMPORTED_MODULE_0__methods__["I" /* searchExek */];
  this.searchStatement = __WEBPACK_IMPORTED_MODULE_0__methods__["L" /* searchStatement */];
  this.searchConditionsFormat = __WEBPACK_IMPORTED_MODULE_0__methods__["H" /* searchConditionsFormat */];
  this.searchOptions = __WEBPACK_IMPORTED_MODULE_0__methods__["K" /* searchOptions */];
  this.combineFields = __WEBPACK_IMPORTED_MODULE_0__methods__["e" /* combineFields */];
  this.insert = __WEBPACK_IMPORTED_MODULE_0__methods__["n" /* insert */];
  this.rollback = __WEBPACK_IMPORTED_MODULE_0__methods__["F" /* rollback */];
  this.deleteOne = __WEBPACK_IMPORTED_MODULE_0__methods__["deleteOne"];
  this.searchFieldsFormat = __WEBPACK_IMPORTED_MODULE_0__methods__["J" /* searchFieldsFormat */];
  this.fieldFormat = __WEBPACK_IMPORTED_MODULE_0__methods__["i" /* fieldFormat */];
  this.options = __WEBPACK_IMPORTED_MODULE_0__methods__["x" /* options */];
  this.sort = __WEBPACK_IMPORTED_MODULE_0__methods__["N" /* sort */];
  this.limit = __WEBPACK_IMPORTED_MODULE_0__methods__["v" /* limit */];
  this.parseGroup = __WEBPACK_IMPORTED_MODULE_0__methods__["z" /* parseGroup */];
  this.parseFormatCondition = __WEBPACK_IMPORTED_MODULE_0__methods__["y" /* parseFormatCondition */];
  this.getOperand = __WEBPACK_IMPORTED_MODULE_0__methods__["k" /* getOperand */];
  this.conditionsConnector = __WEBPACK_IMPORTED_MODULE_0__methods__["f" /* conditionsConnector */];
  this.updateandtake = __WEBPACK_IMPORTED_MODULE_0__methods__["T" /* updateandtake */];
  this.insertandtake = __WEBPACK_IMPORTED_MODULE_0__methods__["q" /* insertandtake */];
  this.deleteandtake = __WEBPACK_IMPORTED_MODULE_0__methods__["h" /* deleteandtake */];
  this.updateJoinTemplate = __WEBPACK_IMPORTED_MODULE_0__methods__["R" /* updateJoinTemplate */];
  this.multiTableUpdate = __WEBPACK_IMPORTED_MODULE_0__methods__["w" /* multiTableUpdate */];
  this.take = __WEBPACK_IMPORTED_MODULE_0__methods__["O" /* take */];
  this.takeSql = __WEBPACK_IMPORTED_MODULE_0__methods__["P" /* takeSql */];
  this.removeJoin = __WEBPACK_IMPORTED_MODULE_0__methods__["E" /* removeJoin */];
};

/* harmony default export */ __webpack_exports__["a"] = (Mysql);

/***/ }),
/* 61 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__dao__ = __webpack_require__(62);

/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0__dao__["a" /* default */]);

/***/ }),
/* 62 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__methods__ = __webpack_require__(63);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



var Dao = function Dao(pao) {
  _classCallCheck(this, Dao);

  this.pao = pao;
  this.DBS = null;
  this.init = __WEBPACK_IMPORTED_MODULE_0__methods__["c" /* init */];
  this.handleDataHiveRequest = __WEBPACK_IMPORTED_MODULE_0__methods__["b" /* handleDataHiveRequest */];
  this.handleDaoTakeDbs = __WEBPACK_IMPORTED_MODULE_0__methods__["a" /* handleDaoTakeDbs */];
};

/* harmony default export */ __webpack_exports__["a"] = (Dao);

/***/ }),
/* 63 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return init; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return handleDataHiveRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return handleDaoTakeDbs; });
var init = function init() {
  console.log('Dao has been initialised');
  this.listens({
    'dao-take-dbs': this.handleDaoTakeDbs.bind(this),
    'data-hive-request': this.handleDataHiveRequest.bind(this)
  });
};
var handleDataHiveRequest = function handleDataHiveRequest(data) {
  var self = this;
  var pao = self.pao;
  console.log('DAO');
  console.log(data);

  if (!pao.pa_contains(self.DBS, data.model.vendor)) {
    throw new Error('Specified database client is unknown');
  } else {
    var model = data.model;
    self.emit({
      type: "".concat(model.vendor, "-data-request"),
      data: {
        conn: self.DBS[model.vendor],
        table: model.table,
        opi: model.operation,
        query: data.document,
        outComehandler: data.handler
      }
    });
  }
};
var handleDaoTakeDbs = function handleDaoTakeDbs(data) {
  var self = this;
  self.log('Handling Hive Request');

  if (self.DBS === null) {
    self.DBS = {};
    self.DBS[data.vendor] = data.conn;
  } else {
    self.DBS[data.vendor] = data.conn;
  } // self.log('The dbs inside self.DBS')
  // console.log(self.DBS)

};

/***/ }),
/* 64 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__dman__ = __webpack_require__(65);

/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0__dman__["a" /* default */]);

/***/ }),
/* 65 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__methods__ = __webpack_require__(66);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

 // 
// const dman = require('redis')

var Dman = function Dman(pao) {
  _classCallCheck(this, Dman);

  this.pao = pao;
  this.DBS = [];
  this.supportedClients = {
    // mongo: {
    //   protocol: 'mongopro',
    //   connectMethods: ''
    // 	// connect: (0
    // },
    mysql: {
      protocol: '',
      connectMethod: 'createConnection'
    } // pg: {
    // },
    // redis: {
    // },
    // sqlite: {
    // }

  }; // // methods

  this.init = __WEBPACK_IMPORTED_MODULE_0__methods__["e" /* init */];
  this.handleConfigureDBMan = __WEBPACK_IMPORTED_MODULE_0__methods__["d" /* handleConfigureDBMan */];
  this.connectToClient = __WEBPACK_IMPORTED_MODULE_0__methods__["b" /* connectToClient */];
  this.getClientDriver = __WEBPACK_IMPORTED_MODULE_0__methods__["c" /* getClientDriver */];
  this.connect = __WEBPACK_IMPORTED_MODULE_0__methods__["a" /* connect */];
};

/* harmony default export */ __webpack_exports__["a"] = (Dman);

/***/ }),
/* 66 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return init; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return handleConfigureDBMan; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return connectToClient; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return getClientDriver; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return connect; });
var init = function init() {
  this.log('Dman has been initialised');
  this.listens({
    'config-dman': this.handleConfigureDBMan.bind(this)
  }); //   self.query('mysql',sql,process)
};
var handleConfigureDBMan = function handleConfigureDBMan(data) {
  var self = this;
  var pao = self.pao;
  console.log('THE DBMAN HANLDECONFIGURE');
  console.log('THE SUPPORTED CLIENTS');
  console.log(self.supportedClients);

  if (!pao.pa_isObject(data)) {
    self.log("No Client database client specified,System will use default", 'warn');
  } else {
    if (!pao.pa_contains(data, 'clients')) {
      self.error('System requires clients property with valid config to interface with database clients');
    } else {
      if (!pao.pa_isArray(data.clients)) {} else {
        var supported = self.supportedClients;

        try {
          data.clients.forEach(function (c, i) {
            if (!pao.pa_contains(supported, c.name)) {
              self.throwError("Client: \"".concat(c.name, " is not supported by the system\""));
            } else {
              self.connectToClient(c);
            }
          });

          if (self.DBS.length > 0) {
            self.log("Sending databases to the dao");
            self.emit({
              type: 'dao-take-dbs',
              data: {
                dbs: self.DBS
              }
            });
          }
        } catch (e) {}
      }
    }
  }
};
var connectToClient = function connectToClient(client) {
  var self = this;
  self.log("System is about to connect to client: ".concat(client.name));
  self.getClientDriver(client); // self.supportedClients[client.name].connect(client)
};
var getClientDriver = function getClientDriver(client) {
  var self = this;
  console.log("System is getting a client driver");
  console.log('THE OTHER DETAILS BELOW');
  console.log(client.name);
  console.log(client.name === 'mysql');

  try {
    var name = client.name;

    if (name === 'mysql') {
      self.supportedClients[client.name].driver = __webpack_require__(67);
    } else if (name === 'pg') {
      self.supportedClients[client.name].driver = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"pg\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
    } else if (name === 'redis') {
      self.supportedClients[client.name].driver = __webpack_require__(68);
    } else if (name === 'mongo') {
      self.supportedClients[client.name].driver = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"mongo\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
    } else {
      self.supportedClients[client.name].driver = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"sqlite\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
    } // switch(client.name){
    // 	case 'mysql': self.supportedClients[client.name].driver = require('mysql') 
    // 	break;
    // 	case 'pg': self.supportedClients[client.name].driver = require('pg') 
    // 	break;
    // 	case 'redis': self.supportedClients[client.name].driver = require('redis') 
    // 	break;
    // 	case 'mongo': self.supportedClients[client.name].driver = require('mongo') 
    // 	break;
    // 	default: self.supportedClients[client.name].driver = require('sqlite') 
    // 	break;
    // }


    if (!self.supportedClients[client.name].driver) {
      console.log('THE DRIVER REQUIREMENT FAILED');
      self.throwError('Failed to get client driver module');
    }

    self.connect(client);
  } catch (e) {
    console.log('THE DRIVER CONNECT ERROR');
    console.log(e.stack);
  }
};
var connect = function connect(client) {
  var self = this;
  self.log("System is connecting to client: ".concat(client.name));

  try {
    var sclient = self.supportedClients[client.name];
    var opts = {
      host: client.connect.host,
      user: client.connect.user,
      password: client.connect.pass,
      database: client.connect.name
    };
    var res = sclient.driver[sclient.connectMethod](opts, function (err, res) {
      if (err) {
        console.log('THE ACTUAL CONNECTION ERROR');
        console.log(err.stack);
      } else {
        self.DBS[client.name] = res;
        self.log("System has successfully connected to client");
        self.log("Client ready to serve queries");
      }
    }); //   console.log(res)

    res.connect(function (e) {
      if (e) {
        throw new Error(e);
      } else {
        self.DBS[client.name] = res;
        self.log("System has successfully connected to client");
        self.log("System is handing client connection");
        self.emit({
          type: 'dao-take-dbs',
          data: {
            vendor: client.name,
            conn: res
          }
        });
        self.log("Client ready to serve queries");
      }
    }); //   console.log('THE RESULTS')
    //   res.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
    // 	if (error) throw error;
    // 	console.log('THE CONNECTION TO THE DATABASE')
    // 	console.log('The solution is: ', results[0].solution);
    //   });
    //   res.query()
  } catch (e) {
    console.log('THE CONNECTION EROR');
    console.log(e.stack);
  }
};

/***/ }),
/* 67 */
/***/ (function(module, exports) {

module.exports = require("mysql");

/***/ }),
/* 68 */
/***/ (function(module, exports) {

module.exports = require("redis");

/***/ }),
/* 69 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__global__ = __webpack_require__(70);

/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0__global__["a" /* default */]);

/***/ }),
/* 70 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__methods__ = __webpack_require__(71);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



var Global = function Global(pao) {
  _classCallCheck(this, Global);

  this.pao = pao;
  this.globals = [];
  this.init = __WEBPACK_IMPORTED_MODULE_0__methods__["b" /* init */];
  this.handleRequestGlobalRequest = __WEBPACK_IMPORTED_MODULE_0__methods__["a" /* handleRequestGlobalRequest */];
};

/* harmony default export */ __webpack_exports__["a"] = (Global);

/***/ }),
/* 71 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return init; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return handleRequestGlobalRequest; });
var init = function init() {
  console.log('Global has been initialised');
  this.listens({
    'request-global-request': this.handleRequestGlobalRequest.bind(this)
  });
};
var handleRequestGlobalRequest = function handleRequestGlobalRequest(data) {
  var self = this;
  self.log('The Modules: ', self.globals);

  if (self.globals && self.globals.length > 0) {
    if (self.globals.indexOf(data) > -1) {
      self.emit({
        type: 'request-global-request-response',
        data: true
      });
    } else {
      self.emit({
        type: 'request-global-request-response',
        data: false
      });
    }
  } else {
    self.emit({
      type: 'request-global-request-error',
      data: false
    });
  }
};

/***/ }),
/* 72 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Activate; });
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var Activate = function Activate() {
  var libs = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  // let pao = ''
  // let core = ''
  // console.log('The Server')
  var core = new this.ANZII.CORE(this.ANZII.PILLAR);
  var pao = new this.ANZII.PAO(core);
  var anziiloger = {
    Anziiloger: this.ESM.Esm.Anziiloger
  };
  delete this.ESM.Esm.Anziiloger; // console.log(anziiloger)
  // console.log(this.ESM.Esm)
  // console.log('The core before modules')
  // console.log(pao.sb_jsToJson(core))
  // console.log(libs.length)
  // console.log('The ESM MODULES SHOULD BE IN PLACE RIGHT NOw')
  // console.log(this.ESM)
  // console.log(pao)
  // let global = pao.pa_clone(this.ESM.Esm.Global) 
  // delete this.ESM.Esm.Global

  libs.unshift(anziiloger);
  console.log('THE CORE');
  console.log(libs);
  libs.push(this.ESM.Esm); // libs.push(global) 

  libs.forEach(function (lib) {
    for (var moco in lib) {
      // console.log('Inside activate')
      // console.log(moco)
      console.log('THE LIB MOCO');
      console.log(_typeof(lib[moco]));
      console.log(lib[moco]);
      var moduId = moco.toLowerCase(); // console.log('THE V')
      // console.log(v)
      // console.log(`Currently executing module: ${moco}`)

      var modInstId = moduId; // console.log('Executing module without view')

      core.createModule(new lib[moco](pao.create(moduId, null)), moduId, modInstId); // console.log(`Currently starting module: ${moco}`)

      core.startModule(moduId, modInstId); // console.log('Dependicies')
      // console.log(typeof this.ANDZIIY.core)
      // let moduId = mod.name.toLowerCase();
    }
  });
};

/***/ }),
/* 73 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__modules_test__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__modules_list__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modules_fileman__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__modules_imageman__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__modules_job__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__modules_fetch__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__modules_jwt__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__modules_hash__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__modules_register__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__modules_login__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__modules_authentication__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__modules_frametest__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__modules_adash__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__modules_inalerts__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__modules_bookmark__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__modules_history__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__modules_downloadr__ = __webpack_require__(132);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__modules_fileupload__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__modules_upload__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__modules_mailer__ = __webpack_require__(142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__modules_kronjo__ = __webpack_require__(146);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__modules_asettings__ = __webpack_require__(150);






















/* harmony default export */ __webpack_exports__["a"] = ({
  Test: __WEBPACK_IMPORTED_MODULE_0__modules_test__["a" /* default */],
  List: __WEBPACK_IMPORTED_MODULE_1__modules_list__["a" /* default */],
  Asettings: __WEBPACK_IMPORTED_MODULE_21__modules_asettings__["a" /* default */],
  FileMan: __WEBPACK_IMPORTED_MODULE_2__modules_fileman__["a" /* default */],
  ImageMan: __WEBPACK_IMPORTED_MODULE_3__modules_imageman__["a" /* default */],
  Upload: __WEBPACK_IMPORTED_MODULE_18__modules_upload__["a" /* default */],
  Adash: __WEBPACK_IMPORTED_MODULE_12__modules_adash__["a" /* default */],
  Downloadr: __WEBPACK_IMPORTED_MODULE_16__modules_downloadr__["a" /* default */],
  Inalerts: __WEBPACK_IMPORTED_MODULE_13__modules_inalerts__["a" /* default */],
  Bookmark: __WEBPACK_IMPORTED_MODULE_14__modules_bookmark__["a" /* default */],
  History: __WEBPACK_IMPORTED_MODULE_15__modules_history__["a" /* default */],
  FrameTest: __WEBPACK_IMPORTED_MODULE_11__modules_frametest__["a" /* default */],
  Job: __WEBPACK_IMPORTED_MODULE_4__modules_job__["a" /* default */],
  Fetch: __WEBPACK_IMPORTED_MODULE_5__modules_fetch__["a" /* default */],
  Jwt: __WEBPACK_IMPORTED_MODULE_6__modules_jwt__["a" /* default */],
  Hash: __WEBPACK_IMPORTED_MODULE_7__modules_hash__["a" /* default */],
  Register: __WEBPACK_IMPORTED_MODULE_8__modules_register__["a" /* default */],
  Login: __WEBPACK_IMPORTED_MODULE_9__modules_login__["a" /* default */],
  Authentication: __WEBPACK_IMPORTED_MODULE_10__modules_authentication__["a" /* default */],
  FileUpload: __WEBPACK_IMPORTED_MODULE_17__modules_fileupload__["a" /* default */],
  Mailer: __WEBPACK_IMPORTED_MODULE_19__modules_mailer__["a" /* default */],
  Kronjo: __WEBPACK_IMPORTED_MODULE_20__modules_kronjo__["a" /* default */]
});

/***/ }),
/* 74 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__test__ = __webpack_require__(75);

/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0__test__["a" /* default */]);

/***/ }),
/* 75 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__methods__ = __webpack_require__(76);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



var Test = function Test(pao) {
  _classCallCheck(this, Test);

  this.pao = pao;
  this.init = __WEBPACK_IMPORTED_MODULE_0__methods__["c" /* init */];
  this.handleTesty = __WEBPACK_IMPORTED_MODULE_0__methods__["b" /* handleTesty */];
  this.handleAddTestMiddleware = __WEBPACK_IMPORTED_MODULE_0__methods__["a" /* handleAddTestMiddleware */];
  this.test = __WEBPACK_IMPORTED_MODULE_0__methods__["d" /* test */];
};

/* harmony default export */ __webpack_exports__["a"] = (Test);

/***/ }),
/* 76 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return init; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return handleTesty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return handleAddTestMiddleware; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return test; });
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var init = function init() {
  console.log('Test has been initialised');
  this.listens({
    'handle-testy': this.handleTesty.bind(this),
    'add-test-middleware': this.handleAddTestMiddleware.bind(this)
  }); //   console.log(this.pao)
  //   console.log(this) 
  //   this.emit({
  // 	  type: "handle-test",
  // 	  data: {
  // 		  callback: async function(e,res){
  // 			console.dir('The e value is: ',e)
  // 			console.log('The res value is: ',res)
  // 		  },
  // 		  value: "Test value"
  // 	  }
  // 	})
  // 	console.log('AFTER HANDLE-TEST HAS BEEN EMITTED')
};
var handleTesty = function handleTesty(data) {
  console.log('HANDLE TEST EVENT HAS BEEN EMITTED'); // this.html = data.html

  var self = this;
  console.dir('This module contains the following resources: ', self);
  console.log(self);
};
var handleAddTestMiddleware = function handleAddTestMiddleware(data) {
  console.log('HandleAddTestMiddleware has occured');
  console.log(data); // this.html = data.html

  var self = this;
  data.filterCallback(data.type, self.test.bind(self));
};
var test = function test(req, res, next) {
  console.log('HI THERE, I AM A TEST MIDDLEWARE AND I LOVE IT');
  console.log(_typeof(res.send));
  next();
};

/***/ }),
/* 77 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__list__ = __webpack_require__(78);

/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0__list__["a" /* default */]);

/***/ }),
/* 78 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__methods__ = __webpack_require__(79);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



var List = function List(pao) {
  _classCallCheck(this, List);

  this.pao = pao;
  this.init = __WEBPACK_IMPORTED_MODULE_0__methods__["b" /* init */];
  this.handleListTask = __WEBPACK_IMPORTED_MODULE_0__methods__["a" /* handleListTask */];
  this.list = __WEBPACK_IMPORTED_MODULE_0__methods__["c" /* list */];
};

/* harmony default export */ __webpack_exports__["a"] = (List);

/***/ }),
/* 79 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return init; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return handleListTask; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return list; });
var init = function init() {
  console.log('List has been initialised');
  this.listens({
    'handle-list-task': this.handleListTask.bind(this)
  });
};
var handleListTask = function handleListTask(data) {
  var self = this;
  self.list(data);
};
var list = function list(data) {
  var self = this;
  var pao = self.pao;
  self.log('LIST DATA');
  self.log(data);

  if (data.hasOwnProperty('callback')) {
    data.callback(null, {
      todo: {
        list: {
          items: ['I ate food', 'I wrote code', 'I read a book', 'I watched a movie']
        }
      }
    });
  } else {}
};

/***/ }),
/* 80 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__fileman__ = __webpack_require__(81);

/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0__fileman__["a" /* default */]);

/***/ }),
/* 81 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__methods__ = __webpack_require__(82);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

 // const multer = require('multer')
// const wrStream = require('streamifier')
// const rStream = require('concat-stream')

var path = __webpack_require__(0);

var fs = __webpack_require__(3);

var fileType = __webpack_require__(83);

var FileMan = function FileMan(pao) {
  _classCallCheck(this, FileMan);

  this.pao = pao;
  this.fs = fs;
  this.path = path;
  this.FileType = fileType;
  this.system = null;
  this.supportedStorageTypes = ['local', 'awsS3', 'cloudinary', 'digitalOcean'];
  this.supportedFileTypes = {
    image: ['png,gif,jpeg,jpg'],
    text: ['pdf', 'docx', 'txt'],
    db: ['sql', 'csv']
  };
  this.init = __WEBPACK_IMPORTED_MODULE_0__methods__["j" /* init */];
  this.handleParseFile = __WEBPACK_IMPORTED_MODULE_0__methods__["f" /* handleParseFile */];
  this.handleSaveFile = __WEBPACK_IMPORTED_MODULE_0__methods__["h" /* handleSaveFile */];
  this.beginFileSave = __WEBPACK_IMPORTED_MODULE_0__methods__["a" /* beginFileSave */];
  this.handleRenameFile = __WEBPACK_IMPORTED_MODULE_0__methods__["g" /* handleRenameFile */];
  this.renameFile = __WEBPACK_IMPORTED_MODULE_0__methods__["k" /* renameFile */];
  this.handleGetFile = __WEBPACK_IMPORTED_MODULE_0__methods__["d" /* handleGetFile */];
  this.handleMakeFile = __WEBPACK_IMPORTED_MODULE_0__methods__["e" /* handleMakeFile */]; //  this.handleRemoveFile = methods.handleRemoveFile

  this.generateFileName = __WEBPACK_IMPORTED_MODULE_0__methods__["c" /* generateFileName */];
  this.validateFile = __WEBPACK_IMPORTED_MODULE_0__methods__["n" /* validateFile */];
  this.saveFile = __WEBPACK_IMPORTED_MODULE_0__methods__["l" /* saveFile */];
  this.deleteFile = __WEBPACK_IMPORTED_MODULE_0__methods__["b" /* deleteFile */];
  this.saveToSource = __WEBPACK_IMPORTED_MODULE_0__methods__["saveToSource"];
  this.handleTakeSystemBase = __WEBPACK_IMPORTED_MODULE_0__methods__["i" /* handleTakeSystemBase */];
};

/* harmony default export */ __webpack_exports__["a"] = (FileMan);

/***/ }),
/* 82 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return init; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return handleParseFile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return handleSaveFile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return handleGetFile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return handleTakeSystemBase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return beginFileSave; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return handleMakeFile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return handleRenameFile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return deleteFile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return generateFileName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return validateFile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return saveFile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return renameFile; });
/* unused harmony export getFile */
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var init = function init() {
  this.log('FileMan has been initialised');
  this.listens({
    'save-file': this.handleSaveFile.bind(this),
    // 'remove-file': this.handleRemoveFile.bind(this),
    'take-system-base': this.handleTakeSystemBase.bind(this),
    'get-file': this.handleGetFile.bind(this)
  });
};
var handleParseFile = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(data) {
    var self, fileName, size, save;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            self = this;
            fileName = data.fileName, size = data.size, save = data.save;
            self.validateFile(fileName, size).then(function (valid) {
              if (save) {
                self.beginFileSave(data).then(function (response) {
                  self.callback(null, response);
                })["catch"](function (e) {
                  self.callback(e, null);
                });
              } else {
                self.callback(null, valid);
              }
            })["catch"](function (e) {
              reject(new Error(e.message));
            });

          case 3:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function handleParseFile(_x) {
    return _ref.apply(this, arguments);
  };
}();
var handleSaveFile = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(data) {
    var self, firstKey, file;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            self = this;
            self.callback = data.callback;
            _context2.next = 4;
            return self.log('HANDLE SAVE FILE DATA');

          case 4:
            _context2.next = 6;
            return self.log(data);

          case 6:
            if (data.multiple) {} else {
              firstKey = Object.keys(data.files)[0];
              self.log('FIRST KEY');
              self.log(firstKey);
              file = data.files[firstKey];
              self.log(file);
              self.beginFileSave({
                path: file.path,
                dir: data.dir,
                old: data.old,
                saveType: data.saveType,
                userID: data.ID
              }).then(function (response) {
                console.log('FILEHANDLE FILE SAVE');
                console.log(response);
                self.callback(null, response);
              })["catch"](function (e) {
                console.log('FILEHANDLE FILE SAVEERROR');
                console.log(e);
                self.callback(e, null);
              });
            }

          case 7:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, this);
  }));

  return function handleSaveFile(_x2) {
    return _ref2.apply(this, arguments);
  };
}();
var handleGetFile = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(data) {
    var self, pao, path, fs, fileName, fileDir, getType, getFiles, getExtension, dir, realFile, readStream, _ext, _ext2, _realFile;

    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            self = this;
            pao = self.pao;
            path = self.path;
            fs = self.fs;
            fileName = data.fileName;
            fileDir = data.filePath;
            getType = data.getType;
            getFiles = pao.pa_getFiles;
            getExtension = pao.pa_getExtension;
            dir = "".concat(self.system.DOCUMENT_ROOT).concat(path.sep).concat(fileDir); // console.log('FILEMAN DIR AND DATA')
            // self.log(dir)
            // self.log(data)

            if (!(getType === 'stream')) {
              _context3.next = 24;
              break;
            }

            console.log('THE TYPE OF FILE TO BE RETRIEVED IS A STREAM');
            _context3.next = 14;
            return getFiles(dir, {
              recursive: false
            }, fileName);

          case 14:
            realFile = _context3.sent;

            if (!realFile) {
              _context3.next = 21;
              break;
            }

            readStream = fs.createReadStream("".concat(dir).concat(path.sep).concat(fileName));
            _ext = getExtension(realFile);
            return _context3.abrupt("return", data.callback({
              readStream: readStream,
              ext: _ext
            }));

          case 21:
            return _context3.abrupt("return", data.callback({
              readStream: null,
              ext: ext
            }));

          case 22:
            _context3.next = 29;
            break;

          case 24:
            _ext2 = getExtension(_realFile);
            _context3.next = 27;
            return getFiles(dir, {
              recursive: false
            }, fileName);

          case 27:
            _realFile = _context3.sent;
            return _context3.abrupt("return", data.callback({
              filePath: "".concat(dir).concat(path.sep).concat(fileName),
              ext: _ext2
            }));

          case 29:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, this);
  }));

  return function handleGetFile(_x3) {
    return _ref3.apply(this, arguments);
  };
}();
var handleTakeSystemBase = function handleTakeSystemBase(data) {
  var self = this; // self.log('THE SYSTEMBASE HANDLE')
  // self.log(data)

  self.system = data.systemBase;
};
var beginFileSave = function beginFileSave(file) {
  var self = this;
  return new Promise(function (resolve, reject) {
    // self
    // .validateFile(file)
    // .then((valid)=>{
    // 	self
    // 	.saveFile(file)
    // 	.then((savedFile)=>{
    // 		resolve(savedFile)
    // 	})
    // 	.catch((e)=>{
    // 		reject(new Error(e))
    // 	})
    // }).
    // catch((e)=>{
    // 	reject(new Error(e))
    // })
    //   if(file.saveType === 'save'){
    // self
    // .saveFile(file)
    // .then((savedFile)=>{
    // 	if(saveType === 'unlinkold'){
    // 	return	self.deleteFile(file.old)
    // 			.then((deleted)=>{
    // 				resolve(deleted)
    // 			})
    // 			.catch((e)=>{
    // 				reject(e)
    // 			})
    // 	}
    // 	resolve(savedFile)
    // })
    // .catch((e)=>{
    // 	reject(new Error(e))
    // })
    //   }else{
    self.renameFile(file.path, file.dir, file.userID).then( /*#__PURE__*/function () {
      var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(renamedFile) {
        var old, oldChunks;
        return regeneratorRuntime.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.next = 2;
                return self.log('THE RENAMED FILE');

              case 2:
                _context5.next = 4;
                return self.log(file);

              case 4:
                if (!(file.saveType === 'unlinkold')) {
                  _context5.next = 16;
                  break;
                }

                old = file.old;
                oldChunks = old.split('_');
                _context5.next = 9;
                return self.log('THE OLD FILE MUST BE DELETED');

              case 9:
                _context5.next = 11;
                return self.log(oldChunks);

              case 11:
                if (!(oldChunks[2] === '0')) {
                  _context5.next = 13;
                  break;
                }

                return _context5.abrupt("return", resolve(renamedFile));

              case 13:
                _context5.next = 15;
                return self.log('ABOUT TO DELETE THE FILE');

              case 15:
                return _context5.abrupt("return", self.deleteFile(file.dir, file.old).then( /*#__PURE__*/function () {
                  var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(deleted) {
                    return regeneratorRuntime.wrap(function _callee4$(_context4) {
                      while (1) {
                        switch (_context4.prev = _context4.next) {
                          case 0:
                            _context4.next = 2;
                            return self.log('A FILE HAS BEEN DELETED');

                          case 2:
                            _context4.next = 4;
                            return self.log(deleted);

                          case 4:
                            resolve({
                              url: renamedFile.url,
                              deltedFile: true
                            });

                          case 5:
                          case "end":
                            return _context4.stop();
                        }
                      }
                    }, _callee4);
                  }));

                  return function (_x5) {
                    return _ref5.apply(this, arguments);
                  };
                }())["catch"](function (e) {
                  self.log('THE DELETION HAS FAILED WITH ERROR');
                  self.log(e);
                  resolve({
                    url: renameFile.url,
                    deletedFile: false
                  }); //reject(e)
                }));

              case 16:
                resolve(renamedFile);

              case 17:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5);
      }));

      return function (_x4) {
        return _ref4.apply(this, arguments);
      };
    }())["catch"](function (e) {
      reject(new Error(e));
    }); // }
  });
};
var handleMakeFile = function handleMakeFile(data) {
  var self = this;
  self.getJobs(data);
};
var handleRenameFile = /*#__PURE__*/function () {
  var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(oldPath) {
    var self;
    return regeneratorRuntime.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            self = this;
            self.renameFile(oldPath).then(function (newFile) {
              self.callback(null, newFile);
            })["catch"](function (e) {
              self.callback(e, null);
            });

          case 2:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6, this);
  }));

  return function handleRenameFile(_x6) {
    return _ref6.apply(this, arguments);
  };
}();
var deleteFile = /*#__PURE__*/function () {
  var _ref7 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee8(dir, fileName) {
    var self, fs, path, filePath;
    return regeneratorRuntime.wrap(function _callee8$(_context8) {
      while (1) {
        switch (_context8.prev = _context8.next) {
          case 0:
            self = this;
            fs = self.fs;
            path = self.path;
            _context8.next = 5;
            return self.log('THE DELETE METHOD');

          case 5:
            filePath = "".concat(self.system.DOCUMENT_ROOT).concat(path.sep).concat(dir).concat(path.sep).concat(fileName);
            _context8.next = 8;
            return self.log(filePath);

          case 8:
            return _context8.abrupt("return", new Promise(function (resolve, reject) {
              fs.unlink(filePath, /*#__PURE__*/function () {
                var _ref8 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7(err, deleted) {
                  return regeneratorRuntime.wrap(function _callee7$(_context7) {
                    while (1) {
                      switch (_context7.prev = _context7.next) {
                        case 0:
                          _context7.next = 2;
                          return self.log('THE DELETION RESPONSE::DELETE');

                        case 2:
                          _context7.next = 4;
                          return self.log(deleted);

                        case 4:
                          resolve(true);

                        case 5:
                        case "end":
                          return _context7.stop();
                      }
                    }
                  }, _callee7);
                }));

                return function (_x9, _x10) {
                  return _ref8.apply(this, arguments);
                };
              }()); //    .then(async (delted)=>{
              // 	   await self.log('THE DELETION RESPONSE')
              // 	   await self.log(deleted)
              // 	   resolve(true)
              // 	})
              // 	.catch((e)=>{reject(e)})
            }));

          case 9:
          case "end":
            return _context8.stop();
        }
      }
    }, _callee8, this);
  }));

  return function deleteFile(_x7, _x8) {
    return _ref7.apply(this, arguments);
  };
}();
var generateFileName = function generateFileName(fileName) {
  var ID = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  var self = this;
  var pao = self.pao;
  var generateUniqueID = pao.pa_generateUniqueID; // const crypto = self.crypto 

  return new Promise(function (resolve, reject) {
    // create pseudo random bytes 
    // const bytes = crypto.pseudoRandomBytes(32);
    // create the md5 hash of the random bytes 
    // const checksum = crypto.createHash('MD5').update(bytes).digest('hex');
    var name = "uid_ID_".concat(ID, "_").concat(generateUniqueID());
    self.FileType.fromFile(fileName).then(function (type) {
      if (type.ext) {
        resolve("".concat(name, ".").concat(type.ext));
      } else {
        reject(new Error('Extension Error'));
      }
    });
  });
};
var validateFile = function validateFile(fileName) {
  var size = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  var self = this;
  return new Promise(function (resolve, reject) {
    self.FileType.fromFile(fileName).then(function (type) {
      if (self.supportedFileTypes.indexOf(type.ext) < 0) {
        reject('Filetype not supported');
      } else {
        if (size > 0) {
          if (size > fileName.size) {
            reject(new Error('File exceed accepted size'));
          } else {
            resolve(true);
          }
        } else {
          resolve(true);
        }
      }
    })["catch"](function (e) {
      reject(new Error(e.message));
    });
  });
};
var saveFile = /*#__PURE__*/function () {
  var _ref9 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee9(file) {
    var self, pao, fs, fileName, path, generateName, name;
    return regeneratorRuntime.wrap(function _callee9$(_context9) {
      while (1) {
        switch (_context9.prev = _context9.next) {
          case 0:
            self = this;
            pao = self.pao;
            fs = self.fs;
            fileName = file.fileName, path = file.path, generateName = file.generateName;

            if (!generateName) {
              _context9.next = 10;
              break;
            }

            _context9.next = 7;
            return self.generateFileName(fileName);

          case 7:
            _context9.t0 = _context9.sent;
            _context9.next = 11;
            break;

          case 10:
            _context9.t0 = fileName;

          case 11:
            name = _context9.t0;
            return _context9.abrupt("return", new Promise(function (resolve, reject) {
              if (!(name instanceof String)) return reject(new Error(name.message));
              var savePath = "".concat(self.dir).concat(path).concat(name);
              var wStream = fs.createWriteStream(savePath);
              var rStream = fs.createReadStream(name);
              wStream.on('end', function () {
                resolve({
                  savedFile: savePath
                });
              });
              wStream.on('error', function () {
                reject(new Error('Writablestream encountered an error'));
              });
              rStream.on('error', function () {
                reject(new Error('Readablestream encountered an error'));
              });
              rStream.pipe(wStream);
            }));

          case 13:
          case "end":
            return _context9.stop();
        }
      }
    }, _callee9, this);
  }));

  return function saveFile(_x11) {
    return _ref9.apply(this, arguments);
  };
}();
var renameFile = /*#__PURE__*/function () {
  var _ref10 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee10(fileName, dir, ID) {
    var self, fs, path, name, newPath;
    return regeneratorRuntime.wrap(function _callee10$(_context10) {
      while (1) {
        switch (_context10.prev = _context10.next) {
          case 0:
            self = this;
            fs = self.fs;
            path = self.path;
            console.log('BEFORE RENAME');
            _context10.next = 6;
            return self.generateFileName(fileName, ID);

          case 6:
            name = _context10.sent;
            console.log('THE NAME RENAME FILE');
            console.log(name);
            newPath = "".concat(self.system.DOCUMENT_ROOT).concat(path.sep).concat(dir).concat(path.sep).concat(name);
            return _context10.abrupt("return", new Promise(function (resolve, reject) {
              fs.rename(fileName, newPath, function (e) {
                console.log('the file has been renammed');
                if (e) return reject(e);
                resolve({
                  url: name
                });
              }); //  .then((newFile)=>{
              // 	console.log('FILE SAVE BY RENAME NEWFILE')
              // 	console.log(newFile)
              // 	console.log(newPath)
              //  	//  resolve(newFile)
              //  })
              //  .catch((e)=>{
              //  	reject(e)
              //  })
            }));

          case 11:
          case "end":
            return _context10.stop();
        }
      }
    }, _callee10, this);
  }));

  return function renameFile(_x12, _x13, _x14) {
    return _ref10.apply(this, arguments);
  };
}();
var getFile = /*#__PURE__*/function () {
  var _ref11 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee11(data) {
    var self, fs, name;
    return regeneratorRuntime.wrap(function _callee11$(_context11) {
      while (1) {
        switch (_context11.prev = _context11.next) {
          case 0:
            self = this;
            fs = self.fs;
            _context11.next = 4;
            return self.generateFileName(fileName);

          case 4:
            name = _context11.sent;
            return _context11.abrupt("return", new Promise(function (resolve, reject) {
              fs.rename(fileName, name).then(function (newFile) {
                resolve(newFile);
              })["catch"](function (e) {
                reject(new Error(e.message));
              });
            }));

          case 6:
          case "end":
            return _context11.stop();
        }
      }
    }, _callee11, this);
  }));

  return function getFile(_x15) {
    return _ref11.apply(this, arguments);
  };
}();

/***/ }),
/* 83 */
/***/ (function(module, exports) {

module.exports = require("file-type");

/***/ }),
/* 84 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__imageman__ = __webpack_require__(85);

/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0__imageman__["a" /* default */]);

/***/ }),
/* 85 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__methods__ = __webpack_require__(86);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



var jimp = __webpack_require__(87); // const wrStream = require('streamifier')
// const rStream = require('concat-stream')


var Imageman = function Imageman(pao) {
  _classCallCheck(this, Imageman);

  this.pao = pao;
  this.grafix = jimp;
  this.init = __WEBPACK_IMPORTED_MODULE_0__methods__["f" /* init */];
  this.handleManipulateImage = __WEBPACK_IMPORTED_MODULE_0__methods__["d" /* handleManipulateImage */];
  this.handleResizeImage = __WEBPACK_IMPORTED_MODULE_0__methods__["e" /* handleResizeImage */];
  this.handleCropImage = __WEBPACK_IMPORTED_MODULE_0__methods__["c" /* handleCropImage */];
  this.resizeImage = __WEBPACK_IMPORTED_MODULE_0__methods__["g" /* resizeImage */];
  this.cropImage = __WEBPACK_IMPORTED_MODULE_0__methods__["cropImage"];
  this.greyScale = __WEBPACK_IMPORTED_MODULE_0__methods__["b" /* greyScale */];
};

/* harmony default export */ __webpack_exports__["a"] = (Imageman);

/***/ }),
/* 86 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return init; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return handleManipulateImage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return handleResizeImage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return resizeImage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return handleCropImage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return greyScale; });
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var init = function init() {
  this.log('Job has been initialised');
  this.listens({
    'manipulate-image': this.handleManipulateImage.bind(this),
    'resize-image': this.handleResizeImage.bind(this),
    'greyscale-image': this.handleResizeImage.bind(this),
    'crop-image': this.handleResizeImage.bind(this),
    'scale-image': this.handleResizeImage.bind(this)
  });
};
var handleManipulateImage = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(data) {
    var self;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            self = this;
            self.getJobs(data);
            return _context.abrupt("return", new Promise(function (resolve, reject) {}));

          case 3:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function handleManipulateImage(_x) {
    return _ref.apply(this, arguments);
  };
}();
var handleResizeImage = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(data) {
    var self, imageData;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            self = this;
            self.callback = data.callback;
            imageData = data.image;
            self.resizeImage(imageData).then( /*#__PURE__*/function () {
              var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(resized) {
                return regeneratorRuntime.wrap(function _callee2$(_context2) {
                  while (1) {
                    switch (_context2.prev = _context2.next) {
                      case 0:
                        _context2.next = 2;
                        return self.log('THE RESIZED IMAGE');

                      case 2:
                        _context2.next = 4;
                        return self.log(resized);

                      case 4:
                        self.callback(null, resized);

                      case 5:
                      case "end":
                        return _context2.stop();
                    }
                  }
                }, _callee2);
              }));

              return function (_x3) {
                return _ref3.apply(this, arguments);
              };
            }())["catch"](function (e) {
              self.callback(e, null);
            });

          case 4:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, this);
  }));

  return function handleResizeImage(_x2) {
    return _ref2.apply(this, arguments);
  };
}();
var resizeImage = function resizeImage(imageData) {
  var self = this;
  var grafix = self.grafix;
  var image = imageData.image,
      dimensions = imageData.dimensions;
  var x = dimensions.x,
      y = dimensions.y;
  return new Promise(function (resolve, reject) {
    grafix.read(image).then(function (img) {
      console.log('READ IMAGE IMAGE ');
      console.log(img);
      console.log(img.resize);
      img.resize(x, y).writeAsync(image).then(function (resized) {
        console.log('THE WRITTEN IMAGE');
        console.log(resized);
        resolve(resized);
      })["catch"](function (e) {
        reject(new Error(e.message));
      });
    })["catch"](function (e) {
      reject(new Error(e.message));
    });
  });
};
var handleCropImage = function handleCropImage(data) {
  var self = this;
  self.getJobs(data);
  return new Promise(function (resolve, reject) {});
};
var greyScale = function greyScale(data) {
  var self = this;
  self.getJobs(data);
  return new Promise(function (resolve, reject) {});
};

/***/ }),
/* 87 */
/***/ (function(module, exports) {

module.exports = require("jimp");

/***/ }),
/* 88 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__job__ = __webpack_require__(89);

/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0__job__["a" /* default */]);

/***/ }),
/* 89 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__methods__ = __webpack_require__(90);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



var fetch = __webpack_require__(6);

var jobs = __webpack_require__(92);

var fuzzySearch = __webpack_require__(93);

var internalIP = __webpack_require__(94);

var Job = function Job(pao) {
  _classCallCheck(this, Job);

  this.pao = pao;
  this.url = 'http://public.api.careerjet.net/search?locale_code=en_ZA&affid=0e6712acc74087da913e65985433a122';
  this.fetch = fetch;
  this.jobsJson = jobs;
  this.fuzzySearch = fuzzySearch;
  this.ip = internalIP; // this.partners = [
  //  {
  //  	url: 'https://www.indeed.com'
  //    apiCreds:{uname: 'name'}
  //  }
  // ]

  this.init = __WEBPACK_IMPORTED_MODULE_0__methods__["p" /* init */];
  this.handleJobTask = __WEBPACK_IMPORTED_MODULE_0__methods__["o" /* handleJobTask */];
  this.getJobsWithThingy = __WEBPACK_IMPORTED_MODULE_0__methods__["i" /* getJobsWithThingy */];
  this.getCondition = __WEBPACK_IMPORTED_MODULE_0__methods__["d" /* getCondition */];
  this.formatQuery = __WEBPACK_IMPORTED_MODULE_0__methods__["b" /* formatQuery */];
  this.getDbKey = __WEBPACK_IMPORTED_MODULE_0__methods__["e" /* getDbKey */];
  this.generateQueryConditions = __WEBPACK_IMPORTED_MODULE_0__methods__["c" /* generateQueryConditions */];
  this.refineOutsourcedJobs = __WEBPACK_IMPORTED_MODULE_0__methods__["r" /* refineOutsourcedJobs */];
  this.getJobs = __WEBPACK_IMPORTED_MODULE_0__methods__["h" /* getJobs */];
  this.getJFP = __WEBPACK_IMPORTED_MODULE_0__methods__["g" /* getJFP */];
  this.getNativeJobs = __WEBPACK_IMPORTED_MODULE_0__methods__["k" /* getNativeJobs */];
  this.searchBatch = __WEBPACK_IMPORTED_MODULE_0__methods__["s" /* searchBatch */];
  this.getSubscribers = __WEBPACK_IMPORTED_MODULE_0__methods__["m" /* getSubscribers */];
  this.handleGetNewJobs = __WEBPACK_IMPORTED_MODULE_0__methods__["n" /* handleGetNewJobs */];
  this.getNewJobs = __WEBPACK_IMPORTED_MODULE_0__methods__["l" /* getNewJobs */];
  this.getMailRecipient = __WEBPACK_IMPORTED_MODULE_0__methods__["j" /* getMailRecipient */];
  this.getEmailTemplate = __WEBPACK_IMPORTED_MODULE_0__methods__["f" /* getEmailTemplate */];
  this.alertEmailResponses = __WEBPACK_IMPORTED_MODULE_0__methods__["a" /* alertEmailResponses */];
  this.searchBatchHandler = __WEBPACK_IMPORTED_MODULE_0__methods__["t" /* searchBatchHandler */];
  this.multiDataRequestHandler = __WEBPACK_IMPORTED_MODULE_0__methods__["q" /* multiDataRequestHandler */];
};

/* harmony default export */ __webpack_exports__["a"] = (Job);

/***/ }),
/* 90 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return init; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return handleJobTask; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return handleGetNewJobs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return getNewJobs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return getSubscribers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return getMailRecipient; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return getEmailTemplate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return alertEmailResponses; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "r", function() { return refineOutsourcedJobs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return getJobs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return getJobsWithThingy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return getJFP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return getNativeJobs; });
/* unused harmony export saveApplication */
/* unused harmony export getJobDetail */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return generateQueryConditions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return getCondition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return formatQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return getDbKey; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s", function() { return searchBatch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "q", function() { return multiDataRequestHandler; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "t", function() { return searchBatchHandler; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_fuzzy_search__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_fuzzy_search___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_fuzzy_search__);
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _readOnlyError(name) { throw new Error("\"" + name + "\" is read-only"); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }


var init = function init() {
  this.log('Job has been initialised');
  this.listens({
    'handle-job-task': this.handleJobTask.bind(this),
    'get-new-jobs': this.handleGetNewJobs.bind(this)
  });
};
var handleJobTask = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(data) {
    var self, pao, contains, isOBject, clientRequest, user;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            self = this;
            pao = self.pao;
            contains = pao.pa_contains;
            isOBject = pao.pa_isObject;
            clientRequest = data.payload.request;
            user = data.payload.user;
            self.callback = data.callback;
            self.log(data); // let uid = user.ID

            console.log('THE DATA INSIDE Adash');
            console.log(user); // console.log('THE PARSED DATA TEST')
            // console.log(data)
            // console.log(user)
            // self
            // .getJobs(user)
            // .then((jobs)=>{self.callback(null,jobs)})
            // .catch((e)=>{
            // 	console.log('Reject error')
            // 	console.log(e)
            // 	self.callback(e,null)
            // })

            if (isOBject(user)) {
              _context.next = 12;
              break;
            }

            return _context.abrupt("return", self.callback({
              message: 'User has not been specified'
            }, null));

          case 12:
            if (user.action) {
              _context.next = 14;
              break;
            }

            return _context.abrupt("return", self.callback({
              message: 'Invalid request'
            }, null));

          case 14:
            if (contains(user, ['payload'])) {
              _context.next = 16;
              break;
            }

            return _context.abrupt("return", self.callback({
              message: 'missing required key'
            }, null));

          case 16:
            _context.t0 = user.action;
            _context.next = _context.t0 === 'getJobsWithThingy' ? 19 : _context.t0 === 'getJobs' ? 21 : 23;
            break;

          case 19:
            self.getJobsWithThingy(user.payload).then(function (jobs) {
              var pageLimit = user.payload.limit;
              var totalJobs = jobs.totalJobs;
              var options = user.payload;

              if (totalJobs === 0 || totalJobs < pageLimit) {
                var extraJobsLimit = pageLimit - totalJobs; //   let jobsJson = self.jobsJson
                //   self.log(jobsJson.pages)
                //   self.log(jobsJson.hits)
                //   let refinedJobs = self.refineOutsourcedJobs(jobsJson.jobs) 
                //   jobs.totalJobs = jobs.totalJobs + jobsJson.hits 
                //   self.log(refinedJobs.length)
                //   return self.callback(null,refinedJobs)

                var forwarded = clientRequest.req.headers['x-forwarded-for'];
                var ip = forwarded ? forwarded.split(/, /)[0] : clientRequest.req.connection.remoteAddress;
                var uAgent = clientRequest.req.headers['user-agent'];
                var blackList = ['sort', 'limit', 'currentPage', 'skip', 'jq'];
                var urlParametersString = '';
                var urlParameters = [];
                options.jq ? urlParametersString += "&keywords=".concat(options.jq) : '';
                options.sort ? urlParametersString += "&sort=".concat(options.sort) : '';
                options.currentPage ? urlParametersString += "&page=".concat(options.currentPage) : '';
                Object.entries(options).forEach(function (para, i) {
                  var key = para[0];

                  if (blackList.indexOf(key) < 0) {
                    urlParameters.push("&".concat(self.getDbKey(key, 'source'), "=").concat(para[1]));
                  }
                });
                console.log('THE URL PARAMETERS');
                console.log(urlParameters);
                urlParametersString += "".concat(urlParameters.join(''), " &pagesize=").concat(extraJobsLimit);
                var url = "".concat(self.url).concat(urlParametersString);
                url += "&user_ip=".concat(ip, "&user_agent=").concat(uAgent);
                self.log('THE URL');
                self.log(url);
                self.log(options);
                self.fetch.get(url).then(function (response) {
                  console.log('THE REQUEST HAS SUCCEEDED TO CAREERJET');
                  console.log(response.data); // return resolve({success: response.data}) 

                  if (response.data.type.toUpperCase() !== 'JOBS') return self.callback(null, jobs);
                  var refinedJobs = self.refineOutsourcedJobs(response.data.jobs); // console.log(refinedJobs) 
                  // console.log(jobs) 
                  // console.log(response.data.hits) 
                  // console.log(jobs.totalJobs)

                  jobs.totalJobs = jobs.totalJobs + response.data.hits; // console.log(jobs.totalJobs)

                  jobs.posts = jobs.posts.concat(refinedJobs);
                  self.log(refinedJobs.length);
                  return self.callback(null, jobs); //return response.json();
                })["catch"](function (err) {
                  self.callback(null, jobs); //   console.log('JOBS FROM SOURCE FAILED DUE TO')
                  //   return console.log(err) 
                });
              } else {
                self.callback(null, jobs);
              }
            })["catch"](function (e) {
              console.log('Reject error');
              console.log(e);
              self.callback(e, null);
            });
            return _context.abrupt("break", 24);

          case 21:
            self.getJobs(user.payload).then(function (jobs) {
              var pageLimit = user.payload.limit;
              var totalJobs = jobs.totalJobs;
              var options = user.payload.search;

              if (totalJobs < pageLimit) {
                var extraJobsLimit = pageLimit - totalJobs;
                var forwarded = clientRequest.req.headers['x-forwarded-for'];
                var ip = forwarded ? forwarded.split(/, /)[0] : clientRequest.req.connection.remoteAddress;
                var uAgent = clientRequest.req.headers['user-agent'];
                var urlParameters = options.map(function (para, i) {
                  return "&".concat(self.getDbKey(para.key, 'source'), "=").concat(para.value);
                });
                var urlParametersString = "".concat(urlParameters.split(','), " &limit=").concat(extraJobsLimit);
                var url = "".concat(self.url).concat(urlParametersString);
                url += "&user_ip=".concat(ip, "&user_agent=").concat(uAgent);
                self.fetch.get(url).then(function (response) {
                  console.log('THE REQUEST HAS SUCCEEDED TO CAREERJET');
                  console.log(response.data); // return resolve({success: response.data}) 

                  var refinedJobs = self.refineOutsourcedJobs(response.data);
                  jobs.totalJobs = jobs.totalJobs + refinedJobs.totalHits;
                  return self.callback(null, jobs); //return response.json();
                })["catch"](function (err) {
                  self.callback(null, jobs);
                  console.log('JOBS FROM SOURCE FAILED DUE TO');
                  return console.log(err);
                });
              } else {
                self.callback(null, jobs);
              }
            })["catch"](function (e) {
              return self.callback(e, null);
            });
            return _context.abrupt("break", 24);

          case 23:
            self.callback(new Error('Unknown data request'), null);

          case 24:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function handleJobTask(_x) {
    return _ref.apply(this, arguments);
  };
}();
var handleGetNewJobs = function handleGetNewJobs(data) {
  var self = this;
  self.logSync('THE NEWJOBS HANDLE REQUEST');
  self.getNewJobs();
};
var getNewJobs = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(data) {
    var _this = this;

    var self, ip, uAgent, jobsThreshold, pagesize, callCount, sort, hits, accumulatedJobs, allJobs, filteredJobs, failureCounts, breakOutOfLoop, _loop, i, _ret, refinedJobs;

    return regeneratorRuntime.wrap(function _callee2$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            self = this;
            ip = self.ip.address();
            uAgent = "Mozilla/5.0";
            jobsThreshold = 100;
            pagesize = 20;
            callCount = jobsThreshold / pagesize;
            sort = 'date';
            hits = 1001;
            accumulatedJobs = [];
            allJobs = [];
            filteredJobs = [];
            failureCounts = 0;
            breakOutOfLoop = false;
            _loop = /*#__PURE__*/regeneratorRuntime.mark(function _loop(i) {
              var url;
              return regeneratorRuntime.wrap(function _loop$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      if (!(accumulatedJobs.length >= jobsThreshold)) {
                        _context2.next = 2;
                        break;
                      }

                      return _context2.abrupt("return", "break");

                    case 2:
                      url = "".concat(self.url, "&page=").concat(i, "&pagesize=").concat(pagesize, "&sort=").concat(sort, "&user_ip=").concat(ip, "&user_agent=").concat(uAgent);
                      _context2.next = 5;
                      return self.fetch.get(url).then(function (response) {
                        if (response.data.type !== 'JOBS') {
                          if (failureCounts >= 5) {
                            breakOutOfLoop = true;
                          } else {
                            failureCounts++;
                          }
                        } else {
                          self.logSync('we GOT these Many Jobs');
                          self.logSync(response.data.jobs.length);
                          var jobs = response.data.jobs;
                          accumulatedJobs.push(jobs);
                          accumulatedJobs.length === 1 ? hits = response.data.hits : '';
                          accumulatedJobs.length === 1 ? hits < jobsThreshold ? jobsThreshold = (_readOnlyError("jobsThreshold"), hits - i) : '' : '';
                        }
                      })["catch"](function (e) {
                        self.logSync('Jobs fetching has bumped into an error');
                        self.logSync(e);
                      });

                    case 5:
                      if (!breakOutOfLoop) {
                        _context2.next = 7;
                        break;
                      }

                      return _context2.abrupt("return", "break");

                    case 7:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _loop);
            });
            i = 0;

          case 15:
            if (!(i <= callCount)) {
              _context3.next = 23;
              break;
            }

            return _context3.delegateYield(_loop(i), "t0", 17);

          case 17:
            _ret = _context3.t0;

            if (!(_ret === "break")) {
              _context3.next = 20;
              break;
            }

            return _context3.abrupt("break", 23);

          case 20:
            i++;
            _context3.next = 15;
            break;

          case 23:
            // // console.log('THE REQUEST FOR USER ALERTS HAS SUCCEEDED')
            // // console.log(response.data)
            // console.log('THE TOTALJOBS')
            // console.log(response.data.jobs.length)
            // // return resolve({success: response.data}) 
            self.logSync('THE ACCUMULATED JOBS EQUALS');
            self.logSync(accumulatedJobs.length);

            if (!(accumulatedJobs.length === 0)) {
              _context3.next = 27;
              break;
            }

            return _context3.abrupt("return");

          case 27:
            accumulatedJobs.forEach(function (jobsGroup, i) {
              if (i === 0) {
                self.logSync('tHE FIRST ARRAY');
                self.log(jobsGroup);
              }

              allJobs = [].concat(_toConsumableArray(allJobs), _toConsumableArray(jobsGroup));
              self.logSync('alljobs lengh at this point after concat');
              self.logSync(allJobs);
            }); // allJobs = accumulatedJobs[0]

            self.logSync('ALLJOBS');
            self.logSync(allJobs.length);
            refinedJobs = self.refineOutsourcedJobs(allJobs);

            if (!(refinedJobs.length < 1)) {
              _context3.next = 33;
              break;
            }

            return _context3.abrupt("return");

          case 33:
            self.logSync('the RefinedJobs');
            self.logSync(refinedJobs.length); // refinedJobs = refinedJobs.filter(async(j,i)=>{
            // 	let now = new Date() 
            // 	let jobDate = new Date(j.date) 
            // 	let yesterday = null
            // 	now.setHours(0)
            // 	now.setMinutes(0)
            // 	now.setMilliseconds(0)
            // 	jobDate.setHours(0) 
            // 	jobDate.setMinutes(0) 
            // 	jobDate.setMilliseconds(0) 
            // 	yesterday = now.getDate() - 1
            // 	// self.log('THE DATES') 
            // 	// self.log(yesterday) 
            // 	// self.log(jobDate.getDate())
            // 	if(jobDate.getDate() === yesterday) {
            // 		// await self.log('THE DATES ARE THE SAME') 
            // 		return true
            // 	}else{
            // 		// await self.log('THE DATES DONT MATCH')
            // 	}
            // })
            // console.log('THE DATE REFINED JOBS')
            // console.log(refinedJobs)

            self.getSubscribers('Daily').then(function (users) {
              if (!users) return;
              var sendList = [];
              self.logSync('THE CURRENT USERS');
              self.logSync(users);
              users.forEach(function (user, i) {
                if (sendList.length > 0) {
                  var email = user.email;
                  var sendUser = null;
                  var setUser = sendList.filter(function (u, p) {
                    if (u.email === email) return true;
                  });

                  if (setUser && setUser.length > 0) {
                    sendUser = self.getMailRecipient(user, refinedJobs, true);
                  }

                  if (sendUser) {
                    console.log('the setuser');
                    console.log(setUser);
                    setUser[0].send.push(sendUser);
                  } else {
                    var _sendUser = self.getMailRecipient(user, refinedJobs);

                    if (_sendUser) {
                      sendList.push(_sendUser);
                    }
                  }
                } else {
                  var _sendUser2 = self.getMailRecipient(user, refinedJobs);

                  self.logSync('THE SENDUSER::FIRST ONE');
                  self.logSync(_sendUser2);

                  if (_sendUser2) {
                    sendList.push(_sendUser2);
                  }
                }
              });

              if (sendList.length > 0) {
                self.logSync('THE EMAILS TO BE SENT');
                self.logSync(sendList);
                var sending = [];
                sendList.forEach(function (s, i) {
                  sending.push({
                    message: self.getEmailTemplate(s.email, s.send)
                  });
                });
                self.emit({
                  type: "send-email",
                  data: {
                    mail: sending,
                    callback: self.alertEmailResponses.bind(_this)
                  }
                });
              } else {
                self.logSync('THE SENDLIST IS EMPTY');
              }
            })["catch"](function (e) {
              self.log('query found no subscribing users');
              self.log(e);
              return;
            }); //return                          
            //return response.json();

          case 36:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee2, this);
  }));

  return function getNewJobs(_x2) {
    return _ref2.apply(this, arguments);
  };
}();
var getSubscribers = function getSubscribers(frequency) {
  var _this2 = this;

  var self = this;
  return new Promise(function (resolve, reject) {
    var self = _this2;
    var pao = self.pao; // let uid = pay.ID

    var queries = {
      returnFields: ['jo_job_alert_subscriber.id', 'email', 'frequency'],
      tables: ['jo_job_alert_subscriber', 'jo_job_alert'],
      joins: 2,
      joinPoints: ['jo_job_alert_subscriber.u_id EQUALS jo_job_alert.u_id'],
      conditions: ["jo_job_alert_subscriber.id EQUALS KEY::alert_mail_id", " AND jo_job_alert.frequency EQUALS ".concat(frequency)],
      opiks: ['field.job_keyword.as[jobKeyword]']
    };
    self.query('mysql.SEARCH', queries, self.multiDataRequestHandler.bind(_this2, resolve, reject));
  });
};
var getMailRecipient = function getMailRecipient(user, jobs) {
  var isSetUser = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  var self = this;
  var FuzzySearch = self.fuzzySearch; //let mailSender = `mashelesepru@gmail.com`
  // console.log('THE JOBS IN MAIL RECIPIENT')
  // console.log(jobs)

  var searchr = new FuzzySearch(jobs, {
    findAllMatches: true,
    keys: ['jobTitle']
  });
  var userJobs = searchr.search(user.jobKeyword);
  var modifiedUJobs = [];
  self.logSync('THE VALUE OF FUZZYSEARCH');
  self.logSync(jobs[0]);
  self.logSync(user.jobKeyword);
  self.logSync('GETMAILCLIENTS USERJOBS');
  self.logSync(userJobs[0]);

  if (userJobs && userJobs.length > 0) {
    userJobs.forEach(function (job, i) {
      modifiedUJobs.push(job.item);
    });

    if (modifiedUJobs.length > 10) {
      modifiedUJobs = modifiedUJobs.splice(0, 10);
    }

    if (isSetUser) return {
      jobs: modifiedUJobs,
      title: "".concat(user.jobKeyword, " jobs")
    };
    return {
      email: user.email,
      send: [{
        jobs: modifiedUJobs,
        title: "".concat(user.jobKeyword, " jobs")
      }]
    };
  } else {
    return null;
  }
};
var getEmailTemplate = function getEmailTemplate(email, jobs) {
  var self = this;
  var mailSender = 'mashelesepru@gamil.com';
  var jobsInHtml = [];
  jobs.forEach(function (j, i) {
    var jobsList = '<ul>';
    self.logSync('user list of jobs');
    self.logSync(j);
    var jbs = j.jobs;
    jbs.forEach(function (jobf, ji) {
      jobsList += "<li> <a href=".concat(jobf.url, "> ").concat(jobf.jobTitle, " </a></li>");
      self.logSync('THEJOBLISTIN IN ALOOOP');
      self.logSync(jobsList); // if(jobs.length > 2 && ji > 3) return false 
      // if(jobs.length === 2 && ji >= 4) return false 
    }); //  if(job >= 4) break

    self.logSync('THE JOBSLIST');
    self.logSync(jobsList);
    jobsInHtml.push("\n\t\t\t <div> ".concat(jobsList, "</u> <a href=https://www.jobbri.herokuapp.com> \n\t\t\t <button> View all ").concat(j.title, " </button></a></div>\n\t\t  "));
  });
  return {
    to: email,
    from: mailSender,
    subject: "Your job alerts subscriptions",
    html: jobsInHtml.join('')
  };
};
var alertEmailResponses = function alertEmailResponses(result) {
  var self = this;
  console.log('THE EMAILSENDING RESPONSE');
  console.log(result);
};
var refineOutsourcedJobs = function refineOutsourcedJobs(jobs) {
  var self = this;
  var pao = self.pao;
  var contains = pao.pa_contains;
  var refinedJobs = [];
  self.log('THE JOBS LENGTH');
  self.log(jobs.length);
  jobs.forEach(function (job, i) {
    self.logSync('THE CURRENT JOB');
    self.logSync(job);
    var newJob = {};
    newJob.jobType = job.job_type || 'Not-specified';
    newJob.date = job.date;
    newJob.employer = job.company ? job.company.trim() != '' ? job.company : 'Unspecified' : 'Unspecified';
    newJob.jobTitle = job.title;
    newJob.url = job.url;

    if (contains(job, ['salary_min', 'salary_max'])) {
      newJob.jobSalary = "".concat(job.salary_min, "-").concat(job.salary_max);
    } else {
      if (!contains(job, 'salary')) {
        newJob.jobSalary = 'Market related';
      } else {
        newJob.jobSalary = job.salary.trim() !== '' ? job.salary : 'Market related';
      }
    }

    if (contains(job, 'locations')) {
      if (job.locations.toLowerCase() === 'south africa') {
        newJob.jobCity = 'SA';
      } else {
        var locPieces = job.locations.split(',');
        newJob.jobCity = locPieces[0];
      }
    } else {
      newJob.jobCity = 'SA';
    }

    job.salary_currency_code ? newJob.currency = job.salary_currency_code : newJob.currency = 'ZAR';
    refinedJobs.push(newJob);
  });
  return refinedJobs;
};
var getJobs = function getJobs(pay) {
  var _this3 = this;

  var self = this;
  var pao = self.pao;
  console.log('THE PAYLOAD IN GETJOBS');
  console.log(pay); // let u = pay.ID
  // let catID = pay.catID

  var range = {};

  if (pay.skip && pay.limit) {
    range = {
      offset: pay.skip,
      count: pay.limit
    };
  }

  return new Promise( /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(resolve, reject) {
      return regeneratorRuntime.wrap(function _callee3$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              // await self.log('THE BACTCHSEARCH OBJECT')
              // await self.log(self.searchBatch('office','malamulele','limpopo',range))
              self.query('mysql.SEARCH', {
                batch: true,
                search: self.searchBatch('office', 'malamulele', 'limpopo', range)
              }, self.searchBatchHandler.bind(_this3, resolve, reject)); // self.query(
              // 	'mysql.SEARCH',
              // 	 {batch: true,search: self.searchBatch(search.key)},
              // 	  self.searchBatchHandler.bind(this)
              // )

            case 1:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee3);
    }));

    return function (_x3, _x4) {
      return _ref3.apply(this, arguments);
    };
  }());
};
var getJobsWithThingy = function getJobsWithThingy(pay) {
  var _this4 = this;

  var self = this;
  var pao = self.pao;
  var contains = pao.pa_contains;
  console.log('THE PAYLOAD IN GETJOBS');
  console.log(pay); // let u = pay.ID
  // let catID = pay.catID

  var range = {};

  if (contains(pay, 'skip') && contains(pay, 'limit')) {
    range = {
      offset: pay.skip,
      count: pay.limit
    };
  }

  return new Promise( /*#__PURE__*/function () {
    var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(resolve, reject) {
      var conditions;
      return regeneratorRuntime.wrap(function _callee4$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              // await self.log('THE BACTCHSEARCH OBJECT')
              // await self.log(self.searchBatch('office','malamulele','limpopo',range))
              console.log('GET JOBS WITH THING REQUEST');
              console.log(pay); // console.log(pay.filters)
              // console.log(pay.filters[0])

              conditions = self.generateQueryConditions(pay);
              console.log(conditions); // return resolve(conditions)

              self.query('mysql.SEARCH', {
                batch: true,
                search: self.searchBatch(conditions, range)
              }, self.searchBatchHandler.bind(_this4, resolve, reject, true)); // self.query(
              // 	'mysql.SEARCH',
              // 	 {batch: true,search: self.searchBatch(search.key)},
              // 	  self.searchBatchHandler.bind(this)
              // )

            case 5:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee4);
    }));

    return function (_x5, _x6) {
      return _ref4.apply(this, arguments);
    };
  }());
};
var getJFP = function getJFP(data) {
  var self = this;
  var pao = self.pao;
};
var getNativeJobs = function getNativeJobs(data) {
  var self = this;
  var pao = self.pao;
  var cpus = 4;
  console.log(data);

  if (data.hasOwnProperty('callback')) {
    data.callback(null, {
      fetch: ['Fetch', 'the', 'data', cpus]
    });
  } else {}
};
var saveApplication = function saveApplication(data) {
  var self = this;
  var pao = self.pao;
  var cpus = 4;
  console.log(data);

  if (data.hasOwnProperty('callback')) {
    data.callback(null, {
      fetch: ['Fetch', 'the', 'data', cpus]
    });
  } else {}
};
var getJobDetail = function getJobDetail(data) {
  var self = this;
  var pao = self.pao;
  var cpus = 4;
  console.log(data);

  if (data.hasOwnProperty('callback')) {
    data.callback(null, {
      fetch: ['Fetch', 'the', 'data', cpus]
    });
  } else {}
};
var generateQueryConditions = function generateQueryConditions(options) {
  // let options = {
  // 	keywords: '',
  // 	categories: [],
  // datePosted: '',
  // jobType:[],location: '',
  // salaryRange:[],experience:[],
  // gender:[],qualification:[],
  // careerLevel:[] 
  // }  
  var self = this;
  var pao = self.pao;
  var contains = pao.pa_contains;
  var conditions = [];
  var filters = [];
  var blackList = ['sort', 'limit', 'currentPage', 'skip', 'jq'];

  if (contains(options, 'jq')) {
    conditions.push(self.getCondition({
      key: options.jq
    }, 'jq'));
  } else {
    conditions.push(self.getCondition({
      key: 202
    }, 'location').trim());
  } // if(contains(options,'filters') && options.filters.length >= 1){
  // 	let filters = options.filters.map((f,i)=>{
  // 		return {key:f.key,value:f.value,table:'jo_job',operand: 'ISEQUALS'}
  // 	})
  //   	conditions.push(self.getCondition(filters,'AND'))
  // }


  Object.entries(options).forEach(function (f, i) {
    self.log('THE ENTRIY VALUE');
    self.log(f);

    if (blackList.indexOf(f[0]) < 0) {
      filters.push({
        key: f[0],
        value: f[1],
        table: 'jo_job',
        operand: 'ISEQUALS'
      });
    }
  });
  console.log('THE VALUE OF THE FILTERS');
  console.log(filters);
  if (filters.length >= 1) conditions.push(self.getCondition(filters, 'AND'));
  return conditions;
};
var getCondition = function getCondition(option) {
  var id = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  var self = this;
  var pao = self.pao;
  var contains = pao.pa_contains;

  switch (id) {
    case 'jq':
      return "GROUP::2 START GROUP::2 START MATCH [job_title] AGAINST [".concat(option.key, "] NATURAL, OR MATCH [position] AGAINST [").concat(option.key, "] NATURAL;AND jo_job.country_id EQUALS 202");

    case 'location':
      return "jo_job.country_id EQUALS 202";

    default:
      return self.formatQuery(option, id);
  }
};
var formatQuery = function formatQuery(options) {
  var an = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  var self = this;
  var pao = self.pao;
  var contains = pao.pa_contains;
  var len = options.length;
  self.log('THE FORMAT QUERY OPTIONS');
  self.log(options);
  self.log(an);
  var stri = '';
  options.forEach(function (i, p) {
    if (p === 0 && i.key === 'jl') {
      if (len === 1) {
        stri += "".concat(an.toUpperCase(), " GROUP::2 START city_name EQUALS [").concat(i.value, "]; OR state_name EQUALS [").concat(i.value, "]");
      } else {
        stri += "".concat(an.toUpperCase(), " GROUP::").concat(len, " START GROUP::2 START city_name EQUALS [").concat(i.value, "], OR state_name EQUALS [").concat(i.value, "]; ");
      }
    } else if (p === 0) {
      var derivedKey = self.getDbKey(i.key);

      if (i.key === 'jdp') {
        var intExp = i.value;
        var intUnit = '';
        self.log('THE OUTCOME OF ');
        self.log(i.value <= 24);

        if (i.value <= 24) {
          intUnit = 'HOUR';
        } else if (i.value > 24 && i.value < 168) {
          intUnit = 'DAY';
        } else if (i.value >= 168 && i.value < 672) {
          intUnit = 'WEEK';
        } else if (i.value >= 672) {
          intUnit = 'MONTH';
        }

        var lastCond = ' ';
        if (p != len - 1) lastCond = '; ';
        stri += "".concat(an.toUpperCase(), " GROUP::").concat(len, " created_at FUXIN [ISGREATEROREQUALS fuxin.date_sub.options[fuxin.now,INTERVAL ").concat(intExp, " ").concat(intUnit, "]]").concat(lastCond, "\n\t\t\t\t\t\t");
      } else {
        var _lastCond = ' ';
        if (p != len - 1) _lastCond = '; ';
        stri += "".concat(an.toUpperCase(), " GROUP::2 ").concat(i.table, ".").concat(derivedKey, " ").concat(i.operand, " ").concat(i.value).concat(_lastCond);
      }
    } else {
      var _derivedKey = self.getDbKey(i.key);

      if (i.key === 'jdp') {
        var _intExp = i.value;
        var _intUnit = '';

        if (i.value <= 24) {
          _intUnit = 'HOUR';
        } else if (i.value > 24 && i.value < 168) {
          _intUnit = 'DAY';
        } else if (i.value >= 168 && i.value < 672) {
          _intUnit = 'WEEK';
        } else if (i.value >= 672) {
          _intExp = 3;
          _intUnit = 'MONTH';
        }

        var _lastCond2 = ' ';
        if (p != len - 1) _lastCond2 = '; ';
        stri += "AND created_at FUXIN [ISGREATEROREQUALS fuxin.date_sub.options[fuxin.now,INTERVAL ".concat(_intExp, " ").concat(_intUnit, "]]").concat(_lastCond2);
      } else {
        var _lastCond3 = ' ';
        if (p != len - 1) _lastCond3 = '; ';
        stri += "AND ".concat(i.table, ".").concat(_derivedKey, " ").concat(i.operand, " ").concat(i.value).concat(_lastCond3);
      }
    }
  });
  return stri.trim();
};
var getDbKey = function getDbKey(i) {
  var sors = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'jobbri';
  var self = this;
  var pao = self.pao;
  var contains = pao.pa_contains;

  if (sors === 'jobbri') {
    switch (i) {
      case 'jt':
        return 'job_type';

      case 'jsr':
        return 'salary';

      case 'jcl':
        return 'exp_level';

      case 'jcts':
        return 'job_category_id';

      case 'je':
        return 'experience_required_years';

      default:
        return i;
    }
  } else {
    switch (i) {
      case 'jt':
        return 'contractperiod';

      case 'jsr':
        return 'salary';

      case 'currentPage':
        return 'page';

      case 'jcts':
        return 'exp_level';

      case 'je':
        return 'experience_required_years';

      case 'jl':
        return 'location';

      default:
        return i;
    }
  }
};
var searchBatch = function searchBatch(options, range) {
  var self = this; // let fields = {
  // 	jo_user: { id: 'NULL',u_type: data.usertype,first_name: data.firstname,last_name: data.lastname,email: data.email },
  // 	jo_account: {own:{id:'NULL'},tables: [{name:'jo_user',values:['u_type.account_name']}]},
  // 	jo_user_account_join: {own:{id:'NULL'},tables: [{name:'jo_user',values:['id.u_id','email.account_email']},{name:'jo_account',values:['id.account_id']}]},
  // 	jo_login: {own:{id:'NULL',password:data.password},tables: [{name:'jo_user',values:['id.u_id','email.username']}]}
  // }
  // return [
  // 	{name: 'jo_user',fields: fields.jo_user},
  // 	{name: 'jo_account',fields: fields.jo_account},
  // 	{name: 'jo_user_account_join',lastInsert: ['jo_user','jo_account'],fields: fields.jo_user_account_join},
  // 	{name: 'jo_login',lastInsert: ['jo_user'],fields: fields.jo_login}
  //    ]

  var intExp = 1;
  var intUnit = 'DAY';
  self.log('THE INTERVAL VALUES');
  self.log("".concat(intExp, " ").concat(intUnit));
  return [{
    returnFields: ['jo_job.id'],
    tables: ['jo_job', 'jo_country', 'jo_company'],
    joins: 3,
    joinPoints: ['jo_job.u_id EQUALS jo_country.id', 'jo_job.company_id EQUALS jo_company.id'],
    //  
    conditions: options,
    opiks: ['field.job_title.as[jobTitle]', 'field.company_logo.as[logo]', 'field.salary.as[jobSalary]', 'field.name.as[employer]', 'field.salary_currency.as[currency]', 'field.is_main_featured.as[isMainFeatured]', 'field.job_type.as[jobType]', 'field.approved_at.as[date]', 'field.is_featured.as[isFeatured]', 'field.is_free.as[isFree]', 'field.is_sponsored.as[isSponsored]', 'field.city_name.as[jobCity]'],
    range: "".concat(range.offset, ",").concat(range.count),
    soundex: true,
    sort: 'order[jobTitle].asc',
    type: 'inner'
  }, {
    returnFields: ['state_name', 'country_id'],
    tables: ['jo_states'],
    joinPoints: ['jo_states.id EQUALS jo_country.u_id'],
    conditions: ["country_id EQUALS 202"]
  }, {
    returnFields: ['all'],
    tables: ['jo_category']
  }, {
    tables: ['jo_job', 'jo_country', 'jo_company'],
    joins: 3,
    joinPoints: ['jo_job.u_id EQUALS jo_country.id', 'jo_job.company_id EQUALS jo_company.id'],
    conditions: options,
    opiks: ['fuxin.count.options[*].as[totalJobs]']
  }];
};
var multiDataRequestHandler = function multiDataRequestHandler() {
  var resolve = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
  var reject = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  var e = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
  var result = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
  var self = this;
  var pao = self.pao;
  console.log('THE TYPE OF E IN DATAREQUEST HANDLER');
  console.log(e);
  if (e) reject(new Error('An error has occured Inside MYSQL'));
  resolve(result);
};
var searchBatchHandler = function searchBatchHandler() {
  var resolve = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
  var reject = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  var withThingy = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  var e = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
  var batchResults = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : null;
  var self = this;
  var pao = self.pao;
  console.log('THE BATCH RESULTS');
  console.log(batchResults);
  if (e) return reject(e, null);
  var result = {};

  if (withThingy) {
    result.posts = batchResults[0];
    result.states = batchResults[1];
    result.categories = batchResults[2];
    result.totalJobs = batchResults[3][0].totalJobs;
  } else {
    result.posts = batchResults[0];
    result.totalJobs = batchResults[3][0].totalJobs;
  }

  resolve(result);
};

/***/ }),
/* 91 */
/***/ (function(module, exports) {

module.exports = require("fuzzy-search");

/***/ }),
/* 92 */
/***/ (function(module, exports) {

module.exports = {"jobs":[{"locations":"South Africa","site":"","date":"Fri, 20 Mar 2020 16:43:53 GMT","url":"http://jobviewtrack.com/en-za/job-1d4d41654805031a4f5463021a046c2f0041181c0153795b584e440503075400222b0d0002130d0032010712444854434a66270b4618540b6a220f150021475f5d4b19/63f4f57ab87a1dc3d800e748090e146d.html?affid=0e6712acc74087da913e65985433a122","title":"Health Care Financing Specialist","description":"Reports to: Director of Technical Assistance Location: Somewhat flexible, but requires considerable travel and significant portion of the year in Bamako. About Muso: Muso is a rapidly growing global health organization, committed that no on...","company":"Muso","salary":""},{"salary_min":"50","locations":"South Africa","salary_type":"H","date":"Thu, 05 Mar 2020 17:47:14 GMT","description":"Annapurna Solutions in currently looking for a Remote Customer service /Project Manager in South Africa to join our growing team. The Project Manager provides direction, coordination, and execution of small to large scope Product definition...","salary_currency_code":"ZAR","salary":"R50 per hour","site":"","url":"http://jobviewtrack.com/en-za/job-1b12417a4216044e41064f0e4829010a0000241a06194f48490d6005010f401152613e081c13104118483e1c58401d4b5f0b024e6f1b4d066a3601150e00121a061e0a6352404844220f491547061a633908174b540e1b1c470b754240016d2d5207540c05041c473645061e00104f0b704c4305080b557513545c595d/63f4f57ab8a159e62109a7510d153f2c.html?affid=0e6712acc74087da913e65985433a122","title":"virtual work from home - Customer service/ Project Manager","salary_max":"50","company":"Annapurna Solutions"},{"salary_min":"9000","locations":"Kroonstad, Free State","salary_type":"M","date":"Wed, 18 Mar 2020 14:02:20 GMT","description":"Need a capable person with Code 8 lisence Must be alble get new clients Must have a P number Must be computer literate and have his/her own computer. Must be able to work with corporate clients   Founded in 2005 Has large national corporate...","salary_currency_code":"ZAR","salary":"R9000 - 12000 per month","site":"","url":"http://jobviewtrack.com/en-za/job-1e12417d48171b4e641b4e171a0e024731451700071a49425c432f340a1d5354630c06151c080922370707075844510d79010c06491d430a090f6c3300431c060010434a532f6e0b011a551b4c625a535f565714/63f4f57aa137200750a2f2b934d1fd8f.html?affid=0e6712acc74087da913e65985433a122","title":"pest control technician","salary_max":"12000","company":"A'Africa Pest Prevention"},{"salary_min":"30000","locations":"Johannesburg, Gauteng","salary_type":"M","date":"Thu, 20 Feb 2020 01:46:04 GMT","description":"(Remote, Full Time, Anywhere in the World) We are looking for self-motivated and results-driven software professionals to join our Global Tech Team and help us leverage automation and technology to transform remarkable companies and free pe...","salary_currency_code":"ZAR","salary":"R30000 - 65000 per month","site":"","url":"http://jobviewtrack.com/en-za/job-1e1b416e7f294f2a4202450f07110b156772110506074f0b79485b010301571152612d333e472145020d051c5a4e4f2f6901190b4b1b50061a633c02084f000d6841181a0c1a19/63f4f57a61a428f3ef98df2c22d2cc72.html?affid=0e6712acc74087da913e65985433a122","title":"CRM & ERP Developer / Expert - Remote","salary_max":"65000","company":"Deep Consulting Solutions"},{"salary_min":"30000","locations":"Johannesburg, Gauteng","salary_type":"M","date":"Thu, 20 Feb 2020 00:27:52 GMT","description":"(Remote, Full Time, Anywhere in the World) We are looking for self-motivated and results-driven software professionals to join our Global Tech Team and help us leverage automation and technology to transform remarkable companies and free pe...","salary_currency_code":"ZAR","salary":"R30000 - 65000 per month","site":"","url":"http://jobviewtrack.com/en-za/job-1e1d416342000a4e6d27223007071a10045211482c1d4d42534848166d2852184c433b150f040e22260d08105e0b777e2f360a03480045433b0e08131241060d6841181a0c1a19/63f4f57ad38298c5280477db106fe23f.html?affid=0e6712acc74087da913e65985433a122","title":"Full Stack Software Engineer (Node.js, React, AWS) - Remote","salary_max":"65000","company":"Deep Consulting Solutions"},{"salary_min":"12000","locations":"Edenvale, Gauteng","salary_type":"M","date":"Fri, 13 Mar 2020 12:57:26 GMT","description":"International company since 1914 expanding needs 20 reps/managers to start immediately OWN CAR A MUST No experience needed full training provided by company appointments set by company Responsibilities: Developing and identifying new sales ...","salary_currency_code":"ZAR","salary":"R12000 per month","site":"","url":"http://jobviewtrack.com/en-za/job-1348417e4c080a1d0739410d09060b151622270905165929704c4305080b550721515a505f515d/63f4f57a0176c53dacb64afcf9e45588.html?affid=0e6712acc74087da913e65985433a122","title":"Sales Managers","salary_max":"12000","company":"Dynamic Promotions"},{"salary_min":"15","locations":"Cape Town, Western Cape","salary_type":"H","date":"Fri, 14 Feb 2020 14:41:29 GMT","description":"Wonder is an on-demand research network where bright minds like you come to explore intriguing and intellectually stimulating topics. With Wonder, you can earn while you learn. It's simple. Do research, get paid. The research you'll do serv...","salary_currency_code":"USD","salary":"$15 per hour","site":"","url":"http://jobviewtrack.com/en-za/job-1a1a416b5f010a02461a430648330b140041060b01716c5958484105010d4254771101150b1516223707041e5f45545954443d0b541141110b096c35005311091b1042297b5f4801030f491745625a535f505c14/63f4f57a96ca72c90b06f9ea3bb8a669.html?affid=0e6712acc74087da913e65985433a122","title":"Join Wonder's Community of Freelance Research Writers!","salary_max":"15","company":"Wonder"},{"salary_min":"40000","locations":"East London, Eastern Cape","salary_type":"M","date":"Tue, 10 Mar 2020 07:59:34 GMT","description":"Duties and Responsibilities: 1. Review cashbook processed by the Finance Officer to ensure that expenses are allocated to the correct GL account and project /cost centres; 2. Conduct Monthly Balance Sheet Recons: o Check all Creditors Recon...","salary_currency_code":"ZAR","salary":"R40000 - 45000 per month","site":"","url":"http://jobviewtrack.com/en-za/job-1c4a417d5f0b050b440000220b0201120b5415061d716b485e42580a1b0f490022331a0e04020654755a5b4313190c/63f4f57a7404882d6e8f278019416344.html?affid=0e6712acc74087da913e65985433a122","title":"PROJECT ACCOUNTANT","salary_max":"45000","company":"Sibanye Business Group (Pty) Ltd"},{"salary_min":"90000","locations":"East London, Eastern Cape","salary_type":"M","date":"Tue, 10 Mar 2020 07:36:40 GMT","description":"The CFO is accountable for the administrative, financial, and risk management operations on the organization’s Global Fund, including the development of a financial and operational strategy, metrics tied to that strategy, and the ongoing de...","salary_currency_code":"ZAR","salary":"R90000 per month","site":"","url":"http://jobviewtrack.com/en-za/job-4b1c416e450d0a080732490d090f0d0e044c54270f154348585f2f2707074212002c0e0707040052762e001d4b455e444c084f21411249000d136c240d49110e493543455c434e0d0e022532490d090f0d0e044c755a5b4313190c/63f4f57a4eb180963e6166a9383adbe6.html?affid=0e6712acc74087da913e65985433a122","title":"CHIEF FINANCIAL OFFICER","salary_max":"90000","company":"Sibanye Business Group (Pty) Ltd"},{"salary_min":"20000","locations":"Cape Town, Western Cape","salary_type":"M","date":"Mon, 24 Feb 2020 11:52:15 GMT","description":"The financial accountant will provide financial and administrative support to board members, management, colleagues, donors and other stakeholders of HOPE Cape Town Trust and Association. Candidate will be responsible for all financial repo...","salary_currency_code":"ZAR","salary":"R20000 - 24000 per month","site":"","url":"http://jobviewtrack.com/en-za/job-494a416b440a0e00441d410f48200d040a551a1c081d5e297c4e4e0b1a0053154e176a270709044e1701081f2b190f1c1a5d5b/63f4f57a4bc81f11b2d05fc0f7991109.html?affid=0e6712acc74087da913e65985433a122","title":"Financial Accountant","salary_max":"24000","company":"HOPE Cape Town"},{"locations":"Johannesburg, Gauteng","site":"","date":"Fri, 27 Mar 2020 08:04:14 GMT","url":"http://jobviewtrack.com/en-za/job-1d1a417d5f0b0b1b4400002c1f0f0b15677006070d06495f3f625a0a0a1c2646125259565a/9d2595fca8a59ff1047b3d3f5b796a4a.html?affid=0e6712acc74087da913e65985433a122","title":"Product Owner","description":"Nedbank Recruiting   Requisition ID: 103055   Recruitment Consultant: Nomathamsanqa Nonkonyana   Closing Date: 02nd April 2020   Job Family   Information Technology   Career Stream   It Application Development   Leadership Pipeline   Manage...","company":"Nedbank","salary":""},{"locations":"Johannesburg, Gauteng","site":"","date":"Fri, 27 Mar 2020 08:03:15 GMT","url":"http://jobviewtrack.com/en-za/job-1213416c43050317540021515a505f5051/c8219c309d291431b3dc951803a34b74.html?affid=0e6712acc74087da913e65985433a122","title":"FTP Analyst","description":"Nedbank Recruiting   Job Purpose   The FTP function plays an important role in Nedbank in terms of:  Transferring interest rate risk and liquidity risk to a central unit (BSM) for the strategic management thereof.  Rewarding money-in busine...","company":"Nedbank","salary":""},{"locations":"Johannesburg, Gauteng","site":"","date":"Fri, 27 Mar 2020 07:49:52 GMT","url":"http://jobviewtrack.com/en-za/job-1c48416a5f050b1b460045432508000e0b47542d0714434558485f662207491d4e0448261c060155151c0c537a59524a5f0502034276671109051b06114554381b1c4d595c4040014f2b4913490d0d041c652252150c1c125e4e1d7d5f0b081c46194d066a2c07090c4e13482c1d4d42534848166e5c154511545c/b364d3f60d828356ab427836774bbbe7.html?affid=0e6712acc74087da913e65985433a122","title":"Graduate Programme : Graduate Mining Engineer","description":"Requisition ID: 29668   Job Category: Engineering   With over six decades of business and technical experience in the mining, energy, and infrastructure sectors, we understand that challenges are changing rapidly in every industry. We respo...","company":"Hatch","salary":""},{"salary_min":"25000","locations":"Centurion, Gauteng","salary_type":"M","date":"Fri, 14 Feb 2020 05:52:39 GMT","description":"“Customers will never love a company, until the employees love it first” Trendsetters Travel is seeking a Senior Travel Administrator (preferably with Group & MICE experience) to join our dynamic team. This position is responsible for fulfi...","salary_currency_code":"ZAR","salary":"R25000 per month","site":"","url":"http://jobviewtrack.com/en-za/job-1c1c417e480a0601555461070508000e165406091d1c5829695f4c120a020735440e010f07141152151c060128785843440b1d4e730641150d0d6c26014d1d0600005e595c5942166d3a5515560604605c555411425d/63f4f57a54903d21c2ccbf99e4d0d60f.html?affid=0e6712acc74087da913e65985433a122","title":"Senior Travel Administrator","salary_max":"25000","company":"Trendsetters Travel"},{"locations":"Johannesburg, Gauteng","site":"","date":"Sun, 22 Mar 2020 02:44:13 GMT","url":"http://jobviewtrack.com/en-za/job-1e1a4168401403015e19450d1c632d08104e070d057218190c1c1a50/96cff2e408db3df9ddae96a021643f5c.html?affid=0e6712acc74087da913e65985433a122","title":"Employment Counsel - MEA","description":"You're seeing information for Paris. To see local features and services for another location, select a different city. Show more   Traveling?   Employment Counsel - MEA   Legal   in Johannesburg, South Africa   EMPLOYMENT COUNSEL - MEA   At...","company":"Uber","salary":""},{"salary_min":"600000","locations":"Johannesburg, Gauteng","salary_type":"Y","date":"Fri, 27 Mar 2020 08:59:54 GMT","description":"Education   CA(SA)    Skills   Candidates coming from the big four will get first preference  Good academics    Please visit our website to submit your CV directly or to view other finance related jobs. If you have not had any response in t...","salary_currency_code":"ZAR","salary":"R600000 per year","site":"","url":"http://jobviewtrack.com/en-za/job-4e1f416348130317072555020408080e0044542b2871696a1d6e6c663e1b4618490501040a47266176260c0446521d7c58050307411d45076a2f0b100959542b287218190c1c1a50/e7c2f69b64b2e69615217e49534d31fb.html?affid=0e6712acc74087da913e65985433a122","title":"Newly Qualified CA (SA)","salary_max":"600000","company":"Communicate Recruitment"},{"locations":"Johannesburg, Gauteng","site":"","date":"Fri, 27 Mar 2020 08:59:35 GMT","url":"http://jobviewtrack.com/en-za/job-1b1e41657f442e0a4a1d4e433f0e1c0c6768264828174742530d681c1f0b551d450d0b046c2f3700350c041a44297c49400d014e701b52086a293c47324f06036841181a0c1a19/428e3c4397b4a20d65e7d885dde63400.html?affid=0e6712acc74087da913e65985433a122","title":"HR Admin (Work Experience Program)","description":"EXTERNAL VACANCY   POSITION:HR ADMIN (WORK EXPIERIENCE PROGRAME)   REFERENCE NO:2020/03/29/HR   LOCATION:GREENSTONE AND FOURWAYS   REPORTING TO:HR MANAGER   CLOSING DATE:2020 MARCH 29   STIPEND:TBC   PURPOSE OF THE JOB   The recommended Can...","company":"Afrika Tikkun Inc","salary":""},{"salary_min":"650000","locations":"Johannesburg, Gauteng","salary_type":"Y","date":"Fri, 27 Mar 2020 08:59:25 GMT","description":"If you''re looking for a role where you can work along-side highly skilled, like-minded individuals, building next-generation systems impacting the company''s future, then this is the role for you.   Job & Company Description:   This is you...","salary_currency_code":"ZAR","salary":"R650000 per year","site":"","url":"http://jobviewtrack.com/en-za/job-1b49417d54100701495464061e0402081545066a390a5e4352432f200a1842184f130d136f555711455f5d/b9ddf280c20ad3ddb4608811fa32f668.html?affid=0e6712acc74087da913e65985433a122","title":"Python Developer","salary_max":"650000","company":"NETWORK IT BRUMA"},{"locations":"Durban, KwaZulu-Natal","site":"","date":"Fri, 27 Mar 2020 08:59:21 GMT","url":"http://jobviewtrack.com/en-za/job-194e416b4216180f5510490d0f412d0b00521f6a2a1f4f59562f6b0b1d194606440a06066f555711465c50/f7fd50a4d91e3b53f0cff800ab176c93.html?affid=0e6712acc74087da913e65985433a122","title":"Forwarding clerk","description":"Forwarding Clerk – R12000 CTC   Coordinating of overseas collections from order placement to delivery (air freight, sea   freight, out of gauge, project and hazardous cargo)   Identifying and arranging best methods of transport according to...","company":"Khulanathi Chartered Alberante","salary":""},{"locations":"Cape Town, Western Cape","site":"","date":"Fri, 27 Mar 2020 08:59:05 GMT","url":"http://jobviewtrack.com/en-za/job-4e4e417e42021b19460645432c041802094f04050c1d5e0b6e48430d001c0759650d0f0800020052763b0c1d43444f0d7e0b091a50155206482400000c4e110d1b7179445b595a051d0b073045150d0d011708451a1c4936444c544348011d6c74114e0a07134e23005611040603474e53590d2101094e1a45061a633d08035403091b160a6e534a440a0a0b5575125159565753/cac381fea9b31251ec8b4a0cc2252cf5.html?affid=0e6712acc74087da913e65985433a122","title":"Senior Software Development Engineer - EC2 Placement","description":"DESCRIPCIÓN   Build the systems that optimize how EC2 matches requests for Instances with the underlying compute capacity. EC2 Placement is seeking talented engineers to build the online and offline optimization systems for compute workload...","company":"Amazon","salary":""}],"hits":77396,"response_time":0.0394449234008789,"type":"JOBS","pages":3870}

/***/ }),
/* 93 */
/***/ (function(module, exports) {

module.exports = require("fuse.js");

/***/ }),
/* 94 */
/***/ (function(module, exports) {

module.exports = require("ip");

/***/ }),
/* 95 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__fetch__ = __webpack_require__(96);

/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0__fetch__["a" /* default */]);

/***/ }),
/* 96 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__methods__ = __webpack_require__(97);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



var Fetch = function Fetch(pao) {
  _classCallCheck(this, Fetch);

  this.pao = pao;
  this.init = __WEBPACK_IMPORTED_MODULE_0__methods__["b" /* init */];
  this.handleListTask = __WEBPACK_IMPORTED_MODULE_0__methods__["a" /* handleListTask */];
  this.list = __WEBPACK_IMPORTED_MODULE_0__methods__["c" /* list */];
};

/* harmony default export */ __webpack_exports__["a"] = (Fetch);

/***/ }),
/* 97 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return init; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return handleListTask; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return list; });
var init = function init() {
  this.log('Fetch has been initialised');
  this.listens({
    'handle-fetch-task': this.handleListTask.bind(this)
  });
};
var handleListTask = function handleListTask(data) {
  var self = this;
  self.list(data);
};
var list = function list(data) {
  var self = this;
  var pao = self.pao;
  var cpus = 4;
  console.log(data);

  if (data.hasOwnProperty('callback')) {
    data.callback(null, {
      fetch: ['Fetch', 'the', 'data', cpus]
    });
  } else {}
};

/***/ }),
/* 98 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__jwt__ = __webpack_require__(99);

/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0__jwt__["a" /* default */]);

/***/ }),
/* 99 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__methods__ = __webpack_require__(100);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



var jwt = __webpack_require__(101);

var Jwt = function Jwt(pao) {
  _classCallCheck(this, Jwt);

  this.pao = pao;
  this.jwt = jwt;
  this.key = "randomefyerczhk5r325xsr6"; // // methods

  this.init = __WEBPACK_IMPORTED_MODULE_0__methods__["d" /* init */];
  this.jwtSign = __WEBPACK_IMPORTED_MODULE_0__methods__["e" /* jwtSign */];
  this.jwtVerify = __WEBPACK_IMPORTED_MODULE_0__methods__["f" /* jwtVerify */];
  this.handleSaveJwtKey = __WEBPACK_IMPORTED_MODULE_0__methods__["b" /* handleSaveJwtKey */];
  this.handleCreateToken = __WEBPACK_IMPORTED_MODULE_0__methods__["a" /* handleCreateToken */];
  this.handleVerifyToken = __WEBPACK_IMPORTED_MODULE_0__methods__["c" /* handleVerifyToken */];
};

/* harmony default export */ __webpack_exports__["a"] = (Jwt);

/***/ }),
/* 100 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return init; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return handleSaveJwtKey; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return handleCreateToken; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return handleVerifyToken; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return jwtSign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return jwtVerify; });
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var init = function init() {
  console.log('Jwt has been initialised');
  this.listens({
    'save-jwt-key': this.handleSaveJwtKey.bind(this),
    'create-jwt-token': this.handleCreateToken.bind(this),
    'verify-jwt-token': this.handleVerifyToken.bind(this)
  });
};
var handleSaveJwtKey = function handleSaveJwtKey(data) {
  var self = this;
  self.log("Saving Jwt Key");
  self.key = data.key;
};
var handleCreateToken = function handleCreateToken(data) {
  var self = this;
  self.log("Jwt Token create request");
  console.log(data);

  if (data.hasOwnProperty('payload')) {
    self.jwtSign(data);
  }
};
var handleVerifyToken = function handleVerifyToken(data) {
  var self = this;
  self.log("Jwt Token verify request");

  if (data.hasOwnProperty('token')) {
    self.jwtVerify(data);
  }
};
var jwtSign = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(jw) {
    var self, token, tk;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            self = this;
            _context.prev = 1;
            _context.next = 4;
            return self.jwt.sign(jw.payload, self.key);

          case 4:
            token = _context.sent;
            tk = {
              token: token,
              user: {
                name: jw.payload.username,
                acesstoken: token
              }
            };
            console.log('TOKEN SUCCESSFULLY CREATED');
            console.log(token);
            jw.callback(null, tk);
            _context.next = 14;
            break;

          case 11:
            _context.prev = 11;
            _context.t0 = _context["catch"](1);
            jw.callback(_context.t0, null);

          case 14:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this, [[1, 11]]);
  }));

  return function jwtSign(_x) {
    return _ref.apply(this, arguments);
  };
}();
var jwtVerify = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(token) {
    var self, verified;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            self = this;
            self.log('Verifying Tokens');
            _context2.prev = 2;
            _context2.next = 5;
            return self.jwt.verify(token.token, self.key);

          case 5:
            verified = _context2.sent;

            if (verified) {
              token.callback(null, verified);
            }

            _context2.next = 12;
            break;

          case 9:
            _context2.prev = 9;
            _context2.t0 = _context2["catch"](2);
            token.callback(_context2.t0, null);

          case 12:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, this, [[2, 9]]);
  }));

  return function jwtVerify(_x2) {
    return _ref2.apply(this, arguments);
  };
}();

/***/ }),
/* 101 */
/***/ (function(module, exports) {

module.exports = require("jsonwebtoken");

/***/ }),
/* 102 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__hash__ = __webpack_require__(103);

/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0__hash__["a" /* default */]);

/***/ }),
/* 103 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__methods__ = __webpack_require__(104);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



var bcrypt = __webpack_require__(105);

var Hash = function Hash(pao) {
  _classCallCheck(this, Hash);

  this.pao = pao;
  this.hach = bcrypt;
  this.init = __WEBPACK_IMPORTED_MODULE_0__methods__["e" /* init */];
  this.handleHashPayload = __WEBPACK_IMPORTED_MODULE_0__methods__["c" /* handleHashPayload */];
  this.handleComparePayload = __WEBPACK_IMPORTED_MODULE_0__methods__["b" /* handleComparePayload */];
  this.hash = __WEBPACK_IMPORTED_MODULE_0__methods__["d" /* hash */];
  this.compare = __WEBPACK_IMPORTED_MODULE_0__methods__["a" /* compare */];
};

/* harmony default export */ __webpack_exports__["a"] = (Hash);

/***/ }),
/* 104 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return init; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return handleHashPayload; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return handleComparePayload; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return hash; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return compare; });
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var init = function init() {
  console.log('List has been initialised');
  this.listens({
    'hash-payload': this.handleHashPayload.bind(this),
    'compare-payload': this.handleComparePayload.bind(this)
  });
};
var handleHashPayload = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(data) {
    var self, pao, hashed;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            self = this;
            pao = self.pao;
            _context.next = 4;
            return self.hash({
              password: data.payload
            });

          case 4:
            hashed = _context.sent;

            if (!pao.pa_isString(hashed)) {
              data.callback({
                e: hashed.e,
                message: 'Hashing failed'
              });
            } else {
              data.callback(null, hashed);
            }

          case 6:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function handleHashPayload(_x) {
    return _ref.apply(this, arguments);
  };
}();
var handleComparePayload = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(data) {
    var self, pao, compared;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            self = this;
            pao = self.pao;
            _context2.next = 4;
            return self.compare({
              plainpass: data.payload.plainpass,
              hash: data.payload.hash
            });

          case 4:
            compared = _context2.sent;
            console.log('TEH COMPARED');
            console.log(compared);

            if (pao.pa_isString(compared) || pao.pa_isObject(compared)) {
              data.callback({
                e: compared.e,
                message: 'Comparison failed'
              });
            } else {
              data.callback(null, compared);
            }

          case 8:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, this);
  }));

  return function handleComparePayload(_x2) {
    return _ref2.apply(this, arguments);
  };
}();
var hash = function hash(data) {
  var self = this;
  return new Promise(function (resolve, reject) {
    self.hach.genSalt(10, function (err, salt) {
      if (err) {
        reject({
          error: true,
          e: err
        });
      } else {
        self.hach.hash(data.password, salt, function (err, hashedPass) {
          if (err) {
            reject({
              error: true,
              e: err
            });
          } else {
            resolve(hashedPass);
          }
        });
      }
    });
  });
};
var compare = function compare(data) {
  var self = this;
  return new Promise(function (resolve, reject) {
    self.hach.compare(data.plainpass, data.hash, function (err, isMatch) {
      if (err) {
        self.log('Match failed,an error occured');
        self.log(err);
        reject({
          error: true,
          e: err
        });
      } else {
        if (isMatch === true) {
          resolve(isMatch);
        } else {
          resolve(false);
        }
      }
    });
  });
};

/***/ }),
/* 105 */
/***/ (function(module, exports) {

module.exports = require("bcryptjs");

/***/ }),
/* 106 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__register__ = __webpack_require__(107);

/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0__register__["a" /* default */]);

/***/ }),
/* 107 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__methods__ = __webpack_require__(108);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

 //Dependecies

var crypto = __webpack_require__(7);

var Register = function Register(pao) {
  _classCallCheck(this, Register);

  this.pao = pao;
  this.crypto = crypto;
  this.tmpd = null;
  this.strategies = {
    anzii: true,
    social: true
  }; // methods

  this.init = __WEBPACK_IMPORTED_MODULE_0__methods__["h" /* init */];
  this.handleRegisterTask = __WEBPACK_IMPORTED_MODULE_0__methods__["e" /* handleRegisterTask */];
  this.registerUser = __WEBPACK_IMPORTED_MODULE_0__methods__["n" /* registerUser */];
  this.addUser = __WEBPACK_IMPORTED_MODULE_0__methods__["a" /* addUser */];
  this.saveUser = __WEBPACK_IMPORTED_MODULE_0__methods__["o" /* saveUser */];
  this.createJwt = __WEBPACK_IMPORTED_MODULE_0__methods__["c" /* createJwt */];
  this.sendEmail = __WEBPACK_IMPORTED_MODULE_0__methods__["p" /* sendEmail */];
  this.hookFunkToThingy = __WEBPACK_IMPORTED_MODULE_0__methods__["g" /* hookFunkToThingy */];
  this.registerStrategy = __WEBPACK_IMPORTED_MODULE_0__methods__["registerStrategy"];
  this.anzii = __WEBPACK_IMPORTED_MODULE_0__methods__["b" /* anzii */];
  this.social = __WEBPACK_IMPORTED_MODULE_0__methods__["r" /* social */];
  this.isUserExist = __WEBPACK_IMPORTED_MODULE_0__methods__["k" /* isUserExist */];
  this.isCallback = __WEBPACK_IMPORTED_MODULE_0__methods__["isCallback"];
  this.hash = __WEBPACK_IMPORTED_MODULE_0__methods__["hash"];
  this.insertHandler = __WEBPACK_IMPORTED_MODULE_0__methods__["insertHandler"];
  this.findHandler = __WEBPACK_IMPORTED_MODULE_0__methods__["findHandler"];
  this.procedureDoc = __WEBPACK_IMPORTED_MODULE_0__methods__["l" /* procedureDoc */];
  this.setTokenHeader = __WEBPACK_IMPORTED_MODULE_0__methods__["q" /* setTokenHeader */];
};

/* harmony default export */ __webpack_exports__["a"] = (Register);

/***/ }),
/* 108 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return init; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return handleRegisterTask; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return registerUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return anzii; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "r", function() { return social; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return isUserExist; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return addUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "q", function() { return setTokenHeader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return saveUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return createJwt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return sendEmail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return hookFunkToThingy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return procedureDoc; });
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var init = function init() {
  console.log('Register has been initialised');
  this.listens({
    'handle-register-task': this.handleRegisterTask.bind(this)
  });
};
var handleRegisterTask = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(data) {
    var self, pao, contains, isOBject, forOf, user;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            console.log(data);
            self = this;
            pao = self.pao;
            contains = pao.pa_contains;
            isOBject = pao.pa_isObject;
            forOf = pao.pa_forOf;
            user = data.payload.user;
            self.callback = data.callback;
            self.tmpd = data; // let uid = user.ID

            _context2.next = 11;
            return self.log('THE DATA INSIDE ASETTINGS');

          case 11:
            _context2.next = 13;
            return self.log(user);

          case 13:
            if (isOBject(user)) {
              _context2.next = 15;
              break;
            }

            return _context2.abrupt("return", self.callback({
              message: 'User has not been specified'
            }, null));

          case 15:
            if (user.action) {
              _context2.next = 17;
              break;
            }

            return _context2.abrupt("return", self.callback({
              message: 'Invalid request'
            }, null));

          case 17:
            if (contains(user, ['payload'])) {
              _context2.next = 19;
              break;
            }

            return _context2.abrupt("return", self.callback({
              message: 'missing required key'
            }, null));

          case 19:
            _context2.t0 = user.action;
            _context2.next = _context2.t0 === 'registerUser' ? 22 : 24;
            break;

          case 22:
            self.registerUser(user.payload).then( /*#__PURE__*/function () {
              var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(userStatus) {
                return regeneratorRuntime.wrap(function _callee$(_context) {
                  while (1) {
                    switch (_context.prev = _context.next) {
                      case 0:
                        _context.next = 2;
                        return self.log('THE Register Status');

                      case 2:
                        _context.next = 4;
                        return self.log(userStatus);

                      case 4:
                        if (!userStatus) {
                          _context.next = 6;
                          break;
                        }

                        return _context.abrupt("return", self.callback(null, {
                          message: 'exists'
                        }));

                      case 6:
                        self.addUser(user.register).then(function (addedUser) {
                          self.createJwt(addedUser).then(function (jwt) {
                            self.sendEmail(addedUser).then(function (mailSent) {})["catch"](function (e) {});
                          })["catch"](function (e) {});
                        })["catch"](function (e) {});

                      case 7:
                      case "end":
                        return _context.stop();
                    }
                  }
                }, _callee);
              }));

              return function (_x2) {
                return _ref2.apply(this, arguments);
              };
            }())["catch"](function (e) {
              return self.callback(e, null);
            });
            return _context2.abrupt("break", 25);

          case 24:
            return _context2.abrupt("return", self.callback(new Error('Unknown data request'), null));

          case 25:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, this);
  }));

  return function handleRegisterTask(_x) {
    return _ref.apply(this, arguments);
  };
}();
var registerUser = function registerUser(pay) {
  var self = this;
  var pao = self.pao;
  var user = pay;
  return new Promise(function (resolve, reject) {
    if (!pao.pa_contains(user, 'strategy')) return reject(new Error('Missing strategy'));
    if (!pao.pa_contains(user, 'register')) return reject(new Error('Missing register'));
    if (!pao.pa_contains(self.strategies, user.strategy)) return reject(new Error('Invalid strategy'));
    self[user.strategy](user.register).then(function (registerStatus) {
      return resolve(registerStatus);
    })["catch"](function (e) {
      if (e instanceof Errror) return reject(e);
    });
  });
};
var anzii = function anzii(user) {
  var self = this;
  var pao = self.pao;
  self.log("Executing Anzii registration strategy");
  return new Promise(function (resolve, reject) {
    if (!pao.pa_contains(user, ['email', 'password'])) return reject(new Error('Missing required user data'));
    if (!pao.pa_isValidEmail(user.email) && !pao.pa_isValidPassword(user.password)) return reject(new Error('Invalid register input'));
    self.isUserExist(resolve, reject, user).then(function (existStatus) {
      return resolve(existStatus);
    })["catch"](function (e) {
      if (e instanceof Errror) return reject(e);
    });
  });
};
var social = function social(data) {
  var self = this;
  self.log('Executing Social registration strategy');
};
var isUserExist = function isUserExist(user) {
  var _this = this;

  var self = this; // let user =  user

  return new Promise(function (resolve, reject) {
    self.query('mysql.jo_user.findOne', {
      user: {
        email: user.email
      }
    }, self.dataRequestHandler.bind(_this, resolve, reject));
  });
};
var addUser = function addUser(user) {
  var self = this;
  return new Promise(function (resolve, reject) {
    self.emit({
      type: "hash-payload",
      data: {
        payload: user.password,
        callback: hash.bind(self, resolve, reject)
      }
    });
  });
};
var setTokenHeader = function setTokenHeader(reslve, reject) {
  var e = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
  var token = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
  var self = this;
  var pao = self.pao;

  if (e) {
    console.log('TOKEN CREATION FAILED');
    console.log(e);
    resolve(e);
  } else {
    console.log('TOKEN CREATION SUCCESSFULL');
    console.log('SETTING TOKEN HEADER');
    console.log(self.tmpd);
    self.tmpd.user.request.res.set('X-AUTH-TOKEN', token.token);
    resolve({
      user: token.user
    });
  }
};

var hash = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(resolve, reject) {
    var e,
        h,
        self,
        user,
        password,
        _hash,
        _args3 = arguments;

    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            e = _args3.length > 2 && _args3[2] !== undefined ? _args3[2] : null;
            h = _args3.length > 3 && _args3[3] !== undefined ? _args3[3] : null;
            self = this;

            if (!e) {
              _context3.next = 8;
              break;
            }

            console.log(e);
            reject({
              message: 'registration failed due to server error:hash'
            });
            _context3.next = 18;
            break;

          case 8:
            console.log('hashed');
            console.log(h);
            user = self.tmpd.user;
            password = h;
            _context3.next = 14;
            return self.crypto.randomBytes(35).toString('hex');

          case 14:
            _hash = _context3.sent;
            user.password = password;
            user.hash = _hash;
            self.saveUser(user).then(function (savedUser) {
              resolve(savedUser);
            })["catch"](function (e) {});

          case 18:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, this);
  }));

  return function hash(_x3, _x4) {
    return _ref3.apply(this, arguments);
  };
}();

var handleSentEmail = function handleSentEmail(sendStatus) {};

var getJwt = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(resolve, reject) {
    var e,
        h,
        self,
        user,
        password,
        _hash2,
        _args4 = arguments;

    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            e = _args4.length > 2 && _args4[2] !== undefined ? _args4[2] : null;
            h = _args4.length > 3 && _args4[3] !== undefined ? _args4[3] : null;
            self = this;

            if (!e) {
              _context4.next = 8;
              break;
            }

            console.log(e);
            reject({
              message: 'registration failed due to server error:hash'
            });
            _context4.next = 18;
            break;

          case 8:
            console.log('hashed');
            console.log(h);
            user = self.tmpd.user;
            password = h;
            _context4.next = 14;
            return self.crypto.randomBytes(35).toString('hex');

          case 14:
            _hash2 = _context4.sent;
            user.password = password;
            user.hash = _hash2;
            self.saveUser(user).then(function (savedUser) {
              resolve(savedUser);
            })["catch"](function (e) {});

          case 18:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, this);
  }));

  return function getJwt(_x5, _x6) {
    return _ref4.apply(this, arguments);
  };
}();

var saveUser = function saveUser(user) {
  var _this2 = this;

  var self = this;
  return new Promise(function (resolve, reject) {
    self.query('mysql.PROCEDURE', self.procedureDoc(user), self.dataRequestHandler.bind(_this2, resolve, reject));
  });
};
var createJwt = function createJwt(user) {
  var self = this;
  return new Promise(function (resolve, reject) {
    self.emit({
      type: 'create-jwt-token',
      data: {
        payload: user,
        callback: self.setTokenHeader.bind(self, resolve, reject)
      }
    });
  });
};
var sendEmail = function sendEmail(user) {
  var self = this;
  return new Promise(function (resolve, reject) {
    self.emit({
      type: 'send-mail',
      data: {
        payload: user,
        callback: self.hookFunkToThingy(self, function (resolve, reject) {
          var e = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
          var res = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
          if (e) return reject(e);
          return resolve(res);
        }, [resolve, reject])
      }
    });
  });
};
var hookFunkToThingy = function hookFunkToThingy(hooky, hook, args) {
  return hook.bind(hooky, _toConsumableArray(args));
};
var procedureDoc = function procedureDoc(data) {
  var fields = {
    jo_user: {
      id: 'NULL',
      u_type: data.usertype,
      first_name: data.firstname,
      last_name: data.lastname,
      email: data.email
    },
    jo_account: {
      own: {
        id: 'NULL'
      },
      tables: [{
        name: 'jo_user',
        values: ['u_type.account_name']
      }]
    },
    jo_user_account_join: {
      own: {
        id: 'NULL'
      },
      tables: [{
        name: 'jo_user',
        values: ['id.u_id', 'email.account_email']
      }, {
        name: 'jo_account',
        values: ['id.account_id']
      }]
    },
    jo_login: {
      own: {
        id: 'NULL',
        password: data.password
      },
      tables: [{
        name: 'jo_user',
        values: ['id.u_id', 'email.username']
      }]
    }
  };
  return [{
    name: 'jo_user',
    fields: fields.jo_user
  }, {
    name: 'jo_account',
    fields: fields.jo_account
  }, {
    name: 'jo_user_account_join',
    lastInsert: ['jo_user', 'jo_account'],
    fields: fields.jo_user_account_join
  }, {
    name: 'jo_login',
    lastInsert: ['jo_user'],
    fields: fields.jo_login
  }];
}; // export const init = function(){
//   console.log('Register has been initialised')
// 	this.listens({
// 		'handle-register-task': this.handleRegisterTask.bind(this),
// 	})
// }
// export const handleRegisterTask= function(data){
// 	const self = this 
// 	self.log("Handling Registration task")
// 	self.log(data)
// 	self.registerStrategy(data)
// } 
// export const registerStrategy = function(data){
// 	const self = this 
// 	const pao = self.pao 
// 	let user = data.payload.user
// 	console.log('THE DATA INSIDE STRATEGY')
// 	console.log(user)
// 	if(!pao.pa_contains(user,'strategy')){
// 		data.callback('Missing required Strategy',null)
// 	}else{
// 		if(!pao.pa_contains(self.strategies,user.strategy)){
// 			  data.callback('Specified strategy not supported')
// 		}else{
// 			console.log('STRATEGY: CURRENT')
// 			console.log(user.strategy)
// 			self.tmpd = data
// 			self[user.strategy](data)
// 		}
// 	}
// } 
// export const anzii = function(data){
// 	const self = this
// 	const pao = self.pao 
// 	self.log("Executing Anzii registration strategy")
//   if(!pao.pa_contains(data,'user')){
//   }else{
//   	let user =  data.user.parsed.user
//   	if(!(pao.pa_contains(user,['email','password']))){
// 		data.callback({message: 'missing required keys for registration'})
//   	}else{
//   		 if(!pao.pa_isValidEmail(user.email) || !pao.pa_isValidPassword(user.password)){ 
//   		  data.callback({message: 'either password or email is invalid'})
//   		 }else{
// 			self.isUserExist(data)
//   		 }
//   	}
//   }
// } 
// export const social = function(data){
// 	  const self = this 
// 	  self.log('Executing Social registration strategy')
// } 
// export const isUserExist  = function(data){
// 	  const self = this 
// 	  let user =  data.payload.user
// 	  self.log('Checking if user is taken') 
// 	  self.callback = data.callback
// 	  self.query(
// 	      'mysql.jo_user.findOne',
// 			{user: { email: user.email}},
// 			self.findHandler.bind(this)
// 	  )
// 	//   {conditions: ['where']}
// }
// export const isCallback = function(data,over=null){
// 	if(!data.hasOwnProperty('callback')){
// 			 self.log('Task handle request me failed','warn') 
// 			 self.emit({
// 			 	type: 'request-task-handle-failed',
// 			 	data: {message: 'failed'}
// 			 })
// 		}else{
// 			if(over){
// 			 data.callback(over)
// 			}else{
// 				data.callback()
// 			}
// 		}
// }
// export const processResults = function(e,r){
// }
// export const setTokenHeader = function(e=null,token=null){
// 	const self = this 
// 	const pao = self.pao 
// 	if(e){
// 		console.log('TOKEN CREATION FAILED')
// 		console.log(e)
// 		self.callback(e)
// 	}else{
// 		console.log('TOKEN CREATION SUCCESSFULL')
// 		console.log('SETTING TOKEN HEADER')
// 		console.log(self.tmpd)
// 		self.tmpd.user.request.res.set('X-AUTH-TOKEN',token.token) 
// 		self.callback(null,{user: token.user})
// 	}
// }
// export const insertHandler = function(e =null,r = null){
// 	const self = this 
// 	const pao = self.pao 
// 	if(e){
// 		self.callback(e,null)
// 	}else{
// 		if(!r){
// 			self.callback({message: 'Insert operation failed'},null)
// 		}else{
// 			self.emit({type:'create-jwt-token',data:{payload: r.user,callback: self.setTokenHeader.bind(self)}})
// 		}
// 	}
// }
// export const findHandler = async function(e =null,r = null){
// 	const self = this 
// 	const pao = self.pao 
// 	if(e){
// 		self.callback({message: 'An error occured attempting to find user'},null)
// 	}else{
//         console.log('THE VALUE R')
// 		console.log(pao.pa_isArray(r))
// 		console.log(r.length)
// 		console.log(r.length > 0)
// 		console.log('after r has been re-assigned a new value')
// 		console.log(r)
// 		console.log(!r)
// 		if((pao.pa_isArray(r) && r.length === 0)){
// 			console.log('ANZII USER DOES NOT EXIST, CREATE USER')
// 			let user = self.tmpd.user.parsed.user
// 			self.emit({type:"hash-payload",data: {payload: user.password,callback: self.hash.bind(self)}})
// 		}else{
// 			console.log('THE TAKEN USER')
// 			console.log(r)
// 			self.callback({message: 'User is already taken'},null)
// 		}
// 	}
// 	// token.res.set('X-AUTH-TOKEN',token.tk)
// }
// export const hash = async function(e=null,h=null){
// 	const self = this 
// 	if(e){
// 		console.log(e)
// 		self.callback({message: 'registration failed due to server error:hash'})
// 	}else{
// 		console.log('hashed')
// 		console.log(h)
// 		let user = self.tmpd.user.parsed.user
// 		let password = h 
// 		let hash = await self.crypto.randomBytes(35).toString('hex')
// 		user.password = password
// 		user.hash =  hash
// 		self.query(
// 			'mysql.PROCEDURE',
// 			  self.procedureDoc(user),
// 			  self.insertHandler.bind(this)
// 		)
// 		// self.query(
// 		// 	'mysql.jo_user.insertOne',
// 		// 	  {user: {id: null,email: user.email,first_name: user.firstname,last_name: user.lastname,password: password,hash: hash}},
// 		// 	  self.insertHandler.bind(this)
// 		// )
// 	}
// }
// export const procedureDoc = function(data){
// 	let fields = {
// 		jo_user: { id: 'NULL',u_type: data.usertype,first_name: data.firstname,last_name: data.lastname,email: data.email },
// 		jo_account: {own:{id:'NULL'},tables: [{name:'jo_user',values:['u_type.account_name']}]},
// 		jo_user_account_join: {own:{id:'NULL'},tables: [{name:'jo_user',values:['id.u_id','email.account_email']},{name:'jo_account',values:['id.account_id']}]},
// 		jo_login: {own:{id:'NULL',password:data.password},tables: [{name:'jo_user',values:['id.u_id','email.username']}]}
// 	}
// 	return [
// 		{name: 'jo_user',fields: fields.jo_user},
// 		{name: 'jo_account',fields: fields.jo_account},
// 		{name: 'jo_user_account_join',lastInsert: ['jo_user','jo_account'],fields: fields.jo_user_account_join},
// 		{name: 'jo_login',lastInsert: ['jo_user'],fields: fields.jo_login}
// 	   ]
// }

/***/ }),
/* 109 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__login__ = __webpack_require__(110);

/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0__login__["a" /* default */]);

/***/ }),
/* 110 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__methods__ = __webpack_require__(111);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



var Login = function Login(pao) {
  _classCallCheck(this, Login);

  this.pao = pao;
  this.strategies = {
    anzii: true,
    social: true
  }; // // methods

  this.init = __WEBPACK_IMPORTED_MODULE_0__methods__["e" /* init */];
  this.handleLoginTask = __WEBPACK_IMPORTED_MODULE_0__methods__["d" /* handleLoginTask */];
  this.loginStrategy = __WEBPACK_IMPORTED_MODULE_0__methods__["g" /* loginStrategy */];
  this.anzii = __WEBPACK_IMPORTED_MODULE_0__methods__["a" /* anzii */];
  this.social = __WEBPACK_IMPORTED_MODULE_0__methods__["i" /* social */];
  this.isUserExist = __WEBPACK_IMPORTED_MODULE_0__methods__["f" /* isUserExist */];
  this.compare = __WEBPACK_IMPORTED_MODULE_0__methods__["b" /* compare */];
  this.findHandler = __WEBPACK_IMPORTED_MODULE_0__methods__["c" /* findHandler */];
  this.setTokenHeader = __WEBPACK_IMPORTED_MODULE_0__methods__["h" /* setTokenHeader */];
};

/* harmony default export */ __webpack_exports__["a"] = (Login);

/***/ }),
/* 111 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return init; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return handleLoginTask; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return loginStrategy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return anzii; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return social; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return isUserExist; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return setTokenHeader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return findHandler; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return compare; });
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var init = function init() {
  console.log('Login has been initialised');
  this.listens({
    'handle-login-task': this.handleLoginTask.bind(this)
  });
};
var handleLoginTask = function handleLoginTask(data) {
  var self = this;
  self.log("Handling Login task");
  self.log(data);
  self.loginStrategy(data);
};
var loginStrategy = function loginStrategy(data) {
  var self = this;
  var pao = self.pao;
  var user = data.user.parsed.user;

  if (!pao.pa_contains(user, 'strategy')) {
    data.callback('Missing required Strategy', null);
  } else {
    if (!pao.pa_contains(self.strategies, user.strategy)) {
      data.callback('Specified strategy not supported');
    } else {
      console.log('STRATEGY: CURRENT');
      console.log(user.strategy);
      self.tmpd = data;
      self[user.strategy](data);
    }
  }
};
var anzii = function anzii(data) {
  var self = this;
  var pao = self.pao;
  self.log("Executing Anzii login strategy");

  if (!pao.pa_contains(data, 'user')) {} else {
    var user = data.user.parsed.user;

    if (!pao.pa_contains(user, ['email', 'password'])) {
      data.callback({
        message: 'missing required keys for login'
      });
    } else {
      if (!pao.pa_isValidEmail(user.email) || !pao.pa_isValidPassword(user.password)) {
        data.callback({
          message: 'either password or email is invalid'
        });
      } else {
        self.isUserExist(data);
      }
    }
  }
};
var social = function social(data) {
  var self = this;
  self.log('Executing Social registration strategy');
};
var isUserExist = function isUserExist(data) {
  var self = this;
  var user = data.user.parsed.user; //   self.log('Checking if user is taken') 

  self.callback = data.callback;
  var join = {
    returnFields: ['email,first_name,last_name,password'],
    tables: ['jo_user', 'jo_login'],
    joins: 2,
    joinPoints: ['jo_user.id EQUALS jo_login.u_id'],
    conditions: ["email EQUALS ".concat(user.email)],
    type: 'inner'
  }; //   self.query(
  // 	'mysql.jo_user.findOne',
  // 	  {user: { email: user.email}},
  // 	  self.findHandler.bind(this)
  // 	  )

  self.query('mysql.JOIN', join, self.findHandler.bind(this));
};
var setTokenHeader = function setTokenHeader() {
  var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
  var token = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  var self = this;
  var pao = self.pao;

  if (e) {
    console.log('TOKEN CREATION FAILED');
    console.log(e);
    self.callback(e);
  } else {
    console.log('TOKEN CREATION SUCCESSFULL');
    console.log('SETTING TOKEN HEADER');
    console.log(self.tmpd);
    self.tmpd.user.request.res.set('X-AUTH-TOKEN', token.token);
    self.callback(null, {
      user: token.user
    });
  }
};
var findHandler = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    var e,
        r,
        self,
        pao,
        password,
        _args = arguments;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            e = _args.length > 0 && _args[0] !== undefined ? _args[0] : null;
            r = _args.length > 1 && _args[1] !== undefined ? _args[1] : null;
            self = this;
            pao = self.pao;

            if (e) {
              self.callback({
                message: 'An error occured attempting to find user'
              }, null);
            } else {
              if (pao.pa_isArray(r) && r.length === 0) {
                self.callback({
                  message: 'User does not exist'
                }, null);
              } else {
                self.log('Login User exist');
                self.log(r);
                self.log(self.tmpd); // let user = {email: self.tmpd.user.parsed.user.email,username: 'sample'}
                // self.emit({type:'create-jwt-token',data:{payload: user,callback: self.setTokenHeader.bind(self)}})

                password = self.tmpd.user.parsed.user.password;
                self.emit({
                  type: 'compare-payload',
                  data: {
                    payload: {
                      plainpass: password,
                      hash: r.password
                    },
                    callback: self.compare.bind(this)
                  }
                });
              }
            } // token.res.set('X-AUTH-TOKEN',token.tk)


          case 5:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function findHandler() {
    return _ref.apply(this, arguments);
  };
}();
var compare = function compare() {
  var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
  var c = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  var self = this;

  if (e) {
    console.log(e);
    self.callback({
      message: 'Login failed due to server error:hash'
    });
  } else {
    if (c) {
      self.log('Login User is valid');
      self.log(c);
      var user = {
        username: self.tmpd.user.parsed.user.email
      };
      self.emit({
        type: 'create-jwt-token',
        data: {
          payload: user,
          callback: self.setTokenHeader.bind(self)
        }
      });
    } else {
      self.callback({
        message: 'Invalid login'
      }, null);
    }
  }
};

/***/ }),
/* 112 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__authentication__ = __webpack_require__(113);

/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0__authentication__["a" /* default */]);

/***/ }),
/* 113 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__methods__ = __webpack_require__(114);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



var Authentication = function Authentication(pao) {
  _classCallCheck(this, Authentication);

  this.pao = pao; // methods

  this.init = __WEBPACK_IMPORTED_MODULE_0__methods__["c" /* init */];
  this.handleShareMiddleware = __WEBPACK_IMPORTED_MODULE_0__methods__["b" /* handleShareMiddleware */];
  this.auth = __WEBPACK_IMPORTED_MODULE_0__methods__["a" /* auth */];
  this.token = __WEBPACK_IMPORTED_MODULE_0__methods__["d" /* token */];
};

/* harmony default export */ __webpack_exports__["a"] = (Authentication);

/***/ }),
/* 114 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return init; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return handleShareMiddleware; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return auth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return token; });
var init = function init() {
  this.log('Authentication has been initialised');
  this.listens({
    'share-middleware': this.handleShareMiddleware.bind(this)
  });
};
var handleShareMiddleware = function handleShareMiddleware() {
  var self = this;
  console.log('HANLDE SHARE MIDDLEWARE EVENT HAS OCCURED');
  self.emit({
    type: "add-ext-middleware",
    data: {
      type: 'private',
      level: 'top',
      middleware: {
        funk: self.auth.bind(self)
      }
    }
  });
};
var auth = function auth(req, res, next) {
  var self = this;
  self.log('THE REQUEST HEADERS');
  self.request = {
    req: req,
    res: res,
    next: next
  };
  self.log(req.headers);

  if (req.headers['x-auth-token']) {
    var _token = req.headers['x-auth-token'];
    self.emit({
      type: 'verify-jwt-token',
      data: {
        token: _token,
        callback: self.token.bind(this)
      }
    });
  } else {
    console.log('THE X-AUTH DOES NOT EXIST');
    self.emit({
      type: 'write-server-request-response',
      data: {
        data: {
          error: true,
          message: 'Required token header required'
        },
        res: res
      }
    });
  }
};
var token = function token() {
  var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
  var r = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  var self = this;
  self.log('Authentication Middleware executed');

  if (e) {
    console.log(e);
    var data = {
      error: true,
      message: "Invalid token"
    };
    self.emit({
      type: 'write-server-request-response',
      data: {
        data: data,
        res: self.request.res
      }
    });
  } else {
    // re.req.user = r 
    console.log('THE SUCCESSFULLY VERIFIED TOKEN');
    console.log(r);
    self.request.next();
  }
};

/***/ }),
/* 115 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__frametest__ = __webpack_require__(116);

/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0__frametest__["a" /* default */]);

/***/ }),
/* 116 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__methods__ = __webpack_require__(117);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

 //Dependecies

var crypto = __webpack_require__(7);

var fetch = __webpack_require__(6); // const list = require('./json')


var FrameTest = function FrameTest(pao) {
  _classCallCheck(this, FrameTest);

  this.pao = pao;
  this.crypto = crypto;
  this.tmpd = null;
  this.strategies = {
    anzii: true,
    social: true
  };
  this.url = 'http://public.api.careerjet.net/search?locale_code=en_ZA&affid=0e6712acc74087da913e65985433a122&keywords=web developer&location=gauteng&pagesize=50';
  this.fetch = fetch; // this.list = list
  // methods

  this.init = __WEBPACK_IMPORTED_MODULE_0__methods__["i" /* init */];
  this.handleFrameTestTask = __WEBPACK_IMPORTED_MODULE_0__methods__["g" /* handleFrameTestTask */];
  this.registerStrategy = __WEBPACK_IMPORTED_MODULE_0__methods__["registerStrategy"];
  this.anzii = __WEBPACK_IMPORTED_MODULE_0__methods__["anzii"];
  this.social = __WEBPACK_IMPORTED_MODULE_0__methods__["q" /* social */];
  this.isUserExist = __WEBPACK_IMPORTED_MODULE_0__methods__["l" /* isUserExist */];
  this.isCallback = __WEBPACK_IMPORTED_MODULE_0__methods__["k" /* isCallback */];
  this.hash = __WEBPACK_IMPORTED_MODULE_0__methods__["h" /* hash */];
  this.insertHandler = __WEBPACK_IMPORTED_MODULE_0__methods__["j" /* insertHandler */];
  this.findHandler = __WEBPACK_IMPORTED_MODULE_0__methods__["e" /* findHandler */];
  this.procedureDoc = __WEBPACK_IMPORTED_MODULE_0__methods__["m" /* procedureDoc */];
  this.setTokenHeader = __WEBPACK_IMPORTED_MODULE_0__methods__["p" /* setTokenHeader */];
  this.testy = __WEBPACK_IMPORTED_MODULE_0__methods__["r" /* testy */];
  this.dataRequestHandler = __WEBPACK_IMPORTED_MODULE_0__methods__["b" /* dataRequestHandler */];
  this.saveThingy = __WEBPACK_IMPORTED_MODULE_0__methods__["o" /* saveThingy */];
  this.deleteThingy = __WEBPACK_IMPORTED_MODULE_0__methods__["c" /* deleteThingy */];
  this.updateThingy = __WEBPACK_IMPORTED_MODULE_0__methods__["t" /* updateThingy */];
  this.findThingy = __WEBPACK_IMPORTED_MODULE_0__methods__["f" /* findThingy */];
  this.doThingy = __WEBPACK_IMPORTED_MODULE_0__methods__["d" /* doThingy */];
  this.thingyDataRequestHandler = __WEBPACK_IMPORTED_MODULE_0__methods__["s" /* thingyDataRequestHandler */];
};

/* harmony default export */ __webpack_exports__["a"] = (FrameTest);

/***/ }),
/* 117 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return init; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return handleFrameTestTask; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "r", function() { return testy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return deleteThingy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return saveThingy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "t", function() { return updateThingy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return findThingy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return doThingy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s", function() { return thingyDataRequestHandler; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return dataRequestHandler; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "q", function() { return social; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return isUserExist; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return isCallback; });
/* unused harmony export processResults */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return setTokenHeader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return insertHandler; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return findHandler; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return hash; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return procedureDoc; });
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var init = function init() {
  console.log('Register has been initialised');
  this.listens({
    'handle-test-task': this.handleFrameTestTask.bind(this)
  });
};
var handleFrameTestTask = function handleFrameTestTask(data) {
  console.log(data);
  var self = this;
  var pao = self.pao;
  var contains = pao.pa_contains;
  var isOBject = pao.pa_isObject;
  var user = data.payload.user;
  var request = data.payload.request;
  self.callback = data.callback; // let uid = user.ID

  console.log('THE DATA INSIDE Adash');
  console.log(user);
  console.log('THE PARSED DATA TEST');
  console.log(data);
  console.log(user);
  if (!isOBject(user)) return self.callback({
    message: 'User has not been specified'
  }, null);
  if (!user.action) return self.callback({
    message: 'Invalid request'
  }, null);
  if (!contains(user, ['payload'])) return self.callback({
    message: 'missing required key'
  }, null);
  if (!contains(user.payload, ['ID'])) return self.callback({
    message: 'missing required key'
  }, null);

  switch (user.action) {
    case 'delete':
      {
        self.deleteThingy(user.payload).then(function (alertCats) {
          self.callback(null, alertCats);
        })["catch"](function (e) {
          console.log('Reject error');
          console.log(e);
          self.callback(e, null);
        });
      }
      break;

    case 'save':
      {
        self.saveThingy(user.payload).then(function (saved) {
          return self.callback(null, saved);
        })["catch"](function (e) {
          return self.callback(e, null);
        });
      }
      break;

    case 'update':
      {
        self.updateThingy(user.payload).then(function (alerts) {
          return self.callback(null, alerts);
        })["catch"](function (e) {
          return self.callback(e, null);
        });
      }
      break;

    case 'find':
      {
        self.findThingy(user.payload).then(function (alert) {
          return self.callback(null, alert);
        })["catch"](function (e) {
          return self.callback(e, null);
        });
      }
      break;

    case 'do':
      {
        self.doThingy(user.payload, request).then(function (doData) {
          return self.callback(null, doData);
        })["catch"](function (e) {
          return self.callback(e, null);
        });
      }
      break;

    default:
      self.callback(new Error('Unknown data request'), null);
  }
};
var testy = function testy(data) {
  var self = this;
  var pao = self.pao;
  var contains = pao.pa_contains;
  var user = data.payload.user;
  var clientRequest = data.payload.request;
  self.callback = data.callback;

  var fetch = __webpack_require__(118);

  console.log('THE DATA INSIDE TESTY');
  console.log(user);
  console.log('THE PARSED DATA TEST');
  console.log(data);
  console.log(user); // self.callback(null,user)
  // let rest = {
  // 	// conditions: [`email ISEQUALS ${user.email}`],
  // 	// set: [{first_name: 'Ntsako'},{last_name: 'Mahori'}]
  // 	opiks: ['fuxin.count.options[*].as[AllUsers]']
  //   }
  // self.query(
  // 	'mysql.jo_user.find',
  // 	  {opiks: ['fuxin.count.options[*].as[AllUsers]']},
  // 	  self.dataRequestHandler.bind(this)
  // )

  var forwarded = clientRequest.req.headers['x-forwarded-for'];
  var ip = forwarded ? forwarded.split(/, /)[0] : clientRequest.req.connection.remoteAddress; // let ip = request.req.headers['x-forwarded-for'] || request.req.connection.remoteAddress;

  var uAgent = clientRequest.req.headers['user-agent'];
  var url = self.url;
  url += "&user_ip=".concat(ip, "&user_agent=").concat(uAgent); //    var request = require('request');

  console.log('SELF.FETCH'); // console.log(self.fetch)
  // return self.callback(null,{type: typeof self.fetch})

  self.fetch.get(url).then(function (response) {
    console.log('THE REQUEST HAS SUCCEEDED TO CAREERJET');
    console.log(response.data);
    return self.callback(null, {
      success: response.data
    }); //return response.json();
  })["catch"](function (err) {
    self.callback(err, null);
  }); // request(url, function (error, response, body) {
  // 	if (!error && response.statusCode == 200) {
  // 		console.log('THE REQUEST HAS SUCCEEDED TO CAREERJET')
  // 		return self.callback(null,{response}) 
  // 	}else{
  // 		console.log('THE REQUEST HAS FAILED TO CAREERJET')
  // 	}
  // })
};
var deleteThingy = function deleteThingy(pay) {
  var _this = this;

  var self = this;
  var pao = self.pao;
  var uid = pay.ID;
  var alertID = pay.alertID;
  return new Promise(function (resolve, reject) {
    var queries = {
      conditions: ["u_id EQUALS ".concat(uid, " "), "AND id EQUALS ".concat(alertID)]
    };
    self.query('mysql.jo_job_alert.remove', queries, self.thingyDataRequestHandler.bind(_this, resolve, reject));
  });
};
var saveThingy = function saveThingy(data) {
  var _this2 = this;

  var self = this;
  var pao = self.pao;
  return new Promise(function (resolve, reject) {
    // if(!data.profile) return reject(new Error('Invalid Request')) 
    // if(!data.profile.userId) return reject(new Error('Invalid'))
    var query = {
      insert: {
        table: 'jo_user',
        fields: ['u_type', 'is_active', 'is_deleted', 'first_name', 'last_name', 'email', 'phone', 'join_date'],
        values: ['applicant', 1, 0, 'Steven', 'Mashele', 'steae@gmail.com', '0722875412', new Date()]
      },
      take: {
        tables: ['jo_user'],
        opiks: ['field.first_name.as[firstName]', 'field.last_name.as[lastName]', 'field.u_type.as[userType]']
      }
    };
    self.query('mysql.INSERTANDTAKE', query, self.thingyDataRequestHandler.bind(_this2, resolve, reject));
  });
};
var updateThingy = function updateThingy(pay) {
  var _this3 = this;

  var self = this;
  var pao = self.pao;
  console.log('The update');
  console.log(pay); // 	{
  // 		tables:['jo_user','jo_login'],
  // 		joins: 2,
  // 		joinPoints: ['jo_user.id EQUALS jo_login.id'],
  // 		conditions: [[`jo_user.id EQUALS 1`],[`AND jo_login.u_id EQUALS 1`]],
  // 		opiks: ['field.first_name.as[firstName]','field.last_name.as[lastName]',
  // 		set: [{first_name: 'Surprise',last_name: 'Mashele'},{password: '1234567'}],
  // 		takeFrom: 'jo_user'
  //    }

  return new Promise(function (resolve, reject) {
    if (!pay.update) return reject(new Error('Update data missing'));
    var uid = pay.ID; //  let alertID = pay.alertID 

    var update = pay.update;
    var firstName = update.firstName;
    var lastName = update.lastName;
    var phone = update.phone;
    var password = update.password; //  let frequency = update.frequency 

    var queries = {
      returnFields: ['password'],
      tables: ['jo_user', 'jo_login'],
      joins: 2,
      joinPoints: ['jo_user.id EQUALS jo_login.u_id'],
      conditions: ["jo_user.id EQUALS 1", "AND jo_login.u_id EQUALS 1"],
      opiks: ['field.first_name.as[firstName]', 'field.last_name.as[lastName]'],
      set: [{
        first_name: firstName,
        last_name: lastName,
        phone: phone
      }, {
        password: password
      }] // takeFrom: 'jo_user'

    };
    self.query('mysql.UPDATEANDTAKE', queries, self.thingyDataRequestHandler.bind(_this3, resolve, reject)); //   {conditions: [`id EQUALS ${uid} `],
    //  set: [{first_name: firstName,last_name: lastName,phone:phone},{password:password}]
    // }
    // self.query(
    // 		'mysql.jo_user.updateOne',
    // 		queries,
    // 		self.thingyDataRequestHandler.bind(this,resolve,reject)
    // 	)
  });
};
var findThingy = function findThingy(data) {
  var _this4 = this;

  var self = this;
  var pao = self.pao;
  return new Promise(function (resolve, reject) {
    if (!data.profile) return reject(new Error('Invalid Request'));
    if (!data.profile.userId) return reject(new Error('Invalid'));
    var query = {
      conditions: ["id EQUALS ".concat(profile.userID)]
    };
    self.query('mysql.SEARCH', query, self.thingyDataRequestHandler.bind(_this4, resolve, reject));
  });
};
var doThingy = function doThingy(pay, request) {
  var _this5 = this;

  return new Promise(function (resolve, reject) {
    var self = _this5;
    var pao = self.pao;
    var contains = pao.pa_contains;
    var user = pay;
    var clientRequest = request;
    console.log('THE DATA INSIDE TESTY');
    console.log(user);
    console.log('THE PARSED DATA TEST');
    console.log(user); // self.callback(null,user)
    // let rest = {
    // 	// conditions: [`email ISEQUALS ${user.email}`],
    // 	// set: [{first_name: 'Ntsako'},{last_name: 'Mahori'}]
    // 	opiks: ['fuxin.count.options[*].as[AllUsers]']
    //   }
    // self.query(
    // 	'mysql.jo_user.find',
    // 	  {opiks: ['fuxin.count.options[*].as[AllUsers]']},
    // 	  self.dataRequestHandler.bind(this)
    // )

    var forwarded = clientRequest.req.headers['x-forwarded-for'];
    var ip = forwarded ? forwarded.split(/, /)[0] : clientRequest.req.connection.remoteAddress; // let ip = request.req.headers['x-forwarded-for'] || request.req.connection.remoteAddress;

    var uAgent = clientRequest.req.headers['user-agent'];
    var url = self.url;
    url += "&user_ip=".concat(ip, "&user_agent=").concat(uAgent); //    var request = require('request');

    console.log('SELF.FETCH'); // console.log(self.fetch)
    // return self.callback(null,{type: typeof self.fetch})

    self.fetch.get(url).then(function (response) {
      console.log('THE REQUEST HAS SUCCEEDED TO CAREERJET');
      console.log(response.data);
      return resolve({
        success: response.data
      }); //return response.json();
    })["catch"](function (err) {
      reject(err);
    }); // request(url, function (error, response, body) {
    // 	if (!error && response.statusCode == 200) {
    // 		console.log('THE REQUEST HAS SUCCEEDED TO CAREERJET')
    // 		return self.callback(null,{response}) 
    // 	}else{
    // 		console.log('THE REQUEST HAS FAILED TO CAREERJET')
    // 	}
    // })
  });
};
var thingyDataRequestHandler = function thingyDataRequestHandler() {
  var resolve = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
  var reject = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  var e = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
  var result = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
  var self = this;
  var pao = self.pao;
  console.log('THE TYPE OF E IN DATAREQUEST HANDLER');
  console.log(e);
  if (e) reject(e);
  resolve(result);
};
var dataRequestHandler = function dataRequestHandler() {
  var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
  var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  var self = this;
  var pao = self.pao;
  self.log("Executing DataRequestHandler");
  self.log(data);
  self.callback(null, data);
};
var social = function social(data) {
  var self = this;
  self.log('Executing Social registration strategy');
};
var isUserExist = function isUserExist(data) {
  var self = this;
  var user = data.user.parsed.user;
  self.log('Checking if user is taken');
  self.callback = data.callback;
  self.query('mysql.jo_user.findOne', {
    user: {
      email: user.email
    }
  }, self.findHandler.bind(this));
  var rest = {
    conditions: ["country_id EQUALS 202"],
    opiks: ['field.id.as[stateId]', 'field.state_name.as[state]', 'field.country_id.as[countryId]'],
    sort: 'order[state_name].asc',
    range: '2,5',
    take: 5
  }; //   {conditions: ['where']}
};
var isCallback = function isCallback(data) {
  var over = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

  if (!data.hasOwnProperty('callback')) {
    self.log('Task handle request me failed', 'warn');
    self.emit({
      type: 'request-task-handle-failed',
      data: {
        message: 'failed'
      }
    });
  } else {
    if (over) {
      data.callback(over);
    } else {
      data.callback();
    }
  }
};
var processResults = function processResults(e, r) {};
var setTokenHeader = function setTokenHeader() {
  var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
  var token = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  var self = this;
  var pao = self.pao;

  if (e) {
    console.log('TOKEN CREATION FAILED');
    console.log(e);
    self.callback(e);
  } else {
    console.log('TOKEN CREATION SUCCESSFULL');
    console.log('SETTING TOKEN HEADER');
    console.log(self.tmpd);
    self.tmpd.user.request.res.set('X-AUTH-TOKEN', token.token);
    self.callback(null, {
      user: token.user
    });
  }
};
var insertHandler = function insertHandler() {
  var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
  var r = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  var self = this;
  var pao = self.pao;

  if (e) {
    self.callback(e, null);
  } else {
    if (!r) {
      self.callback({
        message: 'Insert operation failed'
      }, null);
    } else {
      self.emit({
        type: 'create-jwt-token',
        data: {
          payload: r.user,
          callback: self.setTokenHeader.bind(self)
        }
      });
    }
  }
};
var findHandler = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    var e,
        r,
        self,
        pao,
        user,
        _args = arguments;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            e = _args.length > 0 && _args[0] !== undefined ? _args[0] : null;
            r = _args.length > 1 && _args[1] !== undefined ? _args[1] : null;
            self = this;
            pao = self.pao;

            if (e) {
              self.callback({
                message: 'An error occured attempting to find user'
              }, null);
            } else {
              console.log('THE VALUE R');
              console.log(pao.pa_isArray(r));
              console.log(r.length);
              console.log(r.length > 0);
              console.log('after r has been re-assigned a new value');
              console.log(r);
              console.log(!r);

              if (pao.pa_isArray(r) && r.length === 0) {
                console.log('ANZII USER DOES NOT EXIST, CREATE USER');
                user = self.tmpd.user.parsed.user;
                self.emit({
                  type: "hash-payload",
                  data: {
                    payload: user.password,
                    callback: self.hash.bind(self)
                  }
                });
              } else {
                console.log('THE TAKEN USER');
                console.log(r);
                self.callback({
                  message: 'User is already taken'
                }, null);
              }
            } // token.res.set('X-AUTH-TOKEN',token.tk)


          case 5:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function findHandler() {
    return _ref.apply(this, arguments);
  };
}();
var hash = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
    var e,
        h,
        self,
        user,
        password,
        _hash,
        _args2 = arguments;

    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            e = _args2.length > 0 && _args2[0] !== undefined ? _args2[0] : null;
            h = _args2.length > 1 && _args2[1] !== undefined ? _args2[1] : null;
            self = this;

            if (!e) {
              _context2.next = 8;
              break;
            }

            console.log(e);
            self.callback({
              message: 'registration failed due to server error:hash'
            });
            _context2.next = 18;
            break;

          case 8:
            console.log('hashed');
            console.log(h);
            user = self.tmpd.user.parsed.user;
            password = h;
            _context2.next = 14;
            return self.crypto.randomBytes(35).toString('hex');

          case 14:
            _hash = _context2.sent;
            user.password = password;
            user.hash = _hash;
            self.query('mysql.PROCEDURE', self.procedureDoc(user), self.insertHandler.bind(this)); // self.query(
            // 	'mysql.jo_user.insertOne',
            // 	  {user: {id: null,email: user.email,first_name: user.firstname,last_name: user.lastname,password: password,hash: hash}},
            // 	  self.insertHandler.bind(this)
            // )

          case 18:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, this);
  }));

  return function hash() {
    return _ref2.apply(this, arguments);
  };
}();
var procedureDoc = function procedureDoc(data) {
  var fields = {
    jo_user: {
      id: 'NULL',
      u_type: data.usertype,
      first_name: data.firstname,
      last_name: data.lastname,
      email: data.email
    },
    jo_account: {
      own: {
        id: 'NULL'
      },
      tables: [{
        name: 'jo_user',
        values: ['u_type.account_name']
      }]
    },
    jo_user_account_join: {
      own: {
        id: 'NULL'
      },
      tables: [{
        name: 'jo_user',
        values: ['id.u_id', 'email.account_email']
      }, {
        name: 'jo_account',
        values: ['id.account_id']
      }]
    },
    jo_login: {
      own: {
        id: 'NULL',
        password: data.password
      },
      tables: [{
        name: 'jo_user',
        values: ['id.u_id', 'email.username']
      }]
    }
  };
  return [{
    name: 'jo_user',
    fields: fields.jo_user
  }, {
    name: 'jo_account',
    fields: fields.jo_account
  }, {
    name: 'jo_user_account_join',
    lastInsert: ['jo_user', 'jo_account'],
    fields: fields.jo_user_account_join
  }, {
    name: 'jo_login',
    lastInsert: ['jo_user'],
    fields: fields.jo_login
  }];
};

/***/ }),
/* 118 */
/***/ (function(module, exports) {

module.exports = require("node-fetch");

/***/ }),
/* 119 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__adash__ = __webpack_require__(120);

/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0__adash__["a" /* default */]);

/***/ }),
/* 120 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__methods__ = __webpack_require__(121);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



var Adash = function Adash(pao) {
  _classCallCheck(this, Adash);

  this.pao = pao;
  this.init = __WEBPACK_IMPORTED_MODULE_0__methods__["d" /* init */];
  this.handleAdashTask = __WEBPACK_IMPORTED_MODULE_0__methods__["c" /* handleAdashTask */];
  this.getApplicantTools = __WEBPACK_IMPORTED_MODULE_0__methods__["b" /* getApplicantTools */];
  this.searchBatch = __WEBPACK_IMPORTED_MODULE_0__methods__["searchBatch"];
  this.searchBatchHandler = __WEBPACK_IMPORTED_MODULE_0__methods__["searchBatchHandler"];
  this.dataRequestHandler = __WEBPACK_IMPORTED_MODULE_0__methods__["a" /* dataRequestHandler */];
};

/* harmony default export */ __webpack_exports__["a"] = (Adash);

/***/ }),
/* 121 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return init; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return handleAdashTask; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getApplicantTools; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return dataRequestHandler; });
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var init = function init() {
  this.log('Bookmark has been initialised');
  this.listens({
    'handle-adash-task': this.handleAdashTask.bind(this)
  });
};
var handleAdashTask = function handleAdashTask(data) {
  console.log(data);
  var self = this;
  var pao = self.pao;
  var contains = pao.pa_contains;
  var isOBject = pao.pa_isObject;
  var user = data.payload.user;
  self.callback = data.callback;
  if (!isOBject(user)) return self.callback({
    message: 'User has not been specified'
  }, null);
  if (!contains(user, ['ID'])) return self.callback({
    message: 'missing required key'
  }, null);
  var uid = user.ID;
  console.log('THE DATA INSIDE Adash');
  console.log(user);
  console.log('THE PARSED DATA TEST');
  console.log(data);
  console.log(user);
  return self.getApplicantTools(uid).then(function (counts) {
    self.callback(null, counts);
  })["catch"](function (e) {
    console.log('Reject error');
    console.log(e);
    self.callback(e, null);
  });
};
var getApplicantTools = function getApplicantTools(uid) {
  var _this = this;

  var self = this;
  return new Promise(function (resolve, reject) {
    var queries = [{
      table: 'jo_job_alert',
      opiks: ['fuxin.count.options[*].as[alertsCount]'],
      conditions: ["u_id EQUALS ".concat(uid)]
    }, {
      table: 'jo_job_bookmark',
      opiks: ['fuxin.count.options[*].as[savedCount]'],
      conditions: ["u_id EQUALS ".concat(uid)]
    }, {
      table: 'jo_search_history',
      opiks: ['fuxin.count.options[*].as[historyCount]'],
      conditions: ["u_id EQUALS ".concat(uid)]
    }];
    self.query('mysql.multiple.find', queries, self.dataRequestHandler.bind(_this, resolve, reject));
  });
};
var dataRequestHandler = function dataRequestHandler() {
  var resolve = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
  var reject = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  var e = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
  var result = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
  var self = this;
  var pao = self.pao;
  console.log('THE TYPE OF E IN DATAREQUEST HANDLER');
  console.log(_typeof(e));
  console.log(e);
  console.log(resolve);
  console.log(reject);
  if (e) reject(new Error('An error has occured Inside MYSQL'));
  resolve(result); // self.log("Executing DataRequestHandler:ADASH")
  // self.log(data)
  // self.callback(null,data)
};

/***/ }),
/* 122 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__inalerts__ = __webpack_require__(123);

/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0__inalerts__["a" /* default */]);

/***/ }),
/* 123 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__methods__ = __webpack_require__(124);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



var Inalerts = function Inalerts(pao) {
  _classCallCheck(this, Inalerts);

  this.pao = pao;
  this.init = __WEBPACK_IMPORTED_MODULE_0__methods__["h" /* init */];
  this.handleInternalAlertsTask = __WEBPACK_IMPORTED_MODULE_0__methods__["g" /* handleInternalAlertsTask */];
  this.saveAlerts = __WEBPACK_IMPORTED_MODULE_0__methods__["k" /* saveAlerts */];
  this.getAlerts = __WEBPACK_IMPORTED_MODULE_0__methods__["d" /* getAlerts */];
  this.saveAlertsSubscriptions = __WEBPACK_IMPORTED_MODULE_0__methods__["l" /* saveAlertsSubscriptions */];
  this.getAlertsSubscriptions = __WEBPACK_IMPORTED_MODULE_0__methods__["e" /* getAlertsSubscriptions */];
  this.deleteAlertsSubscriptions = __WEBPACK_IMPORTED_MODULE_0__methods__["b" /* deleteAlertsSubscriptions */];
  this.updateAlertsSubscriptions = __WEBPACK_IMPORTED_MODULE_0__methods__["m" /* updateAlertsSubscriptions */];
  this.manageAlerts = __WEBPACK_IMPORTED_MODULE_0__methods__["i" /* manageAlerts */];
  this.getGroupedAlerts = __WEBPACK_IMPORTED_MODULE_0__methods__["f" /* getGroupedAlerts */];
  this.updateUserAlert = __WEBPACK_IMPORTED_MODULE_0__methods__["n" /* updateUserAlert */];
  this.dataRequestAlertGroupHandler = __WEBPACK_IMPORTED_MODULE_0__methods__["a" /* dataRequestAlertGroupHandler */];
  this.multiDataRequestHandler = __WEBPACK_IMPORTED_MODULE_0__methods__["j" /* multiDataRequestHandler */];
  this.getAlertById = __WEBPACK_IMPORTED_MODULE_0__methods__["c" /* getAlertById */]; //  this.searchBatch = methods.searchBatch
  //  this.searchBatchHandler = methods.searchBatchHandler
};

/* harmony default export */ __webpack_exports__["a"] = (Inalerts);

/***/ }),
/* 124 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return init; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return handleInternalAlertsTask; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return saveAlerts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return getAlerts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return saveAlertsSubscriptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return getAlertsSubscriptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return deleteAlertsSubscriptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return updateAlertsSubscriptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return getAlertById; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return manageAlerts; });
/* unused harmony export deleteAlerts */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return updateUserAlert; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return getGroupedAlerts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return dataRequestAlertGroupHandler; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return multiDataRequestHandler; });
/* unused harmony export searchBatch */
/* unused harmony export searchBatchHandler */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_joi__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_joi___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_joi__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lib_esm_mysql_methods__ = __webpack_require__(5);
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }



var init = function init() {
  this.log('Inalerts has been initialised');
  this.listens({
    'handle-inalerts-task': this.handleInternalAlertsTask.bind(this)
  });
};
var handleInternalAlertsTask = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(data) {
    var self, pao, contains, isOBject, user;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            console.log(data);
            self = this;
            pao = self.pao;
            contains = pao.pa_contains;
            isOBject = pao.pa_isObject;
            user = data.payload.user;
            self.callback = data.callback; // let uid = user.ID

            console.log('THE DATA INSIDE Adash');
            console.log(user);
            console.log('THE PARSED DATA TEST');
            console.log(data);
            console.log(user);

            if (isOBject(user)) {
              _context.next = 14;
              break;
            }

            return _context.abrupt("return", self.callback({
              message: 'User has not been specified'
            }, null));

          case 14:
            if (user.action) {
              _context.next = 16;
              break;
            }

            return _context.abrupt("return", self.callback({
              message: 'Invalid request'
            }, null));

          case 16:
            if (contains(user, ['payload'])) {
              _context.next = 18;
              break;
            }

            return _context.abrupt("return", self.callback({
              message: 'missing required key'
            }, null));

          case 18:
            if (contains(user.payload, ['ID'])) {
              _context.next = 20;
              break;
            }

            return _context.abrupt("return", self.callback({
              message: 'missing required key'
            }, null));

          case 20:
            _context.t0 = user.action;
            _context.next = _context.t0 === 'getAlertCategories' ? 23 : _context.t0 === 'saveAlerts' ? 25 : _context.t0 === 'getAlerts' ? 27 : _context.t0 === 'saveAlertsSubscriptions' ? 29 : _context.t0 === 'getAlertsSubscriptions' ? 31 : _context.t0 === 'deleteAlertsSubscriptions' ? 33 : _context.t0 === 'updateAlertsSubscriptions' ? 35 : _context.t0 === 'getAlertById' ? 37 : _context.t0 === 'updateAlert' ? 39 : _context.t0 === 'deleteAlerts' ? 41 : 43;
            break;

          case 23:
            self.getGroupedAlerts(user.payload).then(function (alertCats) {
              self.callback(null, alertCats);
            })["catch"](function (e) {
              console.log('Reject error');
              console.log(e);
              self.callback(e, null);
            });
            return _context.abrupt("break", 44);

          case 25:
            self.deleteAccount(data).then(function (deleteStat) {
              return self.callback(null, deleteStat);
            })["catch"](function (e) {
              return self.callback(e, null);
            });
            return _context.abrupt("break", 44);

          case 27:
            self.getAlerts(user.payload).then(function (alerts) {
              return self.callback(null, alerts);
            })["catch"](function (e) {
              return self.callback(e, null);
            });
            return _context.abrupt("break", 44);

          case 29:
            self.saveAlertsSubscriptions(user.payload).then(function (saved) {
              var inserted = saved.inserted;
              var taken = saved.taken;
              var insertTaken = {};
              var alertsEmails = {};

              if (inserted.insertId > 0) {
                insertTaken.inserted = true;
              }

              if (taken && taken instanceof Array) {
                if (taken.length === 1) {
                  alertsEmails.mainEmail = taken[0];
                } else {
                  alertsEmails.mainEmail = taken[0];
                  alertsEmails.altEmail = taken[1];
                }

                insertTaken.taken = alertsEmails;
              }

              self.callback(null, insertTaken);
            })["catch"](function (e) {
              return self.callback(e, null);
            });
            return _context.abrupt("break", 44);

          case 31:
            self.getAlertsSubscriptions(user.payload).then(function (alerts) {
              var alertsEmails = {};

              if (alerts.length === 1) {
                alertsEmails.mainEmail = alerts[0];
              } else {
                alertsEmails.mainEmail = alerts[0];
                alertsEmails.altEmail = alerts[1];
              }

              self.callback(null, alertsEmails);
            })["catch"](function (e) {
              return self.callback(e, null);
            });
            return _context.abrupt("break", 44);

          case 33:
            self.deleteAlertsSubscriptions(user.payload).then(function (deleted) {
              // deleted.affectedRows && deleted.affectedRows > 0 
              // 	? self.callback(null,{deleteStatus: true})
              // 	: self.callback(null,{deleteStatus: false})
              if (!deleted.taken) {
                deleted.deleted ? self.callback(null, {
                  taskSuccessful: true
                }) : self.callback(null, {
                  taskSuccessful: false
                });
              } else {
                if (!deleted.deleted) {
                  self.callback(null, {
                    taken: deleted.taken
                  });
                } else {
                  self.callback(null, {
                    taskSuccessful: true,
                    taken: deleted.taken
                  });
                }
              }
            })["catch"](function (e) {
              return self.callback(e, null);
            });
            return _context.abrupt("break", 44);

          case 35:
            self.updateAlertsSubscriptions(user.payload).then(function (alerts) {
              console.log('THE ALERTS IN UPDATE');
              console.log(alerts);
              var alertsEmails = {};

              if (alerts.taken) {
                if (alerts.taken.length === 1) {
                  alertsEmails.mainEmail = alerts.taken[0];
                } else {
                  alertsEmails.mainEmail = alerts.taken[0];
                  alertsEmails.altEmail = alerts.taken[1];
                }

                alerts.updated ? self.callback(null, {
                  taskSuccessful: true,
                  taken: alertsEmails
                }) : self.callback(null, {
                  taskSuccessful: false,
                  taken: alertsEmails
                });
              } else {
                alerts.updated ? self.callback(null, {
                  taskSuccessful: true,
                  taken: alertsEmails
                }) : self.callback(null, {
                  taskSuccessful: false,
                  taken: alertsEmails
                });
              }
            })["catch"](function (e) {
              return self.callback(e, null);
            });
            return _context.abrupt("break", 44);

          case 37:
            self.getAlertById(user.payload).then(function (alert) {
              return self.callback(null, alert);
            })["catch"](function (e) {
              return self.callback(e, null);
            });
            return _context.abrupt("break", 44);

          case 39:
            self.updateUserAlert(user.payload).then(function (updated) {
              updated.changedRows && updated.changedRows > 0 ? self.callback(null, {
                updateStatus: true,
                frequency: user.payload.update.frequency
              }) : self.callback(null, {
                updateStatus: false
              });
            })["catch"](function (e) {
              return self.callback(e, null);
            });
            return _context.abrupt("break", 44);

          case 41:
            self.deleteAlerts(data).then(function (deleted) {
              deleted.affectedRows && deleted.affectedRows > 0 ? self.callback(null, {
                deleteStatus: true
              }) : self.callback(null, {
                deleteStatus: false
              });
            })["catch"](function (e) {
              return self.callback(e, null);
            });
            return _context.abrupt("break", 44);

          case 43:
            self.callback(new Error('Unknown data request'), null);

          case 44:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function handleInternalAlertsTask(_x) {
    return _ref.apply(this, arguments);
  };
}();
var saveAlerts = function saveAlerts(data) {
  var _this = this;

  var self = this;
  var pao = self.pao;
  return new Promise(function (resolve, reject) {
    if (!data.profile) return reject(new Error('Invalid Request'));
    if (!data.profile.userId) return reject(new Error('Invalid'));
    var query = {
      returnFields: ['first_name', 'last_name', 'profile', 'email'],
      tables: ['jo_user', 'jo_alerts'],
      joins: 2,
      joinPoints: ['jo_user.id EQUALS jo_alerst_subscription.u_id'],
      conditions: ["id EQUALS ".concat(profile.userID)],
      type: 'inner'
    };
    self.query('mysql.SEARCH', query, self.dataRequestHandler.bind(_this, resolve, reject));
  });
};
var getAlerts = function getAlerts(pay) {
  var _this2 = this;

  var self = this;
  var pao = self.pao;
  var uid = pay.ID;
  var catID = pay.catID;
  return new Promise(function (resolve, reject) {
    var conditions = catID > 0 ? ["u_id EQUALS ".concat(uid), "AND alert_category_id EQUALS ".concat(catID)] : ["u_id EQUALS ".concat(uid)];
    var queries = {
      returnFields: ['frequency'],
      opiks: ['field.id.as[alertID]', 'field.job_keyword.as[jobKeyword]', 'field.date_created.as[alertDate]'],
      conditions: conditions,
      take: 5
    };
    self.query('mysql.jo_job_alert.find', queries, self.multiDataRequestHandler.bind(_this2, resolve, reject));
  });
};
var saveAlertsSubscriptions = function saveAlertsSubscriptions(pay) {
  var _this3 = this;

  var self = this;
  var pao = self.pao;
  return new Promise(function (resolve, reject) {
    var uid = pay.ID;
    var save = pay.save;
    var email = save.email;
    var query = {
      insert: {
        table: 'jo_job_alert_subscriber',
        fields: ['email', 'u_id', 'start_date'],
        values: ["".concat(email), "".concat(uid), new Date()]
      },
      take: {
        tables: ['jo_job_alert_subscriber'],
        opiks: ['field.id.as[alertMailID]', 'field.email.as[alertEmail]'],
        conditions: ["u_id EQUALS ".concat(uid)],
        take: 5
      }
    };
    self.query('mysql.INSERTANDTAKE', query, self.multiDataRequestHandler.bind(_this3, resolve, reject));
  });
};
var getAlertsSubscriptions = function getAlertsSubscriptions(pay) {
  var _this4 = this;

  var self = this;
  var pao = self.pao;
  var uid = pay.ID;
  return new Promise(function (resolve, reject) {
    var queries = {
      opiks: ['field.id.as[alertMailID]', 'field.email.as[alertEmail]'],
      conditions: ["u_id EQUALS ".concat(uid)],
      take: 5
    };
    self.query('mysql.jo_job_alert_subscriber.find', queries, self.multiDataRequestHandler.bind(_this4, resolve, reject));
  });
};
var deleteAlertsSubscriptions = function deleteAlertsSubscriptions(pay) {
  var _this5 = this;

  return new Promise(function (resolve, reject) {
    var self = _this5;
    var pao = self.pao;
    var uid = pay.ID;
    var alertMailID = pay["delete"].alertMailID;
    var conditions = alertMailID === 0 ? ["jo_job_alert_subscriber.u_id EQUALS ".concat(uid, " ")] : ["jo_job_alert_subscriber.u_id EQUALS ".concat(uid, " "), "AND jo_job_alert_subscriber.id EQUALS ".concat(alertMailID)];

    if (alertMailID === 0) {
      var query = {
        tables: ['jo_job_alert_subscriber', 'jo_job_alert_category', 'jo_job_alert'],
        joins: 2,
        joinPoints: ['jo_job_alert_subscriber.id EQUALS jo_job_alert_category.alert_mail_id', 'jo_job_alert_category.alert_mail_id EQUALS jo_job_alert.alert_mail_id'],
        conditions: conditions
      };
      self.query('mysql.DELETEMULTIPLE', query, self.multiDataRequestHandler.bind(_this5, resolve, reject));
    } else {
      var _query = {
        remove: {
          tables: ['jo_job_alert_subscriber', 'jo_job_alert_category', 'jo_job_alert'],
          joins: 3,
          joinPoints: ['jo_job_alert_subscriber.id EQUALS jo_job_alert_category.alert_mail_id', 'jo_job_alert_category.alert_mail_id EQUALS jo_job_alert.alert_mail_id'],
          conditions: conditions
        },
        take: {
          tables: ['jo_job_alert_subscriber'],
          opiks: ['field.id.as[alertMailID]', 'field.email.as[alertEmail]'],
          conditions: ["jo_job_alert_subscriber.u_id EQUALS ".concat(uid)],
          take: 5
        }
      };
      self.query('mysql.DELETEANDTAKE', _query, self.multiDataRequestHandler.bind(_this5, resolve, reject));
    }
  });
};
var updateAlertsSubscriptions = function updateAlertsSubscriptions(pay) {
  var _this6 = this;

  var self = this;
  var pao = self.pao;
  console.log('The update');
  console.log(pay);
  return new Promise(function (resolve, reject) {
    //  if(!pay.update) return reject(new Error('Update data missing'))
    var uid = pay.ID;
    var alertMailID = pay.update.alertMailID;
    var updateMail = pay.update.email; //  let alertID = pay.alertID 
    //  let update = pay.update 
    //  let frequency = update.frequency
    // let queries = 
    // 	{conditions: [`u_id EQUALS ${uid} `,`AND id EQUALS ${alertID}`],
    // 	 set: [{frequency:frequency}]
    // 	}

    var queries = {
      tables: ['jo_job_alert_subscriber'],
      conditions: ["u_id EQUALS ".concat(uid, " "), "AND id EQUALS ".concat(alertMailID)],
      opiks: ['field.id.as[alertMailID]', 'field.email.as[alertEmail]'],
      set: [{
        email: updateMail
      }],
      takeFrom: {
        tables: ['jo_job_alert_subscriber'],
        conditions: ["u_id EQUALS ".concat(uid)]
      }
    };
    self.query('mysql.UPDATEANDTAKE', queries, self.multiDataRequestHandler.bind(_this6, resolve, reject));
  });
};
var getAlertById = function getAlertById(pay) {
  var _this7 = this;

  var self = this;
  var pao = self.pao;
  var uid = pay.ID;
  var alertID = pay.alertID;
  return new Promise(function (resolve, reject) {
    var queries = {
      returnFields: ['frequency'],
      opiks: ['field.id.as[alertID]', 'field.job_keyword.as[jobKeyword]', 'field.date_created.as[alertDate]'],
      conditions: ["u_id EQUALS ".concat(uid, " "), "AND id EQUALS ".concat(alertID)]
    };
    self.query('mysql.jo_job_alert.find', queries, self.multiDataRequestHandler.bind(_this7, resolve, reject));
  });
};
var manageAlerts = function manageAlerts(data) {
  var self = this;
  var pao = self.pao;
  self.query('mysql.jo_alerts.removeOne', data, self.dealWithDataStorageResponse(response));
};
var deleteAlerts = function deleteAlerts(pay) {
  var _this8 = this;

  return new Promise(function (resolve, reject) {
    var self = _this8;
    var pao = self.pao;
    var uid = pay.ID;
    var alertID = pay.alertID;
    var queries = {
      conditions: ["u_id EQUALS ".concat(uid, " "), "AND id EQUALS ".concat(alertID)]
    };
    self.query('mysql.jo_job_alert.remove', queries, self.multiDataRequestHandler.bind(_this8, resolve, reject));
  });
};
var updateUserAlert = function updateUserAlert(pay) {
  var _this9 = this;

  var self = this;
  var pao = self.pao;
  console.log('The update');
  console.log(pay);
  return new Promise(function (resolve, reject) {
    if (!pay.update) return reject(new Error('Update data missing'));
    var uid = pay.ID;
    var alertID = pay.alertID;
    var update = pay.update;
    var frequency = update.frequency;
    var queries = {
      conditions: ["u_id EQUALS ".concat(uid, " "), "AND id EQUALS ".concat(alertID)],
      set: [{
        frequency: frequency
      }]
    };
    self.query('mysql.jo_job_alert.updateOne', queries, self.multiDataRequestHandler.bind(_this9, resolve, reject));
  });
};
var getGroupedAlerts = function getGroupedAlerts(pay) {
  var _this10 = this;

  var self = this;
  var uid = pay.ID;
  return new Promise(function (resolve, reject) {
    var queries = {
      tables: ['jo_job_alert_category', 'jo_category'],
      joins: 2,
      opiks: ['field.category_id.as[categoryID]', 'field.alert_category_count.as[jobAlertCount]', 'fuxin.substring_index.options[category_name,"/",1].as[name]'],
      joinPoints: ['jo_job_alert_category.category_id EQUALS jo_category.id'],
      conditions: ["u_id EQUALS ".concat(uid)],
      type: 'inner'
    };
    self.query('mysql.SEARCH', queries, self.dataRequestAlertGroupHandler.bind(_this10, resolve, reject)); // 		SELECT category_id AS categoryID,alert_category_count AS jobAlertCount,category_name AS name
    // FROM jo_job_alert_category 
    // INNER JOIN jo_category
    // 	ON jo_job_alert_category.category_id = jo_category.id 
    // WHERE u_id=1
  });
};
var dataRequestAlertGroupHandler = function dataRequestAlertGroupHandler() {
  var resolve = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
  var reject = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  var e = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
  var result = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
  var self = this;
  var pao = self.pao;
  console.log('THE TYPE OF E IN DATAREQUEST HANDLER');
  if (e) reject(new Error('An error has occured Inside MYSQL'));
  resolve(result);
};
var multiDataRequestHandler = function multiDataRequestHandler() {
  var resolve = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
  var reject = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  var e = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
  var result = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
  var self = this;
  var pao = self.pao;
  console.log('THE TYPE OF E IN DATAREQUEST HANDLER');
  console.log(e);
  if (e) reject(new Error('An error has occured Inside MYSQL'));
  resolve(result);
};
var searchBatch = function searchBatch(key) {
  return [{
    returnFields: ['all'],
    tables: ['jo_job', 'jo_recruiter', 'jo_company'],
    joins: 3,
    joinPoints: ['jo_job.u_id EQUALS jo_recruiter.id', 'jo_company.id EQUALS jo_recruiter.company_id'],
    conditions: ["MATCH [job_title] AGAINST [".concat(key, "] NATURAL"), "OR MATCH [description] AGAINST [php] NATURAL"],
    take: 10,
    soundex: true,
    type: 'inner'
  }, {
    returnFields: ['state_name', 'country_id'],
    tables: ['jo_states'],
    joinPoints: ['jo_states.id EQUALS jo_country.u_id'],
    conditions: ["country_id EQUALS 202"]
  }, {
    returnFields: ['all'],
    tables: ['jo_category']
  }];
};
var searchBatchHandler = function searchBatchHandler() {
  var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
  var batchResults = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  var self = this;
  var pao = self.pao;
  console.log('THE BATCH RESULTS');
  console.log(batchResults);
  self.callback(null, {
    batch: batchResults
  });
};

/***/ }),
/* 125 */
/***/ (function(module, exports) {

module.exports = require("joi");

/***/ }),
/* 126 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__bookmark__ = __webpack_require__(127);

/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0__bookmark__["a" /* default */]);

/***/ }),
/* 127 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__methods__ = __webpack_require__(128);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



var Bookmark = function Bookmark(pao) {
  _classCallCheck(this, Bookmark);

  this.pao = pao;
  this.init = __WEBPACK_IMPORTED_MODULE_0__methods__["e" /* init */];
  this.handleBookmarkTask = __WEBPACK_IMPORTED_MODULE_0__methods__["d" /* handleBookmarkTask */];
  this.bookmark = __WEBPACK_IMPORTED_MODULE_0__methods__["b" /* bookmark */];
  this.getSavedBookmarks = __WEBPACK_IMPORTED_MODULE_0__methods__["c" /* getSavedBookmarks */];
  this.deleteBookmark = __WEBPACK_IMPORTED_MODULE_0__methods__["DeleteBookmark"];
  this.multiDataRequestHandler = __WEBPACK_IMPORTED_MODULE_0__methods__["f" /* multiDataRequestHandler */];
};

/* harmony default export */ __webpack_exports__["a"] = (Bookmark);

/***/ }),
/* 128 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return init; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return handleBookmarkTask; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return bookmark; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return getSavedBookmarks; });
/* unused harmony export deleteBookmark */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return multiDataRequestHandler; });
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var init = function init() {
  this.log('Bookmark has been initialised');
  this.listens({
    'handle-bookmark-task': this.handleBookmarkTask.bind(this)
  });
};
var handleBookmarkTask = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(data) {
    var self, pao, contains, isOBject, user;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            self = this;
            pao = self.pao;
            contains = pao.pa_contains;
            isOBject = pao.pa_isObject;
            user = data.payload.user;
            self.callback = data.callback;
            self.log(data); // let uid = user.ID

            console.log('THE DATA INSIDE Adash');
            console.log(user);
            console.log('THE PARSED DATA TEST');
            console.log(data);
            console.log(user);

            if (isOBject(user)) {
              _context.next = 14;
              break;
            }

            return _context.abrupt("return", self.callback({
              message: 'User has not been specified'
            }, null));

          case 14:
            if (user.action) {
              _context.next = 16;
              break;
            }

            return _context.abrupt("return", self.callback({
              message: 'Invalid request'
            }, null));

          case 16:
            if (contains(user, ['payload'])) {
              _context.next = 18;
              break;
            }

            return _context.abrupt("return", self.callback({
              message: 'missing required key'
            }, null));

          case 18:
            if (contains(user.payload, ['ID'])) {
              _context.next = 20;
              break;
            }

            return _context.abrupt("return", self.callback({
              message: 'missing required key'
            }, null));

          case 20:
            _context.t0 = user.action;
            _context.next = _context.t0 === 'getBookmarks' ? 23 : _context.t0 === 'bookmarkItem' ? 25 : _context.t0 === 'deleteBookmark' ? 27 : 29;
            break;

          case 23:
            self.getSavedBookmarks(user.payload).then(function (bookmarks) {
              self.callback(null, bookmarks);
            })["catch"](function (e) {
              console.log('Reject error');
              console.log(e);
              self.callback(e, null);
            });
            return _context.abrupt("break", 30);

          case 25:
            self.bookmark(user.payload).then(function (bookmarkStatus) {
              if (bookmarkStatus.affectedRows >= 1) return self.callback(null, {
                actionStatus: true
              });
              self.callback(null, {
                actionStatus: false
              });
            })["catch"](function (e) {
              return self.callback(e, null);
            });
            return _context.abrupt("break", 30);

          case 27:
            self.deleteBookmark(user.payload).then(function (deleted) {
              return self.callback(null, deleted);
            })["catch"](function (e) {
              return self.callback(e, null);
            });
            return _context.abrupt("break", 30);

          case 29:
            self.callback(new Error('Unknown data request'), null);

          case 30:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function handleBookmarkTask(_x) {
    return _ref.apply(this, arguments);
  };
}();
var bookmark = function bookmark(pay) {
  var _this = this;

  return new Promise(function (resolve, reject) {
    var self = _this;
    var pao = self.pao;
    var uid = pay.ID;
    var bookmark = pay.bookmark;
    var _bookmark$id = bookmark.id,
        id = _bookmark$id === void 0 ? 0 : _bookmark$id,
        _bookmark$url = bookmark.url,
        url = _bookmark$url === void 0 ? 'search' : _bookmark$url,
        jobTitle = bookmark.jobTitle,
        jobSalary = bookmark.jobSalary,
        currency = bookmark.currency,
        _bookmark$employer = bookmark.employer,
        employer = _bookmark$employer === void 0 ? 'unspecified' : _bookmark$employer,
        _bookmark$logo = bookmark.logo,
        logo = _bookmark$logo === void 0 ? null : _bookmark$logo,
        _bookmark$jobType = bookmark.jobType,
        jobType = _bookmark$jobType === void 0 ? 'N/A' : _bookmark$jobType,
        date = bookmark.date; // let values  = [`${uid}`,`${id}`,`${jobTitle}`,`${jobSalary}`,`${currency}`,`${employer}`,`${logo}`,`${jobType}`,new Date()] 

    var query = {
      fields: ['u_id', 'job_id', 'job_url', 'job_title', 'salary', 'salary_currency', 'company_name', 'logo_url', 'job_type', 'post_date', 'date_bookmarked'],
      values: [uid, id, url, jobTitle, jobSalary, currency, employer, logo, jobType, date, new Date()]
    };
    self.query('mysql.jo_job_bookmark.insert', query, self.multiDataRequestHandler.bind(_this, resolve, reject));
  });
};
var getSavedBookmarks = function getSavedBookmarks(pay) {
  var _this2 = this;

  return new Promise(function (resolve, reject) {
    var self = _this2;
    var pao = self.pao;
    var uid = pay.ID;
    var queries = {
      returnFields: ['id'],
      tables: ['jo_job_bookmark'],
      conditions: ["u_id EQUALS ".concat(uid)],
      opiks: ['field.u_id.as[userID]', 'field.job_id.as[jobID]', 'field.job_title.as[jobTitle]', 'field.logo_url.as[logo]', 'field.salary.as[jobSalary]', 'field.company_name.as[employer]', 'field.salary_currency.as[currency]', 'field.job_type.as[type]', 'field.post_date.as[postDate]', 'field.date_bookmarked.as[dateBookmarked]'],
      sort: 'order[jobTitle].asc'
    };
    self.query('mysql.SEARCH', queries, self.multiDataRequestHandler.bind(_this2, resolve, reject));
  });
};
var deleteBookmark = function deleteBookmark(pay) {
  var _this3 = this;

  return new Promise(function (resolve, reject) {
    var self = _this3;
    var pao = self.pao;
    var uid = pay.ID;
    var alertID = pay.alertID;
    var queries = {
      conditions: ["u_id EQUALS ".concat(uid, " "), "AND id EQUALS ".concat(alertID)]
    };
    self.query('mysql.jo_job_bookmark.remove', queries, self.multiDataRequestHandler.bind(_this3, resolve, reject));
  });
};
var multiDataRequestHandler = function multiDataRequestHandler() {
  var resolve = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
  var reject = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  var e = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
  var result = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
  var self = this;
  var pao = self.pao;
  console.log('THE TYPE OF E IN DATAREQUEST HANDLER');
  console.log(e);
  if (e) reject(new Error('An error has occured Inside MYSQL'));
  resolve(result);
};

/***/ }),
/* 129 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__history__ = __webpack_require__(130);

/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0__history__["a" /* default */]);

/***/ }),
/* 130 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__methods__ = __webpack_require__(131);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



var History = function History(pao) {
  _classCallCheck(this, History);

  this.pao = pao;
  this.init = __WEBPACK_IMPORTED_MODULE_0__methods__["e" /* init */];
  this.handleHistoryTask = __WEBPACK_IMPORTED_MODULE_0__methods__["c" /* handleHistoryTask */];
  this.history = __WEBPACK_IMPORTED_MODULE_0__methods__["history"];
  this.saveHistory = __WEBPACK_IMPORTED_MODULE_0__methods__["g" /* saveHistory */];
  this.getSavedHistory = __WEBPACK_IMPORTED_MODULE_0__methods__["b" /* getSavedHistory */];
  this.deleteHistory = __WEBPACK_IMPORTED_MODULE_0__methods__["DeleteHistory"];
  this.multiDataRequestHandler = __WEBPACK_IMPORTED_MODULE_0__methods__["f" /* multiDataRequestHandler */];
};

/* harmony default export */ __webpack_exports__["a"] = (History);

/***/ }),
/* 131 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return init; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return handleHistoryTask; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return saveHistory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getSavedHistory; });
/* unused harmony export deleteHistory */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return multiDataRequestHandler; });
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var init = function init() {
  this.log('History has been initialised');
  this.listens({
    'handle-history-task': this.handleHistoryTask.bind(this)
  });
};
var handleHistoryTask = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(data) {
    var self, pao, contains, isOBject, user;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            self = this;
            pao = self.pao;
            contains = pao.pa_contains;
            isOBject = pao.pa_isObject;
            user = data.payload.user;
            self.callback = data.callback;
            self.log(data); // let uid = user.ID

            console.log('THE DATA INSIDE Adash');
            console.log(user);
            console.log('THE PARSED DATA TEST');
            console.log(data);
            console.log(user);

            if (isOBject(user)) {
              _context.next = 14;
              break;
            }

            return _context.abrupt("return", self.callback({
              message: 'User has not been specified'
            }, null));

          case 14:
            if (user.action) {
              _context.next = 16;
              break;
            }

            return _context.abrupt("return", self.callback({
              message: 'Invalid request'
            }, null));

          case 16:
            if (contains(user, ['payload'])) {
              _context.next = 18;
              break;
            }

            return _context.abrupt("return", self.callback({
              message: 'missing required key'
            }, null));

          case 18:
            if (contains(user.payload, ['ID'])) {
              _context.next = 20;
              break;
            }

            return _context.abrupt("return", self.callback({
              message: 'missing required key'
            }, null));

          case 20:
            _context.t0 = user.action;
            _context.next = _context.t0 === 'getHistory' ? 23 : _context.t0 === 'saveHistory' ? 25 : _context.t0 === 'deleteHistory' ? 27 : 29;
            break;

          case 23:
            self.getSavedHistory(user.payload).then(function (history) {
              self.callback(null, history);
            })["catch"](function (e) {
              console.log('Reject error');
              console.log(e);
              self.callback(e, null);
            });
            return _context.abrupt("break", 30);

          case 25:
            self.saveHistory(user.payload).then(function (saveStatus) {
              if (saveStatus.affectedRows >= 1) return self.callback(null, {
                actionStatus: true
              });
              self.callback(null, {
                actionStatus: false
              });
            })["catch"](function (e) {
              return self.callback(e, null);
            });
            return _context.abrupt("break", 30);

          case 27:
            self.deleteHistory(user.payload).then(function (deleted) {
              return self.callback(null, deleted);
            })["catch"](function (e) {
              return self.callback(e, null);
            });
            return _context.abrupt("break", 30);

          case 29:
            self.callback(new Error('Unknown data request'), null);

          case 30:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function handleHistoryTask(_x) {
    return _ref.apply(this, arguments);
  };
}();
var saveHistory = function saveHistory(pay) {
  var _this = this;

  return new Promise(function (resolve, reject) {
    var self = _this;
    var pao = self.pao;
    var uid = pay.ID;
    var history = pay.history;
    var keyword = history.keyword,
        location = history.location;
    self.log('THE SEARCHED TERM LOCATION');
    self.log(location);
    var query = {
      fields: ['u_id', 'keyword', 'date_searched'],
      values: [uid, keyword, new Date()]
    };
    self.query('mysql.jo_search_history.insert', query, self.multiDataRequestHandler.bind(_this, resolve, reject));
  });
};
var getSavedHistory = function getSavedHistory(pay) {
  var _this2 = this;

  return new Promise(function (resolve, reject) {
    var self = _this2;
    var pao = self.pao;
    var uid = pay.ID;
    var queries = {
      tables: ['jo_search_history'],
      conditions: ["u_id EQUALS ".concat(uid)],
      opiks: ['field.u_id.as[userID]', 'field.keyword.as[searchTerm]', 'field.date_searched.as[dateSearched]']
    };
    self.query('mysql.SEARCH', queries, self.multiDataRequestHandler.bind(_this2, resolve, reject));
  });
};
var deleteHistory = function deleteHistory(pay) {
  var _this3 = this;

  return new Promise(function (resolve, reject) {
    var self = _this3;
    var pao = self.pao;
    var uid = pay.ID;
    var alertID = pay.alertID;
    var queries = {
      conditions: ["u_id EQUALS ".concat(uid, " "), "AND id EQUALS ".concat(alertID)]
    };
    self.query('mysql.jo_job_history.remove', queries, self.multiDataRequestHandler.bind(_this3, resolve, reject));
  });
};
var multiDataRequestHandler = function multiDataRequestHandler() {
  var resolve = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
  var reject = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  var e = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
  var result = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
  var self = this;
  var pao = self.pao;
  console.log('THE TYPE OF E IN DATAREQUEST HANDLER');
  console.log(e);
  if (e) reject(new Error('An error has occured Inside MYSQL'));
  resolve(result);
};

/***/ }),
/* 132 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__downloadr__ = __webpack_require__(133);

/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0__downloadr__["a" /* default */]);

/***/ }),
/* 133 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__methods__ = __webpack_require__(134);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

 // const wrStream = require('streamifier')
// const rStream = require('concat-stream')

var Downloadr = function Downloadr(pao) {
  _classCallCheck(this, Downloadr);

  this.pao = pao; // this.multer = multer
  // this.supportedStorageTypes = ['local','awsS3','cloudinary','digitalOcean']
  // this.supportedFileTypes = {image: ['png,gif,jpeg,jpg'],text: ['pdf','docx','txt'],db:['sql','csv']}

  this.init = __WEBPACK_IMPORTED_MODULE_0__methods__["b" /* init */];
  this.downloadrTaskHandler = __WEBPACK_IMPORTED_MODULE_0__methods__["a" /* downloadrTaskHandler */];
  this.receiveFile = __WEBPACK_IMPORTED_MODULE_0__methods__["c" /* receiveFile */];
};

/* harmony default export */ __webpack_exports__["a"] = (Downloadr);

/***/ }),
/* 134 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return init; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return downloadrTaskHandler; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return receiveFile; });
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var init = function init() {
  this.log('FileMan has been initialised');
  this.listens({
    'handle-downloadr-task': this.downloadrTaskHandler.bind(this) // 'handle-remove-file': this.handleRemoveFile.bind(this)

  });
};
var downloadrTaskHandler = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(data) {
    var self, user;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            self = this;
            user = data.payload.user;
            self.callback = data.callback; // console.log('the download data')
            // console.log(data)

            self.emit({
              type: 'get-file',
              data: {
                fileName: user.fileName,
                filePath: 'uploads',
                getType: 'stream',
                callback: self.receiveFile.bind(self)
              }
            }); // data.callback(null,{downloadr: 'successfully created'})
            // self.beginFileSave(data)
            // .then((response)=>{
            // 	self.callback(null,response)
            // })
            // .catch((e)=>{
            // 	self.callback(e,null)
            // })

          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function downloadrTaskHandler(_x) {
    return _ref.apply(this, arguments);
  };
}();
var receiveFile = function receiveFile(file) {
  var self = this; //  console.log('T=RECEIVE FILE DATA')
  //  console.log(file)

  self.callback(null, {
    rStream: file.readStream,
    ext: file.ext
  }, 'stream');
};

/***/ }),
/* 135 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__fileupload__ = __webpack_require__(136);

/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0__fileupload__["a" /* default */]);

/***/ }),
/* 136 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__methods__ = __webpack_require__(137);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



var multiPartFormParser = __webpack_require__(138); // const wrStream = require('streamifier')
// const rStream = require('concat-stream')


var FileUpload = function FileUpload(pao) {
  _classCallCheck(this, FileUpload);

  this.pao = pao;
  this.multiFormParser = multiPartFormParser; // this.IncomingForm = this.multiFormParser.IncomingForm
  // this.supportedStorageTypes = ['local','awsS3','cloudinary','digitalOcean']
  // this.supportedFileTypes = {image: ['png,gif,jpeg,jpg'],text: ['pdf','docx','txt'],db:['sql','csv']}

  this.init = __WEBPACK_IMPORTED_MODULE_0__methods__["b" /* init */];
  this.handleAddUploadMiddleware = __WEBPACK_IMPORTED_MODULE_0__methods__["a" /* handleAddUploadMiddleware */];
  this.parseFile = __WEBPACK_IMPORTED_MODULE_0__methods__["c" /* parseFile */];
};

/* harmony default export */ __webpack_exports__["a"] = (FileUpload);

/***/ }),
/* 137 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__dirname) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return init; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return handleAddUploadMiddleware; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return parseFile; });
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var init = function init() {
  this.log('Fileupload has been initialised');
  this.listens({
    'add-upload-middleware': this.handleAddUploadMiddleware.bind(this)
  });
};
var handleAddUploadMiddleware = function handleAddUploadMiddleware(data) {
  console.log('HandleAddUploadMiddleware has occured');
  console.log(data); // this.html = data.html

  var self = this;
  data.filterCallback(data.type, self.parseFile.bind(self));
};
var parseFile = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res, next) {
    var self, pao, forOf, form, contentType;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            self = this;
            pao = self.pao;
            forOf = pao.pa_forOf; // const form = new self.IncomingForm()

            form = self.multiFormParser({
              keepExtensions: true,
              maxFileSize: 1 * 1024 * 1024,
              uploadDir: __dirname
            });
            _context.next = 6;
            return self.log("I'm the file upload middleware module that's gonna read the file on the req");

          case 6:
            contentType = req.headers['content-type'];
            _context.next = 9;
            return self.log(contentType);

          case 9:
            _context.next = 11;
            return self.log(req.headers);

          case 11:
            if (!(contentType.indexOf('multipart/form-data') === -1)) {
              _context.next = 13;
              break;
            }

            return _context.abrupt("return", next());

          case 13:
            // form.once('error',(e)=>{
            //   console.log('THE PARSE ERROR HAS OCCURED')
            //   console.log(e)
            // })
            // form.on('file', (field, file) => {
            //     if(req.uploads && req.uploads instanceof Array){
            //         req.uploads.push({[field]: file})
            //     }else{
            //         req.uploads = new Array({[field]: file})
            //     }
            //     // Do something with the file
            //     // e.g. save it to the database
            //     // you can access it using file.path
            //   })
            // form.on('end', () => {
            //     console.log('THE UPLOADED FILES PARSING IS COMPLETE, WE THEN FORWARD THE REQUEST TO THE NEXT MIDDLEWARE')
            //     next()
            // })
            form.parse(req, function (err, fields, files) {
              console.log('THE PARSE METHOD RUNS');
              console.log(req.headers);

              if (err) {
                console.log('The fields error');
                console.log(err);
                return self.emit({
                  type: 'write-server-request-response',
                  data: {
                    data: {
                      error: true,
                      message: 'File parse error'
                    },
                    res: res
                  }
                });
              } else {
                console.log('THE UPLOADED FILES PARSING IS COMPLETE, WE THEN FORWARD THE REQUEST TO THE NEXT MIDDLEWARE');
                console.log(fields);
                console.log(Object.keys(files).length);

                if (fields === false && files === false) {
                  return self.emit({
                    type: 'write-server-request-response',
                    data: {
                      data: {
                        error: true,
                        message: 'No fields have been provided'
                      },
                      res: res
                    }
                  });
                } else {
                  if (files) {
                    console.log('THE files'); // console.log(files)

                    var uploads = forOf(files, function (key, value) {
                      console.log('THE forOf methods is running'); // console.log(file)
                      // console.log(key)
                      // console.log(value)

                      return {
                        p: key,
                        v: {
                          path: value.path,
                          name: value.name
                        }
                      };
                    }, false);
                    console.log('THE UPLOADS');
                    console.log(uploads);
                    req.uploads = {
                      files: uploads,
                      fields: fields
                    }; // console.log('THE FILES')
                    // console.log(req.uploads)

                    next();
                  }
                }
              }
            });

          case 14:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function parseFile(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, "/"))

/***/ }),
/* 138 */
/***/ (function(module, exports) {

module.exports = require("formidable");

/***/ }),
/* 139 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__upload__ = __webpack_require__(140);

/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0__upload__["a" /* default */]);

/***/ }),
/* 140 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__methods__ = __webpack_require__(141);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



var Upload = function Upload(pao) {
  _classCallCheck(this, Upload);

  this.pao = pao;
  this.init = __WEBPACK_IMPORTED_MODULE_0__methods__["f" /* init */];
  this.handleUploadTask = __WEBPACK_IMPORTED_MODULE_0__methods__["e" /* handleUploadTask */];
  this.getUploads = __WEBPACK_IMPORTED_MODULE_0__methods__["b" /* getUploads */];
  this.handleFileSave = __WEBPACK_IMPORTED_MODULE_0__methods__["c" /* handleFileSave */];
  this.handleImageManipulation = __WEBPACK_IMPORTED_MODULE_0__methods__["d" /* handleImageManipulation */];
  this.saveFileUrlToDb = __WEBPACK_IMPORTED_MODULE_0__methods__["h" /* saveFileUrlToDb */];
  this.dataRequestHandler = __WEBPACK_IMPORTED_MODULE_0__methods__["a" /* dataRequestHandler */];
  this.modifyFile = __WEBPACK_IMPORTED_MODULE_0__methods__["g" /* modifyFile */]; //  this.getJFP = methods.getJFP
  //  this.getNativeJobs = methods.getNativeJobs
  //  this.searchBatch = methods.searchBatch
  //  this.searchBatchHandler = methods.searchBatchHandler
};

/* harmony default export */ __webpack_exports__["a"] = (Upload);

/***/ }),
/* 141 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return init; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return handleUploadTask; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return modifyFile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getUploads; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return handleFileSave; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return saveFileUrlToDb; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return dataRequestHandler; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return handleImageManipulation; });
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var init = function init() {
  this.log('Upload has been initialised');
  this.listens({
    'handle-upload-task': this.handleUploadTask.bind(this)
  });
};
var handleUploadTask = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(data) {
    var self, user, userID, file;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            self = this;
            self.callback = data.callback;
            user = data.payload.user;
            userID = user.uploads.fields.ID;
            file = user.uploads.files.far.path;
            _context.next = 7;
            return self.log('THE USER DATA UPLOAD');

          case 7:
            _context.next = 9;
            return self.log(user);

          case 9:
            self.modifyFile(file, 'resize-image').then(function (resized) {
              self.getUploads(user, userID, resized).then(function (uploaded) {
                self.saveFileUrlToDb(uploaded.url, userID).then(function (saved) {
                  self.callback(null, {
                    updated: saved
                  });
                })["catch"](function (e) {
                  self.callback(e);
                }); // self.callback(null,uploaded)
              })["catch"](function (e) {
                self.callback(e, null);
              });
            })["catch"](function (e) {});

          case 10:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function handleUploadTask(_x) {
    return _ref.apply(this, arguments);
  };
}();
var modifyFile = function modifyFile(file, event) {
  var _this = this;

  console.log('ABOUT TO SEND THE FILE TO IMAGEMAN');
  var self = this;
  return new Promise(function (resolve, reject) {
    var fileOptions = {
      dimensions: {
        x: 250,
        y: 250
      },
      image: file
    };
    console.log(file);
    self.emit({
      type: event,
      data: {
        image: fileOptions,
        callback: self.handleImageManipulation.bind(_this, resolve, reject)
      }
    });
  }); // console.log('CHECK IF ASYNC FROM ANOTHER MODULE EXECUTES ACCORDINGLY')
};
var getUploads = function getUploads(pay, userID, resized) {
  var _this2 = this;

  var self = this;
  var pao = self.pao;
  var files = pay.uploads.files;
  files.resized = resized;
  return new Promise(function (resolve, reject) {
    self.emit({
      type: 'save-file',
      data: {
        files: files,
        multiple: false,
        dir: '/uploads',
        ID: userID,
        saveType: 'rename',
        callback: self.handleFileSave.bind(_this2, resolve, reject)
      }
    });
  });
};
var handleFileSave = function handleFileSave(resolve, reject) {
  var e = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
  var saveResponse = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;

  if (e) {
    reject(e);
  } else {
    resolve(saveResponse);
  }
};
var saveFileUrlToDb = function saveFileUrlToDb(url, uid) {
  var _this3 = this;

  var self = this;
  return new Promise(function (resolve, reject) {
    var queries = {
      conditions: ["id EQUALS ".concat(uid, " ")],
      set: [{
        profile_url: url
      }]
    };
    self.query('mysql.jo_user.updateOne', queries, self.dataRequestHandler.bind(_this3, resolve, reject));
  });
};
var dataRequestHandler = function dataRequestHandler(resolve, reject) {
  var e = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
  var success = arguments.length > 3 ? arguments[3] : undefined;
  if (e) return reject(e);
  resolve(success);
};
var handleImageManipulation = function handleImageManipulation(resolve, reject) {
  var e = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
  var resizeResponse = arguments.length > 3 ? arguments[3] : undefined;

  if (e) {
    reject(e);
  } else {
    resolve(resizeResponse);
  }
};

/***/ }),
/* 142 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mailer__ = __webpack_require__(143);

/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0__mailer__["a" /* default */]);

/***/ }),
/* 143 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__methods__ = __webpack_require__(144);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



var nodemailer = __webpack_require__(145);

var Mailer = function Mailer(pao) {
  _classCallCheck(this, Mailer);

  this.pao = pao;
  this.mailer = nodemailer;
  this.supTrans = ['smtp'];
  this.transport = null; // // methods

  this.init = __WEBPACK_IMPORTED_MODULE_0__methods__["c" /* init */];
  this.handleConfigMailer = __WEBPACK_IMPORTED_MODULE_0__methods__["a" /* handleConfigMailer */];
  this.handleSendMail = __WEBPACK_IMPORTED_MODULE_0__methods__["b" /* handleSendMail */];
  this.sendMail = __WEBPACK_IMPORTED_MODULE_0__methods__["d" /* sendMail */];
};

/* harmony default export */ __webpack_exports__["a"] = (Mailer);

/***/ }),
/* 144 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return init; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return handleConfigMailer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return handleSendMail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return sendMail; });
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var init = function init() {
  console.log('Mailer has been initialised');
  this.listens({
    'config-mailer': this.handleConfigMailer.bind(this),
    'send-email': this.handleSendMail.bind(this)
  });
};
var handleConfigMailer = function handleConfigMailer(data) {
  var self = this;
  self.transport = self.mailer.createTransport({
    host: 'smtp.mailtrap.io',
    port: 2525,
    auth: {
      user: 'bd9ca9c390819c',
      pass: 'eae12fa48b0f5c'
    },
    pool: true,
    // use pooled connection
    rateLimit: true,
    // enable to make sure we are limiting
    maxConnections: 1,
    // set limit to 1 connection only
    maxMessages: 100 // send 3 emails per second

  });
};
var handleSendMail = function handleSendMail(data) {
  var self = this;
  self.mailSendHandler = data.callback;
  self.log("Mailer is about to send email"); // console.log(data)

  if (self.transport) {
    /*if(!pao.pa_contains(data,'message')){
    	 
    	 
      data.callback(new Error('Missing required text property')) 
     
    }else{
    	
    	if(!pao.pa_contains(data.messages,['to','from','content'])){
    		
    		 data.callback(new Error('Missing required text property')) 
    		 
    	}else{
    		
    		
    		if(!pao.pa_contains(data.messages.content,['text'])){
    		
    		   data.callback(new Error('Missing required text property'))
    
    	  }else{
    	  	
    	  	  self.sendMail(data.message,data.callback)
    	  	
    	  }
    		
    	}
    }*/
    var mailiks = data.mail;
    var mailSendResponses = [];

    if (mailiks instanceof Array) {
      var mailsLen = mailiks.length;

      var handleMultiSend = function handleMultiSend(e, res) {
        if (e) {
          self.log('THE EMAIL SENDING ERROR RESPONSE');
          self.log(e);
          mailSendResponses.push({
            errored: true,
            message: e
          });
        } else {
          self.log('THE EMAIL SENDING SUCCESS RESPONSE');
          self.log(res);
          mailSendResponses.push({
            errored: false,
            message: res
          });
        }

        if (mailSendResponses.length === mailsLen) {
          self.log('THE MAILRESPONSES'); // self.log(mailSendResponses)

          self.mailSendHandler(mailSendResponses);
        }
      };

      mailiks.forEach( /*#__PURE__*/function () {
        var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(receivr, i) {
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  _context.next = 2;
                  return self.sendMail(receivr.message, handleMultiSend);

                case 2:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee);
        }));

        return function (_x, _x2) {
          return _ref.apply(this, arguments);
        };
      }());
    } else {
      self.sendMail(mailiks, self.mailSendHandler);
    }
  } else {
    self.log('No configured email transport,Mailer requires transport to send');
    self.mailSendHandler(new Error('No configured email transporter'));
  }
};
var sendMail = function sendMail(message, callback) {
  var self = this;
  self.transport.sendMail(message, callback);
};

/***/ }),
/* 145 */
/***/ (function(module, exports) {

module.exports = require("nodemailer");

/***/ }),
/* 146 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__kronjo__ = __webpack_require__(147);

/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0__kronjo__["a" /* default */]);

/***/ }),
/* 147 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__methods__ = __webpack_require__(148);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



var nodeSchedule = __webpack_require__(149);

var Kronjo = function Kronjo(pao) {
  _classCallCheck(this, Kronjo);

  this.pao = pao;
  this.taskr = nodeSchedule;
  this.krons = [];
  this.init = __WEBPACK_IMPORTED_MODULE_0__methods__["d" /* init */];
  this.handleKronjoTask = __WEBPACK_IMPORTED_MODULE_0__methods__["b" /* handleKronjoTask */];
  this.handleConfigKronjo = __WEBPACK_IMPORTED_MODULE_0__methods__["a" /* handleConfigKronjo */];
  this.handleSingleProcessTasks = __WEBPACK_IMPORTED_MODULE_0__methods__["c" /* handleSingleProcessTasks */];
  this.scheduleTask = __WEBPACK_IMPORTED_MODULE_0__methods__["e" /* scheduleTask */];
};

/* harmony default export */ __webpack_exports__["a"] = (Kronjo);

/***/ }),
/* 148 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return init; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return handleConfigKronjo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return handleSingleProcessTasks; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return handleKronjoTask; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return scheduleTask; });
var init = function init() {
  this.log('Kronjo has been initialised');
  this.listens({
    'config-kronjo': this.handleConfigKronjo.bind(this),
    'handle-kronjo-task': this.handleKronjoTask.bind(this),
    'start-single-process-tasks': this.handleSingleProcessTasks.bind(this) // 'task-run': this.handleTaskRun.bind(this)

  });
};
var handleConfigKronjo = function handleConfigKronjo(krons) {
  var self = this;
  var pao = self.pao;
  var unikify = pao.pa_unikify;
  self.krons = unikify(self.krons.concat(krons)); // krons.forEach((task,i)=>{
  //   self.scheduleTask(task)
  // })
};
var handleSingleProcessTasks = function handleSingleProcessTasks() {
  var self = this;
  self.krons.forEach(function (task, i) {
    self.scheduleTask(task);
  });
};
var handleKronjoTask = function handleKronjoTask(data) {
  var self = this;
  data.forEach(function (task, i) {
    self.scheduleTask(task);
  });
};
var scheduleTask = function scheduleTask(task) {
  var self = this;
  var pao = self.pao;
  var taskRule = task.taskRule,
      taskHandler = task.taskHandler;
  self.log('THE TASK');
  self.log(task);
  self.log(taskHandler);
  var scheduler = self.taskr.scheduleJob(taskRule, taskHandler.bind(self));
};

/***/ }),
/* 149 */
/***/ (function(module, exports) {

module.exports = require("node-schedule");

/***/ }),
/* 150 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__asettings__ = __webpack_require__(151);

/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0__asettings__["a" /* default */]);

/***/ }),
/* 151 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__methods__ = __webpack_require__(152);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



var Asettings = function Asettings(pao) {
  _classCallCheck(this, Asettings);

  this.pao = pao;
  this.init = __WEBPACK_IMPORTED_MODULE_0__methods__["j" /* init */];
  this.handleAsettingsTask = __WEBPACK_IMPORTED_MODULE_0__methods__["g" /* handleAsettingsTask */];
  this.getUserProfile = __WEBPACK_IMPORTED_MODULE_0__methods__["f" /* getUserProfile */];
  this.deleteAccount = __WEBPACK_IMPORTED_MODULE_0__methods__["d" /* deleteAccount */];
  this.updateUser = __WEBPACK_IMPORTED_MODULE_0__methods__["p" /* updateUser */];
  this.changeAvatar = __WEBPACK_IMPORTED_MODULE_0__methods__["a" /* changeAvatar */];
  this.handleImageManipulation = __WEBPACK_IMPORTED_MODULE_0__methods__["i" /* handleImageManipulation */];
  this.modifyFile = __WEBPACK_IMPORTED_MODULE_0__methods__["k" /* modifyFile */];
  this.saveUploads = __WEBPACK_IMPORTED_MODULE_0__methods__["m" /* saveUploads */];
  this.handleFileSave = __WEBPACK_IMPORTED_MODULE_0__methods__["h" /* handleFileSave */];
  this.saveFileUrlToDb = __WEBPACK_IMPORTED_MODULE_0__methods__["l" /* saveFileUrlToDb */];
  this.dataRequestHandler = __WEBPACK_IMPORTED_MODULE_0__methods__["b" /* dataRequestHandler */];
  this.getApplicantTools = __WEBPACK_IMPORTED_MODULE_0__methods__["getApplicantTools"];
  this.searchBatch = __WEBPACK_IMPORTED_MODULE_0__methods__["n" /* searchBatch */];
  this.searchBatchHandler = __WEBPACK_IMPORTED_MODULE_0__methods__["o" /* searchBatchHandler */];
  this.dealWithDataStorageResponse = __WEBPACK_IMPORTED_MODULE_0__methods__["dealWithDataStorageRespomse"];
};

/* harmony default export */ __webpack_exports__["a"] = (Asettings);

/***/ }),
/* 152 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return init; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return handleAsettingsTask; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return getUserProfile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return deleteAccount; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return updateUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return changeAvatar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return modifyFile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return handleImageManipulation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return saveUploads; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return handleFileSave; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return saveFileUrlToDb; });
/* unused harmony export alertUnsubscription */
/* unused harmony export alertAddition */
/* unused harmony export alertMailUpdate */
/* unused harmony export dataRequestDeleteHandler */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return dataRequestHandler; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return searchBatch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return searchBatchHandler; });
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var init = function init() {
  this.log('Asettings has been initialised');
  this.listens({
    'handle-asettings-task': this.handleAsettingsTask.bind(this)
  });
};
var handleAsettingsTask = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(data) {
    var self, pao, contains, isOBject, forOf, user, uploads;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            console.log(data);
            self = this;
            pao = self.pao;
            contains = pao.pa_contains;
            isOBject = pao.pa_isObject;
            forOf = pao.pa_forOf;
            user = data.payload.user;
            self.callback = data.callback;

            if (user.uploads) {
              uploads = user.uploads;
              user.action = uploads.fields.action, user.payload = {
                files: uploads.files || null,
                ID: uploads.fields.ID,
                old: uploads.fields.old
              };
            } // let uid = user.ID


            _context3.next = 11;
            return self.log('THE DATA INSIDE ASETTINGS');

          case 11:
            _context3.next = 13;
            return self.log(user);

          case 13:
            if (isOBject(user)) {
              _context3.next = 15;
              break;
            }

            return _context3.abrupt("return", self.callback({
              message: 'User has not been specified'
            }, null));

          case 15:
            if (user.action) {
              _context3.next = 17;
              break;
            }

            return _context3.abrupt("return", self.callback({
              message: 'Invalid request'
            }, null));

          case 17:
            if (contains(user, ['payload'])) {
              _context3.next = 19;
              break;
            }

            return _context3.abrupt("return", self.callback({
              message: 'missing required key'
            }, null));

          case 19:
            if (contains(user.payload, ['ID'])) {
              _context3.next = 21;
              break;
            }

            return _context3.abrupt("return", self.callback({
              message: 'missing required key'
            }, null));

          case 21:
            _context3.t0 = user.action;
            _context3.next = _context3.t0 === 'getProfile' ? 24 : _context3.t0 === 'deleteAccount' ? 26 : _context3.t0 === 'changeAvatar' ? 28 : _context3.t0 === 'updateUser' ? 30 : _context3.t0 === 'updateUserAlert' ? 32 : _context3.t0 === 'addAltAlert' ? 34 : _context3.t0 === 'removeAlert' ? 36 : _context3.t0 === 'unsubscribeFromAlerts' ? 38 : 40;
            break;

          case 24:
            self.getUserProfile(user.payload).then( /*#__PURE__*/function () {
              var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(retrievedUser) {
                var userProfile;
                return regeneratorRuntime.wrap(function _callee$(_context) {
                  while (1) {
                    switch (_context.prev = _context.next) {
                      case 0:
                        userProfile = retrievedUser[0];
                        userProfile.url = "http://localhost:3000/download/".concat(userProfile.profileUrl); //    retrievedUser.url = `http://localhost:3000/download/${retrievedUser.profile_url}`

                        _context.next = 4;
                        return self.log('THE RETRIEVED USER');

                      case 4:
                        _context.next = 6;
                        return self.log(userProfile);

                      case 6:
                        self.callback(null, userProfile);

                      case 7:
                      case "end":
                        return _context.stop();
                    }
                  }
                }, _callee);
              }));

              return function (_x2) {
                return _ref2.apply(this, arguments);
              };
            }())["catch"](function (e) {
              return self.callback(e, null);
            });
            return _context3.abrupt("break", 41);

          case 26:
            self.deleteAccount(user.payload).then(function (deleteStat) {
              return self.callback(null, deleteStat);
            })["catch"](function (e) {
              return self.callback(e, null);
            });
            return _context3.abrupt("break", 41);

          case 28:
            self.changeAvatar(user.payload).then( /*#__PURE__*/function () {
              var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(changedAv) {
                var userProfile;
                return regeneratorRuntime.wrap(function _callee2$(_context2) {
                  while (1) {
                    switch (_context2.prev = _context2.next) {
                      case 0:
                        _context2.next = 2;
                        return self.log('THE CHANGED AV');

                      case 2:
                        userProfile = {
                          url: "http://localhost:3000/download/".concat(changedAv.profileUrl),
                          profileUrl: changedAv.profileUrl
                        };
                        self.callback(null, userProfile);

                      case 4:
                      case "end":
                        return _context2.stop();
                    }
                  }
                }, _callee2);
              }));

              return function (_x3) {
                return _ref3.apply(this, arguments);
              };
            }())["catch"](function (e) {
              return self.callback(e, null);
            });
            return _context3.abrupt("break", 41);

          case 30:
            self.updateUser(user.payload).then(function (updated) {
              updated.taken ? updated.taken instanceof Array ? updated.taken = updated.taken[0] : '' : '';
              return self.callback(null, {
                update: _objectSpread({}, updated.taken)
              });
            })["catch"](function (e) {
              return self.callback(e, null);
            });
            return _context3.abrupt("break", 41);

          case 32:
            self.updateUser(user.payload).then(function (updated) {
              return self.callback(null, updated);
            })["catch"](function (e) {
              return self.callback(e, null);
            });
            return _context3.abrupt("break", 41);

          case 34:
            self.updateUser(user.payload).then(function (updated) {
              return self.callback(null, updated);
            })["catch"](function (e) {
              return self.callback(e, null);
            });
            return _context3.abrupt("break", 41);

          case 36:
            self.updateUser(user.payload).then(function (updated) {
              return self.callback(null, updated);
            })["catch"](function (e) {
              return self.callback(e, null);
            });
            return _context3.abrupt("break", 41);

          case 38:
            self.updateUser(user.payload).then(function (updated) {
              return self.callback(null, updated);
            })["catch"](function (e) {
              return self.callback(e, null);
            });
            return _context3.abrupt("break", 41);

          case 40:
            return _context3.abrupt("return", self.callback(new Error('Unknown data request'), null));

          case 41:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, this);
  }));

  return function handleAsettingsTask(_x) {
    return _ref.apply(this, arguments);
  };
}();
var getUserProfile = function getUserProfile(pay) {
  var _this = this;

  var self = this;
  var pao = self.pao;
  var uid = pay.ID;
  return new Promise(function (resolve, reject) {
    // if(!data.profile) return reject(new Error('Invalid Request')) 
    // if(!data.profile.userId) return reject(new Error('Invalid'))
    var query = {
      returnFields: ['jo_job_alert_subscriber.email', 'jo_job_alert_subscriber.id'],
      tables: ['jo_user', 'jo_job_alert_subscriber'],
      joins: 2,
      joinPoints: ['jo_user.id EQUALS jo_job_alert_subscriber.u_id'],
      conditions: ["jo_user.id EQUALS ".concat(uid)],
      opiks: ['field.profile_url.as[profileUrl]', 'field.first_name.as[firstName]', 'field.last_name.as[lastName]'],
      type: 'inner'
    };
    self.query('mysql.SEARCH', query, self.dataRequestHandler.bind(_this, resolve, reject));
  });
};
var deleteAccount = function deleteAccount(pay) {
  var _this2 = this;

  var self = this;
  var pao = self.pao;
  console.log('The update');
  console.log(pay);
  return new Promise(function (resolve, reject) {
    if (!pay.update) return reject(new Error('Update data missing'));
    var uid = pay.ID;
    var alertID = pay.alertID;
    var update = pay.update;
    var frequency = update.frequency;
    var queries = {
      conditions: ["u_id EQUALS ".concat(uid, " "), "AND is_active EQUALS 1"],
      set: [{
        is_active: 0,
        is_deleted: 1
      }]
    };
    self.query('mysql.jo_user.updateOne', queries, self.multiDataRequestHandler.bind(_this2, resolve, reject));
  });
};
var updateUser = function updateUser(pay) {
  var _this3 = this;

  var self = this;
  var pao = self.pao;
  return new Promise(function (resolve, reject) {
    var update = pay.update;
    var set = []; // let password = update.password 

    var uid = pay.ID;

    if (update.fullName) {
      // let names = update.fullName.split(' ')
      var profile = {};
      profile.first_name = update.fullName.firstName;
      profile.last_name = update.fullName.lastName;
      set.push(profile);
    }

    if (update.password) {
      var access = {};
      access.password = update.password;
      set.push(access);
    } // set.password = update.password 


    console.log('THE SET:ASSETTINGS');
    console.log(set);
    var query = {
      tables: ['jo_user', 'jo_login'],
      joins: 2,
      joinPoints: ['jo_user.id EQUALS jo_login.u_id'],
      conditions: ["jo_user.id EQUALS ".concat(uid), "AND jo_login.u_id EQUALS ".concat(uid)],
      opiks: ['field.first_name.as[firstName]', 'field.last_name.as[lastName]'],
      set: set,
      takeFrom: 'jo_user'
    };
    self.query('mysql.UPDATEANDTAKE', query, self.dataRequestHandler.bind(_this3, resolve, reject));
  });
};
var changeAvatar = function changeAvatar(pay) {
  var self = this;
  var pao = self.pao;
  var files = pay.files;
  var file = files.file.path;
  var ID = pay.ID;
  var old = pay.old;
  return new Promise( /*#__PURE__*/function () {
    var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee8(resolve, reject) {
      return regeneratorRuntime.wrap(function _callee8$(_context8) {
        while (1) {
          switch (_context8.prev = _context8.next) {
            case 0:
              self.modifyFile(file, 'resize-image').then( /*#__PURE__*/function () {
                var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(resized) {
                  return regeneratorRuntime.wrap(function _callee6$(_context6) {
                    while (1) {
                      switch (_context6.prev = _context6.next) {
                        case 0:
                          _context6.next = 2;
                          return self.log('RESIZE SUCCESSFULL');

                        case 2:
                          _context6.next = 4;
                          return self.log(resized);

                        case 4:
                          self.saveUploads(files, ID, old).then( /*#__PURE__*/function () {
                            var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(saved) {
                              return regeneratorRuntime.wrap(function _callee5$(_context5) {
                                while (1) {
                                  switch (_context5.prev = _context5.next) {
                                    case 0:
                                      _context5.next = 2;
                                      return self.log('THE SAVED FILE UPLOADS');

                                    case 2:
                                      _context5.next = 4;
                                      return self.log(saved);

                                    case 4:
                                      self.saveFileUrlToDb(saved.url, ID).then( /*#__PURE__*/function () {
                                        var _ref7 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(updated) {
                                          var updatedUser;
                                          return regeneratorRuntime.wrap(function _callee4$(_context4) {
                                            while (1) {
                                              switch (_context4.prev = _context4.next) {
                                                case 0:
                                                  _context4.next = 2;
                                                  return self.log('THE UPDATED FILE URL');

                                                case 2:
                                                  _context4.next = 4;
                                                  return self.log(updated);

                                                case 4:
                                                  updatedUser = {
                                                    profileUrl: saved.url
                                                  };
                                                  resolve(updatedUser);

                                                case 6:
                                                case "end":
                                                  return _context4.stop();
                                              }
                                            }
                                          }, _callee4);
                                        }));

                                        return function (_x8) {
                                          return _ref7.apply(this, arguments);
                                        };
                                      }())["catch"](function (e) {
                                        reject(e);
                                      });

                                    case 5:
                                    case "end":
                                      return _context5.stop();
                                  }
                                }
                              }, _callee5);
                            }));

                            return function (_x7) {
                              return _ref6.apply(this, arguments);
                            };
                          }())["catch"](function (e) {
                            return reject(e);
                          });

                        case 5:
                        case "end":
                          return _context6.stop();
                      }
                    }
                  }, _callee6);
                }));

                return function (_x6) {
                  return _ref5.apply(this, arguments);
                };
              }())["catch"]( /*#__PURE__*/function () {
                var _ref8 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7(e) {
                  return regeneratorRuntime.wrap(function _callee7$(_context7) {
                    while (1) {
                      switch (_context7.prev = _context7.next) {
                        case 0:
                          _context7.next = 2;
                          return self.log('An error occured');

                        case 2:
                          reject(e);

                        case 3:
                        case "end":
                          return _context7.stop();
                      }
                    }
                  }, _callee7);
                }));

                return function (_x9) {
                  return _ref8.apply(this, arguments);
                };
              }());

            case 1:
            case "end":
              return _context8.stop();
          }
        }
      }, _callee8);
    }));

    return function (_x4, _x5) {
      return _ref4.apply(this, arguments);
    };
  }());
};
var modifyFile = function modifyFile(file, event) {
  var _this4 = this;

  console.log('ABOUT TO SEND THE FILE TO IMAGEMAN');
  var self = this;
  return new Promise(function (resolve, reject) {
    var fileOptions = {
      dimensions: {
        x: 250,
        y: 250
      },
      image: file
    };
    console.log(file);
    self.emit({
      type: event,
      data: {
        image: fileOptions,
        callback: self.handleImageManipulation.bind(_this4, resolve, reject)
      }
    });
  }); // console.log('CHECK IF ASYNC FROM ANOTHER MODULE EXECUTES ACCORDINGLY')
};
var handleImageManipulation = function handleImageManipulation(resolve, reject) {
  var e = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
  var resizeResponse = arguments.length > 3 ? arguments[3] : undefined;

  if (e) {
    reject(e);
  } else {
    resolve(resizeResponse);
  }
};
var saveUploads = function saveUploads(files, userID, old) {
  var _this5 = this;

  var self = this;
  var pao = self.pao; // let files = files 

  return new Promise(function (resolve, reject) {
    self.emit({
      type: 'save-file',
      data: {
        files: files,
        multiple: false,
        old: old,
        dir: '/uploads',
        ID: userID,
        saveType: 'unlinkold',
        callback: self.handleFileSave.bind(_this5, resolve, reject)
      }
    });
  });
};
var handleFileSave = function handleFileSave(resolve, reject) {
  var e = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
  var saveResponse = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;

  if (e) {
    reject(e);
  } else {
    resolve(saveResponse);
  }
};
var saveFileUrlToDb = function saveFileUrlToDb(url, uid) {
  var _this6 = this;

  var self = this;
  return new Promise(function (resolve, reject) {
    var queries = {
      conditions: ["id EQUALS ".concat(uid, " ")],
      set: [{
        profile_url: url
      }]
    };
    self.query('mysql.jo_user.updateOne', queries, self.dataRequestHandler.bind(_this6, resolve, reject));
  });
};
var alertUnsubscription = function alertUnsubscription(pay) {
  var _this7 = this;

  var self = this;
  var pao = self.pao;
  var _data = data,
      update = _data.update;
  return new Promise(function (resolve, reject) {
    if (!data.update) return reject(new Error('Invalid Request'));
    if (!data.update.userId) return reject(new Error('Invalid Request'));
    var query = {
      // set : {password: p}
      conditions: ["id EQUALS ".concat(account.userID)]
    };
    self.query('mysql.jo_user.update', query, self.dataRequestUserUpdateHandler.bind(_this7, resolve, reject));
  });
};
var alertAddition = function alertAddition(pay) {
  var _this8 = this;

  var self = this;
  var pao = self.pao;
  var _data2 = data,
      update = _data2.update;
  return new Promise(function (resolve, reject) {
    if (!data.update) return reject(new Error('Invalid Request'));
    if (!data.update.userId) return reject(new Error('Invalid Request'));
    var query = {
      // set : {password: p}
      conditions: ["id EQUALS ".concat(account.userID)]
    };
    self.query('mysql.jo_user.update', query, self.dataRequestUserUpdateHandler.bind(_this8, resolve, reject));
  });
};
var alertMailUpdate = function alertMailUpdate(pay) {
  var _this9 = this;

  var self = this;
  var pao = self.pao;
  var _data3 = data,
      update = _data3.update;
  return new Promise(function (resolve, reject) {
    if (!data.update) return reject(new Error('Invalid Request'));
    if (!data.update.userId) return reject(new Error('Invalid Request'));
    var query = {
      // set : {password: p}
      conditions: ["id EQUALS ".concat(account.userID)]
    };
    self.query('mysql.jo_user.update', query, self.dataRequestUserUpdateHandler.bind(_this9, resolve, reject));
  });
};
var dataRequestDeleteHandler = function dataRequestDeleteHandler() {
  var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
  var result = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  var self = this;
  var pao = self.pao;
  if (e) return reject(new Error('db error'));
  if (!result) return reject(new Error(''));
  resolve(result);
};
var dataRequestHandler = function dataRequestHandler(resolve, reject) {
  var e = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
  var result = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
  var self = this;
  var pao = self.pao;
  if (e) return reject(e);
  resolve(result);
};
var searchBatch = function searchBatch(key) {
  // let fields = {
  // 	jo_user: { id: 'NULL',u_type: data.usertype,first_name: data.firstname,last_name: data.lastname,email: data.email },
  // 	jo_account: {own:{id:'NULL'},tables: [{name:'jo_user',values:['u_type.account_name']}]},
  // 	jo_user_account_join: {own:{id:'NULL'},tables: [{name:'jo_user',values:['id.u_id','email.account_email']},{name:'jo_account',values:['id.account_id']}]},
  // 	jo_login: {own:{id:'NULL',password:data.password},tables: [{name:'jo_user',values:['id.u_id','email.username']}]}
  // }
  // return [
  // 	{name: 'jo_user',fields: fields.jo_user},
  // 	{name: 'jo_account',fields: fields.jo_account},
  // 	{name: 'jo_user_account_join',lastInsert: ['jo_user','jo_account'],fields: fields.jo_user_account_join},
  // 	{name: 'jo_login',lastInsert: ['jo_user'],fields: fields.jo_login}
  //    ]
  return [{
    returnFields: ['all'],
    tables: ['jo_job', 'jo_recruiter', 'jo_company'],
    joins: 3,
    joinPoints: ['jo_job.u_id EQUALS jo_recruiter.id', 'jo_company.id EQUALS jo_recruiter.company_id'],
    conditions: ["MATCH [job_title] AGAINST [".concat(key, "] NATURAL"), "OR MATCH [description] AGAINST [php] NATURAL"],
    take: 10,
    soundex: true,
    type: 'inner'
  }, {
    returnFields: ['state_name', 'country_id'],
    tables: ['jo_states'],
    joinPoints: ['jo_states.id EQUALS jo_country.u_id'],
    conditions: ["country_id EQUALS 202"]
  }, {
    returnFields: ['all'],
    tables: ['jo_category']
  }];
};
var searchBatchHandler = function searchBatchHandler() {
  var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
  var batchResults = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  var self = this;
  var pao = self.pao;
  console.log('THE BATCH RESULTS');
  console.log(batchResults);
  self.callback(null, {
    batch: batchResults
  });
};

/***/ })
/******/ ]);