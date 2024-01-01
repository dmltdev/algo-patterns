# Algorithm: Divide and Conquer

## Steps

- Divide: Divide the problem into sub-problems with recursion.
- Conquer: Solve the smaller sub-problems recursively. When the subproblem is small enough, solve it directly.
- Combine: Combine the results of the sub-problems that are part of the recursive process to solve the actual problem.

## How Divide-and-Conquer is different from other algorithms?

Divide-and-Conquer:

- It divides a problem into smaller subproblems that are further solved recursively.
- The result of each subproblem is not stored for future reference.
- It is used when the same subproblem is not solved multiple times.

Example:

```typescript
function fib(n: number): number {
  if (n <= 0) return 0;
  if (n === 1) return 1;
  return fib(n - 1) + fib(n - 2);
}
```

Dynamic Approach:

- It tries to find the shortest way to a solution when solving a problem by going from the top down or the bottom up.
- The result of each subproblem is stored for future reference.
- It is used when the result of a subproblem is to be used multiple times in the future.

Example:

```typescript
const mem: Record<number, number> = {};

function fib(n: number): number {
  if (n in mem) return mem[n];

  switch (true) {
    case n <= 0:
      mem[n] = 0;
      break;
    case n === 1:
      mem[n] = 1;
      break;
    default:
      mem[n] = fib(n - 1) + fib(n - 2);
      break;
  }
  return mem[n];
}
```

## Advantages of Divide-and-Conquer Algorithm

- Suitable for multiprocessing systems.
- Makes efficient use of memory caches.
- It simplifies common problems such as Tower of Hanoi, multiplication of two matrices, binary search, merge sort, quicksort, and so on.
