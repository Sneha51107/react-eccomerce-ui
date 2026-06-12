import About from "./Cards";
import Home from './Home';
import Shop from "./Shop";
import Blog from "./Blogs";
export default function Pages()
{
    return(
        <div>
            <Home />
              <About />
            <Shop />
            <Blog /> 
        </div>
    )
}