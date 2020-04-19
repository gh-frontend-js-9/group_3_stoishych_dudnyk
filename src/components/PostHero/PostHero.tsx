import React from 'react';

export const PostHero: React.FC = () => {
    return (
        <div className="container post-hero">
            <div className="post-hero-wrapper">
                <h1 className="hero__title post-hero__color">10 Reasons to Build Your Website with WP Page Builder</h1>
                <h3 className="hero__subtitle post-hero__color">People’s quest for creating websites has easily taken us
                    to a new era of site development.
                    Where, with the availability of robust page building tools, creating websites has become a lot more
                    fun (especially for non-developers).</h3>
                <p className="hero__author post-hero__author">
                    BY <span className="post-hero__color">TOMAS LAURINAVICIUS</span> IN <span
                    className="post-hero__color">DESIGN PROCESS</span>
                </p>
            </div>
        </div>
    )
};
