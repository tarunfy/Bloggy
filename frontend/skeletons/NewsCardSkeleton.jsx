import { Box, Skeleton, SkeletonText } from "@chakra-ui/react";

const NewsCardSkeleton = () => {
  return (
    <Box padding="2" boxShadow="lg">
      <Skeleton height="160px" borderRadius="10px" />
      <SkeletonText mt="2" noOfLines={4} spacing="1" />
    </Box>
  );
};

export default NewsCardSkeleton;
