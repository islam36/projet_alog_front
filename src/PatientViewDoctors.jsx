import "./App.css";
import NavBar from "./navBar";
import image from './assets/3135715.png'

const PatientViewDoctors = () => {
    const data = [
      {
        id: 1,
        nom: "Ayoub bousenane",
        feild: "Cardiologe",
      },
      {
        id: 2,
        nom: "Ayoub bousenane",
        feild: "Cardiologe",
      },
      {
        id: 3,
        nom: "Ayoub bousenane",
        feild: "Cardiologe",
      },
      {
        id: 4,
        nom: "Ayoub bousenane",
        feild: "Cardiologe",
      },
    ];
    return (
      <>
        <NavBar state="My doctors" />
        <ol className="list-group list-group-numbered" style={{width : "70%",marginLeft : "15%",marginTop:"40px"}}>
          
          {data.map((item) => {
            return (
              <li key={item.id} className="list-group-item d-flex justify-content-between align-items-start mt-2">
                <div className="ms-2 me-auto">
                  <div className="fw-bold">{item.nom}</div>
                  {item.feild}
                </div>
                <img src={image} style={{ width: "50px", height: "50px" }} />
              </li>
            );
          })}
        </ol>
      </>
    );
};

export default PatientViewDoctors;
