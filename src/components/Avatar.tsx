import React, { FC } from "react";
interface AvatarProps {
  src: string;
  alt: string;
  height?: number;
  width?: number;
}
const Avatar: FC<AvatarProps> = ({ src, alt, width = 50, height = 50 }) => {
  return (
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      loading="lazy"
      style={{ borderRadius: 5 }}
    />
  );
};

export default Avatar;
