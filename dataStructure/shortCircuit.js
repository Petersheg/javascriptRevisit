//Short circuit means using AND (&&) operator and OR operator to execute some truthy or Falsy value eg

/* OR Operator returns the first Truthy value and disregard others*/ 
console.log('New'||''|| 4 || false);

/*AND Operator will return the first Falsy value and disregard others*/
console.log('k'&&'New'&& false && 9); 