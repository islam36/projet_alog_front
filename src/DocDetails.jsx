import { useParams } from "react-router-dom"
import './App.css'
import NavBar from "./navBar";


const DocDetails = ()=>{
    const {id} = useParams()
    console.log(id)
    const docDetails = {
      title: "Laboratory Test Results",
      content:
        "The patient has a history of asthma and seasonal allergies. They were diagnosed with hypertension in 2015 and have been taking medication to manage it. No major surgeries or hospitalizations reported. Allergies to penicillin and shellfish are noted.",
    };
    return (
      <>
        <NavBar state="My docs" />;
        <article className="cardDocs">
          <div>
            <b className="titleDoc">{docDetails.title}</b>
            <p className="contentDoc">{docDetails.content}</p>
          </div>
        </article>
      </>
    );
}

export default DocDetails