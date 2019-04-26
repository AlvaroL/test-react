Example of how to create a standalone react component that can be imported in an app that uses a script tag to load react.

Run `npm install` and then `npm run build` in order to generate the artifact. The script can be included into another application like:

```html
<script src="my/generated/build/index.js" type="text/javascript"></script>
```

It exposes an object with like:

```javascript
var MyReactLibrary = {
  MyJsxComponent
}
```

Then in the other application you have to load the React element like:

```javascript
ReactDOM.render(
  React.createElement(MyReactLibrary.MyJsxComponent),
  document.getElementById('react-root')
);
```