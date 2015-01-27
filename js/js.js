/*!
  hash-string
  Parse and stringify hash strings
  based on query-string
  https://github.com/sindresorhus/query-string
  by Sindre Sorhus
  MIT License
*/
(function () {
  'use strict';
  var hashString = {};

  hashString.parse = function (str) {
    if (typeof str !== 'string') {
      return {};
    }

    str = str.trim().replace(/^(\?|#)/, '');

    if (!str) {
      return {};
    }

    return str.trim().split('&').reduce(function (ret, param) {
      var parts = param.replace(/\+/g, ' ').split('=');
      var key = parts[0];
      var val = parts[1];

      key = decodeURIComponent(key);
      // missing `=` should be `null`:
      // http://w3.org/TR/2012/WD-url-20120524/#collect-url-parameters
      val = val === undefined ? null : decodeURIComponent(val);

      if (!ret.hasOwnProperty(key)) {
        ret[key] = val;
      } else if (Array.isArray(ret[key])) {
        ret[key].push(val);
      } else {
        ret[key] = [ret[key], val];
      }

      return ret;
    }, {});
  };

  hashString.stringify = function (obj) {
    return obj ? Object.keys(obj).map(function (key) {
      var val = obj[key];

      if (Array.isArray(val)) {
        return val.map(function (val2) {
          return encodeURIComponent(key) + '=' + encodeURIComponent(val2);
        }).join('&');
      }

      return encodeURIComponent(key) + '=' + encodeURIComponent(val);
    }).join('&') : '';
  };

  if (typeof define === 'function' && define.amd) {
    define(function() { return hashString; });
  } else if (typeof module !== 'undefined' && module.exports) {
    module.exports = hashString;
  } else {
    window.hashString = hashString;
  }
})();

function animate_svg(val) {
  Snap.animate(100, 0, function (val) {
    var robcmills = Snap.select('#robcmills');
    robcmills.attr({'stroke-dashoffset': val + 'px'});
  }, 2000);   
};

function getHashVal(key) {
  key = key.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
  var regex = new RegExp("[\\#&]" + key + "=([^&#]*)"),
    results = regex.exec(location.hash);
  return results === null ? 
    "" : decodeURIComponent(results[1].replace(/\+/g, " "));
};

function setHashVal(key, val) {
  var parsed = hashString.parse(location.hash);
  parsed[key] = val;
  location.hash = hashString.stringify(parsed);
};

function showTab(tab) {
  $('.nav .tab').removeClass('active');
  $('.content').hide();
  $('.nav .tab[x="' + tab + '"]').addClass('active');
  $('.' + tab).show();
};

function changeToTab(el) {
  if(!$(el).hasClass('active')) {
    var tab = $(el).attr('x');
    showTab(tab);
    setHashVal('x', tab);
    window.scrollTo(0,0);
  }
};


$(document).ready(function() {

  $('.head').click(function(el) {
    animate_svg();
  });

  $('.nav .tab').click(function(el) {
    changeToTab(this);
    animate_svg();
  });

  // $('.cmd-up').click(function() {
  //   window.scrollTo(0,0);
  // });

  var tab = getHashVal('x');
  if(!tab) {
    changeToTab($('.nav .tab:first'));
  } else {
    showTab(tab);
  }

  animate_svg();

});