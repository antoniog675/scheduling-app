import { computeHeadingLevel } from "@testing-library/react";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Profile = () => {
  const { id } = useParams();
  const [schedules, setSchedules] = useState([]);
  const [loading, setLoading] = useState(true);
  const [username, setUsername] = useState("");
  const [timezone, setTimezone] = useState("");

  // useEffect(() => {
  //   if (!localStorage.getItem("_id")) {
  //       navigate("/");
  //   }
  // }, [navigate]);  

  useEffect(() => {
    function getUserDetails() {
        if (id) {
            fetch(`http://localhost:4000/schedules/${id}`)
                .then((res) => res.json())
                .then((data) => {
                    setUsername(data.username);
                    setSchedules(data.schedules);
                    setTimezone(data.timezone.label);
                    setLoading(false);
                })
                .catch((err) => console.error(err));
        }
    }
    getUserDetails();
  }, [id]);

  return (
    <main className='profile'>
        {loading ? (
            <p>Loading...</p>
        ) : (
            <div>
                <h2>Hey, {username}</h2>
                <p>Here is your schedule: - {timezone}</p>
                <table>
                    <tbody>
                        {schedules.map((sch) => (
                            <tr key={sch.day}>
                                <td style={{ fontWeight: "bold" }}>{sch.day.toUpperCase()}</td>
                                <td>{sch.startTime || "Unavailable"}</td>
                                <td>{sch.endTime || "Unavailable"}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        )}
    </main>
);
}

export default Profile
