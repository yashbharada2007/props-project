import { Bookmark } from "lucide-react";


const Card = () => {
  return (
    <div>
         <div className="card">
        <div className="top">
          <img
            src="https://i.pinimg.com/originals/01/ca/da/01cada77a0a7d326d85b7969fe26a728.jpg"
            alt=""
          />
          <button>
            Save
            <Bookmark  size={13}/>
          </button>
        </div>
        <div className="center">
          <h3>
            Amazon <span>5 Days ago</span>
          </h3>
          <h2>Senior UI/UX Designer</h2>
          <div className="tag">
            <h4>Part Time</h4>
            <h4>Senior Leval</h4>
          </div>
        </div>
        <div className="bottom">
          
            <div>
              <h3>$120/hr</h3>
              <p>Mumbai , India</p>
            </div>
            <button>Apply Now</button>
          
        </div>
      </div>
    </div>
  )
}

export default Card