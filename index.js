function theBeatlesPlay(musicians, instruments) {
  var newArray = [];
  for (var i = 0; i < musicians.length; i++) {
    newArray.push(musicians[i] + " plays " + instruments[i]);
  }
  return newArray;
}

function johnLennonFacts(facts) {
  var surpriseFacts = [];
  while (facts.length > 0) {
    surpriseFacts.unshift(facts.pop() + "!!!");
  }
  return surpriseFacts;
}

function iLoveTheBeatles(num) {
  var array = [];
  do {
    array.push("I love the Beatles!");
    num++;
  } while (num < 15);
  return array;
}
