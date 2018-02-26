# Timeago

Simple timeago function takes same params as `new Date(...)`

```javascript
const ta = require('./time-ago.js')  // node.js
var ta = Timeago();	              // browser
```

### ta.ago(..., [short])

```javascript
ta.ago(new Date() - 1000);  // =>  "1 second ago"
ta.ago(new Date() - 2000);  // =>  "2 seconds ago"

ta.ago(1); // =>  "48 years ago"

// takes twitter's created_at date format, in your timezone
ta.ago('Sun Jun 28 19:44:05 +0000 2013'); // => "2 days ago"

// and UTC
ta.ago('1997-07-16T19:20+01:00'); // => "16 years ago"

// with optional short parameter
ta.ago(new Date() - 1000, true);  // =>  "1s"
ta.ago(new Date() - 1000 * 60, true); // => "1m"
ta.ago(new Date() - 1000 * 60 * 60, true); // => "1h"

```

### ta.today()

```javascript
ta.today() // function shows Day, Month, Date, Yr    
// ==> 'Monday, June 1, 1970'    
```

### ta.nowfriendly(..., [short])

```javascript
ta.nowfriendly(new Date() - 1000) // ==> 'right now'
ta.nowfriendly(new Date() - 60 * 1000) // ==> "1 minutes ago"
```

### ta.timefriendly('x period')

```javascript
ta.timefriendly('1 hour')  // convert to ms: seconds, minutes, hours, days, weeks, months, years ==> 3600000
// ==> 3600000

ta.timefriendly('1 hour')  // convert to ms: seconds, minutes, hours, days, weeks, months, years
// ==> 3600000
```

### ta.mintoread(text, [altcmt, wpm])
Cool Medium like 'x min to read' feature

```javascript
ta.mintoread('six hundred words of text')  // calculate based on 200 wpm reading speed
// ==> "3 min to read"

ta.mintoread('six hundred words of text', ' minutes to finish')  // optional alternate comment
// ==> "3 minutes to finish"

ta.mintoread('six hundred words of text', null, 300)  // alternate wpm
// ==> "2 min to read"
```

# Translations
Only add `Timeago` parameter.

```javascript
var ta = Timeago({
  ' ago': '',
  ' from now': ' most',
  'right now': 'épp most',
  ' min to read': 'olvasva',

  'Monday': 'Hétfő',
  'Tuesday': 'Kedd',
  'Wednesday': 'Szerda',
  'Thursday': 'Csütörtök',
  'Friday': 'Péntek',
  'Saturday': 'Szombat',
  'Sunday': 'Vasárnap',

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
```


# Thanks
Chris Borkert [@digplan](https://github.com/digplan)
