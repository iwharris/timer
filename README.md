# timer
A no-nonsense nodejs timer

[![npm version](https://badge.fury.io/js/%40iwharris%2Ftimer.svg)](https://badge.fury.io/js/%40iwharris%2Ftimer)

## Installation

```bash
npm install @iwharris/timer
```

## Usage

```javascript
const Timer = require('@iwharris/timer');

const t = new Timer();

t.elapsedMilliseconds();

// 3421
```

## Development

```bash
git clone git@github.com:iwharris/timer.git
cd timer
npm install
```

### Testing

```bash
npm test
```

### Compiling Typescript

```bash
npm build
```