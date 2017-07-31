# vegeta.js
[![npm](https://img.shields.io/npm/v/vegeta.js.svg)](https://www.npmjs.com/package/vegeta.js)
![license](https://img.shields.io/github/license/diewland/vegeta.js.svg)

JavaScript for Bulma.io

## demo
:zap: <a href='https://diewland.github.io/vegeta.js/'>LIVE</a>

## example
```javascript

// bind burger, notification
Vegeta.bind_nav_burger();
Vegeta.bind_notif('notif_here');

// fire notifications
Vegeta.notif('Default message');
Vegeta.notif_default('Default message'); // same as above line
Vegeta.notif_info('Info message');
Vegeta.notif_primary('Primary message');
Vegeta.notif_success('Success message');
Vegeta.notif_warning('Warning message');
Vegeta.notif_danger('Danger message');
```

## installation
```npm install vegeta.js```
