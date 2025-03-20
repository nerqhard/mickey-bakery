import type { Metadata } from 'next';
import { Geist, Geist_Mono, M_PLUS_Rounded_1c } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/theme-provider';
import { NavigationBar } from '@/components/custom/nav-bar';
import Link from 'next/link';
import ClientAnlytic from '@/components/client-analytic';
import { Toaster } from 'sonner';

const geistSans = Geist({
    variable: '--font-geist-sans',
    subsets: ['latin'],
});

const geistMono = Geist_Mono({
    variable: '--font-geist-mono',
    subsets: ['latin'],
});

const mPlusRounded = M_PLUS_Rounded_1c({
    variable: '--font-mplus-rounded',
    subsets: ['latin'],
    weight: ['400', '700', '800'],
});

export const metadata: Metadata = {
    title: 'Mickey | Tiệm bánh kem',
    description:
        'Tiệm bánh kem Mickey tại Cùa, Cam Chính',
    keywords: [
        'Mickey',
        'Tiệm bánh kem',
        'bánh kem',
        'bánh',
        'Cùa',
        'Cam Chính'
    ],
    robots: {
        index: true,
        follow: true,
    },
    icons: {
        icon: '/favicon.ico',
        shortcut: '/favicon-16x16.png',
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body
                className={`${mPlusRounded.variable} ${geistSans.variable} ${geistMono.variable} antialiased`}
            >
                <ThemeProvider
                    defaultTheme="light"
                    enableSystem
                    disableTransitionOnChange
                >
                    <div className="flex justify-center mt-2">
                        <NavigationBar />
                    </div>
                    <div className="relative min-h-screen w-full overflow-hidden bg-background fade-in z-0">
                        {/* Grid overlay */}
                        <div
                            className="absolute inset-0 z-1] "
                            style={{
                                backgroundImage: `
                                    linear-gradient(to right, var(--theme-grid-color) 1px, transparent 1px),
                                    linear-gradient(to bottom, var(--theme-grid-color) 1px, transparent 1px)
                                `,
                                backgroundSize: '32px 32px',
                                backgroundPosition: '0 0',
                            }}
                        />
                        <main className="container mx-auto z-2">{children}</main>
                    </div>

                    <footer className="container mx-auto py-4">
                        <Link
                            href="https://github.com/nerqhard/portfolio"
                            target="_blank"
                        >
                            <p className="text-center text-sm text-muted-foreground transition-all hover:text-white">
                                © Develop by Quang Ha · 2025
                            </p>
                        </Link>
                    </footer>
                </ThemeProvider>
                <Toaster />
                <ClientAnlytic />
            </body>
        </html>
    );
}
