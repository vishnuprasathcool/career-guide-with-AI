import { useEffect, useState } from "react";

export default function NextStepAbout() {
    const text = "NextStep";
    const [displayText, setDisplayText] = useState("");

    useEffect(() => {
        let index = 0;
        const interval = setInterval(() => {
            setDisplayText((prev) => prev + text.charAt(index));
            index++;
            if (index === text.length) clearInterval(interval);
        }, 80);

        return () => clearInterval(interval);
    }, []);

    return (
        <section className="about-container">
            <h1>{displayText}</h1>

            <p className="intro">
                NextStep is an advanced career guidance platform designed to assist
                students and professionals in making informed career decisions. The
                platform evaluates skills, interests, and industry trends to provide
                accurate and personalized career recommendations.
            </p>

            <div className="about-grid">
                <div className="about-card">
                    <h2>About NextStep</h2>
                    <p>
                        NextStep utilizes intelligent data analysis and AI-driven
                        methodologies to understand user profiles and recommend suitable
                        career paths. The platform simplifies the process of career
                        planning and decision-making.
                    </p>
                </div>

                <div className="about-card">
                    <h2>Our Vision</h2>
                    <p>
                        Our vision is to empower individuals with reliable and
                        technology-driven career guidance solutions that align with
                        evolving industry demands.
                    </p>
                </div>

                <div className="about-card">
                    <h2>Core Features</h2>
                    <ul>
                        <li>Smart Career Recommendations</li>
                        <li>Skill Gap Analysis</li>
                        <li>Personalized Learning Roadmaps</li>
                        <li>Resume Enhancement Guidance</li>
                        <li>Industry Trend Insights</li>
                    </ul>
                </div>

                <div className="about-card">
                    <h2>Technology Stack</h2>
                    <ul>
                        <li>HTML5</li>
                        <li>CSS3</li>
                        <li>JavaScript</li>
                        <li>Artificial Intelligence Techniques</li>
                    </ul>
                </div>
            </div>
        </section>
    );
}