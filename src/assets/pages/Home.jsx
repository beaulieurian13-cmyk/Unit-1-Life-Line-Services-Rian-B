import { Link } from "react-router";

const HomePage = () => {
  return (
    <div className="HomePage">
      <div className="HomePage-title"> 
        <h2>Your Journey. Your Lifeline. Your Future.</h2>
      <p>
        Life after trauma can be difficult, but you don't have to face it alone.
        Lifeline Service Dogs was created to help individuals with PTSD find
        support through service dogs and a caring community.
      </p>
      </div>
        <div className="HomePage-text">
      
      <div className="logo-pic">
        <img src="/LifeLineServiceDog Logo.png" alt="Life Line Services Logo" />
      </div>
       
      <div className="home-text">
      <h3>We're here to help you take the next step.</h3>
     
        <p>
          Lifeline Service Dogs was created with a simple belief: people deserve
          the opportunity to reclaim their independence and build a life beyond
          trauma. For individuals living with PTSD and working toward recovery,
          everyday life can sometimes feel overwhelming. A properly trained
          service dog can provide more than companionship. Through specialized
          tasks and ongoing support, a service dog can help create a greater
          sense of safety, independence, confidence, and connection.
        </p>
        <p>
          Lifeline Service Dogs is committed to supporting individuals
          throughout their journey—from the application process, through
          training, and beyond. We believe receiving a service dog is not the
          end of someone's recovery journey. It can be a new beginning.
        </p>
        <p>
          Our goal is to connect the right person with the right service dog
          while surrounding them with the education, training, and support
          needed to build a successful partnership. You have already come this
          far. Let your next step be toward a new beginning.
        </p> 
        <Link to="/application">Application</Link>
         </div>
      </div>     
 </div>
       
  );
};

export default HomePage;
