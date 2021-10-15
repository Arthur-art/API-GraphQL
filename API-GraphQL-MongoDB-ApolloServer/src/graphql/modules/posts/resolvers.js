import Post from "../../../models/Post"

export default {
    Query:{
        posts: () => Post.find(),
        post: (_,{id}) => Post.findById(id),
    },
    Mutation:{
        createPost: (_,{data}) => Post.create(data),
        updatePost: (_, {id, data}) => Post.findOneAndUpdate(id, data, {new: true}),
        deletePost: async (_, {id}) => {
            const deleted = await Post.findOneAndDelete(id);
            return !!deleted;
        }
    },
}