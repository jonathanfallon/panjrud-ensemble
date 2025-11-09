export interface navLinkItem {
	text: string;
	link: string;
	newTab?: boolean; // adds target="_blank" rel="noopener noreferrer" to link
}

export interface navDropdownItem {
	text: string;
	dropdown: navLinkItem[];
}

export type navItem = navLinkItem | navDropdownItem;

// note: 1 level of dropdown is supported
const navConfig: navItem[] = [
	{
		text: "The Project",
		link: "/project",
	},
	{
		text: "Shows",
		link: "/#shows",
	},
	{
		text: "Musicians",
		link: "/musicians",
	},
	{
		text: "Videos",
		link: "/videos",
	},
	{
		text: "Infos",
		link: "/infos",
	},
];

export default navConfig;
