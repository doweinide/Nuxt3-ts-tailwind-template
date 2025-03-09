import request from '../utils/request';
import type { Post } from '../utils/posts';
import type { AxiosResponse } from 'axios';

interface ApiResponse<T> {
  data: T;
  code: number;
  message?: string;
}

export const blogApi = {
  // 获取文章列表
  getPosts(params?: { page?: number; limit?: number; tag?: string }) {
    return request.get<any, Post[]>('/posts', { params });
  },

  // 获取文章详情
  getPost(id: number) {
    return request.get<any, Post>(`/posts/${id}`);
  },

  // 创建文章
  createPost(data: Omit<Post, 'id'>) {
    return request.post<any, Post>('/posts', data);
  },

  // 更新文章
  updatePost(id: number, data: Partial<Post>) {
    return request.put<any, Post>(`/posts/${id}`, data);
  },

  // 删除文章
  deletePost(id: number) {
    return request.delete<any, void>(`/posts/${id}`);
  }
}; 