import React from "react";
import { styled } from "src/stitches.config";
import Spinner from "../Spinner";
import Box from "../Box";

export interface BrandButtonProps
  extends React.ComponentProps<typeof BaseButton> {
  isLoading?: boolean;
  children?: React.ReactNode;
  leftIcon?: React.ReactNode;
}

export const BrandButton = (
  { children, isLoading, leftIcon, ...props }: BrandButtonProps,
  ref: React.ForwardedRef<HTMLButtonElement>
) => {
  return (
    <BaseButton ref={ref} {...props}>
      {leftIcon}
      {isLoading && <Spinner className={"spinner"} />}
      <Box css={{ px: 6 }}>{children}</Box>
    </BaseButton>
  );
};

const BaseButton = styled("button", {
  all: "unset",
  boxSizing: "border-box",
  display: "flex",
  gap: "$1",
  alignItems: "center",
  fontWeight: "$medium",
  fontFamily: "$body",
  overflow: "hidden",
  lineHeight: 1.5,
  transition: "$fast",
  "&:active": {
    transform: "scale(0.98) translateY(1px)",
  },
  "&:disabled": {
    transform: "none",
    cursor: "not-allowed",
    opacity: 0.75,
  },
  borderRadius: "$xl",
  variants: {
    size: {
      xs: {
        px: "$2",
        py: "$2",
        fontSize: "$sm",
        "& .spinner": {
          boxSize: 16,
        },
      },
      s: {
        px: "$3",
        py: "$2",
        fontSize: "$base",
        "& .spinner": {
          boxSize: 20,
        },
      },
      m: {
        px: "$4",
        py: "$3",
        fontSize: "$base",
        "& .spinner": {
          boxSize: 20,
        },
      },
      l: {
        px: "$6",
        py: "$4",
        fontSize: "$base",
        "& .spinner": {
          boxSize: 24,
        },
      },
    },
    brand: {
      primary: {
        borderRadius: "$full",
        background: "$colors$primary",
        color: "black",
        "&:hover": {
          background: "$colors$hover",
        },
      },
      normal: {
        borderRadius: "$full",
        background: "$mauve12",
        color: "white",
        "&:hover": {
          bg: "$mauve12",
          color: "white",
        },
      },
      secondary: {
        borderRadius: "$xl",
        background: "$colors$gray6",
        color: "$colors$gray12",
        "&:hover": {
          background: "$colors$gray7",
        },
      },
    },
  },
  defaultVariants: {
    size: "m",
    brand: "primary",
  },
});

export default React.forwardRef(BrandButton);
