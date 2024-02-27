const Skills = () => {
  return (
    <div className="py-10 flex flex-col gap-4">
      <div className="flex gap-4">
        <span className="min-w-24 md:min-w-32 lg:min-w-44">Web development</span>
        <span>:</span>
        <span className="font-thin font-customText">
          HTML, CSS, VueJS, ReactJS, Vuex, Redux, Pinia, Responsive design
        </span>
      </div>
      <div className="flex gap-4">
        <span className="min-w-24 md:min-w-32 lg:min-w-44">Languages</span>
        <span>:</span>
        <span className="font-thin font-customText">
          Javascript, Typescript, Java, python
        </span>
      </div>
      <div className="flex gap-4">
        <span className="min-w-24 md:min-w-32 lg:min-w-44">Testing </span>
        <span>:</span>
        <span className="font-thin font-customText">
          Jest, Testing, Debugging
        </span>
      </div>
      <div className="flex gap-4">
        <span className="min-w-24 md:min-w-32 lg:min-w-44">Developer Tools</span>
        <span>:</span>
        <span className="font-thin font-customText">
          Figma, VScode, Bitbucket, Jira, Confluence.
        </span>
      </div>
    </div>
  );
};

export default Skills;
