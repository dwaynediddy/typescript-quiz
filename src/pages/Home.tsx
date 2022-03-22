import React from 'react'
import { Link } from "react-router-dom"

const Home: React.FC = () => {
  return (
    <nav>
        <Link to={'/quiz'}>
          <button className="button">Start Quizzle</button>
        </Link>
    </nav>
  )
}

export default Home