/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import {
  getOverrideProps,
  getOverridesFromVariants,
  mergeVariantsAndOverrides,
} from "@aws-amplify/ui-react/internal";
import { Text, View } from "@aws-amplify/ui-react";
export default function SnapOnce(props) {
  const { overrides: overridesProp, ...rest } = props;
  const variants = [
    {
      overrides: { "Snap Once,": {}, SnapOnce: {} },
      variantValues: { property1: "Default" },
    },
  ];
  const overrides = mergeVariantsAndOverrides(
    getOverridesFromVariants(variants, props),
    overridesProp || {}
  );
  return (
    <View
      width="646px"
      height="228px"
      position="relative"
      padding="0px 0px 0px 0px"
      {...rest}
      {...getOverrideProps(overrides, "SnapOnce")}
    >
      <Text
        fontFamily="Rubik"
        fontSize="96px"
        fontWeight="600"
        color="rgba(255,255,255,1)"
        lineHeight="112.5px"
        textAlign="left"
        display="flex"
        direction="column"
        justifyContent="center"
        position="absolute"
        top="0%"
        bottom="0%"
        left="-4.02%"
        right="4.02%"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Snap Once,&#xA;Save More"
        {...getOverrideProps(overrides, "Snap Once,")}
      ></Text>
    </View>
  );
}
