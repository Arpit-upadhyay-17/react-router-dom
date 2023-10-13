import { Link } from 'react-router-dom'

const NotFound = () => {


  return (
    <div className='NotFound' >
        <h1> 404 Not Found </h1>
        <br />
        <p>Go to  <Link to="/" >Home</Link>  </p>
    </div>
  )
}

export default NotFound;