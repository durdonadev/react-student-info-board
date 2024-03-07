import "./App.css";
import { students } from "./data";
import { useState } from "react";

export default function App() {
    const [selectedStudent, setSelectedStudent] = useState();

    const showStudentInfo = (student) => {
        setSelectedStudent(student);
        console.log(student);
    };

    return (
        <div className="content">
            <h1>Students Data</h1>
            <div className="container">
                <div className="student-names">
                    <h3>Students</h3>
                    <ul>
                        {students.map((student, idx) => {
                            return (
                                <li
                                    key={idx}
                                    className="student"
                                    onClick={() => showStudentInfo(student)}
                                >
                                    {student.name} {student.last_name}
                                </li>
                            );
                        })}
                    </ul>
                </div>
                <div className="student-info">
                    <h3>Student's Info</h3>
                    {selectedStudent && (
                        <div>
                            <p>
                                Full Name: {selectedStudent.name}{" "}
                                {selectedStudent.last_name}
                            </p>
                            <p>Age: {selectedStudent.age}</p>
                            <p>City: {selectedStudent.city}</p>
                            <p>Phone Number: {selectedStudent.phone_number}</p>
                            <p>
                                Number of Classes took:{" "}
                                {selectedStudent.number_of_classes_took}
                            </p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
