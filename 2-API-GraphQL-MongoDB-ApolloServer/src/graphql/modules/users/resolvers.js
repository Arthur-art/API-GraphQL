import User from "../../../models/User"
import {USER_ADDED} from "./channels"

export default {
    Query:{
        users: () => User.find(),
        user: (_,{id}) => User.findById(id),
    },
    Mutation:{
        createUser: async (_,{data}, { pubsub }) =>{
             const user = await User.create(data);
             return user;
            pubsub.publish(USER_ADDED, {
                userAdded: user,
            });
            },
        updateUser: (_, {id, data}) => User.findOneAndUpdate(id, data, {new: true}),
        deleteUser: async (_, {id}) => {
            const deleted = await User.findOneAndDelete(id);
            return !!deleted;
        } 
    },
    Subscription:{
        userAdded:{
            subscribe: (obj, args, {pubsub}) => pubsub.asyncIterator(USER_ADDED),
        },
    }
}