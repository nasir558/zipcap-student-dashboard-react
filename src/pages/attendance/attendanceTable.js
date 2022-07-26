import React from "react";
import { Table, Thead, Tbody, Tr, Th, Td } from "react-super-responsive-table";
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css";
import WelcomeIcon from "../../assets/images/dashboard/icon-for-attendance-page.png";

function AttendanceTable() {



    const dataQuizResults = [
        {
            date: "Monday 02 Aug 2021",
            class: "Introduction to indoor and outdoor photography",
            status: "Present",
        },
        {
            date: "Monday 02 Aug 2021",
            class: "Introduction to indoor and outdoor photography",
            status: "Present",
        },
        {
            date: "Monday 02 Aug 2021",
            class: "Introduction to indoor and outdoor photography",
            status: "Absent",
        },
        {
            date: "Monday 02 Aug 2021",
            class: "Introduction to indoor and outdoor photography",
            status: "Present",
        },
        {
            date: "Monday 02 Aug 2021",
            class: "Introduction to indoor and outdoor photography",
            status: "Absent",
        },
        {
            date: "Monday 02 Aug 2021",
            class: "Introduction to indoor and outdoor photography",
            status: "Present",
        },
    ]

    return (
        <div className="results attendance">
            <form>
                <div className="flex flex-col md:flex-row justify-end space-y-4 md:space-y-0 md:space-x-4">
                    <div className="filterFormTop">
                        <select>
                            <option>
                                Select Course
                            </option>
                            <option value="course one">
                                Course One
                            </option>
                            <option value="course two">
                                Course Two
                            </option>
                        </select>
                    </div>
                    <div className="filterFormTop">
                        <select>
                            <option>
                                Select Year
                            </option>
                            <option value="course one">
                                2017
                            </option>
                            <option value="course two">
                                2016
                            </option>
                        </select>
                    </div>
                    <div className="filterFormTop">
                        <select>
                            <option>
                                Select Month
                            </option>
                            <option value="course one">
                                January
                            </option>
                            <option value="course two">
                                Feburary
                            </option>
                        </select>
                    </div>
                </div>
            </form>
            <div className="attendanceWelcomeScreen flex flex-col items-center justify-center">
                <img src={WelcomeIcon} className="w-120px h-auto" alt="" />
                <p className="mt-8">Please select course and date</p>
            </div>
            <Table>
                <Thead>
                    <Tr>
                        <Th className="font-medium text-center text-base py-8">Date</Th>
                        <Th className="font-medium text-center text-base py-8">Class name</Th>
                        <Th className="font-medium text-center text-base py-8">Status</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    {dataQuizResults.map((item, index) => (

                        <Tr key={index} className="text-sm text-center">

                            <Td>{item.date}</Td>
                            <Td>{item.class}</Td>
                            <Td className={`${item.status.toLowerCase() === "present" ? ("textGreen") : (item.status.toLowerCase() === "absent" ? ("textRed") : null)}`}>{item.status}</Td>
                        </Tr>


                    ))}
                </Tbody>
            </Table>
        </div>
    );
}

export default AttendanceTable;
