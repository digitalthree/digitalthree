import type { NextApiRequest, NextApiResponse } from 'next'
import {PortfolioItem, portfolioItems} from "../../../data/portfolioItems";
import {ServicesItem, servicesItems} from "../../../data/servicesItems";

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<ServicesItem[]>
) {
    res.status(200).json(servicesItems);
}
