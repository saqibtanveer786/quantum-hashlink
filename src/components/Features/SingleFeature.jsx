const SingleFeature = ({ feature }) => {
  const { icon, title, paragraph } = feature;
  return (
    <div className="w-full">
      <div className="wow fadeInUp flex flex-col justify-center items-center" data-wow-delay=".15s">
        <div className="mb-10 flex h-[70px] w-[70px] items-center justify-center rounded-md bg-primary bg-opacity-10 text-primary">
          {icon}
        </div>
        <h3 className="mb-5 text-xl font-bold text-black sm:text-2xl lg:text-xl xl:text-2xl text-center">
          {title}
        </h3>
        <p className="text-base font-medium leading-relaxed text-body-color text-center">
          {paragraph}
        </p>
      </div>
    </div>
  );
};

export default SingleFeature;
