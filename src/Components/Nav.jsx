import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch,
    useParams
} from "react-router-dom";
export default function Nav() {
  return (
    <div>Nav

        <nav>
            <Link exact to = "/">Home</Link>
            <Link  to = "/Movies">Movies</Link>
            {/* <Link  to = "/person">Persons</Link> */}
        </nav>
    </div>
  )
}
