import { SortOrder } from 'mongoose';
import { Sort } from '../dtos/general-query.dto';
export declare const sortFunction: (sort: Sort | undefined) => Record<string, SortOrder>;
