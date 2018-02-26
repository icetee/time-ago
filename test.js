var Timeago = require('./timeago.js')
var ta = new Timeago();
var ta2 = new Timeago({
  ' ago': '',
  ' from now': ' most',
  'right now': 'épp most',
  ' min to read': 'olvasva',
  'Sunday': 'Vasárnap',
  'Monday': 'Hétfő',
  'Tuesday': 'Kedd',
  'Wednesday': 'Szerda',
  'Thursday': 'Csütörtök',
  'Friday': 'Péntek',
  'Saturday': 'Szombat',
  'January': 'Január',
  'February': 'Február',
  'March': 'Március',
  'April': 'Április',
  'May': 'Május',
  'June': 'Június',
  'July': 'Július',
  'August': 'Augusztus',
  'September': 'Szeptember',
  'October': 'Október',
  'November': 'November',
  'December': 'December',
  's': 's',
  'm': 'm',
  'h': 'h',
  'd': 'd',
  'w': 'w',
  'm': 'm',
  'y': 'y',
  'second': 'másodperce',
  'minute': 'perce',
  'hours': 'órája',
  'day': 'napja',
  'week': 'hete',
  'month': 'hónap',
  'years': 'éve',
});

console.log(
  ta.ago(new Date() - 1000), ta.ago(new Date() - 1000) === '1 second ago',
  ta.ago(new Date() - 60000 * 180), ta.ago(new Date() - 60000 * 180) === '3 hours ago',
  new Date(1), ta.ago(new Date(1)), ta.ago(new Date(1)) === '48 years ago'
);

console.log(
  ta.ago(new Date() - 1000, true), ta.ago(new Date() - 1000, true) === '1s',
  ta.ago(new Date() - 60000 * 180, true), ta.ago(new Date() - 60000 * 180, true) === '3h',
  new Date(1), ta.ago(new Date(1), true), ta.ago(new Date(1), true) === '48y'
);

console.log(
  'Today is ' + ta.today()
);

console.log(
  ta.timefriendly('1 hour'), ta.timefriendly('1 hour') === 1000 * 60 * 60,
  ta.timefriendly('2 days'), ta.timefriendly('2 days') === 1000 * 60 * 60 * 48,
  ta.timefriendly('2 weeks'), ta.timefriendly('2 weeks') === 1000 * 60 * 60 * 24 * 14
);

console.log(
  ta.nowfriendly(new Date() - 1000), '[' + (ta.nowfriendly(new Date() - 1000) === 'right now') + ']',
  ta.nowfriendly(new Date() - 6 * 1000), '[' + (ta.nowfriendly(new Date() - 6 * 1000) === 'right now') + ']',
  ta.nowfriendly(new Date() - 60 * 1000), '[' + (ta.nowfriendly(new Date() - 60 * 1000) === 'right now') + ']',
  ta.nowfriendly(new Date() - 61 * 1000), '[' + (ta.nowfriendly(new Date() - 61 * 1000) === ta.ago(new Date() - 60 * 1000)) + ']',
  ta.nowfriendly(new Date() - 61 * 1000), '[' + (ta.nowfriendly(new Date() - 61 * 1000, true) === ta.ago(new Date() - 61 * 1000, true)) + ']',
);

console.log(
  ta2.ago(new Date() - 1000), '[' + (ta2.ago(new Date() - 1000) === '1 másodperce') + ']',
  ta2.ago(new Date() - 60 * 1000), '[' + (ta2.ago(new Date() - 60 * 1000) === '1 perce') + ']',
  ta2.ago(new Date() - 60000 * 180), '[' + (ta2.ago(new Date() - 60000 * 180) === '3 órája') + ']',
  ta2.ago(new Date() - 60000 * 24 * 60), '[' + (ta2.ago(new Date() - 60000 * 24 * 60) === '1 napja') + ']',
  ta2.ago(new Date() - 60000 * 24 * 60 * 7), '[' + (ta2.ago(new Date() - 60000 * 24 * 60 * 7) === '1 hete') + ']',
  new Date(1), ta2.ago(new Date(1)), '[' + (ta2.ago(new Date(1)) === '48 éve') + ']'
);

var i = 0,
  text = '';
while (i++ < 600) text += 'text ';
console.log(text.length, 'chars, min to read', ta.mintoread(text));
