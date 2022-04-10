import img from "../image/image0.jpeg"
import "../style.css"

function Info(){
    return(
        <div className="info--container" >
            <img src={img} className="info--img" />
            <h2 className="info--heading" >Moleseng Mokgosi</h2>
            <h4 className="info--sub-heading">Frontend Developer</h4>
            <a href="https://github.com/keMoleseng">
                <span>github.com/keMoleseng</span>
            </a>
            
            <div className="btns-container">
            <a href="mailto:mmokgosi9@gmail.com" className="info--btn">
                <i className="fa fa-envelope" ></i>
                <span>Email</span>
            </a> 
            <a className="info--btn2" href="https://www.linkedin.com/in/moleseng-mokgosi-ab506b11b/">
                <i className="fa fa-linkedin-square"></i> 
                <span>LinkedIn</span>   
            </a>  
            </div>
        </div>
    )
}

export default Info