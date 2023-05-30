import "./App.css";
import NavBar from "./navBar";
import { Grid } from "@mui/material";
import { Link } from "react-router-dom";


const data = 
  [
  {
    id : 1,
    title: "Medical History",
    content: "The patient has a history of asthma and seasonal allergies. They were diagnosed with hypertension in 2015 and have been taking medication to manage it. No major surgeries or hospitalizations reported. Allergies to penicillin and shellfish are noted."
  },
  {
    id : 2,
    title: "Laboratory Test Results",
    content: "The patient's recent blood work indicates normal levels of hemoglobin, hematocrit, and white blood cell count. However, their cholesterol levels are slightly elevated. Further evaluation is recommended to monitor the patient's lipid profile."
  },
  {
    id : 3,
    title: "Doctor's Visit Summary",
    content: "During the visit, the patient reported persistent lower back pain for the past two weeks. Physical examination revealed tenderness in the lumbar region. X-ray results showed mild degenerative changes. The patient was prescribed pain medication, advised to apply heat therapy, and referred to a physiotherapist for further evaluation and management."
  },
  {
    id:4,
    title: "Treatment Plan",
    content: "The patient has been diagnosed with type 2 diabetes. The treatment plan includes dietary modifications, regular exercise, and medication (Metformin) to control blood sugar levels. The patient is scheduled for follow-up visits every three months to monitor progress and make adjustments as necessary."
  }
]


const PatientDosc = () => {
  return (
    <>
      <NavBar state="My docs" />
      <Grid sx={{ml:"20px"}} container spacing={2}>
        {data.map((item) => {
          return (
            <Grid item key={item.id}>
              <div className="card" style={{ width: "18rem",height : "22rem" }}>
                <div className="card-body">
                  <h5 className="card-title">{item.title}</h5>
                  <p className="card-text" style={{ height : "14rem" }} >{item.content}</p>
                  <Link to={`/patient/docs/${item.id}`}>
                    <p className="card-link">
                      Another link
                    </p>
                  </Link>
                </div>
              </div>
            </Grid>
          );
        })}
      </Grid>
    </>
  );
};

export default PatientDosc;
