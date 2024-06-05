
"use client";

import { Accordion } from "flowbite-react";

export function FoodAccordian() {
    return (
        <Accordion collapseAll>
            <Accordion.Panel>
                <Accordion.Title>三枚肉 Sanmainiku</Accordion.Title>
                <Accordion.Content>
                    <p className="mb-8 text-gray-500 dark:text-gray-400">
                        Braised Pork Belly
                    </p>
                </Accordion.Content>
            </Accordion.Panel>
            <Accordion.Panel>
                <Accordion.Title>ソーキ Soki</Accordion.Title>
                <Accordion.Content>
                    <p className="mb-8 text-gray-500 dark:text-gray-400">
                    Stewed Pork Rib (with cartilage)
                    </p>
                </Accordion.Content>
            </Accordion.Panel>
            <Accordion.Panel>
                <Accordion.Title>チャンプル Champuru</Accordion.Title>
                <Accordion.Content>
                    <p className="mb-8 text-gray-500 dark:text-gray-400">
                        Okinawa Style Stir-Fry
                    </p>
                </Accordion.Content>
            </Accordion.Panel>
            <Accordion.Panel>
                <Accordion.Title>ゴーヤ Goya</Accordion.Title>
                <Accordion.Content>
                    <p className="mb-8 text-gray-500 dark:text-gray-400">
                    Bittermelon, One of many Superfoods of Okinawa
                    </p>
                </Accordion.Content>
            </Accordion.Panel>
            <Accordion.Panel>
                <Accordion.Title>中味 Nakami</Accordion.Title>
                <Accordion.Content>
                    <p className="mb-1 text-gray-500 dark:text-gray-400">
                        Pork Innards
                    </p>
                </Accordion.Content>
            </Accordion.Panel>
        </Accordion>
    );
}
export default FoodAccordian;