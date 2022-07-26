import React from "react";
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from "react-accessible-accordion";
import "react-accessible-accordion/dist/fancy-example.css";
import GreenCheck from '../../assets/images/dashboard/check-green.png';

function QuizDetails() {


    return (
        <div className="accordionDiv block w-full lg:px-16">
            <Accordion allowZeroExpanded allowMultipleExpanded preExpanded={["0"]}>
                <AccordionItem uuid="0">
                    <AccordionItemHeading>
                        <AccordionItemButton>
                            Question 1: Which one is the correct option?{" "}
                        </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                        <div className="answers">
                            <div className="block w-full mb-4">
                                <div className="text-sm flex flex-row items-center justify-start space-x-4">
                                    <div>
                                        <div className="flex flex-row items-center answerOptions">
                                            <p className="px-5 py-3">A</p>
                                            <p className="px-5 py-3 borderLeft">Lorem Ipsum is simply dummy text of the.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="block w-full mb-4">
                                <div className="text-sm flex flex-row items-center justify-start space-x-4">
                                    <div>
                                        <div className="flex flex-row items-center answerOptions">
                                            <p className="px-5 py-3">B</p>
                                            <p className="px-5 py-3 borderLeft">Lorem Ipsum is simply dummy text of the.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="block w-full mb-4 correctAnswer">
                                <div className="text-sm flex flex-row items-center justify-start space-x-4">
                                    <div>
                                        <div className="flex flex-row items-center answerOptions">
                                            <p className="px-5 py-3">C</p>
                                            <p className="px-5 py-3 borderLeft">Lorem Ipsum is simply dummy text of the.</p>
                                        </div>
                                    </div>
                                    <img src={GreenCheck} alt="" className="flex-shrink-0 w-23px h-auto" />
                                </div>
                            </div>
                            <div className="block w-full mb-4">
                                <div className="text-sm flex flex-row items-center justify-start space-x-4">
                                    <div>
                                        <div className="flex flex-row items-center answerOptions">
                                            <p className="px-5 py-3">D</p>
                                            <p className="px-5 py-3 borderLeft">Lorem Ipsum is simply dummy text of the.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="text-sm">
                                <p className="orange">Marks: 02</p>
                            </div>
                        </div>
                    </AccordionItemPanel>
                </AccordionItem>
                <AccordionItem>
                    <AccordionItemHeading>
                        <AccordionItemButton>
                            Question 2: Lorem Ipsum is simply dummy text of the printing
                            and typesetting?
                        </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                        <div className="answers">
                            <div className="block w-full">
                                <div className="text-sm">
                                    <p className="skyBlue">Descriptive answer</p>
                                    <p className="orange">Marks: 02</p>
                                </div>
                            </div>
                        </div>
                    </AccordionItemPanel>
                </AccordionItem>
            </Accordion>
        </div>

    );
}

export default QuizDetails;
