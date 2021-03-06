import { AxiosInstance } from 'apis';
import { UserStateProps } from 'store/user/reducer';
import { ArticleEntityStateProps } from 'store/article/reducer';

export interface ArticleDto {
  id?: number;
  title: string;
  description: string;
  lat: number;
  lng: number;
  writer: UserStateProps;
  address: string;
  media_contents?: ArticleFileDto[];
  created_at?: string;
  like_count?: number;
  comment_count?: number;
  like_users?: number[];
  distance?: number;
}

export interface PostArticleDto {
  id?: number;
  title: string;
  description: string;
  lat: number;
  lng: number;
  file_ids?: number[];
  address: string;
}

export interface ArticleFileDto {
  id?: number;
  file: string;
}

export const getArticles = (writerId?: number) =>
  AxiosInstance.get<ArticleDto[]>(
    writerId
      ? `/api/v1/articles?writer_id=${writerId}&lat=37.574515&lng=126.976930`
      : '/api/v1/articles?lat=37.574515&lng=126.976930',
  ).then((res): ArticleEntityStateProps[] => {
    return res.data.map((dto) => {
      return {
        id: dto.id!,
        title: dto.title,
        description: dto.description,
        lat: dto.lat,
        lng: dto.lng,
        writer: dto.writer,
        like_count: dto.like_count,
        comment_count: dto.comment_count,
        files: dto.media_contents!.map((content) => {
          return { id: content.id!, file: content.file };
        }),
        distance: parseInt(dto.distance + '', 10),
      };
    });
  });

export interface CommentDto {
  id?: number;
  article: number;
  commenter?: string;
  content: string;
  commenter_profile?: string;
}

export interface ArticleDetailDto extends ArticleDto {
  comments: CommentDto[];
}

const getArticleDetail = (id: number) => {
  return AxiosInstance.get<ArticleDetailDto>(`/api/v1/articles/${id}`);
};

const postArticleComment = (comment: CommentDto) => {
  return AxiosInstance.post(`/api/v1/comment`, { ...comment });
};

const postFile = (file: File) => {
  console.log('zzz', file);
  const formData = new FormData();
  formData.append('file', file);
  return AxiosInstance.post(`/api/v1/files`, formData, {
    headers: { 'Content-Type': 'multipart/form-data' },
  });
};

const postArticle = (article: PostArticleDto) => {
  return AxiosInstance.post(`/api/v1/articles`, { ...article });
};

export interface LikeArticle {
  article: number;
  liker: number;
}

const likeArticle = (likeData: LikeArticle) => {
  return AxiosInstance.post(`/api/v1/like`, { ...likeData });
};

export default {
  getArticles,
  getArticleDetail,
  postArticleComment,
  postFile,
  postArticle,
  likeArticle,
};
