'use client';

import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu } from 'lucide-react';

export function NavigationBar() {
    const scrolltoHash = function (element_id: string) {
        const element = document.getElementById(element_id);
        element?.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
            inline: 'nearest',
        });
    };

    return (
        <>
            <NavigationMenu
                aria-label="Primary Navigation"
                className="fixed container z-50 min-w-[40%] justify-center gap-4 rounded-[4rem] border-b border-border/40 bg-black bg-opacity-10 px-4 py-4 backdrop-blur-lg sm:sticky sm:top-4 sm:flex dark:bg-opacity-20 dark:shadow-2xl dark:shadow-blue-500/[0.1]"
            >
                <Avatar
                    className="cursor-pointer"
                    onClick={() => scrolltoHash('hero')}
                >
                    <AvatarImage
                        src="https://github.com/nerqhard.png"
                        alt="@nerqhard"
                    />
                    <AvatarFallback>ET</AvatarFallback>
                </Avatar>
                <NavigationMenuList className="w-full justify-end gap-4">
                    <NavigationMenuItem className="cursor-pointer">
                        <NavigationMenuLink
                            className={navigationMenuTriggerStyle()}
                            onClick={() => scrolltoHash('experiences')}
                            aria-label="Experiences"
                        >
                            Menu
                        </NavigationMenuLink>
                    </NavigationMenuItem>
                    <NavigationMenuItem className="cursor-pointer">
                        <NavigationMenuLink
                            className={navigationMenuTriggerStyle()}
                            onClick={() => scrolltoHash('skills')}
                            aria-label="Skills"
                        >
                            Liên hệ
                        </NavigationMenuLink>
                    </NavigationMenuItem>
                </NavigationMenuList>
            </NavigationMenu>
        </>
    );
}
