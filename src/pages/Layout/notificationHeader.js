import React from "react";
import { Link } from "react-router-dom";

function NotificationHeader() {

    const dataNotifications = [
        {
            user: "Jhon",
            courseCommented: "Adobe Lightroom basic training",
            titleText: "replied to your question on",
            message:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been.",
            notificationa: "",
            status: "unread",
        },
        {
            user: "Aamir",
            courseCommented: "Professional logo designing",
            titleText: "liked your reply on his question on",
            message:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been.",
            notificationa: "",
            status: "unread",
        },
        {
            user: "Aamir",
            courseCommented: "Professional logo designing",
            titleText: "liked your reply on his question on",
            message:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been.",
            notificationa: "",
            status: "",
        },
    ];

    return (
        <div>
            {dataNotifications.map((item, index) => (
                <div key={index}>
                    <Link
                        to={`${item.notificationLink}`}
                        className={`flex flex-col md:flex-row items-center shadow-md md:items-start space-y-6 md:space-y-0 md:space-x-4 p-15px headingNotification notification transition-all duration-300 ${item.status === "unread" ? "bg-pink unread" : "bg-lightGreen"
                            }`}
                    >
                        <div>
                            <h4
                                className={`text-xs font-normal leading-4`}
                            >
                                <span>{item.user}</span> {item.titleText} "
                                <span>{item.courseCommented}</span>"
                            </h4>
                        </div>
                    </Link>
                </div>
            ))}
        </div>
    );
}

export default NotificationHeader;
