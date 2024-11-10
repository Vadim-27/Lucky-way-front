import Image from 'next/image';

import {
    bus,
    car_1,
    car_2,
    car_3,
    moto,
    truck_1,
    truck_2,
    truck_3,
    truck_4,
    truck_5,
} from '@/public/images/vehicles';

import scss from './VehicleTypesList.module.scss';

const VehicleTypesList = () => {
    const vehicleTypesData = [
        {
            class: 'Class A',
            label: '(less 1,3 m)',
            images: [
                { src: moto, width: moto.width / 2, height: moto.height / 2 },
                { src: car_1, width: car_1.width / 2, height: car_1.height / 2 },
            ],
        },
        {
            class: 'Class B',
            label: '(more 1,3 m)',
            images: [
                { src: car_2, width: car_2.width / 2, height: car_2.height / 2 },
                { src: car_3, width: car_3.width / 2, height: car_3.height / 2 },
            ],
        },
        {
            class: '3 axles',
            images: [
                { src: truck_1, width: truck_1.width / 2, height: truck_1.height / 2 },
                { src: bus, width: bus.width / 2, height: bus.height / 2 },
            ],
        },
        {
            class: '4 axles',
            images: [
                { src: truck_2, width: truck_2.width / 2, height: truck_2.height / 2 },
                { src: truck_3, width: truck_3.width / 2, height: truck_3.height / 2 },
            ],
        },
        {
            class: '5 axles',
            label: '(5 and more axles)',
            images: [
                { src: truck_4, width: truck_4.width / 2, height: truck_4.height / 2 },
                { src: truck_5, width: truck_5.width / 2, height: truck_5.height / 2 },
            ],
        },
    ];

    return (
        <section className={scss.vehicleTypes}>
            <p className={scss.vehicleClass}>Vehicle class</p>

            <ul className={scss.vehicleTypesList}>
                {vehicleTypesData.map(({ class: vehicleClass, label, images }) => (
                    <li key={vehicleClass} className={scss.vehicleTypesItem}>
                        <div className={scss.vehicleInfo}>
                            <p className={scss.vehicleClass}>{vehicleClass}</p>
                            {label && <p className={scss.vehicleLabel}>{label}</p>}
                        </div>
                        <ul className={scss.vehicleImages}>
                            {images.map(({ src, width, height }, index) => (
                                <li key={index} className={scss.vehicleImageItem}>
                                    <Image
                                        src={src}
                                        width={width}
                                        height={height}
                                        alt={vehicleClass}
                                        className={scss.vehicleImage}
                                    />
                                </li>
                            ))}
                        </ul>
                    </li>
                ))}
            </ul>
        </section>
    );
};

export default VehicleTypesList;
