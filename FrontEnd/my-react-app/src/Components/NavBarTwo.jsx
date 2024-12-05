
import { Link } from 'react-router-dom'

const NavBarTwo = () => {
  return (
    <>
       
      <nav className="  flex  justify-center md:gap-70  p-3  text-sm text-[#595858] mt-[-32px] shadow-xl">
        <div className="flex gap-10 mr-10 cursor-pointer ">
          <Link to="/Movies_Jabalpur">
            <p>Development</p>
          </Link>
          <Link to="/Music_Jabalpur">
            <p>Business</p>
          </Link>
          <Link to="/Event_Jabalpur">
            <p>Finace & Accounting</p>
          </Link>
          <Link to="/Play_Jabalpur">
            <p>IT & Software</p>
          </Link>
          <Link to="/Sport_Jabalpur">
            <p>Office Productivity</p>
          </Link>
          <Link to="/Activities_Jabalpur">
            <p>Personal Development</p>
          </Link>
        
          <p>Design</p>
          <p>Marketig</p>
          <p>Health & Fitness</p>
          <p>Music</p>
         
        </div>
        
      </nav>

    </>
  )
}

export default NavBarTwo