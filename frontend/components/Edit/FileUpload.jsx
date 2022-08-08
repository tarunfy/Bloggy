import { FormControl, InputGroup, Button } from "@chakra-ui/react";

import { useRef } from "react";

const FileUpload = ({ name, acceptedFileTypes }) => {
  const inputRef = useRef();
  return (
    <FormControl>
      <InputGroup>
        <input
          type="file"
          accept={acceptedFileTypes}
          name={name}
          ref={inputRef}
          style={{ display: "none" }}
        ></input>
        <Button
          variant="outline"
          className="!w-fit"
          onClick={() => inputRef.current.click()}
        >
          Add your cover image
        </Button>
      </InputGroup>
    </FormControl>
  );
};

export default FileUpload;
