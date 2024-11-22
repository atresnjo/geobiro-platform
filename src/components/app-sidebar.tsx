"use client"

import * as React from "react"
import {
  AudioWaveform,
  Command,
  Frame,
  GalleryVerticalEnd,
  Map,
  PieChart,
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


const data = {
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
      url: "#",
      icon: ClipboardList,
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
  projects: [
    {
      name: "Stora Frösunda 3",
      url: "#",
      icon: Frame,
    },
    {
      name: "Stora Frösunda 1",
      url: "#",
      icon: PieChart,
    },
    {
      name: "Stora Frösunda 2",
      url: "#",
      icon: Map,
    },
  ],
}



export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher teams={data.teams} />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavProjects projects={data.projects} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
