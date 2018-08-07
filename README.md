<h1 align="center">
    <a href="https://github.com/vazco">vazco</a>/Universe Utilities for Blaze
</h1>

&nbsp;

```sh
$ meteor add universe:utilities-blaze
```

## Template Helpers

### Compare helpers 
- eq `{{#if eq 'a' 'a'}} {{/if}}`,
- eqWeak,
- gt,
- gte,
- lt,
- lte,
- ne

### Logic helpers 
- or `{{#if or value1 value2}} {{/if}}`,
- and

### Developers helpers
- log `{{log .}}`
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

- getParentTemplateInstance (templateName, currentTemplateInstance)
Gets instance parent of current template it works everywhere where Template.instance() works

- getTemplateInstanceByDOM(domElemOrJQuery)
Gets instance of template by DOM element useful when you need a template instance which is not your parent template

## License

<img src="https://vazco.eu/banner.png" align="right">

**Like every package maintained by [Vazco](https://vazco.eu/), Universe Utilities for Blaze is [MIT licensed](https://github.com/vazco/uniforms/blob/master/LICENSE).**
