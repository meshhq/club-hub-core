import { Types } from 'mongoose';
declare namespace NotificationPreference {
    interface Model {
        _id?: Types.ObjectId;
        userID?: Types.ObjectId;
        clubID?: Types.ObjectId;
        disableAll?: boolean;
        disablePush?: boolean;
        disableEmail?: boolean;
        disableText?: boolean;
    }
    interface GroupModel extends Model {
        userGroupID: Types.ObjectId;
    }
}
export default NotificationPreference;
