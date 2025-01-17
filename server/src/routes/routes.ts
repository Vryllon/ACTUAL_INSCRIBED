import express from 'express';
import getUserInfoController from '../controllers/getUserInfoController';
import isLoggedIn from '../middleware/isLoggedIn';
import { validateRequestInput } from '../middleware/validateInput';
import { UpdateUserProfileSchema } from '../validationSchemas/updateUserProfileSchema';
import updateUserProfileController from '../controllers/updateUserProfileController';
import followUserController from '../controllers/auth/followUserController';
import unfollowUserController from '../controllers/unfollowUserController';
import getFollowersController from '../controllers/getFollowersController';
import getFollowingController from '../controllers/auth/getFollowingController';
import { CreatePostSchema } from '../validationSchemas/createPostSchema';
import createPostController from '../controllers/createPostController';
import getUserPostsController from '../controllers/getUserPostsController';
import getPostController from '../controllers/getPostController';
import deletePostController from '../controllers/deletePostController';
import likePostController from '../controllers/likePostController';
import unlikePostController from '../controllers/unlikePostController';
import createCommentController from '../controllers/createCommentController';
import { CreateCommentSchema } from '../validationSchemas/createCommentSchema';
import getPostComments from '../controllers/getPostComments';
import deleteCommentController from '../controllers/deleteCommentController';
import getForYouFeedController from '../controllers/getForYouFeedController';
import getDiscoverFeedController from '../controllers/getDiscoverFeedController';
import deleteAccountController from '../controllers/deleteAccountController';
import searchController from '../controllers/searchController';
const router = express.Router();

router.get('/users/for-you-feed', isLoggedIn, getForYouFeedController);
router.get('/users/discover-feed', getDiscoverFeedController);

router.get('/users/:userId', getUserInfoController);
router.delete('/users/:userId/delete', isLoggedIn, deleteAccountController);
router.put('/users/:userId', isLoggedIn, validateRequestInput(UpdateUserProfileSchema), updateUserProfileController);
router.post('/users/:userId/follow', isLoggedIn, followUserController);
router.post('/users/:userId/unfollow', isLoggedIn, unfollowUserController);
router.get('/users/:userId/followers', getFollowersController);
router.get('/users/:userId/following', getFollowingController);
router.post('/post', isLoggedIn, validateRequestInput(CreatePostSchema), createPostController);
router.get('/users/:userId/posts', getUserPostsController);
router.get('/posts/:postId', getPostController);
router.delete('/posts/:postId', isLoggedIn, deletePostController);
router.post('/posts/:postId/like', isLoggedIn, likePostController);
router.post('/posts/:postId/unlike', isLoggedIn, unlikePostController);
router.post('/posts/:postId/comment', isLoggedIn, validateRequestInput(CreateCommentSchema), createCommentController);
router.get('/posts/:postId/comments', getPostComments);
router.delete('/posts/:postId/comment/:commentId', isLoggedIn, deleteCommentController);
router.post('/search', searchController);

export default router;