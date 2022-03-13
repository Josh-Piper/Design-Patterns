# JavaScript Design Patterns

The main resources I have used is from `DevSage` from YouTube.

## Structural

Deals with the relationships between other objects.

### Adapter

### Facade

Hiding code that isn't directly tied to anything. For example, an API will have a fascade between the implementation and the API.
You might already have the pre-set content type, method etc.

### Bridge

## Creational

Object creation mechanism.
Creating many different types of objects at
a bulk level.

### Singleton

One instance of a class acting a global centralised store.

### Factory

Create different types of objects from a single factory. Used for when classes can be classed together.

For example, an animal factory might create a dog, or a cat via `animalFactory.create(ANIMAL.DOG)` or `animalFactory.create(ANIMAL.CAT)`

### Abstract Factory

Produce a class without specifying its
specific class name.

### Bridge

## Behavioural

Algorithms and assignment of responsibility between objects.

### Strategy

### Observer

### Iterator

### Command

A command can be executed and undone. It is best for abstracting code away and keeping things clean. Especially when you will use commands together.

### Mediator

### Observer

### Visitor
