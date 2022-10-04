const InteractiveElementExplanation = () => {
  return (
    <div className="flex justify-center">
      <div className="relative mt-16 mb-6 mr-96">
        <div className="drop-shadow">
          <div
            className="w-32 h-32 bg-primary-container rounded-2xl"
            style={{ transform: "rotateX(45deg) rotateZ(45deg)" }}
          />
        </div>
        <div className="absolute left-48 top-14 whitespace-nowrap text-outline text-sm">
          primary-container background
        </div>
        <div
          className="left-0 -top-12 absolute w-32 h-32 bg-on-primary-container bg-opacity-[0.12] rounded-2xl backdrop-blur-[1px]"
          style={{
            transform: "rotateX(45deg) rotateZ(45deg)",
          }}
        />
        <div className="absolute left-48 top-1 whitespace-nowrap text-outline text-sm">
          on-primary-container state layer with variable opacity
        </div>
        <div className="absolute left-48 -top-12 whitespace-nowrap text-outline text-sm">
          on-primary-container content
        </div>
        <div
          className="left-0 -top-24 absolute w-32 h-32 text-xl text-on-primary-container flex items-center justify-center font-bold"
          style={{
            transform: "rotateX(45deg) rotateZ(45deg)",
          }}
        >
          <span>Content</span>
        </div>
      </div>
    </div>
  );
};

export default InteractiveElementExplanation;
