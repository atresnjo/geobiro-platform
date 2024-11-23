import {
	CloudLightning,
	Eye,
	FileText,
	Home,
	Layers,
	LucideIcon,
} from "lucide-react";

export const allProjects: Project[] = [
	{
		id: "P001",
		name: "Stockholm Office Complex",
		lat: 59.334591,
		lng: 18.06324,
		lastUpdated: new Date("2023-03-15"),
		cards: [
			{
				title: "2D Drawings",
				icon: Layers,
				items: [{ title: "Floor plans", showView: true, showDownload: true }],
				showPagination: true,
			},
			{
				title: "3D BIM Models",
				icon: Home,
				items: [
					{ title: "IFC Model", showDownload: true },
					{ title: "Revit Model", showDownload: true },
					{ title: "SketchUp Model", showDownload: true },
				],
			},
			{
				title: "Documents",
				icon: FileText,
				items: [
					{ title: "PDF Floor plan", showDownload: true },
					{ title: "PDF Pictures", showDownload: true },
				],
			},
			{
				title: "Indoor Viewer",
				icon: Eye,
				items: [{ title: "Indoor Viewer", showView: true }],
			},
			{
				title: "Point Cloud",
				icon: CloudLightning,
				items: [
					{ title: "LAS Format RGB Point Cloud", showDownload: true },
					{ title: "RCS Format Point Cloud", showDownload: true },
				],
			},
		],
	},
	{
		id: "P002",
		name: "Copenhagen Tech Hub",
		lat: 55.676098,
		lng: 12.568337,
		lastUpdated: new Date("2023-03-15"),
		cards: [
			{
				title: "2D Drawings",
				icon: Layers,
				items: [{ title: "Floor plans", showView: true, showDownload: true }],
				showPagination: true,
			},
			{
				title: "3D BIM Models",
				icon: Home,
				items: [
					{ title: "IFC Model", showDownload: true },
					{ title: "Revit Model", showDownload: true },
				],
			},
			{
				title: "Documents",
				icon: FileText,
				items: [
					{ title: "PDF Floor plan", showDownload: true },
					{ title: "PDF Pictures", showDownload: true },
					{ title: "Project Specifications", showDownload: true },
				],
			},
			{
				title: "Indoor Viewer",
				icon: Eye,
				items: [{ title: "Indoor Viewer", showView: true }],
			},
			{
				title: "Point Cloud",
				icon: CloudLightning,
				items: [{ title: "LAS Format RGB Point Cloud", showDownload: true }],
			},
		],
	},
	{
		id: "P003",
		name: "Helsinki Green Building",
		lat: 60.169857,
		lng: 24.938379,
		lastUpdated: new Date("2023-03-15"),
		cards: [
			{
				title: "2D Drawings",
				icon: Layers,
				items: [
					{ title: "Floor plans", showView: true, showDownload: true },
					{ title: "Elevation drawings", showView: true, showDownload: true },
				],
				showPagination: true,
			},
			{
				title: "3D BIM Models",
				icon: Home,
				items: [
					{ title: "IFC Model", showDownload: true },
					{ title: "Revit Model", showDownload: true },
					{ title: "SketchUp Model", showDownload: true },
					{ title: "Energy Model", showDownload: true },
				],
			},
			{
				title: "Documents",
				icon: FileText,
				items: [
					{ title: "PDF Floor plan", showDownload: true },
					{ title: "PDF Pictures", showDownload: true },
					{ title: "Green Building Certification", showDownload: true },
					{ title: "Energy Efficiency Report", showDownload: true },
				],
			},
			{
				title: "Indoor Viewer",
				icon: Eye,
				items: [{ title: "Indoor Viewer", showView: true }],
			},
			{
				title: "Point Cloud",
				icon: CloudLightning,
				items: [
					{ title: "LAS Format RGB Point Cloud", showDownload: true },
					{ title: "RCS Format Point Cloud", showDownload: true },
				],
			},
		],
	},
];

type CardItem = {
	title: string;
	showView?: boolean;
	showDownload?: boolean;
};

type ProjectCard = {
	title: string;
	icon: LucideIcon;
	items: CardItem[];
	showPagination?: boolean;
};

export type Project = {
	id: string;
	name: string;
	lat: number;
	lng: number;
	lastUpdated: Date;
	cards: ProjectCard[];
};
