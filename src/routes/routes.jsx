import EventList from '../pages/EventList'
import FilterEvent from '../pages/FilterEvent'
import EventDetails from '../pages/EventDetails'
import Navbar from '../components/Navbar'
import About from '../pages/About'
import Contact from '../pages/Contact'
import Register from '../pages/Register'

  export const routes =([
    {path: '/', element: (<><Navbar /> <EventList/></>)  },
    {path: '/find-events', element:(<><Navbar /> <FilterEvent/></>)  },
    {path: '/events/:id', element: (<><Navbar /> <EventDetails/></>)  },{path: 'about-us', element: (<><Navbar /> <About/></>)},
    {path: 'contact-us', element: (<><Navbar /> <Contact/></>)},
    {path: 'register', element: (<><Navbar /> <Register/></>)},

  ])