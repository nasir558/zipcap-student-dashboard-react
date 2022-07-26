import React from 'react';
import LinkedIn from "../../assets/images/linkedin.png";
import Twitter from "../../assets/images/twitter.png";
import Facebook from "../../assets/images/facebook.png";
import { Link } from "react-router-dom";
const Footer = () => {
    return (
       <>
        <div className={`pb-5 block footer`}>
            <div className={`max-w-1920px mx-auto pl-5 pr-5 lg:pl-20 lg:pr-20`}>
                <div className="grid grid-cols-2 xl:grid-cols-4 gap-6">
                    <div className="mt-24">
                        <h3 className="title">Category</h3>
                        <p className="links">
                            <Link to="" className="no-underline">
                                First Link
                            </Link>
                        </p>
                        <p className="links">
                            <Link to="" className="no-underline">
                               Second Long Link
                            </Link>
                        </p>
                        <p className="links">
                            <Link to="" className="no-underline">
                                Third Link
                            </Link>
                        </p>
                        <p className="links">
                            <Link to="" className="no-underline">
                               Fourth long Link
                            </Link>
                        </p>
                    </div>
                    <div className="mt-24">
                        <h3 className="title">Category</h3>
                        <p className="links">
                            <Link to="" className="no-underline">
                                First Link
                            </Link>
                        </p>
                        <p className="links">
                            <Link to="" className="no-underline">
                               Second Long Link
                            </Link>
                        </p>
                        <p className="links">
                            <Link to="" className="no-underline">
                                Third Link
                            </Link>
                        </p>
                        <p className="links">
                            <Link to="" className="no-underline">
                               Fourth long Link
                            </Link>
                        </p>
                    </div>
                    <div className="mt-24">
                        <h3 className="title">Category</h3>
                        <p className="links">
                            <Link to="" className="no-underline">
                                First Link
                            </Link>
                        </p>
                        <p className="links">
                            <Link to="" className="no-underline">
                                Second Long Link
                            </Link>
                        </p>
                        <p className="links">
                            <Link to="" className="no-underline">
                                Third Link
                            </Link>
                        </p>
                        <p className="links">
                            <Link to="" className="no-underline">
                                Fourth long Link
                            </Link>
                        </p>
                    </div>
                    <div className="logo-CopyRight mt-24">
                        <h3>Zipcap</h3>
                        <p className="description">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        <br /><br />Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        </p>
                        <p className="mt-14">Copyright 2021 - All right Recived</p>
                    </div>
                </div>
                <div className={`grid grid-cols-1 socialIcons`}>
                    <div className="text-center">
                        <Link to="">
                            <img src={LinkedIn} alt="" />
                        </Link>
                        <Link to="">
                            <img src={Twitter} alt="" />
                        </Link>
                        <Link to="">
                            <img src={Facebook} alt="" />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
       </>
    )
}

export default Footer
