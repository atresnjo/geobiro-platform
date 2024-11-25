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
		name: "Riedstadt_MYS",
		lat: 51.1236094,
		lng: 8.0542568,
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
					{ title: "IFC Model", showDownload: true, showView: true },
					{ title: "Revit Model", showDownload: true, showView: true },
					{ title: "SketchUp Model", showDownload: true, showView: true },
				],
			},
			{
				title: "Documents",
				icon: FileText,
				items: [
					{ title: "PDF Floor plan", showDownload: true, showView: true },
					{ title: "PDF Pictures", showDownload: true, showView: true },
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
		name: "Ansbach",
		lat: 50.8217822,
		lng: 7.375857,
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
					{ title: "IFC Model", showDownload: true, showView: true },
					{ title: "Revit Model", showDownload: true, showView: true },
				],
			},
			{
				title: "Documents",
				icon: FileText,
				items: [
					{ title: "PDF Floor plan", showDownload: true, showView: true },
					{ title: "PDF Pictures", showDownload: true, showView: true },
					{
						title: "Project Specifications",
						showDownload: true,
						showView: true,
					},
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
		name: "Rastatt, Schloss-Galerie",
		lat: 52.3955476,
		lng: 9.7225516,
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
					{ title: "IFC Model", showDownload: true, showView: true },
					{ title: "Revit Model", showDownload: true, showView: true },
					{ title: "SketchUp Model", showDownload: true, showView: true },
					{ title: "Energy Model", showDownload: true, showView: true },
				],
			},
			{
				title: "Documents",
				icon: FileText,
				items: [
					{ title: "PDF Floor plan", showDownload: true, showView: true },
					{ title: "PDF Pictures", showDownload: true, showView: true },
					{
						title: "Green Building Certification",
						showDownload: true,
						showView: true,
					},
					{
						title: "Energy Efficiency Report",
						showDownload: true,
						showView: true,
					},
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
		id: "P004",
		name: "Marburg-Wehrda",
		lat: 51.5504139,
		lng: 8.1615559,
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
					{ title: "IFC Model", showDownload: true, showView: true },
					{ title: "Revit Model", showDownload: true, showView: true },
				],
			},
			{
				title: "Documents",
				icon: FileText,
				items: [
					{ title: "PDF Floor plan", showDownload: true, showView: true },
					{ title: "PDF Pictures", showDownload: true, showView: true },
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
		id: "P005",
		name: "Korbach",
		lat: 51.8386644,
		lng: 8.359923,
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
					{ title: "IFC Model", showDownload: true, showView: true },
					{ title: "Revit Model", showDownload: true, showView: true },
				],
			},
			{
				title: "Documents",
				icon: FileText,
				items: [
					{ title: "PDF Floor plan", showDownload: true, showView: true },
					{ title: "PDF Pictures", showDownload: true, showView: true },
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
		id: "P006",
		name: "Heiligenstadt",
		lat: 51.379007,
		lng: 10.1295884,
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
					{ title: "IFC Model", showDownload: true, showView: true },
					{ title: "Revit Model", showDownload: true, showView: true },
				],
			},
			{
				title: "Documents",
				icon: FileText,
				items: [
					{ title: "PDF Floor plan", showDownload: true, showView: true },
					{ title: "PDF Pictures", showDownload: true, showView: true },
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
