import { User } from "../../shared/models/user";

export const mockUsersData = {
    rawUsersData: {
        "page": 2,
        "per_page": 3,
        "total": 12,
        "total_pages": 4,
        "data": [
            {
                "id": 4,
                "first_name": "Eve",
                "last_name": "Holt",
                "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/marcoramires/128.jpg"
            },
            {
                "id": 5,
                "first_name": "Charles",
                "last_name": "Morris",
                "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/stephenmoon/128.jpg"
            },
            {
                "id": 6,
                "first_name": "Tracey",
                "last_name": "Ramos",
                "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/bigmancho/128.jpg"
            }
        ]
    },
    allUsers: [
        {
            "id": 4,
            "first_name": "Eve",
            "last_name": "Holt",
            "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/marcoramires/128.jpg"
        },
        {
            "id": 5,
            "first_name": "Charles",
            "last_name": "Morris",
            "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/stephenmoon/128.jpg"
        },
        {
            "id": 6,
            "first_name": "Tracey",
            "last_name": "Ramos",
            "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/bigmancho/128.jpg"
        }
    ],
    user: {
        "id": 6,
        "first_name": "Tracey",
        "last_name": "Ramos",
        "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/bigmancho/128.jpg"
    },
    createUserRes: {
        "first_name": "Tracey",
        "last_name": "Ramos",
        "id": "692",
        "createdAt": "2018-05-25T09:06:27.980Z"
    },
    updateUserRes: {
        "first_name": "Charles",
        "last_name": "Morris",
        "updatedAt": "2018-05-25T09:09:46.435Z"
    }
}