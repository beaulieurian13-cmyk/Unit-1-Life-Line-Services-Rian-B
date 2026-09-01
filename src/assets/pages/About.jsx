import Button from "../component/application/form-structure/FormButton";
import TextArea from "../component/application/form-structure/type/TextArea";


const AboutPage = ({question, currentQuestion, handleQuestionChange, handleAddQuestion, handleDeleteQuestion}) => {
  return (
    <div className="about-page">
      <h2>My Story</h2>
      <div className="about-story">
        <p>
          Lifeline Services was created from a deeply personal experience. I
          know firsthand what it is like to live with PTSD and how much it can
          affect your everyday life. There were times when having a trained
          service dog could have made my life easier—helping me feel safer, more
          independent, and more confident in situations that felt overwhelming.
        </p>
        <p>
          But there was a major obstacle: I could not afford a service dog.
          Knowing that something that could have made such a meaningful
          difference in my life was out of reach financially stayed with me. I
          began thinking about how many other people may be experiencing the
          same thing—people who need help, but cannot afford the cost of
          obtaining a properly trained service dog. I don't want anyone else to
          feel like they have to face that struggle alone.
        </p>
        <p>
          That is why I created Lifeline Services. My goal is to help make
          trained service dogs more accessible to people who truly need them and
          to provide support throughout the journey—not just when someone
          receives their dog, but as they learn, grow, and build a life
          together. A service dog is more than a trained animal. For the right
          person, they can become a source of independence, confidence,
          stability, and hope. Lifeline Services exists because I believe
          everyone who genuinely needs that lifeline deserves the opportunity to
          have one.
        </p>
      </div>

   

      <h2>Core Values</h2>

      <ul className="core-values">
        <li>
          <h3>Honesty</h3>
          <p>
            We believe in being truthful and transparent with the people we
            serve. Trust is the foundation of everything we do.
          </p>
        </li>
        <li>
          <h3>Helping Others</h3>
          <p>
            At the heart of Lifeline Services is the desire to make a meaningful
            difference in people's lives and remind them that they do not have
            to face everything alone.
          </p>
        </li>
        <li>
          <h3>Integrity</h3>
          <p>
            We will do what is right, even when it is difficult. We hold
            ourselves accountable to the people, families, trainers, and animals
            who depend on us.
          </p>
        </li>
        <li>
          <h3>Commitment</h3>
          <p>
            Helping someone receive and successfully work with a service dog is
            a long-term commitment. We are dedicated to supporting our clients
            throughout their journey.
          </p>
        </li>
        <li>
          <h3>Compassion</h3>
          <p>
            Everyone's story is different. We believe people deserve to be
            treated with patience, understanding, dignity, and respect.
          </p>
        </li>
        <li>
          <h3>Empowerment</h3>
          <p>
            Our goal is not simply to provide a service dog. We want to help
            people regain confidence, independence, and the ability to move
            forward with their lives.
          </p>
        </li>
        
        <li>
          <h3>Respect</h3>
          <p>
            We respect every individual we serve, their experiences, their
            needs, and their goals. We also believe in treating every dog with
            kindness and respect.
          </p>
        </li>
      </ul>
<section className="question-section">
    <h2>Ask Any Questions You May Have</h2>
    <div className="queston-input-side">
        <TextArea
        id="questionInput"
        label="Question:"
        value={currentQuestion}
        handleChange={handleQuestionChange}
        />
        <Button
        id="submit"
        label="Submit"
        classes="button"
        handleClick={handleAddQuestion}
        />          
    </div>
    <div className="question-list-side">
        <ul>
            {question.map((question) => (
                <li key={question.id}>
                    {question.text}
                    <Button
                    id="delete"
                    label="Delete"
                    type="button"
                    classes="button"
                    handleClick={() =>handleDeleteQuestion(question.id)}
                    />
                </li>
            ))}
        </ul>

    </div>

</section>

    </div>

  );
};

export default AboutPage;
