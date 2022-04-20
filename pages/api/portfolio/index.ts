import type { NextApiRequest, NextApiResponse } from 'next'
import {PortfolioItem, portfolioItems} from "../../../data/portfolioItems";

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<PortfolioItem[]>
) {
    res.status(200).json(portfolioItems);
}
