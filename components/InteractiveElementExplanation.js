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
        <div className="absolute text-sm left-48 top-14 whitespace-nowrap text-outline">
          primary-container background
        </div>
        <div
          className="left-0 -top-12 absolute w-32 h-32 bg-on-primary-container/[0.12] rounded-2xl backdrop-blur-[2px] border border-on-surface/10"
          style={{
            transform: "rotateX(45deg) rotateZ(45deg)",
          }}
        />
        <div className="absolute text-sm left-48 top-1 whitespace-nowrap text-outline">
          on-primary-container state layer with variable opacity
        </div>
        <div className="absolute text-sm left-48 -top-12 whitespace-nowrap text-outline">
          on-primary-container content
        </div>
        <div
          className="absolute left-0 flex items-center justify-center w-32 h-32 text-xl font-bold -top-24 text-on-primary-container"
          style={{
            transform: "rotateX(45deg) rotateZ(45deg)",
            filter: "drop-shadow(0 1px 2px rgb(0 0 0 / 0.4))",
          }}
        >
          <span>Content</span>
        </div>
      </div>
    </div>
  );
};

export default InteractiveElementExplanation;
