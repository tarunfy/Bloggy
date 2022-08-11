import { Avatar } from "@chakra-ui/react";

const Comment = () => {
  return (
    <div className="flex items-center justify-between pt-2">
      <h2>This is a comment</h2>
      <div className="flex items-center space-x-2">
        <p className="text-sm">~ Tarun Sharma</p>
        <Avatar
          size="sm"
          name="Tarun Sharma"
          src="https://bit.ly/dan-abramov"
        />
      </div>
    </div>
  );
};

export default Comment;
