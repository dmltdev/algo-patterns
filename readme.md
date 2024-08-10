# Data Structures and Algorithms

- [Data Structures and Algorithms](#data-structures-and-algorithms)
  - [Three rules of determining Big O](#three-rules-of-determining-big-o)
  - [Algorithm Concepts](#algorithm-concepts)
    - [In-place vs Out-of-place Algorithms](#in-place-vs-out-of-place-algorithms)
    - [Algorithm stability: Stable \& Unstable](#algorithm-stability-stable--unstable)
    - [Comparison algorithm: comparison-type \& non-comparison-type](#comparison-algorithm-comparison-type--non-comparison-type)
  - [Algorithm Types](#algorithm-types)
    - [Search Algorithms](#search-algorithms)
      - [Linear Search](#linear-search)
      - [Binary Search](#binary-search)
      - [Exponential Search](#exponential-search)
    - [Sorting Algorithms](#sorting-algorithms)
      - [Bubble Sort](#bubble-sort)
      - [Merge Sort](#merge-sort)
      - [Quick Sort](#quick-sort)
  - [Data Structures](#data-structures)
  - [Design Patterns](#design-patterns)
    - [Structure Similarities](#structure-similarities)
      - [Adapter - Facade - Proxy](#adapter---facade---proxy)
      - [Strategy - Factory Method - Visitor](#strategy---factory-method---visitor)
      - [Builder - State - Bridge - Observer](#builder---state---bridge---observer)
      - [Composite - Decorator - Chain of responsibility - Interpreter](#composite---decorator---chain-of-responsibility---interpreter)
      - [Command - Iterator - Mediator - Memento - Prototype](#command---iterator---mediator---memento---prototype)
      - [Abstract Factory - Template Method - Flyweight - Singleton](#abstract-factory---template-method---flyweight---singleton)
  - [Testing](#testing)
    - [TypeScript](#typescript)
    - [Python](#python)
    - [Golang](#golang)

The purpose of the repository is to write my own implementations of DSA and DP in various languages for learning purposes.

The repository includes tested implementations of data structures, algorithms, and design patterns.

**Status: In Progress.**

**DISCLAIMER**: Explanations below are based on numerous resources and I do not claim images and sayings below as my own. Please find the rightful authors here:

- [Vince Huston](http://www.vincehuston.org/dp/) | Data and images for design patterns
- [Programiz](https://www.programiz.com/) | Data for DSA
- [Refactoring Guru](https://refactoring.guru/) | Data for DSA and DP

**Languages**: TypeScript, Python, Golang, and C++.

## Three rules of determining Big O

- Algorithm grows as the size of the input grows
- Constants are dropped
- Worst case is usually the way we measure

## Algorithm Concepts

### In-place vs Out-of-place Algorithms

**In-place algorithms:**

- Have constant space complexity O(1).
- Transform input using no auxiliary data structure; however, a small amount of extra storage space is allowed for auxiliary variables. In simple words, the input is overwritten and no extra data structures are required.

**Out-of-place algorithms:**

- Have greater than constant space complexity, e.g.: linear time or quadratic time.
- Requires additional data structures when performing an operation, such as sorting;

### Algorithm stability: Stable & Unstable

**Stable algorithms:**

- preserve the order of records with equal keys. It means that two elements with equal values will appear in the same order in the sorted output as they appear in the unsorted input array.
- examples: bubble sort, merge sort, radix sort

**Unstable algorithms:**

- does not preserver the order of records with equal keys.
- examples: selection sort, heap sort, quick sort

### Comparison algorithm: comparison-type & non-comparison-type

Comparison-type:

- sort elements by comparing pairs and deciding their order based on these comparisons.
- the best average time complexity for these is O(nlog⁡n).
- examples: quicksort, mergesort, heapsort.

Non-comparison-type:

- sort elements without directly comparing them, often using properties like digits or counts.
- can achieve better time complexity, often O(n)O(n) for specific scenarios.
  examples: counting sort, radix sort, bucket sort.

## Algorithm Types

### Search Algorithms

#### Linear Search

- Sequentially checks each element until the target is found.
- Time complexity: O(n)O(n).
- Works on unsorted or sorted lists.

#### Binary Search

- Divides the list in half to find the target in a sorted list.
- Time complexity: O(log⁡n)O(logn).
- Requires the list to be sorted.

#### Exponential Search

- Combines binary search with a preliminary search that quickly narrows down the range.
- Time complexity: O(log⁡n)O(logn).
- Efficient for large, sorted lists.

### Sorting Algorithms

#### Bubble Sort

- Repeatedly swaps adjacent elements if they are in the wrong order.
- Time complexity: O(n2)O(n2).
- Simple but inefficient for large lists.

#### Merge Sort

- Divides the list into smaller sublists, sorts them, and then merges them.
- Time complexity: O(nlog⁡n)O(nlogn).
- Stable and efficient, good for large lists.

#### Quick Sort

- Picks a pivot element and partitions the list around it, recursively sorting the partitions.
- Time complexity: O(nlog⁡n)O(nlogn) on average, O(n2)O(n2) in the worst case.
- Often faster in practice but unstable.

## Data Structures

- Sentinels - in the context of data structures, particularly linked lists, "sentinels" are special nodes used as boundary markers.

## Design Patterns

### Structure Similarities

#### Adapter - Facade - Proxy

![Adapter-Facade-Proxy](https://github.com/dmltdev/algo-patterns/blob/main/doc/adapter-facade-proxy.gif "Left-Right symbol = wrapper/wrappee or delegation or 'has a' relationship")

- Adapter: wrap a legacy object that provides an incompatible interface with an object that supports the desired interface
- Facade: wrap a complicated subsystem with an object that provides a simple interface
- Proxy: wrap an object with a surrogate object that provides additional functionality

#### Strategy - Factory Method - Visitor

![Strategy-Factory Method-Visitor](https://github.com/dmltdev/algo-patterns/blob/main/doc/strategy-factory-visitor.gif "Up-Down symbol = inheritance hierarchy (promote interface to a base class and bury implementation alternatives in derived classes)")

- Strategy: define algorithm interface in a base class and implementations in derived classes
- Factory Method: define "createInstance" placeholder in the base class, each derived class calls the "new" operator and returns an instance of itself
- Visitor: define "accept" method in first inheritance hierarchy, define "visit" methods in second hierarchy a.k.a. "double dispatch"

#### Builder - State - Bridge - Observer

![Builder - State - Bridge - Observer](https://github.com/dmltdev/algo-patterns/blob/main/doc/builder-state-bridge-observer.gif "Category: a wrapper wraps an inheritance hierarchy")

- Builder: the "reader" delegates to its configured "builder" ... each builder corresponds to a different representation or target
- State: the FiniteStateMachine delegates to the "current" state object, and that state object can set the "next" state object
- Bridge: the wrapper models "abstraction" and the wrappee models many possible "implementations" ... the wrapper can use inheritance to support abstraction specialization
- Observer: the "model" broadcasts to many possible "views", and each "view" can dialog with the "model"

#### Composite - Decorator - Chain of responsibility - Interpreter

![Composite - Decorator - Chain of responsibility - Interpreter](https://github.com/dmltdev/algo-patterns/blob/main/doc/composite-decorator-responsibility-interpreter.gif "Category: recursive composition")

- Composite: derived Composites contain one or more base Components, each of which could be a derived Composite
- Decorator: a Decorator contains a single base Component, which could be a derived ConcreteComponent or another derived Decorator
- Chain of Responsibility: define "linked list" functionality in the base class and implement "domain" functionality in derived classes
- Interpreter: map a domain to a language, the language to a recursive grammar, and the grammar to the Composite pattern

#### Command - Iterator - Mediator - Memento - Prototype

![Command - Iterator - Mediator - Memento - Prototype](https://github.com/dmltdev/algo-patterns/blob/main/doc/command-iterator-mediator-memento-prototype.gif "Cloud symbol = promote X to 'full object status'")

- Command: encapsulate an object, the method to be invoked, and the parameters to be passed behind the method signature "execute"
- Iterator: encapsulate the traversal of collection classes behind the interface "first..next..isDone"
- Mediator: decouple peer objects by encapsulating their "many to many" linkages in an intermediary object
- Memento: encapsulate the state of an existing object in a new object to implement a "restore" capability
- Prototype: encapsulate use of the "new" operator behind the method signature "clone" ... clients will delegate to a Prototype object when new instances are required

#### Abstract Factory - Template Method - Flyweight - Singleton

![Abstract Factory - Template Method - Flyweight - Singleton](https://github.com/dmltdev/algo-patterns/blob/main/doc/abstractfactory-templatemethod-flyweight-singleton.gif "Category: miscellaneous")

- Abstract Factory: model "platform" (e.g. windowing system, operating system, database) with an inheritance hierarchy, and model each "product" (e.g. widgets, services, data structures) with its own hierarchy. Platform derived classes create and return instances of product derived classes
- Template Method: define the "outline" of an algorithm in a base class. Common implementation is staged in the base class, peculiar implementation is represented by "place holders" in the base class and then implemented in derived classes
- Flyweight: when dozens of instances of a class are desired and performance boggs down, externalize object state that is peculiar for each instance, and require the client to pass that state when methods are invoked
- Singleton: engineer a class to encapsulate a single instance of itself, and "lock out" clients from creating their own instances

## Testing

### TypeScript

- Use explicit type annotations that won't conflict with other files, such as TreeNode, DequeNode, ListNode
- Write tests with Jest in filename.test.ts files
- Run `pnpm test` to see the coverage report

### Python

- Ensure that all the packages are installed: `pip install -r requirements.txt`
- Write tests with PyTest in test_filename.py files
- Run `python -m coverage run --module pytest -v && python -m coverage report -m` to see the coverage report
- Or run `pnpm py-test`

### Golang

- Change directory where go.mod is present for the file in question
- Write tests with "testing" library in test_filename.go files
- Run `go test -coverprofile=coverage.out` to generate a coverage report
- Run `go tool cover -html=coverage.out` to generate a human-readable coverage report in HTML
