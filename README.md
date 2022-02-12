# PJ - A tiny package.json convenience utility

PJ is a small utility for exploring package.json's from the command line.

If you've ever found yourself bouncing between projects a having to open package.json over and over to check script names or other details, you might find PJ helpful.

### Installation
`npm i -g @emlindgren/pj`

### Usage
PJ is very simple:

- `pj` prints all fields available inside the package.json in the current directory
- `pj -a` prints the entire contents of package.json
- `pj [term]` prints the contents of a specific field. `term` does not have to be complete, pj looks for word-start matches, so `pj sc` will likely print your package.json scripts, while `pj des` will print your package.json description
