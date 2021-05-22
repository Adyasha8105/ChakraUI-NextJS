import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import {
	Box,
	Button,
	Flex,
	Image,
	Heading,
	FormLabel,
	Text,
	SimpleGrid,
	Input,
} from "@chakra-ui/react";

const Upload = () => {
	const [selectedFile, setSelectedFile] = useState(null);
	const [imagePreviewUrl, setImagePreviewUrl] = useState(null);

	const fileChangedHandler = (event) => {
		setSelectedFile(event.target.files[0]);
		let reader = new FileReader();

		reader.onloadend = () => {
			setImagePreviewUrl(reader.result);
		};
		reader.readAsDataURL(event.target.files[0]);
	};

	let $imagePreview = <Image src="./dummy.svg" width={450} height={240} p={20} />;
	if (imagePreviewUrl) {
		$imagePreview = <Image src={imagePreviewUrl} w="60vh" />;
	}

	return (
		<Flex
			justify={{ base: "center", md: "space-around" }}
			direction={{ base: "column-reverse", md: "row" }}
			wrap="no-wrap"
			minH="80vh"
			pt={[10, 30, 50, 70]}
			pb={[10, 30, 50, 70]}
		>
			<SimpleGrid>
				<Heading
					as="h1"
					fontSize={{ base: "25px", md: "35px", xl: "52px" }}
					fontWeight="bold"
					letterSpacing="2%"
					color="primary.800"
					textAlign={["center", "center", "left", "left"]}
					mb={2}
				>
					<Text as="abbr">REVERSE IMAGE </Text>
					<Text as="abbr" color="rgba(235,109,109)">
						SEARCH
					</Text>
				</Heading>
				{/* <Text
          as="abbr"
          color="primary.700"
          opacity="0.7"
          fontWeight="normal"
          textAlign="center"
          fontSize={{ base: "15px", md:"18px", xl: "22px" }}
          mb={8}
        >
          Find whether Artworks are already present or not. </Text> */}
				<Box
					w={{ base: "80%", sm: "60%", md: "70%" }}
					margin="auto"
					outline="dotted"
					flex={1}
					p={4}
				>
					{$imagePreview}
					<Input
						backgroundColor="rgba(235,109,109,.8)"
						color="#fff"
						textAlign="center"
						margin="auto"
						display="flex"
						p={1}
						type="file"
						name="avatar"
						accept="image/png, image/jpeg, image/jpg"
						onChange={fileChangedHandler}
					/>
				</Box>
				<Button
					bg="black"
					variant="outline"
					margin="auto"
					color="white"
					mt={6}
					p={6}
					_hover={{ opacity: "0.8", borderColor: "white" }}
					_active={{ color: "white" }}
				>
					SEARCH
				</Button>
			</SimpleGrid>
		</Flex>
	);
};

export default Upload;
