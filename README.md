# Universe Utilities for blaze

```sh
$ meteor add universe:utilities-blaze
```

## Template Helpers

### Compare helpers 
- eq,
- eqWeak,
- gt,
- gte,
- lt,
- lte,
- ne

### Logic helpers 
- or,
- and

### Developers helpers
- log
- logTimeStart 
template version of console.time
- logTimeEnd
template version of console.timeEnd

### Session helpers
- sessionGet
- sessionEquals

## Other helpers
- routeIs
  work with Iron Router and FlowRouter
- formatDateMoment (value, format)
- extendOuterContext
  When you need to pass arguments to template and keep current context at the same tame use:
  {{#with extendOuterContext ..}}
  
- extendContext
 It will extend current context with given arguments 
 key/value pairs given as key=value or "key" value into helper function

```
{{>templateName extendContext "key1" value1 "key2" value2}}
// or
{{>templateName extendContext key1=value1 key2=value2}}
```

- getLoggedIn 
returns UniUser object
- getLoggedInId

- concat
- UniUtils 
access to object UniUtils from template
