import { SidebarNav } from "@/components/ui/sidebar-nav";

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="flex h-screen">
      <SidebarNav />
      {children}
    </div>
  );
}