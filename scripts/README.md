# Ferocia code exercise

## Installation

Note: All commands are run from the root of the repo.

This repo runs using [pnpm](https://pnpm.io/).

Install packages (prerequisite):

```
pnpm i
```

To run the Term Deposit script:

```
pnpm run:term-deposit
```

To run tests:

```
pnpm test
```

To run linting:

```
pnpm lint
```

## Notes

Reference Site: https://www.bendigobank.com.au/calculators/deposit-and-savings/

### Implementation

- For simplicity, I have restricted the scope to only allowing the Investment Term to be in years and not months
  - This was due to seeing the example in the brief use years, but in hindsight technically months would have been more scalable to implement
- All Interest Payment values are rounded to 2 decimal places
- Interest Rate is assumed to only allow up to 2 decimal places as a percentage (therefore when converted away from %, allows up to 4 decimal places)
- The final balance is rounded to a whole dollar amount to replicate the Reference Site
- Values for test cases have been taken from the Reference Site

### CLI

- Min/Max values are a replication of the restrictions seen on the Reference Site (with the exception of Investment Term as I did not implement months)
- The `prompts` library appears to not be the best UX when entering input (at least in my testing), but it handles most validation out of the box and is a decent enough UI (as opposed to building the CLI manually using `readline`). I tried to use `@topcli/prompts` as it is better maintained, but ran into errors trying to run it (it appears to be related to Node versions, but I haven't tested it yet)
