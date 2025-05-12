import photo from "../assets/IgnacioVergara_NoBg.png";

const PhotoCard = () => {
  return (
    <div className="bg-white rounded-lg w-full min-h-[200px] max-h-[300px] shadow-lg mx-auto border-2 border-black overflow-hidden relative md:max-h-[350px] md:min-h-[300px] xl:min-h-[350px] ">
      <div className="absolute bottom-[-20px] w-full md:bottom-[-150px] lg:bottom-0 xl:bottom-[-50px]">
        <img src={photo} className="w-full h-auto object-bottom object-cover"></img>
      </div>
    </div>
  );
};

export default PhotoCard;
