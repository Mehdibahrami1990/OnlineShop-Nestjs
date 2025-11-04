import { Types } from 'mongoose';
export interface BlogModelProps {
    _id: Types.ObjectId;
    title: string;
    description: string;
}
