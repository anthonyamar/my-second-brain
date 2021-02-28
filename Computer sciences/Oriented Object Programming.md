---
aliases: ["OOP"]
tags: 
- "#programming"
- "#computer-sciences"
---

Oriented Object Programming (OOP) is a programming paradigm based on the concept of objects. 

As my main programming language is #Ruby, it's obviously the paradigm I'm the most familiar with : one of the biggest principle in Ruby is that "Everything is object". 

I like to see objects as abstraction of real world things, with their attributes and methods. 

```ruby
class Dog < Animals
	
	attr_accessor :race, :color
	
	def bark
		"Wouaf"
	end
	
end

dog = Dog.new
puts dog.bark
# => Wouaf
dog.race = "Rotweiller"
puts dog.race
# => Rotweiller
```

Here's a basic Dog object with two attributes, that represent what a dog can be, and a method that represent what a dog can do. 

This dog extend from the Animal object, which have his own set of attributes that represent what an animal can be, and a set of methods that represent what it can do. 

```ruby
class Animals
	
	attr_accessor :size
	
	def eat
		"Eating..."
	end
	
	def reproduce
		"Reproducing..."
	end
	
end

animal = Animal.new
puts animal.eat
# => Eating...
```

By extending objects, the childs can use the methods of parents. This keep a clean code and satisfy the first principle of [SOLID](SOLID.md) which is the [Single responsability principle](Single%20responsability%20principle.md)

```Ruby
dog = Dog.new # From the class Dog
puts dog.eat # Using the method from Animal class on Dog
# => "Eating..."
```
