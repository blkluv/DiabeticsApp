'use client';
import { NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu";
import { NavigationMenu } from "@radix-ui/react-navigation-menu";
interface PageTabsComponentProps {
    id: number;
}

export default function PageTabsComponent({} : PageTabsComponentProps) {


  
  return (
    <div>
        <NavigationMenu>
  <NavigationMenuList>
    <NavigationMenuItem>
        <NavigationMenuLink>Menu</NavigationMenuLink>
    </NavigationMenuItem>
    <NavigationMenuItem>
        <NavigationMenuLink>Search</NavigationMenuLink>
    </NavigationMenuItem>
    <NavigationMenuItem>
        <NavigationMenuLink>Logs</NavigationMenuLink>
    </NavigationMenuItem>
  </NavigationMenuList>
</NavigationMenu>
    </div>
  );
}
