import './SecondSection.css';
import StackIcon from "tech-stack-icons";

const SecondSection = () => {
    return (
        <div className='second-section'>
            <h2 className='second-section-title'>My Tech Stack</h2>
            <p className='second-section-subtitle'>Technologies I have learned and worked with so far</p>
            <ul className="second-section-tech-stack-wrapper">
                <li className='tech-stack-line'>
                    <StackIcon name="typescript" className="tech-icon" />
                    TypeScript
                </li>
                <li className='tech-stack-line'>
                    <StackIcon name="react" className="tech-icon" />
                    React.js
                </li>
                <li className='tech-stack-line'>
                    <StackIcon name="c#" className="tech-icon" />
                    C#
                </li>
                <li className='tech-stack-line'>
                    <StackIcon name="net" className="tech-icon" />
                    .NET
                </li>
                <li className='tech-stack-line'>
                    <StackIcon name="html5" className="tech-icon" />
                    HTML
                </li>
                <li className='tech-stack-line'>
                    <StackIcon name="css3" className="tech-icon" />
                    CSS
                </li>
                <li className='tech-stack-line'>
                    <StackIcon name="sass" className="tech-icon" />
                    SCSS
                </li>
                <li className='tech-stack-line'>
                    <StackIcon name="js" className="tech-icon" />
                    JavaScript
                </li>
                <li className='tech-stack-line'>
                    <StackIcon name="shadcnui" className="tech-icon" />
                    Shadcn UI
                </li>
                <li className='tech-stack-line'>
                    <StackIcon name="git" className="tech-icon" />
                    GIT
                </li>
                <li className='tech-stack-line'>
                    <StackIcon name="github" className="tech-icon" />
                    GitHub
                </li>
                <li className='tech-stack-line'>
                    <StackIcon name="tailwindcss" className="tech-icon" />
                    Tailwind CSS
                </li>
                <li className='tech-stack-line'>
                    <StackIcon name="bootstrap5" className="tech-icon" />
                    Bootstrap
                </li>
                <li className='tech-stack-line'>
                    <StackIcon name="mongodb" className="tech-icon" />
                    MongoDB
                </li>
                <li className='tech-stack-line'>
                    <StackIcon name="nodejs" className="tech-icon" />
                    Node.js
                </li>
                <li className='tech-stack-line'>
                    <StackIcon name="expressjs" className="tech-icon" />
                    Express.js
                </li>
                <li className='tech-stack-line'>
                    <StackIcon name="azure" className="tech-icon" />
                    Azure
                </li>
            </ul>
        </div>
    )
}

export default SecondSection