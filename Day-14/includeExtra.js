var includeObj = true;
var baseObj = {a:1,b:2,c:3};
var extraObj = includeObj?{d:4,e:5,f:6}:{};
var finalObj = {...baseObj,...extraObj};
console.log(finalObj);