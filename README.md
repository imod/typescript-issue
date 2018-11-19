# typescript-issue

running `tsc --noEmit` causes this error - why??

```
platypus:my-project domi$ tsc --noEmit
node_modules/rxjs/internal/observable/dom/AjaxObservable.d.ts:16:23 - error TS2304: Cannot find name 'XMLHttpRequest'.

16     createXHR?: () => XMLHttpRequest;
                         ~~~~~~~~~~~~~~

node_modules/rxjs/internal/observable/dom/AjaxObservable.d.ts:102:10 - error TS2304: Cannot find name 'XMLHttpRequest'.

102     xhr: XMLHttpRequest;
             ~~~~~~~~~~~~~~

node_modules/rxjs/internal/observable/dom/AjaxObservable.d.ts:112:44 - error TS2304: Cannot find name 'XMLHttpRequest'.

112     constructor(originalEvent: Event, xhr: XMLHttpRequest, request: AjaxRequest);
                                               ~~~~~~~~~~~~~~

node_modules/rxjs/internal/observable/dom/AjaxObservable.d.ts:124:10 - error TS2304: Cannot find name 'XMLHttpRequest'.

124     xhr: XMLHttpRequest;
             ~~~~~~~~~~~~~~

node_modules/rxjs/internal/observable/dom/AjaxObservable.d.ts:135:32 - error TS2304: Cannot find name 'XMLHttpRequest'.

135     new (message: string, xhr: XMLHttpRequest, request: AjaxRequest): AjaxError;
                                   ~~~~~~~~~~~~~~

node_modules/rxjs/internal/observable/dom/AjaxObservable.d.ts:141:15 - error TS2304: Cannot find name 'XMLHttpRequest'.

141     new (xhr: XMLHttpRequest, request: AjaxRequest): AjaxTimeoutError;
                  ~~~~~~~~~~~~~~

platypus:my-project domi$
```
