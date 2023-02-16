import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://my.api.com/api' }),
  endpoints: builder => ({
    fetchUserPhotos: builder.query({
      query: () => '/users'
    }),
    updateComment: builder.mutation({
      query: payload => ({
        url: '/users',
        method: 'POST',
        body: payload
      })
    })
  })
})

export const {
  useFetchUserPhotosQuery,
  useUpdateCommentMutation
} = apiSlice