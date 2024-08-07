import { Star } from "lucide-react";
import "tailwindcss/tailwind.css";

// Dummy avatar images
const avatars = [
  "https://randomuser.me/api/portraits/women/32.jpg",
  "https://randomuser.me/api/portraits/men/44.jpg",
  "https://randomuser.me/api/portraits/women/45.jpg",
  "https://randomuser.me/api/portraits/women/47.jpg",
  "https://randomuser.me/api/portraits/men/48.jpg",
];

const customerFeedback = [
  { name: "Alice", rating: 5, comment: "Great service!", avatar: avatars[0] },
  { name: "Bob", rating: 4, comment: "Good food.", avatar: avatars[1] },
  {
    name: "Jenny Wilson",
    rating: 5,
    comment:
      "The food was excellent and so was the service. I had the mushroom risotto with scallops which was awesome. I had a burger last time I visited which was also very good. They were very accommodating and gave great service.",
    avatar: avatars[2],
  },
  {
    name: "Dianne Russell",
    rating: 5,
    comment:
      "We enjoyed the Eggs Benedict served on homemade focaccia bread and hot coffee. Perfect service.",
    avatar: avatars[3],
  },
  {
    name: "Devon Lane",
    rating: 5,
    comment:
      "Natasha's service was always helpful and tender, and made us feel really special and comfortable with the menu and food.",
    avatar: avatars[4],
  },
];

const CustomerFeedback = () => {
  return (
    <div className="bg-gray-800 rounded-lg p-6">
      <div className="text-lg font-bold mb-4 text-white">Customer Feedback</div>
      <div className="space-y-4">
        {customerFeedback.map((feedback, index) => (
          <div
            key={index}
            className="flex items-start text-sm bg-gray-700 p-4 rounded-lg"
          >
            <div className="flex-shrink-0">
              <img
                src={feedback.avatar}
                alt={feedback.name}
                className="w-10 h-10 rounded-full mr-3"
              />
            </div>
            <div className="flex flex-col">
              <div className="text-white font-bold">{feedback.name}</div>
              <div className="flex text-yellow-400 mb-1">
                {[...Array(feedback.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <p className="text-gray-400">{feedback.comment}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CustomerFeedback;
