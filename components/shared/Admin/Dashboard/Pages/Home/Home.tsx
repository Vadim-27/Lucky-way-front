'use client';
import {
    Accordion,
    AccordionItem,
    AccordionItemButton,
    AccordionItemHeading,
    AccordionItemPanel,
} from 'react-accessible-accordion';
import clsx from 'clsx';

import Form from '@/components/ui/Form';
import Icon from '@/components/ui/Icon';
import { poppins } from '@/constants/fonts';
import filterEmptyFields from '@/helpers/filterEmptyFields';

import Advantages from './Advantages';
import FinesPayment from './FinesPayment';
import Hero from './Hero';
import LowEmissionZone from './LowEmissionZone';
import ServicesHighlights from './ServicesHighlights';
import TollRoads from './TollRoads';

import scss from './Home.module.scss';

interface IHomeData {
    hero?: {
        title?: string;
        description?: string;
        buttonPrimary?: string;
        buttonSecondary?: string;
    };
    serviceHighlights?: {
        title?: string;
        description?: string;
    }[];
    tollRoads?: {
        title?: string;
        description?: string;
    };
    advantages?: {
        title?: string;
        description?: string;
    }[];
    lowEmissionZone?: {
        title?: string;
        description?: string;
    };
    finesPayment?: {
        title?: string;
        description?: string;
        button?: string;
    };
}

const Home = () => {
    const handleSubmit = (data: IHomeData) => {
        const filteredData = filterEmptyFields(data);

        console.log(filteredData);
    };

    return (
        <Form onSubmit={handleSubmit}>
            {(register) => {
                const items = [
                    {
                        heading: 'Hero',
                        content: <Hero<IHomeData> register={register} />,
                    },
                    {
                        heading: 'Services Highlights',
                        content: <ServicesHighlights<IHomeData> register={register} />,
                    },
                    {
                        heading: 'Toll Roads',
                        content: <TollRoads<IHomeData> register={register} />,
                    },
                    {
                        heading: 'Advantages',
                        content: <Advantages<IHomeData> register={register} />,
                    },
                    {
                        heading: 'Low Emission Zone',
                        content: <LowEmissionZone<IHomeData> register={register} />,
                    },
                    {
                        heading: 'Payment of Fines',
                        content: <FinesPayment<IHomeData> register={register} />,
                    },
                ];

                return (
                    <div className={clsx(poppins.className, scss.wrapper)}>
                        <div className={scss.headWrapper}>
                            <h1 className={scss.title}>Home</h1>
                            <button type="submit" className={scss.button}>
                                Save
                            </button>
                        </div>

                        <Accordion allowZeroExpanded>
                            {items.map(({ heading, content }) => (
                                <AccordionItem key={heading}>
                                    <AccordionItemHeading className={scss.accordionItemHeading}>
                                        <AccordionItemButton
                                            className={clsx(
                                                poppins.className,
                                                scss.accordionItemButton
                                            )}
                                        >
                                            <h2>{heading}</h2>
                                            <Icon
                                                variant="chevron-right"
                                                className={scss.chevronIcon}
                                            />
                                        </AccordionItemButton>
                                    </AccordionItemHeading>
                                    <AccordionItemPanel className={scss.accordionItemPanel}>
                                        {content}
                                    </AccordionItemPanel>
                                </AccordionItem>
                            ))}
                        </Accordion>
                    </div>
                );
            }}
        </Form>
    );
};

export default Home;
