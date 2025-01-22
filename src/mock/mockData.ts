import userImage from "../assets/image/avatars/300-2.jpg";
import userImage2 from "../assets/image/avatars/300-3.jpg";
import userImage3 from "../assets/image/avatars/300-4.jpg";
import userImage4 from "../assets/image/avatars/300-5.jpg";
import postImage from "../assets/image/stock/img-1.jpg";
import postImage2 from "../assets/image/stock/img-2.jpg";
import postImage3 from "../assets/image/stock/img-3.jpg";
import postImage4 from "../assets/image/stock/img-4.jpg";
export const user = {
  id: 1,
  name: "Sophia Williams",
  image: userImage,
};

export const user2 = {
  id: 2,
  name: "Liam Johnson",
  image: userImage2,
};

export const user3 = {
  id: 3,
  name: "Oliver Smith",
  image: userImage3,
};

export const user4 = {
  id: 4,
  name: "Emily Brown",
  image: userImage4,
};

export const userPost = [
  {
    id: 1,
    image: "",
    isLiked: true,
    description:
      "Looking for the perfect party dish? This flavorful paella recipe is sure to impress your guests. It's packed with seafood, chicken, and vibrant vegetables. Plus, it's a great way to enjoy some quality time cooking together with friends and family!",
    date: "2023-07-15T12:45:30",
    user: user,
    comments: [
      {
        id: 1,
        content: "Looks delicious!",
        date: "2025-01-20T17:19:30",
        user: user,
        isLiked: true,
        replies: [
          {
            id: 101,
            date: "2023-07-15T13:00:00",
            content: "I agree, I'm going to try this!",
            user: user2,
            isLiked: false,
            replies: [
              {
                id: 201,
                date: "2023-07-15T13:10:30",
                content: "You should, it's really good!",
                user: user3,
                isLiked: true,
                replies: [
                  {
                    id: 301,
                    date: "2023-07-15T13:15:45",
                    content: "I love how colorful the dish is!",
                    user: user4,
                    isLiked: false,
                    replies: [],
                  },
                ],
              },
              {
                id: 302,
                date: "2023-07-15T13:15:45",
                content: "I love how colorful the dish is!",
                user: user4,
                isLiked: true,
                replies: [],
              },
            ],
          },
        ],
      },
      {
        id: 2,
        content: "Looks so tasty!",
        date: "2023-07-15T14:30:10",
        user: user3,
        isLiked: false,
        replies: [
          {
            id: 102,
            date: "2023-07-15T14:35:20",
            content: "I want to make this for dinner tonight!",
            user: user4,
            isLiked: true,
            replies: [],
          },
        ],
      },
    ],
  },
  {
    id: 2,
    image: postImage2,
    isLiked: false,
    description: "",
    date: "2021-04-22T09:12:05",
    user: user2,
    comments: [
      {
        id: 1,
        content: "Yum! This looks amazing!",
        date: "2022-11-08T17:30:45",
        user: user2,
        isLiked: false,
        replies: [
          {
            id: 101,
            date: "2022-11-08T18:00:00",
            content: "I agree! Definitely trying this next week!",
            user: user3,
            isLiked: true,
            replies: [
              {
                id: 201,
                date: "2022-11-08T18:05:00",
                content: "You won't regret it. It’s delicious!",
                user: user4,
                isLiked: false,
                replies: [
                  {
                    id: 301,
                    date: "2022-11-08T18:10:30",
                    content: "I need this in my life! 😋",
                    user: user,
                    isLiked: true,
                    replies: [],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        id: 2,
        content: "Looks like the perfect meal for a weekend!",
        date: "2022-11-08T18:15:00",
        user: user4,
        isLiked: true,
        replies: [
          {
            id: 102,
            date: "2022-11-08T18:20:30",
            content: "Exactly! It’s great for gathering with friends!",
            user: user2,
            isLiked: false,
            replies: [],
          },
        ],
      },
    ],
  },
  {
    id: 3,
    image: postImage3,
    isLiked: true,
    description:
      "This vibrant salad is packed with fresh ingredients like avocado, mango, and spinach. It's the perfect dish for hot summer days and is quick and easy to prepare!",
    date: "2021-04-22T09:12:05",
    user: user3,
    comments: [
      {
        id: 1,
        content: "This salad looks so fresh and healthy!",
        date: "2021-04-22T09:12:05",
        user: user3,
        isLiked: false,
        replies: [
          {
            id: 101,
            date: "2021-04-22T09:20:15",
            content: "I love mango and avocado together! Yum!",
            user: user4,
            isLiked: false,
            replies: [
              {
                id: 201,
                date: "2021-04-22T09:25:50",
                content: "Such a refreshing combination!",
                user: user,
                isLiked: false,
                replies: [
                  {
                    id: 301,
                    date: "2021-04-22T09:30:10",
                    content: "Exactly! I can't wait to try this.",
                    user: user2,
                    isLiked: false,
                    replies: [],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        id: 2,
        content: "Perfect for a light lunch during summer!",
        date: "2021-04-22T09:35:00",
        user: user2,
        isLiked: false,
        replies: [
          {
            id: 102,
            date: "2021-04-22T09:40:00",
            content: "Agreed, it’s light and refreshing!",
            user: user3,
            isLiked: false,
            replies: [],
          },
        ],
      },
    ],
  },
  {
    id: 4,
    image: postImage4,
    isLiked: true,
    description:
      "This hearty and healthy vegan chili is packed with beans, vegetables, and spices. It's a warming dish perfect for chilly evenings, and it's easy to make in large batches for leftovers.",
    date: "2020-02-14T14:30:00",
    user: user4,
    comments: [
      {
        id: 1,
        content: "I love vegan chili, this looks so hearty!",
        date: "2020-02-14T14:30:00",
        user: user4,
        isLiked: false,
        replies: [
          {
            id: 101,
            date: "2020-02-14T14:35:00",
            content: "It’s definitely one of my favorites, I make it often!",
            user: user2,
            isLiked: false,
            replies: [],
          },
        ],
      },
      {
        id: 201,
        date: "2020-02-14T14:40:00",
        content: "I have to try this recipe. I love spicy food!",
        user: user3,
        isLiked: false,
        replies: [
          {
            id: 301,
            date: "2020-02-14T14:45:00",
            content: "Spicy chili is the best! Can’t wait to make it.",
            user: user,
            isLiked: false,
            replies: [],
          },
        ],
      },
      {
        id: 2,
        content: "Vegan chili is so satisfying, especially on cold nights!",
        date: "2020-02-14T14:50:30",
        user: user3,
        isLiked: false,
        replies: [
          {
            id: 102,
            date: "2020-02-14T14:55:00",
            content: "Totally! It's the perfect comfort food.",
            user: user4,
            isLiked: false,
            replies: [],
          },
        ],
      },
    ],
  },
];
