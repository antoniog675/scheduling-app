import { computeHeadingLevel } from "@testing-library/react";
import React from "react";
import { useParams } from "react-router-dom";

const Profile = () => {
  const { id } = useParams();

  useEffect(() => {
    if (!localStorage.getItem("_id")) {
        navigate("/");
    }
  }, [navigate]);

  return (
    <main className='profile'>
      <div style={{ width: "70%" }}>
        <h2>Hey, Sergio Garcia</h2>
        <p>Here is your schedule: WAT</p>
        <table>
          <tbody>
            <tr>
              <td>MON</td>
              <td>8:00am</td>
              <td>10:00pm</td>
            </tr>
          </tbody>
        </table>
      </div>
    </main>
  )
}

export default Profile
