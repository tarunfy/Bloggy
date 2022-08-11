import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
} from "@chakra-ui/react";

const DeleteBlogModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleDelete = () => {};

  return (
    <>
      <Button onClick={onOpen} colorScheme="red">
        Delete
      </Button>
      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay bg="none" backdropFilter="auto" backdropBlur="2px" />
        <ModalContent>
          <ModalHeader>Are you absolutely sure?</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            This action cannot be undone. This will permanently delete the blog.
          </ModalBody>
          <ModalFooter>
            <Button onClick={handleDelete} colorScheme="red" mr={3}>
              Delete
            </Button>

            <Button
              variant="outline"
              onClick={() => {
                onClose();
              }}
            >
              Cancel
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default DeleteBlogModal;
