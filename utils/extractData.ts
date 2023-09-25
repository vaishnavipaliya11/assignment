export function extractImageUrls(jsonData: any) {
  const imageUrls: string[] = [];

  jsonData.items.forEach((item: any) => {
    if (item.fields && item.fields.cImg) {
      item.fields.cImg.forEach((img: any) => {
        if (img.fields && img.fields.file && img.fields.file.url) {
          const imageUrl = img.fields.file.url.replace(/^\/\//, "https://");
          imageUrls.push(imageUrl);
        }
      });
    }
  });

  return imageUrls;
}
