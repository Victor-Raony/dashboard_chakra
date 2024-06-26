import {Flex, Box, Text, Avatar} from "@chakra-ui/react"

interface ProfileProps{
  showProfileData?: boolean;
}

export default function Profile({showProfileData = true }: ProfileProps){
  return(
    <Flex>
    { showProfileData && (
      <Box mr="4" textAlign="right">
        <Text>Victor Raony</Text>
        <Text color="gray.300" fontSize="small">
          victor_raony12@hotmail.com
        </Text>
      </Box>
    )}

    <Avatar size="md" name="Victor Raony" src="https://github.com/Victor-Raony.png"/>
  </Flex>

  );
}