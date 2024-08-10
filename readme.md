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
  - [Testing](#testing)
    - [TypeScript](#typescript)
    - [Python](#python)
    - [Golang](#golang)

**Status: In Progress.**

The repository contains tested implementations of common data structures, algorithms, and design patterns.

Languages: TypeScript, Python, Golang, and C++.

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

## Search Algorithms

### Linear Search

- Sequentially checks each element until the target is found.
- Time complexity: O(n)O(n).
- Works on unsorted or sorted lists.

### Binary Search

- Divides the list in half to find the target in a sorted list.
- Time complexity: O(log⁡n)O(logn).
- Requires the list to be sorted.

### Exponential Search

- Combines binary search with a preliminary search that quickly narrows down the range.
- Time complexity: O(log⁡n)O(logn).
- Efficient for large, sorted lists.

## Sorting Algorithms

### Bubble Sort

- Repeatedly swaps adjacent elements if they are in the wrong order.
- Time complexity: O(n2)O(n2).
- Simple but inefficient for large lists.

### Merge Sort

- Divides the list into smaller sublists, sorts them, and then merges them.
- Time complexity: O(nlog⁡n)O(nlogn).
- Stable and efficient, good for large lists.

### Quick Sort

- Picks a pivot element and partitions the list around it, recursively sorting the partitions.
- Time complexity: O(nlog⁡n)O(nlogn) on average, O(n2)O(n2) in the worst case.
- Often faster in practice but unstable.

## Data Structures

- Sentinels - in the context of data structures, particularly linked lists, "sentinels" are special nodes used as boundary markers.

## Design Patterns

## Structure Similarities

### Adapter - Facade - Proxy

![Adapter-Facade-Proxy](https://github.com/dmltdev/algo-patterns/tree/main/doc/adapter-facade-proxy.gif "Left-Right symbol = wrapper/wrappee or delegation or 'has a' relationship")

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
