const About = () => {
    const year = new Date().getFullYear() - 2016;
    return (
        <div id="app-about-container" className="app-shared-container">
            <h1 className="content-transition-text">About</h1>
            <p>
                Hello, my name is Monica and I am a software developer with over {year} years of experience working with PHP, JavaScript, React,
                HTML and CSS, WordPress. Proven efficiency with the ability to
                quickly learn programming languages. Able to effectively
                self-manage during independent projects as well as collaborate
                as part of a productive team. With a positive attitude, the
                willingness and motivation to learn new technologies.
            </p>
        </div>
    );
};

export default About;
