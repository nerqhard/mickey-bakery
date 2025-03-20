'use client';

import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import { scrolltoHash } from '@/utils/utilities';

export function NavigationBar() {
    return (
        <>
            <NavigationMenu
                aria-label="Primary Navigation"
                className="container fixed z-50 min-w-[40%] lg:min-w-[20%] justify-center gap-4 rounded-[4rem] border-b border-border/40 bg-black bg-opacity-10 px-4 py-4 backdrop-blur-lg sm:flex"
            >
                <Avatar
                    className="cursor-pointer"
                    onClick={() => scrolltoHash('hero')}
                >
                    <AvatarImage src="favicon.ico" alt="Mickey" />
                    <AvatarFallback>ET</AvatarFallback>
                </Avatar>
                <NavigationMenuList className="w-full justify-end gap-4">
                    <NavigationMenuItem className="cursor-pointer">
                        <NavigationMenuLink
                            className={navigationMenuTriggerStyle()}
                            onClick={() => scrolltoHash('list-product')}
                            aria-label="Danh sách sản phẩm"
                        >
                            Menu
                        </NavigationMenuLink>
                    </NavigationMenuItem>
                    <NavigationMenuItem className="cursor-pointer">
                        <NavigationMenuLink
                            className={navigationMenuTriggerStyle()}
                            onClick={() => scrolltoHash('about')}
                            aria-label="Thông tin cửa hàng"
                        >
                            Liên hệ
                        </NavigationMenuLink>
                    </NavigationMenuItem>
                </NavigationMenuList>
            </NavigationMenu>

            {/* Button Menu cho mobile */}
            <button
                onClick={() => scrolltoHash('list-product')}
                className="fixed bottom-6 right-6 z-10 flex h-12 w-12 items-center justify-center rounded-full bg-red-500 text-white shadow-lg transition-transform hover:scale-110 sm:hidden"
                aria-label="Menu"
            >
                Menu
            </button>
        </>
    );
}
