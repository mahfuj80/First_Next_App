import Image from "next/image";
import React from "react";

const AlbumPage = () => {
  return (
    <div>
      <h1>This is Album Page</h1>
      <h1>Using Nuxt Image Component</h1>
      <Image
        src={
          "https://www.aplyca.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fc63hsprlvlya%2FIacLLeOBR5WCvdCPqKuff%2F6860b5cc464c4f54703a2befa3f706b4%2Fnextjs3.webp&w=1080&q=75"
        }
        alt="Logo"
        width={500}
        height={500}
      />
      <img
        src="https://www.aplyca.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fc63hsprlvlya%2FIacLLeOBR5WCvdCPqKuff%2F6860b5cc464c4f54703a2befa3f706b4%2Fnextjs3.webp&w=1080&q=75"
        width="500"
        height="500"
        alt="image"
      />
    </div>
  );
};

export default AlbumPage;
