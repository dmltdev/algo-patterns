# Data Structures and Algorithms

The repository contains tested implementations of common data structures and algorithms.

Implemented with TypeScript, Python, Golang, and C++.

## Testing

### TypeScript

* Use explicit type annotations that won't conflict with other files, such as TreeNode, DequeNode, ListNode
* Write tests with Jest in filename.test.ts files
* Run `pnpm test` to see the coverage report
  
### Python

* Ensure that all the packages are installed: `pip install -r requirements.txt`
* Write tests with PyTest in test_filename.py files
* Run `python -m coverage run --module pytest -v && python -m coverage report -m` to see the coverage report
* Or run `pnpm py-test`

### Golang

* Change directory where go.mod is present for the file in question
* Write tests with "testing" library in test_filename.go files
* Run `go test -coverprofile=coverage.out` to generate a coverage report
* Run `go tool cover -html=coverage.out` to generate a human-readable coverage report in HTML

### C++

* To
* be
* added

---

## Three rules of determining Big O

* Algorithm grows as the size of the input grows
* Constants are dropped
* Worst case is usually the way we measure

## Algorithm Concepts

### In-place vs Out-of-place Algorithms

**In-place algorithms:**

* Have constant space complexity O(1).
* Transform input using no auxiliary data structure; however, a small amount of extra storage space is allowed for auxiliary variables. In simple words, the input is overwritten and no extra data structures are required.
  
**Out-of-place algorithms:**

* Have greater than constant space complexity, e.g.: linear time or quadratic time.
* Requires additional data structures when performing an operation, such as sorting;

### Algorithm stability: Stable & Unstable

**Stable algorithms:**

* preserve the order of records with equal keys. It means that two elements with equal values will appear in the same order in the sorted output as they appear in the unsorted input array.
* examples: bubble sort, merge sort, radix sort

**Unstable algorithms:**

* does not preserver the order of records with equal keys.
* examples: selection sort, heap sort, quick sort

### Comparison algorithm: comparison-type & non-comparison-type

* 1
* 2
* 3

## Algorithm Types

### Search Algorithms

* Linear Search
* Binary Search
* Exponential Search

### Sorting Algorithms

## Data Structures
