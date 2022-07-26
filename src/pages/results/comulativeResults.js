import React from "react";
import { Table, Thead, Tbody, Tr, Th, Td } from "react-super-responsive-table";
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css";

function ComulativeResults() {
    return (
        <div className="results">
            <Table>
                <Thead>
                    <Tr>
                        <Th className="font-medium text-left pl-52 text-base py-8">Course</Th>
                        <Th className="font-medium text-center text-base py-8">Mark obtained</Th>
                        <Th className="font-medium text-center text-base py-8">Total Marks</Th>
                        <Th className="font-medium text-center text-base py-8">Result</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    <Tr className="text-sm text-center">
                        <Td className="text-left">UI/UX master class, wireframes and user interface designing</Td>
                        <Td>91</Td>
                        <Td>100</Td>
                        <Td className="textGreen">Passed</Td>
                    </Tr>
                    <Tr className="text-sm text-center">
                        <Td className="text-left">Adobe Lightroom, Photo editing masterclass, Edit your photos ...</Td>
                        <Td>91</Td>
                        <Td>100</Td>
                        <Td className="textGreen">Passed</Td>
                    </Tr>
                    <Tr className="text-sm text-center">
                        <Td className="text-left">Art of making lorem ipsum this is sample text</Td>
                        <Td>91</Td>
                        <Td>100</Td>
                        <Td className="textGreen">Passed</Td>
                    </Tr>
                    <Tr className="text-sm text-center">
                        <Td className="text-left">Adobe Lightroom, Photo editing masterclass, Edit your photos ...</Td>
                        <Td>91</Td>
                        <Td>100</Td>
                        <Td className="textGreen">Passed</Td>
                    </Tr>
                    <Tr className="text-sm text-center">
                        <Td className="text-left">Art of making lorem ipsum this is sample text</Td>
                        <Td>91</Td>
                        <Td>100</Td>
                        <Td className="textGreen">Passed</Td>
                    </Tr>
                </Tbody>
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

export default ComulativeResults;
