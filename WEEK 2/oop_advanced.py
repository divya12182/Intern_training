# Animals class
class Animal:
    def speak(self):
        print("Animals makes a sounds")
class Dog (Animal):
    def speak(self):
        print("Dog says Bark")
class Cat (Animal):
    def speak(self):
        print("Cat says Meow")

dog = Dog()
cat = Cat()

dog.speak()
cat.speak()

# Shape class
class shape:
    def area(self):
        print("shape")
class rectangle(shape):
    def __init__ ( self,length ,width):
        self.length =length
        self.width = width
    def area(self):
        print("area of rectangle =",self.length *self.width)

class circle (shape):
    def __init__ (self ,radius ):
        self.radius = radius
    def area(self):
        print("area of circle =",3.14 *(self.radius**2))

r_shape = rectangle(12,10)
c_shape = circle(5)  

r_shape.area()
c_shape.area()

# loop through polymorphism
    
class Animal:
    def speak(self):
        print("Animals makes a sounds")
class Dog(Animal):
    def speak(self):
        print("Dog says Bark")
class Cat(Animal):
    def speak(self):
        print("Cat says Meow")
dog = Dog()
cat = Cat()

dog.speak()
cat.speak()
        
Animals = [ Dog(), Cat()]
for Animal in Animals:
    Animal.speak()

