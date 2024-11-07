import React from "react";

const Footer: React.FC = () => {
    return (
        <footer className="bg-secondary py-8">
            <div className="container mx-auto px-4">
                <p className="text-center text-lg text-purple-200">
                    © {new Date().getFullYear()} Built by Amara Ouattara.
                </p>
            </div>
        </footer>
    );
};

export default Footer;