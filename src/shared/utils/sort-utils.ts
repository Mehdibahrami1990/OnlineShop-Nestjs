import { SortOrder } from 'mongoose';
import { Sort } from '../dtos/general-query.dto';

export const sortFunction = (
  sort: Sort | undefined,
): Record<string, SortOrder> => {
  let sortObject: any = {};
  if (sort === Sort.Title) {
    sortObject = { title: 1 };
  } else if (sort === Sort.UpdatedAt) {
    sortObject = { updatedAt: -1 };
  } else if (sort === Sort.LastName) {
    sortObject = { lastName: 1 };
  } else {
    sortObject = { createdAt: -1 };
  }
  // eslint-disable-next-line @typescript-eslint/no-unsafe-return
  return sortObject;
};
