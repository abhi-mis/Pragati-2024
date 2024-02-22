const image1 ="https://cdn.statically.io/gh/U220053/DSA-Practice/main/My%20project.jpg";
const image2 = "https://i.ibb.co/W6YD25C/mckv4.jpg";
const image3 = "https://i.ibb.co/TbnFZpx/mckv5.jpg";
const image4 ="https://cdn.statically.io/gh/U220053/DSA-Practice/main/mckv3.jpg";

export const images = [image1, image2, image3, image4];

const imageByIndex = (index) => images[index % images.length];

export default imageByIndex;
