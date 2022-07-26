import React, { useState } from "react";
import { Table, Thead, Tbody, Tr, Th, Td } from "react-super-responsive-table";
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css";
import RedTopArrow from '../../assets/images/dashboard/red-top-arrow.png';
import QuizDetails from "./quizDetails";

function QuizResults() {

    const [show, setShow] = useState();

    const dataQuizResults = [
        {
            quizNo: "01",
            totalQuestions: "01",
            correct: "9",
            wrong: "6",
            obtMarks: "10",
            totalMark: "20"
        },
        {
            quizNo: "01",
            totalQuestions: "01",
            correct: "9",
            wrong: "6",
            obtMarks: "10",
            totalMark: "20",
        },
        {
            quizNo: "01",
            totalQuestions: "01",
            correct: "9",
            wrong: "6",
            obtMarks: "10",
            totalMark: "20",
        }
    ]

    return (
        <div className="results">
            <div className="flex justify-end">
                <form className="filterFormTop">
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
                </form>
            </div>
            <Table>
                <Thead>
                    <Tr>
                        <Th className="font-medium text-center text-base py-8">Quiz No.</Th>
                        <Th className="font-medium text-center text-base py-8">Total questions</Th>
                        <Th className="font-medium text-center text-base py-8">Correct</Th>
                        <Th className="font-medium text-center text-base py-8">Wrong</Th>
                        <Th className="font-medium text-center text-base py-8">Obatined Marks</Th>
                        <Th className="font-medium text-center text-base py-8">Total Marks</Th>
                        <Th className="font-medium text-center text-base py-8">&nbsp;</Th>
                    </Tr>
                </Thead>
                {dataQuizResults.map((item, index) => (
                    <Tbody key={index} className={`${show === index ? ("active") : null}`}>
                        <Tr className="text-sm text-center">

                            <Td>{item.quizNo}</Td>
                            <Td>{item.totalQuestions}</Td>
                            <Td>{item.correct}</Td>
                            <Td>{item.wrong}</Td>
                            <Td>{item.obtMarks}</Td>
                            <Td>{item.totalMark}</Td>
                            <Td>
                                <button
                                    onClick={() => { setShow(index) }}
                                    className="viewDetailBtn flex flex-row space-x-2 justify-between items-center"
                                    type="button">
                                    <span>View Details</span>
                                    <img src={RedTopArrow} alt="" className="w-12px h-auto flex-shrink-0 transition-all duration-300" />
                                </button>
                            </Td>
                        </Tr>
                        <Tr className="quizDetails transition-all duration-300">
                            <Td colSpan="7">
                                <QuizDetails />
                            </Td>
                        </Tr>
                    </Tbody>

                ))}
            </Table>
            <div className="pagination space-x-3.5 flex items-center justify-center">
                <button type="button" className="previous">{`<`}</button>
                <button type="button" className="active">
                    1
                </button>
                <button type="button">2</button>
                <button type="button">3</button>
                <button type="button" className="more">
                    .
                </button>
                <button type="button" className="more">
                    .
                </button>
                <button type="button" className="more">
                    .
                </button>
                <button type="button" className="next">{`>`}</button>
            </div>
        </div>
    );
}

export default QuizResults;
