/* eslint-disable */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBug, faChartLine, faCompassDrafting, faLaptopCode, faScrewdriverWrench, fas } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";

library.add(fas, faLaptopCode, faBug, faChartLine, faScrewdriverWrench, faCompassDrafting)


export const servicesData = [
    {
        id: 1,
        title: 'Création de Site',
        icon: <FontAwesomeIcon icon={faLaptopCode} />
    },
    {
        id: 2,
        title: 'Debug',
        icon: <FontAwesomeIcon icon={faBug} />
    },
    {
        id: 3,
        title: 'Optimisation',
        icon: <FontAwesomeIcon icon={faChartLine} />
    },
    {
        id: 4,
        title: 'Renovation de Site',
        icon:<FontAwesomeIcon icon={faScrewdriverWrench} />
    },

    {
        id: 5,
        title: 'Web Design',
        icon: <FontAwesomeIcon icon={faCompassDrafting} />
    },
]
