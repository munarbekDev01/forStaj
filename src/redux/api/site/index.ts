
import { api as index } from "..";
const api = index.injectEndpoints({
  endpoints: (build) => ({
    getArticles: build.query<SITE.ArticlesResponse, SITE.ArticlesRequest>({
      query: () => ({
        url: `/articles/`,
        method: "GET",
      }),
      providesTags: ["site"],
    }),
    getArticleWithId: build.query<SITE.ArticlWithIdResponse, SITE.ArticlWithIdRequest>({
      query: (id) => ({
        url: `/articles/${id}/`,
        method: "GET",
      }),
      providesTags: ["site"],
    }),
    getCourses: build.query<SITE.CoursesResponse, SITE.CoursesRequest>({
      query: () => ({
        url: `/courses/`,
        method: "GET",
      }),
      providesTags: ["site"],
    }),
    getCouseWithId: build.query<SITE.CourseWithIdResponse, SITE.CourseWithIdRequest>({
      query: (id) => ({
        url: `/courses/${id}/`,
        method: "GET",
      }),
      providesTags: ["site"],
    }),
    getFreeWorkShops: build.query<SITE.FreeWorkShopsResponse, SITE.FreeWorkShopsRequest>({
      query: () => ({
        url: `/freeworkshops/`,
        method: "GET",
      }),
      providesTags: ["site"],
    }),
    getFreeWorkShopWithId: build.query<SITE.FreeWorkShopWithIdResponse, SITE.FreeWorkShopWithIdRequest>({
      query: (id) => ({
        url: `/freeworkshops/${id}/`,
        method: "GET",
      }),
      providesTags: ["site"],
    }),
    // add'дайте название для функции': build.mutation<>({
    //   query: (data) => ({
    //     url: ``,
    //     method: "POST",
    //     body: data,
    //   }),
    //   invalidatesTags: ["напишите название которое дали как тег"],
    // }),
    // delete'дайте название для функции': build.mutation<>({
    //   query: (_id) => ({
    //     url: `${_id}`,
    //     method: "DELETE",
    //   }),
    //   invalidatesTags: ["напишите название которое дали как тег"],
    // }),
    // Update'дайте название для функции': build.mutation<>({
    //   query: ({ _id, newData }) => ({
    //     url: `${_id}`,
    //     method: "PATCH",
    //     body: newData,
    //   }),
    //   invalidatesTags: ["напишите название которое дали как тег"],
    // }),
  }),
});

export const {useGetArticlesQuery, useGetArticleWithIdQuery, useGetCoursesQuery, useGetCouseWithIdQuery, useGetFreeWorkShopWithIdQuery, useGetFreeWorkShopsQuery} = api;

