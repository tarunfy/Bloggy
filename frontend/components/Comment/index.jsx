import { Avatar } from "@chakra-ui/react";
import { useEffect, useState } from "react";

const Comment = ({ comment }) => {
  const [commentedBy, setCommentedBy] = useState();

  useEffect(() => {
    async function getUser() {
      const res = await fetch(`/api/user/${comment.userId}`);

      const data = await res.json();

      if (res.ok) {
        setCommentedBy(data.user);
      }
    }
    getUser();
  }, []);

  return (
    <div className="flex items-center justify-between pt-2">
      <h2>{comment.comment}</h2>
      <div className="flex items-center space-x-2">
        <p className="text-sm">~ {commentedBy?.fullname}</p>
        <Avatar
          size="sm"
          name={commentedBy?.fullname}
          src={commentedBy?.profileImage}
        />
      </div>
    </div>
  );
};

export default Comment;
