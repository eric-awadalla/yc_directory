"use client";
import Image from "next/image";

const AuthorImage = ({ image }: { image: string }) => {
  return (
    <Image
      src={image}
      alt="avatar"
      width={64}
      height={64}
      className="rounded-full drop-shadow-lg"
    />
  );
};

export default AuthorImage;
