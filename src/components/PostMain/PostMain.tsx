import React from 'react';
import {AuthorInfo} from "../AuthorInfo";
import {Comments} from "../Comments/Comments";
import {Author} from "../../interfaces/author";
import {useSelector} from "react-redux";
import {DocsState} from "../../interfaces/docs";
import PhotoCardsContainer from "../CardComponents/PhotoCardsContainer";
import Spinner from "../Spinner";

interface Props {
    image: string,
    content: string,
    author: Author
}

const getRandomNumber = () => {
    return Math.floor(Math.random() * 4);
};


export const PostMain: React.FC<Props> = ({image,content, author}) => {
    function createMarkup() {
        return {__html: content};
    }
    const freelancePosts = useSelector((state: DocsState) => state.freelance.payload);
    const essentialPosts = useSelector((state: DocsState) => state.essential.payload);

    return (
        <section className="post-main">
            {/*<div className="post-image" />*/}
            <img src={image} className="post-image" alt="Post img"/>
            {/*<p className="post-content">
                People’s quest for creating websites has easily taken us to a new era of site development.
                Where, with the availability of robust page building tools, creating websites has become a lot more fun (especially for non-developers).
                The multitude of tools and plugins available to you is vast when you try building websites on WordPress.
                Today we’ll explore a new one, <a href="/" className="post-content__link">WP Page Builder</a>. If you’re tired of the same old page builder plugins, this is one you should try out.
            </p>
            <h2 className="post-content__subtitle">What’s Special About WP Page Builder?</h2>
            <p className="post-content mt-10">
                Wondering what makes WP Page Builder so special?
                I would say, what doesn’t? It’s developed by the team over at Themeum, who has been creating WordPress themes since 2013.
                As mentioned above, the plugin is a full pack of essential site building elements with all
                modern the modern functionality you’ve come to expect from a page builder plugin.
                Let’s have a look below at all of the juicy features WP Page Builder includes.
            </p>
            <div className="post-image" />
            <div className="post-content">
                Here are some of the amazing add-ons included:
                <ul>
                    <li className="post-content__list">
                        <b>Form</b>: Create web forms effortlessly.
                        It gives you a convenient way to style your forms as you desire.
                        The Form add-on itself is capable of setting up any kind of form without needing to install any plugin.
                        Moreover, you can manage form plugins and enable reCAPTCHA with just a simple click. There is also an add-on for Contact Form 7 if you prefer
                    </li>
                    <li className="post-content__list">
                        <b>Carousel</b>: It’s hard to find an advanced add-on like a carousel in a free page builder plugin,
                        but WP Page Builder lets you create stunning hero sliders without having to pay for it.
                    </li>
                    <li className="post-content__list">
                        <b>Post Grid</b>: Display blog posts in grids defining the number of posts and styling the look.
                    </li>
                    <li className="post-content__list">
                        <b>Feature Box</b>: Use the Feature Box add-on to display the features of products on your website.
                    </li>
                    <li className="post-content__list">
                        <b>Accordion</b>: Need any collapse text content on your site? Use WP Page Builder’s Accordion add-on and modify the style the way you want.
                    </li>
                </ul>
            </div>
            <div className="post-image" />
            <h3 className="post-author__quote">
                <i>
                    “ WP Page Builder offers a lot of ready-to-use design
                    blocks to make your site development process a lot faster and easier “
                </i>
            </h3>*/}
            <div dangerouslySetInnerHTML={createMarkup()} />
            <AuthorInfo
                description={author.description}
                firstName={author.firstName}
                lastName={author.lastName}
            />
            <h2 className="post-content__subtitle">You might also like...</h2>
            {freelancePosts && essentialPosts ? <PhotoCardsContainer cards={[freelancePosts[getRandomNumber()],
                essentialPosts[getRandomNumber()]]}/> : <Spinner size={3}/>}
            <Comments />
        </section>
    )
}
