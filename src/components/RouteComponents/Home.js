import React from "react";
import Footer from "../Footer";
import Card from "./components/Card";
import ContactIcon from "./components/ContactIcon";

 //import images
import back from "./images/back.jpg";


// import css file
import "./home.css";

const Home =() =>{
      //headings

      const h1="GET OUT";
      const h2="SOUL WARMING";
      const h3="Expectedly Unexpected";

      //paragraph
    const unexpect="A go-with-the-flow attitude will help keep your sanity intact when traversing the chaotic canvas that is India. With its ability to inspire, exasperate, thrill and confound all at once, be prepared for unexpected surprises. This can be challenging, particularly for first-time visitors: despite India's wonders, the poverty is confronting, the bureaucracy can be frustrating and the crush of humanity may turn the simplest task into a frazzling epic. Even veteran travellers find their nerves frayed at some point. But love it or loathe it  and most visitors see-saw between the two to embrace India's unpredictability is to embrace its soul.";
    const soulwarming ="Spirituality is the ubiquitous thread in India's richly diverse tapestry, weaving all the way from the snowy mountains of the far north to the tropical shores of the deep south. India's extraordinary array of sacred sites and rituals is testament to the country's long and colourful religious history. And then there are its festivals! India hosts some of the planet's most divine devotional celebrations from formidable city parades heralding auspicious events on the religious calendar, to simple village harvest fairs that pay homage to locally worshipped deity.";
    const getout="From the towering icy peaks of the northern mountains to the sun-washed beaches of  the southern coast, India's dramatic terrain is breathtaking. Along with abundant natural beauties, exquisite temples rise majestically out of pancake-flat deserts and crumbling fortresses peer over plunging ravines. Aficionados of the great outdoors can scout for big jungle cats on wildlife safaris, paddle in the shimmering waters of beautiful beaches, take blood-pumping treks high in the Himalaya,or simply inhale pine-scented air on a meditative forest walk.";
    return(
        <div>
            <div className="imagecont">
                <img 
                className="img"
                src={back} alt="background"
                />
                <div className="centered">
                        GO-INDIA
                </div>
            </div>
            <div className="text">
                <p>A land of remarkable diversity from ancient traditions and artistic 
                    heritage to magnificent landscapes and culinary creations India will
                    ignite your curiosity, shake your senses and warm your soul.</p>
            </div>
            <Card h1={h1} h2={h2} h3={h3} p1={unexpect} p2={soulwarming} p3={ getout}/>
            <ContactIcon/>
            <Footer/>
            
            
        </div>
    );
};
export default Home;