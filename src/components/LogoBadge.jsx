function LogoBadge() {
  return (
    <div className="relative rounded-t-lg overflow-clip">
      <img
        src="./assets/svg/triangle.svg"
        alt="triangle"
        className="h-[248px] w-full object-cover object-bottom"
      />
      <img
        src="./assets/svg/loaf-coffee-logo-portrait.svg"
        alt="loaf-coffee-logo-portrait"
        className="absolute top-5 left-[50%] translate-x-[-50%]"
      />
    </div>
  );
}

export default LogoBadge;
