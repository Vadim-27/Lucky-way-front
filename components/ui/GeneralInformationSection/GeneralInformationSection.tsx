'use client';
import { useState } from 'react';

import Container from '../Container';
import Icon from '../Icon';

import css from './GeneralInformationSection.module.scss';

interface AccordionItem {
    id: number;
    title: string;
    info: string;
}
interface GeneralInformationSectionData {
    id: number;
    namePage: string;
    title: string;
    description: string;
    accordion: AccordionItem[];
}

interface GeneralInformationSectionProps {
    sectionData: GeneralInformationSectionData;
}

const GeneralInformationSection: React.FC<GeneralInformationSectionProps> = ({ sectionData }) => {
    const [openItems, setOpenItems] = useState<{ [key: number]: boolean }>({});
    const toggleItem = (id: number) => {
        setOpenItems((prev) => ({
            ...prev,
            [id]: !prev[id],
        }));
    };

    return (
        <Container>
            <section className={css.wrapperSection}>
                <h2 className={css.titleSection}>{sectionData.title}</h2>
                <p className={css.descriptionSection}>{sectionData.description}</p>
                <ul className={css.accordionList}>
                    {sectionData.accordion.map(({ id, title, info }) => {
                        return (
                            <li className={css.itemAccordion} key={id}>
                                <div className={css.accordionHeader} onClick={() => toggleItem(id)}>
                                    <h4 className={css.accordionTitle}>{title}</h4>
                                    <button
                                        className={`${css.accordionBtn} ${openItems[id] ? css.active : ''}`}
                                    >
                                        <Icon variant={openItems[id] ? 'plus' : 'x'} />
                                        {/* <Icon variant= 'plus' /> */}
                                    </button>
                                </div>
                                <div
                                    className={`${css.accordionInfoWrapper} ${
                                        openItems[id] ? css.accordionInfoOpen : ''
                                    }`}
                                >
                                    <p className={css.accordionInfoText}>{info}</p>
                                </div>
                            </li>
                        );
                    })}
                </ul>
            </section>
        </Container>
    );
};

export default GeneralInformationSection;
