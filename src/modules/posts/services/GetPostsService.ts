import Post from '@models/Post';
import { injectable } from 'tsyringe';

@injectable()
class GetPostsService {
  async execute(authorId: String) {
    const posts = await Post.find({
      author: authorId,
    })
      .populate('author')
      .exec();

    return posts;
  }
}

export { GetPostsService };
