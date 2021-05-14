### What is OOP ###

Object Oriented Programming (OOP) Is a paradim of programming aside functional which allow us to create class
which would serve as a blue print for creating an instance which would then serve as the actual image and the act of doing this is called INSTANTIATION. There are 4 major pillars of OOP which are

1. ABSTRACTION
2. ENCAPSULATION
3. INHERITANCE
4. POLYMORPHISM

### ABSRACTION ##
It is a way of exposing the only core implementations of a class while others which requires less user interaction are hidden.

### ENCAPSULATION ##
The process of making some implementation of a class private so that another class won't manipulate it, is called encapsulation and this is done majorly to prevent bugs. eg addEventListener() function, some of it properties are encapsulated.

### INHERITANCE ##
Just in case there are same properties which are particular to two or more classes, classes can make use of properties of one another by inheritance and the class (Child class) does that by extending the other class (Parent class) to gain acess to all it properties.

### POLYMORPHISM ##
When a child class extends it parent class, ie inherit from it, it can as well modifiel it method to have different logic, which will in place override the main method. This is known as POLYMORPHISM.


                               #### WAYS TO CREATE OOP IN JAVASCRIPT

1. Constructor Function
2. ES6 Classes
3. Object.create()

                             ### PROTOTYPE INHERITANCE
Instead of specifing methods right inside the constructor function which is a bad practice, make use of prototype on the constructor which will make it available for all instance but will not be available as it property eg Person.prototype.calcAge()

## CHECK PROTOTYPE
To check for the prototype attached to an instance, make use of instance__proto__ or
Person.prototype.isPrototypeOf(instance);

## PROPERTY AS PROTOTYPE
Aside adding method with prototype, other properties can also be added eg Person.prototype.address = ikeja;
hasOwnProperty() help check where a property actually belongs to (whelther through direct or prototype). eg instance.hasOwnProperty(address) will return FALSE because it was adeded through prototype.

                            ### CLASS INHERITANCE
## CONSTRUCTOR FUNCTION
For two classes to inherit from each other, we must identify the parent class and also the child class, then from the child class we can have addition variable aside the ones inherit from the parent eg Parent could have 2 direct properties while child has more eg 3... To get this property from parent do Parent.call(this,otherVariable). To inherit other prototypes, do child.prototype = Object.create(Parent.prototype);

## ES6 CLASS
For child class to inherit from Parent class, make use of extends to link them and make use of super() to get the Parent variable eg Child extends Parent. Then seper(parentVar1,parenVar2);

                            ## ENCAPSULATION
To secure data which are specific to a class either a variable or a method, the below could be the scenerio.
1. Private fields : Make use of #variableName to make a viable private within a class
2. Public fields : Similar to the one define in a class constructor
3. Puplic methods : All methods specifield on class by default are public methods
4. private methods : To make a method private, then make use of #methodName() by putting # symbol;

                            ### Chainnig Methods
To make method chaainable on a class instance for example, return this keyword at the end of the method
eg calcAge(){
    something here..
    return this
}
