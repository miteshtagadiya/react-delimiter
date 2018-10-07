# react-delimiter

[![npm](https://img.shields.io/npm/v/react-delimiter.svg)](https://www.npmjs.com/package/react-delimiter) 
[![npm](https://img.shields.io/npm/dw/react-delimiter.svg)](https://www.npmjs.com/package/react-delimiter)
![npm](https://img.shields.io/npm/l/react-delimiter.svg)


Array Delimiter(Deliminate last number or string with "and" or "or")


## Demo
[Click Here](https://miteshtagadiya.github.io/react-delimiter/)

## Installation

1.  Install React Delimiter as a dependency

```bash
# NPM
$ npm install react-delimiter
```

2.  Import the `react-delimiter` module

```javascript
// ES6
import { delimiter } from "react-delimiter";
```


## Example
```jsx
import { delimiter } from 'react-delimiter';

render() {
    <h4>{delimiter([1, 2, 3], "and")}</h4>
  }

```


## Parameters
```javascript
{
    array=[1,2,3],
    string= "and" or "or"
}
```

|Input                       |Output    |        
|----------------------------|----------|
|delimiter([1, 2, 3], "and") |1, 2 and 3| 
|delimiter([1, 2, 3], "or")  |1, 2 or 3 |
|delimiter([1, 2], "or")     |1 or 2    |
|delimiter([1, 2], "and")    |1 and 2   |
|delimiter([1], "or")        |1         |
|delimiter([1], "and")       |1         |


## Parameters Details

* `array` - Array of Numbers or Strings
* `String` - String (Deliminate number or string by this string)