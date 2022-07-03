## Concept

Serverless = FaaS + BaaS

FaaS: Function as a Service

BaaS: Backend as a Service



## Tecent - CloudBase

### Cloud function Example

```js
'use strict';
exports.main = async (event, context) => {
    console.log("Hello World")
    console.log(event)
    console.log(event["non-exist"])
    console.log(context)
    return event
};

```

### Access Services