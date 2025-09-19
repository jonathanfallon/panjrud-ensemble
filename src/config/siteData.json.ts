export interface SiteDataProps {
	name: string;
	title: string;
	description: string;
	useViewTransitions?: boolean; // defaults to false. Set to true to enable some Astro 3.0 view transitions
	author: {
		name: string;
		email: string;
		twitter: string; // used for twitter cards when sharing a blog post on twitter
		facebook?: string;
		instagram?: string;
		youtube?: string;
	};
	defaultImage: {
		src: string;
		alt: string;
	};
}

// Update this file with your site specific information
const siteData: SiteDataProps = {
	name: "Panjrud Ensemble",
	// Your website's title and description (meta fields)
	title: "Panjrud Ensemble",
	description: "Five musicians meeting to shape as one expressing their sensibilities to link to the musical traditions from different parts of the Silk Road.",
	useViewTransitions: true,
	// Your information!
	author: {
		name: "Panjrud Ensemble",
		email: "no-reply@example.com",
		twitter: "",
		facebook: "",
		instagram: "https://www.instagram.com/panjrud_ensemble",
		youtube: "https://www.youtube.com/@PanjrudEnsemble",
	},

	// default image for meta tags if the page doesn't have an image already
	defaultImage: {
		src: "/images/panjrud-ensemble-social.jpg",
		alt: "Panjrud Ensemble",
	},
};

export default siteData;
