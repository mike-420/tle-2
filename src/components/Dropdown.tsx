import { Source_Sans_3 } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const SourceSans = Source_Sans_3({
    subsets: ["latin"],
    weight: ["300", "400", "500", "600", "700"],
});

const Dropdown = () => {
    return (
        <div className="p-10">

            <div className="dropdown inline-block relative">
                <button className="bg-gray-300 text-gray-700 font-semibold py-2 px-4 rounded inline-flex items-center">
                    <span className="mr-1">All Downtown LA Buildings</span>
                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /> </svg>
                </button>
                <ul className="dropdown-menu absolute hidden text-gray-800 pt-1">
                    <li className=""><Link href="https://www.theloftexchange.com/neighborhoods/arts-district/940-e-2nd-st-lofts" className="rounded-t bg-gray-200 hover:bg-gray-700 hover:text-white py-2 px-4 block whitespace-no-wrap">940 E 2nd Street Lofts</Link></li>
                    <li className=""><Link href="https://www.theloftexchange.com/neighborhoods/arts-district/barker-block-lofts" className="rounded-t bg-gray-200 hover:bg-gray-700 hover:text-white py-2 px-4 block whitespace-no-wrap">Barker Block Lofts</Link></li>
                    <li className=""><Link href="https://www.theloftexchange.com/neighborhoods/arts-district/beacon-lofts" className="rounded-t bg-gray-200 hover:bg-gray-700 hover:text-white py-2 px-4 block whitespace-no-wrap">Beacon Lofts</Link></li>
                    <li className=""><Link href="https://www.theloftexchange.com/neighborhoods/arts-district/biscuit-company-lofts" className="rounded-t bg-gray-200 hover:bg-gray-700 hover:text-white py-2 px-4 block whitespace-no-wrap">Biscuit Company Lofts</Link></li>
                    <li className=""><Link href="https://www.theloftexchange.com/neighborhoods/arts-district/gallery-lofts" className="rounded-t bg-gray-200 hover:bg-gray-700 hover:text-white py-2 px-4 block whitespace-no-wrap">Gallery Lofts</Link></li>
                    <li className=""><Link href="https://www.theloftexchange.com/neighborhoods/arts-district/molino-street-lofts" className="rounded-t bg-gray-200 hover:bg-gray-700 hover:text-white py-2 px-4 block whitespace-no-wrap">Molino Street Lofts</Link></li>
                    <li className=""><Link href="https://www.theloftexchange.com/neighborhoods/arts-district/toy-factory-lofts" className="rounded-t bg-gray-200 hover:bg-gray-700 hover:text-white py-2 px-4 block whitespace-no-wrap">Toy Factory Lofts</Link></li>
                    <li className=""><Link href="https://www.theloftexchange.com/neighborhoods/arts-district/toy-warehouse-lofts" className="rounded-t bg-gray-200 hover:bg-gray-700 hover:text-white py-2 px-4 block whitespace-no-wrap">Toy Warehouse Lofts</Link></li>
                    <li className=""><Link href="https://www.theloftexchange.com/neighborhoods/central-city-west/1100-wilshire-lofts" className="rounded-t bg-gray-200 hover:bg-gray-700 hover:text-white py-2 px-4 block whitespace-no-wrap">1100 Wilshire Lofts</Link></li>
                    <li className=""><Link href="https://www.theloftexchange.com/neighborhoods/central-city-west/vero" className="rounded-t bg-gray-200 hover:bg-gray-700 hover:text-white py-2 px-4 block whitespace-no-wrap">Vero Lofts</Link></li>
                    <li className=""><Link href="https://www.theloftexchange.com/neighborhoods/chinatown/957-fig" className="rounded-t bg-gray-200 hover:bg-gray-700 hover:text-white py-2 px-4 block whitespace-no-wrap">957 Fig</Link></li>
                    <li className=""><Link href="https://www.theloftexchange.com/neighborhoods/chinatown/angeleno-heights-condos" className="rounded-t bg-gray-200 hover:bg-gray-700 hover:text-white py-2 px-4 block whitespace-no-wrap">Angeleno Heights Condos</Link></li>
                    <li className=""><Link href="https://www.theloftexchange.com/neighborhoods/chinatown/cathy-village-condos" className="rounded-t bg-gray-200 hover:bg-gray-700 hover:text-white py-2 px-4 block whitespace-no-wrap">Cathy Village Condos</Link></li>
                    <li className=""><Link href="https://www.theloftexchange.com/neighborhoods/chinatown/figueroa-terrace-condos" className="rounded-t bg-gray-200 hover:bg-gray-700 hover:text-white py-2 px-4 block whitespace-no-wrap">Figueroa Terrace Condos</Link></li>
                    <li className=""><Link href="https://www.theloftexchange.com/neighborhoods/chinatown/figueroa-view-condos" className="rounded-t bg-gray-200 hover:bg-gray-700 hover:text-white py-2 px-4 block whitespace-no-wrap">Figueroa View Condos</Link></li>
                    <li className=""><Link href="https://www.theloftexchange.com/neighborhoods/chinatown/grand-condos" className="rounded-t bg-gray-200 hover:bg-gray-700 hover:text-white py-2 px-4 block whitespace-no-wrap">Grand Condos</Link></li>
                    <li className=""><Link href="https://www.theloftexchange.com/neighborhoods/chinatown/the-terrace" className="rounded-t bg-gray-200 hover:bg-gray-700 hover:text-white py-2 px-4 block whitespace-no-wrap">The Terrace</Link></li>
                    <li className=""><Link href="https://www.theloftexchange.com/neighborhoods/bunker-hill/bunker-hill-tower" className="rounded-t bg-gray-200 hover:bg-gray-700 hover:text-white py-2 px-4 block whitespace-no-wrap">Bunker Hill Tower</Link></li>
                    <li className=""><Link href="https://www.theloftexchange.com/neighborhoods/bunker-hill/promenade-west" className="rounded-t bg-gray-200 hover:bg-gray-700 hover:text-white py-2 px-4 block whitespace-no-wrap">Promenade West Condos</Link></li>
                    <li className=""><Link href="https://www.theloftexchange.com/neighborhoods/bunker-hill/the-promenade-condominiums" className="rounded-t bg-gray-200 hover:bg-gray-700 hover:text-white py-2 px-4 block whitespace-no-wrap">The Promenade Condominiums</Link></li>
                    <li className=""><Link href="https://www.theloftexchange.com/neighborhoods/fashion-district/eastern-columbia-lofts" className="rounded-t bg-gray-200 hover:bg-gray-700 hover:text-white py-2 px-4 block whitespace-no-wrap">Eastern Columbia Lofts</Link></li>
                    <li className=""><Link href="https://www.theloftexchange.com/neighborhoods/fashion-district/santee-village-cornell-lofts" className="rounded-t bg-gray-200 hover:bg-gray-700 hover:text-white py-2 px-4 block whitespace-no-wrap">Santee Village - Cornell Lofts</Link></li>
                    <li className=""><Link href="https://www.theloftexchange.com/neighborhoods/fashion-district/santee-village-eckardt-lofts" className="rounded-t bg-gray-200 hover:bg-gray-700 hover:text-white py-2 px-4 block whitespace-no-wrap">Santee Village - Eckardt Lofts</Link></li>
                    <li className=""><Link href="https://www.theloftexchange.com/neighborhoods/fashion-district/santee-village-textile-lofts" className="rounded-t bg-gray-200 hover:bg-gray-700 hover:text-white py-2 px-4 block whitespace-no-wrap">Santee Village - Textile Lofts</Link></li>
                    <li className=""><Link href="https://www.theloftexchange.com/neighborhoods/fashion-district/the-tomahawk-building-lofts" className="rounded-t bg-gray-200 hover:bg-gray-700 hover:text-white py-2 px-4 block whitespace-no-wrap">The Tomahawk Building Lofts</Link></li>
                    <li className=""><Link href="https://www.theloftexchange.com/neighborhoods/financial-district/655-hope-lofts" className="rounded-t bg-gray-200 hover:bg-gray-700 hover:text-white py-2 px-4 block whitespace-no-wrap">655 Hope Lofts</Link></li>
                    <li className=""><Link href="https://www.theloftexchange.com/neighborhoods/financial-district/library-court-lofts" className="rounded-t bg-gray-200 hover:bg-gray-700 hover:text-white py-2 px-4 block whitespace-no-wrap">Library Court Lofts</Link></li>
                    <li className=""><Link href="https://www.theloftexchange.com/neighborhoods/historic-core/bartlett-lofts" className="rounded-t bg-gray-200 hover:bg-gray-700 hover:text-white py-2 px-4 block whitespace-no-wrap">Bartlett Lofts</Link></li>
                    <li className=""><Link href="https://www.theloftexchange.com/neighborhoods/historic-core/douglas-lofts" className="rounded-t bg-gray-200 hover:bg-gray-700 hover:text-white py-2 px-4 block whitespace-no-wrap">Douglas Lofts</Link></li>
                    <li className=""><Link href="https://www.theloftexchange.com/neighborhoods/historic-core/el-dorado-lofts" className="rounded-t bg-gray-200 hover:bg-gray-700 hover:text-white py-2 px-4 block whitespace-no-wrap">El Dorado Lofts</Link></li>
                    <li className=""><Link href="https://www.theloftexchange.com/neighborhoods/historic-core/higgins-lofts" className="rounded-t bg-gray-200 hover:bg-gray-700 hover:text-white py-2 px-4 block whitespace-no-wrap">Higgins Lofts</Link></li>
                    <li className=""><Link href="https://www.theloftexchange.com/neighborhoods/historic-core/the-singer-dtla" className="rounded-t bg-gray-200 hover:bg-gray-700 hover:text-white py-2 px-4 block whitespace-no-wrap">The Singer DTLA Lofts</Link></li>
                    <li className=""><Link href="https://www.theloftexchange.com/neighborhoods/historic-core/pan-american-lofts" className="rounded-t bg-gray-200 hover:bg-gray-700 hover:text-white py-2 px-4 block whitespace-no-wrap">Pan American Lofts</Link></li>
                    <li className=""><Link href="https://www.theloftexchange.com/neighborhoods/historic-core/perla-on-broadway" className="rounded-t bg-gray-200 hover:bg-gray-700 hover:text-white py-2 px-4 block whitespace-no-wrap">Perla on Broadway Lofts</Link></li>
                    <li className=""><Link href="https://www.theloftexchange.com/neighborhoods/historic-core/rowan-lofts" className="rounded-t bg-gray-200 hover:bg-gray-700 hover:text-white py-2 px-4 block whitespace-no-wrap">Rowan Lofts</Link></li>
                    <li className=""><Link href="https://www.theloftexchange.com/neighborhoods/historic-core/sb-grand-lofts" className="rounded-t bg-gray-200 hover:bg-gray-700 hover:text-white py-2 px-4 block whitespace-no-wrap">SB Grand Lofts</Link></li>
                    <li className=""><Link href="https://www.theloftexchange.com/neighborhoods/little-tokyo/little-tokyo-lofts" className="rounded-t bg-gray-200 hover:bg-gray-700 hover:text-white py-2 px-4 block whitespace-no-wrap">Little Tokyo Lofts</Link></li>
                    <li className=""><Link href="https://www.theloftexchange.com/neighborhoods/little-tokyo/mura-condominiums" className="rounded-t bg-gray-200 hover:bg-gray-700 hover:text-white py-2 px-4 block whitespace-no-wrap">Mura Condominiums</Link></li>
                    <li className=""><Link href="https://www.theloftexchange.com/neighborhoods/little-tokyo/savoy-condominiums" className="rounded-t bg-gray-200 hover:bg-gray-700 hover:text-white py-2 px-4 block whitespace-no-wrap">Savoy Condominiums</Link></li>
                    <li className=""><Link href="https://www.theloftexchange.com/neighborhoods/little-tokyo/teramachi" className="rounded-t bg-gray-200 hover:bg-gray-700 hover:text-white py-2 px-4 block whitespace-no-wrap">Teramachi</Link></li>
                    <li className=""><Link href="https://www.theloftexchange.com/neighborhoods/little-tokyo/tokyo-villa-condominiums" className="rounded-t bg-gray-200 hover:bg-gray-700 hover:text-white py-2 px-4 block whitespace-no-wrap">Tokyo Villa Condominiums</Link></li>
                    <li className=""><Link href="https://www.theloftexchange.com/neighborhoods/south-park/ten50-condos" className="rounded-t bg-gray-200 hover:bg-gray-700 hover:text-white py-2 px-4 block whitespace-no-wrap">Ten50 Condos</Link></li>
                    <li className=""><Link href="https://www.theloftexchange.com/neighborhoods/south-park/elleven-lofts" className="rounded-t bg-gray-200 hover:bg-gray-700 hover:text-white py-2 px-4 block whitespace-no-wrap">Elleven Lofts</Link></li>
                    <li className=""><Link href="https://www.theloftexchange.com/neighborhoods/south-park/evo-lofts" className="rounded-t bg-gray-200 hover:bg-gray-700 hover:text-white py-2 px-4 block whitespace-no-wrap">Evo Lofts</Link></li>
                    <li className=""><Link href="https://www.theloftexchange.com/neighborhoods/south-park/grand-lofts" className="rounded-t bg-gray-200 hover:bg-gray-700 hover:text-white py-2 px-4 block whitespace-no-wrap">Grand Lofts</Link></li>
                    <li className=""><Link href="https://www.theloftexchange.com/neighborhoods/south-park/luma-lofts" className="rounded-t bg-gray-200 hover:bg-gray-700 hover:text-white py-2 px-4 block whitespace-no-wrap">Luma Lofts</Link></li>
                    <li className=""><Link href="https://www.theloftexchange.com/neighborhoods/south-park/metropolis" className="rounded-t bg-gray-200 hover:bg-gray-700 hover:text-white py-2 px-4 block whitespace-no-wrap">Metropolis</Link></li>
                    <li className=""><Link href="https://www.theloftexchange.com/neighborhoods/south-park/ritz-carlton" className="rounded-t bg-gray-200 hover:bg-gray-700 hover:text-white py-2 px-4 block whitespace-no-wrap">Ritz Carlton Residences</Link></li>
                    <li className=""><Link href="https://www.theloftexchange.com/neighborhoods/south-park/sky-lofts" className="rounded-t bg-gray-200 hover:bg-gray-700 hover:text-white py-2 px-4 block whitespace-no-wrap">Sky Lofts</Link></li>


                </ul>
            </div>

        </div>
    );
};

export default Dropdown;
