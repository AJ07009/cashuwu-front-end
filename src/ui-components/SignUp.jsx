/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import {
  getOverrideProps,
  useAuth,
  useDataStoreCreateAction,
} from "@aws-amplify/ui-react/internal";
import { User } from "../models";
import { schema } from "../models/schema";
import { Flex, Image, Text, View } from "@aws-amplify/ui-react";
export default function SignUp(props) {
  const { overrides, ...rest } = props;
  const authAttributes = useAuth().user?.attributes ?? {};
  const rectangleOneZeroEightFourNineOnClick = useDataStoreCreateAction({
    fields: {
      phone_number: authAttributes["phone_number"],
      name: authAttributes["name"],
      userBasketId: authAttributes["phone_number"],
    },
    model: User,
    schema: schema,
  });
  return (
    <View
      width="1500px"
      height="1097px"
      overflow="hidden"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...rest}
      {...getOverrideProps(overrides, "SignUp")}
    >
      <View
        position="absolute"
        top="0%"
        bottom="0%"
        left="0%"
        right="49.6%"
        padding="0px 0px 0px 0px"
        backgroundImage="linear-gradient(-56deg, rgba(94,189,204,1), rgba(66,108,217,0.66))"
        {...getOverrideProps(overrides, "Rectangle 417")}
      ></View>
      <View
        position="absolute"
        top="13.86%"
        bottom="72.2%"
        left="12.6%"
        right="74.8%"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(255,255,255,1)"
        {...getOverrideProps(overrides, "Rectangle 422")}
      ></View>
      <Image
        position="absolute"
        top="9.02%"
        bottom="62.99%"
        height="27.99%"
        left="4.33%"
        right="53.93%"
        width="41.73%"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Rectangle 429")}
      ></Image>
      <Flex
        gap="10px"
        position="absolute"
        top="514px"
        left="65px"
        direction="row"
        alignItems="flex-start"
        padding="10px 10px 10px 10px"
        {...getOverrideProps(overrides, "Frame 1")}
      ></Flex>
      <Text
        fontFamily="Abel"
        fontSize="36px"
        fontWeight="400"
        color="rgba(255,255,255,1)"
        lineHeight="45px"
        textAlign="left"
        display="flex"
        direction="column"
        justifyContent="flex-start"
        letterSpacing="-0.25px"
        position="absolute"
        top="52.14%"
        bottom="39.02%"
        left="4.33%"
        right="53.33%"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Welcome. This is your next step in saving more"
        {...getOverrideProps(overrides, "Sign Up to Discover10845")}
      ></Text>
      <View
        padding="0px 0px 0px 0px"
        width="512px"
        height="787px"
        position="absolute"
        top="159px"
        left="862px"
        {...getOverrideProps(overrides, "Group 366")}
      >
        <Text
          fontFamily="Alegreya SC"
          fontSize="16px"
          fontWeight="400"
          color="rgba(21,20,57,0.4)"
          lineHeight="26px"
          textAlign="left"
          display="flex"
          direction="column"
          justifyContent="flex-start"
          position="absolute"
          top="95.55%"
          bottom="0%"
          left="27.34%"
          right="23.63%"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Already have an account? Login"
          {...getOverrideProps(overrides, "By signing up you ag")}
        ></Text>
        <View
          position="absolute"
          top="77.13%"
          bottom="15.25%"
          left="1.17%"
          right="0%"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Middle - Fill")}
        >
          <View
            position="absolute"
            top="0%"
            bottom="0%"
            left="0%"
            right="0%"
            borderRadius="100px"
            padding="0px 0px 0px 0px"
            backgroundColor="rgba(217,205,221,1)"
            onClick={() => {
              rectangleOneZeroEightFourNineOnClick();
            }}
            {...getOverrideProps(overrides, "Rectangle10849")}
          ></View>
          <Text
            fontFamily="Abel"
            fontSize="18px"
            fontWeight="400"
            color="rgba(255,255,255,1)"
            lineHeight="26px"
            textAlign="center"
            display="flex"
            direction="column"
            justifyContent="center"
            position="absolute"
            top="calc(50% - 13px - 0px)"
            left="calc(50% - 59px - 0px)"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Creat an Account"
            {...getOverrideProps(overrides, "Sign Up")}
          ></Text>
        </View>
        <View
          position="absolute"
          top="60.99%"
          bottom="31.39%"
          left="0.1%"
          right="0.08%"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Big - Dark Outline10851")}
        >
          <View
            position="absolute"
            top="0%"
            bottom="0%"
            left="0%"
            right="0%"
            border="2px SOLID rgba(253,223,217,1)"
            borderRadius="100px"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "Rectangle10852")}
          ></View>
          <Text
            fontFamily="Alegreya Sans SC"
            fontSize="20px"
            fontWeight="500"
            color="rgba(133,133,133,0.6)"
            lineHeight="26px"
            textAlign="left"
            display="flex"
            direction="column"
            justifyContent="center"
            position="absolute"
            top="calc(50% - 13px - -1px)"
            left="24px"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Your password"
            {...getOverrideProps(overrides, "Your email10853")}
          ></Text>
        </View>
        <Text
          fontFamily="Abel"
          fontSize="14px"
          fontWeight="400"
          color="rgba(0,0,0,1)"
          textTransform="uppercase"
          lineHeight="26px"
          textAlign="left"
          display="flex"
          direction="column"
          justifyContent="flex-start"
          letterSpacing="1.85px"
          position="absolute"
          top="56.8%"
          bottom="39.9%"
          left="0.1%"
          right="80.23%"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="PASSWORD"
          {...getOverrideProps(overrides, "Password")}
        ></Text>
        <View
          position="absolute"
          top="46.63%"
          bottom="45.74%"
          left="0.1%"
          right="0.08%"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Big - Dark Outline10855")}
        >
          <View
            position="absolute"
            top="0%"
            bottom="0%"
            left="0%"
            right="0%"
            border="2px SOLID rgba(253,223,217,1)"
            borderRadius="100px"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "Rectangle10856")}
          ></View>
          <Text
            fontFamily="Alegreya Sans SC"
            fontSize="20px"
            fontWeight="500"
            color="rgba(133,133,133,0.6)"
            lineHeight="26px"
            textAlign="left"
            display="flex"
            direction="column"
            justifyContent="center"
            width="221px"
            position="absolute"
            top="calc(50% - 13px - -1px)"
            left="23.5px"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Your Phone Number"
            {...getOverrideProps(overrides, "Your email10857")}
          ></Text>
        </View>
        <Text
          fontFamily="Abel"
          fontSize="14px"
          fontWeight="400"
          color="rgba(0,0,0,1)"
          textTransform="uppercase"
          lineHeight="26px"
          textAlign="left"
          display="flex"
          direction="column"
          justifyContent="flex-start"
          letterSpacing="1.85px"
          position="absolute"
          top="42.44%"
          bottom="54.26%"
          left="0%"
          right="73.63%"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Phone Number"
          {...getOverrideProps(overrides, "Email10858")}
        ></Text>
        <View
          position="absolute"
          top="32.27%"
          bottom="60.1%"
          left="0.1%"
          right="0.08%"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Big - Dark Outline10859")}
        >
          <View
            position="absolute"
            top="0%"
            bottom="0%"
            left="0%"
            right="0%"
            border="2px SOLID rgba(253,223,217,1)"
            borderRadius="100px"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "Rectangle10860")}
          ></View>
          <Text
            fontFamily="Alegreya Sans SC"
            fontSize="20px"
            fontWeight="500"
            color="rgba(133,133,133,0.6)"
            lineHeight="26px"
            textAlign="left"
            display="flex"
            direction="column"
            justifyContent="center"
            position="absolute"
            top="calc(50% - 13px - -1px)"
            left="24px"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Your Business Name"
            {...getOverrideProps(overrides, "Your email10861")}
          ></Text>
        </View>
        <Text
          fontFamily="Abel"
          fontSize="14px"
          fontWeight="400"
          color="rgba(0,0,0,1)"
          textTransform="uppercase"
          lineHeight="26px"
          textAlign="left"
          display="flex"
          direction="column"
          justifyContent="flex-start"
          letterSpacing="1.85px"
          position="absolute"
          top="28.08%"
          bottom="68.61%"
          left="0.1%"
          right="71.65%"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="BUSINESS NAME"
          {...getOverrideProps(overrides, "Email10862")}
        ></Text>
        <View
          position="absolute"
          top="17.92%"
          bottom="74.46%"
          left="0.1%"
          right="51.77%"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Big - Dark Outline10863")}
        >
          <View
            position="absolute"
            top="0%"
            bottom="0%"
            left="0%"
            right="0%"
            border="2px SOLID rgba(253,223,217,1)"
            borderRadius="100px"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "Rectangle10864")}
          ></View>
          <Text
            fontFamily="Alegreya Sans SC"
            fontSize="20px"
            fontWeight="500"
            color="rgba(133,133,133,0.6)"
            lineHeight="26px"
            textAlign="left"
            display="flex"
            direction="column"
            justifyContent="center"
            position="absolute"
            top="calc(50% - 13px - -1px)"
            left="24px"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children={authAttributes["name"]}
            {...getOverrideProps(overrides, "Your email10865")}
          ></Text>
        </View>
        <Text
          fontFamily="Abel"
          fontSize="14px"
          fontWeight="400"
          color="rgba(0,0,0,1)"
          textTransform="uppercase"
          lineHeight="26px"
          textAlign="left"
          display="flex"
          direction="column"
          justifyContent="flex-start"
          letterSpacing="1.85px"
          position="absolute"
          top="13.72%"
          bottom="82.97%"
          left="0.1%"
          right="78.77%"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="FIRST NAME"
          {...getOverrideProps(overrides, "Name10866")}
        ></Text>
        <Text
          fontFamily="Abel"
          fontSize="14px"
          fontWeight="400"
          color="rgba(0,0,0,1)"
          textTransform="uppercase"
          lineHeight="26px"
          textAlign="left"
          display="flex"
          direction="column"
          justifyContent="flex-start"
          letterSpacing="1.85px"
          position="absolute"
          top="13.6%"
          bottom="83.1%"
          left="52.41%"
          right="27.5%"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="LAST NAME"
          {...getOverrideProps(overrides, "Name10867")}
        ></Text>
        <View
          position="absolute"
          top="17.92%"
          bottom="74.46%"
          left="51.79%"
          right="0.08%"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Big - Dark Outline10868")}
        >
          <View
            position="absolute"
            top="0%"
            bottom="0%"
            left="0%"
            right="0%"
            border="2px SOLID rgba(253,223,217,1)"
            borderRadius="100px"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "Rectangle10869")}
          ></View>
          <Text
            fontFamily="Alegreya Sans SC"
            fontSize="20px"
            fontWeight="500"
            color="rgba(133,133,133,0.6)"
            lineHeight="26px"
            textAlign="left"
            display="flex"
            direction="column"
            justifyContent="center"
            position="absolute"
            top="calc(50% - 13px - -1px)"
            left="24px"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Your Last name"
            {...getOverrideProps(overrides, "Your email10870")}
          ></Text>
        </View>
        <Text
          fontFamily="Abel"
          fontSize="30px"
          fontWeight="400"
          color="rgba(0,0,0,1)"
          lineHeight="45px"
          textAlign="left"
          display="flex"
          direction="column"
          justifyContent="flex-start"
          letterSpacing="-0.25px"
          position="absolute"
          top="0%"
          bottom="94.28%"
          left="0%"
          right="83.79%"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Sign Up"
          {...getOverrideProps(overrides, "Sign Up to Discover10871")}
        ></Text>
      </View>
      <View
        position="absolute"
        top="63.9%"
        bottom="34.73%"
        left="7.78%"
        right="91.22%"
        borderRadius="27px"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(243,244,245,1)"
        opacity="0.5"
        {...getOverrideProps(overrides, "Rectangle 418")}
      ></View>
      <View
        position="absolute"
        top="63.9%"
        bottom="34.73%"
        left="5.13%"
        right="93.87%"
        borderRadius="27px"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(243,244,245,1)"
        opacity="0.5"
        {...getOverrideProps(overrides, "Rectangle 419")}
      ></View>
      <View
        position="absolute"
        top="63.9%"
        bottom="34.73%"
        left="10.5%"
        right="88.5%"
        borderRadius="27px"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(243,244,245,1)"
        opacity="0.5"
        {...getOverrideProps(overrides, "Rectangle 420")}
      ></View>
    </View>
  );
}
