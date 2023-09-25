import { createClient } from "contentful";

const getCrouselImg = async () => {
  const spaceId = process.env.CONTENT_FULL_SPACE_ID || "1b1uts3d81n1";
  const accessToken = process.env.CONTENT_FULL_TOKEN || "ynjz-H3vX0WnV-9wJExgnn1KVYr8njesBj6ioedtrpM";

  console.log("Space ID:", spaceId);
  console.log("Access Token:", accessToken);

  const client = createClient({
    space: spaceId,
    accessToken: accessToken,
  });

  try {
    const res = await client.getEntries({ content_type: "cdata" });
    console.log(res,"res");
    
    return {
      props: {
        carousels: res.items,
      },
    };
  } catch (error) {
    console.error("Error fetching entries:", error);
    return {
      props: {
        carousels: [],
      },
    };
  }
};

export { getCrouselImg };
