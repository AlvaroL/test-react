const style = {
  position: 'absolute',
  color: 'red',
  fontSize: '3rem',
}
function MyJsxComponent() {
  return (<div style={style}>External React jsx component</div>);
}

module.exports = {
  MyJsxComponent
}