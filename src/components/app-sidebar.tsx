"use client"

import type * as React from "react"
import {
  AudioWaveform,
  Command,
  GalleryVerticalEnd,
  InboxIcon,
  type LucideIcon,
  // biome-ignore lint/suspicious/noShadowRestrictedNames: <explanation>
  Map,
} from "lucide-react"

import { NavMain } from "@/components/nav-main"
import { NavProjects } from "@/components/nav-projects"
import { NavUser } from "@/components/nav-user"
import { TeamSwitcher } from "@/components/team-switcher"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar"

import { Building2, ClipboardList, Users, Shield, Settings, HelpCircle } from 'lucide-react';
import { allProjects } from "@/lib/data"
import type { Path } from "@/router"
type Team = {
  name: string;
  logo: LucideIcon;
  plan: string;
};

type NavItem = {
  title: string;
  url: string | Path;
  icon: LucideIcon;
  badge?: string;
};

type Project = {
  name: string;
  url: string;
  icon: LucideIcon;
};

type AppData = {
  user: {
    name: string;
    email: string;
  };
  teams: Team[];
  navMain: NavItem[];
  projects: Project[];
};


const appData: AppData = {
  user: {
    name: "Max Mustermann",
    email: "max.mustermann@deichmann.de",
  },
  teams: [
    {
      name: "Ochsner",
      logo: GalleryVerticalEnd,
      plan: "Enterprise",
    },
    {
      name: "Dosenbach",
      logo: AudioWaveform,
      plan: "Enterprise",
    },
    {
      name: "vanHaren",
      logo: Command,
      plan: "Enterprise",
    },
  ],
  navMain: [
    {
      title: "Company",
      url: "#",
      icon: Building2,
    },
    {
      title: "Projects",
      url: "/projects" as Path,
      icon: ClipboardList,
    },
    {
      title: "Chat",
      url: "#",
      icon: InboxIcon,
      badge: "10",
    },
    {
      title: "Users",
      url: "#",
      icon: Users,
    },
    {
      title: "Roles",
      url: "#",
      icon: Shield,
    },
    {
      title: "Settings",
      url: "#",
      icon: Settings,
    },
    {
      title: "Help",
      url: "#",
      icon: HelpCircle,
    },
  ],
  projects: allProjects.map((project) => ({
    name: project.name,
    url: `/projects/${project.id}`,
    icon: Map,
  })),
};



export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {


  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher teams={appData.teams} />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={appData.navMain} />
        <NavProjects projects={appData.projects} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={appData.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
