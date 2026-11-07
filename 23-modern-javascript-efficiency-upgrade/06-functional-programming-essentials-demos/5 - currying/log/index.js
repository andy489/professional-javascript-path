function curry(fn) {
  return function(one) {
    return function(two) {
      return fn(one, two);
    };
  };
}

function log(level, message) {
    console.log(`[${level}] ${message}`);
}

const curryLog = curry(log);

curryLog('critical')('event does not exist');

const criticalLog = curryLog('critical');
criticalLog('user does not exist');
