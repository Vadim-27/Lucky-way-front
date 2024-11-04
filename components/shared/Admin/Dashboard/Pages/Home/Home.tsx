'use client';
import {
    Accordion,
    AccordionItem,
    AccordionItemButton,
    AccordionItemHeading,
    AccordionItemPanel,
} from 'react-accessible-accordion';
import clsx from 'clsx';

import Icon from '@/components/ui/Icon';
import { poppins } from '@/constants/fonts';

import Advantages from './Advantages';
import FinesPayment from './FinesPayment';
import Hero from './Hero';
import LowEmissionZone from './LowEmissionZone';
import ServicesHighlights from './ServicesHighlights';
import TollRoads from './TollRoads';

import scss from './Home.module.scss';

const Home = () => {
    const items = [
        {
            heading: 'Hero',
            content: <Hero />,
        },
        {
            heading: 'Services Highlights',
            content: <ServicesHighlights />,
        },
        {
            heading: 'Toll Roads',
            content: <TollRoads />,
        },
        {
            heading: 'Advantages',
            content: <Advantages />,
        },
        {
            heading: 'Low Emission Zone',
            content: <LowEmissionZone />,
        },
        {
            heading: 'Payment of Fines',
            content: <FinesPayment />,
        },
    ];

    return (
        <section>
            <div className={clsx(poppins.className, scss.wrapper)}>
                <h1 className={scss.title}>Home</h1>

                <Accordion allowZeroExpanded>
                    {items.map(({ heading, content }) => (
                        <AccordionItem key={heading}>
                            <AccordionItemHeading className={scss.accordionItemHeading}>
                                <AccordionItemButton
                                    className={clsx(poppins.className, scss.accordionItemButton)}
                                >
                                    <h2>{heading}</h2>
                                    <Icon variant="chevron-right" className={scss.chevronIcon} />
                                </AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel className={scss.accordionItemPanel}>
                                {content}
                            </AccordionItemPanel>
                        </AccordionItem>
                    ))}
                </Accordion>
            </div>
        </section>
    );
};

export default Home;
