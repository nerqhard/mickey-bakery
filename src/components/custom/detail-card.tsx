'use client';
import Image from 'next/image';
import React, { useEffect, useId, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { useOutsideClick } from '@/hooks/useOutsideClick';

export function DetailCard({ cards }: { cards: any[] }) {
    const [active, setActive] = useState<
        (typeof cards)[number] | boolean | null
    >(null);
    const ref = useRef<HTMLDivElement | null>(null);
    const id = useId();

    useEffect(() => {
        function onKeyDown(event: KeyboardEvent) {
            if (event.key === 'Escape') {
                setActive(false);
            }
        }

        if (active && typeof active === 'object') {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }

        window.addEventListener('keydown', onKeyDown);
        return () => window.removeEventListener('keydown', onKeyDown);
    }, [active]);

    useOutsideClick(ref, () => setActive(null));

    const formatPrice = (price: number) => {
        return new Intl.NumberFormat('vi-VN', {
            style: 'currency',
            currency: 'VND',
            minimumFractionDigits: 0,
            maximumFractionDigits: 0,
        }).format(price);
    };

    return (
        <>
            <AnimatePresence>
                {active && typeof active === 'object' && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-10 h-full w-full bg-black/20"
                    />
                )}
            </AnimatePresence>
            <AnimatePresence>
                {active && typeof active === 'object' ? (
                    <div className="fixed inset-0 z-[100] grid place-items-center">
                        <motion.button
                            key={`button-${active.title}-${id}`}
                            layout
                            initial={{
                                opacity: 0,
                            }}
                            animate={{
                                opacity: 1,
                            }}
                            exit={{
                                opacity: 0,
                                transition: {
                                    duration: 0.05,
                                },
                            }}
                            className="absolute right-2 top-2 flex h-6 w-6 items-center justify-center rounded-full bg-white lg:hidden"
                            onClick={() => setActive(null)}
                        >
                            <CloseIcon />
                        </motion.button>
                        <motion.div
                            layoutId={`card-${active.title}-${id}`}
                            ref={ref}
                            className="flex h-full w-full max-w-[500px] flex-col overflow-hidden bg-white sm:rounded-3xl md:h-fit md:max-h-[90%] dark:bg-neutral-900"
                        >
                            <motion.div
                                layoutId={`image-${active.title}-${id}`}
                            >
                                <Image
                                    priority
                                    width={200}
                                    height={200}
                                    src={active.src}
                                    alt={active.title}
                                    className="h-80 w-full object-cover object-top sm:rounded-tl-lg sm:rounded-tr-lg lg:h-80"
                                />
                            </motion.div>

                            <div>
                                <div className="flex items-start justify-between p-4">
                                    <div className="">
                                        <motion.h3
                                            layoutId={`title-${active.title}-${id}`}
                                            className="font-bold text-neutral-700 dark:text-neutral-200"
                                        >
                                            {active.title}
                                        </motion.h3>
                                        <motion.p
                                            layoutId={`description-${active.description}-${id}`}
                                            className="text-neutral-600 dark:text-neutral-400"
                                        >
                                            {active.description}
                                        </motion.p>
                                    </div>

                                    <motion.a
                                        layoutId={`button-${active.title}-${id}`}
                                        onClick={() => setActive(null)}
                                        target="_blank"
                                        className="rounded-full bg-green-500 px-4 py-3 text-sm font-bold text-white"
                                    >
                                        Đóng
                                    </motion.a>
                                </div>
                                <div className="relative px-4 pt-4">
                                    <motion.div
                                        layout
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        className="flex h-40 flex-col items-start gap-4 overflow-hidden pb-10 text-xs text-neutral-600 [-ms-overflow-style:none] [-webkit-overflow-scrolling:touch] [mask:linear-gradient(to_bottom,white,white,transparent)] [scrollbar-width:none] md:h-fit md:text-sm lg:text-base dark:text-neutral-400"
                                    >
                                        {active.content}
                                    </motion.div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                ) : null}
            </AnimatePresence>
            <ul className="mx-auto flex w-full max-w-2xl flex-wrap gap-2">
                {cards.map((card, index) => (
                    <motion.div
                        layoutId={`card-${card.title}-${id}`}
                        key={`card-${card.title}-${id}`}
                        onClick={() => setActive(card)}
                        className="flex min-w-24 max-w-24 cursor-pointer flex-col items-center justify-between rounded-xl border border-neutral-200 bg-white p-4 shadow-sm hover:bg-neutral-50 hover:shadow-md md:flex-row dark:border-neutral-700 dark:hover:bg-neutral-800"
                    >
                        <div className="flex flex-col gap-2 md:flex-row">
                            <motion.div layoutId={`image-${card.title}-${id}`}>
                                <Image
                                    width={100}
                                    height={100}
                                    src={card.src}
                                    alt={card.title}
                                    className="h-30 w-30 rounded-lg object-cover object-top md:h-14 md:w-14"
                                />
                            </motion.div>
                            {/* <div className="">
                                <motion.h4
                                    layoutId={`title-${card.title}-${id}`}
                                    className="text-center text-sm font-medium text-neutral-800 md:text-left dark:text-neutral-200"
                                >
                                    {card.title}
                                </motion.h4>
                            </div> */}
                        </div>
                        <motion.button
                            layoutId={`button-${card.title}-${id}`}
                            className="mt-1 rounded-xl bg-green-100 px-2 py-1 text-[0.6rem] md:text-xs font-bold text-black hover:bg-green-500 hover:text-white md:mt-0 whitespace-nowrap"
                        >
                            {formatPrice(card.price)}
                        </motion.button>
                    </motion.div>
                ))}
            </ul>
        </>
    );
}

export const CloseIcon = () => {
    return (
        <motion.svg
            initial={{
                opacity: 0,
            }}
            animate={{
                opacity: 1,
            }}
            exit={{
                opacity: 0,
                transition: {
                    duration: 0.05,
                },
            }}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-4 w-4 text-black"
        >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M18 6l-12 12" />
            <path d="M6 6l12 12" />
        </motion.svg>
    );
};
