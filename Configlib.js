'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  "use strict";

  var $$models$Fundamentals$es6lib$$default = ['Bb', 'B', 'C', 'D', 'Eb', 'F', 'G'];

  var $$models$MidiInstruments$es6lib$$default = ['Acoustic Grand Piano', 'Bright Acoustic Piano', 'Electric Grand Piano', 'Honky-tonk Piano', 'Electric Piano 1', 'Electric Piano 2', 'Harpsichord', 'Clavi', 'Celesta', 'Glockenspiel', 'Music Box', 'Vibraphone', 'Marimba', 'Xylophone', 'Tubular Bells', 'Dulcimer', 'Drawbar Organ', 'Percussive Organ', 'Rock Organ', 'Church Organ', 'Reed Organ', 'Accordion', 'Harmonica', 'Tango Accordion', 'Acoustic Guitar (nylon)', 'Acoustic Guitar (steel)', 'Electric Guitar (jazz)', 'Electric Guitar (clean)', 'Electric Guitar (muted)', 'Overdriven Guitar', 'Distortion Guitar', 'Guitar harmonics', 'Acoustic Bass', 'Electric Bass (finger)', 'Electric Bass (pick)', 'Fretless Bass', 'Slap Bass 1', 'Slap Bass 2', 'Synth Bass 1', 'Synth Bass 2', 'Violin', 'Viola', 'Cello', 'Contrabass', 'Tremolo Strings', 'Pizzicato Strings', 'Orchestral Harp', 'Timpani', 'String Ensemble 1', 'String Ensemble 2', 'SynthStrings 1', 'SynthStrings 2', 'Choir Aahs', 'Voice Oohs', 'Synth Voice', 'Orchestra Hit', 'Trumpet', 'Trombone', 'Tuba', 'Muted Trumpet', 'French Horn', 'Brass Section', 'SynthBrass 1', 'SynthBrass 2', 'Soprano Sax', 'Alto Sax', 'Tenor Sax', 'Baritone Sax', 'Oboe', 'English Horn', 'Bassoon', 'Clarinet', 'Piccolo', 'Flute', 'Recorder', 'Pan Flute', 'Blown Bottle', 'Shakuhachi', 'Whistle', 'Ocarina', 'Lead 1 (square)', 'Lead 2 (sawtooth)', 'Lead 3 (calliope)', 'Lead 4 (chiff)', 'Lead 5 (charang)', 'Lead 6 (voice)', 'Lead 7 (fifths)', 'Lead 8 (bass + lead)', 'Pad 1 (new age)', 'Pad 2 (warm)', 'Pad 3 (polysynth)', 'Pad 4 (choir)', 'Pad 5 (bowed)', 'Pad 6 (metallic)', 'Pad 7 (halo)', 'Pad 8 (sweep)', 'FX 1 (rain)', 'FX 2 (soundtrack)', 'FX 3 (crystal)', 'FX 4 (atmosphere)', 'FX 5 (brightness)', 'FX 6 (goblins)', 'FX 7 (echoes)', 'FX 8 (sci-fi)', 'Sitar', 'Banjo', 'Shamisen', 'Koto', 'Kalimba', 'Bag pipe', 'Fiddle', 'Shanai', 'Tinkle Bell', 'Agogo', 'Steel Drums', 'Woodblock', 'Taiko Drum', 'Melodic Tom', 'Synth Drum', 'Reverse Cymbal', 'Guitar Fret Noise', 'Breath Noise', 'Seashore', 'Bird Tweet', 'Telephone Ring', 'Helicopter', 'Applause', 'Gunshot'];

  var $$models$TimeSignatures$es6lib$$default = {
    "all": "All",
    "reels": "C, C|,  4/4,  2/4,  2/2, 4/2 - Reels, hornpipes, polkas etc.",
    "jigs": "6/8, 12/8 - Jigs, slides etc.",
    "slip_jigs": "9/8 - Slip Jigs, hop jigs",
    "waltzes": "3/4 - Waltzes, mazurkas, polskas, minuets etc.",
    "unusual_jigs": "3/8 - Unusual Jigs &amp; Waltzes",
    "unusual_hornpipes": "3/2, 6/4 - Unusual English hornpipes and country dances"
  };

  var $$models$TranscriberFrameSizes$es6lib$$default = ['auto', '2048', '4096'];

  var $$Tunebook$es6lib$$Tunebook = (function () {
    function $$Tunebook$es6lib$$Tunebook(rawTunebook) {
      _classCallCheck(this, $$Tunebook$es6lib$$Tunebook);

      this.id = rawTunebook.id;
      this.fullName = rawTunebook.fullName;
      this.shortName = rawTunebook.shortName;
      this.url = rawTunebook.url;
      this.extra = rawTunebook.extra;
      this.count = rawTunebook.count;
    }

    _createClass($$Tunebook$es6lib$$Tunebook, [{
      key: 'logoUrl',
      get: function get() {
        return 'http://tunepal.org/test/tunepal/source_icons/s' + this.id + '.png';
      }
    }]);

    return $$Tunebook$es6lib$$Tunebook;
  })();

  var $$Tunebook$es6lib$$default = $$Tunebook$es6lib$$Tunebook;

  var $$BlobUtils$es6lib$$_BlobUtils = (function () {
    function $$BlobUtils$es6lib$$_BlobUtils() {
      _classCallCheck(this, $$BlobUtils$es6lib$$_BlobUtils);
    }

    _createClass($$BlobUtils$es6lib$$_BlobUtils, [{
      key: 'dataURLToBlob',
      value: function dataURLToBlob(dataURL) {
        var BASE64_MARKER = ';base64,';

        if (dataURL.indexOf(BASE64_MARKER) == -1) {
          // percent encoded
          var parts = dataURL.split(',');
          var contentType = parts[0].split(':')[1];
          var raw = parts[1];
          var numPercent = (raw.match(/%/g) || []).length;
          var _length = raw.length - numPercent * 2;
          var uInt8Array = new Uint8Array(_length);

          for (var i = 0, j = 0; i < raw.length; j++) {
            if (raw[i] === '%') {
              var code = raw.substr(i + 1, 2);
              uInt8Array[j] = parseInt(code, 16);
              i += 3;
            } else {
              uInt8Array[j] = raw.charCodeAt(i);
              i++;
            }
          }

          return new Blob([uInt8Array], { type: contentType });
        } else {
          // base64 encoded
          var parts = dataURL.split(BASE64_MARKER);
          var contentType = parts[0].split(':')[1];
          var raw = window.atob(parts[1]);
          var rawLength = raw.length;

          var uInt8Array = new Uint8Array(rawLength);

          for (var i = 0; i < rawLength; ++i) {
            uInt8Array[i] = raw.charCodeAt(i);
          }

          return new Blob([uInt8Array], { type: contentType });
        }
      }
    }]);

    return $$BlobUtils$es6lib$$_BlobUtils;
  })();

  var $$BlobUtils$es6lib$$BlobUtils = new $$BlobUtils$es6lib$$_BlobUtils();
  var $$BlobUtils$es6lib$$default = $$BlobUtils$es6lib$$BlobUtils;

  var $$CacheUtils$es6lib$$_CacheUtils = function $$CacheUtils$es6lib$$_CacheUtils() {
    _classCallCheck(this, $$CacheUtils$es6lib$$_CacheUtils);

    this.europeana = {};
    this.keywordSearch = {};
    this.notesSearch = {};
    this.tune = {};
  };

  var $$CacheUtils$es6lib$$CacheUtils = new $$CacheUtils$es6lib$$_CacheUtils();

  var $$CacheUtils$es6lib$$default = $$CacheUtils$es6lib$$CacheUtils;

  var $$DateUtils$es6lib$$_DateUtils = (function () {
    function $$DateUtils$es6lib$$_DateUtils() {
      _classCallCheck(this, $$DateUtils$es6lib$$_DateUtils);
    }

    _createClass($$DateUtils$es6lib$$_DateUtils, [{
      key: 'format',
      value: function format(timestamp) {
        var year = timestamp.getFullYear();
        var month = timestamp.getMonth() + 1;
        var day = timestamp.getDate();
        var hours = timestamp.getHours();
        var minutes = timestamp.getMinutes();
        var seconds = timestamp.getSeconds();
        return year + "-" + month + "-" + day + "%20" + hours + "%3A" + minutes + "%3A" + seconds;
      }
    }]);

    return $$DateUtils$es6lib$$_DateUtils;
  })();

  var $$DateUtils$es6lib$$DateUtils = new $$DateUtils$es6lib$$_DateUtils();

  var $$DateUtils$es6lib$$default = $$DateUtils$es6lib$$DateUtils;

  var $$LocalStorageUtils$es6lib$$_LocalStorageUtils = (function () {
    function $$LocalStorageUtils$es6lib$$_LocalStorageUtils() {
      _classCallCheck(this, $$LocalStorageUtils$es6lib$$_LocalStorageUtils);
    }

    _createClass($$LocalStorageUtils$es6lib$$_LocalStorageUtils, [{
      key: 'getItem',
      value: function getItem(key) {
        var value = localStorage.getItem(key);
        return value && JSON.parse(value);
      }
    }, {
      key: 'setItem',
      value: function setItem(key, value) {
        localStorage.setItem(key, JSON.stringify(value));
      }
    }]);

    return $$LocalStorageUtils$es6lib$$_LocalStorageUtils;
  })();

  var $$LocalStorageUtils$es6lib$$LocalStorageUtils = new $$LocalStorageUtils$es6lib$$_LocalStorageUtils();

  var $$LocalStorageUtils$es6lib$$default = $$LocalStorageUtils$es6lib$$LocalStorageUtils;

  var $$TranscriberUtils$es6lib$$_TranscriberUtils = (function () {
    function $$TranscriberUtils$es6lib$$_TranscriberUtils() {
      _classCallCheck(this, $$TranscriberUtils$es6lib$$_TranscriberUtils);
    }

    _createClass($$TranscriberUtils$es6lib$$_TranscriberUtils, [{
      key: 'calcFrameSize',
      value: function calcFrameSize(sampleRate) {
        var idealFrameSize = sampleRate / 10;
        var prev = this.prevPow2(idealFrameSize);
        var next = prev * 2;
        return next - idealFrameSize < prev - idealFrameSize ? next : prev;
      }
    }, {
      key: 'prevPow2',
      value: function prevPow2(v) {
        return Math.pow(2, Math.floor(Math.log(v) / Math.log(2)));
      }
    }]);

    return $$TranscriberUtils$es6lib$$_TranscriberUtils;
  })();

  var $$TranscriberUtils$es6lib$$TranscriberUtils = new $$TranscriberUtils$es6lib$$_TranscriberUtils();
  var $$TranscriberUtils$es6lib$$default = $$TranscriberUtils$es6lib$$TranscriberUtils;

  var $$ViewUtils$es6lib$$_ViewUtils = (function () {
    function $$ViewUtils$es6lib$$_ViewUtils() {
      _classCallCheck(this, $$ViewUtils$es6lib$$_ViewUtils);

      this.smallScreen = 600;
      this.mediumScreen = 992;
      this.largeScreen = 1200;
    }

    _createClass($$ViewUtils$es6lib$$_ViewUtils, [{
      key: 'showSideNav',
      value: function showSideNav() {
        $('.hamburger-button').sideNav('show');
      }
    }, {
      key: 'goBack',
      value: function goBack() {
        if (history.length == 1) {
          location.replace('/#!/record');
        } else {
          history.back();
        }
      }
    }, {
      key: 'doubleEncode',
      value: function doubleEncode(component) {
        return encodeURIComponent(encodeURIComponent(component));
      }
    }, {
      key: 'initDropdown',
      value: function initDropdown() {
        $('.dropdown-button').dropdown({
          constrain_width: false
        });
      }
    }, {
      key: 'initTooltips',
      value: function initTooltips() {
        $('.tooltipped').tooltip({
          position: 'bottom',
          delay: 50
        });
      }
    }, {
      key: 'isSmall',
      get: function get() {
        return $(window).width() <= this.smallScreen;
      }
    }, {
      key: 'isMedium',
      get: function get() {
        return $(window).width() > this.smallScreen && $(window).width() <= this.mediumScreen;
      }
    }, {
      key: 'isLarge',
      get: function get() {
        return $(window).width() > this.mediumScreen;
      }
    }, {
      key: 'isMediumOrUp',
      get: function get() {
        return $(window).width() > this.smallScreen;
      }
    }, {
      key: 'isMediumOrDown',
      get: function get() {
        return $(window).width() <= this.mediumScreen;
      }

      // The "240" below is the pixels of sizeNav, see _global.scss:
      // nav, main, footer { padding-left: 240px; }
    }, {
      key: 'isLandscape',
      get: function get() {
        var windowWidth = $(window).width();
        var windowHeight = $(window).height();
        return windowWidth <= this.mediumScreen ? windowWidth > windowHeight : windowWidth - 240 > windowHeight;
      }
    }, {
      key: 'isPortrait',
      get: function get() {
        return !this.isLandscape;
      }
    }]);

    return $$ViewUtils$es6lib$$_ViewUtils;
  })();

  var $$ViewUtils$es6lib$$ViewUtils = new $$ViewUtils$es6lib$$_ViewUtils();
  var $$ViewUtils$es6lib$$default = $$ViewUtils$es6lib$$ViewUtils;

  var $$utils$Utils$es6lib$$_Utils = (function () {
    function $$utils$Utils$es6lib$$_Utils() {
      _classCallCheck(this, $$utils$Utils$es6lib$$_Utils);

      this.blob = $$BlobUtils$es6lib$$default;
      this.cache = $$CacheUtils$es6lib$$default;
      this.date = $$DateUtils$es6lib$$default;
      this.localStorage = $$LocalStorageUtils$es6lib$$default;
      this.transcriber = $$TranscriberUtils$es6lib$$default;
      this.view = $$ViewUtils$es6lib$$default;
      this.tuneCache = null;
      this.europeanaCache = null;
    }

    _createClass($$utils$Utils$es6lib$$_Utils, [{
      key: 'makeArray',
      value: function makeArray() {
        var start = arguments.length <= 0 || arguments[0] === undefined ? 0 : arguments[0];
        var end = arguments.length <= 1 || arguments[1] === undefined ? 10 : arguments[1];
        var step = arguments.length <= 2 || arguments[2] === undefined ? 1 : arguments[2];

        var array = [];
        for (var i = start; i <= end; i += step) {
          array.push(i);
        }
        return array;
      }
    }, {
      key: 'defineProperty',
      value: function defineProperty(className) {
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
          for (var _len = arguments.length, names = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
            names[_key - 1] = arguments[_key];
          }

          for (var _iterator = names[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            name = _step.value;

            Object.defineProperty(className, name, {
              get: function get() {
                return this['_' + name];
              },
              set: function set(value) {
                this['_' + name] = value;
              }
            });
          }
        } catch (err) {
          _didIteratorError = true;
          _iteratorError = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion && _iterator['return']) {
              _iterator['return']();
            }
          } finally {
            if (_didIteratorError) {
              throw _iteratorError;
            }
          }
        }
      }
    }, {
      key: 'createEnum',
      value: function createEnum(names) {
        var enumClass = {};
        for (var i = 0; i < names.length; i++) {
          enumClass[names[i]] = i + 1;
        }
        return enumClass;
      }
    }, {
      key: 'createPolyfills',
      value: function createPolyfills() {
        if (typeof navigator !== 'undefined') {
          navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia;
        }

        if (typeof window !== 'undefined') {
          window.AudioContext = window.AudioContext || window.webkitAudioContext;

          window.requestAnimationFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function (callback) {
            return window.setTimeout(callback, 1000 / 60);
          };

          window.cancelAnimationFrame = window.cancelAnimationFrame || window.webkitCancelAnimationFrame || window.mozCancelAnimationFrame || window.oCancelAnimationFrame || window.msCancelAnimationFrame || function (id) {
            window.clearTimeout(id);
          };
        }

        if (typeof AudioBuffer !== 'undefined') {
          AudioBuffer.prototype.copyToChannel = AudioBuffer.prototype.copyToChannel || function (source, channelNumber, startInChannel) {
            this.getChannelData(channelNumber).set(source, startInChannel);
          };
        }

        if (typeof Float32Array !== 'undefined') {
          Float32Array.prototype.slice = Float32Array.prototype.slice || function (begin, end) {
            begin = typeof begin !== 'undefined' ? begin : 0;
            end = typeof end !== 'undefined' ? end : this.length;

            var newArray = this.buffer.slice(4 * begin, 4 * end);
            return new Float32Array(newArray);
          };
        }
      }
    }, {
      key: 'joinSet',
      value: function joinSet(set) {
        var s = '';
        var i = 0;
        var _iteratorNormalCompletion2 = true;
        var _didIteratorError2 = false;
        var _iteratorError2 = undefined;

        try {
          for (var _iterator2 = set[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
            var item = _step2.value;

            if (i != 0) s += ',';
            s += item;
            i++;
          }
        } catch (err) {
          _didIteratorError2 = true;
          _iteratorError2 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion2 && _iterator2['return']) {
              _iterator2['return']();
            }
          } finally {
            if (_didIteratorError2) {
              throw _iteratorError2;
            }
          }
        }

        return s;
      }
    }]);

    return $$utils$Utils$es6lib$$_Utils;
  })();

  Array.prototype.last = Array.prototype.last || function () {
    return this[this.length - 1];
  };

  var $$utils$Utils$es6lib$$Utils = new $$utils$Utils$es6lib$$_Utils();
  $$utils$Utils$es6lib$$Utils.createPolyfills();
  var $$utils$Utils$es6lib$$default = $$utils$Utils$es6lib$$Utils;

  var $$models$TunebookManager$es6lib$$_TunebookManager = (function () {
    function $$models$TunebookManager$es6lib$$_TunebookManager() {
      _classCallCheck(this, $$models$TunebookManager$es6lib$$_TunebookManager);

      this.DefaultTunebooks = $$models$TunebookManager$es6lib$$DefaultTunebooks;
      this.DefaultSelectedIds = $$models$TunebookManager$es6lib$$DefaultSelectedIds;

      var rawTunebooks = $$utils$Utils$es6lib$$default.localStorage.getItem('tunebooks');

      if (rawTunebooks === null) {
        rawTunebooks = this.DefaultTunebooks;
        $$utils$Utils$es6lib$$default.localStorage.setItem('tunebooks', rawTunebooks);
      }

      this._tunebooks = this._initTunebooks(rawTunebooks);

      this._selectedIds = $$utils$Utils$es6lib$$default.localStorage.getItem('tunebookSelectedIds');

      if (this._selectedIds === null) {
        this._selectedIds = this.DefaultSelectedIds;
        $$utils$Utils$es6lib$$default.localStorage.setItem('tunebookSelectedIds', this._selectedIds);
      }

      this._selectedIds = new Set(this._selectedIds);
    }

    _createClass($$models$TunebookManager$es6lib$$_TunebookManager, [{
      key: '_initTunebooks',
      value: function _initTunebooks(rawTunebooks) {
        var tunebooks = [];

        var _iteratorNormalCompletion3 = true;
        var _didIteratorError3 = false;
        var _iteratorError3 = undefined;

        try {
          for (var _iterator3 = rawTunebooks[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
            var rawTunebook = _step3.value;

            tunebooks[rawTunebook.id] = new $$Tunebook$es6lib$$default(rawTunebook);
          }
        } catch (err) {
          _didIteratorError3 = true;
          _iteratorError3 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion3 && _iterator3['return']) {
              _iterator3['return']();
            }
          } finally {
            if (_didIteratorError3) {
              throw _iteratorError3;
            }
          }
        }

        if (!tunebooks[0]) {
          tunebooks[0] = new $$Tunebook$es6lib$$default({
            id: 0,
            fullName: 'All',
            shortName: 'All'
          });
        }

        return tunebooks;
      }
    }, {
      key: 'updateTunebooks',
      value: function updateTunebooks($http) {
        var _this = this;

        return new Promise(function (resolve, reject) {
          var url = app$scripts$Config$es6lib$$default.ApiDomain + '/api/Sources';

          $http.get(url).success(function (tunebooks) {
            _this._tunebooks = _this._initTunebooks(tunebooks);
            $$utils$Utils$es6lib$$default.localStorage.setItem('tunebooks', tunebooks);
            resolve();
          });
        });
      }
    }, {
      key: 'getById',
      value: function getById(id) {
        return this._tunebooks[id];
      }
    }, {
      key: 'isSelected',
      value: function isSelected(id) {
        return this._selectedIds.has(0) || this._selectedIds.has(parseInt(id));
      }
    }, {
      key: 'select',
      value: function select(id) {
        id = parseInt(id);

        if (id === 0) {
          this._selectedIds = new Set([0]);
        } else {
          this._selectedIds.add(id);
          if (this._selectedIds.size === this._tunebooks.length - 1) {
            this._selectedIds = new Set([0]);
          }
        }

        $$utils$Utils$es6lib$$default.localStorage.setItem('tunebookSelectedIds', this._selectedIds);
      }
    }, {
      key: 'deselect',
      value: function deselect(id) {
        id = parseInt(id);

        if (id === 0) {
          this._selectedIds = new Set();
        } else if (this._selectedIds.has(0)) {
          this._selectedIds = new Set();
          var _iteratorNormalCompletion4 = true;
          var _didIteratorError4 = false;
          var _iteratorError4 = undefined;

          try {
            for (var _iterator4 = this._tunebooks[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
              var tunebook = _step4.value;

              if (tunebook.id != id && tunebook.id != 0) {
                this._selectedIds.add(tunebook.id);
              }
            }
          } catch (err) {
            _didIteratorError4 = true;
            _iteratorError4 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion4 && _iterator4['return']) {
                _iterator4['return']();
              }
            } finally {
              if (_didIteratorError4) {
                throw _iteratorError4;
              }
            }
          }
        } else {
          this._selectedIds['delete'](id);
        }

        $$utils$Utils$es6lib$$default.localStorage.setItem('tunebookSelectedIds', this._selectedIds);
      }
    }, {
      key: 'toggle',
      value: function toggle(id) {
        id = parseInt(id);
        this.isSelected(id) ? this.deselect(id) : this.select(id);
      }
    }, {
      key: 'selectedIds',
      get: function get() {
        return this._selectedIds;
      }
    }, {
      key: 'selectedShortNames',
      get: function get() {
        if (this._selectedIds.size === 0) {
          return 'None';
        } else {
          var names = '';
          var i = 0;
          var _iteratorNormalCompletion5 = true;
          var _didIteratorError5 = false;
          var _iteratorError5 = undefined;

          try {
            for (var _iterator5 = this._selectedIds[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
              var id = _step5.value;

              if (i != 0) names += ', ';
              names += this._tunebooks[id].shortName;
              i++;
            }
          } catch (err) {
            _didIteratorError5 = true;
            _iteratorError5 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion5 && _iterator5['return']) {
                _iterator5['return']();
              }
            } finally {
              if (_didIteratorError5) {
                throw _iteratorError5;
              }
            }
          }

          return names;
        }
      }
    }, {
      key: 'all',
      get: function get() {
        return this._tunebooks;
      }
    }]);

    return $$models$TunebookManager$es6lib$$_TunebookManager;
  })();

  var $$models$TunebookManager$es6lib$$DefaultSelectedIds = [0];

  var $$models$TunebookManager$es6lib$$DefaultTunebooks = [{
    "id": 0,
    "fullName": "All",
    "shortName": "All"
  }, {
    "id": 1,
    "fullName": "thesession.org",
    "shortName": "thesession.org",
    "url": "http://thesession.org"
  }, {
    "id": 2,
    "fullName": "Henrik Norbeck",
    "shortName": "Norbeck",
    "url": "http://www.norbeck.nu/abc/"
  }, {
    "id": 3,
    "fullName": "O'Neill's 1001",
    "shortName": "O'Neill's",
    "url": "http://trillian.mit.edu/~jc/music/book/oneills/"
  }, {
    "id": 4,
    "fullName": "Ceol Rince na hÉireann 1",
    "shortName": "CRÉ1",
    "url": "http://www.nigelgatherer.com/books/CRE/cre1.html",
    "extra": "Transcribed by Bill Black"
  }, {
    "id": 5,
    "fullName": "Ceol Rince na hÉireann 2",
    "shortName": "CRÉ2",
    "url": "http://www.nigelgatherer.com/books/CRE/cre2.html",
    "extra": "Transcribed by Bill Black"
  }, {
    "id": 6,
    "fullName": "Ceol Rince na hÉireann 3",
    "shortName": "CRÉ3",
    "url": "http://www.nigelgatherer.com/books/CRE/cre3.html",
    "extra": "Transcribed by Bill Black"
  }, {
    "id": 7,
    "fullName": "Ceol Rince na hÉireann 4",
    "shortName": "CRÉ4",
    "url": "http://www.nigelgatherer.com/books/CRE/cre4.html",
    "extra": "Transcribed by Bill Black"
  }, {
    "id": 8,
    "fullName": "Johnny O'Leary",
    "shortName": "O'Leary",
    "url": "http://www.capeirish.com/webabc/collections/coll-index.html",
    "extra": "Transcribed by Bill Black"
  }, {
    "id": 9,
    "fullName": "Nigel Gatherer",
    "shortName": "Nigel Gatherer",
    "url": "http://www.nigelgatherer.com/tunes/abc.html"
  }, {
    "id": 10,
    "fullName": "The Microphone Rambles",
    "shortName": "The Microphone Rambles",
    "url": "http://archive.org/details/TheMicrophonesRambles"
  }, {
    "id": 11,
    "fullName": "Welsh Music (John Tose)",
    "shortName": "Welsh Music",
    "url": "http://johntose.blogspot.ie/"
  }, {
    "id": 12,
    "fullName": "Scottish Flute Music (Jack Campin)",
    "shortName": "Scottish Flute Music",
    "url": "http://www.campin.me.uk/Flute/Webrelease/Flute/Flute.htm"
  }, {
    "id": 13,
    "fullName": "Company of Fife and Drum",
    "shortName": "Company of Fife and Drum",
    "url": "http://companyoffifeanddrum.org/"
  }, {
    "id": 14,
    "fullName": "Nottingham Music Database",
    "shortName": "Nottingham",
    "url": "http://abc.sourceforge.net/NMD/"
  }, {
    "id": 15,
    "fullName": "Aird's Airs (Jack Campin)",
    "shortName": "Aird's Airs",
    "url": "http://www.campin.me.uk/"
  }, {
    "id": 16,
    "fullName": "Ceol Rince na hÉireann 5",
    "shortName": "CRÉ5",
    "url": "http://www.nigelgatherer.com/books/CRE/cre5.html",
    "extra": "Transcribed by Bill Black"
  }, {
    "id": 17,
    "fullName": "The Bill Black Irish Tune Collection v.1",
    "shortName": "Bill Black Irish Tune Collection",
    "url": "http://www.capeirish.com/webabc/collections/coll-index.html",
    "extra": "Transcribed by Bill Black"
  }, {
    "id": 18,
    "fullName": "The Turoe Stone - Collection of tunes by Vincent Broderick",
    "shortName": "Turroe Stone",
    "url": "http://www.capeirish.com/webabc/collections/coll-index.html",
    "extra": "Transcribed by Bill Black"
  }, {
    "id": 19,
    "fullName": "Harding's Original Collection of Jigs and Reels",
    "shortName": "Harding's",
    "url": "http://www.capeirish.com/webabc/collections/hoc/home.html",
    "extra": "Transcribed by Bill Black"
  }, {
    "id": 20,
    "fullName": "CCE session tunes",
    "shortName": "Comhaltas",
    "url": "http://www.capeirish.com/webabc/collections/coll-index.html",
    "extra": "Transcribed by Bill Black"
  }, {
    "id": 21,
    "fullName": "The Leitrim Fiddler Volume 1 - Joe Liddy",
    "shortName": "Leitrim Fiddler Vol 1",
    "url": "http://www.capeirish.com/webabc/collections/liddy1/liddy1-index.html",
    "extra": "Transcribed by Bill Black"
  }, {
    "id": 22,
    "fullName": "The Leitrim Fiddler Volume 2 - Joe Liddy",
    "shortName": "Leitrim Fiddler - Vol 2",
    "url": " http://www.capeirish.com/webabc/collections/liddy2/liddy2-index.html",
    "extra": "Transcribed by Bill Black"
  }, {
    "id": 23,
    "fullName": "O'Farrell's Pocket Companion for the Irish or Union Pipes - Vol 1",
    "shortName": "O'Farrell's - Vol 1",
    "url": "http://www.capeirish.com/webabc/collections/coll-index.html",
    "extra": "Transcribed by Bill Black"
  }, {
    "id": 24,
    "fullName": "O'Farrell's Pocket Companion for the Irish or Union Pipes - Vol 2",
    "shortName": "O'Farrell's - Vol 2",
    "url": "http://www.capeirish.com/webabc/collections/coll-index.html",
    "extra": "Transcribed by Bill Black"
  }, {
    "id": 25,
    "fullName": "O'Farrell's Pocket Companion for the Irish or Union Pipes - Vol 3",
    "shortName": "O'Farrell's - Vol 3",
    "url": "http://www.capeirish.com/webabc/collections/coll-index.html",
    "extra": "Transcribed by Bill Black"
  }, {
    "id": 26,
    "fullName": "O'Farrell's Pocket Companion for the Irish or Union Pipes - Vol 4",
    "shortName": "O'Farrell's - Vol 4",
    "url": "http://www.capeirish.com/webabc/collections/coll-index.html",
    "extra": "Transcribed by Bill Black"
  }, {
    "id": 27,
    "fullName": "O'Farrell's Collection of National Irish Music for the Union Pipes",
    "shortName": "O'Farrell's Collection",
    "url": "http://www.capeirish.com/webabc/collections/coll-index.html",
    "extra": "Transcribed by Bill Black"
  }, {
    "id": 28,
    "fullName": "The Music of Brendan Tonra",
    "shortName": "Brendan Tonra",
    "url": "http://www.capeirish.com/webabc/collections/coll-index.html",
    "extra": "Transcribed by Bill Black"
  }, {
    "id": 29,
    "fullName": "Luke O'Malley's Collection of Irish Music Volume 1",
    "shortName": "Luke O'Malley",
    "url": "http://www.capeirish.com/webabc/collections/coll-index.html",
    "extra": "Transcribed by Bill Black"
  }, {
    "id": 30,
    "fullName": "Bill Black's Miscellaneous tunes",
    "shortName": "Black's Miscellaneous",
    "url": "http://www.capeirish.com/webabc/collections/coll-index.html",
    "extra": "Transcribed by Bill Black"
  }, {
    "id": 31,
    "fullName": "Mostly Gems",
    "shortName": "Mostly Gems",
    "url": "http://www.capeirish.com/webabc/collections/coll-index.html",
    "extra": "Composed by Bill Black"
  }, {
    "id": 32,
    "fullName": "Paul Hardy's Tunebooks",
    "shortName": "Paul Hardy",
    "url": "http://www.pghardy.net/concertina/tunebooks/index.html",
    "extra": "Traditional Celtic and English Tunes from the British Isles"
  }, {
    "id": 33,
    "fullName": "William Clarke of Feltwell Tunebook",
    "shortName": "William Clarke",
    "url": "http://www.pghardy.net/concertina/tunebooks/#williamclarke",
    "extra": "Transcribed by Paul Hardy"
  }, {
    "id": 34,
    "fullName": "Bulmer and Sharpely \"Music from Ireland\" (1974)",
    "shortName": "Bulmer & Sharpely",
    "url": "http://www.capeirish.com/webabc/collections/bsmi/bsmi_project_home.html",
    "extra": "Transcribed by Bill Black"
  }];

  var $$models$TunebookManager$es6lib$$TunebookManager = new $$models$TunebookManager$es6lib$$_TunebookManager();

  var $$models$TunebookManager$es6lib$$default = $$models$TunebookManager$es6lib$$TunebookManager;

  var app$scripts$Config$es6lib$$_Config = (function () {
    function app$scripts$Config$es6lib$$_Config() {
      _classCallCheck(this, app$scripts$Config$es6lib$$_Config);

      this.Fundamentals = $$models$Fundamentals$es6lib$$default;
      this.MidiInstruments = $$models$MidiInstruments$es6lib$$default;
      this.TimeSignatures = $$models$TimeSignatures$es6lib$$default;
      this.TranscriberFrameSizes = $$models$TranscriberFrameSizes$es6lib$$default;
      this.tunebooks = $$models$TunebookManager$es6lib$$default;

      this.CountdownTime = $$utils$Utils$es6lib$$default.makeArray(0, 10);
      this.PlaybackSpeed = $$utils$Utils$es6lib$$default.makeArray(1, 10);
      this.Transpose = $$utils$Utils$es6lib$$default.makeArray(-12, 12);
      this.ApiDomain = 'https://tunepal.org/tunepal2';
      this.EuropeanaApiDomain = 'https://tunepal.org/europeana';
      this.EuropeanaPortalDomain = 'http://www.europeana.eu/portal/search.html';
      this.EuropeanaApiKey = 'QNbCgzoWb';

      this.Properties = app$scripts$Config$es6lib$$Properties;

      this.audioContext = new window.AudioContext();

      this.isTesting = false;

      this._createProperties();
    }

    _createClass(app$scripts$Config$es6lib$$_Config, [{
      key: '_createProperties',
      value: function _createProperties() {
        var _this2 = this;

        this._settings = [];

        var _iteratorNormalCompletion6 = true;
        var _didIteratorError6 = false;
        var _iteratorError6 = undefined;

        try {
          var _loop = function () {
            var property = _step6.value;

            var storedValue = $$utils$Utils$es6lib$$default.localStorage.getItem(property.name);

            if (storedValue == null) {
              storedValue = property['default'];
              $$utils$Utils$es6lib$$default.localStorage.setItem(property.name, storedValue);
            }

            _this2._settings[property.name] = storedValue;

            Object.defineProperty(_this2, property.name, {
              get: function get() {
                return _this2._settings[property.name];
              },
              set: function set(value) {
                if (property.validate != null) {
                  var result = property.validate(value);
                  if (!result.success) return;
                  value = result.value;
                }

                _this2._settings[property.name] = value;
                $$utils$Utils$es6lib$$default.localStorage.setItem(property.name, value);
              }
            });
          };

          for (var _iterator6 = this.Properties[Symbol.iterator](), _step6; !(_iteratorNormalCompletion6 = (_step6 = _iterator6.next()).done); _iteratorNormalCompletion6 = true) {
            _loop();
          }
        } catch (err) {
          _didIteratorError6 = true;
          _iteratorError6 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion6 && _iterator6['return']) {
              _iterator6['return']();
            }
          } finally {
            if (_didIteratorError6) {
              throw _iteratorError6;
            }
          }
        }
      }
    }]);

    return app$scripts$Config$es6lib$$_Config;
  })();

  var app$scripts$Config$es6lib$$Properties = [{ name: 'blankTime', 'default': 2 }, { name: 'chords', 'default': $$models$MidiInstruments$es6lib$$default[0] }, { name: 'countdownTime', 'default': 3 }, { name: 'enableSampleRateConversion', 'default': false }, { name: 'fundamental', 'default': 'D' }, { name: 'melody', 'default': $$models$MidiInstruments$es6lib$$default[0] }, { name: 'playbackSpeed', 'default': 5 }, { name: 'sampleTime', 'default': 12 }, { name: 'timeSigs', 'default': 'all' }, { name: 'transcriberFrameSize', 'default': $$models$TranscriberFrameSizes$es6lib$$default[0] }, { name: 'transpose', 'default': 0 }];

  var app$scripts$Config$es6lib$$Config = new app$scripts$Config$es6lib$$_Config();

  var app$scripts$Config$es6lib$$default = app$scripts$Config$es6lib$$Config;
