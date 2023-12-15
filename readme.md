# Data Structures and Algorithms

The repository contains tested implementations of common data structures and algorithms.

Implemented with TypeScript, Python, and Golang.

## Testing

### TypeScript

* Use explicit type annotations that won't conflict with other files, such as TreeNode, DequeNode, ListNode
* Write tests with Jest in filename.test.ts files
* Run `pnpm test` to see the coverage report
  
### Python

* Ensure that all the packages are installed: `pip install -r requirements.txt`
* Write tests with PyTest in test_filename.py files
* Run `python -m coverage run --module pytest -v && python -m coverage report -m` to see the coverage report

### Golang

* Change directory where go.mod is present for the file in question
* Write tests with "testing" library in test_filename.go files
* Run `go test -coverprofile=coverage.out` to generate a coverage report
* Run `go tool cover -html=coverage.out` to generate a human-readable coverage report in HTML