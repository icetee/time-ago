"use strict";

var Timeago = function(translations) {

  var o = {
    second: 1000,
    minute: 60 * 1000,
    hour: 60 * 1000 * 60,
    day: 24 * 60 * 1000 * 60,
    week: 7 * 24 * 60 * 1000 * 60,
    month: 30 * 24 * 60 * 1000 * 60,
    year: 365 * 24 * 60 * 1000 * 60
  };
  var obj = {};

  obj.translations = (typeof translations === 'object') ? translations : {};

  obj.__ = function(key) {
    return (typeof this.translations[key] !== 'undefined') ? this.translations[key] : key;
  }

  obj.ago = function(nd, s) {
    var r = Math.round,
        dir = this.__(' ago'),
      pl = function(v, n) {
        return (s === undefined) ? n + ' ' + obj.__(v + (n > 1 ? obj.__('s') : '')) + dir : n + obj.__(v.substring(0, 1));
      },
      ts = Date.now() - new Date(nd).getTime(),
      ii;

    if (ts < 0 ) {
      ts *= -1;
      dir = this.__(' from now');
    }

    for (var i in o) {
      if (r(ts) < o[i]) return pl(ii || this.__('m'), r(ts / (o[ii] || 1)))
      ii = i;
    }

    return pl(i, r(ts / o[i]));
  }

  obj.today = function() {
    var now = new Date();
    var Weekday = [
      this.__("Sunday"),
      this.__("Monday"),
      this.__("Tuesday"),
      this.__("Wednesday"),
      this.__("Thursday"),
      this.__("Friday"),
      this.__("Saturday")
    ];
    var Month = [
      this.__("January"),
      this.__("February"),
      this.__("March"),
      this.__("April"),
      this.__("May"),
      this.__("June"),
      this.__("July"),
      this.__("August"),
      this.__("September"),
      this.__("October"),
      this.__("November"),
      this.__("December")
    ];
    return Weekday[now.getDay()] + ", " + Month[now.getMonth()] + " " + now.getDate() + ", " + now.getFullYear();
  }

  obj.timefriendly = function(s) {
    var t = s.match(/(\d).([a-z]*?)s?$/);
    return t[1] * eval(o[t[2]]);
  }

  obj.nowfriendly = function(nd, s) {
    var ts = Date.now() - new Date(nd).getTime();

    if (ts <= o.minute) {
      return this.__('right now');
    }

    return obj.ago(nd, s);
  }

  obj.mintoread = function(text, altcmt, wpm) {
    var m = Math.round(text.split(' ').length / (wpm || 200));
    return (m || '< 1') + (altcmt || this.__(' min to read'));
  }

  return obj;
}

if (typeof module !== 'undefined' && module.exports)
  module.exports = Timeago;
