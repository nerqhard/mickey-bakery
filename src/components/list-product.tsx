'use client';

import Image from 'next/image';
import { Reveal } from './custom/reveal';
import { DetailCard } from '@/components/custom/detail-card';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

interface Card {
    description: string;
    title: string;
    src: string;
    ctaLink: string;
    content: string;
}

interface Category {
    id: string;
    name: string;
    cards: Card[];
}

interface CategoriesData {
    categories: Category[];
}

const ListProduct = () => {
    const [categories, setCategories] = useState<Category[]>([]);
    const [currentTab, setCurrentTab] = useState<string>('');

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const response = await fetch('/data/categories.json');
                const data: CategoriesData = await response.json();
                setCategories(data.categories);
                setCurrentTab(data.categories[0].id);
            } catch (error) {
                console.error('Error fetching categories:', error);
            }
        };

        fetchCategories();
    }, []);

    return (
        <section className="flex flex-col items-center justify-center gap-4 py-16 sm:py-32">
            <Reveal
                initial={{ opacity: 0, x: 50 }}
                whileInView={{
                    opacity: 1,
                    x: 0,
                    transition: { duration: 0.4 },
                }}
                className="flex flex-col items-center justify-center gap-4"
            >
                <h2
                    id="list-product"
                    className="scroll-m-20 pt-6 font-mplus-rounded text-3xl font-extrabold tracking-tight lg:text-4xl"
                >
                    Danh sách sản phẩm
                </h2>
                <p className="text-center leading-7 text-black">
                    Tất cả sản phẩm của cửa hàng sẽ được hiển thị tại đây 👇
                </p>
            </Reveal>

            <Tabs value={currentTab} className="w-full">
                <TabsList className="mb-8 grid w-full grid-cols-3 gap-2 bg-transparent">
                    {categories.map((category) => (
                        <TabsTrigger
                            key={category.id}
                            value={category.id}
                            onClick={() => setCurrentTab(category.id)}
                            className="rounded-lg bg-gray-300 px-4 py-2 text-black transition-colors hover:bg-gray-400 data-[state=active]:bg-primary data-[state=active]:text-white"
                        >
                            <motion.span
                                initial={{ opacity: 0, y: 5 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }}
                                className="whitespace-nowrap text-sm font-medium"
                            >
                                {category.name}
                            </motion.span>
                        </TabsTrigger>
                    ))}
                </TabsList>

                {categories.map((category) => (
                    <TabsContent key={category.id} value={category.id}>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.3 }}
                            className="grid grid-cols-1 items-start gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5"
                        >
                            <div className="flex flex-col flex-wrap justify-center gap-4">
                                <DetailCard cards={category.cards} />
                            </div>
                        </motion.div>
                    </TabsContent>
                ))}
            </Tabs>
        </section>
    );
};

export default ListProduct;
