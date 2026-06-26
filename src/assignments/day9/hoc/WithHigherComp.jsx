

const WithHigherComponent = (WrappedComponent) => (props)=> {
  return <WrappedComponent {...props}/>
}

export default WithHigherComponent